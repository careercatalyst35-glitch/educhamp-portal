const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
const LOG_FILE = path.join(__dirname, config.rejectionLogFile || 'rejections.log');

function logRejection(reason, candidateDetails) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] REJECTED: ${reason} | Question: "${(candidateDetails.question || '').substring(0, 80)}..." | Concept: "${candidateDetails.concept_tag || 'N/A'}"\n`;
  try {
    fs.appendFileSync(LOG_FILE, logEntry, 'utf8');
  } catch (e) {
    console.error('Failed to write rejection log:', e.message);
  }
}

// 1. Exact Match Normalization & Hash
function normalizeText(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/\\[a-zA-Z]+/g, ' ') // Strip LaTeX commands
    .replace(/[^a-z0-9\s]/g, ' ')  // Strip punctuation & symbols, retain alphanumeric
    .replace(/\s+/g, ' ')          // Collapse whitespace
    .trim();
}

function computeQuestionHash(text) {
  const normalized = normalizeText(text);
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

// 2. Number-Swap Skeleton Normalization (e.g. "1+2" and "3+4" both become "#+#")
function computeQuestionSkeleton(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/\b\d+(\.\d+)?\b/g, '#') // Replace numbers with placeholder '#'
    .replace(/[^a-z#\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// 3. Token-Based Jaccard Similarity for Near-Duplicates
function computeJaccardSimilarity(textA, textB) {
  const normA = normalizeText(textA);
  const normB = normalizeText(textB);

  const tokensA = new Set(normA.split(/\s+/).filter(w => w.length > 0));
  const tokensB = new Set(normB.split(/\s+/).filter(w => w.length > 0));

  if (tokensA.size === 0 || tokensB.size === 0) return 0;

  let intersection = 0;
  tokensA.forEach(token => {
    if (tokensB.has(token)) intersection++;
  });

  const union = new Set([...tokensA, ...tokensB]).size;
  return union === 0 ? 0 : intersection / union;
}

// Cosine similarity between two numerical embedding vectors
function computeCosineSimilarity(vecA, vecB) {
  if (!vecA || !vecB || vecA.length !== vecB.length || vecA.length === 0) return 0;
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// 4. Concept Tag Synonym Normalizer & Synonyms Table
const SYNONYM_MAP = {
  'power of a point': 'power_of_a_point',
  'tangent secant theorem': 'power_of_a_point',
  'power of a point tangent secant': 'power_of_a_point',
  'ptolemy s theorem': 'ptolemy_theorem',
  'ptolemys theorem': 'ptolemy_theorem',
  'inscribed cyclic quadrilateral diagonals': 'ptolemy_theorem',
  'euler line': 'euler_line',
  'euler line ratio': 'euler_line',
  'pigeonhole principle': 'pigeonhole_principle',
  'dirichlet principle': 'pigeonhole_principle',
  'stars and bars': 'stars_and_bars',
  'stars and bars composition': 'stars_and_bars',
  'fermat s little theorem': 'fermats_little_theorem',
  'wilson s theorem': 'wilsons_theorem',
  'chinese remainder theorem': 'chinese_remainder_theorem',
  'am gm inequality': 'am_gm_inequality',
  'ceva s theorem': 'ceva_menelaus',
  'menelaus theorem': 'ceva_menelaus',
  'subfactorial derangement': 'derangements',
  'derangements': 'derangements'
};

function normalizeConceptTag(tag) {
  if (!tag) return '';
  const cleaned = tag.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  return SYNONYM_MAP[cleaned] || cleaned.replace(/\s+/g, '_');
}

// 5. RULE 1 Verification: No Repeated Question
function verifyRule1NoRepeatedQuestion(candidate, existingQuestions) {
  const candidateHash = computeQuestionHash(candidate.question);
  const candidateSkeleton = computeQuestionSkeleton(candidate.question);
  const threshold = config.nearDuplicateThreshold || 0.80;

  for (const existing of existingQuestions) {
    // a) Exact match
    const existingHash = existing.normalized_question_hash || computeQuestionHash(existing.question);
    if (candidateHash === existingHash) {
      const reason = `Exact duplicate detected (Hash match with existing Q#${existing.id || existing.globalId || 'existing'})`;
      logRejection(reason, candidate);
      return { passed: false, reason, conflictWith: existing };
    }

    // b) Near-duplicate (token similarity >= threshold)
    const similarity = computeJaccardSimilarity(candidate.question, existing.question);
    if (similarity >= threshold) {
      const reason = `Near-duplicate detected (${Math.round(similarity * 100)}% similarity >= ${Math.round(threshold * 100)}% threshold with existing)`;
      logRejection(reason, candidate);
      return { passed: false, reason, conflictWith: existing, similarity };
    }

    // c) Number-swap duplicate (identical question skeleton)
    const existingSkeleton = existing.question_skeleton || computeQuestionSkeleton(existing.question);
    if (candidateSkeleton.length > 15 && candidateSkeleton === existingSkeleton) {
      const reason = `Number-swap duplicate detected (Identical question skeleton)`;
      logRejection(reason, candidate);
      return { passed: false, reason, conflictWith: existing };
    }

    // d) Answer-pattern check: Same skeleton + same option structure
    if (candidate.options && existing.options && candidateSkeleton === existingSkeleton) {
      const candidateOptSkeleton = candidate.options.map(o => computeQuestionSkeleton(o.text)).join('|');
      const existingOptSkeleton = existing.options.map(o => computeQuestionSkeleton(o.text)).join('|');
      if (candidateOptSkeleton === existingOptSkeleton) {
        const reason = `Answer-pattern duplicate detected (Same question and option skeleton)`;
        logRejection(reason, candidate);
        return { passed: false, reason, conflictWith: existing };
      }
    }
  }

  return { passed: true };
}

// 6. RULE 2 Verification: No Repeated Concept
function verifyRule2NoRepeatedConcept(candidate, usedConceptTags) {
  const normTag = normalizeConceptTag(candidate.concept_tag);
  if (!normTag) {
    const reason = 'Missing concept tag on candidate question';
    logRejection(reason, candidate);
    return { passed: false, reason };
  }

  for (const usedTag of usedConceptTags) {
    const normUsed = normalizeConceptTag(usedTag);
    if (normTag === normUsed) {
      const reason = `Repeated concept detected: '${candidate.concept_tag}' matches already used concept '${usedTag}'`;
      logRejection(reason, candidate);
      return { passed: false, reason, conflictTag: usedTag };
    }
  }

  return { passed: true };
}

// 7. RULE 5 Verification: Independent Correctness Check
function verifyRule5Correctness(candidate) {
  if (!candidate.options || !Array.isArray(candidate.options) || candidate.options.length !== 4) {
    const reason = 'Question must have exactly 4 options (A, B, C, D)';
    logRejection(reason, candidate);
    return { passed: false, reason };
  }

  const keys = candidate.options.map(o => o.key);
  if (!['A', 'B', 'C', 'D'].every(k => keys.includes(k))) {
    const reason = 'Options must contain exactly keys A, B, C, D';
    logRejection(reason, candidate);
    return { passed: false, reason };
  }

  if (!candidate.correct_option || !['A', 'B', 'C', 'D'].includes(candidate.correct_option)) {
    const reason = 'Valid correct_option (A, B, C, or D) must be provided';
    logRejection(reason, candidate);
    return { passed: false, reason };
  }

  // Ensure options are distinct (no duplicate options)
  const optionTexts = candidate.options.map(o => normalizeText(o.text));
  const uniqueOptionTexts = new Set(optionTexts);
  if (uniqueOptionTexts.size !== 4) {
    const reason = 'Options must be distinct (found duplicate option choices)';
    logRejection(reason, candidate);
    return { passed: false, reason };
  }

  // If a diagram is present, ensure referenced labels exist in question text
  if (candidate.diagramSvg) {
    // E.g. If question talks about PT = X, diagram SVG must also contain relevant values or points
    if (candidate.diagramValues) {
      for (const [key, val] of Object.entries(candidate.diagramValues)) {
        if (!candidate.question.includes(String(val))) {
          const reason = `Diagram value mismatch: diagram references ${key}=${val} not present in question`;
          logRejection(reason, candidate);
          return { passed: false, reason };
        }
      }
    }
  }

  return { passed: true };
}

// 8. Find Duplicates Audit Tool (Finds existing duplicate pairs in DB)
function findDuplicatePairs(allQuestions) {
  const duplicates = [];
  const threshold = config.nearDuplicateThreshold || 0.80;

  for (let i = 0; i < allQuestions.length; i++) {
    for (let j = i + 1; j < allQuestions.length; j++) {
      const qA = allQuestions[i];
      const qB = allQuestions[j];

      // Exact match
      const hashA = qA.normalized_question_hash || computeQuestionHash(qA.question);
      const hashB = qB.normalized_question_hash || computeQuestionHash(qB.question);
      if (hashA === hashB) {
        duplicates.push({
          type: 'Exact Duplicate',
          score: 1.0,
          questionA: qA,
          questionB: qB
        });
        continue;
      }

      // Skeleton match (Number swap)
      const skelA = qA.question_skeleton || computeQuestionSkeleton(qA.question);
      const skelB = qB.question_skeleton || computeQuestionSkeleton(qB.question);
      if (skelA.length > 15 && skelA === skelB) {
        duplicates.push({
          type: 'Number-Swap Duplicate (Same Skeleton)',
          score: 0.95,
          questionA: qA,
          questionB: qB
        });
        continue;
      }

      // Near-duplicate (Similarity)
      const sim = computeJaccardSimilarity(qA.question, qB.question);
      if (sim >= threshold) {
        duplicates.push({
          type: `Near-Duplicate (${Math.round(sim * 100)}% Match)`,
          score: sim,
          questionA: qA,
          questionB: qB
        });
        continue;
      }

      // Same concept in same chapter
      if (qA.chapter === qB.chapter && qA.concept_tag && qB.concept_tag) {
        if (normalizeConceptTag(qA.concept_tag) === normalizeConceptTag(qB.concept_tag)) {
          duplicates.push({
            type: `Same Concept Duplicate ('${qA.concept_tag}')`,
            score: 0.90,
            questionA: qA,
            questionB: qB
          });
        }
      }
    }
  }

  return duplicates;
}

module.exports = {
  normalizeText,
  computeQuestionHash,
  computeQuestionSkeleton,
  computeJaccardSimilarity,
  computeCosineSimilarity,
  normalizeConceptTag,
  verifyRule1NoRepeatedQuestion,
  verifyRule2NoRepeatedConcept,
  verifyRule5Correctness,
  findDuplicatePairs,
  logRejection
};
