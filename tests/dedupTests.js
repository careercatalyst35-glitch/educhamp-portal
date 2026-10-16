// Automated Test Suite for Strict Uniqueness & Concept Deduplication
const assert = require('assert');
const {
  computeQuestionHash,
  computeQuestionSkeleton,
  verifyRule1NoRepeatedQuestion,
  verifyRule2NoRepeatedConcept,
  verifyRule5Correctness
} = require('../dedupEngine');

const { generateOlympiadQuestionsPipeline } = require('../questionEngine');

console.log('====================================================');
console.log('RUNNING DEDUPLICATION & CONCEPT UNIQUENESS TEST SUITE');
console.log('====================================================\n');

// ----------------------------------------------------
// TEST A: Duplicate Power of a Point Question Rejection
// ----------------------------------------------------
console.log('TEST A: Duplicate Power of a Point Rejection...');

const basePowerOfPoint = {
  id: 'q_existing_1',
  concept_tag: 'power_of_a_point_tangent_secant',
  question: 'In the given geometric figure, segment PT is tangent to the circle at point T, and secant PAB passes through points A and B on the circle. If PT = 24 cm and PA = 4 cm, find the exact length of chord AB.',
  options: [
    { key: 'A', text: '135 cm' },
    { key: 'B', text: '140 cm' },
    { key: 'C', text: '144 cm' },
    { key: 'D', text: '149 cm' }
  ],
  correct_option: 'B'
};

const duplicateCandidate = {
  concept_tag: 'power_of_a_point_tangent_secant',
  question: 'In the given geometric figure, segment PT is tangent to the circle at point T, and secant PAB passes through points A and B on the circle. If PT = 24 cm and PA = 4 cm, find the exact length of chord AB.',
  options: [
    { key: 'A', text: '135 cm' },
    { key: 'B', text: '140 cm' },
    { key: 'C', text: '144 cm' },
    { key: 'D', text: '149 cm' }
  ],
  correct_option: 'B'
};

const rule1Result = verifyRule1NoRepeatedQuestion(duplicateCandidate, [basePowerOfPoint]);
assert.strictEqual(rule1Result.passed, false, 'Expected duplicate Power of a Point to fail Rule 1!');
console.log('✔ SUCCESS: Exact duplicate Power of a Point question was strictly REJECTED.');
console.log(`  Rejection Reason: ${rule1Result.reason}\n`);

// ----------------------------------------------------
// TEST B: Number-Swap / Same Concept Rejection ("1+2" vs "3+4")
// ----------------------------------------------------
console.log('TEST B: Number-Swap & Same Concept Rejection ("1+2" vs "3+4")...');

const q1Addition = {
  id: 'q_add_1',
  concept_tag: 'basic_addition_operation',
  question: 'Calculate the sum when 1 is added to 2 in basic arithmetic.',
  options: [
    { key: 'A', text: '2' },
    { key: 'B', text: '3' },
    { key: 'C', text: '4' },
    { key: 'D', text: '5' }
  ],
  correct_option: 'B'
};

const q2AdditionNumberSwap = {
  concept_tag: 'basic_addition_operation', // SAME CONCEPT
  question: 'Calculate the sum when 3 is added to 4 in basic arithmetic.',
  options: [
    { key: 'A', text: '6' },
    { key: 'B', text: '7' },
    { key: 'C', text: '8' },
    { key: 'D', text: '9' }
  ],
  correct_option: 'B'
};

// Check Rule 1 (Number-Swap Skeleton)
const rule1SkelResult = verifyRule1NoRepeatedQuestion(q2AdditionNumberSwap, [q1Addition]);
assert.strictEqual(rule1SkelResult.passed, false, 'Expected number-swap skeleton duplicate to fail Rule 1!');
console.log('✔ SUCCESS: Number-swap question ("3+4" vs "1+2") was strictly REJECTED under Rule 1.');
console.log(`  Skeleton Rejection: ${rule1SkelResult.reason}`);

// Check Rule 2 (Concept overlap)
const rule2ConceptResult = verifyRule2NoRepeatedConcept(q2AdditionNumberSwap, [q1Addition.concept_tag]);
assert.strictEqual(rule2ConceptResult.passed, false, 'Expected same concept tag to fail Rule 2!');
console.log('✔ SUCCESS: Same concept tag was strictly REJECTED under Rule 2.');
console.log(`  Concept Rejection: ${rule2ConceptResult.reason}\n`);

// ----------------------------------------------------
// TEST C: Generate 25 Questions Batch Uniqueness
// ----------------------------------------------------
console.log('TEST C: 25 Questions Batch Generation with 100% Unique Concepts...');

const batchResult = generateOlympiadQuestionsPipeline({
  chapter: 'Olympiad Comprehensive Mathematics',
  difficulty: 'Hard (Olympiad)',
  requestedCount: 25,
  className: 'Class 7',
  subjectName: 'Mathematics',
  sectionName: 'Section A'
}, []);

console.log(`Generated Questions count: ${batchResult.questions.length}`);
assert.strictEqual(batchResult.questions.length, 25, 'Expected exactly 25 questions to be generated!');

const generatedConcepts = batchResult.questions.map(q => q.concept_tag);
const uniqueConceptSet = new Set(generatedConcepts);

console.log(`Unique Concepts in Batch: ${uniqueConceptSet.size} / 25`);
assert.strictEqual(uniqueConceptSet.size, 25, 'All 25 generated questions MUST have completely different concept tags!');

// Verify each question passes Rule 5 correctness
batchResult.questions.forEach((q, idx) => {
  const r5 = verifyRule5Correctness(q);
  assert.strictEqual(r5.passed, true, `Question #${idx + 1} failed Rule 5 correctness check!`);
});

console.log('✔ SUCCESS: All 25 generated questions have 100% distinct concept tags and verified correctness.');
console.log(`  Coverage Status: ${batchResult.coverageStatus}`);
console.log('\n====================================================');
console.log('ALL TESTS PASSED SUCCESSFULLY! 100% VERIFIED');
console.log('====================================================');
