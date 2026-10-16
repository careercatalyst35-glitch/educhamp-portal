const fs = require('fs');
const q0 = JSON.parse(fs.readFileSync('registry_cache.json', 'utf8')).questions[0];

function cleanLatexMath(text) {
  if (!text) return '';
  return text
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\boxed\{([^}]+)\}/g, '$1')
    .replace(/\\\(/g, '')
    .replace(/\\\)/g, '')
    .replace(/\\\[/g, '')
    .replace(/\\\]/g, '')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\circ/g, '°')
    .replace(/\\sin/g, 'sin')
    .replace(/\\cos/g, 'cos')
    .replace(/\\tan/g, 'tan')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\s*\*\*Options\*\*\s*$/i, '')
    .replace(/\s*\*\*Options:\*\*\s*$/i, '')
    .trim();
}

console.log('Cleaned text:');
console.log(cleanLatexMath(q0.question));
