const fs = require('fs');

const files = [
  'raw_chats/chat_9_Physics_MCQ_Question_Bank.md',
  'raw_chats/chat_10_Generate_Physics_MCQs.md',
  'raw_chats/chat_11_Physics_MCQ_Bank.md',
  'raw_chats/chat_12_HOUSEHOLD_ELCTRICIT.md'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`=== SVGs in ${f} ===`);
  const svgs = content.match(/<svg[\s\S]*?<\/svg>/gi) || [];
  console.log('Count:', svgs.length);
  if (svgs.length > 0) {
    console.log('Sample 1 (first 250 chars):', svgs[0].substring(0, 250));
    console.log('Sample 1 attributes:', svgs[0].match(/<svg[^>]*>/)[0]);
  }
});
