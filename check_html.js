const fs = require('fs');

const steps = [4612, 4614, 4616, 4618, 4620, 4622, 4624, 4626];

steps.forEach((step, idx) => {
  const p = `C:/Users/25car/.gemini/antigravity/brain/576231d8-6ff3-4005-81c9-c8f9969277f8/.system_generated/steps/${step}/content.md`;
  if (!fs.existsSync(p)) return;
  const text = fs.readFileSync(p, 'utf8');
  console.log(`\n=== STEP ${step} (Link ${idx + 1}) ===`);
  console.log('Includes __NEXT_DATA__:', text.includes('__NEXT_DATA__'));

  // Let's search for JSON scripts
  const match = text.match(/window\.__reactRouterContext\.streamController\.enqueue\(("[\s\S]*?")\);/);
  if (match) {
    try {
      const rawJsonStr = JSON.parse(match[1]);
      console.log('Successfully unescaped JSON string! Length:', rawJsonStr.length);
      const parsed = JSON.parse(rawJsonStr);
      console.log('Parsed array/object! Length:', Array.isArray(parsed) ? parsed.length : Object.keys(parsed));
      
      // Let's search inside parsed for strings that look like questions or titles
      let foundStrings = [];
      function findStrings(obj, depth = 0) {
        if (depth > 10) return;
        if (typeof obj === 'string') {
          if (obj.length > 30 && (obj.includes('?') || obj.includes('Chapter') || obj.includes('Periodic') || obj.includes('Acid') || obj.includes('Mole') || obj.includes('Option') || obj.includes('(A)') || obj.includes('Question'))) {
            foundStrings.push(obj);
          }
        } else if (Array.isArray(obj)) {
          obj.forEach(item => findStrings(item, depth + 1));
        } else if (obj && typeof obj === 'object') {
          Object.values(obj).forEach(val => findStrings(val, depth + 1));
        }
      }
      findStrings(parsed);
      console.log('Found strings count:', foundStrings.length);
      console.log('Sample string 0..3:', foundStrings.slice(0, 5));
    } catch(e) {
      console.error('Error parsing:', e.message);
    }
  } else {
    console.log('Match not found for window.__reactRouterContext.streamController.enqueue');
  }
});
