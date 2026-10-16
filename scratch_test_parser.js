const fs = require('fs');

function testChat(filePath, chapterName) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract table answers if any
  const tableMap = new Map();
  const batches = content.split(/(?=\n#+ )/);
  batches.forEach(b => {
    if (b.includes('| Answer |') || b.includes('| Correct |') || b.includes('| Correct answer |')) {
      const lines = b.split('\n');
      lines.forEach(l => {
        const parts = l.split('|').map(p => p.trim());
        if (parts.length >= 4) {
          const qNum = parseInt(parts[1], 10);
          const ans = parts[2];
          const exp = parts.slice(3, -1).join(' | ').trim();
          if (!isNaN(qNum) && /^[A-D]$/i.test(ans)) {
            tableMap.set(qNum, { answer: ans.toUpperCase(), explanation: exp });
          }
        }
      });
    }
  });

  // Split into chunks by question headers
  // Comprehensive header pattern:
  // #{1,4}\s*(?:Question|Q)\s*\d+[\.\:\s—\-]?
  // \*\*Q\d+[\.\:]?\*\* or \*\*Q\d+\.\*\* or \*\*Question\s*\d+[\.\:]?\*\*
  // Q\d+[\.\:]
  const qRegex = /(?=(?:^|\n)(?:#{1,4}\s*(?:Question|Q)\s*\d+[\.\:\s—\-]|(?:\*\*Q\d+[\.\:]\*\*|\*\*Question\s*\d+[\.\:]?\*\*|\*\*Q\d+\.\*\*)|(?:^|\n)Q\d+[\.\:]))/gi;

  const qChunks = content.split(qRegex);
  const parsed = [];
  const seen = new Set();

  qChunks.forEach(chunk => {
    // Check if chunk has options A, B, C, D
    const letters = ['A', 'B', 'C', 'D'];
    const options = letters.map(letter => {
      const re = new RegExp(`(?:^|\\n)\\s*(?:${letter}\\.|\\(${letter}\\)|${letter}\\))\\s*([^\\n]+)`, 'i');
      const m = chunk.match(re);
      return {
        key: letter,
        text: m ? m[1].trim() : ''
      };
    }).filter(o => o.text.length > 0);

    if (options.length < 2) return;

    // Header extraction
    const headerMatch = chunk.match(/(?:#{1,4}\s*(?:Question|Q)\s*(\d+)[\.\:\s—\-]|(?:\*\*Q(\d+)[\.\:]\*\*|\*\*Question\s*(\d+)[\.\:]?\*\*|\*\*Q(\d+)\.\*\*)|(?:^|\n)Q(\d+)[\.\:])([^\n]*)/i);
    const qNum = headerMatch ? parseInt(headerMatch[1] || headerMatch[2] || headerMatch[3] || headerMatch[4] || headerMatch[5], 10) : null;
    let title = headerMatch ? (headerMatch[6] || '').trim().replace(/^\[.*?\]\s*—?\s*/, '').replace(/^\*\*|\*\*$/g, '') : '';

    const svgMatch = chunk.match(/<svg[\s\S]*?<\/svg>/i);

    // Answer
    let correct_option = null;
    let explanation = '';
    const ansMatch = chunk.match(/(?:\*\*Correct Answer[\s\:]*\*?|\*\*Correct answer[\s\:]*\*?|Correct Answer[\s\:]*|Correct answer[\s\:]*)([A-D])/i);
    if (ansMatch) {
      correct_option = ansMatch[1].toUpperCase();
      const expMatch = chunk.match(/(?:\*\*Reason[\s\:]*\*?|\*\*Explanation[\s\:]*\*?|Reason[\s\:]*|Explanation[\s\:]*)([\s\S]*?)(?=\n---|###|##|$)/i);
      explanation = expMatch ? expMatch[1].trim() : '';
    } else if (qNum && tableMap.has(qNum)) {
      const t = tableMap.get(qNum);
      correct_option = t.answer;
      explanation = t.explanation;
    }

    // Clean question statement
    let qText = chunk
      .replace(/(?:#{1,4}\s*(?:Question|Q)\s*\d+[\.\:\s—\-]|(?:\*\*Q\d+[\.\:]\*\*|\*\*Question\s*\d+[\.\:]?\*\*|\*\*Q\d+\.\*\*)|(?:^|\n)Q\d+[\.\:])[^\n]*/i, '')
      .replace(/```svg[\s\S]*?```/gi, '')
      .replace(/<box[\s\S]*?<\/box>/gi, '')
      .replace(/<svg[\s\S]*?<\/svg>/gi, '')
      .replace(/(?:^|\n)\s*(?:[A-D]\.|\([A-D]\)|[A-D]\))[\s\S]*$/i, '')
      .trim();

    if (!qText && title) qText = title;

    const normKey = (qText || title).toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 80);
    if (normKey.length > 10 && !seen.has(normKey)) {
      seen.add(normKey);
      parsed.push({
        qNum,
        title: title || `${chapterName} Question`,
        question: qText,
        options,
        correct_option: correct_option || 'A',
        explanation: explanation || `Refer to ${chapterName} ICSE class 10 standard concepts.`,
        hasSvg: !!svgMatch
      });
    }
  });

  console.log(chapterName.padEnd(42) + ' -> Chunks: ' + String(qChunks.length).padStart(3) + ', Unique Qs: ' + String(parsed.length).padStart(3) + ', Diagrams: ' + String(parsed.filter(q => q.hasSvg).length).padStart(3) + ', With Ans: ' + String(parsed.filter(q => q.correct_option).length).padStart(3));
  return parsed;
}

const res1 = testChat('./raw_chats/chat_1_Force.md', 'Force');
const res2 = testChat('./raw_chats/chat_2_WORK_ENERGY_POWER.md', 'Work, Energy and Power');
const res3 = testChat('./raw_chats/chat_3_MACHINES.md', 'Machines');
const res4 = testChat('./raw_chats/chat_4_REFRACTION_OF_LIGHT.md', 'Refraction of Light Plane');
const res5 = testChat('./raw_chats/chat_5_Write_Lens_MCQ_Bank.md', 'Refraction through Lens');
const res6 = testChat('./raw_chats/chat_6_Generate_Physics_MCQs.md', 'Spectrum');
const res7 = testChat('./raw_chats/chat_7_Create_Sound_MCQ_Bank.md', 'Sound');
const res8 = testChat('./raw_chats/chat_8_Physics_MCQ_Bank.md', 'Current Electricity');
