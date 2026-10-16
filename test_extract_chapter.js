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

// Test extracting Link 8 (Hydrogen Chloride)
const enqueues = extractEnqueues(4626);
const data = JSON.parse(JSON.parse(enqueues[0]));
const root = unpack(data, 0);
const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
const assistantMsgs = conv.linear_conversation
  .map(item => item.message)
  .filter(m => m && (m.author?.role === 'assistant' || m.role === 'assistant'))
  .map(m => (m.content?.parts || []).filter(p => typeof p === 'string').join('\n'))
  .filter(t => t.length > 500);

console.log('Total assistant messages for Link 8:', assistantMsgs.length);

// Let's parse questions from text
function parseQuestionsFromText(text) {
  // Questions typically start with ## Q<num>. or ### Q<num>. or **Q<num>.
  // Split on question headers
  const qRegex = /(?:^|\n)(?:###|##|\*\*)\s*(?:Q|Question)\s*(\d+)[\.:\s\-—]+([^\n\r]*)/gi;
  const matches = [...text.matchAll(qRegex)];
  const questions = [];

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const qNum = parseInt(m[1], 10);
    const qTitle = m[2].replace(/\*\*/g, '').trim();
    const startIndex = m.index + m[0].length;
    const endIndex = i + 1 < matches.length ? matches[i + 1].index : text.length;
    const body = text.substring(startIndex, endIndex).trim();

    questions.push({
      num: qNum,
      title: qTitle,
      rawBody: body
    });
  }
  return questions;
}

let allParsed = [];
assistantMsgs.forEach((msg, idx) => {
  const qs = parseQuestionsFromText(msg);
  console.log(`Msg ${idx}: found ${qs.length} questions. (First: Q${qs[0]?.num} - ${qs[0]?.title})`);
  qs.forEach(q => allParsed.push(q));
});

console.log('Total raw questions parsed from all messages:', allParsed.length);
// Check unique numbers
const uniqueNums = new Set(allParsed.map(q => q.num));
console.log('Unique question numbers:', [...uniqueNums].sort((a,b) => a - b));
