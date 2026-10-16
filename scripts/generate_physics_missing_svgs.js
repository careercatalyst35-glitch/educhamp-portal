const fs = require('fs');
const path = require('path');

const BANK_DIR = path.join(__dirname, '..', 'questionBank');

function getPhysicsSvg(file, q) {
  const t = (q.title || '').toLowerCase();
  const text = (q.question || '').toLowerCase();

  // Refraction through a lens
  if (file.includes('lens')) {
    if (t.includes('convex') || text.includes('convex') || text.includes('converging')) {
      return `<svg viewBox="0 0 480 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
        <text x="240" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Ray Diagram: Convex Lens (Real &amp; Inverted Image)</text>
        <!-- Principal Axis -->
        <line x1="20" y1="110" x2="460" y2="110" stroke="#64748b" stroke-width="1.5"/>
        <!-- Convex Lens -->
        <ellipse cx="220" cy="110" rx="8" ry="70" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
        <text x="220" y="35" text-anchor="middle" font-size="10" font-weight="700" fill="#0284c7">Convex Lens</text>
        <!-- Optical Centre O -->
        <circle cx="220" cy="110" r="2.5" fill="#0f172a"/>
        <text x="215" y="125" font-size="10" font-weight="700">O</text>
        <!-- Focal Points: F1(150), 2F1(80), F2(290), 2F2(360) -->
        <circle cx="150" cy="110" r="2.5" fill="#334155"/><text x="150" y="125" text-anchor="middle" font-size="9.5" font-weight="700">F₁</text>
        <circle cx="80" cy="110" r="2.5" fill="#334155"/><text x="80" y="125" text-anchor="middle" font-size="9.5" font-weight="700">2F₁</text>
        <circle cx="290" cy="110" r="2.5" fill="#334155"/><text x="290" y="125" text-anchor="middle" font-size="9.5" font-weight="700">F₂</text>
        <circle cx="360" cy="110" r="2.5" fill="#334155"/><text x="360" y="125" text-anchor="middle" font-size="9.5" font-weight="700">2F₂</text>
        <!-- Object AB at 2F1 -->
        <line x1="80" y1="110" x2="80" y2="60" stroke="#dc2626" stroke-width="3"/>
        <polygon points="80,55 76,64 84,64" fill="#dc2626"/>
        <text x="65" y="55" font-size="10" font-weight="800" fill="#dc2626">Object</text>
        <!-- Ray 1: Parallel to axis -> Passes through F2 -->
        <line x1="80" y1="60" x2="220" y2="60" stroke="#dc2626" stroke-width="1.8"/>
        <line x1="220" y1="60" x2="360" y2="160" stroke="#dc2626" stroke-width="1.8"/>
        <!-- Ray 2: Through Optical Centre O undeviated -->
        <line x1="80" y1="60" x2="360" y2="160" stroke="#16a34a" stroke-width="1.8"/>
        <!-- Inverted Image A'B' at 2F2 -->
        <line x1="360" y1="110" x2="360" y2="160" stroke="#2563eb" stroke-width="3"/>
        <polygon points="360,165 356,156 364,156" fill="#2563eb"/>
        <text x="375" y="165" font-size="10" font-weight="800" fill="#2563eb">Image (Real, Inverted)</text>
        <text x="240" y="190" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Object at 2F₁ produces real, inverted image of same size at 2F₂ (Magnification m = −1)</text>
      </svg>`;
    }
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Optics: Refraction Through Lens (${q.title || 'Lens Properties'})</text>
      <line x1="20" y1="100" x2="440" y2="100" stroke="#64748b" stroke-width="1.5"/>
      <ellipse cx="230" cy="100" rx="8" ry="60" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <circle cx="160" cy="100" r="2.5" fill="#334155"/><text x="160" y="115" text-anchor="middle" font-size="9">F₁</text>
      <circle cx="300" cy="100" r="2.5" fill="#334155"/><text x="300" y="115" text-anchor="middle" font-size="9">F₂</text>
      <rect x="50" y="130" width="360" height="35" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="230" y="152" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Lens Formula: 1/f = 1/v − 1/u | Power P = 1/f(m) dioptres</text>
    </svg>`;
  }

  // Current electricity
  if (file.includes('current_electricity')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Circuit: Cell with Internal Resistance &amp; Resistor Network</text>
      <!-- Circuit loop -->
      <rect x="60" y="50" width="340" height="90" fill="none" stroke="#334155" stroke-width="2"/>
      <!-- Cell + internal resistance on top branch -->
      <rect x="130" y="42" width="70" height="18" fill="#eff6ff" stroke="#3b82f6" stroke-dasharray="3,2"/>
      <line x1="150" y1="44" x2="150" y2="58" stroke="#16a34a" stroke-width="3"/>
      <line x1="158" y1="47" x2="158" y2="55" stroke="#dc2626" stroke-width="2"/>
      <text x="154" y="38" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">emf ε</text>
      <!-- Resistor r -->
      <rect x="175" y="46" width="18" height="10" fill="#fed7aa" stroke="#ea580c"/>
      <text x="184" y="38" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c2410c">r</text>
      <!-- External Resistor R on bottom branch -->
      <rect x="200" y="135" width="60" height="12" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <text x="230" y="162" text-anchor="middle" font-size="10.5" font-weight="800" fill="#9a3412">Load Resistor R</text>
      <!-- Current arrow -->
      <text x="300" y="46" font-size="10" font-weight="700" fill="#2563eb">I →</text>
      <text x="230" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Current I = ε / (R + r) | Terminal Voltage V = ε − Ir</text>
    </svg>`;
  }

  // Electromagnetism
  if (file.includes('electromagnetism')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Electromagnetism: Transformer Structure &amp; Induction</text>
      <!-- Laminated iron core -->
      <rect x="120" y="50" width="220" height="100" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
      <rect x="165" y="75" width="130" height="50" rx="3" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <!-- Primary Coil Left -->
      <g stroke="#ea580c" stroke-width="3">
        <line x1="110" y1="65" x2="130" y2="65"/><line x1="110" y1="80" x2="130" y2="80"/>
        <line x1="110" y1="95" x2="130" y2="95"/><line x1="110" y1="110" x2="130" y2="110"/>
        <line x1="110" y1="125" x2="130" y2="125"/>
      </g>
      <text x="80" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#c2410c">Primary (Nₚ)</text>
      <!-- Secondary Coil Right -->
      <g stroke="#2563eb" stroke-width="3">
        <line x1="330" y1="65" x2="350" y2="65"/><line x1="330" y1="80" x2="350" y2="80"/>
        <line x1="330" y1="95" x2="350" y2="95"/><line x1="330" y1="110" x2="350" y2="110"/>
        <line x1="330" y1="125" x2="350" y2="125"/>
      </g>
      <text x="385" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">Secondary (Nₛ)</text>
      <text x="230" y="103" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">Laminated Core</text>
      <text x="230" y="175" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Turns Ratio: Vₛ / Vₚ = Nₛ / Nₚ = Iₚ / Iₛ (Conservation of Energy)</text>
    </svg>`;
  }

  // Household circuits
  if (file.includes('household')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Household Circuits: Three-Pin Plug &amp; Safety Wiring</text>
      <!-- 3 Wires -->
      <line x1="50" y1="60" x2="410" y2="60" stroke="#16a34a" stroke-width="3"/>
      <text x="40" y="64" text-anchor="end" font-size="10" font-weight="700" fill="#16a34a">Earth (E)</text>
      <line x1="50" y1="95" x2="410" y2="95" stroke="#dc2626" stroke-width="3"/>
      <text x="40" y="99" text-anchor="end" font-size="10" font-weight="700" fill="#dc2626">Live (L)</text>
      <line x1="50" y1="130" x2="410" y2="130" stroke="#2563eb" stroke-width="3"/>
      <text x="40" y="134" text-anchor="end" font-size="10" font-weight="700" fill="#2563eb">Neutral (N)</text>
      <!-- Switch and Fuse placed in LIVE wire -->
      <rect x="180" y="87" width="35" height="16" rx="2" fill="#fef08a" stroke="#ca8a04"/>
      <text x="197" y="99" text-anchor="middle" font-size="8" font-weight="800" fill="#854d0e">FUSE</text>
      <circle cx="270" cy="95" r="5" fill="#334155"/><line x1="270" y1="95" x2="285" y2="85" stroke="#334155" stroke-width="2"/>
      <text x="277" y="80" text-anchor="middle" font-size="8.5" font-weight="700" fill="#334155">Switch</text>
      <!-- Appliance -->
      <rect x="330" y="80" width="50" height="60" rx="4" fill="#ffffff" stroke="#64748b"/>
      <text x="355" y="112" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Appliance</text>
      <text x="230" y="170" text-anchor="middle" font-size="10" font-weight="600" fill="#991b1b">Crucial Rule: Switches and fuses must ALWAYS be connected in the LIVE wire</text>
    </svg>`;
  }

  // Calorimetry
  if (file.includes('calorimetry')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Heating Curve: Phase Changes &amp; Latent Heat</text>
      <line x1="60" y1="160" x2="420" y2="160" stroke="#64748b" stroke-width="1.5"/>
      <line x1="60" y1="160" x2="60" y2="40" stroke="#64748b" stroke-width="1.5"/>
      <text x="240" y="185" text-anchor="middle" font-size="10.5" font-weight="600" fill="#475569">Heat Supplied (Time) →</text>
      <text x="25" y="35" font-size="9.5" font-weight="600" fill="#475569">Temp (°C)</text>
      <!-- Curve: Solid rising -> Flat melting -> Liquid rising -> Flat boiling -> Gas rising -->
      <polyline points="60,150 110,120 180,120 250,70 340,70 390,45" fill="none" stroke="#ea580c" stroke-width="2.5"/>
      <!-- Labels -->
      <text x="85" y="145" font-size="8.5" fill="#475569">Solid</text>
      <text x="145" y="112" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">Melting (Latent Heat L_f)</text>
      <text x="215" y="105" font-size="8.5" fill="#475569">Liquid</text>
      <text x="295" y="62" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">Boiling (Latent Heat L_v)</text>
      <text x="375" y="50" font-size="8.5" fill="#475569">Gas</text>
      <text x="230" y="195" text-anchor="middle" font-size="9.5" font-weight="600" fill="#334155">Temperature remains constant during phase change (Kinetic energy does not change)</text>
    </svg>`;
  }

  // Refraction at plane surfaces
  if (file.includes('refraction_of_light_at_plane')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Refraction Through Glass Slab: Lateral Displacement</text>
      <!-- Glass slab -->
      <rect x="100" y="65" width="260" height="70" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="330" y="105" font-size="10" font-weight="700" fill="#0369a1">Glass (Dense)</text>
      <!-- Incident Ray -->
      <line x1="60" y1="25" x2="160" y2="65" stroke="#dc2626" stroke-width="2"/>
      <!-- Refracted Ray inside slab (bends towards normal) -->
      <line x1="160" y1="65" x2="220" y2="135" stroke="#dc2626" stroke-width="2"/>
      <!-- Emergent Ray (parallel to incident) -->
      <line x1="220" y1="135" x2="320" y2="175" stroke="#dc2626" stroke-width="2"/>
      <!-- Dotted original path -->
      <line x1="160" y1="65" x2="380" y2="153" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <!-- Lateral displacement line -->
      <line x1="270" y1="155" x2="285" y2="115" stroke="#16a34a" stroke-width="1.5"/>
      <text x="310" y="140" font-size="9" font-weight="700" fill="#16a34a">Lateral Displacement (d)</text>
      <text x="230" y="190" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Angle of Incidence i = Angle of Emergence e; Emergent ray is parallel to incident ray</text>
    </svg>`;
  }

  // Sound
  if (file.includes('sound')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Waveforms: Pitch, Loudness &amp; Quality (Timbre)</text>
      <!-- Wave 1 (Soft Note) -->
      <g transform="translate(40, 45)">
        <line x1="0" y1="35" x2="170" y2="35" stroke="#cbd5e1"/>
        <path d="M 0 35 Q 20 15 40 35 T 80 35 T 120 35 T 160 35" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="85" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e40af">Small Amplitude → Faint Sound</text>
      </g>
      <!-- Wave 2 (Loud Note - Same Pitch) -->
      <g transform="translate(240, 45)">
        <line x1="0" y1="35" x2="170" y2="35" stroke="#cbd5e1"/>
        <path d="M 0 35 Q 20 -5 40 35 T 80 35 T 120 35 T 160 35" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="85" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991b1b">Large Amplitude → Loud Sound</text>
      </g>
      <rect x="50" y="125" width="360" height="42" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="230" y="142" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">• Loudness depends on (Amplitude)²</text>
      <text x="230" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">• Pitch depends on Frequency | Quality depends on Waveform</text>
    </svg>`;
  }

  // Machines
  if (file.includes('machines')) {
    return `<svg viewBox="0 0 460 200" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Block &amp; Tackle Pulley System</text>
      <g transform="translate(100, 45)">
        <!-- Fixed top block (2 pulleys) -->
        <rect x="20" y="10" width="60" height="15" fill="#64748b"/>
        <circle cx="35" cy="40" r="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
        <circle cx="65" cy="40" r="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
        <!-- Movable bottom block (2 pulleys) -->
        <circle cx="35" cy="100" r="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
        <circle cx="65" cy="100" r="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
        <rect x="20" y="115" width="60" height="10" fill="#64748b"/>
        <!-- Load below -->
        <rect x="35" y="130" width="30" height="20" fill="#dc2626"/>
        <text x="50" y="144" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">Load L</text>
      </g>
      <rect x="220" y="55" width="190" height="95" rx="5" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="315" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">System Mechanics</text>
      <text x="235" y="98" font-size="9.5" fill="#334155">• Total pulleys n = 4</text>
      <text x="235" y="114" font-size="9.5" font-weight="700" fill="#16a34a">• Velocity Ratio VR = n = 4</text>
      <text x="235" y="130" font-size="9.5" fill="#334155">• MA = L / E = η × VR</text>
      <text x="230" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">Effort is applied downward to utilise the operator's body weight conveniently</text>
    </svg>`;
  }

  // Radioactivity
  if (file.includes('radioactivity')) {
    return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
      <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Radioactive Decay Law: Half-Life Curve</text>
      <line x1="60" y1="150" x2="400" y2="150" stroke="#64748b" stroke-width="1.5"/>
      <line x1="60" y1="150" x2="60" y2="35" stroke="#64748b" stroke-width="1.5"/>
      <text x="230" y="175" text-anchor="middle" font-size="10.5" font-weight="600" fill="#475569">Time Elapsed (in Half-Lives) →</text>
      <text x="25" y="32" font-size="9" font-weight="600" fill="#475569">Activity N(t)</text>
      <!-- Exponential curve -->
      <path d="M 60 45 Q 120 100 150 100 T 240 128 T 330 142 T 390 146" fill="none" stroke="#ea580c" stroke-width="2.5"/>
      <circle cx="60" cy="45" r="3.5" fill="#ea580c"/><text x="45" y="48" font-size="9" font-weight="700">N₀</text>
      <circle cx="150" cy="98" r="3.5" fill="#ea580c"/><text x="150" y="90" text-anchor="middle" font-size="9" font-weight="700">N₀/2 (1 T½)</text>
      <circle cx="240" cy="125" r="3.5" fill="#ea580c"/><text x="240" y="118" text-anchor="middle" font-size="9" font-weight="700">N₀/4 (2 T½)</text>
      <circle cx="330" cy="138" r="3.5" fill="#ea580c"/><text x="330" y="130" text-anchor="middle" font-size="9" font-weight="700">N₀/8 (3 T½)</text>
    </svg>`;
  }

  // Force / General Physics fallback
  return `<svg viewBox="0 0 460 190" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; font-family:system-ui, sans-serif;">
    <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Physics Mechanics: ${q.title || 'Force & Equilibrium'}</text>
    <rect x="50" y="50" width="360" height="90" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="230" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">Equilibrium &amp; Moments Principle</text>
    <text x="230" y="98" text-anchor="middle" font-size="10.5" fill="#334155">Sum of Anticlockwise Moments = Sum of Clockwise Moments</text>
    <text x="230" y="118" text-anchor="middle" font-size="10.5" font-weight="700" fill="#16a34a">Σ τ = 0 | Resultant Force Σ F = 0</text>
    <text x="230" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="#64748b">Verified ICSE Class 10 Physics Standard</text>
  </svg>`;
}

const physFiles = fs.readdirSync(BANK_DIR).filter(f => f.startsWith('physics_') && !f.includes('case') && !f.includes('ar') && !f.includes('hots'));
let totalPhysUpdated = 0;

physFiles.forEach(f => {
  const filePath = path.join(BANK_DIR, f);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let fUpdated = 0;
  data.forEach(q => {
    const isDiag = (q.types_supported && q.types_supported.includes('diagrammatic')) || q.question_type === 'diagrammatic';
    if (isDiag && (!q.diagramSvg || q.diagramSvg.length < 20)) {
      q.diagramSvg = getPhysicsSvg(f, q);
      fUpdated++;
      totalPhysUpdated++;
    }
  });
  if (fUpdated > 0) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${f}: updated ${fUpdated} missing SVGs`);
  }
});

console.log(`\nTOTAL PHYSICS SVGs UPDATED: ${totalPhysUpdated}`);
