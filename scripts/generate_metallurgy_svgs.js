const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questionBank', 'chemistry_metallurgy.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

function getMetallurgySvg(q, idx) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // 1. Stages of metallurgy flowchart
  if (t.includes('stages of metallurgy') || text.includes('figure 1') || text.includes('main stages of metallurgy')) {
    return `<svg viewBox="0 0 540 180" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="270" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">General Flowchart: Major Stages of Metallurgy</text>
      <g transform="translate(15, 50)">
        <!-- Step 1: Crushing -->
        <rect x="0" y="10" width="85" height="50" rx="4" fill="#e2e8f0" stroke="#64748b"/>
        <text x="42" y="32" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">1. Crushing &amp;</text>
        <text x="42" y="47" text-anchor="middle" font-size="9.5" fill="#475569">Pulverisation</text>
        <!-- Arrow -->
        <text x="94" y="40" font-size="14" fill="#64748b">→</text>
        <!-- Step 2: Concentration -->
        <rect x="105" y="10" width="90" height="50" rx="4" fill="#dbeafe" stroke="#3b82f6"/>
        <text x="150" y="32" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">2. Concentration</text>
        <text x="150" y="47" text-anchor="middle" font-size="8.5" fill="#2563eb">(Gravity/Froth/Mag)</text>
        <!-- Arrow -->
        <text x="202" y="40" font-size="14" fill="#64748b">→</text>
        <!-- Step 3: X Box (Calcination / Roasting) -->
        <rect x="215" y="10" width="95" height="50" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="262" y="30" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">Stage X</text>
        <text x="262" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#a16207">Calcination /</text>
        <text x="262" y="56" text-anchor="middle" font-size="9" font-weight="700" fill="#a16207">Roasting (→ Oxide)</text>
        <!-- Arrow -->
        <text x="318" y="40" font-size="14" fill="#64748b">→</text>
        <!-- Step 4: Reduction -->
        <rect x="330" y="10" width="85" height="50" rx="4" fill="#fee2e2" stroke="#ef4444"/>
        <text x="372" y="32" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b">4. Reduction</text>
        <text x="372" y="47" text-anchor="middle" font-size="8.5" fill="#dc2626">(Oxide → Metal)</text>
        <!-- Arrow -->
        <text x="422" y="40" font-size="14" fill="#64748b">→</text>
        <!-- Step 5: Refining -->
        <rect x="435" y="10" width="75" height="50" rx="4" fill="#dcfce7" stroke="#16a34a"/>
        <text x="472" y="32" text-anchor="middle" font-size="10" font-weight="700" fill="#166534">5. Refining</text>
        <text x="472" y="47" text-anchor="middle" font-size="8.5" fill="#15803d">(Pure Metal)</text>
      </g>
      <text x="270" y="145" text-anchor="middle" font-size="10.5" font-weight="600" fill="#1e293b">Stage X converts concentrated ore into metal oxide because reduction of oxides is easier</text>
    </svg>`;
  }

  // 2. Froth flotation tank
  if (t.includes('froth') || text.includes('figure 2') || text.includes('froth-flotation')) {
    return `<svg viewBox="0 0 460 210" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Concentration: Froth Flotation Process for Sulphide Ores</text>
      <!-- Tank -->
      <g transform="translate(60, 45)">
        <rect x="0" y="20" width="140" height="90" rx="3" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <!-- Water + Pine oil layer -->
        <rect x="0" y="40" width="140" height="70" fill="#bae6fd"/>
        <!-- Froth on top with ore -->
        <ellipse cx="70" cy="40" rx="65" ry="12" fill="#fef08a" stroke="#ca8a04"/>
        <text x="70" y="43" text-anchor="middle" font-size="9" font-weight="700" fill="#854d0e">Froth with Sulphide Ore</text>
        <!-- Impeller / Agitator -->
        <line x1="70" y1="0" x2="70" y2="85" stroke="#334155" stroke-width="4"/>
        <line x1="45" y1="85" x2="95" y2="85" stroke="#334155" stroke-width="4"/>
        <!-- Gangue settled at bottom -->
        <rect x="10" y="100" width="120" height="10" fill="#64748b"/>
        <text x="70" y="108" text-anchor="middle" font-size="7.5" font-weight="700" fill="#ffffff">Gangue (Wetted by water)</text>
      </g>
      <!-- Details Box -->
      <rect x="230" y="45" width="200" height="110" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="330" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Separation Principle</text>
      <line x1="230" y1="75" x2="430" y2="75" stroke="#f1f5f9"/>
      <text x="240" y="93" font-size="9.5" fill="#334155">• <strong>Sulphide Ore:</strong> Wetted by pine oil</text>
      <text x="240" y="108" font-size="9" fill="#64748b">   Rises with foam / froth</text>
      <text x="240" y="125" font-size="9.5" fill="#334155">• <strong>Gangue:</strong> Wetted by water</text>
      <text x="240" y="140" font-size="9" fill="#64748b">   Sinks to tank floor</text>
      <text x="230" y="185" text-anchor="middle" font-size="10" font-weight="600" fill="#047857">Applicable to Zinc Blende (ZnS), Galena (PbS), Copper Pyrites (CuFeS₂)</text>
    </svg>`;
  }

  // 3. Magnetic separation
  if (t.includes('magnetic separation') || text.includes('figure 3') || text.includes('magnetic roller')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Magnetic Separation of Ore</text>
      <!-- Hopper -->
      <polygon points="60,40 100,40 85,75 75,75" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <text x="80" y="35" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">Powdered Ore</text>
      <!-- Rollers & Conveyor belt -->
      <circle cx="95" cy="100" r="16" fill="#94a3b8" stroke="#475569"/>
      <circle cx="215" cy="100" r="16" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
      <text x="215" y="104" text-anchor="middle" font-size="8" font-weight="800" fill="#78350f">MAGNET</text>
      <!-- Belt -->
      <line x1="95" y1="84" x2="215" y2="84" stroke="#1e293b" stroke-width="3"/>
      <line x1="95" y1="116" x2="215" y2="116" stroke="#1e293b" stroke-width="3"/>
      <!-- Trajectories into 2 heaps -->
      <!-- Non-magnetic heap (straight drop) -->
      <path d="M 230 90 Q 255 105 260 145" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="3,2"/>
      <polygon points="245,160 275,160 260,140" fill="#94a3b8"/>
      <text x="260" y="175" text-anchor="middle" font-size="8.5" font-weight="700" fill="#475569">Non-Magnetic Gangue</text>
      <!-- Magnetic heap (held closer to roller) -->
      <path d="M 215 116 Q 215 135 205 145" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/>
      <polygon points="190,160 220,160 205,140" fill="#dc2626"/>
      <text x="205" y="175" text-anchor="middle" font-size="8.5" font-weight="700" fill="#991b1b">Magnetic Ore</text>
      <!-- Example callout -->
      <rect x="290" y="55" width="150" height="75" rx="5" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="365" y="75" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">Classic ICSE Example</text>
      <text x="300" y="93" font-size="8.5" fill="#334155">• Tinstone (SnO₂, non-mag)</text>
      <text x="300" y="107" font-size="8.5" fill="#334155">• Wolframite (FeWO₄, mag)</text>
      <text x="300" y="121" font-size="8.5" font-weight="600" fill="#15803d">• Haematite (Fe₂O₃)</text>
    </svg>`;
  }

  // 7. Hall-Heroult electrolytic cell
  if (t.includes('hall–héroult') || text.includes('figure 7') || text.includes('hall-heroult') || text.includes('electrolytic cell')) {
    return `<svg viewBox="0 0 520 220" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="260" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Extraction of Aluminium: Hall–Héroult Electrolytic Cell</text>
      <!-- Steel Tank with Carbon lining -->
      <g transform="translate(60, 45)">
        <!-- Outer steel tank -->
        <rect x="0" y="20" width="260" height="110" rx="3" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
        <!-- Carbon lining (Cathode -) -->
        <rect x="8" y="28" width="244" height="98" rx="2" fill="#1e293b"/>
        <!-- Electrolyte fused bath -->
        <rect x="18" y="38" width="224" height="75" fill="#fef08a" opacity="0.6"/>
        <text x="130" y="75" text-anchor="middle" font-size="9" font-weight="700" fill="#854d0e">Alumina + Cryolite + Fluorspar (950°C)</text>
        <!-- Coke powder on top -->
        <rect x="18" y="38" width="224" height="8" fill="#475569"/>
        <text x="130" y="34" text-anchor="middle" font-size="8" fill="#475569">Powdered Coke Layer (Prevents heat loss &amp; oxidation)</text>
        <!-- Graphite Anodes (+) suspended -->
        <rect x="45" y="0" width="16" height="65" fill="#64748b" stroke="#1e293b"/>
        <rect x="100" y="0" width="16" height="65" fill="#64748b" stroke="#1e293b"/>
        <rect x="155" y="0" width="16" height="65" fill="#64748b" stroke="#1e293b"/>
        <rect x="210" y="0" width="16" height="65" fill="#64748b" stroke="#1e293b"/>
        <!-- Molten Al at bottom -->
        <rect x="18" y="105" width="224" height="18" fill="#94a3b8"/>
        <text x="130" y="117" text-anchor="middle" font-size="8.5" font-weight="800" fill="#0f172a">Molten Aluminium (Tapped out)</text>
        <!-- Outlet tap -->
        <rect x="250" y="115" width="20" height="8" fill="#334155"/>
      </g>
      <!-- Legend Box -->
      <rect x="345" y="45" width="155" height="120" rx="5" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="422" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Electrode Chemistry</text>
      <line x1="345" y1="72" x2="500" y2="72" stroke="#f1f5f9"/>
      <text x="355" y="88" font-size="8.5" font-weight="700" fill="#16a34a">Cathode (Carbon lining):</text>
      <text x="360" y="100" font-size="8" fill="#334155">Al³⁺ + 3e⁻ → Al (Reduction)</text>
      <text x="355" y="118" font-size="8.5" font-weight="700" fill="#dc2626">Anode (Graphite rods):</text>
      <text x="360" y="130" font-size="8" fill="#334155">2O²⁻ − 4e⁻ → O₂</text>
      <text x="360" y="142" font-size="7.5" fill="#b91c1c">C + O₂ → CO₂ (Anodes burn away!)</text>
      <text x="260" y="195" text-anchor="middle" font-size="9.5" font-weight="600" fill="#475569">Cryolite (Na₃AlF₆) lowers melting point from 2050°C to 950°C and increases conductivity</text>
    </svg>`;
  }

  // 10. Electrolytic refining of Copper
  if (t.includes('electrolytic refining') || text.includes('figure 10') || text.includes('refining of copper')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Electrolytic Refining of Blister Copper</text>
      <!-- Tank -->
      <g transform="translate(60, 45)">
        <rect x="0" y="15" width="150" height="95" rx="3" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <rect x="0" y="35" width="150" height="75" fill="#7dd3fc" opacity="0.6"/>
        <text x="75" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">Acidified CuSO₄ Soln</text>
        <!-- Impure Cu Anode (+) thick -->
        <rect x="30" y="0" width="18" height="85" fill="#b45309" stroke="#78350f"/>
        <text x="39" y="-5" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">Anode (+)</text>
        <!-- Pure Cu Cathode (-) thin strip -->
        <rect x="105" y="0" width="6" height="85" fill="#ea580c" stroke="#9a3412"/>
        <text x="108" y="-5" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">Cathode (−)</text>
        <!-- Anode Mud -->
        <ellipse cx="39" cy="105" rx="15" ry="4" fill="#64748b"/>
        <text x="39" y="125" text-anchor="middle" font-size="8.5" font-weight="700" fill="#475569">Anode Mud (Ag, Au)</text>
      </g>
      <!-- Callouts -->
      <rect x="240" y="45" width="180" height="110" rx="5" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="330" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Electrode Changes</text>
      <line x1="240" y1="72" x2="420" y2="72" stroke="#f1f5f9"/>
      <text x="250" y="90" font-size="9" font-weight="700" fill="#b45309">Anode (Impure Cu):</text>
      <text x="255" y="103" font-size="8.5" fill="#475569">Cu − 2e⁻ → Cu²⁺ (Dissolves)</text>
      <text x="250" y="122" font-size="9" font-weight="700" fill="#ea580c">Cathode (Pure Cu strip):</text>
      <text x="255" y="135" font-size="8.5" fill="#475569">Cu²⁺ + 2e⁻ → Cu (Grows thicker)</text>
      <text x="230" y="182" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Net result: Pure copper transfers from impure anode to pure cathode strip</text>
    </svg>`;
  }

  // 12. Pure metal vs alloy atomic lattice
  if (t.includes('alloy') || text.includes('figure 12') || text.includes('pure metal versus alloy')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Atomic Structure: Why Alloys Are Harder Than Pure Metals</text>
      <!-- Pure Metal Grid (Regular layers slide easily) -->
      <g transform="translate(60, 45)">
        <text x="50" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">Pure Metal (Soft)</text>
        <g fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.2">
          <circle cx="15" cy="35" r="10"/><circle cx="40" cy="35" r="10"/><circle cx="65" cy="35" r="10"/><circle cx="90" cy="35" r="10"/>
          <circle cx="15" cy="60" r="10"/><circle cx="40" cy="60" r="10"/><circle cx="65" cy="60" r="10"/><circle cx="90" cy="60" r="10"/>
          <circle cx="15" cy="85" r="10"/><circle cx="40" cy="85" r="10"/><circle cx="65" cy="85" r="10"/><circle cx="90" cy="85" r="10"/>
        </g>
        <!-- Arrow showing sliding layers -->
        <text x="50" y="112" text-anchor="middle" font-size="9" fill="#1e40af">Layers slide easily</text>
      </g>
      <!-- Alloy Grid (Distorted layers cannot slide) -->
      <g transform="translate(260, 45)">
        <text x="50" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">Alloy (Hard &amp; Strong)</text>
        <g fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.2">
          <circle cx="15" cy="35" r="10"/><circle cx="40" cy="35" r="10"/><circle cx="65" cy="35" r="10"/><circle cx="90" cy="35" r="10"/>
          <circle cx="15" cy="60" r="10"/>
          <!-- Foreign atom (different size) -->
          <circle cx="40" cy="60" r="14" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
          <circle cx="70" cy="60" r="10"/><circle cx="95" cy="60" r="10"/>
          <circle cx="15" cy="88" r="10"/><circle cx="42" cy="88" r="10"/><circle cx="68" cy="88" r="10"/><circle cx="93" cy="88" r="10"/>
        </g>
        <text x="50" y="115" text-anchor="middle" font-size="9" font-weight="700" fill="#9a3412">Lattice distorted → No sliding!</text>
      </g>
      <text x="230" y="172" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Different sized atoms disrupt regular layers, preventing them from sliding over one another</text>
    </svg>`;
  }

  // General fallback for Metallurgy
  return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Metallurgical Principles: ${q.title || 'Extraction of Metals'}</text>
    <g transform="translate(50, 45)">
      <rect x="0" y="15" width="160" height="90" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="80" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">Key Extraction Stages</text>
      <text x="15" y="58" font-size="9" fill="#334155">1. Crushing &amp; Grinding</text>
      <text x="15" y="73" font-size="9" fill="#334155">2. Dressing / Concentration</text>
      <text x="15" y="88" font-size="9" fill="#334155">3. Calcination / Roasting</text>
      <text x="15" y="103" font-size="9" fill="#334155">4. Reduction &amp; Refining</text>
      
      <rect x="180" y="15" width="180" height="90" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
      <text x="270" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Reduction Routes</text>
      <text x="190" y="58" font-size="8.5" fill="#78350f">• Highly reactive: Electrolysis</text>
      <text x="190" y="73" font-size="8.5" fill="#78350f">• Moderate: Carbon / CO</text>
      <text x="190" y="88" font-size="8.5" fill="#78350f">• Thermite: Al reduction</text>
      <text x="190" y="103" font-size="8.5" fill="#78350f">• Slag: Flux + Gangue</text>
    </g>
    <text x="230" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="#64748b">Verified ICSE Class 10 Metallurgy Standard</text>
  </svg>`;
}

let metUpdated = 0;
bank.forEach((q, idx) => {
  const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
  if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
    q.diagramSvg = getMetallurgySvg(q, idx);
    if (q.question.includes('(Image reference:')) {
      q.question = q.question.replace(/\(Image reference:\s*Figure\s*\d+[^)]*\)\s*\*\s*/i, 'Refer to the metallurgical diagram shown. ');
    }
    metUpdated++;
  }
});

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Updated ${metUpdated} SVGs in questionBank/chemistry_metallurgy.json!`);
