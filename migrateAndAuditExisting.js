const fs = require('fs');
const path = require('path');
const { computeQuestionHash, computeQuestionSkeleton, findDuplicatePairs } = require('./dedupEngine');
const { loadBank } = require('./conceptBankService');

const CACHE_FILE = path.join(__dirname, 'registry_cache.json');

function migrateExistingQuestions() {
  if (!fs.existsSync(CACHE_FILE)) return { migrated: 0, total: 0 };

  const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  const questions = data.questions || [];
  let updatedCount = 0;

  questions.forEach((q, idx) => {
    let modified = false;
    if (!q.normalized_question_hash) {
      q.normalized_question_hash = computeQuestionHash(q.question);
      modified = true;
    }
    if (!q.question_skeleton) {
      q.question_skeleton = computeQuestionSkeleton(q.question);
      modified = true;
    }
    if (!q.globalId) {
      q.globalId = `Q-LEGACY-${idx + 1}`;
      modified = true;
    }

    // Assign Level 1/2/3 concept tags if missing
    if (!q.level1_concept || !q.concept_tag) {
      const qLower = (q.question || '').toLowerCase();
      if (qLower.includes('power of a point') || qLower.includes('tangent') && qLower.includes('secant')) {
        q.level1_concept = 'Power of a Point Theorem';
        q.level2_technique = 'Tangent-Secant Application';
        q.concept_tag = 'power_of_a_point_tangent_secant';
        q.archetype_id = 'C3_1';
        modified = true;
      } else if (qLower.includes('ptolemy') || qLower.includes('cyclic quadrilateral')) {
        q.level1_concept = 'Ptolemys Theorem and Cyclic Quadrilaterals';
        q.level2_technique = 'Standard Ptolemys Identity';
        q.concept_tag = 'ptolemys_theorem_cyclic_quad';
        q.archetype_id = 'C3_14';
        modified = true;
      } else if (qLower.includes('inradius') || qLower.includes('inscribed circle')) {
        q.level1_concept = 'Incircle and Excircles Geometry';
        q.level2_technique = 'Tangency Point Segments on Sides';
        q.concept_tag = 'right_triangle_inradius_formula';
        q.archetype_id = 'C3_24';
        modified = true;
      } else if (qLower.includes('derangement')) {
        q.level1_concept = 'Combinatorics';
        q.level2_technique = 'Inclusion-Exclusion Principle';
        q.concept_tag = 'derangement_counting';
        q.archetype_id = 'COMB_1';
        modified = true;
      } else if (qLower.includes('euler line') || qLower.includes('centroid') && qLower.includes('orthocenter')) {
        q.level1_concept = 'Triangle Centers and Euler Line';
        q.level2_technique = 'Euler Line Invariant Ratio';
        q.concept_tag = 'euler_line_invariant_ratio';
        q.archetype_id = 'C3_GEOM_1';
        modified = true;
      } else {
        q.level1_concept = q.concept_name || 'Olympiad Core Mathematics';
        q.level2_technique = 'Standard Problem Solving';
        q.concept_tag = q.concept_tag || 'olympiad_math_concept_' + (idx + 1);
        modified = true;
      }
    }

    if (!q.verified_by) {
      q.verified_by = 'code';
      modified = true;
    }
    if (!q.source_status) {
      q.source_status = q.source_type === 'past_olympiad' ? 'unverified' : 'olympiad_style';
      modified = true;
    }

    if (modified) updatedCount++;
  });

  fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[Migration] Migrated ${updatedCount} / ${questions.length} existing questions with Level 1/2/3 concepts and hashes.`);
  return { migrated: updatedCount, total: questions.length };
}

// Re-audit all existing questions in a chapter or the whole database
function reAuditExistingQuestions(chapterFilter = null) {
  if (!fs.existsSync(CACHE_FILE)) return { totalQuestions: 0, duplicatePairs: [] };

  const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  let questions = data.questions || [];

  if (chapterFilter) {
    questions = questions.filter(q => (q.chapter === chapterFilter || q.chapterName === chapterFilter));
  }

  const duplicates = findDuplicatePairs(questions);

  return {
    chapter: chapterFilter || 'All Chapters',
    totalScanned: questions.length,
    duplicatePairsCount: duplicates.length,
    duplicates
  };
}

module.exports = {
  migrateExistingQuestions,
  reAuditExistingQuestions
};
