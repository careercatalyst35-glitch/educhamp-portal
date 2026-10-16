const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const chaptersConfig = [
  { step: 4612, link: 1, key: 'periodic_table', name: 'Periodic Table', fullName: 'Periodic Table, Periodic Properties and Variations in Properties' },
  { step: 4614, link: 2, key: 'chemical_bonding', name: 'Chemical Bonding', fullName: 'Chemical Bonding' },
  { step: 4616, link: 3, key: 'acids_bases_and_salts', name: 'Acids, Bases and Salts', fullName: 'Acids, Bases and Salts' },
  { step: 4618, link: 4, key: 'analytical_chemistry', name: 'Analytical Chemistry', fullName: 'Analytical Chemistry' },
  { step: 4620, link: 5, key: 'mole_concept', name: 'Mole Concept', fullName: 'Mole Concept and Stoichiometry' },
  { step: 4622, link: 6, key: 'electrolysis', name: 'Electrolysis', fullName: 'Electrolysis' },
  { step: 4624, link: 7, key: 'metallurgy', name: 'Metallurgy', fullName: 'Metallurgy' },
  { step: 4626, link: 8, key: 'hydrogen_chloride', name: 'Hydrochloric Acid', fullName: 'Hydrogen Chloride and Hydrochloric Acid' },
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

function computeQuestionHash(text) {
  if (!text) return '';
  return crypto.createHash('sha256').update(text.toLowerCase().trim()).digest('hex');
}

function computeQuestionSkeleton(text) {
  if (!text) return '';
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Inspect messages in detail
chaptersConfig.forEach(ch => {
  const enqueues = extractEnqueues(ch.step);
  const data = JSON.parse(JSON.parse(enqueues[0]));
  const root = unpack(data, 0);
  const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
  if (!conv || !conv.linear_conversation) {
    console.log(`[${ch.name}] No linear conversation!`);
    return;
  }

  const msgs = conv.linear_conversation
    .map((item, idx) => ({ idx, message: item.message }))
    .filter(m => m.message && (m.message.author?.role === 'assistant' || m.message.role === 'assistant'))
    .map(m => {
      const text = (m.message.content?.parts || []).filter(p => typeof p === 'string').join('\n');
      return { idx: m.idx, text, len: text.length };
    })
    .filter(m => m.len > 500);

  console.log(`\n======================================================`);
  console.log(`Chapter: ${ch.fullName} (${msgs.length} substantive assistant messages)`);
  console.log(`======================================================`);

  msgs.forEach(m => {
    // Check what batch or section this message claims
    const bMatch = m.text.match(/Batch\s*(\d+)/i);
    const bNum = bMatch ? bMatch[1] : '?';
    // Check questions in this message
    const qMatches = [...m.text.matchAll(/(?:###|##|\*\*|)\s*(?:Q|Question)\s*(\d+)[\.:\s\-—]+/gi)].map(x => parseInt(x[1]));
    const uniqueQ = [...new Set(qMatches)].sort((a,b) => a - b);
    const firstLine = m.text.split('\n').filter(l => l.trim().length > 0)[0] || '';
    console.log(`  Msg #${m.idx} -> Batch: ${bNum} | Qs (${uniqueQ.length}): ${uniqueQ.slice(0, 5).join(',')}${uniqueQ.length > 5 ? '...' + uniqueQ[uniqueQ.length-1] : ''} | ${firstLine.substring(0, 60)}`);
  });
});
