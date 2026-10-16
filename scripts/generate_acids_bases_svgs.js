const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questionBank', 'chemistry_acids_bases_and_salts.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

function getAcidsBasesSaltsSvg(q, idx) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // 1. pH scale
  if (t.includes('ph scale') || text.includes('horizontal ph scale')) {
    return `<svg viewBox="0 0 540 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Universal pH Scale (0 to 14) at 25°C</text>
      <!-- pH Gradient Bar -->
      <defs>
        <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#dc2626"/>
          <stop offset="25%" stop-color="#ea580c"/>
          <stop offset="50%" stop-color="#22c55e"/>
          <stop offset="75%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#7c3aed"/>
        </linearGradient>
      </defs>
      <rect x="30" y="45" width="480" height="32" rx="4" fill="url(#phGrad)"/>
      <!-- Scale markings -->
      <g font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">
        <text x="40" y="65">0</text><text x="74" y="65">1</text><text x="108" y="65">2</text><text x="142" y="65">3</text>
        <text x="176" y="65">4</text><text x="210" y="65">5</text><text x="244" y="65">6</text><text x="270" y="65">7</text>
        <text x="304" y="65">8</text><text x="338" y="65">9</text><text x="372" y="65">10</text><text x="406" y="65">11</text>
        <text x="440" y="65">12</text><text x="474" y="65">13</text><text x="500" y="65">14</text>
      </g>
      <!-- Subdivisions -->
      <rect x="30" y="85" width="220" height="26" rx="3" fill="#fee2e2" stroke="#ef4444"/>
      <text x="140" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">ACIDIC (pH &lt; 7)</text>
      <rect x="255" y="85" width="30" height="26" rx="3" fill="#dcfce7" stroke="#22c55e"/>
      <text x="270" y="102" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">7</text>
      <rect x="290" y="85" width="220" height="26" rx="3" fill="#ede9fe" stroke="#8b5cf6"/>
      <text x="400" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">ALKALINE (pH &gt; 7)</text>
      <!-- Benchmark examples -->
      <text x="50" y="135" font-size="9.5" fill="#dc2626">Gastric juice (~1.2)</text>
      <text x="150" y="135" font-size="9.5" fill="#ea580c">Vinegar (~3.0)</text>
      <text x="270" y="135" text-anchor="middle" font-size="9.5" font-weight="700" fill="#16a34a">Pure Water (7.0)</text>
      <text x="370" y="135" font-size="9.5" fill="#2563eb">Baking soda (~8.5)</text>
      <text x="460" y="135" font-size="9.5" fill="#7c3aed">NaOH (~13-14)</text>
      <line x1="30" y1="150" x2="510" y2="150" stroke="#cbd5e1"/>
      <text x="270" y="172" text-anchor="middle" font-size="10.5" font-weight="600" fill="#334155">Lower pH = Higher [H⁺] concentration | Higher pH = Higher [OH⁻] concentration</text>
    </svg>`;
  }

  // 2. Universal indicator colour chart / test tubes
  if (t.includes('universal indicator') || text.includes('universal indicator colour chart')) {
    return `<svg viewBox="0 0 500 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="250" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Universal Indicator Test: 4 Solutions</text>
      <!-- 4 Test Tubes -->
      <!-- Tube A (Strong Acid: Red, pH 1-2) -->
      <g transform="translate(60, 45)">
        <rect x="0" y="0" width="30" height="90" rx="15" fill="#fef2f2" stroke="#dc2626" stroke-width="1.8"/>
        <path d="M 0 45 Q 15 48 30 45 L 30 75 Q 15 90 0 75 Z" fill="#ef4444"/>
        <text x="15" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">Tube A</text>
        <text x="15" y="125" text-anchor="middle" font-size="9.5" fill="#dc2626">Red (pH 1)</text>
      </g>
      <!-- Tube B (Weak Acid: Yellow-Orange, pH 4-5) -->
      <g transform="translate(170, 45)">
        <rect x="0" y="0" width="30" height="90" rx="15" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
        <path d="M 0 45 Q 15 48 30 45 L 30 75 Q 15 90 0 75 Z" fill="#f59e0b"/>
        <text x="15" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Tube B</text>
        <text x="15" y="125" text-anchor="middle" font-size="9.5" fill="#d97706">Orange (pH 4)</text>
      </g>
      <!-- Tube C (Neutral: Green, pH 7) -->
      <g transform="translate(280, 45)">
        <rect x="0" y="0" width="30" height="90" rx="15" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
        <path d="M 0 45 Q 15 48 30 45 L 30 75 Q 15 90 0 75 Z" fill="#22c55e"/>
        <text x="15" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">Tube C</text>
        <text x="15" y="125" text-anchor="middle" font-size="9.5" fill="#16a34a">Green (pH 7)</text>
      </g>
      <!-- Tube D (Strong Base: Purple/Violet, pH 13) -->
      <g transform="translate(390, 45)">
        <rect x="0" y="0" width="30" height="90" rx="15" fill="#faf5ff" stroke="#7c3aed" stroke-width="1.8"/>
        <path d="M 0 45 Q 15 48 30 45 L 30 75 Q 15 90 0 75 Z" fill="#8b5cf6"/>
        <text x="15" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">Tube D</text>
        <text x="15" y="125" text-anchor="middle" font-size="9.5" fill="#7c3aed">Violet (pH 13)</text>
      </g>
      <text x="250" y="180" text-anchor="middle" font-size="10.5" font-weight="600" fill="#475569">Universal indicator produces a spectrum of distinct colours reflecting solution pH</text>
    </svg>`;
  }

  // 3. Indicator table: Litmus, Methyl orange, Phenolphthalein
  if (t.includes('indicator') || text.includes('methyl orange and phenolphthalein')) {
    return `<svg viewBox="0 0 480 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="240" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Standard Acid–Base Indicator Colour Changes</text>
      <g transform="translate(25, 45)">
        <!-- Header -->
        <rect x="0" y="0" width="430" height="26" fill="#e2e8f0" rx="3"/>
        <text x="80" y="17" font-size="11" font-weight="700" fill="#334155">Indicator</text>
        <text x="220" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">In Acidic Medium</text>
        <text x="350" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">In Alkaline Medium</text>
        <!-- Row 1: Litmus -->
        <rect x="0" y="28" width="430" height="24" fill="#ffffff"/>
        <text x="15" y="44" font-size="10.5" font-weight="600" fill="#1e293b">Litmus</text>
        <text x="220" y="44" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">Red</text>
        <text x="350" y="44" text-anchor="middle" font-size="10.5" font-weight="700" fill="#2563eb">Blue</text>
        <!-- Row 2: Methyl Orange -->
        <rect x="0" y="54" width="430" height="24" fill="#f8fafc"/>
        <text x="15" y="70" font-size="10.5" font-weight="600" fill="#1e293b">Methyl Orange</text>
        <text x="220" y="70" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ea580c">Pink / Red</text>
        <text x="350" y="70" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ca8a04">Yellow</text>
        <!-- Row 3: Phenolphthalein -->
        <rect x="0" y="80" width="430" height="24" fill="#ffffff"/>
        <text x="15" y="96" font-size="10.5" font-weight="600" fill="#1e293b">Phenolphthalein</text>
        <text x="220" y="96" text-anchor="middle" font-size="10.5" font-weight="700" fill="#64748b">Colourless</text>
        <text x="350" y="96" text-anchor="middle" font-size="10.5" font-weight="700" fill="#db2777">Pink</text>
      </g>
      <text x="240" y="172" text-anchor="middle" font-size="10.5" font-weight="600" fill="#475569">Indicators change colour due to structural alterations between molecular and ionic forms</text>
    </svg>`;
  }

  // 4. Reaction of Zinc with dilute HCl (Hydrogen evolution & Pop test)
  if (t.includes('hydrogen evolved from a metal') || text.includes('zinc granules react with dilute')) {
    return `<svg viewBox="0 0 460 210" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Reaction of Zinc with Dilute HCl: Hydrogen Gas Evolution</text>
      <!-- Conical Flask -->
      <g transform="translate(60, 45)">
        <polygon points="40,20 60,20 85,90 15,90" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <!-- Dilute HCl Liquid -->
        <polygon points="25,90 75,90 70,65 30,65" fill="#bae6fd"/>
        <!-- Zinc granules -->
        <circle cx="45" cy="85" r="4" fill="#64748b"/><circle cx="55" cy="83" r="3.5" fill="#64748b"/><circle cx="40" cy="80" r="3" fill="#64748b"/>
        <!-- Bubbles -->
        <circle cx="50" cy="55" r="2.5" fill="#0284c7"/><circle cx="46" cy="40" r="2" fill="#0284c7"/><circle cx="54" cy="30" r="2" fill="#0284c7"/>
        <text x="50" y="115" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">Zn + 2HCl → ZnCl₂ + H₂↑</text>
      </g>
      <!-- Delivery Tube -->
      <path d="M 110 65 L 110 35 L 250 35 L 250 110" fill="none" stroke="#64748b" stroke-width="3"/>
      <!-- Soap Solution Trough -->
      <rect x="210" y="110" width="80" height="30" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="250" y="130" text-anchor="middle" font-size="9" fill="#0369a1">Soap Solution</text>
      <!-- Soap Bubble rising -->
      <circle cx="280" cy="70" r="14" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="280" y="74" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">H₂</text>
      <!-- Burning Splint -->
      <line x1="330" y1="40" x2="300" y2="65" stroke="#78350f" stroke-width="3"/>
      <circle cx="298" cy="67" r="4" fill="#f97316"/>
      <text x="350" y="60" font-size="11" font-weight="800" fill="#dc2626">'POP' Sound!</text>
      <text x="230" y="190" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Hydrogen gas burns with a characteristic pop sound when ignited with a burning splint</text>
    </svg>`;
  }

  // 5. CaCO3 + HCl -> CO2 (Limewater test)
  if (t.includes('gas from an acid–carbonate') || text.includes('calcium carbonate chips')) {
    return `<svg viewBox="0 0 460 210" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Action of Acid on Carbonate: Testing CO₂ with Limewater</text>
      <!-- Flask with CaCO3 -->
      <g transform="translate(60, 45)">
        <polygon points="40,20 60,20 85,90 15,90" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <polygon points="25,90 75,90 70,65 30,65" fill="#bae6fd"/>
        <!-- CaCO3 chips -->
        <rect x="35" y="80" width="12" height="7" rx="1" fill="#cbd5e1" stroke="#64748b"/>
        <rect x="50" y="82" width="10" height="6" rx="1" fill="#cbd5e1" stroke="#64748b"/>
        <text x="50" y="115" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">CaCO₃ + 2HCl</text>
      </g>
      <!-- Delivery Tube -->
      <path d="M 110 65 L 110 35 L 290 35 L 290 95" fill="none" stroke="#64748b" stroke-width="3"/>
      <!-- Limewater Test Tube -->
      <g transform="translate(275, 75)">
        <rect x="0" y="0" width="30" height="70" rx="12" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
        <!-- Milky liquid -->
        <path d="M 0 35 Q 15 37 30 35 L 30 58 Q 15 70 0 58 Z" fill="#e2e8f0"/>
        <text x="15" y="90" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">Limewater</text>
        <text x="15" y="104" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Turns Milky!</text>
      </g>
      <!-- Equation callout -->
      <rect x="130" y="150" width="280" height="26" rx="4" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="270" y="167" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e40af">Ca(OH)₂ + CO₂ → CaCO₃↓ (White insoluble ppt) + H₂O</text>
      <text x="230" y="195" text-anchor="middle" font-size="9.5" fill="#64748b">Excess CO₂ turns the solution clear again by forming soluble Ca(HCO₃)₂</text>
    </svg>`;
  }

  // 6. Electrical conductivity: Strong acid vs Weak acid
  if (t.includes('conductivity') || text.includes('conductivity circuits have identical batteries')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Conductivity: Strong Acid (HCl) vs Weak Acid (CH₃COOH)</text>
      <!-- Circuit A: Strong Acid -->
      <g transform="translate(40, 45)">
        <rect x="15" y="55" width="80" height="60" rx="4" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="15" y="75" width="80" height="40" fill="#bae6fd"/>
        <!-- Electrodes -->
        <rect x="30" y="45" width="6" height="50" fill="#334155"/><rect x="75" y="45" width="6" height="50" fill="#334155"/>
        <!-- Bulb BRIGHT -->
        <circle cx="55" cy="15" r="12" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
        <text x="55" y="19" text-anchor="middle" font-size="12">💡</text>
        <text x="55" y="-3" text-anchor="middle" font-size="10" font-weight="800" fill="#ca8a04">GLOWS BRIGHTLY</text>
        <text x="55" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">0.1 M HCl(aq)</text>
        <text x="55" y="145" text-anchor="middle" font-size="9" fill="#64748b">100% ionised (High [H⁺])</text>
      </g>
      <!-- Circuit B: Weak Acid -->
      <g transform="translate(260, 45)">
        <rect x="15" y="55" width="80" height="60" rx="4" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="15" y="75" width="80" height="40" fill="#bae6fd"/>
        <!-- Electrodes -->
        <rect x="30" y="45" width="6" height="50" fill="#334155"/><rect x="75" y="45" width="6" height="50" fill="#334155"/>
        <!-- Bulb DIM -->
        <circle cx="55" cy="15" r="12" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="55" y="19" text-anchor="middle" font-size="12">💡</text>
        <text x="55" y="-3" text-anchor="middle" font-size="10" font-weight="700" fill="#64748b">GLOWS DIMLY</text>
        <text x="55" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">0.1 M CH₃COOH(aq)</text>
        <text x="55" y="145" text-anchor="middle" font-size="9" fill="#64748b">Partially ionised (Low [H⁺])</text>
      </g>
    </svg>`;
  }

  // 7. Titration apparatus (Endpoint of neutralisation)
  if (t.includes('neutralisation') || t.includes('titration') || text.includes('burette containing sodium hydroxide')) {
    return `<svg viewBox="0 0 460 210" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Acid–Alkali Titration Apparatus</text>
      <!-- Stand -->
      <line x1="120" y1="35" x2="120" y2="190" stroke="#475569" stroke-width="4"/>
      <rect x="90" y="185" width="80" height="12" rx="2" fill="#334155"/>
      <!-- Burette -->
      <rect x="175" y="35" width="14" height="100" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="175" y1="135" x2="182" y2="148" stroke="#0284c7" stroke-width="2"/>
      <text x="220" y="80" font-size="10" font-weight="700" fill="#0284c7">Burette with NaOH(aq)</text>
      <!-- Conical Flask -->
      <polygon points="170,155 194,155 210,185 154,185" fill="#fdf2f8" stroke="#db2777" stroke-width="1.5"/>
      <polygon points="160,185 204,185 198,168 166,168" fill="#fbcfe8"/>
      <text x="240" y="170" font-size="10" font-weight="700" fill="#db2777">Conical flask: HCl + Phenolphthalein</text>
      <text x="240" y="185" font-size="9.5" fill="#64748b">Endpoint: Colourless → Permanent Pale Pink</text>
    </svg>`;
  }

  // 8. Hydronium ion H3O+ formation
  if (t.includes('hydrogen ions do not exist') || text.includes('h_3o⁺') || text.includes('hydronium')) {
    return `<svg viewBox="0 0 460 180" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Coordinate Covalent Formation of Hydronium Ion (H₃O⁺)</text>
      <!-- Water Molecule -->
      <g transform="translate(100, 95)">
        <circle cx="0" cy="0" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="0" y="5" text-anchor="middle" font-size="14" font-weight="800" fill="#1e40af">O</text>
        <circle cx="-25" cy="-22" r="10" fill="#e0f2fe" stroke="#0284c7"/><text x="-25" y="-19" text-anchor="middle" font-size="9" font-weight="700">H</text>
        <circle cx="25" cy="-22" r="10" fill="#e0f2fe" stroke="#0284c7"/><text x="25" y="-19" text-anchor="middle" font-size="9" font-weight="700">H</text>
        <!-- Lone pair -->
        <circle cx="-6" cy="18" r="3" fill="#2563eb"/><circle cx="6" cy="18" r="3" fill="#2563eb"/>
        <text x="0" y="44" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">H₂O (Lone Pair)</text>
      </g>
      <!-- Plus sign -->
      <text x="180" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#64748b">+</text>
      <!-- Proton H+ -->
      <g transform="translate(225, 95)">
        <circle cx="0" cy="0" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
        <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="800" fill="#991b1b">H⁺</text>
        <text x="0" y="32" text-anchor="middle" font-size="9.5" fill="#ef4444">Proton</text>
      </g>
      <!-- Arrow -->
      <line x1="260" y1="95" x2="305" y2="95" stroke="#16a34a" stroke-width="2.5"/>
      <!-- H3O+ Ion -->
      <g transform="translate(365, 95)">
        <rect x="-42" y="-36" width="84" height="72" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
        <text x="0" y="5" text-anchor="middle" font-size="14" font-weight="800" fill="#1e40af">[H₃O]⁺</text>
        <text x="0" y="24" text-anchor="middle" font-size="9.5" font-weight="700" fill="#16a34a">Coordinate bond</text>
      </g>
      <text x="230" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">H⁺ cannot exist alone in aqueous solution due to high charge density</text>
    </svg>`;
  }

  // 11. Precipitation of insoluble salt PbSO4
  if (t.includes('precipitation') || text.includes('lead nitrate') || text.includes('pb(no₃)₂')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Preparation of Insoluble Salt: Precipitation of PbSO₄</text>
      <!-- Beaker 1: Pb(NO3)2 -->
      <g transform="translate(40, 50)">
        <rect x="0" y="10" width="60" height="60" rx="3" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="0" y="30" width="60" height="40" fill="#e0f2fe"/>
        <text x="30" y="85" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Pb(NO₃)₂(aq)</text>
      </g>
      <text x="130" y="90" text-anchor="middle" font-size="16" font-weight="800" fill="#64748b">+</text>
      <!-- Beaker 2: Na2SO4 -->
      <g transform="translate(150, 50)">
        <rect x="0" y="10" width="60" height="60" rx="3" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="0" y="30" width="60" height="40" fill="#e0f2fe"/>
        <text x="30" y="85" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Na₂SO₄(aq)</text>
      </g>
      <text x="245" y="90" text-anchor="middle" font-size="16" font-weight="800" fill="#16a34a">→</text>
      <!-- Product Beaker with White Ppt -->
      <g transform="translate(280, 45)">
        <rect x="0" y="10" width="75" height="65" rx="3" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="0" y="25" width="75" height="50" fill="#e0f2fe"/>
        <!-- White Ppt layer at bottom -->
        <rect x="5" y="62" width="65" height="13" fill="#ffffff" stroke="#94a3b8"/>
        <text x="37" y="72" text-anchor="middle" font-size="8.5" font-weight="800" fill="#334155">PbSO₄↓</text>
        <text x="37" y="95" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">White Precipitate</text>
      </g>
      <rect x="50" y="140" width="360" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="230" y="157" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Pb(NO₃)₂(aq) + Na₂SO₄(aq) → PbSO₄(s)↓ + 2NaNO₃(aq)</text>
    </svg>`;
  }

  // 19. Precipitation of metal hydroxides (Colours: Cu pale blue, Fe(II) green, Fe(III) brown)
  if (t.includes('precipitate formed by a base') || text.includes('copper sulphate') || text.includes('ferrous') || text.includes('iron(iii)')) {
    return `<svg viewBox="0 0 500 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="250" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Action of NaOH on Salt Solutions: Hydroxide Precipitates</text>
      <!-- Tube 1: Cu(OH)2 -->
      <g transform="translate(60, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
        <rect x="0" y="45" width="30" height="40" rx="12" fill="#7dd3fc"/>
        <text x="15" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">Cu²⁺ (aq)</text>
        <text x="15" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="#0284c7">Pale Blue ppt</text>
        <text x="15" y="133" text-anchor="middle" font-size="8.5" fill="#64748b">Cu(OH)₂↓</text>
      </g>
      <!-- Tube 2: Fe(OH)2 -->
      <g transform="translate(190, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="1.8"/>
        <rect x="0" y="45" width="30" height="40" rx="12" fill="#86efac"/>
        <text x="15" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#15803d">Fe²⁺ (aq)</text>
        <text x="15" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">Dirty Green ppt</text>
        <text x="15" y="133" text-anchor="middle" font-size="8.5" fill="#64748b">Fe(OH)₂↓</text>
      </g>
      <!-- Tube 3: Fe(OH)3 -->
      <g transform="translate(320, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#b45309" stroke-width="1.8"/>
        <rect x="0" y="45" width="30" height="40" rx="12" fill="#fdba74"/>
        <text x="15" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">Fe³⁺ (aq)</text>
        <text x="15" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">Reddish Brown</text>
        <text x="15" y="133" text-anchor="middle" font-size="8.5" fill="#64748b">Fe(OH)₃↓</text>
      </g>
      <!-- Tube 4: Zn(OH)2 / Al(OH)3 -->
      <g transform="translate(420, 45)">
        <rect x="0" y="0" width="30" height="85" rx="12" fill="#ffffff" stroke="#64748b" stroke-width="1.8"/>
        <rect x="0" y="45" width="30" height="40" rx="12" fill="#f1f5f9"/>
        <text x="15" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Zn²⁺ / Pb²⁺</text>
        <text x="15" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">Gelatinous White</text>
        <text x="15" y="133" text-anchor="middle" font-size="8.5" fill="#64748b">Soluble in excess</text>
      </g>
      <text x="250" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Precipitates are insoluble in excess NaOH except amphoteric Zn(OH)₂, Al(OH)₃, and Pb(OH)₂</text>
    </svg>`;
  }

  // General fallback for Acids Bases and Salts
  return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Experimental Chemistry: ${q.title || 'Acids, Bases & Salts'}</text>
    <g transform="translate(50, 45)">
      <!-- Apparatus: Conical flask and test tube -->
      <polygon points="30,15 50,15 70,75 10,75" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <polygon points="18,75 62,75 58,50 22,50" fill="#bae6fd"/>
      <text x="40" y="95" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">Reaction Vessel</text>
      
      <!-- Delivery tube -->
      <path d="M 40 50 L 40 25 L 180 25 L 180 60" fill="none" stroke="#64748b" stroke-width="2.5"/>
      
      <!-- Gas Jar / Receiver -->
      <rect x="165" y="45" width="30" height="60" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.8"/>
      <text x="180" y="120" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Receiver</text>
      
      <!-- Information Box -->
      <rect x="230" y="15" width="140" height="90" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="300" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Key Principles</text>
      <line x1="230" y1="46" x2="370" y2="46" stroke="#f1f5f9"/>
      <text x="240" y="64" font-size="9" fill="#475569">• Acid + Base → Salt + H₂O</text>
      <text x="240" y="80" font-size="9" fill="#475569">• Acid + Metal → Salt + H₂↑</text>
      <text x="240" y="96" font-size="9" fill="#475569">• Acid + Carbonate → CO₂↑</text>
    </g>
    <text x="230" y="172" text-anchor="middle" font-size="10" font-weight="600" fill="#64748b">Verified ICSE Class 10 Laboratory Procedure</text>
  </svg>`;
}

let updated = 0;
bank.forEach((q, idx) => {
  const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
  if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
    q.diagramSvg = getAcidsBasesSaltsSvg(q, idx);
    updated++;
  }
});

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Updated ${updated} SVGs in questionBank/chemistry_acids_bases_and_salts.json!`);
