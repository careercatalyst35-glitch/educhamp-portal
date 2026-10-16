const { generateWithRole } = require('./providerService');
const { runAllQualityGates, logRejection } = require('./qualityGates');
const { getNextUnusedArchetype, updateArchetypeStatus, recordArchetypeFailure, getUnusedCount } = require('./conceptBankService');
const { expandChapterConceptBank } = require('./conceptExpander');
const { computeQuestionHash, computeQuestionSkeleton } = require('./dedupEngine');
const fs = require('fs');
const path = require('path');

// Global job state for pause & resume
let currentJobState = {
  jobId: null,
  status: 'idle', // 'idle' | 'running' | 'paused' | 'completed'
  progress: 0,
  requestedCount: 0,
  generatedCount: 0,
  savedQuestions: [],
  pauseReason: null,
  chapter: null,
  lastUpdated: null
};

function getJobState() {
  return currentJobState;
}

/**
 * Olympiad Question Generation Pipeline
 * Enforces Part 1 (Three-level concept bank), Part 2 (Expander), Part 3 (8 Quality Gates),
 * and Part 4 (Sequential single-question generation with pause/resume).
 */
async function generateOlympiadQuestionsPipeline(options, existingQuestions = [], progressCallback = null) {
  const {
    chapter = 'Circles',
    hardness = 'Hard (Olympiad)',
    requestedCount = 1,
    className = 'Class 10',
    subjectName = 'Mathematics',
    sectionName = 'Section A'
  } = options;

  currentJobState = {
    jobId: 'JOB-' + Date.now(),
    status: 'running',
    progress: 0,
    requestedCount,
    generatedCount: 0,
    savedQuestions: [],
    pauseReason: null,
    chapter,
    lastUpdated: new Date().toISOString()
  };

  const cumulativeQuestions = [...existingQuestions];
  const usedArchetypeIds = new Set(existingQuestions.map(q => q.archetype_id).filter(Boolean));
  const currentRunArchetypes = new Set();
  const generatedQuestions = [];
  const rejectedReport = [];

  // Check if unused concepts drop below threshold (10); auto-refill if needed
  const unusedBefore = getUnusedCount(chapter);
  if (unusedBefore < 10) {
    console.log(`[Pipeline] Unused archetypes for "${chapter}" (${unusedBefore}) < 10. Triggering auto-refill...`);
    try {
      await expandChapterConceptBank(chapter, 160);
    } catch (e) {
      console.warn(`[Pipeline] Auto-refill note: ${e.message}`);
    }
  }

  for (let qIndex = 0; qIndex < requestedCount; qIndex++) {
    let accepted = null;
    let retries = 0;
    const maxRetries = 5;

    while (retries < maxRetries && !accepted) {
      // a. Pick next unused Level-3 archetype
      const archetype = getNextUnusedArchetype(chapter);
      if (!archetype) {
        console.warn(`[Pipeline] All Level-3 archetypes for chapter "${chapter}" consumed.`);
        break;
      }

      currentRunArchetypes.add(archetype.id);

      // b. Prompt the Generator model (qwen2.5:7b)
      const prompt = `You are a Senior Olympiad Math Problem Author.
Create one original, mathematically rigorous Olympiad Multiple Choice Question (MCQ).

TARGET CURRICULUM:
- Chapter: ${chapter}
- Theorem / Idea (Level 1): ${archetype.concept_name || 'Circle Geometry'}
- Technique (Level 2): ${archetype.technique_name || 'Geometric Theorem Application'}
- Specific Problem Archetype (Level 3): ${archetype.title}
- Archetype Goal: ${archetype.description}
- Difficulty: ${hardness} (Level ${archetype.difficulty || 4}/5)
- Preferred Source Style: ${archetype.source_hint || 'Regional / National Olympiad'}

STRICT RULES:
1. Provide realistic integer or clean radical numbers.
2. Provide exactly 4 options labeled A, B, C, D. All 4 options MUST be distinct and mathematically plausible.
3. Exactly ONE option must be mathematically correct.
4. Provide a step-by-step rigorous proof/explanation showing the exact formulas and arithmetic.
5. If geometry values are given (e.g. PT = 18 cm, PA = 6 cm), state them explicitly in the question.

Output strict JSON:
{
  "question": "Full problem statement with numerical values",
  "options": [
    { "key": "A", "text": "Value A" },
    { "key": "B", "text": "Value B" },
    { "key": "C", "text": "Value C" },
    { "key": "D", "text": "Value D" }
  ],
  "correct_option": "A" | "B" | "C" | "D",
  "explanation": "Step-by-step mathematical proof",
  "source_name": "e.g. American Mathematics Competitions (AMC 12) or Regional Mathematical Olympiad (RMO)",
  "source_year": "2018"
}`;

      let rawCandidate = null;
      try {
        const genRes = await generateWithRole('generator', prompt, '{"question": "...", "options": []}');
        rawCandidate = genRes.data;
      } catch (err) {
        if (err.isOllamaPause) {
          // Pause job, save checkpoint, do NOT generate low-quality templates!
          currentJobState.status = 'paused';
          currentJobState.pauseReason = err.message;
          currentJobState.lastUpdated = new Date().toISOString();
          console.warn(`[Pipeline] Job PAUSED: ${err.message}`);
          return {
            status: 'paused',
            message: err.message,
            jobState: currentJobState,
            generated: generatedQuestions
          };
        }
        retries++;
        continue;
      }

      if (!rawCandidate || !rawCandidate.question || !rawCandidate.options) {
        retries++;
        continue;
      }

      const candidate = {
        question: rawCandidate.question,
        options: rawCandidate.options,
        correct: rawCandidate.correct_option || rawCandidate.correct,
        correct_option: rawCandidate.correct_option || rawCandidate.correct,
        explanation: rawCandidate.explanation || '',
        archetype_id: archetype.id,
        concept_tag: archetype.concept_tag,
        concept_name: archetype.title,
        level1_concept: archetype.concept_name,
        level2_technique: archetype.technique_name,
        source_name: rawCandidate.source_name || null,
        source_year: rawCandidate.source_year || null,
        hardness,
        className,
        subjectName,
        sectionName,
        chapter
      };

      // c. Run all 8 Quality Gates
      let gateResult;
      try {
        gateResult = await runAllQualityGates(candidate, cumulativeQuestions, usedArchetypeIds, currentRunArchetypes);
      } catch (gateErr) {
        if (gateErr.isOllamaPause) {
          currentJobState.status = 'paused';
          currentJobState.pauseReason = gateErr.message;
          return {
            status: 'paused',
            message: gateErr.message,
            jobState: currentJobState,
            generated: generatedQuestions
          };
        }
        throw gateErr;
      }

      if (!gateResult.passed) {
        rejectedReport.push({
          archetype: archetype.title,
          gate: gateResult.gateFailed,
          reason: gateResult.reason
        });
        recordArchetypeFailure(archetype.id);
        retries++;
        continue;
      }

      // Candidate passed all 8 Quality Gates!
      accepted = {
        ...candidate,
        diagramSvg: gateResult.diagramSvg,
        verified_by: gateResult.verified_by, // "code" or "consensus"
        quality_score: gateResult.quality_score,
        source_status: gateResult.source_status, // "unverified" or "olympiad_style"
        code_formula: gateResult.code_formula || null,
        globalId: 'Q-' + Math.random().toString(36).substring(2, 9),
        createdAt: new Date().toISOString()
      };

      // Mark archetype as used in Concept Bank
      updateArchetypeStatus(archetype.id, 'used');
      usedArchetypeIds.add(archetype.id);
      cumulativeQuestions.push(accepted);
      generatedQuestions.push(accepted);

      currentJobState.generatedCount = generatedQuestions.length;
      currentJobState.progress = Math.round((generatedQuestions.length / requestedCount) * 100);
      currentJobState.savedQuestions = generatedQuestions;

      if (progressCallback) {
        progressCallback(currentJobState);
      }
      break;
    }

    if (!accepted && retries >= maxRetries) {
      rejectedReport.push({
        archetype: 'Question Slot #' + (qIndex + 1),
        gate: 'All',
        reason: `Exceeded ${maxRetries} verification retries.`
      });
    }
  }

  currentJobState.status = 'completed';
  currentJobState.lastUpdated = new Date().toISOString();

  return {
    status: 'completed',
    questions: generatedQuestions,
    count: generatedQuestions.length,
    rejectedReport,
    unusedRemaining: getUnusedCount(chapter),
    jobState: currentJobState
  };
}

module.exports = {
  generateOlympiadQuestionsPipeline,
  getJobState
};
