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

const enqueues = extractEnqueues(4626);
const unescaped = JSON.parse(enqueues[0]);
const parsed = JSON.parse(unescaped);

console.log('Is array:', Array.isArray(parsed), 'length:', parsed.length);
for (let i = 0; i < Math.min(30, parsed.length); i++) {
  console.log(`[${i}]`, typeof parsed[i], typeof parsed[i] === 'string' ? parsed[i].substring(0, 50) : parsed[i]);
}
