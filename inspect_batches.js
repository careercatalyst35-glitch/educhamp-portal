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

steps.forEach(({ step, link, name }) => {
  console.log(`\n======================================================`);
  console.log(`LINK ${link}: ${name} (Step ${step})`);
  console.log(`======================================================`);
  const enqueues = extractEnqueues(step);
  const raw = enqueues[0];
  try {
    const unescaped = JSON.parse(raw);
    const parsed = JSON.parse(unescaped);
    
    // Search for all messages / texts
    let messages = [];
    function scan(val, d = 0) {
      if (d > 14) return;
      if (typeof val === 'string') {
        if (val.includes('Batch') || val.includes('Q1.') || val.includes('## Q1') || val.includes('### Q1') || val.includes('Question 1')) {
          messages.push(val);
        }
      } else if (Array.isArray(val)) {
        val.forEach(v => scan(v, d + 1));
      } else if (val && typeof val === 'object') {
        Object.values(val).forEach(v => scan(v, d + 1));
      }
    }
    scan(parsed);

    console.log(`Found ${messages.length} candidate text chunks with Batch/Question mentions.`);
    
    // Find unique batches
    const batchMentions = new Set();
    messages.forEach(m => {
      const bMatches = m.match(/Batch\s*\d+[^\n\r|#]*/gi) || [];
      bMatches.forEach(b => batchMentions.add(b.trim()));
    });
    console.log('Batch mentions:', Array.from(batchMentions));

  } catch(e) {
    console.error(`Error in Link ${link}:`, e.message);
  }
});
