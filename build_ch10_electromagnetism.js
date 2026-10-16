const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Electromagnetism";

const emCases = [
  makeCase(
    chapter, 1, "Oersted's Compass Needle Deflection Under a Current Conductor", "Oersted's Discovery and Right-Hand Grip Rule",
    "In 1820, Hans Christian Oersted placed a magnetic compass needle directly beneath a horizontal copper wire aligned parallel to the geographic North-South meridian. When a DC current is switched on flowing from South to North through the wire, the compass needle beneath the wire immediately deflects toward the West.",
    "What fundamental physical law governs the direction of this compass deflection, and what would happen if current were reversed?",
    "Ampere's swimming rule (or Right-Hand Grip rule): when current flows South to North above the needle, the North pole deflects West; reversing the current deflects the North pole toward the East.",
    "Lenz's law: the needle points South regardless of current direction.",
    "Fleming's Left Hand rule: the compass needle flies upwards toward the ceiling.",
    "Coulomb's law: electric charges attract the magnetic needle purely by electrostatic force.",
    "A",
    "According to Ampere's swimming rule (or right-hand thumb rule): imagine swimming along the wire in the direction of current with face turned toward the needle; the north pole of the needle is always deflected toward the swimmer's left hand. With current from South to North above the needle, left points West. Reversing current to North-to-South reverses the magnetic field vector, deflecting the north pole East."
  ),
  makeCase(
    chapter, 2, "Magnetic Field Pattern Around a Long Straight Current Wire", "Field Strength Dependency B ∝ I/r and Concentric Circles",
    "A vertical copper conductor passes perpendicularly through the center of a horizontal stiff cardboard sheet. Iron filings sprinkled on the cardboard arrange themselves into concentric circular lines when a heavy direct current I flows upward through the wire.",
    "If the current through the wire is tripled from I to 3I, and the observation distance from the wire is doubled from r to 2r, how does the magnetic field flux density B change?",
    "B increases by a factor of 6.0",
    "B increases by a factor of 1.5 (3/2)",
    "B decreases by a factor of 0.75",
    "B remains completely unchanged",
    "B",
    "The magnetic field around a long straight current-carrying wire is given by the Biot-Savart law: B = μ₀I / (2πr). Magnetic field B is directly proportional to current I and inversely proportional to radial distance r (B ∝ I/r). When current increases by 3 and distance increases by 2, the new field is B' = (3/2) B = 1.5 B."
  ),
  makeCase(
    chapter, 3, "Polarity of a Circular Current-Carrying Coil: The Clock Rule", "Clock Face Rule for Determining Magnetic Poles",
    "A circular loop of copper wire is mounted in a vertical plane. An observer standing directly in front of the loop looks at the face of the coil. When DC current is switched on, the current flows in a counter-clockwise direction from the observer's viewpoint.",
    "What magnetic polarity does this face of the loop exhibit, and what polarity appears on the opposite rear face?",
    "Front face: South pole; Rear face: North pole",
    "Front face: North pole; Rear face: South pole",
    "Both faces exhibit North polarity simultaneously.",
    "Neither face exhibits polarity because loops do not produce magnetic fields.",
    "B",
    "By the Clock Rule: (1) If current flows in an anti-clockwise direction around a face, magnetic field lines emerge outward from that face, acting as a magnetic North pole (N). (2) If viewed from the opposite rear face, the current appears to circulate in a clockwise direction, where field lines enter inward, acting as a South pole (S). Every current loop is a magnetic dipole."
  ),
  makeCase(
    chapter, 4, "Magnetic Field Inside a Long Solenoid vs External Field", "Uniform Axial Field Inside an Ideal Solenoid",
    "A long helical solenoid of length 50 cm and 1000 tightly wound insulated copper turns carries a steady current of 2.0 A in air. A Hall effect magnetometer probe measures the magnetic field at three locations: Point X (at the geometric center along the central axis), Point Y (near the open end of the solenoid), and Point Z (outside the solenoid far from the ends).",
    "How do the magnetic fields compare at these three points?",
    "Field at X is strong and perfectly uniform; field at end Y is approximately half of X (B_end ≈ B_center / 2); field at external point Z is virtually zero.",
    "Field at external point Z is maximum; field inside at X is zero.",
    "Field is identical in magnitude and direction at X, Y, and Z.",
    "Field at end Y is twice as strong as at center X.",
    "A",
    "Inside a long tightly wound solenoid, magnetic field lines are straight, parallel, and densely packed, forming an intense, uniform axial magnetic field: B_center = μ₀nI (where n = N/L). At the open ends, field lines flare out symmetrically into half-space, so the axial field drops to exactly half: B_end = μ₀nI / 2. Outside the solenoid, returning field lines spread across vast space, making the external field negligible (B ≈ 0)."
  ),
  makeCase(
    chapter, 5, "Soft Iron Core vs Hard Steel Core in an Electromagnet", "Magnetic Permeability, Retentivity, and Coercivity",
    "A student constructs two electromagnets of identical dimensions and coil windings: Electromagnet A has a soft iron core, while Electromagnet B has a hardened carbon steel core. Both coils are energized with 5 A DC current, picking up paperclips, and then the power supply switch is opened.",
    "What happens when the current is turned off in both electromagnets, and which core is suitable for a temporary electromagnet?",
    "Both retain all their magnetism permanently.",
    "Electromagnet A (soft iron) drops all paperclips instantly because soft iron has high magnetic permeability and very low retentivity (temporary magnet); Electromagnet B (steel) continues holding paperclips because steel has high retentivity (permanent magnet).",
    "Electromagnet B drops all paperclips while Electromagnet A retains them.",
    "Both cores melt due to eddy currents.",
    "B",
    "Soft iron has high magnetic permeability (easily magnetized) and very low retentivity and coercivity, meaning its magnetic domain alignment collapses the instant the magnetizing field ceases; it is the ideal core for temporary electromagnets (relays, bells, cranes). Hard steel has moderate permeability but very high retentivity and coercivity, retaining strong remanent magnetism even when current stops, making it suitable for permanent magnets."
  ),
  makeCase(
    chapter, 6, "Electric Bell Mechanism and Make-and-Break Interrupter", "Continuous Striking Cycle via Armature Interruption",
    "A classic domestic electric bell features a U-shaped soft iron electromagnet, a spring-loaded soft iron armature with a striker hammer, a brass gong, and an adjustable contact screw. When the doorbell push-button is held pressed down continuously, the hammer strikes the gong rapidly and repetitively (ring-ring-ring).",
    "What physical action causes the bell hammer to strike repeatedly instead of hitting once and sticking to the electromagnet?",
    "The 220 V AC mains current reverses polarity 100 times per second.",
    "When the electromagnet attracts the armature, the hammer strikes the gong, but this movement pulls the spring contact away from the contact screw, breaking the electrical circuit; the electromagnet loses magnetism, the spring pulls the armature back, re-establishing contact and repeating the cycle indefinitely.",
    "The brass gong bounces the hammer away by elastic kinetic energy.",
    "The soft iron core gets so hot that it repels the steel hammer.",
    "B",
    "The electric bell uses a self-interrupting 'make-and-break' mechanism. Pressing the button energizes the electromagnet, attracting the soft iron armature so the hammer strikes the gong. However, moving forward pulls the armature strip away from the contact screw, opening the circuit. Current ceases, the soft iron core immediately demagnetizes, and the return spring pulls the armature back to touch the screw, re-closing the circuit and repeating."
  ),
  makeCase(
    chapter, 7, "Lorentz Magnetic Force on a Current Conductor in a Uniform Magnetic Field", "Magnetic Force Formula F = BIl sin θ",
    "A straight copper rod of length L = 0.50 m carrying a steady current of I = 4.0 A is placed inside a uniform horizontal magnetic field of flux density B = 0.60 Tesla. An experimenter measures the mechanical force on the rod at three angles θ relative to the magnetic field vector: θ1 = 90° (perpendicular), θ2 = 30°, and θ3 = 0° (parallel).",
    "What are the mechanical forces acting on the rod at these three angles?",
    "F(90°) = 1.20 N; F(30°) = 0.60 N; F(0°) = 0 N",
    "F(90°) = 0 N; F(30°) = 0.60 N; F(0°) = 1.20 N",
    "F(90°) = 2.40 N; F(30°) = 1.20 N; F(0°) = 0 N",
    "F(90°) = 1.20 N; F(30°) = 1.04 N; F(0°) = 1.20 N",
    "A",
    "The Lorentz magnetic force on a straight current-carrying conductor is F = B × I × L × sin θ. Here B·I·L = 0.60 T × 4.0 A × 0.50 m = 1.20 N. At θ = 90°: F = 1.20 × sin(90°) = 1.20 N (maximum). At θ = 30°: F = 1.20 × sin(30°) = 1.20 × 0.5 = 0.60 N. At θ = 0°: F = 1.20 × sin(0°) = 0 N (zero force when conductor is parallel to magnetic field lines)."
  ),
  makeCase(
    chapter, 8, "Fleming's Left-Hand Rule for Motors", "Determining the Direction of Deflection Force",
    "A horizontal copper wire carrying conventional current directed toward the North is suspended in a uniform magnetic field directed vertically downward (into the ground).",
    "Using Fleming's Left-Hand Rule, in what direction will the mechanical force act on the wire?",
    "Toward the South",
    "Toward the East",
    "Toward the West",
    "Vertically upward toward the sky",
    "C",
    "Extend the thumb, forefinger, and middle finger of the LEFT hand mutually perpendicular to each other: Forefinger = Magnetic Field (pointing downward, into floor); Middle finger = Current (pointing North). The outstretched Thumb points to the left, which corresponds to the West. Thus, the Lorentz force acts horizontally toward the West."
  ),
  makeCase(
    chapter, 9, "DC Motor: Function of Split-Ring Commutator", "Current Reversal Every Half Rotation for Continuous Torque",
    "A direct current (DC) electric motor consists of a rectangular armature coil ABCD mounted on an axle between concave magnetic pole shoes. Electric current is supplied to the coil through a split-ring commutator (two copper semicircular segments separated by an insulating gap) sliding against stationary carbon brushes.",
    "What essential role does the split-ring commutator perform during motor rotation?",
    "It converts DC current into high-voltage alternating current.",
    "It reverses the direction of current in the armature coil arms every half rotation (180°) as the coil passes the vertical neutral plane, ensuring the couple (torque) acting on the coil always rotates it continuously in the same rotational direction.",
    "It acts as a mechanical brake to stop the motor when switched off.",
    "It lubricates the carbon brushes to eliminate mechanical friction.",
    "B",
    "If current flowed in an invariant direction through the loop, the couple would rotate the coil by 90° until it reached the vertical plane, and on overshooting, the torque would reverse and push it back, causing it to oscillate and halt. The split-ring commutator automatically reverses connections to the power supply every 180° rotation, so the force on the upward-moving side is always up and the downward side is always down, maintaining unidirectional rotational torque."
  ),
  makeCase(
    chapter, 10, "Why Radial Magnetic Field is Created in Electric Motors and Moving Coil Meters", "Concave Cylindrical Pole Pieces and Soft Iron Armature Core",
    "In precision DC motors and moving-coil galvanometers, the permanent magnet pole faces are shaped with concave cylindrical contours, and a soft iron cylindrical core is mounted symmetrically between them.",
    "What is the optical and magnetic purpose of using concave magnetic poles with a soft iron core?",
    "To make the motor lighter in weight.",
    "To produce a radial magnetic field where field lines always lie strictly in the plane of the coil at every angular position, ensuring maximum and constant deflecting torque (sin θ = 1) throughout rotation.",
    "To reflect electric sparks away from the commutator.",
    "To prevent magnetic field lines from escaping into the room.",
    "B",
    "With flat magnetic poles, the angle between the coil normal and the field changes during rotation (torque τ = NIAB cos α), causing torque to vary sinusoidally and drop to zero at the vertical position. Concave pole shoes combined with a cylindrical soft iron core concentrate flux lines radially. The magnetic field is always parallel to the plane of the coil (normal perpendicular to B, α = 0, sin 90° = 1), keeping deflecting torque constant at all angular orientations."
  ),
  makeCase(
    chapter, 11, "Faraday's Electromagnetic Induction with a Moving Bar Magnet", "Rate of Change of Magnetic Flux and Induced EMF",
    "A bar magnet is pushed rapidly into a hollow cylindrical coil of 500 turns connected to a center-zero galvanometer. The needle deflects strongly to the right (+30 divisions). The student then withdraws the magnet out of the coil at twice the speed.",
    "What will be the galvanometer deflection during the rapid withdrawal?",
    "The needle deflects to the left (-60 divisions) with twice the amplitude.",
    "The needle deflects to the right (+60 divisions).",
    "The needle remains at zero because withdrawal does not induce EMF.",
    "The needle deflects to the left (-30 divisions) with the same amplitude.",
    "A",
    "According to Faraday's second law of electromagnetic induction, the magnitude of induced EMF is directly proportional to the rate of change of magnetic flux (ε = -N dΦ/dt). Reversing the motion of the magnet (from insertion to withdrawal) reverses the sign of dΦ/dt, deflecting the needle in the opposite direction (to the left). Doubling the withdrawal speed doubles the rate of flux change, doubling the induced EMF and deflection (-60 divisions)."
  ),
  makeCase(
    chapter, 12, "Lenz's Law and Conservation of Energy in Electromagnetic Induction", "Induced Current Direction Opposing the Inducing Motion",
    "A student pushes the North pole of a strong neodymium bar magnet towards the front face of an isolated, closed copper solenoid. By Lenz's law, an induced electric current circulates through the solenoid.",
    "What magnetic pole is induced on the front face of the solenoid facing the approaching magnet, and how does this demonstrate the Law of Conservation of Energy?",
    "A South pole is induced, which attracts the magnet to accelerate it automatically.",
    "A North pole is induced, which repels the approaching North pole; the mechanical work done by the student against this repulsive magnetic force is converted into electrical energy in the coil.",
    "Zero pole is induced because copper is non-magnetic.",
    "Both North and South poles form simultaneously on the front face.",
    "B",
    "Lenz's law states that the direction of induced current is always such as to oppose the cause producing it. As a North pole approaches, the induced current flows counter-clockwise to form a North pole, creating a repulsive force. An external agent must do positive mechanical work against this repulsion to move the magnet closer. By conservation of energy, this mechanical work is transformed into the electrical energy of the induced current."
  ),
  makeCase(
    chapter, 13, "Fleming's Right-Hand Rule for Induced Current (Generators)", "Differentiating Left-Hand Rule (Motors) from Right-Hand Rule (Generators)",
    "A straight copper wire is moved vertically upward at high speed through a horizontal magnetic field directed from West to East.",
    "Using Fleming's Right-Hand Rule for generators, what is the direction of the induced current flowing through the wire?",
    "Toward the North",
    "Toward the South",
    "Toward the East",
    "Vertically downward",
    "A",
    "Extend the thumb, forefinger, and middle finger of the RIGHT hand mutually perpendicular to each other: Thumb = Motion of conductor (pointing UPWARD); Forefinger = Magnetic Field (pointing East). The outstretched Middle Finger points horizontally away from the observer, which corresponds to the North. Therefore, induced current flows toward the North."
  ),
  makeCase(
    chapter, 14, "AC Generator (Alternator) vs DC Generator: Slip Rings vs Commutator", "Continuous Slip Rings Producing Sinusoidal AC Output",
    "In a hydroelectric power station, an alternating current (AC) generator uses two continuous, smooth bronze slip rings connected respectively to the two ends of the rotating armature coil. Two stationary carbon brushes press against these slip rings to take off current to the external load.",
    "What waveform is produced across the load terminals, and what would happen if the slip rings were replaced with a split-ring commutator?",
    "Slip rings produce a pure DC current; split rings produce AC current.",
    "Slip rings produce an alternating current (sinusoidal AC) that periodically reverses direction every half-cycle; replacing them with a split-ring commutator would rectify the output into pulsating direct current (DC).",
    "Both produce constant ripple-free DC voltage.",
    "Slip rings produce high-frequency radio waves.",
    "B",
    "In an AC generator, each end of the coil is permanently connected to its own separate, continuous circular slip ring. As the coil rotates, the induced EMF naturally alternates polarity every 180° (ε = ε₀ sin ωt), delivering pure sinusoidal AC to the load. A split-ring commutator, by contrast, mechanically swaps the brush contacts every half turn, rectifying negative half-cycles into positive pulses to produce DC."
  ),
  makeCase(
    chapter, 15, "Step-Up Transformer: Turns Ratio, Voltage, and Current Relations", "Ideal Transformer Equation Vs/Vp = Ns/Np = Ip/Is",
    "An ideal step-up transformer connected to a 220 V AC mains supply has 100 turns in its primary coil and 2000 turns in its secondary coil. A 4400 Ω load resistor is connected across the secondary winding. Assume 100% transformer efficiency.",
    "What are the secondary output voltage V_s, secondary load current I_s, and primary input current I_p?",
    "V_s = 4400 V; I_s = 1.0 A; I_p = 20.0 A",
    "V_s = 11 V; I_s = 0.0025 A; I_p = 0.05 A",
    "V_s = 4400 V; I_s = 20.0 A; I_p = 1.0 A",
    "V_s = 2200 V; I_s = 0.5 A; I_p = 10.0 A",
    "A",
    "Voltage transformation ratio: V_s / V_p = N_s / N_p => V_s = 220 V × (2000 / 100) = 220 × 20 = 4400 V. Secondary current: I_s = V_s / R_load = 4400 V / 4400 Ω = 1.0 A. Secondary power output: P_s = V_s × I_s = 4400 V × 1.0 A = 4400 W. For an ideal transformer (P_in = P_out): V_p × I_p = 4400 W => I_p = 4400 / 220 = 20.0 A (also I_p = I_s × (N_s/N_p) = 1.0 × 20 = 20 A)."
  ),
  makeCase(
    chapter, 16, "Why Transformer Cores Are Laminated with Insulated Silicon Steel Sheets", "Mitigation of Destructive Eddy Currents",
    "A transformer manufacturer constructs the closed magnetic core by stacking hundreds of thin (0.35 mm) sheets of silicon steel coated with an insulating varnish layer, rather than casting a single solid soft iron block of the exact same dimensions.",
    "What catastrophic energy loss is prevented by laminating the transformer core?",
    "Loss of magnetic flux through air gaps.",
    "Circulating eddy currents induced in the core by alternating magnetic flux are broken up and confined to thin paths of high electrical resistance, drastically reducing I²R heat dissipation.",
    "Hysteresis losses are completely eliminated by the varnish.",
    "Laminations prevent radioactive decay of iron atoms.",
    "B",
    "Alternating magnetic flux (dΦ/dt) induces closed loops of circulating current (eddy currents) in the conductive iron core perpendicular to the flux. In a solid block, low electrical resistance leads to massive eddy currents that dissipate energy as intense heat (P_eddy ∝ t²). Slicing the core into thin laminations insulated from each other constrains eddy paths to microscopic loops, reducing eddy current power loss by over 95%."
  ),
  makeCase(
    chapter, 17, "Why Transformers Cannot Operate on Direct Current (DC)", "Zero Rate of Flux Change with Steady DC Current",
    "A technician mistakenly connects the primary coil of a 220 V to 12 V step-down transformer to a 12 V automotive DC lead-acid battery instead of an AC source.",
    "What will be the output voltage on the secondary coil, and what will happen to the primary coil?",
    "Secondary output = 12 V DC; primary operates cold.",
    "Secondary output = 0 V (no induced voltage); primary coil will draw massive current and burn out because in DC there is no back-EMF or inductive reactance, only low ohmic resistance.",
    "Secondary output = 220 V AC; the battery recharges automatically.",
    "Secondary output = 0.65 V DC; normal safe operation.",
    "B",
    "Electromagnetic induction requires a continuous change of magnetic flux (ε = -N dΦ/dt). A steady DC battery produces a constant, static magnetic flux (dΦ/dt = 0), so the secondary coil has zero induced EMF (0 V). Furthermore, an AC primary coil relies on high inductive reactance (X_L = 2πfL) to limit primary current. On DC (f = 0), only tiny wire resistance R limits current (I = V/R), causing the coil to overheat and incinerate."
  ),
  makeCase(
    chapter, 18, "Magnetic Force Between Two Long Parallel Currents (Ampere's Definition)", "Mutual Magnetic Interaction: Parallel vs Antiparallel Currents",
    "Two long, straight parallel copper wires A and B separated by a distance d = 10 cm in air carry steady currents. In Case 1, both currents flow upward with I = 10 A (parallel currents). In Case 2, wire A carries 10 A upward while wire B carries 10 A downward (antiparallel currents).",
    "What type of magnetic force exists between the wires in Case 1 and Case 2?",
    "Case 1: Repulsive force; Case 2: Attractive force",
    "Case 1: Attractive force; Case 2: Repulsive force",
    "Both cases experience zero force because electric fields cancel.",
    "Both cases experience attractive forces.",
    "B",
    "By the right-hand grip rule, current in wire A produces a magnetic field directed perpendicular to wire B. Applying Fleming's left-hand rule to wire B: (1) When currents flow in the same direction (parallel), the magnetic lines of force combine to create a low-field region between them, producing a mutual ATTRACTIVE force. (2) When currents flow in opposite directions (antiparallel), flux lines crowd between them, producing a mutual REPULSIVE force."
  ),
  makeCase(
    chapter, 19, "Deflection of Alpha and Beta Particles in a Magnetic Field", "Charge Sign, Mass, and Trajectory Curvature in B-Field",
    "A beam of radioactive emissions containing alpha particles (He²⁺ ions), beta particles (high-speed electrons), and gamma rays is projected horizontally into a uniform magnetic field directed perpendicularly into the plane of the page.",
    "How are the three radiations deflected within the magnetic field?",
    "Gamma rays deflect sharply upward; alpha and beta continue undeflected.",
    "Gamma rays continue in a straight line undeflected; alpha particles deflect gently toward the top of the page; beta particles deflect sharply toward the bottom of the page.",
    "Alpha and beta particles deflect in the exact same direction with identical curvature.",
    "All three radiations are stopped and absorbed by the magnetic field.",
    "B",
    "Lorentz magnetic force is F = q(v × B). (1) Gamma rays are uncharged photons (q = 0), so F = 0; they travel straight without deflection. (2) Alpha particles have positive charge (+2e) and large mass (4 u); by Fleming's left-hand rule, they deflect upward, but due to high inertia their radius of curvature r = mv/(qB) is large (gentle curve). (3) Beta particles have negative charge (-e) and tiny mass (1/1836 u); they deflect in the opposite direction (downward) with very sharp curvature."
  ),
  makeCase(
    chapter, 20, "Magnetic Levitation (Maglev) Train Propulsion and Suspension", "Electrodynamic Suspension via Superconducting Coils",
    "The SCMaglev bullet train in Japan floats 10 cm above a concrete guideway at 600 km/h without touching physical rails. Superconducting electromagnet coils on the train bogies interact with aluminum figure-eight coils embedded in the guideway walls.",
    "What electromagnetic principle produces the vertical levitation force lifting the train?",
    "Electrostatic attraction between rubber tires and guideway.",
    "As the train's powerful superconducting magnets sweep past guideway coils, changing magnetic flux induces powerful eddy currents whose repulsive magnetic fields lift the train automatically (electrodynamic suspension by Lenz's law).",
    "Thermal radiation from aerodynamic friction pushes the train upward.",
    "Guideway coils pump high-pressure air cushions underneath the bogies.",
    "B",
    "In Electrodynamic Suspension (EDS), high-field superconducting magnets on the moving train pass adjacent passive figure-eight shaped copper/aluminum coils embedded in the guideway walls. By Faraday's and Lenz's laws, the rapid motion induces strong currents in the guideway loops, creating magnetic poles that repulsively push up against the train magnets. The levitation force increases automatically with speed."
  ),
  makeCase(
    chapter, 21, "Energy Losses in a Real Transformer: Four Primary Mechanisms", "Copper, Core Eddy Current, Hysteresis, and Flux Leakage Losses",
    "An electrical power grid engineer tests a large distribution transformer to quantify energy losses under full load. The engineer categorizes four distinct loss mechanisms: Loss 1 (Joule heating in copper windings), Loss 2 (circulating currents in the iron core), Loss 3 (repeated cyclic magnetic domain reversal in iron), and Loss 4 (flux not linking both coils).",
    "What are the technical engineering names for these four transformer losses, and how is Loss 3 minimized?",
    "Loss 1: Copper loss; Loss 2: Eddy current loss; Loss 3: Hysteresis loss (minimized by using soft silicon steel with a narrow B-H hysteresis loop); Loss 4: Flux leakage loss.",
    "Loss 1: Friction loss; Loss 2: Corona loss; Loss 3: Radiation loss; Loss 4: Nuclear loss.",
    "Loss 1: Iron loss; Loss 2: Dielectric loss; Loss 3: Eddy loss; Loss 4: Thermal loss.",
    "Loss 1: Capacitive loss; Loss 2: Ohmic loss; Loss 3: Inductive loss; Loss 4: Brush loss.",
    "A",
    "The 4 major transformer losses: (1) Copper loss: I²R heating in primary/secondary copper windings (reduced by thick conductors). (2) Eddy current loss: circulating induced currents in core (reduced by laminating thin sheets). (3) Hysteresis loss: energy dissipated per cycle as magnetic domains reverse orientation 50 times/sec (reduced by using silicon steel with a very narrow hysteresis loop area). (4) Flux leakage: addressed by winding primary and secondary concentrically."
  ),
  makeCase(
    chapter, 22, "Current-Carrying Solenoid Suspended Freely in Horizontal Plane", "Equivalence of Current Solenoid to a Bar Magnet",
    "A tightly wound cylindrical solenoid connected to a small lightweight battery is suspended horizontally by a fine unspun silk thread in a laboratory free from air drafts.",
    "How does the freely suspended solenoid align itself when brought to rest, and why?",
    "It aligns strictly along the East-West axis.",
    "It aligns precisely along the geographic North-South direction, because a current-carrying solenoid produces an external magnetic dipole field identical to a bar magnet and interacts with Earth's horizontal magnetic field.",
    "It rotates continuously like a turbine without ever coming to rest.",
    "It aligns at 45° to the equator due to Coriolis forces.",
    "B",
    "A current-carrying solenoid behaves in all respects like a cylindrical permanent bar magnet of magnetic dipole moment M = N I A. When suspended freely, it experiences a torque τ = M × B_Earth until its magnetic axis aligns with the Earth's horizontal magnetic field meridian. The end where current appears counter-clockwise acts as the North-seeking pole and points North."
  ),
  makeCase(
    chapter, 23, "Electromagnetic Induction in a Falling Magnet Through a Copper Tube", "Eddy Current Braking and Terminal Velocity",
    "A physics teacher drops two identical cylindrical neodymium magnets simultaneously from the same height: Magnet 1 falls through a vertical clear plastic PVC tube, while Magnet 2 falls through a vertical non-magnetic thick copper tube of the exact same inner diameter.",
    "What is observed regarding the descent of Magnet 2 through the copper tube, and what causes this behavior?",
    "Magnet 2 falls faster than Magnet 1 because copper accelerates gravity.",
    "Magnet 2 falls astonishingly slowly at a gentle, steady terminal velocity, because its falling magnetic field induces swirling circular eddy currents in the conductive copper wall whose Lenz's law magnetic fields exert an upward repulsive drag force balancing gravity.",
    "Magnet 2 stops dead in mid-air and permanently sticks to the copper.",
    "Magnet 2 shatters the copper tube by magnetic shockwaves.",
    "B",
    "As the strong magnet falls through the copper tube, changing magnetic flux induces swirling circular eddy currents in the conductive copper wall. In accordance with Lenz's law, the eddy currents below the falling magnet produce a opposing magnetic field that repels the falling pole, while eddy currents above it attract the receding pole. This upward magnetic drag force quickly balances gravity (F_drag = mg), resulting in a slow constant terminal drift."
  ),
  makeCase(
    chapter, 24, "Moving Coil Galvanometer: Deflection Sensitivity and Coil Turns", "Galvanometer Equation θ = (NAB / C) × I",
    "In a moving coil galvanometer, a coil of N turns and area A is suspended in a radial magnetic field of flux density B by a phosphor-bronze strip of torsional restoring couple per unit twist C. A current I produces an angular deflection θ.",
    "Which modification will successfully double the current sensitivity (θ / I) of this galvanometer?",
    "Doubling the torsional restoring constant C of the suspension wire.",
    "Doubling the number of turns N in the coil (or doubling pole flux density B).",
    "Halving the area A of the rectangular coil.",
    "Replacing the soft iron core with a plastic core.",
    "B",
    "At equilibrium, deflecting magnetic torque equals restoring elastic torque: N I A B = C θ => θ / I = (N A B) / C. Current sensitivity is directly proportional to number of turns N, coil area A, and magnetic field strength B, and inversely proportional to the torsional suspension stiffness C. Doubling N (or B) doubles the deflection per microampere."
  ),
  makeCase(
    chapter, 25, "Why Phosphor-Bronze Strip is Used for Galvanometer Suspensions", "Torsional Modulus, Tensile Strength, and Elastic After-Effect",
    "Precision moving-coil galvanometers suspend the moving coil using a flat ribbon strip of phosphor-bronze alloy rather than a steel or copper wire.",
    "What combination of mechanical properties makes phosphor-bronze the material of choice for the suspension strip?",
    "It has high electrical resistance and melts at 50°C.",
    "It possesses very small restoring couple per unit twist C (high sensitivity), high tensile strength, negligible elastic after-effect (returns precisely to zero without zero drift), and excellent resistance to corrosion.",
    "It is ferromagnetic and amplifies the magnetic field by 1000 times.",
    "It becomes superconducting at room temperature.",
    "B",
    "The suspension must satisfy four demanding criteria: (1) Very low torsional rigidity C to ensure high sensitivity (large deflection θ for tiny I). (2) High mechanical tensile strength so a microscopically thin ribbon can support the coil weight. (3) Extremely low elastic after-effect and hysteresis, guaranteeing that when current stops, the pointer returns accurately to zero. (4) Good electrical conductivity to lead current into the coil."
  ),
  makeCase(
    chapter, 26, "Electromagnetic Damping (Dead-Beat Galvanometer)", "Eddy Current Damping in an Aluminum Coil Former",
    "In a ballistic galvanometer, the coil oscillates back and forth for minutes before settling. In a 'dead-beat' pointer galvanometer, the coil deflects smoothly and settles at the final reading in under one second without any annoying oscillations.",
    "How is this rapid dead-beat damping achieved mechanically and electromagnetically?",
    "By filling the meter casing with thick viscous silicone oil.",
    "The coil is wound on a light, non-magnetic metallic frame (aluminum former); when the coil swings in the magnetic field, strong eddy currents induced in the aluminum frame oppose its motion by Lenz's law, critically damping the oscillations.",
    "By adding heavy lead weights to the pointer needle.",
    "By connecting a 220 V capacitor across the meter terminals.",
    "B",
    "As the coil swings back and forth in the strong permanent magnetic field, the closed conductive loop of the aluminum former cuts magnetic flux. By Faraday's and Lenz's laws, large eddy currents are induced in the low-resistance aluminum frame. These eddy currents generate an electromagnetic braking torque proportional to angular velocity, quickly dissipating kinetic energy as heat and bringing the coil to rest without overshoot."
  ),
  makeCase(
    chapter, 27, "Force Between Current-Carrying Loop and a Parallel Straight Wire", "Directional Net Force on a Closed Rectangular Loop",
    "A long straight vertical wire carrying an upward current I1 = 10 A lies in the same plane as a coplanar rectangular loop carrying a clockwise current I2 = 5 A. The near vertical arm of the loop (length L = 20 cm) is at distance d1 = 2 cm from the wire, and the far vertical arm is at distance d2 = 10 cm.",
    "What is the direction of the net magnetic force exerted on the rectangular loop by the long wire?",
    "Net force is directed horizontally toward the wire (attractive).",
    "Net force is directed horizontally away from the wire (repulsive).",
    "Net force is directed vertically upward.",
    "Net force is identically zero because loop forces cancel out.",
    "A",
    "In the near arm, current flows upward (parallel to wire current), so it experiences an attractive force toward the wire: F_near = μ₀ I1 I2 L / (2π d1). In the far arm, current flows downward (antiparallel), so it experiences a repulsive force: F_far = μ₀ I1 I2 L / (2π d2). Forces on top and bottom horizontal arms are equal and opposite, cancelling out. Because d1 < d2, the attractive force on the near arm is 5 times stronger than the repulsive force on the far arm. Hence, the net force is attractive."
  ),
  makeCase(
    chapter, 28, "Mutual Induction Between Two Coaxial Coils", "Coefficient of Mutual Inductance and Flux Linkage",
    "Two coaxial solenoids are wound on the same cardboard cylinder: Primary coil P has N_p turns and carries a variable current I_p; Secondary coil S has N_s turns connected to a galvanometer.",
    "When is the induced electromotive force in secondary coil S greatest?",
    "When the primary current is at its maximum steady value of 10 A.",
    "When the rate of change of primary current (dI_p / dt) is maximum, such as during instantaneous circuit make or break.",
    "When the primary coil is completely disconnected from any battery.",
    "Induced EMF is strictly constant at all times.",
    "B",
    "By the law of mutual induction, the magnetic flux linked with the secondary coil is Φ_s = M I_p. The induced EMF in the secondary coil is given by ε_s = -M (dI_p / dt), where M is the mutual inductance. Induced voltage depends solely on the TIME RATE OF CHANGE of primary current, not its absolute value. When primary current is steady (dI/dt = 0), induced EMF is identically zero regardless of how huge the current is."
  ),
  makeCase(
    chapter, 29, "Self-Induction and Sparking at Switch Contacts on Disconnection", "Back-EMF and Lenz's Law Inductive Kick",
    "A technician opens a knife switch to turn off a high-power industrial DC electromagnet carrying 50 A through thousands of wire turns. As the metallic switch contacts separate by even 1 millimeter, a blinding, loud electrical arc flashes across the switch gap.",
    "Why does an intense high-voltage spark appear when turning off an inductive circuit, but not when turning it on?",
    "The power supply voltage doubles automatically on switch-off.",
    "When current is abruptly broken, current collapses in microseconds; by Faraday-Lenz law (ε_self = -L dI/dt), the immense negative dI/dt generates a massive self-induced 'break EMF' of thousands of volts that ionizes the air gap.",
    "Air rushes into the switch gap and combusts spontaneously.",
    "The battery discharges in reverse through the earth.",
    "B",
    "A large coil has substantial self-inductance L. At make (turn-on), current rises relatively slowly against back-EMF, so dI/dt is moderate. At break (turn-off), the contact opens rapidly, forcing current from 50 A to 0 A in a few microseconds. The rate of collapse -dI/dt is enormous, producing a self-induced EMF ε = -L (dI/dt) reaching thousands of volts across the separating switch contacts, causing dielectric breakdown of air and drawing a violent arc."
  ),
  makeCase(
    chapter, 30, "Current Loop in an Electric Motor: Position of Zero Torque", "Torque Variation with Angle and the Vertical Dead Center",
    "A rectangular coil in a DC motor is rotating between magnetic pole shoes. In Position 1, the plane of the coil is parallel to the magnetic field lines. In Position 2, the plane of the coil is perpendicular to the magnetic field lines.",
    "What is the deflecting torque acting on the coil in Position 1 and Position 2?",
    "Position 1: Zero torque; Position 2: Maximum torque",
    "Position 1: Maximum torque (τ_max = NIAB); Position 2: Zero torque (τ = 0)",
    "Position 1 and Position 2 both have equal half-maximum torque.",
    "Torque is negative in Position 1 and positive in Position 2.",
    "B",
    "Torque on a planar coil is τ = N I A B sin θ (where θ is the angle between the coil's normal vector and the magnetic field vector B, or τ = NIAB cos α where α is the angle between coil plane and B). In Position 1 (coil parallel to B, normal perpendicular to B, θ = 90°): torque is maximum (τ = NIAB). In Position 2 (coil perpendicular to B, normal parallel to B, θ = 0°): torque is zero. The motor coasts past this zero-torque neutral plane by its mechanical rotational inertia."
  ),
  makeCase(
    chapter, 31, "Magnetic Shielding / Magnetic Screening", "High Permeability Ferromagnetic Enclosures",
    "A delicate electronic sensor must be completely isolated from external stray magnetic fields produced by nearby heavy machinery. The engineer encloses the sensor inside a thick-walled box made of Mu-metal (a high-permeability nickel-iron ferromagnetic alloy).",
    "How does the Mu-metal box shield the internal sensor from magnetic flux?",
    "Mu-metal reflects magnetic fields like a mirror reflects light.",
    "Mu-metal has extremely high magnetic permeability; magnetic field lines strongly prefer crowding into the low-reluctance walls of the metal shell, bypassing the interior hollow cavity completely.",
    "Mu-metal generates an opposing electrostatic charge that annihilates magnetic fields.",
    "Mu-metal absorbs magnetic fields and converts them into radio waves.",
    "B",
    "Magnetic shielding does not block or destroy magnetic fields (since magnetic monopoles do not exist). Because Mu-metal has an immense relative permeability (μ_r > 80,000), its magnetic reluctance is negligible compared to air. External magnetic flux lines follow the path of least reluctance, channeling entirely through the thick metal walls and leaving the central cavity virtually field-free."
  ),
  makeCase(
    chapter, 32, "Calculation of Transformer Secondary Power and Efficiency", "Real Transformer Losses and Efficiency Formula",
    "A step-down transformer connected to a 240 V AC supply delivers 12 V AC to a halogen lamp consuming 60 W of power. An ammeter in the primary circuit measures an input current of 0.30 A.",
    "What is the electrical efficiency η of this transformer?",
    "Efficiency η = 50%",
    "Efficiency η = 83.3%",
    "Efficiency η = 100%",
    "Efficiency η = 95.0%",
    "B",
    "Electrical power input is P_in = V_p × I_p = 240 V × 0.30 A = 72.0 W. Useful power output delivered to load is P_out = 60.0 W. Transformer efficiency is η = (P_out / P_in) × 100% = (60.0 W / 72.0 W) × 100% = (5 / 6) × 100% ≈ 83.33%. The remaining 12 W is lost as core and copper heat."
  ),
  makeCase(
    chapter, 33, "Why Soft Iron Has High Magnetic Susceptibility and Low Retentivity", "Domain Alignment and Reversibility in Ferromagnets",
    "A solid-state physics laboratory investigates the magnetic hysteresis B-H loops of two ferromagnetic materials: Material 1 has a very tall, narrow hysteresis loop of small enclosed area. Material 2 has a wide, fat hysteresis loop of large enclosed area.",
    "Which material represents soft iron and which represents hard steel, and what are their respective applications?",
    "Material 1: Hard steel (permanent magnets); Material 2: Soft iron (transformer cores)",
    "Material 1: Soft iron (ideal for electromagnets and transformer cores due to low hysteresis energy loss per cycle); Material 2: Hard steel (ideal for permanent magnets due to high retentivity and coercivity).",
    "Both materials are identical non-magnetic brass alloys.",
    "Material 1 is an electrical insulator; Material 2 is a superconductor.",
    "B",
    "The area of a B-H hysteresis loop represents the thermal energy lost per unit volume during one complete cycle of magnetization and demagnetization. Soft iron has high permeability, very steep saturation, low retentivity, and low coercivity (narrow loop), making it ideal for AC transformer cores and electromagnets because minimal energy is lost as heat. Hard steel has high coercivity and broad loop area, retaining strong magnetization against demagnetizing fields."
  ),
  makeCase(
    chapter, 34, "Electromagnetic Induction via Rotating Loop in Uniform Field", "Sinusoidal EMF Generation ε = NABω sin(ωt)",
    "A rectangular coil of N = 200 turns and area A = 0.05 m² rotates at a constant angular speed of ω = 100π rad/s (50 revolutions per second) in a uniform horizontal magnetic field of B = 0.20 Tesla.",
    "What is the maximum peak electromotive force (ε₀) induced across the open terminals of the coil?",
    "ε₀ = 100 V",
    "ε₀ = 200π V ≈ 628.3 V",
    "ε₀ = 314 V",
    "ε₀ = 20 V",
    "B",
    "Magnetic flux through the rotating coil is Φ = B A cos(ωt). By Faraday's law of induction, induced EMF is ε = -N (dΦ/dt) = -N B A (-ω sin ωt) = N B A ω sin(ωt). The peak EMF is ε₀ = N × B × A × ω = 200 × 0.20 T × 0.05 m² × (100π rad/s) = 200 × 0.01 × 100π = 2 × 100π = 200π V ≈ 628.3 V."
  ),
  makeCase(
    chapter, 35, "Induction Cooktop Heating Mechanism", "High-Frequency Eddy Currents and Hysteresis in Ferrous Cookware",
    "An induction cooktop has a glass-ceramic surface that remains cool to the touch when turned on with nothing on it. When a cast-iron skillet containing cold soup is placed on the cooktop, the skillet rapidly boils the soup in 90 seconds, yet an aluminum pan placed on the same cooktop barely warms up.",
    "Why does the induction cooktop heat the cast-iron skillet rapidly while failing to heat the aluminum pan?",
    "Cast iron conducts high-frequency radio waves into the soup.",
    "A high-frequency AC coil beneath the glass creates rapidly oscillating magnetic fields; cast iron is ferromagnetic with high electrical resistance and high magnetic permeability, generating intense localized eddy currents and hysteresis heat directly in the skillet base, whereas aluminum has high conductivity and non-ferrous permeability.",
    "Cast iron reflects magnetic field lines back into the cooktop.",
    "Aluminum is an electrical insulator that blocks all electromagnetic waves.",
    "B",
    "An induction cooktop uses a copper coil driven by high-frequency AC (~25 kHz). The alternating magnetic field penetrates the cooking vessel. For efficient heating, the cookware base must have: (1) high magnetic permeability μ_r to concentrate flux and induce hysteresis losses, and (2) moderate electrical resistivity so that induced eddy currents dissipate power (P = I²R) directly in a thin skin depth. Cast iron satisfies both, while non-magnetic aluminum has low resistance and μ_r ≈ 1, producing negligible heat."
  ),
  makeCase(
    chapter, 36, "Right-Hand Thumb Rule for Solenoids vs Straight Conductors", "Dual Application of Right-Hand Rules",
    "A physics instructor demonstrates two uses of the right hand in electromagnetism: Application 1 (curl fingers around a straight wire in the direction of current; thumb indicates field line circles). Application 2 (curl fingers around the turns of a solenoid in the direction of current; thumb indicates the axial magnetic field pointing toward the North pole).",
    "Are both applications physically valid and mathematically consistent?",
    "No, the right hand can only be used for motors.",
    "Yes, they are complementary forms of the right-hand grip rule: in a straight wire, linear current produces circular magnetic fields; in a solenoid, circular currents produce a linear axial magnetic field whose North pole is given by the outstretched thumb.",
    "No, Application 2 requires the left hand.",
    "No, the thumb always points towards the South pole.",
    "B",
    "The Biot-Savart law establishes a reciprocal geometric relationship between current and magnetic field vectors. For a straight conductor: thumb = linear current, curled fingers = circular concentric B-field. For a solenoid or loop: curled fingers = circulating current, thumb = direction of linear internal axial B-field lines emerging from the North pole face."
  ),
  makeCase(
    chapter, 37, "Electric Relay Operation in High-Current Switching", "Low-Current Control of High-Current Industrial Circuits",
    "In an automotive starter system, a driver turns a small key switch drawing only 0.2 A to energize an electromagnetic relay. The relay's soft iron armature snaps shut, closing heavy copper contacts that channel a massive 300 A current from the battery directly into the starter motor.",
    "Why is an electromagnetic relay used rather than routing the 300 A motor current directly through the ignition key switch on the dashboard?",
    "Routing 300 A through dashboard switches would require dangerously thick, heavy cables and would cause violent electrical arcing that would incinerate the dashboard switch.",
    "The ignition key runs on alternating current while the starter motor runs on DC.",
    "Relays multiply electrical energy by a factor of 1500.",
    "The starter motor cannot operate without soft iron magnetism.",
    "A",
    "An electromagnetic relay allows a delicate, low-voltage, low-current control circuit (e.g. 12 V, 0.2 A) to safely actuate an isolated, massive high-current circuit (300 A). Routing 300 A through the dashboard would require bulky, expensive 50 mm² copper cables and would pose severe fire and contact-welding hazards every time the switch is opened or closed."
  ),
  makeCase(
    chapter, 38, "Eddy Current Speedometer in Automobiles", "Drag-Cup Magnetic Speed Indicator",
    "A mechanical automotive speedometer consists of a permanent magnet spun by a flexible cable linked to the vehicle's transmission shaft. The spinning magnet rotates inside a non-magnetic aluminum drag cup attached to a pointer needle against a spiral hairspring.",
    "How does the spinning magnet turn the aluminum cup and deflect the speedometer pointer without physical contact?",
    "The magnet attracts aluminum because aluminum becomes permanently magnetic at high speed.",
    "The rotating magnetic field induces eddy currents in the aluminum cup; by Lenz's law, these eddy currents experience a magnetic dragging torque opposing the relative motion, turning the cup until the magnetic torque is balanced by the spiral hairspring.",
    "Air turbulence inside the cup pushes the needle.",
    "Static electricity builds up on the glass face.",
    "B",
    "As the magnet spins at angular speed ω proportional to car speed, its field lines cut the stationary aluminum cup, inducing circulating eddy currents. By Lenz's law, these induced currents create an opposing magnetic field that exerts a forward drag torque τ_mag = k × ω on the cup. The cup rotates until the magnetic drag torque equals the restoring torque of the calibrated hairspring (τ_spring = C θ), making needle deflection θ directly proportional to vehicle speed."
  ),
  makeCase(
    chapter, 39, "Magnetic Dipole Moment of a Current Loop", "Dipole Moment Formula M = NIA",
    "A compact circular search coil consists of N = 100 turns of fine copper wire wound into a loop of radius r = 5.0 cm. A steady direct current of I = 2.0 A is passed through the coil.",
    "What is the magnetic dipole moment M of this current-carrying search coil?",
    "M = 1.0 A·m²",
    "M = 1.57 A·m²",
    "M = 3.14 A·m²",
    "M = 15.7 A·m²",
    "B",
    "The magnetic dipole moment of a planar coil of N turns carrying current I is M = N × I × A. The area of the circular loop is A = πr² = π × (0.05 m)² = 0.0025π m² ≈ 7.854 × 10⁻³ m². The magnetic dipole moment is M = 100 × 2.0 A × (7.854 × 10⁻³ m²) ≈ 1.57 A·m² (directed perpendicular to the plane of the coil)."
  ),
  makeCase(
    chapter, 40, "Why Electric Motor Draws High Starting Current (Lack of Back-EMF)", "Armature Current Equation I = (V - ε_back) / R_arm",
    "A large DC industrial motor connected to a 220 V DC mains has an armature winding resistance of R_arm = 2.0 Ω. When first switched on from a dead standstill, it draws a massive starting current. As the motor accelerates to its normal operating speed, the current drops to a steady 5.0 A.",
    "What is the starting current I_start at standstill, and what is the back-EMF ε_back generated at full operating speed?",
    "I_start = 5.0 A; Back-EMF = 220 V",
    "I_start = 110 A; Back-EMF = 210 V",
    "I_start = 220 A; Back-EMF = 10 V",
    "I_start = 55 A; Back-EMF = 110 V",
    "B",
    "As the motor armature spins in the magnetic field, it acts simultaneously as a generator, producing an opposing back-EMF: ε_back ∝ ω. Circuit current is I = (V - ε_back) / R_arm. At standstill (ω = 0), ε_back = 0 V, so starting current is I_start = V / R_arm = 220 V / 2.0 Ω = 110 A. At operating speed when I = 5.0 A: 5.0 = (220 - ε_back) / 2.0 => 220 - ε_back = 10 V => ε_back = 210 V. The back-EMF self-regulates motor current."
  ),
  makeCase(
    chapter, 41, "Two Coaxial Current Rings Carrying Currents in Same Direction", "Axial Magnetic Force Between Parallel Coaxial Rings",
    "Two identical rigid circular wire rings A and B of radius R lie in parallel horizontal planes separated by a small vertical distance d (d ≪ R). Both rings carry equal direct currents circulating in the same counter-clockwise direction.",
    "What is the nature of the magnetic interaction between Ring A and Ring B?",
    "They exert an attractive magnetic force pulling toward each other.",
    "They exert a repulsive magnetic force pushing away from each other.",
    "They exert zero force because both have circular symmetry.",
    "They rotate in opposite directions without any vertical force.",
    "A",
    "By the clock rule, both rings carrying counter-clockwise currents produce North poles facing upward and South poles facing downward. Therefore, the South pole face of the upper ring directly faces the North pole face of the lower ring. Dissimilar magnetic poles attract, resulting in a mutual ATTRACTIVE force pulling the two rings toward each other (consistent with parallel currents attracting)."
  ),
  makeCase(
    chapter, 42, "Galvanometer Shunt Resistance and Total Circuit Disturbance", "Minimizing Resistance Burden in Ammeters",
    "An electrical circuit carries a current of 1.0 A through a 10 Ω resistor. A student wants to measure this current. If an un-shunted galvanometer of resistance G = 100 Ω were inserted in series, it would drastically alter the circuit. Instead, the student converts the galvanometer to an ammeter by adding a 0.05 Ω shunt resistor.",
    "What is the equivalent resistance of the converted ammeter, and why does it not disturb the circuit current?",
    "Ammeter resistance = 100.05 Ω; it increases circuit current.",
    "Ammeter resistance R_A ≈ 0.050 Ω; because R_A ≪ 10 Ω, adding it in series increases total resistance by only 0.5%, leaving circuit current virtually undisturbed.",
    "Ammeter resistance = 5.0 Ω; it halves the circuit current.",
    "Ammeter resistance = 0 Ω exactly; it acts as a superconductor.",
    "B",
    "When a small shunt S (0.05 Ω) is connected in parallel with G (100 Ω), the equivalent resistance is R_A = (G × S) / (G + S) = (100 × 0.05) / (100.05) ≈ 0.04998 Ω. An ideal ammeter must have zero resistance so that inserting it in series adds negligible impedance (ΔR ≈ 0.05 Ω on 10 Ω is a 0.5% change), ensuring measured current matches the true undisturbed operating current."
  ),
  makeCase(
    chapter, 43, "Magnetic Field Along the Axis of a Circular Current Loop", "Axial Field Formula B = μ₀IR² / [2(R² + x²)^(3/2)]",
    "A circular coil of radius R carries a steady current I. A magnetometer measures the magnetic field flux density B_center at the center of the coil (x = 0), and then moves along the central perpendicular axis to a distance x = R from the center.",
    "What is the ratio of the axial magnetic field at x = R to the field at the center (x = 0)?",
    "B(x = R) / B_center = 1 / 2",
    "B(x = R) / B_center = 1 / (2√2) ≈ 0.354",
    "B(x = R) / B_center = 1 / 4",
    "B(x = R) / B_center = 1 / 8",
    "B",
    "The axial magnetic field of a single circular turn of radius R at distance x is B(x) = μ₀ I R² / [2 (R² + x²)^(3/2)]. At the center (x = 0): B_center = μ₀ I / (2R). At distance x = R: B(R) = μ₀ I R² / [2 (R² + R²)^(3/2)] = μ₀ I R² / [2 (2R²)^(3/2)] = μ₀ I R² / [2 × 2√2 × R³] = μ₀ I / [4√2 R]. Dividing gives: B(R) / B_center = [μ₀ I / (4√2 R)] / [μ₀ I / (2R)] = 2 / (4√2) = 1 / (2√2) ≈ 0.3535."
  ),
  makeCase(
    chapter, 44, "Lenz's Law with a Copper Ring Dropped Over an AC Solenoid", "Thomson's Jumping Ring Demonstration",
    "A solid aluminum ring is placed over the vertical extended iron core of a heavy solenoid. When the solenoid is energized with strong 50 Hz alternating current (AC), the aluminum ring instantly leaps violently upward into the air, flying several feet high.",
    "What electromagnetic interaction launches the aluminum ring into the air?",
    "Air heated by the solenoid pushes the ring upward like a piston.",
    "The alternating magnetic flux in the core induces strong circumferential eddy currents in the ring; by Lenz's law, these induced currents create an opposing magnetic field that produces a continuous repulsive vertical force against the solenoid's field.",
    "The ring becomes charged with static electricity that repels the earth.",
    "The aluminum ring undergoes nuclear resonance and becomes weightless.",
    "B",
    "Elihu Thomson's jumping ring demonstration illustrates Lenz's law and phase shift: The AC core flux induces an alternating EMF and high circulating current in the closed conductive aluminum ring. Due to the ring's self-inductance, the ring current lags the induced EMF in phase, causing the instantaneous magnetic pole of the ring to repel the core's magnetic pole for the majority of the AC cycle, creating a net upward electrodynamic launch force."
  ),
  makeCase(
    chapter, 45, "Galvanometer to Voltmeter Conversion: High Multiplier Resistor", "Minimizing Current Burden in Voltage Measurements",
    "An electrical circuit has a 20 V source connected across two 10 kΩ resistors in series (voltage across each is 10 V). A student measures this voltage with an ideal voltmeter having infinite input resistance versus a cheap moving-coil meter with total resistance 10 kΩ.",
    "What voltage will the cheap 10 kΩ meter read across the 10 kΩ resistor?",
    "10.0 V",
    "6.67 V",
    "5.0 V",
    "15.0 V",
    "B",
    "When the 10 kΩ meter is placed in parallel with the 10 kΩ resistor, their equivalent resistance becomes R_p = (10 × 10) / (10 + 10) = 5 kΩ. Total circuit resistance drops to 10 kΩ + 5 kΩ = 15 kΩ. The measured voltage is V_measured = 20 V × (5 kΩ / 15 kΩ) = 20 / 3 ≈ 6.67 V. This severe loading error occurs because the voltmeter's resistance is not sufficiently high. An ideal voltmeter must have infinite resistance."
  ),
  makeCase(
    chapter, 46, "Neutral Wire Function in a Single-Phase AC Motor Circuit", "Return Current Path and Reference Ground Potential",
    "A 230 V single-phase AC induction water pump motor is running normally. An apprentice electrician wonders why both a live wire and a neutral wire are necessary to power the motor.",
    "What is the functional role of the neutral wire in completing the motor's electrical circuit?",
    "The neutral wire supplies electricity when the live wire runs out of volts.",
    "The live wire delivers alternating electrical potential from the power station; the neutral wire provides the closed, continuous return path back to the grounded transformer neutral to allow continuous alternating current flow.",
    "The neutral wire is an extra safety ground that carries zero current under all conditions.",
    "The neutral wire changes 50 Hz AC into DC for the motor coils.",
    "B",
    "Electric current requires an unbroken closed loop circuit. The live conductor supplies an alternating potential (+311 V to -311 V peak relative to Earth). The neutral wire, solidly bonded to Earth at the distribution substation, serves as the return conductor that completes the electrical circuit back to the transformer secondary, carrying the full operating return current while maintaining ~0 V ground reference."
  ),
  makeCase(
    chapter, 47, "Magnetic Levitation of a Superconducting Disk (Meissner Effect)", "Perfect Diamagnetism and Flux Expulsion",
    "A high-temperature superconducting ceramic pellet (YBCO) is cooled in liquid nitrogen to 77 K. When a small neodymium permanent magnet is placed above the cooled disk, the magnet hovers stably in mid-air above the pellet without any external power.",
    "What unique magnetic property of the superconductor causes this stable levitation?",
    "The superconductor becomes ferromagnetic and attracts the magnet.",
    "The Meissner effect: below its critical temperature, a superconductor expels all magnetic flux from its interior by establishing surface supercurrents whose magnetic field exactly mirrors and repels the external magnet.",
    "The liquid nitrogen boils to create a vapor cushion.",
    "The superconductor absorbs gravity within a 5 cm radius.",
    "B",
    "The Meissner effect is a defining hallmark of superconductivity: a superconductor exhibits perfect diamagnetism (magnetic susceptibility χ = -1 and internal B = 0). When a magnet is brought near, lossless persistent screening supercurrents circulate on the superconductor's surface, generating an equal, opposite magnetic image pole that creates a repulsive levitating force balancing the magnet's weight."
  ),
  makeCase(
    chapter, 48, "Step-Down Transformer for Mobile Phone Charger", "Rectification and Voltage Step-Down in Switch-Mode Chargers",
    "A smartphone USB charger plugged into a 230 V AC wall outlet delivers 5.0 V DC at 2.0 A to charge the phone's lithium-ion battery. Inside, a high-frequency ferrite-core step-down transformer operates alongside a rectifier bridge.",
    "What is the primary function of the step-down transformer inside the charger?",
    "To convert direct current into alternating current.",
    "To step down the dangerous high-voltage 230 V AC mains down to a safe, low AC voltage (e.g. ~5–6 V) with galvanic isolation before rectification into 5.0 V DC.",
    "To store electrical energy indefinitely like a chemical battery.",
    "To amplify the mains frequency from 50 Hz to 5000 GHz.",
    "B",
    "A mobile phone charger requires safe, low-voltage direct current (5 V DC). The step-down transformer's primary role is twofold: (1) step down the lethal 230 V AC mains voltage to an electrically safe level (~5 V AC), and (2) provide galvanic safety isolation separating users from direct electrical contact with mains power lines. Subsequent diode rectifier and filter stages convert low AC into smooth 5 V DC."
  ),
  makeCase(
    chapter, 49, "Reversing Direction of Rotation of a DC Electric Motor", "Current Reversal in Armature vs Field Magnet",
    "An electric model train engineer wishes to reverse the travel direction of a DC permanent-magnet motor from forward to reverse.",
    "Which action will successfully reverse the rotational direction of this permanent magnet DC motor?",
    "Reversing the polarity of the DC voltage applied to the armature brushes.",
    "Reversing both the armature polarity and reversing the permanent magnet poles simultaneously.",
    "Increasing the applied voltage from 12 V to 24 V.",
    "Adding a second set of carbon brushes.",
    "A",
    "Motor torque direction is given by Fleming's left-hand rule: reversing EITHER the magnetic field direction B OR the armature current direction I will reverse the direction of Lorentz force and rotational torque. In a permanent-magnet motor, field B is fixed; reversing the polarity of the DC supply to the brushes reverses current I in the coil arms, reversing rotation. (Note: reversing both simultaneously would leave rotation unchanged!)."
  ),
  makeCase(
    chapter, 50, "Energy Conservation in an Ideal Step-Up Transformer", "Conservation of Power: P_in = P_out",
    "A step-up transformer steps up voltage from 100 V to 10,000 V (a 100-fold voltage increase). A layperson claims: 'This machine creates free energy from nothing by multiplying voltage by 100!'",
    "How does a physicist refute this claim using the Law of Conservation of Energy?",
    "The extra energy comes from the iron core atoms.",
    "A transformer cannot create energy; by conservation of energy (P_in = P_out in an ideal transformer), stepping up voltage by 100 times forces the secondary current to decrease by exactly 100 times (I_s = I_p / 100), keeping total power V × I constant.",
    "The transformer violates physics only during the positive half of the AC cycle.",
    "Energy is conserved only if the frequency is increased by 100 times.",
    "B",
    "A transformer is a passive electromagnetic device, not a source of power. In an ideal transformer with zero losses: Power In = Power Out => V_p × I_p = V_s × I_s => V_s / V_p = I_p / I_s. When voltage is stepped up by a factor of 100, the available output current is stepped down by the exact same factor of 100. What is gained in potential difference is lost in charge flow rate; power and energy are strictly conserved."
  )
];

const targetPath = path.join(__dirname, 'questionBank', 'physics_case_electromagnetism.json');
fs.writeFileSync(targetPath, JSON.stringify(emCases, null, 2), 'utf8');
console.log(`Saved ${emCases.length} case studies for Electromagnetism to ${targetPath}`);
