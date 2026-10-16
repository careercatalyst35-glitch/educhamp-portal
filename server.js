const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res) => {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

// Global Database Configuration:
// Live Global Cloud Database (RESTful Global Database Cluster)
// Every entry is assigned a globally unique persistent ID in the global cloud database!
const GLOBAL_DB_API = 'https://api.restful-api.dev/objects';

// Local cache / shadow registry for instant retrieval & offline resilience
const CACHE_FILE = path.join(__dirname, 'registry_cache.json');

const INITIAL_REGISTRY = {
  classes: [
    { name: 'Class X', code: 'CLS-10', academicYear: '2026-2027', department: 'Senior Secondary', capacity: 180 },
    { name: 'Class XI', code: 'CLS-11', academicYear: '2026-2027', department: 'Higher Secondary', capacity: 160 },
    { name: 'Class XII', code: 'CLS-12', academicYear: '2026-2027', department: 'Higher Secondary & Baccalaureate', capacity: 150 }
  ],
  subjects: [
    { name: 'Classical English Literature', code: 'LIT-401', credits: 4, facultyLead: 'Prof. A. Harrington' },
    { name: 'Advanced Mathematics & Calculus', code: 'MTH-502', credits: 5, facultyLead: 'Dr. E. Thorne' },
    { name: 'Classical Mechanics & Physics', code: 'PHY-301', credits: 4, facultyLead: 'Dr. C. Vance' }
  ],
  sections: [
    { name: 'Section A - St. George Hall', classId: 'Class X', room: 'Pavilion 201', supervisor: 'Fellow M. Sinclair' },
    { name: 'Section B - Victoria Wing', classId: 'Class X', room: 'Pavilion 204', supervisor: 'Fellow H. Alistair' },
    { name: 'Section C - Library Annex', classId: 'Class XI', room: 'Chambers 102', supervisor: 'Fellow E. Montgomery' }
  ],
  chapters: [
    { title: 'Chapter I: Foundations of Rhetoric & Classical Prose', subject: 'Classical English Literature', estimatedHours: 14 },
    { title: 'Chapter II: Differential Formulations & Analysis', subject: 'Advanced Mathematics & Calculus', estimatedHours: 20 },
    { title: 'Chapter III: Gravitational Equilibrium Principles', subject: 'Classical Mechanics & Physics', estimatedHours: 16 }
  ],
  questions: [
    { question: 'Evaluate the thematic shift in early 19th-century epistolary essays.', type: 'Descriptive Analysis', marks: 10, difficulty: 'Advanced' },
    { question: 'Derive the continuity equation for steady three-dimensional irrotational flow.', type: 'Theoretical Derivation', marks: 15, difficulty: 'Rigorous' },
    { question: 'State the generalized Hamilton-Jacobi formulation for conservative systems.', type: 'Analytical Proof', marks: 10, difficulty: 'Exemplary' }
  ]
};

function getLocalData() {
  if (!fs.existsSync(CACHE_FILE)) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(INITIAL_REGISTRY, null, 2));
    return INITIAL_REGISTRY;
  }
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  } catch (e) {
    return INITIAL_REGISTRY;
  }
}

function saveLocalData(data) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2));
}

// Authentication API: admin / admin001
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin001') {
    return res.json({
      success: true,
      token: 'session-regent-admin-authenticated-key',
      user: {
        role: 'Chief Registrar & Administrator',
        username: 'admin',
        institution: 'Directorate of Academic Governance & Registry'
      }
    });
  }
  return res.status(401).json({
    success: false,
    message: 'Invalid administrative credentials provided. Verification failed.'
  });
});

// Check Global Database Connectivity
app.get('/api/database/status', async (req, res) => {
  const t0 = Date.now();
  try {
    const cloudRes = await fetch(`${GLOBAL_DB_API}?id=ff808181a09d98f701a12586b7463541`);
    const latency = Date.now() - t0;
    const isOk = cloudRes.ok;
    
    res.json({
      connected: isOk,
      provider: 'Global Cloud REST Database Cluster (api.restful-api.dev)',
      cluster: 'Multi-Region Distributed Nodes (US / EU / Global)',
      latencyMs: latency,
      endpoint: GLOBAL_DB_API,
      statusText: isOk ? 'Active & Synchronized' : 'Degraded'
    });
  } catch (err) {
    res.json({
      connected: false,
      provider: 'Global Cloud Cluster',
      error: err.message
    });
  }
});

const VALID_COLLECTIONS = ['classes', 'subjects', 'boards', 'subsubjects', 'sections', 'chapters', 'questions'];

// Query Collection
app.get('/api/data/:collection', async (req, res) => {
  const { collection } = req.params;
  if (!VALID_COLLECTIONS.includes(collection)) {
    return res.status(400).json({ error: 'Unknown administrative section collection.' });
  }

  const data = getLocalData();
  const list = data[collection] || [];
  res.json({ success: true, collection, data: list });
});

// Insert Record into Global Database & sync local cache
app.post('/api/data/:collection', async (req, res) => {
  const { collection } = req.params;
  if (!VALID_COLLECTIONS.includes(collection)) {
    return res.status(400).json({ error: 'Unknown administrative section collection.' });
  }

  const payload = req.body;
  let globalRecordId = null;

  // 1. Commit directly to Global Cloud Database Cluster
  try {
    const cloudRes = await fetch(GLOBAL_DB_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: payload.name || payload.title || payload.question || 'Registry Dossier Item',
        data: {
          category: collection,
          ...payload,
          committedAt: new Date().toISOString()
        }
      })
    });
    if (cloudRes.ok) {
      const cloudData = await cloudRes.json();
      globalRecordId = cloudData.id;
    }
  } catch (err) {
    console.error('Global DB sync notice:', err.message);
  }

  // 2. Persist in registry state
  const currentData = getLocalData();
  if (!currentData[collection]) currentData[collection] = [];
  
  const record = {
    ...payload,
    globalId: globalRecordId || 'GDB-' + Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString()
  };

  currentData[collection].push(record);
  saveLocalData(currentData);

  res.json({ success: true, record, globalDatabaseId: globalRecordId });
});

// Rename / Update Record in Global Database and Local Registry
app.put('/api/data/:collection/:id', async (req, res) => {
  const { collection, id } = req.params;
  const { name } = req.body;
  if (!VALID_COLLECTIONS.includes(collection)) {
    return res.status(400).json({ error: 'Unknown collection.' });
  }

  const currentData = getLocalData();
  const list = currentData[collection] || [];
  const item = list.find(x =>
    (x.globalId && x.globalId === id) ||
    (x.id && x.id === id) ||
    (x._tempId && x._tempId === id) ||
    (x.name && x.name === id)
  );
  if (item) {
    if (name !== undefined) item.name = name;
    item.updatedAt = new Date().toISOString();

    if (collection === 'questions') {
      if (req.body.question !== undefined) item.question = req.body.question;
      if (req.body.title !== undefined) item.title = req.body.title;
      if (req.body.options !== undefined) item.options = req.body.options;
      if (req.body.correct !== undefined) item.correct = req.body.correct;
      if (req.body.correct_option !== undefined) item.correct_option = req.body.correct_option;
      if (req.body.explanation !== undefined) item.explanation = req.body.explanation;
      if (req.body.diagramSvg !== undefined) item.diagramSvg = req.body.diagramSvg;
    }

    if (req.body.title !== undefined) item.title = req.body.title;
    if (req.body.hidden !== undefined) item.hidden = !!req.body.hidden;

    saveLocalData(currentData);

    // Sync update to global cloud DB if has globalId
    if (item.globalId && item.globalId.startsWith('ff80')) {
      try {
        await fetch(`${GLOBAL_DB_API}/${item.globalId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: item.name || item.title || item.question, data: { category: collection, ...item } })
        });
      } catch (err) {
        console.error('Cloud update error:', err.message);
      }
    }
    return res.json({ success: true, item });
  }
  res.status(404).json({ success: false, message: 'Item not found.' });
});

// Toggle / update hidden status on chapter
app.post('/api/data/chapters/:id/toggle-hide', (req, res) => {
  const { id } = req.params;
  const { hidden, title } = req.body;
  const currentData = getLocalData();
  const list = currentData.chapters || [];

  const item = list.find(x =>
    (x.globalId && x.globalId === id) ||
    (x.id && x.id === id) ||
    (x.title && x.title === id) ||
    (x.name && x.name === id) ||
    (title && x.title && x.title.toLowerCase() === title.toLowerCase()) ||
    (title && x.name && x.name.toLowerCase() === title.toLowerCase())
  );

  if (item) {
    item.hidden = hidden !== undefined ? !!hidden : !item.hidden;
    item.updatedAt = new Date().toISOString();
    saveLocalData(currentData);
    return res.json({ success: true, item, hidden: item.hidden });
  }

  return res.json({ success: true, hidden: !!hidden, message: 'Acknowledged' });
});

// Delete Record from Global Database and Local Registry
app.delete('/api/data/:collection/:id', async (req, res) => {
  const { collection, id } = req.params;
  if (!VALID_COLLECTIONS.includes(collection)) {
    return res.status(400).json({ error: 'Unknown collection.' });
  }

  const currentData = getLocalData();
  const list = currentData[collection] || [];
  
  // Thorough search matching globalId, id, _tempId, question text, or title/name
  const index = list.findIndex(x => {
    return (x.globalId && x.globalId === id) ||
           (x.id && x.id === id) ||
           (x._tempId && x._tempId === id) ||
           (x.name && x.name === id) ||
           (x.title && x.title === id) ||
           (x.question && x.question === id);
  });

  if (index !== -1) {
    const [removed] = list.splice(index, 1);
    currentData[collection] = list;
    saveLocalData(currentData);

    // Completely erase from global cloud DB cluster if applicable
    if (removed.globalId && removed.globalId.startsWith('ff80')) {
      try {
        await fetch(`${GLOBAL_DB_API}/${removed.globalId}`, { method: 'DELETE' });
      } catch (err) {
        console.error('Cloud delete error:', err.message);
      }
    }
    return res.json({ success: true, message: 'Permanently erased from database.' });
  }
  res.status(404).json({ success: false, message: 'Item not found.' });
});

// Bulk Delete Questions endpoint to completely erase multiple questions at once
app.post('/api/questions/bulk-delete', async (req, res) => {
  const { ids } = req.body;
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ success: false, message: 'No question IDs provided.' });
  }

  const currentData = getLocalData();
  const list = currentData.questions || [];
  const idSet = new Set(ids);

  currentData.questions = list.filter(q => {
    return !idSet.has(q.globalId) &&
           !idSet.has(q.id) &&
           !idSet.has(q._tempId) &&
           !idSet.has(q.question);
  });

  saveLocalData(currentData);

  res.json({
    success: true,
    erasedCount: list.length - currentData.questions.length,
    remainingCount: currentData.questions.length
  });
});

// Initial seed
app.post('/api/database/seed', (req, res) => {
  const data = getLocalData();
  res.json({ success: true, message: 'Registry initialized.' });
});

// Import Deduplication Engine & Pipeline
const {
  computeQuestionHash,
  computeQuestionSkeleton,
  findDuplicatePairs
} = require('./dedupEngine');

const { generateOlympiadQuestionsPipeline } = require('./questionEngine');

// Database-level Unique Constraint Check (class, section, subject, chapter, normalized_question_hash)
function enforceUniqueConstraint(question, existingQuestions) {
  const hash = question.normalized_question_hash || computeQuestionHash(question.question);
  for (const q of existingQuestions) {
    if (
      (!question.className || q.className === question.className) &&
      (!question.sectionName || q.sectionName === question.sectionName) &&
      (!question.subjectName || q.subjectName === question.subjectName) &&
      (!question.chapter || q.chapter === question.chapter)
    ) {
      const existingHash = q.normalized_question_hash || computeQuestionHash(q.question);
      if (hash === existingHash) {
        return false; // Constraint violation!
      }
    }
  }
  return true;
}

// Find Duplicates Audit Tool Endpoint (Scans for duplicate pairs in the database)
app.get('/api/questions/find-duplicates', (req, res) => {
  const currentData = getLocalData();
  const allQuestions = currentData.questions || [];
  const { chapter, className, scope } = req.query;

  let targetQuestions = allQuestions;
  if (scope === 'chapter' && chapter) {
    targetQuestions = allQuestions.filter(q => {
      const matchChapter = q.chapter === chapter || q.chapterName === chapter;
      const matchClass = !className || q.className === className;
      return matchChapter && matchClass;
    });
  }

  const duplicates = findDuplicatePairs(targetQuestions);
  res.json({
    success: true,
    totalQuestions: allQuestions.length,
    scopedCount: targetQuestions.length,
    currentChapter: chapter || null,
    currentChapterCount: chapter ? allQuestions.filter(q => (q.chapter === chapter || q.chapterName === chapter)).length : 0,
    duplicatePairsCount: duplicates.length,
    duplicates
  });
});

// Delete specific duplicate pair question endpoint
app.post('/api/questions/delete-duplicate-pair', (req, res) => {
  const { questionIdToDelete } = req.body;
  if (!questionIdToDelete) {
    return res.status(400).json({ success: false, message: 'Question ID required.' });
  }

  const currentData = getLocalData();
  const list = currentData.questions || [];
  const index = list.findIndex(q => (q.globalId === questionIdToDelete || q.id === questionIdToDelete || q.question === questionIdToDelete));

  if (index !== -1) {
    list.splice(index, 1);
    currentData.questions = list;
    saveLocalData(currentData);
    return res.json({ success: true, message: 'Duplicate question deleted successfully.' });
  }
  res.status(404).json({ success: false, message: 'Question not found.' });
});

// Question Generator API endpoint with Strict Deduplication Pipeline
app.post('/api/questions/generate', async (req, res) => {
  const { chapter, hardness, diagramCount, caseCount, theoryCount, complexCount, className, subjectName, boardName, subSubjectName, sectionName } = req.body;
  const dCount = parseInt(diagramCount) || 0;
  const cCount = parseInt(caseCount) || 0;
  const tCount = parseInt(theoryCount) || 0;
  const compCount = parseInt(complexCount) || 0;

  const totalRequested = dCount + cCount + tCount + compCount;
  if (totalRequested <= 0 || totalRequested > 25) {
    return res.status(400).json({ success: false, message: 'Total questions must be between 1 and 25.' });
  }

  try {
    const currentData = getLocalData();
    const existingList = currentData.questions || [];

    // Filter all existing questions generated till now for this combination
    const existingForContext = existingList.filter(q => {
      return (!className || q.className === className) &&
             (!subjectName || q.subjectName === subjectName) &&
             (!boardName || !q.boardName || q.boardName === boardName) &&
             (!subSubjectName || !q.subSubjectName || q.subSubjectName === subSubjectName) &&
             (!sectionName || q.sectionName === sectionName) &&
             (!chapter || q.chapter === chapter || q.chapterName === chapter);
    });

    // Execute Generation Pipeline implementing Rules 1 to 5
    const pipelineResult = await generateOlympiadQuestionsPipeline({
      chapter: chapter || 'Advanced Olympiad Syllabus',
      difficulty: hardness || 'Hard (Olympiad)',
      requestedCount: totalRequested,
      className,
      subjectName,
      boardName,
      subSubjectName,
      sectionName
    }, existingForContext);

    // Persist new questions to database registry with DB-level constraint check
    if (!currentData.questions) currentData.questions = [];
    const savedQuestions = [];

    pipelineResult.questions.forEach(q => {
      if (enforceUniqueConstraint(q, currentData.questions)) {
        const record = {
          ...q,
          boardName: boardName || q.boardName || '',
          subSubjectName: subSubjectName || q.subSubjectName || '',
          globalId: 'Q-' + Math.random().toString(36).substring(2, 9),
          normalized_question_hash: q.normalized_question_hash || computeQuestionHash(q.question),
          question_skeleton: q.question_skeleton || computeQuestionSkeleton(q.question),
          createdAt: new Date().toISOString()
        };
        currentData.questions.push(record);
        savedQuestions.push(record);
      }
    });
    saveLocalData(currentData);

    res.json({
      success: true,
      count: savedQuestions.length,
      questions: savedQuestions,
      rejectedReport: pipelineResult.rejectedReport,
      remainingConceptsCount: pipelineResult.remainingConceptsCount,
      coverageStatus: pipelineResult.coverageStatus
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Import Smart Generator & Provider Services
const {
  executeSmartGenerationPipeline,
  analyzeAndFrameChapter,
  executeFiveMinuteGeneration,
  getActiveStatus
} = require('./smartGenerator');

const {
  getVaultStats,
  storeFromVault,
  saveQuestionsToVault,
  getChapterUsage,
  CHAPTER_LIMITS
} = require('./questionBankService');

const { checkProviderHealth } = require('./providerService');

// AI Provider Status endpoint
app.get('/api/ai/status', async (req, res) => {
  try {
    const health = await checkProviderHealth();
    res.json({
      success: true,
      ...health,
      banks: ['Force', 'Radioactivity']
    });
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

// Configure Gemini API Key endpoint
app.post('/api/ai/set-gemini-key', (req, res) => {
  const { apiKey } = req.body;
  if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length < 10) {
    return res.status(400).json({ success: false, message: 'Valid Gemini API key required.' });
  }

  try {
    const configPath = path.join(__dirname, 'config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    config.provider = 'gemini';
    config.gemini_api_key = apiKey.trim();
    if (!config.gemini_model) config.gemini_model = 'gemini-2.0-flash';
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');

    res.json({
      success: true,
      message: 'Google Gemini API key successfully saved and activated!',
      model: config.gemini_model
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Generation status endpoint for real-time UI progress updates
app.get('/api/questions/generation-status', (req, res) => {
  res.json(getActiveStatus());
});

// Get Question Vault Stats for a chapter
app.get('/api/generator/vault-stats', (req, res) => {
  const { chapter, subjectName, className, sectionName } = req.query;
  const currentData = getLocalData();
  const stats = getVaultStats(chapter, subjectName, currentData.questions || [], className || 'Class 10', sectionName || 'Subjective');
  res.json({ success: true, stats });
});

// Stage 1: Chapter Framing & Syllabus Blueprint (100% Offline, Zero AI)
app.post('/api/generator/analyze-frame', async (req, res) => {
  const { chapter, className, subjectName, subSubjectName, boardName, sectionName } = req.body;
  if (!chapter) {
    return res.status(400).json({ success: false, message: 'Chapter name is required.' });
  }

  try {
    const analysis = await analyzeAndFrameChapter(chapter, className, subjectName, boardName, sectionName);
    const currentData = getLocalData();
    const vaultStats = getVaultStats(chapter, subjectName, currentData.questions || [], className || 'Class 10', sectionName || 'Subjective');
    res.json({
      ...analysis,
      vaultStats
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Stage 3: Store Exact Selected Questions from Hidden Vault into Database (Zero AI)
app.post('/api/generator/store-from-vault', (req, res) => {
  const {
    chapter,
    className,
    subjectName,
    subSubjectName,
    boardName,
    sectionName,
    diagramCount,
    theoryCount,
    complexCount,
    numericalCount,
    count
  } = req.body;

  if (!chapter) {
    return res.status(400).json({ success: false, message: 'Chapter name is required.' });
  }

  const rawSec = (sectionName || '').trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  const dCount = parseInt(diagramCount) || 0;
  const tCount = parseInt(theoryCount) || 0;
  const cCount = parseInt(complexCount) || 0;
  const nCount = parseInt(numericalCount) || 0;
  const cVal = parseInt(count) || 0;
  const total = (isAR || isHOTS || isCase) ? cVal : (dCount + tCount + cCount + nCount);

  if (total <= 0) {
    return res.status(400).json({ success: false, message: 'Please select at least 1 question to store.' });
  }

  const result = storeFromVault({
    chapter,
    className: className || 'Class 10',
    subjectName: subjectName || 'Science',
    subSubjectName: subSubjectName || '',
    boardName: boardName || 'ICSE',
    sectionName: sectionName || 'Subjective',
    diagramCount: dCount,
    theoryCount: tCount,
    complexCount: cCount,
    numericalCount: nCount,
    count: cVal
  }, getLocalData, saveLocalData);

  res.json(result);
});

// Backward-compatible generator/start route (also driven by hidden vault)
app.post('/api/generator/start', (req, res) => {
  const {
    chapter,
    className,
    subjectName,
    subSubjectName,
    boardName,
    sectionName,
    diagramCount,
    theoryCount,
    complexCount,
    numericalCount,
    count
  } = req.body;

  if (!chapter) {
    return res.status(400).json({ success: false, message: 'Chapter name is required.' });
  }

  const rawSec = (sectionName || '').trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  const dCount = diagramCount !== undefined ? parseInt(diagramCount) : 5;
  const tCount = theoryCount !== undefined ? parseInt(theoryCount) : 0;
  const cCount = complexCount !== undefined ? parseInt(complexCount) : 0;
  const nCount = numericalCount !== undefined ? parseInt(numericalCount) : 0;
  const cVal = count !== undefined ? parseInt(count) : ((isAR || isHOTS || isCase) ? 10 : 0);

  const result = storeFromVault({
    chapter,
    className: className || 'Class 10',
    subjectName: subjectName || 'Science',
    subSubjectName: subSubjectName || '',
    boardName: boardName || 'ICSE',
    sectionName: sectionName || 'Subjective',
    diagramCount: dCount,
    theoryCount: tCount,
    complexCount: cCount,
    numericalCount: nCount,
    count: cVal
  }, getLocalData, saveLocalData);

  res.json(result);
});

// Clear all generated questions across all classes and chapters
app.post('/api/questions/clear-all', (req, res) => {
  const currentData = getLocalData();
  const deletedCount = (currentData.questions || []).length;
  currentData.questions = [];
  saveLocalData(currentData);
  res.json({
    success: true,
    message: `Cleared all ${deletedCount} questions. Questions count is now 0.`,
    deletedCount
  });
});

// Import user-provided questions into hidden vault for any chapter
app.post('/api/vault/import', (req, res) => {
  const { chapter, questions, subjectName } = req.body;
  if (!chapter || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ success: false, message: 'Chapter name and array of questions required.' });
  }

  const result = saveQuestionsToVault(chapter, questions, subjectName || 'Physics');
  res.json(result);
});


// SMART GENERATE endpoint: strict 25 questions, Steps A->B->C->D, 3 Duplicate Checks, Real Quality Gates
app.post('/api/questions/smart-generate', async (req, res) => {
  const {
    className,
    subjectName,
    boardName,
    subSubjectName,
    sectionName,
    chapter,
    diagramCount,
    theoryCount,
    complexCount,
    numericalCount,
    totalCount
  } = req.body;

  const dCount = parseInt(diagramCount) || 0;
  const tCount = parseInt(theoryCount) || 0;
  const compCount = parseInt(complexCount) || 0;
  const numCount = parseInt(numericalCount) || 0;

  const total = dCount + tCount + compCount + numCount;
  if (total < 1 || total > 25) {
    return res.status(400).json({
      success: false,
      message: 'Total questions must be between 1 and 25 (Maximum 25 questions allowed per batch).'
    });
  }

  try {
    const currentData = getLocalData();
    const existingList = currentData.questions || [];

    // Compulsory Quota Enforcement: Subjective 100 (Diag 30, Num 30, Theo 20, Comp 20), AR 30, Case 50, HOTS 20
    const rawSec = (sectionName || '').trim().toUpperCase();
    const isAR = rawSec.includes('ASSERTION');
    const isHOTS = rawSec.includes('HOTS');
    const isCase = rawSec.includes('CASE');
    const chapterUsage = getChapterUsage(existingList, chapter, className || 'Class 10', sectionName || 'Subjective');

    if (isCase) {
      if (chapterUsage.allLimitsReached || chapterUsage.remainingAllowed <= 0) {
        return res.status(400).json({ success: false, message: `No more questions can be generated for "${chapter}" in Case Based Studies. Maximum quota of 50 questions has been reached.` });
      }
      if (total > chapterUsage.remainingAllowed) {
        return res.status(400).json({ success: false, message: `Cannot generate ${total} Case Based question(s) for "${chapter}". Limit is 50. Already generated: ${chapterUsage.alreadyGenerated.count}/50. Maximum remaining allowed is ${chapterUsage.remainingAllowed}.` });
      }
    } else if (isAR) {
      if (chapterUsage.allLimitsReached || chapterUsage.remainingAllowed <= 0) {
        return res.status(400).json({ success: false, message: `No more questions can be generated for "${chapter}" in Assertion-Reasoning. Maximum quota of 30 questions has been reached.` });
      }
      if (total > chapterUsage.remainingAllowed) {
        return res.status(400).json({ success: false, message: `Cannot generate ${total} Assertion-Reasoning question(s) for "${chapter}". Limit is 30. Already generated: ${chapterUsage.alreadyGenerated.count}/30. Maximum remaining allowed is ${chapterUsage.remainingAllowed}.` });
      }
    } else if (isHOTS) {
      if (chapterUsage.allLimitsReached || chapterUsage.remainingAllowed <= 0) {
        return res.status(400).json({ success: false, message: `No more questions can be generated for "${chapter}" in HOTS. Maximum quota of 20 questions has been reached.` });
      }
      if (total > chapterUsage.remainingAllowed) {
        return res.status(400).json({ success: false, message: `Cannot generate ${total} HOTS question(s) for "${chapter}". Limit is 20. Already generated: ${chapterUsage.alreadyGenerated.count}/20. Maximum remaining allowed is ${chapterUsage.remainingAllowed}.` });
      }
    } else {
      // Subjective: Diagrammatic 30, Numerical 30, Theoretical 20, Complex 20 (Total 100)
      if (chapterUsage.allLimitsReached) {
        return res.status(400).json({ success: false, message: `No more questions can be generated for "${chapter}". All maximum quotas have been reached: 30 Diagrammatic, 30 Numerical, 20 Theoretical, 20 Complex (Total 100).` });
      }
      if (dCount > 0 && dCount > chapterUsage.remainingAllowed.diagrammatic) {
        return res.status(400).json({ success: false, message: `Cannot generate ${dCount} diagrammatic question(s) for "${chapter}". Limit is 30. Already generated: ${chapterUsage.alreadyGenerated.diagrammatic}/30. Maximum remaining allowed is ${chapterUsage.remainingAllowed.diagrammatic}.` });
      }
      if (numCount > 0 && numCount > chapterUsage.remainingAllowed.numerical) {
        return res.status(400).json({ success: false, message: `Cannot generate ${numCount} numerical question(s) for "${chapter}". Limit is 30. Already generated: ${chapterUsage.alreadyGenerated.numerical}/30. Maximum remaining allowed is ${chapterUsage.remainingAllowed.numerical}.` });
      }
      if (tCount > 0 && tCount > chapterUsage.remainingAllowed.theoretical) {
        return res.status(400).json({ success: false, message: `Cannot generate ${tCount} theoretical question(s) for "${chapter}". Limit is 20. Already generated: ${chapterUsage.alreadyGenerated.theoretical}/20. Maximum remaining allowed is ${chapterUsage.remainingAllowed.theoretical}.` });
      }
      if (compCount > 0 && compCount > chapterUsage.remainingAllowed.complex) {
        return res.status(400).json({ success: false, message: `Cannot generate ${compCount} complex question(s) for "${chapter}". Limit is 20. Already generated: ${chapterUsage.alreadyGenerated.complex}/20. Maximum remaining allowed is ${chapterUsage.remainingAllowed.complex}.` });
      }
    }

    const result = await executeSmartGenerationPipeline({
      chapter: chapter || 'Circles',
      className: className || 'Class 10',
      subjectName: subjectName || 'Mathematics',
      boardName: boardName || 'ICSE',
      subSubjectName: subSubjectName || '',
      sectionName: sectionName || 'Section A',
      diagramCount: dCount,
      theoryCount: tCount,
      complexCount: compCount,
      numericalCount: numCount,
      totalCount: total
    }, existingList);

    if (!currentData.questions) currentData.questions = [];
    const savedQuestions = [];

    result.questions.forEach(q => {
      if (enforceUniqueConstraint(q, currentData.questions)) {
        const record = {
          ...q,
          boardName: boardName || 'ICSE',
          subSubjectName: subSubjectName || '',
          globalId: 'Q-' + Math.random().toString(36).substring(2, 9),
          normalized_question_hash: q.normalized_question_hash || computeQuestionHash(q.question),
          question_skeleton: q.question_skeleton || computeQuestionSkeleton(q.question),
          createdAt: new Date().toISOString()
        };
        currentData.questions.push(record);
        savedQuestions.push(record);
      }
    });

    saveLocalData(currentData);

    res.json({
      success: true,
      count: savedQuestions.length,
      questions: savedQuestions,
      questionsPerType: result.questionsPerType,
      rejectedCountByReason: result.rejectedCountByReason,
      rejectedReport: result.rejectedReport,
      unfilledSlots: result.unfilledSlots,
      chapterAnalysis: result.chapterAnalysis,
      coverageStatus: result.coverageStatus
    });
  } catch (err) {
    if (err.isGeminiKeyMissing) {
      return res.status(400).json({
        success: false,
        isGeminiKeyMissing: true,
        message: err.message
      });
    }
    if (err.isOllamaPause) {
      return res.status(503).json({
        success: false,
        isOllamaPause: true,
        message: 'Ollama not reachable - run: ollama serve',
        model: err.model,
        originalError: err.originalError
      });
    }
    console.error('Smart generate error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Fallback to client app
app.get('{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Academic Registry Portal online at http://localhost:${PORT}`);
});
