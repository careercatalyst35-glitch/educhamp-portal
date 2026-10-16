const fs = require('fs');

const steps = [
  { step: 4612, link: 1, name: 'Periodic Table' },
  { step: 4614, link: 2, name: 'Chemical Bonding' },
  { step: 4616, link: 3, name: 'Acids, Bases and Salts' },
  { step: 4618, link: 4, name: 'Analytical Chemistry' },
  { step: 4620, link: 5, name: 'Mole Concept' },
  { step: 4622, link: 6, name: 'Electrolysis' },
  { step: 4624, link: 7, name: 'Metallurgy' },
  { step: 4626, link: 8, name: 'Hydrogen Chloride' },
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
      obj[k] = unpack(data, v, seen);
    }
  }
  return obj;
}

steps.forEach(({ step, link, name }) => {
  console.log(`\n======================================================`);
  console.log(`LINK ${link}: ${name} (Step ${step})`);
  console.log(`======================================================`);
  const enqueues = extractEnqueues(step);
  const data = JSON.parse(JSON.parse(enqueues[0]));
  const root = unpack(data, 0);
  const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
  if (!conv || !conv.linear_conversation) return;

  const msgs = conv.linear_conversation
    .map(item => item.message)
    .filter(m => m && (m.author?.role === 'assistant' || m.role === 'assistant'))
    .map(m => (m.content?.parts || []).filter(p => typeof p === 'string').join('\n'))
    .filter(t => t.length > 500);

  // Search for diagrams in each message
  let totalSvgs = 0;
  let totalImgTags = 0;
  let totalFigures = 0;
  let totalBoxes = 0;

  msgs.forEach((m, mi) => {
    const svgs = (m.match(/<svg[\s\S]*?<\/svg>/gi) || []).length;
    const imgs = (m.match(/!\[[^\]]*\]\([^\)]+\)/gi) || []).length;
    const figs = (m.match(/\*\*Figure[^\*]*\*\*/gi) || []).length;
    const boxes = (m.match(/<box[\s\S]*?<\/box>/gi) || []).length;

    totalSvgs += svgs;
    totalImgTags += imgs;
    totalFigures += figs;
    totalBoxes += boxes;

    if (svgs > 0 || imgs > 0 || figs > 0 || boxes > 0) {
      console.log(`  Msg ${mi}: svgs=${svgs}, images=${imgs}, figures=${figs}, boxes=${boxes}`);
    }
  });

  console.log(`Summary: totalSvgs=${totalSvgs}, totalImgs=${totalImgTags}, totalFigureLabels=${totalFigures}, totalBoxes=${totalBoxes}`);
});
