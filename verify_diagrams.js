const fs = require('fs');
const path = require('path');

const BANK_DIR = path.join(__dirname, 'questionBank');
const files = [
  'physics_force.json',
  'physics_work__energy_and_power.json',
  'physics_machines.json',
  'physics_refraction_of_light_at_plane_surfaces.json',
  'physics_refraction_through_a_lens.json',
  'physics_spectrum.json',
  'physics_sound.json',
  'physics_current_electricity.json'
];

let totalDiagramQuestions = 0;
let validSvgs = 0;
let errors = [];

files.forEach(f => {
  const bank = JSON.parse(fs.readFileSync(path.join(BANK_DIR, f), 'utf8'));
  const diagQs = bank.filter(q => q.diagramSvg);
  totalDiagramQuestions += diagQs.length;

  console.log(`\n========================================`);
  console.log(`File: ${f} (${diagQs.length} diagrammatic Qs)`);
  console.log(`========================================`);

  diagQs.slice(0, 3).forEach((q, idx) => {
    console.log(`\n[${idx + 1}] Title: ${q.title}`);
    console.log(`    Question snippet: ${q.question.substring(0, 100)}...`);
    console.log(`    Correct Option: ${q.correct_option}`);
    
    // Check SVG validity
    const svg = q.diagramSvg;
    const hasViewBox = svg.includes('viewBox=');
    const hasClosing = svg.includes('</svg>');
    const textMatches = svg.match(/<text[^>]*>([^<]+)<\/text>/gi) || [];
    const textLabels = textMatches.map(t => t.replace(/<\/?text[^>]*>/gi, '').trim()).filter(Boolean);

    console.log(`    SVG size: ${svg.length} chars | viewBox: ${hasViewBox} | Closes: ${hasClosing}`);
    console.log(`    Diagram Text Labels (${textLabels.length}): ${textLabels.slice(0, 8).join(', ')}`);

    if (!hasViewBox || !hasClosing) {
      errors.push({ file: f, qTitle: q.title, error: 'Malformed SVG' });
    } else {
      validSvgs++;
    }
  });
});

console.log(`\n\nTotal Diagram Questions inspected: ${totalDiagramQuestions}`);
console.log(`Valid SVGs checked in samples: ${validSvgs}`);
console.log(`Errors encountered: ${errors.length}`);
