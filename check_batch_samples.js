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

function unpack(data, idx, seen = new Map()) {
  if (typeof idx !== 'number') return idx;
  if (idx < 0) {
    if (idx === -1) return undefined;
    if (idx === -2) return null;
    if (idx === -3) return NaN;
    if (idx === -4) return Infinity;
    if (idx === -5) return undefined;
    return null;
  }
  if (seen.has(idx)) return seen.get(idx);

  const raw = data[idx];
  if (raw === null || typeof raw !== 'object') {
    return raw;
  }

  if (Array.isArray(raw)) {
    const arr = [];
    seen.set(idx, arr);
    for (const item of raw) {
      arr.push(unpack(data, item, seen));
    }
    return arr;
  }

  const obj = {};
  seen.set(idx, obj);
  for (const [k, v] of Object.entries(raw)) {
    if (k.startsWith('_')) {
      const keyIdx = parseInt(k.substring(1), 10);
      const keyName = data[keyIdx];
      obj[keyName] = unpack(data, v, seen);
    } else {
      obj[k] = unpack(data, v, seen);
    }
  }
  return obj;
}

const enqueues = extractEnqueues(4626);
const data = JSON.parse(JSON.parse(enqueues[0]));
const root = unpack(data, 0);
const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
const msgs = conv.linear_conversation
  .map(item => item.message)
  .filter(m => m && (m.author?.role === 'assistant' || m.role === 'assistant'))
  .map(m => (m.content?.parts || []).filter(p => typeof p === 'string').join('\n'))
  .filter(t => t.length > 500);

console.log('=== SAMPLE Q1 FROM MSG 0 (Batch 1: Diagrammatic) ===');
console.log(msgs[0].substring(0, 1200));

console.log('\n=== SAMPLE Q1 FROM MSG 4 (Batch 3: Numerical) ===');
console.log(msgs[4].substring(0, 1200));

console.log('\n=== SAMPLE Q1 FROM MSG 6 (Batch 5: Theoretical) ===');
console.log(msgs[6].substring(0, 1200));

console.log('\n=== SAMPLE Q1 FROM MSG 9 (Batch 6: Complex) ===');
console.log(msgs[9].substring(0, 1200));
