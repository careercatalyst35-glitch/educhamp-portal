const fs = require('fs');

const steps = [
  { step: 4612, link: 1, url: 'https://chatgpt.com/share/6acffe8c-e284-83e8-bf5c-8e843d51254a' },
  { step: 4614, link: 2, url: 'https://chatgpt.com/share/6acffeae-b880-83e8-bdd3-4f8f70d50537' },
  { step: 4616, link: 3, url: 'https://chatgpt.com/share/6acffece-aba0-83e8-bb5d-905e9314d84a' },
  { step: 4618, link: 4, url: 'https://chatgpt.com/share/6acffeeb-16d0-83ee-814e-e117859ffbd2' },
  { step: 4620, link: 5, url: 'https://chatgpt.com/share/6acffefd-ad94-83ee-91b8-a99bd929fbfe' },
  { step: 4622, link: 6, url: 'https://chatgpt.com/share/6acfff25-1cbc-83ee-9d4e-867662b2c9e7' },
  { step: 4624, link: 7, url: 'https://chatgpt.com/share/6acfff39-6978-83ee-abe8-e9231a4478b1' },
  { step: 4626, link: 8, url: 'https://chatgpt.com/share/6acfff4f-b774-83ec-b9cd-6926c60919bf' },
];

function extractConversationText(stepNum) {
  const p = `C:/Users/25car/.gemini/antigravity/brain/576231d8-6ff3-4005-81c9-c8f9969277f8/.system_generated/steps/${stepNum}/content.md`;
  if (!fs.existsSync(p)) return null;
  const text = fs.readFileSync(p, 'utf8');
  const match = text.match(/window\.__reactRouterContext\.streamController\.enqueue\(("[\s\S]*?")\);/);
  if (!match) return null;
  const rawJsonStr = JSON.parse(match[1]);
  const parsed = JSON.parse(rawJsonStr);

  let allLongStrings = [];
  function collectStrings(obj, depth = 0) {
    if (depth > 12) return;
    if (typeof obj === 'string') {
      if (obj.length > 50) allLongStrings.push(obj);
    } else if (Array.isArray(obj)) {
      obj.forEach(x => collectStrings(x, depth + 1));
    } else if (obj && typeof obj === 'object') {
      Object.values(obj).forEach(x => collectStrings(x, depth + 1));
    }
  }
  collectStrings(parsed);

  return allLongStrings;
}

steps.forEach(({ step, link, url }) => {
  const strings = extractConversationText(step);
  console.log(`\n=================== LINK ${link} (Step ${step}) ===================`);
  console.log(`URL: ${url}`);
  if (!strings) {
    console.log('Failed to extract strings!');
    return;
  }
  console.log(`Total long strings extracted: ${strings.length}`);
  
  // Find strings with headers or "## Q" or "Chapter"
  const qStrings = strings.filter(s => s.includes('## Q') || s.includes('Q1.') || s.includes('Question') || s.includes('ICSE Class 10 Chemistry'));
  console.log(`Questions/Content blocks: ${qStrings.length}`);
  qStrings.forEach((qs, i) => {
    const lines = qs.split('\n').filter(l => l.trim().length > 0);
    console.log(`--- Block ${i+1} (${qs.length} chars) ---`);
    console.log(lines.slice(0, 5).join('\n'));
    // Count questions in this block
    const qMatches = qs.match(/##\s*Q\d+/gi) || qs.match(/\*\*Question\s*\d+/gi) || [];
    console.log(`Questions found in block: ${qMatches.length} (${qMatches.slice(0, 10).join(', ')}${qMatches.length > 10 ? '...' : ''})`);
  });
});
