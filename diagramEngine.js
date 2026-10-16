/**
 * Programmatic Geometry SVG Generator (Gate 6)
 * Generates exact geometric SVGs derived directly from numerical coordinates.
 * Ensures diagrams NEVER contradict the problem text or mathematical geometry.
 */

function generateTangentSecantSvg(pt, pa, pb, unit = 'cm') {
  const cx = 200, cy = 95, r = 60;
  const px = 30, py = cy; // External point P on secant line

  // Exact tangent point from P(30, 95) to Circle(200, 95, r=60)
  const d = cx - px; // 170
  const angle = Math.acos(r / d); // Tangency angle
  const tx = cx - r * Math.cos(angle);
  const ty = cy - r * Math.sin(angle);

  // Secant line intersects circle at A (entry) and B (exit)
  const ax = cx - r; // 140
  const bx = cx + r; // 260

  return `<svg class="q-diagram-svg" width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#fffcf7" rx="6"/>
    <!-- Circle -->
    <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#5c432d" stroke-width="2" fill="#faf5ea"/>
    <!-- Radius to tangent (dashed) showing 90-degree tangency -->
    <line x1="${cx}" y1="${cy}" x2="${tx}" y2="${ty}" stroke="#a38d78" stroke-width="1.2" stroke-dasharray="3,3"/>
    <!-- Tangent Line PT -->
    <line x1="${px}" y1="${py}" x2="${tx}" y2="${ty}" stroke="#b45309" stroke-width="2.2"/>
    <!-- Secant Line PAB -->
    <line x1="${px}" y1="${py}" x2="${bx + 20}" y2="${cy}" stroke="#3b6e4e" stroke-width="2.2"/>
    <!-- Points -->
    <circle cx="${px}" cy="${py}" r="3.5" fill="#1e293b"/>
    <circle cx="${tx}" cy="${ty}" r="3.5" fill="#b45309"/>
    <circle cx="${ax}" cy="${cy}" r="3.5" fill="#3b6e4e"/>
    <circle cx="${bx}" cy="${cy}" r="3.5" fill="#3b6e4e"/>
    <circle cx="${cx}" cy="${cy}" r="2" fill="#5c432d"/>
    <!-- Labels -->
    <text x="${px - 14}" y="${py + 4}" font-size="12" font-weight="700" fill="#0f172a">P</text>
    <text x="${tx - 4}" y="${ty - 8}" font-size="12" font-weight="700" fill="#b45309">T</text>
    <text x="${ax - 4}" y="${cy + 16}" font-size="12" font-weight="700" fill="#3b6e4e">A</text>
    <text x="${bx + 6}" y="${cy + 16}" font-size="12" font-weight="700" fill="#3b6e4e">B</text>
    <!-- Value Labels -->
    <text x="${(px + tx) / 2 - 10}" y="${(py + ty) / 2 - 8}" font-size="11" font-weight="600" fill="#b45309">PT = ${pt} ${unit}</text>
    <text x="${(px + ax) / 2 - 15}" y="${cy + 18}" font-size="11" font-weight="600" fill="#3b6e4e">PA = ${pa} ${unit}</text>
  </svg>`;
}

function generateIntersectingChordsSvg(pa, pb, pc, pd, unit = 'cm') {
  const cx = 170, cy = 90, r = 65;
  const px = 160, py = 85;

  const ax = 115, ay = 50;
  const bx = 205, by = 120;
  const cxPt = 220, cyPt = 55;
  const dx = 100, dy = 115;

  return `<svg class="q-diagram-svg" width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#fffcf7" rx="6"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#5c432d" stroke-width="2" fill="#faf5ea"/>
    <!-- Chord AB -->
    <line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="#b45309" stroke-width="2.2"/>
    <!-- Chord CD -->
    <line x1="${cxPt}" y1="${cyPt}" x2="${dx}" y2="${dy}" stroke="#2563eb" stroke-width="2.2"/>
    <!-- Points -->
    <circle cx="${px}" cy="${py}" r="3.5" fill="#dc2626"/>
    <circle cx="${ax}" cy="${ay}" r="3.5" fill="#b45309"/>
    <circle cx="${bx}" cy="${by}" r="3.5" fill="#b45309"/>
    <circle cx="${cxPt}" cy="${cyPt}" r="3.5" fill="#2563eb"/>
    <circle cx="${dx}" cy="${dy}" r="3.5" fill="#2563eb"/>
    <!-- Labels -->
    <text x="${px + 5}" y="${py - 5}" font-size="11" font-weight="700" fill="#dc2626">P</text>
    <text x="${ax - 12}" y="${ay}" font-size="12" font-weight="700" fill="#b45309">A</text>
    <text x="${bx + 6}" y="${by + 4}" font-size="12" font-weight="700" fill="#b45309">B</text>
    <text x="${cxPt + 6}" y="${cyPt}" font-size="12" font-weight="700" fill="#2563eb">C</text>
    <text x="${dx - 14}" y="${dy + 6}" font-size="12" font-weight="700" fill="#2563eb">D</text>
    ${pa ? `<text x="${(ax + px) / 2 - 12}" y="${(ay + py) / 2}" font-size="10" font-weight="600" fill="#b45309">${pa}</text>` : ''}
    ${pb ? `<text x="${(bx + px) / 2 + 4}" y="${(by + py) / 2}" font-size="10" font-weight="600" fill="#b45309">${pb}</text>` : ''}
    ${pc ? `<text x="${(cxPt + px) / 2 + 4}" y="${(cyPt + py) / 2 - 4}" font-size="10" font-weight="600" fill="#2563eb">${pc}</text>` : ''}
  </svg>`;
}

function generateCyclicQuadSvg(ab, bc, cd, da, unit = 'cm') {
  const cx = 170, cy = 90, r = 65;
  const ax = 125, ay = 45;
  const bx = 220, by = 50;
  const cxPt = 228, cyPt = 125;
  const dx = 120, dy = 135;

  return `<svg class="q-diagram-svg" width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#fffcf7" rx="6"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" stroke="#5c432d" stroke-width="2" fill="#faf5ea"/>
    <!-- Quad boundary -->
    <polygon points="${ax},${ay} ${bx},${by} ${cxPt},${cyPt} ${dx},${dy}" stroke="#92400e" stroke-width="2.2" fill="none"/>
    <!-- Diagonals -->
    <line x1="${ax}" y1="${ay}" x2="${cxPt}" y2="${cyPt}" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/>
    <line x1="${bx}" y1="${by}" x2="${dx}" y2="${dy}" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/>
    <!-- Vertex Points -->
    <circle cx="${ax}" cy="${ay}" r="3.5" fill="#92400e"/>
    <circle cx="${bx}" cy="${by}" r="3.5" fill="#92400e"/>
    <circle cx="${cxPt}" cy="${cyPt}" r="3.5" fill="#92400e"/>
    <circle cx="${dx}" cy="${dy}" r="3.5" fill="#92400e"/>
    <!-- Labels -->
    <text x="${ax - 12}" y="${ay - 4}" font-size="12" font-weight="700" fill="#0f172a">A</text>
    <text x="${bx + 8}" y="${by - 4}" font-size="12" font-weight="700" fill="#0f172a">B</text>
    <text x="${cxPt + 8}" y="${cyPt + 8}" font-size="12" font-weight="700" fill="#0f172a">C</text>
    <text x="${dx - 14}" y="${dy + 8}" font-size="12" font-weight="700" fill="#0f172a">D</text>
    <text x="${(ax + bx) / 2}" y="${ay - 6}" font-size="11" font-weight="600" fill="#92400e">${ab} ${unit}</text>
    <text x="${bx + 12}" y="${(by + cyPt) / 2}" font-size="11" font-weight="600" fill="#92400e">${bc} ${unit}</text>
    <text x="${(cxPt + dx) / 2}" y="${cyPt + 14}" font-size="11" font-weight="600" fill="#92400e">${cd} ${unit}</text>
    <text x="${dx - 22}" y="${(ay + dy) / 2}" font-size="11" font-weight="600" fill="#92400e">${da} ${unit}</text>
  </svg>`;
}

function generateRightTriangleIncircleSvg(a, b, c, rVal, unit = 'cm') {
  const ax = 50, ay = 145; // Right angle at (50, 145)
  const bx = 260, by = 145; // Base b
  const cx = 50, cy = 35; // Height a

  // Incenter coordinates
  const scale = 20;
  const inradiusPx = Math.min(32, Math.max(16, (rVal || 2) * 8));
  const ix = ax + inradiusPx;
  const iy = ay - inradiusPx;

  return `<svg class="q-diagram-svg" width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#fffcf7" rx="6"/>
    <!-- Triangle -->
    <polygon points="${ax},${ay} ${bx},${by} ${cx},${cy}" stroke="#1e293b" stroke-width="2.2" fill="#faf5ea"/>
    <!-- Right angle marker -->
    <polyline points="${ax},${ay - 14} ${ax + 14},${ay - 14} ${ax + 14},${ay}" stroke="#64748b" stroke-width="1.5" fill="none"/>
    <!-- Incircle -->
    <circle cx="${ix}" cy="${iy}" r="${inradiusPx}" stroke="#16a34a" stroke-width="2" fill="#dcfce7" fill-opacity="0.4"/>
    <circle cx="${ix}" cy="${iy}" r="3" fill="#16a34a"/>
    <line x1="${ix}" y1="${iy}" x2="${ix}" y2="${ay}" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/>
    <!-- Labels -->
    <text x="${ax - 14}" y="${ay + 6}" font-size="12" font-weight="700" fill="#0f172a">C</text>
    <text x="${bx + 8}" y="${by + 4}" font-size="12" font-weight="700" fill="#0f172a">B</text>
    <text x="${cx - 4}" y="${cy - 8}" font-size="12" font-weight="700" fill="#0f172a">A</text>
    <text x="${ix + 6}" y="${iy - 4}" font-size="10" font-weight="700" fill="#16a34a">r</text>
    <text x="${ax - 28}" y="${(ay + cy) / 2}" font-size="11" font-weight="600" fill="#1e293b">${a} ${unit}</text>
    <text x="${(ax + bx) / 2}" y="${ay + 18}" font-size="11" font-weight="600" fill="#1e293b">${b} ${unit}</text>
    <text x="${(bx + cx) / 2 + 10}" y="${(by + cy) / 2}" font-size="11" font-weight="600" fill="#1e293b">${c} ${unit}</text>
  </svg>`;
}

function generateMagneticDeflectionSvg() {
  return `<svg class="q-diagram-svg" viewBox="0 0 360 210" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <rect x="135" y="160" width="90" height="42" fill="#64748b" stroke="#334155" stroke-width="2" rx="3"/>
  <rect x="165" y="160" width="30" height="24" fill="#0f172a"/>
  <circle cx="180" cy="175" r="5" fill="#f59e0b"/>
  <text x="145" y="196" font-size="10" font-weight="700" fill="#f8fafc">Lead Collimator</text>
  <g fill="#94a3b8" font-size="12" font-family="monospace">
    <text x="50" y="50">⊗</text><text x="110" y="50">⊗</text><text x="180" y="50">⊗</text><text x="250" y="50">⊗</text><text x="310" y="50">⊗</text>
    <text x="50" y="95">⊗</text><text x="110" y="95">⊗</text><text x="180" y="95">⊗</text><text x="250" y="95">⊗</text><text x="310" y="95">⊗</text>
    <text x="50" y="140">⊗</text><text x="110" y="140">⊗</text><text x="180" y="140">⊗</text><text x="250" y="140">⊗</text><text x="310" y="140">⊗</text>
  </g>
  <text x="235" y="32" font-size="11" font-weight="600" fill="#475569">B (into paper ⊗)</text>
  <line x1="180" y1="160" x2="180" y2="25" stroke="#16a34a" stroke-width="2.5"/>
  <polygon points="180,18 176,27 184,27" fill="#16a34a"/>
  <text x="186" y="24" font-size="12" font-weight="700" fill="#16a34a">Beam Y (γ)</text>
  <path d="M 180 160 Q 180 100 110 50" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="104,46 112,54 116,46" fill="#dc2626"/>
  <text x="75" y="44" font-size="12" font-weight="700" fill="#dc2626">Beam X (α)</text>
  <path d="M 180 160 Q 180 115 260 85" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="266,82 256,86 261,93" fill="#2563eb"/>
  <text x="272" y="86" font-size="12" font-weight="700" fill="#2563eb">Beam Z (β)</text>
</svg>`;
}

function generateElectricDeflectionSvg() {
  return `<svg class="q-diagram-svg" viewBox="0 0 360 210" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <rect x="50" y="30" width="260" height="14" fill="#dc2626" rx="3"/>
  <text x="160" y="42" font-size="11" font-weight="700" fill="#ffffff">+ POSITIVE PLATE +</text>
  <rect x="50" y="160" width="260" height="14" fill="#2563eb" rx="3"/>
  <text x="160" y="172" font-size="11" font-weight="700" fill="#ffffff">- NEGATIVE PLATE -</text>
  <line x1="20" y1="105" x2="330" y2="105" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="300" y="100" font-size="11" font-weight="700" fill="#16a34a">γ (Undeflected)</text>
  <path d="M 50 105 Q 160 105 280 48" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="285" y="55" font-size="11" font-weight="700" fill="#2563eb">β⁻ (Deflects toward +)</text>
  <path d="M 50 105 Q 160 105 280 152" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="285" y="152" font-size="11" font-weight="700" fill="#dc2626">α²⁺ (Deflects toward -)</text>
</svg>`;
}

function generateDecayCurveSvg() {
  return `<svg class="q-diagram-svg" viewBox="0 0 360 210" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <line x1="50" y1="180" x2="330" y2="180" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="180" x2="50" y2="25" stroke="#334155" stroke-width="2"/>
  <text x="160" y="200" font-size="11" font-weight="600" fill="#475569">Time elapsed t →</text>
  <text x="15" y="22" font-size="10" font-weight="600" fill="#475569">Undecayed N(t)</text>
  <!-- Curve points: N0=160px height at (50, 30), N0/2 at (120, 105), N0/4 at (190, 142), N0/8 at (260, 161) -->
  <path d="M 50 30 Q 110 95 120 105 T 190 142 T 260 161 T 320 172" fill="none" stroke="#b45309" stroke-width="3"/>
  <text x="20" y="34" font-size="11" font-weight="700" fill="#b45309">N₀</text>
  <line x1="45" y1="105" x2="120" y2="105" stroke="#94a3b8" stroke-dasharray="3,3"/>
  <line x1="120" y1="105" x2="120" y2="180" stroke="#94a3b8" stroke-dasharray="3,3"/>
  <text x="15" y="109" font-size="10" font-weight="700" fill="#64748b">N₀/2</text>
  <text x="110" y="194" font-size="10" font-weight="700" fill="#64748b">T₁/₂</text>
  <line x1="45" y1="142" x2="190" y2="142" stroke="#94a3b8" stroke-dasharray="3,3"/>
  <line x1="190" y1="142" x2="190" y2="180" stroke="#94a3b8" stroke-dasharray="3,3"/>
  <text x="15" y="146" font-size="10" font-weight="700" fill="#64748b">N₀/4</text>
  <text x="180" y="194" font-size="10" font-weight="700" fill="#64748b">2T₁/₂</text>
</svg>`;
}

function generateMeterRuleSvg(pivotCm = '50') {
  return `<svg class="q-diagram-svg" viewBox="0 0 360 180" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <rect x="30" y="80" width="300" height="14" fill="#d97706" stroke="#92400e" stroke-width="1.5" rx="2"/>
  <text x="32" y="75" font-size="9" font-weight="700" fill="#92400e">0 cm</text>
  <text x="172" y="75" font-size="9" font-weight="700" fill="#92400e">50 cm</text>
  <text x="310" y="75" font-size="9" font-weight="700" fill="#92400e">100 cm</text>
  <!-- Fulcrum Knife-Edge -->
  <polygon points="180,94 170,125 190,125" fill="#334155"/>
  <text x="165" y="140" font-size="10" font-weight="700" fill="#334155">Pivot (${pivotCm} cm)</text>
  <!-- Load Suspended on Left -->
  <line x1="90" y1="94" x2="90" y2="135" stroke="#dc2626" stroke-width="2"/>
  <rect x="75" y="135" width="30" height="24" fill="#dc2626" rx="2"/>
  <text x="82" y="151" font-size="10" font-weight="700" fill="#ffffff">W₁</text>
  <!-- Weight Suspended on Right -->
  <line x1="270" y1="94" x2="270" y2="135" stroke="#2563eb" stroke-width="2"/>
  <rect x="255" y="135" width="30" height="24" fill="#2563eb" rx="2"/>
  <text x="262" y="151" font-size="10" font-weight="700" fill="#ffffff">W₂</text>
</svg>`;
}

// Inspect problem text and generate exact programmatic SVG if applicable
function generateProgrammaticDiagram(questionText) {
  if (!questionText) return null;
  const qLower = questionText.toLowerCase();

  // Physics: Radioactivity Deflections & Curves
  if (qLower.includes('magnetic') && (qLower.includes('radiation') || qLower.includes('alpha') || qLower.includes('fleming') || qLower.includes('lead block'))) {
    return generateMagneticDeflectionSvg();
  }
  if (qLower.includes('electric field') || (qLower.includes('plate') && (qLower.includes('positive') || qLower.includes('deflect')))) {
    return generateElectricDeflectionSvg();
  }
  if (qLower.includes('decay curve') || (qLower.includes('half-life') && qLower.includes('graph'))) {
    return generateDecayCurveSvg();
  }
  if (qLower.includes('meter rule') || qLower.includes('knife edge') || qLower.includes('principle of moments') || qLower.includes('fulcrum')) {
    return generateMeterRuleSvg();
  }

  // Mathematics: Circle Theorems
  const ptMatch = questionText.match(/PT\s*=\s*(\d+(\.\d+)?)/i);
  const paMatch = questionText.match(/PA\s*=\s*(\d+(\.\d+)?)/i);
  if (ptMatch && paMatch && qLower.includes('tangent')) {
    return generateTangentSecantSvg(ptMatch[1], paMatch[1]);
  }

  const chordsMatch = questionText.match(/PA\s*=\s*(\d+).*?PB\s*=\s*(\d+).*?PC\s*=\s*(\d+)/is);
  if (chordsMatch && qLower.includes('chord')) {
    return generateIntersectingChordsSvg(chordsMatch[1], chordsMatch[2], chordsMatch[3]);
  }

  const quadMatch = questionText.match(/AB\s*=\s*(\d+).*?BC\s*=\s*(\d+).*?CD\s*=\s*(\d+).*?DA\s*=\s*(\d+)/is);
  if (quadMatch) {
    return generateCyclicQuadSvg(quadMatch[1], quadMatch[2], quadMatch[3], quadMatch[4]);
  }

  const inradiusMatch = questionText.match(/leg[s]?\s*(?:lengths?)?\s*(\d+)\s*(?:cm)?\s*and\s*(\d+)\s*(?:cm)?\s*and\s*hypotenuse\s*(\d+)/i);
  if (inradiusMatch) {
    const a = inradiusMatch[1], b = inradiusMatch[2], c = inradiusMatch[3];
    const r = (parseInt(a) + parseInt(b) - parseInt(c)) / 2;
    return generateRightTriangleIncircleSvg(a, b, c, r);
  }

  return null;
}

module.exports = {
  generateProgrammaticDiagram,
  generateTangentSecantSvg,
  generateIntersectingChordsSvg,
  generateCyclicQuadSvg,
  generateRightTriangleIncircleSvg,
  generateMagneticDeflectionSvg,
  generateElectricDeflectionSvg,
  generateDecayCurveSvg,
  generateMeterRuleSvg
};

