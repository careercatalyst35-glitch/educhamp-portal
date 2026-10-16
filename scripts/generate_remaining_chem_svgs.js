const fs = require('fs');
const path = require('path');

// 1. CHEMISTRY CHEMICAL BONDING
const cbPath = path.join(__dirname, '..', 'questionBank', 'chemistry_chemical_bonding.json');
const cbBank = JSON.parse(fs.readFileSync(cbPath, 'utf8'));

function getBondingSvg(q) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // Brittleness / Fracture of ionic crystal
  if (t.includes('brittleness') || t.includes('fracture') || text.includes('hard yet brittle')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Brittleness of Ionic Crystals: Electrostatic Cleavage</text>
      <!-- Before Strike -->
      <g transform="translate(40, 45)">
        <text x="60" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">1. Stable Lattice</text>
        <g font-size="12" font-weight="800" text-anchor="middle">
          <!-- Row 1 -->
          <circle cx="20" cy="40" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="20" y="44" fill="#1e40af">+</text>
          <circle cx="50" cy="40" r="12" fill="#fee2e2" stroke="#dc2626"/><text x="50" y="44" fill="#991b1b">−</text>
          <circle cx="80" cy="40" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="80" y="44" fill="#1e40af">+</text>
          <circle cx="110" cy="40" r="12" fill="#fee2e2" stroke="#dc2626"/><text x="110" y="44" fill="#991b1b">−</text>
          <!-- Row 2 -->
          <circle cx="20" cy="70" r="12" fill="#fee2e2" stroke="#dc2626"/><text x="20" y="74" fill="#991b1b">−</text>
          <circle cx="50" cy="70" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="50" y="74" fill="#1e40af">+</text>
          <circle cx="80" cy="70" r="12" fill="#fee2e2" stroke="#dc2626"/><text x="80" y="74" fill="#991b1b">−</text>
          <circle cx="110" cy="70" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="110" y="74" fill="#1e40af">+</text>
        </g>
        <text x="60" y="105" text-anchor="middle" font-size="9" fill="#16a34a">Opposite charges attract</text>
      </g>
      <!-- Hammer Blow Arrow -->
      <g transform="translate(190, 65)">
        <text x="25" y="0" text-anchor="middle" font-size="11" font-weight="800" fill="#dc2626">Hammer 🔨</text>
        <path d="M 25 10 L 25 35" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      </g>
      <!-- After Strike (Repulsion) -->
      <g transform="translate(260, 45)">
        <text x="75" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">2. Like Charges Align → Repulsion!</text>
        <g font-size="12" font-weight="800" text-anchor="middle">
          <!-- Row 1 shifted -->
          <circle cx="50" cy="40" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="50" y="44" fill="#1e40af">+</text>
          <circle cx="80" cy="40" r="12" fill="#fee2e2" stroke="#dc2626"/><text x="80" y="44" fill="#991b1b">−</text>
          <circle cx="110" cy="40" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="110" y="44" fill="#1e40af">+</text>
          <!-- Repulsion arrows -->
          <line x1="50" y1="53" x2="50" y2="57" stroke="#dc2626" stroke-width="2"/>
          <line x1="80" y1="53" x2="80" y2="57" stroke="#dc2626" stroke-width="2"/>
          <!-- Row 2 -->
          <circle cx="50" cy="70" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="50" y="74" fill="#1e40af">+</text>
          <circle cx="80" cy="70" r="12" fill="#fee2e2" stroke="#dc2626"/><text x="80" y="74" fill="#991b1b">−</text>
          <circle cx="110" cy="70" r="12" fill="#fee2e2" stroke="#dc2626"/><text x="110" y="74" fill="#991b1b">−</text>
        </g>
        <text x="75" y="105" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">Electrostatic repulsion splits crystal</text>
      </g>
      <text x="230" y="175" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">A mechanical blow forces like ions into alignment, causing sudden electrostatic fracture</text>
    </svg>`;
  }

  // Solid vs Molten state conductivity
  if (t.includes('conductivity') || t.includes('electrical') || text.includes('solid state') || text.includes('molten state')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Electrical Conductivity of Ionic Compounds</text>
      <!-- Solid State (No conduction) -->
      <g transform="translate(60, 45)">
        <rect x="0" y="30" width="100" height="70" rx="4" fill="#e2e8f0" stroke="#64748b"/>
        <!-- Bulb OFF -->
        <circle cx="50" cy="0" r="12" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="50" y="4" text-anchor="middle" font-size="12">💡</text>
        <text x="50" y="18" text-anchor="middle" font-size="9" font-weight="800" fill="#64748b">BULB OFF</text>
        <!-- Ions locked in grid -->
        <g font-size="9" font-weight="700" fill="#334155" text-anchor="middle">
          <text x="30" y="55">+ − +</text>
          <text x="30" y="75">− + −</text>
        </g>
        <text x="50" y="115" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Solid State</text>
        <text x="50" y="128" text-anchor="middle" font-size="8.5" fill="#dc2626">Ions fixed in lattice</text>
      </g>
      <!-- Molten / Solution State (Conducts) -->
      <g transform="translate(260, 45)">
        <rect x="0" y="30" width="100" height="70" rx="4" fill="#bae6fd" stroke="#0284c7"/>
        <!-- Bulb ON -->
        <circle cx="50" cy="0" r="12" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
        <text x="50" y="4" text-anchor="middle" font-size="12">💡</text>
        <text x="50" y="18" text-anchor="middle" font-size="9" font-weight="800" fill="#ca8a04">GLOWS BRIGHTLY</text>
        <!-- Free mobile ions -->
        <circle cx="30" cy="50" r="6" fill="#2563eb"/><text x="30" y="53" text-anchor="middle" font-size="7" fill="#ffffff">+</text>
        <circle cx="70" cy="65" r="6" fill="#dc2626"/><text x="70" y="68" text-anchor="middle" font-size="7" fill="#ffffff">−</text>
        <circle cx="45" cy="80" r="6" fill="#2563eb"/><text x="45" y="83" text-anchor="middle" font-size="7" fill="#ffffff">+</text>
        <text x="50" y="115" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">Molten / Aqueous</text>
        <text x="50" y="128" text-anchor="middle" font-size="8.5" font-weight="700" fill="#16a34a">Free mobile ions!</text>
      </g>
      <text x="230" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">Electrostatic bonds break upon melting or dissolution, freeing ions to carry current</text>
    </svg>`;
  }

  // Solubility comparison: Ionic vs Covalent
  if (t.includes('solubility') || text.includes('water') && text.includes('organic solvent')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Solubility: Ionic Compounds vs Covalent Compounds</text>
      <g transform="translate(25, 45)">
        <rect x="0" y="0" width="410" height="26" fill="#e2e8f0" rx="3"/>
        <text x="70" y="17" font-size="11" font-weight="700" fill="#334155">Compound Type</text>
        <text x="200" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#0284c7">In Water (Polar)</text>
        <text x="320" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">In Organic Solvents</text>
        
        <rect x="0" y="28" width="410" height="32" fill="#ffffff"/>
        <text x="15" y="49" font-size="10.5" font-weight="700" fill="#1e40af">Ionic (e.g. NaCl)</text>
        <text x="200" y="49" text-anchor="middle" font-size="10.5" font-weight="700" fill="#16a34a">SOLUBLE (Dissolves)</text>
        <text x="320" y="49" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">INSOLUBLE</text>
        
        <rect x="0" y="62" width="410" height="32" fill="#f8fafc"/>
        <text x="15" y="83" font-size="10.5" font-weight="700" fill="#9a3412">Covalent (e.g. CCl₄)</text>
        <text x="200" y="83" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">INSOLUBLE</text>
        <text x="320" y="83" text-anchor="middle" font-size="10.5" font-weight="700" fill="#16a34a">SOLUBLE (Dissolves)</text>
      </g>
      <text x="230" y="160" text-anchor="middle" font-size="10.5" font-weight="600" fill="#1e293b">'Like dissolves like': Water's high dielectric constant weakens electrostatic attractions</text>
    </svg>`;
  }

  // Fallback for bonding
  return `<svg viewBox="0 0 460 180" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Chemical Bonding: ${q.title || 'Bonding Investigation'}</text>
    <rect x="40" y="45" width="180" height="90" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
    <text x="130" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">Ionic Bonding</text>
    <text x="60" y="90" font-size="9" fill="#334155">• Transfer of electrons</text>
    <text x="60" y="105" font-size="9" fill="#334155">• High MP &amp; BP</text>
    <text x="60" y="120" font-size="9" fill="#334155">• Conducts in molten state</text>
    
    <rect x="240" y="45" width="180" height="90" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
    <text x="330" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Covalent Bonding</text>
    <text x="260" y="90" font-size="9" fill="#78350f">• Sharing of electrons</text>
    <text x="260" y="105" font-size="9" fill="#78350f">• Low MP &amp; BP</text>
    <text x="260" y="120" font-size="9" fill="#78350f">• Non-conducting molecules</text>
    <text x="230" y="160" text-anchor="middle" font-size="10" font-weight="600" fill="#64748b">Verified ICSE Class 10 Chemical Bonding Model</text>
  </svg>`;
}

let cbUpdated = 0;
cbBank.forEach(q => {
  const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
  if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
    q.diagramSvg = getBondingSvg(q);
    cbUpdated++;
  }
});
fs.writeFileSync(cbPath, JSON.stringify(cbBank, null, 2), 'utf8');
console.log(`Updated ${cbUpdated} SVGs in chemistry_chemical_bonding.json!`);

// 2. CHEMISTRY ELECTROLYSIS
const elPath = path.join(__dirname, '..', 'questionBank', 'chemistry_electrolysis.json');
const elBank = JSON.parse(fs.readFileSync(elPath, 'utf8'));

function getElectrolysisSvg(q) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // Preferential discharge
  if (t.includes('preferential discharge') || t.includes('anode') || text.includes('chlorine is produced')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Factors Influencing Preferential Discharge of Ions</text>
      <!-- 3 Factor Boxes -->
      <g transform="translate(30, 45)">
        <rect x="0" y="0" width="120" height="90" rx="5" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="60" y="25" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e40af">1. Electrochemical</text>
        <text x="60" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">Series Position</text>
        <text x="60" y="65" text-anchor="middle" font-size="8.5" fill="#334155">Lower ion in series</text>
        <text x="60" y="78" text-anchor="middle" font-size="8.5" font-weight="700" fill="#16a34a">discharges first</text>
      </g>
      <g transform="translate(170, 45)">
        <rect x="0" y="0" width="120" height="90" rx="5" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="60" y="25" text-anchor="middle" font-size="10.5" font-weight="700" fill="#92400e">2. Relative</text>
        <text x="60" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">Concentration</text>
        <text x="60" y="65" text-anchor="middle" font-size="8.5" fill="#78350f">Higher conc. can</text>
        <text x="60" y="78" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">override series order</text>
      </g>
      <g transform="translate(310, 45)">
        <rect x="0" y="0" width="120" height="90" rx="5" fill="#f0fdf4" stroke="#16a34a"/>
        <text x="60" y="25" text-anchor="middle" font-size="10.5" font-weight="700" fill="#166534">3. Nature of</text>
        <text x="60" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#166534">Electrodes</text>
        <text x="60" y="65" text-anchor="middle" font-size="8.5" fill="#14532d">Active vs Inert</text>
        <text x="60" y="78" text-anchor="middle" font-size="8.5" font-weight="700" fill="#2563eb">(Cu anode dissolves)</text>
      </g>
      <text x="230" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">In conc. NaCl (brine), high Cl⁻ concentration causes Cl₂ discharge over OH⁻ at anode</text>
    </svg>`;
  }

  // Active vs Inert electrodes
  return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Electrolysis of CuSO₄: Platinum vs Copper Electrodes</text>
    <!-- Platinum Cell (Inert) -->
    <g transform="translate(40, 45)">
      <rect x="0" y="15" width="150" height="90" rx="3" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <rect x="0" y="35" width="150" height="70" fill="#bae6fd"/>
      <!-- Pt Electrodes -->
      <rect x="30" y="5" width="8" height="75" fill="#64748b"/>
      <rect x="110" y="5" width="8" height="75" fill="#64748b"/>
      <text x="75" y="125" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">Cell P: Platinum (Inert)</text>
      <text x="75" y="138" text-anchor="middle" font-size="8.5" fill="#64748b">Anode: O₂ gas evolved</text>
    </g>
    <!-- Copper Cell (Active) -->
    <g transform="translate(260, 45)">
      <rect x="0" y="15" width="150" height="90" rx="3" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <rect x="0" y="35" width="150" height="70" fill="#bae6fd"/>
      <!-- Cu Electrodes -->
      <rect x="30" y="5" width="12" height="75" fill="#ea580c"/>
      <rect x="110" y="5" width="8" height="75" fill="#ea580c"/>
      <text x="75" y="125" text-anchor="middle" font-size="10" font-weight="700" fill="#9a3412">Cell Q: Copper (Active)</text>
      <text x="75" y="138" text-anchor="middle" font-size="8.5" fill="#64748b">Anode: Cu dissolves</text>
    </g>
    <text x="230" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">In Cell Q, Cu anode loses mass (Cu → Cu²⁺ + 2e⁻) while in Cell P, OH⁻ discharges O₂ gas</text>
  </svg>`;
}

let elUpdated = 0;
elBank.forEach(q => {
  const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
  if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
    q.diagramSvg = getElectrolysisSvg(q);
    elUpdated++;
  }
});
fs.writeFileSync(elPath, JSON.stringify(elBank, null, 2), 'utf8');
console.log(`Updated ${elUpdated} SVGs in chemistry_electrolysis.json!`);

// 3. CHEMISTRY MOLE CONCEPT
const mcPath = path.join(__dirname, '..', 'questionBank', 'chemistry_mole_concept.json');
const mcBank = JSON.parse(fs.readFileSync(mcPath, 'utf8'));

function getMoleConceptSvg(q) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // Volume-mole graph
  if (t.includes('graph') || text.includes('recorded volume') || text.includes('22.4 l')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Molar Gas Volume at STP: V = n × 22.4 L</text>
      <!-- Axes -->
      <line x1="60" y1="160" x2="400" y2="160" stroke="#64748b" stroke-width="1.5"/>
      <line x1="60" y1="160" x2="60" y2="35" stroke="#64748b" stroke-width="1.5"/>
      <text x="230" y="185" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">Moles of Gas (mol) →</text>
      <text x="25" y="30" font-size="10" font-weight="600" fill="#475569">Vol (L)</text>
      <!-- True Linear Line -->
      <line x1="60" y1="160" x2="380" y2="40" stroke="#3b82f6" stroke-width="2.5"/>
      <!-- Points: A(0.25, 5.6), B(0.50, 11.2), C(0.75, 16.8), D(1.00, 22.4) -->
      <circle cx="140" cy="130" r="4" fill="#16a34a"/><text x="140" y="122" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">A (5.6L)</text>
      <circle cx="220" cy="100" r="4" fill="#16a34a"/><text x="220" y="92" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">B (11.2L)</text>
      <circle cx="300" cy="70" r="4" fill="#16a34a"/><text x="300" y="62" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">C (16.8L)</text>
      <circle cx="380" cy="40" r="4" fill="#16a34a"/><text x="380" y="32" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">True (22.4L)</text>
      <!-- Erroneous Point D (20.4L) -->
      <circle cx="380" cy="52" r="5" fill="#dc2626"/><text x="380" y="65" text-anchor="middle" font-size="9" font-weight="800" fill="#dc2626">D (20.4L Error!)</text>
    </svg>`;
  }

  // Avogadro gas jars
  return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Avogadro's Law: Equal Volumes at Identical T &amp; P</text>
    <!-- Jar 1: O2 -->
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="55" height="85" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="27" y="45" text-anchor="middle" font-size="14" font-weight="800" fill="#1e40af">O₂</text>
      <text x="27" y="65" text-anchor="middle" font-size="9" fill="#3b82f6">N molecules</text>
      <text x="27" y="105" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">2N atoms</text>
    </g>
    <!-- Jar 2: N2 -->
    <g transform="translate(170, 45)">
      <rect x="0" y="0" width="55" height="85" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="27" y="45" text-anchor="middle" font-size="14" font-weight="800" fill="#166534">N₂</text>
      <text x="27" y="65" text-anchor="middle" font-size="9" fill="#16a34a">N molecules</text>
      <text x="27" y="105" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">2N atoms</text>
    </g>
    <!-- Jar 3: CO2 -->
    <g transform="translate(280, 45)">
      <rect x="0" y="0" width="55" height="85" rx="4" fill="#fef2f2" stroke="#dc2626" stroke-width="1.8"/>
      <text x="27" y="45" text-anchor="middle" font-size="14" font-weight="800" fill="#991b1b">CO₂</text>
      <text x="27" y="65" text-anchor="middle" font-size="9" fill="#dc2626">N molecules</text>
      <text x="27" y="105" text-anchor="middle" font-size="9" font-weight="800" fill="#dc2626">3N atoms</text>
    </g>
    <text x="230" y="170" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Equal volumes contain equal numbers of MOLECULES, but atom ratio depends on atomicity</text>
  </svg>`;
}

let mcUpdated = 0;
mcBank.forEach(q => {
  const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
  if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
    q.diagramSvg = getMoleConceptSvg(q);
    mcUpdated++;
  }
});
fs.writeFileSync(mcPath, JSON.stringify(mcBank, null, 2), 'utf8');
console.log(`Updated ${mcUpdated} SVGs in chemistry_mole_concept.json!`);
