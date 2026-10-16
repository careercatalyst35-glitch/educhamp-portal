const fs = require('fs');
const path = require('path');

function cleanSvg(svgStr) {
  if (!svgStr) return '';
  let svg = svgStr.trim();
  // Ensure xmlns
  if (!svg.includes('xmlns=')) {
    svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  // Convert React JSX attributes to standard SVG attributes
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

function parseMarkdownQuestions(rawText, chapterName) {
  const questions = [];
  const seenQuestions = new Set();

  // Normalize newlines
  const text = rawText.replace(/\r\n/g, '\n');

  // Split into sections or examine by Q markers
  // Common patterns:
  // ### Q1. Title or **Q1.** or ## Q1.
  const qRegex = /(?:^|\n)(?:###?\s*Q(\d+)[\.\:]?|\*\*Q(\d+)[\.\:]?\*\*|Q(\d+)[\.\:])\s*([^\n]*)/gi;
  
  // Let's find all question start positions
  const qMatches = [];
  let m;
  while ((m = qRegex.exec(text)) !== null) {
    const qNum = parseInt(m[1] || m[2] || m[3], 10);
    const title = (m[4] || '').trim().replace(/^\[.*?\]\s*—?\s*/, '').replace(/^\*\*|\*\*$/g, '');
    qMatches.push({
      index: m.index,
      qNum,
      title,
      rawHeader: m[0]
    });
  }

  console.log(`Found ${qMatches.length} raw question matches in text`);
  return qMatches;
}

const c1 = fs.readFileSync('./raw_chats/chat_1_Force.md', 'utf8');
const res = parseMarkdownQuestions(c1, 'Force');
console.log('Sample first 5 matches:', res.slice(0, 5));
