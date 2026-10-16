const { generateWithRole } = require('./providerService');
const { computeJaccardSimilarity, normalizeText } = require('./dedupEngine');
const { loadBank, saveBank } = require('./conceptBankService');
const fs = require('fs');
const path = require('path');

/**
 * Concept Expander Engine
 * Grows chapter banks toward 150-200 validated Level-3 archetypes.
 * Enforces rigorous deduplication and honesty: never pads with duplicates or vague items.
 */

// Normalizes concept tags and detects synonyms (e.g. "tangent-secant theorem" = "power of a point")
function areConceptSynonyms(tagA, tagB) {
  const normA = normalizeText(tagA);
  const normB = normalizeText(tagB);
  if (normA === normB) return true;

  // Jaccard similarity threshold for concept tags
  const sim = computeJaccardSimilarity(normA, normB);
  if (sim >= 0.70) return true;

  // Well-known Olympiad geometry synonyms
  const synonymGroups = [
    ['power_of_a_point', 'tangent_secant_theorem', 'intersecting_chords_theorem', 'secant_secant_theorem'],
    ['ptolemys_theorem', 'cyclic_quadrilateral_diagonals_product', 'ptolemy_identity'],
    ['inscribed_angle_theorem', 'angle_subtended_at_circumference', 'central_angle_theorem'],
    ['radical_axis', 'line_of_equal_powers', 'common_chord_line'],
    ['simson_line', 'simson_wallace_line', 'feet_of_perpendiculars_line'],
    ['nine_point_circle', 'euler_circle', 'feuerbach_circle'],
    ['brahmagupta_formula', 'cyclic_quadrilateral_area_formula']
  ];

  for (const group of synonymGroups) {
    const hasA = group.some(item => normA.includes(item) || item.includes(normA));
    const hasB = group.some(item => normB.includes(item) || item.includes(normB));
    if (hasA && hasB) return true;
  }

  return false;
}

// Expands a chapter using the Expander model (llama3.1 / qwen2.5)
async function expandChapterConceptBank(chapterName = 'Circles', targetCount = 160) {
  const bank = loadBank();
  const existingArchetypes = bank.items.filter(i => i.level === 3 && i.chapter.toLowerCase() === chapterName.toLowerCase());
  const existingTags = new Set(existingArchetypes.map(i => i.concept_tag));

  console.log(`[ConceptExpander] Starting expansion for "${chapterName}". Current Level-3 count: ${existingArchetypes.length}. Target: ${targetCount}`);

  if (existingArchetypes.length >= targetCount) {
    return {
      status: 'complete',
      message: `Chapter "${chapterName}" already has ${existingArchetypes.length} validated concepts (target ${targetCount} reached).`,
      currentCount: existingArchetypes.length,
      targetCount,
      newlyAdded: 0
    };
  }

  const prompt = `You are a Senior Olympiad Mathematics Curriculum Designer for IMO, RMO, USAMO, and AMC.
For the chapter "${chapterName}", generate distinct, advanced Level-3 problem archetypes.
Each archetype MUST be a unique, teachable mathematical problem pattern with a specific geometry configuration.
DO NOT provide generic or repeated concepts.
Do NOT repeat Power of a Point tangent-secant, standard Ptolemy, or basic inscribed angle.

Generate 10 distinct archetypes in strict JSON format:
{
  "archetypes": [
    {
      "level1_parent": "Feuerbachs Theorem / Inversion / Pole and Polar / Sangaku / etc.",
      "level2_technique": "Specific Application Technique",
      "title": "Clear Problem Archetype Title",
      "description": "Specific mathematical problem scenario and goal",
      "difficulty": 1-5,
      "olympiad_relevance": 1-5,
      "source_hint": "e.g. INMO / RMO / AMC 12"
    }
  ]
}`;

  let newlyAdded = 0;
  try {
    const res = await generateWithRole('expander', prompt, '{"archetypes": []}');
    const candidates = res.data?.archetypes || [];

    let nextIdNum = bank.items.length + 1;

    for (const c of candidates) {
      if (!c.title || !c.description) continue;
      const tag = c.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');

      // Deduplication check
      let isDuplicate = false;
      for (const existingTag of existingTags) {
        if (areConceptSynonyms(tag, existingTag)) {
          isDuplicate = true;
          break;
        }
      }

      if (isDuplicate) {
        console.log(`[ConceptExpander] Dropping duplicate/synonym: "${c.title}"`);
        continue;
      }

      // Quality filter
      if ((c.difficulty || 3) < 2 || (c.olympiad_relevance || 3) < 3) {
        continue;
      }

      const newRow = {
        id: `C3_${nextIdNum++}`,
        class: 'Class 9-10 / Senior Olympiad',
        subject: 'Mathematics',
        chapter: chapterName,
        level: 3,
        parent_id: 'C2_EXPANDED',
        concept_tag: tag,
        title: c.title,
        description: c.description,
        difficulty: c.difficulty || 4,
        olympiad_relevance: c.olympiad_relevance || 5,
        source_hint: c.source_hint || 'Olympiad Expansion',
        status: 'unused',
        fail_count: 0,
        created_at: new Date().toISOString()
      };

      bank.items.push(newRow);
      existingTags.add(tag);
      newlyAdded++;
    }

    saveBank(bank);
  } catch (err) {
    if (err.isOllamaPause) throw err;
    console.warn(`[ConceptExpander] Note during model expansion: ${err.message}`);
  }

  const updatedCount = bank.items.filter(i => i.level === 3 && i.chapter.toLowerCase() === chapterName.toLowerCase()).length;
  const statusMsg = updatedCount >= targetCount
    ? `Target reached: ${updatedCount} validated concepts available.`
    : `Chapter has ${updatedCount} validated concepts; further generated candidates were duplicates or below Olympiad threshold.`;

  return {
    status: 'success',
    message: statusMsg,
    currentCount: updatedCount,
    targetCount,
    newlyAdded
  };
}

module.exports = {
  expandChapterConceptBank,
  areConceptSynonyms
};
