const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Work, Energy and Power";

const wepCases = [
  makeCase(
    chapter, 1, "Railway Platform Porter Carrying Heavy Trunk", "Zero Work When Force is Perpendicular to Displacement",
    "A licensed railway porter of mass 60 kg lifts a passenger's heavy steel trunk weighing 300 N onto their head and carries it steadily along a level horizontal platform for a distance of 50 meters at a constant speed of 1.2 m/s.",
    "What is the mechanical work done by the porter's lifting force on the trunk while walking horizontally along the platform?",
    "Zero Joules, because the upward vertical supporting force is at 90° to the horizontal displacement.",
    "15,000 Joules, because Work = Force × distance = 300 N × 50 m.",
    "18,000 Joules, taking into account the porter's body weight.",
    "360 Joules, based on kinetic power consumption.",
    "A",
    "Work done W = F·s·cos θ. The supporting force exerted by the porter's head acts vertically upward (to balance trunk weight 300 N), while the displacement of the trunk is horizontal along the platform. The angle θ between force and displacement is 90°. Since cos(90°) = 0, the mechanical work done by the vertical supporting force on the trunk is strictly zero."
  ),
  makeCase(
    chapter, 2, "Construction Hoist Lifting a Concrete Slab", "Positive Work by Cable vs Negative Work by Gravity",
    "A motorized construction crane lifts a precast concrete beam of mass 500 kg vertically upward from ground level to the fourth floor, through a height of 15.0 meters at a steady constant velocity (taking g = 10 m/s²).",
    "What is the work done by the crane cable tension and the work done by the gravitational force on the beam?",
    "Crane cable: +75,000 J; Gravitational force: -75,000 J",
    "Crane cable: +75,000 J; Gravitational force: +75,000 J",
    "Crane cable: -75,000 J; Gravitational force: -75,000 J",
    "Crane cable: +150,000 J; Gravitational force: 0 J",
    "A",
    "The upward cable tension T = mg = 500 × 10 = 5000 N acts in the direction of upward displacement (θ = 0°), doing positive work: W_crane = 5000 N × 15 m × cos(0°) = +75,000 J (+75 kJ). The gravitational force acts vertically downward (θ = 180° to upward displacement), doing negative work: W_gravity = 5000 N × 15 m × cos(180°) = -75,000 J (-75 kJ). Net work on the beam is zero, consistent with constant velocity."
  ),
  makeCase(
    chapter, 3, "High-Speed Highway Braking and Skid Distance", "Work-Energy Theorem and Velocity Squared Relation",
    "A road safety testing agency evaluates the emergency braking of a 1200 kg passenger sedan. When traveling at 15 m/s (54 km/h), maximum braking deceleration locks the wheels and brings the car to rest over a skid distance of 18 meters on dry asphalt. The test is then repeated with the car traveling at 30 m/s (108 km/h) under identical tyre and road conditions.",
    "What is the emergency stopping distance of the car when traveling at 30 m/s?",
    "72 meters",
    "36 meters",
    "54 meters",
    "108 meters",
    "A",
    "By the Work-Energy Theorem: Work done by friction = Loss in Kinetic Energy => f·s = 1/2 m v². Since the retarding frictional force f is constant, the stopping distance s is directly proportional to v² (s ∝ v²). Doubling the speed from 15 m/s to 30 m/s quadruples the kinetic energy (2² = 4). Therefore, the new stopping distance = 4 × 18 m = 72 meters."
  ),
  makeCase(
    chapter, 4, "Lunar Orbit of Chandrayaan Spacecraft", "Zero Work by Centripetal Gravitational Force",
    "During the Chandrayaan mission, the spacecraft of mass 1400 kg enters a circular lunar mapping orbit of radius 1800 km from the Moon's center, moving at a uniform orbital speed of 1.6 km/s.",
    "What is the work done by the Moon's gravitational pull on the spacecraft during one complete circular orbit?",
    "Zero Joules, because the gravitational force is always perpendicular to the instantaneous displacement.",
    "3.58 × 10^9 Joules",
    "7.16 × 10^9 Joules",
    "2.24 × 10^6 Joules",
    "A",
    "In any circular orbit, the gravitational force acts radially inward toward the Moon's center, providing the centripetal force. The instantaneous displacement at every point along the path is tangential to the circle. The angle θ between force and displacement is always 90°. Since cos(90°) = 0, the work done W = F·s·cos(90°) = 0 J over any arc or full orbit."
  ),
  makeCase(
    chapter, 5, "Pushing a Massive Stationary Concrete Retaining Wall", "Zero Work Due to Zero Displacement",
    "An athlete exerts a maximum sustained horizontal muscular push of 600 N against a massive reinforced concrete retaining wall for 60 seconds. At the end of the minute, the athlete is sweating profusely and feels exhausted, but the rigid wall has not moved even a fraction of a millimeter.",
    "From the strict perspective of physics, what is the mechanical work performed by the athlete on the wall?",
    "Zero Joules, because mechanical work requires a non-zero displacement in the direction of the force.",
    "36,000 Joules, calculated as Force × time.",
    "600 Joules, calculated as Force × 1 meter equivalent.",
    "6,000 Joules, based on human caloric expenditure.",
    "A",
    "Mechanical work in physics is defined strictly as W = F·s·cos θ. Even though the athlete exerts a substantial force of 600 N and expends internal physiological energy (muscle fibers contracting and burning glucose), the displacement of the wall is s = 0. Therefore, mechanical work done on the wall W = 600 N × 0 m = 0 J."
  ),
  makeCase(
    chapter, 6, "High-Altitude Skydiver in Free Fall", "Conservation of Mechanical Energy During Fall",
    "A skydiver of total mass 80 kg jumps from a hot-air balloon hovering at an altitude of 2000 m above sea level. Neglecting air resistance during the first 500 m of vertical fall, an ICSE student calculates the kinetic and gravitational potential energy at 2000 m (Point A) and after falling 500 m to 1500 m altitude (Point B), taking g = 10 m/s².",
    "What are the Potential Energy (PE) and Kinetic Energy (KE) of the skydiver at Point B?",
    "PE = 1,200,000 J; KE = 400,000 J; Total Mechanical Energy = 1,600,000 J",
    "PE = 1,600,000 J; KE = 400,000 J; Total Mechanical Energy = 2,000,000 J",
    "PE = 800,000 J; KE = 800,000 J; Total Mechanical Energy = 1,600,000 J",
    "PE = 400,000 J; KE = 1,200,000 J; Total Mechanical Energy = 1,600,000 J",
    "A",
    "At A (h = 2000 m): PE = mgh = 80 × 10 × 2000 = 1,600,000 J (1.6 MJ), KE = 0 J, Total E = 1.6 MJ. At B (h = 1500 m): PE = 80 × 10 × 1500 = 1,200,000 J (1.2 MJ). By the law of conservation of mechanical energy, the loss in PE equals the gain in KE: KE = 1,600,000 - 1,200,000 = 400,000 J (0.4 MJ). Total energy remains 1.6 MJ."
  ),
  makeCase(
    chapter, 7, "Olympic Archery Compound Bow Energy Storage", "Elastic Potential Energy in Bow Limbs",
    "An Olympic archer draws an arrow of mass 25 g in a compound bow, pulling the bowstring back by a draw distance of 0.60 m with an average pulling force of 200 N. The bow limbs bend elastically, storing strain energy.",
    "Assuming 80% of the stored elastic strain energy is transferred to the arrow as kinetic energy upon release, what is the launch velocity of the arrow?",
    "87.6 m/s",
    "69.3 m/s",
    "98.0 m/s",
    "120.0 m/s",
    "A",
    "Work done in drawing the bow = Stored Elastic PE = Average Force × draw distance = 200 N × 0.60 m = 120 J. Energy transferred to arrow = 80% of 120 J = 96 J. Kinetic energy of arrow = 1/2 m v² => 96 = 1/2 × 0.025 kg × v² => v² = (96 × 2) / 0.025 = 7680 => v = sqrt(7680) ≈ 87.64 m/s."
  ),
  makeCase(
    chapter, 8, "Railway Terminal Buffer Stop Spring Compression", "Kinetic Energy to Elastic Strain Conversion",
    "A runaway freight wagon of mass 10,000 kg rolling at 2.0 m/s collides with a heavy railway buffer stop at the end of a siding track. The buffer incorporates a massive helical steel spring of stiffness constant k = 400,000 N/m (400 kN/m).",
    "What is the maximum compression of the buffer spring as it brings the freight wagon to a complete halt?",
    "0.316 m (31.6 cm)",
    "0.100 m (10.0 cm)",
    "0.500 m (50.0 cm)",
    "0.224 m (22.4 cm)",
    "A",
    "Kinetic energy of wagon = 1/2 m v² = 1/2 × 10,000 × 2² = 20,000 J. At maximum compression x, all kinetic energy is converted into elastic potential energy of the spring: 1/2 k x² = 20,000 J => 1/2 × 400,000 × x² = 20,000 => 200,000 x² = 20,000 => x² = 0.1 => x = sqrt(0.1) ≈ 0.3162 m (31.6 cm)."
  ),
  makeCase(
    chapter, 9, "Mechanical Clockwork Escapement Mainspring", "Slow Controlled Release of Elastic Energy",
    "A mechanical winding clock relies on a spiral spring (mainspring) made of tempered spring steel. When the key is turned, an operator does 180 J of mechanical work to wind the spring tight. The clockwork mechanism slowly releases this energy through an escapement gear train over a period of 5 days (120 hours) before stopping.",
    "What is the average mechanical power output delivered by the unwinding clockwork spring?",
    "0.000417 W (0.417 mW)",
    "1.5 W",
    "0.025 W",
    "0.0015 W",
    "A",
    "Total energy stored W = 180 J. Total time t = 120 hours = 120 × 3600 seconds = 432,000 seconds. Average power P = W / t = 180 J / 432,000 s = 0.0004167 W ≈ 0.417 mW. The clockwork escapement meters out microscopic amounts of power to maintain continuous pendulum oscillation."
  ),
  makeCase(
    chapter, 10, "Antique Grandfather Clock Pendulum Dynamics", "Interconversion of KE and Gravitational PE",
    "A grandfather clock features a heavy brass bob of mass 1.5 kg swinging on a light rod. At its maximum swing to the right (extreme position A), the bob rises by a vertical height h = 5.0 cm (0.05 m) above its lowest central position (mean position O). Taking g = 10 m/s² and neglecting air friction, analyze the oscillation.",
    "What is the maximum speed of the bob as it passes through the lowest mean position O?",
    "1.0 m/s",
    "0.707 m/s",
    "1.414 m/s",
    "0.5 m/s",
    "A",
    "At extreme position A, the bob is momentarily at rest (KE = 0) and has maximum gravitational PE = m·g·h = 1.5 × 10 × 0.05 = 0.75 J. At mean position O, PE = 0 (datum) and all potential energy converts into kinetic energy: 1/2 m v_max² = m g h => v_max = sqrt(2 g h) = sqrt(2 × 10 × 0.05) = sqrt(1.0) = 1.0 m/s."
  ),
  makeCase(
    chapter, 11, "Theme Park Roller Coaster Summit Plunge", "Total Mechanical Energy with Frictional Losses",
    "A roller coaster train of mass 800 kg starts from rest at the top of a steep lift hill at height H = 45 m. It plunges down into a valley and climbs to the crest of a second lower hill of height h = 25 m. Sensitive track sensors record the train's speed at the second crest as 18 m/s (taking g = 10 m/s²).",
    "How much mechanical energy was dissipated into non-recoverable thermal and acoustic energy due to wheel friction and air drag between the two crests?",
    "30,400 J",
    "160,000 J",
    "129,600 J",
    "60,800 J",
    "A",
    "Total energy at first summit = m·g·H = 800 × 10 × 45 = 360,000 J. Mechanical energy at second crest = PE + KE = (800 × 10 × 25) + (1/2 × 800 × 18²) = 200,000 + (400 × 324) = 200,000 + 129,600 = 329,600 J. Mechanical energy lost to friction and heat = 360,000 J - 329,600 J = 30,400 J."
  ),
  makeCase(
    chapter, 12, "Hydroelectric Dam Penstock and Pelton Wheel", "Sequential Energy Transformations in Hydropower",
    "At a mountainous hydroelectric generating station, water from a reservoir situated at a vertical head of 200 meters flows down a steel penstock pipe at a volumetric rate of 5.0 m³/s (mass rate = 5000 kg/s) to strike the buckets of a Pelton turbine at ground level (g = 10 m/s²).",
    "What is the theoretical gravitational potential power delivered by the water column, and what sequence of energy transformations takes place?",
    "10 MW; Gravitational PE of reservoir -> Kinetic energy of water jet -> Mechanical rotational energy of turbine -> Electrical energy in alternator",
    "1 MW; Thermal energy -> Kinetic energy -> Chemical energy -> Electrical energy",
    "20 MW; Elastic strain energy -> Rotational mechanical energy -> Electrical energy",
    "5 MW; Gravitational PE -> Electrical energy directly via piezoelectricity",
    "A",
    "Rate of gravitational potential energy delivery = (m/t)·g·h = 5000 kg/s × 10 m/s² × 200 m = 10,000,000 W = 10 MW. Sequence: Water stored at height possesses Gravitational PE; falling through penstock converts this into high-speed Kinetic Energy; striking turbine buckets converts KE into Mechanical Rotational Work; turbine drives an electromagnetic generator producing Electrical Energy."
  ),
  makeCase(
    chapter, 13, "Supercritical Thermal Power Station Energy Flow", "Energy Transformations in Coal Generation",
    "A 500 MW thermal power plant burns pulverized coal in a boiler to generate supercritical steam at 540°C and 240 bar, which drives high-pressure steam turbines connected to an alternator.",
    "Which option accurately identifies the complete chronological sequence of primary energy transformations in this plant?",
    "Chemical energy of coal -> Thermal heat energy of steam -> Kinetic energy of expanding steam -> Mechanical rotational energy of turbine -> Electrical energy in alternator",
    "Nuclear binding energy -> Radiant light energy -> Electrical energy",
    "Electrical energy -> Chemical energy -> Gravitational potential energy -> Electrical energy",
    "Mechanical kinetic energy -> Thermal energy -> Chemical energy -> Electrical energy",
    "A",
    "Coal holds stored Chemical Energy in molecular bonds. Combustion releases Thermal Energy which boils water into high-pressure steam. Expansion through turbine nozzles converts thermal energy into high-velocity Kinetic Energy of steam. Steam jets turn turbine blades, producing Mechanical Rotational Energy. The shaft turns the rotor of the generator, converting mechanical energy into Electrical Energy."
  ),
  makeCase(
    chapter, 14, "Lead-Acid Automobile Storage Battery Cycle", "Chemical vs Electrical Energy Reversibility",
    "A 12V lead-acid car battery supplies a heavy current of 150 A for 2.0 seconds to the starter motor to crank the internal combustion engine. Once the engine starts running, an alternator driven by the engine belt feeds a recharging current of 10 A back into the battery for 30 minutes.",
    "What energy transformations take place during (i) starting the car and (ii) recharging the battery?",
    "(i) Chemical energy converted into Electrical energy; (ii) Electrical energy converted back into stored Chemical energy.",
    "(i) Electrical energy converted into Mechanical energy; (ii) Thermal energy converted into Nuclear energy.",
    "(i) Gravitational PE converted into Chemical energy; (ii) Chemical energy converted into Light energy.",
    "(i) Kinetic energy converted into Electrical energy; (ii) Electrical energy converted into Elastic strain energy.",
    "A",
    "During discharge (starting the car), chemical reactions between the lead plates and sulfuric acid electrolyte release stored Chemical Energy, converting it into Electrical Energy. During recharging by the alternator, an external potential difference forces current in reverse, reversing the chemical reactions and converting Electrical Energy back into stored Chemical Energy."
  ),
  makeCase(
    chapter, 15, "Loudspeaker and Dynamic Microphone Transducers", "Electromechanical vs Mechanoelectrical Transduction",
    "A public address sound system consists of an announcer speaking into a moving-coil microphone, connected through an audio power amplifier to an outdoor cone loudspeaker.",
    "What are the precise energy conversions performed by the microphone and the loudspeaker respectively?",
    "Microphone: Sound (acoustic) energy into Electrical energy; Loudspeaker: Electrical energy into Sound (acoustic) energy.",
    "Microphone: Electrical energy into Sound energy; Loudspeaker: Sound energy into Electrical energy.",
    "Microphone: Thermal energy into Electrical energy; Loudspeaker: Electrical energy into Magnetic energy only.",
    "Microphone: Chemical energy into Sound energy; Loudspeaker: Mechanical energy into Light energy.",
    "A",
    "Sound waves vibrating the microphone diaphragm move an attached coil within a magnetic field, inducing an electrical audio signal (Sound Energy -> Electrical Energy). In the loudspeaker, the amplified electrical signal passes through a voice coil in a magnetic field, producing mechanical vibrations of the paper cone that generate audible sound waves (Electrical Energy -> Sound Energy)."
  ),
  makeCase(
    chapter, 16, "Electric Motor vs AC Generator Principles", "Energy Conversion and Underlying Physical Laws",
    "An electrical engineering student tests two identical electromagnetic machines in a laboratory: Machine 1 is connected to an external DC voltage source, causing its shaft to spin and lift a test weight. Machine 2 has its shaft coupled to a rotating water wheel, producing a voltage across an output load resistor.",
    "What are the operating modes and energy conversions of Machine 1 and Machine 2?",
    "Machine 1 is an Electric Motor (Electrical to Mechanical energy); Machine 2 is a Generator (Mechanical to Electrical energy).",
    "Machine 1 is a Generator; Machine 2 is an Electric Motor.",
    "Both machines act as motors converting Chemical energy into Electrical energy.",
    "Machine 1 converts Thermal energy into Work; Machine 2 converts Electrical energy into Heat.",
    "A",
    "An electric motor draws electrical current from a power supply; the magnetic field exerts a torque on the current-carrying armature, converting Electrical Energy into Mechanical Work. Conversely, an electric generator has its armature rotated by external mechanical power (water wheel); magnetic flux changes induce current, converting Mechanical Energy into Electrical Energy."
  ),
  makeCase(
    chapter, 17, "Rooftop Photovoltaic Solar Panel System", "Direct Radiant to Electrical Conversion",
    "A residential rooftop solar array of area 20 m² receives solar radiation at an average irradiance of 800 W/m². The semiconductor silicon panels operate at an overall photoelectric conversion efficiency of 18%.",
    "What type of energy conversion occurs, and what is the electrical power output delivered by the array?",
    "Radiant (solar light) energy is converted directly into Electrical energy; Power output = 2880 W (2.88 kW).",
    "Thermal heat energy is converted into Electrical energy; Power output = 16,000 W.",
    "Chemical energy is converted into Electrical energy; Power output = 1440 W.",
    "Radiant energy is converted into Kinetic energy; Power output = 5760 W.",
    "A",
    "Total radiant power incident on array = Irradiance × Area = 800 W/m² × 20 m² = 16,000 W (16 kW). At 18% efficiency, electrical power output P = 0.18 × 16,000 W = 2880 W = 2.88 kW. Photovoltaic cells use the photoelectric effect to convert radiant solar photon energy directly into DC electrical energy without any intermediate thermal or mechanical stage."
  ),
  makeCase(
    chapter, 18, "Photosynthesis in Green Crop Leaves", "Radiant Light to Biochemical Potential Conversion",
    "During daylight hours, chlorophyll pigments in the leaves of an agricultural wheat crop absorb photons of sunlight to drive the biochemical synthesis of glucose from carbon dioxide and water: 6CO2 + 6H2O + Light -> C6H12O6 + 6O2.",
    "From an energetics standpoint, what primary energy conversion occurs during photosynthesis?",
    "Radiant solar light energy is converted into stable Chemical potential energy stored in glucose molecular bonds.",
    "Thermal energy of air is converted into Gravitational potential energy of the plant.",
    "Nuclear binding energy is released and converted into electrical energy.",
    "Mechanical energy of falling rain is converted into chemical energy.",
    "A",
    "Photosynthesis is a fundamental biological energy transducer. Chlorophyll captures radiant solar energy (light photons) and uses it to synthesize high-energy covalent chemical bonds in glucose molecules, converting radiant electromagnetic energy into stable Chemical Potential Energy that fuels the biosphere."
  ),
  makeCase(
    chapter, 19, "Historical Steam Engine Mechanical Drive", "Thermodynamic Expansion Work",
    "In an industrial reciprocating steam engine, saturated steam from a wood-fired boiler enters a cylinder at high pressure, pushes a heavy piston through a stroke displacement of 0.80 m against an average resistive force of 25,000 N, and exhausts into the atmosphere at lower temperature and pressure.",
    "What mechanical work is delivered per piston stroke, and what fundamental energy transformation occurred?",
    "20,000 J; Thermal energy of expanding steam converted into Mechanical work of the piston.",
    "31,250 J; Kinetic energy converted into Chemical energy.",
    "20,000 J; Electrical energy converted into Gravitational potential energy.",
    "12,500 J; Nuclear binding energy converted into Heat.",
    "A",
    "Work done per stroke = Force × displacement = 25,000 N × 0.80 m = 20,000 J (20 kJ). The thermal heat energy carried by high-pressure steam molecules exerts pressure on the piston face; expansion causes the molecules to transfer kinetic momentum to the moving piston, converting thermodynamic heat energy into mechanical work."
  ),
  makeCase(
    chapter, 20, "Nuclear Fission Power Reactor Energetics", "Mass-Energy Equivalence in Fission",
    "In a nuclear reactor core, slow thermal neutrons induce fission of Uranium-235 nuclei. In each fission event, the combined rest mass of the fission products and neutrons is slightly less than the initial reactant mass by a mass defect Δm = 3.56 × 10^-28 kg.",
    "What energy conversion takes place, and how much energy is released per fission event (using c = 3 × 10^8 m/s)?",
    "Nuclear mass energy is converted into Kinetic energy of fission fragments and gamma radiation; Energy released ≈ 3.2 × 10^-11 J (approx 200 MeV).",
    "Chemical energy is converted into Electrical energy; Energy released = 1.07 × 10^-19 J.",
    "Gravitational energy is converted into Thermal energy; Energy released = 6.4 × 10^-11 J.",
    "Elastic strain energy is converted into Nuclear energy; Energy released = 3.2 × 10^-14 J.",
    "A",
    "By Einstein's mass-energy equivalence relation E = Δm·c², the disappearance of rest mass defect Δm releases nuclear energy: E = (3.56 × 10^-28 kg) × (3 × 10^8 m/s)² = 3.56 × 10^-28 × 9 × 10^16 ≈ 3.204 × 10^-11 J. In electron-volts: (3.204 × 10^-11 J) / (1.6 × 10^-19 J/eV) ≈ 200 MeV. Nuclear mass energy converts into kinetic energy of fragments, which heats the reactor coolant."
  ),
  makeCase(
    chapter, 21, "Energy Degradation in Vehicle Disc Brakes", "Dissipation of Mechanical Energy into Non-Usable Heat",
    "A heavy mining truck descending a steep grade uses friction disc brakes to maintain a steady safe speed. The brake discs glow dull red as mechanical kinetic energy is converted into thermal heat that radiates out into the ambient atmosphere.",
    "What principle of physics does this illustrate regarding the quality and reversibility of energy?",
    "Degradation of energy: ordered, high-grade mechanical energy dissipates into disordered, low-grade thermal energy which cannot be fully recovered.",
    "Violation of energy conservation: energy is destroyed by friction.",
    "Creation of new chemical energy from mechanical wear.",
    "Complete conversion of thermal energy back into gravitational potential energy.",
    "A",
    "While total energy is strictly conserved, energy possesses quality. Mechanical work and kinetic energy are ordered, high-grade forms of energy capable of 100% conversion into other forms. In contrast, frictional heat dissipated into the ambient atmosphere is disordered, low-grade thermal energy (degraded energy) which cannot be spontaneously reassembled to do useful mechanical work."
  ),
  makeCase(
    chapter, 22, "Construction Pile Driver Soil Penetration", "Work Done by Hammer Against Soil Resistance",
    "A heavy construction pile driver drops a 600 kg steel drop-hammer from a height of 5.0 m onto the top of a steel foundation pile. The hammer strikes the pile without bouncing and drives it 10 cm (0.10 m) deeper into the clay soil (taking g = 10 m/s²).",
    "What is the average resistance force exerted by the soil against the pile during penetration?",
    "306,000 N (approx 306 kN)",
    "30,000 N",
    "60,000 N",
    "150,000 N",
    "A",
    "Initial gravitational potential energy of hammer relative to final rested position = m·g·(h + d) = 600 × 10 × (5.0 + 0.10) = 6000 × 5.1 = 30,600 J. By work-energy theorem, this total energy is dissipated by the resistive force F of the soil over penetration distance d = 0.10 m: F × d = 30,600 J => F × 0.10 = 30,600 => F = 306,000 N (306 kN)."
  ),
  makeCase(
    chapter, 23, "Rifle Recoil and Kinetic Energy Partitioning", "Inverse Mass Partition of Kinetic Energy",
    "A sniper rifle of mass M = 5.0 kg fires a high-velocity bullet of mass m = 10 g (0.010 kg) with a muzzle velocity of 800 m/s. The system is initially at rest.",
    "What is the recoil velocity of the rifle, and what is the ratio of the kinetic energy of the bullet to that of the rifle?",
    "Recoil velocity = 1.6 m/s; KE_bullet / KE_rifle = 500",
    "Recoil velocity = 8.0 m/s; KE_bullet / KE_rifle = 100",
    "Recoil velocity = 1.6 m/s; KE_bullet / KE_rifle = 1",
    "Recoil velocity = 0.8 m/s; KE_bullet / KE_rifle = 250",
    "A",
    "By conservation of linear momentum: M·V_recoil = m·v_bullet => 5.0 × V_recoil = 0.010 × 800 = 8.0 kg·m/s => V_recoil = 1.6 m/s. Kinetic energies: KE_bullet = p² / (2m); KE_rifle = p² / (2M). Since momentum p is identical in magnitude: KE_bullet / KE_rifle = M / m = 5.0 kg / 0.010 kg = 500. The lighter bullet carries 500 times more kinetic energy than the heavy rifle."
  ),
  makeCase(
    chapter, 24, "Gymnast on a Competition Trampoline", "Elastic Potential Energy Bounce Cycle",
    "An acrobat of mass 50 kg drops vertically onto a trampoline from an initial height of 3.2 m above the relaxed bed. The elastic trampoline springs stretch, bringing the acrobat momentarily to rest at a depression depth of 0.80 m below the initial bed level (taking g = 10 m/s²).",
    "What is the maximum elastic strain energy stored in the stretched trampoline springs at the lowest point?",
    "2000 J",
    "1600 J",
    "400 J",
    "2400 J",
    "A",
    "Total vertical drop of acrobat from initial apex to lowest arrest point = h + d = 3.2 m + 0.80 m = 4.0 m. Total loss in gravitational potential energy = m·g·(h + d) = 50 kg × 10 m/s² × 4.0 m = 2000 J. At the lowest arrest point, the acrobat is momentarily stationary (KE = 0). By conservation of mechanical energy, all 2000 J of lost gravitational PE is stored as elastic potential energy in the stretched trampoline springs."
  ),
  makeCase(
    chapter, 25, "Domestic Water Pump Motor Rating and Efficiency", "Power and Pumping Efficiency",
    "A residential electric water pump lifts 1200 liters (1200 kg) of water to an overhead rooftop tank situated at a height of 15 meters in 5 minutes (300 seconds). The electric motor consumes electrical power from the mains at a constant rate of 1000 W (taking g = 10 m/s²).",
    "What is the useful mechanical power output of the pump, and what is its overall operational efficiency?",
    "Useful power = 600 W; Efficiency = 60%",
    "Useful power = 800 W; Efficiency = 80%",
    "Useful power = 500 W; Efficiency = 50%",
    "Useful power = 1000 W; Efficiency = 100%",
    "A",
    "Work done in lifting water = m·g·h = 1200 kg × 10 m/s² × 15 m = 180,000 J. Time taken t = 300 s. Useful mechanical power output P_out = W / t = 180,000 J / 300 s = 600 W. Power input P_in = 1000 W. Efficiency η = (P_out / P_in) × 100 = (600 / 1000) × 100 = 60%."
  ),
  makeCase(
    chapter, 26, "Commercial Wind Turbine Kinetic Power Extraction", "Power Proportional to Cube of Wind Speed",
    "A 2.0 MW commercial wind turbine extracts kinetic energy from oncoming air. Meteorological data indicates that during a calm day, wind blows at 6 m/s, whereas during a storm front, wind speed doubles to 12 m/s.",
    "By what factor does the total kinetic power available in the wind stream increase when the wind speed doubles?",
    "Increases by a factor of 8 (2³ = 8)",
    "Increases by a factor of 4 (2² = 4)",
    "Increases by a factor of 2",
    "Increases by a factor of 16 (2⁴ = 16)",
    "A",
    "The kinetic energy of mass m of air is 1/2 m v². The mass of air passing through rotor swept area A per second is dm/dt = ρ·A·v. Thus, available power P = 1/2 (dm/dt) v² = 1/2 ρ·A·v³. Power is directly proportional to the cube of wind speed (P ∝ v³). When speed doubles from 6 m/s to 12 m/s, power increases by (12/6)³ = 2³ = 8 times."
  ),
  makeCase(
    chapter, 27, "Bungee Jumper Cord Deceleration Mechanics", "Gravitational to Elastic Strain Conversion",
    "A bungee jumper of mass 70 kg steps off a bridge 80 m above a river gorge attached to an elastic cord of unstretched length 30 m and spring constant k = 50 N/m. The jumper falls freely for 30 m, after which the cord stretches until bringing the jumper to rest just above the water surface (taking g = 10 m/s²).",
    "What is the maximum stretch x of the cord at the lowest arrest point?",
    "≈ 36.3 m",
    "≈ 20.0 m",
    "≈ 50.0 m",
    "≈ 42.0 m",
    "A",
    "Total vertical drop = L + x = 30 + x. Loss in gravitational PE = m·g·(30 + x) = 700·(30 + x) = 21,000 + 700x. Gain in elastic PE of cord = 1/2 k x² = 1/2 × 50 × x² = 25 x². Equating: 25 x² - 700 x - 21,000 = 0 => x² - 28 x - 840 = 0. Solving quadratic: x = [28 + sqrt(784 + 3360)] / 2 = [28 + sqrt(4144)] / 2 ≈ [28 + 64.37] / 2 ≈ 46.18 m."
  ),
  makeCase(
    chapter, 28, "Metropolitan Electric Train Regenerative Braking", "Kinetic to Electrical Energy Recovery",
    "A 6-car metro electric train of mass 200 tonnes (200,000 kg) traveling at 20 m/s (72 km/h) approaches an underground station. Rather than using friction pads, the driver engages regenerative braking, causing the electric traction motors to act as generators, converting 70% of the train's kinetic energy into electrical energy returned to the 25 kV overhead catenary line.",
    "How much electrical energy is recovered and returned to the power grid during this braking stop?",
    "28,000,000 J (28 MJ)",
    "40,000,000 J (40 MJ)",
    "14,000,000 J (14 MJ)",
    "56,000,000 J (56 MJ)",
    "A",
    "Total kinetic energy of train = 1/2 m v² = 1/2 × 200,000 kg × (20 m/s)² = 100,000 × 400 = 40,000,000 J (40 MJ). With 70% regenerative recovery efficiency, recovered electrical energy = 0.70 × 40 MJ = 28 MJ (28,000,000 J)."
  ),
  makeCase(
    chapter, 29, "High Jumper Fosbury Flop Biomechanics", "Center of Mass Trajectory vs Physical Clearance",
    "In track and field high jumping, athletes using the Fosbury Flop arch their back concave downward as they clear the horizontal crossbar at height H = 2.40 m. Biomechanical motion capture reveals that the athlete's center of mass actually passes several centimeters below the crossbar.",
    "From an energy perspective, why does this technique enable athletes to clear higher bars?",
    "It minimizes the vertical work required m·g·Δh because the center of mass does not have to be lifted as high as the bar itself.",
    "It increases the athlete's kinetic energy at the apex of the jump.",
    "It converts gravitational potential energy into aerodynamic lift.",
    "It eliminates the downward pull of gravity while the body is inverted.",
    "A",
    "To clear a height, the athlete must supply work W = m·g·Δh to raise their center of mass. In older scissor or straddle styles, the entire body and center of mass had to pass well above the bar. By dramatically arching the back, the athlete distributes body segments such that the geometric center of mass passes through or slightly below the bar, requiring less initial kinetic energy and muscular work."
  ),
  makeCase(
    chapter, 30, "Hammer Striking Nail into Hardwood", "Work Done Against Resistive Penetration",
    "A carpenter swings a 1.2 kg steel hammer vertically downward onto an iron nail with an impact speed of 10 m/s. The nail penetrates 2.5 cm (0.025 m) into a dense teakwood beam before coming to rest (neglecting the weight of the nail).",
    "What is the average resistive force exerted by the hardwood against the penetrating nail?",
    "2400 N",
    "1200 N",
    "4800 N",
    "600 N",
    "A",
    "Kinetic energy of hammer immediately before impact = 1/2 m v² = 1/2 × 1.2 kg × (10 m/s)² = 0.6 × 100 = 60 J. By work-energy theorem, this kinetic energy is entirely expended in doing work against the wood's resistive force F over penetration distance d = 0.025 m: F × d = 60 J => F × 0.025 = 60 => F = 60 / 0.025 = 2400 N."
  ),
  makeCase(
    chapter, 31, "Kinetic Energy of a Projectile at Maximum Height", "Horizontal Component of Velocity and Residual KE",
    "An artillery shell of mass m = 20 kg is launched from ground level with an initial kinetic energy of 100,000 J (100 kJ) at an elevation angle of 60° to the horizontal. Air resistance is negligible.",
    "What is the kinetic energy and potential energy of the shell at the highest point of its trajectory?",
    "KE = 25,000 J; PE = 75,000 J",
    "KE = 0 J; PE = 100,000 J",
    "KE = 50,000 J; PE = 50,000 J",
    "KE = 75,000 J; PE = 25,000 J",
    "A",
    "Initial KE = 1/2 m u² = 100,000 J. At the highest point, vertical velocity component is zero (v_y = 0), but the horizontal velocity remains unchanged: v_x = u cos(60°) = u/2. Kinetic energy at top = 1/2 m (v_x)² = 1/2 m (u/2)² = 1/4 (1/2 m u²) = 1/4 × 100,000 J = 25,000 J. By conservation of total energy, PE at top = Total E - KE_top = 100,000 - 25,000 = 75,000 J."
  ),
  makeCase(
    chapter, 32, "Vertical Mass-Spring Oscillator Energy Partition", "Triple Energy Interconversion in Vertical Spring",
    "A block of mass 2.0 kg is suspended from a vertical spring of force constant k = 200 N/m. The block is pulled down by 0.20 m from its equilibrium position and released from rest. An engineer tracks the kinetic energy (KE), elastic potential energy (EPE), and gravitational potential energy (GPE) throughout the motion.",
    "Which statement correctly describes the total mechanical energy of the system during oscillation in a vacuum?",
    "The sum (KE + EPE + GPE) remains constant at all points during the oscillation.",
    "Kinetic energy remains constant while spring potential energy fluctuates.",
    "Mechanical energy is constantly destroyed and recreated as the block passes the center.",
    "Gravitational PE and Elastic PE are always equal in magnitude at every instant.",
    "A",
    "In an ideal vertical spring-mass system with conservative forces (gravity and linear elastic spring force), mechanical energy is conserved: E_total = KE + EPE + GPE = constant. As the mass moves, gravitational potential energy, elastic strain energy of the spring, and kinetic energy continuously trade off with one another, keeping their total sum constant."
  ),
  makeCase(
    chapter, 33, "Industrial Heavy Press Flywheel Storage", "Rotational Kinetic Energy Buffer",
    "A heavy metal sheet stamping press uses a solid cast steel flywheel of moment of inertia I = 50 kg·m² rotating at 600 rpm (ω1 = 20π rad/s ≈ 62.83 rad/s). During a sudden 0.2-second stamping operation, the flywheel slows to 480 rpm (ω2 = 16π rad/s ≈ 50.27 rad/s) as it delivers energy to punch through a thick steel plate.",
    "How much energy was delivered by the flywheel to punch through the plate?",
    "≈ 35,530 J",
    "≈ 12,500 J",
    "≈ 50,000 J",
    "≈ 24,800 J",
    "A",
    "Initial rotational KE = 1/2 I ω1² = 1/2 × 50 × (62.83)² = 25 × 3947.6 ≈ 98,690 J. Final rotational KE = 1/2 I ω2² = 1/2 × 50 × (50.27)² = 25 × 2527 ≈ 63,175 J. Energy delivered to punch the plate = KE1 - KE2 = 98,690 - 63,175 ≈ 35,515 J (approx 35.5 kJ)."
  ),
  makeCase(
    chapter, 34, "Skyscraper Traction Elevator Counterweight Engineering", "Minimizing Motor Work via Counterweight",
    "A passenger elevator in a 40-story office building has an empty car mass of 1200 kg and a rated carrying capacity of 800 kg (10 passengers). Building standards install a counterweight of mass equal to the empty car mass plus 50% of the rated capacity (Counterweight = 1200 + 400 = 1600 kg).",
    "Why is the counterweight engineered to balance 50% of passenger load rather than full load or zero load?",
    "It minimizes the maximum out-of-balance load (and therefore the motor power and energy required) across all operating conditions from empty to full.",
    "It ensures the car always falls upward in case of cable failure.",
    "It eliminates the need for braking when approaching floors.",
    "It increases the maximum velocity of the elevator car tenfold.",
    "A",
    "When empty, out-of-balance mass is 1600 - 1200 = 400 kg. When fully loaded (2000 kg), out-of-balance mass is 2000 - 1600 = 400 kg. By setting counterweight = Empty + 50% Load, the maximum unbalanced force the motor must lift is halved to 400 kg under all conditions, drastically minimizing motor torque, power rating, and electricity consumption."
  ),
  makeCase(
    chapter, 35, "Solar Agricultural Water Pump Daily Output", "Solar Irradiance to Gravitational Work",
    "A rural solar pump system has a solar panel array of area 12 m² operating under an average solar irradiance of 750 W/m² for 6 hours of peak sunlight. The overall system efficiency (solar to water pumped) is 15%. The pump lifts water from an underground well to an irrigation canal situated 10 m higher (g = 10 m/s²).",
    "What total mass of water is pumped into the canal over the 6-hour period?",
    "291,600 kg (approx 291,600 liters)",
    "58,320 kg",
    "145,800 kg",
    "583,200 kg",
    "A",
    "Total incident solar energy = Irradiance × Area × time = 750 W/m² × 12 m² × (6 × 3600 s) = 9000 W × 21,600 s = 194,400,000 J. Useful mechanical work done on water = 15% of 194.4 MJ = 0.15 × 194,400,000 = 29,160,000 J. Work done = m·g·h => 29,160,000 = m × 10 × 10 => 100 m = 29,160,000 => m = 291,600 kg."
  ),
  makeCase(
    chapter, 36, "Aerospace Multistage Rocket Staging", "Chemical Fuel Energy to Kinetic Velocity",
    "In satellite launch vehicles like ISRO's PSLV, spent heavy rocket booster stages and empty fuel tanks are jettisoned as soon as their propellant is consumed, rather than carrying them into orbit.",
    "Why does jettisoning dead stage mass dramatically increase the final orbital kinetic energy of the payload?",
    "Reducing total mass allows the chemical energy of subsequent stage fuels to produce vastly higher velocity increments (Δv) for the remaining lighter payload.",
    "Jettisoning stages increases the gravitational pull of Earth on the payload.",
    "Empty fuel tanks exert a backward magnetic drag on the rocket.",
    "It converts atmospheric drag into forward propulsive thrust.",
    "A",
    "By Tsiolkovsky's rocket equation Δv = v_e·ln(m_initial / m_final), every kilogram of dead structural mass carried forward penalizes the velocity gain. Dropping empty stages sheds massive dead weight, meaning the chemical energy released by the next stage's propellant accelerates a much smaller mass, maximizing velocity and orbital kinetic energy."
  ),
  makeCase(
    chapter, 37, "Bullet Fired Through a Series of Wooden Planks", "Work Done and Residual Velocity",
    "A rifle bullet of mass 10 g enters a fixed wooden plank of thickness 4.0 cm with speed u = 400 m/s and emerges from the opposite side with speed v = 300 m/s. Assuming the wooden plank exerts a uniform resistive force F throughout.",
    "How many additional identical 4.0 cm planks must be placed in contact to bring the bullet completely to rest?",
    "At least 2 additional planks (bullet stops inside the 2nd additional plank)",
    "Exactly 1 additional plank",
    "3 additional planks",
    "4 additional planks",
    "A",
    "Loss of KE in first plank = 1/2 m (u² - v²) = 1/2 m (400² - 300²) = 1/2 m (160,000 - 90,000) = 1/2 m (70,000). Remaining KE of emerging bullet = 1/2 m (300²) = 1/2 m (90,000). Since each plank absorbs 1/2 m (70,000) of energy, the number of planks needed to absorb remaining 90,000 is 90,000 / 70,000 ≈ 1.28 planks. Thus, the bullet will pierce 1 full plank and penetrate into the 2nd additional plank."
  ),
  makeCase(
    chapter, 38, "Commercial Passenger Aircraft Cruising at Level Flight", "Work Done Against Aerodynamic Drag",
    "A Boeing 787 airliner cruises at a constant altitude of 10,000 m and a constant speed of 250 m/s (900 km/h). The total aerodynamic drag force opposing the aircraft is 120,000 N (120 kN).",
    "What is the total mechanical power delivered by the jet engines to maintain this cruise flight?",
    "30,000,000 W (30 MW)",
    "12,000,000 W (12 MW)",
    "60,000,000 W (60 MW)",
    "3,000,000 W (3 MW)",
    "A",
    "At constant cruising speed and altitude, net acceleration is zero, so engine forward thrust T equals aerodynamic drag D = 120,000 N. Mechanical power delivered by the engines P = Thrust × velocity = 120,000 N × 250 m/s = 30,000,000 W = 30 MW."
  ),
  makeCase(
    chapter, 39, "Platform Diver Water Deceleration", "Potential Energy and Hydrodynamic Work",
    "A diver of mass 60 kg steps off a 10.0-meter high diving tower into a deep pool. Entering the water, hydrodynamic drag and buoyancy decelerate the diver, bringing them to rest at a depth of 3.0 meters below the surface (taking g = 10 m/s²).",
    "What is the average upward resistive force exerted by the water on the diver?",
    "2600 N",
    "2000 N",
    "1800 N",
    "1200 N",
    "A",
    "Total vertical displacement from tower to deepest point = 10 m (in air) + 3 m (in water) = 13 m. Total gravitational potential energy lost = m·g·(h + d) = 60 kg × 10 m/s² × 13 m = 7800 J. Work done by the water's resistive force F_water over depth d = 3.0 m: F_water × 3.0 m = 7800 J => F_water = 7800 / 3.0 = 2600 N."
  ),
  makeCase(
    chapter, 40, "Automobile Acceleration from 0 to 50 km/h vs 50 to 100 km/h", "Non-Linear Work Required for Velocity Intervals",
    "An electric sports car accelerates from rest (0 km/h) to 50 km/h, requiring W1 amount of work from its battery. The car then accelerates further from 50 km/h to 100 km/h, requiring W2 amount of work. Neglecting friction and drag.",
    "What is the ratio of work W2 required for the second 50 km/h speed increase to the work W1 required for the first?",
    "W2 / W1 = 3 (Three times more work)",
    "W2 / W1 = 1 (Equal work because speed increment is the same)",
    "W2 / W1 = 2 (Twice the work)",
    "W2 / W1 = 4 (Four times the work)",
    "A",
    "Let v = 50 km/h. Initial state: v0 = 0. State 1: v1 = v. State 2: v2 = 2v. Work W1 = 1/2 m (v1² - v0²) = 1/2 m v². Work W2 = 1/2 m (v2² - v1²) = 1/2 m ((2v)² - v²) = 1/2 m (4v² - v²) = 3 × (1/2 m v²) = 3 W1. Accelerating from 50 to 100 km/h requires 3 times more energy than accelerating from 0 to 50 km/h because kinetic energy depends on the square of velocity."
  ),
  makeCase(
    chapter, 41, "Athlete Stair Climbing Fitness Power Test", "Human Power Output Measurement",
    "During a cardiopulmonary stress test, an athlete of mass 70 kg sprints up a flight of stairs comprising 40 steps, each of height 18 cm (0.18 m), in a recorded time of 7.0 seconds (taking g = 10 m/s²).",
    "What is the average mechanical power output developed by the athlete during the sprint?",
    "720 Watts (approx 0.965 horsepower)",
    "504 Watts",
    "1440 Watts",
    "360 Watts",
    "A",
    "Total vertical height climbed h = 40 steps × 0.18 m = 7.20 m. Work done against gravity = m·g·h = 70 kg × 10 m/s² × 7.20 m = 5040 J. Time taken t = 7.0 s. Power output P = W / t = 5040 J / 7.0 s = 720 W. (Since 1 hp = 746 W, this represents approx 0.965 hp)."
  ),
  makeCase(
    chapter, 42, "Pneumatic Jackhammer Compressed Air Expansion", "Expansion Work of Compressed Gas",
    "A road crew uses a pneumatic jackhammer powered by compressed air from a diesel compressor. In each stroke, 0.002 m³ of compressed air at an effective gauge pressure of 600,000 Pa (6 bar) expands against the internal piston, driving the chisel into concrete.",
    "What mechanical work is delivered by the expanding air in a single impact stroke?",
    "1200 J",
    "600 J",
    "300 J",
    "2400 J",
    "A",
    "Work done by an expanding fluid at constant pressure W = P·ΔV = 600,000 N/m² × 0.002 m³ = 1200 J (1.2 kJ) per stroke."
  ),
  makeCase(
    chapter, 43, "Olympic Ski Jumper In-Run Ramp Velocity", "Conservation of Energy on Curved In-Run",
    "An Olympic ski jumper of mass 65 kg starts from rest at the top of an in-run ramp at height h = 40 m above the take-off lip. Due to snow friction and air drag, 10% of the initial mechanical energy is lost during the descent (taking g = 10 m/s²).",
    "What is the take-off speed of the jumper as they leave the ramp lip?",
    "26.83 m/s (approx 96.6 km/h)",
    "28.28 m/s",
    "20.00 m/s",
    "30.00 m/s",
    "A",
    "Initial PE = m·g·h = 65 × 10 × 40 = 26,000 J. With 10% lost to friction, 90% is retained as kinetic energy at the lip: KE_lip = 0.90 × 26,000 = 23,400 J. 1/2 m v² = 23,400 => 1/2 × 65 × v² = 23,400 => 32.5 v² = 23,400 => v² = 720 => v = sqrt(720) ≈ 26.83 m/s."
  ),
  makeCase(
    chapter, 44, "Falling Slinky Spring Center of Mass Dynamics", "Internal Elastic Force vs Free Fall",
    "A physics teacher holds a heavy metal slinky spring suspended by its top end so that it hangs fully stretched under its own weight. When the teacher suddenly releases the top end, high-speed cameras record the motion: the bottom of the slinky remains completely motionless in mid-air until the top collapses down to meet it.",
    "Why does the bottom of the suspended slinky remain stationary for a fraction of a second after release?",
    "The upward internal tension in the stretched spring exactly balances the downward gravitational weight on the bottom coils until the collapse wave arrives.",
    "The bottom coils possess zero mass.",
    "Air resistance pushes upward on the bottom coils.",
    "Gravity only acts on the top of the spring.",
    "A",
    "Before release, every coil is in equilibrium: the upward elastic tension from coils above balances the downward gravitational force of coils below. When the top is released, information about the release travels down the spring at the speed of an elastic wave. Until this wave reaches the bottom, the upward tension remains unchanged and continues to balance gravity, keeping the bottom coils stationary."
  ),
  makeCase(
    chapter, 45, "Completely Inelastic Collision of Modeling Clay Spheres", "Mechanical Energy Loss in Inelastic Impacts",
    "In a collision dynamics experiment, Sphere A of mass 0.40 kg moving East at 6.0 m/s collides head-on with Sphere B of mass 0.20 kg moving West at 3.0 m/s. The spheres are made of soft modeling clay and stick firmly together upon impact, moving as a single combined mass.",
    "What is the final common velocity of the combined mass and the mechanical kinetic energy lost as heat and deformation?",
    "Common velocity = 3.0 m/s East; Kinetic energy lost = 5.4 J",
    "Common velocity = 4.5 m/s East; Kinetic energy lost = 0 J",
    "Common velocity = 2.0 m/s East; Kinetic energy lost = 7.2 J",
    "Common velocity = 3.0 m/s West; Kinetic energy lost = 3.6 J",
    "A",
    "By conservation of momentum (taking East as positive): m_A·v_A + m_B·v_B = (m_A + m_B)·v_f => (0.40 × 6.0) + (0.20 × -3.0) = 0.60 v_f => 2.4 - 0.6 = 0.60 v_f => 1.8 = 0.60 v_f => v_f = +3.0 m/s (East). Initial KE = 1/2(0.4)(6²) + 1/2(0.2)(3²) = 7.2 + 0.9 = 8.1 J. Final KE = 1/2(0.6)(3²) = 2.7 J. Loss in KE = 8.1 - 2.7 = 5.4 J (converted to heat and internal plastic deformation)."
  ),
  makeCase(
    chapter, 46, "Historical Gyrobus Kinetic Flywheel Propulsion", "Flywheel Storage Energy Density",
    "In the 1950s, Swiss public transit operated 'Gyrobuses' which had no overhead wires or diesel engines. Instead, at passenger stops every few kilometers, electric charging arms spun up a massive 1500 kg steel flywheel of radius 0.80 m to 3000 rpm (ω = 100π rad/s ≈ 314 rad/s), storing rotational kinetic energy to propel the bus to the next station.",
    "Assuming moment of inertia I = 1/2 m r² for the solid flywheel disc, what total energy was stored at full charge?",
    "≈ 23,660,000 J (23.66 MJ)",
    "≈ 11,830,000 J (11.83 MJ)",
    "≈ 47,320,000 J (47.32 MJ)",
    "≈ 5,915,000 J (5.92 MJ)",
    "A",
    "Moment of inertia of disc I = 1/2 m r² = 1/2 × 1500 kg × (0.80 m)² = 750 × 0.64 = 480 kg·m². Rotational kinetic energy = 1/2 I ω² = 1/2 × 480 × (314.16)² = 240 × 98,696 ≈ 23,687,000 J ≈ 23.69 MJ. This stored kinetic energy was gradually converted by an onboard generator into electricity to drive the traction motor."
  ),
  makeCase(
    chapter, 47, "Kinetic Energy vs Momentum Functional Graphing", "Parabolic Relationship KE = p² / (2m)",
    "A physics student plots experimental data for an object of constant mass m = 2.0 kg whose speed varies. The student plots a graph of Kinetic Energy (KE on y-axis) against Linear Momentum (p on x-axis).",
    "What is the mathematical shape of the graph, and what physical relationship does it confirm?",
    "A parabola opening upward passing through the origin, confirming that KE = p² / (2m).",
    "A straight line passing through the origin with slope equal to velocity.",
    "A hyperbola asymptotic to both axes.",
    "An inverted bell curve.",
    "A",
    "Linear momentum p = m·v, and kinetic energy KE = 1/2 m v². Substituting v = p/m gives KE = 1/2 m (p/m)² = p² / (2m). For a constant mass m, this equation represents a standard quadratic parabola of the form y = c·x² opening upward with vertex at the origin (0,0)."
  ),
  makeCase(
    chapter, 48, "Equal Kinetic Energy of Unequal Masses", "Momentum Comparison for Constant KE",
    "A lightweight sports coupe of mass m1 = 1000 kg and a heavy loaded transport truck of mass m2 = 9000 kg are traveling down parallel lanes of a highway with exactly the same kinetic energy of 450,000 J (450 kJ).",
    "How does the linear momentum of the truck p2 compare with the linear momentum of the car p1?",
    "p2 = 3·p1 (The truck has 3 times greater momentum)",
    "p2 = p1 (Equal momentum)",
    "p2 = 9·p1 (The truck has 9 times greater momentum)",
    "p1 = 3·p2 (The car has 3 times greater momentum)",
    "A",
    "The relationship between momentum and kinetic energy is p = sqrt(2·m·KE). Since KE is identical for both: p2 / p1 = sqrt(m2 / m1) = sqrt(9000 / 1000) = sqrt(9) = 3. Therefore, the heavier truck possesses 3 times the linear momentum of the car, despite having identical kinetic energy."
  ),
  makeCase(
    chapter, 49, "Equal Linear Momentum of Unequal Masses", "Kinetic Energy Comparison for Constant Momentum",
    "A tennis ball of mass m1 = 50 g (0.050 kg) and a bowling ball of mass m2 = 5.0 kg have exactly the same magnitude of linear momentum p = 10 kg·m/s.",
    "Which object possesses greater kinetic energy, and by what factor?",
    "The tennis ball possesses 100 times more kinetic energy than the bowling ball.",
    "The bowling ball possesses 100 times more kinetic energy than the tennis ball.",
    "Both possess identical kinetic energy because their momentum is the same.",
    "The tennis ball possesses 10 times more kinetic energy.",
    "A",
    "Kinetic energy in terms of momentum is KE = p² / (2m). When momentum p is constant, kinetic energy is inversely proportional to mass (KE ∝ 1/m). Ratio KE1 / KE2 = m2 / m1 = 5.0 kg / 0.050 kg = 100. The lighter tennis ball must travel at a much higher speed (200 m/s vs 2 m/s) to achieve the same momentum, giving it 100 times greater kinetic energy."
  ),
  makeCase(
    chapter, 50, "Crude Oil Pipeline Pumping Power Against Viscous Friction", "Pressure Head and Fluid Power",
    "An oil pipeline booster pump station pushes crude oil through a 100 km pipeline at a volumetric flow rate Q = 0.20 m³/s. Due to viscous wall friction, a pressure drop of ΔP = 4,000,000 Pa (4 MPa) occurs along the section.",
    "What is the mechanical fluid power that must be continuously delivered by the pump to overcome this viscous friction?",
    "800,000 Watts (800 kW)",
    "400,000 Watts (400 kW)",
    "1,600,000 Watts (1.6 MW)",
    "200,000 Watts (200 kW)",
    "A",
    "Fluid power delivered by a pump against a pressure difference is given by Power P = Volume flow rate Q × Pressure difference ΔP = 0.20 m³/s × 4,000,000 N/m² = 800,000 W = 800 kW. This power is entirely converted into frictional heat dissipated into the oil and surrounding pipe."
  )
];

const outPath = path.join(__dirname, 'questionBank', 'physics_case_work_energy_power.json');
fs.writeFileSync(outPath, JSON.stringify(wepCases, null, 2), 'utf8');
console.log(`Saved ${wepCases.length} case studies for Work, Energy and Power to ${outPath}`);
