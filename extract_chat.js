const fs = require('fs');

const html = fs.readFileSync('C:\\Users\\25car\\.gemini\\antigravity\\brain\\576231d8-6ff3-4005-81c9-c8f9969277f8\\.system_generated\\steps\\3637\\content.md', 'utf8');
const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/g) || [];
const s8 = scripts[8] || '';

// Extract the argument passed to streamController.enqueue(...)
const match = s8.match(/streamController\.enqueue\(([\s\S]*?)\);\s*<\/script>/);
if (!match) {
  console.log('No enqueue match found');
  process.exit(1);
}

// match[1] is a JSON string literal like "[{...}, ...]\n"
const raw = JSON.parse(match[1]);
const innerJson = typeof raw === 'string' ? JSON.parse(raw) : raw;
console.log('Parsed inner stream array length:', innerJson.length);

const textStrings = [];
innerJson.forEach(item => {
  if (typeof item === 'string' && item.length > 50) {
    textStrings.push(item);
  }
});

console.log('Total text strings > 50 chars:', textStrings.length);
console.log('\n--- Sample First 3 strings ---');
textStrings.slice(0, 3).forEach((s, i) => console.log(`[${i}]: ${s.substring(0, 150)}...\n`));
