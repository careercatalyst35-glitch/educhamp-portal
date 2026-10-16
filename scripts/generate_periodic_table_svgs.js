const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questionBank', 'chemistry_periodic_table.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

// Helper to generate clean standard SVGs for Periodic Table concepts
function getPeriodicTableSvg(q) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // 1. d-block
  if (t.includes('d-block') || text.includes('iron (fe')) {
    return `<svg viewBox="0 0 480 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="240" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Schematic Periodic Table: Highlighting the d-block</text>
      <rect x="30" y="45" width="60" height="110" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="60" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">s-block</text>
      <text x="60" y="110" text-anchor="middle" font-size="9" fill="#3b82f6">Gr. 1 - 2</text>
      
      <!-- Central d-block highlighted -->
      <rect x="100" y="75" width="200" height="80" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
      <text x="200" y="105" text-anchor="middle" font-size="12" font-weight="800" fill="#92400e">d-block (Transition Metals)</text>
      <text x="200" y="123" text-anchor="middle" font-size="10" fill="#b45309">Groups 3 to 12 (Periods 4 - 7)</text>
      <!-- Fe badge -->
      <rect x="180" y="130" width="40" height="20" rx="3" fill="#ea580c"/>
      <text x="200" y="144" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">Fe (26)</text>
      
      <rect x="310" y="45" width="140" height="110" rx="4" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
      <text x="380" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">p-block</text>
      <text x="380" y="110" text-anchor="middle" font-size="9" fill="#047857">Gr. 13 - 18</text>
      
      <text x="240" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">Iron (Fe) belongs to Period 4, Group 8 in the d-block</text>
    </svg>`;
  }

  // 2. Newlands' law of octaves
  if (t.includes('newlands') || text.includes('octave')) {
    return `<svg viewBox="0 0 500 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="250" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Newlands' Law of Octaves: Musical Notes Analogy</text>
      <g transform="translate(25, 45)">
        <!-- Table Header (Musical Notes) -->
        <rect x="0" y="0" width="450" height="30" fill="#e2e8f0" rx="4"/>
        <text x="32" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">sa (do)</text>
        <text x="96" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">re (re)</text>
        <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">ga (mi)</text>
        <text x="225" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">ma (fa)</text>
        <text x="289" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">pa (so)</text>
        <text x="353" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">dha (la)</text>
        <text x="417" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">ni (ti)</text>
        <!-- 1st Octave -->
        <rect x="0" y="35" width="450" height="30" fill="#ffffff" stroke="#e2e8f0"/>
        <text x="32" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#2563eb">H</text>
        <text x="96" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#dc2626">Li (1st)</text>
        <text x="160" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">Be</text>
        <text x="225" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">B</text>
        <text x="289" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">C</text>
        <text x="353" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">N</text>
        <text x="417" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">O</text>
        <!-- 2nd Octave -->
        <rect x="0" y="70" width="450" height="30" fill="#ffffff" stroke="#e2e8f0"/>
        <text x="32" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">F</text>
        <text x="96" y="90" text-anchor="middle" font-size="12" font-weight="800" fill="#dc2626">Na (8th)</text>
        <text x="160" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">Mg</text>
        <text x="225" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">Al</text>
        <text x="289" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">Si</text>
        <text x="353" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">P</text>
        <text x="417" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">S</text>
      </g>
      <text x="250" y="172" text-anchor="middle" font-size="10.5" font-weight="600" fill="#b91c1c">Every 8th element has properties similar to the 1st (Valid only up to Calcium, Ca)</text>
    </svg>`;
  }

  // 4. Position of Hydrogen
  if (t.includes('hydrogen') || text.includes('resembles group 1')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Dual Chemical Behaviour of Hydrogen (1s¹)</text>
      <!-- Group 1 Resemblance -->
      <rect x="30" y="45" width="190" height="110" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="125" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">Resembles Alkali Metals (Gr. 1)</text>
      <text x="125" y="95" text-anchor="middle" font-size="11" fill="#334155">Forms H⁺ cation (Loses 1 e⁻)</text>
      <text x="125" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">H → H⁺ + e⁻</text>
      <text x="125" y="138" text-anchor="middle" font-size="10" fill="#64748b">Like Na → Na⁺ + e⁻</text>
      <!-- Group 17 Resemblance -->
      <rect x="240" y="45" width="190" height="110" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <text x="335" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#166534">Resembles Halogens (Gr. 17)</text>
      <text x="335" y="95" text-anchor="middle" font-size="11" fill="#334155">Forms H⁻ hydride (Gains 1 e⁻)</text>
      <text x="335" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">H + e⁻ → H⁻ (He configuration)</text>
      <text x="335" y="138" text-anchor="middle" font-size="10" fill="#64748b">Like Cl + e⁻ → Cl⁻</text>
      <text x="230" y="176" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">Hydrogen exhibits anomalous dual position in Mendeleev &amp; Modern Periodic Tables</text>
    </svg>`;
  }

  // 5. Amphoteric oxide Al2O3
  if (t.includes('amphoteric') || text.includes('al₂o₃')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Amphoteric Nature of Aluminium Oxide (Al₂O₃)</text>
      <!-- Central Al2O3 circle -->
      <rect x="175" y="65" width="110" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
      <text x="230" y="95" text-anchor="middle" font-size="14" font-weight="800" fill="#92400e">Al₂O₃</text>
      <!-- Reaction with Acid -->
      <path d="M 175 90 L 100 90 L 100 130" fill="none" stroke="#2563eb" stroke-width="2"/>
      <rect x="20" y="130" width="160" height="42" rx="4" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="100" y="147" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e40af">+ Acid: 6HCl</text>
      <text x="100" y="163" text-anchor="middle" font-size="10" fill="#334155">→ 2AlCl₃ + 3H₂O (Acts as Base)</text>
      <!-- Reaction with Base -->
      <path d="M 285 90 L 360 90 L 360 130" fill="none" stroke="#dc2626" stroke-width="2"/>
      <rect x="280" y="130" width="160" height="42" rx="4" fill="#fef2f2" stroke="#ef4444"/>
      <text x="360" y="147" text-anchor="middle" font-size="10.5" font-weight="700" fill="#991b1b">+ Alkali: 2NaOH</text>
      <text x="360" y="163" text-anchor="middle" font-size="10" fill="#334155">→ 2NaAlO₂ + H₂O (Acts as Acid)</text>
    </svg>`;
  }

  // 6. Comparing atomic size and metallic character
  if (t.includes('comparing atomic size') || text.includes('metallic character generally')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Periodic Trends: Atomic Radius &amp; Metallic Character</text>
      <defs>
        <marker id="arrDec" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
        </marker>
        <marker id="arrInc" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/>
        </marker>
      </defs>
      <!-- Across Period -->
      <line x1="120" y1="65" x2="380" y2="65" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrDec)"/>
      <text x="250" y="55" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">Across a Period (Left to Right) →</text>
      <rect x="140" y="75" width="220" height="24" rx="3" fill="#fee2e2"/>
      <text x="250" y="91" text-anchor="middle" font-size="10.5" font-weight="600" fill="#991b1b">Both Radius &amp; Metallic Character DECREASE</text>
      <!-- Down Group -->
      <line x1="80" y1="70" x2="80" y2="175" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrInc)"/>
      <text x="75" y="125" text-anchor="middle" transform="rotate(-90 75 125)" font-size="10.5" font-weight="700" fill="#16a34a">Down Group ↓</text>
      <rect x="140" y="130" width="220" height="42" rx="4" fill="#dcfce7" stroke="#16a34a"/>
      <text x="250" y="147" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">Down a Group (Top to Bottom):</text>
      <text x="250" y="163" text-anchor="middle" font-size="10" font-weight="600" fill="#14532d">Both Radius &amp; Metallic Character INCREASE</text>
    </svg>`;
  }

  // 7. Lewis dot electron transfer Mg to O
  if (t.includes('lewis-dot') || text.includes('mg 2 valence') || text.includes('mg²⁺ o²⁻')) {
    return `<svg viewBox="0 0 440 180" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="220" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Electron Transfer: Formation of Magnesium Oxide (MgO)</text>
      <!-- Mg Atom -->
      <circle cx="80" cy="80" r="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="80" y="85" text-anchor="middle" font-size="13" font-weight="800" fill="#1e40af">Mg</text>
      <circle cx="118" cy="73" r="4" fill="#dc2626"/><circle cx="118" cy="87" r="4" fill="#dc2626"/>
      <text x="80" y="126" text-anchor="middle" font-size="10" fill="#475569">Mg: 2, 8, 2</text>
      <!-- Arrows -->
      <defs>
        <marker id="arrMg" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
        </marker>
      </defs>
      <path d="M 125 73 Q 160 55 195 68" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#arrMg)"/>
      <path d="M 125 87 Q 160 100 195 87" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#arrMg)"/>
      <!-- O Atom -->
      <circle cx="230" cy="80" r="30" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="230" y="85" text-anchor="middle" font-size="13" font-weight="800" fill="#991b1b">O</text>
      <text x="230" y="126" text-anchor="middle" font-size="10" fill="#475569">O: 2, 6</text>
      <!-- Resulting Ions -->
      <g transform="translate(340, 80)">
        <rect x="-35" y="-30" width="70" height="60" rx="6" fill="#eff6ff" stroke="#2563eb"/>
        <text x="0" y="0" text-anchor="middle" font-size="13" font-weight="800" fill="#1e40af">[Mg]²⁺</text>
        <text x="0" y="18" text-anchor="middle" font-size="9" fill="#2563eb">[2, 8]</text>
      </g>
      <text x="220" y="165" text-anchor="middle" font-size="10.5" font-weight="600" fill="#15803d">Electrostatic ionic bond formed between Mg²⁺ and O²⁻</text>
    </svg>`;
  }

  // 9. Isoelectronic series
  if (t.includes('isoelectronic') || text.includes('each ion contains 10 electrons')) {
    return `<svg viewBox="0 0 480 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="240" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Isoelectronic Series: 10-Electron Ions Size Comparison</text>
      <!-- N3- (171 pm) -->
      <circle cx="60" cy="85" r="32" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="60" y="89" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">N³⁻</text>
      <text x="60" y="130" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">171 pm (Z=7)</text>
      <!-- O2- (140 pm) -->
      <circle cx="145" cy="85" r="27" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="145" y="89" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">O²⁻</text>
      <text x="145" y="130" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">140 pm (Z=8)</text>
      <!-- F- (133 pm) -->
      <circle cx="225" cy="85" r="24" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="225" y="89" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">F⁻</text>
      <text x="225" y="130" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">133 pm (Z=9)</text>
      <!-- Na+ (102 pm) -->
      <circle cx="300" cy="85" r="20" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="300" y="89" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Na⁺</text>
      <text x="300" y="130" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">102 pm (Z=11)</text>
      <!-- Mg2+ (72 pm) -->
      <circle cx="370" cy="85" r="16" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="370" y="89" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Mg²⁺</text>
      <text x="370" y="130" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">72 pm (Z=12)</text>
      <!-- Al3+ (54 pm) -->
      <circle cx="435" cy="85" r="13" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="435" y="88" text-anchor="middle" font-size="9" font-weight="800" fill="#1e40af">Al³⁺</text>
      <text x="435" y="130" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">54 pm (Z=13)</text>
      <!-- Arrow -->
      <defs>
        <marker id="arrIso" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
        </marker>
      </defs>
      <line x1="50" y1="155" x2="440" y2="155" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrIso)"/>
      <text x="240" y="175" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">Size Decreases as Nuclear Charge Z Increases (Same 10 electrons)</text>
    </svg>`;
  }

  // 12. Dobereiner's triads
  if (t.includes('dobereiner') || text.includes('triad')) {
    return `<svg viewBox="0 0 460 180" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Dobereiner's Law of Triads: Alkali Metals</text>
      <g transform="translate(60, 45)">
        <rect x="0" y="0" width="90" height="70" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="45" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="#1e40af">Lithium (Li)</text>
        <text x="45" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Mass = 7</text>
        
        <rect x="125" y="0" width="90" height="70" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        <text x="170" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="#92400e">Sodium (Na)</text>
        <text x="170" y="52" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">Mass = 23</text>
        
        <rect x="250" y="0" width="90" height="70" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="295" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="#1e40af">Potassium (K)</text>
        <text x="295" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Mass = 39</text>
      </g>
      <!-- Formula -->
      <rect x="100" y="125" width="260" height="34" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="230" y="146" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Mean Mass = (7 + 39) / 2 = 23 (Exact match!)</text>
    </svg>`;
  }

  // 17. Valency across Period 2
  if (t.includes('valency') || text.includes('common valencies of period 2')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Valency Trend Across Period 2 (Li to Ne)</text>
      <!-- Bars for Li(1), Be(2), B(3), C(4), N(3), O(2), F(1), Ne(0) -->
      <g transform="translate(45, 140)">
        <!-- Li -->
        <rect x="0" y="-20" width="35" height="20" fill="#3b82f6" rx="2"/>
        <text x="17" y="-25" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">1</text>
        <text x="17" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">Li</text>
        <!-- Be -->
        <rect x="48" y="-40" width="35" height="40" fill="#3b82f6" rx="2"/>
        <text x="65" y="-45" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">2</text>
        <text x="65" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">Be</text>
        <!-- B -->
        <rect x="96" y="-60" width="35" height="60" fill="#3b82f6" rx="2"/>
        <text x="113" y="-65" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">3</text>
        <text x="113" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">B</text>
        <!-- C -->
        <rect x="144" y="-80" width="35" height="80" fill="#ea580c" rx="2"/>
        <text x="161" y="-85" text-anchor="middle" font-size="12" font-weight="800" fill="#9a3412">4 (Max)</text>
        <text x="161" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">C</text>
        <!-- N -->
        <rect x="192" y="-60" width="35" height="60" fill="#10b981" rx="2"/>
        <text x="209" y="-65" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">3</text>
        <text x="209" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">N</text>
        <!-- O -->
        <rect x="240" y="-40" width="35" height="40" fill="#10b981" rx="2"/>
        <text x="257" y="-45" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">2</text>
        <text x="257" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">O</text>
        <!-- F -->
        <rect x="288" y="-20" width="35" height="20" fill="#10b981" rx="2"/>
        <text x="305" y="-25" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">1</text>
        <text x="305" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">F</text>
        <!-- Ne -->
        <rect x="336" y="-3" width="35" height="3" fill="#64748b" rx="1"/>
        <text x="353" y="-10" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">0</text>
        <text x="353" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">Ne</text>
      </g>
      <text x="230" y="178" text-anchor="middle" font-size="10.5" font-weight="600" fill="#1e293b">Valency with respect to Hydrogen increases 1 to 4, then decreases to 0</text>
    </svg>`;
  }

  // 18. Cl atom vs Cl- anion
  if (t.includes('anion') || text.includes('cl atom') || text.includes('cl⁻ ion')) {
    return `<svg viewBox="0 0 440 180" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="220" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Size Comparison: Chlorine Atom vs Chloride Anion</text>
      <!-- Cl Atom -->
      <g transform="translate(100, 95)">
        <circle cx="0" cy="0" r="28" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" font-size="13" font-weight="800" fill="#065f46">Cl</text>
        <text x="0" y="48" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">Radius: 99 pm</text>
        <text x="0" y="62" text-anchor="middle" font-size="9" fill="#64748b">17 p⁺ / 17 e⁻</text>
      </g>
      <!-- Arrow +1e- -->
      <defs>
        <marker id="arrCl" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
        </marker>
      </defs>
      <line x1="160" y1="95" x2="240" y2="95" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrCl)"/>
      <text x="200" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#10b981">+ 1 e⁻</text>
      <!-- Cl- Anion -->
      <g transform="translate(320, 95)">
        <circle cx="0" cy="0" r="42" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
        <text x="0" y="4" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">Cl⁻</text>
        <text x="0" y="58" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">Radius: 181 pm (Larger!)</text>
        <text x="0" y="72" text-anchor="middle" font-size="9" fill="#64748b">17 p⁺ / 18 e⁻ (Increased repulsion)</text>
      </g>
    </svg>`;
  }

  // General fallback for Periodic Table
  return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Periodic Properties &amp; Trends: ${q.title || 'Periodic Table'}</text>
    <rect x="30" y="45" width="400" height="100" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="230" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Modern Periodic Table Schematic</text>
    <g transform="translate(50, 95)">
      <rect x="0" y="0" width="60" height="35" rx="3" fill="#dbeafe" stroke="#3b82f6"/>
      <text x="30" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">s-block</text>
      <rect x="75" y="10" width="170" height="25" rx="3" fill="#fef3c7" stroke="#f59e0b"/>
      <text x="160" y="27" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">d-block</text>
      <rect x="260" y="0" width="90" height="35" rx="3" fill="#d1fae5" stroke="#10b981"/>
      <text x="305" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#065f46">p-block</text>
    </g>
    <text x="230" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="#64748b">Properties recur at regular intervals governed by outer electronic configurations</text>
  </svg>`;
}

let ptBankUpdated = 0;
bank.forEach(q => {
  const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
  if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
    q.diagramSvg = getPeriodicTableSvg(q);
    ptBankUpdated++;
  }
});

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Updated ${ptBankUpdated} SVGs in questionBank/chemistry_periodic_table.json!`);
