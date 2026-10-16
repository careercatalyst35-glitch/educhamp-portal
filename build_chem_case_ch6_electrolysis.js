// build_chem_case_ch6_electrolysis.js
// 50 Case-Based MCQs for ICSE Class 10 Chemistry: Chapter 6 - Electrolysis

const fs = require('fs');
const path = require('path');
const { makeChemCase } = require('./chem_case_helper');

const chapter = "Electrolysis";
const cases = [];

cases.push(makeChemCase(
  chapter, 1, "Electrolysis of Molten Lead Bromide ($PbBr_2$)", "Silica Crucible and Graphite Electrode Selection",
  "In an ICSE chemistry demonstration of molten salt electrolysis, solid Lead(II) bromide (PbBr₂) is placed in a crucible and heated with a Bunsen burner until it melts into a clear red liquid at 380°C. Two graphite electrodes connected to a 6V DC battery are immersed in the melt.\nObservation 1: A silvery-grey molten metal collects at the cathode and sinks to the bottom.\nObservation 2: Pungent, reddish-brown fumes evolve at the anode.",
  "Why must the crucible be made of silica, why are graphite electrodes used instead of platinum, and what are the electrode products?",
  "Crucible is silica to conduct electricity; platinum dissolves in lead; products are bromine at cathode and lead at anode.",
  "Silica crucible is non-reactive and withstands high temperatures without cracking; graphite resists corrosive attack by hot bromine vapors at 380°C (which attack platinum); products are molten Lead at cathode (Pb²⁺ + 2e⁻ → Pb) and Bromine gas at anode (2Br⁻ - 2e⁻ → Br₂).",
  "Silica generates magnetic fields; graphite is cheaper than glass; products are hydrogen and oxygen.",
  "Crucible is made of silica to absorb oxygen; products are liquid sodium and chlorine.",
  "B",
  "Details of molten PbBr₂ electrolysis:\n1. Crucible material: Silica is chosen because it is thermally resistant, non-porous, and unreactive toward corrosive molten lead and hot bromine vapors.\n2. Electrode material: Graphite (carbon) is used for both electrodes because hot bromine vapor attacks platinum at high temperatures, forming volatile platinum bromides, whereas graphite is chemically inert to bromine.\n3. Cathode (negative): Pb²⁺ ions gain two electrons to deposit molten lead metal: Pb²⁺ + 2e⁻ → Pb(l) (silvery grey bead).\n4. Anode (positive): Br⁻ ions lose electrons to evolve reddish-brown bromine gas: 2Br⁻ - 2e⁻ → Br₂(g)."
));

cases.push(makeChemCase(
  chapter, 2, "Electrolysis of Acidified Water: Hofmann's Voltameter", "Volume Ratio and Preferential Anion Discharge",
  "In a Hofmann voltameter, water acidified with dilute sulphuric acid is electrolyzed using inert platinum foil electrodes. Gas bubbles evolve continuously at both vertical graduated limbs.\nObservation: The volume of gas collected in the cathode limb is exactly double the volume of gas collected in the anode limb (ratio 2:1 by volume).",
  "What gases are collected at the cathode and anode, why is dilute sulphuric acid added, and why is the volume ratio exactly 2:1?",
  "Cathode = O₂; Anode = H₂; acid neutralizes alkali; ratio is 2:1 because oxygen is denser.",
  "Cathode = Hydrogen (H₂); Anode = Oxygen (O₂); dilute H₂SO₄ provides mobile ions because pure water is an extremely weak electrolyte; ratio is 2:1 because 4H⁺ are reduced per 1 molecule of O₂ formed: 4e⁻ produce 2H₂ at cathode but only 1O₂ at anode.",
  "Cathode = SO₂; Anode = H₂; acid is the fuel; ratio is 2:1 due to atmospheric pressure.",
  "Cathode = Cl₂; Anode = H₂; acid prevents explosion; ratio is 2:1 because chlorine dissolves in water.",
  "B",
  "Pure water is an exceptionally weak electrolyte (autoionisation Kw = 10⁻¹⁴), conducting virtually zero current. Adding dilute H₂SO₄ provides free H⁺ and SO₄²⁻ ions. At Cathode (reduction): 2H⁺ + 2e⁻ → H₂ (or 4H⁺ + 4e⁻ → 2H₂). At Anode (oxidation): OH⁻ ions (from water) have a lower discharge potential than SO₄²⁻ and are discharged preferentially: 4OH⁻ - 4e⁻ → 2H₂O + O₂. To balance the 4 electrons transferred, 2 moles of H₂ gas are evolved for every 1 mole of O₂ gas. By Avogadro's Law, equal moles equal equal volumes, giving a precise 2:1 volume ratio."
));

cases.push(makeChemCase(
  chapter, 3, "Electrolysis of Aqueous $CuSO_4$ with Inert Platinum Electrodes", "Fading of Blue Color and Acid Accumulation",
  "An electrochemist electrolyzes aqueous Copper(II) sulphate (CuSO₄) solution using inert Platinum electrodes. Over 30 minutes, two distinct changes occur:\n1. A shiny, reddish-brown metallic coating deposits on the platinum cathode.\n2. Colorless gas bubbles evolve at the platinum anode, which relight a glowing splinter.\n3. The intense blue color of the electrolyte gradually fades until the solution becomes completely colorless and strongly acidic.",
  "Why does the blue color fade, and what acid is formed in the electrolyte?",
  "Blue color fades because water evaporates; hydrochloric acid is formed.",
  "Blue color is caused by Cu²⁺ ions; Cu²⁺ ions are continuously discharged and deposited as metallic copper at the cathode (Cu²⁺ + 2e⁻ → Cu), while OH⁻ is discharged at the anode (forming O₂), leaving H⁺ and SO₄²⁻ ions in solution to accumulate as Sulphuric acid (H₂SO₄).",
  "Blue color fades because platinum absorbs copper atoms; nitric acid is formed.",
  "The solution turns colorless because copper turns into zinc.",
  "B",
  "In aqueous CuSO₄, four ions exist: Cu²⁺, H⁺, SO₄²⁻, OH⁻.\n- At Platinum Cathode: Cu²⁺ is lower than H⁺ in the electrochemical series and is discharged preferentially: Cu²⁺ + 2e⁻ → Cu(s) (reddish-brown deposit).\n- At Platinum Anode: OH⁻ is lower than SO₄²⁻ and is discharged preferentially: 4OH⁻ - 4e⁻ → 2H₂O + O₂↑ (oxygen gas).\nBecause Cu²⁺ ions are permanently removed from solution without replacement, the blue color (due to hydrated Cu²⁺) fades to colorless. As OH⁻ ions are consumed, unreacted H⁺ cations and SO₄²⁻ anions accumulate, transforming the electrolyte into dilute sulphuric acid (H₂SO₄)."
));

cases.push(makeChemCase(
  chapter, 4, "Electrolysis of Aqueous $CuSO_4$ with Active Copper Electrodes", "Constant Blue Color and Anode Dissolution",
  "In an industrial copper refining cell, aqueous Copper(II) sulphate is electrolyzed using a thick slab of impure copper as the Anode and a thin sheet of pure copper as the Cathode.\nObservation: The cathode increases steadily in mass as pure copper deposits, the anode slowly dissolves and loses mass, and the deep blue color of the CuSO₄ electrolyte remains completely CONSTANT throughout the entire process.",
  "Why does the blue color of the electrolyte remain constant when active copper electrodes are used?",
  "Copper sulphate is an organic dye that never loses color.",
  "The rate at which Cu²⁺ ions are discharged and deposited at the cathode (Cu²⁺ + 2e⁻ → Cu) exactly equals the rate at which copper atoms dissolve from the active copper anode into solution (Cu - 2e⁻ → Cu²⁺), maintaining a constant concentration of Cu²⁺ ions.",
  "The electrical current converts water into copper sulphate.",
  "Active copper electrodes prevent electrons from flowing through the liquid.",
  "B",
  "When an active copper anode is used, neither SO₄²⁻ nor OH⁻ is discharged because the energy required to remove electrons from metallic copper atoms (oxidation: Cu → Cu²⁺ + 2e⁻, E° = +0.34 V) is lower than discharging OH⁻ (E° = +1.23 V) or SO₄²⁻. Therefore, the copper anode dissolves directly into the solution as Cu²⁺ ions. At the cathode, Cu²⁺ ions from solution are reduced to copper metal: Cu²⁺ + 2e⁻ → Cu. Because for every Cu²⁺ ion deposited at the cathode, an identical Cu²⁺ ion enters the solution from the anode, the concentration of hydrated [Cu(H₂O)₆]²⁺ ions remains perfectly constant, preserving the blue color."
));

cases.push(makeChemCase(
  chapter, 5, "Electroplating an Iron Spoon with Silver", "Selection of Electrolyte: Sodium Argentocyanide vs $AgNO_3$",
  "A jeweler electroplates an iron spoon with pure silver. The iron spoon is made the Cathode, and a pure silver plate is made the Anode. The master jeweler instructs the apprentice to use a solution of Sodium Argentocyanide (Na[Ag(CN)₂]) as the electrolyte, strictly forbidding the use of Silver Nitrate (AgNO₃) solution.",
  "Why is Sodium Argentocyanide preferred over Silver Nitrate for high-quality electroplating?",
  "Silver nitrate is non-conducting and does not dissolve in water.",
  "Silver nitrate ionises rapidly, providing a high concentration of Ag⁺ ions that deposit too quickly, producing an uneven, rough, powdery, brittle coating that easily peels off; Sodium argentocyanide is a complex salt that dissociates slowly, furnishing a low, uniform concentration of Ag⁺ that yields a smooth, firm, adherent, mirror-like deposit.",
  "Silver nitrate dissolves the iron spoon before electroplating can begin.",
  "Sodium argentocyanide contains gold that hardens the silver layer.",
  "B",
  "For superior electroplating, the metal must deposit slowly, uniformly, and compactly. Silver nitrate (AgNO₃) is a strong electrolyte that dissociates 100% into Ag⁺ and NO₃⁻. Under DC current, the high concentration of Ag⁺ causes rapid, chaotic deposition of large dendritic silver crystals, forming a spongy, non-adherent, grey powder that peels off. Sodium argentocyanide is a complex salt: Na[Ag(CN)₂] ⇌ Na⁺ + [Ag(CN)₂]⁻. The complex anion dissociates reversibly to a minute degree: [Ag(CN)₂]⁻ ⇌ Ag⁺ + 2CN⁻. This controlled, micro-level release of Ag⁺ ions ensures slow, uniform atomic layering, producing a brilliant, mirror-finish silver coating."
));

cases.push(makeChemCase(
  chapter, 6, "Electrorefining of Blister Copper: Anode Mud and Impurities", "Selective Anodic Dissolution of More vs Less Electropositive Metals",
  "An electro-refinery purifies crude 'blister copper' (containing 98% Cu with impurities of Zinc, Iron, Silver, and Gold) using acidified CuSO₄ electrolyte. During electrolysis, pure copper deposits on the cathode. A sludge called 'anode mud' accumulates at the bottom beneath the anode.\nAssay of the electrolyte shows dissolved Zn²⁺ and Fe²⁺ ions, while assay of the anode mud shows metallic Silver and Gold.",
  "Why do Zinc and Iron dissolve into the electrolyte while Silver and Gold settle into the anode mud?",
  "Zinc and iron are heavier than silver and gold.",
  "Zinc and Iron are more electropositive than copper (lower in reduction potential), so they lose electrons preferentially at the anode and dissolve as Zn²⁺ and Fe²⁺ ions; Silver and Gold are less electropositive than copper, so they do not ionise at the cell voltage and fall to the bottom as unreacted metallic anode mud.",
  "Silver and gold are soluble in sulphuric acid, while zinc is insoluble.",
  "Anode mud is composed of melted copper that froze at the bottom.",
  "B",
  "In electrolytic refining, the applied cell voltage is precisely regulated (~0.2–0.3 V) to selectively oxidise copper: Cu → Cu²⁺ + 2e⁻. Metals more electropositive than copper (Zn, Fe, Ni) have lower reduction potentials than copper and are oxidised even more readily, dissolving into the electrolyte as Zn²⁺ and Fe²⁺ ions (they do not deposit on the cathode because Cu²⁺ has a higher discharge potential). Metals less electropositive than copper (Ag, Au, Pt) cannot lose electrons at this low voltage; as the surrounding copper matrix dissolves away, they drop by gravity to the cell floor as valuable 'anode mud'."
));

cases.push(makeChemCase(
  chapter, 7, "Hall-Héroult Process: Role of Cryolite ($Na_3AlF_6$) and Fluorspar ($CaF_2$)", "Melting Point Suppression and Conductivity Enhancement",
  "In the industrial Hall-Héroult cell for aluminium extraction, pure Alumina (Al₂O₃) has a melting point of 2050°C and is an extremely poor conductor of electricity in molten state. The extraction engineers mix the alumina with molten Cryolite (Na₃AlF₆, 60%) and Fluorspar (CaF₂, 20%), operating the cell at only 950°C.",
  "What are the three essential metallurgical functions of adding Cryolite and Fluorspar to alumina?",
  "They act as reducing agents that reduce alumina without electricity.",
  "(1) Lowers the melting point of the mixture from ~2050°C to ~950°C (massive energy savings); (2) Enhances the electrical conductivity of the molten electrolyte; (3) Acts as a solvent that dissolves alumina completely.",
  "They convert aluminium into a gas that distills over at 950°C.",
  "They prevent carbon dioxide from escaping into the environment.",
  "B",
  "Pure alumina (Al₂O₃) is impractical to electrolyze directly because: (1) It melts at 2050°C (structural materials and electrodes fail at this temperature, and aluminium vaporizes at 2467°C); (2) Molten Al₂O₃ is almost an electrical insulator. Adding Cryolite (Na₃AlF₆) and Fluorspar (CaF₂) forms an ionic eutectic mixture that: (1) Drastically reduces the operating temperature from 2050°C to ~950°C; (2) Disperses into mobile Na⁺, Ca²⁺, AlF₆³⁻, and F⁻ ions, vastly increasing electrical conductivity; (3) Lowers the density of the melt (~2.1 g/cm³) so that molten aluminium (~2.3 g/cm³) sinks to the bottom, shielded from air oxidation."
));

cases.push(makeChemCase(
  chapter, 8, "Hall-Héroult Process: Why Carbon Anodes Must Be Periodically Replaced", "Anodic Combustion of Graphite by Nascent Oxygen",
  "An operations manager at an aluminium smelter orders a delivery of 50 tons of graphite anode blocks each month. The carbon anodes suspended in the Hall-Héroult electrolytic bath are consumed at a rate of approximately 0.5 kg of carbon per 1 kg of aluminium produced.",
  "What chemical reaction causes the carbon anodes to be continuously consumed during the electrolysis of alumina?",
  "The carbon anodes dissolve in liquid aluminium to form diamond.",
  "Oxygen gas evolved at the anode at ~950°C reacts with the red-hot carbon rods, oxidising the graphite into carbon monoxide and carbon dioxide: 2O²⁻ - 4e⁻ → O₂; C + O₂ → CO₂↑ and 2C + O₂ → 2CO↑.",
  "The electric current causes carbon atoms to undergo radioactive fission.",
  "The cryolite solvent eats the carbon electrodes by acid corrosion.",
  "B",
  "At the anode of the Hall-Héroult cell, oxide ions from alumina lose electrons to form oxygen gas: 2O²⁻ - 4e⁻ → O₂(g). Because the bath operates at approximately 950°C, the newly formed oxygen gas immediately attacks the glowing graphite rods: C(s) + O₂(g) → CO₂(g) and 2C(s) + O₂(g) → 2CO(g). The carbon anodes are literally burned away into greenhouse gases, steadily eroding and requiring continuous lowering and periodic replacement."
));

cases.push(makeChemCase(
  chapter, 9, "Why Powdered Coke is Sprinkled on the Hall-Héroult Electrolyte", "Thermal Insulation and Anode Air-Oxidation Prevention",
  "A layer of crushed powdered coke (carbon) is sprinkled over the open surface of the molten electrolyte bath in the Hall-Héroult cell.",
  "What dual protective purpose does this surface layer of powdered coke serve?",
  "It bleaches the molten aluminium and acts as a electrical fuse.",
  "(1) It serves as a thermal insulator, preventing massive heat loss by radiation; (2) It prevents the carbon anodes from burning in atmospheric oxygen above the molten bath.",
  "It reacts with cryolite to produce sodium metal.",
  "It prevents rainwater from falling into the smelter.",
  "B",
  "Powdered coke sprinkled on the electrolytic surface serves two critical functions:\n1. Thermal insulation: At 950°C, enormous thermal energy is lost via blackbody radiation. The floating coke layer forms a blanket of low thermal conductivity, keeping the bath molten without excessive heating costs.\n2. Oxidation prevention: The suspended carbon anode rods emerge from the bath into open air; without a coke shield, the red-hot graphite rods would ignite and burn in atmospheric oxygen above the bath level."
));

cases.push(makeChemCase(
  chapter, 10, "Faraday's Constant and Charge Required to Deposit Aluminium", "Stoichiometry of Electron Transfer ($Q = nF$)",
  "In an industrial aluminium smelter, a direct current is passed through molten alumina. The cathodic reduction is: Al³⁺ + 3e⁻ → Al(l).\nAtomic mass: Al = 27.0 g/mol; Faraday's constant: 1 F = 96,500 Coulombs.",
  "What quantity of electric charge in Coulombs (and how many Faradays) is required to deposit exactly 54.0 g of pure aluminium metal?",
  "96,500 C (1 F)",
  "579,000 C (6 F)",
  "289,500 C (3 F)",
  "193,000 C (2 F)",
  "B",
  "1. Moles of Aluminium to deposit = Mass / Atomic mass = 54.0 g / 27.0 g/mol = 2.00 mol.\n2. From the half-reaction: Al³⁺ + 3e⁻ → Al.\nDepositing 1 mole of Al requires 3 moles of electrons (3 Faradays).\n- Depositing 2.00 moles of Al requires: 2.00 × 3 = 6.00 moles of electrons = 6 Faradays (6 F).\n3. Total electric charge Q = n × F = 6 × 96,500 C = 579,000 Coulombs."
));

cases.push(makeChemCase(
  chapter, 11, "Electrolysis of Brine: The Chlor-Alkali Process", "Concentration Effect on Anion Discharge",
  "In an industrial chlor-alkali cell, a saturated aqueous solution of Sodium Chloride (brine, containing Na⁺, Cl⁻, H⁺, OH⁻) is electrolyzed using a titanium anode and nickel cathode separated by a selective cation-exchange membrane.\nObservation: Greenish-yellow Chlorine gas is liberated at the anode, flammable Hydrogen gas is liberated at the cathode, and the solution in the cathode compartment becomes strongly alkaline Sodium Hydroxide (NaOH).",
  "Why is Chlorine discharged at the anode instead of Oxygen, and why is Hydrogen discharged at the cathode instead of Sodium?",
  "Sodium is a gas that dissolves in water; chlorine is lighter than oxygen.",
  "At cathode: H⁺ has a much higher reduction potential than Na⁺, so H⁺ is discharged preferentially (2H⁺ + 2e⁻ → H₂); At anode: although OH⁻ is lower in the series than Cl⁻, the extremely high concentration of chloride ions in brine overrides the electrochemical series, discharging Cl⁻ preferentially (2Cl⁻ - 2e⁻ → Cl₂).",
  "Chlorine is an alkali metal while sodium is a halogen.",
  "Water decomposes into sodium hydroxide when electricity is turned on.",
  "B",
  "In brine electrolysis:\n1. At Cathode: Both Na⁺ and H⁺ migrate to the cathode. In the electrochemical series, H⁺ (E° = 0.00 V) is vastly more easily reduced than reactive Na⁺ (E° = -2.71 V). Therefore, H⁺ gains electrons preferentially to form H₂ gas, leaving unreacted Na⁺ in solution.\n2. At Anode: Both Cl⁻ and OH⁻ migrate to the anode. In dilute solution, OH⁻ is discharged. However, in concentrated brine, the concentration of Cl⁻ is thousands of times higher than [OH⁻] (~10⁻⁷ M). This overwhelming concentration effect causes Cl⁻ to be discharged preferentially, liberating Cl₂ gas. Leaving Na⁺ and OH⁻ in solution yields pure sodium hydroxide (NaOH)."
));

cases.push(makeChemCase(
  chapter, 12, "Why Direct Current ($DC$) Must Be Used Instead of Alternating Current ($AC$)", "Electrode Polarity Reversal in Electrolysis",
  "A student accidentally connects an electrolytic cell containing copper(II) sulphate solution to a 220V 50Hz Alternating Current (AC) mains socket (stepped down to 6V AC) instead of a Direct Current (DC) battery.",
  "What happens in the cell when Alternating Current is used, and why is DC mandatory for electrolysis?",
  "The copper deposits twice as fast because AC has double frequency.",
  "No net electrolysis occurs; AC reverses electrode polarity 50 times per second (each electrode alternates as anode and cathode every 1/100th of a second), so any metal deposited in one half-cycle dissolves back into solution in the next half-cycle.",
  "The AC current turns the water into radioactive hydrogen peroxide.",
  "The copper deposits on the glass walls of the beaker instead of the electrodes.",
  "B",
  "Electrolysis requires continuous, unidirectional ion migration toward fixed opposite poles (cations to negative cathode, anions to positive anode). Direct Current (DC) maintains fixed, permanent polarity. Alternating Current (AC) oscillates sinusoidally, reversing polarity every half-cycle (at 50 Hz, 100 reversals per second). When an electrode is negative, a microscopic layer of copper deposits; a fraction of a second later, the electrode becomes positive, causing that deposited copper to re-oxidise back into solution. Consequently, zero net chemical separation or deposition occurs."
));

cases.push(makeChemCase(
  chapter, 13, "Electrolytic vs Metallic Conduction: Temperature Coefficient Contrast", "Ionic Mobility vs Lattice Vibration Scattering",
  "A physics and chemistry lab measures the electrical conductivity of two conductors as temperature increases from 20°C to 80°C:\nConductor 1: Pure Copper wire\nConductor 2: 1.0 M aqueous Potassium Chloride (KCl) solution",
  "How does electrical conductivity change with increasing temperature in Conductor 1 versus Conductor 2?",
  "Conductivity increases in both conductors.",
  "In Conductor 1 (metallic), conductivity DECREASES because increased thermal vibration of lattice metal ions scatters conduction electrons; in Conductor 2 (electrolytic), conductivity INCREASES because increased thermal energy reduces solvent viscosity and increases ion velocity and degree of dissociation.",
  "Conductivity decreases in both conductors.",
  "Conductor 1 becomes an insulator, while Conductor 2 boils into a solid.",
  "B",
  "The mechanisms of charge transport are fundamentally different:\n1. Metallic conduction: Current is carried by free valence electrons moving through a lattice of positive metal kernels. As temperature rises, kernels vibrate vigorously about their mean lattice positions, increasing electron collision frequency and electrical resistance (conductivity drops).\n2. Electrolytic conduction: Current is carried by physical translation of hydrated ions through the liquid solvent. As temperature rises: (a) solvent viscosity decreases, reducing drag; (b) ion kinetic velocity increases; (c) for weak electrolytes, degree of dissociation (α) increases. Hence, electrolytic conductivity rises with temperature."
));

cases.push(makeChemCase(
  chapter, 14, "Electrolysis of Copper(II) Chloride Solution with Carbon Electrodes", "Brown Copper and Greenish-Yellow Chlorine Evolution",
  "A student electrolyzes a green aqueous solution of Copper(II) chloride (CuCl₂) using inert graphite electrodes.\nObservation 1: A reddish-brown crystalline deposit forms on the cathode.\nObservation 2: A greenish-yellow gas with a choking odor evolves at the anode, which turns moist starch-iodide paper blue-black.",
  "What are the half-cell reactions occurring at the cathode and anode?",
  "Cathode: 2H⁺ + 2e⁻ → H₂; Anode: 4OH⁻ - 4e⁻ → 2H₂O + O₂",
  "Cathode: Cu²⁺ + 2e⁻ → Cu(s) (reddish-brown metal); Anode: 2Cl⁻ - 2e⁻ → Cl₂(g) (greenish-yellow gas).",
  "Cathode: Cu²⁺ + 2Cl⁻ → CuCl₂; Anode: H₂O → H₂ + O₂",
  "Cathode: 2Cl⁻ - 2e⁻ → Cl₂; Anode: Cu²⁺ + 2e⁻ → Cu",
  "B",
  "In aqueous CuCl₂, ions present are Cu²⁺, H⁺, Cl⁻, OH⁻.\n- At Cathode (negative): Cu²⁺ is lower than H⁺ in the electrochemical series and gains electrons preferentially: Cu²⁺ + 2e⁻ → Cu(s) (reddish-brown metallic deposit).\n- At Anode (positive): Both Cl⁻ and OH⁻ migrate. Because of the relatively high concentration of chloride ions in copper(II) chloride solution, Cl⁻ is discharged preferentially over OH⁻: 2Cl⁻ - 2e⁻ → Cl₂(g)↑ (greenish-yellow gas that turns starch-iodide paper blue-black)."
));

cases.push(makeChemCase(
  chapter, 15, "Electroplating an Iron Nail with Copper", "Cathode, Anode, and Electrolyte Selection Rules",
  "A student wants to electroplate an iron nail with a bright, uniform coating of copper to protect it from rusting. The student gathers a copper strip, the iron nail, and a beaker of acidified Copper(II) sulphate solution.",
  "What is the correct setup for the electroplating circuit?",
  "The iron nail must be made the Anode, the copper strip the Cathode, using water as electrolyte.",
  "The iron nail must be made the Cathode (connected to negative terminal of DC battery); the copper strip must be made the Anode (connected to positive terminal); the electrolyte is acidified Copper(II) sulphate solution.",
  "Both the nail and copper strip are connected to the positive terminal.",
  "The nail is submerged in dry salt and connected to alternating current.",
  "B",
  "The three golden rules of electroplating:\n1. The article to be electroplated (iron nail) must ALWAYS be made the CATHODE (negative electrode), because metal cations (Cu²⁺) are positively charged and migrate to the negative electrode to be reduced to neutral metal atoms: Cu²⁺ + 2e⁻ → Cu.\n2. The ANODE must be a pure block of the plating metal (copper strip), which dissolves to replenish the consumed ions: Cu - 2e⁻ → Cu²⁺.\n3. The ELECTROLYTE must be a soluble salt of the plating metal (acidified CuSO₄ solution)."
));

cases.push(makeChemCase(
  chapter, 16, "Current Density and Adherence in Electroplating", "Why Low Current and Extended Time Yield Superior Plating",
  "An electroplating technician tests two different current settings when nickel-plating brass door handles:\nSetting A: High current (10 Amperes) for 2 minutes.\nSetting B: Low, steady current (1.5 Amperes) for 15 minutes.\nHandle A has a dark, rough, powdery, flaky deposit that peels off when wiped with a cloth. Handle B has a brilliant, smooth, lustrous, strongly adherent nickel finish that resists scratching.",
  "Why does a low current passed for a longer time produce a superior electroplated coating compared to a high current?",
  "High current boils the brass handle into a liquid.",
  "A high current causes rapid, chaotic deposition of large, loosely packed metal crystals and concurrent hydrogen gas evolution that bubbles through and blisters the deposit; a low current allows metal atoms to nucleate slowly and pack into an ultra-fine, uniform, compact, tightly adherent crystalline layer.",
  "Low current changes nickel into silver.",
  "High current drains all electrons from the battery.",
  "B",
  "In electroplating, film morphology is governed by the rate of cation discharge versus crystal nucleation rate. When current density is excessively high (Setting A), metal cations are depleted near the electrode surface faster than diffusion can replenish them, causing co-deposition of H⁺ ions (forming H₂ gas bubbles that pit and blister the surface) and creating coarse, dendritic, loosely bound crystals that flake off. A low, steady current (Setting B) ensures that metal atoms deposit at a measured pace, fitting tightly into microscopic surface crevices and forming a smooth, uniform, scratch-resistant coating."
));

cases.push(makeChemCase(
  chapter, 17, "Why Pure Water Does Not Undergo Significant Electrolysis", "Extremely Low Degree of Dissociation ($K_w = 10^{-14}$)",
  "A student connects two platinum electrodes to a 12V battery and dips them into a beaker of pure deionised water. A sensitive microammeter in the circuit registers virtually zero current (less than 1 microampere), and no visible gas bubbles form at the electrodes. When two drops of dilute sulphuric acid are stirred into the water, the ammeter needle deflects to 500 mA, and gas bubbles immediately froth vigorously at both electrodes.",
  "Why is pure water essentially a non-electrolyte, and what chemical role does the acid play?",
  "Water contains no atoms until acid is added.",
  "Pure water is composed almost entirely of unionised covalent H₂O molecules with an extremely low degree of self-ionisation (Kw = 1.0 × 10⁻¹⁴, providing only 10⁻⁷ mol/L of H⁺ and OH⁻ ions); adding dilute H₂SO₄ provides a vast concentration of mobile ions (H⁺ and SO₄²⁻) that conduct electric current.",
  "The acid melts the platinum electrodes to release electrons.",
  "Water molecules are insulators that absorb electricity into steam.",
  "B",
  "Pure water is a polar covalent compound with very little autoionisation: 2H₂O ⇌ H₃O⁺ + OH⁻. At 25°C, [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M, meaning only about one in every 550 million water molecules is ionised. This minuscule concentration of charge carriers is far too low to sustain measurable electric current. Dilute sulphuric acid is a strong electrolyte that dissociates completely into H⁺ and SO₄²⁻ ions. Adding acid introduces a dense population of mobile ions, turning the liquid into an excellent conductor."
));

cases.push(makeChemCase(
  chapter, 18, "Anodizing of Aluminium: Protective Oxide Layer Growth", "Electrochemical Formation of Porous $Al_2O_3$",
  "In aerospace and consumer electronics manufacturing (such as smartphone casings), aluminium metal parts are subjected to 'anodizing'. The aluminium article is made the Anode in an electrolytic bath of dilute Sulphuric acid at 20°C.",
  "What is the chemical reaction occurring at the aluminium anode, and what property does anodizing confer on the metal?",
  "Aluminium dissolves into liquid aluminium sulphate.",
  "Oxygen evolved at the anode reacts electrochemically with the aluminium surface to grow a thick, hard, corrosion-resistant, porous layer of Aluminium Oxide (Al₂O₃), which can be dyed in brilliant colors and sealed: 2Al + 3[O] → Al₂O₃.",
  "Aluminium reacts with sulphuric acid to produce hydrogen gas bubbles.",
  "The aluminium article is electroplated with metallic lead.",
  "B",
  "In anodizing, aluminium is intentionally made the ANODE (hence 'anodizing') in dilute H₂SO₄. At the anode, water is oxidised to liberate nascent oxygen: 2H₂O - 4e⁻ → 4H⁺ + O₂. The active nascent oxygen reacts immediately with the aluminium substrate: 2Al + 3[O] → Al₂O₃. This electrochemically grows an adherent, microscopic oxide film that is hundreds of times thicker than the natural oxide layer. The porous structure allows absorbing organic dyes (for colorful phone casings) and, upon boiling in water, hydrates into sealed, rock-hard, scratch-proof, corrosion-resistant corundum-like coating."
));

cases.push(makeChemCase(
  chapter, 19, "Down's Cell: Electrolysis of Molten $NaCl$ to Extract Sodium", "Calcium Chloride Addition to Lower Melting Point",
  "In the industrial Down's cell, metallic Sodium is extracted by the electrolysis of molten Sodium Chloride. Pure NaCl has a melting point of 801°C, which is dangerously close to the boiling point of sodium metal (883°C), creating severe vaporization and sodium fog hazards. The chemical engineers add Calcium Chloride (CaCl₂) to the molten bath.",
  "Why is Calcium Chloride added to the sodium chloride electrolyte in Down's cell?",
  "Calcium chloride acts as a chemical catalyst that produces chlorine gas.",
  "Adding CaCl₂ forms a eutectic mixture that lowers the melting point from 801°C to ~600°C, well below the boiling point of sodium, saving energy and preventing sodium vaporization.",
  "Calcium chloride prevents electricity from leaking into the ground.",
  "Calcium chloride oxidises sodium into sodium oxide.",
  "B",
  "Two critical issues afflict pure molten NaCl electrolysis: (1) Melting point is 801°C, which requires immense energy; (2) Sodium metal boils at 883°C and forms a colloidal 'sodium fog' in molten NaCl at 800°C that shorts out the cell. By adding anhydrous CaCl₂ in a 2:1 ratio, a eutectic mixture is formed that melts at ~600°C. At 600°C, sodium is a liquid that does not vaporize or form fog, allowing liquid sodium metal (density 0.97 g/cm³) to rise cleanly and float to the collection riser above the circular iron cathode."
));

cases.push(makeChemCase(
  chapter, 20, "Faraday's Second Law of Electrolysis: Series Cells", "Equivalent Mass Deposition in Connected Electrolytic Cells",
  "An investigator connects three electrolytic cells in series to the same DC power supply so that the identical quantity of electricity (1 Faraday = 96,500 C) passes through all three:\nCell 1 contains Silver nitrate solution (AgNO₃, atomic mass Ag = 108.0)\nCell 2 contains Copper(II) sulphate solution (CuSO₄, atomic mass Cu = 63.5)\nCell 3 contains Aluminium chloride solution (AlCl₃, atomic mass Al = 27.0)",
  "What mass of Silver, Copper, and Aluminium will be deposited at the respective cathodes?",
  "108.0 g of Ag; 63.5 g of Cu; 27.0 g of Al",
  "108.0 g of Ag; 31.75 g of Cu; 9.0 g of Al (masses deposited are proportional to their equivalent masses: E = Atomic mass / Valency).",
  "54.0 g of Ag; 31.75 g of Cu; 13.5 g of Al",
  "10.0 g of each metal",
  "B",
  "Faraday's Second Law of Electrolysis states that when the same quantity of electricity is passed through different electrolytes connected in series, the masses of substances deposited or liberated at the electrodes are directly proportional to their chemical equivalent masses (E = Atomic Mass / Valency).\n- For Silver (Ag⁺, valency 1): Equivalent mass = 108.0 / 1 = 108.0 g. 1 F deposits 108.0 g.\n- For Copper (Cu²⁺, valency 2): Equivalent mass = 63.5 / 2 = 31.75 g. 1 F deposits 31.75 g.\n- For Aluminium (Al³⁺, valency 3): Equivalent mass = 27.0 / 3 = 9.0 g. 1 F deposits 9.0 g."
));

cases.push(makeChemCase(
  chapter, 21, "Why Aqueous Aluminium Salts Cannot Be Used to Extract Aluminium", "Electrochemical Series Position Relative to Hydrogen",
  "A high school student suggests that rather than spending colossal energy melting bauxite with cryolite at 950°C, aluminium smelters should simply electrolyze an aqueous solution of Aluminium sulphate, Al₂(SO₄)₃, at room temperature.",
  "Why is it thermodynamically impossible to extract aluminium metal by electrolyzing aqueous aluminium salt solutions?",
  "Aluminium sulphate is completely insoluble in water.",
  "In an aqueous solution, both Al³⁺ and H⁺ ions migrate to the cathode; because Hydrogen is much lower than Aluminium in the electrochemical series (higher reduction potential: E° H⁺/H₂ = 0.00 V vs Al³⁺/Al = -1.66 V), H⁺ ions are discharged preferentially, evolving Hydrogen gas while Aluminium remains as ions in solution.",
  "Aluminium metal dissolves glass containers when wet.",
  "Electricity cannot pass through aluminium solutions.",
  "B",
  "In aqueous solution, water provides H⁺ and OH⁻ ions alongside Al³⁺ and SO₄²⁻. Aluminium sits very high in the electrochemical activity series (K, Na, Ca, Mg, Al). The standard reduction potential of Al³⁺ is -1.66 V, whereas that of H⁺ is 0.00 V. Positively charged H⁺ ions accept electrons far more greedily than Al³⁺. When electric current is applied, H⁺ ions are reduced at the cathode, evolving H₂ gas (2H⁺ + 2e⁻ → H₂↑), leaving Al³⁺ untouched in solution. Therefore, highly reactive metals (K, Na, Ca, Mg, Al) can only be extracted from anhydrous fused/molten salts."
));

cases.push(makeChemCase(
  chapter, 22, "Anode Mud in Copper Refining: Gold and Silver Economics", "Cost Offset in Industrial Metallurgy",
  "In a copper refining plant processing 100,000 tons of blister copper per year, the primary profit margin does not come from the copper itself, but from the processing of the grey-black slime collected beneath the anodes ('anode mud').",
  "What valuable noble metals are recovered from copper anode mud, and why did they not dissolve during electrolysis?",
  "Titanium and Chromium; they did not dissolve because they are magnetic.",
  "Gold, Silver, and Platinum; they did not dissolve because they have higher standard reduction potentials (less electropositive) than copper and do not oxidise at the operating voltage of the copper refining cell.",
  "Lead and Iron; they did not dissolve because they are insoluble in water.",
  "Uranium and Plutonium; they did not dissolve because they are radioactive.",
  "B",
  "Blister copper contains small percentages of noble metals (Au, Ag, Pt) present in the original chalcopyrite ore. During electrorefining, the cell voltage is held strictly at ~0.25 V—just enough to oxidise Cu (E° = +0.34 V). Silver (E° = +0.80 V), Platinum (+1.18 V), and Gold (+1.50 V) require vastly higher oxidation voltages to lose electrons. As copper atoms dissolve from the anode into the electrolyte, the un-ionised noble metal atoms simply fall out of the disintegrating anode lattice and settle as anode mud, which is refined to recover millions of dollars worth of pure gold and silver."
));

cases.push(makeChemCase(
  chapter, 23, "Voltaic (Galvanic) Cell vs Electrolytic Cell: Direction of Spontaneity", "Energy Conversion and Free Energy ($\Delta G$)",
  "A physics and chemistry interdisciplinary seminar compares a Daniell Voltaic Cell (Zinc-Copper battery) with an Electrolytic Electroplating Cell.",
  "What is the fundamental difference in energy conversion and thermodynamic spontaneity between an electrochemical (galvanic) cell and an electrolytic cell?",
  "Galvanic cell uses AC current; electrolytic cell uses DC current.",
  "A Galvanic cell converts chemical energy into electrical energy spontaneously (ΔG < 0); an Electrolytic cell converts electrical energy into non-spontaneous chemical changes (ΔG > 0) driven by an external power source.",
  "Galvanic cells operate only in outer space; electrolytic cells operate only in water.",
  "Electrolytic cells produce electricity without any chemicals.",
  "B",
  "The fundamental distinction in electrochemistry:\n1. Galvanic (Voltaic) cell: A spontaneous redox reaction (Gibbs free energy change ΔG < 0) generates electric current. Chemical energy is converted into electrical energy (e.g., standard dry cell, car battery discharging, Daniell cell).\n2. Electrolytic cell: An external electrical power supply (battery or DC rectifier) forces a non-spontaneous redox reaction (ΔG > 0) to occur. Electrical energy is converted into chemical energy (e.g., electroplating, electrorefining, molten salt extraction)."
));

cases.push(makeChemCase(
  chapter, 24, "Polarity of Electrodes in Galvanic vs Electrolytic Cells", "Defining Anode as Oxidation and Cathode as Reduction",
  "A student is confused because in an Electrolytic cell, the Anode is POSITIVE and the Cathode is NEGATIVE; but in a Galvanic (Voltaic) battery, the Anode is NEGATIVE and the Cathode is POSITIVE.",
  "What universal electrochemical definition holds true for both Galvanic and Electrolytic cells regarding the Anode and Cathode?",
  "The anode always attracts cations and the cathode attracts anions.",
  "Oxidation (loss of electrons) ALWAYS occurs at the ANODE; Reduction (gain of electrons) ALWAYS occurs at the CATHODE in both types of cells.",
  "The anode is always made of copper and the cathode of zinc.",
  "The cathode is always connected to the wall socket.",
  "B",
  "The universal definitions of electrodes are based on electron transfer, not sign:\n- ANODE is ALWAYS the electrode where OXIDATION (loss of electrons) takes place.\n- CATHODE is ALWAYS the electrode where REDUCTION (gain of electrons) takes place.\nIn an electrolytic cell, the power supply pulls electrons from the positive electrode (Anode, +) and pushes electrons into the negative electrode (Cathode, -).\nIn a galvanic cell, spontaneous oxidation at the anode generates excess electrons, making it the negative terminal (Anode, -); electrons flow through the circuit to the cathode, where reduction consumes them, making it the positive terminal (Cathode, +)."
));

cases.push(makeChemCase(
  chapter, 25, "Electrochemical Equivalent ($Z$): Mass Deposited by One Coulomb", "Faraday's First Law Constant of Proportionality",
  "An electrochemist defines the Electrochemical Equivalent (Z) of Copper in the formula W = Z × I × t. The equivalent mass of copper is 31.75 g/equiv, and 1 Faraday = 96,500 Coulombs.",
  "What is the exact physical definition and numerical value of the Electrochemical Equivalent (Z) of Copper?",
  "Mass of copper deposited by 1 Ampere in 1 hour; Z = 31.75 g/C",
  "Mass of copper deposited by the passage of 1 Coulomb of electric charge (1 Ampere for 1 second); Z = Equivalent mass / 96,500 = 31.75 / 96,500 = 0.000329 g/C (or 0.329 mg/C).",
  "Total mass of copper dissolved in 1 liter of water; Z = 63.5 g",
  "Charge required to melt 1 gram of copper; Z = 96,500 C",
  "B",
  "By Faraday's First Law: W = Z × Q = Z × I × t. When Q = 1 Coulomb (I = 1 A, t = 1 s), W = Z. Thus, the Electrochemical Equivalent (Z) is defined as the mass of an element liberated or deposited by the passage of exactly one Coulomb of electric charge. Since 1 Faraday (96,500 Coulombs) deposits 1 gram-equivalent (E) of an element:\nZ = E / 96,500.\nFor Copper(II): E = 63.5 / 2 = 31.75 g.\nZ = 31.75 / 96,500 = 0.000329 g/C = 3.29 × 10⁻⁴ g/C (or 0.329 mg/C)."
));

cases.push(makeChemCase(
  chapter, 26, "Mass of Copper Deposited: $W = ZIt$ Quantitative Problem", "Electrolytic Mass Calculation",
  "A steady direct current of 5.00 Amperes is passed through an acidified Copper(II) sulphate electroplating bath for exactly 32 minutes and 10 seconds (1930 seconds). The electrochemical equivalent of copper is Z = 0.000329 g/C.",
  "What exact mass of pure copper is deposited on the cathode?",
  "1.00 g",
  "3.175 g",
  "6.35 g",
  "0.329 g",
  "B",
  "1. Current I = 5.00 A.\n2. Time t = 32 min 10 s = (32 × 60) + 10 = 1920 + 10 = 1930 seconds.\n3. Total electric charge Q = I × t = 5.00 A × 1930 s = 9650 Coulombs.\n4. Notice that 9650 Coulombs is exactly 0.100 Faraday (9650 / 96,500 = 0.100 F).\n5. Mass deposited W = Z × Q = 0.000329 g/C × 9650 C = 3.175 g (which is exactly 0.100 × equivalent mass of copper: 0.100 × 31.75 g = 3.175 g)."
));

cases.push(makeChemCase(
  chapter, 27, "Electrolysis of Molten $PbBr_2$: Why DC Source is Required", "Unidirectional Migration of Ions",
  "A student sets up the apparatus for the electrolysis of molten lead bromide using a step-down transformer connected directly to the AC mains. When the switch is closed, no lead deposits and no bromine is evolved. The instructor replaces the AC transformer with a 12V DC lead-acid car battery, and instantly lead begins depositing at the cathode.",
  "Why is a direct current (DC) source indispensable for the electrolytic extraction of lead from molten lead bromide?",
  "AC current cools the lead bromide into a solid.",
  "DC current provides a fixed, unidirectional electric field where the cathode remains permanently negative (drawing Pb²⁺ cations for continuous reduction) and the anode remains permanently positive (drawing Br⁻ anions for continuous oxidation); AC alternates polarity rapidly, preventing sustained directional mass transfer.",
  "AC current burns the graphite electrodes.",
  "Lead bromide is an electrical insulator under DC current.",
  "B",
  "Electrolysis requires continuous unidirectional separation of matter. In molten PbBr₂, Pb²⁺ cations must move toward a persistent negative electrode (cathode) to gain electrons, and Br⁻ anions must move toward a persistent positive electrode (anode) to lose electrons. A DC battery maintains permanent electrode signs (+ and -). With AC, polarity reverses 50 or 60 times a second; ions oscillate back and forth within a fraction of a millimeter without ever reaching the electrodes or discharging permanently."
));

cases.push(makeChemCase(
  chapter, 28, "Why Sugar and Pure Ethanol Solutions Fail to Conduct Electricity", "Absence of Free Mobile Ions in Covalent Solutions",
  "In an electrical conductance laboratory, a student tests two clear aqueous solutions:\nSolution 1: 10% Table Sugar (Sucrose, C₁₂H₂₂O₁₁) in distilled water\nSolution 2: 10% Ethanol (C₂H₅OH) in distilled water\nA sensitive light bulb in series with a 12V battery shows ZERO glow in both solutions, and a sensitive ammeter reads 0.0 mA.",
  "Why are aqueous solutions of sugar and alcohol completely non-conducting (non-electrolytes)?",
  "Sugar and alcohol react with water to form plastic coatings on the electrodes.",
  "Sugar and alcohol are purely covalent molecular compounds that dissolve in water as intact, neutral, uncharged molecules via hydrogen bonding; they do not undergo ionisation or dissociation, providing zero mobile charged ions to conduct current.",
  "Distilled water destroys all electric charges.",
  "Sugar and alcohol conduct electricity only when heated above 1000°C.",
  "B",
  "Electrolytic conduction in a liquid medium requires mobile charged particles (cations and anions). Sucrose (sugar) and ethanol are non-ionising covalent organic compounds. Although they dissolve in water due to favorable intermolecular hydrogen bonding with water dipoles, they dissolve as discrete, neutral, intact molecules: C₁₂H₂₂O₁₁(s) → C₁₂H₂₂O₁₁(aq). Because there are no free ions produced (no dissociation or chemical ionisation), the solution has zero electrical conductivity and is classified as a non-electrolyte."
));

cases.push(makeChemCase(
  chapter, 29, "Electrochemical Series: Preferential Discharge Order of Anions", "Standard Oxidation Potentials of Anions",
  "A chemical solution contains equimolar concentrations of Sulphate (SO₄²⁻), Nitrate (NO₃⁻), Chloride (Cl⁻), and Hydroxide (OH⁻) ions. An inert platinum anode is placed in the solution at dilute concentrations.",
  "Which anion will be discharged first at the platinum anode, and what is the relative order of ease of discharge of anions from hardest to easiest?",
  "SO₄²⁻ is discharged first; order is OH⁻ < Cl⁻ < NO₃⁻ < SO₄²⁻",
  "OH⁻ is discharged first; ease of discharge increases in the order: SO₄²⁻ < NO₃⁻ < Cl⁻ < Br⁻ < I⁻ < OH⁻ (anions lower in the electrochemical series lose electrons with the greatest ease).",
  "NO₃⁻ is discharged first because it contains nitrogen.",
  "Cl⁻ is discharged first because it has a single charge.",
  "B",
  "In the electrochemical series of anions, ions are arranged in increasing ease of oxidation (losing electrons): SO₄²⁻ < NO₃⁻ < Cl⁻ < Br⁻ < I⁻ < OH⁻. Sulphate and nitrate ions are extraordinarily stable oxyanions with high oxidation potentials (extremely difficult to discharge). The hydroxide ion (OH⁻) has the lowest discharge potential among common anions in dilute solution; it loses electrons preferentially: 4OH⁻ - 4e⁻ → 2H₂O + O₂↑."
));

cases.push(makeChemCase(
  chapter, 30, "Electrochemical Series: Preferential Discharge Order of Cations", "Standard Reduction Potentials of Cations",
  "An aqueous solution contains equimolar concentrations of Sodium (Na⁺), Zinc (Zn²⁺), Hydrogen (H⁺), and Copper (Cu²⁺) ions. An inert platinum cathode is energized with a gradual voltage sweep.",
  "Which cation will be discharged first at the cathode, and what is the relative order of ease of discharge from hardest to easiest?",
  "Na⁺ is discharged first; order is Cu²⁺ < H⁺ < Zn²⁺ < Na⁺",
  "Cu²⁺ is discharged first; ease of discharge increases in the order: Na⁺ < Zn²⁺ < H⁺ < Cu²⁺ (cations lower in the series have higher reduction potentials and gain electrons most readily).",
  "Zn²⁺ is discharged first because it is divalent.",
  "H⁺ is discharged first because it is the smallest ion.",
  "B",
  "In the electrochemical activity series of cations: K⁺ < Ca²⁺ < Na⁺ < Mg²⁺ < Al³⁺ < Zn²⁺ < Fe²⁺ < Pb²⁺ < H⁺ < Cu²⁺ < Ag⁺ < Au³⁺. Electropositive metals at the top hold electrons tightly and resist discharge (low reduction potential). Moving down the series, the tendency to accept electrons increases. Cu²⁺ (E° = +0.34 V) accepts electrons far more readily than H⁺ (0.00 V), Zn²⁺ (-0.76 V), or Na⁺ (-2.71 V). Therefore, Cu²⁺ is discharged first: Cu²⁺ + 2e⁻ → Cu(s)."
));

cases.push(makeChemCase(
  chapter, 31, "Sacrificial Protection (Galvanization) of Iron by Zinc", "Electrochemical Protection and Galvanic Couple",
  "In marine engineering, steel ship hulls and underground iron water pipes are galvanized by coating with metallic Zinc. Even when the zinc coating is scratched and deeply gouged, exposing bare iron directly to moist air and saltwater, the underlying iron does NOT rust.",
  "Why does Zinc protect Iron from corrosion even when the protective coating is scratched and damaged?",
  "Zinc is a noble metal that covers iron with diamond.",
  "Zinc is more electropositive than iron (lower reduction potential: E° Zn²⁺/Zn = -0.76 V vs Fe²⁺/Fe = -0.44 V); in the presence of moisture, a galvanic couple is formed where Zinc acts as the sacrificial anode and corrodes preferentially, while Iron acts as the cathode and remains completely protected: Zn → Zn²⁺ + 2e⁻.",
  "Zinc absorbs all moisture from the ocean.",
  "Iron becomes an inert noble gas when touched by zinc.",
  "B",
  "Galvanic corrosion depends on relative electrode potentials. Zinc is more reactive (more easily oxidised) than iron (Zn is above Fe in the reactivity series). When a scratch exposes iron, water and oxygen form an electrochemical cell. Zinc readily sacrifices its electrons: Zn → Zn²⁺ + 2e⁻. The electrons flow into the iron, making iron the cathode (cathodic protection). Because iron is flooded with electrons, Fe atoms cannot lose electrons to form Fe²⁺ (rust). In contrast, coating iron with tin (tinplate) accelerates rusting once scratched, because iron is more reactive than tin."
));

cases.push(makeChemCase(
  chapter, 32, "Why Platinum Electrodes Are Called 'Inert' Electrodes", "Non-Participation in Faradaic Half-Cell Reactions",
  "An electrochemistry professor demonstrates the difference between inert and active electrodes by comparing two electrolytic cells containing Copper(II) sulphate:\nCell 1 uses Platinum electrodes.\nCell 2 uses Copper electrodes.",
  "Why is Platinum classified as an 'inert' electrode, and how does its behavior differ fundamentally from an 'active' electrode?",
  "Platinum conducts electricity without using electrons.",
  "An inert electrode (like Platinum or Graphite) serves merely as a physical conductor for electron transfer into or out of the solution without chemically participating, dissolving, or reacting with the electrolyte or products; an active electrode (like Copper) participates chemically in the reaction by oxidising and dissolving into the electrolyte.",
  "Platinum absorbs all ions into its crystal lattice.",
  "Active electrodes never lose mass during electrolysis.",
  "B",
  "An 'inert electrode' is made of a noble material (platinum, gold, graphite) with very high standard electrode potentials. It does not lose or gain atoms; it functions purely as an electron source (cathode) or electron sink (anode) where ions in solution exchange electrons. In Cell 1, platinum remains untouched while OH⁻ from solution is oxidised to O₂. An 'active electrode' (like copper, nickel, silver) has a lower oxidation potential than the anions in solution; the electrode itself undergoes oxidation and dissolves: Cu(s) → Cu²⁺ + 2e⁻."
));

cases.push(makeChemCase(
  chapter, 33, "Electrolysis of Fused vs Aqueous $NaCl$: Down's Cell vs Chlor-Alkali", "Electrode Products Contrast",
  "A chemical engineering student contrasts the electrolysis of anhydrous molten Sodium Chloride (Down's cell) with the electrolysis of concentrated aqueous Sodium Chloride (Chlor-Alkali cell).",
  "What are the products at the cathode in molten NaCl versus aqueous NaCl?",
  "Molten: Chlorine gas; Aqueous: Sodium metal.",
  "Molten: Metallic Sodium (Na); Aqueous: Hydrogen gas (H₂).",
  "Both produce metallic sodium at the cathode.",
  "Both produce hydrogen gas at the cathode.",
  "B",
  "The presence of water completely alters the cathodic reaction:\n1. In Molten NaCl: The only cations present are Na⁺. With no competing ions, Na⁺ must accept electrons: Na⁺ + e⁻ → Na(l) (pure metallic sodium is collected).\n2. In Aqueous NaCl (brine): Both Na⁺ and H⁺ (from water) are present. Because H⁺ is far easier to reduce than Na⁺ (reduction potential of H⁺ is 0.00 V vs Na⁺ is -2.71 V), H⁺ is discharged preferentially: 2H⁺ + 2e⁻ → H₂(g)↑. Thus, aqueous electrolysis yields Hydrogen gas, making molten electrolysis mandatory for extracting metallic sodium."
));

cases.push(makeChemCase(
  chapter, 34, "Electrolysis of Dilute Sodium Chloride Solution", "Evolution of Oxygen Instead of Chlorine at Anode",
  "An analyst electrolyzes an extremely dilute (0.001 M) aqueous solution of Sodium Chloride using platinum electrodes.",
  "What gases are evolved at the cathode and anode during the electrolysis of very DILUTE sodium chloride solution?",
  "Cathode: Sodium metal; Anode: Chlorine gas.",
  "Cathode: Hydrogen gas (H₂); Anode: Oxygen gas (O₂), exactly like the electrolysis of acidified water.",
  "Cathode: Chlorine gas; Anode: Hydrogen gas.",
  "Cathode: Oxygen gas; Anode: Sodium metal.",
  "B",
  "In very dilute NaCl, the concentration of Cl⁻ is extremely low. Therefore, the concentration overpotential does NOT apply. The standard electrochemical series determines discharge:\n- At Cathode: H⁺ is discharged preferentially over Na⁺: 2H⁺ + 2e⁻ → H₂(g).\n- At Anode: OH⁻ is lower in the electrochemical series than Cl⁻, and with Cl⁻ present in only trace amounts, OH⁻ is discharged preferentially: 4OH⁻ - 4e⁻ → 2H₂O + O₂(g).\nThus, the electrolysis of very dilute NaCl is chemically identical to the electrolysis of water: 2H₂O → 2H₂ + O₂."
));

cases.push(makeChemCase(
  chapter, 35, "Calculation of Gas Volume Liberated at STP by a Given Electric Charge", "Faraday to Molar Gas Volume Reduction",
  "A steady current of 9.65 Amperes is passed through a water voltameter containing dilute sulphuric acid for 1000 seconds (total charge Q = 9650 Coulombs = 0.100 Faraday).",
  "What volume of dry Hydrogen gas at STP is liberated at the cathode, and what volume of dry Oxygen gas at STP is liberated at the anode?",
  "1.12 L of H₂; 0.56 L of O₂",
  "2.24 L of H₂; 1.12 L of O₂",
  "0.56 L of H₂; 0.28 L of O₂",
  "22.4 L of H₂; 11.2 L of O₂",
  "A",
  "1. Total charge passed = 9.65 A × 1000 s = 9650 Coulombs = 0.100 F.\n2. Cathode reaction: 2H⁺ + 2e⁻ → H₂.\n2 Faradays produce 1 mole (22.4 L at STP) of H₂.\n- 0.100 Faraday produces: (0.100 / 2) × 22.4 L = 1.12 L of H₂ at STP.\n3. Anode reaction: 4OH⁻ - 4e⁻ → 2H₂O + O₂.\n4 Faradays produce 1 mole (22.4 L at STP) of O₂.\n- 0.100 Faraday produces: (0.100 / 4) × 22.4 L = 0.56 L of O₂ at STP.\nNotice the 2:1 volume ratio: 1.12 L : 0.56 L."
));

cases.push(makeChemCase(
  chapter, 36, "Why Lead Bromide Must Be in Molten (Fused) State to Conduct", "Ionic Mobility and Electrostatic Crystal Bonds",
  "A student attempts to electrolyze dry, powdered solid Lead(II) bromide at room temperature using carbon electrodes connected to a 12V battery. The ammeter reads zero current. When the crucible is heated over a burner until the powder melts into a liquid, the ammeter needle jumps to 2.5 Amperes, and electrolysis begins.",
  "Why is solid Lead(II) bromide a non-conductor, whereas molten Lead(II) bromide is an electrolyte?",
  "Solid PbBr₂ contains no electrons.",
  "In the solid state, Pb²⁺ and Br⁻ ions are held rigidly in fixed lattice positions by powerful electrostatic forces and cannot translate; melting provides thermal kinetic energy that breaks the crystal lattice, freeing the ions to move and carry electric current.",
  "Heating creates lead atoms that conduct electricity like a copper wire.",
  "Bromine is a gas that conducts only when cold.",
  "B",
  "An electrolyte must provide mobile charge carriers. In solid Lead(II) bromide, Pb²⁺ cations and Br⁻ anions are bound tightly in a rigid crystalline framework by strong electrostatic Coulombic forces. Electrons are localized, and ions can only vibrate in place. When heated above its melting point (373°C), thermal kinetic energy overcomes the lattice energy. The lattice breaks down into a mobile molten fluid where Pb²⁺ and Br⁻ ions can migrate freely under an electric potential gradient."
));

cases.push(makeChemCase(
  chapter, 37, "Electroplating with Nickel: Chemical Equations", "Anodic Dissolution and Cathodic Deposition",
  "A brass medal is electroplated with nickel in a bath of Nickel ammonium sulphate. The brass medal is connected to the negative terminal (cathode), and a pure nickel plate is connected to the positive terminal (anode).",
  "What are the balanced ionic equations for the reactions occurring at the cathode and anode?",
  "Cathode: Ni - 2e⁻ → Ni²⁺; Anode: Ni²⁺ + 2e⁻ → Ni",
  "Cathode: Ni²⁺ + 2e⁻ → Ni(s) (reduction); Anode: Ni(s) - 2e⁻ → Ni²⁺(aq) (oxidation).",
  "Cathode: 2H⁺ + 2e⁻ → H₂; Anode: 4OH⁻ - 4e⁻ → 2H₂O + O₂",
  "Cathode: Ni²⁺ + 2OH⁻ → Ni(OH)₂; Anode: Ni + 2H⁺ → Ni²⁺ + H₂",
  "B",
  "In nickel electroplating:\n- Cathode (brass medal): Positively charged nickel ions from the solution migrate to the negative brass medal, gain two electrons each, and deposit as a smooth metallic nickel film: Ni²⁺(aq) + 2e⁻ → Ni(s) (reduction).\n- Anode (pure nickel plate): Neutral nickel atoms lose two electrons to the positive terminal and enter the solution as nickel ions: Ni(s) - 2e⁻ → Ni²⁺(aq) (oxidation).\nThe concentration of Ni²⁺ in the bath remains constant."
));

cases.push(makeChemCase(
  chapter, 38, "Electrochemical Series: Hydrogen Overpotential on Mercury Cathode", "Castner-Kellner Cell and Sodium Amalgam Formation",
  "In the industrial Castner-Kellner process for manufacturing sodium hydroxide, brine is electrolyzed using a flowing liquid Mercury cathode. Under standard conditions, H⁺ should discharge preferentially over Na⁺. However, on a mercury cathode, metallic Sodium is discharged instead, dissolving into mercury to form Sodium Amalgam (Na–Hg).",
  "Why is Sodium discharged at the mercury cathode in preference to Hydrogen?",
  "Mercury is a solid metal that attracts sodium atoms.",
  "Hydrogen has an extraordinarily high discharge overpotential (overvoltage) on a mercury cathode, making H⁺ discharge kinetically unfavorable, while Sodium readily discharges and dissolves exothermically into mercury to form stable Sodium Amalgam: Na⁺ + e⁻ + Hg → Na–Hg.",
  "Mercury chemically destroys hydrogen ions.",
  "Brine contains no water molecules in the Castner-Kellner cell.",
  "B",
  "Under standard equilibrium conditions, H⁺ discharges at 0.00 V while Na⁺ requires -2.71 V. However, on a liquid Mercury cathode, hydrogen gas evolution has a very high kinetic activation barrier known as 'overpotential' (~1.0 V). Furthermore, sodium atoms dissolve into liquid mercury with the release of significant free energy to form an amalgam: Na⁺ + e⁻ + xHg → NaHg_x. This shifts the discharge potential of sodium positively, making Na⁺ discharge faster and more favorable than H₂ evolution."
));

cases.push(makeChemCase(
  chapter, 39, "Faraday's Law: Time Required to Deposit a Given Mass", "Quantitative Electroplating Time Calculation",
  "An electroplating technician wants to deposit exactly 10.8 g of pure Silver (Ag, atomic mass = 108.0 g/mol, valency = 1) onto a decorative tea set using a steady DC current of 2.00 Amperes in a silver plating bath.\nFaraday constant = 96,500 C/mol.",
  "How long must the 2.00 A current be passed to deposit exactly 10.8 g of silver?",
  "9650 seconds (or 2 hours 40 minutes 50 seconds)",
  "4825 seconds (or 1 hour 20 minutes 25 seconds)",
  "19,300 seconds",
  "1000 seconds",
  "B",
  "1. Moles of Silver to deposit = Mass / Atomic mass = 10.8 g / 108.0 g/mol = 0.100 mol.\n2. Cathode reaction: Ag⁺ + e⁻ → Ag.\nDepositing 1 mole of Ag requires 1 Faraday (96,500 C).\n- Depositing 0.100 mol of Ag requires: 0.100 × 96,500 C = 9650 Coulombs.\n3. By definition: Q = I × t → t = Q / I.\nt = 9650 C / 2.00 A = 4825 seconds.\n4. In minutes/hours: 4825 / 60 = 80 minutes and 25 seconds = 1 hour, 20 minutes, 25 seconds."
));

cases.push(makeChemCase(
  chapter, 40, "Weak Electrolytes: Acetic Acid vs Hydrochloric Acid Dissociation", "Partial Ionisation and Degree of Dissociation ($\\alpha$)",
  "An analytical chemist measures the molar conductivities (Λ_m) of 0.1 M Hydrochloric acid (HCl) and 0.1 M Acetic acid (CH₃COOH) at 25°C. HCl has a molar conductivity of 391 S·cm²/mol, whereas Acetic acid has a molar conductivity of only 5.2 S·cm²/mol.",
  "Why is the electrical conductivity of 0.1 M Acetic acid less than 2% of the conductivity of 0.1 M Hydrochloric acid at identical concentration?",
  "Acetic acid is a non-polar hydrocarbon that repels electricity.",
  "HCl is a strong electrolyte that is virtually 100% ionised in water, providing a high concentration of free mobile ions; Acetic acid is a weak electrolyte with a very low degree of dissociation (α ≈ 1.3%), existing predominantly as neutral undissociated covalent molecules.",
  "Hydrochloric acid contains dissolved copper ions.",
  "Acetic acid decomposes into solid carbon in water.",
  "B",
  "Electrical conductivity of an electrolyte depends on the number of free mobile ions per unit volume. In 0.1 M HCl, a strong electrolyte, ionisation is essentially complete: HCl + H₂O → H₃O⁺ + Cl⁻ (α ≈ 1.0), yielding ~0.1 M [H₃O⁺]. In 0.1 M CH₃COOH, a weak organic acid, an equilibrium exists: CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻. Because Ka = 1.8 × 10⁻⁵, its degree of dissociation is α = √(Ka / C) = √(1.8 × 10⁻⁵ / 0.1) = 0.0134 (only ~1.3%). More than 98.7% of the acetic acid remains as neutral, non-conducting molecules, resulting in very low conductivity."
));

cases.push(makeChemCase(
  chapter, 41, "Why Solid $NaCl$ Does Not Conduct Electricity, but Aqueous $NaCl$ Does", "Electrostatic Crystal Lattice vs Hydration Mobility",
  "A high school physics teacher uses an insulation tester on a dry, compressed block of solid Sodium Chloride. The resistance exceeds 10 megaohms (insulator). When the block is dropped into a beaker of distilled water and stirred, the resistance plummets to under 5 ohms (excellent conductor).",
  "What structural change enables solid sodium chloride to become an electrical conductor when dissolved in water?",
  "Water chemically oxidises sodium into a metallic wire.",
  "In solid NaCl, Na⁺ and Cl⁻ ions are held firmly in fixed lattice positions by strong omnidirectional electrostatic forces and cannot translate; water dipoles weaken these forces and hydrate the ions, allowing them to move freely throughout the solution.",
  "The sodium chloride reacts with water to form conductive liquid mercury.",
  "Distilled water is an electrical super-conductor.",
  "B",
  "In solid rock salt, Na⁺ and Cl⁻ ions occupy alternating corners of a face-centered cubic lattice held by immense lattice energy (788 kJ/mol). There are no free electrons and no mobile ions; ions can only vibrate in place. When placed in water, water's high dielectric constant (ε_r ≈ 80) reduces the electrostatic attraction between oppositely charged ions to 1/80th. Polar water molecules surround and hydrate the ions, releasing hydration enthalpy that dissolves the lattice. The resulting free, hydrated Na⁺ and Cl⁻ ions translate under an electric field, carrying the current."
));

cases.push(makeChemCase(
  chapter, 42, "Electroplating an Article: Why the Article Must Be Cleaned of Grease and Oxides", "Surface Adhesion and Interatomic Bonding",
  "Prior to electroplating an iron fork with copper, the plating manual prescribes three preparatory cleaning steps:\nStep 1: Wash the fork with hot alkali solution (NaOH) to remove grease and oils.\nStep 2: Dip the fork in dilute hydrochloric acid (acid pickling) to remove rust/oxide films.\nStep 3: Rinse thoroughly with distilled water before immersing in the plating bath.",
  "What happens if the article is NOT cleaned of grease and oxide film before electroplating?",
  "The article will dissolve completely in the plating bath.",
  "The deposited metal will form over the grease and oxide film without contacting the metal lattice, resulting in poor adhesion, blistered plating, and a loose coating that flakes off easily.",
  "The electrical current will reverse direction and charge the battery.",
  "The plating metal will turn into an acid.",
  "B",
  "Electroplating requires the depositing metal atoms to form direct metallic/coordination bonds with the crystalline substrate metal. If grease, oil, or finger grease is present, it forms an insulating barrier that prevents electron transfer and blocks atomic contact. If rust or metal oxide is present, the plated metal adheres to the brittle oxide crust rather than the parent metal. When the article is dried or handled, the plating blisters and peels off in sheets. Degreasing with alkali and pickling with acid ensures an atomically clean, active surface for firm adherence."
));

cases.push(makeChemCase(
  chapter, 43, "Electrolysis of Fused Potassium Hydroxide (Castner's Process)", "Extraction of Reactive Potassium Metal",
  "In the classical Castner's process, fused anhydrous Potassium Hydroxide (KOH) is electrolyzed in an iron cylinder at 330°C using an iron cathode and nickel anode.\nCathode: 2K⁺ + 2e⁻ → 2K(l); 2H⁺ + 2e⁻ → H₂(g)\nAnode: 4OH⁻ - 4e⁻ → 2H₂O + O₂(g)",
  "What metal is collected floating on the molten electrolyte in Castner's process, and why is it collected under an inert atmosphere?",
  "Liquid iron; collected under water.",
  "Potassium metal (K); collected under inert atmosphere because metallic potassium reacts explosively with atmospheric oxygen and moisture.",
  "Nickel metal; collected under air.",
  "Calcium metal; collected under carbon dioxide.",
  "B",
  "In Castner's electrolytic process, molten KOH produces potassium metal at the iron cathode. Because potassium has a very low density (0.86 g/cm³), it floats as a silvery liquid on top of the molten bath. Potassium is an extraordinarily reactive alkali metal that spontaneously oxidises, ignites, and reacts violently with atmospheric oxygen and water vapor. Hence, it is collected in an inverted cylindrical iron container maintained under an oxygen-free, dry inert gas or paraffin atmosphere."
));

cases.push(makeChemCase(
  chapter, 44, "Comparison of Products: Electrolysis of Dilute vs Concentrated $HCl$", "Anion Overpotential and Concentration Shift",
  "A chemical student electrolyzes dilute Hydrochloric acid (~1 M) and concentrated Hydrochloric acid (~10 M) using platinum electrodes.\nIn concentrated HCl: Chlorine gas (Cl₂) evolves at the anode.\nIn extremely dilute HCl (<0.01 M): Oxygen gas (O₂) evolves at the anode.",
  "What principle governs whether Oxygen or Chlorine gas is evolved at the anode during the electrolysis of hydrochloric acid?",
  "The temperature of the room.",
  "Preferential discharge depends on both the electrochemical position and the relative concentration of anions; at high [Cl⁻], chloride discharge predominates (2Cl⁻ - 2e⁻ → Cl₂); at very low [Cl⁻], hydroxide discharge predominates (4OH⁻ - 4e⁻ → 2H₂O + O₂).",
  "Platinum electrodes decompose to form chlorine.",
  "Concentrated acid contains no water molecules.",
  "B",
  "In aqueous HCl, both Cl⁻ and OH⁻ anions migrate to the anode. In the electrochemical series, OH⁻ is lower than Cl⁻, meaning OH⁻ has a lower discharge potential and is easier to oxidise under standard conditions. However, in concentrated HCl, the concentration of Cl⁻ is thousands of times higher than [OH⁻]. This overwhelming concentration difference shifts the thermodynamic equilibrium, causing Cl⁻ to be discharged as Cl₂ gas. In very dilute HCl, [Cl⁻] is low, allowing OH⁻ to discharge normally as O₂ gas."
));

cases.push(makeChemCase(
  chapter, 45, "Charge Required to Liberate One Mole of Oxygen Gas at Anode", "Stoichiometry of Hydroxide Oxidation ($4OH^- \\rightarrow 2H_2O + O_2 + 4e^-$)",
  "In an industrial water electrolysis plant, oxygen gas is generated at the anode according to the half-cell reaction: 4OH⁻(aq) → 2H₂O(l) + O₂(g) + 4e⁻.\nFaraday constant = 96,500 Coulombs.",
  "What is the total quantity of electric charge in Coulombs required to liberate exactly 1.00 mole (22.4 L at STP) of pure Oxygen gas?",
  "96,500 Coulombs (1 F)",
  "193,000 Coulombs (2 F)",
  "386,000 Coulombs (4 F)",
  "289,500 Coulombs (3 F)",
  "C",
  "From the balanced anodic oxidation half-reaction:\n4OH⁻ - 4e⁻ → 2H₂O + O₂(g)\nNotice that the liberation of 1 mole of diatomic Oxygen gas (O₂) requires the removal of 4 moles of electrons (4 Faradays of electric charge).\nTotal charge Q = 4 × F = 4 × 96,500 C = 386,000 Coulombs.\n(In contrast, liberating 1 mole of H₂ requires only 2 Faradays: 2H⁺ + 2e⁻ → H₂)."
));

cases.push(makeChemCase(
  chapter, 46, "Rusting of Iron: An Electrochemical (Local Cell) Process", "Anodic Iron Dissolution and Cathodic Oxygen Reduction",
  "A corrosion engineer explains to a bridge construction crew that rusting of steel is not a simple chemical reaction, but an electrochemical process involving thousands of microscopic, local galvanic cells formed on the metal surface.",
  "What are the anodic and cathodic half-cell reactions occurring on an iron surface during rusting in moist air?",
  "Anode: 2H₂O → 2H₂ + O₂; Cathode: Fe²⁺ + 2e⁻ → Fe",
  "Anode: Fe(s) → Fe²⁺(aq) + 2e⁻ (oxidation of iron); Cathode: O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq) (reduction of dissolved atmospheric oxygen).",
  "Anode: Fe + O₂ → FeO₂; Cathode: H₂ → 2H⁺ + 2e⁻",
  "Iron acts only as a catalyst without exchanging electrons.",
  "B",
  "Electrochemical mechanism of rusting:\n1. Anodic zones: Stressed or impure regions of the iron surface act as anodes, undergoing oxidation: Fe(s) → Fe²⁺(aq) + 2e⁻ (E° = -0.44 V).\n2. Electron conduit: The metallic iron conducts the released electrons to adjacent cathodic zones.\n3. Cathodic zones: In the presence of a water droplet containing dissolved oxygen and acidic CO₂ (acting as an electrolyte), oxygen is reduced: O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq) (E° = +0.40 V).\n4. Precipitation: Fe²⁺ and OH⁻ diffuse and react with more oxygen to precipitate hydrated iron(III) oxide: 4Fe²⁺ + O₂ + 4H₂O + 2xH₂O → 2Fe₂O₃·xH₂O (rust)."
));

cases.push(makeChemCase(
  chapter, 47, "Why Acidified Water Electrolysis Does NOT Use Hydrochloric Acid", "Evolution of Toxic Chlorine vs Desired Oxygen",
  "A chemistry teacher asks why dilute sulphuric acid (H₂SO₄) is always used to acidify water in Hofmann's voltameter, rather than dilute hydrochloric acid (HCl) or dilute nitric acid (HNO₃).",
  "What undesirable reactions would occur if dilute Hydrochloric acid or dilute Nitric acid were used to acidify water in Hofmann's voltameter?",
  "Dilute HCl would dissolve the glass voltameter; HNO₃ would freeze the water.",
  "With dilute HCl, chloride ions (Cl⁻) would be oxidised at the anode, releasing toxic, choking Chlorine gas instead of pure Oxygen; with dilute HNO₃, nitric acid is volatile and nitrate ions may undergo reduction at the cathode.",
  "Both acids are non-electrolytes that do not conduct electricity.",
  "Dilute HCl would produce liquid mercury at the cathode.",
  "B",
  "H₂SO₄ is uniquely chosen to acidify water because:\n1. It is non-volatile and stable.\n2. The sulphate anion (SO₄²⁻) has an exceptionally high discharge potential and cannot compete with OH⁻ at the anode. Hence, only pure Oxygen is evolved from OH⁻.\nIf HCl were used, Cl⁻ ions would be discharged preferentially or concurrently at the anode, contaminating the oxygen with toxic, corrosive, choking Chlorine gas (Cl₂).\nIf HNO₃ were used, it is volatile and nitrate (NO₃⁻) can undergo competing cathodic reduction to nitrite or ammonia, distorting the 2:1 volume stoichiometry."
));

cases.push(makeChemCase(
  chapter, 48, "Electrolysis of Aqueous Sodium Chloride with Platinum Electrodes vs Mercury Cathode", "Role of Electrode Material in Dictating Products",
  "An electrochemical technician compares the electrolysis of brine using two different cathodes:\nSetup 1 uses a Platinum Cathode: Hydrogen gas (H₂) is liberated.\nSetup 2 uses a flowing Mercury Cathode: Sodium metal is discharged and dissolves into mercury to form Sodium Amalgam (Na–Hg).",
  "What does this experiment demonstrate regarding the factors governing preferential discharge of ions?",
  "The temperature of the liquid determines the product.",
  "The chemical nature and material of the electrode directly influences the discharge potential and overvoltage of ions, completely altering which product is discharged.",
  "Platinum attracts sodium while mercury attracts hydrogen.",
  "Both setups produce identical products if left running overnight.",
  "B",
  "Preferential discharge is influenced by three main factors: (1) Position of the ion in the electrochemical series; (2) Relative concentration of ions in the electrolyte; (3) Nature of the electrode material. On an inert platinum cathode, H⁺ discharges easily (overpotential is negligible), yielding H₂ gas. On a mercury cathode, the overpotential for hydrogen gas discharge is extraordinarily high (~1.0 V), while sodium has a high chemical affinity for mercury (forming stable sodium amalgam). Thus, altering the electrode material completely switches the cathodic product from H₂ to Na."
));

cases.push(makeChemCase(
  chapter, 49, "Electrochemical Equivalent Ratio: $Ag$ vs $Cu$", "Faraday's Laws and Equivalent Weight Ratios",
  "In an electro-analytical calibration, the same electric current is passed through two voltameters in series for 1 hour:\nVoltameter 1: Silver nitrate solution (Ag⁺, atomic mass 108.0)\nVoltameter 2: Copper(II) sulphate solution (Cu²⁺, atomic mass 63.5)\nAt the end of the run, the silver cathode has gained 10.80 g of silver.",
  "What is the exact mass of copper deposited on the copper cathode?",
  "6.35 g",
  "3.175 g",
  "10.80 g",
  "1.587 g",
  "B",
  "According to Faraday's Second Law of Electrolysis:\n(Mass of Ag deposited) / (Mass of Cu deposited) = (Equivalent mass of Ag) / (Equivalent mass of Cu)\n- Equivalent mass of Ag = 108.0 / 1 = 108.0 g/equiv.\n- Equivalent mass of Cu = 63.5 / 2 = 31.75 g/equiv.\nSubstitute into the equation:\n10.80 g / Mass(Cu) = 108.0 / 31.75\nMass(Cu) = 10.80 × (31.75 / 108.0) = 3.175 g."
));

cases.push(makeChemCase(
  chapter, 50, "Energy Efficiency in Industrial Electrolysis: Cell Voltage vs Decomposition Potential", "Overpotential and Ohmic Drop in Real Cells",
  "An electrochemical engineer designs a chlor-alkali membrane cell. Thermochemical data shows the theoretical reversible decomposition potential of brine is 2.20 Volts. However, the commercial cell must be operated at an applied potential of 3.20 Volts to maintain high production rates.",
  "What causes the actual operating voltage of an industrial electrolytic cell to be higher than the theoretical decomposition potential?",
  "Electricity is lost into the air by evaporation.",
  "The extra voltage (1.00 V) is consumed by: (1) Electrode Overpotentials (activation energy barriers for gas evolution at anode and cathode); (2) Ohmic resistance (IR drop) of the electrolyte and membrane; and (3) Concentration polarisations.",
  "The battery loses energy because sodium chloride is magnetic.",
  "The extra voltage is converted into nuclear energy.",
  "B",
  "The theoretical decomposition voltage (E_rev) is the minimum thermodynamic voltage required to drive the non-spontaneous redox reaction under standard reversible conditions. In an operating industrial cell, extra voltage (V_cell = E_rev + η_anode + η_cathode + IR) must be applied to overcome: (1) Anode and cathode overpotentials (η), which represent kinetic activation energy barriers for electron transfer and gas bubble disengagement; (2) Ohmic resistance (IR drop) of the electrolyte solution, electrodes, and separators; (3) Concentration polarization due to mass transport limitations near electrode surfaces."
));

console.log(`[Ch6 Electrolysis] Generated ${cases.length} cases.`);

const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) fs.mkdirSync(BANK_DIR, { recursive: true });

const outPath = path.join(BANK_DIR, 'chemistry_case_electrolysis.json');
fs.writeFileSync(outPath, JSON.stringify(cases, null, 2), 'utf8');
console.log(`Saved 50 cases to ${outPath}`);
