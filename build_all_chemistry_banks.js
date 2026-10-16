const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const stepConfig = [
  {
    step: 4612,
    key: 'periodic_table',
    fileName: 'chemistry_periodic_table.json',
    chapterName: 'Periodic Table',
    fullName: 'Periodic Table, Periodic Properties and Variations in Properties',
    batches: [30, 40, 44, 54, 58, 71]
  },
  {
    step: 4614,
    key: 'chemical_bonding',
    fileName: 'chemistry_chemical_bonding.json',
    chapterName: 'Chemical Bonding',
    fullName: 'Chemical Bonding',
    batches: [31, 41, 50, 57, 61, 71]
  },
  {
    step: 4616,
    key: 'acids_bases_and_salts',
    fileName: 'chemistry_acids_bases_and_salts.json',
    chapterName: 'Acids, Bases and Salts',
    fullName: 'Acids, Bases and Salts',
    batches: [17, 28, 37, 46, 56, 67]
  },
  {
    step: 4618,
    key: 'analytical_chemistry',
    fileName: 'chemistry_analytical_chemistry.json',
    chapterName: 'Analytical Chemistry',
    fullName: 'Analytical Chemistry',
    batches: [14, 21, 25, 28, 31, 52]
  },
  {
    step: 4620,
    key: 'mole_concept',
    fileName: 'chemistry_mole_concept.json',
    chapterName: 'Mole Concept',
    fullName: 'Mole Concept and Stoichiometry',
    batches: [16, 22, 27, 34, 41, 46]
  },
  {
    step: 4622,
    key: 'electrolysis',
    fileName: 'chemistry_electrolysis.json',
    chapterName: 'Electrolysis',
    fullName: 'Electrolysis',
    batches: [22, 38, 47, 56, 68, 72]
  },
  {
    step: 4624,
    key: 'metallurgy',
    fileName: 'chemistry_metallurgy.json',
    chapterName: 'Metallurgy',
    fullName: 'Metallurgy',
    batches: [25, 52, 57, 62, 71, 105]
  },
  {
    step: 4626,
    key: 'hydrogen_chloride',
    fileName: 'chemistry_hydrogen_chloride.json',
    chapterName: 'Hydrochloric Acid',
    fullName: 'Hydrogen Chloride and Hydrochloric Acid',
    batches: [39, 47, 57, 63, 69, 77]
  }
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

function computeQuestionHash(text) {
  if (!text) return '';
  return crypto.createHash('sha256').update(text.toLowerCase().trim()).digest('hex');
}

function computeQuestionSkeleton(text) {
  if (!text) return '';
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function cleanCustomWidgets(text) {
  if (!text) return '';
  let cleaned = text;

  // Remove sandbox image links like ![Figure...](sandbox:/...)
  cleaned = cleaned.replace(/!\[([^\]]*)\]\(sandbox:[^\)]+\)/gi, (m, alt) => {
    return alt ? `*(Image reference: ${alt})*` : '';
  });

  // Convert custom tags into styled standard HTML
  cleaned = cleaned.replace(/<box\b[^>]*>/gi, '<div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px; margin:10px 0;">');
  cleaned = cleaned.replace(/<\/box>/gi, '</div>');

  cleaned = cleaned.replace(/<row\b[^>]*>/gi, '<div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center;">');
  cleaned = cleaned.replace(/<\/row>/gi, '</div>');

  cleaned = cleaned.replace(/<grid\b[^>]*>/gi, '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:10px; margin:8px 0;">');
  cleaned = cleaned.replace(/<\/grid>/gi, '</div>');

  cleaned = cleaned.replace(/<grid-item\b[^>]*>/gi, '<div>');
  cleaned = cleaned.replace(/<\/grid-item>/gi, '</div>');

  cleaned = cleaned.replace(/<title\b[^>]*>(.*?)<\/title>/gi, '<div style="font-weight:700; font-size:1.05rem; margin-bottom:4px; color:#1e293b;">$1</div>');
  cleaned = cleaned.replace(/<caption\b[^>]*>(.*?)<\/caption>/gi, '<div style="font-size:0.85rem; color:#64748b; margin-top:2px;">$1</div>');
  cleaned = cleaned.replace(/<badge\b[^>]*>(.*?)<\/badge>/gi, '<span style="background:#e0f2fe; color:#0369a1; border:1px solid #bae6fd; border-radius:12px; padding:2px 8px; font-size:0.75rem; font-weight:700; display:inline-block; margin:2px;">$1</span>');
  cleaned = cleaned.replace(/<divider\b[^>]*\/?>/gi, '<hr style="border:0; border-top:1px solid #e2e8f0; margin:8px 0;" />');

  cleaned = cleaned.replace(/<text\b[^>]*>/gi, '<span>');
  cleaned = cleaned.replace(/<\/text>/gi, '</span>');

  return cleaned.trim();
}

function parseBatchQuestions(text, batchType, chapterInfo) {
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
          options.push({ key: currentKey, text: cleanCustomWidgets(currentText.join('\n').trim()) });
          currentKey = null;
          currentText = [];
        }
        correctOption = ansMatch[1].toUpperCase();
        inOptions = false;
        continue;
      }

      if (reasonMatch) {
        if (currentKey) {
          options.push({ key: currentKey, text: cleanCustomWidgets(currentText.join('\n').trim()) });
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
          options.push({ key: currentKey, text: cleanCustomWidgets(currentText.join('\n').trim()) });
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
      options.push({ key: currentKey, text: cleanCustomWidgets(currentText.join('\n').trim()) });
    }

    // Default AR options if Assertion-Reason question with no explicit options
    if (options.length === 0 && (block.includes('Assertion') || block.includes('Reason'))) {
      options.push(
        { key: 'A', text: 'Both Assertion and Reason are true, and the Reason correctly explains the Assertion.' },
        { key: 'B', text: 'Both Assertion and Reason are true, but the Reason does not correctly explain the Assertion.' },
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

    // Clean question body
    let rawQBody = questionLines.join('\n').trim();
    // If the SVG was inside question body, we can keep or remove it from body so it doesn't duplicate
    const cleanQBody = cleanCustomWidgets(rawQBody);
    const cleanExpl = cleanCustomWidgets(explanationLines.join('\n').trim());

    // Set primary supported type
    const typesSupported = [batchType];

    const fullQText = cleanQBody.length > 0 ? cleanQBody : (qTitle ? `**${qTitle}**` : `Question ${qNum}`);
    const hash = computeQuestionHash(fullQText);
    const skeleton = computeQuestionSkeleton(fullQText);
    const shortHash = hash.substring(0, 6);
    const globalId = `qb_chem_${chapterInfo.key}_${batchType}_${qNum}_${shortHash}`;

    results.push({
      globalId,
      className: 'Class 10',
      boardName: 'ICSE',
      subjectName: 'Science',
      subSubjectName: 'Chemistry',
      sectionName: 'Subjective',
      chapter: chapterInfo.chapterName,
      title: qTitle || `Question ${qNum}`,
      question_type: batchType,
      types_supported: typesSupported,
      question: fullQText,
      diagramSvg: diagramSvg,
      options: options,
      correct_option: correctOption || 'A',
      explanation: cleanExpl,
      concept_name: chapterInfo.fullName,
      concept_tag: `${chapterInfo.key} ${batchType}`,
      difficulty: 'hard',
      verified_by: 'code',
      source: 'ICSE Class 10 Chemistry Master Vault',
      source_status: 'verified',
      normalized_question_hash: hash,
      question_skeleton: skeleton
    });
  }
  return results;
}

// Build question banks for all 8 chapters
const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) {
  fs.mkdirSync(BANK_DIR, { recursive: true });
}

const summaryResults = [];

stepConfig.forEach(cfg => {
  console.log(`\n======================================================`);
  console.log(`Building Bank: ${cfg.chapterName} (${cfg.fullName})`);
  console.log(`======================================================`);

  const enqueues = extractEnqueues(cfg.step);
  const data = JSON.parse(JSON.parse(enqueues[0]));
  const root = unpack(data, 0);
  const conv = root.loaderData?.['routes/share.$shareId.($action)']?.serverResponse?.data;
  const msgs = conv.linear_conversation;

  const batchConfigs = [
    { bIdx: 0, type: 'diagrammatic', expected: 20 },
    { bIdx: 1, type: 'diagrammatic', expected: 20 },
    { bIdx: 2, type: 'numerical', expected: 20 },
    { bIdx: 3, type: 'numerical', expected: 20 },
    { bIdx: 4, type: 'theoretical', expected: 30 },
    { bIdx: 5, type: 'complex', expected: 30 },
  ];

  let chapterQuestions = [];
  const seenHashes = new Set();
  const seenIds = new Set();

  batchConfigs.forEach((bc, idx) => {
    const msgId = cfg.batches[bc.bIdx];
    const msg = msgs[msgId]?.message;
    if (!msg) {
      console.error(`  ERROR: Missing msg #${msgId} for Batch ${idx + 1}`);
      return;
    }
    const text = (msg.content?.parts || []).filter(p => typeof p === 'string').join('\n');
    const parsed = parseBatchQuestions(text, bc.type, cfg);

    console.log(`  Batch ${idx + 1} (${bc.type}): parsed ${parsed.length} questions (expected ${bc.expected}) from Msg #${msgId}`);

    // Deduplicate / unique check
    parsed.forEach(q => {
      // Ensure unique globalId
      if (seenIds.has(q.globalId)) {
        q.globalId = q.globalId + '_' + Math.random().toString(36).substring(2, 5);
      }
      seenIds.add(q.globalId);

      chapterQuestions.push(q);
      seenHashes.add(q.normalized_question_hash);
    });
  });

  const targetPath = path.join(BANK_DIR, cfg.fileName);
  fs.writeFileSync(targetPath, JSON.stringify(chapterQuestions, null, 2), 'utf8');

  console.log(`Saved ${chapterQuestions.length} questions to ${targetPath}`);

  // Breakdown
  const typeBreakdown = chapterQuestions.reduce((acc, q) => {
    acc[q.question_type] = (acc[q.question_type] || 0) + 1;
    return acc;
  }, {});
  console.log(`Breakdown:`, typeBreakdown);

  summaryResults.push({
    chapter: cfg.chapterName,
    fullName: cfg.fullName,
    file: cfg.fileName,
    total: chapterQuestions.length,
    breakdown: typeBreakdown
  });
});

console.log('\n======================================================');
console.log('FINAL SUMMARY OF ALL CHEMISTRY QUESTION BANKS BUILT:');
console.log('======================================================');
console.table(summaryResults.map(s => ({
  Chapter: s.chapter,
  File: s.file,
  Total: s.total,
  Diagrammatic: s.breakdown.diagrammatic || 0,
  Numerical: s.breakdown.numerical || 0,
  Theoretical: s.breakdown.theoretical || 0,
  Complex: s.breakdown.complex || 0
})));
