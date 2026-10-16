const fs = require('fs');
const content = fs.readFileSync('raw_chats/chat_12_HOUSEHOLD_ELCTRICIT.md', 'utf8');

const qRegex = /(?=(?:^|\n)(?:#{1,4}\s*(?:Question|Q)\s*\d+[\.\:\s—\-]|(?:\*\*Q\d+[\.\:]\*\*|\*\*Question\s*\d+[\.\:]?\*\*|\*\*Q\d+\.\*\*)|(?:^|\n)Q\d+[\.\:]))/gi;
const chunks = content.split(qRegex);

const boxChunks = chunks.filter(c => c.includes('<box'));
console.log('Total chunks with box in chat 12:', boxChunks.length);
boxChunks.slice(0, 3).forEach((c, idx) => {
  console.log(`\n================= SAMPLE ${idx + 1} =================`);
  console.log(c.substring(0, 800));
});
