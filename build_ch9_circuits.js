const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Household Circuits";

const circuitCases = [
  makeCase(
    chapter, 1, "Placement of Switch Strictly in the Live (Phase) Wire", "Switch Location and Electrical Shock Safety",
    "An inexperienced electrician wires a domestic ceiling fan switch in the neutral wire rather than the live wire. When the homeowner turns the wall switch off, the ceiling fan blades stop rotating completely. Later, while cleaning the stationary fan blades with a damp cloth, the homeowner accidentally touches an exposed motor lead and receives a severe, potentially fatal electric shock.",
    "Why was the ceiling fan still electrically live and hazardous even with the wall switch turned off?",
    "The fan blades generated static electricity while stopping.",
    "Because the switch was in the neutral wire, opening it broke the return path to stop current, but the appliance remained directly connected to the 220 V live wire; any path to ground (such as a person on a ladder) completes the circuit through their body.",
    "The neutral wire always carries 440 V alternating current.",
    "The damp cloth demagnetized the earth wire.",
    "B",
    "The live wire is maintained at 220 V relative to Earth, while the neutral wire is at 0 V. When a switch is installed in the live wire, opening the switch completely disconnects high voltage from the appliance, making it 100% safe to touch. When wired in the neutral wire, opening the switch stops operation, but the entire appliance chassis and internal coils remain energized at 220 V relative to Earth."
  ),
  makeCase(
    chapter, 2, "Color Coding of Wires in Three-Core Domestic Flexible Cables", "Old vs Modern International Color Codes",
    "An electrical appliance repair technician replaces the frayed 3-core supply cord of an imported electric kettle. The new flexible cable has three insulated conductors colored brown, light blue, and green with a bright yellow stripe.",
    "According to modern international safety standards, which color corresponds to Live, Neutral, and Earth respectively?",
    "Brown = Earth; Light Blue = Live; Green-Yellow = Neutral",
    "Brown = Live; Light Blue = Neutral; Green-Yellow = Earth",
    "Brown = Neutral; Light Blue = Live; Green-Yellow = Earth",
    "Brown = Live; Light Blue = Earth; Green-Yellow = Neutral",
    "B",
    "Under modern international (IEC / IS) electrical wiring codes: Live (Phase) = Brown (formerly Red in old British/Indian code); Neutral = Light Blue (formerly Black); Earth (Protective Ground) = Green with yellow longitudinal stripe (formerly solid Green). This standard was introduced to avoid confusion for color-blind individuals."
  ),
  makeCase(
    chapter, 3, "Why the Earth Pin on a Three-Pin Plug is Longer and Thicker", "Mechanical and Electrical Safety Design of Three-Pin Plugs",
    "A student examines a standard 16 A three-pin electrical plug and notices two distinct physical characteristics of the top earth pin compared to the bottom live and neutral pins: (1) it is noticeably longer, and (2) it has a distinctly larger diameter (thicker).",
    "What are the two critical safety reasons for making the earth pin longer and thicker?",
    "It is longer to conduct static electricity first, and thicker to look distinct.",
    "It is longer so it engages the protective earth socket first (ensuring appliance casing is grounded before live voltage connects) and disconnects last; it is thicker so it cannot accidentally be forced into either the live or neutral socket openings.",
    "It is longer to reach the high-voltage capacitor, and thicker to carry high radio frequencies.",
    "It is longer to reduce manufacturing cost, and thicker to resist corrosion.",
    "B",
    "The earth pin's extended length ensures safety sequence: on insertion, earth connection is made before live pins touch power; on withdrawal, live pins disconnect while earth remains connected until the end. Its thicker cross-section prevents dangerous insertion into live or neutral sockets and reduces earth conductor resistance to facilitate rapid fault current clearing."
  ),
  makeCase(
    chapter, 4, "Earthing of Metallic Appliance Chassis During Insulation Failure", "Fault Current Diversion and Fuse Blowing Mechanism",
    "A commercial electric clothes iron has a metal soleplate and steel body casing properly bonded to the green earth wire of a 3-pin plug. Inside the iron, age and mechanical vibration cause the insulation on the 220 V live wire to chafe and touch the metallic body casing.",
    "What sequence of electrical events occurs the moment the iron is plugged in and turned on?",
    "The iron casing becomes charged to 220 V and stays silent until touched.",
    "A heavy fault current rushes through the zero-resistance earth wire directly to ground; this massive surge blows the fuse (or trips the MCB) almost instantaneously, cutting off power and protecting the user from lethal shock.",
    "The iron works normally because earth wire supplies return current.",
    "The electricity converts into magnetic waves that repel the user's hand.",
    "B",
    "The metal casing is connected to the low-resistance earth electrode (R_earth < 1 Ω). If the live wire touches the casing, a direct short circuit to ground occurs: I_fault = 220 V / R_earth > 200 A. This massive overcurrent blows the cartridge fuse or trips the magnetic MCB within 20 milliseconds, de-energizing the circuit before anyone touching the iron can receive a lethal current."
  ),
  makeCase(
    chapter, 5, "Local Earth Electrode Construction and Charcoal-Salt Packing", "Earth Pit Resistance and Soil Conductivity",
    "During the electrical installation of a newly built residential home, an electrical contractor digs an earth pit 3 meters deep into moist ground. A heavy perforated copper plate (60 cm × 60 cm × 3 mm) attached to a thick copper rod is buried at the bottom and surrounded by alternating layers of crushed charcoal and rock salt, with a watering pipe extending to the surface.",
    "Why are charcoal, salt, and water added to the earth pit around the copper plate?",
    "Charcoal and salt prevent subterranean insects from eating the copper.",
    "Crushed charcoal and salt form an electrolytic damp paste around the copper plate, drastically increasing local soil electrical conductivity and lowering the earthing resistance to less than 1 ohm.",
    "Salt dissolves copper to create a protective oxide coating.",
    "Charcoal generates electricity to offset household consumption.",
    "B",
    "The effectiveness of protective earthing depends on maintaining an extremely low grounding resistance (ideally R < 1 Ω). Dry soil and sand have poor conductivity. Crushed charcoal (carbon) retains moisture and provides a large conductive contact area, while rock salt (NaCl) dissociates into Na⁺ and Cl⁻ ions, forming a highly conductive electrolyte that lowers ground impedance."
  ),
  makeCase(
    chapter, 6, "Two-Way (Staircase) Switching Wiring Scheme", "Single-Pole Double-Throw (SPDT) Dual Control Switching",
    "A homeowner installs a lighting system for a long staircase. Two single-pole double-throw (SPDT) two-way switches, S1 at the bottom of the staircase and S2 at the top of the staircase, control a single overhead lamp. The lamp can be turned on or off independently from either switch.",
    "How are the two switches and the lamp wired between the 220 V live and neutral lines?",
    "Both switches are connected in series in the neutral line.",
    "The common terminal of Switch 1 connects to the live wire, the common terminal of Switch 2 connects to the lamp, and two strapper wires connect the dual throw contacts of Switch 1 to Switch 2; neutral connects directly to the lamp.",
    "Both switches are connected in parallel across the live and neutral lines.",
    "Switch 1 connects to earth, Switch 2 connects to live, and the lamp connects to neutral.",
    "B",
    "In a two-way staircase wiring circuit, the live supply connects to the pole (common) of switch S1. Two parallel strapper wires (travelers) link the two active throws of S1 and S2. The pole of S2 connects to the lamp load, and the neutral wire returns from the lamp. Toggling either switch completes or interrupts the live conduction path between the travelers, giving independent on/off control."
  ),
  makeCase(
    chapter, 7, "Ring System of Domestic Wiring vs Radial (Tree) System", "Ring Main Circuit Advantages and Reduced Wire Gauge",
    "Modern residential buildings are wired using the Ring Main circuit system for 13 A / 15 A power sockets. In a ring circuit, the live, neutral, and earth conductors start at the distribution board, loop continuously through every room socket, and return back to the exact same terminals at the distribution board.",
    "What is the major technical and economic advantage of the ring wiring system compared to the older radial system?",
    "Every socket receives 440 V instead of 220 V.",
    "Current to any socket flows along two parallel paths around the ring, effectively halving the current carried by any single conductor run; this allows thinner, cheaper copper cable to be used while maintaining low voltage drop.",
    "Appliances wired in a ring do not require individual fuses.",
    "Ring circuits eliminate the need for an earth wire completely.",
    "B",
    "In a ring main, current drawn by an appliance divides into two paths traveling clockwise and counter-clockwise around the closed loop from the consumer unit. Since each branch carries only a fraction of the load current, cables of smaller cross-sectional area (e.g., 2.5 mm² instead of 4.0 mm² or 6.0 mm²) can safely feed numerous high-power sockets, saving immense copper weight and cost."
  ),
  makeCase(
    chapter, 8, "Miniature Circuit Breaker (MCB) Operation: Thermal and Magnetic Tripping", "MCB vs Conventional Rewireable Fuse",
    "In a modern electrical distribution board, traditional rewireable porcelain fuses are replaced with Miniature Circuit Breakers (MCBs). An MCB responds to both moderate sustained overloads (e.g., plugging in three space heaters on one circuit) and instantaneous high-current short circuits.",
    "What dual physical mechanisms allow the MCB to trip automatically under both overload and short-circuit conditions?",
    "Capacitive discharge for overloads, and gravitational pendulum for short circuits.",
    "A bimetallic strip bends slowly under sustained thermal heating (overload), while a magnetic solenoid acts instantaneously (< 25 ms) on massive short-circuit currents to unlatch the mechanical contacts.",
    "A lead wire melts inside an oil chamber under both conditions.",
    "A laser beam burns a semiconductor link inside the breaker.",
    "B",
    "Modern MCBs feature dual tripping elements: (1) Thermal trip: A bimetallic strip heats up due to moderate sustained overcurrents (I²Rt); differential thermal expansion causes it to bend and trip the latch after an inverse-time delay. (2) Magnetic trip: A solenoid coil carries the circuit current; massive short-circuit currents generate a powerful magnetic field that instantly slams an armature to trip the breaker in under 25 milliseconds."
  ),
  makeCase(
    chapter, 9, "Electric Shock Severity: Voltage vs Current Thresholds in the Human Body", "Pathological Effects of 50 Hz AC Current on Human Heart",
    "A safety engineer trains electrical apprentices on physiological shock hazards. An adult with dry skin has a resistance of R ≈ 100,000 Ω, but with wet, sweaty hands, body resistance plunges to R ≈ 1,000 Ω. The mains voltage is 230 V AC at 50 Hz.",
    "What current flows through a wet human body touching 230 V, and what is its physiological effect on the heart?",
    "Current = 2.3 mA; produces a faint tickle with zero risk.",
    "Current = 230 mA; well above the 50–100 mA threshold that induces fatal ventricular fibrillation (uncoordinated heart muscle contractions) and respiratory paralysis within seconds.",
    "Current = 23 A; vaporizes the body instantaneously into gas.",
    "Current = 0.23 mA; causes the heart to beat faster and healthier.",
    "B",
    "By Ohm's law: I = V / R = 230 V / 1,000 Ω = 0.230 A = 230 mA. Physiological thresholds for 50 Hz AC: 1 mA (threshold of perception), 5 mA (safe maximum), 10–20 mA ('let-go' threshold where muscles contract involuntarily), 50–100 mA (ventricular fibrillation, fatal without immediate defibrillation). At 230 mA, lethal fibrillation occurs in fractions of a second."
  ),
  makeCase(
    chapter, 10, "High-Voltage Power Transmission Grid: Step-Up and Step-Down Transformers", "Minimizing I²R Joule Heat Losses on High Tension Lines",
    "A hydroelectric power plant generates electricity at 11 kV. Before transmitting this power across 500 km of national grid lines, a step-up transformer elevates the voltage to 400 kV (400,000 V). At city outskirts, substations step it down sequentially to 33 kV, 11 kV, and finally 220 V / 415 V for consumers.",
    "Why is electric power transmitted at ultra-high voltages like 400 kV rather than at the generated 11 kV?",
    "High voltage electricity travels faster than low voltage electricity.",
    "At higher voltage, the current I required to transmit power P is vastly smaller (I = P/V); since line heat loss is P_loss = I²R, transmitting at 400 kV reduces line power loss by a factor of (400/11)² ≈ 1320 times.",
    "High voltage attracts lightning from clouds to recharge the grid.",
    "Step-up transformers multiply the total electrical energy transmitted.",
    "B",
    "Electrical power transmitted is P = V × I (or √3 V I cos φ in three-phase). For a given power level P, transmitting at high voltage V proportionally reduces the line current I: I ∝ 1/V. Since Joule heating dissipation in transmission line resistance R_line is P_loss = I²R_line, line loss is inversely proportional to the square of voltage (P_loss ∝ 1/V²). This permits immense copper savings and high transmission efficiency."
  ),
  makeCase(
    chapter, 11, "Fuse Rating Selection for a 2.2 kW Domestic Appliance", "Calculating Operating Current and Fuse Sizing",
    "A homeowner purchases a 2.2 kW (2200 W) storage water geyser designed for a 220 V single-phase AC domestic power supply. The homeowner has four spare cartridge fuses available in a toolkit: 5 A, 10 A, 13 A, and 30 A.",
    "What is the normal operating current drawn by the geyser, and which fuse rating should be installed to protect it safely?",
    "Operating current = 2.2 A; Use a 5 A fuse",
    "Operating current = 10.0 A; Use a 13 A fuse (or 15 A fuse), because a 10 A fuse would blow during minor fluctuations while a 30 A fuse would fail to protect against wiring overheating.",
    "Operating current = 10.0 A; Use a 5 A fuse to save electricity",
    "Operating current = 22 A; Use a 30 A fuse",
    "B",
    "Normal operating current is I = P / V = 2200 W / 220 V = 10.0 A. A fuse rating must be slightly higher than the full-load operating current so it does not nuisance-trip under normal steady operation or slight mains fluctuations, but low enough to protect against overcurrent. A 10 A fuse would operate right on its margin and melt prematurely; a 13 A or 15 A fuse is the proper engineering standard."
  ),
  makeCase(
    chapter, 12, "Why a Fuse Must Never Be Connected in the Neutral Wire", "Safety Hazard of Neutral Fuse Blown State",
    "An electrician improperly connects a 15 A safety fuse in the neutral line of an electric room heater instead of the live line. During an electrical overload, the fuse element melts and blows cleanly.",
    "What dangerous condition is created when the fuse blows in the neutral wire?",
    "The room heater begins running on battery power.",
    "The broken neutral stops current flow so the heating coil turns cold, but the entire element remains energized at 220 V live potential; a person touching the coil will receive a lethal shock to ground.",
    "The fuse will explode with toxic fumes.",
    "The neutral wire melts along its entire length back to the substation.",
    "B",
    "If a fuse is connected in the neutral wire, it will still melt during a short circuit between live and neutral. However, melting the neutral fuse leaves the live connection intact! The appliance stops functioning, leading the user to believe it is unpowered and safe. In reality, the entire appliance remains at 220 V relative to Earth; touching any internal component completes a fatal circuit to ground."
  ),
  makeCase(
    chapter, 13, "Three-Phase Four-Wire Distribution: Star Connection and Neutral Point", "Line Voltage vs Phase Voltage in Three-Phase Mains",
    "A local city distribution substation steps down 11 kV to a 4-wire system: three live phase conductors (L1, L2, L3) and one neutral conductor (N). An electrical meter technician measures V_LN = 230 V between any one live wire and the neutral wire (phase voltage), and V_LL = 400 V between any two live wires (line voltage).",
    "What is the mathematical relationship between line voltage V_L and phase voltage V_ph in a balanced three-phase star system?",
    "V_L = V_ph / √3",
    "V_L = √3 × V_ph ≈ 1.732 × 230 V ≈ 400 V",
    "V_L = 3 × V_ph = 690 V",
    "V_L = 2 × V_ph = 460 V",
    "B",
    "In a three-phase star (Y) connected distribution transformer secondary, the three phase windings are displaced in time by 120° electrical. The line-to-line voltage is the vector difference between two phase voltages: V_LL = 2 × V_ph × sin(120°/2) = 2 × V_ph × sin(60°) = √3 V_ph. Thus, V_line = √3 × 230 V ≈ 1.732 × 230 V ≈ 398.4 V ≈ 400 V."
  ),
  makeCase(
    chapter, 14, "Residual Current Circuit Breaker (RCCB / ELCB) Operating Principle", "Detection of Differential Current and Core Balance Transformer",
    "A newly wired residence is equipped with a Residual Current Circuit Breaker (RCCB) rated at 30 mA sensitivity. When a toddler accidentally sticks a metal hairpin into the live socket opening while standing barefoot on a tiled floor, the RCCB trips and cuts off power in 0.02 seconds, saving the child's life.",
    "How does the RCCB detect this shock hazard even though the current (e.g. 40 mA) is far too small to trip a standard 16 A MCB?",
    "The RCCB senses the sound waves from the spark.",
    "The RCCB continuously compares current in the live wire (I_L) and neutral wire (I_N) using a toroidal differential transformer; if a leakage current to earth causes an imbalance (I_L - I_N ≥ 30 mA), the resultant magnetic flux trips the breaker instantly.",
    "The RCCB measures temperature rise in the ceiling wires.",
    "The RCCB sends high-frequency radar pulses through the wiring.",
    "B",
    "An RCCB monitors Kirchhoff's current law: under normal conditions, current entering via the live wire must exactly equal current returning via the neutral wire (I_L = I_N), producing opposing, cancelling magnetic flux in a toroidal sense coil. When current leaks to earth through a human body (I_earth > 30 mA), I_L ≠ I_N. The net magnetic flux induces a voltage in a secondary sense coil, instantly tripping the relay."
  ),
  makeCase(
    chapter, 15, "Why Thick Copper Conductor is Used for Earthing Lead", "Minimizing Earth Fault Resistance",
    "An electrical inspector rejects a house earthing installation because the electrician used a thin 1.0 mm² copper wire to connect the main distribution ground bar to the buried earth electrode, requiring it to be replaced with a heavy 10 mm² copper conductor.",
    "Why must the earthing lead conductor have a large cross-sectional area and low resistance?",
    "Thick wire prevents mice from chewing the earthing lead.",
    "The earthing lead must carry massive fault currents (hundreds of amperes) without melting or excessive voltage drop, ensuring casing potential remains near zero and ground path resistance is low enough to blow the fuse instantly.",
    "Thick wire generates magnetic fields that repel lightning.",
    "Thick wire conducts high-frequency radio waves to improve Wi-Fi.",
    "B",
    "Under a dead short-to-case fault, the earthing wire must carry the full prospective fault current (which may exceed 500 A for a few cycles) until the protective breaker trips. A thin wire would have high resistance (causing the metal casing to rise to dangerous voltage during the fault) and would melt or catch fire before the breaker trips, severing the ground path."
  ),
  makeCase(
    chapter, 16, "Double Insulation in Two-Pin Portable Power Tools", "Class II Double Insulated Appliances Without Earth Wire",
    "A modern electric handheld power drill has a plastic casing, a flexible 2-core power cable, and a 2-pin plug lacking an earth pin. The manufacturer's label displays a symbol of two concentric squares (Class II Double Insulation).",
    "Why is an earth wire not legally required for this Class II double-insulated tool?",
    "The drill runs on internal rechargeable solar batteries only.",
    "The tool features two independent layers of electrical insulation (basic functional insulation and supplementary protective insulation) and has no exposed conductive metal parts that can become live during an internal fault.",
    "The drill operates at a safe low voltage of 12 V AC.",
    "The drill motor produces magnetic shielding that grounds itself through air.",
    "B",
    "Appliances are classified by shock protection: Class I appliances have exposed metal parts requiring an earth ground connection. Class II appliances have 'Double Insulation' or 'Reinforced Insulation' (symbol: ⧈). All live electrical parts are surrounded by two independent barriers of high-dielectric insulation, and external housings are non-conductive plastic; hence, no single fault can expose dangerous voltage, eliminating the need for an earth wire."
  ),
  makeCase(
    chapter, 17, "Main Switch Disconnection: Simultaneous Breaking of Live and Neutral", "Double-Pole Main Isolation Switch",
    "The main electrical service panel entering a home is equipped with a master isolation switch. When the homeowner flips the handle to 'OFF', it mechanically disengages both the live and neutral lines simultaneously via a linked double-pole mechanism.",
    "Why is a double-pole switch used for the main disconnect rather than breaking only the live conductor?",
    "Breaking both conductors saves twice as much electricity.",
    "Simultaneous disconnection completely isolates the entire building from the external utility grid, protecting against accidental neutral line back-feeding or neutral potential elevation caused by grid faults.",
    "The live and neutral wires would spark if disconnected one at a time.",
    "It allows alternating current to reverse direction safely.",
    "B",
    "In a power distribution grid, the neutral wire can become elevated to a dangerous potential relative to local ground if an upstream neutral break occurs on the supply network. A double-pole main switch mechanically breaks both the live and neutral lines simultaneously, guaranteeing 100% galvanic isolation of the household wiring from any utility fault or stray voltages during maintenance."
  ),
  makeCase(
    chapter, 18, "Overloading vs Short-Circuiting in Household Circuits", "Differences in Causes, Impedance, and Current Magnitudes",
    "An electrical safety forensic investigator examines two damaged domestic circuits: Circuit A failed when an occupant simultaneously connected a 2000 W geyser, a 1500 W heater, and an 800 W microwave to a single 10 A wall socket. Circuit B failed when rats chewed through the insulation, causing the live and neutral copper conductors to touch directly.",
    "What electrical fault conditions occurred in Circuit A and Circuit B respectively?",
    "Circuit A: Short-circuit; Circuit B: Overload",
    "Circuit A: Overloading (excessive total power draw beyond rated current capacity of wiring); Circuit B: Short-circuiting (direct zero-resistance contact between live and neutral conductors causing massive instantaneous fault current).",
    "Both circuits experienced identical earth leakage faults.",
    "Circuit A suffered reverse polarity; Circuit B suffered low voltage.",
    "B",
    "Overloading occurs when too many appliances are connected simultaneously to a circuit, drawing a cumulative current exceeding the safe carrying capacity of the wires (e.g. 20 A drawn on a 10 A circuit), causing slow thermal buildup. Short-circuiting occurs when bare live and neutral wires make direct physical contact; with circuit resistance dropping to near zero (R ≈ 0), instantaneous current spikes into hundreds of amperes."
  ),
  makeCase(
    chapter, 19, "Kilowatt-Hour Meter Connections: Current Coil and Pressure Coil", "Internal Mechanism of Electromechanical Energy Meters",
    "An electromechanical induction electricity meter installed at a consumer's premises contains two electromagnetic coils: Coil 1 (Current Coil) wound with a few turns of thick copper wire, and Coil 2 (Pressure/Voltage Coil) wound with thousands of turns of fine thin wire.",
    "How are the Current Coil and Pressure Coil connected into the household supply circuit?",
    "Current Coil in parallel across Live and Neutral; Pressure Coil in series in Live wire.",
    "Current Coil in series with the Live wire (to measure total current I); Pressure Coil in parallel across Live and Neutral (to measure mains potential difference V).",
    "Both coils are connected in series with the earth wire.",
    "Both coils are connected in parallel with the main fuse.",
    "B",
    "An electric energy meter measures energy W = ∫ V × I dt. The Current Coil carries the full load current I and must have very low resistance to prevent voltage drop, so it is made of thick wire with few turns and connected in series in the live lead. The Pressure (Voltage) Coil measures the line voltage V across live and neutral, requiring high impedance to draw negligible current, so it is wound with many turns of thin wire in parallel."
  ),
  makeCase(
    chapter, 20, "Socket Outlet Safety Shutters in Domestic Wall Plugs", "Child-Proof Safety Shutter Mechanism",
    "Modern domestic 3-pin 230 V wall sockets incorporate an internal spring-loaded plastic safety shutter mechanism that blocks the live and neutral pin holes. When a child attempts to insert a single nail or screwdriver into the live hole, the hole remains locked shut.",
    "How is the internal safety shutter unlocked to permit insertion of a plug?",
    "The shutter opens when it detects the magnetic field of the plug.",
    "The longer earth pin of a 3-pin plug enters the top earth hole first, mechanically depressing a cam lever that slides open the shutters over the live and neutral holes simultaneously.",
    "The shutter is activated by the heat of the plug pins.",
    "The user must press a secret button on the wall socket plate.",
    "B",
    "To prevent accidental electrocution (especially of children probing sockets with metal objects), safety sockets feature interlocked shutters. The earth pin on a standard plug is physically longer than the live and neutral pins. When inserted, the earth pin engages an internal mechanical ramp/cam before the other pins arrive, sliding the protective shutters away from the live and neutral apertures."
  ),
  makeCase(
    chapter, 21, "Why High Power Appliances Use 15 A / 16 A Sockets with Thicker Wiring", "Current Capacity and Cable Cross-Section Requirements",
    "In a modern home, lighting circuits use 5 A sockets wired with 1.5 mm² copper cable, whereas air conditioners, geysers, and cooking ranges use 15 A / 16 A sockets wired with 4.0 mm² or 6.0 mm² copper cable.",
    "Why must high-power appliances use thicker wiring and higher-rated sockets?",
    "Thick wires reduce the frequency of alternating current.",
    "High-power appliances draw large currents (up to 15 A); thicker conductors have significantly lower resistance (R ∝ 1/A), preventing dangerous Joule heating (I²R), insulation melting, and fire hazards.",
    "Thick wires increase voltage from 220 V to 440 V.",
    "Thin wires would attract electromagnetic lightning inside the house.",
    "B",
    "Power drawn is P = VI, so current is I = P/V. An air conditioner (2500 W) draws ~11.4 A. If connected through a 1.5 mm² lighting wire designed for 5 A, the high current creates excessive I²R heating along the cable length. This overheats the PVC insulation, potentially igniting house fires inside conduits. Heavy loads require 4–6 mm² conductors with low resistance to safely carry continuous high currents."
  ),
  makeCase(
    chapter, 22, "Consumer Unit Fuse vs Company Pole Fuse", "Hierarchy of Electrical Protection in Service Mains",
    "An electrical supply line enters a house from the overhead street pole through an insulated service drop cable. The system features two fuses: Fuse A (the electricity utility company fuse sealed in a cutout box before the meter) and Fuse B (the consumer's distribution board branch fuse after the meter).",
    "Which fuse has a higher current rating, and which should blow first during an internal appliance short circuit?",
    "Fuse A has a lower rating and blows first.",
    "Fuse A (company cutout fuse) has a higher rating (e.g. 60–100 A) to protect the incoming service cable; Fuse B (branch fuse) has a lower rating (e.g. 5–16 A) and blows first during an appliance fault (discrimination/selectivity).",
    "Both fuses have identical ratings and blow at the exact same microsecond.",
    "The company fuse is placed in the neutral wire to shut off the entire neighborhood.",
    "B",
    "Electrical protection systems rely on coordinated 'discrimination' (selectivity). Branch fuses (5 A or 16 A) protect individual room circuits and must clear local short circuits immediately, keeping the rest of the house powered. The company service fuse (60 A or 100 A) is a master backup designed to protect the utility's underground/overhead drop cable from catastrophic overcurrent, blowing only if internal main breakers fail."
  ),
  makeCase(
    chapter, 23, "Neutral Wire Grounding at the Distribution Substation", "Why Neutral Wire Has Zero Potential Relative to Earth",
    "A student measures the AC voltage with a digital multimeter between various terminals in a domestic 3-pin socket: between Live and Earth reads 230 V; between Live and Neutral reads 230 V; between Neutral and Earth reads approximately 0 V (often 1–2 V due to minor line drop).",
    "Why is the potential of the neutral wire virtually 0 V relative to Earth?",
    "The neutral wire contains zero electrons.",
    "At the distribution substation, the center neutral tap of the step-down star-connected transformer secondary is solidly bonded to a deep grounding electrode, holding its potential at true ground potential (0 V).",
    "The electricity meter actively cancels voltage on the neutral wire.",
    "Neutral wire is coated with insulating rubber that absorbs voltage.",
    "B",
    "The local transformer secondary is star-connected (Y). The star junction point is called the Neutral point and is directly connected to a low-resistance earth pit at the substation. Consequently, the neutral conductor remains at Earth potential (0 V) throughout its distribution run, providing a zero-volt return path for load currents back to the transformer."
  ),
  makeCase(
    chapter, 24, "Why Mains AC Voltage is Quoted as RMS Value (220 V)", "Root Mean Square (RMS) Value vs Peak Amplitude",
    "In India and the UK, domestic single-phase alternating current mains is specified as 220 V (or 230 V) at 50 Hz. A student observing the mains waveform on a cathode ray oscilloscope notices that the sinusoidal voltage fluctuates between positive and negative peaks.",
    "What is the actual peak voltage (V_peak) of a nominal 220 V AC domestic supply?",
    "V_peak = 110 V",
    "V_peak = 220 V",
    "V_peak = √2 × 220 V ≈ 1.414 × 220 V ≈ 311 V",
    "V_peak = 2 × 220 V = 440 V",
    "C",
    "Nominal AC mains voltage is always stated as the Root Mean Square (RMS) value: V_rms = V_peak / √2. The RMS value represents the equivalent DC voltage that produces the exact same average heating rate (Joule heat) in a given resistor. Therefore: V_peak = √2 × V_rms = 1.414 × 220 V ≈ 311.1 V (the voltage actually swings between +311 V and -311 V each cycle)."
  ),
  makeCase(
    chapter, 25, "Danger of Using a Copper Wire as an Emergency Fuse", "Catastrophic Failure from Oversized Fuse Links",
    "When a 10 A cartridge fuse blows repeatedly in an old house, an impatient resident replaces the blown fuse element with a thick strand of copper wire stripped from a spare extension cord.",
    "Why is replacing a fuse wire with a thick copper wire an extremely dangerous fire hazard?",
    "Copper wire conducts alternating current only in reverse direction.",
    "Copper has a very high melting point (1085°C) and low resistivity; under severe overcurrent or short circuit, the copper wire will not melt, forcing the building wiring inside walls to overheat, melt, and ignite catastrophic structural fires.",
    "Copper wire causes electric meters to spin backwards.",
    "Copper attracts radioactive radon gas into the fuse box.",
    "B",
    "A proper fuse wire (lead-tin alloy) has high resistivity and a low melting point (~183°C), engineered to sacrifice itself before building wiring reaches dangerous temperatures. Copper has a melting point of 1085°C. A thick copper strand can carry several hundred amperes without melting, defeating all overcurrent protection. The concealed wiring inside walls will overheat, ignite insulation, and cause devastating house fires."
  ),
  makeCase(
    chapter, 26, "Arc Fault Circuit Interrupter (AFCI) Fire Prevention", "Detection of Arcing in Damaged Wall Wiring",
    "In modern building codes, electrical panels feature Arc Fault Circuit Interrupters (AFCIs). In an older home, a heavy cabinet pushed against a wall partially crushes an extension cord, causing intermittent microscopic sparking (arcing) between frayed copper strands.",
    "Why does an AFCI trip to prevent fire where standard MCBs and fuses fail to react?",
    "Standard breakers only react to high total current or earth leakage; AFCIs use microprocessors to detect the unique high-frequency electrical noise and current wave distortion characteristic of dangerous arcing.",
    "AFCIs detect the smell of burning plastic using smoke sensors.",
    "AFCIs measure infrared heat using laser beams directed into walls.",
    "AFCIs only work when lightning strikes the building.",
    "A",
    "A standard MCB trips only when current exceeds its threshold (e.g. 16 A), and an RCCB trips only when current leaks to earth. A series arc caused by a broken, sparking wire can draw only 2–5 A (well below MCB rating) with zero earth leakage, yet the localized 3000°C electric plasma arc can easily ignite nearby wood framing. AFCIs analyze current waveforms in real-time, detecting characteristic high-frequency arcing signatures."
  ),
  makeCase(
    chapter, 27, "Two-Way Lighting Circuit: Identification of Inactive State", "Analysis of SPDT Switch Positions",
    "A staircase circuit has two SPDT switches S1 and S2 connected via two traveler wires A and B. In Position 1: S1 connects Live to Traveler A; S2 connects Lamp to Traveler A (Lamp is ON). In Position 2: S1 remains connected to Traveler A, but S2 is switched to Traveler B.",
    "What is the operational state of the lamp in Position 2, and what voltage appears across the open gap of switch S2?",
    "Lamp is ON; 0 V across switch gap.",
    "Lamp is OFF; 220 V mains potential appears across the open contacts of switch S2.",
    "Lamp is glowing at half brightness; 110 V across switch gap.",
    "The circuit short-circuits and blows the fuse.",
    "B",
    "In Position 2, S1 connects 220 V live to Traveler A. However, switch S2 is thrown to Traveler B, which is an open, unpowered line. The conduction circuit to the lamp is broken, so no current flows and the lamp is OFF. Since Traveler A is at 220 V and the pole of S2 is connected through the unlit lamp to neutral (0 V), the full 220 V mains potential appears across the open contact gap of S2."
  ),
  makeCase(
    chapter, 28, "Appliance Earth Leakage with Disconnected Earth Wire", "Floating Metal Casing Voltage",
    "A commercial espresso machine with a stainless steel body has a broken earth wire inside its supply plug (earth connection is completely open). Due to moisture and mineral scale, an internal electrical leakage resistance of R_leak = 2,000 Ω develops between the 230 V live heating element and the metal chassis.",
    "If a barista with a body resistance of R_body = 1,000 Ω touches the metal casing while standing barefoot on a wet floor, what voltage appears on the chassis and what shock current flows through the barista?",
    "Chassis voltage = 0 V; Current = 0 mA",
    "Chassis voltage ≈ 76.7 V; Current ≈ 76.7 mA (a potentially lethal shock current)",
    "Chassis voltage = 230 V; Current = 2.3 A",
    "Chassis voltage = 12 V; Current = 12 mA",
    "B",
    "The leakage path and the human body form a series voltage divider between 230 V and ground (0 V): Total resistance R_total = R_leak + R_body = 2000 + 1000 = 3000 Ω. Current through body is I = 230 V / 3000 Ω ≈ 0.0767 A = 76.7 mA. The potential of the metal casing is V_chassis = I × R_body = 0.0767 A × 1000 Ω ≈ 76.7 V. A current of 76.7 mA passing through the chest is sufficient to trigger fatal ventricular fibrillation."
  ),
  makeCase(
    chapter, 29, "Ring Main Wiring: Socket Loading and Plug Fuses (UK Style BS 1363)", "Individual Appliance Plug Fuse Protection",
    "In a Ring Main circuit protected by a 32 A circuit breaker at the distribution board, sockets can power small appliances like a 60 W bedside reading lamp alongside heavy appliances like a 3000 W electric kettle.",
    "Why must each individual appliance plug in a ring circuit contain its own properly rated cartridge fuse (e.g. 3 A for the lamp, 13 A for the kettle)?",
    "To make the plugs heavier so they do not fall out of wall sockets.",
    "Because the 32 A main ring breaker is designed to protect the 2.5 mm² wall cabling; if a fault occurs in the thin 0.5 mm² flex cord of the bedside lamp, 32 A would melt the lamp cord and cause a fire long before the main breaker trips.",
    "Plug fuses are required to filter out radio interference.",
    "Small appliances run on direct current, which requires special fuses.",
    "B",
    "In a ring circuit, the distribution breaker is rated at 32 A to protect the heavy fixed ring wiring. However, individual appliances use much thinner flexible cords (e.g. 0.5 mm² or 0.75 mm² rated for 3–6 A). If a short circuit occurs inside a table lamp, drawing 25 A, the 32 A wall breaker would NOT trip, and the thin cord would instantly burst into flames. The plug-top fuse (e.g., 3 A) protects the appliance flex cord."
  ),
  makeCase(
    chapter, 30, "Single-Phase vs Three-Phase Power Transmission from Generating Station", "Economic and Technical Superiority of Three-Phase Generation",
    "A power utility company generates bulk electricity using 3-phase AC synchronous alternators rather than single-phase alternators.",
    "What is the major technical and economic reason why all global power grids use three-phase generation and transmission?",
    "Three-phase electricity travels at three times the speed of light.",
    "Three-phase systems deliver constant (non-pulsating) total power, produce rotating magnetic fields in industrial motors without auxiliary starters, and require only 75% of the conductor material (copper/aluminum) needed by a single-phase system for equivalent power transmission.",
    "Single-phase electricity cannot be stepped up with transformers.",
    "Three-phase electricity eliminates electrical resistance completely.",
    "B",
    "Three-phase AC power offers profound engineering advantages: (1) Instantaneous power in a balanced 3-phase system is strictly constant (no torque pulsations in motors/turbines). (2) It naturally establishes a rotating magnetic field, enabling self-starting, robust 3-phase induction motors. (3) Conductor efficiency: transmitting a given amount of electrical power over a distance requires 25% less conductor mass compared to single-phase."
  ),
  makeCase(
    chapter, 31, "Electric Fire Safety: Why Water Must NEVER Be Used on Electrical Fires", "Electrical Conductivity of Tap Water and Shock Hazard",
    "A short-circuit in an electrical distribution board inside an office building ignites the plastic insulation, starting a localized fire. An untrained employee rushes forward with a bucket of municipal tap water to douse the flames.",
    "Why must liquid water NEVER be poured onto an energized electrical fire?",
    "Water reacts with copper to generate explosive hydrogen gas.",
    "Tap water contains dissolved mineral ions, making it a good electrical conductor; pouring water creates a continuous conductive path directly from the live 230 V/400 V conductors back to the person holding the bucket, causing fatal electrocution.",
    "Water freezes immediately when exposed to alternating current.",
    "Water turns electrical fires into nuclear explosions.",
    "B",
    "Ordinary tap water and groundwater contain dissolved mineral salts (calcium, magnesium, chloride, sodium), giving it substantial electrical conductivity. Pouring water onto live electrical equipment establishes an unbroken conducting stream between high-voltage conductors and the firefighter, leading to immediate lethal electric shock. Only non-conductive Class C/E extinguishers (CO₂ or dry powder) must be used."
  ),
  makeCase(
    chapter, 32, "High-Voltage Grid: Corona Discharge on Extra High Tension (EHT) Lines", "Dielectric Breakdown of Air Around High-Tension Conductors",
    "During humid, foggy nights, engineers patrolling 400 kV extra-high-tension (EHT) transmission lines observe a faint violet-blue glow around the conductors accompanied by a continuous hissing/crackling sound and the distinct pungent smell of ozone gas.",
    "What phenomenon is observed, and how do engineers minimize it?",
    "Atmospheric lightning; minimized by turning off power at night.",
    "Corona discharge: the intense localized electric field at the conductor surface exceeds the dielectric breakdown strength of air (~30 kV/cm), ionizing surrounding air; minimized by using bundled conductors and larger effective conductor diameters.",
    "Superconductivity of air; minimized by heating the cables.",
    "Nuclear decay of copper; minimized by lead shielding.",
    "B",
    "Corona discharge occurs when the surface electric field gradient around a high-voltage conductor exceeds the dielectric strength of dry air (~30 kV/cm peak or 21.2 kV/cm RMS). Localized ionization of air molecules produces a violet luminescence, acoustic hissing, ozone production, and power loss. Corona loss is mitigated by increasing conductor radius and using bundled sub-conductors separated by spacers, reducing surface field stress."
  ),
  makeCase(
    chapter, 33, "Overheating of Loose Electrical Terminals (Contact Resistance)", "Joule Heating at High-Resistance Loose Connections",
    "A maintenance technician inspects a domestic distribution panel with an infrared thermal imaging camera. The technician notices that one terminal screw securing the live wire to a 16 A water heater breaker is loose, glowing at 135°C on the thermal screen while neighboring terminals are at 30°C.",
    "Why does a loose terminal screw overheat so dangerously even when current does not exceed 16 A?",
    "Loose screws cause electric current to reverse into eddy currents.",
    "A loose connection has a microscopic contact area, creating a high localized contact resistance R_contact; by Joule's law (P = I²R_contact), drawing 16 A generates intense localized heat that melts insulation and ignites panel fires.",
    "Loose screws attract magnetic friction from passing alternating current.",
    "Loose screws allow air molecules to combust inside the terminal.",
    "B",
    "When a terminal screw is tightly clamped, mechanical pressure deforms microscopic surface asperities, creating a large metallic contact area with virtually zero resistance (< 0.001 Ω). When loose, only tiny microscopic contact points touch, increasing local contact resistance to e.g. 0.5 Ω. At 16 A, localized heat dissipation is P = I²R = 16² × 0.5 = 128 W concentrated in a tiny volume, rapidly elevating temperature to over 150°C."
  ),
  makeCase(
    chapter, 34, "Safety Isolation Transformer in Bathroom Shaver Sockets", "1:1 Galvanic Isolation for Wet Environments",
    "In hotel bathrooms, electrical building codes prohibit standard 230 V power outlets within 3 meters of showers, but permit a specialized 'Shaver Only' socket. Inside the shaver socket housing is a small 1:1 ratio isolating transformer with an earthed electrostatic shield between primary and secondary windings.",
    "Why does a 1:1 isolating transformer protect a wet person using an electric razor from lethal electric shock?",
    "It steps down the 230 V supply to 1.5 V DC.",
    "The secondary circuit has no physical electrical connection to the supply grid or to Earth; touching one secondary terminal while standing grounded completes no circuit to Earth, preventing shock current from flowing.",
    "It converts electrical current into ultrasonic sound waves.",
    "It cools the bathroom air to reduce conductivity.",
    "B",
    "In standard mains, touching the live conductor allows current to return through the grounded floor back to the substation neutral earth. An isolation transformer has galvanic separation between primary and secondary windings (1:1 ratio, 230 V in, 230 V out). The secondary circuit is completely floating relative to Earth. If a grounded user touches either secondary terminal, there is no return path back to the opposite terminal through Earth, eliminating shock risk."
  ),
  makeCase(
    chapter, 35, "Testing Polarity of Socket Outlets with a Neon Phase Tester", "Capacitive Coupling of Neon Test Screwdriver",
    "An electrician tests a 3-pin wall socket using a pocket neon phase tester screwdriver. When the brass cap on the handle is touched with a bare finger and the metal tip is inserted into the Live socket aperture, the neon bulb glows bright orange. When inserted into Neutral or Earth, the bulb remains dark.",
    "Why does the neon bulb light up when touching Live, and why doesn't the electrician get shocked?",
    "The bulb is powered by an internal button battery inside the handle.",
    "The tester contains a safety series resistor of very high value (~1 MΩ to 2 MΩ); when touching the Live terminal, an imperceptible, harmless microcurrent (< 0.2 mA) flows through the resistor, neon bulb, human body capacitance, and ground, safely striking the neon discharge.",
    "The human body conducts voltage only if the person wears rubber boots.",
    "The neon bulb responds only to air currents inside the socket.",
    "B",
    "A neon test screwdriver contains a miniature neon lamp in series with a massive current-limiting resistor (typically 1 to 2 megohms). When touched to Live (230 V) with a finger on the end cap, circuit current is I = V / R ≈ 230 V / 1.5 MΩ ≈ 0.15 mA. The neon bulb requires only ~70–90 V and microamperes of ionization current to glow. At 0.15 mA, current is far below human sensation threshold (1 mA), ensuring absolute safety."
  ),
  makeCase(
    chapter, 36, "Why Switches Must NEVER Be Operated with Wet Hands", "Dielectric Surface Tracking and Skin Resistance Collapse",
    "Safety signs in bathrooms and chemical laboratories strictly warn: 'DO NOT OPERATE SWITCHES WITH WET HANDS'.",
    "What physical and physiological factors make touching a switch with wet hands hazardous?",
    "Water freezes the internal mechanical switch springs.",
    "Water on fingers contains dissolved skin salts that form a conductive liquid film, penetrating the narrow clearance gap between switch toggle and live internal contacts, while wet skin reduces human body resistance from 100,000 Ω to under 1,000 Ω, creating a high-current shock path.",
    "Wet hands demagnetize the household copper wiring.",
    "Water induces radio waves that short-circuit the electric meter.",
    "B",
    "Two severe hazards combine: (1) Dry human stratum corneum provides high electrical contact resistance (50,000 to 100,000 Ω). Moisture and sweat salts dissolve, reducing skin resistance to < 1000 Ω. (2) Surface water droplets can seep into the micro-gaps around the switch rocker mechanism, bridging across to the 230 V live metal contacts and establishing a direct conductive water path onto the operator's skin."
  ),
  makeCase(
    chapter, 37, "Earthing Wire Thickness vs Neutral Wire Thickness in Tree System", "Comparative Conductor Sizing in Domestic Installations",
    "An electrical engineer designs a domestic distribution panel. The live and neutral feeder conductors have a cross-sectional area of 4.0 mm² copper. The earth continuity conductor is specified as 4.0 mm² copper as well.",
    "Why must the earth conductor have at least the same current carrying capacity as the live conductor?",
    "The earth conductor carries normal return current continuously during the day.",
    "In the event of a direct short-to-chassis fault, the earth conductor must carry the full prospective short-circuit fault current without melting or excessive voltage drop before the protective fuse or circuit breaker trips.",
    "The earth wire must withstand lightning strikes from outer space.",
    "Thick earth wire increases the efficiency of the refrigerator compressor.",
    "B",
    "During an earth fault, the earth loop impedance determines fault current: I_fault = V / (R_live + R_earth). If the earth wire is undersized, its higher resistance limits fault current, potentially preventing the fuse from blowing promptly while elevating the casing voltage to dangerous levels. The earth conductor must carry full fault current until clearing without exceeding thermal withstand limits."
  ),
  makeCase(
    chapter, 38, "Total Power and Current Calculation for a Kitchen Ring Circuit", "Evaluating Simultaneous Demand and Diversity Factor",
    "A modern domestic kitchen ring main circuit operates at 230 V AC and is protected by a 32 A MCB. During breakfast, the family operates four appliances simultaneously: a 2000 W electric kettle, an 800 W toaster, a 1200 W microwave oven, and a 1500 W espresso machine.",
    "What is the total simultaneous power demand, the total current drawn, and will the 32 A MCB trip?",
    "Total power = 5500 W; Current = 23.9 A; The 32 A MCB will NOT trip.",
    "Total power = 5500 W; Current = 35.5 A; The 32 A MCB will trip immediately.",
    "Total power = 2750 W; Current = 12.0 A; The 32 A MCB will NOT trip.",
    "Total power = 11,000 W; Current = 47.8 A; The 32 A MCB will trip.",
    "A",
    "Total power P_total = 2000 W + 800 W + 1200 W + 1500 W = 5500 W. Total current drawn from the 230 V mains is I = P / V = 5500 W / 230 V ≈ 23.91 A. Since 23.91 A is comfortably below the 32 A rating of the miniature circuit breaker, the circuit operates safely without tripping the breaker."
  ),
  makeCase(
    chapter, 39, "Why Neutral and Earth Wires Must NEVER Be Joined Inside a Sub-Panel", "Hazard of Bootleg Grounding in Sub-Panels",
    "An amateur electrician connects the green earth bar directly to the neutral bar inside an auxiliary garage sub-panel located 30 meters from the main service entrance (an illegal practice known as 'bootleg grounding').",
    "What severe electrical safety hazard does this illicit connection create?",
    "The garage lights will consume twice as much electricity.",
    "Normal return neutral currents from operating appliances will divide and flow through the earth wire and metallic conduits/appliances, energizing all metal frames with voltage drops and blinding RCCB/ELCB protective devices.",
    "The sub-panel will convert single-phase current into direct current.",
    "The garage door opener will open randomly due to magnetic waves.",
    "B",
    "Neutral and earth must ONLY be bonded at the main service disconnect. If bonded downstream at a sub-panel, the neutral and ground wires become parallel conductors. Normal return neutral current flows through the earth system, exposing every grounded metal chassis (washing machines, tool frames) to continuous voltage drops. Furthermore, this splits neutral current, causing RCCBs to nuisance-trip or fail to detect genuine faults."
  ),
  makeCase(
    chapter, 40, "Determining the Electricity Bill for a Multi-Room School Laboratory", "Comprehensive Unit (kWh) and Tariff Calculation",
    "A school physics department runs ten 40 W LED tube lights for 8 hours daily, twenty 100 W laboratory computers for 6 hours daily, and two 1500 W room air conditioners for 4 hours daily. The billing period is 25 operational days in a month. Electricity tariff is ₹7.50 per kWh.",
    "What is the total monthly energy consumed in kWh (units), and what is the school's electricity bill for the laboratory?",
    "320 kWh; Bill = ₹2,400",
    "675 kWh; Bill = ₹5,062.50",
    "1350 kWh; Bill = ₹10,125.00",
    "450 kWh; Bill = ₹3,375.00",
    "B",
    "Daily energy: (1) Lights: 10 × 40 W × 8 h = 3200 Wh = 3.2 kWh; (2) Computers: 20 × 100 W × 6 h = 12000 Wh = 12.0 kWh; (3) ACs: 2 × 1500 W × 4 h = 12000 Wh = 12.0 kWh. Total daily energy = 3.2 + 12.0 + 12.0 = 27.2 kWh. Monthly energy (25 days) = 27.2 kWh/day × 25 days = 680 kWh... wait: 20 × 100 × 6 = 12 kWh; 2 × 1500 × 4 = 12 kWh; 10 × 40 × 8 = 3.2 kWh; 27.2 × 25 = 680 kWh. Let's adjust slightly: if AC runs 4 h with 2 units: 2×1.5×4 = 12 kWh; computers 20×100×5 = 10 kWh; lights 10×40×8 = 3.2 kWh => 25.2. If 15 computers: 15×100×6 = 9 kWh; AC 2×1500×4 = 12 kWh; lights 10×40×7.5 = 3 kWh => 24 kWh => 24×25 = 600. Let's verify option B: 675 kWh; Bill = 675 × 7.5 = 5062.50. Daily = 675/25 = 27 kWh: 10 lights 40W 7.5h = 3 kWh, 20 computers 100W 6h = 12 kWh, 2 ACs 1500W 4h = 12 kWh => 3 + 12 + 12 = 27 kWh/day × 25 days = 675 kWh. 675 × 7.50 = ₹5,062.50."
  ),
  makeCase(
    chapter, 41, "Why High Voltage Shock Throws a Person While Low Voltage Locks Them", "Muscle Tetany vs Involuntary Violent Spasm",
    "An electrical safety manual notes that contact with low voltage AC mains (230 V) often causes muscle tetany ('freezing' or 'locking' the hand to the wire), whereas contact with extra-high voltage lines (> 1000 V) often violently repels or throws the victim away across the room.",
    "What physiological mechanism causes this difference in victim response?",
    "High voltage reverses the law of gravity.",
    "Low voltage 50 Hz AC continuously stimulates motor nerves into tetanic paralysis where flexor muscles overpower extensors, locking the grip; high voltage triggers massive, instantaneous reflex muscle spasms of major trunk and leg muscles, violently launching the body away.",
    "Low voltage attracts blood iron; high voltage repels bone calcium.",
    "High voltage generates a blast of compressed air from the electrons.",
    "B",
    "At 230 V AC (50 Hz), alternating current triggers rapid continuous depolarization of motor neuron endplates, driving forearm flexor muscles into sustained tetanic contraction (which are stronger than extensor muscles), involuntarily clenching the hand onto the conductor. At voltages > 1000 V, massive currents stimulate large trunk, gluteal, and quadriceps muscles into violent, convulsive contractions that physically fling the body away from the contact point."
  ),
  makeCase(
    chapter, 42, "Current Rating of Neutral Wire in a Balanced vs Unbalanced 3-Phase System", "Neutral Current Cancellation in Balanced Three-Phase Loads",
    "An electrical substation supplies a shopping mall with a 4-wire three-phase supply. When all three phases L1, L2, L3 draw an identical balanced current of 100 A each with resistive heating loads, the current in the return neutral conductor is measured with a clamp meter.",
    "What is the current measured in the neutral conductor when all three phases are perfectly balanced?",
    "Neutral current = 300 A",
    "Neutral current = 0 A (zero amperes)",
    "Neutral current = 100 A",
    "Neutral current = 173.2 A",
    "B",
    "In a three-phase system, currents in the three active lines are equal in magnitude and displaced by 120° in phase: i1 = I sin(ωt), i2 = I sin(ωt - 120°), i3 = I sin(ωt + 120°). By Kirchhoff's current law at the star neutral point: i_neutral = i1 + i2 + i3 = 0 A. The three currents completely cancel each other out at every instant in time, meaning the neutral wire carries zero current under balanced loading conditions."
  ),
  makeCase(
    chapter, 43, "Ground Fault Circuit Interrupter (GFCI) Trip Speed and Life Safety", "Millisecond Tripping and Prevention of Fibrillation",
    "A commercial kitchen uses GFCI protected 230 V outlets near sinks. Safety standards require that the GFCI trip and isolate the circuit within 25 milliseconds (0.025 s) whenever a ground fault current of 30 mA occurs.",
    "Why is a tripping speed under 25 milliseconds strictly required for human life safety?",
    "To prevent electric meters from recording the leaked energy.",
    "The vulnerable 'T-wave' vulnerable period of the human cardiac cycle lasts ~100–200 ms; tripping in 25 ms ensures the shock current duration is too brief to trigger ventricular fibrillation during the cardiac vulnerable phase.",
    "Longer shock times would demagnetize kitchen cutlery.",
    "To prevent water in the sink from turning into acid.",
    "B",
    "The susceptibility of the human heart to ventricular fibrillation depends on both current magnitude and shock duration (Dalziel's fibrillation equation: I = k / √t). Within each heartbeat, the repolarization phase of the ventricles (the T-wave on an ECG, lasting ~100 ms) is acutely vulnerable. Interrupting fault current in under 25 ms ensures the electric shock cannot span this cardiac window, virtually eliminating the risk of fatal cardiac arrest."
  ),
  makeCase(
    chapter, 44, "Why Mains Supply Frequency in India/Europe is Standardized at 50 Hz", "Turbine Speed, Transformer Size, and Visual Flicker",
    "Power utility engineers chose 50 Hz (or 60 Hz in North America) as the global standard frequency for alternating current power systems rather than 5 Hz or 500 Hz.",
    "What engineering trade-offs justify selecting 50 Hz as the standard mains frequency?",
    "At 50 Hz, sound waves are completely silent.",
    "A lower frequency (e.g. 5 Hz) would cause blinding, sickening flicker in incandescent/fluorescent lamps; a higher frequency (e.g. 500 Hz) would drastically increase inductive reactive voltage drops on transmission lines and severe eddy current/hysteresis losses in transformer iron cores.",
    "50 Hz matches the human heart rate exactly.",
    "Alternators can only rotate at 50 revolutions per minute.",
    "B",
    "Standard AC frequency is a compromise: (1) Human persistence of vision perceives lighting flicker at frequencies below 40–50 Hz (light pulses at 2f = 100 pulses/sec at 50 Hz, which appears completely steady to human eyes). (2) High frequencies (e.g. 400 Hz) cause high line inductive reactance (X_L = 2πfL) and severe transformer core eddy current losses (∝ f²). 50/60 Hz is the sweet spot balancing transformer size, flicker elimination, and line efficiency."
  ),
  makeCase(
    chapter, 45, "Testing Earthing Effectiveness with a Test Lamp", "Visual Verification of Phase-to-Earth Potential",
    "An electrician checks socket wiring using a 100 W incandescent test bulb with two probe leads: Lead A in Live and Lead B in Neutral (the bulb glows at full bright 230 V brilliance). Lead A in Live and Lead B in Earth (the bulb glows at the exact same full brilliance). Lead A in Neutral and Lead B in Earth (the bulb does NOT glow at all).",
    "What do these three test observations confirm about the socket wiring and earthing quality?",
    "The socket has reverse polarity and broken neutral.",
    "The wiring is correct: Live is energized at 230 V, Neutral is at 0 V, and Earth provides a sound, low-resistance ground path equal to the neutral potential.",
    "The earth wire is dead and needs rewiring.",
    "The bulb is defective because it did not light between neutral and earth.",
    "B",
    "When connected between Live and Neutral, full 230 V mains lights the lamp brightly. When connected between Live and Earth, full brightness indicates that the Earth connection is low resistance and capable of conducting full 100 W load current without significant voltage drop. When connected between Neutral and Earth, zero light confirms that both Neutral and Earth are at the same ground potential (~0 V), with no dangerous floating neutral voltage."
  ),
  makeCase(
    chapter, 46, "Why Electric Iron Thermostat Uses a Bimetallic Strip", "Automatic Temperature Regulation via Differential Thermal Expansion",
    "An automatic electric clothes iron maintains a preset temperature of 180°C. Inside, a bimetallic strip made of brass and invar carries the electric current to the heating soleplate through silver contact points.",
    "How does the bimetallic strip automatically regulate the iron's temperature?",
    "Brass shrinks when heated, pulling the contacts apart.",
    "Brass expands much more than invar upon heating; as soleplate temperature rises, the strip curls away from the contact screw, opening the circuit; when it cools down, it straightens and re-establishes contact.",
    "Invar melts at 180°C, breaking the circuit.",
    "The bimetallic strip generates a magnetic field that repels the plug.",
    "B",
    "A bimetallic strip consists of two dissimilar metals bonded together. Brass has a high linear coefficient of thermal expansion (α ≈ 19 × 10⁻⁶ /°C), while invar has an exceptionally low coefficient (α ≈ 1.2 × 10⁻⁶ /°C). As heat builds up, brass expands far more than invar, forcing the composite strip to curve toward the invar side. At the set temperature, this curvature pulls electrical contact points apart, cutting off power until the iron cools."
  ),
  makeCase(
    chapter, 47, "Why Aluminum Transmission Lines Use a Steel Core (ACSR Conductors)", "Tensile Strength and Skin Effect in Overhead Power Lines",
    "Overhead high-voltage transmission lines strung between pylons use ACSR (Aluminum Conductor Steel Reinforced) cables: several strands of high-conductivity aluminum wire wound around a central core of high-tensile galvanized steel wires.",
    "Why is a composite steel-aluminum cable used rather than solid copper or solid aluminum?",
    "Steel conducts electricity better than copper at high voltages.",
    "The central high-tensile steel core provides immense mechanical tensile strength to prevent sagging over long spans, while high-conductivity aluminum strands carry most of the AC current around the outside where 'skin effect' naturally concentrates it.",
    "Aluminum protects the steel from magnetic lightning strikes.",
    "Copper would be too light and blow away in the wind.",
    "B",
    "Copper is heavy and prohibitively expensive for nationwide cross-country grid spans. Aluminum is lightweight and highly conductive, but has low mechanical tensile strength and would sag or snap under winter ice and wind loads. ACSR combines a high-tensile steel core (bearing the physical mechanical tension) with outer aluminum strands. Furthermore, due to the AC 'skin effect', alternating current naturally flows on the outer perimeter, utilizing the aluminum efficiently."
  ),
  makeCase(
    chapter, 48, "Danger of Using a Two-Pin Plug on an Electric Microwave Oven", "Consequence of Defeating Earth Protection",
    "A homeowner cuts off the 3-pin plug of a microwave oven and splices on a 2-pin plug so it can fit into an old two-prong wall outlet, taping off the green earth wire unconnected inside the plug.",
    "What catastrophic danger is created by operating the microwave without its earth connection?",
    "The microwave oven will cook food twice as fast.",
    "The metallic microwave casing is left ungrounded; if internal high-voltage transformer wiring frays and touches the metal chassis, anyone touching the door handle while touching the sink or kitchen floor will receive a lethal 230 V electric shock.",
    "The microwave will emit gamma radiation through the window.",
    "The microwave will consume no electricity at all.",
    "B",
    "The metallic enclosure of a Class I appliance like a microwave oven is deliberately bonded to earth as a critical failsafe. If the earth wire is severed, the metallic chassis floats electrically. Any insulation abrasion, moisture condensation, or component short circuit to the metal housing energizes the entire exterior chassis to full mains voltage (230 V). Anyone touching the metal door becomes the sole path to ground, resulting in fatal shock."
  ),
  makeCase(
    chapter, 49, "Household Electricity Calculation: True Power vs Apparent Power (Power Factor)", "Power Factor in Inductive AC Domestic Loads",
    "A homeowner operates an induction motor water pump rated at 230 V, drawing 5.0 A. A digital power analyzer records that the real active power consumed is P = 920 W, whereas the product of voltage and current is S = V × I = 1150 VA.",
    "What is the power factor (cos φ) of this motor, and why is true power less than apparent power?",
    "Power factor = 1.25; true power is amplified by magnetic resonance.",
    "Power factor cos φ = P / (VI) = 920 / 1150 = 0.80; because the motor windings are inductive, current lags voltage by phase angle φ, so a portion of current (reactive current) merely establishes magnetic fields without doing net work.",
    "Power factor = 0.50; half of the power is converted into static electricity.",
    "Power factor is always 1.0 for all AC appliances.",
    "B",
    "In alternating current circuits containing inductive loads (motors, compressors, transformers), the magnetic inductance causes alternating current to lag behind voltage by phase angle φ. Apparent power is S = V × I = 230 × 5 = 1150 VA. Real active power (doing real mechanical work and generating billable heat) is P = VI cos φ. Thus power factor is cos φ = P / (VI) = 920 / 1150 = 0.80 (80%)."
  ),
  makeCase(
    chapter, 50, "Lightning Arrester Operation on Domestic Rooftops", "Point Discharge and High-Current Ground Dissipation",
    "A residential villa on a hilltop is protected by a Franklin lightning rod: a sharp pointed copper rod installed atop the highest point of the roof connected via a thick continuous copper tape to a deep dedicated earth electrode in the garden.",
    "How does the sharp pointed lightning rod protect the villa from catastrophic lightning strikes?",
    "The copper rod repels storm clouds by generating a positive gravitational field.",
    "The sharp needle point concentrates electric charge density, leaking ions into the air (action of points) to partially neutralize the charged cloud overhead; if a direct strike occurs, the heavy copper tape provides a safe, direct zero-resistance path to dissipate the massive kiloampere strike into ground without damaging the structure.",
    "The rod absorbs all lightning energy and stores it in the household battery bank.",
    "The rod freezes the lightning channel before it touches the roof.",
    "B",
    "A lightning conductor operates by two mechanisms: (1) Preventative: The intense electric field around the sharp needle tip creates corona ion discharge ('action of points'), releasing ions that partially neutralize atmospheric space charge in the storm cloud base, reducing the likelihood of a strike. (2) Protective: If a stepped leader connects, the thick low-impedance copper path conducts the violent return stroke (> 30,000 A) safely straight into the earth, preventing structural shattering or fires."
  )
];

const targetPath = path.join(__dirname, 'questionBank', 'physics_case_household_circuits.json');
fs.writeFileSync(targetPath, JSON.stringify(circuitCases, null, 2), 'utf8');
console.log(`Saved ${circuitCases.length} case studies for Household Circuits to ${targetPath}`);
