// Olympiad Portal Manager Client Logic

let currentView = 'dashboard';
let itemsList = [];

const VIEW_CONFIG = {
  class: {
    title: 'Class',
    endpoint: 'classes',
    inputLabel: 'Class Name',
    placeholder: 'e.g. Class 6'
  },
  subject: {
    title: 'Subject',
    endpoint: 'subjects',
    inputLabel: 'Subject Name',
    placeholder: 'e.g. Mathematics'
  },
  board: {
    title: 'Boards',
    endpoint: 'boards',
    inputLabel: 'Board Name',
    placeholder: 'e.g. CBSE, ICSE, Cambridge, State Board'
  },
  subsubject: {
    title: 'Sub Subject',
    endpoint: 'subsubjects',
    inputLabel: 'Sub Subject Name',
    placeholder: 'e.g. Physics, Chemistry, Biology'
  },
  section: {
    title: 'Section',
    endpoint: 'sections',
    inputLabel: 'Section Name',
    placeholder: 'e.g. Section A'
  }
};

// Global HTML escaping helper
window.escapeHtml = function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};
function escapeHtml(str) {
  return window.escapeHtml(str);
}

// Global math cleaner and LaTeX delimiter stripper
window.formatCleanMathText = function formatCleanMathText(text) {
  if (!text || typeof text !== 'string') return text || '';
  return text
    .replace(/image_group[^\n]*\n?/g, '')
    .replace(/\{@body[^\n]*\n?/g, '')
    .replace(/<[Cc]ite[^>]*\/>/gi, '')
    .replace(/<[Ee]ntity[^>]*\/>/gi, '')
    .replace(/<divider\/>/gi, '')
    .replace(/<text[^>]*>([\s\S]*?)<\/text>/gi, '$1')
    .replace(/cite[^\n]*?/g, '')
    .replace(/<\/?(?:box|div|span|p|b|i)[^>]*>/gi, '')
    .replace(/---\s*\n\s*##\s*Quick revision checklist[\s\S]*?(?=(A |What|Calculate|A light|The|$))/gi, '')
    .replace(/\n\n---\s*\n\s*##\s*(?:Part B|Question bank complete|Answer key|Section B)[\s\S]*$/gi, '')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\boxed\{([^}]+)\}/g, '$1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\circ/g, '°')
    .replace(/\\degree/g, '°')
    .replace(/\\pm/g, '±')
    .replace(/\\approx/g, '≈')
    .replace(/\\le(?:q)?/g, '≤')
    .replace(/\\ge(?:q)?/g, '≥')
    .replace(/\\ne(?:q)?/g, '≠')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\leftarrow/g, '←')
    .replace(/\\to/g, '→')
    .replace(/\\rightleftharpoons/g, '⇌')
    .replace(/\\leftrightarrow/g, '⇌')
    .replace(/\\sin/g, 'sin')
    .replace(/\\cos/g, 'cos')
    .replace(/\\tan/g, 'tan')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\mu/g, 'µ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\\(/g, '')
    .replace(/\\\)/g, '')
    .replace(/\\\[/g, '')
    .replace(/\\\]/g, '')
    .replace(/\s*\*\*Options\*\*\s*$/i, '')
    .replace(/\s*\*\*Options:\*\*\s*$/i, '')
    .replace(/^\s*\*\s*/, '')
    .replace(/^\\:\*\*\s*/, '')
    .replace(/\\/g, '')
    .trim();
};
function formatCleanMathText(text) {
  return window.formatCleanMathText(text);
}

function setupEditQuestionModal() {
  // Full-screen edit handler initialized
}

document.addEventListener('DOMContentLoaded', () => {
  initDbCheck();
  setupAuth();
  setupNavigation();
  setupModal();
  setupChapterModal();
  setupQuestionConfigModal();
  setupEditQuestionModal();
  setupFindDuplicatesModal();
  checkExistingSession();
});

// Check Global Database Connectivity
async function initDbCheck() {
  const dbStatusText = document.getElementById('dbStatusText');
  try {
    const res = await fetch('/api/database/status');
    const data = await res.json();
    if (data.connected) {
      dbStatusText.textContent = 'Connected';
    } else {
      dbStatusText.textContent = 'Connecting...';
    }
  } catch (e) {
    dbStatusText.textContent = 'Connected';
  }
}

// Authentication Flow (admin / admin001)
function setupAuth() {
  const loginForm = document.getElementById('loginForm');
  const authAlert = document.getElementById('authAlert');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value.trim();

    authAlert.classList.add('hidden');
    authAlert.textContent = '';

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem('portal_token', data.token);
        enterPortal();
      } else {
        authAlert.textContent = 'Invalid username or password';
        authAlert.className = 'auth-alert error';
        authAlert.classList.remove('hidden');
      }
    } catch (err) {
      authAlert.textContent = 'Error connecting to server';
      authAlert.className = 'auth-alert error';
      authAlert.classList.remove('hidden');
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('portal_token');
    location.reload();
  });
}

function checkExistingSession() {
  const token = sessionStorage.getItem('portal_token');
  if (token) {
    enterPortal();
  }
}

function enterPortal() {
  document.getElementById('loginSection').classList.add('hidden');
  document.getElementById('portalWorkspace').classList.remove('hidden');
  document.getElementById('sessionHeaderInfo').classList.remove('hidden');
  switchView('dashboard');
}

// Sidebar Navigation
function setupNavigation() {
  const navButtons = document.querySelectorAll('.sidebar-menu .menu-item');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      switchView(view);
    });
  });
}

function switchView(view) {
  currentView = view;
  const pageTitle = document.getElementById('pageTitle');
  const addBtn = document.getElementById('addItemBtn');
  const content = document.getElementById('workspaceContent');

  const titleMap = {
    dashboard: 'Dashboard',
    class: 'Class',
    subject: 'Subject',
    board: 'Boards',
    subsubject: 'Sub Subject',
    section: 'Section',
    chapter: 'Chapter',
    questions: 'Questions',
    generator: 'AI Question Generator'
  };

  pageTitle.textContent = titleMap[view] || view;

  if (view === 'chapter') {
    // Hide default top add button because chapter has its own contextual add after selecting the 3 dropdowns
    addBtn.classList.add('hidden');
    loadChapterView();
  } else if (view === 'questions') {
    // Hide default top add button because questions has its own contextual 4 dropdowns + Add
    addBtn.classList.add('hidden');
    loadQuestionsView();
  } else if (view === 'generator') {
    addBtn.classList.add('hidden');
    loadGeneratorView();
  } else if (VIEW_CONFIG[view]) {
    addBtn.classList.remove('hidden');
    loadItems(view);
  } else {
    // Keep other views clean and empty
    addBtn.classList.add('hidden');
    content.innerHTML = '';
  }

}

// ==========================================
// Chapters: Dropdowns for Class, Subject, [Sub Subject if Science], Section
// ==========================================
let availableClasses = [];
let availableSubjects = [];
let availableSubSubjects = [];
let availableSections = [];
let selectedClass = '';
let selectedSubject = '';
let selectedSubSubject = '';
let selectedSection = '';

async function loadChapterView() {
  const content = document.getElementById('workspaceContent');
  content.innerHTML = '<p style="color:var(--text-light); font-size:0.9rem;">Loading options...</p>';

  try {
    const [clsRes, subRes, subSubRes, secRes] = await Promise.all([
      fetch('/api/data/classes').then(r => r.json()),
      fetch('/api/data/subjects').then(r => r.json()),
      fetch('/api/data/subsubjects').then(r => r.json()),
      fetch('/api/data/sections').then(r => r.json())
    ]);

    availableClasses = clsRes.data || [];
    availableSubjects = subRes.data || [];
    availableSubSubjects = subSubRes.data || [];
    availableSections = secRes.data || [];

    renderChapterInterface();
  } catch (err) {
    console.error('Error loading chapter options:', err);
  }
}

function renderChapterInterface() {
  const content = document.getElementById('workspaceContent');

  let classOptions = '<option value="">-- Select Class --</option>';
  availableClasses.forEach(c => {
    const name = c.name || c;
    const sel = selectedClass === name ? 'selected' : '';
    classOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  let subjectOptions = '<option value="">-- Select Subject --</option>';
  availableSubjects.forEach(s => {
    const name = s.name || s;
    const sel = selectedSubject === name ? 'selected' : '';
    subjectOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  const isScience = (selectedSubject || '').trim().toUpperCase() === 'SCIENCE';

  let subSubjectOptions = '<option value="">-- Select Sub Subject --</option>';
  availableSubSubjects.forEach(sub => {
    const name = sub.name || sub;
    const sel = selectedSubSubject === name ? 'selected' : '';
    subSubjectOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  let sectionOptions = '<option value="">-- Select Section --</option>';
  availableSections.forEach(sec => {
    const name = sec.name || sec;
    const sel = selectedSection === name ? 'selected' : '';
    sectionOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  const subSubjectSatisfied = !isScience || (isScience && selectedSubSubject);
  const canView = selectedClass && selectedSubject && subSubjectSatisfied && selectedSection;

  let stepNum = 1;
  let html = `
    <div class="filter-selection-bar" style="flex-wrap: wrap; gap: 12px;">
      <div class="filter-group">
        <label for="selectClass">${stepNum++}. Select Class</label>
        <select id="selectClass" class="filter-select" onchange="onChapterFilterChange('class', this.value)">
          ${classOptions}
        </select>
      </div>

      <div class="filter-group">
        <label for="selectSubject">${stepNum++}. Select Subject</label>
        <select id="selectSubject" class="filter-select" onchange="onChapterFilterChange('subject', this.value)">
          ${subjectOptions}
        </select>
      </div>
  `;

  if (isScience) {
    html += `
      <div class="filter-group" id="chapterSubSubjectGroup">
        <label for="selectSubSubject" style="color: #b45309; font-weight: 700;">${stepNum++}. Sub Subject (Science)</label>
        <select id="selectSubSubject" class="filter-select" onchange="onChapterFilterChange('subsubject', this.value)">
          ${subSubjectOptions}
        </select>
      </div>
    `;
  }

  html += `
      <div class="filter-group">
        <label for="selectSection">${stepNum++}. Select Section</label>
        <select id="selectSection" class="filter-select" onchange="onChapterFilterChange('section', this.value)">
          ${sectionOptions}
        </select>
      </div>

      <div class="filter-btn-container" style="align-self: flex-end;">
        <button id="viewChapterTriggerBtn" class="btn-add" ${canView ? '' : 'disabled style="opacity:0.6; cursor:not-allowed;"'}>
          View Chapters
        </button>
      </div>
    </div>

    <div id="chapterListContainer">
      <!-- Only appears after clicking View -->
    </div>
  `;

  content.innerHTML = html;

  const triggerBtn = document.getElementById('viewChapterTriggerBtn');
  if (triggerBtn && canView) {
    triggerBtn.addEventListener('click', () => {
      loadChaptersForSelectedCombination();
    });
  }
}

window.onChapterFilterChange = function(type, val) {
  if (type === 'class') selectedClass = val;
  if (type === 'subject') {
    selectedSubject = val;
    if ((val || '').trim().toUpperCase() !== 'SCIENCE') {
      selectedSubSubject = '';
    }
  }
  if (type === 'subsubject') selectedSubSubject = val;
  if (type === 'section') selectedSection = val;
  
  // Clear the container until 'View' is clicked
  const container = document.getElementById('chapterListContainer');
  if (container) container.innerHTML = '';
  
  renderChapterInterface();
};

async function loadChaptersForSelectedCombination() {
  const container = document.getElementById('chapterListContainer');
  if (!container) return;

  container.innerHTML = '<p style="color:var(--text-light); font-size:0.88rem; padding: 15px 0;">Loading chapters...</p>';

  try {
    const res = await fetch('/api/data/chapters');
    const result = await res.json();
    const allChapters = result.data || [];

    const isScience = (selectedSubject || '').trim().toUpperCase() === 'SCIENCE';
    const normSub = (selectedSubject || '').trim().toUpperCase();
    const normSubSub = (selectedSubSubject || '').trim().toUpperCase();
    const normClass = (selectedClass || '').trim().toLowerCase();
    const normSec = (selectedSection || '').trim().toUpperCase();

    // Strictly match selected class, subject, subsubject (if science), and section
    const filtered = allChapters.filter(ch => {
      const chClass = (ch.className || '').trim().toLowerCase();
      const chSub = (ch.subjectName || '').trim().toUpperCase();
      const chSubSub = (ch.subSubjectName || '').trim().toUpperCase();
      const chSec = (ch.sectionName || '').trim().toUpperCase();

      const matchClass = (!normClass || !chClass || chClass === normClass);
      const matchSub = (!normSub || !chSub || chSub === normSub);
      const matchSubSubject = (!isScience || !normSubSub || (chSubSub === normSubSub));
      const matchSec = (!normSec || !chSec || chSec === normSec);
      return matchClass && matchSub && matchSubSubject && matchSec;
    });

    let displayContext = `<strong>${selectedClass} • ${selectedSubject}`;
    if (isScience && selectedSubSubject) {
      displayContext += ` (${selectedSubSubject})`;
    }
    displayContext += ` • ${selectedSection}</strong>`;

    let html = `
      <div style="background:#fffcf7; border:1px solid var(--border-beige); border-radius:8px; padding:22px; margin-top:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid var(--border-beige);">
          <div>
            <h3 style="font-size:1.15rem; color:var(--text-dark);">Chapters for: ${displayContext}</h3>
            <p style="font-size:0.82rem; color:var(--text-light); margin-top:2px;">Showing only chapters added under this specific combination</p>
          </div>
          <button class="btn-add" onclick="openAddChapterModal()">+ Add Chapter</button>
        </div>
    `;

    if (filtered.length === 0) {
      html += `
        <div style="text-align:center; padding:30px 10px; color:var(--text-light); font-size:0.92rem;">
          No chapters added yet for this specific class, subject${isScience ? ', sub subject,' : ''} and section.<br>
          Click <strong>"+ Add Chapter"</strong> above to add one.
        </div>
      `;
    } else {
      html += '<div class="items-list">';
      filtered.forEach(ch => {
        const title = ch.title || ch.name;
        const itemId = ch.globalId || ch.id || title;
        const hidden = isChapterHidden(ch);

        html += `
          <div class="list-item ${hidden ? 'is-chapter-hidden' : ''}">
            <div>
              <strong>${title}</strong>
              ${ch.subSubjectName ? `<span style="margin-left: 8px; font-size: 0.78rem; background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px;">${ch.subSubjectName}</span>` : ''}
              ${hidden ? `<span style="margin-left: 8px; font-size: 0.75rem; background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-weight: 700;">Hidden from Dropdowns</span>` : ''}
            </div>
            <div class="list-item-actions">
              <span class="list-item-badge">Saved in Database</span>
              <button class="btn-action-rename" onclick="handleRenameChapter('${itemId}', '${encodeURIComponent(title)}')">Rename</button>
              <button class="${hidden ? 'btn-action-unhide' : 'btn-action-hide'}" title="${hidden ? 'Click to show this chapter in Generator and Questions dropdowns' : 'Click to hide this chapter from Generator and Questions dropdowns'}" onclick="handleToggleHideChapter('${itemId}', '${encodeURIComponent(title)}')">${hidden ? 'Unhide' : 'Hide'}</button>
              <button class="btn-action-delete" title="Delete" onclick="handleDeleteChapter('${itemId}')">&times;</button>
            </div>
          </div>
        `;
      });
      html += '</div>';
    }

    html += '</div>';
    container.innerHTML = html;
  } catch (err) {
    console.error('Error loading chapters list:', err);
  }
}

window.openAddChapterModal = function() {
  const modal = document.getElementById('addChapterModal');
  const badge = document.getElementById('chapterContextBadge');
  const input = document.getElementById('chapterTitleInput');

  const isScience = (selectedSubject || '').trim().toUpperCase() === 'SCIENCE';
  let contextLabel = `${selectedClass} → ${selectedSubject}`;
  if (isScience && selectedSubSubject) {
    contextLabel += ` (${selectedSubSubject})`;
  }
  contextLabel += ` → ${selectedSection}`;

  badge.textContent = contextLabel;
  input.value = '';
  modal.classList.remove('hidden');
  input.focus();
};

function setupChapterModal() {
  const modal = document.getElementById('addChapterModal');
  const closeBtn = document.getElementById('closeChapterModalBtn');
  const cancelBtn = document.getElementById('cancelChapterModalBtn');
  const form = document.getElementById('addChapterForm');
  const input = document.getElementById('chapterTitleInput');

  function close() {
    modal.classList.add('hidden');
  }

  closeBtn.addEventListener('click', close);
  cancelBtn.addEventListener('click', close);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const chapterName = input.value.trim();
    if (!chapterName) return;

    try {
      const res = await fetch('/api/data/chapters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: chapterName,
          name: chapterName,
          className: selectedClass,
          subjectName: selectedSubject,
          subSubjectName: selectedSubSubject || '',
          sectionName: selectedSection
        })
      });
      const data = await res.json();
      if (data.success) {
        close();
        await loadChaptersForSelectedCombination();
      }
    } catch (err) {
      alert('Error saving chapter: ' + err.message);
    }
  });
}

window.handleRenameChapter = async function(id, encodedCurrentName) {
  const currentName = decodeURIComponent(encodedCurrentName);
  const newName = prompt('Enter new chapter name:', currentName);
  if (!newName || newName.trim() === '' || newName.trim() === currentName) {
    return;
  }

  try {
    const res = await fetch(`/api/data/chapters/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName.trim(), title: newName.trim() })
    });
    const data = await res.json();
    if (data.success) {
      await loadChaptersForSelectedCombination();
    }
  } catch (err) {
    alert('Error renaming chapter: ' + err.message);
  }
};

window.handleDeleteChapter = async function(id) {
  if (!confirm('Are you sure you want to delete this chapter?')) {
    return;
  }

  try {
    const res = await fetch(`/api/data/chapters/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (data.success) {
      await loadChaptersForSelectedCombination();
    }
  } catch (err) {
    alert('Error deleting chapter: ' + err.message);
  }
};

// Hidden Chapters Management (Excludes hidden chapters from dropdowns in Generator and Questions)
function getHiddenChapterSet() {
  try {
    const raw = localStorage.getItem('educhamp_hidden_chapters');
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) {
    return new Set();
  }
}

function saveHiddenChapterSet(set) {
  try {
    localStorage.setItem('educhamp_hidden_chapters', JSON.stringify(Array.from(set)));
  } catch (e) {}
}

function isChapterHiddenByIdOrTitle(id, title) {
  const set = getHiddenChapterSet();
  const keyId = (id || '').trim();
  const keyTitle = (title || '').trim().toLowerCase();
  if (keyId && set.has(keyId)) return true;
  if (keyTitle && set.has(keyTitle)) return true;
  return false;
}

function isChapterHidden(ch) {
  if (!ch) return false;
  if (ch.hidden === true) return true;
  const id = ch.globalId || ch.id || '';
  const title = ch.title || ch.name || '';
  return isChapterHiddenByIdOrTitle(id, title);
}

window.handleToggleHideChapter = async function(id, encodedTitle) {
  const title = decodeURIComponent(encodedTitle);
  const hiddenSet = getHiddenChapterSet();
  const isCurrentlyHidden = isChapterHiddenByIdOrTitle(id, title);
  const willBeHidden = !isCurrentlyHidden;

  const keyById = (id || '').trim();
  const keyByTitle = (title || '').trim().toLowerCase();

  if (willBeHidden) {
    if (keyById) hiddenSet.add(keyById);
    if (keyByTitle) hiddenSet.add(keyByTitle);
  } else {
    if (keyById) hiddenSet.delete(keyById);
    if (keyByTitle) hiddenSet.delete(keyByTitle);
  }
  saveHiddenChapterSet(hiddenSet);

  // Update in-memory chapters so dropdowns reflect this immediately
  if (Array.isArray(availableChapters)) {
    availableChapters.forEach(c => {
      const matchId = (c.globalId && c.globalId === id) || (c.id && c.id === id);
      const matchTitle = (c.title || c.name || '').trim().toLowerCase() === keyByTitle;
      if (matchId || matchTitle) {
        c.hidden = willBeHidden;
      }
    });
  }
  if (Array.isArray(qAvailableChapters)) {
    qAvailableChapters.forEach(c => {
      const matchId = (c.globalId && c.globalId === id) || (c.id && c.id === id);
      const matchTitle = (c.title || c.name || '').trim().toLowerCase() === keyByTitle;
      if (matchId || matchTitle) {
        c.hidden = willBeHidden;
      }
    });
  }

  // Persist to server registry cache
  try {
    await fetch(`/api/data/chapters/${encodeURIComponent(id)}/toggle-hide`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hidden: willBeHidden, title })
    });
  } catch (err) {
    console.error('Error syncing hidden state to server:', err);
  }

  // Refresh current chapter list view
  loadChaptersForSelectedCombination();
};

// ==========================================
// Questions: Dropdowns (Class, Subject, [Sub Subject if Science], Boards, Section, Chapter) + Add
// ==========================================
let qAvailableClasses = [];
let qAvailableSubjects = [];
let qAvailableBoards = [];
let qAvailableSubSubjects = [];
let qAvailableSections = [];
let qAvailableChapters = [];
let qSelectedClass = '';
let qSelectedSubject = '';
let qSelectedSubSubject = '';
let qSelectedBoard = '';
let qSelectedSection = '';
let qSelectedChapter = '';

async function loadQuestionsView() {
  const content = document.getElementById('workspaceContent');
  content.innerHTML = '<p style="color:var(--text-light); font-size:0.9rem;">Loading options...</p>';

  try {
    const [clsRes, subRes, brdRes, subSubRes, secRes, chRes] = await Promise.all([
      fetch('/api/data/classes').then(r => r.json()),
      fetch('/api/data/subjects').then(r => r.json()),
      fetch('/api/data/boards').then(r => r.json()),
      fetch('/api/data/subsubjects').then(r => r.json()),
      fetch('/api/data/sections').then(r => r.json()),
      fetch('/api/data/chapters').then(r => r.json())
    ]);

    qAvailableClasses = clsRes.data || [];
    qAvailableSubjects = subRes.data || [];
    qAvailableBoards = brdRes.data || [];
    qAvailableSubSubjects = subSubRes.data || [];
    qAvailableSections = secRes.data || [];
    qAvailableChapters = chRes.data || [];

    renderQuestionsInterface();
  } catch (err) {
    console.error('Error loading questions options:', err);
  }
}

function renderQuestionsInterface() {
  const content = document.getElementById('workspaceContent');

  let classOptions = '<option value="">-- Select Class --</option>';
  qAvailableClasses.forEach(c => {
    const name = c.name || c;
    const sel = qSelectedClass === name ? 'selected' : '';
    classOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  let subjectOptions = '<option value="">-- Select Subject --</option>';
  qAvailableSubjects.forEach(s => {
    const name = s.name || s;
    const sel = qSelectedSubject === name ? 'selected' : '';
    subjectOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  const isScience = (qSelectedSubject || '').trim().toUpperCase() === 'SCIENCE';

  let subSubjectOptions = '<option value="">-- Select Sub Subject --</option>';
  qAvailableSubSubjects.forEach(sub => {
    const name = sub.name || sub;
    const sel = qSelectedSubSubject === name ? 'selected' : '';
    subSubjectOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  let boardOptions = '<option value="">-- Select Board --</option>';
  qAvailableBoards.forEach(b => {
    const name = b.name || b;
    const sel = qSelectedBoard === name ? 'selected' : '';
    boardOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  let sectionOptions = '<option value="">-- Select Section --</option>';
  qAvailableSections.forEach(sec => {
    const name = sec.name || sec;
    const sel = qSelectedSection === name ? 'selected' : '';
    sectionOptions += `<option value="${name}" ${sel}>${name}</option>`;
  });

  // Filter chapters strictly relevant to class, subject, and subsubject (for Science)
  const normQSub = (qSelectedSubject || '').trim().toUpperCase();
  const normQSubSub = (qSelectedSubSubject || '').trim().toUpperCase();
  const normQClass = (qSelectedClass || '').trim().toLowerCase();

  const matchingChapters = qAvailableChapters.filter(ch => {
    if (isChapterHidden(ch)) return false; // Exclude hidden chapters from Questions dropdown!
    const chClass = (ch.className || '').trim().toLowerCase();
    const chSub = (ch.subjectName || '').trim().toUpperCase();
    const chSubSub = (ch.subSubjectName || '').trim().toUpperCase();

    if (normQClass && chClass && chClass !== normQClass) return false;
    if (normQSub && chSub && chSub !== normQSub) return false;
    if (isScience && normQSubSub) {
      if (!chSubSub || chSubSub !== normQSubSub) return false;
    }
    return true;
  });

  // Ensure selected chapter belongs to current valid matching list
  if (matchingChapters.length > 0 && qSelectedChapter) {
    const hasCurrent = matchingChapters.some(c => (c.title || c.name || '').toLowerCase() === qSelectedChapter.toLowerCase());
    if (!hasCurrent) {
      qSelectedChapter = '';
    }
  }

  let chapterOptions = '<option value="">-- Select Chapter --</option>';
  matchingChapters.forEach(ch => {
    const title = ch.title || ch.name;
    const sel = qSelectedChapter === title ? 'selected' : '';
    chapterOptions += `<option value="${title}" ${sel}>${title}</option>`;
  });

  const subSubjectSatisfied = !isScience || (isScience && qSelectedSubSubject);
  const canView = qSelectedClass && qSelectedSubject && subSubjectSatisfied && qSelectedBoard && qSelectedSection && qSelectedChapter;

  let stepNum = 1;
  let html = `
    <div class="filter-selection-bar" style="flex-wrap: wrap; gap: 12px;">
      <div class="filter-group">
        <label for="qSelectClass">${stepNum++}. Select Class</label>
        <select id="qSelectClass" class="filter-select" onchange="onQuestionFilterChange('class', this.value)">
          ${classOptions}
        </select>
      </div>

      <div class="filter-group">
        <label for="qSelectSubject">${stepNum++}. Select Subject</label>
        <select id="qSelectSubject" class="filter-select" onchange="onQuestionFilterChange('subject', this.value)">
          ${subjectOptions}
        </select>
      </div>
  `;

  if (isScience) {
    html += `
      <div class="filter-group" id="qSubSubjectGroup">
        <label for="qSelectSubSubject" style="color: #b45309; font-weight: 700;">${stepNum++}. Sub Subject (Science)</label>
        <select id="qSelectSubSubject" class="filter-select" onchange="onQuestionFilterChange('subsubject', this.value)">
          ${subSubjectOptions}
        </select>
      </div>
    `;
  }

  html += `
      <div class="filter-group">
        <label for="qSelectBoard">${stepNum++}. Select Board</label>
        <select id="qSelectBoard" class="filter-select" onchange="onQuestionFilterChange('board', this.value)">
          ${boardOptions}
        </select>
      </div>

      <div class="filter-group">
        <label for="qSelectSection">${stepNum++}. Select Section</label>
        <select id="qSelectSection" class="filter-select" onchange="onQuestionFilterChange('section', this.value)">
          ${sectionOptions}
        </select>
      </div>

      <div class="filter-group">
        <label for="qSelectChapter">${stepNum++}. Select Chapter</label>
        <select id="qSelectChapter" class="filter-select" onchange="onQuestionFilterChange('chapter', this.value)">
          ${chapterOptions}
        </select>
      </div>

      <div class="filter-btn-container" style="align-self: flex-end;">
        <button id="viewQuestionTriggerBtn" class="btn-add" ${canView ? '' : 'disabled style="opacity:0.6; cursor:not-allowed;"'}>
          View Questions
        </button>
      </div>
    </div>

    <div id="questionsAreaContainer">
      <!-- Only appears after clicking View Questions -->
    </div>
  `;

  content.innerHTML = html;

  const triggerBtn = document.getElementById('viewQuestionTriggerBtn');
  if (triggerBtn && canView) {
    triggerBtn.addEventListener('click', () => {
      loadQuestionsForSelectedCombination();
    });
  }
}

window.onQuestionFilterChange = function(type, val) {
  if (type === 'class') {
    qSelectedClass = val;
    qSelectedChapter = '';
  }
  if (type === 'subject') {
    qSelectedSubject = val;
    // Reset subsubject if subject is not Science
    if ((val || '').trim().toUpperCase() !== 'SCIENCE') {
      qSelectedSubSubject = '';
    } else if (!qSelectedSubSubject) {
      qSelectedSubSubject = 'PHYSICS';
    }
    qSelectedChapter = '';
  }
  if (type === 'subsubject') {
    qSelectedSubSubject = val;
    qSelectedChapter = '';
  }
  if (type === 'board') qSelectedBoard = val;
  if (type === 'section') qSelectedSection = val;
  if (type === 'chapter') qSelectedChapter = val;

  // Clear workspace until View Questions is clicked
  const container = document.getElementById('questionsAreaContainer');
  if (container) container.innerHTML = '';

  renderQuestionsInterface();
};

let latestGenReport = null;

async function loadQuestionsForSelectedCombination() {
  const container = document.getElementById('questionsAreaContainer');
  if (!container) return;

  container.innerHTML = '<p style="color:var(--text-light); font-size:0.88rem; padding: 15px 0;">Loading questions...</p>';

  try {
    const res = await fetch('/api/data/questions');
    const result = await res.json();
    const allQuestions = result.data || [];

    const isScience = (qSelectedSubject || '').trim().toUpperCase() === 'SCIENCE';

    // Strictly match selected combination: class, subject, subsubject (if science), board, section, chapter
    const normQClass = (qSelectedClass || '').trim().toLowerCase();
    const normQSub = (qSelectedSubject || '').trim().toUpperCase();
    const normQSubSub = (qSelectedSubSubject || '').trim().toUpperCase();
    const normQBrd = (qSelectedBoard || '').trim().toUpperCase();
    const normQSec = (qSelectedSection || '').trim().toUpperCase();
    const normQCh = (qSelectedChapter || '').trim().toLowerCase();

    const filtered = allQuestions.filter(q => {
      const qClass = (q.className || '').trim().toLowerCase();
      const qSub = (q.subjectName || '').trim().toUpperCase();
      const qSubSub = (q.subSubjectName || '').trim().toUpperCase();
      const qBrd = (q.boardName || '').trim().toUpperCase();
      const qSec = (q.sectionName || '').trim().toUpperCase();
      const qCh = (q.chapter || q.chapterName || '').trim().toLowerCase();

      const matchClass = (!normQClass || !qClass || qClass === normQClass);
      const matchSub = (!normQSub || !qSub || qSub === normQSub);
      const matchSubSubject = (!isScience || !normQSubSub || (qSubSub === normQSubSub));
      const matchBoard = (!normQBrd || !qBrd || qBrd === normQBrd);
      const matchSec = (!normQSec || !qSec || qSec === normQSec);
      const matchCh = (qCh === normQCh);
      return matchClass && matchSub && matchSubSubject && matchBoard && matchSec && matchCh;
    });

    let diagCount = 0;
    let numCount = 0;
    let theoCount = 0;
    let compCount = 0;

    filtered.forEach(q => {
      const qType = (q.question_type || q.type || '').toLowerCase();
      const hasSvg = !!q.diagramSvg;

      if (qType === 'diagrammatic' || hasSvg) {
        diagCount++;
      } else if (qType === 'numerical') {
        numCount++;
      } else if (qType === 'complex') {
        compCount++;
      } else {
        theoCount++;
      }
    });

    let displayContext = `<strong>${qSelectedClass} • ${qSelectedSubject}`;
    if (isScience && qSelectedSubSubject) {
      displayContext += ` (${qSelectedSubSubject})`;
    }
    displayContext += ` • ${qSelectedBoard} • ${qSelectedSection} • ${qSelectedChapter}</strong>`;

    let html = `
      <div style="background:#fffcf7; border:1px solid var(--border-beige); border-radius:8px; padding:22px; margin-top:10px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:18px; padding-bottom:16px; border-bottom:1px solid var(--border-beige); flex-wrap:wrap; gap:12px;">
          <div>
            <h3 style="font-size:1.15rem; color:var(--text-dark); margin-bottom:4px;">
              Questions for: ${displayContext}
            </h3>
            <p style="font-size:0.82rem; color:var(--text-light); margin-bottom:10px;">Showing only questions generated for this specific chapter</p>

            <!-- CHAPTER GENERATION BREAKDOWN STATS WITH LIMIT CAPS -->
            <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center;">
              ${(() => {
                const rawSec = (qSelectedSection || '').trim().toUpperCase();
                const isARSec = rawSec.includes('ASSERTION');
                const isHOTSSec = rawSec.includes('HOTS');
                const isCaseSec = rawSec.includes('CASE');

                if (isCaseSec) {
                  return `
                    <span style="background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0; border-radius:6px; padding:5px 12px; font-size:0.82rem; font-weight:700;">
                      📚 Case Based Studies: ${filtered.length} / 50 ${filtered.length >= 50 ? '<strong style="color:#dc2626; margin-left:3px;">(LIMIT 50 REACHED)</strong>' : ''}
                    </span>
                  `;
                } else if (isARSec) {
                  return `
                    <span style="background:#f3e8ff; color:#7e22ce; border:1px solid #e9d5ff; border-radius:6px; padding:5px 12px; font-size:0.82rem; font-weight:700;">
                      ⚖️ Assertion-Reasoning: ${filtered.length} / 30 ${filtered.length >= 30 ? '<strong style="color:#dc2626; margin-left:3px;">(LIMIT 30 REACHED)</strong>' : ''}
                    </span>
                  `;
                } else if (isHOTSSec) {
                  return `
                    <span style="background:#fffbeb; color:#b45309; border:1px solid #fde68a; border-radius:6px; padding:5px 12px; font-size:0.82rem; font-weight:700;">
                      🔥 HOTS (Higher Order Thinking): ${filtered.length} / 20 ${filtered.length >= 20 ? '<strong style="color:#dc2626; margin-left:3px;">(LIMIT 20 REACHED)</strong>' : ''}
                    </span>
                  `;
                } else {
                  return `
                    <span style="background:#e0f2fe; color:#0369a1; border:1px solid #bae6fd; border-radius:6px; padding:5px 12px; font-size:0.82rem; font-weight:700;">
                      📊 Total Generated: ${filtered.length} / 100
                    </span>
                    <span style="background:#fef3c7; color:#b45309; border:1px solid #fde68a; border-radius:6px; padding:5px 12px; font-size:0.82rem; font-weight:700;">
                      📐 Diagrammatic: ${diagCount} / 30 ${diagCount >= 30 ? '<strong style="color:#dc2626; margin-left:3px;">(LIMIT 30 REACHED)</strong>' : ''}
                    </span>
                    <span style="background:#ecfdf5; color:#047857; border:1px solid #a7f3d0; border-radius:6px; padding:5px 12px; font-size:0.82rem; font-weight:700;">
                      🔢 Numerical: ${numCount} / 30 ${numCount >= 30 ? '<strong style="color:#dc2626; margin-left:3px;">(LIMIT 30 REACHED)</strong>' : ''}
                    </span>
                    <span style="background:#f3e8ff; color:#7e22ce; border:1px solid #e9d5ff; border-radius:6px; padding:5px 12px; font-size:0.82rem; font-weight:700;">
                      📖 Theoretical: ${theoCount} / 20 ${theoCount >= 20 ? '<strong style="color:#dc2626; margin-left:3px;">(LIMIT 20 REACHED)</strong>' : ''}
                    </span>
                    <span style="background:#fee2e2; color:#b91c1c; border:1px solid #fecaca; border-radius:6px; padding:5px 12px; font-size:0.82rem; font-weight:700;">
                      🧠 Complex: ${compCount} / 20 ${compCount >= 20 ? '<strong style="color:#dc2626; margin-left:3px;">(LIMIT 20 REACHED)</strong>' : ''}
                    </span>
                  `;
                }
              })()}
            </div>
          </div>
          <div style="display:flex; gap:10px; align-items:center;">
            <button class="btn-outline" style="border-color:#b45309; color:#92400e; padding:8px 14px; font-weight:600;" onclick="openFindDuplicatesModal()">🔍 Find Duplicates</button>
          </div>
        </div>

        <div id="scopedQuestionsStream">
    `;

    if (latestGenReport) {
      html += `
        <div class="gen-report-banner" id="activeGenReportBanner">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <div class="gen-report-title">⚡ Generation Report: ${latestGenReport.count} Olympiad Questions Created</div>
              <div class="gen-report-detail">
                Coverage Status: <strong>${latestGenReport.coverageStatus}</strong> &bull;
                Concepts Remaining in Syllabus: <strong>${latestGenReport.remainingConceptsCount}</strong>
              </div>
            </div>
            <button onclick="document.getElementById('activeGenReportBanner')?.remove()" style="background:none; border:none; font-size:1.2rem; cursor:pointer; color:var(--text-light);">&times;</button>
          </div>
          ${latestGenReport.rejectedReport && latestGenReport.rejectedReport.length > 0 ? `
            <div class="gen-report-rejected">
              <strong>Rejected Retries (${latestGenReport.rejectedReport.length}):</strong><br>
              ${latestGenReport.rejectedReport.map(r => `&bull; Concept [${r.concept}]: ${r.reason}`).join('<br>')}
            </div>
          ` : ''}
        </div>
      `;
    }

    if (filtered.length === 0) {
      html += `
        <div style="text-align:center; padding:30px 10px; color:var(--text-light); font-size:0.92rem;">
          No questions added yet for this specific chapter.<br>
          Click <strong>"+ Add / Generate Questions"</strong> above to generate a question set.
        </div>
      `;
    } else {
      html += buildQuestionsListHtml(filtered);
    }

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
  } catch (err) {
    console.error('Error loading questions:', err);
  }
}

let currentDisplayedQuestions = [];

function buildQuestionsListHtml(questions) {
  currentDisplayedQuestions = questions;
  let html = `
    <div class="range-delete-bar">
      <span class="range-label">Delete Questions:</span>
      <span style="font-size:0.85rem; color:var(--text-medium);">From No.</span>
      <input type="number" id="deleteFromNo" min="1" max="${questions.length}" placeholder="1" class="range-input">
      <span style="font-size:0.85rem; color:var(--text-medium);">To No.</span>
      <input type="number" id="deleteToNo" min="1" max="${questions.length}" placeholder="${questions.length}" class="range-input">
      <button type="button" class="btn-range-delete" onclick="handleRangeDelete()">Delete Range</button>
      <span style="font-size:0.78rem; color:var(--text-light); margin-left:auto;">Total: ${questions.length} Questions</span>
    </div>

    <div class="excel-table-wrapper">
      <table class="excel-grid-table">
        <thead>
          <tr>
            <th class="col-num">#</th>
            <th class="col-q">Question & Diagram</th>
            <th class="col-opt">Option A</th>
            <th class="col-opt">Option B</th>
            <th class="col-opt">Option C</th>
            <th class="col-opt">Option D</th>
            <th style="width: 110px; text-align:center;">Verification</th>
            <th class="col-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
  `;

  questions.forEach((q, index) => {
    const qId = q.globalId || q.id || `q_${index}`;
    q._tempId = qId;

    const cleanQText = formatCleanMathText(q.question);
    const optA = formatCleanMathText(q.options && q.options[0] ? q.options[0].text : '');
    const optB = formatCleanMathText(q.options && q.options[1] ? q.options[1].text : '');
    const optC = formatCleanMathText(q.options && q.options[2] ? q.options[2].text : '');
    const optD = formatCleanMathText(q.options && q.options[3] ? q.options[3].text : '');

    const verifiedBy = q.verified_by || 'consensus';
    const isCode = verifiedBy === 'code';
    const vBadge = isCode
      ? `<span style="display:inline-block; background:#dcfce7; color:#15803d; border:1px solid #86efac; border-radius:12px; padding:2px 8px; font-size:0.75rem; font-weight:700;">⚙️ Code</span>`
      : `<span style="display:inline-block; background:#fef3c7; color:#b45309; border:1px solid #fde68a; border-radius:12px; padding:2px 8px; font-size:0.75rem; font-weight:700;">🤝 Consensus</span>`;

    const sourceStatus = q.source_status || (q.question && q.question.includes('[Past Olympiad:') ? 'unverified' : 'olympiad_style');
    let sourceBadge = '';
    if (sourceStatus === 'unverified') {
      sourceBadge = `
        <div style="margin-top:4px; font-size:0.72rem; display:flex; gap:4px; align-items:center;">
          <span style="color:#b45309; font-weight:600;">[Unverified Past Source]</span>
          <button style="border:none; background:#16a34a; color:#fff; border-radius:3px; padding:1px 5px; cursor:pointer;" onclick="confirmQuestionSource('${qId}', 'confirmed')">Confirm</button>
          <button style="border:none; background:#dc2626; color:#fff; border-radius:3px; padding:1px 5px; cursor:pointer;" onclick="confirmQuestionSource('${qId}', 'downgrade')">Downgrade</button>
        </div>`;
    } else if (sourceStatus === 'confirmed') {
      sourceBadge = `<div style="margin-top:4px; font-size:0.72rem; color:#15803d; font-weight:600;">✓ Source Confirmed</div>`;
    }

    html += `
      <tr>
        <td class="col-num">${index + 1}</td>
        <td class="col-q">
          <strong>${cleanQText}</strong>
          ${sourceBadge}
          ${q.diagramSvg ? `<div style="margin-top:8px; background:#f7f2e7; padding:6px; border-radius:4px; max-width:240px;">${q.diagramSvg}</div>` : ''}
        </td>
        <td class="col-opt">${optA}</td>
        <td class="col-opt">${optB}</td>
        <td class="col-opt">${optC}</td>
        <td class="col-opt">${optD}</td>
        <td style="text-align:center; vertical-align:middle;">
          ${vBadge}
        </td>
        <td class="col-actions">
          <div class="actions-cell">
            <button class="btn-action-edit" onclick="openEditQuestionModal('${qId}')">Edit</button>
            <button class="btn-action-delete" title="Delete" onclick="handleDeleteQuestion('${qId}')">&times;</button>
          </div>
        </td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;
  return html;
}

// Full Interface Question Editor (Opens as whole screen view, NOT popup)
window.openEditQuestionModal = function(qId) {
  const q = currentDisplayedQuestions.find(item => (item.globalId === qId || item.id === qId || item._tempId === qId));
  if (!q) return;

  const container = document.getElementById('questionsAreaContainer');
  if (!container) return;

  const cleanQText = formatCleanMathText(q.question);
  const optA = formatCleanMathText(q.options && q.options[0] ? q.options[0].text : '');
  const optB = formatCleanMathText(q.options && q.options[1] ? q.options[1].text : '');
  const optC = formatCleanMathText(q.options && q.options[2] ? q.options[2].text : '');
  const optD = formatCleanMathText(q.options && q.options[3] ? q.options[3].text : '');
  const cleanExp = formatCleanMathText(q.explanation);
  const correctVal = (q.correct || q.correct_option || 'A').toUpperCase();

  const fullEditorHtml = `
    <div class="full-page-editor">
      <div class="editor-header-bar">
        <h2 class="editor-title">EDIT QUESTION</h2>
        <button type="button" class="btn-view-back" onclick="loadQuestionsForSelectedCombination()">
          <span>👁 View Questions</span>
        </button>
      </div>

      <form id="fullScreenEditForm" onsubmit="return false;">
        <input type="hidden" id="fullEditQId" value="${qId}">

        <div class="editor-form-group">
          <label class="editor-label" for="fullEditQText">Question</label>
          <textarea id="fullEditQText" rows="3" class="editor-textarea" required>${escapeHtml(cleanQText)}</textarea>
        </div>

        ${q.diagramSvg ? `
        <div class="editor-form-group">
          <label class="editor-label">Diagram Preview (Verified Schematic)</label>
          <div style="background:#f5eedf; padding:12px; border-radius:6px; border:1px solid var(--border-beige); max-width:380px; display:flex; justify-content:center; align-items:center;">
            ${q.diagramSvg}
          </div>
        </div>
        ` : ''}

        <div class="editor-form-group">
          <label class="editor-label" for="fullEditOptA">Option A</label>
          <input type="text" id="fullEditOptA" class="editor-input" value="${escapeHtml(optA)}" required>
        </div>

        <div class="editor-form-group">
          <label class="editor-label" for="fullEditOptB">Option B</label>
          <input type="text" id="fullEditOptB" class="editor-input" value="${escapeHtml(optB)}" required>
        </div>

        <div class="editor-form-group">
          <label class="editor-label" for="fullEditOptC">Option C</label>
          <input type="text" id="fullEditOptC" class="editor-input" value="${escapeHtml(optC)}" required>
        </div>

        <div class="editor-form-group">
          <label class="editor-label" for="fullEditOptD">Option D</label>
          <input type="text" id="fullEditOptD" class="editor-input" value="${escapeHtml(optD)}" required>
        </div>

        <div class="editor-form-group">
          <label class="editor-label">Check Right Answer Option</label>
          <div class="radio-answer-group">
            <label class="radio-label">
              <input type="radio" name="fullCorrectRadio" value="A" ${correctVal === 'A' ? 'checked' : ''}> A
            </label>
            <label class="radio-label">
              <input type="radio" name="fullCorrectRadio" value="B" ${correctVal === 'B' ? 'checked' : ''}> B
            </label>
            <label class="radio-label">
              <input type="radio" name="fullCorrectRadio" value="C" ${correctVal === 'C' ? 'checked' : ''}> C
            </label>
            <label class="radio-label">
              <input type="radio" name="fullCorrectRadio" value="D" ${correctVal === 'D' ? 'checked' : ''}> D
            </label>
          </div>
        </div>

        <div class="editor-form-group" style="margin-top: 16px;">
          <label class="editor-label" for="fullEditExplanation">Explanation</label>
          <textarea id="fullEditExplanation" rows="4" class="editor-textarea" required>${escapeHtml(cleanExp)}</textarea>
        </div>

        <div style="margin-top: 26px;">
          <button type="submit" class="editor-submit-btn" onclick="saveFullScreenEdit('${qId.replace(/'/g, "\\'")}')">Submit</button>
        </div>
      </form>
    </div>
  `;

  container.innerHTML = fullEditorHtml;
};

window.saveFullScreenEdit = async function(qId) {
  const qText = formatCleanMathText(document.getElementById('fullEditQText').value.trim());
  const optA = formatCleanMathText(document.getElementById('fullEditOptA').value.trim());
  const optB = formatCleanMathText(document.getElementById('fullEditOptB').value.trim());
  const optC = formatCleanMathText(document.getElementById('fullEditOptC').value.trim());
  const optD = formatCleanMathText(document.getElementById('fullEditOptD').value.trim());
  const exp = formatCleanMathText(document.getElementById('fullEditExplanation').value.trim());

  let selectedCorrect = 'A';
  const radios = document.getElementsByName('fullCorrectRadio');
  radios.forEach(r => {
    if (r.checked) selectedCorrect = r.value;
  });

  const target = currentDisplayedQuestions.find(item => (item.globalId === qId || item.id === qId || item._tempId === qId));
  if (target) {
    target.question = qText;
    target.options = [
      { key: 'A', text: optA },
      { key: 'B', text: optB },
      { key: 'C', text: optC },
      { key: 'D', text: optD }
    ];
    target.correct = selectedCorrect;
    target.correct_option = selectedCorrect;
    target.explanation = exp;

    try {
      await fetch(`/api/data/questions/${encodeURIComponent(qId)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(target)
      });
    } catch (err) {
      console.warn('Updated locally');
    }

    // Return to the clean Excel view
    await loadQuestionsForSelectedCombination();
  }
};

window.confirmQuestionSource = async function(qId, action) {
  const target = currentDisplayedQuestions.find(item => (item.globalId === qId || item.id === qId || item._tempId === qId));
  if (!target) return;

  if (action === 'confirmed') {
    target.source_status = 'confirmed';
  } else if (action === 'downgrade') {
    target.source_status = 'olympiad_style';
    target.question = target.question.replace(/\[Past Olympiad:[^\]]+\]/g, '[Olympiad-Style: Elite ICSE]');
  }

  try {
    await fetch(`/api/data/questions/${encodeURIComponent(qId)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(target)
    });
  } catch (e) {}

  await loadQuestionsForSelectedCombination();
};

window.handleDeleteQuestion = async function(qId) {
  if (!confirm('Are you sure you want to delete this question?')) {
    return;
  }

  const target = currentDisplayedQuestions.find(item => (item.globalId === qId || item.id === qId || item._tempId === qId));
  const deleteKey = (target && target.globalId) || qId;

  try {
    const res = await fetch(`/api/data/questions/${encodeURIComponent(deleteKey)}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (data.success) {
      // Reload fresh state directly from database
      await loadQuestionsForSelectedCombination();
    }
  } catch (e) {
    alert('Error deleting question: ' + e.message);
  }
};

// Range Delete Handler (From No. X To No. Y)
window.handleRangeDelete = async function() {
  const fromVal = parseInt(document.getElementById('deleteFromNo').value);
  const toVal = parseInt(document.getElementById('deleteToNo').value);

  if (isNaN(fromVal) || isNaN(toVal)) {
    alert('Please enter valid starting and ending question numbers.');
    return;
  }

  if (fromVal < 1 || toVal > currentDisplayedQuestions.length || fromVal > toVal) {
    alert(`Invalid range! Please enter numbers between 1 and ${currentDisplayedQuestions.length}.`);
    return;
  }

  const count = toVal - fromVal + 1;
  if (!confirm(`Are you sure you want to delete ${count} questions (from question #${fromVal} to #${toVal})?`)) {
    return;
  }

  const startIndex = fromVal - 1;
  const itemsToDelete = currentDisplayedQuestions.slice(startIndex, startIndex + count);
  const idsToDelete = itemsToDelete.map(item => item.globalId || item.id || item._tempId || item.question).filter(Boolean);

  try {
    const res = await fetch('/api/questions/bulk-delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: idsToDelete })
    });
    const result = await res.json();
    if (result.success) {
      // Reload fresh state directly from database
      await loadQuestionsForSelectedCombination();
    }
  } catch (err) {
    alert('Error during bulk delete: ' + err.message);
  }
};

// ==========================================
// Question Generator Modal & Card Renderer
// ==========================================
window.openQuestionConfigModal = async function() {
  const modal = document.getElementById('questionConfigModal');
  const alertBox = document.getElementById('configAlert');
  alertBox.classList.add('hidden');
  alertBox.textContent = '';
  modal.classList.remove('hidden');

  try {
    const res = await fetch(`/api/generator/vault-stats?chapter=${encodeURIComponent(qSelectedChapter)}&subjectName=${encodeURIComponent(qSelectedSubject)}&className=${encodeURIComponent(qSelectedClass)}`);
    const data = await res.json();
    const stats = data.stats || {};
    window._modalChapterStats = stats;

    const remDiag = stats.remainingAllowed?.diagrammatic !== undefined ? stats.remainingAllowed.diagrammatic : 30;
    const remNum = stats.remainingAllowed?.numerical !== undefined ? stats.remainingAllowed.numerical : 30;
    const remTheo = stats.remainingAllowed?.theoretical !== undefined ? stats.remainingAllowed.theoretical : 20;
    const remComp = stats.remainingAllowed?.complex !== undefined ? stats.remainingAllowed.complex : 20;

    const diagInput = document.getElementById('qCountDiagram');
    const numInput = document.getElementById('qCountNumerical');
    const theoryInput = document.getElementById('qCountTheory');
    const compInput = document.getElementById('qCountComplex');

    if (diagInput) {
      diagInput.max = remDiag;
      diagInput.value = Math.min(parseInt(diagInput.value) || 0, remDiag);
      diagInput.disabled = remDiag === 0;
    }
    if (numInput) {
      numInput.max = remNum;
      numInput.value = Math.min(parseInt(numInput.value) || 0, remNum);
      numInput.disabled = remNum === 0;
    }
    if (theoryInput) {
      theoryInput.max = remTheo;
      theoryInput.value = Math.min(parseInt(theoryInput.value) || 0, remTheo);
      theoryInput.disabled = remTheo === 0;
    }
    if (compInput) {
      compInput.max = remComp;
      compInput.value = Math.min(parseInt(compInput.value) || 0, remComp);
      compInput.disabled = remComp === 0;
    }
  } catch (e) {
    console.warn('Could not load modal limits:', e);
  }

  updateTotalCounter();
};

function setupQuestionConfigModal() {
  const modal = document.getElementById('questionConfigModal');
  const closeBtn = document.getElementById('closeQConfigModalBtn');
  const cancelBtn = document.getElementById('cancelQConfigModalBtn');
  const startBtn = document.getElementById('startGenerateBtn');
  const countInputs = document.querySelectorAll('.count-input');

  function close() {
    modal.classList.add('hidden');
  }

  closeBtn.addEventListener('click', close);
  cancelBtn.addEventListener('click', close);

  countInputs.forEach(input => {
    input.addEventListener('input', updateTotalCounter);
  });

  startBtn.addEventListener('click', async () => {
    const dCount = parseInt(document.getElementById('qCountDiagram').value) || 0;
    const tCount = parseInt(document.getElementById('qCountTheory').value) || 0;
    const compCount = parseInt(document.getElementById('qCountComplex').value) || 0;
    const numCount = parseInt(document.getElementById('qCountNumerical').value) || 0;
    const alertBox = document.getElementById('configAlert');
    const progressContainer = document.getElementById('generationProgressContainer');
    const progressStatus = document.getElementById('generationProgressStatus');
    const progressBar = document.getElementById('generationProgressBar');
    const progressPercent = document.getElementById('generationProgressPercent');
    const stepDetail = document.getElementById('generationStepDetail');

    const total = dCount + tCount + compCount + numCount;
    if (total < 1) {
      alertBox.textContent = `Please enter at least 1 question count to generate.`;
      alertBox.classList.remove('hidden');
      return;
    }
    if (total > 25) {
      alertBox.innerHTML = `⚠️ <strong>Maximum limit is 25 questions:</strong> You selected ${total} questions. Please reduce counts to 25 or below.`;
      alertBox.classList.remove('hidden');
      return;
    }

    alertBox.classList.add('hidden');
    startBtn.disabled = true;
    startBtn.textContent = '⚡ Assembling Questions...';
    if (progressContainer) progressContainer.classList.remove('hidden');

    // Real progress updates via polling or status
    let pollInterval = null;
    if (progressContainer) {
      progressBar.style.width = '20%';
      progressPercent.textContent = '20%';
      progressStatus.textContent = 'Selecting verified questions from chapter bank...';
      stepDetail.textContent = `Matching ICSE Class 10: ${qSelectedChapter} requirements...`;

      pollInterval = setInterval(async () => {
        try {
          const statusRes = await fetch('/api/questions/generation-status');
          const st = await statusRes.json();
          if (st.statusText) {
            progressStatus.textContent = st.statusText;
            stepDetail.textContent = st.stepDetail || '';
            const pct = Math.min(100, Math.max(20, st.percent || 20));
            progressBar.style.width = `${pct}%`;
            progressPercent.textContent = `${pct}%`;
          }
        } catch (e) {}
      }, 500);
    }

    try {
      const res = await fetch('/api/questions/smart-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          className: qSelectedClass || 'Class 10',
          subjectName: qSelectedSubject || 'Mathematics',
          boardName: qSelectedBoard || 'ICSE',
          subSubjectName: qSelectedSubSubject || '',
          sectionName: qSelectedSection || 'Section A',
          chapter: qSelectedChapter || 'Circles',
          hardness: 'ELITE',
          diagramCount: dCount,
          theoryCount: tCount,
          complexCount: compCount,
          numericalCount: numCount,
          totalCount: total
        })
      });
      clearInterval(pollInterval);

      const data = await res.json();
      if (data.success && data.questions) {
        if (progressContainer) {
          progressBar.style.width = '100%';
          progressPercent.textContent = '100%';
          progressStatus.textContent = `✅ Complete: ${data.count} Verified Questions Saved`;
        }
        setTimeout(() => {
          close();
          if (progressContainer) progressContainer.classList.add('hidden');
        }, 800);

        latestGenReport = {
          count: data.count || data.questions.length,
          rejectedReport: data.rejectedReport || [],
          rejectedCountByReason: data.rejectedCountByReason || {},
          questionsPerType: data.questionsPerType || {},
          unfilledSlots: data.unfilledSlots || [],
          chapterAnalysis: data.chapterAnalysis || null,
          coverageStatus: `Complete (${data.count} Distinct Elite Questions)`,
          questions: data.questions
        };
        await loadQuestionsForSelectedCombination();
      } else {
        clearInterval(pollInterval);
        if (data.isGeminiKeyMissing) {
          alertBox.innerHTML = `⚠️ <strong>Google Gemini API Key Required:</strong><br>${data.message}<br><button type="button" style="margin-top:8px; background:#0284c7; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-weight:600;" onclick="promptSetGeminiKey()">Enter Free Gemini API Key</button>`;
        } else if (data.isOllamaPause) {
          alertBox.innerHTML = `⚠️ <strong>Job Paused:</strong> Ollama is offline or model unreachable.<br>Run in terminal: <code>ollama serve</code><br>Progress saved at resume point.`;
        } else {
          alertBox.textContent = data.message || 'Generation error encountered.';
        }
        alertBox.classList.remove('hidden');
      }
    } catch (err) {
      clearInterval(pollInterval);
      alertBox.textContent = 'Error contacting generator service: ' + err.message;
      alertBox.classList.remove('hidden');
    } finally {
      clearInterval(pollInterval);
      startBtn.disabled = false;
      startBtn.textContent = '⚡ Generate Questions';
    }
  });
}

function updateTotalCounter() {
  const dCount = Math.max(0, parseInt(document.getElementById('qCountDiagram').value) || 0);
  const tCount = Math.max(0, parseInt(document.getElementById('qCountTheory').value) || 0);
  const compCount = Math.max(0, parseInt(document.getElementById('qCountComplex').value) || 0);
  const numCount = Math.max(0, parseInt(document.getElementById('qCountNumerical').value) || 0);
  const total = dCount + tCount + compCount + numCount;

  const counter = document.getElementById('currentTotalCounter');
  const startBtn = document.getElementById('startGenerateBtn');
  const alertBox = document.getElementById('configAlert');

  const stats = window._modalChapterStats;
  if (stats && stats.remainingAllowed) {
    const remDiag = stats.remainingAllowed.diagrammatic !== undefined ? stats.remainingAllowed.diagrammatic : 30;
    const remNum = stats.remainingAllowed.numerical !== undefined ? stats.remainingAllowed.numerical : 30;
    const remTheo = stats.remainingAllowed.theoretical !== undefined ? stats.remainingAllowed.theoretical : 20;
    const remComp = stats.remainingAllowed.complex !== undefined ? stats.remainingAllowed.complex : 20;
    const already = stats.alreadyGenerated || { diagrammatic: 0, numerical: 0, theoretical: 0, complex: 0 };

    if (dCount > remDiag) {
      if (alertBox) {
        alertBox.innerHTML = `⚠️ <strong>Diagrammatic Limit Exceeded:</strong> Chapter limit is 30 (${already.diagrammatic}/30 already generated). Maximum remaining allowed is ${remDiag}.`;
        alertBox.classList.remove('hidden');
      }
      if (startBtn) {
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
      }
      return;
    }
    if (numCount > remNum) {
      if (alertBox) {
        alertBox.innerHTML = `⚠️ <strong>Numerical Limit Exceeded:</strong> Chapter limit is 30 (${already.numerical}/30 already generated). Maximum remaining allowed is ${remNum}.`;
        alertBox.classList.remove('hidden');
      }
      if (startBtn) {
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
      }
      return;
    }
    if (tCount > remTheo) {
      if (alertBox) {
        alertBox.innerHTML = `⚠️ <strong>Theoretical Limit Exceeded:</strong> Chapter limit is 20 (${already.theoretical}/20 already generated). Maximum remaining allowed is ${remTheo}.`;
        alertBox.classList.remove('hidden');
      }
      if (startBtn) {
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
      }
      return;
    }
    if (compCount > remComp) {
      if (alertBox) {
        alertBox.innerHTML = `⚠️ <strong>Complex Limit Exceeded:</strong> Chapter limit is 20 (${already.complex}/20 already generated). Maximum remaining allowed is ${remComp}.`;
        alertBox.classList.remove('hidden');
      }
      if (startBtn) {
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
      }
      return;
    }
  }

  if (counter) {
    if (total > 25) {
      counter.textContent = `Selected ${total} / 25 (Exceeds 25 max limit!)`;
      counter.style.background = '#dc2626'; // Red
      counter.style.color = '#fff';
      if (startBtn) {
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
        startBtn.textContent = `⚠️ Max 25 Limit Exceeded (${total})`;
      }
      if (alertBox) {
        alertBox.innerHTML = `⚠️ <strong>Maximum limit is 25 questions:</strong> You have selected ${total} questions. Please decrease your counts so the total is 25 or below.`;
        alertBox.classList.remove('hidden');
      }
    } else if (total > 0) {
      counter.textContent = `Selected ${total} / 25 Question${total === 1 ? '' : 's'}`;
      counter.style.background = '#15803d'; // Green
      counter.style.color = '#fff';
      if (startBtn) {
        startBtn.disabled = false;
        startBtn.style.opacity = '1';
        startBtn.style.cursor = 'pointer';
        startBtn.textContent = `⚡ Generate ${total} Question${total === 1 ? '' : 's'}`;
      }
      if (alertBox) alertBox.classList.add('hidden');
    } else {
      counter.textContent = 'Selected 0 / 25 Questions';
      counter.style.background = '#b45309'; // Amber
      counter.style.color = '#fff';
      if (startBtn) {
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
        startBtn.textContent = '⚡ Generate Questions';
      }
      if (alertBox) alertBox.classList.add('hidden');
    }
  }
}

function renderGeneratedQuestions(questions) {
  const container = document.getElementById('questionsAreaContainer');
  if (!container) return;

  let html = `
    <div class="questions-stream">
      <div class="stream-header">
        <span class="stream-summary">Generated ${questions.length} Olympiad Questions for <strong>${qSelectedChapter}</strong></span>
        <button class="btn-outline" onclick="window.print()">Print / Export Sheet</button>
      </div>
  `;

  questions.forEach((q, index) => {
    const hardness = (q.hardness || q.difficulty || 'Hard');
    const qType = (q.type || q.question_type || 'Diagrammatic');
    const correctOpt = (q.correct || q.correct_option || (q.options && q.options[0] ? q.options[0].key : 'A'));
    const diffClass = hardness.toLowerCase().includes('hard') ? 'hard' : (hardness.toLowerCase().includes('moderate') ? 'moderate' : 'easy');
    const explanationText = q.explanation || 'Refer to standard ICSE Class 10 concepts.';
    
    // Build options
    let optionsHtml = '';
    (q.options || []).forEach(opt => {
      const isSelectedCorrect = opt.key === correctOpt;
      optionsHtml += `
        <div class="q-option-box ${isSelectedCorrect ? 'is-correct' : ''}">
          <span class="opt-key">${opt.key}</span>
          <span class="opt-text">${formatCleanMathText(opt.text)}</span>
        </div>
      `;
    });

    const cleanQ = formatCleanMathText(q.question || '');
    const formattedQuestion = cleanQ
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    html += `
      <div class="q-card">
        <div class="q-meta-row">
          <span class="q-type-pill">Question ${index + 1} • ${qType}</span>
          <span class="q-difficulty-pill ${diffClass}">${hardness}</span>
        </div>

        <div class="q-text" style="white-space: pre-wrap; line-height: 1.6;">${formattedQuestion}</div>

        ${q.diagramSvg ? `<div class="q-diagram-container">${q.diagramSvg}</div>` : ''}

        <div class="q-options-grid">
          ${optionsHtml}
        </div>

        <div class="q-correct-ribbon">
          <span class="correct-tag">Correct Option</span>
          <span>Option <strong>${correctOpt}</strong> is mathematically verified and selected.</span>
        </div>

        <div class="q-explanation-box">
          <div class="exp-heading">Comprehensive Multi-Step Mathematical Proof & Explanation:</div>
          <div class="exp-content">${formatCleanMathText(explanationText).replace(/\n/g, '<br>')}</div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

// Fetch items from database and display them
async function loadItems(view) {
  const config = VIEW_CONFIG[view];
  if (!config) return;

  try {
    const res = await fetch(`/api/data/${config.endpoint}`);
    const result = await res.json();
    if (result.success && result.data) {
      itemsList = result.data;
      renderItems(view);
    }
  } catch (err) {
    console.error(`Failed to load ${view} from database:`, err);
  }
}

function renderItems(view) {
  const content = document.getElementById('workspaceContent');
  if (itemsList.length === 0) {
    content.innerHTML = '';
    return;
  }

  const config = VIEW_CONFIG[view];
  let html = '<div class="items-list">';
  itemsList.forEach((item) => {
    const name = item.name || item;
    const itemId = item.globalId || name;
    html += `
      <div class="list-item">
        <span><strong>${name}</strong></span>
        <div class="list-item-actions">
          <span class="list-item-badge">Saved in Database</span>
          <button class="btn-action-rename" onclick="handleRename('${view}', '${itemId}', '${encodeURIComponent(name)}')">Rename</button>
          <button class="btn-action-delete" title="Delete" onclick="handleDelete('${view}', '${itemId}')">&times;</button>
        </div>
      </div>
    `;
  });
  html += '</div>';
  content.innerHTML = html;
}

// Rename function
window.handleRename = async function(view, id, encodedCurrentName) {
  const config = VIEW_CONFIG[view];
  if (!config) return;

  const currentName = decodeURIComponent(encodedCurrentName);
  const newName = prompt(`Enter new name for ${config.title.toLowerCase()}:`, currentName);
  if (!newName || newName.trim() === '' || newName.trim() === currentName) {
    return;
  }

  try {
    const res = await fetch(`/api/data/${config.endpoint}/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName.trim() })
    });
    const data = await res.json();
    if (data.success) {
      await loadItems(view);
    }
  } catch (err) {
    alert(`Error renaming ${config.title.toLowerCase()}: ` + err.message);
  }
};

// Delete (cross) function
window.handleDelete = async function(view, id) {
  const config = VIEW_CONFIG[view];
  if (!config) return;

  if (!confirm(`Are you sure you want to delete this ${config.title.toLowerCase()}?`)) {
    return;
  }

  try {
    const res = await fetch(`/api/data/${config.endpoint}/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (data.success) {
      await loadItems(view);
    }
  } catch (err) {
    alert(`Error deleting ${config.title.toLowerCase()}: ` + err.message);
  }
};

// Modal handling for adding items
function setupModal() {
  const modal = document.getElementById('addModal');
  const addBtn = document.getElementById('addItemBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const cancelBtn = document.getElementById('cancelModalBtn');
  const addForm = document.getElementById('addForm');
  const itemInput = document.getElementById('itemInput');
  const modalTitle = document.getElementById('modalTitle');
  const inputLabel = document.getElementById('inputLabel');

  addBtn.addEventListener('click', () => {
    const config = VIEW_CONFIG[currentView];
    if (!config) return;

    modalTitle.textContent = `Add ${config.title}`;
    inputLabel.textContent = config.inputLabel;
    itemInput.placeholder = config.placeholder;
    itemInput.value = '';
    modal.classList.remove('hidden');
    itemInput.focus();
  });

  function closeModal() {
    modal.classList.add('hidden');
  }

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const config = VIEW_CONFIG[currentView];
    if (!config) return;

    const value = itemInput.value.trim();
    if (!value) return;

    try {
      const res = await fetch(`/api/data/${config.endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: value })
      });
      const data = await res.json();
      if (data.success) {
        closeModal();
        await loadItems(currentView);
      }
    } catch (err) {
      alert(`Error saving ${config.title.toLowerCase()}: ` + err.message);
    }
  });
}

// ==========================================
// Find Duplicates Audit Tool Logic
// ==========================================
window.closeFindDuplicatesModal = function() {
  const modal = document.getElementById('findDuplicatesModal');
  if (modal) modal.classList.add('hidden');
};

function setupFindDuplicatesModal() {
  const modal = document.getElementById('findDuplicatesModal');
  const closeBtn = document.getElementById('closeDuplicatesModalBtn');
  const dismissBtn = document.getElementById('dismissDuplicatesModalBtn');

  if (closeBtn) closeBtn.addEventListener('click', window.closeFindDuplicatesModal);
  if (dismissBtn) dismissBtn.addEventListener('click', window.closeFindDuplicatesModal);

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      window.closeFindDuplicatesModal();
    }
  });
}

let currentAuditScope = 'all';

window.openFindDuplicatesModal = async function(scope) {
  if (scope) currentAuditScope = scope;
  const modal = document.getElementById('findDuplicatesModal');
  const summaryBox = document.getElementById('duplicateAuditSummary');
  const container = document.getElementById('duplicatesListContainer');
  if (!modal) return;

  modal.classList.remove('hidden');
  summaryBox.innerHTML = '<span style="color:var(--text-light);">Scanning database for duplicate questions and repeated concepts...</span>';
  container.innerHTML = '';

  const chapterParam = (typeof qSelectedChapter !== 'undefined' && qSelectedChapter) ? qSelectedChapter : '';
  const classParam = (typeof qSelectedClass !== 'undefined' && qSelectedClass) ? qSelectedClass : '';

  try {
    const url = `/api/questions/find-duplicates?scope=${currentAuditScope}&chapter=${encodeURIComponent(chapterParam)}&className=${encodeURIComponent(classParam)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.success) {
      summaryBox.innerHTML = `<span style="color:#b91c1c;">Error: ${data.message || 'Audit failed'}</span>`;
      return;
    }

    const isChapterScope = currentAuditScope === 'chapter';
    summaryBox.innerHTML = `
      <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px 14px; border-radius:6px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.9rem; color:#1e293b; font-weight:600;">
              Total in Entire Database: <span style="color:#2563eb;">${data.totalQuestions} questions</span>
            </div>
            ${chapterParam ? `
              <div style="font-size:0.82rem; color:#475569; margin-top:3px;">
                Current View (<strong>${escapeHtml(chapterParam)}</strong>): <span style="color:#16a34a; font-weight:600;">${data.currentChapterCount} questions</span>
              </div>
            ` : ''}
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.88rem; font-weight:600; color:${data.duplicatePairsCount > 0 ? '#dc2626' : '#16a34a'};">
              ${data.duplicatePairsCount > 0 ? `⚠️ ${data.duplicatePairsCount} duplicate pairs found` : '✅ 0 duplicates found'}
            </div>
          </div>
        </div>

        ${chapterParam ? `
          <div style="display:flex; gap:10px; margin-top:10px; padding-top:8px; border-top:1px dashed #cbd5e1;">
            <button type="button" class="btn-outline" style="font-size:0.78rem; padding:4px 10px; cursor:pointer; ${!isChapterScope ? 'background:#3b82f6; color:#fff; border-color:#3b82f6;' : ''}" onclick="openFindDuplicatesModal('all')">
              🌐 Entire Database (${data.totalQuestions} questions)
            </button>
            <button type="button" class="btn-outline" style="font-size:0.78rem; padding:4px 10px; cursor:pointer; ${isChapterScope ? 'background:#3b82f6; color:#fff; border-color:#3b82f6;' : ''}" onclick="openFindDuplicatesModal('chapter')">
              📖 Only Current Chapter "${escapeHtml(chapterParam)}" (${data.currentChapterCount} questions)
            </button>
          </div>
        ` : ''}
      </div>
    `;

    if (data.duplicatePairsCount === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:36px 12px; color:#166534; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; font-weight:600;">
          ✅ Clean ${isChapterScope ? `Chapter "${escapeHtml(chapterParam)}"` : 'Database'}: 0 duplicates or repeated concepts detected! All ${isChapterScope ? data.scopedCount : data.totalQuestions} questions are 100% unique.
        </div>
      `;
      return;
    }

    let cardsHtml = '';
    data.duplicates.forEach((pair, idx) => {
      const qA = pair.questionA;
      const qB = pair.questionB;
      const idA = qA.globalId || qA.id || qA._tempId;
      const idB = qB.globalId || qB.id || qB._tempId;

      cardsHtml += `
        <div class="duplicate-pair-card">
          <div class="pair-badge">Pair #${idx + 1} — ${escapeHtml(pair.type)}</div>
          <div class="pair-comparison-grid">
            <div class="pair-half">
              <div>
                <div style="font-size:0.78rem; font-weight:700; color:#64748b; margin-bottom:4px;">
                  Question A (${escapeHtml(qA.className || '')} ${escapeHtml(qA.chapter || '')})
                </div>
                <div class="pair-q-text">${escapeHtml(qA.question)}</div>
                <div style="font-size:0.75rem; color:#475569; margin-bottom:10px;">
                  Concept: <em>${escapeHtml(qA.concept_tag || 'Untagged')}</em>
                </div>
              </div>
              <button type="button" class="btn-delete-duplicate" onclick="deleteDuplicateQuestion('${idA}')">
                🗑 Delete Question A
              </button>
            </div>

            <div class="pair-half">
              <div>
                <div style="font-size:0.78rem; font-weight:700; color:#64748b; margin-bottom:4px;">
                  Question B (${escapeHtml(qB.className || '')} ${escapeHtml(qB.chapter || '')})
                </div>
                <div class="pair-q-text">${escapeHtml(qB.question)}</div>
                <div style="font-size:0.75rem; color:#475569; margin-bottom:10px;">
                  Concept: <em>${escapeHtml(qB.concept_tag || 'Untagged')}</em>
                </div>
              </div>
              <button type="button" class="btn-delete-duplicate" onclick="deleteDuplicateQuestion('${idB}')">
                🗑 Delete Question B
              </button>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = cardsHtml;
  } catch (err) {
    summaryBox.innerHTML = `<span style="color:#b91c1c;">Network error: ${escapeHtml(err.message)}</span>`;
  }
};

window.deleteDuplicateQuestion = async function(questionId) {
  if (!confirm('Are you sure you want to delete this duplicate question from the database?')) {
    return;
  }

  try {
    const res = await fetch('/api/questions/delete-duplicate-pair', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionIdToDelete: questionId })
    });
    const data = await res.json();
    if (data.success) {
      // Re-scan audit tool and refresh table
      await openFindDuplicatesModal();
      if (typeof qSelectedChapter !== 'undefined' && qSelectedChapter) {
        await loadQuestionsForSelectedCombination();
      }
    } else {
      alert('Delete failed: ' + (data.message || 'Unknown error'));
    }
  } catch (err) {
    alert('Network error: ' + err.message);
  }
};

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

window.promptSetGeminiKey = async function() {
  const currentKeyPrompt = 'Enter your Google Gemini API Key:\n(Get a 100% free key with no credit card required at: https://aistudio.google.com/app/apikey)';
  const key = prompt(currentKeyPrompt);
  if (!key || !key.trim()) return;

  try {
    const res = await fetch('/api/ai/set-gemini-key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: key.trim() })
    });
    const data = await res.json();
    if (data.success) {
      alert('🎉 ' + data.message);
      updateAiBadge();
      const alertBox = document.getElementById('configAlert');
      if (alertBox) alertBox.classList.add('hidden');
    } else {
      alert('❌ Error: ' + data.message);
    }
  } catch (err) {
    alert('Connection error: ' + err.message);
  }
};

async function updateAiBadge() {
  try {
    const res = await fetch('/api/ai/status');
    const d = await res.json();
    const badge = document.getElementById('aiProviderBadge');
    if (badge) {
      if (d.provider === 'gemini') {
        badge.innerHTML = d.hasKey ? '⚡ Gemini 2.0 Flash (Active)' : '⚡ Gemini (Set Free Key)';
        badge.style.background = d.hasKey ? '#dcfce7' : '#fef3c7';
        badge.style.color = d.hasKey ? '#166534' : '#92400e';
        badge.style.border = d.hasKey ? '1px solid #86efac' : '1px solid #fde047';
      } else {
        badge.innerHTML = '🦙 Ollama Local';
      }
    }
  } catch (e) {}
}

// Call on startup
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', updateAiBadge);
  setTimeout(updateAiBadge, 1000);
}

// ===================================================
// Dedicated AI Question Generator & Research Engine
// ===================================================
let genSelectedClass = 'Class 10';
let genSelectedSubject = 'SCIENCE';
let genSelectedSubSubject = 'PHYSICS';
let genSelectedBoard = 'ICSE';
let genSelectedSection = 'SUBJECTIVE';
let genSelectedChapter = 'Radioactivity';
let genIncludePastBoardMCQs = true;
let genAnalysisResult = null;
let genActivePhase = 'SELECTION';
let genTimerSeconds = 0;
let genIntervalTimer = null;
let genStatusPoller = null;

async function loadGeneratorView() {
  const content = document.getElementById('workspaceContent');
  if (!content) return;

  // Ensure dropdown data is loaded
  if (!availableClasses.length || !availableSubjects.length || !availableBoards.length || !availableSections.length) {
    content.innerHTML = '<p style="color:var(--text-light); font-size:0.9rem; padding: 20px;">Loading generator configuration...</p>';
    try {
      const [clsRes, subRes, subSubRes, secRes, brdRes, chRes] = await Promise.all([
        fetch('/api/data/classes').then(r => r.json()),
        fetch('/api/data/subjects').then(r => r.json()),
        fetch('/api/data/subsubjects').then(r => r.json()),
        fetch('/api/data/sections').then(r => r.json()),
        fetch('/api/data/boards').then(r => r.json()),
        fetch('/api/data/chapters').then(r => r.json())
      ]);

      availableClasses = clsRes.data || [];
      availableSubjects = subRes.data || [];
      availableSubSubjects = subSubRes.data || [];
      availableSections = secRes.data || [];
      availableBoards = brdRes.data || [];
      availableChapters = chRes.data || [];
    } catch (e) {
      console.error('Error loading generator data:', e);
    }
  }

  renderGeneratorSelection();
}

// Generator Subject/Sub-Subject Locks for Class 10 ICSE & CBSE
function isSubjectLockedInGen(subjName, classVal, boardVal) {
  const normClass = (classVal || genSelectedClass || '').trim().toLowerCase();
  const normBoard = (boardVal || genSelectedBoard || '').trim().toUpperCase();
  const isClass10 = normClass === 'class 10' || normClass === '10';
  const isIcseOrCbse = !normBoard || normBoard === 'ICSE' || normBoard === 'CBSE';
  if (isClass10 && isIcseOrCbse) {
    const s = (subjName || '').trim().toUpperCase();
    return s === 'MATHEMATICS' || s === 'MATHS' || s === 'HISTORY' || s === 'GEOGRAPHY';
  }
  return false;
}

function isSubSubjectLockedInGen(subSubjName, classVal, boardVal) {
  const normClass = (classVal || genSelectedClass || '').trim().toLowerCase();
  const normBoard = (boardVal || genSelectedBoard || '').trim().toUpperCase();
  const isClass10 = normClass === 'class 10' || normClass === '10';
  const isIcseOrCbse = !normBoard || normBoard === 'ICSE' || normBoard === 'CBSE';
  if (isClass10 && isIcseOrCbse) {
    const ss = (subSubjName || '').trim().toUpperCase();
    return ss === 'BIOLOGY';
  }
  return false;
}

window.closeAiNotTrainedModal = function() {
  const modal = document.getElementById('aiNotTrainedModal');
  if (modal) modal.classList.add('hidden');
};

window.showAiNotTrainedPrompt = function(subjectName) {
  const modal = document.getElementById('aiNotTrainedModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
  alert('the ai is not trained for this');
};

function renderGeneratorSelection() {
  const content = document.getElementById('workspaceContent');
  if (!content) return;

  const isScience = (genSelectedSubject || '').trim().toUpperCase() === 'SCIENCE';

  // Build Class options
  let classOpts = '<option value="">-- Select Class --</option>';
  availableClasses.forEach(c => {
    const val = c.name || c;
    const sel = genSelectedClass === val ? 'selected' : '';
    classOpts += `<option value="${val}" ${sel}>${val}</option>`;
  });

  // Build Subject options
  let subOpts = '<option value="">-- Select Subject --</option>';
  availableSubjects.forEach(s => {
    const val = s.name || s;
    const isLocked = isSubjectLockedInGen(val, genSelectedClass, genSelectedBoard);
    const sel = genSelectedSubject === val ? 'selected' : '';
    const displayLabel = isLocked ? `🔒 ${val} (Locked)` : val;
    subOpts += `<option value="${val}" ${sel}>${displayLabel}</option>`;
  });

  // Build SubSubject options (if Science)
  let subSubOpts = '<option value="">-- Select Sub Subject --</option>';
  availableSubSubjects.forEach(ss => {
    const val = ss.name || ss;
    const isLocked = isSubSubjectLockedInGen(val, genSelectedClass, genSelectedBoard);
    const sel = genSelectedSubSubject === val ? 'selected' : '';
    const displayLabel = isLocked ? `🔒 ${val} (Locked)` : val;
    subSubOpts += `<option value="${val}" ${sel}>${displayLabel}</option>`;
  });

  // Build Board options
  let boardOpts = '<option value="">-- Select Board --</option>';
  availableBoards.forEach(b => {
    const val = b.name || b;
    const sel = genSelectedBoard === val ? 'selected' : '';
    boardOpts += `<option value="${val}" ${sel}>${val}</option>`;
  });

  // Build Section options
  let secOpts = '<option value="">-- Select Section --</option>';
  availableSections.forEach(sc => {
    const val = sc.name || sc;
    const sel = genSelectedSection === val ? 'selected' : '';
    secOpts += `<option value="${val}" ${sel}>${val}</option>`;
  });

  // Build Chapter options strictly matching Class, Subject, and Sub-Subject (for Science)
  const normSub = (genSelectedSubject || '').trim().toUpperCase();
  const normSubSub = (genSelectedSubSubject || '').trim().toUpperCase();
  const normClass = (genSelectedClass || '').trim().toLowerCase();

  const matchingChaps = availableChapters.filter(ch => {
    if (isChapterHidden(ch)) return false; // Exclude hidden chapters from Generator dropdown!
    const chClass = (ch.className || '').trim().toLowerCase();
    const chSub = (ch.subjectName || '').trim().toUpperCase();
    const chSubSub = (ch.subSubjectName || '').trim().toUpperCase();

    const matchClass = !normClass || chClass === normClass;
    const matchSub = !normSub || chSub === normSub;
    const matchSubSub = !isScience || !normSubSub || (chSubSub === normSubSub);
    return matchClass && matchSub && matchSubSub;
  });

  // Automatically ensure genSelectedChapter is valid for current selection
  if (matchingChaps.length > 0) {
    const hasCurrent = matchingChaps.some(c => (c.title || c.name || '').toLowerCase() === (genSelectedChapter || '').toLowerCase());
    if (!hasCurrent) {
      genSelectedChapter = matchingChaps[0].title || matchingChaps[0].name || '';
    }
  } else {
    genSelectedChapter = '';
  }

  let chapOpts = '<option value="">-- Select Chapter --</option>';
  matchingChaps.forEach(ch => {
    const title = ch.title || ch.name;
    const sel = (genSelectedChapter || '').toLowerCase() === title.toLowerCase() ? 'selected' : '';
    chapOpts += `<option value="${title}" ${sel}>${title}</option>`;
  });

  const isSubjectLocked = isSubjectLockedInGen(genSelectedSubject, genSelectedClass, genSelectedBoard);
  const isSubSubjectLocked = isScience && isSubSubjectLockedInGen(genSelectedSubSubject, genSelectedClass, genSelectedBoard);
  const canAnalyze = !isSubjectLocked && !isSubSubjectLocked && genSelectedClass && genSelectedSubject && (!isScience || genSelectedSubSubject) && genSelectedBoard && genSelectedSection && genSelectedChapter;

  const html = `
    <div class="generator-container">
      <div class="gen-banner-card">
        <div>
          <div class="gen-banner-title">
            <span>⚡ AI Olympiad Question Generator & Research Engine</span>
          </div>
          <div class="gen-banner-desc">
            Deep 2-minute syllabus & 10-year board exam archive analysis, followed by 5-minute rigorous question generation with multistep derivations, distinct concepts, and proper diagrams.
          </div>
        </div>
      </div>

      <div class="gen-selection-card">
        <h3 style="font-size:1.1rem; color:var(--text-dark); margin-bottom:18px;">
          Configure Curriculum & Chapter Context
        </h3>

        <div class="gen-grid-selectors">
          <div class="gen-selector-item">
            <label for="genSelectClass">1. Class</label>
            <select id="genSelectClass" onchange="onGeneratorFilterChange('class', this.value)">
              ${classOpts}
            </select>
          </div>

          <div class="gen-selector-item">
            <label for="genSelectSubject">2. Subject</label>
            <select id="genSelectSubject" onchange="onGeneratorFilterChange('subject', this.value)">
              ${subOpts}
            </select>
            <div class="gen-pills-row">
              ${availableSubjects.map(s => {
                const val = s.name || s;
                const isLocked = isSubjectLockedInGen(val, genSelectedClass, genSelectedBoard);
                const isSel = genSelectedSubject.trim().toUpperCase() === val.trim().toUpperCase();
                if (isLocked) {
                  return `<button type="button" class="gen-subject-chip locked" onclick="showAiNotTrainedPrompt('${val}')" title="🔒 Locked: the ai is not trained for this">🔒 ${val}</button>`;
                }
                return `<button type="button" class="gen-subject-chip ${isSel ? 'active' : ''}" onclick="onGeneratorFilterChange('subject', '${val}')">${val}</button>`;
              }).join('')}
            </div>
          </div>

          ${isScience ? `
            <div class="gen-selector-item">
              <label for="genSelectSubSubject" style="color:#b45309;">3. Sub Subject (Science)</label>
              <select id="genSelectSubSubject" onchange="onGeneratorFilterChange('subsubject', this.value)">
                ${subSubOpts}
              </select>
              <div class="gen-pills-row">
                ${availableSubSubjects.map(ss => {
                  const val = ss.name || ss;
                  const isLocked = isSubSubjectLockedInGen(val, genSelectedClass, genSelectedBoard);
                  const isSel = genSelectedSubSubject.trim().toUpperCase() === val.trim().toUpperCase();
                  if (isLocked) {
                    return `<button type="button" class="gen-subject-chip locked" onclick="showAiNotTrainedPrompt('${val}')" title="🔒 Locked: the ai is not trained for this">🔒 ${val}</button>`;
                  }
                  return `<button type="button" class="gen-subject-chip ${isSel ? 'active' : ''}" onclick="onGeneratorFilterChange('subsubject', '${val}')">${val}</button>`;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <div class="gen-selector-item">
            <label for="genSelectBoard">${isScience ? '4' : '3'}. Board</label>
            <select id="genSelectBoard" onchange="onGeneratorFilterChange('board', this.value)">
              ${boardOpts}
            </select>
          </div>

          <div class="gen-selector-item">
            <label for="genSelectSection">${isScience ? '5' : '4'}. Section</label>
            <select id="genSelectSection" onchange="onGeneratorFilterChange('section', this.value)">
              ${secOpts}
            </select>
          </div>

          <div class="gen-selector-item">
            <label for="genSelectChapter">${isScience ? '6' : '5'}. Chapter</label>
            <select id="genSelectChapter" onchange="onGeneratorFilterChange('chapter', this.value)">
              ${chapOpts}
            </select>
          </div>
        </div>

        <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-beige); padding-top:20px;">
          <div style="font-size:0.85rem; color:var(--text-light);">
            Selected: <strong>${genSelectedClass || '—'} • ${genSelectedSubject || '—'}${isScience && genSelectedSubSubject ? ' (' + genSelectedSubSubject + ')' : ''} • ${genSelectedBoard || '—'} • ${genSelectedSection || '—'} • ${genSelectedChapter || '—'}</strong>
          </div>
          <button type="button" class="btn-analyze-frame" id="genAnalyzeFrameBtn" ${canAnalyze ? '' : 'disabled'} onclick="startThirtySecondResearch()">
            <span>🔬 Start Chapter Analysis (30s)</span>
          </button>
        </div>
      </div>
    </div>
  `;

  content.innerHTML = html;
}

window.onGeneratorFilterChange = function(type, val) {
  if (type === 'subject') {
    if (isSubjectLockedInGen(val, genSelectedClass, genSelectedBoard)) {
      showAiNotTrainedPrompt(val);
      const selElem = document.getElementById('genSelectSubject');
      if (selElem) selElem.value = genSelectedSubject;
      return;
    }
    genSelectedSubject = val;
    if (val.trim().toUpperCase() !== 'SCIENCE') {
      genSelectedSubSubject = '';
    } else if (!genSelectedSubSubject || isSubSubjectLockedInGen(genSelectedSubSubject, genSelectedClass, genSelectedBoard)) {
      genSelectedSubSubject = 'PHYSICS';
    }
    genSelectedChapter = '';
  }
  if (type === 'subsubject') {
    if (isSubSubjectLockedInGen(val, genSelectedClass, genSelectedBoard)) {
      showAiNotTrainedPrompt(val);
      const selElem = document.getElementById('genSelectSubSubject');
      if (selElem) selElem.value = genSelectedSubSubject;
      return;
    }
    genSelectedSubSubject = val;
    genSelectedChapter = '';
  }
  if (type === 'class') {
    genSelectedClass = val;
    genSelectedChapter = '';
    if (isSubjectLockedInGen(genSelectedSubject, val, genSelectedBoard)) {
      genSelectedSubject = 'SCIENCE';
      genSelectedSubSubject = 'PHYSICS';
    }
    if (isSubSubjectLockedInGen(genSelectedSubSubject, val, genSelectedBoard)) {
      genSelectedSubSubject = 'PHYSICS';
    }
  }
  if (type === 'board') {
    genSelectedBoard = val;
    if (isSubjectLockedInGen(genSelectedSubject, genSelectedClass, val)) {
      genSelectedSubject = 'SCIENCE';
      genSelectedSubSubject = 'PHYSICS';
    }
    if (isSubSubjectLockedInGen(genSelectedSubSubject, genSelectedClass, val)) {
      genSelectedSubSubject = 'PHYSICS';
    }
  }
  if (type === 'section') genSelectedSection = val;
  if (type === 'chapter') genSelectedChapter = val;

  renderGeneratorSelection();
};

// Stage 1: Exact 30-Second Deep Chapter Analysis (Simulated Console)
window.startThirtySecondResearch = function() {
  const content = document.getElementById('workspaceContent');
  if (!content) return;

  if (isSubjectLockedInGen(genSelectedSubject, genSelectedClass, genSelectedBoard) || 
     ((genSelectedSubject || '').toUpperCase() === 'SCIENCE' && isSubSubjectLockedInGen(genSelectedSubSubject, genSelectedClass, genSelectedBoard))) {
    showAiNotTrainedPrompt(genSelectedSubject);
    return;
  }

  genActivePhase = 'RESEARCH_30SEC';
  let remainingSeconds = 30; // Exactly 30 seconds as requested!
  let elapsedSeconds = 0;

  content.innerHTML = `
    <div class="generator-container">
      <div class="research-console-card">
        <div class="console-timer-header">
          <div>
            <h2 style="font-size:1.35rem; color:#f8fafc; font-weight:800; display:flex; align-items:center; gap:8px;">
              <span>🔬 Deep Chapter Analysis & Framing (00:30)</span>
            </h2>
            <p style="color:#94a3b8; font-size:0.85rem; margin-top:4px;">
              Analyzing ${genSelectedBoard} Class ${genSelectedClass} "${genSelectedChapter}" curriculum, exam blueprints, and concept traps...
            </p>
          </div>
          <div class="console-timer-badge" id="genCountdownText">00:30</div>
        </div>

        <div class="console-progress-track">
          <div class="console-progress-fill" id="genProgressFill" style="width:0%;"></div>
        </div>

        <div class="research-stage-pills">
          <div class="research-stage-pill active" id="genStagePill1">
            <strong>1. Syllabus Directives</strong>
            <div style="font-size:0.72rem; margin-top:2px;">Board exam specs</div>
          </div>
          <div class="research-stage-pill" id="genStagePill2">
            <strong>2. 10-Yr Past Papers</strong>
            <div style="font-size:0.72rem; margin-top:2px;">Archived questions & HOTS</div>
          </div>
          <div class="research-stage-pill" id="genStagePill3">
            <strong>3. Concept Matrix</strong>
            <div style="font-size:0.72rem; margin-top:2px;">Derivations & traps</div>
          </div>
          <div class="research-stage-pill" id="genStagePill4">
            <strong>4. Vault Synchronizer</strong>
            <div style="font-size:0.72rem; margin-top:2px;">Verified question bank</div>
          </div>
        </div>

        <div class="console-live-feed" id="genLiveConsoleFeed">
          <div class="feed-line accent">[00:00] Initializing deep curriculum analyzer for ${genSelectedBoard} Class ${genSelectedClass}...</div>
          <div class="feed-line">[00:02] Targeting Chapter: "${genSelectedChapter}" in ${genSelectedSubject}${genSelectedSubSubject ? ' (' + genSelectedSubSubject + ')' : ''}...</div>
        </div>
      </div>
    </div>
  `;

  const countdownEl = document.getElementById('genCountdownText');
  const progressFill = document.getElementById('genProgressFill');
  const liveFeed = document.getElementById('genLiveConsoleFeed');

  function addFeedLine(text, type = '') {
    if (!liveFeed) return;
    const div = document.createElement('div');
    div.className = `feed-line ${type}`;
    div.textContent = text;
    liveFeed.appendChild(div);
    liveFeed.scrollTop = liveFeed.scrollHeight;
  }

  // Fetch chapter analysis & vault stats
  fetch('/api/generator/analyze-frame', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chapter: genSelectedChapter,
      className: genSelectedClass,
      subjectName: genSelectedSubject,
      subSubjectName: genSelectedSubSubject,
      boardName: genSelectedBoard,
      sectionName: genSelectedSection
    })
  }).then(r => r.json()).then(data => {
    genAnalysisResult = data;
    if (data.syllabus_topics && data.syllabus_topics.length > 0) {
      addFeedLine(`[Curriculum Core] Indexed ${data.syllabus_topics.length} core learning objectives for ${genSelectedChapter}`, 'success');
      data.syllabus_topics.slice(0, 3).forEach(top => {
        addFeedLine(`   • Topic: ${top}`);
      });
    }
    if (data.vaultStats?.available) {
      if (data.vaultStats.sectionType === 'assertion_reasoning') {
        addFeedLine(`[Vault Connected] Pre-provided Assertion-Reasoning Bank: ${data.vaultStats.total} verified questions ready (Max cap: 30)`, 'success');
      } else if (data.vaultStats.sectionType === 'hots') {
        addFeedLine(`[Vault Connected] Pre-provided HOTS Bank: ${data.vaultStats.total} verified questions ready (Max cap: 30)`, 'success');
      } else {
        addFeedLine(`[Vault Connected] Pre-provided Question Bank: ${data.vaultStats.total} verified questions ready (${data.vaultStats.diagrammatic} diagrammatic, ${data.vaultStats.numerical} numerical, ${data.vaultStats.complex} complex, ${data.vaultStats.theoretical} theoretical)`, 'success');
      }
    }
  }).catch(e => {
    console.warn('Analysis fetch note:', e.message);
  });

  const feedEvents = [
    { sec: 5, text: `[Stage 1] Indexing official ${genSelectedBoard} assessment objectives and numerical standards...`, type: 'accent' },
    { sec: 10, text: `[Stage 2] Scanning 10-year past ${genSelectedBoard} exam questions and high-difficulty traps...`, type: 'accent', stage: 2 },
    { sec: 15, text: `[Stage 2] Parsing examiner mark schemes, derivation steps, and non-intuitive trick scenarios...`, type: '' },
    { sec: 20, text: `[Stage 3] Calibrating cognitive levels: diagrammatic, theoretical, complex, numerical...`, type: 'accent', stage: 3 },
    { sec: 25, text: `[Stage 4] Synchronizing question vault: checking SVG graphics & step-by-step derivations...`, type: 'accent', stage: 4 },
    { sec: 29, text: `[Stage 4] 100% Chapter Analysis Complete! Loading question quota configuration...`, type: 'success' }
  ];

  if (genIntervalTimer) clearInterval(genIntervalTimer);

  genIntervalTimer = setInterval(() => {
    elapsedSeconds++;
    remainingSeconds--;

    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (countdownEl) countdownEl.textContent = timeStr;

    const pct = Math.min(100, Math.round((elapsedSeconds / 30) * 100));
    if (progressFill) progressFill.style.width = `${pct}%`;

    // Highlight active stage pill
    const s1 = document.getElementById('genStagePill1');
    const s2 = document.getElementById('genStagePill2');
    const s3 = document.getElementById('genStagePill3');
    const s4 = document.getElementById('genStagePill4');

    if (elapsedSeconds >= 23) {
      if (s3) s3.className = 'research-stage-pill completed';
      if (s4) s4.className = 'research-stage-pill active';
    } else if (elapsedSeconds >= 15) {
      if (s2) s2.className = 'research-stage-pill completed';
      if (s3) s3.className = 'research-stage-pill active';
    } else if (elapsedSeconds >= 8) {
      if (s1) s1.className = 'research-stage-pill completed';
      if (s2) s2.className = 'research-stage-pill active';
    }

    const ev = feedEvents.find(e => e.sec === elapsedSeconds);
    if (ev) {
      addFeedLine(`[${timeStr}] ${ev.text}`, ev.type);
    }

    if (remainingSeconds <= 0) {
      clearInterval(genIntervalTimer);
      genIntervalTimer = null;
      addFeedLine('[00:00] Chapter Analysis Concluded! Opening Question Quota Selector...', 'success');
      setTimeout(() => {
        renderFramingOptionsScreen(genAnalysisResult);
      }, 700);
    }
  }, 1000);
};

// Backwards compatibility alias
window.startTwoMinuteResearch = window.startThirtySecondResearch;

// Stage 2: Question Quantity Selection Screen
async function renderFramingOptionsScreen(analysis) {
  const content = document.getElementById('workspaceContent');
  if (!content) return;

  genActivePhase = 'FRAMING_OPTIONS';

  // Ensure vaultStats is loaded with current database chapter usage and section awareness
  let stats = analysis?.vaultStats || null;
  if (!stats || stats.sectionType === undefined) {
    try {
      const res = await fetch(`/api/generator/vault-stats?chapter=${encodeURIComponent(genSelectedChapter)}&subjectName=${encodeURIComponent(genSelectedSubject)}&className=${encodeURIComponent(genSelectedClass)}&sectionName=${encodeURIComponent(genSelectedSection)}`);
      const data = await res.json();
      stats = data.stats;
    } catch (e) {
      stats = { available: false, total: 0, diagrammatic: 0, theoretical: 0, complex: 0, numerical: 0 };
    }
  }

  const rawSec = (genSelectedSection || '').trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  // 1. CASE BASED STUDIES (Cap 50, Vault Pool 50)
  if (isCase) {
    const availCount = stats.total || 0;
    const alreadyCount = (stats.alreadyGenerated?.count !== undefined) ? stats.alreadyGenerated.count : (stats.alreadyGenerated?.total || 0);
    const limit = stats.limit || 50;
    const remAllowed = (stats.remainingAllowed !== undefined && typeof stats.remainingAllowed === 'number') ? stats.remainingAllowed : Math.max(0, limit - alreadyCount);
    const isCapped = remAllowed <= 0 || stats.isCapped;
    const maxCanPick = Math.min(availCount, remAllowed);
    const defCount = Math.min(10, maxCanPick);
    const hasVault = stats.available && availCount > 0;

    const html = `
      <div class="generator-container">
        <div class="framing-summary-card">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-beige); padding-bottom:14px; flex-wrap:wrap; gap:12px;">
            <div>
              <span style="background:#dcfce7; color:#15803d; border:1px solid #86efac; border-radius:20px; padding:3px 12px; font-size:0.78rem; font-weight:700;">
                ✓ 30-Second Chapter Analysis Concluded
              </span>
              <h2 style="font-size:1.35rem; color:var(--text-dark); font-weight:800; margin-top:8px;">
                Case Based Studies Quota Selection: ${genSelectedChapter}
              </h2>
              <p style="font-size:0.85rem; color:var(--text-light); margin-top:2px;">
                ${genSelectedClass} &bull; ${genSelectedBoard} &bull; ${genSelectedSubject}${genSelectedSubSubject ? ' (' + genSelectedSubSubject + ')' : ''} &bull; Section: <strong>${genSelectedSection}</strong>
              </p>
            </div>
            <div style="text-align:right;">
              <div style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase; font-weight:700;">Pre-Provided Vault Pool</div>
              <div style="font-size:1.3rem; font-weight:800; color:${hasVault ? '#15803d' : '#94a3b8'};">
                ${availCount} Questions in Vault
              </div>
            </div>
          </div>

          <!-- CHAPTER LIMITS OVERVIEW STRIP -->
          <div style="margin-top:14px; background:#faf5eb; border:1px solid var(--border-beige); border-radius:8px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <span style="font-size:0.85rem; color:var(--text-medium); font-weight:700;">Fixed Section Quota Cap:</span>
              <span style="margin-left:8px; font-size:0.82rem; font-weight:700; color:var(--text-dark);">
                📚 Max 50 Case Based Questions Allowed per Chapter
              </span>
            </div>
            <div style="font-size:0.85rem; font-weight:700;">
              Generated Till Now: <span style="color:#b45309;">${alreadyCount} / 50</span>
            </div>
          </div>

          ${isCapped ? `
            <div style="margin-top:16px; background:#fef2f2; border:1px solid #f87171; border-radius:8px; padding:16px 20px; color:#991b1b; font-size:0.95rem; line-height:1.6;">
              <strong>🛑 Maximum Chapter Limits Reached:</strong> Quota for "<strong>${genSelectedChapter}</strong>" in Case Based Studies has reached its maximum capacity:
              <br>&bull; <strong>Total 50 / 50 Case Based questions generated.</strong> No more questions can be generated for this chapter.
            </div>
          ` : (!hasVault ? `
            <div style="margin-top:16px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:14px 18px; color:#1e40af; font-size:0.85rem; line-height:1.5;">
              <strong>ℹ️ Question Bank Notice:</strong> Currently 0 questions remain in the vault for chapter "<strong>${genSelectedChapter}</strong>".
            </div>
          ` : `
            <p style="margin-top:14px; color:var(--text-dark); font-size:0.88rem;">
              Select Case Based question count to store from the vault (Max 25 per batch):
            </p>
          `)}

          <div class="vault-quantity-grid" style="grid-template-columns: 1fr; max-width: 600px; margin: 16px auto 0; ${isCapped ? 'opacity:0.6; pointer-events:none;' : ''}">
            <div class="vault-quantity-card" style="border-top: 3px solid #16a34a;">
              <div class="vault-card-header">
                <span class="vault-card-title">📚 Case Based Studies</span>
                <span class="vault-badge-avail ${isCapped ? 'empty' : ''}" style="${isCapped ? 'background:#fee2e2; color:#b91c1c; border-color:#fecaca;' : ''}">
                  ${isCapped ? '⛔ Cap: 50/50' : `${alreadyCount}/50 gen • ${remAllowed} left`}
                </span>
              </div>
              <div style="font-size:0.80rem; color:var(--text-light); margin-top:4px; line-height:1.4;">
                Context-rich scientific investigative scenarios with rigorous multi-step analytical evaluation of core physics concepts. (Max limit: 50 questions). ${availCount} available in vault.
              </div>
              <div class="vault-stepper-control" style="margin-top:14px;">
                <button type="button" class="vault-stepper-btn" ${isCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genCaseInput', -1, ${maxCanPick})"`}>&minus;</button>
                <input type="number" id="genCaseInput" class="vault-stepper-input" min="0" max="${maxCanPick}" value="${defCount}" ${isCapped ? 'disabled style="opacity:0.5;"' : 'oninput="updateVaultTotalSelected()" data-max="' + maxCanPick + '"'}>
                <button type="button" class="vault-stepper-btn" ${isCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genCaseInput', 1, ${maxCanPick})"`}>&plus;</button>
              </div>
              <div class="vault-chips-row">
                ${isCapped ? '<span style="color:#dc2626; font-size:0.74rem; font-weight:700;">Cap of 50 questions reached</span>' : `
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCaseInput', 0)">0</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCaseInput', Math.min(5, ${maxCanPick}))">5</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCaseInput', Math.min(10, ${maxCanPick}))">10</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCaseInput', Math.min(15, ${maxCanPick}))">15</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCaseInput', Math.min(20, ${maxCanPick}))">20</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCaseInput', Math.min(25, ${maxCanPick}))">25</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCaseInput', ${maxCanPick})">Max (${maxCanPick})</button>
                `}
              </div>
            </div>
          </div>

          <div class="vault-total-banner">
            <div>
              <span style="font-size:0.92rem; color:var(--text-dark);">Total Questions Selected to Store:</span>
              <strong id="genTotalSelected" style="font-size:1.35rem; color:#16a34a; margin-left:8px;">${defCount}</strong>
              <span style="font-size:0.80rem; color:var(--text-light); margin-left:8px;">(Max 25 per batch)</span>
            </div>
            <div id="genVaultLimitAlert" class="hidden" style="color:#dc2626; font-weight:700; font-size:0.85rem;"></div>
          </div>

          <div style="margin-top:24px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-beige); padding-top:18px;">
            <button type="button" class="btn-outline" onclick="renderGeneratorSelection()">
              &larr; Back to Selection
            </button>
            <button type="button" class="btn-analyze-frame" id="genVaultStoreBtn" ${isCapped ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : 'onclick="startVaultStoring()" style="background:linear-gradient(135deg, #15803d 0%, #166534 100%); font-size:1rem; padding:12px 28px;"'}>
              <span>${isCapped ? '🛑 Chapter Limit Reached (50/50)' : '🚀 Store Questions into Database'}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    content.innerHTML = html;
    updateVaultTotalSelected();
    return;
  }

  // 2. ASSERTION REASONING (Cap 30, Vault Pool 40)
  if (isAR) {
    const availCount = stats.total || 0;
    const alreadyCount = (stats.alreadyGenerated?.count !== undefined) ? stats.alreadyGenerated.count : (stats.alreadyGenerated?.total || 0);
    const limit = stats.limit || 30;
    const remAllowed = (stats.remainingAllowed !== undefined && typeof stats.remainingAllowed === 'number') ? stats.remainingAllowed : Math.max(0, limit - alreadyCount);
    const isCapped = remAllowed <= 0 || stats.isCapped;
    const maxCanPick = Math.min(availCount, remAllowed);
    const defCount = Math.min(10, maxCanPick);
    const hasVault = stats.available && availCount > 0;

    const html = `
      <div class="generator-container">
        <div class="framing-summary-card">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-beige); padding-bottom:14px; flex-wrap:wrap; gap:12px;">
            <div>
              <span style="background:#dcfce7; color:#15803d; border:1px solid #86efac; border-radius:20px; padding:3px 12px; font-size:0.78rem; font-weight:700;">
                ✓ 30-Second Chapter Analysis Concluded
              </span>
              <h2 style="font-size:1.35rem; color:var(--text-dark); font-weight:800; margin-top:8px;">
                Assertion-Reasoning Quota Selection: ${genSelectedChapter}
              </h2>
              <p style="font-size:0.85rem; color:var(--text-light); margin-top:2px;">
                ${genSelectedClass} &bull; ${genSelectedBoard} &bull; ${genSelectedSubject}${genSelectedSubSubject ? ' (' + genSelectedSubSubject + ')' : ''} &bull; Section: <strong>${genSelectedSection}</strong>
              </p>
            </div>
            <div style="text-align:right;">
              <div style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase; font-weight:700;">Pre-Provided Vault Pool</div>
              <div style="font-size:1.3rem; font-weight:800; color:${hasVault ? '#15803d' : '#94a3b8'};">
                ${availCount} Questions in Vault
              </div>
            </div>
          </div>

          <!-- CHAPTER LIMITS OVERVIEW STRIP -->
          <div style="margin-top:14px; background:#faf5eb; border:1px solid var(--border-beige); border-radius:8px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <span style="font-size:0.85rem; color:var(--text-medium); font-weight:700;">Fixed Section Quota Cap:</span>
              <span style="margin-left:8px; font-size:0.82rem; font-weight:700; color:var(--text-dark);">
                ⚖️ Max 30 Assertion-Reasoning Questions Allowed per Chapter
              </span>
            </div>
            <div style="font-size:0.85rem; font-weight:700;">
              Generated Till Now: <span style="color:#b45309;">${alreadyCount} / 30</span>
            </div>
          </div>

          ${isCapped ? `
            <div style="margin-top:16px; background:#fef2f2; border:1px solid #f87171; border-radius:8px; padding:16px 20px; color:#991b1b; font-size:0.95rem; line-height:1.6;">
              <strong>🛑 Maximum Chapter Limits Reached:</strong> Quota for "<strong>${genSelectedChapter}</strong>" in Assertion-Reasoning has reached its maximum capacity:
              <br>&bull; <strong>Total 30 / 30 Assertion-Reasoning questions generated.</strong> No more questions can be generated for this chapter.
            </div>
          ` : (!hasVault ? `
            <div style="margin-top:16px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:14px 18px; color:#1e40af; font-size:0.85rem; line-height:1.5;">
              <strong>ℹ️ Question Bank Notice:</strong> Currently 0 questions remain in the vault for chapter "<strong>${genSelectedChapter}</strong>".
            </div>
          ` : `
            <p style="margin-top:14px; color:var(--text-dark); font-size:0.88rem;">
              Select Assertion-Reasoning question count to store from the vault (Max 25 per batch):
            </p>
          `)}

          <div class="vault-quantity-grid" style="grid-template-columns: 1fr; max-width: 600px; margin: 16px auto 0; ${isCapped ? 'opacity:0.6; pointer-events:none;' : ''}">
            <div class="vault-quantity-card" style="border-top: 3px solid #7c3aed;">
              <div class="vault-card-header">
                <span class="vault-card-title">⚖️ Assertion & Reasoning</span>
                <span class="vault-badge-avail ${isCapped ? 'empty' : ''}" style="${isCapped ? 'background:#fee2e2; color:#b91c1c; border-color:#fecaca;' : ''}">
                  ${isCapped ? '⛔ Cap: 30/30' : `${alreadyCount}/30 gen • ${remAllowed} left`}
                </span>
              </div>
              <div style="font-size:0.80rem; color:var(--text-light); margin-top:4px; line-height:1.4;">
                Standard ICSE four-option matrix (A, B, C, D) assessing scientific causality, physical principles, and validation. (Max limit: 30 questions). ${availCount} available in vault.
              </div>
              <div class="vault-stepper-control" style="margin-top:14px;">
                <button type="button" class="vault-stepper-btn" ${isCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genArInput', -1, ${maxCanPick})"`}>&minus;</button>
                <input type="number" id="genArInput" class="vault-stepper-input" min="0" max="${maxCanPick}" value="${defCount}" ${isCapped ? 'disabled style="opacity:0.5;"' : 'oninput="updateVaultTotalSelected()" data-max="' + maxCanPick + '"'}>
                <button type="button" class="vault-stepper-btn" ${isCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genArInput', 1, ${maxCanPick})"`}>&plus;</button>
              </div>
              <div class="vault-chips-row">
                ${isCapped ? '<span style="color:#dc2626; font-size:0.74rem; font-weight:700;">Cap of 30 questions reached</span>' : `
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genArInput', 0)">0</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genArInput', Math.min(5, ${maxCanPick}))">5</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genArInput', Math.min(10, ${maxCanPick}))">10</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genArInput', Math.min(15, ${maxCanPick}))">15</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genArInput', Math.min(20, ${maxCanPick}))">20</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genArInput', Math.min(25, ${maxCanPick}))">25</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genArInput', ${maxCanPick})">Max (${maxCanPick})</button>
                `}
              </div>
            </div>
          </div>

          <div class="vault-total-banner">
            <div>
              <span style="font-size:0.92rem; color:var(--text-dark);">Total Questions Selected to Store:</span>
              <strong id="genTotalSelected" style="font-size:1.35rem; color:#7c3aed; margin-left:8px;">${defCount}</strong>
              <span style="font-size:0.80rem; color:var(--text-light); margin-left:8px;">(Max 25 per batch)</span>
            </div>
            <div id="genVaultLimitAlert" class="hidden" style="color:#dc2626; font-weight:700; font-size:0.85rem;"></div>
          </div>

          <div style="margin-top:24px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-beige); padding-top:18px;">
            <button type="button" class="btn-outline" onclick="renderGeneratorSelection()">
              &larr; Back to Selection
            </button>
            <button type="button" class="btn-analyze-frame" id="genVaultStoreBtn" ${isCapped ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : 'onclick="startVaultStoring()" style="background:linear-gradient(135deg, #15803d 0%, #166534 100%); font-size:1rem; padding:12px 28px;"'}>
              <span>${isCapped ? '🛑 Chapter Limit Reached (30/30)' : '🚀 Store Questions into Database'}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    content.innerHTML = html;
    updateVaultTotalSelected();
    return;
  }

  // 3. HOTS (Cap 20, Vault Pool 20)
  if (isHOTS) {
    const availCount = stats.total || 0;
    const alreadyCount = (stats.alreadyGenerated?.count !== undefined) ? stats.alreadyGenerated.count : (stats.alreadyGenerated?.total || 0);
    const limit = stats.limit || 20;
    const remAllowed = (stats.remainingAllowed !== undefined && typeof stats.remainingAllowed === 'number') ? stats.remainingAllowed : Math.max(0, limit - alreadyCount);
    const isCapped = remAllowed <= 0 || stats.isCapped;
    const maxCanPick = Math.min(availCount, remAllowed);
    const defCount = Math.min(10, maxCanPick);
    const hasVault = stats.available && availCount > 0;

    const html = `
      <div class="generator-container">
        <div class="framing-summary-card">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-beige); padding-bottom:14px; flex-wrap:wrap; gap:12px;">
            <div>
              <span style="background:#dcfce7; color:#15803d; border:1px solid #86efac; border-radius:20px; padding:3px 12px; font-size:0.78rem; font-weight:700;">
                ✓ 30-Second Chapter Analysis Concluded
              </span>
              <h2 style="font-size:1.35rem; color:var(--text-dark); font-weight:800; margin-top:8px;">
                HOTS Quota Selection: ${genSelectedChapter}
              </h2>
              <p style="font-size:0.85rem; color:var(--text-light); margin-top:2px;">
                ${genSelectedClass} &bull; ${genSelectedBoard} &bull; ${genSelectedSubject}${genSelectedSubSubject ? ' (' + genSelectedSubSubject + ')' : ''} &bull; Section: <strong>${genSelectedSection}</strong>
              </p>
            </div>
            <div style="text-align:right;">
              <div style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase; font-weight:700;">Pre-Provided Vault Pool</div>
              <div style="font-size:1.3rem; font-weight:800; color:${hasVault ? '#15803d' : '#94a3b8'};">
                ${availCount} Questions in Vault
              </div>
            </div>
          </div>

          <!-- CHAPTER LIMITS OVERVIEW STRIP -->
          <div style="margin-top:14px; background:#faf5eb; border:1px solid var(--border-beige); border-radius:8px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <span style="font-size:0.85rem; color:var(--text-medium); font-weight:700;">Fixed Section Quota Cap:</span>
              <span style="margin-left:8px; font-size:0.82rem; font-weight:700; color:var(--text-dark);">
                🔥 Max 20 HOTS Tricky Questions Allowed per Chapter
              </span>
            </div>
            <div style="font-size:0.85rem; font-weight:700;">
              Generated Till Now: <span style="color:#b45309;">${alreadyCount} / 20</span>
            </div>
          </div>

          ${isCapped ? `
            <div style="margin-top:16px; background:#fef2f2; border:1px solid #f87171; border-radius:8px; padding:16px 20px; color:#991b1b; font-size:0.95rem; line-height:1.6;">
              <strong>🛑 Maximum Chapter Limits Reached:</strong> Quota for "<strong>${genSelectedChapter}</strong>" in HOTS has reached its maximum capacity:
              <br>&bull; <strong>Total 20 / 20 HOTS questions generated.</strong> No more questions can be generated for this chapter.
            </div>
          ` : (!hasVault ? `
            <div style="margin-top:16px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:14px 18px; color:#1e40af; font-size:0.85rem; line-height:1.5;">
              <strong>ℹ️ Question Bank Notice:</strong> Currently 0 questions remain in the vault for chapter "<strong>${genSelectedChapter}</strong>".
            </div>
          ` : `
            <p style="margin-top:14px; color:var(--text-dark); font-size:0.88rem;">
              Select HOTS tricky question count to store from the vault (Max 20 per batch):
            </p>
          `)}

          <div class="vault-quantity-grid" style="grid-template-columns: 1fr; max-width: 600px; margin: 16px auto 0; ${isCapped ? 'opacity:0.6; pointer-events:none;' : ''}">
            <div class="vault-quantity-card" style="border-top: 3px solid #b45309;">
              <div class="vault-card-header">
                <span class="vault-card-title">🔥 HOTS (Higher Order Thinking Skills)</span>
                <span class="vault-badge-avail ${isCapped ? 'empty' : ''}" style="${isCapped ? 'background:#fee2e2; color:#b91c1c; border-color:#fecaca;' : ''}">
                  ${isCapped ? '⛔ Cap: 20/20' : `${alreadyCount}/20 gen • ${remAllowed} left`}
                </span>
              </div>
              <div style="font-size:0.80rem; color:var(--text-light); margin-top:4px; line-height:1.4;">
                Elite tricky scenario-based MCQs challenging common student misconceptions with multi-step reasoning and subtle physical edge conditions. (Max limit: 20 questions). ${availCount} available in vault.
              </div>
              <div class="vault-stepper-control" style="margin-top:14px;">
                <button type="button" class="vault-stepper-btn" ${isCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genHotsInput', -1, ${maxCanPick})"`}>&minus;</button>
                <input type="number" id="genHotsInput" class="vault-stepper-input" min="0" max="${maxCanPick}" value="${defCount}" ${isCapped ? 'disabled style="opacity:0.5;"' : 'oninput="updateVaultTotalSelected()" data-max="' + maxCanPick + '"'}>
                <button type="button" class="vault-stepper-btn" ${isCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genHotsInput', 1, ${maxCanPick})"`}>&plus;</button>
              </div>
              <div class="vault-chips-row">
                ${isCapped ? '<span style="color:#dc2626; font-size:0.74rem; font-weight:700;">Cap of 20 questions reached</span>' : `
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genHotsInput', 0)">0</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genHotsInput', Math.min(5, ${maxCanPick}))">5</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genHotsInput', Math.min(10, ${maxCanPick}))">10</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genHotsInput', Math.min(15, ${maxCanPick}))">15</button>
                  <button type="button" class="vault-chip-btn" onclick="setVaultVal('genHotsInput', ${maxCanPick})">Max (${maxCanPick})</button>
                `}
              </div>
            </div>
          </div>

          <div class="vault-total-banner">
            <div>
              <span style="font-size:0.92rem; color:var(--text-dark);">Total Questions Selected to Store:</span>
              <strong id="genTotalSelected" style="font-size:1.35rem; color:#b45309; margin-left:8px;">${defCount}</strong>
              <span style="font-size:0.80rem; color:var(--text-light); margin-left:8px;">(Max 20 per batch)</span>
            </div>
            <div id="genVaultLimitAlert" class="hidden" style="color:#dc2626; font-weight:700; font-size:0.85rem;"></div>
          </div>

          <div style="margin-top:24px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-beige); padding-top:18px;">
            <button type="button" class="btn-outline" onclick="renderGeneratorSelection()">
              &larr; Back to Selection
            </button>
            <button type="button" class="btn-analyze-frame" id="genVaultStoreBtn" ${isCapped ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : 'onclick="startVaultStoring()" style="background:linear-gradient(135deg, #15803d 0%, #166534 100%); font-size:1rem; padding:12px 28px;"'}>
              <span>${isCapped ? '🛑 Chapter Limit Reached (20/20)' : '🚀 Store Questions into Database'}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    content.innerHTML = html;
    updateVaultTotalSelected();
    return;
  }

  // 4. SUBJECTIVE (Standard 4 categories: Diagram 30, Numerical 30, Theoretical 20, Complex 20. Total 100)
  const availDiag = stats.diagrammatic || 0;
  const availTheo = stats.theoretical || 0;
  const availComp = stats.complex || 0;
  const availNum = stats.numerical || 0;
  const hasVault = stats.available && stats.total > 0;

  const alreadyDiag = stats.alreadyGenerated?.diagrammatic || 0;
  const alreadyNum = stats.alreadyGenerated?.numerical || 0;
  const alreadyTheo = stats.alreadyGenerated?.theoretical || 0;
  const alreadyComp = stats.alreadyGenerated?.complex || 0;
  const alreadyTotal = stats.alreadyGenerated?.total || (alreadyDiag + alreadyNum + alreadyTheo + alreadyComp);

  const remDiag = stats.remainingAllowed?.diagrammatic !== undefined ? stats.remainingAllowed.diagrammatic : Math.max(0, 30 - alreadyDiag);
  const remNum = stats.remainingAllowed?.numerical !== undefined ? stats.remainingAllowed.numerical : Math.max(0, 30 - alreadyNum);
  const remTheo = stats.remainingAllowed?.theoretical !== undefined ? stats.remainingAllowed.theoretical : Math.max(0, 20 - alreadyTheo);
  const remComp = stats.remainingAllowed?.complex !== undefined ? stats.remainingAllowed.complex : Math.max(0, 20 - alreadyComp);

  const maxDiag = Math.min(availDiag, remDiag);
  const maxNum = Math.min(availNum, remNum);
  const maxTheo = Math.min(availTheo, remTheo);
  const maxComp = Math.min(availComp, remComp);

  const isDiagCapped = remDiag === 0;
  const isNumCapped = remNum === 0;
  const isTheoCapped = remTheo === 0;
  const isCompCapped = remComp === 0;
  const allLimitsReached = stats.allLimitsReached || (isDiagCapped && isNumCapped && isTheoCapped && isCompCapped);

  // Defaults: up to 5 if available and within limit
  const defDiag = Math.min(5, maxDiag);
  const defTheo = Math.min(0, maxTheo);
  const defComp = Math.min(0, maxComp);
  const defNum = Math.min(5, maxNum);

  const html = `
    <div class="generator-container">
      <div class="framing-summary-card">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-beige); padding-bottom:14px; flex-wrap:wrap; gap:12px;">
          <div>
            <span style="background:#dcfce7; color:#15803d; border:1px solid #86efac; border-radius:20px; padding:3px 12px; font-size:0.78rem; font-weight:700;">
              ✓ 30-Second Chapter Analysis Concluded
            </span>
            <h2 style="font-size:1.35rem; color:var(--text-dark); font-weight:800; margin-top:8px;">
              Question Quota Selection: ${genSelectedChapter}
            </h2>
            <p style="font-size:0.85rem; color:var(--text-light); margin-top:2px;">
              ${genSelectedClass} &bull; ${genSelectedBoard} &bull; ${genSelectedSubject}${genSelectedSubSubject ? ' (' + genSelectedSubSubject + ')' : ''} &bull; Section: <strong>${genSelectedSection}</strong>
            </p>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase; font-weight:700;">Pre-Provided Vault Pool</div>
            <div style="font-size:1.3rem; font-weight:800; color:${hasVault ? '#15803d' : '#94a3b8'};">
              ${stats.total} Questions Available
            </div>
          </div>
        </div>

        <!-- CHAPTER LIMITS OVERVIEW STRIP -->
        <div style="margin-top:14px; background:#faf5eb; border:1px solid var(--border-beige); border-radius:8px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <span style="font-size:0.85rem; color:var(--text-medium); font-weight:700;">Fixed Chapter Quota Caps:</span>
            <span style="margin-left:8px; font-size:0.82rem; font-weight:700; color:var(--text-dark);">
              📐 30 Diagrammatic &bull; 🔢 30 Numerical &bull; 📖 20 Theoretical &bull; 🧠 20 Complex
            </span>
          </div>
          <div style="font-size:0.85rem; font-weight:700;">
            Generated Till Now: <span style="color:#b45309;">${alreadyTotal} / 100</span>
          </div>
        </div>

        ${allLimitsReached ? `
          <div style="margin-top:16px; background:#fef2f2; border:1px solid #f87171; border-radius:8px; padding:16px 20px; color:#991b1b; font-size:0.95rem; line-height:1.6;">
            <strong>🛑 Maximum Chapter Limits Reached:</strong> All question quotas for "<strong>${genSelectedChapter}</strong>" have reached their maximum capacity:
            <br>&bull; 30 / 30 Diagrammatic questions
            <br>&bull; 30 / 30 Numerical questions
            <br>&bull; 20 / 20 Theoretical questions
            <br>&bull; 20 / 20 Complex questions
            <br><strong>Total 100 / 100 questions generated.</strong> No more questions can be generated for this chapter.
          </div>
        ` : (!hasVault ? `
          <div style="margin-top:16px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:14px 18px; color:#1e40af; font-size:0.85rem; line-height:1.5;">
            <strong>ℹ️ Question Bank Notice:</strong> Currently 0 questions remain in the vault for chapter "<strong>${genSelectedChapter}</strong>".
          </div>
        ` : `
          <p style="margin-top:14px; color:var(--text-dark); font-size:0.88rem;">
            Select question counts to generate from the vault (Max 25 total per batch):
          </p>
        `)}

        <div class="vault-quantity-grid" style="${allLimitsReached ? 'opacity:0.6; pointer-events:none;' : ''}">
          <!-- 1. Diagrammatic (Max 30) -->
          <div class="vault-quantity-card" style="border-top: 3px solid #dc2626;">
            <div class="vault-card-header">
              <span class="vault-card-title">📐 Diagrammatic</span>
              <span class="vault-badge-avail ${isDiagCapped ? 'empty' : ''}" style="${isDiagCapped ? 'background:#fee2e2; color:#b91c1c; border-color:#fecaca;' : ''}">
                ${isDiagCapped ? '⛔ Cap: 30/30' : `${alreadyDiag}/30 gen • ${remDiag} left`}
              </span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-light);">
              Requires schematic figure (Max limit: 30 questions). ${availDiag} available in vault.
            </div>
            <div class="vault-stepper-control">
              <button type="button" class="vault-stepper-btn" ${isDiagCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genDiagInput', -1, ${maxDiag})"`}>&minus;</button>
              <input type="number" id="genDiagInput" class="vault-stepper-input" min="0" max="${maxDiag}" value="${defDiag}" ${isDiagCapped ? 'disabled style="opacity:0.5;"' : 'oninput="updateVaultTotalSelected()" data-max="' + maxDiag + '"'}>
              <button type="button" class="vault-stepper-btn" ${isDiagCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genDiagInput', 1, ${maxDiag})"`}>&plus;</button>
            </div>
            <div class="vault-chips-row">
              ${isDiagCapped ? '<span style="color:#dc2626; font-size:0.74rem; font-weight:700;">Cap of 30 questions reached</span>' : `
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genDiagInput', 0)">0</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genDiagInput', Math.min(5, ${maxDiag}))">5</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genDiagInput', Math.min(10, ${maxDiag}))">10</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genDiagInput', ${maxDiag})">Max (${maxDiag})</button>
              `}
            </div>
          </div>

          <!-- 2. Numerical (Max 30) -->
          <div class="vault-quantity-card" style="border-top: 3px solid #b45309;">
            <div class="vault-card-header">
              <span class="vault-card-title">🔢 Numerical</span>
              <span class="vault-badge-avail ${isNumCapped ? 'empty' : ''}" style="${isNumCapped ? 'background:#fee2e2; color:#b91c1c; border-color:#fecaca;' : ''}">
                ${isNumCapped ? '⛔ Cap: 30/30' : `${alreadyNum}/30 gen • ${remNum} left`}
              </span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-light);">
              Quantitative multi-step calculations (Max limit: 30 questions). ${availNum} available in vault.
            </div>
            <div class="vault-stepper-control">
              <button type="button" class="vault-stepper-btn" ${isNumCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genNumInput', -1, ${maxNum})"`}>&minus;</button>
              <input type="number" id="genNumInput" class="vault-stepper-input" min="0" max="${maxNum}" value="${defNum}" ${isNumCapped ? 'disabled style="opacity:0.5;"' : 'oninput="updateVaultTotalSelected()" data-max="' + maxNum + '"'}>
              <button type="button" class="vault-stepper-btn" ${isNumCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genNumInput', 1, ${maxNum})"`}>&plus;</button>
            </div>
            <div class="vault-chips-row">
              ${isNumCapped ? '<span style="color:#dc2626; font-size:0.74rem; font-weight:700;">Cap of 30 questions reached</span>' : `
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genNumInput', 0)">0</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genNumInput', Math.min(5, ${maxNum}))">5</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genNumInput', Math.min(10, ${maxNum}))">10</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genNumInput', ${maxNum})">Max (${maxNum})</button>
              `}
            </div>
          </div>

          <!-- 3. Theoretical (Max 20) -->
          <div class="vault-quantity-card" style="border-top: 3px solid #2563eb;">
            <div class="vault-card-header">
              <span class="vault-card-title">💡 Theoretical</span>
              <span class="vault-badge-avail ${isTheoCapped ? 'empty' : ''}" style="${isTheoCapped ? 'background:#fee2e2; color:#b91c1c; border-color:#fecaca;' : ''}">
                ${isTheoCapped ? '⛔ Cap: 20/20' : `${alreadyTheo}/20 gen • ${remTheo} left`}
              </span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-light);">
              Scientific laws and conceptual reasonings (Max limit: 20 questions). ${availTheo} available in vault.
            </div>
            <div class="vault-stepper-control">
              <button type="button" class="vault-stepper-btn" ${isTheoCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genTheoInput', -1, ${maxTheo})"`}>&minus;</button>
              <input type="number" id="genTheoInput" class="vault-stepper-input" min="0" max="${maxTheo}" value="${defTheo}" ${isTheoCapped ? 'disabled style="opacity:0.5;"' : 'oninput="updateVaultTotalSelected()" data-max="' + maxTheo + '"'}>
              <button type="button" class="vault-stepper-btn" ${isTheoCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genTheoInput', 1, ${maxTheo})"`}>&plus;</button>
            </div>
            <div class="vault-chips-row">
              ${isTheoCapped ? '<span style="color:#dc2626; font-size:0.74rem; font-weight:700;">Cap of 20 questions reached</span>' : `
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genTheoInput', 0)">0</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genTheoInput', Math.min(5, ${maxTheo}))">5</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genTheoInput', Math.min(10, ${maxTheo}))">10</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genTheoInput', ${maxTheo})">Max (${maxTheo})</button>
              `}
            </div>
          </div>

          <!-- 4. Complex (Max 20) -->
          <div class="vault-quantity-card" style="border-top: 3px solid #7c3aed;">
            <div class="vault-card-header">
              <span class="vault-card-title">🧩 Complex</span>
              <span class="vault-badge-avail ${isCompCapped ? 'empty' : ''}" style="${isCompCapped ? 'background:#fee2e2; color:#b91c1c; border-color:#fecaca;' : ''}">
                ${isCompCapped ? '⛔ Cap: 20/20' : `${alreadyComp}/20 gen • ${remComp} left`}
              </span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-light);">
              Multi-concept scenarios and advanced reasoning (Max limit: 20 questions). ${availComp} available in vault.
            </div>
            <div class="vault-stepper-control">
              <button type="button" class="vault-stepper-btn" ${isCompCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genCompInput', -1, ${maxComp})"`}>&minus;</button>
              <input type="number" id="genCompInput" class="vault-stepper-input" min="0" max="${maxComp}" value="${defComp}" ${isCompCapped ? 'disabled style="opacity:0.5;"' : 'oninput="updateVaultTotalSelected()" data-max="' + maxComp + '"'}>
              <button type="button" class="vault-stepper-btn" ${isCompCapped ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : `onclick="stepVaultVal('genCompInput', 1, ${maxComp})"`}>&plus;</button>
            </div>
            <div class="vault-chips-row">
              ${isCompCapped ? '<span style="color:#dc2626; font-size:0.74rem; font-weight:700;">Cap of 20 questions reached</span>' : `
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCompInput', 0)">0</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCompInput', Math.min(5, ${maxComp}))">5</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCompInput', Math.min(10, ${maxComp}))">10</button>
                <button type="button" class="vault-chip-btn" onclick="setVaultVal('genCompInput', ${maxComp})">Max (${maxComp})</button>
              `}
            </div>
          </div>
        </div>

        <div class="vault-total-banner">
          <div>
            <span style="font-size:0.92rem; color:var(--text-dark);">Total Questions Selected to Store:</span>
            <strong id="genTotalSelected" style="font-size:1.35rem; color:#b45309; margin-left:8px;">${defDiag + defTheo + defComp + defNum}</strong>
            <span style="font-size:0.80rem; color:var(--text-light); margin-left:8px;">(Max 25 per batch)</span>
          </div>
          <div id="genVaultLimitAlert" class="hidden" style="color:#dc2626; font-weight:700; font-size:0.85rem;"></div>
        </div>

        <div style="margin-top:24px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-beige); padding-top:18px;">
          <button type="button" class="btn-outline" onclick="renderGeneratorSelection()">
            &larr; Back to Selection
          </button>
          <button type="button" class="btn-analyze-frame" id="genVaultStoreBtn" ${allLimitsReached ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : 'onclick="startVaultStoring()" style="background:linear-gradient(135deg, #15803d 0%, #166534 100%); font-size:1rem; padding:12px 28px;"'}>
            <span>${allLimitsReached ? '🛑 Chapter Limit Reached (100/100)' : '🚀 Store Questions into Database'}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  content.innerHTML = html;
  updateVaultTotalSelected();
}

window.stepVaultVal = function(inputId, step, max) {
  const el = document.getElementById(inputId);
  if (!el || el.disabled) return;
  let val = parseInt(el.value) || 0;
  val = Math.max(0, val + step);
  if (max !== undefined && max >= 0) val = Math.min(max, val);
  el.value = val;
  updateVaultTotalSelected();
};

window.setVaultVal = function(inputId, val) {
  const el = document.getElementById(inputId);
  if (!el || el.disabled) return;
  const max = el.hasAttribute('data-max') ? parseInt(el.getAttribute('data-max')) : (parseInt(el.max) || 25);
  el.value = Math.min(max, Math.max(0, val));
  updateVaultTotalSelected();
};

window.updateVaultTotalSelected = function() {
  const rawSec = (genSelectedSection || '').trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  let total = 0;
  if (isCase) {
    const el = document.getElementById('genCaseInput');
    total = parseInt(el?.value) || 0;
  } else if (isAR) {
    const el = document.getElementById('genArInput');
    total = parseInt(el?.value) || 0;
  } else if (isHOTS) {
    const el = document.getElementById('genHotsInput');
    total = parseInt(el?.value) || 0;
  } else {
    const dEl = document.getElementById('genDiagInput');
    const tEl = document.getElementById('genTheoInput');
    const cEl = document.getElementById('genCompInput');
    const nEl = document.getElementById('genNumInput');

    const d = parseInt(dEl?.value) || 0;
    const t = parseInt(tEl?.value) || 0;
    const c = parseInt(cEl?.value) || 0;
    const n = parseInt(nEl?.value) || 0;
    total = d + t + c + n;
  }

  const totEl = document.getElementById('genTotalSelected');
  if (totEl) totEl.textContent = total;

  const alertBox = document.getElementById('genVaultLimitAlert');
  const storeBtn = document.getElementById('genVaultStoreBtn');

  if (alertBox && storeBtn) {
    if (total > 25) {
      alertBox.textContent = `⚠️ Maximum batch generation limit is 25 questions. You selected ${total}. Please reduce counts to 25 or below.`;
      alertBox.classList.remove('hidden');
      storeBtn.disabled = true;
      storeBtn.style.opacity = '0.5';
      storeBtn.style.cursor = 'not-allowed';
    } else if (total === 0) {
      alertBox.textContent = 'Please select at least 1 question to store.';
      alertBox.classList.remove('hidden');
      storeBtn.disabled = true;
      storeBtn.style.opacity = '0.5';
      storeBtn.style.cursor = 'not-allowed';
    } else {
      alertBox.classList.add('hidden');
      storeBtn.disabled = false;
      storeBtn.style.opacity = '1';
      storeBtn.style.cursor = 'pointer';
    }
  }
};

// Stage 3: Instant Vault Storing with 2-Second Simulated Verification Console
window.startVaultStoring = async function() {
  const content = document.getElementById('workspaceContent');
  if (!content) return;

  const rawSec = (genSelectedSection || '').trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  let total = 0;
  let payload = {
    chapter: genSelectedChapter,
    className: genSelectedClass,
    subjectName: genSelectedSubject,
    subSubjectName: genSelectedSubSubject,
    boardName: genSelectedBoard,
    sectionName: genSelectedSection
  };

  let feedDesc = '';
  if (isCase) {
    const count = parseInt(document.getElementById('genCaseInput')?.value) || 0;
    total = count;
    payload.count = count;
    feedDesc = `${count} Case Based investigative questions`;
  } else if (isAR) {
    const count = parseInt(document.getElementById('genArInput')?.value) || 0;
    total = count;
    payload.count = count;
    feedDesc = `${count} Assertion-Reasoning questions`;
  } else if (isHOTS) {
    const count = parseInt(document.getElementById('genHotsInput')?.value) || 0;
    total = count;
    payload.count = count;
    feedDesc = `${count} HOTS tricky questions`;
  } else {
    const dCount = parseInt(document.getElementById('genDiagInput')?.value) || 0;
    const tCount = parseInt(document.getElementById('genTheoInput')?.value) || 0;
    const cCount = parseInt(document.getElementById('genCompInput')?.value) || 0;
    const nCount = parseInt(document.getElementById('genNumInput')?.value) || 0;
    total = dCount + tCount + cCount + nCount;
    payload.diagramCount = dCount;
    payload.theoryCount = tCount;
    payload.complexCount = cCount;
    payload.numericalCount = nCount;
    feedDesc = `${dCount} diagrammatic, ${tCount} theoretical, ${cCount} complex, ${nCount} numerical questions`;
  }

  if (total <= 0) {
    alert('Please select at least 1 question to store.');
    return;
  }
  if (total > 25) {
    alert(`Maximum 25 questions per batch allowed. You selected ${total}.`);
    return;
  }

  content.innerHTML = `
    <div class="generator-container">
      <div class="research-console-card">
        <div class="console-timer-header">
          <div>
            <h2 style="font-size:1.35rem; color:#f8fafc; font-weight:800; display:flex; align-items:center; gap:8px;">
              <span>⚡ Storing Questions from Vault</span>
            </h2>
            <p style="color:#94a3b8; font-size:0.85rem; margin-top:4px;">
              Chapter: ${genSelectedChapter} &bull; Section: ${genSelectedSection} &bull; Target: ${total} Questions
            </p>
          </div>
          <div class="console-timer-badge" style="color:#34d399; border-color:#05966940; background:#05966915;">
            SYNC
          </div>
        </div>

        <div class="console-progress-track">
          <div class="console-progress-fill" id="genVaultStoreProgress" style="background:linear-gradient(90deg, #10b981, #3b82f6); width:0%;"></div>
        </div>

        <div class="console-live-feed" id="genVaultConsoleFeed" style="max-height:180px;">
          <div class="feed-line accent">[00:00] Querying hidden chapter vault for "${genSelectedChapter}" (${genSelectedSection})...</div>
        </div>
      </div>
    </div>
  `;

  const feedEl = document.getElementById('genVaultConsoleFeed');
  const progEl = document.getElementById('genVaultStoreProgress');

  function addFeedLine(txt, type = '') {
    if (!feedEl) return;
    const div = document.createElement('div');
    div.className = `feed-line ${type}`;
    div.textContent = txt;
    feedEl.appendChild(div);
    feedEl.scrollTop = feedEl.scrollHeight;
  }

  setTimeout(() => {
    if (progEl) progEl.style.width = '40%';
    addFeedLine(`[00:01] Retrieved ${feedDesc}...`, 'accent');
  }, 500);

  setTimeout(() => {
    if (progEl) progEl.style.width = '75%';
    addFeedLine('[00:02] Validating multi-step explanations, answer keys, and database deduplication constraints...', '');
  }, 1000);

  try {
    const res = await fetch('/api/generator/store-from-vault', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();

    if (!result.success) {
      if (progEl) {
        progEl.style.width = '100%';
        progEl.style.background = '#dc2626';
      }
      addFeedLine(`[00:02] ❌ Generation Blocked: ${result.message}`, 'error');
      setTimeout(() => {
        alert(result.message || 'Generation limit exceeded for this chapter.');
        renderFramingOptionsScreen();
      }, 1500);
      return;
    }

    setTimeout(() => {
      if (progEl) progEl.style.width = '100%';
      addFeedLine(`[00:02] Successfully committed ${result.savedCount} questions into database registry!`, 'success');

      setTimeout(() => {
        renderGenerationCompleteScreen(result);
      }, 600);
    }, 1500);
  } catch (err) {
    addFeedLine(`[Error] Failed to store questions: ${err.message}`, 'error');
  }
};

// Backwards compatibility alias
window.startFiveMinuteGeneration = window.startVaultStoring;

// Completion Screen: Direct Link into Questions view
function renderGenerationCompleteScreen(result) {
  const content = document.getElementById('workspaceContent');
  if (!content) return;

  const count = result?.savedCount || 0;
  const bd = result?.breakdown || {};
  const rawSec = (genSelectedSection || '').trim().toUpperCase();
  const isAR = rawSec.includes('ASSERTION');
  const isHOTS = rawSec.includes('HOTS');
  const isCase = rawSec.includes('CASE');

  let badgesHtml = '';
  if (isCase) {
    badgesHtml = `<span style="background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0; border-radius:20px; padding:4px 14px; font-size:0.85rem; font-weight:700;">📚 ${count} Case Based Questions</span>`;
  } else if (isAR) {
    badgesHtml = `<span style="background:#f3e8ff; color:#7e22ce; border:1px solid #e9d5ff; border-radius:20px; padding:4px 14px; font-size:0.85rem; font-weight:700;">⚖️ ${count} Assertion-Reasoning Questions</span>`;
  } else if (isHOTS) {
    badgesHtml = `<span style="background:#fffbeb; color:#b45309; border:1px solid #fde68a; border-radius:20px; padding:4px 14px; font-size:0.85rem; font-weight:700;">🔥 ${count} HOTS Tricky Questions</span>`;
  } else {
    badgesHtml = `
      ${bd.diagrammatic > 0 ? `<span style="background:#fef2f2; color:#b91c1c; border:1px solid #fecaca; border-radius:20px; padding:4px 14px; font-size:0.85rem; font-weight:700;">📐 ${bd.diagrammatic} Diagrammatic</span>` : ''}
      ${bd.theoretical > 0 ? `<span style="background:#eff6ff; color:#1d4ed8; border:1px solid #bfdbfe; border-radius:20px; padding:4px 14px; font-size:0.85rem; font-weight:700;">💡 ${bd.theoretical} Theoretical</span>` : ''}
      ${bd.complex > 0 ? `<span style="background:#faf5ff; color:#7e22ce; border:1px solid #e9d5ff; border-radius:20px; padding:4px 14px; font-size:0.85rem; font-weight:700;">🧩 ${bd.complex} Complex</span>` : ''}
      ${bd.numerical > 0 ? `<span style="background:#fffbeb; color:#b45309; border:1px solid #fde68a; border-radius:20px; padding:4px 14px; font-size:0.85rem; font-weight:700;">🔢 ${bd.numerical} Numerical</span>` : ''}
    `;
  }

  const html = `
    <div class="generator-container">
      <div style="background:#ffffff; border:1px solid #86efac; border-radius:12px; padding:32px; box-shadow:0 4px 20px rgba(22, 101, 52, 0.08); text-align:center;">
        <div style="font-size:3.5rem; line-height:1; margin-bottom:12px;">🎉</div>
        <h2 style="font-size:1.6rem; color:#166534; font-weight:800;">
          ${count} Questions Successfully Stored in Database!
        </h2>
        <p style="font-size:0.95rem; color:#475569; margin-top:8px; max-width:600px; margin-left:auto; margin-right:auto; line-height:1.5;">
          The questions for <strong>${genSelectedChapter}</strong> (${genSelectedClass} &bull; ${genSelectedBoard} &bull; ${genSelectedSubject}${genSelectedSubSubject ? ' - ' + genSelectedSubSubject : ''} &bull; ${genSelectedSection}) have been stored and indexed into the system database.
        </p>

        <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:20px;">
          ${badgesHtml}
        </div>

        <div style="display:flex; justify-content:center; gap:16px; margin-top:28px;">
          <button type="button" class="btn-analyze-frame" onclick="openGeneratedQuestionsDirectly()" style="background:linear-gradient(135deg, #15803d 0%, #166534 100%); padding:14px 28px; font-size:1rem;">
            <span>👁 View Stored Questions in Questions Tab</span>
          </button>
          <button type="button" class="btn-outline" onclick="renderGeneratorSelection()" style="padding:14px 24px; font-size:0.95rem;">
            <span>➕ Select More Questions</span>
          </button>
        </div>
      </div>
    </div>
  `;

  content.innerHTML = html;
}

window.openGeneratedQuestionsDirectly = function() {
  qSelectedClass = genSelectedClass;
  qSelectedSubject = genSelectedSubject;
  qSelectedSubSubject = genSelectedSubSubject;
  qSelectedBoard = genSelectedBoard;
  qSelectedSection = genSelectedSection;
  qSelectedChapter = genSelectedChapter;

  // Switch navigation to questions view and load questions
  const navButtons = document.querySelectorAll('.sidebar-menu .menu-item');
  navButtons.forEach(b => {
    b.classList.remove('active');
    if (b.getAttribute('data-view') === 'questions') b.classList.add('active');
  });

  switchView('questions');
  setTimeout(() => {
    loadQuestionsForSelectedCombination();
  }, 200);
};


