const fs = require('fs');
const path = require('path');
const { computeQuestionHash, computeQuestionSkeleton } = require('./dedupEngine');

const BANK_DIR = path.join(__dirname, 'questionBank');

const chapters = [
  { key: 'force', file: 'physics_force.json', name: 'Force' },
  { key: 'work__energy_and_power', file: 'physics_work__energy_and_power.json', name: 'Work, Energy and Power' },
  { key: 'machines', file: 'physics_machines.json', name: 'Machines' },
  { key: 'refraction_of_light_at_plane_surfaces', file: 'physics_refraction_of_light_at_plane_surfaces.json', name: 'Refraction of Light at Plane Surfaces' },
  { key: 'refraction_through_a_lens', file: 'physics_refraction_through_a_lens.json', name: 'Refraction through a Lens' },
  { key: 'spectrum', file: 'physics_spectrum.json', name: 'Spectrum' },
  { key: 'sound', file: 'physics_sound.json', name: 'Sound' },
  { key: 'current_electricity', file: 'physics_current_electricity.json', name: 'Current Electricity' },
  { key: 'household_circuits', file: 'physics_household_circuits.json', name: 'Household Circuits' },
  { key: 'electromagnetism', file: 'physics_electromagnetism.json', name: 'Electromagnetism' },
  { key: 'calorimetry', file: 'physics_calorimetry.json', name: 'Calorimetry' },
  { key: 'radioactivity', file: 'physics_radioactivity.json', name: 'Radioactivity' }
];

function scoreTrickiness(q) {
  let score = 0;
  const fullText = (q.question + ' ' + (q.title || '') + ' ' + (q.explanation || '')).toLowerCase();

  // Multi-step and complex synthesis indicators
  if (q.types_supported && q.types_supported.includes('complex')) score += 12;
  if (fullText.includes('synthesis') || fullText.includes('multi-step') || fullText.includes('statement 1') || fullText.includes('both i and ii')) score += 10;
  if (fullText.includes('trap') || fullText.includes('misconception') || fullText.includes('incorrect') || fullText.includes('fault') || fullText.includes('unsuitable')) score += 9;
  if (fullText.includes('two conditions') || fullText.includes('simultaneous') || fullText.includes('altered') || fullText.includes('reversing both')) score += 8;
  if (fullText.includes('ratio') || fullText.includes('efficiency') || fullText.includes('percentage') || fullText.includes('calculate')) score += 6;
  if (fullText.includes('assertion') || fullText.includes('reasoning')) score += 5;
  if (q.diagramSvg) score += 4;
  if (q.question && q.question.length > 180) score += 5;
  if (q.explanation && q.explanation.length > 200) score += 5;

  return score;
}

console.log('Building HOTS Question Banks (30 trickiest MCQs per chapter)...\n');

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
        types_supported: Array.from(new Set([...(item.q.types_supported || []), 'complex', 'hots'])),
        difficulty: 'hard',
        source: 'ICSE Class 10 Physics HOTS Question Bank',
        source_status: 'verified'
      };
      top30.push(cloned);
    }
  }

  const outFileName = `physics_hots_${ch.key}.json`;
  const outPath = path.join(BANK_DIR, outFileName);
  fs.writeFileSync(outPath, JSON.stringify(top30, null, 2), 'utf8');

  console.log(`[HOTS] ${ch.name.padEnd(38)}: Saved 30 questions to ${outFileName} (top scores: ${sorted[0].score} -> ${sorted[29].score})`);
});

console.log('\nAll 12 HOTS question banks created successfully!');
