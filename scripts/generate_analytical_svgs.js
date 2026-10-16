const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questionBank', 'chemistry_analytical_chemistry.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

function getAnalyticalSvg(q, idx) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // 1. Two-stage test tube progression: Few drops -> White ppt -> Excess -> Colourless solution (Amphoteric: Zn or Pb or Al)
  if (t.includes('order-of-addition') || t.includes('two-stage') || text.includes('few drops naoh') || text.includes('white ppt. → colourless')) {
    const isZn = text.includes('zn') || t.includes('zn');
    const isPb = text.includes('pb') || t.includes('lead');
    const label = isZn ? 'Zn²⁺ (Zinc)' : isPb ? 'Pb²⁺ (Lead)' : 'Amphoteric Cation (Zn²⁺ / Pb²⁺ / Al³⁺)';
    
    return `<svg viewBox="0 0 500 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="250" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Action of NaOH on ${label}: Two-Stage Progression</text>
      <!-- Tube 1: Salt Solution -->
      <g transform="translate(60, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#64748b" stroke-width="1.8"/>
        <rect x="0" y="45" width="30" height="40" rx="12" fill="#f0f9ff"/>
        <text x="15" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Stage I</text>
        <text x="15" y="118" text-anchor="middle" font-size="8.5" fill="#64748b">Clear Soln</text>
      </g>
      <!-- Arrow 1: Few drops NaOH -->
      <path d="M 105 85 L 155 85" fill="none" stroke="#2563eb" stroke-width="2"/>
      <text x="130" y="75" text-anchor="middle" font-size="8.5" font-weight="700" fill="#2563eb">+ Few drops</text>
      <!-- Tube 2: White Ppt -->
      <g transform="translate(170, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="1.8"/>
        <rect x="0" y="45" width="30" height="40" rx="12" fill="#e2e8f0"/>
        <text x="15" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">Stage II</text>
        <text x="15" y="118" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">White Ppt↓</text>
      </g>
      <!-- Arrow 2: Excess NaOH -->
      <path d="M 215 85 L 265 85" fill="none" stroke="#16a34a" stroke-width="2"/>
      <text x="240" y="75" text-anchor="middle" font-size="8.5" font-weight="700" fill="#16a34a">+ Excess NaOH</text>
      <!-- Tube 3: Clear Solution Dissolved -->
      <g transform="translate(280, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="1.8"/>
        <rect x="0" y="30" width="30" height="55" rx="12" fill="#eff6ff"/>
        <text x="15" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#15803d">Stage III</text>
        <text x="15" y="118" text-anchor="middle" font-size="8.5" font-weight="700" fill="#16a34a">Clear Solution</text>
      </g>
      <!-- Chemistry Box -->
      <rect x="335" y="45" width="150" height="110" rx="5" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="410" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Reaction Equations</text>
      <line x1="335" y1="72" x2="485" y2="72" stroke="#f1f5f9"/>
      <text x="342" y="88" font-size="8.5" fill="#334155">Zn²⁺ + 2OH⁻ →</text>
      <text x="350" y="100" font-size="8.5" font-weight="700" fill="#dc2626">Zn(OH)₂↓ (White)</text>
      <text x="342" y="118" font-size="8.5" fill="#334155">Zn(OH)₂ + 2OH⁻ →</text>
      <text x="350" y="130" font-size="8.5" font-weight="700" fill="#16a34a">[Zn(OH)₄]²⁻ (Soluble)</text>
      <text x="250" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">Gelatinous precipitate dissolves in excess NaOH forming soluble sodium zincate</text>
    </svg>`;
  }

  // 2. Copper: Pale blue ppt -> Excess NH4OH -> Deep blue solution
  if (t.includes('copper') || text.includes('deep blue solution') || text.includes('pale blue')) {
    return `<svg viewBox="0 0 480 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="240" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Action of NH₄OH on Cu²⁺: Pale Blue Ppt → Deep Inky Blue Solution</text>
      <!-- Tube 1: Cu2+ salt solution -->
      <g transform="translate(60, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
        <rect x="0" y="45" width="30" height="40" rx="12" fill="#bae6fd"/>
        <text x="15" y="105" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">CuSO₄(aq)</text>
        <text x="15" y="118" text-anchor="middle" font-size="8" fill="#64748b">Blue soln</text>
      </g>
      <!-- Arrow 1: Few drops NH4OH -->
      <path d="M 105 85 L 155 85" fill="none" stroke="#0284c7" stroke-width="2"/>
      <text x="130" y="75" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0284c7">+ Few drops</text>
      <!-- Tube 2: Pale blue ppt Cu(OH)2 -->
      <g transform="translate(170, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
        <rect x="0" y="45" width="30" height="40" rx="12" fill="#7dd3fc"/>
        <text x="15" y="105" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Pale Blue Ppt</text>
        <text x="15" y="118" text-anchor="middle" font-size="8" fill="#64748b">Cu(OH)₂↓</text>
      </g>
      <!-- Arrow 2: Excess NH4OH -->
      <path d="M 215 85 L 265 85" fill="none" stroke="#1e40af" stroke-width="2"/>
      <text x="240" y="75" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1e40af">+ Excess NH₄OH</text>
      <!-- Tube 3: Deep inky blue complex solution -->
      <g transform="translate(280, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#1e3a8a" stroke-width="2"/>
        <rect x="0" y="30" width="30" height="55" rx="12" fill="#1d4ed8"/>
        <text x="15" y="105" text-anchor="middle" font-size="9.5" font-weight="800" fill="#1e3a8a">Deep Inky Blue</text>
        <text x="15" y="118" text-anchor="middle" font-size="8" fill="#1e40af">Clear Solution</text>
      </g>
      <!-- Chemistry Box -->
      <rect x="330" y="45" width="135" height="110" rx="5" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="397" y="65" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">Complex Formation</text>
      <line x1="330" y1="72" x2="465" y2="72" stroke="#dbeafe"/>
      <text x="338" y="90" font-size="8" fill="#334155">Soluble complex:</text>
      <text x="338" y="106" font-size="8.5" font-weight="700" fill="#1d4ed8">[Cu(NH₃)₄]SO₄</text>
      <text x="338" y="122" font-size="7.5" fill="#475569">Tetraamminecopper(II)</text>
      <text x="338" y="134" font-size="7.5" fill="#475569">sulphate</text>
      <text x="240" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Excess NaOH does NOT dissolve Cu(OH)₂; only excess NH₄OH dissolves it!</text>
    </svg>`;
  }

  // 3. Iron(II) vs Iron(III)
  if (t.includes('iron') || text.includes('fe²⁺') || text.includes('fe³⁺') || text.includes('reddish brown') || text.includes('dirty green')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Distinguishing Fe²⁺ and Fe³⁺ Using Alkali (NaOH / NH₄OH)</text>
      <!-- Fe2+ Tube -->
      <g transform="translate(90, 45)">
        <rect x="0" y="0" width="35" height="90" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
        <rect x="0" y="45" width="35" height="45" rx="14" fill="#86efac"/>
        <text x="17" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">Fe²⁺ (Ferrous)</text>
        <text x="17" y="124" text-anchor="middle" font-size="9.5" font-weight="700" fill="#16a34a">Dirty Green Ppt</text>
        <text x="17" y="137" text-anchor="middle" font-size="8.5" fill="#64748b">Fe(OH)₂↓ (Insoluble)</text>
      </g>
      <!-- Fe3+ Tube -->
      <g transform="translate(250, 45)">
        <rect x="0" y="0" width="35" height="90" rx="14" fill="#ffffff" stroke="#b45309" stroke-width="2"/>
        <rect x="0" y="45" width="35" height="45" rx="14" fill="#fdba74"/>
        <text x="17" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Fe³⁺ (Ferric)</text>
        <text x="17" y="124" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b45309">Reddish Brown Ppt</text>
        <text x="17" y="137" text-anchor="middle" font-size="8.5" fill="#64748b">Fe(OH)₃↓ (Insoluble)</text>
      </g>
      <rect x="50" y="150" width="360" height="24" rx="3" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="230" y="166" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Both precipitates are insoluble in excess NaOH and excess NH₄OH</text>
    </svg>`;
  }

  // 4. Distinguishing Zn2+ vs Pb2+ (Key ICSE question: Pb(OH)2 insoluble in excess NH4OH, Zn(OH)2 soluble)
  if (t.includes('distinguishing') || text.includes('excess nh₄oh') || text.includes('white ppt remains') || text.includes('rack')) {
    return `<svg viewBox="0 0 500 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="250" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Differentiating Zn²⁺ vs Pb²⁺ Using Excess Reagents</text>
      <!-- Comparison Table -->
      <g transform="translate(25, 45)">
        <rect x="0" y="0" width="450" height="26" fill="#e2e8f0" rx="3"/>
        <text x="80" y="17" font-size="11" font-weight="700" fill="#334155">Cation</text>
        <text x="220" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">With Excess NaOH</text>
        <text x="360" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">With Excess NH₄OH</text>
        
        <rect x="0" y="28" width="450" height="32" fill="#ffffff"/>
        <text x="20" y="49" font-size="11" font-weight="700" fill="#1e293b">Zn²⁺ (Zinc)</text>
        <text x="220" y="49" text-anchor="middle" font-size="10.5" font-weight="700" fill="#16a34a">Soluble (Clear Soln)</text>
        <text x="360" y="49" text-anchor="middle" font-size="10.5" font-weight="700" fill="#16a34a">SOLUBLE (Clear Soln)</text>
        
        <rect x="0" y="62" width="450" height="32" fill="#f8fafc"/>
        <text x="20" y="83" font-size="11" font-weight="700" fill="#1e293b">Pb²⁺ (Lead)</text>
        <text x="220" y="83" text-anchor="middle" font-size="10.5" font-weight="700" fill="#16a34a">Soluble (Clear Soln)</text>
        <text x="360" y="83" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">INSOLUBLE (White Ppt)</text>
        
        <rect x="0" y="96" width="450" height="32" fill="#ffffff"/>
        <text x="20" y="117" font-size="11" font-weight="700" fill="#1e293b">Ca²⁺ (Calcium)</text>
        <text x="220" y="117" text-anchor="middle" font-size="10" fill="#475569">Sparingly Soluble Ppt</text>
        <text x="360" y="117" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">NO PRECIPITATE</text>
      </g>
      <text x="250" y="174" text-anchor="middle" font-size="10.5" font-weight="600" fill="#b91c1c">Excess NH₄OH unambiguously distinguishes Zn²⁺ (dissolves) from Pb²⁺ (remains insoluble)</text>
    </svg>`;
  }

  // General fallback for Analytical Chemistry
  return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Analytical Chemistry: ${q.title || 'Cation Identification'}</text>
    <!-- Rack of test tubes -->
    <g transform="translate(60, 45)">
      <!-- Tube 1 -->
      <rect x="0" y="10" width="22" height="70" rx="9" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="0" y="45" width="22" height="35" rx="9" fill="#7dd3fc"/>
      <text x="11" y="92" text-anchor="middle" font-size="8" font-weight="700">Cu²⁺</text>
      <!-- Tube 2 -->
      <rect x="40" y="10" width="22" height="70" rx="9" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
      <rect x="40" y="45" width="22" height="35" rx="9" fill="#86efac"/>
      <text x="51" y="92" text-anchor="middle" font-size="8" font-weight="700">Fe²⁺</text>
      <!-- Tube 3 -->
      <rect x="80" y="10" width="22" height="70" rx="9" fill="#ffffff" stroke="#b45309" stroke-width="1.5"/>
      <rect x="80" y="45" width="22" height="35" rx="9" fill="#fdba74"/>
      <text x="91" y="92" text-anchor="middle" font-size="8" font-weight="700">Fe³⁺</text>
      <!-- Tube 4 -->
      <rect x="120" y="10" width="22" height="70" rx="9" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
      <rect x="120" y="45" width="22" height="35" rx="9" fill="#e2e8f0"/>
      <text x="131" y="92" text-anchor="middle" font-size="8" font-weight="700">Zn²⁺</text>
    </g>
    <!-- Callout Box -->
    <rect x="230" y="45" width="180" height="95" rx="5" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="320" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Systematic Identification</text>
    <line x1="230" y1="75" x2="410" y2="75" stroke="#f1f5f9"/>
    <text x="240" y="93" font-size="8.5" fill="#475569">• Add drops slowly &amp; record ppt colour</text>
    <text x="240" y="107" font-size="8.5" fill="#475569">• Add excess alkali &amp; check solubility</text>
    <text x="240" y="121" font-size="8.5" fill="#475569">• Confirm using secondary reagent</text>
    <text x="230" y="168" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">ICSE Class 10 Qualitative Cation Analysis Scheme</text>
  </svg>`;
}

let analyticalUpdated = 0;
bank.forEach((q, idx) => {
  const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
  if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
    q.diagramSvg = getAnalyticalSvg(q, idx);
    analyticalUpdated++;
  }
});

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Updated ${analyticalUpdated} SVGs in questionBank/chemistry_analytical_chemistry.json!`);
