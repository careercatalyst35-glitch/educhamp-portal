const fs = require('fs');

const chaptersConfig = [
  { step: 4612, link: 1, key: 'periodic_table', name: 'Periodic Table' },
  { step: 4614, link: 2, key: 'chemical_bonding', name: 'Chemical Bonding' },
  { step: 4616, link: 3, key: 'acids_bases_and_salts', name: 'Acids, Bases and Salts' },
  { step: 4618, link: 4, key: 'analytical_chemistry', name: 'Analytical Chemistry' },
  { step: 4620, link: 5, key: 'mole_concept', name: 'Mole Concept' },
  { step: 4622, link: 6, key: 'electrolysis', name: 'Electrolysis' },
  { step: 4624, link: 7, key: 'metallurgy', name: 'Metallurgy' },
  { step: 4626, link: 8, key: 'hydrogen_chloride', name: 'Hydrochloric Acid' },
];

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

    // Default AR options if Assertion-Reason question
    if (options.length === 0 && (block.includes('Assertion') || block.includes('Reason'))) {
      options.push(
        { key: 'A', text: 'Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.' },
        { key: 'B', text: 'Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.' },
        { key: 'C', text: 'Assertion is true, but Reason is false.' },
        { key: 'D', text: 'Assertion is false, but Reason is true.' }
      );
    }

    // Extract SVG if present
    let diagramSvg = null;
    const svgMatch = block.match(/<svg[\s\S]*?<\/svg>/i);
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

// Find best messages and test extraction for each chapter
chaptersConfig.forEach(ch => {
  const enqueues = extractEnqueues(ch.step);
  const data = JSON.parse(JSON.parse(enqueues[0]));
  const root = unpack(data, 0);
  const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
  const msgs = conv.linear_conversation
    .map((item, idx) => ({ idx, message: item.message }))
    .filter(m => m.message && (m.message.author?.role === 'assistant' || m.message.role === 'assistant'))
    .map(m => {
      const text = (m.message.content?.parts || []).filter(p => typeof p === 'string').join('\n');
      return { idx: m.idx, text, len: text.length };
    })
    .filter(m => m.len > 500);

  console.log(`\n======================================================`);
  console.log(`Chapter: ${ch.name}`);
  console.log(`======================================================`);

  const batches = [
    { b: 1, type: 'diagrammatic', min: 1, max: 20 },
    { b: 2, type: 'diagrammatic', min: 21, max: 40 },
    { b: 3, type: 'numerical', min: 1, max: 20 },
    { b: 4, type: 'numerical', min: 21, max: 40 },
    { b: 5, type: 'theoretical', min: 1, max: 30 },
    { b: 6, type: 'complex', min: 1, max: 30 },
  ];

  let chapterTotal = 0;
  batches.forEach(bInfo => {
    // Find candidate message that has the full set of questions
    let bestMsg = null;
    let maxQs = 0;

    msgs.forEach(m => {
      const qs = parseBatchQuestions(m.text, bInfo.type);
      const matchingQs = qs.filter(q => q.num >= bInfo.min && q.num <= bInfo.max);
      // check if message has batch indicator or if counts match
      if (matchingQs.length > maxQs) {
        maxQs = matchingQs.length;
        bestMsg = { msg: m, qs: matchingQs };
      }
    });

    if (bestMsg) {
      chapterTotal += bestMsg.qs.length;
      console.log(`  Batch ${bInfo.b} (${bInfo.type}): found ${bestMsg.qs.length} Qs in Msg #${bestMsg.msg.idx} (range Q${bInfo.min}..Q${bInfo.max})`);
    } else {
      console.log(`  Batch ${bInfo.b} (${bInfo.type}): FAILED to find message!`);
    }
  });

  console.log(`Total questions found for ${ch.name}: ${chapterTotal} / 140`);
});
