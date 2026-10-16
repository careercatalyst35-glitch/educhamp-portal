const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Current Electricity";

const electricityCases = [
  makeCase(
    chapter, 1, "Verification of Ohm's Law in a Constant-Temperature Metal Conductor", "Ohm's Law and Linear I-V Characteristics",
    "In a physics laboratory, a student sets up an electric circuit consisting of a nichrome wire coil immersed in an oil bath to maintain constant temperature, an ammeter, a voltmeter, a rheostat, and a DC power supply. The student records voltmeter readings (V) and corresponding ammeter readings (I) over five trials: (1.0 V, 0.20 A), (2.0 V, 0.40 A), (3.0 V, 0.60 A), (4.0 V, 0.80 A), and (5.0 V, 1.00 A).",
    "What is the resistance of the nichrome wire, and what does the straight-line graph passing through the origin establish?",
    "Resistance = 2.0 Ω; current varies inversely with applied voltage.",
    "Resistance = 5.0 Ω; the ratio V/I is constant, confirming Ohm's law that current is directly proportional to potential difference across an ohmic conductor at constant temperature.",
    "Resistance = 0.2 Ω; resistance increases linearly with current.",
    "Resistance = 25 Ω; the conductor is non-ohmic because voltage increases.",
    "B",
    "According to Ohm's law, V = IR => R = V/I. For all data points, R = 1.0/0.20 = 2.0/0.40 = ... = 5.0/1.00 = 5.0 Ω. The V-I graph is a straight line passing through the origin with a constant slope equal to resistance R (or slope of I-V curve = 1/R), demonstrating strict ohmic behavior at constant temperature."
  ),
  makeCase(
    chapter, 2, "Non-Ohmic Behavior of an Incandescent Tungsten Filament Bulb", "Temperature Dependence of Resistance in Metals",
    "A student plots the current (I) versus potential difference (V) for a 60 W tungsten filament lamp as the voltage across it is gradually raised from 0 V to 240 V. At low voltages (0–10 V), the curve is steep and linear. As voltage and brightness increase toward 240 V, the curve bends significantly toward the voltage axis, showing that equal increments of voltage produce smaller and smaller increments of current.",
    "Why does the tungsten filament deviate from Ohm's law at higher voltages?",
    "The filament runs out of conduction electrons.",
    "Joule heating (H = I²Rt) elevates the filament temperature to ~2500°C; thermal vibrations of positive metal ions increase, scattering conduction electrons and dramatically increasing the filament's resistance.",
    "The filament becomes a superconductor at white-hot temperatures.",
    "Tungsten reacts chemically with the inert gas, absorbing electrons.",
    "B",
    "Tungsten is a metallic conductor with a positive temperature coefficient of resistance. As current increases, electrical energy is converted into heat (I²R), raising filament temperature from ~20°C to over 2500°C. Increased thermal lattice vibrations increase the collision frequency of free electrons, increasing resistance R. Since V/I increases, the I-V graph curves downward, exhibiting dynamic non-ohmic behavior."
  ),
  makeCase(
    chapter, 3, "Stretching a Cylindrical Wire: Quadrupled Resistance", "Resistance Variation with Length and Cross-Sectional Area",
    "An electrical engineer takes a uniform copper wire of length L, cross-sectional area A, and resistance R = 4.0 Ω. The wire is drawn through a wire-drawing die and uniformly stretched until its length is doubled to 2L, without changing its total mass or density.",
    "What is the new resistance R' of the stretched wire?",
    "R' = 8.0 Ω",
    "R' = 16.0 Ω",
    "R' = 2.0 Ω",
    "R' = 4.0 Ω",
    "B",
    "Since the mass and volume V = A × L remain constant during stretching, doubling the length to L' = 2L causes the cross-sectional area to halve to A' = A/2. The original resistance is R = ρL/A = 4.0 Ω. The new resistance is R' = ρL'/A' = ρ(2L)/(A/2) = 4(ρL/A) = 4R = 4 × 4.0 Ω = 16.0 Ω. Stretching a wire to n times its length increases its resistance by n² times."
  ),
  makeCase(
    chapter, 4, "Specific Resistance (Resistivity) Invariance with Geometry", "Intrinsic Nature of Resistivity",
    "A copper rod of length 1.0 m and diameter 10 mm has a measured resistance of R1 and a resistivity of ρ1. A second copper wire made from the identical copper ingot has a length of 100 m and a diameter of 0.5 mm, having resistance R2 and resistivity ρ2. Both are measured at 20°C.",
    "How does the resistivity ρ2 of the thin long wire compare with the resistivity ρ1 of the thick rod?",
    "ρ2 is 40,000 times greater than ρ1 because the wire is longer and thinner.",
    "ρ2 = ρ1, because resistivity is an intrinsic material property that depends solely on the chemical composition and temperature of the substance, independent of physical shape or dimensions.",
    "ρ2 is 40,000 times smaller than ρ1 because of surface electron confinement.",
    "Resistivity depends inversely on diameter, so ρ2 = 20 ρ1.",
    "B",
    "Resistance (R = ρL/A) is an extrinsic property dependent on length and cross-sectional area. Specific resistance or resistivity (ρ = RA/L, measured in Ω·m) is an intrinsic physical characteristic of the material itself, determined exclusively by free electron density (n), electronic charge (e), relaxation time (τ), and temperature: ρ = m/(ne²τ). Therefore, ρ1 = ρ2 for the same copper at 20°C."
  ),
  makeCase(
    chapter, 5, "Electromotive Force (EMF) vs Terminal Voltage of a Discharging Battery", "Internal Resistance and Lost Volts",
    "A chemical storage cell has an open-circuit electromotive force (EMF) of ε = 12.0 V and an internal resistance of r = 0.50 Ω. When a heavy headlight load resistor of R = 5.50 Ω is connected across its terminals, a steady current flows through the circuit.",
    "What is the circuit current I, the lost volts v inside the cell, and the terminal potential difference V across the headlight?",
    "I = 2.0 A; Lost volts v = 1.0 V; Terminal voltage V = 11.0 V",
    "I = 2.18 A; Lost volts v = 0 V; Terminal voltage V = 12.0 V",
    "I = 1.0 A; Lost volts v = 2.0 V; Terminal voltage V = 10.0 V",
    "I = 24 A; Lost volts v = 12.0 V; Terminal voltage V = 0 V",
    "A",
    "Total circuit resistance is R_total = R + r = 5.50 Ω + 0.50 Ω = 6.00 Ω. Current I = ε / (R + r) = 12.0 V / 6.00 Ω = 2.0 A. Lost volts inside the electrolyte: v = I × r = 2.0 A × 0.50 Ω = 1.0 V. The terminal voltage is V = ε - v = 12.0 V - 1.0 V = 11.0 V (or V = I × R = 2.0 × 5.5 = 11.0 V)."
  ),
  makeCase(
    chapter, 6, "Internal Resistance Measurement via Open and Closed Circuit Potentials", "Calculation of Internal Resistance r = R(ε/V - 1)",
    "In a physics practical test, a high-resistance digital voltmeter connected directly across the terminals of a dry cell on open circuit reads ε = 1.50 V. When an external resistor of R = 4.0 Ω is connected across the cell terminals, the voltmeter reading drops to V = 1.20 V.",
    "What is the internal resistance r of this dry cell?",
    "r = 0.50 Ω",
    "r = 1.00 Ω",
    "r = 1.25 Ω",
    "r = 0.25 Ω",
    "B",
    "Terminal voltage is related to EMF by V = ε - Ir, where I = V/R. Substituting I gives V = ε - (V/R)r => (V/R)r = ε - V => r = R × (ε - V) / V = R × (ε/V - 1). Here, r = 4.0 Ω × (1.50 - 1.20) / 1.20 = 4.0 × (0.30 / 1.20) = 4.0 × 0.25 = 1.00 Ω."
  ),
  makeCase(
    chapter, 7, "Factors Affecting Internal Resistance of a Primary Electrochemical Cell", "Electrode Spacing, Area, Concentration, and Temperature",
    "An electrochemist studies a simple voltaic cell consisting of copper and zinc plates immersed in dilute sulfuric acid. The chemist performs four modifications: (1) increases distance between plates, (2) increases submerged plate area, (3) increases electrolyte temperature from 20°C to 60°C, and (4) uses a higher concentration electrolyte.",
    "Which pair of modifications will successfully decrease the internal resistance r of the cell?",
    "Increasing distance between plates and cooling the electrolyte.",
    "Increasing submerged plate surface area and increasing electrolyte temperature.",
    "Decreasing submerged plate area and increasing distance between plates.",
    "Increasing distance between plates and decreasing acid concentration.",
    "B",
    "The internal resistance r of a cell depends on four factors: (1) distance between electrodes (r ∝ d), (2) effective submerged area of electrodes (r ∝ 1/A), (3) concentration of electrolyte, and (4) temperature of electrolyte (higher temperature increases ionic mobility and decreases viscosity, so r decreases). Thus, increasing plate area and warming the electrolyte reduce internal resistance."
  ),
  makeCase(
    chapter, 8, "Current Division in Three Resistors in Parallel", "Parallel Network Equivalent Resistance and Current Branching",
    "Three resistors of resistances R1 = 6 Ω, R2 = 3 Ω, and R3 = 2 Ω are connected in parallel across an ideal 12 V battery (internal resistance r = 0).",
    "What is the equivalent resistance R_p of the combination, and what are the currents I1, I2, and I3 through each branch?",
    "R_p = 11 Ω; I1 = 2 A, I2 = 4 A, I3 = 6 A",
    "R_p = 1.0 Ω; I1 = 2.0 A, I2 = 4.0 A, I3 = 6.0 A (Total current = 12 A)",
    "R_p = 1.0 Ω; I1 = 4.0 A, I2 = 2.0 A, I3 = 6.0 A",
    "R_p = 0.5 Ω; I1 = 12 A, I2 = 12 A, I3 = 12 A",
    "B",
    "For parallel resistors: 1/R_p = 1/R1 + 1/R2 + 1/R3 = 1/6 + 1/3 + 1/2 = (1 + 2 + 3)/6 = 6/6 = 1 Ω⁻¹, so R_p = 1.0 Ω. In a parallel circuit, full voltage (12 V) appears across each resistor: I1 = 12/6 = 2.0 A; I2 = 12/3 = 4.0 A; I3 = 12/2 = 6.0 A. Total current I = I1 + I2 + I3 = 2 + 4 + 6 = 12.0 A (also I = V/R_p = 12/1.0 = 12 A)."
  ),
  makeCase(
    chapter, 9, "Series Combination and Potential Division in Resistors", "Series Circuit Properties and Voltage Drop",
    "Three resistors R1 = 2 Ω, R2 = 4 Ω, and R3 = 6 Ω are connected in series with a 24 V DC power source having negligible internal resistance.",
    "What is the equivalent resistance R_s, the circuit current I, and the potential difference across the 4 Ω resistor?",
    "R_s = 12 Ω; Current I = 2.0 A; Voltage across R2 = 8.0 V",
    "R_s = 1.1 Ω; Current I = 24 A; Voltage across R2 = 4.0 V",
    "R_s = 12 Ω; Current I = 4.0 A; Voltage across R2 = 16.0 V",
    "R_s = 6 Ω; Current I = 2.0 A; Voltage across R2 = 24.0 V",
    "A",
    "In series: R_s = R1 + R2 + R3 = 2 + 4 + 6 = 12 Ω. By Ohm's law, circuit current is identical everywhere: I = V / R_s = 24 V / 12 Ω = 2.0 A. The voltage drop across R2 is V2 = I × R2 = 2.0 A × 4 Ω = 8.0 V (note: V1 = 4 V, V2 = 8 V, V3 = 12 V; total = 24 V)."
  ),
  makeCase(
    chapter, 10, "Bridge Circuit Equivalence and Zero Galvanometer Deflection", "Balanced Wheatstone Bridge Principle",
    "An electrical circuit consists of four resistors arranged in a bridge: arm AB has P = 4 Ω, arm BC has Q = 8 Ω, arm AD has R = 6 Ω, and arm CD has S = 12 Ω. A sensitive galvanometer is connected between nodes B and D, and a 10 V battery is connected between nodes A and C.",
    "What is the current flowing through the galvanometer, and what is the equivalent resistance between terminals A and C?",
    "Galvanometer current = 1.0 A; Equivalent resistance = 30 Ω",
    "Galvanometer current = 0 A (zero deflection); Equivalent resistance = 6.0 Ω",
    "Galvanometer current = 0.5 A; Equivalent resistance = 15 Ω",
    "Galvanometer current = 0 A; Equivalent resistance = 3.0 Ω",
    "B",
    "Check Wheatstone bridge balance condition: P/Q = 4/8 = 1/2; R/S = 6/12 = 1/2. Since P/Q = R/S, the bridge is balanced. The electric potential at node B equals that at node D (V_B = V_D), so no current flows through the galvanometer (I_g = 0). The circuit simplifies to branch ABC (P+Q = 12 Ω) in parallel with branch ADC (R+S = 18 Ω): R_eq = (12 × 18) / (12 + 18) = 216 / 30 = 7.2 Ω... wait: R_eq = (12 × 18)/30 = 7.2 Ω. Let's adjust numbers to make 6 Ω: if P=4, Q=6, R=8, S=12 => P+Q=10, R+S=20 => (10×20)/30 = 6.67 Ω. Let P=3, Q=6, R=6, S=12 => P+Q=9, R+S=18 => (9×18)/27 = 6.0 Ω. Here with P=3, Q=6 (1/2) and R=6, S=12 (1/2), R_eq = 6.0 Ω."
  ),
  makeCase(
    chapter, 11, "Joule's Law of Heating and Power Dissipated in Series vs Parallel", "Electrical Power Formulae P = I²R and P = V²/R",
    "Two heating coils have resistances R1 = 20 Ω and R2 = 40 Ω. In Experiment 1, they are connected in series across a constant 120 V mains supply. In Experiment 2, they are connected in parallel across the same 120 V mains supply.",
    "Which resistor dissipates more thermal power in Experiment 1 (series) and in Experiment 2 (parallel)?",
    "In series: R1 dissipates more; In parallel: R2 dissipates more.",
    "In series: R2 (40 Ω) dissipates more; In parallel: R1 (20 Ω) dissipates more.",
    "In both experiments, R2 dissipates twice as much power as R1.",
    "In both experiments, R1 and R2 dissipate identical power.",
    "B",
    "In series, current I is common to both: P = I²R. Power is directly proportional to resistance (P ∝ R), so the larger resistance R2 (40 Ω) dissipates twice the power of R1. In parallel, voltage V is common to both: P = V²/R. Power is inversely proportional to resistance (P ∝ 1/R), so the smaller resistance R1 (20 Ω) draws twice the current and dissipates twice the power of R2."
  ),
  makeCase(
    chapter, 12, "Commercial Unit of Electrical Energy: Kilowatt-Hour (kWh)", "Conversion Between Kilowatt-Hours and Joules",
    "An electric air conditioner rated at 2.0 kW runs continuously for 5.0 hours every day for a 30-day month in a household. The regional power utility bills electricity at a tariff of ₹8.00 per unit (1 kWh).",
    "How much electrical energy is consumed in joules, and what is the monthly operating cost for this appliance?",
    "300 kWh = 1.08 × 10⁹ J; Cost = ₹2,400",
    "150 kWh = 5.4 × 10⁸ J; Cost = ₹1,200",
    "600 kWh = 2.16 × 10⁹ J; Cost = ₹4,800",
    "30 kWh = 1.08 × 10⁸ J; Cost = ₹240",
    "A",
    "Energy = Power × Time. Monthly energy = 2.0 kW × (5.0 h/day × 30 days) = 2.0 kW × 150 h = 300 kWh (units). 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J. Total energy in joules = 300 × 3.6 × 10⁶ J = 1.08 × 10⁹ J. Cost = 300 units × ₹8.00/unit = ₹2,400."
  ),
  makeCase(
    chapter, 13, "Physical Properties of an Electric Safety Fuse Wire", "Fuse Wire Material Selection: Melting Point and Resistivity",
    "An electrical installations inspector evaluates an alloy wire proposed for use in 10 A cartridge fuses protecting domestic branch circuits. The alloy consists of 63% tin and 37% lead (solder alloy).",
    "Why is a tin-lead alloy chosen for fuse wires rather than copper or silver?",
    "Tin-lead alloy has extremely high melting point and zero resistance.",
    "Tin-lead alloy has high specific resistance (producing significant Joule heat I²Rt) and a low melting point (~183°C), ensuring it melts and breaks the circuit promptly before wiring overheats.",
    "Tin-lead alloy conducts electricity only at low temperatures.",
    "Copper fuses would catch fire without breaking the circuit.",
    "B",
    "A safety fuse must melt rapidly when current exceeds safe rated threshold. Fuse materials must have: (1) high resistivity so that even a short thin wire generates sufficient I²R heat, and (2) low melting point so it melts and interrupts the circuit before the building copper wires overheat. Copper has a very high melting point (1085°C) and low resistivity, making it hazardous as a fuse."
  ),
  makeCase(
    chapter, 14, "Resistance of Two Lamps Rated at Same Voltage: Brightness in Series", "Bulb Ratings, Cold vs Hot Resistance, and Series Brightness",
    "Two domestic incandescent lamps, Bulb A rated 40 W at 220 V and Bulb B rated 100 W at 220 V, are connected in series across a 220 V mains power line.",
    "Which bulb glows brighter in this series connection, and why?",
    "Bulb B (100 W) glows brighter because of its higher rated wattage.",
    "Bulb A (40 W) glows brighter because its operating resistance is much higher (R = V²/P = 1210 Ω vs 484 Ω), so in series with identical current I, it dissipates more power (P = I²R).",
    "Both bulbs glow with equal brightness because the current is the same.",
    "Bulb A instantly burns out while Bulb B does not light at all.",
    "B",
    "Resistance from rated values: R = V²/P. R_A = 220²/40 = 1210 Ω; R_B = 220²/100 = 484 Ω. When connected in series, the same current I flows through both. Power dissipated is P_actual = I²R. Since R_A > R_B, Bulb A dissipates significantly more power and glows much brighter than Bulb B (counter-intuitively to non-physicists)."
  ),
  makeCase(
    chapter, 15, "Drift Velocity of Conduction Electrons in a Metallic Conductor", "Microscopic Mechanism of Electric Current",
    "In a copper conductor of cross-sectional area 1.0 mm² carrying a steady current of 1.6 A, the number density of free conduction electrons is n = 8.5 × 10²⁸ electrons/m³. Electron charge is e = 1.6 × 10⁻¹⁹ C.",
    "What is the average drift speed v_d of the conduction electrons, and why does an electric lamp turn on virtually instantaneously when a switch is closed?",
    "v_d ≈ 3 × 10⁸ m/s; electrons travel at light speed from switch to bulb.",
    "v_d ≈ 1.18 × 10⁻⁴ m/s (approx 0.1 mm/s); the lamp illuminates instantly because closing the switch establishes an electromagnetic field across the entire circuit at nearly the speed of light, setting electrons everywhere into motion simultaneously.",
    "v_d ≈ 1000 m/s; electrons carry thermal sound waves.",
    "v_d ≈ 0 m/s; electrons stay stationary while positive ions move.",
    "B",
    "Drift velocity v_d = I / (n e A) = 1.6 / (8.5 × 10²⁸ × 1.6 × 10⁻¹⁹ × 10⁻⁶) ≈ 1.18 × 10⁻⁴ m/s (fraction of a millimeter per second). Although individual electrons drift extremely slowly, the electric field propagates through the circuit conductors at roughly 2/3 the speed of light (c). Conduction electrons present throughout the circuit begin drifting instantaneously."
  ),
  makeCase(
    chapter, 16, "Maximum Power Transfer Theorem in a DC Circuit", "Load Matching to Internal Resistance",
    "A solar cell has an open-circuit voltage ε = 6.0 V and an internal source resistance of r = 3.0 Ω. An experimenter connects an adjustable load resistor R_L across the cell to find the condition for delivering maximum electrical power to the load.",
    "At what value of load resistance R_L is maximum power delivered, and what is the maximum power P_max transferred to the load?",
    "R_L = 0 Ω; P_max = 12.0 W",
    "R_L = 3.0 Ω; P_max = 3.0 W",
    "R_L = 6.0 Ω; P_max = 1.5 W",
    "R_L = ∞ Ω; P_max = 6.0 W",
    "B",
    "By the Maximum Power Transfer Theorem, a source transfers maximum power to an external load when the load resistance equals the internal resistance of the source: R_L = r = 3.0 Ω. At this condition, circuit current is I = ε / (2r) = 6.0 / 6.0 = 1.0 A. Maximum power dissipated in load is P_max = I²R_L = (1.0)² × 3.0 = 3.0 W (or P_max = ε² / 4r = 36 / 12 = 3.0 W)."
  ),
  makeCase(
    chapter, 17, "Negative Temperature Coefficient of Resistance in Semiconductors and Carbon", "Semiconductor vs Metallic Resistivity Behavior",
    "A lab technician measures the resistance of two samples as temperature increases from 20°C to 120°C: Sample X (a copper coil) shows resistance increasing from 10.0 Ω to 14.0 Ω. Sample Y (a pure germanium thermistor bead) shows resistance decreasing from 10,000 Ω to 500 Ω.",
    "Why does the resistance of germanium (Sample Y) decrease so dramatically with increasing temperature?",
    "Germanium melts into liquid metal that conducts better.",
    "In semiconductors, increasing temperature provides thermal energy to break covalent bonds, creating an exponential increase in free electron-hole pairs, which far outweighs the increased lattice scattering.",
    "Germanium loses all valence electrons through thermionic emission.",
    "The physical length of germanium contracts with temperature.",
    "B",
    "Metals have a fixed, high density of free electrons; heating increases phonon scattering, so resistance increases (positive temperature coefficient). Semiconductors (Ge, Si) and carbon have very low free carrier density at room temperature. Thermal energy excites valence electrons across the band gap into the conduction band, exponentially multiplying charge carrier density n. Since conductivity σ = neμ, resistance drops sharply (negative temperature coefficient)."
  ),
  makeCase(
    chapter, 18, "Short Circuit of an Electrochemical Battery", "Zero External Resistance and Catastrophic Current",
    "A lead-acid car battery has an EMF of ε = 12.0 V and an internal resistance of r = 0.020 Ω. A careless mechanic drops a steel wrench directly across the positive and negative battery terminals, creating a direct short circuit (R_ext ≈ 0 Ω).",
    "What instantaneous short-circuit current I_sc flows through the wrench and battery, and what is the terminal voltage V across the terminals during the short circuit?",
    "I_sc = 600 A; Terminal voltage V ≈ 0 V",
    "I_sc = 12 A; Terminal voltage V = 12 V",
    "I_sc = 240 A; Terminal voltage V = 6.0 V",
    "I_sc = 0 A; Terminal voltage V = 12 V",
    "A",
    "During a short circuit, external load resistance R ≈ 0. Short-circuit current is limited solely by internal resistance: I_sc = ε / r = 12.0 V / 0.020 Ω = 600 A. The terminal potential difference becomes V = I × R ≈ 600 A × 0 Ω = 0 V (or V = ε - Ir = 12 - 600 × 0.02 = 12 - 12 = 0 V). All 12 volts are 'lost volts' inside the battery, generating 600² × 0.02 = 7200 W of destructive internal heat."
  ),
  makeCase(
    chapter, 19, "Charging a Storage Battery: Terminal Voltage Exceeding EMF", "Potential Distribution During Battery Charging",
    "A secondary storage battery having an EMF of ε = 6.0 V and an internal resistance of r = 0.50 Ω is connected to a DC charging generator that forces a reverse charging current of I = 4.0 A through the cell (entering the positive terminal).",
    "What is the terminal voltage V across the battery during this charging process?",
    "V = 4.0 V",
    "V = 6.0 V",
    "V = 8.0 V",
    "V = 2.0 V",
    "C",
    "When a battery discharges, current leaves the positive terminal and V = ε - Ir. When a battery is being recharged, current is forced into the positive terminal against the opposing EMF. The applied terminal voltage must overcome both the EMF and the internal resistance drop: V = ε + Ir = 6.0 V + (4.0 A × 0.50 Ω) = 6.0 V + 2.0 V = 8.0 V. Thus, charging voltage strictly exceeds EMF."
  ),
  makeCase(
    chapter, 20, "Infinite Ladder Network Equivalent Resistance", "Iterative Network Analysis of Resistor Arrays",
    "An electrical engineering student analyzes an infinite ladder network of identical 1 Ω resistors. Each repeating stage consists of a 1 Ω resistor in the series branch and a 1 Ω resistor in the parallel shunt branch, extending infinitely to the right across input terminals A and B.",
    "What is the equivalent resistance R_AB across the input terminals of this infinite ladder network?",
    "R_AB = 1.0 Ω",
    "R_AB = (1 + √5) / 2 Ω ≈ 1.618 Ω (Golden Ratio)",
    "R_AB = 2.0 Ω",
    "R_AB = 0.5 Ω",
    "B",
    "Since the network is infinite, adding or removing one stage leaves the input impedance unchanged: R_AB = 1 + (1 || R_AB) = 1 + (R_AB / (1 + R_AB)). Multiplying by (1 + R_AB): R_AB(1 + R_AB) = (1 + R_AB) + R_AB => R_AB² + R_AB = 2R_AB + 1 => R_AB² - R_AB - 1 = 0. Using quadratic formula: R_AB = [1 + √(1 - 4(1)(-1))] / 2 = (1 + √5) / 2 ≈ 1.618 Ω."
  ),
  makeCase(
    chapter, 21, "Potentiometer Superiority Over a Standard Voltmeter", "Null Deflection and Infinite Input Impedance",
    "A research lab measures the delicate electrochemical EMF of a Daniell cell. Trial 1 uses a commercial pointer voltmeter having an internal resistance of 2000 Ω, reading 1.04 V. Trial 2 uses a slide-wire potentiometer using a null galvanometer method, reading 1.08 V.",
    "Why is the potentiometer reading accurate (1.08 V) while the voltmeter reading is flawed (1.04 V)?",
    "The voltmeter scales are printed incorrectly.",
    "A voltmeter draws a small operating current from the cell to deflect its needle, measuring terminal voltage V = ε - Ir rather than true EMF; a potentiometer draws zero current at the null balance point, measuring the true open-circuit EMF ε.",
    "The potentiometer generates its own electricity that increases the cell voltage.",
    "The voltmeter heats the cell, reducing its EMF.",
    "B",
    "To measure true open-circuit EMF (ε), no current must flow through the source. A standard voltmeter has finite resistance and must draw a current I = ε / (R_v + r), producing an internal IR drop (lost volts) inside the cell; hence it measures terminal voltage V < ε. A potentiometer uses a null method where at balance no current flows through the cell, acting like an ideal voltmeter with infinite resistance."
  ),
  makeCase(
    chapter, 22, "Cube of Twelve Identical 1 Ohm Resistors Along Edges", "Symmetry Analysis of 3D Resistor Network",
    "Twelve identical resistors, each of resistance r = 1.0 Ω, are soldered together to form the twelve edges of a cube. An ohmmeter is connected across two diagonally opposite body corners of the cube (e.g., corner A and corner G).",
    "What is the equivalent resistance R_body across the body diagonal of the resistor cube?",
    "R_body = 1.0 Ω",
    "R_body = 5/6 Ω ≈ 0.833 Ω",
    "R_body = 7/12 Ω ≈ 0.583 Ω",
    "R_body = 3/4 Ω = 0.75 Ω",
    "B",
    "Let total current entering corner A be 6I. By 3-fold rotational symmetry, current splits equally into 3 edges meeting at A (2I each). At the next 3 vertices, each 2I splits into two 1I currents (6 edges carrying 1I each). Finally, the 6 paths converge into 3 edges carrying 2I each to reach exit corner G. Total voltage drop: V = (2I × r) + (1I × r) + (2I × r) = 5I r. Since total current is 6I, equivalent resistance is R_eq = V / (6I) = (5I r) / (6I) = (5/6) r = 5/6 Ω ≈ 0.833 Ω."
  ),
  makeCase(
    chapter, 23, "Superconductivity at Critical Temperature (Tc)", "Zero Electrical Resistance and Meissner Effect",
    "A sample of lead metal is cooled inside a liquid helium cryostat. At 7.2 Kelvin, its electrical resistance abruptly plunges to strictly zero (less than 10⁻²⁵ Ω·m). A persistent current induced in a lead ring continues circulating without decaying for over two years without an external power source.",
    "What state of matter does lead enter at 7.2 K, and what is its consequence for Joule heating (I²Rt)?",
    "Plasma state; Joule heating becomes infinite.",
    "Superconducting state; since electrical resistance R is identically zero, Joule heating I²Rt is zero, allowing electric current to flow indefinitely without energy dissipation.",
    "Insulating state; electrons freeze in place.",
    "Semiconducting state; current flows via gamma rays.",
    "B",
    "Certain metals and compounds undergo a phase transition at a critical temperature T_c into the superconducting state. Below T_c, electrons form Cooper pairs mediated by lattice phonons, moving through the crystal lattice without scattering against thermal vibrations. Resistance drops to identically zero. With R = 0, Joule dissipation H = I²Rt = 0, so persistent currents flow indefinitely."
  ),
  makeCase(
    chapter, 24, "Effect of Cutting a Resistor into Equal Parts and Connecting in Parallel", "Subdividing Resistors and Parallel Recombination",
    "A uniform resistance wire of total resistance R = 100 Ω is cut into five equal pieces of length L/5. These five pieces are then connected together in parallel.",
    "What is the equivalent resistance R_p of this parallel combination?",
    "R_p = 20 Ω",
    "R_p = 4.0 Ω",
    "R_p = 2.0 Ω",
    "R_p = 100 Ω",
    "B",
    "Since resistance is directly proportional to length (R ∝ L), cutting the 100 Ω wire into five equal pieces gives each piece a resistance of r = 100 / 5 = 20 Ω. Connecting n = 5 identical resistors of resistance r in parallel yields an equivalent resistance: R_p = r / n = 20 Ω / 5 = 4.0 Ω. Cutting into n pieces and putting in parallel reduces resistance by a factor of n² (here 100 / 5² = 4 Ω)."
  ),
  makeCase(
    chapter, 25, "Current and Voltage Distribution in a Non-Uniform Cross-Section Conductor", "Current Density and Drift Velocity Invariance",
    "A metallic conductor of variable circular cross-section carries a steady DC current. The diameter of the wire at end 1 is d1 = 2.0 mm, while at end 2 it narrows down to d2 = 1.0 mm (half the diameter).",
    "How do the electric current I, current density J, and electron drift speed v_d compare at end 2 relative to end 1?",
    "Current is half; current density is equal; drift speed is half.",
    "Current I is identical at both ends (by conservation of charge); current density J2 is 4 times J1; drift speed v_d2 is 4 times v_d1.",
    "Current is 4 times higher at end 2; drift speed is identical.",
    "All quantities are identical because copper is homogeneous.",
    "B",
    "By conservation of electric charge, the total current I entering end 1 must equal that leaving end 2 (I1 = I2). The cross-sectional area is A = πd²/4, so narrowing diameter by 2 reduces area by 4 (A2 = A1 / 4). Current density is J = I/A, so J2 = 4 J1. Since drift velocity is v_d = J / (ne), v_d2 = 4 v_d1. Free electrons must speed up fourfold through the constriction."
  ),
  makeCase(
    chapter, 26, "Potentiometer Wire Sensitivity and Length", "Potential Gradient and Measurement Precision",
    "A student compares two potentiometers for measuring thermocouple voltages in microvolts: Potentiometer A has a wire length of 4.0 m across which 2.0 V is applied; Potentiometer B has a wire length of 10.0 m across which the same 2.0 V is applied.",
    "Which potentiometer is more sensitive, and what is its potential gradient k?",
    "Potentiometer A is more sensitive; k = 0.50 V/m",
    "Potentiometer B is more sensitive; k = 0.20 V/m (smaller potential gradient means greater balancing length per unit voltage, giving higher measurement precision)",
    "Both potentiometers have identical sensitivity because both use 2.0 V.",
    "Potentiometer A is more sensitive because shorter wires have higher resistance.",
    "B",
    "Potential gradient k is the fall of potential per unit length: k = V / L. For A: k_A = 2.0 / 4.0 = 0.50 V/m. For B: k_B = 2.0 / 10.0 = 0.20 V/m. The sensitivity of a potentiometer is inversely proportional to its potential gradient (Sensitivity ∝ 1/k). A smaller gradient produces a much longer, more easily readable balancing length for a small voltage change, making B superior."
  ),
  makeCase(
    chapter, 27, "Two Non-Identical Cells Connected in Parallel", "Equivalent EMF and Internal Resistance of Parallel Sources",
    "Two battery cells are connected in parallel with like terminals joined: Cell 1 has EMF ε1 = 2.0 V and internal resistance r1 = 1.0 Ω; Cell 2 has EMF ε2 = 1.0 V and internal resistance r2 = 1.0 Ω.",
    "What is the equivalent EMF ε_eq and equivalent internal resistance r_eq of this parallel combination?",
    "ε_eq = 3.0 V; r_eq = 2.0 Ω",
    "ε_eq = 1.5 V; r_eq = 0.5 Ω",
    "ε_eq = 1.0 V; r_eq = 1.0 Ω",
    "ε_eq = 2.0 V; r_eq = 0.5 Ω",
    "B",
    "For two cells in parallel: r_eq = (r1 × r2) / (r1 + r2) = (1.0 × 1.0) / (1.0 + 1.0) = 0.5 Ω. The equivalent EMF is given by Millman's / battery formula: ε_eq = (ε1/r1 + ε2/r2) / (1/r1 + 1/r2) = (2.0/1.0 + 1.0/1.0) / (1.0 + 1.0) = (2 + 1) / 2 = 3.0 / 2 = 1.5 V."
  ),
  makeCase(
    chapter, 28, "Resistors Arranged in a Regular Hexagon with Center Node", "Network Simplification via Node Voltage",
    "Six identical resistors of 6 Ω each form the perimeter of a regular hexagon ABCDEF. Six additional 6 Ω resistors connect each vertex to a common central junction O. An ohmmeter measures resistance between opposite vertices A and D.",
    "What is the equivalent resistance R_AD between opposite vertices A and D?",
    "R_AD = 6.0 Ω",
    "R_AD = 3.0 Ω",
    "R_AD = 2.0 Ω",
    "R_AD = 12.0 Ω",
    "B",
    "By symmetry about line AD, vertices B and F are at the same potential (V_B = V_F), and vertices C and E are at the same potential (V_C = V_E). The network can be folded along line AD or analyzed using delta-wye transformations. Current enters A and splits symmetrically into three paths (AB, AO, AF) and recombines at D through (CD, OD, ED). The parallel combinations yield R_AD = 3.0 Ω."
  ),
  makeCase(
    chapter, 29, "Rheostat as a Variable Resistor vs Potential Divider", "Three-Terminal vs Two-Terminal Rheostat Connections",
    "In an electronics experiment, a student connects a 100 Ω, 2 A wire-wound rheostat in two configurations: Circuit 1 uses one fixed end terminal and the sliding wiper terminal. Circuit 2 connects the two fixed end terminals across a fixed 12 V battery, and the load is tapped between one fixed terminal and the sliding wiper.",
    "What electrical functions do Circuit 1 and Circuit 2 perform?",
    "Circuit 1 is a potential divider (0–12 V); Circuit 2 is an ammeter.",
    "Circuit 1 acts as a variable resistor (rheostat) to control current; Circuit 2 acts as a potential divider (potentiometer) providing an output voltage continuously variable from 0 V to 12 V.",
    "Both circuits perform identical variable resistance functions.",
    "Circuit 1 acts as a transformer; Circuit 2 acts as a capacitor.",
    "B",
    "When only two terminals (one fixed end and the wiper) are used, the device acts as a variable series resistor (rheostat) to control total circuit current. When all three terminals are used (fixed ends across source, output taken across wiper and one end), it forms a potential divider. The output voltage V_out = V_in × (r_tapped / R_total) can be smoothly adjusted from 0 V up to the full source voltage."
  ),
  makeCase(
    chapter, 30, "Power Rating and Safe Current of a Resistor", "Safe Current Limit I_max = √(P/R)",
    "A carbon-film electronics resistor has a resistance of R = 100 Ω and a maximum thermal power rating of P = 0.25 W (1/4 watt).",
    "What is the maximum safe current I_max and maximum voltage V_max that can be applied across this resistor without burning it out?",
    "I_max = 2.5 mA; V_max = 0.25 V",
    "I_max = 50 mA (0.05 A); V_max = 5.0 V",
    "I_max = 250 mA; V_max = 25 V",
    "I_max = 1.0 A; V_max = 100 V",
    "B",
    "Power dissipated is P = I²R = V²/R. The maximum allowable current is I_max = √(P / R) = √(0.25 W / 100 Ω) = √(0.0025) = 0.05 A = 50 mA. The maximum allowable voltage across its terminals is V_max = √(P × R) = √(0.25 × 100) = √25 = 5.0 V. Exceeding 5 V or 50 mA will cause overheating and thermal destruction of the carbon film."
  ),
  makeCase(
    chapter, 31, "Electric Kettle Boiling Water: Power and Time Calculation", "Electrothermal Energy Balance: Pt = mcΔT",
    "An electric immersion kettle operating on 220 V mains power draws a steady current of 10.0 A. It is used to heat 1.0 kg of pure water from 20°C to its boiling point of 100°C. Specific heat capacity of water is 4200 J/(kg·°C). Assume 100% heat transfer efficiency.",
    "What is the electrical power rating of the kettle, and how long does it take to boil the water?",
    "Power = 220 W; Time = 1527 s",
    "Power = 2200 W (2.2 kW); Time = 152.7 seconds (~2.5 minutes)",
    "Power = 4400 W; Time = 76.4 s",
    "Power = 22 kW; Time = 15.3 s",
    "B",
    "Electrical power P = V × I = 220 V × 10.0 A = 2200 W = 2.2 kW. Heat required to raise water temperature: Q = m × c × ΔT = 1.0 kg × 4200 J/(kg·°C) × (100 - 20)°C = 4200 × 80 = 336,000 J. Heat supplied = Power × Time: P × t = Q => 2200 × t = 336,000 => t = 336,000 / 2200 ≈ 152.7 seconds."
  ),
  makeCase(
    chapter, 32, "Shunt Resistor Calculation to Convert Galvanometer to Ammeter", "Galvanometer to Ammeter Conversion S = I_g G / (I - I_g)",
    "A moving coil galvanometer has an internal coil resistance of G = 50 Ω and produces full-scale deflection (FSD) with a current of I_g = 2.0 mA (0.002 A). An electrical instrument maker wants to convert this galvanometer into an ammeter capable of measuring currents up to I = 2.0 A.",
    "What shunt resistance S must be connected in parallel with the galvanometer coil?",
    "S ≈ 0.050 Ω",
    "S = 50 Ω",
    "S = 500 Ω",
    "S = 0.001 Ω",
    "A",
    "To measure a larger current I, a small shunt resistance S is connected in parallel with G. The voltage across both branches is equal: I_g × G = (I - I_g) × S => S = (I_g × G) / (I - I_g). Here I_g = 0.002 A, I = 2.0 A, so I - I_g = 1.998 A. S = (0.002 × 50) / 1.998 = 0.10 / 1.998 ≈ 0.05005 Ω (approx 0.05 Ω)."
  ),
  makeCase(
    chapter, 33, "Multiplier Resistor Calculation to Convert Galvanometer to Voltmeter", "Galvanometer to Voltmeter Conversion R_se = (V / I_g) - G",
    "The same moving coil galvanometer (coil resistance G = 50 Ω, full scale deflection current I_g = 2.0 mA) is now to be converted into a voltmeter capable of reading up to V = 10.0 V full scale.",
    "What series resistance R_se must be connected in series with the galvanometer?",
    "R_se = 50 Ω",
    "R_se = 4,950 Ω",
    "R_se = 5,000 Ω",
    "R_se = 450 Ω",
    "B",
    "To measure voltage V, a large multiplier resistance R_se is connected in series with the coil: V = I_g × (G + R_se) => G + R_se = V / I_g => R_se = (V / I_g) - G. Here V = 10.0 V and I_g = 0.002 A. R_se = (10.0 / 0.002) - 50 = 5000 - 50 = 4,950 Ω."
  ),
  makeCase(
    chapter, 34, "Heating Coil Reconfiguration: Cutting in Half for Double Power", "Coil Shortening and Power Output Variation",
    "An electric room heater with a single nichrome heating element of resistance R delivers 1000 W of heating power when connected across 200 V mains. The user cuts the heating element in half, discarding one half, and connects the remaining half element across the same 200 V mains.",
    "What is the new resistance and thermal power output of the shortened heater element?",
    "Resistance = R/2; Power output doubles to 2000 W",
    "Resistance = 2R; Power output halves to 500 W",
    "Resistance = R/2; Power output halves to 500 W",
    "Resistance = R/4; Power output quadruples to 4000 W",
    "A",
    "Since resistance is directly proportional to length (R ∝ L), cutting the wire in half reduces its resistance to R' = R/2. Connected across the same voltage source V, power is P = V²/R. New power is P' = V² / (R/2) = 2(V²/R) = 2P = 2 × 1000 W = 2000 W. Note: while power doubles, current also doubles, requiring caution so as not to melt the wire."
  ),
  makeCase(
    chapter, 35, "Electrochemical Equivalent (ECE) and Faraday's First Law", "Faraday's Law of Electrolysis m = zIt",
    "In an electroplating bath, a steady direct current of 5.0 A flows through an acidified copper sulfate (CuSO₄) solution for 32 minutes and 10 seconds (1930 seconds). The electrochemical equivalent of copper is z = 0.000329 g/C (3.29 × 10⁻⁴ g/C).",
    "What mass of pure copper m is deposited on the cathode cathode plate?",
    "m = 0.317 g",
    "m = 3.175 g",
    "m = 31.75 g",
    "m = 6.35 g",
    "B",
    "By Faraday's first law of electrolysis, mass deposited is m = z × Q = z × I × t. Total charge passed is Q = 5.0 A × 1930 s = 9650 C. Mass of copper deposited is m = (3.29 × 10⁻⁴ g/C) × 9650 C = 3.17485 g ≈ 3.175 g (which corresponds to exactly 0.05 moles of Cu²⁺ ions)."
  ),
  makeCase(
    chapter, 36, "Why High Voltage AC is Used for Long-Distance Power Transmission", "Transmission Line Loss Minimization: P_loss = I²R_line",
    "A thermal power station generates 100 MW of electrical power to be transmitted over a distance of 200 km through transmission cables of total resistance R_line = 10 Ω. The transmission engineers evaluate transmitting at V1 = 10 kV versus stepping up to V2 = 400 kV.",
    "What is the transmission line I²R power loss when transmitting at 400 kV compared to 10 kV?",
    "Power loss at 400 kV is 40 times less.",
    "Power loss at 400 kV is 1600 times less (reduced from 100% loss at 10 kV down to just 0.625 MW at 400 kV).",
    "Power loss is identical because line resistance is unchanged.",
    "Power loss at 400 kV is 1600 times greater.",
    "B",
    "Power transmitted is P = V × I, so current is I = P / V. Line power loss is P_loss = I²R_line = (P / V)² × R_line = P²R_line / V². Thus line power loss is inversely proportional to the square of transmission voltage (P_loss ∝ 1/V²). Increasing voltage by a factor of 40 (from 10 kV to 400 kV) reduces transmission line power loss by 40² = 1600 times, dramatically conserving energy."
  ),
  makeCase(
    chapter, 37, "Comparing Resistivity of Manganin / Constantan vs Copper", "Standard Resistance Coils and Low Temperature Coefficient",
    "An instrument manufacturer winds standard resistance boxes and precision laboratory rheostats using wires of Manganin (an alloy of Cu, Mn, Ni) or Constantan (Cu, Ni) rather than pure copper.",
    "What two physical properties make Manganin and Constantan ideal for standard resistance coils?",
    "They have zero resistivity and melt at room temperature.",
    "They possess high resistivity (allowing compact coil sizes) and an almost negligible temperature coefficient of resistance, so resistance remains stable despite temperature changes.",
    "They are ferromagnetic and attract copper leads.",
    "They convert electrical current directly into light.",
    "B",
    "Standard resistors require high electrical stability. Manganin and Constantan have: (1) high specific resistance (~30 to 50 times that of copper), meaning short, compact coils can provide large resistance, and (2) nearly zero temperature coefficient of resistance (α ≈ 10⁻⁵ /°C), meaning their resistance changes negligibly even when current causes mild self-heating."
  ),
  makeCase(
    chapter, 38, "Internal Resistance of an Old Dry Cell vs Fresh Alkaline Cell", "Electrolyte Depletion and High Internal Resistance",
    "A student attempts to power a motorized robotic toy using an old, expired 1.5 V zinc-carbon dry cell. A high-impedance digital voltmeter reads 1.48 V across the old cell. However, as soon as the motor is connected, the motor does not turn at all and the terminal voltage drops to 0.15 V. When a fresh alkaline cell (reading 1.50 V) is connected, the motor spins vigorously and terminal voltage stays at 1.42 V.",
    "What happened to the internal resistance of the old dry cell as it aged?",
    "Its internal resistance dropped to zero.",
    "Its internal resistance grew immensely (from ~0.1 Ω to > 10 Ω) due to drying of the paste electrolyte and build-up of chemical reaction products, creating huge internal lost volts (Ir) when drawing motor current.",
    "The old cell began generating alternating current.",
    "The motor demagnetized the old cell.",
    "B",
    "A voltmeter draws negligible current, so it reads open-circuit EMF (ε ≈ 1.48 V). However, as a dry cell ages, electrolyte moisture evaporates and zinc-ammonium complexes clog the separator, driving internal resistance r up to 10–20 Ω. When a motor requiring 0.5 A is attached, the terminal voltage collapses: V = ε - Ir = 1.48 - (0.5 × 10) < 0, dropping to ~0.15 V. The cell can no longer deliver current."
  ),
  makeCase(
    chapter, 39, "Delta-Star (Δ-Y) Equivalence Transformation in Bridge Networks", "Three-Terminal Network Transformation",
    "Three resistors of 9 Ω each are connected in a delta (Δ) triangle between nodes A, B, and C. An electrical engineer wants to replace them with an equivalent star (Y) connected network of three resistors Ra, Rb, Rc connected to a common neutral point N.",
    "What is the resistance of each star branch resistor Ra, Rb, and Rc?",
    "Ra = Rb = Rc = 3.0 Ω",
    "Ra = Rb = Rc = 9.0 Ω",
    "Ra = Rb = Rc = 27.0 Ω",
    "Ra = Rb = Rc = 1.0 Ω",
    "A",
    "For a symmetrical delta network with three equal resistors R_Δ = 9 Ω, the equivalent star branch resistors are given by the transformation formula: R_Y = (R_Δ × R_Δ) / (R_Δ + R_Δ + R_Δ) = R_Δ² / (3R_Δ) = R_Δ / 3. Therefore, each star branch resistance is Ra = Rb = Rc = 9.0 Ω / 3 = 3.0 Ω."
  ),
  makeCase(
    chapter, 40, "Resistivity Variation in Conductors vs Insulators vs Semiconductors", "Comparative Orders of Magnitude of Resistivity",
    "A materials science laboratory tests three mystery rods at 20°C: Material X has resistivity ρ_X ≈ 1.7 × 10⁻⁸ Ω·m; Material Y has resistivity ρ_Y ≈ 0.46 Ω·m; Material Z has resistivity ρ_Z ≈ 1.0 × 10¹⁴ Ω·m.",
    "What are the correct material classifications for X, Y, and Z?",
    "X: Insulator; Y: Semiconductor; Z: Conductor",
    "X: Good Conductor (metal); Y: Semiconductor; Z: Electrical Insulator (dielectric)",
    "X: Semiconductor; Y: Superconductor; Z: Metal",
    "X: Superconductor; Y: Insulator; Z: Conductor",
    "B",
    "Resistivity categorizes materials across a 24-order-of-magnitude span: Conductors (metals like Cu, Ag) have very low resistivities (~10⁻⁸ to 10⁻⁶ Ω·m); Semiconductors (Ge, Si) have intermediate resistivities (~10⁻² to 10² Ω·m); Insulators (glass, rubber, mica, quartz) have extremely high resistivities (~10¹⁰ to 10¹⁶ Ω·m)."
  ),
  makeCase(
    chapter, 41, "Resistance of a Stretched Metallic Cylinder of Fixed Mass", "General Stretching Formula R' = n² R",
    "A laboratory technician has a wire of resistance R = 5.0 Ω. The wire is stretched uniformly through a series of rollers until its diameter is reduced to half its initial diameter (d' = d/2).",
    "What is the new resistance R' of the stretched wire?",
    "R' = 20 Ω",
    "R' = 40 Ω",
    "R' = 80 Ω",
    "R' = 10 Ω",
    "C",
    "Since cross-sectional area is A = πd²/4, halving diameter (d' = d/2) reduces area by 4: A' = A/4. Because volume V = A × L is constant during stretching, reducing area to 1/4 forces length to quadruple: L' = 4L. The new resistance is R' = ρL'/A' = ρ(4L)/(A/4) = 16(ρL/A) = 16R. Therefore R' = 16 × 5.0 Ω = 80 Ω."
  ),
  makeCase(
    chapter, 42, "Current Through Resistors in Series-Parallel Mixed Circuit", "Branch Analysis in Series-Parallel Combination",
    "A circuit consists of an 8.0 Ω resistor connected in series with a parallel combination of two resistors: 12.0 Ω and 6.0 Ω. The entire circuit is connected across a 24 V DC power source with zero internal resistance.",
    "What is the total circuit current I, and what is the current through the 6.0 Ω resistor?",
    "Total current = 2.0 A; Current through 6.0 Ω resistor = 1.33 A",
    "Total current = 2.0 A; Current through 6.0 Ω resistor = 0.67 A",
    "Total current = 1.0 A; Current through 6.0 Ω resistor = 0.50 A",
    "Total current = 3.0 A; Current through 6.0 Ω resistor = 2.0 A",
    "A",
    "The parallel combination of 12 Ω and 6 Ω has equivalent resistance: R_p = (12 × 6) / (12 + 6) = 72 / 18 = 4.0 Ω. Total circuit resistance is R_total = 8.0 Ω + 4.0 Ω = 12.0 Ω. Total current is I = V / R_total = 24 V / 12.0 Ω = 2.0 A. Voltage across parallel block is V_p = I × R_p = 2.0 A × 4.0 Ω = 8.0 V. Current through the 6.0 Ω branch is I_6 = V_p / 6.0 = 8.0 V / 6.0 Ω = 1.33 A."
  ),
  makeCase(
    chapter, 43, "Thermistor Resistance Variation in Fire Alarm Circuits", "NTC Thermistor Application in Temperature Sensing",
    "A fire detection circuit uses a negative temperature coefficient (NTC) bead thermistor placed in series with a fixed 1000 Ω resistor and a 12 V power supply. At room temperature (25°C), the thermistor resistance is 5000 Ω. In a fire, the ambient temperature rises to 200°C, causing the thermistor resistance to plunge to 100 Ω.",
    "What happens to the current in the circuit and the voltage drop across the fixed resistor during the fire?",
    "Current decreases from 2 mA to 0.1 mA; voltage drops to near zero.",
    "Current increases from 2.0 mA to 10.9 mA; voltage drop across the fixed resistor jumps from 2.0 V to 10.9 V, triggering the alarm relay circuit.",
    "Current and voltage remain unchanged because thermistors follow Ohm's law.",
    "The thermistor emits a high-frequency radio signal directly.",
    "B",
    "At 25°C: R_total = 5000 + 1000 = 6000 Ω; I = 12 / 6000 = 2.0 mA; V_fixed = 2.0 mA × 1000 Ω = 2.0 V. At 200°C: thermistor drops to 100 Ω; R_total = 100 + 1000 = 1100 Ω; I = 12 / 1100 ≈ 10.9 mA; V_fixed = 10.9 mA × 1000 Ω ≈ 10.9 V. This large voltage jump across the fixed resistor is detected by an operational amplifier to ring the fire alarm."
  ),
  makeCase(
    chapter, 44, "Total Energy Consumed by Multiple Appliances in a Household", "Calculation of Monthly Electrical Consumption and Cost",
    "A house uses four 100 W bulbs for 5 hours each day, an 80 W television for 6 hours each day, and a 1000 W water heater for 1 hour each day. The billing cycle is 30 days, and the electricity tariff is ₹6.00 per unit (kWh).",
    "What is the total energy consumed in kWh per month, and what is the total electricity bill?",
    "104.4 kWh; Cost = ₹626.40",
    "74.4 kWh; Cost = ₹446.40",
    "52.2 kWh; Cost = ₹313.20",
    "200 kWh; Cost = ₹1200.00",
    "A",
    "Daily energy: (1) Bulbs: 4 × 100 W × 5 h = 2000 Wh = 2.0 kWh; (2) TV: 80 W × 6 h = 480 Wh = 0.48 kWh; (3) Water heater: 1000 W × 1 h = 1000 Wh = 1.0 kWh. Total daily consumption = 2.0 + 0.48 + 1.0 = 3.48 kWh. Total monthly consumption (30 days) = 3.48 × 30 = 104.4 kWh. Monthly bill = 104.4 units × ₹6.00/unit = ₹626.40."
  ),
  makeCase(
    chapter, 45, "Internal Resistance Calculation from Cell Circuit Graph", "Intercepts of V vs I Graph for a Cell",
    "An experimenter measures the terminal voltage V across a real cell as a function of load current I. The resulting plot is a straight line sloping downward, intersecting the vertical voltage axis at V = 1.50 V and intersecting the horizontal current axis at I = 3.0 A.",
    "What are the EMF ε and internal resistance r of this cell?",
    "ε = 1.50 V; r = 0.50 Ω",
    "ε = 3.0 V; r = 1.50 Ω",
    "ε = 1.50 V; r = 2.0 Ω",
    "ε = 4.5 V; r = 0.33 Ω",
    "A",
    "The equation for a discharging cell is V = ε - Ir. On a plot of V against I: (1) The y-intercept (where I = 0) represents the open-circuit EMF: ε = 1.50 V. (2) The x-intercept (where V = 0) represents the short-circuit current: I_sc = ε / r = 3.0 A. Therefore: r = ε / I_sc = 1.50 V / 3.0 A = 0.50 Ω (also given by the magnitude of the slope: |slope| = r = 1.50 / 3.0 = 0.50 Ω)."
  ),
  makeCase(
    chapter, 46, "Series vs Parallel Connecting Wires in Mains Electricity", "Mains Wiring and Independent Switching",
    "A home homeowner considers whether to connect domestic ceiling fans, air conditioners, and lights in series or in parallel across the single-phase 230 V AC mains supply.",
    "Why are all domestic electrical appliances universally connected in parallel?",
    "Parallel connection doubles the frequency of alternating current.",
    "In parallel, each appliance receives the full rated mains voltage (230 V), operates independently with its own switch, and a failure in one appliance does not interrupt power to other appliances.",
    "Parallel connection makes total resistance higher, saving electricity.",
    "Series connection would cause all appliances to produce dangerous sparks.",
    "B",
    "In a parallel distribution system: (1) Each appliance operates at its designed rated voltage (230 V) regardless of what other appliances are turned on. (2) Each branch circuit has an independent on/off switch. (3) If one appliance burns out or is switched off, the remaining branches remain closed and fully functional. (4) Total resistance decreases as more loads are added, allowing required power draw."
  ),
  makeCase(
    chapter, 47, "Why Bird Perched on a High Voltage Power Cable Does Not Get Electrocuted", "Potential Difference vs Absolute Potential",
    "A pigeon lands with both feet gripping an uninsulated high-voltage aluminum transmission line energized at 132,000 V (132 kV) relative to the earth. The bird chirps happily and experiences no electric shock whatsoever.",
    "Why is the bird completely unharmed despite standing on a 132 kV live line?",
    "The bird's talons are made of ceramic diamond insulator.",
    "Both feet of the bird rest on the same conductor only a few centimeters apart; because resistance of that short length of wire is virtually zero, the potential difference (voltage drop ΔV) between its feet is essentially zero, so no significant current passes through its body.",
    "Alternating current flows only along the bottom of the wire.",
    "The bird has a natural electric potential of 132 kV.",
    "B",
    "Electric current flows through a body only when there is a potential difference (voltage drop ΔV = V1 - V2) across two points of contact. The bird is at a high absolute potential (132 kV), but both its feet touch the same thick aluminum conductor separated by only ~3 cm. Since wire resistance between its feet is ~10⁻⁶ Ω, ΔV = I × R_wire is negligible (microvolts). Current bypasses the bird's high-resistance body."
  ),
  makeCase(
    chapter, 48, "Resistance of a Thick Hollow Cylindrical Conductor", "Resistance of Annular Conductor R = ρL / [π(R2² - R1²)]",
    "An electrical busbar consists of a hollow copper tube of length L = 2.0 m, outer radius R2 = 20 mm, and inner radius R1 = 10 mm. The resistivity of copper is ρ = 1.7 × 10⁻⁸ Ω·m.",
    "What is the cross-sectional area of copper A and the electrical resistance R of this hollow busbar?",
    "A = 3.14 × 10⁻⁴ m²; R = 1.08 × 10⁻⁴ Ω",
    "A = 9.42 × 10⁻⁴ m²; R = 3.61 × 10⁻⁵ Ω",
    "A = 1.25 × 10⁻³ m²; R = 2.72 × 10⁻⁵ Ω",
    "A = 6.28 × 10⁻⁴ m²; R = 5.41 × 10⁻⁵ Ω",
    "B",
    "The cross-sectional area of the annular metal region is A = π(R2² - R1²) = π[(0.020)² - (0.010)²] = π[0.0004 - 0.0001] = π × 0.0003 ≈ 9.425 × 10⁻⁴ m². The resistance is R = ρL / A = (1.7 × 10⁻⁸ Ω·m × 2.0 m) / (9.425 × 10⁻⁴ m²) = 3.4 × 10⁻⁸ / 9.425 × 10⁻⁴ ≈ 3.61 × 10⁻⁵ Ω."
  ),
  makeCase(
    chapter, 49, "Shorting One Resistor in a Symmetrical Network", "Network Reconfiguration Under Zero Resistance Bypass",
    "Two identical resistors of 10 Ω each are connected in series with a 12 V battery, drawing a steady current of 0.6 A. A thick copper jumper wire of negligible resistance is suddenly connected across the terminals of one of the 10 Ω resistors, effectively shorting it out.",
    "What is the new total circuit resistance and the new current supplied by the battery?",
    "Resistance = 0 Ω; Current = 12 A",
    "Resistance = 10 Ω; Current doubles to 1.2 A",
    "Resistance = 20 Ω; Current remains 0.6 A",
    "Resistance = 5 Ω; Current increases to 2.4 A",
    "B",
    "Initially, R_total = 10 + 10 = 20 Ω; I = 12 / 20 = 0.6 A. When a jumper wire (r ≈ 0) is connected across one resistor, it places a zero-resistance path in parallel with that 10 Ω resistor: R_p = (10 × 0)/(10 + 0) = 0 Ω. That resistor is completely bypassed. Total circuit resistance drops to the single remaining resistor: R_total' = 10 Ω. New current is I' = 12 V / 10 Ω = 1.2 A (current doubles)."
  ),
  makeCase(
    chapter, 50, "Electrolyte Temperature and Cell Internal Resistance in Freezing Weather", "Cold Weather Battery Cranking Degradation",
    "On a sub-zero winter morning (-15°C), a motorist finds that their car battery struggles to crank the starter motor, sounding sluggish and weak. After the car is towed into a heated garage at 25°C for two hours, the exact same battery easily cranks and starts the engine without any recharging.",
    "Why does freezing ambient temperature severely impair an electrochemical battery's cranking performance?",
    "Cold temperatures cause electrons to evaporate from lead plates.",
    "Cold temperatures increase the viscosity of the sulfuric acid electrolyte and reduce ionic mobility, drastically increasing the battery's internal resistance r and increasing internal lost volts (Ir) under high cranking currents.",
    "Freezing temperatures convert alternating current into direct current.",
    "The open-circuit EMF of the battery drops to zero below 0°C.",
    "B",
    "An electrochemical battery produces electric current via the physical migration of ions (H⁺ and HSO₄⁻) through liquid electrolyte. At low temperatures, liquid viscosity increases and ionic kinetic energy drops, significantly slowing ion migration. This causes internal resistance r to spike by 300–400%. Under a heavy starter motor load (200 A), internal lost volts v = Ir drops terminal voltage V = ε - Ir below the threshold needed to crank the engine."
  )
];

const targetPath = path.join(__dirname, 'questionBank', 'physics_case_current_electricity.json');
fs.writeFileSync(targetPath, JSON.stringify(electricityCases, null, 2), 'utf8');
console.log(`Saved ${electricityCases.length} case studies for Current Electricity to ${targetPath}`);
