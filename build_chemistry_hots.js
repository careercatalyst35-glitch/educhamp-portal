const fs = require('fs');
const path = require('path');
const { computeQuestionHash, computeQuestionSkeleton } = require('./dedupEngine');

const BANK_DIR = path.join(__dirname, 'questionBank');

const chapters = [
  { key: 'periodic_table', file: 'chemistry_periodic_table.json', name: 'Periodic Table', fullName: 'Periodic Table, Periodic Properties and Variations in Properties' },
  { key: 'chemical_bonding', file: 'chemistry_chemical_bonding.json', name: 'Chemical Bonding', fullName: 'Chemical Bonding' },
  { key: 'acids_bases_and_salts', file: 'chemistry_acids_bases_and_salts.json', name: 'Acids, Bases and Salts', fullName: 'Acids, Bases and Salts' },
  { key: 'analytical_chemistry', file: 'chemistry_analytical_chemistry.json', name: 'Analytical Chemistry', fullName: 'Analytical Chemistry' },
  { key: 'mole_concept', file: 'chemistry_mole_concept.json', name: 'Mole Concept', fullName: 'Mole Concept and Stoichiometry' },
  { key: 'electrolysis', file: 'chemistry_electrolysis.json', name: 'Electrolysis', fullName: 'Electrolysis' },
  { key: 'metallurgy', file: 'chemistry_metallurgy.json', name: 'Metallurgy', fullName: 'Metallurgy' },
  { key: 'hydrogen_chloride', file: 'chemistry_hydrogen_chloride.json', name: 'Hydrochloric Acid', fullName: 'Hydrogen Chloride and Hydrochloric Acid' }
];

function scoreTrickiness(q) {
  let score = 0;
  const fullText = (q.question + ' ' + (q.title || '') + ' ' + (q.explanation || '')).toLowerCase();

  // Batch 6 Complex and Batch 5 Theoretical questions are highest priority
  if (q.question_type === 'complex') score += 20;
  if (q.question_type === 'numerical') score += 15;
  if (q.question_type === 'theoretical') score += 12;
  if (q.question_type === 'diagrammatic') score += 10;

  if (fullText.includes('board-style') || fullText.includes('extreme') || fullText.includes('ultimate')) score += 15;
  if (fullText.includes('limiting reagent') || fullText.includes('stoichiometry') || fullText.includes('multi-step')) score += 12;
  if (fullText.includes('trap') || fullText.includes('misconception') || fullText.includes('incorrect') || fullText.includes('confuse')) score += 10;
  if (fullText.includes('both assertion') || fullText.includes('statement')) score += 8;
  if (fullText.includes('ratio') || fullText.includes('calculate') || fullText.includes('volume')) score += 6;
  if (q.diagramSvg) score += 5;
  if (q.question && q.question.length > 200) score += 5;
  if (q.explanation && q.explanation.length > 200) score += 5;

  return score;
}

console.log('Building Chemistry HOTS Question Banks (30 trickiest MCQs per chapter)...\n');

const hotsSummary = [];

chapters.forEach(ch => {
  const inPath = path.join(BANK_DIR, ch.file);
  if (!fs.existsSync(inPath)) {
    console.error(`Missing bank file: ${ch.file}`);
    return;
  }
  const bank = JSON.parse(fs.readFileSync(inPath, 'utf8'));

  // Sort by trickiness score descending
  const sorted = bank
    .map(q => ({ q, score: scoreTrickiness(q) }))
    .sort((a, b) => b.score - a.score);

  // Take top 30 unique questions
  const seenHashes = new Set();
  const top30 = [];

  for (const item of sorted) {
    if (top30.length >= 30) break;
    const h = item.q.normalized_question_hash || computeQuestionHash(item.q.question);
    if (!seenHashes.has(h)) {
      seenHashes.add(h);
      const cloned = {
        ...item.q,
        globalId: `qb_hots_${ch.key}_${top30.length + 1}_${Math.random().toString(36).substring(2, 7)}`,
        sectionName: 'HOTS',
        question_type: 'hots',
        types_supported: ['hots', 'complex'],
        subSubjectName: 'Chemistry',
        difficulty: 'hard',
        source: 'ICSE Class 10 Chemistry HOTS Question Bank',
        source_status: 'verified'
      };
      top30.push(cloned);
    }
  }

  const outFileName = `chemistry_hots_${ch.key}.json`;
  const outPath = path.join(BANK_DIR, outFileName);
  fs.writeFileSync(outPath, JSON.stringify(top30, null, 2), 'utf8');

  console.log(`[HOTS] ${ch.name.padEnd(30)}: Saved 30 questions to ${outFileName}`);
  hotsSummary.push({ chapter: ch.name, file: outFileName, count: top30.length });
});

console.log('\n========================================');
console.log('SUMMARY OF ALL CHEMISTRY HOTS BANKS BUILT:');
console.table(hotsSummary);
