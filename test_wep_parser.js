const fs = require('fs');

const c2 = fs.readFileSync('./raw_chats/chat_2_WORK_ENERGY_POWER.md', 'utf8');

function cleanSvg(svgStr) {
  if (!svgStr) return null;
  let svg = svgStr.trim();
  if (!svg.includes('xmlns=')) {
    svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  svg = svg.replace(/strokeWidth=/g, 'stroke-width=')
           .replace(/strokeDasharray=/g, 'stroke-dasharray=')
           .replace(/fillOpacity=/g, 'fill-opacity=')
           .replace(/fontSize=/g, 'font-size=')
           .replace(/fontWeight=/g, 'font-weight=')
           .replace(/textAnchor=/g, 'text-anchor=')
           .replace(/dominantBaseline=/g, 'dominant-baseline=');
  if (!svg.includes('class="q-diagram-svg"')) {
    svg = svg.replace('<svg', '<svg class="q-diagram-svg"');
  }
  return svg;
}

// Split into major batches by "# " or "## "
const batches = c2.split(/(?=\n#+ )/);
console.log('Total batch sections in chat 2:', batches.length);

// Extract all tables mapping Q number to { answer, explanation }
const globalTableMap = new Map();

batches.forEach(b => {
  if (b.includes('| Answer |') || b.includes('| Correct |') || b.includes('| Correct answer |')) {
    const lines = b.split('\n');
    lines.forEach(l => {
      const parts = l.split('|').map(p => p.trim());
      // format: | Q | Answer | Explanation |
      // parts[0] is '', parts[1] is Q, parts[2] is Answer, parts[3] is Explanation
      if (parts.length >= 4) {
        const qNum = parseInt(parts[1], 10);
        const ans = parts[2];
        const exp = parts.slice(3, -1).join(' | ').trim();
        if (!isNaN(qNum) && /^[A-D]$/i.test(ans)) {
          globalTableMap.set(qNum, { answer: ans.toUpperCase(), explanation: exp });
        }
      }
    });
  }
});

console.log('Extracted table answers count:', globalTableMap.size);

// Now parse question chunks
const qChunks = c2.split(/(?=(?:^|\n)(?:###?\s*Q\d+[\.\:]|\*\*Q\d+[\.\:]\*\*|##\s*Q\d+[\.\:]))/gi);
const parsedQuestions = [];
const seen = new Set();

qChunks.forEach(chunk => {
  const headerMatch = chunk.match(/(?:###?\s*Q(\d+)[\.\:]|\*\*Q(\d+)[\.\:]\*\*|##\s*Q(\d+)[\.\:])([^\n]*)/i);
  if (!headerMatch) return;

  const qNum = parseInt(headerMatch[1] || headerMatch[2] || headerMatch[3], 10);
  const title = headerMatch[4].trim().replace(/^\[.*?\]\s*—?\s*/, '').replace(/^\*\*|\*\*$/g, '');

  const svgMatch = chunk.match(/<svg[\s\S]*?<\/svg>/i);
  const diagramSvg = svgMatch ? cleanSvg(svgMatch[0]) : null;

  // Options
  const letters = ['A', 'B', 'C', 'D'];
  const options = letters.map(letter => {
    const re = new RegExp(`(?:^|\\n)\\s*(?:${letter}\\.|\\(${letter}\\)|${letter}\\))\\s*([^\\n]+)`, 'i');
    const m = chunk.match(re);
    return {
      key: letter,
      text: m ? m[1].trim() : ''
    };
  }).filter(o => o.text.length > 0);

  // Correct answer & explanation
  let correct_option = null;
  let explanation = '';

  const ansMatch = chunk.match(/(?:\*\*Correct Answer[\s\:]*|\*\*Correct answer[\s\:]*|Correct Answer[\s\:]*)([A-D])/i);
  if (ansMatch) {
    correct_option = ansMatch[1].toUpperCase();
    const expMatch = chunk.match(/(?:\*\*Reason[\s\:]*\*?|\*\*Explanation[\s\:]*\*?|Reason[\s\:]*|Explanation[\s\:]*)([\s\S]*?)(?=\n---|###|##|$)/i);
    explanation = expMatch ? expMatch[1].trim() : '';
  } else if (globalTableMap.has(qNum)) {
    const tEntry = globalTableMap.get(qNum);
    correct_option = tEntry.answer;
    explanation = tEntry.explanation;
  }

  let qText = chunk
    .replace(/(?:###?\s*Q\d+[\.\:]|\*\*Q\d+[\.\:]\*\*|##\s*Q\d+[\.\:])[^\n]*/i, '')
    .replace(/<box[\s\S]*?<\/box>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/(?:^|\n)\s*(?:[A-D]\.|\([A-D]\)|[A-D]\))[\s\S]*$/i, '')
    .trim();

  if (!qText && title) qText = title;

  const normKey = qText.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 100);
  if (normKey.length > 15 && !seen.has(normKey) && options.length >= 2) {
    seen.add(normKey);
    parsedQuestions.push({
      title: title || 'Work Energy Power Question',
      question: qText,
      diagramSvg,
      options,
      correct_option: correct_option || 'A',
      explanation: explanation || 'Refer to Work, Energy and Power standard formulas and conservation of energy.'
    });
  }
});

console.log('Unique questions in Work Energy Power:', parsedQuestions.length);
console.log('With diagrams:', parsedQuestions.filter(q => q.diagramSvg).length);
console.log('\nSample 1:');
console.log(parsedQuestions[0].title);
console.log(parsedQuestions[0].question);
console.log(parsedQuestions[0].options);
console.log('Correct:', parsedQuestions[0].correct_option);
console.log('Exp:', parsedQuestions[0].explanation);
