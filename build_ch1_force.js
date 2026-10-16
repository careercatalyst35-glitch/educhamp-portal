const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Force";

const forceCases = [
  makeCase(
    chapter, 1, "Lug Nut Tightening on Heavy Haulage Truck", "Moment of Force and Handle Length",
    "A heavy commercial truck driver experiences a flat tyre on a highway. To loosen a stubborn lug nut, the driver attempts using a standard cross-wrench with a handle length of 25 cm, applying a maximum force of 400 N, but the nut fails to budge. The driver then slides a hollow steel extension pipe of length 75 cm over the wrench arm, effectively increasing the total lever arm to 1.0 m from the nut's center, and applies the same 400 N force perpendicular to the pipe.",
    "What is the torque applied on the nut before and after using the pipe, and why did the nut loosen?",
    "Before: 100 N·m; After: 400 N·m; the torque increased by a factor of 4 because torque is directly proportional to perpendicular distance.",
    "Before: 1000 N·m; After: 4000 N·m; the applied force increased fourfold due to mechanical advantage.",
    "Before: 100 N·m; After: 300 N·m; only the extension pipe length contributes to the new moment of force.",
    "Before: 40 N·m; After: 160 N·m; torque depends inversely on the square of the handle length.",
    "A",
    "Torque τ = F × d. Initially, τ1 = 400 N × 0.25 m = 100 N·m. With the extension pipe, the total perpendicular distance from the axis of rotation becomes 0.25 m + 0.75 m = 1.0 m. The new torque is τ2 = 400 N × 1.0 m = 400 N·m. Since torque is directly proportional to perpendicular distance, quadrupling the arm quadruples the turning effect, providing the necessary threshold moment to break static friction."
  ),
  makeCase(
    chapter, 2, "Laboratory Water Tap Cross-Handle", "Couple and Arm of Couple",
    "In a physics laboratory, a student opens a stuck water tap equipped with a symmetric two-pronged cross-handle of total diameter 12 cm. The student places their thumb and index finger on opposite ends of the diameter and applies two equal, parallel, and opposite forces of magnitude 15 N tangentially to the prongs.",
    "What is the net force acting on the tap spindle and the magnitude of the couple's moment turning the valve?",
    "Net force = 30 N; Moment of couple = 1.8 N·m",
    "Net force = 0 N; Moment of couple = 1.8 N·m",
    "Net force = 0 N; Moment of couple = 3.6 N·m",
    "Net force = 15 N; Moment of couple = 0.9 N·m",
    "B",
    "Two equal, opposite, and parallel forces whose lines of action do not coincide form a couple. The resultant translational force is F_net = 15 N - 15 N = 0 N (causing no translational strain on the spindle bearings). The moment of the couple = Either Force × Arm of Couple = 15 N × 0.12 m = 1.8 N·m."
  ),
  makeCase(
    chapter, 3, "Steering Wheel Dynamics in Heavy Transit Buses", "Steering Wheel Diameter and Torque",
    "Automotive engineers designing a heavy passenger bus without power steering specify a large steering wheel of radius 25 cm (diameter 50 cm), whereas a compact sports car with a power steering rack uses a wheel of radius 15 cm (diameter 30 cm). To produce a turning moment of 60 N·m to negotiate a tight hairpin bend without power assist, a bus driver applies a couple using both hands at opposite rim ends.",
    "What tangential force must each hand of the bus driver exert, and how does this compare to turning the smaller sports car wheel manually?",
    "Each hand exerts 120 N on the bus wheel; on the sports car wheel, each hand would need to exert 200 N.",
    "Each hand exerts 240 N on the bus wheel; on the sports car wheel, each hand would need to exert 400 N.",
    "Each hand exerts 60 N on the bus wheel; on the sports car wheel, each hand would need to exert 100 N.",
    "Each hand exerts 120 N on the bus wheel; on the sports car wheel, each hand would need to exert 60 N.",
    "A",
    "Moment of couple = Force × Diameter (arm of couple). For the bus: 60 N·m = F_bus × 0.50 m => F_bus = 120 N per hand. For the sports car: 60 N·m = F_car × 0.30 m => F_car = 200 N per hand. The larger diameter provides a larger couple arm, significantly reducing the muscular effort required."
  ),
  makeCase(
    chapter, 4, "Bicycle Crankset Torque Variation During Pedaling", "Perpendicular Distance Variation with Crank Angle",
    "A cyclist applies a constant vertically downward foot thrust of 250 N onto a bicycle pedal attached to a crank arm of length 18 cm. The cyclist analyzes the turning effect produced at three distinct crank positions: Position 1 (crank arm horizontal, pointing forward), Position 2 (crank arm inclined at 30° below the forward horizontal), and Position 3 (crank arm at bottom dead center, pointing vertically downward).",
    "What is the torque produced at Position 1, Position 2, and Position 3 respectively?",
    "Pos 1: 45 N·m; Pos 2: 38.97 N·m; Pos 3: 0 N·m",
    "Pos 1: 45 N·m; Pos 2: 22.5 N·m; Pos 3: 45 N·m",
    "Pos 1: 0 N·m; Pos 2: 22.5 N·m; Pos 3: 45 N·m",
    "Pos 1: 45 N·m; Pos 2: 45 N·m; Pos 3: 45 N·m",
    "A",
    "Torque = Force × Perpendicular distance. At Pos 1 (horizontal): line of action is perpendicular to crank arm, d = 0.18 m, τ = 250 × 0.18 = 45 N·m. At Pos 2 (30° below horizontal): perpendicular distance d = 0.18 × cos(30°) = 0.18 × 0.866 = 0.1559 m, τ = 250 × 0.1559 ≈ 38.97 N·m. At Pos 3 (vertical down): line of action passes through the bottom pivot axis, d = 0, so τ = 0 N·m."
  ),
  makeCase(
    chapter, 5, "Orbital Satellite Thruster vs Pivoted Laboratory Beam", "Translational vs Rotational Motion",
    "An unpivoted free communications satellite floating in zero gravity has two identical thrusters mounted on opposite ends of its 6-meter-wide structural boom. In Test 1, both thrusters fire in the same forward direction with 50 N each. In Test 2, Thruster 1 fires forward with 50 N while Thruster 2 fires backward with 50 N. A physics student compares this with a beam pivoted at its center in a classroom laboratory under the same two test conditions.",
    "Which statement correctly describes the kinematic behavior of the free satellite in both tests?",
    "Test 1: Pure rotational motion; Test 2: Pure translational motion.",
    "Test 1: Pure translational motion with net force 100 N; Test 2: Pure rotational motion about center of mass with net force 0 N.",
    "Test 1: Combined translation and rotation; Test 2: Stationary state because forces cancel.",
    "Test 1: Pure translation; Test 2: Translational motion with acceleration a = 100/m.",
    "B",
    "In a free unpivoted body, parallel forces in the same direction have a non-zero vector sum (F_net = 100 N), accelerating the center of mass in pure translational motion. Two equal and opposite parallel forces whose lines of action do not coincide form a couple: F_net = 0 (no translational acceleration), producing pure rotational motion about the center of mass."
  ),
  makeCase(
    chapter, 6, "Architectural Door Handle Placement", "Door Hinge Torque Optimization",
    "An architectural firm designs a heavy solid oak entrance door of width 1.2 m and mass 60 kg, hinged along its left edge. A building inspector examines two handle installations: Handle X is placed 1.1 m from the hinges (near the outer opening edge), while Handle Y was mistakenly fitted 0.2 m from the hinges (close to the pivot axis). To overcome hinge friction and open the door, a minimum moment of 66 N·m is required.",
    "What perpendicular pull force must a person apply to open the door at Handle X compared to Handle Y?",
    "Handle X: 60 N; Handle Y: 330 N",
    "Handle X: 55 N; Handle Y: 132 N",
    "Handle X: 72.6 N; Handle Y: 13.2 N",
    "Handle X: 330 N; Handle Y: 60 N",
    "A",
    "Using τ = F × d: For Handle X (d = 1.1 m): 66 = F_X × 1.1 => F_X = 60 N. For Handle Y (d = 0.2 m): 66 = F_Y × 0.2 => F_Y = 330 N. Placing the handle at the farthest edge maximizes the perpendicular distance, minimizing the muscular force required to generate the necessary turning moment."
  ),
  makeCase(
    chapter, 7, "Centrally Pivoted Meter Rule Knife-Edge Experiment", "Principle of Moments at Center",
    "A student sets up an ICSE physics experiment using a uniform half-meter (50 cm) wooden rule weighing 40 gf, pivoted on a sharp knife edge placed precisely at its 25.0 cm mark (its center of gravity). A known standard weight of 60 gf is suspended from the 5.0 cm mark. The student slides an unknown metal stone along the right side until horizontal balance is achieved, which occurs when the stone is suspended at the 45.0 cm mark.",
    "What is the mass of the unknown metal stone?",
    "60 gf",
    "30 gf",
    "45 gf",
    "120 gf",
    "A",
    "Fulcrum is at 25 cm. Distance of 60 gf weight = 25 - 5 = 20 cm (anticlockwise arm). Distance of stone W = 45 - 25 = 20 cm (clockwise arm). By Principle of Moments: Anticlockwise Moment = Clockwise Moment => 60 gf × 20 cm = W × 20 cm => W = 60 gf."
  ),
  makeCase(
    chapter, 8, "Off-Center Supported Meter Scale with Inherent Weight", "Equilibrium Involving Weight of Rule",
    "In a board practical examination, a uniform meter rule of length 100 cm and mass M is supported horizontally on a knife edge placed at the 40 cm mark. To maintain balance, a weight of 80 gf is suspended from the 10 cm mark. Because the knife edge is not at the 50 cm mark, the rule's own weight acting at its center of gravity participates in the moment equilibrium.",
    "What is the mass M of the uniform meter rule?",
    "240 gf",
    "80 gf",
    "160 gf",
    "120 gf",
    "A",
    "Fulcrum is at 40 cm. The 80 gf weight is at 10 cm, so its arm = 40 - 10 = 30 cm (anticlockwise). The center of gravity of the uniform meter rule is at the 50 cm mark, so its arm = 50 - 40 = 10 cm (clockwise). Applying Principle of Moments: Anticlockwise moment = Clockwise moment => 80 gf × 30 cm = M × 10 cm => 2400 = 10 M => M = 240 gf."
  ),
  makeCase(
    chapter, 9, "Asymmetric Seesaw Equilibrium in Playground Physics", "Two-Body Moment Balance",
    "In a community park, an adult of mass 75 kg and a child of mass 25 kg want to balance horizontally on a uniform seesaw plank of length 4.0 m pivoted at its exact midpoint. The adult sits 0.8 m from the central fulcrum on the left side.",
    "Where must the child sit relative to the fulcrum on the right side to achieve static horizontal balance?",
    "1.2 m from the fulcrum",
    "2.4 m from the fulcrum",
    "1.8 m from the fulcrum",
    "2.0 m from the fulcrum (at the very edge)",
    "B",
    "Let anticlockwise moment = clockwise moment. Mass adult × d_adult = Mass child × d_child => 75 kg × 0.8 m = 25 kg × d_child => 60 = 25 × d_child => d_child = 60 / 25 = 2.4 m. (Since the half-length of the plank is 2.0 m, the child would actually need to be extended or the adult must move closer to the fulcrum, specifically the adult must sit at <= 0.66 m for the child to balance within 2.0 m)."
  ),
  makeCase(
    chapter, 10, "Center of Gravity of an L-Shaped Orthogonal Wire", "Center of Gravity Outside Body Material",
    "A uniform thin copper wire of total length 60 cm is bent at a sharp 90° angle into an L-shape having two orthogonal arms: Arm OA of length 40 cm along the x-axis, and Arm OB of length 20 cm along the y-axis, with the corner O at the origin (0,0). A student is asked to locate the coordinates of the center of gravity of the bent wire.",
    "What are the coordinates (x_cg, y_cg) of the wire's center of gravity, and where does it physically lie?",
    "(13.33 cm, 3.33 cm); it lies in the empty space between the arms outside the wire material.",
    "(20 cm, 10 cm); it lies on the corner O of the wire.",
    "(30 cm, 15 cm); it lies along the longer arm OA.",
    "(10 cm, 5 cm); it lies directly inside the metal of the shorter arm.",
    "A",
    "Arm OA has mass m1 ∝ 40, centered at (20, 0). Arm OB has mass m2 ∝ 20, centered at (0, 10). Total mass M ∝ 60. x_cg = (40×20 + 20×0)/60 = 800/60 = 13.33 cm. y_cg = (40×0 + 20×10)/60 = 200/60 = 3.33 cm. This point (13.33, 3.33) lies in the open air space between the two arms, proving that the center of gravity can lie completely outside the physical material of the body."
  ),
  makeCase(
    chapter, 11, "Triangular Surveying Marker Lamina", "Centroid of Triangular Lamina",
    "A civil engineer cuts a uniform thin triangular steel plate to serve as a directional surveying marker. The plate has vertices at coordinates P(0,0), Q(12,0), and R(6,9) measured in centimeters. To suspend this plate so that it hangs completely horizontal without tilting, the engineer drills a single mounting hole.",
    "At what coordinates should the mounting hole be drilled, and why?",
    "(6 cm, 3 cm); this is the centroid where all three medians intersect, representing the center of gravity.",
    "(6 cm, 4.5 cm); this is the mid-point of the altitude.",
    "(4 cm, 3 cm); this is the incenter of the triangle.",
    "(6 cm, 0 cm); this is the center of the base.",
    "A",
    "For any uniform triangular lamina, the center of gravity coincides with its centroid (intersection of medians). The centroid coordinates are x = (x1 + x2 + x3)/3 = (0 + 12 + 6)/3 = 6 cm; y = (y1 + y2 + y3)/3 = (0 + 0 + 9)/3 = 3 cm. Suspending the lamina from its center of gravity results in zero net gravitational torque in any orientation, keeping it perfectly horizontal."
  ),
  makeCase(
    chapter, 12, "Double-Decker Bus Safety Tilt Test", "Stability and Center of Gravity",
    "During automotive safety certification, a municipal double-decker bus is placed on a hydraulic tilting ramp. Transport regulations mandate that the bus must not tip over when tilted sideways up to an angle of 28°. The bus has a wide wheel track width of 2.4 m (distance between outer tyre edges) and heavy battery packs installed beneath the lower passenger floor.",
    "What physical condition determines the exact tilt angle at which the bus begins to topple over?",
    "When the vertical line drawn downwards from the bus's center of gravity passes outside the base wheel track.",
    "When the centrifugal force exceeds the gravitational force acting on the upper deck.",
    "When the normal reaction on the higher wheel equals the normal reaction on the lower wheel.",
    "When the center of gravity shifts higher than the roof of the lower deck.",
    "A",
    "A body is in stable equilibrium as long as the vertical line passing through its center of gravity falls within its base of support. As the bus tilts, the line of action of its weight shifts towards the downhill wheels. The moment of weight about the downhill contact point changes from restoring (stabilizing) to overturning the instant the line from CG falls outside the wheel contact base."
  ),
  makeCase(
    chapter, 13, "Equilibrium of the Leaning Tower of Pisa", "Vertical Line of Action within Base",
    "The Leaning Tower of Pisa stands approximately 56 meters tall and currently leans at an angle of roughly 4° from the vertical, causing its top to overhang by nearly 3.9 meters. Despite this alarming lean, the monumental masonry structure has stood for centuries without toppling.",
    "Why does the leaning tower remain in stable equilibrium without toppling over?",
    "The vertical line dropped from its center of gravity still falls well within the perimeter of its circular foundation base.",
    "The center of gravity has shifted upward into the lighter belfry tower.",
    "The air resistance acting on the overhang creates a stabilizing clockwise couple.",
    "Centrifugal force from the Earth's rotation counteracts the overturning moment.",
    "A",
    "According to the condition of stability for a supported body, it will not topple as long as the vertical line passing through its center of gravity falls inside its base area. For the Tower of Pisa, even with a 3.9 m overhang, the vertical line from its CG falls safely within the foundation footprint, creating a restoring moment about the pivot edge."
  ),
  makeCase(
    chapter, 14, "Laboratory Bunsen Burner Design", "Base Area and Height of CG for Stability",
    "A scientific instrument manufacturer fabricates two models of Bunsen burners. Model A features a heavy cast-iron circular base of diameter 12 cm and a total mass of 450 g concentrated in the base, supporting a light 15 cm brass chimney. Model B features a light plastic base of diameter 6 cm weighing 80 g with an identical chimney.",
    "Why is Model A drastically more stable and resistant to accidental tipping than Model B?",
    "Model A has a much broader base area and a significantly lower center of gravity, requiring a much larger tilt angle for its CG line of action to fall outside its base.",
    "Model A has a higher center of gravity, which creates a large restoring gyroscopic couple.",
    "The mass of Model A produces a downward atmospheric pressure difference.",
    "Model A has equal base and chimney weights, placing the CG exactly at the midpoint.",
    "A",
    "To maximize the stability of a body, two conditions must be satisfied: (1) The center of gravity must be as low as possible (achieved by heavy base), and (2) The base area must be as large as possible (broad 12 cm diameter). In Model A, both conditions ensure that a large tilt angle is required before the vertical line through CG falls outside the base boundary."
  ),
  makeCase(
    chapter, 15, "Circus Tightrope Walker Carrying Long Curved Pole", "Lowering Center of Gravity and Rotational Inertia",
    "A high-wire circus performer walking across a thin steel cable 15 meters above ground holds a long, flexible pole of length 8 meters that droops downwards at both ends with heavy lead balls attached to its tips.",
    "What two physical advantages does this drooped pole provide to maintain equilibrium?",
    "It lowers the combined center of gravity (often below the wire) and increases rotational inertia against tipping.",
    "It creates an upward aerodynamic lift force and shifts the CG toward the performer's chest.",
    "It provides a forward propulsive thrust and eliminates gravitational pull.",
    "It converts static equilibrium into dynamic equilibrium by creating a continuous couple.",
    "A",
    "The drooping ends with heavy masses lower the overall center of gravity of the performer-pole system, bringing it very close to (or even below) the wire, which creates a stable self-righting pendulum effect. Additionally, the long pole greatly increases the moment of inertia about the wire axis, dramatically slowing down any accidental rotational roll and giving the performer ample time to adjust their footing."
  ),
  makeCase(
    chapter, 16, "Formula 1 Racing Car Aerodynamics and Chassis Stance", "Ground Clearance and Roll Center",
    "Formula 1 race cars are engineered with an extremely low ground clearance (less than 30 mm above the asphalt) and a wide chassis width of 2.0 meters, contrasting sharply with commercial passenger SUVs which have a ground clearance exceeding 220 mm and a narrower track.",
    "How does this extreme chassis geometry benefit the racing car during high-speed cornering?",
    "The low center of gravity and wide track allow the car to withstand immense lateral cornering forces without toppling over.",
    "The low center of gravity increases the normal reaction from air, eliminating tyre friction.",
    "The wide stance shifts the center of gravity forward, preventing rear-wheel skidding.",
    "The low ground clearance causes the vertical line from CG to always lie outside the wheel base.",
    "A",
    "During cornering at high lateral accelerations, an overturning moment is created by the lateral force acting through the center of gravity about the outer tyres. Lowering the center of gravity minimizes the moment arm of this overturning lateral force, while widening the track base increases the restoring moment arm of the car's weight, preventing roll-over."
  ),
  makeCase(
    chapter, 17, "Cornering Race Car on a Dry Level Track", "Centripetal Force Provided by Lateral Friction",
    "A rally car of mass 1200 kg navigates an unbanked circular curve of radius 80 m on a dry flat asphalt road at a steady speed of 20 m/s (72 km/h). The driver wonders what physical interaction keeps the car following the curved trajectory instead of sliding off tangentially.",
    "What is the magnitude and physical source of the centripetal force acting on the car?",
    "6000 N, provided by the lateral static friction between tyres and asphalt acting towards the center of the curve.",
    "6000 N, provided by the centrifugal force pushing outward from the center.",
    "12000 N, provided by the gravitational pull of the road surface.",
    "3000 N, provided by aerodynamic drag acting against the forward motion.",
    "A",
    "Centripetal force is given by F_c = m·v² / r = (1200 kg × (20 m/s)²) / 80 m = (1200 × 400) / 80 = 6000 N. This force is real and directed radially inward towards the center of curvature. On a flat unbanked road, it is provided entirely by the lateral static friction between the tyre treads and the road surface."
  ),
  makeCase(
    chapter, 18, "Vehicle Skidding on an Icy Highway Curve", "Limiting Friction Insufficiency for Centripetal Requirement",
    "On a winter morning, black ice forms on a level highway curve of radius 100 m. The coefficient of static friction between tyres and the icy road drops to μ = 0.1. A motorist of mass 1000 kg enters the curve at a speed of 15 m/s (54 km/h), taking g = 10 m/s².",
    "What happens to the car on the curve, and why?",
    "The car skids outward tangentially because the required centripetal force (2250 N) exceeds the maximum available friction (1000 N).",
    "The car turns safely because centrifugal force decreases on icy surfaces.",
    "The car slides radially inward towards the center of curvature because friction is too small.",
    "The car comes to an abrupt halt due to loss of translational kinetic energy.",
    "A",
    "Required centripetal force F_c = m·v² / r = (1000 × 15²) / 100 = 2250 N. The maximum available static frictional force is F_max = μ·m·g = 0.1 × 1000 × 10 = 1000 N. Since F_required (2250 N) > F_available (1000 N), friction cannot provide the necessary inward centripetal acceleration, and the car skids off along a tangential path due to directional inertia."
  ),
  makeCase(
    chapter, 19, "Engineered Banking of High-Speed Railway Tracks", "Normal Reaction Component in Banking",
    "Civil engineers designing an Indian Railways high-speed corridor bank a curved track of radius 500 m so that a train traveling at the design speed of 25 m/s (90 km/h) can negotiate the curve smoothly without relying on flange-to-rail lateral friction (taking g = 10 m/s²).",
    "How does banking provide the required centripetal force, and what is the required banking angle θ?",
    "The horizontal component of the normal reaction (N sin θ) provides the centripetal force; tan θ = 0.125 (θ ≈ 7.1°).",
    "The vertical component of the normal reaction provides the centripetal force; tan θ = 0.50.",
    "Centrifugal force pushes the outer rail down, balancing train weight; tan θ = 0.25.",
    "The train's gravitational weight bends inward; tan θ = 1.25.",
    "A",
    "When a track is banked at angle θ, the normal reaction N from the rails tilts inward. Resolving forces: N cos θ = mg (balances weight) and N sin θ = m·v² / r (provides centripetal acceleration). Dividing gives tan θ = v² / (r·g) = (25)² / (500 × 10) = 625 / 5000 = 0.125. Thus, N sin θ provides the centripetal force without wearing rail flanges."
  ),
  makeCase(
    chapter, 20, "Circular Orbit of an Earth Observation Satellite", "Gravitational Force and Zero Work in Circular Orbit",
    "An Indian Remote Sensing satellite of mass 800 kg orbits the Earth in a stable circular orbit at an altitude of 600 km with a constant orbital speed of 7.5 km/s. An aerospace intern analyzes the forces acting on the satellite and the mechanical work performed by gravity over one complete revolution.",
    "What is the nature of the force maintaining the orbit, and what is the work done by Earth's gravity in one full orbit?",
    "Earth's gravitational attraction provides the real centripetal force; work done by gravity is zero because force is always perpendicular to displacement.",
    "Centrifugal force pulls the satellite inward; work done is positive over half the orbit.",
    "Atmospheric thrust provides centripetal force; work done is 800 J per second.",
    "Earth's magnetic field balances gravitational pull; work done equals m·g·h.",
    "A",
    "The gravitational attraction of Earth directed towards Earth's center acts as the centripetal force. In a circular orbit, the gravitational force is always directed radially inward, while the instantaneous displacement is along the tangent (θ = 90°). Work done W = F·s·cos(90°) = 0 J. Over any interval or complete revolution, gravity does zero work."
  ),
  makeCase(
    chapter, 21, "Dairy Centrifuge and Cream Separation", "Density Difference under Centripetal Acceleration",
    "In a commercial dairy processing plant, raw milk containing lighter fat globules (cream, density ~920 kg/m³) suspended in denser skim milk (water and proteins, density ~1035 kg/m³) is fed into a high-speed centrifuge spinning at 6000 rpm.",
    "Why does the cream separate towards the central axis while the skim milk collects at the outer perimeter?",
    "The denser skim milk requires a greater centripetal force to maintain circular motion, so it is forced outward, displacing lighter cream toward the center.",
    "Centrifugal force acts exclusively on the cream particles, pulling them towards the center.",
    "The cream particles have higher inertia and therefore travel outward faster than water.",
    "The high temperature generated at the rim melts the skim milk into cream.",
    "A",
    "Centripetal force required is F_c = m·ω²·r = V·ρ·ω²·r. For equal volumes, the denser skim milk (greater mass m) requires a much larger inward centripetal force. The surrounding pressure gradient in the spinning fluid provides this force, forcing the denser skim milk to the outer periphery while the lighter cream globules are displaced inward toward the axis of rotation."
  ),
  makeCase(
    chapter, 22, "Spin-Drying Drum of a Domestic Washing Machine", "Tangential Escape Due to Lack of Centripetal Force",
    "A domestic automatic washing machine enters its spin-dry cycle, rotating its perforated cylindrical drum at 1200 rpm. Wet clothes are plastered firmly against the inner perforated drum wall, and streams of water droplets fly outward through the small holes into the outer drain casing.",
    "What is the exact physical explanation for why water separates from the fabric during spinning?",
    "The perforated holes cannot provide the required inward centripetal force to the water droplets, so they fly off tangentially due to directional inertia.",
    "Centrifugal force pulls the water droplets radially outward through the holes.",
    "The clothes squeeze the water out by gravitational compression.",
    "Frictional heat evaporates the water droplets into steam escaping through the perforations.",
    "A",
    "The drum wall exerts an inward normal reaction (centripetal force) on the clothes, keeping them in circular motion. However, at the perforations, there is no solid surface to exert inward centripetal force on the loose water droplets. Unable to acquire the required centripetal acceleration, the droplets follow Newton's first law and fly off tangentially along their straight-line inertial path."
  ),
  makeCase(
    chapter, 23, "Bohr's Classical Hydrogen Atom Electron Orbit", "Electrostatic Centripetal Force",
    "In Rutherford and Bohr's classical planetary model of the hydrogen atom, an electron of mass m and charge -e revolves in a circular orbit of radius r around a stationary proton of charge +e at constant speed v.",
    "What physical agency provides the necessary centripetal force to keep the electron in its circular path?",
    "The electrostatic force of attraction (Coulomb force) between the positive nucleus and negative electron directed radially inward.",
    "The gravitational attraction between the proton and electron.",
    "The centrifugal repulsion of the electron's spin.",
    "The magnetic Lorentz force generated by the nuclear spin.",
    "A",
    "Circular motion strictly requires a real inward radial force. In an atom, the gravitational force between subatomic particles is negligible (~10^-39 of electrostatic force). The centripetal force F_c = m·v² / r is provided entirely by the electrostatic Coulomb attraction between the positively charged nucleus and the negatively charged orbital electron."
  ),
  makeCase(
    chapter, 24, "Whirling a Stone in a Horizontal Circle on a String", "Tension and Tangential Breakage",
    "A physics instructor attaches a 200 g stone to a 1.0 m nylon string and whirls it in a horizontal circle at a rapid constant speed of 10 m/s. Suddenly, the string snaps at point P when the stone is moving due North.",
    "In which direction does the stone fly immediately after the string snaps, and why?",
    "Due North along the tangent at point P, because directional inertia maintains its instantaneous velocity.",
    "Radially outward due East, pushed by centrifugal force.",
    "Radially inward due West, pulled by residual tension.",
    "Straight upward against gravity due to angular momentum.",
    "A",
    "Before breaking, the tension in the string provides the radially inward centripetal force. The velocity vector of the stone is always tangential to the circle (directed due North at point P). When the string snaps, the centripetal force drops to zero instantaneously. In the absence of an inward force, Newton's first law dictates that the stone continues moving in a straight line along the instantaneous tangent (due North)."
  ),
  makeCase(
    chapter, 25, "Watt's Centrifugal Governor in Steam Engines", "Dynamic Equilibrium in Rotating Systems",
    "A vintage steam locomotive utilizes a Watt centrifugal governor consisting of two heavy metal spheres mounted on pivoted arms rotating around a central vertical shaft geared to the locomotive drive wheels. When the train accelerates excessively down a slope, the balls rise outward, operating a mechanical linkage that closes the steam throttle valve.",
    "What physical balance governs the outward rising angle of the governor balls as rotational speed increases?",
    "The horizontal component of arm tension provides the required centripetal force m·ω²·r, requiring a greater tilt angle at higher angular speeds.",
    "Centrifugal force eliminates gravity, making the balls float weightlessly.",
    "The steam pressure directly lifts the metal balls by buoyancy.",
    "The magnetic field of the locomotive repels the brass governor balls.",
    "A",
    "For a ball of mass m rotating at radius r with angular speed ω, the forces are tension T in the arm and downward weight mg. Resolving forces: T cos θ = mg and T sin θ = m·ω²·r. Dividing gives tan θ = ω²·r / g. As engine speed ω increases, tan θ must increase, causing the arms to swing outward and upward, which mechanically pulls the throttle valve closed."
  ),
  makeCase(
    chapter, 26, "Warehouse Steelyard Unequal-Arm Balance", "Principle of Moments in Sliding Counterweight",
    "In a seaport warehouse, dockworkers use a heavy-duty Roman steelyard to weigh cargo crates. The steelyard has a fixed fulcrum near one end. The cargo hook is positioned at a short fixed distance of 10 cm from the fulcrum. A movable counterpoise rider of mass 5 kg slides along the long graduated arm on the opposite side. When a crate is hung from the hook, balance is achieved with the 5 kg rider at a distance of 140 cm from the fulcrum.",
    "What is the mass of the cargo crate (neglecting the weight of the steelyard beam)?",
    "70 kg",
    "28 kg",
    "35 kg",
    "14 kg",
    "A",
    "Applying the Principle of Moments: Load × Load arm = Effort (Rider) × Rider arm => M_crate × 10 cm = 5 kg × 140 cm => 10·M_crate = 700 => M_crate = 70 kg."
  ),
  makeCase(
    chapter, 27, "Dishonest Merchant's False Beam Balance", "Geometric Mean for Unequal Arms",
    "A merchant uses a fraudulent beam balance whose arms are of unequal lengths (Left arm L1 ≠ Right arm L2), though the empty pans balance each other perfectly. When a customer purchases sugar, the merchant places standard 4.0 kg weights in the left pan and balances it with sugar in the right pan. Suspecting fraud, the customer insists on re-weighing the same sugar in the left pan, where it now balances against standard 9.0 kg weights in the right pan.",
    "What is the true mass of the sugar?",
    "6.0 kg",
    "6.5 kg",
    "5.0 kg",
    "7.5 kg",
    "A",
    "Let true mass be W. In the first weighing: 4.0 × L1 = W × L2. In the second weighing: W × L1 = 9.0 × L2. Dividing the two equations: 4.0 / W = W / 9.0 => W² = 4.0 × 9.0 = 36 => W = sqrt(36) = 6.0 kg. The true weight is the geometric mean of the two apparent weights: W = sqrt(W1 × W2)."
  ),
  makeCase(
    chapter, 28, "False Balance with Unequal Pan Weights", "Arithmetic Mean for Unequal Pan Weights",
    "In a spice market, an old brass beam balance has arms of strictly equal length (L1 = L2 = L), but due to repair soldering, Pan A is heavier than Pan B by an unknown amount w. An honest trader weighs a packet of saffron in Pan A and finds it balances with 48 g in Pan B. When weighed in Pan B, it balances with 52 g in Pan A.",
    "What is the true mass of the saffron packet?",
    "50 g",
    "49.96 g",
    "50.5 g",
    "51 g",
    "A",
    "Let true mass be M, pan masses be pA and pB. Since arm lengths are equal, we can equate mass moments directly: In first case: (M + pA)·L = (48 + pB)·L => M + pA = 48 + pB. In second case: (52 + pA)·L = (M + pB)·L => 52 + pA = M + pB. Adding the two equations: 2M + pA + 52 + pA = 48 + pB + M + pB... simpler: M + (pA - pB) = 48, and M - (pA - pB) = 52. Adding gives 2M = 100 => M = 50 g (Arithmetic mean)."
  ),
  makeCase(
    chapter, 29, "Tower Crane Stability and Counter-Jib Moment", "Dynamic Moment Compensation in Cranes",
    "A construction tower crane has a horizontal jib extending 40 m to the front and a shorter counter-jib extending 15 m to the rear. To lift a concrete precast panel of mass 3000 kg positioned at the 30 m mark on the front jib, heavy concrete ballast blocks are positioned on the rear counter-jib at a fixed distance of 12 m from the tower mast.",
    "What ballast mass must be placed on the counter-jib to completely eliminate net overturning moment on the crane mast?",
    "7500 kg",
    "6000 kg",
    "10000 kg",
    "5000 kg",
    "A",
    "Clockwise moment of the lifted load about the mast = Load × Distance = 3000 kg × 30 m = 90,000 kg·m. To balance this, the anticlockwise moment of the ballast must equal 90,000 kg·m. M_ballast × 12 m = 90,000 kg·m => M_ballast = 90,000 / 12 = 7500 kg."
  ),
  makeCase(
    chapter, 30, "Springboard Diving Board Clamping Forces", "Two-Point Supported Cantilever Beam",
    "A springboard of length 4.0 m is pinned at its rear end A and supported on an adjustable fulcrum roller B located 1.0 m from end A. A diver of mass 70 kg stands at the extreme free tip C (4.0 m from A, which is 3.0 m from fulcrum B). Taking g = 10 m/s² and neglecting the weight of the board itself, calculate the forces acting on the board.",
    "What is the direction and magnitude of the vertical reaction force exerted by the rear clamp at end A?",
    "Downward force of 2100 N",
    "Upward force of 2100 N",
    "Upward force of 2800 N",
    "Downward force of 700 N",
    "A",
    "Take moments about the roller fulcrum B: The diver's weight (70 kg × 10 = 700 N) acts at distance 3.0 m to the right, producing a clockwise moment = 700 N × 3.0 m = 2100 N·m. For equilibrium, clamp A (1.0 m to the left of B) must produce an equal anticlockwise moment. Since clamp A is to the left, a downward pull F_A produces an anticlockwise moment: F_A × 1.0 m = 2100 N·m => F_A = 2100 N downward."
  ),
  makeCase(
    chapter, 31, "Biomechanics of the Human Biceps at the Elbow Joint", "Internal Muscular Moment Arm",
    "In sports biomechanics, an athlete holds a 10 kg shot put stationary in their hand with the forearm horizontal. The elbow joint acts as the fulcrum. The shot put is located 35 cm from the elbow, the forearm itself has an effective mass of 2 kg centered 15 cm from the elbow, and the biceps tendon inserts into the radius bone just 5.0 cm from the elbow joint (taking g = 10 m/s²).",
    "What upward muscular tension force must the biceps muscle exert to maintain this static hold?",
    "760 N",
    "380 N",
    "120 N",
    "1520 N",
    "A",
    "Clockwise moments about the elbow fulcrum: Shot put moment = (10 kg × 10) × 0.35 m = 100 × 0.35 = 35 N·m. Forearm weight moment = (2 kg × 10) × 0.15 m = 20 × 0.15 = 3 N·m. Total clockwise moment = 35 + 3 = 38 N·m. The biceps exerts an upward anticlockwise force F at distance 0.05 m: F × 0.05 m = 38 N·m => F = 38 / 0.05 = 760 N."
  ),
  makeCase(
    chapter, 32, "Claw Hammer Extracting an Embedded Nail", "Curved Head Pivot and Moment of Force",
    "A carpenter uses a claw hammer to pull a rusty iron nail embedded in a wooden plank. The curved metal head of the hammer rests on the plank, acting as a pivot located 3.0 cm from the nail claw. The carpenter pulls the handle perpendicularly at a point 30 cm from the pivot, applying an effort of 80 N.",
    "What pulling force is exerted on the nail, assuming 100% mechanical transmission?",
    "800 N",
    "240 N",
    "400 N",
    "1200 N",
    "A",
    "By Principle of Moments about the curved pivot: Effort × Effort arm = Resistance (Nail force) × Load arm => 80 N × 30 cm = F_nail × 3 cm => F_nail = (80 × 30) / 3 = 800 N. The claw hammer acts as a force multiplier because the effort arm is 10 times longer than the load arm."
  ),
  makeCase(
    chapter, 33, "Wind Turbine Aerodynamic Rotor Torque", "Radial Blade Thrust and Power Torque",
    "A modern wind turbine has 3 aerodynamic blades of length 40 m radiating from a central hub. When wind blows at 12 m/s, the aerodynamic lift generates an average tangential force of 2500 N on each blade, acting at an effective center of pressure 24 m from the hub axis.",
    "What is the total driving torque delivered by all 3 blades to the main turbine shaft?",
    "180,000 N·m",
    "60,000 N·m",
    "300,000 N·m",
    "90,000 N·m",
    "A",
    "Torque produced by one blade = Force × perpendicular distance = 2500 N × 24 m = 60,000 N·m. Since all 3 blades generate torque in the same rotational direction, the total driving torque = 3 × 60,000 N·m = 180,000 N·m."
  ),
  makeCase(
    chapter, 34, "Cargo Ship Ballasting and Metacentric Stability", "Shifting Center of Gravity Downward",
    "An ocean cargo vessel unloads 15,000 tonnes of heavy machinery at a port, causing its hull to ride dangerously high above the water line. The ship's captain immediately orders the filling of double-bottom ballast tanks with 8,000 tonnes of seawater before venturing into open sea.",
    "Why is filling seawater in the lowest hull compartments essential for ship stability?",
    "It significantly lowers the ship's center of gravity, increasing the righting lever arm that restores the ship when rolled by ocean waves.",
    "It increases the buoyant force of the ship to withstand rough waves.",
    "It raises the center of gravity above the waterline, preventing wave impacts.",
    "It increases the forward translational velocity of the ship by Archimedes' principle.",
    "A",
    "When a ship unloads heavy cargo, its center of gravity rises, which drastically reduces the metacentric height and righting lever (restoring couple). Filling bottom ballast tanks adds mass at the lowest possible point, dragging the overall center of gravity downward. When the ship heels in rough seas, this low CG produces a strong restoring couple that prevents capsizing."
  ),
  makeCase(
    chapter, 35, "Roll-on/Roll-off Ferry Cargo Asymmetry", "Overturning Moment from Asymmetric CG",
    "A Ro-Ro ferry of mass 4000 tonnes with a symmetrical hull has its center of gravity initially on the centerline. During boarding, twenty heavy freight lorries weighing 80 tonnes each are mistakenly parked entirely on the starboard (right) lane at an average distance of 10 meters from the central longitudinal axis.",
    "What is the total heeling moment created about the centerline, and what hazard does it pose?",
    "16,000 tonne-meters clockwise; it tilts the ship starboard, dangerously reducing freeboard and stability.",
    "800 tonne-meters; it increases ship speed due to tilt.",
    "32,000 tonne-meters; it causes the ferry to rotate in a circle.",
    "Zero heeling moment because buoyant force instantly neutralizes off-center loads.",
    "A",
    "Total off-center mass = 20 × 80 tonnes = 1600 tonnes. The heeling moment about the centerline = Force (weight) × perpendicular distance = 1600 tonnes × 10 m = 16,000 tonne·m. This large uncompensated moment induces a severe list (tilt) to starboard, pushing the vertical line of action of the combined CG close to the metacentric limit and risking capsizing."
  ),
  makeCase(
    chapter, 36, "Pure Rolling Motion of a Cylinder on an Incline", "Instantaneous Axis of Rotation",
    "A solid uniform cylinder rolls down a rough inclined plane without slipping. A physics student notes that the motion can be analyzed either as simultaneous translation of the center of mass plus rotation about the center of mass, or as pure instantaneous rotation about a specific axis.",
    "What is the location of the instantaneous axis of rotation for the rolling cylinder?",
    "Along the line of contact between the cylinder and the inclined plane.",
    "Along the central geometric symmetry axis of the cylinder.",
    "At the highest point of the cylinder.",
    "At a point located infinity ahead of the cylinder.",
    "A",
    "In pure rolling without slipping, the contact point between the rolling cylinder and the incline is instantaneously at rest (velocity = 0). Therefore, the entire motion of the cylinder at that instant can be described as a pure rotation about an axis passing through the point of contact, known as the instantaneous axis of rotation."
  ),
  makeCase(
    chapter, 37, "Center of Gravity of Circular Ring vs Disc", "Mass Distribution and Center of Gravity",
    "A physics laboratory has two objects made of the same brass alloy and possessing the identical outer radius R = 15 cm: Object 1 is a uniform solid circular disc, while Object 2 is a thin circular wire hoop (ring).",
    "Where is the center of gravity located for Object 1 and Object 2, respectively?",
    "Both are at the geometric center; for the disc it is inside the material, while for the ring it lies in empty air space outside the material.",
    "For the disc it is at the center; for the ring it is on the outer wire perimeter.",
    "Both lie on the outer circumference where mass is concentrated.",
    "For the disc it is at the center; for the ring the center of gravity does not exist.",
    "A",
    "By symmetry, the center of gravity of both a uniform disc and a uniform ring is located at their geometric centers. However, in the solid disc, the center contains solid brass material, whereas in the ring, the center is an empty aperture. This confirms that the center of gravity of a body does not necessarily lie within its physical material."
  ),
  makeCase(
    chapter, 38, "Partially Filled Hollow Glass Flask", "Shift in Center of Gravity with Liquid Fill",
    "A hollow glass sphere of radius 10 cm initially has its center of gravity at its geometric center C. Dense liquid mercury is slowly poured into the sphere through a tiny top hole until the sphere is completely filled.",
    "How does the center of gravity of the sphere-mercury system shift as mercury is progressively added from empty to full?",
    "It first moves downward below C, reaches a minimum position, and then rises back to C when completely full.",
    "It continuously moves downward until the sphere is full.",
    "It continuously moves upward from the bottom to C.",
    "It remains stationary at C at all times due to spherical symmetry.",
    "A",
    "When empty, CG is at center C. As heavy mercury enters the lower hemisphere, the combined mass center shifts downward below C. As more mercury fills past the halfway mark, the upper mass increases, pulling the CG back upward. When completely filled, spherical symmetry is fully restored and the CG returns exactly to the geometric center C."
  ),
  makeCase(
    chapter, 39, "Boomerang Center of Gravity in Flight", "Aerodynamic Rotation about External CG",
    "An Australian indigenous hunting boomerang is crafted from curved hardwood into an angled V-shape with an angle of 105° between its two identical aerodynamic wings of length 35 cm each.",
    "When thrown horizontally so that it rotates rapidly in flight, what point does the boomerang spin around?",
    "It spins around its center of gravity, which lies in the open air space between the two wings.",
    "It spins around the elbow corner where the two wings join.",
    "It spins around the tip of the leading wing.",
    "It spins around an axis passing through the wing with greater mass.",
    "A",
    "A freely rotating unconstrained body in flight always spins around an axis passing through its center of gravity. For an angled V-shaped boomerang, the center of gravity lies on the angle bisector in the open air space between the two arms, outside the physical wood."
  ),
  makeCase(
    chapter, 40, "Equilibrium States of a Conical Flask", "Stable, Unstable, and Neutral Equilibrium",
    "In a chemistry laboratory, an empty conical flat-bottomed flask is placed on a smooth horizontal bench in three different orientations: Position 1 (resting on its broad flat base), Position 2 (precariously balanced upside-down on its narrow top lip), and Position 3 (resting on its curved lateral side).",
    "What types of equilibrium do Positions 1, 2, and 3 represent respectively?",
    "Pos 1: Stable equilibrium; Pos 2: Unstable equilibrium; Pos 3: Neutral equilibrium",
    "Pos 1: Unstable equilibrium; Pos 2: Stable equilibrium; Pos 3: Neutral equilibrium",
    "Pos 1: Stable equilibrium; Pos 2: Neutral equilibrium; Pos 3: Unstable equilibrium",
    "Pos 1: Neutral equilibrium; Pos 2: Unstable equilibrium; Pos 3: Stable equilibrium",
    "A",
    "In Pos 1 (on broad base), tilting raises the CG, creating a restoring torque back to the base (Stable). In Pos 2 (on narrow rim), any slight tilt lowers the CG, creating an overturning torque that topples the flask (Unstable). In Pos 3 (on side), rolling it neither raises nor lowers the height of the CG, and it remains at rest in its new position (Neutral)."
  ),
  makeCase(
    chapter, 41, "Subway Revolving Turnstile Gate", "Couple in Revolving Barriers",
    "A commuter enters a metro rail station through a four-arm revolving turnstile gate pivoted on a low-friction vertical central bearing. The commuter places one hand on an arm 40 cm to the right of the pivot pushing forward with 30 N, while their hip pushes the opposite arm 40 cm to the left backward with 30 N.",
    "What is the nature of the force system, and what is the net torque produced on the turnstile?",
    "A couple with arm 80 cm, producing a turning torque of 24 N·m and zero net translational force on the central bearing.",
    "Two unbalanced forces producing a net forward force of 60 N and 12 N·m torque.",
    "A single force producing 12 N·m torque with 30 N shear force on the bearing.",
    "A couple producing 48 N·m torque with 60 N translational force.",
    "A",
    "The two forces are equal (30 N), opposite in direction, and act along parallel lines separated by a perpendicular distance of 40 cm + 40 cm = 80 cm (0.80 m). This constitutes a couple. Resultant force F_net = 0 N (no sideways thrust on the pivot). Moment of couple = Force × Arm = 30 N × 0.80 m = 24 N·m."
  ),
  makeCase(
    chapter, 42, "Treadle Sewing Machine Foot Pedal Linkage", "Connecting Rod Moment Conversion",
    "In a traditional mechanical sewing machine, a tailor rocks a foot treadle pedal of length 24 cm pivoted at its rear heel. A vertical pitman connecting rod is pinned to the pedal 18 cm from the heel pivot. When the tailor presses down with a ball-of-foot force of 50 N applied 20 cm from the heel pivot, the pitman rod transmits force upward to turn a heavy balance wheel.",
    "What is the maximum torque produced by the tailor's foot about the heel pivot?",
    "10.0 N·m",
    "12.0 N·m",
    "9.0 N·m",
    "2.5 N·m",
    "A",
    "Torque about the heel pivot = Applied foot force × perpendicular distance from heel pivot = 50 N × 0.20 m = 10.0 N·m."
  ),
  makeCase(
    chapter, 43, "Ladder Leaning against a Frictionless Vertical Wall", "Equilibrium with Friction and Wall Reaction",
    "A painter of mass 60 kg stands at the top of a uniform ladder of length 5.0 m and mass 20 kg leaning against a smooth (frictionless) vertical wall. The base of the ladder rests on rough horizontal ground 3.0 m from the wall (so the top touches the wall at height h = 4.0 m). Taking g = 10 m/s², the painter investigates the friction required at the floor.",
    "What horizontal frictional force must the floor exert on the ladder base to prevent it from slipping?",
    "525 N",
    "800 N",
    "450 N",
    "600 N",
    "A",
    "Take moments about base of ladder: Clockwise moments = Wall reaction N_wall × 4.0 m. Anticlockwise moments = Ladder weight (200 N) × 1.5 m + Painter weight (600 N) × 3.0 m = 300 + 1800 = 2100 N·m. For equilibrium: N_wall × 4.0 = 2100 => N_wall = 525 N. Horizontally, static friction f_floor must balance N_wall, so f_floor = 525 N."
  ),
  makeCase(
    chapter, 44, "Heavy Outdoor Air-Conditioner Mounting Bracket", "Moment Equilibrium on Wall Anchor Bolts",
    "An outdoor air-conditioner compressor weighing 450 N is mounted on an L-shaped steel bracket attached to an exterior brick wall. The bracket's horizontal arm extends 60 cm from the wall, with the compressor's center of gravity located 40 cm from the wall. The bracket is secured to the wall by two bolts: an upper tension bolt A and a lower pivot contact point B located 30 cm vertically below bolt A.",
    "What outward pulling tensile force is exerted on the upper wall anchor bolt A?",
    "600 N",
    "450 N",
    "900 N",
    "300 N",
    "A",
    "Take moments about the lower pivot point B: Clockwise moment created by AC compressor weight = 450 N × 0.40 m = 180 N·m. For equilibrium, the upper anchor bolt A at a vertical distance of 0.30 m must exert an equal anticlockwise restoring moment: F_bolt × 0.30 m = 180 N·m => F_bolt = 180 / 0.30 = 600 N."
  ),
  makeCase(
    chapter, 45, "Bank Vault Door Symmetrical Three-Spoke Wheel", "Multiple Symmetrical Couples",
    "A heavy bank vault door is secured by multiple thick steel locking bolts retracted by a three-spoke wheel handle of radius 30 cm. A bank officer applies three equal forces of 80 N tangentially at the tip of each spoke spaced at 120° intervals around the wheel circumference.",
    "What is the resultant translational force on the wheel hub and the total opening torque delivered?",
    "Resultant force = 0 N; Total torque = 72 N·m",
    "Resultant force = 240 N; Total torque = 72 N·m",
    "Resultant force = 0 N; Total torque = 24 N·m",
    "Resultant force = 80 N; Total torque = 48 N·m",
    "A",
    "By vector addition, three equal forces of 80 N acting at symmetric 120° angles sum to zero vectorially (F_net = 0 N), causing zero lateral strain on the hub axle. Each spoke produces a torque of F × r = 80 N × 0.30 m = 24 N·m in the same clockwise rotational direction. Total torque = 3 × 24 N·m = 72 N·m."
  ),
  makeCase(
    chapter, 46, "Amusement Park Roller Coaster Loop-the-Loop", "Critical Velocity and Normal Reaction at the Apex",
    "A thrill-ride designer constructs a vertical circular loop-the-loop track of radius R = 10 m for an amusement park coaster train of mass m. At the highest point (apex) of the loop, passengers are fully inverted.",
    "What is the minimum speed v_min required at the apex so that the coaster stays on the track without falling, taking g = 10 m/s²?",
    "10 m/s (approx 36 km/h)",
    "14.14 m/s (approx 51 km/h)",
    "7.07 m/s (approx 25 km/h)",
    "20 m/s (approx 72 km/h)",
    "A",
    "At the apex of the loop, both gravity (mg) and the downward normal reaction N from the track act toward the center: N + mg = m·v² / R. For the coaster to just stay on the track without losing contact, N ≥ 0. At critical speed, N = 0 => mg = m·v_crit² / R => v_crit = sqrt(g·R) = sqrt(10 × 10) = 10 m/s."
  ),
  makeCase(
    chapter, 47, "Clinical Laboratory Blood Centrifuge", "High Artificial Acceleration Field",
    "A diagnostic hematology laboratory separates red blood cells from blood plasma using an ultracentrifuge with rotor radius 15 cm operating at 3000 rpm (angular speed ω = 100π rad/s ≈ 314.16 rad/s).",
    "What is the centripetal acceleration experienced by blood cells at the tube tips, and how many times Earth's gravity (g = 9.8 m/s²) does it represent?",
    "≈ 14,800 m/s² (approx 1510 g)",
    "≈ 4,712 m/s² (approx 480 g)",
    "≈ 980 m/s² (approx 100 g)",
    "≈ 29,600 m/s² (approx 3020 g)",
    "A",
    "Centripetal acceleration a_c = ω²·r = (314.16 rad/s)² × 0.15 m = 98,696 × 0.15 ≈ 14,804 m/s². In terms of g-force: a_c / g = 14,804 / 9.8 ≈ 1510 g. This colossal acceleration separates microscopic cellular matter thousands of times faster than natural gravity."
  ),
  makeCase(
    chapter, 48, "Container Ship Propeller Shaft Torque", "Shaft Twisting Couple and Power Torque",
    "The diesel propulsion engine of an ultra-large container vessel delivers 40,000 kW (40 MW) of mechanical power to its propeller shaft at a slow rotational speed of 90 rpm (angular velocity ω = 2π × 90 / 60 = 3π rad/s ≈ 9.425 rad/s).",
    "What continuous torque is exerted on the massive solid steel propeller shaft?",
    "≈ 4.24 × 10^6 N·m (4.24 MN·m)",
    "≈ 1.33 × 10^6 N·m (1.33 MN·m)",
    "≈ 3.77 × 10^5 N·m (0.377 MN·m)",
    "≈ 8.48 × 10^6 N·m (8.48 MN·m)",
    "A",
    "Power P = Torque τ × angular velocity ω => τ = P / ω = 40,000,000 W / (9.4248 rad/s) ≈ 4,244,130 N·m ≈ 4.24 × 10^6 N·m. The low rotational speed combined with massive power output requires an enormous torque."
  ),
  makeCase(
    chapter, 49, "Naval Gyrocompass Precession and Overturning Torque", "Gyroscopic Resistance to Tilting Moments",
    "A high-precision gyrocompass aboard a submarine features a heavy brass rotor of mass 5 kg spinning at 24,000 rpm inside gimbals. When the submarine pitches and rolls in heavy seas, the spinning rotor maintains its horizontal orientation rigidly in space, resisting the vessel's tilting moments.",
    "What fundamental physical property allows the spinning gyrocompass rotor to resist overturning moments?",
    "Conservation of angular momentum, where an external tilting torque produces perpendicular precession rather than simple overturning.",
    "Centrifugal force radiating outward and solidifying the gimbal bearings.",
    "Gravitational attraction between the rotor and the Earth's core canceling ocean swells.",
    "Centripetal force from the submarine's forward motion locking the rotor in place.",
    "A",
    "A rapidly spinning mass possesses large angular momentum L = I·ω. By the laws of rotational dynamics, applying an external torque τ changes angular momentum via τ = dL/dt. Rather than tipping over in the direction of the torque, the spin axis undergoes precession at right angles, providing remarkable resistance to ship roll."
  ),
  makeCase(
    chapter, 50, "Center of Gravity vs Center of Mass in High-Altitude Orbit", "Uniform vs Non-Uniform Gravitational Field",
    "An aerospace engineering team analyzes a super-elongated tethered satellite system of length 20 km orbiting Earth in low orbit. Because Earth's gravitational field varies as 1/r², the lower end of the satellite experiences a measurably stronger gravitational pull than the upper end.",
    "How does the position of the satellite's Center of Gravity (CG) compare with its Center of Mass (CM)?",
    "The Center of Gravity lies slightly below the Center of Mass because the lower sections experience greater gravitational weight per unit mass.",
    "The Center of Gravity lies slightly above the Center of Mass.",
    "The Center of Gravity and Center of Mass are strictly identical regardless of field uniformity.",
    "The Center of Gravity vanishes in orbit while the Center of Mass shifts to the leading edge.",
    "A",
    "Center of mass is the point where the entire mass of a body is concentrated (purely geometric property of mass distribution). Center of gravity is the point through which the resultant gravitational weight acts. In a non-uniform field where g decreases with altitude, the lower portions weigh more per unit mass than the upper portions, pulling the weighted center of gravity lower than the center of mass."
  )
];

const outPath = path.join(__dirname, 'questionBank', 'physics_case_force.json');
fs.writeFileSync(outPath, JSON.stringify(forceCases, null, 2), 'utf8');
console.log(`Saved ${forceCases.length} case studies for Force to ${outPath}`);
