const fs = require('fs');
const path = require('path');

const questions = [
  // --- 1 to 15: DIAGRAMMATIC QUESTIONS ---
  {
    globalId: "ICSE10-PHYS-RAD-001",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Deflection in Perpendicular Magnetic Field (Into the Page)",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "complex"],
    question: "A radioactive source inside a thick lead block emits three distinct radiations (X, Y, and Z) directed vertically upward into a uniform magnetic field pointing perpendicularly into the plane of paper (indicated by ⊗).\n\nBased on the observed trajectories shown in the diagram, identify the three radiations X, Y, and Z and explain the direction of deflection using Fleming's Left Hand Rule.",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 210" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <rect x="135" y="160" width="90" height="42" fill="#64748b" stroke="#334155" stroke-width="2" rx="3"/>
  <rect x="165" y="160" width="30" height="24" fill="#0f172a"/>
  <circle cx="180" cy="175" r="5" fill="#f59e0b"/>
  <text x="145" y="196" font-size="10" font-weight="700" fill="#f8fafc">Lead Collimator</text>
  <!-- Magnetic field area markers -->
  <g fill="#94a3b8" font-size="12" font-family="monospace">
    <text x="50" y="50">⊗</text><text x="110" y="50">⊗</text><text x="180" y="50">⊗</text><text x="250" y="50">⊗</text><text x="310" y="50">⊗</text>
    <text x="50" y="95">⊗</text><text x="110" y="95">⊗</text><text x="180" y="95">⊗</text><text x="250" y="95">⊗</text><text x="310" y="95">⊗</text>
    <text x="50" y="140">⊗</text><text x="110" y="140">⊗</text><text x="180" y="140">⊗</text><text x="250" y="140">⊗</text><text x="310" y="140">⊗</text>
  </g>
  <text x="235" y="32" font-size="11" font-weight="600" fill="#475569">B (into paper ⊗)</text>
  <!-- Undeflected Y beam (Gamma) -->
  <line x1="180" y1="160" x2="180" y2="25" stroke="#16a34a" stroke-width="2.5"/>
  <polygon points="180,18 176,27 184,27" fill="#16a34a"/>
  <text x="186" y="24" font-size="12" font-weight="700" fill="#16a34a">Beam Y</text>
  <!-- Gentle Left Deflection X beam (Alpha) -->
  <path d="M 180 160 Q 180 100 110 50" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="104,46 112,54 116,46" fill="#dc2626"/>
  <text x="75" y="44" font-size="12" font-weight="700" fill="#dc2626">Beam X</text>
  <!-- Sharp Right Deflection Z beam (Beta) -->
  <path d="M 180 160 Q 180 115 260 85" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="266,82 256,86 261,93" fill="#2563eb"/>
  <text x="272" y="86" font-size="12" font-weight="700" fill="#2563eb">Beam Z</text>
</svg>`,
    options: [
      { key: "A", text: "X = α-particles, Y = γ-rays, Z = β-particles" },
      { key: "B", text: "X = β-particles, Y = γ-rays, Z = α-particles" },
      { key: "C", text: "X = α-particles, Y = β-particles, Z = γ-rays" },
      { key: "D", text: "X = γ-rays, Y = α-particles, Z = β-particles" }
    ],
    correct_option: "A",
    explanation: "By Fleming's Left Hand Rule: Forefinger points into paper (B ⊗), middle finger points in the direction of conventional current (upward for positive charge). The thumb points towards the LEFT, so positively charged α-particles deflect to the left (Beam X). Negatively charged β-particles deflect in the opposite direction (to the right) with a much sharper curvature due to their extremely small mass (Beam Z). Neutral γ-rays experience no magnetic Lorentz force (q = 0) and pass undeflected (Beam Y).",
    concept_name: "Deflection of α, β, and γ in Magnetic Fields",
    concept_tag: "deflection_magnetic_field_fleming_left_hand_rule",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-002",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Deflection in Electrostatic Field Between Charged Parallel Plates",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "theoretical"],
    question: "A collimated beam of radiation from a radioactive sample enters horizontally between two charged metal plates as illustrated. Beam P curves toward the upper plate (+), Beam Q continues straight without deviation, and Beam R curves gently toward the lower plate (-).\n\nWhy does Beam P exhibit significantly greater curvature than Beam R despite having a smaller magnitude of charge than the alpha particle?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 200" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Top Plate (+) -->
  <rect x="90" y="30" width="180" height="12" fill="#ef4444" rx="2"/>
  <text x="100" y="24" font-size="11" font-weight="700" fill="#ef4444">+ + + + + + Positive Plate (+V) + + + + + +</text>
  <!-- Bottom Plate (-) -->
  <rect x="90" y="155" width="180" height="12" fill="#3b82f6" rx="2"/>
  <text x="96" y="180" font-size="11" font-weight="700" fill="#3b82f6">- - - - - - Negative Plate (-V) - - - - - -</text>
  <!-- Collimator Source -->
  <rect x="15" y="80" width="45" height="35" fill="#475569" rx="3"/>
  <circle cx="35" cy="97" r="4" fill="#fbbf24"/>
  <!-- Fluorescent Screen on Right -->
  <rect x="320" y="20" width="10" height="160" fill="#cbd5e1" stroke="#94a3b8" rx="2"/>
  <text x="334" y="105" font-size="10" font-weight="600" fill="#64748b" transform="rotate(90,334,105)">SCREEN</text>
  <!-- Beam P (Beta -> +) -->
  <path d="M 60 97 Q 160 97 320 48" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="320" cy="48" r="4" fill="#2563eb"/>
  <text x="260" y="42" font-size="11" font-weight="700" fill="#2563eb">Beam P (β⁻)</text>
  <!-- Beam Q (Gamma -> straight) -->
  <line x1="60" y1="97" x2="320" y2="97" stroke="#16a34a" stroke-width="2.5"/>
  <circle cx="320" cy="97" r="4" fill="#16a34a"/>
  <text x="260" y="92" font-size="11" font-weight="700" fill="#16a34a">Beam Q (γ)</text>
  <!-- Beam R (Alpha -> -) -->
  <path d="M 60 97 Q 170 97 320 135" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="320" cy="135" r="4" fill="#dc2626"/>
  <text x="260" y="148" font-size="11" font-weight="700" fill="#dc2626">Beam R (α)</text>
</svg>`,
    options: [
      { key: "A", text: "Beta particles have a much higher specific charge (charge-to-mass ratio e/m) because their mass is roughly 1/7340 times the mass of an alpha particle." },
      { key: "B", text: "Beta particles carry twice the electrical charge of alpha particles." },
      { key: "C", text: "Alpha particles travel at the speed of light, so the electric field has no time to deflect them." },
      { key: "D", text: "The positive plate attracts electrons with a stronger gravitational force." }
    ],
    correct_option: "A",
    explanation: "Transverse acceleration in an electric field is given by a = qE/m. The deflection curvature is directly proportional to the specific charge (q/m). For an electron (β-particle), (e/m)_β is approximately 7340/2 ≈ 3670 times greater than that of an alpha particle ((2e)/(4u)). Hence, despite having only half the charge of an alpha particle, its minuscule mass produces an enormous acceleration, causing Beam P to curve far more sharply toward the positive plate.",
    concept_name: "Electrostatic Deflection and Specific Charge",
    concept_tag: "electric_deflection_specific_charge_beta_alpha",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Class 10 Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-003",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Radioactive Decay Series on A vs Z Coordinate Plane",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "complex", "numerical"],
    question: "The graph shows a nuclear decay sequence starting from nucleus P(Z=92, A=238) to nucleus S. Transition 1 goes from P to Q, Transition 2 from Q to R, and Transition 3 from R to S.\n\nIdentify the radiations emitted in steps 1, 2, and 3 respectively, and determine the atomic number (Z) and mass number (A) of nucleus S.",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 210" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Axes -->
  <line x1="60" y1="180" x2="330" y2="180" stroke="#334155" stroke-width="2"/>
  <polygon points="330,180 322,176 322,184" fill="#334155"/>
  <text x="180" y="200" font-size="11" font-weight="700" fill="#334155">Atomic Number (Z) →</text>
  <line x1="60" y1="180" x2="60" y2="20" stroke="#334155" stroke-width="2"/>
  <polygon points="60,20 56,28 64,28" fill="#334155"/>
  <text x="14" y="100" font-size="11" font-weight="700" fill="#334155" transform="rotate(-90,14,100)">Mass Number (A) →</text>
  <!-- Grid Ticks -->
  <text x="100" y="174" font-size="10" fill="#64748b">90</text><line x1="105" y1="180" x2="105" y2="176" stroke="#64748b"/>
  <text x="165" y="174" font-size="10" fill="#64748b">91</text><line x1="170" y1="180" x2="170" y2="176" stroke="#64748b"/>
  <text x="230" y="174" font-size="10" fill="#64748b">92</text><line x1="235" y1="180" x2="235" y2="176" stroke="#64748b"/>
  <text x="35" y="145" font-size="10" fill="#64748b">234</text><line x1="60" y1="140" x2="64" y2="140" stroke="#64748b"/>
  <text x="35" y="55" font-size="10" fill="#64748b">238</text><line x1="60" y1="50" x2="64" y2="50" stroke="#64748b"/>
  <!-- Nucleus P(92, 238) -->
  <circle cx="235" cy="50" r="5" fill="#dc2626"/>
  <text x="245" y="52" font-size="12" font-weight="800" fill="#dc2626">P(92, 238)</text>
  <!-- Step 1: P to Q(90, 234) -->
  <line x1="235" y1="50" x2="107" y2="138" stroke="#dc2626" stroke-width="2.2"/>
  <polygon points="105,140 114,133 117,141" fill="#dc2626"/>
  <text x="180" y="90" font-size="11" font-weight="700" fill="#dc2626">Step 1 (α)</text>
  <!-- Nucleus Q(90, 234) -->
  <circle cx="105" cy="140" r="5" fill="#2563eb"/>
  <text x="75" y="132" font-size="11" font-weight="700" fill="#2563eb">Q(90, 234)</text>
  <!-- Step 2: Q to R(91, 234) -->
  <line x1="105" y1="140" x2="168" y2="140" stroke="#2563eb" stroke-width="2.2"/>
  <polygon points="170,140 162,136 162,144" fill="#2563eb"/>
  <text x="122" y="132" font-size="10" font-weight="700" fill="#2563eb">Step 2 (β⁻)</text>
  <!-- Nucleus R(91, 234) -->
  <circle cx="170" cy="140" r="5" fill="#7c3aed"/>
  <text x="160" y="156" font-size="11" font-weight="700" fill="#7c3aed">R(91, 234)</text>
  <!-- Step 3: R to S(92, 234) -->
  <line x1="170" y1="140" x2="233" y2="140" stroke="#059669" stroke-width="2.2"/>
  <polygon points="235,140 227,136 227,144" fill="#059669"/>
  <text x="188" y="156" font-size="10" font-weight="700" fill="#059669">Step 3 (β⁻)</text>
  <!-- Nucleus S(92, 234) -->
  <circle cx="235" cy="140" r="5" fill="#059669"/>
  <text x="245" y="144" font-size="12" font-weight="800" fill="#059669">S(92, 234)</text>
</svg>`,
    options: [
      { key: "A", text: "Step 1: α, Step 2: β, Step 3: β; Nucleus S has Z = 92, A = 234 (an isotope of P)" },
      { key: "B", text: "Step 1: β, Step 2: α, Step 3: γ; Nucleus S has Z = 91, A = 230" },
      { key: "C", text: "Step 1: α, Step 2: α, Step 3: β; Nucleus S has Z = 89, A = 230" },
      { key: "D", text: "Step 1: γ, Step 2: β, Step 3: α; Nucleus S has Z = 90, A = 234" }
    ],
    correct_option: "A",
    explanation: "Step 1 reduces mass number A from 238 to 234 (ΔA = -4) and atomic number Z from 92 to 90 (ΔZ = -2), which is an alpha (α) emission: ²³⁸₉₂P → ²³⁴₉₀Q + ⁴₂He.\nStep 2 keeps A constant (234) while Z increases from 90 to 91 (ΔZ = +1), characteristic of beta (β⁻) emission: ²³⁴₉₀Q → ²³⁴₉₁R + ⁰₋₁e.\nStep 3 also keeps A = 234 while Z increases from 91 to 92 (ΔZ = +1), another beta (β⁻) emission: ²³⁴₉₁R → ²³⁴₉₂S + ⁰₋₁e.\nFinal nucleus S has Z = 92 and A = 234. Since P and S both have Z = 92, they are isotopes of Uranium (²³⁸U and ²³⁴U).",
    concept_name: "Nuclear Decay Chains and Isotope Formation",
    concept_tag: "alpha_beta_decay_sequence_isotopes",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-004",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Activity-Time Decay Curve Analysis",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "numerical"],
    question: "The graph illustrates the radioactive decay curve of a newly synthesized radioisotope, plotting activity (in Becquerels) against time (in hours).\n\nUsing the data from the graph, determine the half-life of the radioisotope and find its expected activity at t = 36 hours.",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 210" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Axes -->
  <line x1="60" y1="175" x2="330" y2="175" stroke="#334155" stroke-width="2"/>
  <polygon points="330,175 322,171 322,179" fill="#334155"/>
  <text x="160" y="196" font-size="11" font-weight="700" fill="#334155">Time (hours) →</text>
  <line x1="60" y1="175" x2="60" y2="20" stroke="#334155" stroke-width="2"/>
  <polygon points="60,20 56,28 64,28" fill="#334155"/>
  <text x="14" y="115" font-size="11" font-weight="700" fill="#334155" transform="rotate(-90,14,115)">Activity (Bq) →</text>
  <!-- Grid markings -->
  <text x="25" y="38" font-size="10" font-weight="600" fill="#64748b">800</text><line x1="56" y1="35" x2="60" y2="35" stroke="#64748b"/>
  <text x="25" y="73" font-size="10" font-weight="600" fill="#64748b">400</text><line x1="56" y1="70" x2="60" y2="70" stroke="#64748b"/>
  <text x="25" y="108" font-size="10" font-weight="600" fill="#64748b">200</text><line x1="56" y1="105" x2="60" y2="105" stroke="#64748b"/>
  <text x="25" y="143" font-size="10" font-weight="600" fill="#64748b">100</text><line x1="56" y1="140" x2="60" y2="140" stroke="#64748b"/>
  <text x="120" y="188" font-size="10" font-weight="600" fill="#64748b">12</text><line x1="125" y1="175" x2="125" y2="179" stroke="#64748b"/>
  <text x="185" y="188" font-size="10" font-weight="600" fill="#64748b">24</text><line x1="190" y1="175" x2="190" y2="179" stroke="#64748b"/>
  <text x="250" y="188" font-size="10" font-weight="600" fill="#64748b">36</text><line x1="255" y1="175" x2="255" y2="179" stroke="#64748b"/>
  <!-- Dashed guideline to T1/2 = 12h -->
  <line x1="60" y1="70" x2="125" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>
  <line x1="125" y1="70" x2="125" y2="175" stroke="#94a3b8" stroke-dasharray="3,3"/>
  <circle cx="125" cy="70" r="3.5" fill="#dc2626"/>
  <!-- Dashed guideline to 24h -->
  <line x1="60" y1="105" x2="190" y2="105" stroke="#94a3b8" stroke-dasharray="3,3"/>
  <line x1="190" y1="105" x2="190" y2="175" stroke="#94a3b8" stroke-dasharray="3,3"/>
  <circle cx="190" cy="105" r="3.5" fill="#dc2626"/>
  <!-- Decay Curve -->
  <path d="M 60 35 Q 90 60 125 70 T 190 105 T 255 140 T 310 162" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="60" cy="35" r="4" fill="#2563eb"/>
  <circle cx="255" cy="140" r="3.5" fill="#dc2626"/>
  <text x="135" y="65" font-size="10" font-weight="700" fill="#dc2626">(12 h, 400 Bq)</text>
  <text x="200" y="100" font-size="10" font-weight="700" fill="#dc2626">(24 h, 200 Bq)</text>
</svg>`,
    options: [
      { key: "A", text: "Half-life = 12 hours; Activity at 36 h = 100 Bq" },
      { key: "B", text: "Half-life = 6 hours; Activity at 36 h = 50 Bq" },
      { key: "C", text: "Half-life = 24 hours; Activity at 36 h = 200 Bq" },
      { key: "D", text: "Half-life = 12 hours; Activity at 36 h = 50 Bq" }
    ],
    correct_option: "A",
    explanation: "At t = 0, initial activity A₀ = 800 Bq.\nHalf of initial activity is 400 Bq, which occurs exactly at t = 12 hours. Therefore, the half-life T₁/₂ = 12 hours.\nAt t = 24 hours (2 half-lives), activity drops to 400/2 = 200 Bq.\nAt t = 36 hours (3 half-lives), activity drops to 200/2 = 100 Bq (or A = A₀ × (1/2)³ = 800 / 8 = 100 Bq).",
    concept_name: "Half-life Calculation from Radioactive Decay Graphs",
    concept_tag: "half_life_decay_graph_activity",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-005",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Penetrating Power and Multi-Stage Absorber Test",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "complex"],
    question: "A mixed radioactive beam containing alpha, beta, and gamma emissions passes sequentially through three barriers: Sheet 1 (0.1 mm paper), Sheet 2 (5 mm aluminium), and Block 3 (10 cm lead). GM counter detectors D1, D2, and D3 measure the transmitted radiations after each barrier.\n\nWhich of the following correctly describes what reaches detectors D1, D2, and D3?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 200" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Source -->
  <rect x="15" y="80" width="30" height="40" fill="#475569" rx="2"/>
  <circle cx="30" cy="100" r="5" fill="#f59e0b"/>
  <text x="10" y="135" font-size="9" font-weight="700" fill="#475569">Source (α,β,γ)</text>
  <!-- Barrier 1: Paper -->
  <rect x="100" y="45" width="4" height="110" fill="#f87171"/>
  <text x="80" y="38" font-size="10" font-weight="700" fill="#b91c1c">Paper (0.1 mm)</text>
  <rect x="130" y="70" width="22" height="60" fill="#e2e8f0" stroke="#64748b" rx="2"/>
  <text x="133" y="105" font-size="10" font-weight="700" fill="#0f172a">D₁</text>
  <!-- Barrier 2: Aluminium -->
  <rect x="185" y="45" width="12" height="110" fill="#60a5fa"/>
  <text x="165" y="38" font-size="10" font-weight="700" fill="#1d4ed8">Al (5 mm)</text>
  <rect x="225" y="70" width="22" height="60" fill="#e2e8f0" stroke="#64748b" rx="2"/>
  <text x="228" y="105" font-size="10" font-weight="700" fill="#0f172a">D₂</text>
  <!-- Barrier 3: Thick Lead -->
  <rect x="275" y="45" width="25" height="110" fill="#94a3b8"/>
  <text x="260" y="38" font-size="10" font-weight="700" fill="#334155">Lead (10 cm)</text>
  <rect x="325" y="70" width="22" height="60" fill="#e2e8f0" stroke="#64748b" rx="2"/>
  <text x="328" y="105" font-size="10" font-weight="700" fill="#0f172a">D₃</text>
  <!-- Alpha stopped at Paper -->
  <line x1="45" y1="85" x2="98" y2="85" stroke="#dc2626" stroke-width="2"/>
  <text x="50" y="80" font-size="9" font-weight="700" fill="#dc2626">α (stopped)</text>
  <!-- Beta passes paper, stopped at Al -->
  <line x1="45" y1="100" x2="183" y2="100" stroke="#2563eb" stroke-width="2"/>
  <!-- Gamma passes paper and Al, heavily attenuated at Lead -->
  <line x1="45" y1="115" x2="273" y2="115" stroke="#16a34a" stroke-width="2"/>
</svg>`,
    options: [
      { key: "A", text: "D1 detects β and γ; D2 detects only γ; D3 detects practically negligible radiation (or highly attenuated γ)" },
      { key: "B", text: "D1 detects α, β, and γ; D2 detects β; D3 detects α" },
      { key: "C", text: "D1 detects only α; D2 detects only β; D3 detects only γ" },
      { key: "D", text: "D1 detects only γ; D2 detects β and γ; D3 detects α and β" }
    ],
    correct_option: "A",
    explanation: "Alpha particles have the lowest penetrating power (~0.04 mm in human tissue) and are completely stopped by a thin sheet of paper (0.1 mm). Thus, only β and γ reach detector D1.\nBeta particles can penetrate paper but are completely absorbed by ~5 mm of aluminium. Therefore, only γ-radiation passes through Sheet 2 to reach detector D2.\nGamma radiation has immense penetrating power but is exponentially attenuated by dense lead; 10 cm of lead absorbs roughly 99%+ of the γ photons, leaving minimal intensity at D3.",
    concept_name: "Penetrating Power of Nuclear Radiations",
    concept_tag: "penetrating_power_absorbers_alpha_beta_gamma",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Class 10 Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-006",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Magnetic Field Directed Out of the Plane (⊙)",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "complex"],
    question: "A radioactive beam travels vertically upward into a region of uniform magnetic field acting perpendicularly OUT of the page (represented by ⊙). Beam 1 deflects to the right, Beam 2 goes straight, and Beam 3 deflects to the left.\n\nApplying Fleming's Left Hand Rule, identify the radiations corresponding to Beams 1, 2, and 3.",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 200" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Field out of page markers -->
  <g fill="#0284c7" font-size="13" font-family="monospace">
    <text x="50" y="45">⊙</text><text x="110" y="45">⊙</text><text x="180" y="45">⊙</text><text x="250" y="45">⊙</text><text x="310" y="45">⊙</text>
    <text x="50" y="90">⊙</text><text x="110" y="90">⊙</text><text x="180" y="90">⊙</text><text x="250" y="90">⊙</text><text x="310" y="90">⊙</text>
    <text x="50" y="135">⊙</text><text x="110" y="135">⊙</text><text x="180" y="135">⊙</text><text x="250" y="135">⊙</text><text x="310" y="135">⊙</text>
  </g>
  <text x="235" y="25" font-size="11" font-weight="700" fill="#0284c7">B (out of paper ⊙)</text>
  <!-- Collimator -->
  <rect x="155" y="160" width="50" height="30" fill="#475569" rx="3"/>
  <circle cx="180" cy="175" r="4" fill="#fbbf24"/>
  <!-- Beam 2 (Gamma) straight -->
  <line x1="180" y1="160" x2="180" y2="25" stroke="#16a34a" stroke-width="2.5"/>
  <text x="186" y="25" font-size="12" font-weight="700" fill="#16a34a">Beam 2</text>
  <!-- Beam 1 (Alpha) curves RIGHT -->
  <path d="M 180 160 Q 180 100 250 50" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="256,46 248,54 245,46" fill="#dc2626"/>
  <text x="262" y="48" font-size="12" font-weight="700" fill="#dc2626">Beam 1</text>
  <!-- Beam 3 (Beta) curves sharp LEFT -->
  <path d="M 180 160 Q 180 115 100 85" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="94,82 104,86 99,93" fill="#2563eb"/>
  <text x="50" y="86" font-size="12" font-weight="700" fill="#2563eb">Beam 3</text>
</svg>`,
    options: [
      { key: "A", text: "Beam 1 = α-particles, Beam 2 = γ-rays, Beam 3 = β-particles" },
      { key: "B", text: "Beam 1 = β-particles, Beam 2 = γ-rays, Beam 3 = α-particles" },
      { key: "C", text: "Beam 1 = γ-rays, Beam 2 = α-particles, Beam 3 = β-particles" },
      { key: "D", text: "Beam 1 = α-particles, Beam 2 = β-particles, Beam 3 = γ-rays" }
    ],
    correct_option: "A",
    explanation: "For magnetic field directed OUT of the paper (⊙): Align your left hand such that the forefinger points outwards (towards you), and the middle finger points upward (direction of positive current). The thumb naturally points to the RIGHT. Hence, positively charged α-particles experience a magnetic Lorentz force towards the right (Beam 1). Negatively charged β-particles deflect in the opposite direction, i.e., towards the left, with greater curvature (Beam 3). Photons (γ-rays) carry zero net charge and pass straight undeflected (Beam 2).",
    concept_name: "Lorentz Force Inversion with Magnetic Field Orientation",
    concept_tag: "fleming_left_hand_rule_outward_field",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-007",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Nuclear Fission Reaction of Uranium-235",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "complex", "numerical"],
    question: "The diagram depicts the thermal neutron-induced fission of a Uranium-235 nucleus:\n\n¹₀n + ²³⁵₉₂U → ²³⁶₉₂U* → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x (¹₀n) + Q\n\nWhat is the value of x (number of prompt neutrons released) and approximately how much energy Q is liberated per single fission event?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 190" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Incoming Neutron -->
  <circle cx="35" cy="95" r="5" fill="#3b82f6"/>
  <text x="25" y="82" font-size="10" font-weight="700" fill="#3b82f6">¹₀n</text>
  <line x1="45" y1="95" x2="85" y2="95" stroke="#3b82f6" stroke-width="2"/>
  <polygon points="90,95 82,91 82,99" fill="#3b82f6"/>
  <!-- U-235 Target -->
  <circle cx="125" cy="95" r="24" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
  <text x="108" y="99" font-size="11" font-weight="800" fill="#78350f">²³⁵₉₂U</text>
  <text x="102" y="132" font-size="10" font-weight="600" fill="#b45309">Target Nucleus</text>
  <!-- Fission Arrow -->
  <line x1="155" y1="95" x2="195" y2="95" stroke="#475569" stroke-width="2.5"/>
  <polygon points="200,95 192,90 192,100" fill="#475569"/>
  <!-- Daughter Nuclei -->
  <circle cx="250" cy="50" r="16" fill="#10b981" stroke="#059669" stroke-width="1.8"/>
  <text x="236" y="54" font-size="10" font-weight="800" fill="#064e3b">¹⁴¹₅₆Ba</text>
  <circle cx="250" cy="140" r="13" fill="#6366f1" stroke="#4f46e5" stroke-width="1.8"/>
  <text x="238" y="144" font-size="10" font-weight="800" fill="#1e1b4b">⁹²₃₆Kr</text>
  <!-- Released Neutrons -->
  <line x1="205" y1="95" x2="280" y2="85" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2,2"/>
  <circle cx="285" cy="85" r="4" fill="#3b82f6"/><text x="294" y="88" font-size="9" font-weight="700" fill="#3b82f6">¹₀n</text>
  <line x1="205" y1="95" x2="280" y2="98" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2,2"/>
  <circle cx="285" cy="98" r="4" fill="#3b82f6"/><text x="294" y="101" font-size="9" font-weight="700" fill="#3b82f6">¹₀n</text>
  <line x1="205" y1="95" x2="280" y2="111" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2,2"/>
  <circle cx="285" cy="111" r="4" fill="#3b82f6"/><text x="294" y="114" font-size="9" font-weight="700" fill="#3b82f6">¹₀n</text>
  <!-- Energy burst -->
  <text x="260" y="180" font-size="11" font-weight="800" fill="#dc2626">+ Energy (Q)</text>
</svg>`,
    options: [
      { key: "A", text: "x = 3 neutrons; Q ≈ 200 MeV" },
      { key: "B", text: "x = 2 neutrons; Q ≈ 20 MeV" },
      { key: "C", text: "x = 1 neutron; Q ≈ 931 MeV" },
      { key: "D", text: "x = 4 neutrons; Q ≈ 0.51 MeV" }
    ],
    correct_option: "A",
    explanation: "By conservation of nucleon number (mass number A):\nTotal Initial A = 1 + 235 = 236.\nTotal Final A = 141 (Ba) + 92 (Kr) + x(1) = 233 + x.\nEquating: 236 = 233 + x ⟹ x = 3 neutrons.\nConservation of atomic number (Z): 0 + 92 = 56 + 36 + x(0) = 92 (balanced).\nThe mass defect between the reactants and fission fragments equals approx 0.215 u, which releases Q ≈ 0.215 × 931.5 MeV ≈ 200 MeV of energy primarily as kinetic energy of fission fragments.",
    concept_name: "Nuclear Fission and Nucleon Conservation",
    concept_tag: "nuclear_fission_conservation_mass_defect",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Class 10 Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-008",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Electrostatic Field with Inverted Polarity",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "theoretical"],
    question: "In an electrostatic deflection chamber, the upper plate is maintained at negative potential (-V) and the lower plate at positive potential (+V). A narrow beam of radiation from a radium source enters the space between the plates.\n\nTowards which plate will the alpha (α) particles and beta (β) particles deflect?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 190" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Top Plate (-) -->
  <rect x="80" y="30" width="180" height="10" fill="#3b82f6" rx="2"/>
  <text x="96" y="24" font-size="11" font-weight="700" fill="#3b82f6">- - - - - - Negative Plate (-V) - - - - - -</text>
  <!-- Bottom Plate (+) -->
  <rect x="80" y="150" width="180" height="10" fill="#ef4444" rx="2"/>
  <text x="96" y="174" font-size="11" font-weight="700" fill="#ef4444">+ + + + + + Positive Plate (+V) + + + + + +</text>
  <!-- Source -->
  <rect x="15" y="80" width="40" height="30" fill="#475569" rx="2"/>
  <circle cx="35" cy="95" r="4" fill="#fbbf24"/>
  <!-- Screen -->
  <rect x="310" y="25" width="8" height="140" fill="#94a3b8" rx="2"/>
  <!-- Alpha towards Negative (Upward) -->
  <path d="M 55 95 Q 155 95 310 60" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="250" y="52" font-size="11" font-weight="700" fill="#dc2626">Track 1</text>
  <!-- Gamma Straight -->
  <line x1="55" y1="95" x2="310" y2="95" stroke="#16a34a" stroke-width="2.5"/>
  <text x="250" y="90" font-size="11" font-weight="700" fill="#16a34a">Track 2</text>
  <!-- Beta towards Positive (Downward) -->
  <path d="M 55 95 Q 155 95 310 145" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="250" y="140" font-size="11" font-weight="700" fill="#2563eb">Track 3</text>
</svg>`,
    options: [
      { key: "A", text: "Alpha deflects to Track 1 (towards upper negative plate); Beta deflects to Track 3 (towards lower positive plate); Gamma is Track 2" },
      { key: "B", text: "Alpha deflects to Track 3; Beta deflects to Track 1; Gamma is Track 2" },
      { key: "C", text: "Alpha and Beta both deflect to Track 1" },
      { key: "D", text: "Alpha deflects to Track 2; Beta deflects to Track 3" }
    ],
    correct_option: "A",
    explanation: "Because the electrostatic polarity is inverted (top plate is negative and bottom plate is positive), the electrostatic force F = qE acts as follows:\n- Alpha particles carry positive charge (+2e) and are attracted upward towards the negative plate (Track 1).\n- Beta particles carry negative charge (-e) and are attracted downward towards the positive plate (Track 3) with larger curvature due to tiny mass.\n- Gamma rays carry zero charge and proceed along Track 2 without deflection.",
    concept_name: "Electrostatic Field Polarity and Charge Identification",
    concept_tag: "electric_field_inverted_polarity",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-009",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Lead Container Collimation and Radiation Safety",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "theoretical"],
    question: "A cross-section of a laboratory lead castle is shown. The radioactive pellet is placed at the bottom of a deep, narrow cavity in a lead box whose walls are at least 10 cm thick.\n\nWhat are the two primary physical reasons for using thick lead with a narrow channel?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 200" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Lead Container Cross section -->
  <rect x="70" y="30" width="220" height="150" fill="#94a3b8" stroke="#475569" stroke-width="2.5" rx="4"/>
  <rect x="160" y="30" width="40" height="110" fill="#fffcf7" stroke="#475569" stroke-width="2"/>
  <!-- Radioactive Source Pellet -->
  <circle cx="180" cy="125" r="9" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
  <text x="135" y="165" font-size="11" font-weight="700" fill="#0f172a">Pellet at Bottom</text>
  <!-- Collimated Beam Emitting Out -->
  <line x1="180" y1="115" x2="180" y2="10" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,2"/>
  <polygon points="180,5 174,15 186,15" fill="#f59e0b"/>
  <text x="195" y="20" font-size="11" font-weight="700" fill="#d97706">Collimated Beam</text>
  <!-- Dimension indicators -->
  <line x1="70" y1="100" x2="160" y2="100" stroke="#0f172a" stroke-width="1.5"/>
  <text x="80" y="93" font-size="10" font-weight="700" fill="#0f172a">Wall ≥ 10 cm</text>
</svg>`,
    options: [
      { key: "A", text: "Lead has high density and high atomic number (Z=82) to effectively absorb stray gamma rays, while the narrow channel collimates the rays into a fine parallel beam." },
      { key: "B", text: "Lead neutralizes the radioactivity by chemical reaction with Uranium." },
      { key: "C", text: "The thick lead speeds up alpha particles so they can be studied." },
      { key: "D", text: "Lead acts as a magnetic shield that completely prevents all nuclear decay." }
    ],
    correct_option: "A",
    explanation: "Lead (Pb, Z = 82) is chosen because of its exceptionally high density (11.3 g/cm³) and large atomic number, which maximize photon absorption via the photoelectric effect and Compton scattering. A thickness of ≥ 10 cm absorbs almost all harmful stray gamma radiation, protecting personnel. The deep, narrow cavity allows only those rays directed straight up along the axis to emerge, providing a narrow, collimated pencil beam essential for precision experiments.",
    concept_name: "Radioactive Shielding and Collimation",
    concept_tag: "lead_shielding_radiation_safety",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Class 10 Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-010",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Binding Energy Per Nucleon Curve and Nuclear Stability",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "theoretical"],
    question: "The graph outlines the Binding Energy per Nucleon (B.E./A) as a function of Mass Number (A). The curve peaks at Iron-56 (approx 8.8 MeV/nucleon) and drops for heavier nuclei (approx 7.6 MeV/nucleon at Uranium-238).\n\nBased on this curve, why do very heavy nuclei (e.g. U-235) undergo nuclear fission, while very light nuclei (e.g. Deuterium and Tritium) undergo nuclear fusion?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 210" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Axes -->
  <line x1="50" y1="180" x2="330" y2="180" stroke="#334155" stroke-width="2"/>
  <polygon points="330,180 322,176 322,184" fill="#334155"/>
  <text x="160" y="200" font-size="11" font-weight="700" fill="#334155">Mass Number (A) →</text>
  <line x1="50" y1="180" x2="50" y2="20" stroke="#334155" stroke-width="2"/>
  <polygon points="50,20 46,28 54,28" fill="#334155"/>
  <text x="14" y="115" font-size="10" font-weight="700" fill="#334155" transform="rotate(-90,14,115)">B.E. / Nucleon (MeV) →</text>
  <!-- Peak at Fe-56 -->
  <circle cx="120" cy="45" r="4" fill="#ef4444"/>
  <text x="105" y="38" font-size="10" font-weight="800" fill="#dc2626">⁵⁶Fe (8.8 MeV)</text>
  <!-- Light nuclei (Fusion region) -->
  <text x="58" y="145" font-size="9" font-weight="700" fill="#2563eb">²H, ³H</text>
  <path d="M 65 140 Q 90 90 120 45" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="55" y="105" font-size="9" font-weight="800" fill="#2563eb">Fusion →</text>
  <!-- Heavy nuclei (Fission region) -->
  <path d="M 120 45 Q 220 55 310 75" fill="none" stroke="#d97706" stroke-width="2.5"/>
  <circle cx="310" cy="75" r="4" fill="#d97706"/>
  <text x="280" y="95" font-size="9" font-weight="800" fill="#d97706">²³⁸U (7.6 MeV)</text>
  <text x="210" y="80" font-size="9" font-weight="800" fill="#d97706">← Fission</text>
</svg>`,
    options: [
      { key: "A", text: "Both processes move product nuclei toward the higher binding energy peak near Fe-56, resulting in a positive mass defect and huge energy release." },
      { key: "B", text: "Fission only occurs when nuclei have zero binding energy." },
      { key: "C", text: "Light nuclei have higher binding energy than Iron, so they break apart." },
      { key: "D", text: "Heavy nuclei undergo fusion to become even heavier and more radioactive." }
    ],
    correct_option: "A",
    explanation: "The peak of the curve around A ≈ 56 (Iron/Nickel) represents the most tightly bound and stable nuclei with ~8.8 MeV/nucleon.\n1. When two light nuclei fuse (A < 20), the resulting nucleus has a significantly higher binding energy per nucleon, converting lost mass into fusion energy.\n2. When a heavy nucleus (A ≈ 235, B.E./A ≈ 7.6 MeV) splits into mid-sized fragments (A ≈ 100-140, B.E./A ≈ 8.5 MeV), the fragments are more tightly bound, releasing ~0.9 MeV per nucleon (total ~200 MeV per fission event).",
    concept_name: "Nuclear Stability and Binding Energy Curve",
    concept_tag: "binding_energy_curve_fission_fusion",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-011",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Conservation of Linear Momentum in Alpha Decay",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "numerical", "complex"],
    question: "A stationary Radium nucleus (²²⁶₈₈Ra) at rest disintegrates via alpha emission into a Radon nucleus (²²²₈₆Rn) and an alpha particle (⁴₂He):\n\n²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He\n\nBy conservation of linear momentum, which particle carries away the majority of the total kinetic energy liberated in the decay, and why?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 180" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Before Decay -->
  <g transform="translate(40, 20)">
    <circle cx="40" cy="65" r="26" fill="#f87171" stroke="#b91c1c" stroke-width="2"/>
    <text x="18" y="70" font-size="11" font-weight="800" fill="#7f1d1d">²²⁶₈₈Ra</text>
    <text x="14" y="110" font-size="10" font-weight="700" fill="#475569">At Rest (p = 0)</text>
  </g>
  <line x1="120" y1="85" x2="160" y2="85" stroke="#64748b" stroke-width="2"/>
  <polygon points="165,85 157,81 157,89" fill="#64748b"/>
  <!-- After Decay -->
  <g transform="translate(180, 20)">
    <!-- Daughter Radon recoils left -->
    <circle cx="45" cy="65" r="23" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
    <text x="24" y="70" font-size="11" font-weight="800" fill="#1e3a8a">²²²₈₆Rn</text>
    <line x1="20" y1="65" x2="-10" y2="65" stroke="#1d4ed8" stroke-width="2.5"/>
    <polygon points="-15,65 -7,61 -7,69" fill="#1d4ed8"/>
    <text x="-15" y="55" font-size="10" font-weight="700" fill="#1d4ed8">v_Rn (recoil)</text>
    <!-- Alpha particle flies right -->
    <circle cx="120" cy="65" r="9" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    <text x="114" y="68" font-size="9" font-weight="800" fill="#78350f">α</text>
    <line x1="130" y1="65" x2="165" y2="65" stroke="#d97706" stroke-width="2.5"/>
    <polygon points="170,65 162,61 162,69" fill="#d97706"/>
    <text x="135" y="55" font-size="10" font-weight="700" fill="#d97706">v_α (high)</text>
  </g>
</svg>`,
    options: [
      { key: "A", text: "The alpha particle carries roughly 98.2% of the kinetic energy because K = p² / (2m), and the alpha particle has a vastly smaller mass (4 u vs 222 u)." },
      { key: "B", text: "The Radon daughter nucleus carries 98.2% of the kinetic energy because it is much heavier." },
      { key: "C", text: "Both particles share the kinetic energy equally (50% each) due to Newton's third law." },
      { key: "D", text: "All kinetic energy is converted into gamma photons with zero particle motion." }
    ],
    correct_option: "A",
    explanation: "Initial momentum is zero, so by conservation of linear momentum: p_α = -p_Rn, meaning both have equal magnitude of momentum p.\nKinetic energy is K = p² / (2m).\nTherefore, K_α / K_Rn = m_Rn / m_α = 222 / 4 = 55.5.\nThe fraction of total kinetic energy carried by the alpha particle is:\nK_α / K_total = m_Rn / (m_Rn + m_α) = 222 / 226 ≈ 98.2%.\nThe heavy daughter nucleus recoils with only ~1.8% of the decay energy.",
    concept_name: "Momentum and Kinetic Energy Partition in Alpha Decay",
    concept_tag: "alpha_decay_momentum_conservation",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-012",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Continuous Energy Spectrum of Beta Particles vs Alpha Line Spectrum",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "theoretical"],
    question: "The graph compares the kinetic energy distribution of emitted alpha particles versus beta particles from radioactive nuclei.\n\nWhy do alpha particles exhibit sharp, discrete energy lines, whereas beta particles show a continuous energy distribution ending at an endpoint energy E_max?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 200" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Axes -->
  <line x1="50" y1="170" x2="330" y2="170" stroke="#334155" stroke-width="2"/>
  <polygon points="330,170 322,166 322,174" fill="#334155"/>
  <text x="160" y="192" font-size="11" font-weight="700" fill="#334155">Kinetic Energy (E) →</text>
  <line x1="50" y1="170" x2="50" y2="20" stroke="#334155" stroke-width="2"/>
  <polygon points="50,20 46,28 54,28" fill="#334155"/>
  <text x="14" y="115" font-size="10" font-weight="700" fill="#334155" transform="rotate(-90,14,115)">Number of Particles →</text>
  <!-- Alpha sharp line -->
  <line x1="180" y1="170" x2="180" y2="35" stroke="#dc2626" stroke-width="3"/>
  <circle cx="180" cy="35" r="4" fill="#dc2626"/>
  <text x="150" y="28" font-size="10" font-weight="800" fill="#dc2626">α Line Spectrum (Discrete)</text>
  <!-- Beta continuous curve -->
  <path d="M 55 170 Q 110 50 160 80 T 260 170" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="80" y="70" font-size="10" font-weight="800" fill="#2563eb">β Continuous Spectrum</text>
  <text x="250" y="165" font-size="9" font-weight="700" fill="#2563eb">E_max</text>
</svg>`,
    options: [
      { key: "A", text: "In beta decay, the decay energy is shared unpredictably between the beta particle and an antineutrino (three-body decay), whereas alpha decay is a two-body decay." },
      { key: "B", text: "Beta particles lose energy randomly by colliding with inner orbital electrons before leaving the atom." },
      { key: "C", text: "Alpha particles travel at variable speeds depending on ambient room temperature." },
      { key: "D", text: "Beta particles are waves rather than material particles." }
    ],
    correct_option: "A",
    explanation: "Alpha decay is a two-body decay (Parent → Daughter + α), so conservation of momentum and energy uniquely fixes the kinetic energy of the alpha particle at a single discrete value.\nIn beta decay (n → p + e⁻ + ν̄), a third particle—the antineutrino (ν̄)—is simultaneously emitted (three-body decay). The available decay energy is continuously partitioned between the beta particle and the antineutrino, resulting in a continuous spectrum from 0 to E_max.",
    concept_name: "Continuous Beta Spectrum and Antineutrino Hypothesis",
    concept_tag: "beta_continuous_spectrum_antineutrino",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Class 10 Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-013",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Fractional Half-Life Decay Ladder",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "numerical"],
    question: "A radioisotope sample begins with mass M₀ = 48 g. The diagram displays the stepwise reduction of remaining active mass across consecutive half-lives (n = 1, 2, 3, 4).\n\nWhat is the remaining undecayed mass at stage n = 4, and what percentage of the original sample has decayed?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 190" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Bars -->
  <!-- n = 0 -->
  <rect x="30" y="30" width="40" height="130" fill="#3b82f6" rx="2"/>
  <text x="35" y="24" font-size="10" font-weight="700" fill="#1e3a8a">48 g</text>
  <text x="40" y="175" font-size="10" font-weight="700" fill="#475569">n = 0</text>
  <!-- n = 1 -->
  <rect x="95" y="95" width="40" height="65" fill="#3b82f6" rx="2"/>
  <text x="100" y="89" font-size="10" font-weight="700" fill="#1e3a8a">24 g</text>
  <text x="105" y="175" font-size="10" font-weight="700" fill="#475569">n = 1</text>
  <!-- n = 2 -->
  <rect x="160" y="127" width="40" height="33" fill="#3b82f6" rx="2"/>
  <text x="165" y="121" font-size="10" font-weight="700" fill="#1e3a8a">12 g</text>
  <text x="170" y="175" font-size="10" font-weight="700" fill="#475569">n = 2</text>
  <!-- n = 3 -->
  <rect x="225" y="144" width="40" height="16" fill="#3b82f6" rx="2"/>
  <text x="232" y="138" font-size="10" font-weight="700" fill="#1e3a8a">6 g</text>
  <text x="235" y="175" font-size="10" font-weight="700" fill="#475569">n = 3</text>
  <!-- n = 4 -->
  <rect x="290" y="152" width="40" height="8" fill="#ef4444" rx="2"/>
  <text x="295" y="146" font-size="10" font-weight="800" fill="#dc2626">?</text>
  <text x="300" y="175" font-size="10" font-weight="700" fill="#475569">n = 4</text>
</svg>`,
    options: [
      { key: "A", text: "Remaining mass = 3.0 g; 93.75% has decayed" },
      { key: "B", text: "Remaining mass = 1.5 g; 96.88% has decayed" },
      { key: "C", text: "Remaining mass = 6.0 g; 87.50% has decayed" },
      { key: "D", text: "Remaining mass = 4.0 g; 91.67% has decayed" }
    ],
    correct_option: "A",
    explanation: "At each half-life stage n, remaining mass M = M₀ × (1/2)ⁿ.\nFor n = 4:\nM = 48 × (1/2)⁴ = 48 / 16 = 3.0 g.\nDecayed mass = 48 - 3 = 45 g.\nPercentage decayed = (45 / 48) × 100% = 93.75% (or 100% - (100% / 16) = 93.75%).",
    concept_name: "Fractional Half-Life and Percentage Decay",
    concept_tag: "half_life_fraction_decayed_percentage",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-014",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Comparing Curvature Radii in a Magnetic Chamber",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "complex"],
    question: "In a cloud chamber subjected to a magnetic field, the radius of circular curvature r of a charged particle is governed by r = mv / (qB).\n\nWhy is the radius of circular curvature for an alpha particle track significantly LARGER than that of a beta particle track of comparable kinetic energy?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 190" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Gentle wide curve of Alpha -->
  <path d="M 60 160 A 180 180 0 0 1 200 30" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="130" y="70" font-size="11" font-weight="700" fill="#dc2626">Alpha Track (Large r_α)</text>
  <!-- Sharp tight spiral/circle of Beta -->
  <circle cx="280" cy="110" r="32" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="245" y="160" font-size="11" font-weight="700" fill="#2563eb">Beta Track (Small r_β)</text>
</svg>`,
    options: [
      { key: "A", text: "Alpha particles possess vastly greater momentum p = √(2mK) due to their 7340-fold greater mass, yielding a much larger orbit radius r = p / (qB)." },
      { key: "B", text: "Alpha particles have no electric charge, so their radius is infinite." },
      { key: "C", text: "The magnetic field selectively repels beta particles more strongly." },
      { key: "D", text: "Beta particles travel faster than light in the chamber." }
    ],
    correct_option: "A",
    explanation: "Radius of circular path in magnetic field is r = p / (qB) = √(2mK) / (qB).\nFor comparable kinetic energies K, the ratio of radii is:\nr_α / r_β = (√(m_α) / q_α) / (√(m_β) / q_β) = (√(7340 m_e) / 2e) / (√(m_e) / e) = (√7340) / 2 ≈ 85.7 / 2 ≈ 43.\nBecause the alpha particle's huge mass gives it vastly greater momentum for the same kinetic energy, its trajectory is much straighter (much larger radius of curvature r_α).",
    concept_name: "Radius of Curvature in Magnetic Cloud Chambers",
    concept_tag: "magnetic_radius_curvature_alpha_beta",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Class 10 Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-015",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Nuclear Fusion Reaction of Deuterium and Tritium",
    question_type: "diagrammatic",
    types_supported: ["diagrammatic", "theoretical", "numerical"],
    question: "The diagram depicts the D-T nuclear fusion reaction occurring in stellar cores and thermonuclear reactors:\n\n²₁H + ³₁H → ⁴₂He + ¹₀n + 17.6 MeV\n\nWhy does this reaction require an extreme initial temperature of over 10⁷ K to initiate?",
    diagramSvg: `<svg class="q-diagram-svg" viewBox="0 0 360 180" width="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fffcf7" rx="8"/>
  <!-- Deuterium -->
  <g transform="translate(40, 50)">
    <circle cx="20" cy="20" r="14" fill="#60a5fa" stroke="#2563eb" stroke-width="1.8"/>
    <text x="12" y="24" font-size="10" font-weight="800" fill="#1e3a8a">²₁H</text>
  </g>
  <!-- Tritium -->
  <g transform="translate(40, 100)">
    <circle cx="20" cy="20" r="16" fill="#a78bfa" stroke="#7c3aed" stroke-width="1.8"/>
    <text x="12" y="24" font-size="10" font-weight="800" fill="#2e1065">³₁H</text>
  </g>
  <!-- Collision arrow with thermal energy -->
  <line x1="85" y1="85" x2="145" y2="85" stroke="#ef4444" stroke-width="2.5"/>
  <polygon points="150,85 142,80 142,90" fill="#ef4444"/>
  <text x="80" y="70" font-size="9" font-weight="800" fill="#b91c1c">T ≥ 10⁷ K (High K.E.)</text>
  <!-- Fusion intermediate -->
  <circle cx="180" cy="85" r="18" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
  <text x="170" y="89" font-size="10" font-weight="800" fill="#78350f">Fusion</text>
  <!-- Products -->
  <line x1="205" y1="85" x2="255" y2="55" stroke="#475569" stroke-width="2"/>
  <circle cx="275" cy="50" r="16" fill="#4ade80" stroke="#16a34a" stroke-width="2"/>
  <text x="265" y="54" font-size="10" font-weight="800" fill="#064e3b">⁴₂He</text>
  <line x1="205" y1="85" x2="255" y2="115" stroke="#475569" stroke-width="2"/>
  <circle cx="275" cy="120" r="8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="268" y="123" font-size="8" font-weight="800" fill="#1e3a8a">¹₀n</text>
  <text x="235" y="165" font-size="11" font-weight="800" fill="#dc2626">+ 17.6 MeV</text>
</svg>`,
    options: [
      { key: "A", text: "Positively charged nuclei experience strong electrostatic (Coulomb) repulsion; extreme thermal kinetic energy is required to overcome this barrier and bring them within nuclear force range (~10⁻¹⁵ m)." },
      { key: "B", text: "High temperature is needed to strip electrons so that nuclear fission can occur." },
      { key: "C", text: "Deuterium and Tritium only exist as liquids below 10⁷ K." },
      { key: "D", text: "High temperature converts the neutron into a proton." }
    ],
    correct_option: "A",
    explanation: "Both Deuterium and Tritium nuclei carry positive charge (+1e). According to Coulomb's Law, as they approach each other, repulsive electrostatic force rises sharply. To overcome this Coulomb barrier and approach within ~10⁻¹⁵ m (where attractive strong nuclear forces dominate), the nuclei must possess enormous kinetic energy. This kinetic energy can only be achieved at temperatures exceeding 10⁷ to 10⁸ K (thermonuclear conditions).",
    concept_name: "Nuclear Fusion and Coulomb Barrier",
    concept_tag: "nuclear_fusion_coulomb_barrier_temperature",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },

  // --- 16 to 25: THEORETICAL QUESTIONS ---
  {
    globalId: "ICSE10-PHYS-RAD-016",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Radioactivity as a Pure Nuclear Phenomenon",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "Why cannot radioactivity be altered, accelerated, or suppressed by physical factors (such as extreme temperature or pressure) or chemical changes (such as oxidation or compound formation)?",
    options: [
      { key: "A", text: "Radioactivity originates strictly from the instability of the atomic nucleus, whereas physical and chemical changes involve only the outermost valence electrons." },
      { key: "B", text: "Physical and chemical changes have activation energies comparable to nuclear binding forces." },
      { key: "C", text: "The nucleus is shielded by a vacuum that blocks all thermal heat transfer." },
      { key: "D", text: "Radioactive elements cannot form chemical compounds." }
    ],
    correct_option: "A",
    explanation: "Chemical reactions and physical state changes involve electron rearrangements in the outermost atomic shells with energies on the order of a few electron-volts (eV). Radioactivity, however, is a nuclear disintegration occurring deep within the nucleus governed by the strong nuclear force with binding energies on the order of mega-electron-volts (MeV, ~10⁶ times larger). Hence, chemical bonding, temperature, pressure, or magnetic fields have zero effect on nuclear decay rates.",
    concept_name: "Nuclear Independence from Physical and Chemical States",
    concept_tag: "nuclear_phenomenon_independence",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-017",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Origin of Beta Particles from Inside the Nucleus",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "Since an atomic nucleus contains only protons and neutrons and NO orbital electrons, explain the exact nuclear transformation that produces an emitted beta (β⁻) particle.",
    options: [
      { key: "A", text: "A nuclear neutron spontaneously transforms into a proton, an electron (beta particle), and an antineutrino: ¹₀n → ¹₁p + ⁰₋₁e + ν̄." },
      { key: "B", text: "An orbital K-shell electron falls into the nucleus and is immediately reflected out." },
      { key: "C", text: "A proton splits into a neutron and an electron." },
      { key: "D", text: "Two alpha particles collide inside the nucleus and emit an electron." }
    ],
    correct_option: "A",
    explanation: "In a neutron-rich unstable nucleus, a neutron spontaneously converts into a proton, an electron, and an antineutrino:\n¹₀n → ¹₁p + ⁰₋₁e + ν̄\nThe newly created proton remains bound inside the nucleus (increasing the atomic number Z by 1), while the fast-moving electron (β⁻ particle) cannot remain confined due to the Heisenberg uncertainty principle and is instantaneously expelled at high speed.",
    concept_name: "Mechanism of Beta Decay in the Nucleus",
    concept_tag: "beta_decay_neutron_proton_conversion",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-018",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Comparison of Ionizing Power Among Radiations",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "The ionizing powers of α, β, and γ radiations stand in the approximate ratio of 10,000 : 100 : 1. Why do alpha particles possess such immensely superior ionizing power compared to beta particles and gamma rays?",
    options: [
      { key: "A", text: "Alpha particles have the largest charge (+2e), greatest mass (4 u), and move relatively slowly (~10⁷ m/s), maximizing electrostatic interaction time with gas atoms." },
      { key: "B", text: "Alpha particles travel at the speed of light, smashing atoms violently." },
      { key: "C", text: "Alpha particles are uncharged and therefore can enter atomic electron clouds without repulsion." },
      { key: "D", text: "Gamma rays have mass that neutralizes ionization." }
    ],
    correct_option: "A",
    explanation: "Ionization occurs when radiation exerts Coulomb forces on orbital electrons to knock them out of atoms. Alpha particles have twice the elementary charge (+2e) and are ~7340 times heavier than electrons. Because they move relatively slowly (~5-7% of c), they spend more transit time near atoms, exerting massive electrostatic attraction on orbital electrons and creating up to 10,000 ion pairs per millimeter of track in air.",
    concept_name: "Ionizing Power Mechanism of Alpha, Beta, and Gamma",
    concept_tag: "ionizing_power_ratio_alpha_beta_gamma",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-019",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Biological Hazards: Internal Ingestion vs External Exposure",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "Why is an alpha-emitting radioactive substance relatively harmless when kept outside the human body, but exceedingly lethal if inhaled or ingested?",
    options: [
      { key: "A", text: "Externally, alpha particles cannot penetrate the dead outer epidermal skin layer; internally, their high ionizing power causes intense localized cellular destruction and DNA damage." },
      { key: "B", text: "Alpha particles react chemically with stomach acid to form hydrochloric acid gas." },
      { key: "C", text: "Alpha particles become beta particles once inside living cells." },
      { key: "D", text: "Body heat accelerates alpha particles to the speed of light." }
    ],
    correct_option: "A",
    explanation: "Alpha particles have very low penetrating power (~0.04 mm in tissue) and are stopped completely by the dead cornified outer layer of the skin (stratum corneum). Outside the body, they pose virtually no hazard to living cells. However, if ingested or inhaled into the lungs, there is no dead protective skin barrier: the alpha particles directly irradiate living epithelial cells with their massive ionizing power (10,000x of gamma), causing severe double-strand DNA breaks and cancer.",
    concept_name: "Biological Effects and Radiotoxicity of Alpha Radiations",
    concept_tag: "biological_hazards_alpha_internal_external",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Class 10 Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-020",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Nuclear Change vs Chemical Change Distinctions",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "Which of the following fundamental statements highlights the essential difference between a nuclear reaction and a chemical reaction?",
    options: [
      { key: "A", text: "In a chemical reaction, atomic nuclei remain completely unchanged and elements conserve their identities; in a nuclear reaction, the nucleus itself changes, creating new elements through transmutation." },
      { key: "B", text: "Chemical reactions release mega-electron-volts while nuclear reactions release electron-volts." },
      { key: "C", text: "Mass is strictly conserved in nuclear reactions, but violated in chemical reactions." },
      { key: "D", text: "Nuclear reactions depend strongly on room temperature and pressure." }
    ],
    correct_option: "A",
    explanation: "In chemical reactions, atoms only rearrange their valence electron bonds; the atomic numbers Z and mass numbers A remain intact. In nuclear reactions (such as alpha decay, beta decay, or fission), the composition of the nucleus changes (transmutation of elements), and measurable mass defect Δm is converted into energy according to E = Δm · c².",
    concept_name: "Fundamental Contrast Between Nuclear and Chemical Reactions",
    concept_tag: "nuclear_vs_chemical_reaction",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-021",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Sources and Nature of Background Radiation",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "Even when all radioactive sources are removed from a physics laboratory, a GM counter continues to register a steady count rate (e.g. 20-30 counts/min). What accounts for this background radiation?",
    options: [
      { key: "A", text: "Cosmic rays from outer space and naturally occurring terrestrial radioisotopes (such as Radon-222, Potassium-40, and Carbon-14 in rocks, building materials, and living tissue)." },
      { key: "B", text: "Static electricity generated by air conditioning currents." },
      { key: "C", text: "Fluorescent tube lighting leaking electrons into the detector." },
      { key: "D", text: "Microwave signals emitted from mobile phone towers." }
    ],
    correct_option: "A",
    explanation: "Background radiation is the omnipresent ionizing radiation in the natural environment. It arises from two primary sources:\n1. Cosmic rays: high-energy muons and photons penetrating the upper atmosphere from outer space.\n2. Terrestrial sources: radioactive radon gas (²²²Rn) emanating from ground soil/rocks, traces of Potassium-40 (⁴⁰K) and Carbon-14 (¹⁴C) naturally present in building stone and inside all organic tissue.",
    concept_name: "Background Radiation Sources and Measurement",
    concept_tag: "background_radiation_cosmic_terrestrial",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Class 10 Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-022",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Radiation Safety Protocols and Waste Disposal",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "Which of the following constitutes the internationally recognized, safest protocol for disposing of high-level radioactive nuclear waste?",
    options: [
      { key: "A", text: "Vitrifying the waste into borosilicate glass blocks, sealing them in thick lead-lined stainless steel casks, and entombing them in deep geological repositories deep underground in stable rock formations." },
      { key: "B", text: "Dumping into open ocean trenches inside ordinary plastic drums." },
      { key: "C", text: "Incinerating the radioactive materials at high temperature in industrial furnaces." },
      { key: "D", text: "Dissolving in strong acid and flushing into municipal drainage systems." }
    ],
    correct_option: "A",
    explanation: "High-level radioactive waste remains active for thousands of years. It must be converted into an insoluble glass matrix (vitrification), sealed inside corrosion-resistant multi-barrier casks (lead and stainless steel), and stored in deep geological repositories (~500 m underground in stable tectonic bedrock) far away from groundwater tables and seismic fault zones.",
    concept_name: "Radioactive Waste Management and Safety Precautions",
    concept_tag: "radioactive_waste_disposal_safety",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-023",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Why Gamma Emission Causes No Change in A or Z",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "When a nucleus emits a gamma (γ) ray photon, its mass number A and atomic number Z remain strictly unchanged. What is the fundamental physical nature of gamma emission?",
    options: [
      { key: "A", text: "It is an electromagnetic transition where an excited daughter nucleus drops from an excited nuclear energy state to its ground state, dissipating surplus energy as a high-energy photon." },
      { key: "B", text: "A proton converts into an antiproton, cancelling out charge." },
      { key: "C", text: "Two neutrons fuse into a proton inside the core." },
      { key: "D", text: "The nucleus absorbs an electron from outer shells." }
    ],
    correct_option: "A",
    explanation: "Following alpha or beta decay, the daughter nucleus is often left in an excited nuclear energy level (denoted as X*). Just as an excited atom emits visible/UV photons when orbital electrons drop to lower orbits, an excited nucleus transitions to a lower energy state or ground state by emitting a gamma-ray photon (hν). Because photons have zero rest mass and zero electrical charge, neither A nor Z is altered: ᴬ_Z X* → ᴬ_Z X + γ.",
    concept_name: "Nuclear De-excitation and Gamma Emission",
    concept_tag: "gamma_emission_energy_deexcitation",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-024",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Applications of Radioisotopes in Medicine and Archaeology",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "Match the correct radioisotope to its recognized medical or scientific application:\n1. Cobalt-60 (⁶⁰Co)\n2. Iodine-131 (¹³¹I)\n3. Carbon-14 (¹⁴C)\n4. Sodium-24 (²⁴Na)",
    options: [
      { key: "A", text: "⁶⁰Co for cancer radiotherapy; ¹³¹I for thyroid diagnosis/treatment; ¹⁴C for carbon dating of fossils; ²⁴Na for tracing blood circulation and clots." },
      { key: "B", text: "⁶⁰Co for carbon dating; ¹³¹I for blood circulation; ¹⁴C for cancer radiotherapy; ²⁴Na for thyroid treatment." },
      { key: "C", text: "⁶⁰Co for smoke detectors; ¹³¹I for dating fossils; ¹⁴C for blood circulation; ²⁴Na for nuclear power." },
      { key: "D", text: "All four are used exclusively as fuel in nuclear reactors." }
    ],
    correct_option: "A",
    explanation: "Cobalt-60 emits penetrative gamma rays used in teletherapy to destroy cancer tumors. Iodine-131 is selectively absorbed by the thyroid gland and used for diagnosing and treating thyroid disorders. Carbon-14 (half-life 5730 years) is used in radiocarbon dating of once-living organic remains. Sodium-24 is an injected medical tracer used to detect blood clots and examine circulation efficiency.",
    concept_name: "Radioisotope Applications in Medicine and Industry",
    concept_tag: "radioisotope_applications_cobalt_iodine_carbon",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Exemplar]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-025",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Nuclear Forces vs Electrostatic Repulsion in Heavy Nuclei",
    question_type: "theoretical",
    types_supported: ["theoretical"],
    question: "Why do atomic nuclei with atomic number Z > 82 (such as Lead and Uranium) become naturally radioactive and unstable?",
    options: [
      { key: "A", text: "The short-range strong nuclear attraction (~10⁻¹⁵ m) acts only between nearest neighbors, while long-range electrostatic Coulomb repulsion between all protons across the large nucleus overcomes the nuclear binding force." },
      { key: "B", text: "Heavy nuclei have too many electrons orbiting inside the nucleus." },
      { key: "C", text: "The speed of neutrons inside heavy nuclei exceeds the speed of light." },
      { key: "D", text: "Heavy elements absorb all cosmic rays from the atmosphere." }
    ],
    correct_option: "A",
    explanation: "The strong nuclear force is extremely powerful but strictly short-range (~1 to 2 fm), saturating with nearest neighbor nucleons. In contrast, electrostatic Coulomb repulsion between positively charged protons is long-range (1/r²) and acts across the entire volume of the nucleus. In large nuclei (Z > 82), the cumulative electrostatic repulsion of dozens of protons exceeds the cohesive hold of nuclear forces, rendering the nucleus inherently unstable and radioactive.",
    concept_name: "Nuclear Force Saturation and Radioactive Instability",
    concept_tag: "nuclear_force_range_instability_z_gt_82",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },

  // --- 26 to 33: COMPLEX QUESTIONS ---
  {
    globalId: "ICSE10-PHYS-RAD-026",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Complete Decay Chain: Uranium-238 to Lead-206",
    question_type: "complex",
    types_supported: ["complex", "numerical"],
    question: "A Uranium nucleus ²³⁸₉₂U undergoes a successive series of radioactive decays to eventually form a stable Lead nucleus ²⁰⁶₈₂Pb:\n\n²³⁸₉₂U → ²⁰⁶₈₂Pb + n_α (⁴₂He) + n_β (⁰₋₁e)\n\nCalculate the exact number of alpha particles (n_α) and beta particles (n_β) emitted in this decay series.",
    options: [
      { key: "A", text: "n_α = 8, n_β = 6" },
      { key: "B", text: "n_α = 6, n_β = 8" },
      { key: "C", text: "n_α = 8, n_β = 4" },
      { key: "D", text: "n_α = 7, n_β = 5" }
    ],
    correct_option: "A",
    explanation: "1. Only alpha emissions alter the mass number A (each α reduces A by 4):\nTotal change in A = 238 - 206 = 32.\nNumber of α-particles n_α = 32 / 4 = 8.\n\n2. Conservation of atomic number Z:\nInitial Z = 92, Final Z = 82.\nChange in Z = 92 - 82 = 10.\nEach α reduces Z by 2; each β⁻ increases Z by 1:\n2(n_α) - n_β = 10\n2(8) - n_β = 10 ⟹ 16 - n_β = 10 ⟹ n_β = 6.\n\nTherefore, 8 alpha particles and 6 beta particles are emitted.",
    concept_name: "Multi-Step Radioactive Decay Series",
    concept_tag: "decay_series_alpha_beta_count_uranium_lead",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-027",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Thorium Series Disintegration: Thorium-232 to Lead-208",
    question_type: "complex",
    types_supported: ["complex", "numerical"],
    question: "The radioactive Thorium series begins with ²³²₉₀Th and terminates at stable ²⁰⁸₈₂Pb. In another decay step, an intermediate nucleus ²²⁸₈₈Ra emits a beta particle to produce Actinium (Ac).\n\nFind the total number of alpha and beta particles emitted in the full Thorium series, and write the symbol with Z and A for the Actinium nucleus.",
    options: [
      { key: "A", text: "6 α and 4 β; Actinium nucleus is ²²⁸₈₉Ac" },
      { key: "B", text: "8 α and 6 β; Actinium nucleus is ²²⁸₈₇Ac" },
      { key: "C", text: "6 α and 2 β; Actinium nucleus is ²²⁴₈₉Ac" },
      { key: "D", text: "4 α and 6 β; Actinium nucleus is ²³²₉₁Ac" }
    ],
    correct_option: "A",
    explanation: "Change in mass number ΔA = 232 - 208 = 24 ⟹ n_α = 24 / 4 = 6 α-particles.\nChange in atomic number ΔZ = 90 - 82 = 8.\nSince 2(n_α) - n_β = 8 ⟹ 2(6) - n_β = 8 ⟹ 12 - n_β = 8 ⟹ n_β = 4 β-particles.\nFor the intermediate beta emission: ²²⁸₈₈Ra → ²²⁸₈₉Ac + ⁰₋₁e.\nMass number A remains 228, atomic number Z increases from 88 to 89: ²²⁸₈₉Ac.",
    concept_name: "Thorium Decay Series and Intermediate Isotope Tracking",
    concept_tag: "thorium_decay_series_alpha_beta",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-028",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Geological Dating from Daughter-to-Parent Ratio",
    question_type: "complex",
    types_supported: ["complex", "numerical"],
    question: "Analysis of a lunar rock specimen shows that the ratio of Lead-206 atoms to Uranium-238 atoms is 3 : 1 (i.e. N_Pb / N_U = 3). Assuming no Lead was initially present when the rock solidified and that Uranium-238 decays with a half-life of 4.5 × 10⁹ years, what is the age of the rock?",
    options: [
      { key: "A", text: "9.0 × 10⁹ years (2 half-lives)" },
      { key: "B", text: "1.35 × 10¹⁰ years (3 half-lives)" },
      { key: "C", text: "4.5 × 10⁹ years (1 half-life)" },
      { key: "D", text: "2.25 × 10⁹ years (0.5 half-life)" }
    ],
    correct_option: "A",
    explanation: "Let the current number of Uranium atoms be N_U = 1 unit.\nThen Lead atoms N_Pb = 3 units.\nThe initial number of Uranium atoms at solidification was N₀ = N_U + N_Pb = 1 + 3 = 4 units.\nThe fraction of original Uranium remaining is N_U / N₀ = 1 / 4 = (1/2)².\nThis means exactly n = 2 half-lives have elapsed.\nAge of rock = 2 × T₁/₂ = 2 × (4.5 × 10⁹ years) = 9.0 × 10⁹ years.",
    concept_name: "Radiometric Dating Using Daughter-to-Parent Ratio",
    concept_tag: "radiometric_dating_daughter_parent_ratio",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-029",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Branching Decay and Isobar vs Isotope Relationship",
    question_type: "complex",
    types_supported: ["complex", "theoretical"],
    question: "Nucleus X(Z, A) emits an alpha particle to form nucleus Y. In a separate decay pathway, nucleus X emits two consecutive beta particles to form nucleus W. In a third pathway, nucleus Y emits one beta particle to form nucleus Z.\n\nWhich pair among X, Y, W, and Z are ISOBARS (same mass number, different atomic number)?",
    options: [
      { key: "A", text: "X and W are isobars (both have mass number A)" },
      { key: "B", text: "X and Y are isobars" },
      { key: "C", text: "Y and W are isobars" },
      { key: "D", text: "W and Z are isobars" }
    ],
    correct_option: "A",
    explanation: "Let original nucleus be ᴬ_Z X.\n1. X emits α ⟹ Y has mass number A-4 and atomic number Z-2: ᴬ⁻⁴_{Z-2} Y.\n2. X emits two β⁻ particles ⟹ each β⁻ leaves mass number unchanged but increases Z by 1. Thus W has mass number A and atomic number Z+2: ᴬ_{Z+2} W.\nBecause X and W both have the EXACT same mass number A, but different atomic numbers (Z vs Z+2), X and W are by definition ISOBARS.",
    concept_name: "Nuclear Decays, Isotopes, and Isobars",
    concept_tag: "isobars_isotopes_decay_pathways",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-030",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Mass Defect and Binding Energy per Nucleon of Helium-4",
    question_type: "complex",
    types_supported: ["complex", "numerical"],
    question: "Given: Mass of proton m_p = 1.00728 u, mass of neutron m_n = 1.00866 u, and measured mass of Helium-4 nucleus m_α = 4.00150 u. (1 u = 931.5 MeV).\n\nCalculate the mass defect Δm of the Helium-4 nucleus and its binding energy per nucleon.",
    options: [
      { key: "A", text: "Δm = 0.03038 u; B.E. per nucleon ≈ 7.07 MeV" },
      { key: "B", text: "Δm = 0.04520 u; B.E. per nucleon ≈ 10.5 MeV" },
      { key: "C", text: "Δm = 0.01519 u; B.E. per nucleon ≈ 3.54 MeV" },
      { key: "D", text: "Δm = 0.06076 u; B.E. per nucleon ≈ 14.15 MeV" }
    ],
    correct_option: "A",
    explanation: "A Helium-4 nucleus contains Z = 2 protons and (A - Z) = 2 neutrons.\nTotal mass of constituent nucleons:\n2(m_p) + 2(m_n) = 2(1.00728) + 2(1.00866) = 2.01456 + 2.01732 = 4.03188 u.\nMass defect Δm = 4.03188 - 4.00150 = 0.03038 u.\nTotal binding energy E_b = 0.03038 × 931.5 MeV = 28.299 MeV.\nBinding energy per nucleon = E_b / A = 28.299 / 4 ≈ 7.07 MeV/nucleon.",
    concept_name: "Mass Defect and Binding Energy Calculation",
    concept_tag: "mass_defect_binding_energy_helium4",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-031",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Energy Liberated from Complete Fission of 1 kg Uranium-235",
    question_type: "complex",
    types_supported: ["complex", "numerical"],
    question: "Assuming each fission of Uranium-235 releases 200 MeV of energy, calculate the total energy in Joules liberated by the complete fission of 1.0 kg of pure Uranium-235.\n(Avogadro's number N_A = 6.02 × 10²³ mol⁻¹, 1 eV = 1.6 × 10⁻¹⁹ J).",
    options: [
      { key: "A", text: "8.21 × 10¹³ J (equivalent to burning ~2,500 tonnes of high-grade coal)" },
      { key: "B", text: "5.14 × 10¹⁰ J" },
      { key: "C", text: "1.60 × 10¹⁶ J" },
      { key: "D", text: "3.20 × 10¹² J" }
    ],
    correct_option: "A",
    explanation: "1. Number of moles in 1 kg (1000 g) of ²³⁵U = 1000 / 235 ≈ 4.255 mol.\n2. Total number of nuclei N = 4.255 × 6.02 × 10²³ ≈ 2.562 × 10²⁴ nuclei.\n3. Total energy in MeV = 2.562 × 10²⁴ × 200 MeV = 5.124 × 10²⁶ MeV.\n4. Converting to Joules:\nTotal Energy = 5.124 × 10²⁶ × (10⁶) × (1.602 × 10⁻¹⁹ J) ≈ 8.21 × 10¹³ J.\nThis demonstrates the staggering energy density of nuclear fission compared to fossil fuels.",
    concept_name: "Total Energy Release in Complete Fission",
    concept_tag: "total_fission_energy_1kg_uranium",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-032",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Crossed Fields Velocity Selector for Beta Beam",
    question_type: "complex",
    types_supported: ["complex", "numerical"],
    question: "A beam of beta particles enters a region containing mutually perpendicular electric and magnetic fields (E = 6.0 × 10⁴ V/m directed downward, B = 0.20 T directed into the page).\n\nAt what exact velocity v must the beta particles travel so that the electric force exactly cancels the magnetic force, allowing them to pass through completely undeflected?",
    options: [
      { key: "A", text: "3.0 × 10⁵ m/s (using v = E / B)" },
      { key: "B", text: "1.2 × 10⁶ m/s" },
      { key: "C", text: "3.0 × 10⁸ m/s" },
      { key: "D", text: "1.5 × 10⁴ m/s" }
    ],
    correct_option: "A",
    explanation: "For zero net deflection, the electric force F_e = qE must equal the magnetic Lorentz force F_b = qvB in magnitude:\nqE = qvB\nCanceling charge q gives:\nv = E / B = (6.0 × 10⁴ V/m) / (0.20 T) = 3.0 × 10⁵ m/s.\nBeta particles with this exact velocity continue straight ahead along the central axis, while all other speeds are deflected away.",
    concept_name: "Velocity Selector in Crossed E and B Fields",
    concept_tag: "velocity_selector_crossed_fields_beta",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-033",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Sequential Decay Yielding an Isotope of the Ancestor",
    question_type: "complex",
    types_supported: ["complex", "theoretical"],
    question: "A radioactive nucleus X emits one alpha particle followed by two beta particles in successive disintegrations:\n\nX → Y + α;\nY → Z + β⁻;\nZ → W + β⁻.\n\nWhat is the relationship between the final daughter nucleus W and the original ancestor nucleus X?",
    options: [
      { key: "A", text: "W is an isotope of X (same atomic number Z, but mass number A is 4 units less)" },
      { key: "B", text: "W is an isobar of X (same mass number A)" },
      { key: "C", text: "W is identical in all respects to X" },
      { key: "D", text: "W has atomic number Z+2 and mass number A" }
    ],
    correct_option: "A",
    explanation: "Let original ancestor be ᴬ_Z X.\n1. Alpha decay: ᴬ_Z X → ᴬ⁻⁴_{Z-2} Y + ⁴₂He.\n2. First beta decay: ᴬ⁻⁴_{Z-2} Y → ᴬ⁻⁴_{Z-1} Z + ⁰₋₁e.\n3. Second beta decay: ᴬ⁻⁴_{Z-1} Z → ᴬ⁻⁴_Z W + ⁰₋₁e.\nComparing W and X:\nBoth have the EXACT same atomic number Z, which means they belong to the same chemical element.\nHowever, W has mass number (A - 4), which is 4 units less than X.\nTherefore, W is an ISOTOPE of X.",
    concept_name: "Isotope Generation Through Alpha Followed by Two Betas",
    concept_tag: "decay_sequence_isotope_ancestor",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },

  // --- 34 to 40: NUMERICAL QUESTIONS ---
  {
    globalId: "ICSE10-PHYS-RAD-034",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Half-Life Mass Calculation After Elapsed Time",
    question_type: "numerical",
    types_supported: ["numerical"],
    question: "The half-life of a radioactive isotope Sodium-24 (²⁴Na) is 15 hours. If a clinic receives an initial mass of 64.0 mg, what mass of Sodium-24 remains undecayed after exactly 60 hours?",
    options: [
      { key: "A", text: "4.0 mg" },
      { key: "B", text: "8.0 mg" },
      { key: "C", text: "2.0 mg" },
      { key: "D", text: "16.0 mg" }
    ],
    correct_option: "A",
    explanation: "1. Half-life T₁/₂ = 15 hours.\n2. Total elapsed time t = 60 hours.\n3. Number of elapsed half-lives n = t / T₁/₂ = 60 / 15 = 4.\n4. Remaining mass M = M₀ × (1/2)ⁿ = 64.0 × (1/2)⁴ = 64.0 / 16 = 4.0 mg.",
    concept_name: "Half-Life Exponential Mass Decay",
    concept_tag: "half_life_mass_calculation",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Numerical]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-035",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Activity Count Rate Reduction Across Multiple Half-Lives",
    question_type: "numerical",
    types_supported: ["numerical"],
    question: "A freshly isolated radioactive tracer sample exhibits an initial activity of 1600 Bq. What will its activity be after 4 complete half-lives have elapsed?",
    options: [
      { key: "A", text: "100 Bq" },
      { key: "B", text: "200 Bq" },
      { key: "C", text: "400 Bq" },
      { key: "D", text: "50 Bq" }
    ],
    correct_option: "A",
    explanation: "Activity after n half-lives is given by A = A₀ × (1/2)ⁿ.\nHere A₀ = 1600 Bq and n = 4.\nA = 1600 × (1/2)⁴ = 1600 / 16 = 100 Bq.",
    concept_name: "Activity Reduction Law",
    concept_tag: "activity_half_life_calculation",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Numerical]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-036",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Energy Equivalent of Mass Defect in Atomic Mass Units",
    question_type: "numerical",
    types_supported: ["numerical"],
    question: "During a nuclear disintegration, a mass defect of Δm = 0.050 amu is observed. Given that 1 amu is equivalent to 931.5 MeV of energy, calculate the energy released in MeV.",
    options: [
      { key: "A", text: "46.575 MeV" },
      { key: "B", text: "93.15 MeV" },
      { key: "C", text: "18.63 MeV" },
      { key: "D", text: "4.658 MeV" }
    ],
    correct_option: "A",
    explanation: "Energy released E = Δm × 931.5 MeV/amu.\nE = 0.050 × 931.5 = 46.575 MeV.",
    concept_name: "Mass-Energy Conversion in Atomic Mass Units",
    concept_tag: "mass_defect_mev_conversion",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Numerical]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-037",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Time Required for Fractional Disintegration",
    question_type: "numerical",
    types_supported: ["numerical"],
    question: "A radioactive element has a half-life of 20 days. In what total time will exactly 87.5% of the original sample have disintegrated?",
    options: [
      { key: "A", text: "60 days (3 half-lives)" },
      { key: "B", text: "40 days (2 half-lives)" },
      { key: "C", text: "80 days (4 half-lives)" },
      { key: "D", text: "100 days (5 half-lives)" }
    ],
    correct_option: "A",
    explanation: "1. If 87.5% of the sample has decayed, the remaining fraction is:\nRemaining = 100% - 87.5% = 12.5% = 1/8 of original.\n2. Since (1/2)ⁿ = 1/8 = (1/2)³, exactly n = 3 half-lives have elapsed.\n3. Total time t = n × T₁/₂ = 3 × 20 days = 60 days.",
    concept_name: "Disintegration Time from Decayed Percentage",
    concept_tag: "fractional_disintegration_time_calculation",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Numerical]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-038",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Alpha Particle Kinetic Energy Percentage",
    question_type: "numerical",
    types_supported: ["numerical"],
    question: "A stationary Radium-226 nucleus decays into Radon-222 by emitting an alpha particle: ²²⁶Ra → ²²²Rn + ⁴He. If the total disintegration energy Q is 4.87 MeV, what is the kinetic energy of the emitted alpha particle?",
    options: [
      { key: "A", text: "4.78 MeV (98.2% of Q)" },
      { key: "B", text: "2.44 MeV (50% of Q)" },
      { key: "C", text: "4.00 MeV (82.1% of Q)" },
      { key: "D", text: "0.09 MeV (1.8% of Q)" }
    ],
    correct_option: "A",
    explanation: "By conservation of momentum and energy:\nK_α = Q × (m_Rn / (m_Rn + m_α)) = 4.87 × (222 / 226) = 4.87 × 0.9823 ≈ 4.78 MeV.\nThe recoiling daughter nucleus takes only 4.87 - 4.78 = 0.09 MeV.",
    concept_name: "Kinetic Energy of Emitted Alpha Particle",
    concept_tag: "alpha_decay_kinetic_energy_numerical",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Numerical]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-039",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Count Rate with Background Radiation Subtraction Trap",
    question_type: "numerical",
    types_supported: ["numerical"],
    question: "A Geiger-Müller counter records a steady background radiation rate of 25 counts/min. When a radioactive sample is introduced, the total measured count rate rises to 425 counts/min. If the sample has a half-life of 3 hours, what will the TOTAL measured count rate on the counter be after 6 hours?",
    options: [
      { key: "A", text: "125 counts/min (100 counts/min source + 25 counts/min background)" },
      { key: "B", text: "106.25 counts/min" },
      { key: "C", text: "100 counts/min" },
      { key: "D", text: "212.5 counts/min" }
    ],
    correct_option: "A",
    explanation: "1. The TRUE net count rate of the radioactive source at t = 0 is:\nNet R₀ = Measured Rate - Background = 425 - 25 = 400 counts/min.\n2. In t = 6 hours, number of half-lives n = 6 / 3 = 2 half-lives.\n3. Net count rate of source after 2 half-lives = 400 / 2² = 400 / 4 = 100 counts/min.\n4. The detector continuously registers background radiation, so the total measured count rate will be:\nTotal Measured = Net Source + Background = 100 + 25 = 125 counts/min.\n(Note: Option B is the classic trap of simply dividing 425 by 4 without subtracting background first!).",
    concept_name: "Background Radiation Subtraction in Count Rate",
    concept_tag: "background_radiation_count_rate_trap",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board HOTS / Past Pattern]",
    source_status: "olympiad_style"
  },
  {
    globalId: "ICSE10-PHYS-RAD-040",
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Physics",
    chapter: "Radioactivity",
    title: "Mass Defect from Einstein's Mass-Energy Equation in SI Units",
    question_type: "numerical",
    types_supported: ["numerical"],
    question: "Using Einstein's mass-energy equation E = Δm · c² (where c = 3.0 × 10⁸ m/s), determine the mass defect in kilograms required to generate exactly 9.0 × 10¹³ Joules of energy.",
    options: [
      { key: "A", text: "1.0 × 10⁻³ kg (1.0 gram)" },
      { key: "B", text: "3.0 × 10⁻⁵ kg" },
      { key: "C", text: "1.0 × 10⁻⁶ kg" },
      { key: "D", text: "1.0 kg" }
    ],
    correct_option: "A",
    explanation: "From E = Δm · c²:\nΔm = E / c² = (9.0 × 10¹³ J) / (3.0 × 10⁸ m/s)² = (9.0 × 10¹³) / (9.0 × 10¹⁶) = 1.0 × 10⁻³ kg = 1.0 g.\nThus, converting just one gram of matter entirely into energy yields a colossal 90 trillion Joules.",
    concept_name: "Einstein Mass-Energy Conversion in SI Units",
    concept_tag: "einstein_mass_energy_si_units",
    difficulty: "ELITE",
    verified_by: "code",
    source: "[ICSE Board Numerical]",
    source_status: "olympiad_style"
  }
];

const targetPath = path.join(__dirname, 'questionBank', 'physics_radioactivity.json');
fs.writeFileSync(targetPath, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Successfully generated ${questions.length} questions in ${targetPath}`);
