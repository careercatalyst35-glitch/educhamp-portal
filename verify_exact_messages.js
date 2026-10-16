const fs = require('fs');

const stepConfig = [
  { step: 4612, name: 'Periodic Table', batches: [30, 40, 44, 54, 58, 71] },
  { step: 4614, name: 'Chemical Bonding', batches: [31, 41, 50, 57, 61, 71] },
  { step: 4616, name: 'Acids, Bases and Salts', batches: [17, 28, 37, 46, 56, 67] },
  { step: 4618, name: 'Analytical Chemistry', batches: [14, 21, 25, 28, 31, 52] },
  { step: 4620, name: 'Mole Concept', batches: [16, 22, 27, 34, 41, 46] },
  { step: 4622, name: 'Electrolysis', batches: [22, 38, 47, 56, 68, 72] },
  { step: 4624, name: 'Metallurgy', batches: [25, 52, 57, 62, 71, 105] },
  { step: 4626, name: 'Hydrogen Chloride', batches: [39, 47, 57, 63, 69, 77] },
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
      obj[keyName || k] = unpack(data, v, seen);
    }
  }
  return obj;
}

function parseQuestions(text) {
  const qRegex = /(?:^|\n)(?:###|##|\*\*|)\s*(?:Q|Question)\s*(\d+)[\.:\s\-—]+([^\n\r]*)/gi;
  const matches = [...text.matchAll(qRegex)];
  const questions = [];

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const qNum = parseInt(m[1], 10);
    const qTitle = m[2].replace(/\*\*/g, '').replace(/\[|\]/g, '').trim();
    const startIndex = m.index + m[0].length;
    const endIndex = i + 1 < matches.length ? matches[i + 1].index : text.length;
    const block = text.substring(startIndex, endIndex).trim();

    questions.push({
      num: qNum,
      title: qTitle,
      body: block
    });
  }
  return questions;
}

stepConfig.forEach(cfg => {
  const enqueues = extractEnqueues(cfg.step);
  const data = JSON.parse(JSON.parse(enqueues[0]));
  const root = unpack(data, 0);
  const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
  console.log(`\n======================================================`);
  console.log(`Verifying: ${cfg.name} (Step ${cfg.step})`);
  console.log(`======================================================`);

  cfg.batches.forEach((msgIdx, bIdx) => {
    const bNum = bIdx + 1;
    const msg = conv.linear_conversation[msgIdx]?.message;
    if (!msg) {
      console.log(`  Batch ${bNum}: Msg #${msgIdx} NOT FOUND!`);
      return;
    }
    const text = (msg.content?.parts || []).filter(p => typeof p === 'string').join('\n');
    const qs = parseQuestions(text);
    const nums = qs.map(q => q.num);
    const minN = nums.length > 0 ? Math.min(...nums) : '?';
    const maxN = nums.length > 0 ? Math.max(...nums) : '?';
    const firstLine = text.split('\n').filter(l => l.trim().length > 0)[0] || '';
    console.log(`  Batch ${bNum} (Msg #${msgIdx}): ${qs.length} questions (Q${minN}..Q${maxN}) | Header: ${firstLine.substring(0, 50)}`);
  });
});
