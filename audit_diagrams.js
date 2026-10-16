const fs = require('fs');
const path = require('path');

const files = [
  'chemistry_periodic_table.json',
  'chemistry_chemical_bonding.json',
  'chemistry_acids_bases_and_salts.json',
  'chemistry_analytical_chemistry.json',
  'chemistry_mole_concept.json',
  'chemistry_electrolysis.json',
  'chemistry_metallurgy.json',
  'chemistry_hydrogen_chloride.json'
];

files.forEach(f => {
  const p = path.join(__dirname, 'questionBank', f);
  const qs = JSON.parse(fs.readFileSync(p, 'utf8'));
  const diagQs = qs.filter(q => q.question_type === 'diagrammatic');

  let withSvg = 0;
  let withFigText = 0;
  let missingOptions = 0;
  let missingCorrect = 0;
  let missingExplanation = 0;

  diagQs.forEach((q, idx) => {
    if (q.diagramSvg && q.diagramSvg.includes('<svg')) withSvg++;
    if (q.question.includes('Figure') || q.question.includes('figure') || q.question.includes('diagram') || q.question.includes('Diagram')) withFigText++;
    if (!q.options || q.options.length !== 4) missingOptions++;
    if (!q.correct_option) missingCorrect++;
    if (!q.explanation || q.explanation.length < 5) missingExplanation++;
  });

  console.log(`[${f}] Diag Qs: ${diagQs.length} | With SVG: ${withSvg} | With Figure/Diagram text: ${withFigText} | Issues (opts=${missingOptions}, ans=${missingCorrect}, expl=${missingExplanation})`);
});
