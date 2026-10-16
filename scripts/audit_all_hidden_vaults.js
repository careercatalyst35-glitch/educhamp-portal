const fs = require('fs');
const path = require('path');

const qbDir = path.join(__dirname, '..', 'questionBank');
const files = fs.readdirSync(qbDir).filter(f => f.endsWith('.json'));

const filesWithTemplates = {};
const allDefects = [];

files.forEach(file => {
  const filePath = path.join(qbDir, file);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error('Error parsing', file);
    return;
  }
  const list = Array.isArray(data) ? data : (data.questions || []);

  list.forEach((q, idx) => {
    const qText = q.question || '';
    const expText = q.explanation || '';
    const full = qText + ' ' + expText;

    const hasTemplate = /\{#(?:each|if|snippet)|\{\/(?:each|if|snippet)\}|\bas e\}|\{e\.s\}|\[\{[a-z0-9_\"']+\s*:/i.test(full);
    const hasFigure = /\bFigure:|\bFigure\s*\*\*/i.test(qText);
    const hasRawLatex = /\\text\{|\\frac\{|\\\(|\\\[|\\mathrm\{/.test(full);
    const hasScrapeJunk = /cite|<[Cc]ite|<[Ee]ntity|## Quick revision|## Answer key/i.test(full);
    const hasBadDiagram = q.diagramSvg && (/answers\[|Select your answers/i.test(q.diagramSvg));

    if (hasTemplate || hasFigure || hasRawLatex || hasScrapeJunk || hasBadDiagram) {
      if (!filesWithTemplates[file]) filesWithTemplates[file] = 0;
      filesWithTemplates[file]++;

      allDefects.push({
        file,
        idx,
        title: q.title,
        hasTemplate,
        hasFigure,
        hasRawLatex,
        hasScrapeJunk,
        hasBadDiagram,
        qSnippet: qText.slice(0, 100)
      });
    }
  });
});

console.log('=== SUMMARY OF DEFECTS IN QUESTION BANK ===');
console.log('Total files affected:', Object.keys(filesWithTemplates).length);
console.log('Total defective questions:', allDefects.length);
console.log('Breakdown by file:');
for (const [f, count] of Object.entries(filesWithTemplates)) {
  console.log(`  ${f}: ${count}`);
}

const templatesOnly = allDefects.filter(d => d.hasTemplate || d.hasFigure);
console.log('\nQuestions specifically with {#each / Figure: junk:', templatesOnly.length);
templatesOnly.slice(0, 20).forEach(d => {
  console.log(`[${d.file} #${d.idx}] ${d.title}: ${d.qSnippet.replace(/\n/g, ' ')}`);
});
