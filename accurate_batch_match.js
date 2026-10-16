const fs = require('fs');

const chaptersConfig = [
  { step: 4612, link: 1, key: 'periodic_table', name: 'Periodic Table' },
  { step: 4614, link: 2, key: 'chemical_bonding', name: 'Chemical Bonding' },
  { step: 4616, link: 3, key: 'acids_bases_and_salts', name: 'Acids, Bases and Salts' },
  { step: 4618, link: 4, key: 'analytical_chemistry', name: 'Analytical Chemistry' },
  { step: 4620, link: 5, key: 'mole_concept', name: 'Mole Concept' },
  { step: 4622, link: 6, key: 'electrolysis', name: 'Electrolysis' },
  { step: 4624, link: 7, key: 'metallurgy', name: 'Metallurgy' },
  { step: 4626, link: 8, key: 'hydrogen_chloride', name: 'Hydrochloric Acid' },
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
    const body = text.substring(startIndex, endIndex).trim();

    questions.push({
      num: qNum,
      title: qTitle,
      body: body
    });
  }
  return questions;
}

chaptersConfig.forEach(ch => {
  const enqueues = extractEnqueues(ch.step);
  const data = JSON.parse(JSON.parse(enqueues[0]));
  const root = unpack(data, 0);
  const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
  const msgs = conv.linear_conversation
    .map((item, idx) => ({ idx, message: item.message }))
    .filter(m => m.message && (m.message.author?.role === 'assistant' || m.message.role === 'assistant'))
    .map(m => {
      const text = (m.message.content?.parts || []).filter(p => typeof p === 'string').join('\n');
      return { idx: m.idx, text, len: text.length };
    })
    .filter(m => m.len > 500);

  console.log(`\n======================================================`);
  console.log(`Chapter: ${ch.name}`);
  console.log(`======================================================`);

  for (let b = 1; b <= 6; b++) {
    // Look for message explicitly labeled with Batch b
    const batchRegex = new RegExp(`Batch\\s*${b}(?:\\s|:|[—\\-]|\\*|of|$)`, 'i');
    const matchingMsgs = msgs.filter(m => batchRegex.test(m.text));
    
    // Pick the one with the most questions
    let best = null;
    let maxQs = 0;
    matchingMsgs.forEach(m => {
      const qs = parseQuestions(m.text);
      if (qs.length > maxQs) {
        maxQs = qs.length;
        best = { msg: m, qs };
      }
    });

    if (best) {
      const nums = best.qs.map(q => q.num);
      console.log(`  Batch ${b}: Msg #${best.msg.idx} -> ${best.qs.length} Qs (range Q${Math.min(...nums)}..Q${Math.max(...nums)})`);
    } else {
      console.log(`  Batch ${b}: NOT FOUND by label! Candidate messages:`);
      msgs.forEach(m => {
        const qs = parseQuestions(m.text);
        if (qs.length >= 10) {
          const firstLine = m.text.split('\n').filter(l => l.trim().length > 0)[0] || '';
          console.log(`    Msg #${m.idx} (${qs.length} Qs) -> ${firstLine.substring(0, 60)}`);
        }
      });
    }
  }
});
