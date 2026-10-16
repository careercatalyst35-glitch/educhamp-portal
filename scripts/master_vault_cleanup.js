// scripts/master_vault_cleanup.js
const fs = require('fs');
const path = require('path');

function cleanText(text) {
  if (!text || typeof text !== 'string') return text || '';
  return text
    // Remove ChatGPT scrape artifacts and citations
    .replace(/image_group[^\n]*\n?/g, '')
    .replace(/\{@body[^\n]*\n?/g, '')
    .replace(/<[Cc]ite[^>]*\/>/gi, '')
    .replace(/<[Ee]ntity[^>]*\/>/gi, '')
    .replace(/<divider\/>/gi, '')
    .replace(/<text[^>]*>([\s\S]*?)<\/text>/gi, '$1')
    .replace(/cite[^\n]*?/g, '')
    .replace(/<\/?(?:box|div|span|p|b|i)[^>]*>/gi, '')
    .replace(/---\s*\n\s*##\s*Quick revision checklist[\s\S]*?(?=(A |What|Calculate|A light|The|$))/gi, '')
    .replace(/```(?:mermaid|json)?[\s\S]*?```/g, '')
    .replace(/\n\n---\s*\n\s*##\s*(?:Part B|Question bank complete|Answer key|Section B)[\s\S]*$/gi, '')
    // LaTeX formatting commands
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
    .replace(/\s*\*\*Options\*\*\s*$/i, '')
    .replace(/\s*\*\*Options:\*\*\s*$/i, '')
    .replace(/^\s*\*\s*/, '')
    .replace(/^\\:\*\*\s*/, '')
    .replace(/\\/g, '') // remove remaining backslashes
    .trim();
}

// 1. Genuine Beam Diagram SVG for Question 0 / Beam Problems
const BEAM_DIAGRAM_SVG = `<svg viewBox="0 0 520 220" width="100%" class="q-diagram-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowDownRed" viewBox="0 0 10 10" refX="5" refY="10" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 0 L 5 10 z" fill="#b91c1c"/>
    </marker>
    <marker id="arrowTargetBlue" viewBox="0 0 10 10" refX="5" refY="10" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 0 L 5 10 z" fill="#0284c7"/>
    </marker>
  </defs>
  <rect x="5" y="5" width="510" height="210" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="40" y="85" width="440" height="14" rx="3" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
  <polygon points="260,99 245,135 275,135" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
  <rect x="235" y="135" width="50" height="8" fill="#78350f" rx="2"/>
  <circle cx="260" cy="103" r="3" fill="#ffffff" stroke="#78350f" stroke-width="1.5"/>
  <text x="260" y="158" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f">Pivot (Centre)</text>
  <line x1="110" y1="65" x2="260" y2="65" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="110" y1="58" x2="110" y2="72" stroke="#64748b" stroke-width="1.5"/>
  <line x1="260" y1="58" x2="260" y2="72" stroke="#64748b" stroke-width="1.5"/>
  <text x="185" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" fill="#475569">0.75 m</text>
  <line x1="110" y1="18" x2="110" y2="83" stroke="#b91c1c" stroke-width="3" marker-end="url(#arrowDownRed)"/>
  <text x="110" y="14" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#b91c1c">40 N</text>
  <line x1="260" y1="75" x2="320" y2="75" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="320" y1="68" x2="320" y2="82" stroke="#0284c7" stroke-width="1.5"/>
  <text x="290" y="71" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="600" fill="#0369a1">0.30 m</text>
  <line x1="320" y1="28" x2="320" y2="83" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,2" marker-end="url(#arrowTargetBlue)"/>
  <text x="320" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#0284c7">F = ?</text>
  <line x1="260" y1="175" x2="380" y2="175" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="260" y1="168" x2="260" y2="182" stroke="#64748b" stroke-width="1.5"/>
  <line x1="380" y1="168" x2="380" y2="182" stroke="#64748b" stroke-width="1.5"/>
  <text x="320" y="190" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" fill="#475569">0.60 m</text>
  <line x1="380" y1="18" x2="380" y2="83" stroke="#b91c1c" stroke-width="3" marker-end="url(#arrowDownRed)"/>
  <text x="380" y="14" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#b91c1c">25 N</text>
  <text x="260" y="208" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">Rotational Equilibrium: Total Anticlockwise Moment = Total Clockwise Moment</text>
</svg>`;

// Genuine Metre Rule Diagram SVG for Q99
const METRE_RULE_DIAGRAM_SVG = `<svg viewBox="0 0 500 160" width="100%" class="q-diagram-svg" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="490" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <!-- Metre rule body (0 to 100 cm) -->
  <rect x="40" y="60" width="420" height="16" rx="2" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
  <!-- 0 cm label -->
  <text x="40" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">0 cm</text>
  <!-- 100 cm label -->
  <text x="460" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">100 cm</text>
  <!-- Pivot at 45 cm (x = 40 + 420*0.45 = 229) -->
  <polygon points="229,76 217,105 241,105" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="229" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Knife-edge (45 cm)</text>
  <!-- Mass m at 20 cm (x = 40 + 420*0.20 = 124) -->
  <line x1="124" y1="76" x2="124" y2="105" stroke="#2563eb" stroke-width="2"/>
  <rect x="110" y="105" width="28" height="20" rx="3" fill="#3b82f6" stroke="#1d4ed8"/>
  <text x="124" y="119" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">m=?</text>
  <text x="124" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1d4ed8">20 cm</text>
  <!-- Centre of gravity of rule at 50 cm (x = 40 + 420*0.50 = 250) -->
  <line x1="250" y1="76" x2="250" y2="105" stroke="#15803d" stroke-width="2"/>
  <rect x="236" y="105" width="28" height="20" rx="3" fill="#22c55e" stroke="#15803d"/>
  <text x="250" y="119" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff">100g</text>
  <text x="250" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803d">50 cm</text>
  <text x="250" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" fill="#334155">Moment of suspended mass m = Moment of rule's own weight</text>
</svg>`;

// Curated question templates for Force repairs
const FORCE_REPAIRS = {
  wheelbarrow: {
    title: "The Load on a Wheelbarrow",
    question: "A load of 200 N is carried in a wheelbarrow at a distance of 0.4 m from the wheel axle (fulcrum). If the effort is applied vertically upwards at a distance of 1.2 m from the axle, what is the minimum effort required to lift the load?",
    options: [
      { key: "A", text: "40 N" },
      { key: "B", text: "66.7 N" },
      { key: "C", text: "100 N" },
      { key: "D", text: "600 N" }
    ],
    correct_option: "B",
    explanation: "By the principle of moments for a Class II lever: Effort × Effort Arm = Load × Load Arm. Effort × 1.2 m = 200 N × 0.4 m => Effort × 1.2 = 80 => Effort = 80 / 1.2 = 66.7 N."
  },
  nutcracker: {
    title: "The Nutcracker",
    question: "A nutcracker has an effort arm of 12 cm and a load arm of 4 cm. If an effort of 30 N is applied at the outer handles, what crushing force (load) is exerted on the nut located between the jaws?",
    options: [
      { key: "A", text: "10 N" },
      { key: "B", text: "30 N" },
      { key: "C", text: "60 N" },
      { key: "D", text: "90 N" }
    ],
    correct_option: "D",
    explanation: "For an ideal Class II lever: Load × Load Arm = Effort × Effort Arm. Load × 4 cm = 30 N × 12 cm => Load × 4 = 360 => Load = 360 / 4 = 90 N."
  },
  bottle_opener: {
    title: "The Bottle Opener",
    question: "A bottle opener of length 10 cm is used to open a bottle cap requiring a lifting force of 120 N. If the cap is situated at 2.0 cm from the fulcrum, what minimum effort must be applied at the end of the handle?",
    options: [
      { key: "A", text: "12 N" },
      { key: "B", text: "24 N" },
      { key: "C", text: "60 N" },
      { key: "D", text: "600 N" }
    ],
    correct_option: "B",
    explanation: "By the principle of moments: Effort × Effort Arm = Load × Load Arm. Effort × 10 cm = 120 N × 2 cm => Effort × 10 = 240 => Effort = 240 / 10 = 24 N."
  },
  disc_force: {
    title: "The Force at the Edge of a Disc",
    question: "A uniform circular disc of radius 0.3 m is pivoted at its centre. A tangential force applied at its circumference is reduced from 20 N to 15 N. By what amount does the torque (moment of force) acting on the disc decrease?",
    options: [
      { key: "A", text: "0.9 N m" },
      { key: "B", text: "1.5 N m" },
      { key: "C", text: "3.0 N m" },
      { key: "D", text: "6.0 N m" }
    ],
    correct_option: "B",
    explanation: "Initial moment: M₁ = F₁ × r = 20 N × 0.3 m = 6.0 N m. Final moment: M₂ = F₂ × r = 15 N × 0.3 m = 4.5 N m. Decrease in moment: ΔM = M₁ - M₂ = 6.0 - 4.5 = 1.5 N m."
  },
  off_centre_pivot: {
    title: "A Uniform Metre Rule with an Off-Centre Pivot",
    question: "A uniform metre rule of weight 4.0 N is pivoted at the 65 cm mark. What is the magnitude of the moment produced by the rule's own weight about this pivot?",
    options: [
      { key: "A", text: "0.04 N m" },
      { key: "B", text: "0.06 N m" },
      { key: "C", text: "0.26 N m" },
      { key: "D", text: "0.60 N m" }
    ],
    correct_option: "D",
    explanation: "The weight of a uniform 100 cm metre rule acts through its centre of gravity at the 50 cm mark. Distance from pivot (65 cm) = 65 cm - 50 cm = 15 cm = 0.15 m. Moment of weight = Force × Distance = 4.0 N × 0.15 m = 0.60 N m (acting anticlockwise)."
  },
  fan_blade: {
    title: "The Spinning Fan Blade",
    question: "A ceiling fan rotates about its central axis at a constant speed. Which of the following statements correctly describes the velocity and acceleration of a point located at the outer tip of a blade?",
    options: [
      { key: "A", text: "Its velocity is directed towards the centre." },
      { key: "B", text: "Its acceleration is zero because its speed is constant." },
      { key: "C", text: "Its velocity is tangential, and its centripetal acceleration is directed towards the centre." },
      { key: "D", text: "Its acceleration is tangential and directed away from the centre." }
    ],
    correct_option: "C",
    explanation: "In uniform circular motion, the speed is constant but the direction of velocity changes continuously, remaining tangential to the circular path at every point. This continuous change in velocity gives rise to centripetal acceleration, which is directed radially inwards towards the centre of rotation."
  },
  stone_string: {
    title: "The Stone Whirled on a String",
    question: "A stone of mass 0.2 kg is whirled in a horizontal circle of radius 0.5 m with a constant speed of 5.0 m/s. What is the tension in the string that provides the necessary centripetal force?",
    options: [
      { key: "A", text: "2.5 N" },
      { key: "B", text: "5 N" },
      { key: "C", text: "10 N" },
      { key: "D", text: "25 N" }
    ],
    correct_option: "C",
    explanation: "Centripetal force F_c = (m × v²) / r = (0.2 × 5²) / 0.5 = (0.2 × 25) / 0.5 = 5.0 / 0.5 = 10 N. The string tension supplies this required centripetal force."
  },
  string_breaks: {
    title: "What Happens When the String Breaks?",
    question: "A stone tied to the end of a string is whirled in a horizontal circular path. If the string suddenly snaps, along which path will the stone fly off?",
    options: [
      { key: "A", text: "Directly towards the centre of the circle." },
      { key: "B", text: "Directly away from the centre along the radius." },
      { key: "C", text: "Along the tangent to the circular path at the instant of breaking." },
      { key: "D", text: "Along the circular path for a few revolutions." }
    ],
    correct_option: "C",
    explanation: "The string supplies the inward centripetal force that keeps the stone in circular motion. Once the string breaks, this force ceases to act. By Newton's first law of motion (inertia of direction), the stone continues to move along a straight line tangent to the circular path at that instant."
  },
  smaller_circle: {
    title: "The Same Speed, a Smaller Circle",
    question: "A particle of mass m moves at constant speed v in a horizontal circular path of radius r under centripetal force F. If the radius is halved while the speed remains unchanged, what happens to the required centripetal force?",
    options: [
      { key: "A", text: "It becomes half." },
      { key: "B", text: "It remains unchanged." },
      { key: "C", text: "It doubles." },
      { key: "D", text: "It becomes four times as large." }
    ],
    correct_option: "C",
    explanation: "Centripetal force F = (m × v²) / r. When mass m and speed v remain constant, F is inversely proportional to radius r (F ∝ 1/r). Halving the radius doubles the required centripetal force: F' / F = r / (r/2) = 2."
  },
  turning_bus: {
    title: "The Turning Bus and Inertia",
    question: "When a bus rounds a sharp circular curve at constant speed, a standing passenger feels pushed outwards towards the exterior of the curve. Which of the following statements is physically correct?",
    options: [
      { key: "A", text: "A real outward force accelerates the passenger away from the centre." },
      { key: "B", text: "The passenger's inertia resists the change in direction of motion, while the bus undergoes inward acceleration." },
      { key: "C", text: "Gravity acts horizontally towards the outside of the curve." },
      { key: "D", text: "The bus has zero acceleration because its speed is constant." }
    ],
    correct_option: "B",
    explanation: "Even at constant speed, the bus changes direction continuously and undergoes centripetal acceleration directed towards the centre of the curve. The standing passenger, due to inertia of direction, tends to continue in a straight line, which feels like an outward push relative to the accelerating frame of the bus."
  },
  moving_fulcrum: {
    title: "The Lever with a Moving Fulcrum",
    question: "A light horizontal lever has a load arm of 20 cm and an effort arm of 80 cm. If the fulcrum is relocated such that the load arm becomes 40 cm and the effort arm becomes 40 cm, by what factor does the effort needed to support the same load increase?",
    options: [
      { key: "A", text: "It becomes 2 times as large." },
      { key: "B", text: "It becomes 4 times as large." },
      { key: "C", text: "It becomes 0.5 times as large." },
      { key: "D", text: "It remains unchanged." }
    ],
    correct_option: "B",
    explanation: "Initial effort: E₁ = Load × (Load Arm / Effort Arm) = L × (20 / 80) = 0.25 L. After shifting the fulcrum: E₂ = Load × (40 / 40) = 1.0 L. Ratio: E₂ / E₁ = 1.0 / 0.25 = 4. Thus, the required effort becomes 4 times as large."
  },
  stable_unstable: {
    title: "Stable, Unstable and Neutral Equilibrium",
    question: "Three identical spheres are placed in three different positions: (I) resting at the bottom of a spherical hollow bowl, (II) on a flat horizontal table, and (III) balanced at the apex of an inverted spherical bowl. Which option correctly identifies their states of equilibrium?",
    options: [
      { key: "A", text: "Stable, Neutral, Unstable" },
      { key: "B", text: "Unstable, Stable, Neutral" },
      { key: "C", text: "Neutral, Unstable, Stable" },
      { key: "D", text: "Stable, Unstable, Neutral" }
    ],
    correct_option: "A",
    explanation: "In position I (bottom of bowl), displacing the sphere raises its centre of gravity, and it returns to original position (Stable equilibrium). In position II (flat table), displacing the sphere leaves its centre of gravity at the same height (Neutral equilibrium). In position III (top of inverted bowl), displacement lowers its centre of gravity, causing it to fall away (Unstable equilibrium)."
  },
  rotating_satellite: {
    title: "The Rotating Satellite",
    question: "A communication satellite orbits the Earth in a circular orbit at constant speed. Which of the following statements correctly describes the force acting on it and the nature of its motion?",
    options: [
      { key: "A", text: "Earth's gravitational force increases its speed continuously." },
      { key: "B", text: "The satellite has no acceleration because its speed is constant." },
      { key: "C", text: "Earth's gravitational force provides centripetal acceleration, changing the direction of velocity." },
      { key: "D", text: "The satellite's velocity is directed towards Earth at every instant." }
    ],
    correct_option: "C",
    explanation: "Earth's gravitational attraction acts towards its centre and provides the necessary centripetal force for circular orbital motion. In a circular orbit, the satellite's speed is constant, but the direction of its velocity vector changes continuously, resulting in centripetal acceleration directed towards the centre of the Earth."
  },
  rotating_stone_work: {
    title: "The Rotating Stone and Work Done",
    question: "A stone tied to the end of a string is whirled in a circular path at constant speed. What is the total work done by the tension (centripetal force) in one complete revolution?",
    options: [
      { key: "A", text: "Positive" },
      { key: "B", text: "Negative" },
      { key: "C", text: "Zero" },
      { key: "D", text: "Depends on the mass of the stone" }
    ],
    correct_option: "C",
    explanation: "Work done is given by W = F × s × cos(θ). The centripetal force (string tension) acts radially inwards towards the centre of the circle, whereas the instantaneous displacement is tangential at every point, making θ = 90°. Since cos(90°) = 0, the work done by centripetal force is always zero."
  },
  force_through_pivot: {
    title: "A Force Acting Through the Pivot",
    question: "A force of 40 N is applied to a body directly along a line that passes through its pivot point. What is the moment of this force about the pivot?",
    options: [
      { key: "A", text: "20 N m" },
      { key: "B", text: "40 N m" },
      { key: "C", text: "0 N m" },
      { key: "D", text: "50 N m" }
    ],
    correct_option: "C",
    explanation: "Moment of force = Force × Perpendicular distance from pivot (F × d). When the line of action of the force passes directly through the pivot, the perpendicular distance d is zero. Hence, Moment = 40 N × 0 m = 0 N m."
  },
  two_forces_door: {
    title: "Two Forces on a Door",
    question: "A door of width 0.9 m is opened by applying a perpendicular force of 40 N at the handle at its outer edge. What force must be applied at a point 0.4 m from the hinges to produce the same turning effect?",
    options: [
      { key: "A", text: "20 N" },
      { key: "B", text: "40 N" },
      { key: "C", text: "60 N" },
      { key: "D", text: "90 N" }
    ],
    correct_option: "D",
    explanation: "Turning effect (torque) = Force × Perpendicular distance from hinge. Initial torque M = 40 N × 0.9 m = 36 N m. For the new force F at 0.4 m: F × 0.4 m = 36 N m => F = 36 / 0.4 = 90 N."
  },
  unknown_support_force: {
    title: "The Unknown Support Force",
    question: "A light horizontal rod is pivoted at a fulcrum. A load of 20 N is placed 30 cm to the left of the fulcrum. What weight W placed 50 cm to the right of the fulcrum will keep the rod in horizontal equilibrium?",
    options: [
      { key: "A", text: "8 N" },
      { key: "B", text: "12 N" },
      { key: "C", text: "15 N" },
      { key: "D", text: "33.3 N" }
    ],
    correct_option: "B",
    explanation: "By the principle of moments: Anticlockwise moment = Clockwise moment. 20 N × 30 cm = W × 50 cm => 600 = 50 W => W = 600 / 50 = 12 N."
  },
  suspended_triangular_lamina: {
    title: "The Suspended Triangular Lamina",
    question: "A uniform triangular lamina is suspended freely by a pin through one of its vertices A. When it comes to rest in stable equilibrium, which of the following statements is true regarding its centre of gravity G?",
    options: [
      { key: "A", text: "Weight acts vertically downward through G, and its line of action passes through A so its moment about A is zero." },
      { key: "B", text: "Weight acts vertically upward through G, and its moment about A is zero." },
      { key: "C", text: "Weight acts vertically downward, producing maximum moment about A." },
      { key: "D", text: "Weight acts along the median, but its moment is always non-zero." }
    ],
    correct_option: "A",
    explanation: "A freely suspended body always comes to rest in stable equilibrium with its centre of gravity G lying vertically below the point of suspension A. In this position, the line of action of the weight passes directly through the pivot A, so the perpendicular distance is zero and the turning effect (moment) is zero."
  },
  centre_of_gravity_shifts: {
    title: "The Centre of Gravity Shifts",
    question: "A uniform metre rule of length 100 cm has its centre of gravity at the 50 cm mark. If a small metal weight is attached securely to the rule at the 80 cm mark, what happens to the position of the combined centre of gravity of the system?",
    options: [
      { key: "A", text: "It remains at 50 cm." },
      { key: "B", text: "It shifts to the left of 50 cm." },
      { key: "C", text: "It shifts to the right of 50 cm, towards the added mass." },
      { key: "D", text: "It moves beyond 100 cm." }
    ],
    correct_option: "C",
    explanation: "The centre of gravity of a composite body is the point where the resultant weight acts. Adding a mass to the right side (at 80 cm) shifts the resultant balance point towards the added mass, to the right of 50 cm."
  },
  couple_turning_effect: {
    title: "A Couple and Its Turning Effect",
    question: "Two equal, opposite, and parallel forces of 10 N each act along lines separated by a perpendicular distance of 0.5 m. What is the magnitude of the moment of this couple?",
    options: [
      { key: "A", text: "0 N m" },
      { key: "B", text: "2.5 N m" },
      { key: "C", text: "5 N m" },
      { key: "D", text: "10 N m" }
    ],
    correct_option: "C",
    explanation: "The moment of a couple is defined as the product of the magnitude of either force and the perpendicular distance between their lines of action (couple arm). Moment of Couple = Force × Couple arm = 10 N × 0.5 m = 5 N m."
  },
  uniform_beam_three_loads: {
    title: "The Uniform Beam with Three Loads",
    question: "A light horizontal beam is pivoted at its centre O. Two downward forces of 10 N and 20 N act at distances of 0.40 m and 0.10 m respectively to the left of O. What downward force acting at 0.30 m to the right of O will establish rotational equilibrium?",
    options: [
      { key: "A", text: "5 N" },
      { key: "B", text: "10 N" },
      { key: "C", text: "15 N" },
      { key: "D", text: "20 N" }
    ],
    correct_option: "D",
    explanation: "Total anticlockwise moment = (10 N × 0.40 m) + (20 N × 0.10 m) = 4.0 + 2.0 = 6.0 N m. For equilibrium, Clockwise Moment = Anticlockwise Moment => F × 0.30 m = 6.0 N m => F = 6.0 / 0.30 = 20 N."
  },
  chemical_bonding_integrated: {
    title: "Integrated Bonding Challenge",
    question: "Element X has atomic number 13, element Y has atomic number 8, and element Z has atomic number 17. Which statement is correct regarding their ionic or covalent compounds?",
    options: [
      { key: "A", text: "X forms X⁺, and its compound with Y is XY." },
      { key: "B", text: "X and Z form a covalent molecule XZ because both are in period 3." },
      { key: "C", text: "Y forms Y⁺, while Z forms Z²⁻." },
      { key: "D", text: "X forms X³⁺; its oxide is X₂Y₃, and its chloride is XZ₃." }
    ],
    correct_option: "D",
    explanation: "Element X (Al, Z=13) has electronic configuration 2, 8, 3 and forms the X³⁺ cation by losing 3 valence electrons. Element Y (O, Z=8) has configuration 2, 6 and forms Y²⁻. Element Z (Cl, Z=17) has configuration 2, 8, 7 and forms Z⁻. Therefore, the formula of the oxide is X₂Y₃ (Al₂O₃), and the chloride is XZ₃ (AlCl₃)."
  }
};

// Clean a single question object
function cleanQuestionObject(q) {
  if (!q) return;

  q.question = cleanText(q.question);
  q.title = cleanText(q.title);
  q.explanation = cleanText(q.explanation);

  if (Array.isArray(q.options)) {
    q.options.forEach(opt => {
      opt.text = cleanText(opt.text);
    });
  }

  // Remove bad flowchart diagram SVGs
  if (q.diagramSvg) {
    if (q.diagramSvg.includes('answers[') || q.diagramSvg.includes('Select your answers') || q.diagramSvg.includes('deliberately accounted')) {
      if ((q.question || '').toLowerCase().includes('beam is pivoted')) {
        q.diagramSvg = BEAM_DIAGRAM_SVG;
      } else {
        q.diagramSvg = null;
      }
    }
  }
}

// Apply targeted repairs to a list of questions
function applyTargetedRepairs(qList, sourceName) {
  let repairsApplied = 0;
  qList.forEach((q, i) => {
    const titleLower = (q.title || '').toLowerCase();
    const qLower = (q.question || '').toLowerCase();

    // Check specific broken Force questions
    if (titleLower.includes('wheelbarrow') || qLower.includes('wheelbarrow')) {
      Object.assign(q, FORCE_REPAIRS.wheelbarrow);
      repairsApplied++;
    } else if (titleLower.includes('nutcracker') || qLower.includes('nutcracker')) {
      Object.assign(q, FORCE_REPAIRS.nutcracker);
      repairsApplied++;
    } else if (titleLower.includes('bottle opener') || qLower.includes('bottle opener')) {
      Object.assign(q, FORCE_REPAIRS.bottle_opener);
      repairsApplied++;
    } else if (titleLower.includes('edge of a disc') || qLower.includes('edge of a disc')) {
      Object.assign(q, FORCE_REPAIRS.disc_force);
      repairsApplied++;
    } else if (titleLower.includes('uniform rod with an off-centre pivot') || (titleLower.includes('off-centre pivot') && !titleLower.includes('signboard'))) {
      Object.assign(q, FORCE_REPAIRS.off_centre_pivot);
      repairsApplied++;
    } else if (titleLower.includes('spinning fan blade') || qLower.includes('spinning fan blade')) {
      Object.assign(q, FORCE_REPAIRS.fan_blade);
      repairsApplied++;
    } else if (titleLower.includes('stone whirled on a string') || qLower.includes('stone whirled on a string')) {
      Object.assign(q, FORCE_REPAIRS.stone_string);
      repairsApplied++;
    } else if (titleLower.includes('when the string breaks') || qLower.includes('when the string breaks')) {
      Object.assign(q, FORCE_REPAIRS.string_breaks);
      repairsApplied++;
    } else if (titleLower.includes('smaller circle') || qLower.includes('smaller circle')) {
      Object.assign(q, FORCE_REPAIRS.smaller_circle);
      repairsApplied++;
    } else if (titleLower.includes('turning bus') || qLower.includes('turning bus')) {
      Object.assign(q, FORCE_REPAIRS.turning_bus);
      repairsApplied++;
    } else if (titleLower.includes('moving fulcrum') || qLower.includes('moving fulcrum')) {
      Object.assign(q, FORCE_REPAIRS.moving_fulcrum);
      repairsApplied++;
    } else if (titleLower.includes('stable or unstable') || titleLower.includes('stability of equilibrium')) {
      Object.assign(q, FORCE_REPAIRS.stable_unstable);
      repairsApplied++;
    } else if (titleLower.includes('rotating satellite') || qLower.includes('answer key — set 2')) {
      Object.assign(q, FORCE_REPAIRS.rotating_satellite);
      repairsApplied++;
    } else if (titleLower.includes('rotating stone and work done') || qLower.includes('previous-year questions and recurring')) {
      Object.assign(q, FORCE_REPAIRS.rotating_stone_work);
      repairsApplied++;
    } else if (titleLower.includes('acting through the pivot') || qLower.includes('acting through the pivot')) {
      Object.assign(q, FORCE_REPAIRS.force_through_pivot);
      repairsApplied++;
    } else if (titleLower.includes('two forces on a door') || qLower.includes('two forces on a door')) {
      Object.assign(q, FORCE_REPAIRS.two_forces_door);
      repairsApplied++;
    } else if (titleLower.includes('unknown support force') || qLower.includes('unknown support force')) {
      Object.assign(q, FORCE_REPAIRS.unknown_support_force);
      repairsApplied++;
    } else if (titleLower.includes('suspended triangular lamina') || qLower.includes('suspended triangular lamina')) {
      Object.assign(q, FORCE_REPAIRS.suspended_triangular_lamina);
      repairsApplied++;
    } else if (titleLower.includes('centre of gravity shifts') || qLower.includes('centre of gravity shifts')) {
      Object.assign(q, FORCE_REPAIRS.centre_of_gravity_shifts);
      repairsApplied++;
    } else if (titleLower.includes('couple and its turning effect')) {
      Object.assign(q, FORCE_REPAIRS.couple_turning_effect);
      repairsApplied++;
    } else if (titleLower.includes('steering wheel') || qLower.includes('steering wheel')) {
      q.title = "The Couple on a Steering Wheel";
      q.question = "A driver applies a couple consisting of two equal and opposite forces of 15 N each on the outer rim of a steering wheel of diameter 0.4 m. If the driver now applies forces of 30 N each on an inner rim having a diameter of 0.2 m, what is the new moment of the couple?";
      q.options = [
        { key: "A", text: "3 N m" },
        { key: "B", text: "6 N m" },
        { key: "C", text: "12 N m" },
        { key: "D", text: "24 N m" }
      ];
      q.correct_option = "B";
      q.explanation = "The moment of a couple is given by: Moment = Either Force × Arm of Couple (perpendicular distance between forces). Initial couple = 15 N × 0.4 m = 6 N m. When applying 30 N forces on an inner rim of diameter 0.2 m: New couple = 30 N × 0.2 m = 6 N m. Therefore, doubling the force while halving the couple arm leaves the moment of the couple unchanged at 6 N m.";
      repairsApplied++;
    } else if (titleLower.includes('beam with three loads')) {
      Object.assign(q, FORCE_REPAIRS.uniform_beam_three_loads);
      repairsApplied++;
    } else if (titleLower.includes('integrated bonding challenge')) {
      Object.assign(q, FORCE_REPAIRS.chemical_bonding_integrated);
      repairsApplied++;
    }

    // Always clean text
    cleanQuestionObject(q);
  });

  return repairsApplied;
}

// 2. Process all questionBank files
const qbDir = path.join(__dirname, '..', 'questionBank');
const qbFiles = fs.readdirSync(qbDir).filter(f => f.endsWith('.json'));

let totalQbFiles = 0;
let totalQbQuestions = 0;
let totalQbRepairs = 0;

qbFiles.forEach(file => {
  totalQbFiles++;
  const filePath = path.join(qbDir, file);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const isArray = Array.isArray(data);
  const qList = isArray ? data : (data.questions || []);

  const repairs = applyTargetedRepairs(qList, file);
  totalQbRepairs += repairs;
  totalQbQuestions += qList.length;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
});

console.log(`Cleaned ${totalQbFiles} questionBank files (${totalQbQuestions} questions). Applied ${totalQbRepairs} targeted repairs.`);

// 3. Process registry_cache.json
const cachePath = path.join(__dirname, '..', 'registry_cache.json');
const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

// Specific updates for known indices in registry_cache.json
if (cache.questions) {
  // Question 0: Beam problem
  if (cache.questions[0]) {
    cache.questions[0].diagramSvg = BEAM_DIAGRAM_SVG;
    cleanQuestionObject(cache.questions[0]);
  }

  // Index 51: Inclined ladder
  if (cache.questions[51]) {
    cache.questions[51].title = "The Inclined Ladder Against a Smooth Wall";
    cache.questions[51].question = "A uniform ladder of weight 200 N rests with its upper end against a smooth vertical wall and its lower end on a rough horizontal floor. What is the vertical reaction force exerted by the floor on the ladder?";
    cache.questions[51].options = [
      { key: "A", text: "60 N" },
      { key: "B", text: "100 N" },
      { key: "C", text: "140 N" },
      { key: "D", text: "200 N" }
    ];
    cache.questions[51].correct_option = "D";
    cache.questions[51].explanation = "Because the vertical wall is smooth, it can exert only a normal horizontal reaction force with zero vertical component. For the ladder to remain in vertical equilibrium, the upward vertical reaction force from the floor must exactly equal the downward weight of the ladder: R_V - W = 0 => R_V = 200 N.";
    cleanQuestionObject(cache.questions[51]);
  }

  // Index 52: Force applied at different angles
  if (cache.questions[52]) {
    cache.questions[52].title = "A Force Applied at Different Angles";
    cache.questions[52].question = "A wrench of length 0.4 m is used to turn a bolt. Initially, a perpendicular force of 30 N is applied at its free end (angle = 90°). If the angle between the force and the wrench arm is reduced to 30° while keeping the force magnitude at 30 N, by how much does the torque (moment of force) change?";
    cache.questions[52].options = [
      { key: "A", text: "It decreases by 6 N m" },
      { key: "B", text: "It increases by 6 N m" },
      { key: "C", text: "It decreases by 12 N m" },
      { key: "D", text: "It remains unchanged" }
    ];
    cache.questions[52].correct_option = "A";
    cache.questions[52].explanation = "Initial torque M₁ = F × d × sin(90°) = 30 N × 0.4 m × 1 = 12 N m. When the angle is changed to 30°, new torque M₂ = F × d × sin(30°) = 30 N × 0.4 m × 0.5 = 6 N m. Thus, the torque decreases by 12 N m - 6 N m = 6 N m.";
    cleanQuestionObject(cache.questions[52]);
  }

  // Index 53: Balanced Signboard
  if (cache.questions[53]) {
    cache.questions[53].title = "The Balanced Signboard";
    cache.questions[53].question = "A uniform horizontal signboard is pivoted at an off-centre support. A downward force of 60 N acts at a distance of 0.5 m to the left of the pivot. What downward load W must be suspended at a distance of 1.5 m to the right of the pivot to maintain rotational equilibrium?";
    cache.questions[53].options = [
      { key: "A", text: "10 N" },
      { key: "B", text: "20 N" },
      { key: "C", text: "30 N" },
      { key: "D", text: "45 N" }
    ];
    cache.questions[53].correct_option = "B";
    cache.questions[53].explanation = "According to the principle of moments: Total Clockwise Moment = Total Anticlockwise Moment. W × 1.5 m = 60 N × 0.5 m => 1.5 W = 30 => W = 30 / 1.5 = 20 N.";
    cleanQuestionObject(cache.questions[53]);
  }

  // Index 54: Couple on steering wheel
  if (cache.questions[54]) {
    cache.questions[54].title = "The Couple on a Steering Wheel";
    cache.questions[54].question = "A driver applies a couple consisting of two equal and opposite forces of 15 N each on the outer rim of a steering wheel of diameter 0.4 m. If the driver now applies forces of 30 N each on an inner rim having a diameter of 0.2 m, what is the new moment of the couple?";
    cache.questions[54].options = [
      { key: "A", text: "3 N m" },
      { key: "B", text: "6 N m" },
      { key: "C", text: "12 N m" },
      { key: "D", text: "24 N m" }
    ];
    cache.questions[54].correct_option = "B";
    cache.questions[54].explanation = "The moment of a couple is given by: Moment = Either Force × Arm of Couple (perpendicular distance between forces). Initial couple = 15 N × 0.4 m = 6 N m. For the inner rim, doubling the force (30 N) while halving the distance (0.2 m) gives: New couple = 30 N × 0.2 m = 6 N m. The moment of the couple remains unchanged at 6 N m.";
    cleanQuestionObject(cache.questions[54]);
  }

  // Index 75: Rod suspended by two strings
  if (cache.questions[75]) {
    cache.questions[75].title = "The Rod Suspended by Two Strings";
    cache.questions[75].question = "A uniform heavy horizontal rod of weight 120 N has a concentrated load of 40 N placed exactly at its midpoint. The rod is supported symmetrically by two vertical strings attached at its extreme ends. What is the tension in each supporting string?";
    cache.questions[75].options = [
      { key: "A", text: "40 N and 120 N" },
      { key: "B", text: "60 N and 100 N" },
      { key: "C", text: "80 N and 80 N" },
      { key: "D", text: "120 N and 120 N" }
    ];
    cache.questions[75].correct_option = "C";
    cache.questions[75].explanation = "Total downward load = Weight of rod + Central load = 120 N + 40 N = 160 N. Due to complete symmetry about the midpoint, the two strings share the total load equally: T₁ = T₂ = 160 N / 2 = 80 N.";
    cleanQuestionObject(cache.questions[75]);
  }

  // Index 76: Child on seesaw moves
  if (cache.questions[76]) {
    cache.questions[76].title = "The Child on a Seesaw Moves";
    cache.questions[76].question = "Two children of weights 300 N and 200 N are initially in equilibrium on a seesaw at distances of 2.0 m and 3.0 m from the central fulcrum respectively. If the 300 N child moves outwards to 2.5 m from the fulcrum while the 200 N child stays at 3.0 m, what is the resulting net moment on the seesaw?";
    cache.questions[76].options = [
      { key: "A", text: "It becomes 150 N m towards the 300 N child" },
      { key: "B", text: "It becomes 150 N m towards the 200 N child" },
      { key: "C", text: "It remains zero" },
      { key: "D", text: "It becomes 300 N m towards the 300 N child" }
    ];
    cache.questions[76].correct_option = "A";
    cache.questions[76].explanation = "Initially: Moment of first child = 300 N × 2.0 m = 600 N m. Moment of second child = 200 N × 3.0 m = 600 N m (balanced). After the first child shifts to 2.5 m: New moment = 300 N × 2.5 m = 750 N m. The opposing moment remains 600 N m. Net moment = 750 N m - 600 N m = 150 N m towards the side of the 300 N child.";
    cleanQuestionObject(cache.questions[76]);
  }

  // Index 77: The Crane Boom
  if (cache.questions[77]) {
    cache.questions[77].title = "The Crane Boom";
    cache.questions[77].question = "A crane boom of length 5 m is inclined at an angle such that its horizontal reach (perpendicular distance to the line of action of the load) is 3.0 m. A vertical load of 400 N is suspended from the tip of the boom. What is the moment of force exerted by the load about the base pivot of the crane?";
    cache.questions[77].options = [
      { key: "A", text: "400 N m" },
      { key: "B", text: "800 N m" },
      { key: "C", text: "1,200 N m" },
      { key: "D", text: "1,600 N m" }
    ];
    cache.questions[77].correct_option = "C";
    cache.questions[77].explanation = "Moment of force = Force × Perpendicular distance from pivot to the line of action of the force. Because the load acts vertically downwards, the perpendicular distance to its line of action is the horizontal reach of 3.0 m: Moment = 400 N × 3.0 m = 1,200 N m.";
    cleanQuestionObject(cache.questions[77]);
  }

  // Index 78: Door with two handles
  if (cache.questions[78]) {
    cache.questions[78].title = "The Door with Two Handles";
    cache.questions[78].question = "Two equal horizontal forces of 10 N each are applied to two handles situated on the same side of a door, each acting in the same direction to open the door. If both handles are located at a perpendicular distance of 0.5 m from the hinges, what is the total moment of force produced about the hinges?";
    cache.questions[78].options = [
      { key: "A", text: "0 N m" },
      { key: "B", text: "2.5 N m" },
      { key: "C", text: "5 N m" },
      { key: "D", text: "10 N m" }
    ];
    cache.questions[78].correct_option = "D";
    cache.questions[78].explanation = "Each force acts at a perpendicular distance of 0.5 m from the axis of rotation (hinges). Moment of each force = 10 N × 0.5 m = 5 N m. Because both moments act in the same rotational sense (anticlockwise), the total turning effect is the sum of both moments: Total Moment = 5 N m + 5 N m = 10 N m.";
    cleanQuestionObject(cache.questions[78]);
  }

  // Index 79: Horizontal Force on a Hanging Rod
  if (cache.questions[79]) {
    cache.questions[79].title = "The Horizontal Force on a Hanging Rod";
    cache.questions[79].question = "A uniform metal rod of length 0.8 m is freely suspended from a pivot at its top end. A horizontal force of 30 N is applied at a point 0.4 m below the pivot. What is the moment of this force about the suspension point?";
    cache.questions[79].options = [
      { key: "A", text: "0 N m" },
      { key: "B", text: "7.5 N m" },
      { key: "C", text: "12 N m" },
      { key: "D", text: "75 N m" }
    ];
    cache.questions[79].correct_option = "C";
    cache.questions[79].explanation = "Because the rod hangs vertically and the force is directed horizontally, the force is exactly perpendicular to the rod. Perpendicular distance from pivot = 0.4 m. Moment of force = 30 N × 0.4 m = 12 N m.";
    cleanQuestionObject(cache.questions[79]);
  }

  // Index 97: Rotating satellite
  if (cache.questions[97]) {
    Object.assign(cache.questions[97], FORCE_REPAIRS.rotating_satellite);
    cleanQuestionObject(cache.questions[97]);
  }

  // Index 98: Non-uniform rod
  if (cache.questions[98]) {
    cache.questions[98].title = "Equilibrium of a Non-Uniform Rod";
    cache.questions[98].question = "A non-uniform rod AB of length 100 cm and weight 80 N is balanced horizontally on a knife-edge placed at 40 cm from end A when a weight of 40 N is suspended at end A (0 cm). At what distance from end A does the centre of gravity of the rod lie?";
    cache.questions[98].options = [
      { key: "A", text: "50 cm" },
      { key: "B", text: "55 cm" },
      { key: "C", text: "60 cm" },
      { key: "D", text: "65 cm" }
    ];
    cache.questions[98].correct_option = "C";
    cache.questions[98].explanation = "By the principle of moments: Total Clockwise Moment = Total Anticlockwise Moment. Distance of 40 N weight from pivot (40 cm) = 40 cm - 0 cm = 40 cm. Anticlockwise moment = 40 N × 40 cm = 1,600 N cm. The weight of the rod (80 N) acts through its centre of gravity G at distance x from end A, so its distance from the pivot is (x - 40) cm. Clockwise moment = 80 N × (x - 40) cm. Equating moments: 80 × (x - 40) = 1,600 => x - 40 = 20 => x = 60 cm from end A.";
    cleanQuestionObject(cache.questions[98]);
  }

  // Index 99: Metre rule with its own weight
  if (cache.questions[99]) {
    cache.questions[99].title = "Metre Rule with Its Own Weight";
    cache.questions[99].question = "A uniform metre rule of mass 100 g is balanced horizontally on a knife-edge placed at the 45 cm mark when a mass m is suspended from the 20 cm mark. Calculate the value of the mass m.";
    cache.questions[99].diagramSvg = METRE_RULE_DIAGRAM_SVG;
    cache.questions[99].options = [
      { key: "A", text: "10 g" },
      { key: "B", text: "20 g" },
      { key: "C", text: "25 g" },
      { key: "D", text: "50 g" }
    ];
    cache.questions[99].correct_option = "B";
    cache.questions[99].explanation = "Because the metre rule is uniform, its mass of 100 g acts through its centre of gravity at the 50 cm mark. Distance of centre of gravity from pivot = 50 cm - 45 cm = 5 cm (clockwise arm). Clockwise moment = 100 g × 5 cm = 500 g cm. Distance of suspended mass m from pivot = 45 cm - 20 cm = 25 cm (anticlockwise arm). Anticlockwise moment = m × 25 cm. By the principle of moments: m × 25 = 500 => m = 500 / 25 = 20 g.";
    cleanQuestionObject(cache.questions[99]);
  }

  // Clean all other questions in registry_cache.json
  cache.questions.forEach((q, idx) => {
    cleanQuestionObject(q);
  });
}

fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');
console.log(`Sanitized registry_cache.json (${cache.questions.length} questions).`);
