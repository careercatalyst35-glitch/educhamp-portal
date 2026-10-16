const fs = require('fs');

const steps = [
  { step: 4612, link: 1 },
  { step: 4614, link: 2 },
  { step: 4616, link: 3 },
  { step: 4618, link: 4 },
  { step: 4620, link: 5 },
  { step: 4622, link: 6 },
  { step: 4624, link: 7 },
  { step: 4626, link: 8 },
];

function extractEnqueues(step) {
  const p = `C:/Users/25car/.gemini/antigravity/brain/576231d8-6ff3-4005-81c9-c8f9969277f8/.system_generated/steps/${step}/content.md`;
  if (!fs.existsSync(p)) return [];
  const text = fs.readFileSync(p, 'utf8');

  const needle = 'window.__reactRouterContext.streamController.enqueue(';
  const results = [];
  let pos = 0;
  while (true) {
    const idx = text.indexOf(needle, pos);
    if (idx === -1) break;
    const start = idx + needle.length;
    const endScript = text.indexOf('</script>', start);
    if (endScript === -1) break;
    let end = endScript;
    while (end > start && text[end] !== ')') end--;
    results.push(text.substring(start, end).trim());
    pos = endScript;
  }
  return results;
}

steps.forEach(({ step, link }) => {
  const enqueues = extractEnqueues(step);
  const raw = enqueues[0];
  try {
    const unescaped = JSON.parse(raw);
    const parsed = JSON.parse(unescaped);
    let title = '';
    let headings = new Set();
    function scan(val, d = 0) {
      if (d > 12) return;
      if (typeof val === 'string') {
        if (val.includes('# ICSE Class 10 Chemistry') || val.includes('ICSE Class 10 Chemistry')) {
          const match = val.match(/#\s*ICSE Class 10 Chemistry[^\n\r|]*/i) || val.match(/ICSE Class 10 Chemistry[^\n\r|]*/i);
          if (match) headings.add(match[0].trim());
        }
      } else if (Array.isArray(val)) {
        val.forEach(v => scan(v, d + 1));
      } else if (val && typeof val === 'object') {
        Object.values(val).forEach(v => scan(v, d + 1));
      }
    }
    scan(parsed);
    console.log(`Link ${link} (Step ${step}) Chemistry Chapters:`, Array.from(headings));
  } catch(e) {
    console.error(`Link ${link} error:`, e.message);
  }
});
