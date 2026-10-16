const fs = require('fs');

const steps = [4612, 4614, 4616, 4618, 4620, 4622, 4624, 4626];

steps.forEach((step, idx) => {
  const p = `C:/Users/25car/.gemini/antigravity/brain/576231d8-6ff3-4005-81c9-c8f9969277f8/.system_generated/steps/${step}/content.md`;
  if (!fs.existsSync(p)) return;
  const text = fs.readFileSync(p, 'utf8');
  
  // Find all enqueue matches
  const enqueueMatches = [...text.matchAll(/window\.__reactRouterContext\.streamController\.enqueue\(/g)];
  console.log(`Step ${step} (Link ${idx + 1}): found ${enqueueMatches.length} enqueue calls`);
  enqueueMatches.forEach((m, i) => {
    console.log(`  Enqueue ${i} index: ${m.index}`);
  });
});
