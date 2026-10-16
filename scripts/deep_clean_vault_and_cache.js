// scripts/deep_clean_vault_and_cache.js
const fs = require('fs');
const path = require('path');

// Clean superscripts and subscripts for chemistry & physics
function cleanSubAndSuper(text) {
  if (!text || typeof text !== 'string') return text;
  return text
    .replace(/\^\{\s*2\+\s*\}/g, '²⁺')
    .replace(/\^\{\s*3\+\s*\}/g, '³⁺')
    .replace(/\^\{\s*4\+\s*\}/g, '⁴⁺')
    .replace(/\^\{\s*\+\s*\}/g, '⁺')
    .replace(/\^\{\s*2\-\s*\}/g, '²⁻')
    .replace(/\^\{\s*3\-\s*\}/g, '³⁻')
    .replace(/\^\{\s*\-\s*\}/g, '⁻')
    .replace(/\^\{\s*0\s*\}/g, '⁰')
    .replace(/\^\{\s*2\s*\}/g, '²')
    .replace(/\^\{\s*3\s*\}/g, '³')
    .replace(/\^\{\s*4\s*\}/g, '⁴')
    .replace(/\^2\+/g, '²⁺')
    .replace(/\^3\+/g, '³⁺')
    .replace(/\^2\-/g, '²⁻')
    .replace(/\^3\-/g, '³⁻')
    .replace(/\^\+/g, '⁺')
    .replace(/\^\-/g, '⁻')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^4\b/g, '⁴')
    .replace(/\^°\b/g, '°')
    .replace(/\^°C\b/g, '°C')
    .replace(/\^°\s*C\b/g, '°C')
    .replace(/_2\b/g, '₂')
    .replace(/_3\b/g, '₃')
    .replace(/_4\b/g, '₄')
    .replace(/_5\b/g, '₅')
    .replace(/_6\b/g, '₆')
    .replace(/_7\b/g, '₇')
    .replace(/_8\b/g, '₈')
    .replace(/_9\b/g, '₉')
    .replace(/_1\b/g, '₁')
    .replace(/_0\b/g, '₀');
}

function cleanGeneralText(text) {
  if (!text || typeof text !== 'string') return text || '';
  let str = text;

  // 1. Remove scrape/citation junk
  str = str
    .replace(/image_group[^\n]*\n?/g, '')
    .replace(/\{@body[^\n]*\n?/g, '')
    .replace(/<[Cc]ite[^>]*\/>/gi, '')
    .replace(/<[Ee]ntity[^>]*\/>/gi, '')
    .replace(/<divider\/>/gi, '')
    .replace(/<text[^>]*>([\s\S]*?)<\/text>/gi, '$1')
    .replace(/cite[^\n]*?/g, '')
    .replace(/---\s*\n\s*##\s*Quick revision checklist[\s\S]*?(?=(A |What|Calculate|A light|The|$))/gi, '')
    .replace(/\n\n---\s*\n\s*##\s*(?:Part B|Question bank complete|Answer key|Section B)[\s\S]*$/gi, '')
    .replace(/##\s*Answer Key[\s\S]*$/gi, '')
    .replace(/###\s*Diagram accuracy check[\s\S]*$/gi, '')
    .replace(/\*\*Reply YES for the next[^\n]*$/gi, '');

  // 2. Remove LaTeX commands
  str = str
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
    .replace(/\\/g, '');

  // 3. Subscripts/superscripts
  str = cleanSubAndSuper(str);

  // 4. Strip stray markdown headers / stars at end
  str = str
    .replace(/\s*\*\*Options\*\*\s*$/i, '')
    .replace(/\s*\*\*Options:\*\*\s*$/i, '')
    .replace(/\*\*+$/, '')
    .replace(/^\s*\*\s*/, '')
    .trim();

  return str;
}

// Clean question string specifically, stripping Figure:, svelte, HTML artifacts
function cleanQuestionString(q) {
  let text = q.question || '';
  if (!text) return { question: '', diagramSvg: q.diagramSvg || null };

  let diagramSvg = q.diagramSvg || null;

  // 1. Extract valid SVG if present inside question and diagramSvg is empty
  const svgMatch = text.match(/<svg[\s\S]*?<\/svg>/i);
  if (svgMatch && !diagramSvg) {
    const rawSvg = svgMatch[0];
    if (!rawSvg.includes('{#each') && !rawSvg.includes('answers[')) {
      diagramSvg = rawSvg;
    }
  }
  text = text.replace(/<svg[\s\S]*?<\/svg>/gi, '');

  // 2. Remove all svelte template blocks
  text = text
    .replace(/\{#each[\s\S]*?\{\/each\}/gi, '')
    .replace(/\{#if[\s\S]*?\{\/if\}/gi, '')
    .replace(/\{#snippet[\s\S]*?\{\/snippet\}/gi, '')
    .replace(/<AsyncImage[^>]*\/>/gi, '')
    .replace(/<hr[^>]*\/>/gi, '');

  // 3. Remove HTML table tags
  text = text
    .replace(/<\/?(?:table-cell|td|th)[^>]*>/gi, ' ')
    .replace(/<\/?(?:table-row|tr)[^>]*>/gi, '\n')
    .replace(/<\/?(?:table|tbody|thead)[^>]*>/gi, '\n')
    .replace(/<\/?(?:div|span|p|b|i|strong|box)[^>]*>/gi, ' ');

  // 4. Clean "Figure:" header prefixes
  text = text
    .replace(/^Figure:\s*\*\*[^\n]*\*\*\s*/gim, '')
    .replace(/^Figure:\s*\*\*[^\n]*\n?/gim, '')
    .replace(/^Figure:\s*[^\n\.\?]*\*\*\s*/gim, '')
    .replace(/^Figure\s*\*\*[^\n]*\*\*\s*/gim, '')
    .replace(/^Figure\s*\*\*[^\n]*\n?/gim, '')
    .replace(/^Figure:\s*/gim, '');

  // 5. Remove leftover code tags and Svelte variables
  text = text
    .replace(/\{[a-z0-9_.\"'\s\:\,\?\=\+\-\*\/\%]+\}/gi, '')
    .replace(/\[\{[\s\S]*?\}\]/g, '')
    .replace(/^Blue:\s*s-block[^\n]*\n?/gim, '')
    .replace(/^Qualitative representation:[^\n]*\n?/gim, '')
    .replace(/^Schematic shell illustration[^\n]*\n?/gim, '')
    .replace(/^Historical sequence arranged[^\n]*\n?/gim, '')
    .replace(/^Qualitative trend only[^\n]*\n?/gim, '')
    .replace(/^Central block highlighted[^\n]*\n?/gim, '')
    .replace(/^Angles are measured from the normal\.\s*/gim, '');

  // 6. General text clean
  text = cleanGeneralText(text);

  // 7. Clean lines and join
  const lines = text.split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0 && !/^[\|\-\+\:\*]+$/.test(l));

  let cleaned = lines.join(' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,\.\?\:])/g, '$1')
    .replace(/\*\*+$/, '')
    .trim();

  // If question is still empty or too short, fallback to title
  if (cleaned.length < 15 && q.title) {
    cleaned = cleanGeneralText(q.title).replace(/^—\s*/, '').trim() + '?';
  }

  return { question: cleaned, diagramSvg };
}

// Full clean of a question object
function cleanFullQuestion(q) {
  if (!q) return;

  const res = cleanQuestionString(q);
  q.question = res.question;
  if (res.diagramSvg) q.diagramSvg = res.diagramSvg;

  q.title = cleanGeneralText(q.title || '');
  q.explanation = cleanGeneralText(q.explanation || '');

  if (Array.isArray(q.options)) {
    q.options.forEach(opt => {
      opt.text = cleanGeneralText(opt.text || '');
    });
  }

  // Remove bad flowchart diagram SVGs
  if (q.diagramSvg && (q.diagramSvg.includes('answers[') || q.diagramSvg.includes('Select your answers') || q.diagramSvg.includes('{#each'))) {
    q.diagramSvg = null;
  }

  if (q.title && q.title.includes('Comparing copper sulphate electrolysis with copper electrodes and electro-refining')) {
    q.question = "When comparing the electrolysis of aqueous copper(II) sulphate using copper electrodes with the industrial electro-refining of copper, which statement best distinguishes the two processes?";
  }
}

// 1. Process all 80 questionBank files
const qbDir = path.join(__dirname, '..', 'questionBank');
const qbFiles = fs.readdirSync(qbDir).filter(f => f.endsWith('.json'));

let totalQbFiles = 0;
let totalQbQuestions = 0;

qbFiles.forEach(file => {
  totalQbFiles++;
  const filePath = path.join(qbDir, file);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error('Error reading', file);
    return;
  }

  const isArray = Array.isArray(data);
  const qList = isArray ? data : (data.questions || []);

  qList.forEach(q => {
    totalQbQuestions++;
    cleanFullQuestion(q);
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
});

console.log(`Deep cleaned ${totalQbFiles} questionBank files (${totalQbQuestions} questions).`);

// 2. Process registry_cache.json
const cachePath = path.join(__dirname, '..', 'registry_cache.json');
const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

if (cache.questions) {
  cache.questions.forEach((q, idx) => {
    cleanFullQuestion(q);

    // Specific polish for Periodic Table questions in cache
    if ((q.chapter || q.chapterName || '').toLowerCase().includes('periodic')) {
      if (q.title.includes('Position of an element in the modern periodic table')) {
        q.question = "Aluminium has atomic number 13 and electronic configuration 2, 8, 3. Which conclusion correctly combines its shell structure and its position in the modern periodic table?";
      } else if (q.title.includes('Atomic radius across a period')) {
        q.question = "Across Period 3 of the periodic table, atomic sizes from sodium (Na) to chlorine (Cl) show a general decreasing trend in radius. Which explanation correctly accounts for this trend?";
      } else if (q.title.includes('Atomic size and electron affinity down Group 17')) {
        q.question = "In Group 17 (the halogens: fluorine, chlorine, bromine, and iodine), atomic radius increases down the group from F to I. Which statement correctly interprets this trend in relation to their electron affinity?";
      } else if (q.title.includes('Mendeleev\'s prediction of eka-silicon')) {
        q.question = "In Mendeleev's periodic table, a gap was left below silicon in Group 14 for an undiscovered element named 'eka-silicon', which was later identified with germanium (Ge). What does this historical prediction demonstrate?";
      } else if (q.title.includes('Mendeleev\'s law versus the modern periodic law')) {
        q.question = "Mendeleev stated that physical and chemical properties of elements are periodic functions of their atomic masses, whereas Moseley showed they are periodic functions of their atomic numbers. Which statement follows correctly from this comparison?";
      } else if (q.title.includes('Nature of oxides across Period 3')) {
        q.question = "Across Period 3 of the periodic table, oxides progress from strongly basic (Na₂O, MgO) to amphoteric (Al₂O₃) and strongly acidic (SiO₂, P₄O₁₀, SO₃). Which conclusion correctly explains this trend?";
      } else if (q.title.includes('Calculating the average atomic mass in a triad')) {
        // Fix answer key for PT 25: (24+64)/2 = 44, which is Option B!
        q.correct = "B";
        q.correct_option = "B";
      }
    }
  });
}

fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');
console.log(`Deep cleaned registry_cache.json (${cache.questions.length} questions).`);
