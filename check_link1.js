const fs = require('fs');

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

const enqueues = extractEnqueues(4612);
const unescaped = JSON.parse(enqueues[0]);
const parsed = JSON.parse(unescaped);

let strings = [];
function scan(val, d = 0) {
  if (d > 12) return;
  if (typeof val === 'string') {
    if (val.length > 50) strings.push(val);
  } else if (Array.isArray(val)) {
    val.forEach(v => scan(v, d + 1));
  } else if (val && typeof val === 'object') {
    Object.values(val).forEach(v => scan(v, d + 1));
  }
}
scan(parsed);

strings.forEach(s => {
  if (s.includes('Batch 1') || s.includes('Chapter') || s.includes('Periodic') || s.includes('Batch')) {
    console.log('--- FOUND ---');
    console.log(s.substring(0, 300));
  }
});
