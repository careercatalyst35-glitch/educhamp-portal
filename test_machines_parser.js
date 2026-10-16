const fs = require('fs');

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

const c3 = fs.readFileSync('./raw_chats/chat_3_MACHINES.md', 'utf8');

// Match questions: e.g. Q1. ... or **Q1.** ...
const qChunks = c3.split(/(?=(?:^|\n)(?:###?\s*Q\d+[\.\:]|\*\*Q\d+[\.\:]\*\*|##\s*Q\d+[\.\:]))/gi);

console.log('Total chunks in chat 3:', qChunks.length);

const parsedQuestions = [];
const seenQuestions = new Set();

qChunks.forEach((chunk, idx) => {
  const headerMatch = chunk.match(/(?:###?\s*Q\d+[\.\:]|\*\*Q\d+[\.\:]\*\*|##\s*Q\d+[\.\:])([^\n]*)/i);
  if (!headerMatch) return;

  const title = headerMatch[1].trim().replace(/^\[.*?\]\s*—?\s*/, '').replace(/^\*\*|\*\*$/g, '');
  
  // Extract SVG if any
  const svgMatch = chunk.match(/<svg[\s\S]*?<\/svg>/i);
  const diagramSvg = svgMatch ? cleanSvg(svgMatch[0]) : null;

  // Extract Options A, B, C, D
  const optA = chunk.match(/(?:^|\n)\s*(?:[A-D]\.|\([A-D]\)|[A-D]\))\s*([^\n]+)/g);
  let options = [];
  if (optA && optA.length >= 4) {
    const letters = ['A', 'B', 'C', 'D'];
    options = letters.map(letter => {
      const re = new RegExp(`(?:^|\\n)\\s*(?:${letter}\\.|\\(${letter}\\)|${letter}\\))\\s*([^\\n]+)`, 'i');
      const m = chunk.match(re);
      return {
        key: letter,
        text: m ? m[1].trim() : ''
      };
    });
  }

  // Extract Correct Answer
  const ansMatch = chunk.match(/(?:\*\*Correct Answer[\s\:]*|\*\*Correct answer[\s\:]*|Correct Answer[\s\:]*)([A-D])/i);
  const correct_option = ansMatch ? ansMatch[1].toUpperCase() : (options.length > 0 ? 'A' : null);

  // Extract Explanation / Reason
  const expMatch = chunk.match(/(?:\*\*Reason[\s\:]*\*?|\*\*Explanation[\s\:]*\*?|Reason[\s\:]*|Explanation[\s\:]*)([\s\S]*?)(?=\n---|###|##|$)/i);
  const explanation = expMatch ? expMatch[1].trim() : '';

  // Extract main question statement (strip header, options, answer, explanation, svg)
  let qText = chunk
    .replace(/(?:###?\s*Q\d+[\.\:]|\*\*Q\d+[\.\:]\*\*|##\s*Q\d+[\.\:])[^\n]*/i, '')
    .replace(/<box[\s\S]*?<\/box>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/(?:^|\n)\s*(?:[A-D]\.|\([A-D]\)|[A-D]\))[\s\S]*$/i, '')
    .trim();

  if (!qText && title) qText = title;

  // Deduplicate
  const normKey = qText.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 100);
  if (normKey.length > 15 && !seenQuestions.has(normKey)) {
    seenQuestions.add(normKey);
    parsedQuestions.push({
      title: title || 'Machines Practice Question',
      question: qText,
      diagramSvg,
      options,
      correct_option,
      explanation
    });
  }
});

console.log('Unique parsed questions in Machines:', parsedQuestions.length);
console.log('Questions with diagrams:', parsedQuestions.filter(q => q.diagramSvg).length);
console.log('\nSample question 1:');
console.log(parsedQuestions[0].title);
console.log(parsedQuestions[0].question);
console.log(parsedQuestions[0].options);
console.log(parsedQuestions[0].correct_option);
console.log(parsedQuestions[0].explanation);
console.log('Has SVG:', !!parsedQuestions[0].diagramSvg);

const dq = parsedQuestions.find(q => q.diagramSvg);
if (dq) {
  console.log('\nSample Diagrammatic Question:');
  console.log('Title:', dq.title);
  console.log('Question:', dq.question);
  console.log('Options:', dq.options);
  console.log('Correct:', dq.correct_option);
  console.log('SVG length:', dq.diagramSvg.length);
  console.log('SVG snippet:', dq.diagramSvg.substring(0, 250));
}
