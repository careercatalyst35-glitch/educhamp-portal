// ar_data_3.js - Assertion-Reasoning Question Bank for Chapters 9 to 12
// ICSE Class 10 Physics

module.exports = {
  household_circuits: [
    {
      title: 'High voltage electrical power transmission',
      a: 'Electric power generated at power stations is stepped up to high voltages (e.g. 132 kV or 220 kV) before long-distance transmission.',
      r: 'Stepping up voltage reduces transmission current for a given power (P = VI), dramatically minimizing I²R heating losses in cables.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Power loss in cables is P_loss = I²R. Transmitting at high voltage reduces current I proportionally, drastically reducing I²R loss.'
    },
    {
      title: 'Switch connected in live wire',
      a: 'An electric switch must always be installed in the live conductor, never in the neutral conductor.',
      r: 'When the switch is placed in the live wire and turned OFF, the entire appliance is completely disconnected from high potential, preventing electric shock.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and ensuring zero potential at the appliance when the switch is OFF is the essential personal safety rationale.'
    },
    {
      title: 'Hazard of switch in neutral wire',
      a: 'If a switch is mistakenly connected in the neutral wire, an appliance remains live at 220 V even when the switch is turned OFF.',
      r: 'The live wire remains permanently connected directly to the appliance, so touching an internal heating element completes a fatal circuit to Earth.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and continuous live wire connection explains why neutral switching is dangerous.'
    },
    {
      title: 'Earth pin thickness and length',
      a: 'The earth pin in a standard three-pin plug is made thicker and longer than the live and neutral pins.',
      r: 'Being longer, the earth pin enters the socket first to ground the metal casing before live contact is made, and being thicker, it cannot enter live or neutral sockets.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and prior grounding plus anti-mismating geometry explains both the longer length and thicker diameter.'
    },
    {
      title: 'Earthing of electrical appliances',
      a: 'Metal casings of high-power domestic appliances like refrigerators, irons, and toasters must be securely connected to the earth wire.',
      r: 'In case of damaged insulation, the metal casing becomes live; the earth wire provides a path of very low resistance, draining current and blowing the fuse.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and low-resistance fault current triggering fuse blowout prevents severe electric shock to the user.'
    },
    {
      title: 'Fuse rating selection',
      a: 'A 2 kW electric geyser operating on a 220 V supply should be protected by a 13 A or 15 A fuse rather than a 5 A fuse.',
      r: 'The normal operating current drawn by the geyser is I = P/V = 2000 / 220 ≈ 9.1 A, which would immediately melt a 5 A fuse.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and operating current of 9.1 A requires a fuse rated slightly above 9.1 A (10 A to 15 A).'
    },
    {
      title: 'Ring system of wiring advantages',
      a: 'The ring distribution system of domestic wiring is preferred over the older tree system.',
      r: 'In a ring system, current can reach any appliance through two parallel paths, allowing thinner wires and individual fuses for each appliance.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dual current paths saving cable thickness while enabling isolated fuses justify the ring system.'
    },
    {
      title: 'Parallel connection of household lamps',
      a: 'All light bulbs in a house are connected in parallel across the electrical distribution board.',
      r: 'In parallel wiring, if one bulb burns out, the remaining bulbs continue to operate unaffected at full mains voltage.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and independent branch operation at full 220 V voltage explains parallel domestic wiring.'
    },
    {
      title: 'Fuse placed before switch',
      a: 'A domestic fuse is connected in the live wire before the consumer distribution switch.',
      r: 'Placing the fuse first protects the switch, wiring, and appliance against overcurrent and short circuits.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and upstream placement protects both the switch mechanism and downstream wiring.'
    },
    {
      title: 'MCB vs fuse wire',
      a: 'Miniature Circuit Breakers (MCBs) are widely preferred over traditional rewireable fuses in modern electrical panels.',
      r: 'An MCB trips automatically within milliseconds upon overload or short circuit, and can be easily reset by toggling a lever without replacing wire.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and fast automatic electromagnetic/thermal trip plus convenient manual reset explains MCB adoption.'
    },
    {
      title: 'Color coding of wires in three-core cable',
      a: 'Under the new international color code convention, the live wire is brown, neutral is light blue, and earth is green and yellow.',
      r: 'Harmonized color coding allows easy visual identification to prevent dangerous miswiring of appliances.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and international safety standardization explains the brown, light blue, and green-yellow scheme.'
    },
    {
      title: 'Three-pin socket wiring layout',
      a: 'When viewing a standard three-pin wall socket from the front, the live terminal is on the right.',
      r: 'The top large hole is for earth, the bottom right is for live, and the bottom left is for neutral.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the standard socket pin assignment (E top, L right, N left) confirms the assertion.'
    },
    {
      title: 'Thick copper wire cannot be used as fuse',
      a: 'A thick copper wire should never be used as a replacement for a blown fuse wire.',
      r: 'A thick copper wire has very low resistance and a very high melting point, so it will not melt during overload, risking house fire.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and failure to melt under excessive current destroys the protective role of the fuse.'
    },
    {
      title: 'Two-pin plug limitations',
      a: 'Appliances with double-insulated plastic bodies (like hair dryers or mobile phone chargers) safely use two-pin plugs.',
      r: 'Double-insulated appliances have no exposed metal casing, eliminating the risk of shock from casing contact, so an earth wire is unnecessary.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and non-conductive all-plastic bodies eliminate the need for grounding wires.'
    },
    {
      title: 'Local earthing at consumer premises',
      a: 'Local earthing is installed near the electricity meter by burying a thick copper plate in a pit surrounded by charcoal and salt.',
      r: 'Charcoal and salt maintain moisture in the surrounding soil, ensuring a permanent path of very low electrical resistance to deep earth.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and moisture retention by charcoal/salt maintaining low grounding resistance explains the pit construction.'
    },
    {
      title: 'Company fuse on pole',
      a: 'The service company fuse (pole fuse) has a higher current rating than any individual consumer sub-circuit fuse.',
      r: 'The company fuse must carry the total simultaneous load current drawn by the entire household without blowing under normal operation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and carrying aggregate household current requires a higher rating (e.g. 50 A or 60 A) than branch fuses.'
    },
    {
      title: 'Electricity meter location',
      a: 'The kWh electricity meter is installed after the service fuse and before the consumer\'s main switch.',
      r: 'Placing the meter before the main switch allows it to record all electrical energy delivered to the premises, while being protected by the service fuse.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and measuring total consumption while protected by the pole fuse explains the sequence.'
    },
    {
      title: 'Main double-pole switch function',
      a: 'The main switch in a house distribution board is a double-pole (DP) switch that cuts both live and neutral simultaneously.',
      r: 'Cutting both live and neutral ensures that the internal household wiring is completely isolated from the external supply during maintenance.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and simultaneous isolation of both conductors provides absolute safety during repair.'
    },
    {
      title: 'Staircase switch wiring',
      a: 'A staircase lighting circuit allows a lamp to be turned ON or OFF independently from either the top or bottom of the stairs.',
      r: 'A staircase circuit uses two two-way single-pole double-throw (SPDT) switches connected by dual traveler wires.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dual-pole two-way switching explains bidirectional control of a single light.'
    },
    {
      title: 'Fuse rating independent of length',
      a: 'The current rating of a fuse wire depends on its diameter and material, but is practically independent of its length.',
      r: 'Heat produced per second (I²R ∝ l) and heat radiated per second (area ∝ l) are both directly proportional to length, so length cancels out in the thermal balance equation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The equilibrium equation I²(4ρl/πd²) = h(πdl)(T - T₀) has l on both sides, making the blowing current independent of length.'
    },
    {
      title: 'Fuse wire alloy composition',
      a: 'A fuse wire is commonly made of an alloy of lead and tin (63% tin, 37% lead).',
      r: 'The lead-tin alloy has a low melting point (approx. 200°C) and a higher resistivity than pure copper, making it ideal for rapid melting.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and low melting point combined with adequate resistivity ensures rapid fusing under overload.'
    },
    {
      title: 'Earthing does not consume electrical energy',
      a: 'An intact earth wire in normal operation carries zero current and does not consume any electrical energy.',
      r: 'In a properly functioning appliance, all current enters through the live wire and returns through the neutral wire; current flows in earth wire only during a fault.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and fault-only conduction explains zero energy consumption during normal operation.'
    },
    {
      title: 'Separate circuits for power vs lighting',
      a: 'In a house, heavy appliances (geysers, ACs) are wired in a separate 15 A power circuit from the 5 A lighting circuit.',
      r: 'Separating circuits prevents high starting currents of heavy appliances from causing voltage dips or blowing the lighting fuse.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and isolating heavy loads prevents nuisance tripping and voltage flickering in lighting.'
    },
    {
      title: 'Socket shutter mechanism',
      a: 'Modern three-pin safety sockets have spring-loaded shutters covering the live and neutral holes.',
      r: 'The shutters are designed to open only when the longer earth pin enters the top hole first, preventing children from inserting objects into live slots.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and mechanical interlock triggered by earth pin entry protects children from shock.'
    },
    {
      title: 'Neutral wire potential',
      a: 'The neutral wire of the domestic supply is maintained at approximately zero volts potential relative to Earth.',
      r: 'The neutral wire is connected to an earth pit at the local distribution transformer substation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and grounding of the neutral line at the local substation holds its potential near zero volts.'
    },
    {
      title: 'Live wire dangerous to touch',
      a: 'Touching the live wire of a 220 V domestic circuit while standing barefoot on a moist floor can be fatal.',
      r: 'Moist ground and bare feet provide a low-resistance path to Earth, allowing a dangerous current (>50 mA) to pass through the body across the 220 V potential difference.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and low body-to-ground resistance completing a 220 V path explains electrocution.'
    },
    {
      title: 'High resistance in appliance connections hazard',
      a: 'A loose screw connection in a high-current wall socket can cause the plug to overheat and melt.',
      r: 'A loose contact introduces high localized contact resistance, generating intense Joule heating (I²R_contact) under heavy current.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and localized contact resistance creating high I²R heat at the plug pins causes thermal melting.'
    },
    {
      title: 'Residual Current Circuit Breaker (RCCB)',
      a: 'An RCCB (Residual Current Circuit Breaker) trips to protect against electrocution even when the current drawn is below the fuse rating.',
      r: 'An RCCB continuously compares current in the live wire and neutral wire, tripping if a leakage imbalance as small as 30 mA occurs.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and differential current sensing detecting tiny leakage currents through a human body explains RCCB sensitivity.'
    },
    {
      title: 'Overloading definition',
      a: 'Connecting too many high-power appliances simultaneously to a single multi-plug socket causes electrical overloading.',
      r: 'Total current drawn from the supply exceeds the safe current carrying capacity of the socket and connecting wires, causing severe overheating.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and aggregate current exceeding wire capacity defines electrical overloading.'
    },
    {
      title: 'Short circuit definition',
      a: 'A short circuit occurs when a bare live wire accidentally comes into direct physical contact with a bare neutral wire.',
      r: 'Direct contact creates a circuit of almost zero resistance, causing an immediate surge of extremely high current.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and zero resistance causing an instantaneous massive current surge defines a short circuit.'
    },
    {
      title: 'Electricity consumption billing unit',
      a: 'Electricity supply bills are calculated based on the total number of kilowatt-hours (units) consumed.',
      r: 'One kilowatt-hour (1 kWh) represents 1000 watts of electrical power consumed continuously over an interval of one hour.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the definition of a Board of Trade unit (1 kWh = 1 unit) explains billing calculation.'
    },
    {
      title: 'Earthing of bathroom water heater',
      a: 'Earthing the metallic body of an electric water geyser in a bathroom is critically important for life safety.',
      r: 'Water and wet human skin have very low electrical resistance, vastly increasing the current that would pass through the body in case of a casing fault.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and lower body resistance in wet conditions creating extreme shock danger highlights the need for earthing.'
    },
    {
      title: 'Three-pin plug casing material',
      a: 'The outer casing of a three-pin plug is made of hard moulded plastic or rubber.',
      r: 'Plastic and rubber are excellent electrical insulators that prevent the user from making contact with internal live terminals.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and high dielectric insulation preventing electric shock during handling explains casing material.'
    },
    {
      title: 'Fuse rating vs appliance power',
      a: 'A 60 W light bulb on a 220 V supply requires a fuse rated at only 1 A or 2 A.',
      r: 'Operating current I = P/V = 60 / 220 ≈ 0.27 A, so a 1 A fuse provides ample margin without blowing during minor fluctuations.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and 0.27 A operating current is safely protected by a 1 A fuse.'
    },
    {
      title: 'Earth wire resistance requirement',
      a: 'The electrical resistance of the earth wire connection must be as close to zero as possible (typically < 1 Ω).',
      r: 'The earth wire must offer a much lower resistance path than the human body (which has a resistance of roughly 1000 Ω to 100,000 Ω).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and low impedance compared to human body ensures fault current diverts safely to ground.'
    },
    {
      title: 'Dual voltage systems',
      a: 'Appliances manufactured for 110 V countries (like USA) cannot be plugged directly into 220 V Indian mains without a step-down transformer.',
      r: 'Applying 220 V to a 110 V rated appliance quadruples the power dissipated (P = V²/R), instantly burning out internal circuits.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since P = V²/R, doubling voltage quadruples power dissipation (220/110)² = 4, destroying 110 V windings.'
    },
    {
      title: 'Ring main continuity',
      a: 'In a ring main circuit, an accidental break at one point in the ring cable does not cause the appliances on the ring to stop working.',
      r: 'Electricity can still reach every socket on the ring along the other unbroken branch of the loop.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and redundant closed-loop topology ensures power continuity even if a break occurs at one spot.'
    },
    {
      title: 'Color of neutral wire in old Indian convention',
      a: 'Under the old Indian wiring code, the neutral wire was black and the earth wire was green.',
      r: 'Old wiring conventions used red for live, black for neutral, and green for earth.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the historic Indian/British standard color coding confirms black for neutral and green for earth.'
    },
    {
      title: 'Cartridge fuse design',
      a: 'Cartridge fuses used in electronic equipment have a glass or ceramic tube with metal end caps and internal quartz sand.',
      r: 'The silica sand extinguishes electric arcs formed when the fuse wire vaporizes under heavy short-circuit currents.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and silica sand quenching arcs and preventing glass explosion explains cartridge fuse construction.'
    },
    {
      title: 'High tension cable earthing',
      a: 'High-voltage transmission pylons carry a top grounded shield wire.',
      r: 'The top shield wire intercepts direct lightning strikes and safely diverts electrical surges down the pylon tower to earth.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and lightning strike interception protecting underlying phase lines explains overhead shield wires.'
    }
  ],

  electromagnetism: [
    {
      title: 'Oersted\'s experiment magnetic effect',
      a: 'A magnetic compass needle placed parallel beneath a wire deflects when an electric current is passed through the wire.',
      r: 'An electric current flowing through a conductor sets up a circular magnetic field in the surrounding space.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the creation of an ambient magnetic field by moving charges explains compass deflection.'
    },
    {
      title: 'Right-hand thumb rule for magnetic field',
      a: 'The direction of magnetic field lines around a straight current-carrying wire can be determined by the Right-Hand Thumb Rule.',
      r: 'If the thumb of the right hand points in the direction of current, the curled fingers indicate the direction of circular magnetic field lines.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and curled fingers representing magnetic field vector circulation defines the right-hand thumb rule.'
    },
    {
      title: 'Soft iron core in electromagnet',
      a: 'Soft iron is universally used as the magnetic core of an electromagnet instead of hard steel.',
      r: 'Soft iron has high magnetic permeability and very low retentivity, magnetizing strongly when current flows and demagnetizing instantly when current stops.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and rapid, strong magnetization with near-zero residual magnetism explains soft iron in electromagnets.'
    },
    {
      title: 'Steel for permanent magnets',
      a: 'Steel or Alnico alloys are preferred over soft iron for making permanent bar magnets.',
      r: 'Steel has high magnetic retentivity (coercivity) and retains its magnetic strength permanently once magnetized.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and high coercivity resisting demagnetization justifies steel for permanent magnets.'
    },
    {
      title: 'Lorentz magnetic force on a charge',
      a: 'A stationary electric charge placed inside a strong uniform magnetic field experiences zero magnetic force.',
      r: 'The magnetic force on a charge is given by F = q·v·B·sinθ, which is zero when velocity v = 0.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and F = qvB sinθ requires non-zero charge velocity relative to the magnetic field to experience force.'
    },
    {
      title: 'Parallel wire force orientation',
      a: 'Two straight parallel wires carrying currents in the same direction attract each other.',
      r: 'Applying the right-hand thumb rule and Fleming\'s left-hand rule reveals a mutually inward magnetic force between parallel currents.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and magnetic fields interacting to produce inward Ampère force between co-directional currents confirms attraction.'
    },
    {
      title: 'Anti-parallel currents repulsion',
      a: 'Two parallel wires carrying currents in opposite directions repel each other.',
      r: 'Opposite currents create opposing magnetic field directions in the space between the wires, producing an outward repulsive force.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and magnetic field vector analysis using Fleming\'s left-hand rule demonstrates outward repulsion.'
    },
    {
      title: 'Fleming\'s Left-Hand Rule motor action',
      a: 'Fleming\'s Left-Hand Rule is used to determine the direction of motion of a current-carrying conductor in a magnetic field.',
      r: 'Holding the thumb, forefinger, and central finger mutually perpendicular: Forefinger points to Field, Center finger to Current, and Thumb to Motion/Force.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and FBI (Forefinger-Field, Center-Current, Thumb-Force) defines Fleming\'s Left-Hand Rule.'
    },
    {
      title: 'DC motor commutator function',
      a: 'The split-ring commutator in a DC motor reverses the direction of current in the armature coil every half-turn.',
      r: 'Reversing current every half-turn ensures that the torque acting on the two arms of the coil continues in the same rotational sense.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and continuous unidirectional rotation achieved by periodic current reversal is the core role of commutators.'
    },
    {
      title: 'Electromagnetic induction Faraday\'s law',
      a: 'An electric current is induced in a closed coil whenever the magnetic flux linked with the coil changes with time.',
      r: 'The magnitude of induced electromotive force is directly proportional to the rate of change of magnetic flux (E = -dΦ/dt).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Faraday\'s law of induction confirms that time rate of flux change induces EMF.'
    },
    {
      title: 'Lenz\'s law and conservation of energy',
      a: 'Lenz\'s law states that the direction of an induced current always opposes the magnetic flux change producing it.',
      r: 'Lenz\'s law is a direct consequence of the universal law of conservation of energy.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Work must be done against the opposing induced magnetic field to generate electrical energy, conserving total energy.'
    },
    {
      title: 'Fleming\'s Right-Hand Rule generator action',
      a: 'Fleming\'s Right-Hand Rule is used to find the direction of induced current in an AC or DC generator.',
      r: 'When thumb points to motion and forefinger to magnetic field, the central finger indicates the direction of induced current.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Right-Hand Rule for induced current (Generator rule) defines the direction.'
    },
    {
      title: 'Transformer mutual induction principle',
      a: 'A transformer operates on the principle of mutual electromagnetic induction between two independent coils.',
      r: 'An alternating current in the primary coil generates a continuously changing magnetic flux that links the secondary coil through the iron core.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and alternating flux linkage between primary and secondary windings explains transformer action.'
    },
    {
      title: 'Transformer with DC supply failure',
      a: 'A transformer cannot be used to step up or step down a steady direct current (DC).',
      r: 'A steady DC produces a constant, unchanging magnetic flux, resulting in zero rate of change of flux (dΦ/dt = 0) and zero induced EMF in the secondary.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dΦ/dt = 0 for steady DC explains why secondary voltage is zero.'
    },
    {
      title: 'Laminated iron core in transformer',
      a: 'The soft iron core of a transformer is constructed from thin, varnished laminated sheets rather than a single solid block.',
      r: 'Laminations break the continuous conductive path for circulating eddy currents, drastically reducing I²R heat losses in the core.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and interrupting eddy current loops with insulated laminations minimizes core losses.'
    },
    {
      title: 'Step-up transformer turns ratio',
      a: 'In a step-up transformer, the secondary voltage is greater than the primary voltage (V_s > V_p), but secondary current is smaller (I_s < I_p).',
      r: 'Assuming an ideal transformer with 100% efficiency, output power equals input power (V_s·I_s = V_p·I_p), in accordance with energy conservation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and conservation of power (P_in = P_out) means voltage gain is accompanied by current reduction.'
    },
    {
      title: 'AC generator slip rings function',
      a: 'An AC generator uses continuous brass slip rings with carbon brushes to collect current from the rotating armature.',
      r: 'Slip rings maintain unbroken contact with the coil ends, allowing the naturally reversing alternating current to pass directly to the external circuit.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and unbroken slip rings preserving the alternating waveform explain AC generation.'
    },
    {
      title: 'DC generator split-ring commutator',
      a: 'A DC generator uses a split-ring commutator instead of continuous slip rings.',
      r: 'The split-ring commutator reverses external brush connections at the instant the induced EMF changes polarity, providing unidirectional pulsating current.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and full-wave mechanical rectification by split rings produces unidirectional DC output.'
    },
    {
      title: 'Electric bell armature oscillation',
      a: 'An electric bell rings continuously as long as the push button is held down.',
      r: 'The circuit is repeatedly made and broken by the contact screw and moving iron armature as the electromagnet magnetizes and demagnetizes.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and self-interrupting circuit breaker action of the contact screw causes rapid gong striking.'
    },
    {
      title: 'Magnetic field inside a long solenoid',
      a: 'The magnetic field inside a long, tightly wound current-carrying solenoid is uniform and strong.',
      r: 'Inside the solenoid, the magnetic field lines are straight, parallel, and closely spaced along the central axis.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and parallel equidistant field lines indicate a uniform magnetic field.'
    },
    {
      title: 'Clock rule for circular loop polarity',
      a: 'If current flows in a clockwise direction when looking directly at the face of a circular loop, that face behaves as a South magnetic pole.',
      r: 'Clockwise current generates inward directed magnetic lines of force, analogous to magnetic flux entering the South pole of a bar magnet.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and clockwise current matching flux ingress defines South polarity by the Clock Face Rule.'
    },
    {
      title: 'Anticlockwise current North pole',
      a: 'If current in a circular coil circulates in an anticlockwise direction, that face behaves as a North magnetic pole.',
      r: 'Magnetic field lines emerge outward from an anticlockwise current face, identical to flux emerging from the North pole of a magnet.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and emerging flux outward defines North magnetic pole behavior.'
    },
    {
      title: 'Eddy currents induction',
      a: 'When a solid copper disc swings between the poles of a strong electromagnet, its motion is rapidly damped to a dead stop.',
      r: 'Circulating eddy currents induced in the copper disc create opposing magnetic fields according to Lenz\'s law (electromagnetic damping).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Lenz\'s law opposition from induced eddy currents dissipates kinetic energy into heat.'
    },
    {
      title: 'Induction cooktop efficiency',
      a: 'Induction cooktops heat ferromagnetic pans rapidly without heating the ceramic glass cooktop directly.',
      r: 'High-frequency alternating magnetic fields induce strong eddy currents in the pan\'s iron base, generating localized Joule heat.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and eddy current generation in the ferromagnetic base explains direct pan heating.'
    },
    {
      title: 'Step-down transformer in mobile phone charger',
      a: 'Mobile phone adapters use step-down transformers to convert 220 V AC mains down to 5 V AC before rectification.',
      r: 'In a step-down transformer, the number of turns in the primary coil is vastly greater than the number of turns in the secondary (N_p >> N_s).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. V_s/V_p = N_s/N_p, so fewer secondary turns steps down 220 V to safe 5 V levels.'
    },
    {
      title: 'Stationary magnet inside coil',
      a: 'When a strong bar magnet is held completely stationary inside a copper coil, zero current is indicated on a sensitive galvanometer.',
      r: 'An induced EMF requires a continuous time rate of change of magnetic flux (dΦ/dt ≠ 0); for a stationary magnet, dΦ/dt = 0.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and zero relative motion producing zero flux change confirms zero induced current.'
    },
    {
      title: 'Speed of moving magnet and induced EMF',
      a: 'Plunging a bar magnet rapidly into a coil produces a much larger galvanometer deflection than moving it in slowly.',
      r: 'According to Faraday\'s law, induced EMF is directly proportional to the rate of change of magnetic flux (E ∝ dΦ/dt).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and higher entry speed increases the time rate dΦ/dt, producing a larger induced voltage.'
    },
    {
      title: 'Force on conductor parallel to magnetic field',
      a: 'A straight wire carrying current placed parallel to a uniform magnetic field experiences zero magnetic force.',
      r: 'The magnetic force is given by F = I·L·B·sinθ; when the conductor is parallel to the field, angle θ = 0° and sin 0° = 0.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and sin(0°) = 0 mathematically proves zero magnetic Lorentz force for parallel orientation.'
    },
    {
      title: 'Maximum force perpendicular orientation',
      a: 'A current-carrying conductor experiences maximum magnetic force when it is placed perpendicular to the magnetic field.',
      r: 'For perpendicular alignment, angle θ = 90° and sin 90° = 1, maximizing F = I·L·B·sinθ.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and sin(90°) = 1 maximizes the Lorentz interaction force.'
    },
    {
      title: 'Electromagnet strength factors',
      a: 'The lifting strength of an electromagnet can be substantially increased by increasing the current and winding more turns of wire.',
      r: 'The magnetic field strength inside a solenoid is directly proportional to both the number of turns per unit length and the current (B = μ·n·I).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and B = μnI confirms that increasing turns and current intensifies the magnetic field.'
    },
    {
      title: 'Reversing current in motor',
      a: 'Reversing both the battery terminals and the magnetic field poles of a DC motor simultaneously leaves its direction of rotation unchanged.',
      r: 'Reversing current reverses the force direction on each arm, and reversing the magnetic field reverses the force direction once again, resulting in no net change.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Two simultaneous sign inversions in Fleming\'s left-hand rule cancel out (-1 × -1 = +1).'
    },
    {
      title: 'Galvanometer to ammeter conversion',
      a: 'A sensitive galvanometer is converted into an ammeter by connecting a very low resistance (shunt) in parallel with its coil.',
      r: 'The low-resistance shunt bypasses the majority of the current, allowing the instrument to measure large currents without damaging the delicate coil.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and low-resistance shunt diversion protects the galvanometer while extending its current range.'
    },
    {
      title: 'Galvanometer to voltmeter conversion',
      a: 'A galvanometer is converted into a voltmeter by connecting a very high resistance in series with its coil.',
      r: 'A high series resistance limits current through the galvanometer and gives the instrument a very large overall resistance, preventing circuit disturbance.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and high series resistance converting current sensitivity into high-voltage measurement defines a voltmeter.'
    },
    {
      title: 'Electric motor back EMF',
      a: 'When an electric motor is running at full operating speed, it draws much less current than when it is starting from rest.',
      r: 'As the motor armature rotates in the magnetic field, it acts as a generator and generates an opposing back EMF (e) that reduces the effective voltage (I = (V - e)/R).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and back EMF opposing mains voltage reduces running current compared to stalled startup current.'
    },
    {
      title: 'Hysteresis loss in magnetic core',
      a: 'Transformer cores are chosen to have a very narrow magnetic hysteresis loop.',
      r: 'Energy dissipated as heat during repeated cycles of magnetization and demagnetization is proportional to the area of the hysteresis loop.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and small hysteresis area minimizing cyclic thermal dissipation explains the choice of soft iron or silicon steel.'
    },
    {
      title: 'Neutral point in magnetic field',
      a: 'At a neutral point near a bar magnet placed in the Earth\'s magnetic field, a compass needle points in no definite direction.',
      r: 'At a neutral point, the horizontal component of Earth\'s magnetic field is equal in magnitude and opposite in direction to the magnet\'s field.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and exact vector cancellation leaving zero resultant magnetic field explains the neutral point.'
    },
    {
      title: 'Solenoid vs bar magnet magnetic field similarity',
      a: 'The magnetic field pattern around a long current-carrying solenoid is virtually identical to that of a bar magnet.',
      r: 'The circular magnetic fields of individual adjacent wire turns reinforce each other internally and form continuous closed loops emerging from one end and entering the other.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and superposed loop fields producing external dipole flux lines identical to a bar magnet validate the assertion.'
    },
    {
      title: 'AC frequency in India',
      a: 'Domestic alternating current supplied in India has a frequency of 50 Hz, reversing its direction 100 times every second.',
      r: 'In each complete AC wave cycle, current changes its direction twice (once positive, once negative), so 50 cycles per second gives 100 reversals.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and two direction reversals per cycle gives 50 × 2 = 100 reversals per second at 50 Hz.'
    },
    {
      title: 'Earth\'s magnetic field angle of dip at poles',
      a: 'A magnetic needle free to rotate in a vertical plane stands exactly vertical (angle of dip = 90°) at the Earth\'s magnetic poles.',
      r: 'At the magnetic poles, Earth\'s magnetic field lines are oriented entirely vertically perpendicular to the surface, with zero horizontal component.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and strictly vertical flux lines at magnetic dip poles explains the 90° dip angle.'
    },
    {
      title: 'Magnetic field lines never intersect',
      a: 'Two magnetic field lines can never intersect each other at any point in space.',
      r: 'If they intersected, two tangents could be drawn at the point of intersection, implying two different directions of resultant magnetic field at the same point, which is physically impossible.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and uniqueness of the resultant magnetic field vector at any spatial location prevents line crossing.'
    }
  ],

  calorimetry: [
    {
      title: 'Specific heat capacity of water climate effect',
      a: 'Coastal regions experience an equitable and moderate climate throughout the year compared to inland continental regions.',
      r: 'Water has an exceptionally high specific heat capacity (4200 J kg⁻¹ K⁻¹), absorbing or releasing large amounts of heat with only small temperature changes.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and water\'s high thermal inertia buffering temperature fluctuations explains moderate coastal climates.'
    },
    {
      title: 'Water in car radiators and hot water bottles',
      a: 'Water is universally used as a coolant in automobile engine radiators and in hot-water bottles for thermal fermentation.',
      r: 'Water can absorb a large amount of heat energy from the engine without boiling and can store immense thermal energy to release heat over hours.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and high specific heat capacity maximizing heat storage and heat removal justifies both applications.'
    },
    {
      title: 'Temperature constant during phase change',
      a: 'During the melting of pure ice at 0°C, the temperature remains strictly constant until all ice has turned to water.',
      r: 'The heat energy supplied (latent heat of fusion) is consumed entirely in breaking intermolecular lattice bonds without increasing molecular kinetic energy.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and energy going into potential energy of molecular separation rather than kinetic energy explains constant temperature.'
    },
    {
      title: 'Cooling effect of ice at 0 C vs water at 0 C',
      a: 'Ice at 0°C is far more effective at cooling a warm beverage than water at 0°C.',
      r: 'Every gram of ice at 0°C absorbs an extra 336 joules of latent heat of fusion just to melt into water at 0°C before its temperature begins to rise.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and absorbing the 336 J/g latent heat of fusion provides substantially greater cooling capacity.'
    },
    {
      title: 'Burns caused by steam at 100 C vs boiling water',
      a: 'Burns produced by steam at 100°C are vastly more severe than burns caused by boiling water at 100°C.',
      r: 'Every gram of steam at 100°C releases an extra 2260 joules of latent heat of vaporization upon condensing on the skin at 100°C.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the massive latent heat of condensation (2260 J/g) releasing huge energy onto skin tissue causes severe deep burns.'
    },
    {
      title: 'Principle of Calorimetry heat conservation',
      a: 'When two liquids at different temperatures are mixed in an insulated vessel, heat lost by hot liquid equals heat gained by cold liquid.',
      r: 'The principle of calorimetry is an expression of the fundamental law of conservation of energy assuming zero heat loss to the surroundings.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and conservation of thermal energy in an isolated thermodynamic system validates the principle.'
    },
    {
      title: 'Calorimeter made of thin polished copper',
      a: 'Calorimeters are constructed from thin sheets of copper polished on both inside and outside.',
      r: 'Copper has very low specific heat capacity (399 J kg⁻¹ K⁻¹) and polished surfaces minimize radiative heat exchange with the surroundings.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and low heat capacity plus low thermal emissivity ensures the vessel absorbs minimal heat during measurements.'
    },
    {
      title: 'Water equivalent of calorimeter',
      a: 'The water equivalent of a calorimeter is the mass of water that requires the same amount of heat as the calorimeter for an identical temperature rise.',
      r: 'Water equivalent is calculated as the mass of the calorimeter multiplied by its specific heat capacity (W = m_c · c_c / c_w).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and equating Q = m_cal · c_cal · ΔT = W · c_w · ΔT directly defines water equivalent.'
    },
    {
      title: 'Specific heat capacity unit',
      a: 'The SI unit of specific heat capacity is joule per kilogram per kelvin (J kg⁻¹ K⁻¹).',
      r: 'Specific heat capacity is defined as heat energy required per unit mass per unit rise in temperature (c = Q / (m·ΔT)).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and c = Q / (m·ΔT) directly derives J kg⁻¹ K⁻¹.'
    },
    {
      title: 'Heat capacity vs specific heat capacity',
      a: 'A 500 g block of copper has greater heat capacity than a 100 g block of copper.',
      r: 'Heat capacity is an extensive property equal to mass multiplied by specific heat capacity (C\' = m·c).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and C\' = mc confirms that larger mass produces larger heat capacity for the same material.'
    },
    {
      title: 'Evaporation causes cooling',
      a: 'Pouring a few drops of surgical spirit or acetone on the palm produces a distinct chilling sensation.',
      r: 'Volatile liquids evaporate rapidly, extracting the necessary latent heat of vaporization directly from the skin of the hand.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and extracting latent heat from the hand during fast evaporation lowers skin temperature.'
    },
    {
      title: 'Water cooling in earthen pot (surahi)',
      a: 'Water stored in a porous earthen pot remains pleasantly cool during hot, dry summer days.',
      r: 'Water continuously seeps through micro-pores of the clay and evaporates, absorbing latent heat of vaporization from the remaining water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and evaporative cooling through clay pores continuously removes heat from stored water.'
    },
    {
      title: 'Soft drinks cooled faster with crushed ice',
      a: 'Crushed ice cools a bottle of juice faster than a single solid cube of ice of the same mass.',
      r: 'Crushed ice has a vastly greater total surface area in direct contact with the bottle, accelerating heat transfer.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and increased contact surface area speeds up the rate of heat exchange.'
    },
    {
      title: 'Weather feels milder after a snowfall',
      a: 'It feels noticeably warmer and pleasant during a snowfall, but bitterly cold immediately after the snowfall when ice begins to melt.',
      r: 'During snowfall, water vapor condenses and freezes, releasing latent heat into the air; during melting, ice absorbs massive latent heat from surroundings.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and latent heat release during freezing versus absorption during melting explains the thermal contrast.'
    },
    {
      title: 'Freezing point depression with salt',
      a: 'Adding common salt (NaCl) to ice creates a freezing mixture with a temperature dropping well below 0°C (down to -21°C).',
      r: 'Dissolving salt lowers the freezing point of water, forcing ice to melt rapidly and absorb its latent heat from the mixture itself.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and depression of freezing point driving forced melting extracts heat, plunging the temperature.'
    },
    {
      title: 'Food cooks faster in a pressure cooker',
      a: 'Cooking food in a pressure cooker takes significantly less time than in an ordinary open pan.',
      r: 'Steam trapped inside increases the pressure above atmospheric, raising the boiling point of water up to 120°C–125°C.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and higher cooking temperature achieved by elevated boiling point accelerates cooking rates.'
    },
    {
      title: 'Boiling point of water on mountains',
      a: 'On high mountain summits, water boils at temperatures below 100°C, making it difficult to cook pulses.',
      r: 'Atmospheric pressure decreases with altitude, and boiling occurs when saturated vapor pressure equals external pressure.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and lower ambient pressure on peaks lowers the boiling point below 100°C.'
    },
    {
      title: 'Specific latent heat of fusion of ice value',
      a: 'The specific latent heat of fusion of ice is 336,000 J kg⁻¹ (or 336 J g⁻¹).',
      r: 'It requires 3.36 × 10⁵ joules of thermal energy to convert 1 kg of ice at 0°C completely into water at 0°C.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the definition of specific latent heat directly corresponds to the 3.36 × 10⁵ J/kg value.'
    },
    {
      title: 'Cooling curve horizontal plateau',
      a: 'In the cooling curve of molten naphthalene, a flat horizontal plateau appears during solidification.',
      r: 'During phase change from liquid to solid, latent heat of solidification is continuously released at a constant temperature.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and latent heat release balancing cooling loss maintains a constant freezing temperature plateau.'
    },
    {
      title: 'Specific heat capacity of copper vs lead',
      a: 'When equal masses of copper and lead at 100°C are dropped into equal volumes of water at 20°C, copper causes a greater temperature rise.',
      r: 'Copper has a higher specific heat capacity (390 J kg⁻¹ K⁻¹) than lead (130 J kg⁻¹ K⁻¹), releasing more heat energy during cooling.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Q = m·c·ΔT, and copper\'s three-fold higher specific heat releases more heat to the water.'
    },
    {
      title: 'Regulation of body temperature by sweating',
      a: 'Perspiration (sweating) is the human body\'s primary physiological mechanism to prevent overheating in summer.',
      r: 'Sweat evaporates from the skin surface, absorbing latent heat of vaporization (approx. 2400 J/g) directly from the body.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and evaporative latent heat removal stabilizes internal human core temperature near 37°C.'
    },
    {
      title: 'Lake freezing from top to bottom',
      a: 'Deep freshwater lakes freeze from the surface downwards in winter, leaving liquid water below.',
      r: 'Water exhibits anomalous expansion between 0°C and 4°C, having its maximum density at 4°C, so dense 4°C water settles at the lake bottom.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and maximum water density at 4°C sinking to the bottom allows aquatic life to survive under surface ice.'
    },
    {
      title: 'Land and sea breeze daily cycle',
      a: 'Sea breezes blow from sea to land during the daytime, while land breezes blow from land to sea at night.',
      r: 'Land has a lower specific heat capacity than seawater, heating up faster by day and cooling down faster by night.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and differential heating rates creating alternating thermal pressure gradients explain the breeze cycle.'
    },
    {
      title: 'Wine bottles preserved in water basins in winter',
      a: 'In sub-zero winter climates, farmers store bottles of fresh juice or wine immersed in large vats of water inside cellars.',
      r: 'Before wine can freeze, the large volume of water must freeze first, releasing immense latent heat (336 J/g) to prevent wine from freezing.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and water freezing first and releasing latent heat keeps cellar air near 0°C, saving wine from bursting.'
    },
    {
      title: 'Specific latent heat of vaporization of water value',
      a: 'The specific latent heat of vaporization of water is approximately 2260 J g⁻¹ (2.26 × 10⁶ J kg⁻¹).',
      r: 'Converting liquid water into steam involves breaking all hydrogen bonds and expanding against atmospheric pressure, requiring massive energy.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and complete molecular bond disruption plus work of expansion against atmosphere explains 2260 J/g.'
    },
    {
      title: 'Heat transfer stops at thermal equilibrium',
      a: 'When two bodies placed in thermal contact reach the exact same temperature, net heat transfer between them stops.',
      r: 'Heat flows spontaneously from a region of higher temperature to lower temperature; zero temperature difference means zero net thermal flux.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and equality of temperature (thermal equilibrium) halts net conductive heat flow.'
    },
    {
      title: 'Thermal insulation of wool in calorimeter',
      a: 'The space between a calorimeter and its outer wooden jacket is packed with glass wool or felt.',
      r: 'Wool and felt trap air in micro-pockets; trapped air is a poor conductor of heat, minimizing conductive and convective heat losses.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and stagnant trapped air acting as an excellent insulator minimizes thermal leakage.'
    },
    {
      title: 'Calorimeter lid with holes',
      a: 'The lid of a calorimeter is fitted with two rubber-lined holes for inserting a sensitive thermometer and a copper stirrer.',
      r: 'Stirring ensures rapid and uniform thermal mixing of the contents, while rubber lining minimizes conductive loss through the holes.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and uniform temperature distribution via stirring plus insulation via rubber grommets ensures measurement accuracy.'
    },
    {
      title: 'Water equivalent has dimensions of mass',
      a: 'The water equivalent of any body has the SI unit kilogram.',
      r: 'Water equivalent represents the physical mass of water that would absorb the exact same heat as the body for a 1 K temperature rise.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and representing an equivalent mass of water means its unit is the kilogram.'
    },
    {
      title: 'Heat capacity of calorimeter and error',
      a: 'In precise calorimetry calculations, the heat absorbed by the calorimeter and stirrer must be accounted for.',
      r: 'The calorimeter and stirrer also undergo the exact same temperature change as the contents inside them (Q_cal = m_c·c_c·ΔT).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and vessel heat absorption must be included in the energy balance for accurate specific heat values.'
    },
    {
      title: 'Effect of pressure on melting point of ice',
      a: 'Increasing external pressure lowers the melting point of ice slightly below 0°C.',
      r: 'Ice contracts upon melting (volume of water < volume of ice), so increased pressure favors the denser liquid phase (regelation).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and volume contraction on melting combined with Le Chatelier\'s principle explains regelation.'
    },
    {
      title: 'Effect of pressure on boiling point of liquids',
      a: 'The boiling point of any liquid increases when the external pressure on its surface is increased.',
      r: 'Boiling occurs when the liquid\'s vapor pressure equals external pressure, requiring higher temperature to reach higher vapor pressure.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and matching vapor pressure to elevated ambient pressure requires higher thermal energy.'
    },
    {
      title: 'Effect of dissolved impurities on boiling point',
      a: 'Adding common salt to boiling water raises its boiling point above 100°C.',
      r: 'Non-volatile solute molecules occupy surface sites, reducing water\'s vapor pressure and requiring higher temperature to boil.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and vapor pressure lowering by non-volatile solute elevates boiling point.'
    },
    {
      title: 'Effect of impurities on freezing point',
      a: 'The freezing point of water drops below 0°C when impurities like salt or sugar are dissolved in it.',
      r: 'Foreign solute molecules interfere with the orderly crystallization of water molecules into a solid ice lattice.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and lattice disruption lowering chemical potential depresses the freezing point.'
    },
    {
      title: 'Slopes of heating curve meaning',
      a: 'In a temperature-versus-time graph for a heated substance, the slope of the curve is inversely proportional to its heat capacity.',
      r: 'Slope = dT/dt = (1 / m·c) · (dQ/dt), so for a constant rate of heat supply, a larger heat capacity produces a gentler slope.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dT/dt = P / (mc) mathematically confirms that slope is inversely proportional to heat capacity.'
    },
    {
      title: 'Water slope vs ice slope in heating curve',
      a: 'The temperature-time graph of heated water has a gentler slope than that of an equal mass of heated ice under the same heater.',
      r: 'The specific heat capacity of water (4200 J kg⁻¹ K⁻¹) is double that of ice (2100 J kg⁻¹ K⁻¹).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Double the specific heat capacity means half the rate of temperature rise, giving a gentler slope.'
    },
    {
      title: 'Dog panting in hot weather',
      a: 'Dogs pant with their tongues hanging out on hot summer afternoons.',
      r: 'Dogs have very few sweat glands; rapid evaporation of saliva from the wet tongue provides evaporative cooling for the body.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and evaporative cooling from the tongue compensates for the absence of cutaneous sweat glands.'
    },
    {
      title: 'Dew drops on grass in autumn',
      a: 'Dew drops form on grass blades on calm, clear autumn nights.',
      r: 'Grass blades radiate heat rapidly to the clear sky, cooling below the dew point of the surrounding humid air and condensing vapor.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and radiative cooling of ground surfaces below the atmospheric dew point causes dew formation.'
    },
    {
      title: 'Specific heat capacity is intensive property',
      a: 'The specific heat capacity of 1 kg of copper is identical to the specific heat capacity of 10 kg of copper.',
      r: 'Specific heat capacity is an intrinsic intensive property of a substance, independent of the mass or shape of the sample.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and mass-independent intrinsic material character defines specific heat capacity.'
    },
    {
      title: 'Heat gained formula during heating',
      a: 'The amount of heat gained by a body of mass m when heated from temperature T₁ to T₂ is Q = m·c·(T₂ - T₁).',
      r: 'Heat absorbed is directly proportional to the mass of the body, its specific heat capacity, and the temperature rise (Q = mcΔT).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Q = mcΔT is the fundamental governing formula of calorimetry.'
    }
  ],

  radioactivity: [
    {
      title: 'Radioactivity as a nuclear phenomenon',
      a: 'Radioactive decay is completely unaffected by changes in temperature, pressure, or chemical combination.',
      r: 'Radioactivity is a spontaneous nuclear phenomenon involving the unstable atomic nucleus, independent of orbital valence electrons.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and origin within the nucleus protected from external chemical/physical forces explains independence.'
    },
    {
      title: 'Alpha particle nature and charge',
      a: 'An alpha particle is a doubly ionized helium nucleus carrying a charge of +2e and a mass of approximately 4 atomic mass units.',
      r: 'An alpha particle consists of two protons and two neutrons bound together tightly (⁴₂He²⁺).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and composition of 2 protons and 2 neutrons defines a doubly charged helium nucleus.'
    },
    {
      title: 'Beta-minus particle origin in decay',
      a: 'A beta-minus particle emitted during radioactive decay originates from within the nucleus, not from atomic electron shells.',
      r: 'Inside an unstable neutron-rich nucleus, a neutron spontaneously transforms into a proton, an electron (beta particle), and an antineutrino.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The nuclear transition n → p + e⁻ + ν_bar creates the beta particle at the instant of decay.'
    },
    {
      title: 'Gamma radiation nature',
      a: 'Gamma emission does not alter either the atomic number or the mass number of the parent nucleus.',
      r: 'Gamma radiation consists of uncharged, massless high-frequency electromagnetic photons emitted when an excited nucleus transitions to a lower energy state.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and de-excitation via photon emission leaves proton count Z and nucleon count A completely unchanged.'
    },
    {
      title: 'Alpha vs beta ionizing power',
      a: 'Alpha particles have roughly 100 times greater ionizing power than beta particles.',
      r: 'Alpha particles are much heavier and carry double the positive charge (+2e), interacting much more strongly with atomic electrons in matter.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and larger mass plus +2e charge creates dense Coulomb ionization along the alpha track.'
    },
    {
      title: 'Penetrating power ranking of radiations',
      a: 'Gamma radiation has the greatest penetrating power, followed by beta particles, while alpha particles have the least.',
      r: 'Gamma photons carry no electric charge and interact weakly with matter, whereas alpha particles lose kinetic energy rapidly through dense ionization.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and inverse relationship between ionizing density and range explains the penetrating order: γ > β > α.'
    },
    {
      title: 'Alpha particle deflection in magnetic field',
      a: 'When an alpha particle enters a uniform magnetic field perpendicular to its velocity, it curves into a circular arc.',
      r: 'A charged particle moving across a magnetic field experiences a perpendicular Lorentz force (F = q·v·B).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and perpendicular Lorentz force acting as centripetal force curves the charged path into a circle.'
    },
    {
      title: 'Beta deflection greater than alpha deflection',
      a: 'In the same transverse magnetic or electric field, beta particles are deflected far more noticeably than alpha particles.',
      r: 'The charge-to-mass ratio (e/m) of a beta particle is approximately 7300 times greater than that of an alpha particle.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and vastly higher charge-to-mass ratio of the light electron causes much sharper curvature.'
    },
    {
      title: 'Gamma rays zero deflection in fields',
      a: 'Gamma rays pass through both strong electric fields and strong magnetic fields completely undeflected.',
      r: 'Gamma rays carry zero electric charge, so neither electrostatic force (F = qE) nor magnetic Lorentz force (F = qvB) acts on them.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and zero electric charge ensures zero electromagnetic force.'
    },
    {
      title: 'Alpha decay displacement law (Soddy-Fajans)',
      a: 'When a nucleus undergoes alpha decay, its daughter nucleus shifts two places to the left in the Periodic Table.',
      r: 'Emission of an alpha particle reduces the atomic number Z by 2 and the mass number A by 4 (ᴬ_Z X → ᴬ⁻⁴_{Z-2} Y + ⁴₂He).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and losing two nuclear protons shifts the element two atomic positions to the left.'
    },
    {
      title: 'Beta decay displacement law',
      a: 'When a nucleus emits a beta-minus particle, the daughter nucleus shifts one place to the right in the Periodic Table.',
      r: 'Beta-minus decay increases the nuclear charge Z by 1 while leaving the mass number A unchanged (ᴬ_Z X → ᴬ_{Z+1} Y + ⁰₋₁e).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and atomic number increasing by 1 shifts the element one position to the right.'
    },
    {
      title: 'Isobars produced by beta decay',
      a: 'The parent and daughter nuclei in a beta-minus decay are isobars of each other.',
      r: 'Isobars are nuclides having the same mass number A but different atomic numbers Z.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and invariant mass number A with Z increasing by 1 defines isobars.'
    },
    {
      title: 'Radioactive half-life definition',
      a: 'The half-life of a radioactive isotope is the time taken for half of the initial radioactive nuclei to decay.',
      r: 'After n half-lives, the fraction of original radioactive nuclei remaining undecayed is given by N/N₀ = (1/2)ⁿ.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and exponential decay halving population per period defines half-life.'
    },
    {
      title: 'Carbon-14 dating principle',
      a: 'Carbon-14 dating is used by archaeologists to estimate the age of ancient organic remains like wood and bone.',
      r: 'Living organisms assimilate carbon-14 at a constant ratio with carbon-12; after death, carbon-14 decays with a known half-life of 5730 years.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and measuring the surviving ¹⁴C/¹²C ratio against its 5730-year half-life determines time since death.'
    },
    {
      title: 'Lead containers for radioactive sources',
      a: 'Radioactive sources in laboratories are always stored inside thick lead containers with a narrow aperture.',
      r: 'Lead has a high atomic number and high density, providing exceptional absorption of dangerous gamma radiation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dense high-Z lead stopping penetrating gamma rays prevents environmental radiation.'
    },
    {
      title: 'Background radiation presence',
      a: 'Even in the absence of any radioactive source, a Geiger-Müller counter detects a small continuous count rate.',
      r: 'Background radiation is permanently present in the environment due to cosmic rays and natural radioactive isotopes in rocks and soil.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and ubiquitous natural terrestrial/cosmic radionuclides explain background radiation.'
    },
    {
      title: 'Dosimeter badge for radiation workers',
      a: 'Radiologists and nuclear power plant workers wear film badge dosimeters on their lab coats.',
      r: 'The photographic film inside darkens in proportion to cumulative ionizing radiation exposure, ensuring safety thresholds are not exceeded.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and proportional photochemical film blackening measures occupational radiation dose.'
    },
    {
      title: 'Radioisotopes in cancer therapy',
      a: 'Cobalt-60 is widely used in hospital radiotherapy to destroy malignant tumor cells.',
      r: 'Cobalt-60 emits intense, penetrating gamma rays that damage the DNA of rapidly dividing cancer cells.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and localized high-energy gamma photon irradiation selectively destroying tumors explains radiotherapy.'
    },
    {
      title: 'Industrial radioactive tracer for pipe leaks',
      a: 'Radioactive isotopes emitting gamma rays are used to detect leaks in buried underground oil and gas pipelines.',
      r: 'A radioisotope introduced into the pipeline leaks into surrounding soil at the rupture, emitting gamma rays detectable from above ground.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and surface detection of accumulated gamma emitters over the leak pinpoints pipe rupture.'
    },
    {
      title: 'Alpha particle range in air',
      a: 'Alpha particles emitted by radioactive sources travel only a few centimeters in ordinary air before coming to rest.',
      r: 'Alpha particles produce intense ionization along their path, rapidly dissipating all their kinetic energy within 3 to 7 cm of air.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and high specific ionization depleting energy over short distances limits air range.'
    },
    {
      title: 'Nuclear fission chain reaction',
      a: 'A single thermal neutron striking a Uranium-235 nucleus can trigger an uncontrolled chain reaction.',
      r: 'Each fission of a Uranium-235 nucleus releases an average of 2 to 3 fast neutrons that can induce further fissions in neighboring nuclei.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and multiplication of emitted neutrons per fission event sustains a self-propagating chain reaction.'
    },
    {
      title: 'Moderator in nuclear reactor',
      a: 'Heavy water (D₂O) or high-purity graphite is used as a moderator in nuclear fission reactors.',
      r: 'The moderator slows down fast fission neutrons to thermal speeds through elastic collisions without absorbing them.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and thermalizing neutrons to maximize U-235 fission probability explains the moderator role.'
    },
    {
      title: 'Control rods in nuclear reactor',
      a: 'Cadmium or boron steel rods are inserted into or withdrawn from a nuclear reactor core to regulate power output.',
      r: 'Cadmium and boron have very high absorption cross-sections for thermal neutrons, controlling the multiplication factor k.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and absorbing excess neutrons to regulate the fission rate defines the role of control rods.'
    },
    {
      title: 'Nuclear fusion vs fission energy yield',
      a: 'Nuclear fusion produces significantly more energy per unit mass of fuel than nuclear fission.',
      r: 'The fractional mass defect (Δm/m) involved in fusing light hydrogen nuclei into helium is greater than that in splitting heavy uranium nuclei.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and higher binding energy change per nucleon in fusion produces roughly 4 times more energy per kg.'
    },
    {
      title: 'High temperature requirement for nuclear fusion',
      a: 'Nuclear fusion reactions occur only at extremely high temperatures of the order of 10⁷ to 10⁸ kelvin (thermonuclear reaction).',
      r: 'Immense kinetic thermal energy is required for positively charged nuclei to overcome their mutual electrostatic Coulomb repulsion.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and overcoming strong Coulomb barrier forces requires multi-million kelvin thermal velocities.'
    },
    {
      title: 'Solar energy origin in fusion',
      a: 'The enormous energy radiated by the Sun and stars is generated by thermonuclear fusion reactions.',
      r: 'In the core of the Sun, hydrogen nuclei continuously fuse into helium nuclei via the proton-proton cycle with a mass defect converted into radiant energy.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and hydrogen-to-helium fusion in the solar core explains solar luminosity.'
    },
    {
      title: 'Smoke detector americium source',
      a: 'Domestic ionization smoke detectors contain a tiny fraction of americium-241 (an alpha emitter).',
      r: 'Alpha particles continuously ionize air molecules between electrodes; smoke particles entering the chamber attach to ions, dropping current and triggering the alarm.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and smoke disruption of alpha-induced ionization current triggers the sensor.'
    },
    {
      title: 'Radioisotope half-life independent of initial mass',
      a: 'A 100 g sample and a 1 g sample of pure Radium-226 have the exact same half-life of 1600 years.',
      r: 'Half-life is a fundamental nuclear decay constant characteristic of the nuclide, independent of mass, volume, or chemical state.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and half-life T½ = 0.693/λ being an intrinsic nuclear constant confirms mass independence.'
    },
    {
      title: 'Radiation sickness biological effects',
      a: 'Exposure to high doses of ionizing radiation causes acute radiation sickness and genetic mutations.',
      r: 'Ionizing radiation creates free radicals that break double-stranded DNA molecules and damage bone marrow and stem cells.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and radiolytic free radical damage to cellular DNA explains somatic and hereditary harm.'
    },
    {
      title: 'Isotopes in periodic table position',
      a: 'Isotopes of the same chemical element occupy the exact same position in the Mendeleev/Modern Periodic Table.',
      r: 'Isotopes possess identical atomic numbers Z (same number of protons and electrons), exhibiting identical chemical properties.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and identical atomic number Z places all isotopes in the same periodic slot.'
    },
    {
      title: 'Coolant in nuclear power plant',
      a: 'Liquid sodium or pressurized water is circulated through a nuclear reactor as a coolant.',
      r: 'The coolant extracts the immense heat generated in the core and transfers it via heat exchangers to boil water and produce high-pressure steam.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and thermal energy removal from core to steam turbine defines the coolant circuit.'
    },
    {
      title: 'Beta-plus (positron) decay',
      a: 'In positron (beta-plus) decay, the daughter nucleus has an atomic number one less than the parent nucleus.',
      r: 'In beta-plus decay, a nuclear proton transforms into a neutron, a positron (e⁺), and a neutrino (p → n + e⁺ + ν).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and proton-to-neutron conversion reduces atomic number Z by 1 while leaving mass number A unchanged.'
    },
    {
      title: 'Nuclear density independence from mass number',
      a: 'The density of nuclear matter is approximately constant (approx. 2.3 × 10¹⁷ kg m⁻³) across all atomic nuclei from helium to uranium.',
      r: 'Nuclear radius R is proportional to the cube root of mass number (R = R₀ A¹/³), making nuclear volume directly proportional to mass number A.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since volume V ∝ A and mass m ∝ A, nuclear density ρ = m/V is constant across all nuclei.'
    },
    {
      title: 'Gamma ray photographic action',
      a: 'Gamma rays can expose and darken a sealed photographic plate wrapped in black paper.',
      r: 'Gamma rays penetrate light-tight black paper easily and ionize silver halide crystals on the photographic emulsion.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and high penetration plus silver halide ionization causes photographic darkening.'
    },
    {
      title: 'Critical mass in nuclear weapons',
      a: 'A nuclear fission bomb cannot explode unless the fissile core exceeds a specific critical mass.',
      r: 'In a subcritical mass, too many fission neutrons escape from the surface before inducing further fissions, extinguishing the chain reaction.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and surface neutron leakage exceeding internal neutron production in subcritical geometry prevents chain explosion.'
    },
    {
      title: 'Neutron to proton ratio for stability',
      a: 'Heavy stable nuclei have a neutron-to-proton ratio (N/Z) significantly greater than 1.',
      r: 'As positive charge Z increases, repulsive Coulomb forces between protons grow, requiring extra neutral neutrons to provide attractive strong nuclear force.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and repulsive Coulomb force requiring additional strong nuclear binding from extra neutrons explains N/Z > 1.'
    },
    {
      title: 'Radioactive waste deep geological disposal',
      a: 'High-level nuclear waste is vitrified into borosilicate glass cylinders and buried in deep geological repositories hundreds of metres underground.',
      r: 'Long-lived radioactive actinides remain intensely radioactive for thousands of years, requiring complete isolation from the biosphere and groundwater.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and multi-millennial radiotoxicity requires vitrification and deep geological isolation.'
    },
    {
      title: 'Alpha emission recoil velocity',
      a: 'When a stationary parent nucleus emits an alpha particle, the daughter nucleus recoils in the exact opposite direction.',
      r: 'The total linear momentum of the isolated system must be conserved before and after decay (p_daughter + p_alpha = 0).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and conservation of linear momentum confirms that the daughter nucleus must recoil backward.'
    },
    {
      title: 'Uranium-238 decay series end product',
      a: 'The radioactive decay chain of Uranium-238 terminates permanently at Lead-206 (²⁰⁶₈₂Pb).',
      r: 'Lead-206 has a completely stable, magic proton-neutron configuration with zero spontaneous alpha or beta radioactivity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and nuclear stability of Lead-206 halts further spontaneous radioactive disintegrations.'
    },
    {
      title: 'Beta particle continuous energy spectrum',
      a: 'Beta particles emitted from a radioactive sample exhibit a continuous energy distribution from zero up to a maximum endpoint energy.',
      r: 'The decay energy is shared simultaneously between the emitted beta particle and an undetectable antineutrino in varying proportions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and three-body decay sharing energy between daughter, electron, and antineutrino explains the continuous beta spectrum.'
    }
  ]
};
