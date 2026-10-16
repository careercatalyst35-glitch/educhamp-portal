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
    const endScript = text.indexOf('</script>', start);
    if (endScript === -1) break;
    let end = endScript;
    while (end > start && text[end] !== ')') end--;
    results.push(text.substring(start, end).trim());
    pos = endScript;
  }
  return results;
}

function unpack(data, idx, seen = new Map()) {
  if (typeof idx !== 'number') return idx;
  if (idx < 0) {
    if (idx === -1) return undefined;
    if (idx === -2) return null;
    if (idx === -3) return NaN;
    if (idx === -4) return Infinity;
    if (idx === -5) return undefined;
    return null;
  }
  if (seen.has(idx)) return seen.get(idx);

  const raw = data[idx];
  if (raw === null || typeof raw !== 'object') {
    return raw;
  }

  if (Array.isArray(raw)) {
    const arr = [];
    seen.set(idx, arr);
    for (const item of raw) {
      arr.push(unpack(data, item, seen));
    }
    return arr;
  }

  const obj = {};
  seen.set(idx, obj);
  for (const [k, v] of Object.entries(raw)) {
    if (k.startsWith('_')) {
      const keyIdx = parseInt(k.substring(1), 10);
      const keyName = data[keyIdx];
      obj[keyName] = unpack(data, v, seen);
    } else {
      obj[keyName || k] = unpack(data, v, seen);
    }
  }
  return obj;
}

function parseBatchQuestions(text, batchType) {
  const qHeaderRegex = /(?:^|\n)(?:###|##|\*\*|)\s*(?:Q|Question)\s*(\d+)[\.:\s\-—]+([^\n\r]*)/gi;
  const matches = [...text.matchAll(qHeaderRegex)];
  const results = [];

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const qNum = parseInt(m[1], 10);
    const qTitle = m[2].replace(/\*\*/g, '').replace(/\[|\]/g, '').trim();
    const startIndex = m.index + m[0].length;
    const endIndex = i + 1 < matches.length ? matches[i + 1].index : text.length;
    const block = text.substring(startIndex, endIndex).trim();

    const lines = block.split('\n');
    let inOptions = false;
    let currentKey = null;
    let currentText = [];
    const options = [];
    let correctOption = null;
    let explanationLines = [];
    let inExplanation = false;
    let questionLines = [];

    for (const line of lines) {
      const trimmed = line.trim();

      const ansMatch = trimmed.match(/^(?:\*\*)?(?:Correct\s*Answer|Answer)\s*(?:\\)?(?:\:|\—|\:|\*\*\:?)\s*(?:\*\*)?([A-D])/i);
      const reasonMatch = trimmed.match(/^(?:\*\*)?(?:Reason|Explanation)\s*(?:\\)?(?:\:|\—|\:|\*\*\:?)\s*(.*)/i);
      const optMatch = trimmed.match(/^[-*]?\s*(?:\*\*)?([A-D])(?:\)|\.|\:|\*\*\))\s*(.*)/i);

      if (ansMatch) {
        if (currentKey) {
          options.push({ key: currentKey, text: currentText.join('\n').trim() });
          currentKey = null;
          currentText = [];
        }
        correctOption = ansMatch[1].toUpperCase();
        inOptions = false;
        continue;
      }

      if (reasonMatch) {
        if (currentKey) {
          options.push({ key: currentKey, text: currentText.join('\n').trim() });
          currentKey = null;
          currentText = [];
        }
        inOptions = false;
        inExplanation = true;
        if (reasonMatch[1].trim()) {
          explanationLines.push(reasonMatch[1].trim());
        }
        continue;
      }

      if (inExplanation) {
        explanationLines.push(line);
        continue;
      }

      if (optMatch && !inExplanation) {
        if (currentKey) {
          options.push({ key: currentKey, text: currentText.join('\n').trim() });
        }
        inOptions = true;
        currentKey = optMatch[1].toUpperCase();
        currentText = [optMatch[2]];
        continue;
      }

      if (inOptions) {
        currentText.push(line);
      } else {
        questionLines.push(line);
      }
    }

    if (currentKey) {
      options.push({ key: currentKey, text: currentText.join('\n').trim() });
    }

    // Extract SVG if present
    let diagramSvg = null;
    const fullBlock = block;
    const svgMatch = fullBlock.match(/<svg[\s\S]*?<\/svg>/i);
    if (svgMatch) {
      diagramSvg = svgMatch[0];
    }

    results.push({
      num: qNum,
      title: qTitle,
      question: questionLines.join('\n').trim(),
      diagramSvg,
      options,
      correct_option: correctOption,
      explanation: explanationLines.join('\n').trim(),
      batchType
    });
  }
  return results;
}

// Test on Hydrogen Chloride
const enqueues = extractEnqueues(4626);
const data = JSON.parse(JSON.parse(enqueues[0]));
const root = unpack(data, 0);
const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
const msgs = conv.linear_conversation
  .map(item => item.message)
  .filter(m => m && (m.author?.role === 'assistant' || m.role === 'assistant'))
  .map(m => (m.content?.parts || []).filter(p => typeof p === 'string').join('\n'))
  .filter(t => t.length > 500);

const b1 = parseBatchQuestions(msgs[0], 'diagrammatic');
const b2 = parseBatchQuestions(msgs[1], 'diagrammatic');
const b3 = parseBatchQuestions(msgs[4], 'numerical');
const b4 = parseBatchQuestions(msgs[5], 'numerical');
const b5 = parseBatchQuestions(msgs[6], 'theoretical');
const b6 = parseBatchQuestions(msgs[9], 'complex');

console.log(`Parsed Batch 1: ${b1.length} questions`);
console.log(`Parsed Batch 2: ${b2.length} questions`);
console.log(`Parsed Batch 3: ${b3.length} questions`);
console.log(`Parsed Batch 4: ${b4.length} questions`);
console.log(`Parsed Batch 5: ${b5.length} questions`);
console.log(`Parsed Batch 6: ${b6.length} questions`);

const allHCl = [...b1, ...b2, ...b3, ...b4, ...b5, ...b6];
console.log(`Total HCl questions: ${allHCl.length}`);

// Audit quality:
let missingOpts = 0;
let missingAns = 0;
let missingExpl = 0;
allHCl.forEach(q => {
  if (q.options.length !== 4) missingOpts++;
  if (!q.correct_option) missingAns++;
  if (!q.explanation) missingExpl++;
});

console.log(`Missing 4 options: ${missingOpts}`);
console.log(`Missing correct answer: ${missingAns}`);
console.log(`Missing explanation: ${missingExpl}`);

if (missingAns > 0 || missingOpts > 0) {
  allHCl.filter(q => q.options.length !== 4 || !q.correct_option).forEach(q => {
    console.log(`Issue in Q${q.num} (${q.batchType}): opts=${q.options.length}, ans=${q.correct_option}`);
  });
}
