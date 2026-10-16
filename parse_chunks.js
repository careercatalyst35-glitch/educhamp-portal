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
    // Find the ending `);\n</script>` or `);</script>`
    const endScript = text.indexOf('</script>', start);
    if (endScript === -1) break;
    let end = endScript;
    while (end > start && text[end] !== ')') {
      end--;
    }
    const argStr = text.substring(start, end).trim();
    results.push(argStr);
    pos = endScript;
  }
  return results;
}

const steps = [4612, 4614, 4616, 4618, 4620, 4622, 4624, 4626];

steps.forEach((step, idx) => {
  console.log(`\n=== STEP ${step} (Link ${idx + 1}) ===`);
  const enqueues = extractEnqueues(step);
  console.log(`Found ${enqueues.length} chunks`);
  enqueues.forEach((raw, i) => {
    console.log(`Chunk ${i} length: ${raw.length}`);
    try {
      const unescaped = JSON.parse(raw);
      console.log(`Chunk ${i} JSON.parse (string unescape) succeeded! Length: ${unescaped.length}`);
      const parsed = JSON.parse(unescaped);
      console.log(`Chunk ${i} inner JSON.parse succeeded!`);
      
      // Let's find conversation messages in parsed
      let strings = [];
      function collect(val, d = 0) {
        if (d > 12) return;
        if (typeof val === 'string') {
          if (val.length > 30) strings.push(val);
        } else if (Array.isArray(val)) {
          val.forEach(v => collect(v, d + 1));
        } else if (val && typeof val === 'object') {
          Object.values(val).forEach(v => collect(v, d + 1));
        }
      }
      collect(parsed);
      console.log(`Total strings >30 chars: ${strings.length}`);
      const qStrings = strings.filter(s => s.includes('## Q') || s.includes('Question') || s.includes('ICSE Class 10 Chemistry'));
      console.log(`Question/Title strings: ${qStrings.length}`);
      qStrings.forEach(qs => {
        const preview = qs.split('\n').filter(l => l.trim().length > 0).slice(0, 3).join(' | ');
        console.log(`  -> [${qs.length} chars] ${preview.substring(0, 100)}`);
      });
    } catch (e) {
      console.error(`Chunk ${i} parse error: ${e.message}`);
    }
  });
});
