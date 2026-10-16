const fs = require('fs');

const files = [
  { filePath: './raw_chats/chat_9_Physics_MCQ_Question_Bank.md', chapter: 'Radioactivity' },
  { filePath: './raw_chats/chat_10_Generate_Physics_MCQs.md', chapter: 'Calorimetry' },
  { filePath: './raw_chats/chat_11_Physics_MCQ_Bank.md', chapter: 'Electromagnetism' },
  { filePath: './raw_chats/chat_12_HOUSEHOLD_ELCTRICIT.md', chapter: 'Household Circuits' }
];

files.forEach(f => {
  const content = fs.readFileSync(f.filePath, 'utf8');
  // Check unique questions by title/question text
  const qMatches = content.match(/(?:^|\n)(?:#{1,4}\s*(?:Question|Q)\s*\d+[\.\:\s—\-]|(?:\*\*Q\d+[\.\:]\*\*|\*\*Question\s*\d+[\.\:]?\*\*|\*\*Q\d+\.\*\*)|Q\d+[\.\:])[^\n]*/gi) || [];
  console.log(`=== ${f.chapter} ===`);
  console.log('Total question heading lines in raw file:', qMatches.length);
  // Get unique titles
  const cleanHeadings = qMatches.map(h => h.replace(/^[\s\n#*]+(?:Question|Q)\s*\d+[\.\:\s—\-]*/i, '').trim()).filter(h => h.length > 5);
  const uniqueHeadings = new Set(cleanHeadings.map(h => h.toLowerCase()));
  console.log('Unique non-empty question titles:', uniqueHeadings.size);
});
