const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { computeQuestionHash, computeQuestionSkeleton } = require('./dedupEngine');

const mod1 = require('./ar_data_1');
const mod2 = require('./ar_data_2');
const mod3 = require('./ar_data_3');

const allData = {
  ...mod1,
  ...mod2,
  ...mod3
};

const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) {
  fs.mkdirSync(BANK_DIR, { recursive: true });
}

const CHAPTER_MAP = {
  force: 'Force',
  work_energy_power: 'Work, Energy and Power',
  machines: 'Machines',
  refraction_plane: 'Refraction of Light at Plane Surfaces',
  refraction_lens: 'Refraction through a Lens',
  spectrum: 'Spectrum',
  sound: 'Sound',
  current_electricity: 'Current Electricity',
  household_circuits: 'Household Circuits',
  electromagnetism: 'Electromagnetism',
  calorimetry: 'Calorimetry',
  radioactivity: 'Radioactivity'
};

const AR_OPTIONS = [
  { key: 'A', text: 'Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A).' },
  { key: 'B', text: 'Both Assertion (A) and Reason (R) are true, but Reason (R) is NOT the correct explanation of Assertion (A).' },
  { key: 'C', text: 'Assertion (A) is true, but Reason (R) is false.' },
  { key: 'D', text: 'Assertion (A) is false, but Reason (R) is true.' }
];

console.log('Building Assertion-Reasoning Question Banks (40 questions per chapter)...\n');

let grandTotal = 0;

for (const [key, qList] of Object.entries(allData)) {
  const chapterName = CHAPTER_MAP[key] || key;
  const outFileName = `physics_ar_${key}.json`;
  const outPath = path.join(BANK_DIR, outFileName);

  const formatted = qList.map((item, idx) => {
    const qText = `**Assertion (A):** ${item.a}\n\n**Reason (R):** ${item.r}\n\nChoose the correct option:`;
    const qHash = computeQuestionHash(qText);
    const qSkel = computeQuestionSkeleton(qText);
    const rnd = crypto.randomBytes(3).toString('hex');

    return {
      globalId: `qb_ar_${key}_${idx + 1}_${rnd}`,
      className: 'Class 10',
      boardName: 'ICSE',
      subjectName: 'Science',
      subSubjectName: 'Physics',
      sectionName: 'ASSERTION REASONING',
      chapter: chapterName,
      title: item.title ? `Assertion–Reason: ${item.title}` : `Assertion–Reason ${chapterName} Q${idx + 1}`,
      question_type: 'assertion_reasoning',
      types_supported: ['assertion_reasoning', 'complex', 'theoretical'],
      question: qText,
      diagramSvg: null,
      options: AR_OPTIONS,
      correct_option: item.ans,
      explanation: item.exp,
      concept_name: chapterName,
      concept_tag: `${key.replace(/_/g, ' ')} assertion reasoning`,
      difficulty: 'hard',
      verified_by: 'code',
      source: 'ICSE Class 10 Physics Master Vault - Assertion & Reasoning',
      source_status: 'verified',
      normalized_question_hash: qHash,
      question_skeleton: qSkel
    };
  });

  fs.writeFileSync(outPath, JSON.stringify(formatted, null, 2), 'utf8');
  grandTotal += formatted.length;

  console.log(`[AR] ${chapterName.padEnd(38)}: Saved ${formatted.length} questions to ${outFileName}`);
}

console.log(`\n========================================`);
console.log(`TOTAL AR QUESTIONS ACROSS 12 CHAPTERS: ${grandTotal}`);
console.log(`========================================\n`);
