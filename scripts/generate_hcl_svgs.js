const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questionBank', 'chemistry_hydrogen_chloride.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

function getHclSvg(q, idx) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // 1. Lab prep apparatus (NaCl + conc H2SO4)
  if (t.includes('laboratory preparation') || text.includes('figure 1') || text.includes('thistle funnel')) {
    return `<svg viewBox="0 0 520 220" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="260" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Laboratory Preparation of Hydrogen Chloride Gas (HCl)</text>
      <!-- Round bottom flask -->
      <g transform="translate(60, 50)">
        <!-- Flask neck & bulb -->
        <rect x="32" y="10" width="16" height="30" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
        <circle cx="40" cy="65" r="32" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
        <path d="M 12 75 Q 40 100 68 75 Z" fill="#bae6fd"/>
        <!-- Thistle funnel dipping under liquid -->
        <line x1="28" y1="-10" x2="28" y2="82" stroke="#64748b" stroke-width="2"/>
        <polygon points="20,-10 36,-10 30,-3 26,-3" fill="#64748b"/>
        <!-- Burner flame (<200°C) -->
        <path d="M 35 105 Q 40 92 45 105 Z" fill="#f97316"/>
        <text x="40" y="118" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c2410c">Heat &lt; 200°C</text>
        <text x="40" y="132" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">NaCl + H₂SO₄</text>
      </g>
      <!-- Delivery tube 1 -->
      <path d="M 102 70 L 102 38 L 195 38 L 195 85" fill="none" stroke="#64748b" stroke-width="2.5"/>
      <!-- Wash Bottle (Drying agent: conc H2SO4) -->
      <g transform="translate(180, 70)">
        <rect x="0" y="15" width="45" height="55" rx="3" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="0" y="38" width="45" height="32" fill="#fed7aa"/>
        <!-- Dip tube -->
        <line x1="15" y1="15" x2="15" y2="58" stroke="#64748b" stroke-width="2"/>
        <text x="22" y="85" text-anchor="middle" font-size="9" font-weight="700" fill="#c2410c">Conc. H₂SO₄</text>
        <text x="22" y="98" text-anchor="middle" font-size="8" fill="#475569">(Drying agent)</text>
      </g>
      <!-- Delivery tube 2 -->
      <path d="M 215 85 L 215 45 L 310 45 L 310 95" fill="none" stroke="#64748b" stroke-width="2.5"/>
      <!-- Upright Gas Jar (Upward displacement of air) -->
      <g transform="translate(295, 75)">
        <rect x="0" y="0" width="35" height="70" rx="3" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
        <rect x="3" y="15" width="29" height="52" fill="#fef08a" opacity="0.3"/>
        <text x="17" y="90" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Dry HCl Gas</text>
        <text x="17" y="103" text-anchor="middle" font-size="8" fill="#64748b">Upright Jar</text>
      </g>
      <!-- Key note -->
      <rect x="355" y="55" width="145" height="90" rx="5" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="427" y="75" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Essential Conditions</text>
      <line x1="355" y1="82" x2="500" y2="82" stroke="#f1f5f9"/>
      <text x="365" y="98" font-size="8.5" fill="#475569">• T &lt; 200°C (Avoids crusting)</text>
      <text x="365" y="112" font-size="8.5" fill="#475569">• Thistle funnel dip in acid</text>
      <text x="365" y="126" font-size="8.5" fill="#475569">• Heavier than air (d=1.28)</text>
      <text x="365" y="140" font-size="8.5" fill="#475569">• Quicklime CANNOT be used</text>
      <text x="260" y="198" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Reaction: NaCl + H₂SO₄(conc) → NaHSO₄ + HCl↑ (below 200°C)</text>
    </svg>`;
  }

  // 2. Collection by upward displacement of air
  if (t.includes('collection of hydrogen chloride') || text.includes('upward displacement')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Collection of HCl Gas: Upward Displacement of Air</text>
      <!-- Delivery tube entering jar -->
      <path d="M 80 50 L 170 50 L 170 145" fill="none" stroke="#64748b" stroke-width="3"/>
      <!-- Upright Gas Jar -->
      <g transform="translate(150, 45)">
        <rect x="0" y="0" width="45" height="110" rx="3" fill="#ffffff" stroke="#334155" stroke-width="2"/>
        <!-- Heavy HCl filling bottom -->
        <rect x="2" y="55" width="41" height="53" fill="#fef08a" opacity="0.5"/>
        <text x="22" y="85" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">HCl Gas</text>
      </g>
      <!-- Displaced Air Arrow -->
      <defs>
        <marker id="arrAir" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
        </marker>
      </defs>
      <path d="M 185 60 Q 210 35 230 45" fill="none" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arrAir)"/>
      <text x="250" y="45" font-size="11" font-weight="700" fill="#2563eb">Air displaced upwards ↑</text>
      <!-- Explanatory Box -->
      <rect x="230" y="70" width="200" height="85" rx="5" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="330" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">Why This Method?</text>
      <text x="240" y="112" font-size="9.5" fill="#334155">• HCl Vapour Density = 18.25</text>
      <text x="240" y="127" font-size="9.5" fill="#334155">• Air Vapour Density = 14.4</text>
      <text x="240" y="142" font-size="9.5" font-weight="600" fill="#dc2626">• Cannot collect over water (Highly soluble!)</text>
      <text x="230" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">HCl is 1.28 times denser than air and settles at the bottom of an upright jar</text>
    </svg>`;
  }

  // 3. Selection of drying agent (Quicklime vs conc H2SO4)
  if (t.includes('drying agent') || text.includes('quicklime') || text.includes('cao')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Drying Hydrogen Chloride Gas: Rejection of Quicklime (CaO)</text>
      <!-- Correct: Conc H2SO4 -->
      <rect x="30" y="50" width="190" height="110" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="125" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="#166534">✓ Conc. H₂SO₄ (Used)</text>
      <text x="125" y="98" text-anchor="middle" font-size="10.5" fill="#334155">Acidic drying agent</text>
      <text x="125" y="118" text-anchor="middle" font-size="10" fill="#16a34a">Does NOT react with HCl</text>
      <text x="125" y="138" text-anchor="middle" font-size="9.5" fill="#64748b">Absorbs moisture efficiently</text>
      <!-- Incorrect: CaO / P2O5 -->
      <rect x="240" y="50" width="190" height="110" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.8"/>
      <text x="335" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="#991b1b">✗ Quicklime CaO (Rejected)</text>
      <text x="335" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">Basic oxide reacts with HCl!</text>
      <rect x="250" y="108" width="170" height="36" rx="3" fill="#ffffff" stroke="#fca5a5"/>
      <text x="335" y="124" text-anchor="middle" font-size="9.5" font-weight="700" fill="#7f1d1d">CaO + 2HCl → CaCl₂ + H₂O</text>
      <text x="335" y="138" text-anchor="middle" font-size="8.5" fill="#b91c1c">Destroys HCl gas!</text>
      <text x="230" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">Phosphorus pentoxide (P₂O₅) is also rejected as it reacts forming POCl₃</text>
    </svg>`;
  }

  // 4. Inverted funnel arrangement
  if (t.includes('inverted-funnel') || text.includes('inverted funnel arrangement') || text.includes('rim of the inverted funnel')) {
    return `<svg viewBox="0 0 460 210" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Inverted Funnel Arrangement for Dissolving HCl</text>
      <g transform="translate(60, 50)">
        <!-- Trough with water -->
        <rect x="0" y="45" width="140" height="50" rx="4" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="0" y="55" width="140" height="40" fill="#bae6fd"/>
        <!-- Inverted Funnel just touching water surface -->
        <path d="M 60 5 L 60 25 L 20 57 L 100 57 L 60 25 Z" fill="#ffffff" stroke="#334155" stroke-width="2"/>
        <!-- Delivery tube -->
        <line x1="60" y1="-10" x2="60" y2="5" stroke="#334155" stroke-width="2.5"/>
        <text x="60" y="-15" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">HCl Gas</text>
        <text x="115" y="70" font-size="9" font-weight="700" fill="#0369a1">Water</text>
      </g>
      <!-- Key advantages callouts -->
      <rect x="225" y="50" width="200" height="110" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="325" y="72" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e40af">Two Vital Functions</text>
      <line x1="225" y1="80" x2="425" y2="80" stroke="#bfdbfe"/>
      <text x="235" y="98" font-size="9.5" font-weight="700" fill="#0f172a">1. Prevents Back-Suction:</text>
      <text x="245" y="112" font-size="9" fill="#475569">If water rises, rim lifts above surface;</text>
      <text x="245" y="124" font-size="9" fill="#475569">air enters and water drops back.</text>
      <text x="235" y="142" font-size="9.5" font-weight="700" fill="#0f172a">2. Large Surface Area:</text>
      <text x="245" y="154" font-size="9" fill="#475569">Enables rapid dissolution of HCl gas.</text>
      <text x="230" y="188" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Funnel rim must just touch the water level (never deeply immersed)</text>
    </svg>`;
  }

  // 6. Fountain experiment
  if (t.includes('fountain experiment') || text.includes('fountain') || text.includes('red fountain')) {
    return `<svg viewBox="0 0 460 210" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">HCl Fountain Experiment: Solubility &amp; Acidity</text>
      <g transform="translate(90, 45)">
        <!-- Inverted round bottom flask -->
        <circle cx="50" cy="50" r="35" fill="#fef2f2" stroke="#dc2626" stroke-width="1.8"/>
        <rect x="42" y="80" width="16" height="20" fill="#ffffff" stroke="#64748b"/>
        <!-- Red Fountain inside -->
        <path d="M 50 60 Q 40 30 50 20 Q 60 30 50 60 Z" fill="#ef4444"/>
        <circle cx="45" cy="30" r="2" fill="#ef4444"/><circle cx="55" cy="32" r="2" fill="#ef4444"/>
        <!-- Jet tube going down -->
        <line x1="50" y1="55" x2="50" y2="125" stroke="#334155" stroke-width="2"/>
        <!-- Beaker with Blue Litmus -->
        <rect x="25" y="125" width="50" height="35" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="50" y="145" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1e40af">Blue Litmus</text>
      </g>
      <!-- Explanation Callout -->
      <rect x="210" y="55" width="220" height="105" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="320" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">Magnificent Red Fountain</text>
      <line x1="210" y1="85" x2="430" y2="85" stroke="#f1f5f9"/>
      <text x="220" y="104" font-size="9.5" fill="#334155">1. High solubility creates partial vacuum</text>
      <text x="220" y="120" font-size="9.5" fill="#334155">2. Atmospheric pressure forces liquid up</text>
      <text x="220" y="136" font-size="9.5" font-weight="700" fill="#dc2626">3. Blue litmus turns RED (Acidic nature)</text>
      <text x="220" y="152" font-size="9" fill="#64748b">1 vol H₂O dissolves ~450 vol HCl gas at STP</text>
      <text x="230" y="188" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">Demonstrates both high solubility of HCl and its acidic chemical nature</text>
    </svg>`;
  }

  // 10. Ammonia and HCl glass rod test (Dense white fumes of NH4Cl)
  if (t.includes('ammonia') || text.includes('glass rod dipped in ammonia') || text.includes('nh₄cl')) {
    return `<svg viewBox="0 0 440 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="220" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Confirmatory Test: Reaction of HCl Gas with Ammonia (NH₃)</text>
      <!-- Gas jar with HCl -->
      <g transform="translate(60, 50)">
        <rect x="0" y="20" width="50" height="90" rx="3" fill="#fef08a" opacity="0.3" stroke="#64748b" stroke-width="2"/>
        <text x="25" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#854d0e">HCl Gas</text>
      </g>
      <!-- Glass rod with NH4OH -->
      <line x1="160" y1="20" x2="90" y2="65" stroke="#38bdf8" stroke-width="4"/>
      <text x="175" y="30" font-size="10.5" font-weight="700" fill="#0284c7">Glass Rod dipped in NH₄OH</text>
      <!-- Dense White Fumes Cloud -->
      <g transform="translate(90, 55)">
        <path d="M 0 0 Q 15 -15 30 0 Q 45 10 30 20 Q 15 25 0 10 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="50" y="10" font-size="11" font-weight="800" fill="#334155">Dense White Fumes</text>
        <text x="50" y="25" font-size="9.5" font-weight="700" fill="#475569">of NH₄Cl (Solid particles)</text>
      </g>
      <rect x="60" y="145" width="320" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="220" y="162" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">NH₃(g) + HCl(g) → NH₄Cl(s) (Direct combination)</text>
    </svg>`;
  }

  // 11. Silver nitrate test (Curdy white ppt of AgCl)
  if (t.includes('silver nitrate') || text.includes('agcl') || text.includes('curdy white')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Chloride Test: Silver Nitrate Reaction</text>
      <!-- Test Tube with Curdy White Ppt -->
      <g transform="translate(70, 45)">
        <rect x="0" y="0" width="35" height="90" rx="14" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <rect x="0" y="45" width="35" height="45" rx="14" fill="#e0f2fe"/>
        <!-- White Curdy Ppt layer -->
        <rect x="3" y="65" width="29" height="20" fill="#ffffff" stroke="#94a3b8"/>
        <text x="17" y="110" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">AgCl↓</text>
      </g>
      <!-- Properties Box -->
      <rect x="150" y="45" width="260" height="95" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="280" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Precipitate Characteristics</text>
      <line x1="150" y1="75" x2="410" y2="75" stroke="#f1f5f9"/>
      <text x="165" y="94" font-size="9.5" fill="#334155">• <strong>Curdy white precipitate</strong> of AgCl</text>
      <text x="165" y="110" font-size="9.5" fill="#dc2626">• Insoluble in dilute HNO₃</text>
      <text x="165" y="126" font-size="9.5" font-weight="700" fill="#16a34a">• Soluble in excess NH₄OH forming [Ag(NH₃)₂]Cl</text>
      <rect x="50" y="150" width="360" height="26" rx="4" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="230" y="167" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e40af">AgNO₃(aq) + HCl(aq) → AgCl(s)↓ + HNO₃(aq)</text>
    </svg>`;
  }

  // 15. Conc HCl + MnO2 -> Chlorine gas
  if (t.includes('manganese dioxide') || text.includes('mno₂') || text.includes('chlorine')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Oxidation of HCl by Manganese Dioxide (MnO₂)</text>
      <!-- Round bottom flask with MnO2 + conc HCl -->
      <g transform="translate(60, 50)">
        <circle cx="40" cy="55" r="30" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
        <path d="M 15 65 Q 40 85 65 65 Z" fill="#334155"/>
        <text x="40" y="105" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">MnO₂ + Conc. HCl</text>
        <!-- Burner flame -->
        <path d="M 35 90 Q 40 80 45 90 Z" fill="#f97316"/>
      </g>
      <!-- Delivery tube -->
      <path d="M 100 70 L 100 45 L 240 45 L 240 90" fill="none" stroke="#64748b" stroke-width="2.5"/>
      <!-- Jar with Greenish-Yellow Cl2 Gas -->
      <g transform="translate(225, 70)">
        <rect x="0" y="0" width="35" height="70" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="17" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">Cl₂</text>
        <text x="17" y="85" text-anchor="middle" font-size="9" font-weight="700" fill="#a16207">Greenish-Yellow</text>
      </g>
      <!-- Equation box -->
      <rect x="70" y="150" width="340" height="32" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="240" y="170" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">MnO₂ + 4HCl(conc) → MnCl₂ + 2H₂O + Cl₂↑</text>
    </svg>`;
  }

  // 20. Aqua regia
  if (t.includes('aqua regia') || text.includes('dissolution of gold') || text.includes('noble metals')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Aqua Regia (Royal Water): Dissolution of Noble Metals</text>
      <!-- Proportion Bar -->
      <g transform="translate(60, 50)">
        <rect x="0" y="0" width="240" height="35" rx="4" fill="#fee2e2" stroke="#ef4444"/>
        <text x="120" y="22" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">3 Parts Conc. HCl</text>
        <rect x="240" y="0" width="80" height="35" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="280" y="22" text-anchor="middle" font-size="11" font-weight="800" fill="#92400e">1 Part HNO₃</text>
      </g>
      <text x="230" y="105" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Ratio = 3 : 1 (Conc. HCl : Conc. HNO₃)</text>
      <!-- Reaction producing nascent chlorine -->
      <rect x="50" y="120" width="360" height="42" rx="5" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="230" y="137" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">3HCl + HNO₃ → NOCl (Nitrosyl chloride) + 2H₂O + 2[Cl] (Nascent Chlorine)</text>
      <text x="230" y="152" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">Au + 3[Cl] → AuCl₃ (Soluble gold chloride)</text>
    </svg>`;
  }

  // General fallback for HCl
  return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Chemistry of Hydrogen Chloride: ${q.title || 'HCl Investigation'}</text>
    <g transform="translate(50, 45)">
      <!-- Gas Jar Setup -->
      <rect x="30" y="15" width="45" height="85" rx="3" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
      <rect x="33" y="35" width="39" height="62" fill="#fef08a" opacity="0.3"/>
      <text x="52" y="70" text-anchor="middle" font-size="10" font-weight="700" fill="#854d0e">HCl Gas</text>
      <!-- Delivery tube -->
      <line x1="52" y1="0" x2="52" y2="45" stroke="#334155" stroke-width="2.5"/>
      <!-- Info Box -->
      <rect x="130" y="15" width="240" height="85" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="250" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Core Properties of HCl</text>
      <line x1="130" y1="44" x2="370" y2="44" stroke="#f1f5f9"/>
      <text x="140" y="60" font-size="9.5" fill="#475569">• Vapour density: 18.25 (Heavier than air)</text>
      <text x="140" y="75" font-size="9.5" fill="#475569">• Extremely soluble in water (1:450 ratio)</text>
      <text x="140" y="90" font-size="9.5" fill="#475569">• Forms fumes of NH₄Cl with ammonia</text>
    </g>
    <text x="230" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Standard ICSE Class 10 Laboratory Specification</text>
  </svg>`;
}

let hclUpdated = 0;
bank.forEach((q, idx) => {
  const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
  if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
    q.diagramSvg = getHclSvg(q, idx);
    // Clean up scraped image reference text in question
    if (q.question.includes('(Image reference:')) {
      q.question = q.question.replace(/\(Image reference:\s*Figure\s*\d+[^)]*\)\s*\*\s*/i, 'Refer to the apparatus diagram shown. ');
    }
    hclUpdated++;
  }
});

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Updated ${hclUpdated} SVGs in questionBank/chemistry_hydrogen_chloride.json!`);
