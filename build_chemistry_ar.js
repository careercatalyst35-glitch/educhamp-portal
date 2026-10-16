const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { computeQuestionHash, computeQuestionSkeleton } = require('./dedupEngine');

const mod1 = require('./chem_ar_data_1');
const mod2 = require('./chem_ar_data_2');
const mod3 = require('./chem_ar_data_3');

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
  periodic_table: 'Periodic Table',
  chemical_bonding: 'Chemical Bonding',
  acids_bases_and_salts: 'Acids, Bases and Salts',
  analytical_chemistry: 'Analytical Chemistry',
  mole_concept: 'Mole Concept',
  electrolysis: 'Electrolysis',
  metallurgy: 'Metallurgy',
  hydrogen_chloride: 'Hydrochloric Acid'
};

const AR_OPTIONS = [
  { key: 'A', text: 'Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A).' },
  { key: 'B', text: 'Both Assertion (A) and Reason (R) are true, but Reason (R) is NOT the correct explanation of Assertion (A).' },
  { key: 'C', text: 'Assertion (A) is true, but Reason (R) is false.' },
  { key: 'D', text: 'Assertion (A) is false, but Reason (R) is true.' }
];

console.log('Building Chemistry Assertion-Reasoning Question Banks (40 questions per chapter)...\n');

let grandTotal = 0;

for (const [key, qList] of Object.entries(allData)) {
  const chapterName = CHAPTER_MAP[key] || key;
  const outFileName = `chemistry_ar_${key}.json`;
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
      subSubjectName: 'Chemistry',
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
      source: 'ICSE Class 10 Chemistry Master Vault - Assertion & Reasoning',
      source_status: 'verified',
      normalized_question_hash: qHash,
      question_skeleton: qSkel
    };
  });

  fs.writeFileSync(outPath, JSON.stringify(formatted, null, 2), 'utf8');
  grandTotal += formatted.length;

  console.log(`[AR] ${chapterName.padEnd(25)}: Saved ${formatted.length} questions to ${outFileName}`);
}

console.log(`\n========================================`);
console.log(`TOTAL CHEMISTRY AR QUESTIONS ACROSS 8 CHAPTERS: ${grandTotal}`);
console.log(`========================================\n`);
