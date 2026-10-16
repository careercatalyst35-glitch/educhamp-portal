const fs = require('fs');
const path = require('path');
const { computeQuestionHash, computeQuestionSkeleton, computeJaccardSimilarity } = require('./dedupEngine');

const BANK_DIR = path.join(__dirname, 'questionBank');

const DIRECT_CHAPTER_MAP = {
  'force': {
    subjective: 'physics_force.json',
    ar: 'physics_ar_force.json',
    hots: 'physics_hots_force.json',
    case_based: 'physics_case_force.json'
  },
  'work, energy and power': {
    subjective: 'physics_work__energy_and_power.json',
    ar: 'physics_ar_work_energy_power.json',
    hots: 'physics_hots_work__energy_and_power.json',
    case_based: 'physics_case_work_energy_power.json'
  },
  'work energy and power': {
    subjective: 'physics_work__energy_and_power.json',
    ar: 'physics_ar_work_energy_power.json',
    hots: 'physics_hots_work__energy_and_power.json',
    case_based: 'physics_case_work_energy_power.json'
  },
  'machines': {
    subjective: 'physics_machines.json',
    ar: 'physics_ar_machines.json',
    hots: 'physics_hots_machines.json',
    case_based: 'physics_case_machines.json'
  },
  'refraction of light at plane surfaces': {
    subjective: 'physics_refraction_of_light_at_plane_surfaces.json',
    ar: 'physics_ar_refraction_plane.json',
    hots: 'physics_hots_refraction_of_light_at_plane_surfaces.json',
    case_based: 'physics_case_refraction_of_light_at_plane_surfaces.json'
  },
  'refraction of light': {
    subjective: 'physics_refraction_of_light_at_plane_surfaces.json',
    ar: 'physics_ar_refraction_plane.json',
    hots: 'physics_hots_refraction_of_light_at_plane_surfaces.json',
    case_based: 'physics_case_refraction_of_light_at_plane_surfaces.json'
  },
  'refraction through a lens': {
    subjective: 'physics_refraction_through_a_lens.json',
    ar: 'physics_ar_refraction_lens.json',
    hots: 'physics_hots_refraction_through_a_lens.json',
    case_based: 'physics_case_refraction_through_a_lens.json'
  },
  'refraction through lens': {
    subjective: 'physics_refraction_through_a_lens.json',
    ar: 'physics_ar_refraction_lens.json',
    hots: 'physics_hots_refraction_through_a_lens.json',
    case_based: 'physics_case_refraction_through_a_lens.json'
  },
  'spectrum': {
    subjective: 'physics_spectrum.json',
    ar: 'physics_ar_spectrum.json',
    hots: 'physics_hots_spectrum.json',
    case_based: 'physics_case_spectrum.json'
  },
  'sound': {
    subjective: 'physics_sound.json',
    ar: 'physics_ar_sound.json',
    hots: 'physics_hots_sound.json',
    case_based: 'physics_case_sound.json'
  },
  'current electricity': {
    subjective: 'physics_current_electricity.json',
    ar: 'physics_ar_current_electricity.json',
    hots: 'physics_hots_current_electricity.json',
    case_based: 'physics_case_current_electricity.json'
  },
  'household circuits': {
    subjective: 'physics_household_circuits.json',
    ar: 'physics_ar_household_circuits.json',
    hots: 'physics_hots_household_circuits.json',
    case_based: 'physics_case_household_circuits.json'
  },
  'household electricity': {
    subjective: 'physics_household_circuits.json',
    ar: 'physics_ar_household_circuits.json',
    hots: 'physics_hots_household_circuits.json',
    case_based: 'physics_case_household_circuits.json'
  },
  'electromagnetism': {
    subjective: 'physics_electromagnetism.json',
    ar: 'physics_ar_electromagnetism.json',
    hots: 'physics_hots_electromagnetism.json',
    case_based: 'physics_case_electromagnetism.json'
  },
  'calorimetry': {
    subjective: 'physics_calorimetry.json',
    ar: 'physics_ar_calorimetry.json',
    hots: 'physics_hots_calorimetry.json',
    case_based: 'physics_case_calorimetry.json'
  },
  'radioactivity': {
    subjective: 'physics_radioactivity.json',
    ar: 'physics_ar_radioactivity.json',
    hots: 'physics_hots_radioactivity.json',
    case_based: 'physics_case_radioactivity.json'
  },
  // Chemistry Chapters (ICSE Class 10)
  'periodic table': {
    subjective: 'chemistry_periodic_table.json',
    ar: 'chemistry_ar_periodic_table.json',
    hots: 'chemistry_hots_periodic_table.json',
    case_based: 'chemistry_case_periodic_table.json'
  },
  'periodic table, periodic properties and variations in properties': {
    subjective: 'chemistry_periodic_table.json',
    ar: 'chemistry_ar_periodic_table.json',
    hots: 'chemistry_hots_periodic_table.json',
    case_based: 'chemistry_case_periodic_table.json'
  },
  'periodic table periodic properties and variations in properties': {
    subjective: 'chemistry_periodic_table.json',
    ar: 'chemistry_ar_periodic_table.json',
    hots: 'chemistry_hots_periodic_table.json',
    case_based: 'chemistry_case_periodic_table.json'
  },
  'periodic properties': {
    subjective: 'chemistry_periodic_table.json',
    ar: 'chemistry_ar_periodic_table.json',
    hots: 'chemistry_hots_periodic_table.json',
    case_based: 'chemistry_case_periodic_table.json'
  },
  'chemical bonding': {
    subjective: 'chemistry_chemical_bonding.json',
    ar: 'chemistry_ar_chemical_bonding.json',
    hots: 'chemistry_hots_chemical_bonding.json',
    case_based: 'chemistry_case_chemical_bonding.json'
  },
  'acids, bases and salts': {
    subjective: 'chemistry_acids_bases_and_salts.json',
    ar: 'chemistry_ar_acids_bases_and_salts.json',
    hots: 'chemistry_hots_acids_bases_and_salts.json',
    case_based: 'chemistry_case_acids_bases_and_salts.json'
  },
  'acids bases and salts': {
    subjective: 'chemistry_acids_bases_and_salts.json',
    ar: 'chemistry_ar_acids_bases_and_salts.json',
    hots: 'chemistry_hots_acids_bases_and_salts.json',
    case_based: 'chemistry_case_acids_bases_and_salts.json'
  },
  'acids': {
    subjective: 'chemistry_acids_bases_and_salts.json',
    ar: 'chemistry_ar_acids_bases_and_salts.json',
    hots: 'chemistry_hots_acids_bases_and_salts.json',
    case_based: 'chemistry_case_acids_bases_and_salts.json'
  },
  'bases & salts': {
    subjective: 'chemistry_acids_bases_and_salts.json',
    ar: 'chemistry_ar_acids_bases_and_salts.json',
    hots: 'chemistry_hots_acids_bases_and_salts.json',
    case_based: 'chemistry_case_acids_bases_and_salts.json'
  },
  'bases and salts': {
    subjective: 'chemistry_acids_bases_and_salts.json',
    ar: 'chemistry_ar_acids_bases_and_salts.json',
    hots: 'chemistry_hots_acids_bases_and_salts.json',
    case_based: 'chemistry_case_acids_bases_and_salts.json'
  },
  'analytical chemistry': {
    subjective: 'chemistry_analytical_chemistry.json',
    ar: 'chemistry_ar_analytical_chemistry.json',
    hots: 'chemistry_hots_analytical_chemistry.json',
    case_based: 'chemistry_case_analytical_chemistry.json'
  },
  'mole concept': {
    subjective: 'chemistry_mole_concept.json',
    ar: 'chemistry_ar_mole_concept.json',
    hots: 'chemistry_hots_mole_concept.json',
    case_based: 'chemistry_case_mole_concept.json'
  },
  'mole concept and stoichiometry': {
    subjective: 'chemistry_mole_concept.json',
    ar: 'chemistry_ar_mole_concept.json',
    hots: 'chemistry_hots_mole_concept.json',
    case_based: 'chemistry_case_mole_concept.json'
  },
  'mole concept & stoichiometry': {
    subjective: 'chemistry_mole_concept.json',
    ar: 'chemistry_ar_mole_concept.json',
    hots: 'chemistry_hots_mole_concept.json',
    case_based: 'chemistry_case_mole_concept.json'
  },
  'electrolysis': {
    subjective: 'chemistry_electrolysis.json',
    ar: 'chemistry_ar_electrolysis.json',
    hots: 'chemistry_hots_electrolysis.json',
    case_based: 'chemistry_case_electrolysis.json'
  },
  'metallurgy': {
    subjective: 'chemistry_metallurgy.json',
    ar: 'chemistry_ar_metallurgy.json',
    hots: 'chemistry_hots_metallurgy.json',
    case_based: 'chemistry_case_metallurgy.json'
  },
  'hydrochloric acid': {
    subjective: 'chemistry_hydrogen_chloride.json',
    ar: 'chemistry_ar_hydrogen_chloride.json',
    hots: 'chemistry_hots_hydrogen_chloride.json',
    case_based: 'chemistry_case_hydrogen_chloride.json'
  },
  'hydrochlroric acid': {
    subjective: 'chemistry_hydrogen_chloride.json',
    ar: 'chemistry_ar_hydrogen_chloride.json',
    hots: 'chemistry_hots_hydrogen_chloride.json',
    case_based: 'chemistry_case_hydrogen_chloride.json'
  },
  'hydrogen chloride': {
    subjective: 'chemistry_hydrogen_chloride.json',
    ar: 'chemistry_ar_hydrogen_chloride.json',
    hots: 'chemistry_hots_hydrogen_chloride.json',
    case_based: 'chemistry_case_hydrogen_chloride.json'
  },
  'hydrogen chloride and hydrochloric acid': {
    subjective: 'chemistry_hydrogen_chloride.json',
    ar: 'chemistry_ar_hydrogen_chloride.json',
    hots: 'chemistry_hots_hydrogen_chloride.json',
    case_based: 'chemistry_case_hydrogen_chloride.json'
  }
};

// Map chapter names (case-insensitive) and section to question bank files
function getBankFilePath(chapterName, subjectName = '', sectionName = '') {
  if (!fs.existsSync(BANK_DIR)) return null;

  const rawKey = (chapterName || '').trim().toLowerCase();
  const rawSec = (sectionName || '').trim().toUpperCase();
  const secType = rawSec.includes('CASE') ? 'case_based' : rawSec.includes('ASSERTION') ? 'ar' : rawSec.includes('HOTS') ? 'hots' : 'subjective';

  if (DIRECT_CHAPTER_MAP[rawKey]) {
    const fileForSec = DIRECT_CHAPTER_MAP[rawKey][secType] || (secType === 'subjective' ? DIRECT_CHAPTER_MAP[rawKey].subjective : null);
    if (fileForSec) {
      const directPath = path.join(BANK_DIR, fileForSec);
      if (fs.existsSync(directPath)) return directPath;
    }
  }

  const normCh = rawKey.replace(/[^a-z0-9]/g, '');
  for (const [key, mapping] of Object.entries(DIRECT_CHAPTER_MAP)) {
    if (key.replace(/[^a-z0-9]/g, '') === normCh) {
      const fileForSec = mapping[secType] || (secType === 'subjective' ? mapping.subjective : null);
      if (fileForSec) {
        const p = path.join(BANK_DIR, fileForSec);
        if (fs.existsSync(p)) return p;
      }
    }
  }

  // Fallback search
  const files = fs.readdirSync(BANK_DIR).filter(f => f.endsWith('.json'));
  for (const f of files) {
    const normF = f.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (secType === 'case_based' && !normF.includes('case')) continue;
    if (secType === 'ar' && !normF.includes('ar')) continue;
    if (secType === 'hots' && !normF.includes('hots')) continue;
    if (secType === 'subjective' && (normF.includes('case') || normF.includes('ar') || normF.includes('hots'))) continue;

    if (normF.includes(normCh) || normCh.includes(normF.replace(/^(physics|chemistry|case|ar|hots|_)+/, '').replace('json', ''))) {
      return path.join(BANK_DIR, f);
    }
  }

  return null;
}

function loadBankForChapter(chapterName, subjectName = '', sectionName = '') {
  const filePath = getBankFilePath(chapterName, subjectName, sectionName);
  if (!filePath || !fs.existsSync(filePath)) return null;

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`Error loading question bank from ${filePath}:`, e);
    return null;
  }
}

/**
 * Assemble questions from the chapter question bank matching the user's counts.
 */
function assembleFromBank(chapter, requestedCounts, existingQuestions = [], context = {}) {
  const sectionName = context.sectionName || 'Subjective';
  const rawSec = sectionName.trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  const bank = loadBankForChapter(chapter, context.subjectName, sectionName);
  if (!bank || !Array.isArray(bank) || bank.length === 0) {
    return { available: false, questions: [] };
  }

  // Filter out any questions already present in existingQuestions (check exact hash & skeleton)
  const existingHashes = new Set(
    existingQuestions.map(q => q.normalized_question_hash || computeQuestionHash(q.question))
  );

  const availablePool = bank.filter(q => {
    const qHash = q.normalized_question_hash || computeQuestionHash(q.question);
    if (existingHashes.has(qHash)) return false;

    // Check near-duplicate Jaccard with existing questions
    for (const prev of existingQuestions) {
      if (computeJaccardSimilarity(q.question, prev.question) >= 0.85) {
        return false;
      }
    }
    return true;
  });

  // Handle AR, HOTS, or Case Based sections
  if (isAR || isHOTS || isCase) {
    const targetType = isAR ? 'assertion_reasoning' : isHOTS ? 'hots' : 'case_based';
    const targetSection = isAR ? 'ASSERTION REASONING' : isHOTS ? 'HOTS' : 'CASE BASED STUDIES';
    const neededCount = requestedCounts.count || requestedCounts.totalCount || 10;

    const selected = [];
    for (const cand of availablePool) {
      if (selected.length >= neededCount) break;
      selected.push({
        ...cand,
        vaultSourceId: cand.globalId,
        vaultHash: cand.normalized_question_hash || computeQuestionHash(cand.question),
        question_type: cand.question_type || targetType,
        types_supported: cand.types_supported || [targetType, 'complex'],
        sectionName: targetSection,
        className: context.className || cand.className || 'Class 10',
        boardName: context.boardName || cand.boardName || 'ICSE',
        subjectName: context.subjectName || cand.subjectName || 'Science',
        subSubjectName: context.subSubjectName || cand.subSubjectName || 'Physics',
        chapter: chapter || cand.chapter,
        normalized_question_hash: cand.normalized_question_hash || computeQuestionHash(cand.question),
        question_skeleton: cand.question_skeleton || computeQuestionSkeleton(cand.question),
        verified_by: 'code',
        difficulty: 'hard',
        quality_score: 9.8
      });
    }

    return {
      available: true,
      totalAvailableInBank: bank.length,
      unusedInPool: availablePool.length,
      selectedCount: selected.length,
      isComplete: selected.length >= neededCount,
      questions: selected,
      questionsPerType: { [targetType]: selected.length }
    };
  }

  // Handle Subjective section
  const {
    diagramCount = 0,
    theoryCount = 0,
    complexCount = 0,
    numericalCount = 0,
    totalCount = 25
  } = requestedCounts;

  const selectedQuestions = [];
  const usedIds = new Set();

  function pickOfType(type, count) {
    let picked = 0;
    const candidates = availablePool.filter(q => {
      if (usedIds.has(q.globalId)) return false;
      return (q.types_supported && q.types_supported.includes(type)) || q.question_type === type;
    });

    for (const cand of candidates) {
      if (picked >= count) break;
      const clone = {
        ...cand,
        vaultSourceId: cand.globalId,
        vaultHash: cand.normalized_question_hash || computeQuestionHash(cand.question),
        question_type: type,
        className: context.className || cand.className || 'Class 10',
        boardName: context.boardName || cand.boardName || 'ICSE',
        subjectName: context.subjectName || cand.subjectName || 'Science',
        subSubjectName: context.subSubjectName || cand.subSubjectName || 'Physics',
        sectionName: context.sectionName || cand.sectionName || 'Subjective',
        chapter: chapter || cand.chapter || 'Force',
        normalized_question_hash: cand.normalized_question_hash || computeQuestionHash(cand.question),
        question_skeleton: cand.question_skeleton || computeQuestionSkeleton(cand.question),
        verified_by: cand.verified_by || 'code',
        quality_score: 9.5
      };
      selectedQuestions.push(clone);
      usedIds.add(cand.globalId);
      picked++;
    }
    return picked;
  }

  const pickedDiagram = pickOfType('diagrammatic', diagramCount);
  const pickedTheory = pickOfType('theoretical', theoryCount);
  const pickedComplex = pickOfType('complex', complexCount);
  const pickedNumerical = pickOfType('numerical', numericalCount);

  let remainingNeeded = totalCount - selectedQuestions.length;
  if (remainingNeeded > 0) {
    for (const cand of availablePool) {
      if (remainingNeeded <= 0) break;
      if (!usedIds.has(cand.globalId)) {
        selectedQuestions.push({
          ...cand,
          vaultSourceId: cand.globalId,
          vaultHash: cand.normalized_question_hash || computeQuestionHash(cand.question),
          className: context.className || 'Class 10',
          boardName: context.boardName || 'ICSE',
          subjectName: context.subjectName || 'Science',
          subSubjectName: context.subSubjectName || 'Physics',
          sectionName: context.sectionName || 'Subjective',
          chapter: chapter || 'Force',
          normalized_question_hash: computeQuestionHash(cand.question),
          question_skeleton: computeQuestionSkeleton(cand.question),
          verified_by: 'code',
          quality_score: 9.5
        });
        usedIds.add(cand.globalId);
        remainingNeeded--;
      }
    }
  }

  const questionsPerType = {
    diagrammatic: selectedQuestions.filter(q => q.question_type === 'diagrammatic').length,
    theoretical: selectedQuestions.filter(q => q.question_type === 'theoretical').length,
    complex: selectedQuestions.filter(q => q.question_type === 'complex').length,
    numerical: selectedQuestions.filter(q => q.question_type === 'numerical').length
  };

  return {
    available: true,
    totalAvailableInBank: bank.length,
    unusedInPool: availablePool.length,
    selectedCount: selectedQuestions.length,
    isComplete: selectedQuestions.length >= totalCount,
    questions: selectedQuestions,
    questionsPerType
  };
}

const CHAPTER_LIMITS = {
  subjective: {
    diagrammatic: 30,
    numerical: 30,
    theoretical: 20,
    complex: 20,
    total: 100
  },
  assertion_reasoning: {
    total: 30
  },
  hots: {
    total: 20
  },
  case_based: {
    total: 50
  }
};

function getChapterUsage(existingQuestions = [], chapterName, className = 'Class 10', sectionName = 'Subjective') {
  const normCh = (chapterName || '').trim().toLowerCase();
  const normClass = (className || '').trim().toLowerCase();
  const rawSec = (sectionName || '').trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  const matchingAll = existingQuestions.filter(q => {
    const qClass = (q.className || '').trim().toLowerCase();
    const qCh = (q.chapter || q.chapterName || '').trim().toLowerCase();
    const matchClass = (!normClass || !qClass || qClass === normClass);
    const matchCh = (qCh === normCh);
    return matchClass && matchCh;
  });

  let diag = 0, num = 0, theo = 0, comp = 0, arCount = 0, hotsCount = 0, caseCount = 0, subjCount = 0;

  matchingAll.forEach(q => {
    const qSec = (q.sectionName || '').toUpperCase();
    const qType = (q.question_type || q.type || '').toLowerCase();
    const hasSvg = !!q.diagramSvg;

    if (qSec.includes('CASE') || qType === 'case_based') {
      caseCount++;
    } else if (qSec.includes('ASSERTION') || qType === 'assertion_reasoning') {
      arCount++;
    } else if (qSec.includes('HOTS') || qType === 'hots') {
      hotsCount++;
    } else {
      subjCount++;
      if (qType === 'diagrammatic' || hasSvg) {
        diag++;
      } else if (qType === 'numerical') {
        num++;
      } else if (qType === 'complex') {
        comp++;
      } else {
        theo++;
      }
    }
  });

  const chapterTotals = {
    subjective: subjCount,
    assertion_reasoning: arCount,
    hots: hotsCount,
    case_based: caseCount,
    total: matchingAll.length
  };

  if (isCase) {
    const limit = CHAPTER_LIMITS.case_based.total;
    const remainingAllowed = Math.max(0, limit - caseCount);
    const isCapped = remainingAllowed === 0;

    return {
      sectionType: 'case_based',
      alreadyGenerated: {
        count: caseCount,
        total: caseCount
      },
      limit,
      remainingAllowed,
      isCapped,
      allLimitsReached: isCapped,
      chapterTotals
    };
  }

  if (isAR) {
    const limit = CHAPTER_LIMITS.assertion_reasoning.total;
    const remainingAllowed = Math.max(0, limit - arCount);
    const isCapped = remainingAllowed === 0;

    return {
      sectionType: 'assertion_reasoning',
      alreadyGenerated: {
        count: arCount,
        total: arCount
      },
      limit,
      remainingAllowed,
      isCapped,
      allLimitsReached: isCapped,
      chapterTotals
    };
  }

  if (isHOTS) {
    const limit = CHAPTER_LIMITS.hots.total;
    const remainingAllowed = Math.max(0, limit - hotsCount);
    const isCapped = remainingAllowed === 0;

    return {
      sectionType: 'hots',
      alreadyGenerated: {
        count: hotsCount,
        total: hotsCount
      },
      limit,
      remainingAllowed,
      isCapped,
      allLimitsReached: isCapped,
      chapterTotals
    };
  }

  // Subjective
  const remainingAllowed = {
    diagrammatic: Math.max(0, CHAPTER_LIMITS.subjective.diagrammatic - diag),
    numerical: Math.max(0, CHAPTER_LIMITS.subjective.numerical - num),
    theoretical: Math.max(0, CHAPTER_LIMITS.subjective.theoretical - theo),
    complex: Math.max(0, CHAPTER_LIMITS.subjective.complex - comp)
  };

  const isDiagCapped = remainingAllowed.diagrammatic === 0;
  const isNumCapped = remainingAllowed.numerical === 0;
  const isTheoCapped = remainingAllowed.theoretical === 0;
  const isCompCapped = remainingAllowed.complex === 0;
  const allLimitsReached = isDiagCapped && isNumCapped && isTheoCapped && isCompCapped;

  return {
    sectionType: 'subjective',
    alreadyGenerated: {
      total: subjCount,
      diagrammatic: diag,
      numerical: num,
      theoretical: theo,
      complex: comp
    },
    limits: CHAPTER_LIMITS.subjective,
    remainingAllowed,
    isCapped: {
      diagrammatic: isDiagCapped,
      numerical: isNumCapped,
      theoretical: isTheoCapped,
      complex: isCompCapped
    },
    allLimitsReached,
    chapterTotals
  };
}

/**
 * Get available question stats in the hidden vault for a given chapter and section
 */
function getVaultStats(chapterName, subjectName = '', existingQuestions = [], className = 'Class 10', sectionName = 'Subjective') {
  const usage = getChapterUsage(existingQuestions, chapterName, className, sectionName);
  const bank = loadBankForChapter(chapterName, subjectName, sectionName);

  if (!bank || !Array.isArray(bank) || bank.length === 0) {
    return {
      chapter: chapterName,
      sectionName: sectionName || 'Subjective',
      available: false,
      total: 0,
      diagrammatic: 0,
      theoretical: 0,
      complex: 0,
      numerical: 0,
      ...usage
    };
  }

  let diag = 0, theo = 0, comp = 0, num = 0;
  bank.forEach(q => {
    const types = q.types_supported || [q.question_type || 'diagrammatic'];
    if (types.includes('diagrammatic') || q.diagramSvg) diag++;
    if (types.includes('theoretical')) theo++;
    if (types.includes('complex')) comp++;
    if (types.includes('numerical')) num++;
  });

  return {
    chapter: chapterName,
    sectionName: sectionName || 'Subjective',
    available: true,
    total: bank.length,
    diagrammatic: diag,
    theoretical: theo,
    complex: comp,
    numerical: num,
    ...usage
  };
}

/**
 * Store requested questions directly from the hidden vault into the database registry
 */
function storeFromVault({
  chapter,
  className = 'Class 10',
  subjectName = 'Science',
  subSubjectName = 'Physics',
  boardName = 'ICSE',
  sectionName = 'Subjective',
  diagramCount = 0,
  theoryCount = 0,
  complexCount = 0,
  numericalCount = 0,
  count = 0
}, getLocalData, saveLocalData) {
  const currentData = getLocalData();
  const existingList = currentData.questions || [];

  const rawSec = (sectionName || '').trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  const chapterUsage = getChapterUsage(existingList, chapter, className, sectionName);

  // 1. Quota Enforcement for Case Based (Limit 50)
  if (isCase) {
    const needed = count || 10;
    if (chapterUsage.allLimitsReached || chapterUsage.remainingAllowed <= 0) {
      return {
        success: false,
        message: `No more questions can be generated for "${chapter}" in Case Based Studies. Maximum quota of 50 questions has been reached.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }
    if (needed > chapterUsage.remainingAllowed) {
      return {
        success: false,
        message: `Cannot generate ${needed} Case Based question(s) for "${chapter}". Limit is 50. Already generated: ${chapterUsage.alreadyGenerated.count}/50. Maximum remaining allowed is ${chapterUsage.remainingAllowed}.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }
  }

  // 2. Quota Enforcement for AR
  if (isAR) {
    const needed = count || 10;
    if (chapterUsage.allLimitsReached || chapterUsage.remainingAllowed <= 0) {
      return {
        success: false,
        message: `No more questions can be generated for "${chapter}" in Assertion-Reasoning. Maximum quota of 30 questions has been reached.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }
    if (needed > chapterUsage.remainingAllowed) {
      return {
        success: false,
        message: `Cannot generate ${needed} Assertion-Reasoning question(s) for "${chapter}". Limit is 30. Already generated: ${chapterUsage.alreadyGenerated.count}/30. Maximum remaining allowed is ${chapterUsage.remainingAllowed}.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }
  }

  // 3. Quota Enforcement for HOTS (Limit 20)
  if (isHOTS) {
    const needed = count || 10;
    if (chapterUsage.allLimitsReached || chapterUsage.remainingAllowed <= 0) {
      return {
        success: false,
        message: `No more questions can be generated for "${chapter}" in HOTS. Maximum quota of 20 questions has been reached.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }
    if (needed > chapterUsage.remainingAllowed) {
      return {
        success: false,
        message: `Cannot generate ${needed} HOTS question(s) for "${chapter}". Limit is 20. Already generated: ${chapterUsage.alreadyGenerated.count}/20. Maximum remaining allowed is ${chapterUsage.remainingAllowed}.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }
  }

  // 4. Quota Enforcement for Subjective
  if (!isAR && !isHOTS && !isCase) {
    if (chapterUsage.allLimitsReached) {
      return {
        success: false,
        message: `No more questions can be generated for "${chapter}". All maximum quotas have been reached: 30 Diagrammatic, 30 Numerical, 20 Theoretical, 20 Complex (Total 100).`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }

    if (diagramCount > 0 && diagramCount > chapterUsage.remainingAllowed.diagrammatic) {
      return {
        success: false,
        message: `Cannot generate ${diagramCount} diagrammatic question(s) for "${chapter}". Limit is 30. Already generated: ${chapterUsage.alreadyGenerated.diagrammatic}/30. Maximum remaining allowed is ${chapterUsage.remainingAllowed.diagrammatic}.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }

    if (numericalCount > 0 && numericalCount > chapterUsage.remainingAllowed.numerical) {
      return {
        success: false,
        message: `Cannot generate ${numericalCount} numerical question(s) for "${chapter}". Limit is 30. Already generated: ${chapterUsage.alreadyGenerated.numerical}/30. Maximum remaining allowed is ${chapterUsage.remainingAllowed.numerical}.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }

    if (theoryCount > 0 && theoryCount > chapterUsage.remainingAllowed.theoretical) {
      return {
        success: false,
        message: `Cannot generate ${theoryCount} theoretical question(s) for "${chapter}". Limit is 20. Already generated: ${chapterUsage.alreadyGenerated.theoretical}/20. Maximum remaining allowed is ${chapterUsage.remainingAllowed.theoretical}.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }

    if (complexCount > 0 && complexCount > chapterUsage.remainingAllowed.complex) {
      return {
        success: false,
        message: `Cannot generate ${complexCount} complex question(s) for "${chapter}". Limit is 20. Already generated: ${chapterUsage.alreadyGenerated.complex}/20. Maximum remaining allowed is ${chapterUsage.remainingAllowed.complex}.`,
        savedCount: 0,
        questions: [],
        chapterUsage
      };
    }
  }

  // Filter existing questions for context
  const existingForContext = existingList.filter(q => {
    return (!className || q.className === className) &&
           (!subjectName || q.subjectName === subjectName) &&
           (!boardName || !q.boardName || q.boardName === boardName) &&
           (!subSubjectName || !q.subSubjectName || q.subSubjectName === subSubjectName) &&
           (!chapter || q.chapter === chapter || q.chapterName === chapter);
  });

  const totalCount = (isAR || isHOTS || isCase) ? (count || 10) : (diagramCount + theoryCount + complexCount + numericalCount);

  const assembled = assembleFromBank(chapter, {
    diagramCount,
    theoryCount,
    complexCount,
    numericalCount,
    count: totalCount,
    totalCount
  }, existingForContext, {
    className,
    subjectName,
    subSubjectName,
    boardName,
    sectionName
  });

  if (!assembled.questions || assembled.questions.length === 0) {
    return {
      success: false,
      message: `No questions available in the hidden vault for chapter "${chapter}" (${sectionName}).`,
      savedCount: 0,
      questions: []
    };
  }

  if (!currentData.questions) currentData.questions = [];
  const saved = [];

  for (const q of assembled.questions) {
    const record = {
      ...q,
      globalId: 'Q-VAULT-' + Math.random().toString(36).substring(2, 9),
      className: className || q.className || 'Class 10',
      subjectName: subjectName || q.subjectName || 'Science',
      subSubjectName: subSubjectName || q.subSubjectName || 'Physics',
      boardName: boardName || q.boardName || 'ICSE',
      sectionName: sectionName || q.sectionName || 'Subjective',
      chapter: chapter || q.chapter,
      chapterName: chapter || q.chapter,
      createdAt: new Date().toISOString()
    };
    currentData.questions.push(record);
    saved.push(record);
  }

  saveLocalData(currentData);

  // Consume questions from the hidden vault file on disk
  let remainingInVault = Math.max(0, assembled.totalAvailableInBank - saved.length);
  const bankFilePath = getBankFilePath(chapter, subSubjectName || subjectName, sectionName);
  if (bankFilePath && fs.existsSync(bankFilePath)) {
    try {
      const fullBank = JSON.parse(fs.readFileSync(bankFilePath, 'utf8'));
      const generatedIds = new Set(saved.map(s => s.vaultSourceId).filter(Boolean));
      const generatedHashes = new Set(
        saved.map(s => s.vaultHash || s.normalized_question_hash || computeQuestionHash(s.question))
      );

      const remainingBank = fullBank.filter(q => {
        if (q.globalId && generatedIds.has(q.globalId)) return false;
        const qHash = q.normalized_question_hash || computeQuestionHash(q.question);
        if (generatedHashes.has(qHash)) return false;
        return true;
      });

      fs.writeFileSync(bankFilePath, JSON.stringify(remainingBank, null, 2), 'utf8');
      remainingInVault = remainingBank.length;
      console.log(`[VAULT CONSUMPTION] Chapter "${chapter}" (${sectionName}): removed ${fullBank.length - remainingBank.length} questions from hidden vault. Remaining in vault: ${remainingInVault}`);
    } catch (e) {
      console.error(`[VAULT CONSUMPTION ERROR] Failed to remove generated questions from vault file:`, e);
    }
  }

  return {
    success: true,
    savedCount: saved.length,
    chapter,
    sectionName,
    breakdown: isCase ? { case_based: saved.length } : isAR ? { assertion_reasoning: saved.length } : isHOTS ? { hots: saved.length } : {
      diagrammatic: saved.filter(q => q.question_type === 'diagrammatic').length,
      theoretical: saved.filter(q => q.question_type === 'theoretical').length,
      complex: saved.filter(q => q.question_type === 'complex').length,
      numerical: saved.filter(q => q.question_type === 'numerical').length
    },
    totalAvailableInVault: remainingInVault,
    questions: saved
  };
}

/**
 * Save new questions provided by the user into the hidden vault for a chapter
 */
function saveQuestionsToVault(chapterName, questions, subjectName = 'Physics', sectionName = 'Subjective') {
  if (!fs.existsSync(BANK_DIR)) {
    fs.mkdirSync(BANK_DIR, { recursive: true });
  }

  let filePath = getBankFilePath(chapterName, subjectName, sectionName);
  if (!filePath) {
    const safeName = chapterName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    filePath = path.join(BANK_DIR, `${subjectName.toLowerCase()}_${safeName}.json`);
  }

  let existing = [];
  if (fs.existsSync(filePath)) {
    try {
      existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      existing = [];
    }
  }

  const existingHashes = new Set(existing.map(q => q.normalized_question_hash || computeQuestionHash(q.question)));
  let added = 0;
  questions.forEach(q => {
    const hash = q.normalized_question_hash || computeQuestionHash(q.question);
    if (!existingHashes.has(hash)) {
      existing.push({
        ...q,
        chapter: chapterName,
        subjectName: subjectName || q.subjectName || 'Physics',
        sectionName: sectionName || q.sectionName || 'Subjective',
        normalized_question_hash: hash
      });
      existingHashes.add(hash);
      added++;
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
  return { success: true, addedCount: added, totalCount: existing.length, filePath };
}

module.exports = {
  loadBankForChapter,
  assembleFromBank,
  getBankFilePath,
  getVaultStats,
  getChapterUsage,
  storeFromVault,
  saveQuestionsToVault,
  CHAPTER_LIMITS
};
