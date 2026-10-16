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
const data = JSON.parse(JSON.parse(enqueues[0]));

function unpack(idx, seen = new Map()) {
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
      arr.push(unpack(item, seen));
    }
    return arr;
  }

  const obj = {};
  seen.set(idx, obj);
  for (const [k, v] of Object.entries(raw)) {
    if (k.startsWith('_')) {
      const keyIdx = parseInt(k.substring(1), 10);
      const keyName = data[keyIdx];
      obj[keyName] = unpack(v, seen);
    } else {
      obj[k] = unpack(v, seen);
    }
  }
  return obj;
}

const root = unpack(0);
console.log('Unpacked root keys:', Object.keys(root));
const shareData = root.loaderData?.['routes/share.$shareId.($action)'];
console.log('shareData keys:', shareData ? Object.keys(shareData) : 'null');
if (shareData?.serverResponse) {
  console.log('serverResponse keys:', Object.keys(shareData.serverResponse));
  const conv = shareData.serverResponse.data;
  console.log('conv keys:', conv ? Object.keys(conv) : 'null');
  if (conv?.linear_conversation) {
    console.log('linear_conversation length:', conv.linear_conversation.length);
    conv.linear_conversation.forEach((msg, mi) => {
      console.log(`Msg ${mi}: role=${msg.message?.author?.role || msg.role}, text length=${(msg.message?.content?.parts?.[0] || '').length}`);
    });
  }
}
