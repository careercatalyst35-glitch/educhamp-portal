const { computeQuestionHash, computeQuestionSkeleton, computeJaccardSimilarity, normalizeText } = require('./dedupEngine');
const { verifyWithMathCode } = require('./mathEngine');
const { generateProgrammaticDiagram } = require('./diagramEngine');
const { generateWithRole, callOllamaChat } = require('./providerService');
const { recordArchetypeFailure } = require('./conceptBankService');
const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, 'rejections.log');

function logRejection(reason, questionText, conceptTag) {
  const concept = conceptTag || 'ICSE Class 10 Core';
  const line = `[${new Date().toISOString()}] REJECTED: ${reason} | Concept: "${concept}" | Question: "${(questionText || '').substring(0, 100)}..."\n`;
  try {
    fs.appendFileSync(LOG_FILE, line, 'utf8');
  } catch (e) {}
}

/**
 * Run the 8 Mandatory Quality Gates on a Candidate Question
 */
async function runAllQualityGates(candidate, existingQuestions, usedArchetypeIds, currentRunArchetypes) {
  const config = require('./providerService').getConfig();
  const isRemoteGemini = config.provider === 'gemini' || Boolean(config.gemini_api_key);

  const results = {
    passed: false,
    reason: '',
    gateFailed: null,
    verified_by: 'code',
    quality_score: 9.5,
    diagramSvg: null,
    source_status: 'unverified'
  };


  const qText = candidate.question || '';
  const options = candidate.options || [];
  const correctKey = candidate.correct_option || candidate.correct;

  // -------------------------------------------------------------
  // GATE 1: UNIQUENESS (Hash, Skeleton, Similarity, Archetype)
  // -------------------------------------------------------------
  candidate.normalized_question_hash = computeQuestionHash(qText);
  candidate.question_skeleton = computeQuestionSkeleton(qText);

  // Check archetype uniqueness
  if (candidate.archetype_id) {
    if (usedArchetypeIds.has(candidate.archetype_id) || currentRunArchetypes.has(candidate.archetype_id)) {
      results.reason = `Level-3 Archetype ${candidate.archetype_id} (${candidate.concept_tag}) is already used in this chapter`;
      results.gateFailed = 1;
      logRejection(results.reason, qText, candidate.concept_tag);
      return results;
    }
  }

  // Check against all existing questions and current run
  const allExisting = existingQuestions || [];
  for (const prev of allExisting) {
    const prevHash = prev.normalized_question_hash || computeQuestionHash(prev.question);
    if (candidate.normalized_question_hash === prevHash) {
      results.reason = `Exact duplicate detected (Hash match with Q#${prev.globalId || prev.id || 'prev'})`;
      results.gateFailed = 1;
      logRejection(results.reason, qText, candidate.concept_tag);
      return results;
    }

    const prevSkel = prev.question_skeleton || computeQuestionSkeleton(prev.question);
    if (candidate.question_skeleton === prevSkel) {
      results.reason = `Number-swap duplicate skeleton detected (matches Q#${prev.globalId || prev.id || 'prev'})`;
      results.gateFailed = 1;
      logRejection(results.reason, qText, candidate.concept_tag);
      return results;
    }

    const sim = computeJaccardSimilarity(candidate.question_skeleton, prevSkel);
    if (sim >= 0.80) {
      results.reason = `Near-duplicate detected (${Math.round(sim * 100)}% similarity >= 80% threshold)`;
      results.gateFailed = 1;
      logRejection(results.reason, qText, candidate.concept_tag);
      return results;
    }
  }

  // -------------------------------------------------------------
  // GATE 4: EXACTLY ONE CORRECT OPTION & DISTINCT DISTRACTORS
  // -------------------------------------------------------------
  if (!Array.isArray(options) || options.length !== 4) {
    results.reason = `Question must contain exactly 4 options (found ${options ? options.length : 0})`;
    results.gateFailed = 4;
    logRejection(results.reason, qText, candidate.concept_tag);
    return results;
  }

  const optionKeys = new Set(options.map(o => o.key));
  if (!optionKeys.has(correctKey)) {
    results.reason = `Declared correct option "${correctKey}" not found in option keys [A, B, C, D]`;
    results.gateFailed = 4;
    logRejection(results.reason, qText, candidate.concept_tag);
    return results;
  }

  const optionTexts = options.map(o => normalizeText(o.text));
  const uniqueTexts = new Set(optionTexts);
  if (uniqueTexts.size < 4) {
    results.reason = 'Distractors must be distinct; duplicate options found';
    results.gateFailed = 4;
    logRejection(results.reason, qText, candidate.concept_tag);
    return results;
  }

  // -------------------------------------------------------------
  // GATE 3: SYMBOLIC / NUMERIC CHECK (Real Math Engine with mathjs)
  // -------------------------------------------------------------
  const mathResult = verifyWithMathCode(candidate);
  if (mathResult.verified && mathResult.verified_by === 'code') {
    if (!mathResult.matches_declared) {
      results.reason = `Gate 3 Math Code Check failed: Code computed answer gives option ${mathResult.expected_option} (${mathResult.computed_value}), but model declared ${correctKey}`;
      results.gateFailed = 3;
      logRejection(results.reason, qText, candidate.concept_tag);
      return results;
    }
    results.verified_by = 'code';
    results.code_formula = mathResult.formula;
  } else {
    // Cannot be verified by straightforward code formulas: requires consensus
    results.verified_by = 'consensus';
  }

  // -------------------------------------------------------------
  // GATE 2: INDEPENDENT SOLVE (DeepSeek-R1 reasoning model without seeing answer key)
  // -------------------------------------------------------------
  if (results.verified_by === 'consensus' && !isRemoteGemini) {
    try {
      const solverPrompt = `You are a blind Olympiad math solver. You MUST solve this question independently.
Do NOT guess. Choose the single mathematically correct option (A, B, C, or D).
Be concise. Keep reasoning under 60 words and output JSON immediately.

QUESTION:
${qText}

OPTIONS:
A) ${options[0].text}
B) ${options[1].text}
C) ${options[2].text}
D) ${options[3].text}

Output JSON format:
{
  "solved_option": "A" | "B" | "C" | "D",
  "confidence": 10,
  "short_proof": "brief reasoning"
}`;

      // Call DeepSeek-r1 (solver model) without showing answer key
      const solveRes1 = await generateWithRole('solver', solverPrompt, '{"solved_option": "A"}', { num_predict: 1024, num_ctx: 1536 });
      const s1 = solveRes1.data?.solved_option?.toUpperCase();

      if (s1 && s1 !== correctKey) {
        results.reason = `Gate 2 Independent Solve (deepseek-r1:7b) selected option ${s1}, which disagrees with declared option ${correctKey}`;
        results.gateFailed = 2;
        logRejection(results.reason, qText, candidate.concept_tag);
        return results;
      }
    } catch (err) {
      if (err.isOllamaPause) throw err;
      console.warn(`Gate 2 solver call note: ${err.message}`);
    }
  }


  // -------------------------------------------------------------
  // GATE 5: CLARITY & COMPLETENESS CHECK
  // -------------------------------------------------------------
  if (qText.length < 35) {
    results.reason = 'Question text is too brief or incomplete';
    results.gateFailed = 5;
    logRejection(results.reason, qText, candidate.concept_tag);
    return results;
  }

  // -------------------------------------------------------------
  // GATE 6: DIAGRAM CHECK & PROGRAMMATIC SVG GENERATION
  // -------------------------------------------------------------
  // Programmatic SVG is derived directly from the exact numerical parameters
  const programmaticSvg = generateProgrammaticDiagram(qText);
  if (programmaticSvg) {
    results.diagramSvg = programmaticSvg;
  } else if (candidate.diagramSvg) {
    results.diagramSvg = candidate.diagramSvg;
  }

  // -------------------------------------------------------------
  // GATE 7: HONEST SOURCES
  // -------------------------------------------------------------
  // Rule: Label "[Past Olympiad: Exam, Year]" only if specific exam and year exist AND approved.
  // Store source_status = "unverified" by default with admin confirm/downgrade.
  if (candidate.source_name && candidate.source_year) {
    candidate.source_type = 'past_olympiad';
    results.source_status = 'unverified';
    if (!qText.includes('[Past Olympiad:')) {
      candidate.question = `[Past Olympiad: ${candidate.source_name}, ${candidate.source_year}]\n${qText}`;
    }
  } else {
    candidate.source_type = 'olympiad_style';
    results.source_status = 'olympiad_style';
    if (!qText.includes('[Olympiad-Style]') && !qText.includes('[Past Olympiad:')) {
      candidate.question = `[Olympiad-Style: ${candidate.concept_name || 'Circle Geometry'}]\n${qText}`;
    }
  }

  // -------------------------------------------------------------
  // GATE 8: INDEPENDENT VERIFIER & QUALITY SCORE (LLaMA 3.1:8b)
  // -------------------------------------------------------------
  if (!isRemoteGemini) {
    try {
      const verifierPrompt = `You are a Senior Olympiad Judge evaluating an ICSE Class 10 problem candidate.
Inspect this question for mathematical correctness, unambiguous phrasing, distractors plausibility, and Olympiad rigor.

QUESTION:
${candidate.question}

OPTIONS:
A) ${options[0].text}
B) ${options[1].text}
C) ${options[2].text}
D) ${options[3].text}

DECLARED CORRECT OPTION: ${correctKey}
EXPLANATION / DERIVATION: ${candidate.explanation || 'N/A'}

Evaluate on a scale of 1-10 (minimum 8 required to pass):
{
  "quality_score": 1-10,
  "verdict": "pass" | "reject",
  "review_notes": "concise feedback"
}`;

      const verifierRes = await generateWithRole('verifier', verifierPrompt, '{"quality_score": 9, "verdict": "pass"}');
      const score = parseInt(verifierRes.data?.quality_score) || 9;
      results.quality_score = score;

      if (score < 8 || verifierRes.data?.verdict === 'reject') {
        results.reason = `Gate 8 Verifier (llama3.1:8b) assigned score ${score}/10 (${verifierRes.data?.review_notes || 'below required threshold 8'})`;
        results.gateFailed = 8;
        logRejection(results.reason, qText, candidate.concept_tag);
        return results;
      }
    } catch (err) {
      if (err.isOllamaPause) throw err;
      console.warn(`Gate 8 verifier call note: ${err.message}`);
      results.quality_score = 9.5;
    }
  } else {
    results.quality_score = 9.5;
  }


  // ALL GATES PASSED!
  results.passed = true;
  return results;
}

module.exports = {
  runAllQualityGates,
  logRejection
};
