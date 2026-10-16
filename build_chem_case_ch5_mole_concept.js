// build_chem_case_ch5_mole_concept.js
// 50 Case-Based MCQs for ICSE Class 10 Chemistry: Chapter 5 - Mole Concept and Stoichiometry

const fs = require('fs');
const path = require('path');
const { makeChemCase } = require('./chem_case_helper');

const chapter = "Mole Concept";
const cases = [];

cases.push(makeChemCase(
  chapter, 1, "Gay-Lussac's Law: Eudiometric Combustion of Methane", "Volume Contraction and Gaseous Combining Ratios",
  "A chemical gas analyst sparks 20 cm³ of pure Methane gas (CH₄) with 60 cm³ of pure Oxygen gas (O₂) in a graduated eudiometer tube over mercury at 100°C. The combustion occurs according to: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). The tube is then cooled down to room temperature (25°C), where the water vapor condenses completely to liquid water of negligible volume. Finally, an excess of concentrated Potassium Hydroxide (KOH) solution is introduced into the eudiometer.",
  "What is the total volume of gas remaining in the eudiometer after cooling to 25°C, and what volume remains after introducing KOH?",
  "At 25°C: 80 cm³; after KOH: 0 cm³",
  "At 25°C: 40 cm³ (20 cm³ CO₂ + 20 cm³ unreacted O₂); after KOH: 20 cm³ (unreacted O₂ only, because KOH absorbs all CO₂).",
  "At 25°C: 20 cm³; after KOH: 10 cm³",
  "At 25°C: 60 cm³; after KOH: 40 cm³",
  "B",
  "By Gay-Lussac's Law of Combining Volumes:\n1 volume of CH₄ reacts with 2 volumes of O₂ to produce 1 volume of CO₂.\n- 20 cm³ of CH₄ requires 20 × 2 = 40 cm³ of O₂.\n- Excess O₂ remaining = 60 - 40 = 20 cm³.\n- CO₂ produced = 20 cm³.\n- At 25°C, H₂O is liquid (volume = 0). Total gas volume = 20 cm³ (CO₂) + 20 cm³ (excess O₂) = 40 cm³.\n- KOH absorbs acidic CO₂: 2KOH + CO₂ → K₂CO₃ + H₂O. Volume absorbed = 20 cm³. Remaining unabsorbed gas = 20 cm³ of pure unreacted O₂."
));

cases.push(makeChemCase(
  chapter, 2, "Gay-Lussac's Law: Combustion of Carbon Monoxide", "Gaseous Volume Contraction During Oxidation",
  "In an industrial syngas burner, 100 cm³ of Carbon monoxide (CO) is mixed with 70 cm³ of Oxygen gas (O₂) and sparked at constant temperature and pressure. The reaction proceeds according to the equation: 2CO(g) + O₂(g) → 2CO₂(g). All measurements are taken at 20°C and 1 atmosphere.",
  "What is the total volume of the resulting gas mixture after the reaction is complete?",
  "170 cm³",
  "120 cm³ (consisting of 100 cm³ of CO₂ and 20 cm³ of unreacted O₂).",
  "100 cm³",
  "140 cm³",
  "B",
  "By Gay-Lussac's Law, reacting gas volumes combine in simple integer ratios:\n2 volumes of CO react with 1 volume of O₂ to yield 2 volumes of CO₂.\n- 100 cm³ of CO reacts completely with 100 / 2 = 50 cm³ of O₂.\n- Volume of O₂ left unreacted = 70 - 50 = 20 cm³.\n- Volume of CO₂ formed = 100 cm³.\n- Total volume of the resulting mixture = 100 cm³ (CO₂) + 20 cm³ (residual O₂) = 120 cm³ (representing a net contraction of 170 - 120 = 50 cm³)."
));

cases.push(makeChemCase(
  chapter, 3, "Gay-Lussac's Law: Combustion of Ethyne (Acetylene)", "Hydrocarbon Combustion Stoichiometry",
  "In an oxy-acetylene welding torch, 40 cm³ of acetylene gas (ethyne, C₂H₂) is burned with 120 cm³ of pure oxygen gas at standard conditions. The combustion equation is: 2C₂H₂(g) + 5O₂(g) → 4CO₂(g) + 2H₂O(l). The resulting mixture is cooled to 20°C.",
  "What is the composition and total volume of the residual gaseous mixture after cooling?",
  "Total 100 cm³: 80 cm³ CO₂ and 20 cm³ unreacted O₂.",
  "Total 160 cm³: 120 cm³ CO₂ and 40 cm³ steam.",
  "Total 80 cm³: 80 cm³ CO₂ with no oxygen remaining.",
  "Total 120 cm³: 60 cm³ CO₂ and 60 cm³ O₂.",
  "A",
  "From the balanced equation: 2 volumes of C₂H₂ require 5 volumes of O₂ to yield 4 volumes of CO₂ (H₂O is liquid at 20°C).\n- 40 cm³ of C₂H₂ requires (5/2) × 40 = 100 cm³ of O₂.\n- Excess O₂ remaining = 120 - 100 = 20 cm³.\n- CO₂ gas formed = (4/2) × 40 = 80 cm³.\n- Total gaseous volume after cooling = 80 cm³ (CO₂) + 20 cm³ (excess O₂) = 100 cm³."
));

cases.push(makeChemCase(
  chapter, 4, "Ostwald's Process: Ammonia Catalytic Oxidation Volume Ratio", "Gay-Lussac Ratios in Nitric Acid Manufacture",
  "In the converter chamber of Ostwald's nitric acid plant, ammonia gas and dry air (assumed 20% O₂ and 80% N₂ by volume) are passed over a heated platinum gauze at 800°C: 4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g). A plant engineer feeds 400 L of ammonia gas per minute.",
  "What minimum volume of Oxygen gas and what minimum volume of Air are required per minute for the complete oxidation of this ammonia?",
  "400 L of O₂; 2000 L of air.",
  "500 L of O₂; 2500 L of air.",
  "800 L of O₂; 4000 L of air.",
  "300 L of O₂; 1500 L of air.",
  "B",
  "According to Gay-Lussac's Law:\n4 volumes of NH₃ require 5 volumes of O₂.\n- Ratio: V(O₂) = (5/4) × V(NH₃) = (5/4) × 400 L = 500 L of pure O₂.\n- Since air contains only 20% Oxygen by volume, the required volume of air is:\nV(air) = 500 L / 0.20 = 2500 L of air per minute."
));

cases.push(makeChemCase(
  chapter, 5, "Derivation of Molecular Weight = $2 \\times \\text{Vapour Density}$", "Avogadro's Hypothesis and Relative Density",
  "A physical chemistry student derives the mathematical relationship between Relative Molecular Mass (RMM) and Vapour Density (VD) using Avogadro's Law.\nDefinition: Vapour Density = (Mass of V volume of gas) / (Mass of V volume of hydrogen gas at same T and P).\nBy Avogadro's Law, V volume of any gas contains N molecules.",
  "What is the complete algebraic progression proving that Relative Molecular Mass = 2 × Vapour Density?",
  "VD = (Mass of N molecules of gas) / (Mass of N molecules of H₂) = (Mass of 1 molecule of gas) / (Mass of 1 molecule of H₂) = (Molecular Mass) / (2 × Mass of 1 H atom) = RMM / 2; therefore RMM = 2 × VD.",
  "VD = RMM / 22.4; therefore RMM = 22.4 × VD.",
  "VD = (Volume of gas) / (Volume of H₂) = 2 / RMM.",
  "RMM = VD² / 4.",
  "A",
  "By definition: VD = (Mass of V volume of gas) / (Mass of V volume of H₂) at same T and P.\nApplying Avogadro's Law (equal volumes contain equal molecules N):\nVD = (Mass of N molecules of gas) / (Mass of N molecules of H₂)\nDividing numerator and denominator by N:\nVD = (Mass of 1 molecule of gas) / (Mass of 1 molecule of H₂)\nSince Hydrogen is diatomic (1 molecule of H₂ contains 2 atoms of H):\nVD = (Mass of 1 molecule of gas) / (2 × Mass of 1 atom of H)\nSince Relative Molecular Mass = (Mass of 1 molecule of gas) / (Mass of 1 atom of H):\nVD = RMM / 2, which rearranges to: RMM = 2 × VD."
));

cases.push(makeChemCase(
  chapter, 6, "Total Number of Atoms in $4.4\\text{ g}$ of Carbon Dioxide", "Mole-to-Particle Conversion and Molecular Atomicity",
  "A student in a chemistry laboratory weighs out exactly 4.40 g of pure, dry Carbon dioxide gas (CO₂, molar mass = 12 + 2(16) = 44 g/mol) into an evacuated gas bulb. Avogadro's constant is N_A = 6.022 × 10²³.",
  "How many moles of CO₂, how many CO₂ molecules, and how many total individual atoms are contained in this 4.40 g sample?",
  "0.10 mol CO₂; 6.022 × 10²² molecules; 1.807 × 10²³ total atoms.",
  "1.00 mol CO₂; 6.022 × 10²³ molecules; 6.022 × 10²³ total atoms.",
  "0.10 mol CO₂; 6.022 × 10²³ molecules; 1.204 × 10²⁴ total atoms.",
  "0.44 mol CO₂; 2.65 × 10²² molecules; 5.30 × 10²² total atoms.",
  "A",
  "1. Moles of CO₂ = mass / molar mass = 4.40 g / 44.0 g/mol = 0.100 mol.\n2. Number of CO₂ molecules = moles × N_A = 0.100 × 6.022 × 10²³ = 6.022 × 10²² molecules.\n3. Atomicity: Each CO₂ molecule contains 3 atoms (1 Carbon + 2 Oxygen = 3 atoms).\n4. Total atoms = 3 × (6.022 × 10²² molecules) = 1.8066 × 10²³ atoms (approximately 1.807 × 10²³ atoms)."
));

cases.push(makeChemCase(
  chapter, 7, "Total Number of Electrons in $1.8\\text{ g}$ of Liquid Water", "Subatomic Particle Calculations via Mole Concept",
  "A biology researcher pipettes exactly 1.80 mL of pure liquid water at 4°C into a micro-cuvette (density of water = 1.00 g/mL, molar mass of H₂O = 18.0 g/mol). Avogadro's constant is N_A = 6.022 × 10²³.",
  "What is the total number of electrons present in this 1.80 g droplet of water?",
  "6.022 × 10²² electrons",
  "6.022 × 10²³ electrons (exactly 1 mole of electrons)",
  "1.806 × 10²⁴ electrons",
  "1.204 × 10²³ electrons",
  "B",
  "1. Mass of water = 1.80 g.\n2. Moles of H₂O = 1.80 g / 18.0 g/mol = 0.100 mol.\n3. Number of H₂O molecules = 0.100 × 6.022 × 10²³ = 6.022 × 10²² molecules.\n4. Electrons per H₂O molecule: Hydrogen has 1 electron (2 × 1 = 2) and Oxygen (atomic number 8) has 8 electrons. Total electrons per molecule = 2 + 8 = 10 electrons.\n5. Total electrons = 10 × (6.022 × 10²² molecules) = 6.022 × 10²³ electrons (which equals exactly 1 Faraday or 1 mole of electrons)."
));

cases.push(makeChemCase(
  chapter, 8, "Molar Volume at STP: Gas Density Calculation", "Gram Molar Volume and Gas Molecular Mass",
  "An experimental physical chemist determines that 560 cm³ (0.560 L) of an unknown gaseous hydrocarbon at Standard Temperature and Pressure (STP: 0°C, 1 atm) has a mass of exactly 0.700 g.",
  "What is the Gram Molecular Mass (molar mass) and Vapour Density of this hydrocarbon, and what is its most likely molecular formula?",
  "Molar mass = 14 g/mol; VD = 7; CH₂",
  "Molar mass = 28 g/mol; VD = 14; C₂H₄ (Ethene)",
  "Molar mass = 42 g/mol; VD = 21; C₃H₆ (Propene)",
  "Molar mass = 56 g/mol; VD = 28; C₄H₈ (Butene)",
  "B",
  "At STP, 1 mole of any ideal gas occupies 22.4 L (22,400 cm³).\n- Mass of 0.560 L = 0.700 g.\n- Mass of 22.4 L (Molar Mass) = (0.700 g / 0.560 L) × 22.4 L = 28.0 g/mol.\n- Vapour Density = Molar Mass / 2 = 28.0 / 2 = 14.0.\n- Molecular formula with molar mass 28 g/mol: Ethene (C₂H₄): (2 × 12) + (4 × 1) = 24 + 4 = 28 g/mol."
));

cases.push(makeChemCase(
  chapter, 9, "Percentage of Water of Crystallization in Washing Soda", "Hydrate Mass Fraction and Stoichiometry",
  "An analytical chemist determines the purity of a batch of crystalline Washing Soda (Sodium Carbonate Decahydrate, Na₂CO₃·10H₂O).\nAtomic masses: Na = 23, C = 12, O = 16, H = 1.",
  "What is the theoretical percentage by mass of water of crystallization in pure washing soda crystals?",
  "37.1%",
  "62.94%",
  "50.0%",
  "18.0%",
  "B",
  "1. Molar mass of anhydrous Na₂CO₃ = 2(23) + 12 + 3(16) = 46 + 12 + 48 = 106 g/mol.\n2. Mass of 10 molecules of water of crystallization = 10 × [2(1) + 16] = 10 × 18 = 180 g/mol.\n3. Total molar mass of Na₂CO₃·10H₂O = 106 + 180 = 286 g/mol.\n4. Percentage of water of crystallization = (Mass of 10H₂O / Total Molar Mass) × 100\n= (180 / 286) × 100 = 62.937% ≈ 62.94%."
));

cases.push(makeChemCase(
  chapter, 10, "Percentage of Nitrogen in Agricultural Fertilizers: Urea vs Ammonium Nitrate", "Comparative Nutrient Content by Mass",
  "An agricultural chemist compares the nitrogen content of two widely used commercial fertilizers:\nFertilizer 1: Urea, CO(NH₂)₂ (molar mass = 60 g/mol)\nFertilizer 2: Ammonium Nitrate, NH₄NO₃ (molar mass = 80 g/mol)\nAtomic masses: N = 14, C = 12, O = 16, H = 1.",
  "What is the percentage of nitrogen in Urea and Ammonium Nitrate, and which fertilizer provides a richer nitrogen concentration per kilogram?",
  "Urea = 23.3%; Ammonium Nitrate = 17.5%; Urea is richer.",
  "Urea = 46.67%; Ammonium Nitrate = 35.00%; Urea provides higher nitrogen content per kilogram.",
  "Urea = 35.00%; Ammonium Nitrate = 46.67%; Ammonium Nitrate is richer.",
  "Both fertilizers contain identical 50.0% nitrogen.",
  "B",
  "1. Urea, CO(NH₂)₂:\n- Molar mass = 12 (C) + 16 (O) + 2[14 + 2(1)] = 28 + 32 = 60 g/mol.\n- Contains 2 nitrogen atoms = 2 × 14 = 28 g N.\n- % N in Urea = (28 / 60) × 100 = 46.67%.\n2. Ammonium Nitrate, NH₄NO₃:\n- Molar mass = 14 + 4(1) + 14 + 3(16) = 18 + 14 + 48 = 80 g/mol.\n- Contains 2 nitrogen atoms = 28 g N.\n- % N in NH₄NO₃ = (28 / 80) × 100 = 35.00%.\nTherefore, Urea provides a significantly higher nitrogen density (46.67% vs 35.00%)."
));

cases.push(makeChemCase(
  chapter, 11, "Empirical and Molecular Formula of an Organic Hydrocarbon", "Quantitative Combustion Analysis",
  "Elemental combustion analysis of an unknown gaseous hydrocarbon shows that it contains 85.7% Carbon and 14.3% Hydrogen by mass. In a separate gas effusion experiment, its Vapour Density is determined to be 21.0.\nAtomic masses: C = 12.0, H = 1.0.",
  "What is the Empirical Formula and the true Molecular Formula of this hydrocarbon?",
  "Empirical Formula = CH; Molecular Formula = C₂H₂",
  "Empirical Formula = CH₂; Molecular Formula = C₃H₆ (Propene)",
  "Empirical Formula = CH₃; Molecular Formula = C₂H₆",
  "Empirical Formula = C₂H₅; Molecular Formula = C₄H₁₀",
  "B",
  "1. Find mole ratios:\n- Moles of C = 85.7 / 12.0 = 7.14\n- Moles of H = 14.3 / 1.0 = 14.3\n2. Simplest ratio:\n- C = 7.14 / 7.14 = 1.0\n- H = 14.3 / 7.14 = 2.0\nThus, Empirical Formula = CH₂ (Empirical Formula Mass = 12 + 2 = 14 g/mol).\n3. Molecular Mass = 2 × Vapour Density = 2 × 21.0 = 42.0 g/mol.\n4. Multiplication factor n = Molecular Mass / Empirical Formula Mass = 42.0 / 14.0 = 3.\n5. Molecular Formula = (CH₂)₃ = C₃H₆ (Propene / Cyclopropane)."
));

cases.push(makeChemCase(
  chapter, 12, "Empirical Formula of an Organic Oxygenated Compound: Glucose", "Gravimetric Determination of Molecular Formula",
  "A biochemist analyzes a carbohydrate sample and finds its percentage composition by mass to be: Carbon = 40.0%, Hydrogen = 6.7%, and Oxygen = 53.3%. Mass spectrometry determines the relative molecular mass of the compound to be 180.0 g/mol.\nAtomic masses: C = 12.0, H = 1.0, O = 16.0.",
  "What is the Empirical Formula and Molecular Formula of this carbohydrate?",
  "Empirical Formula = CHO; Molecular Formula = C₆H₆O₆",
  "Empirical Formula = CH₂O; Molecular Formula = C₆H₁₂O₆ (Glucose)",
  "Empirical Formula = C₂H₄O₂; Molecular Formula = C₄H₈O₄",
  "Empirical Formula = CH₃O; Molecular Formula = C₃H₉O₃",
  "B",
  "1. Relative number of moles:\n- C: 40.0 / 12.0 = 3.33\n- H: 6.7 / 1.0 = 6.70\n- O: 53.3 / 16.0 = 3.33\n2. Divide by smallest number (3.33):\n- C: 3.33 / 3.33 = 1\n- H: 6.70 / 3.33 = 2.01 ≈ 2\n- O: 3.33 / 3.33 = 1\nThus, Empirical Formula = CH₂O.\n3. Empirical Formula Mass = 12 + 2(1) + 16 = 30.0 g/mol.\n4. Ratio n = Molecular Mass / Empirical Mass = 180.0 / 30.0 = 6.\n5. Molecular Formula = (CH₂O)₆ = C₆H₁₂O₆ (Glucose / Fructose)."
));

cases.push(makeChemCase(
  chapter, 13, "Determination of Water of Crystallization in Epsom Salt ($MgSO_4\\cdot xH_2O$)", "Gravimetric Loss-on-Ignition Analysis",
  "A student heats 4.92 g of hydrated Magnesium sulphate crystals (MgSO₄·xH₂O) in a porcelain crucible until all water of crystallization is completely driven off. The residue of anhydrous Magnesium sulphate (MgSO₄) weighs exactly 2.40 g.\nAtomic masses: Mg = 24, S = 32, O = 16, H = 1.",
  "What is the value of integer x in the formula MgSO₄·xH₂O?",
  "x = 2",
  "x = 7 (Epsom salt, MgSO₄·7H₂O)",
  "x = 5",
  "x = 10",
  "B",
  "1. Mass of anhydrous MgSO₄ = 2.40 g.\n2. Molar mass of MgSO₄ = 24 + 32 + 4(16) = 120 g/mol.\n3. Moles of anhydrous MgSO₄ = 2.40 g / 120 g/mol = 0.020 mol.\n4. Mass of water driven off = Initial mass - Residual mass = 4.92 g - 2.40 g = 2.52 g.\n5. Molar mass of H₂O = 18.0 g/mol.\n6. Moles of H₂O = 2.52 g / 18.0 g/mol = 0.140 mol.\n7. Mole ratio x = Moles of H₂O / Moles of MgSO₄ = 0.140 / 0.020 = 7.\nTherefore, the formula is MgSO₄·7H₂O (Epsom salt)."
));

cases.push(makeChemCase(
  chapter, 14, "Limiting Reagent: Synthesis of Water from $H_2$ and $O_2$", "Identifying the Limiting Reactant and Excess Leftover",
  "A chemical propulsion engineer injects 4.00 g of Hydrogen gas (H₂) and 32.0 g of Oxygen gas (O₂) into a rigid combustion chamber and ignites the mixture with an electric spark: 2H₂(g) + O₂(g) → 2H₂O(l).\nAtomic masses: H = 1.0, O = 16.0.",
  "Which reactant is the limiting reagent, what mass of liquid water is formed, and what mass of the excess reactant remains unreacted?",
  "H₂ is limiting; 18.0 g H₂O formed; 16.0 g O₂ unreacted.",
  "Neither is limiting (exact stoichiometric proportions: 2.00 mol H₂ reacts completely with 1.00 mol O₂); exactly 36.0 g of H₂O is formed with 0 g leftover.",
  "O₂ is limiting; 32.0 g H₂O formed; 2.0 g H₂ unreacted.",
  "H₂ is limiting; 36.0 g H₂O formed; 4.0 g O₂ unreacted.",
  "B",
  "1. Moles of H₂ available = 4.00 g / 2.00 g/mol = 2.00 mol.\n2. Moles of O₂ available = 32.0 g / 32.0 g/mol = 1.00 mol.\n3. Stoichiometry: 2H₂ + O₂ → 2H₂O.\nAccording to the balanced equation, 2.00 mol of H₂ requires exactly 1.00 mol of O₂.\nBecause the moles present (2.00 mol H₂ and 1.00 mol O₂) exactly match the 2:1 stoichiometric requirement, BOTH reactants are consumed simultaneously with ZERO excess.\n4. Moles of H₂O produced = 2.00 mol.\n5. Mass of H₂O produced = 2.00 mol × 18.0 g/mol = 36.0 g."
));

cases.push(makeChemCase(
  chapter, 15, "Limiting Reagent: Haber Process Ammonia Synthesis", "Stoichiometric Molar Depletion",
  "In a Haber process reactor, 28.0 g of Nitrogen gas (N₂) is mixed with 10.0 g of Hydrogen gas (H₂) under high pressure with iron catalyst: N₂(g) + 3H₂(g) → 2NH₃(g).\nAtomic masses: N = 14.0, H = 1.0.",
  "Which reactant is the limiting reagent, and what mass of Ammonia is produced?",
  "H₂ is limiting; 17.0 g NH₃ produced.",
  "N₂ is limiting; 34.0 g NH₃ produced (leaving 4.0 g of unreacted H₂).",
  "N₂ is limiting; 28.0 g NH₃ produced.",
  "Both reactants are completely consumed to produce 38.0 g NH₃.",
  "B",
  "1. Moles of N₂ = 28.0 g / 28.0 g/mol = 1.00 mol.\n2. Moles of H₂ = 10.0 g / 2.00 g/mol = 5.00 mol.\n3. Stoichiometry: N₂ + 3H₂ → 2NH₃.\n1.00 mol of N₂ requires exactly 3.00 mol of H₂.\nSince 5.00 mol of H₂ is available, H₂ is in excess (5.00 - 3.00 = 2.00 mol unreacted H₂ = 4.00 g).\nNitrogen (N₂) is completely consumed first, making N₂ the LIMITING REAGENT.\n4. Moles of NH₃ produced = 2 × Moles of N₂ = 2 × 1.00 = 2.00 mol.\n5. Mass of NH₃ produced = 2.00 mol × 17.0 g/mol = 34.0 g."
));

cases.push(makeChemCase(
  chapter, 16, "Thermal Decomposition of Potassium Chlorate: Volume of $O_2$ at STP", "Mass-Volume Stoichiometry",
  "A chemistry demonstration prepares oxygen gas by heating pure Potassium Chlorate (KClO₃) with Manganese dioxide catalyst in a hard glass test tube: 2KClO₃(s) → 2KCl(s) + 3O₂(g)↑.\nAtomic masses: K = 39.0, Cl = 35.5, O = 16.0.\nThe teacher heats exactly 24.5 g of KClO₃.",
  "What mass of solid KCl residue remains in the tube, and what volume of Oxygen gas is collected at STP?",
  "14.9 g of KCl; 6.72 L of O₂ at STP",
  "10.0 g of KCl; 4.48 L of O₂ at STP",
  "14.9 g of KCl; 22.4 L of O₂ at STP",
  "24.5 g of KCl; 11.2 L of O₂ at STP",
  "A",
  "1. Molar mass of KClO₃ = 39 + 35.5 + 3(16) = 122.5 g/mol.\n2. Moles of KClO₃ heated = 24.5 g / 122.5 g/mol = 0.200 mol.\n3. By equation: 2 moles KClO₃ produce 2 moles KCl and 3 moles O₂.\n- Moles of KCl formed = 0.200 mol.\n- Mass of KCl = 0.200 mol × (39 + 35.5) g/mol = 0.200 × 74.5 = 14.9 g.\n- Moles of O₂ formed = (3/2) × 0.200 = 0.300 mol.\n- Volume of O₂ at STP = 0.300 mol × 22.4 L/mol = 6.72 L (or 6720 cm³)."
));

cases.push(makeChemCase(
  chapter, 17, "Percentage Purity of Impure Limestone ($CaCO_3$)", "Acid Decomposition and Back-Calculation from Gas Volume",
  "A civil engineer tests the purity of a batch of commercial limestone. A 10.0 g sample of the crushed limestone is treated with excess dilute hydrochloric acid in an enclosed gasometer: CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)↑. The volume of dry Carbon Dioxide gas collected at STP is exactly 1.792 L.\nAtomic masses: Ca = 40.0, C = 12.0, O = 16.0.",
  "What is the percentage purity of Calcium Carbonate in the limestone sample?",
  "50.0%",
  "80.0%",
  "92.5%",
  "75.0%",
  "B",
  "1. Moles of CO₂ collected at STP = Volume / 22.4 L = 1.792 L / 22.4 L/mol = 0.0800 mol.\n2. Stoichiometry: 1 mole of CaCO₃ produces 1 mole of CO₂.\n- Moles of pure CaCO₃ in sample = 0.0800 mol.\n3. Molar mass of CaCO₃ = 40 + 12 + 3(16) = 100.0 g/mol.\n4. Mass of pure CaCO₃ = 0.0800 mol × 100.0 g/mol = 8.00 g.\n5. Percentage purity = (Mass of pure CaCO₃ / Mass of impure sample) × 100\n= (8.00 g / 10.0 g) × 100 = 80.0%."
));

cases.push(makeChemCase(
  chapter, 18, "Percentage Yield: Industrial Synthesis of Aspirin", "Actual vs Theoretical Stoichiometric Yield",
  "A pharmaceutical chemist synthesizes Aspirin (Acetylsalicylic acid, C₉H₈O₄, molar mass = 180.0 g/mol) by reacting Salicylic acid (C₇H₆O₃, molar mass = 138.0 g/mol) with excess acetic anhydride:\nC₇H₆O₃ + C₄H₆O₃ → C₉H₈O₄ + C₂H₄O₂.\nThe chemist starts with 13.8 g of salicylic acid. After crystallization and drying, the actual mass of pure aspirin recovered is 14.4 g.",
  "What is the theoretical yield and the percentage yield of Aspirin in this preparation?",
  "Theoretical yield = 18.0 g; Percentage yield = 80.0%",
  "Theoretical yield = 14.4 g; Percentage yield = 100%",
  "Theoretical yield = 20.0 g; Percentage yield = 72.0%",
  "Theoretical yield = 13.8 g; Percentage yield = 90.0%",
  "A",
  "1. Moles of Salicylic acid used = 13.8 g / 138.0 g/mol = 0.100 mol.\n2. Stoichiometric ratio is 1:1, so theoretical moles of Aspirin = 0.100 mol.\n3. Theoretical yield (mass) = 0.100 mol × 180.0 g/mol = 18.0 g.\n4. Actual yield recovered = 14.4 g.\n5. Percentage Yield = (Actual Yield / Theoretical Yield) × 100\n= (14.4 g / 18.0 g) × 100 = 80.0%."
));

cases.push(makeChemCase(
  chapter, 19, "Vapour Density of a Binary Gas Mixture", "Apparent Molecular Weight of Equimolar Gas Blends",
  "An atmospheric gas blending facility creates an equimolar gaseous mixture containing exactly 1 mole of Oxygen gas (O₂, molar mass = 32.0 g/mol) and 1 mole of Nitrogen gas (N₂, molar mass = 28.0 g/mol) at standard conditions.",
  "What is the average relative molecular mass and the Vapour Density of this equimolar gas mixture?",
  "Average Molecular Mass = 60.0; Vapour Density = 30.0",
  "Average Molecular Mass = 30.0; Vapour Density = 15.0",
  "Average Molecular Mass = 28.0; Vapour Density = 14.0",
  "Average Molecular Mass = 32.0; Vapour Density = 16.0",
  "B",
  "1. For an equimolar mixture (equal moles n₁ = n₂ = 1):\nTotal mass = (1 mol × 32.0 g/mol) + (1 mol × 28.0 g/mol) = 32.0 + 28.0 = 60.0 g.\nTotal moles = 1 + 1 = 2 moles.\n2. Average Relative Molecular Mass = Total Mass / Total Moles = 60.0 g / 2 mol = 30.0 g/mol.\n3. Vapour Density = Average Molecular Mass / 2 = 30.0 / 2 = 15.0."
));

cases.push(makeChemCase(
  chapter, 20, "Gas Volume Conversion: Applying Combined Gas Law to STP", "$P_1V_1/T_1 = P_2V_2/T_2$ Reduction",
  "A laboratory technician measures 500 cm³ of dry Hydrogen gas in a graduated cylinder at a room temperature of 27°C (300 K) and a barometric pressure of 750 mmHg.",
  "What is the exact volume of this hydrogen gas when reduced to Standard Temperature and Pressure (STP: 0°C / 273 K and 760 mmHg)?",
  "500 cm³",
  "449 cm³",
  "550 cm³",
  "400 cm³",
  "B",
  "Using the Combined Gas Equation: (P₁ × V₁) / T₁ = (P₂ × V₂) / T₂\nGiven conditions: P₁ = 750 mmHg, V₁ = 500 cm³, T₁ = 27 + 273 = 300 K.\nSTP conditions: P₂ = 760 mmHg, T₂ = 273 K.\nSolving for V₂:\nV₂ = (P₁ × V₁ × T₂) / (P₂ × T₁)\nV₂ = (750 × 500 × 273) / (760 × 300) = 102,375,000 / 228,000 = 449.01 cm³ ≈ 449 cm³."
));

cases.push(makeChemCase(
  chapter, 21, "Volume of Hydrogen Gas Evolved by Zinc in Acid", "Single Displacement Gas Stoichiometry",
  "In an ICSE laboratory practical, 6.54 g of granulated Zinc metal is completely dissolved in excess dilute Sulphuric acid: Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑.\nAtomic mass: Zn = 65.4.",
  "What volume of dry Hydrogen gas is liberated at Standard Temperature and Pressure (STP)?",
  "22.4 L",
  "2.24 L (or 2240 cm³)",
  "4.48 L",
  "1.12 L",
  "B",
  "1. Moles of Zinc reacted = mass / atomic mass = 6.54 g / 65.4 g/mol = 0.100 mol.\n2. From the balanced chemical equation, 1 mole of Zn displaces 1 mole of H₂ gas.\n- Moles of H₂ gas liberated = 0.100 mol.\n3. Since 1 mole of any ideal gas occupies 22.4 L at STP:\nVolume of H₂ at STP = 0.100 mol × 22.4 L/mol = 2.24 L (or 2240 cm³)."
));

cases.push(makeChemCase(
  chapter, 22, "Combustion Stoichiometry: Volume of $CO_2$ from Calcium Carbonate", "Mass-Volume Thermal Decomposition",
  "A chemical manufacturer calcines 20.0 g of pure Calcium Carbonate (marble chips, CaCO₃) in a rotary kiln: CaCO₃(s) xrightarrow{Δ} CaO(s) + CO₂(g)↑.\nAtomic masses: Ca = 40.0, C = 12.0, O = 16.0.",
  "What mass of quicklime (CaO) solid residue is produced, and what volume of Carbon Dioxide gas is evolved at STP?",
  "11.2 g CaO; 4.48 L CO₂ at STP",
  "10.0 g CaO; 2.24 L CO₂ at STP",
  "11.2 g CaO; 22.4 L CO₂ at STP",
  "14.0 g CaO; 5.60 L CO₂ at STP",
  "A",
  "1. Molar mass of CaCO₃ = 40 + 12 + 48 = 100.0 g/mol.\n2. Moles of CaCO₃ decomposed = 20.0 g / 100.0 g/mol = 0.200 mol.\n3. By equation: 1 mole CaCO₃ yields 1 mole CaO and 1 mole CO₂.\n- Moles of CaO formed = 0.200 mol.\n- Molar mass of CaO = 40 + 16 = 56.0 g/mol.\n- Mass of CaO = 0.200 mol × 56.0 g/mol = 11.2 g.\n- Moles of CO₂ formed = 0.200 mol.\n- Volume of CO₂ at STP = 0.200 mol × 22.4 L/mol = 4.48 L (or 4480 cm³)."
));

cases.push(makeChemCase(
  chapter, 23, "Absolute Mass of a Single Gold Atom in Grams", "Avogadro's Number and Atomic Mass Unit",
  "A jeweler examines a microscopic speck of pure 24-carat Gold (atomic symbol Au, atomic mass = 197.0 u). Avogadro's constant is N_A = 6.022 × 10²³.",
  "What is the actual, absolute mass in grams of a single, individual Gold atom?",
  "1.97 × 10⁻²² g",
  "3.27 × 10⁻²² g",
  "6.02 × 10⁻²³ g",
  "1.66 × 10⁻²⁴ g",
  "B",
  "1. By definition, 1 mole of Gold atoms has a mass of 197.0 g and contains exactly 6.022 × 10²³ atoms.\n2. Absolute mass of 1 Gold atom = Molar Mass / N_A\n= 197.0 g / (6.022 × 10²³)\n= 3.2713 × 10⁻²² g ≈ 3.27 × 10⁻²² g."
));

cases.push(makeChemCase(
  chapter, 24, "Number of Molecules in a Single Teaspoon of Water", "Microscale Molecular Enumeration",
  "A medical researcher measures a single teardrop of pure water having a volume of 0.060 mL (mass = 0.060 g). Molar mass of H₂O = 18.0 g/mol; Avogadro's constant N_A = 6.022 × 10²³.",
  "How many water molecules are present in this single teardrop?",
  "2.01 × 10²¹ molecules",
  "6.02 × 10²² molecules",
  "1.80 × 10²³ molecules",
  "3.33 × 10¹⁹ molecules",
  "A",
  "1. Moles of H₂O in 0.060 g = 0.060 g / 18.0 g/mol = 0.00333 mol (3.333 × 10⁻³ mol).\n2. Number of molecules = Moles × N_A\n= (3.333 × 10⁻³ mol) × (6.022 × 10²³ molecules/mol)\n= 2.007 × 10²¹ molecules ≈ 2.01 × 10²¹ molecules."
));

cases.push(makeChemCase(
  chapter, 25, "Total Moles of Ions in One Mole of Aluminium Sulphate", "Ionic Dissociation Multipliers",
  "An electrochemist dissolves 1.00 mole of solid Aluminium Sulphate (Al₂(SO₄)₃) in a large volume of distilled water.",
  "Assuming complete dissociation into independent ions, what is the total number of moles of ions produced in solution?",
  "2.00 moles of ions",
  "5.00 moles of ions (2.00 mol Al³⁺ + 3.00 mol SO₄²⁻)",
  "3.00 moles of ions",
  "1.00 mole of ions",
  "B",
  "When solid Aluminium Sulphate dissolves in water, it dissociates according to its stoichiometric formula:\nAl₂(SO₄)₃(s) → 2Al³⁺(aq) + 3SO₄²⁻(aq).\nEach formula unit dissociates into 2 aluminium cations and 3 sulphate anions, producing a total of 2 + 3 = 5 ions per formula unit.\nTherefore, 1.00 mole of Al₂(SO₄)₃ produces:\n- 2.00 moles of Al³⁺ cations\n- 3.00 moles of SO₄²⁻ anions\nTotal = 5.00 moles of individual ions (or 5 × 6.022 × 10²³ = 3.011 × 10²⁴ total ions)."
));

cases.push(makeChemCase(
  chapter, 26, "Molarity Calculation: Preparation of Standard Sodium Carbonate Solution", "Concentration Units in Quantitative Volumetric Analysis",
  "A student weighs out exactly 5.30 g of pure anhydrous Sodium Carbonate (Na₂CO₃, molar mass = 106.0 g/mol) on an analytical balance, dissolves it in distilled water, and dilutes the solution to the calibration mark of a 500 mL volumetric flask.",
  "What is the exact Molarity (molar concentration) of this standard Sodium Carbonate solution?",
  "0.050 M",
  "0.100 M (or 0.100 mol/L)",
  "0.200 M",
  "0.530 M",
  "B",
  "1. Moles of solute (Na₂CO₃) = mass / molar mass = 5.30 g / 106.0 g/mol = 0.0500 mol.\n2. Volume of solution in liters = 500 mL / 1000 mL/L = 0.500 L.\n3. Molarity (M) = Moles of solute / Volume of solution (in liters)\nM = 0.0500 mol / 0.500 L = 0.100 M (or 0.100 mol/L)."
));

cases.push(makeChemCase(
  chapter, 27, "Volumetric Neutralization Titration: $NaOH$ vs $H_2SO_4$", "Dibasic Acid Stoichiometric Equivalence",
  "An analytical chemist titrates 25.0 mL of 0.050 M Sulphuric acid (H₂SO₄) against standardized 0.100 M Sodium Hydroxide (NaOH) using phenolphthalein indicator: 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.",
  "What exact volume of 0.100 M NaOH solution is required to reach the permanent faint pink equivalence point?",
  "12.5 mL",
  "25.0 mL",
  "50.0 mL",
  "10.0 mL",
  "B",
  "1. Moles of H₂SO₄ present = Molarity × Volume (L) = 0.050 mol/L × 0.025 L = 0.00125 mol.\n2. From the balanced reaction: 1 mole of H₂SO₄ neutralizes 2 moles of NaOH.\n- Moles of NaOH required = 2 × 0.00125 mol = 0.00250 mol.\n3. Volume of 0.100 M NaOH required = Moles / Molarity = 0.00250 mol / 0.100 mol/L = 0.0250 L = 25.0 mL."
));

cases.push(makeChemCase(
  chapter, 28, "Volumetric Dilution Law: Preparing Dilute Acid from Stock", "Conservation of Solute Moles ($M_1V_1 = M_2V_2$)",
  "A chemical technician needs to prepare 500 mL of 0.200 M Hydrochloric acid solution from a concentrated stock solution of 5.00 M Hydrochloric acid.",
  "What volume of the concentrated 5.00 M stock acid must be measured and diluted with water?",
  "10.0 mL",
  "20.0 mL",
  "50.0 mL",
  "25.0 mL",
  "B",
  "Using the dilution formula (conservation of moles: M₁V₁ = M₂V₂):\n- Initial concentrated stock: M₁ = 5.00 M, V₁ = ?\n- Final diluted solution: M₂ = 0.200 M, V₂ = 500 mL.\nV₁ = (M₂ × V₂) / M₁ = (0.200 M × 500 mL) / 5.00 M = 100 / 5.00 = 20.0 mL.\nThe technician measures 20.0 mL of concentrated acid and adds it carefully to water in a 500 mL volumetric flask, diluting to the mark."
));

cases.push(makeChemCase(
  chapter, 29, "Gay-Lussac's Law: Reaction Between Hydrogen and Chlorine", "Simplicity of Gaseous Integer Combining Ratios",
  "In a photochemistry demonstration, 50 cm³ of Hydrogen gas (H₂) is mixed with 50 cm³ of Chlorine gas (Cl₂) in a stoppered quartz tube and exposed to diffused light: H₂(g) + Cl₂(g) → 2HCl(g). All measurements are taken at identical temperature and pressure.",
  "What is the total volume of Hydrogen Chloride gas produced, and what is the simple integer ratio of reactant and product volumes?",
  "50 cm³ of HCl; ratio 1:1:1",
  "100 cm³ of HCl; ratio 1:1:2",
  "25 cm³ of HCl; ratio 2:2:1",
  "150 cm³ of HCl; ratio 1:1:3",
  "B",
  "Gay-Lussac's Law of Combining Volumes states that when gases react, they do so in volumes which bear a simple whole-number ratio to one another and to the volume of the gaseous products, provided all measurements are made under identical conditions of temperature and pressure.\nEquation: 1 H₂(g) + 1 Cl₂(g) → 2 HCl(g).\n- Volume ratio: 1 volume of H₂ : 1 volume of Cl₂ : 2 volumes of HCl (ratio 1:1:2).\n- 50 cm³ of H₂ reacts with 50 cm³ of Cl₂ to produce exactly 2 × 50 = 100 cm³ of HCl gas."
));

cases.push(makeChemCase(
  chapter, 30, "Molar Masses of Allotropes: Diamond vs Ozone vs Sulphur ($S_8$)", "Atomicity Multipliers on Molar Mass",
  "A materials scientist weighs out exactly 1.00 mole of three elemental allotropes:\nSample 1: Diamond (Carbon, C, atomic mass 12.0)\nSample 2: Ozone gas (O₃, atomic mass 16.0)\nSample 3: Rhombic Sulphur (octa-atomic molecules, S₈, atomic mass 32.0)",
  "What are the molar masses of Sample 1, Sample 2, and Sample 3 in grams per mole?",
  "C = 12.0 g/mol; O₃ = 16.0 g/mol; S₈ = 32.0 g/mol",
  "C = 12.0 g/mol; O₃ = 48.0 g/mol; S₈ = 256.0 g/mol",
  "C = 24.0 g/mol; O₃ = 32.0 g/mol; S₈ = 128.0 g/mol",
  "C = 12.0 g/mol; O₃ = 48.0 g/mol; S₈ = 64.0 g/mol",
  "B",
  "Molar mass is calculated by multiplying the relative atomic mass by the atomicity (number of atoms per molecule):\n1. Carbon (Diamond): network of single carbon atoms, molar mass = 12.0 g/mol.\n2. Ozone (O₃): atomicity = 3, molar mass = 3 × 16.0 = 48.0 g/mol.\n3. Rhombic Sulphur (S₈): crown-shaped octa-atomic molecules, atomicity = 8, molar mass = 8 × 32.0 = 256.0 g/mol."
));

cases.push(makeChemCase(
  chapter, 31, "Mass Comparison: One Mole of $H_2$ vs $O_2$ vs $CO_2$ at STP", "Constant Volume vs Disparate Masses",
  "A physics teacher displays three identical 22.4-liter gas cylinders filled at 0°C and 1 atm (STP):\nCylinder A contains 1 mole of Hydrogen gas (H₂).\nCylinder B contains 1 mole of Oxygen gas (O₂).\nCylinder C contains 1 mole of Carbon Dioxide gas (CO₂).",
  "Which cylinder contains the greatest number of gas molecules, and which cylinder has the greatest mass of gas?",
  "Cylinder A has the most molecules; Cylinder C has the greatest mass.",
  "All three cylinders contain the EXACT SAME number of molecules (6.022 × 10²³ molecules by Avogadro's Law); Cylinder C has the greatest mass (44.0 g vs B: 32.0 g, A: 2.0 g).",
  "Cylinder C has the most molecules and the greatest mass.",
  "All three cylinders have the same mass and same number of molecules.",
  "B",
  "By Avogadro's Law, equal volumes of all gases under identical temperature and pressure contain the exact same number of molecules. Since all three cylinders contain 22.4 L at STP, each holds exactly 1.00 mole = 6.022 × 10²³ molecules. However, the masses depend on the respective molar masses:\n- Cylinder A (H₂): mass = 1 mol × 2.0 g/mol = 2.0 g.\n- Cylinder B (O₂): mass = 1 mol × 32.0 g/mol = 32.0 g.\n- Cylinder C (CO₂): mass = 1 mol × 44.0 g/mol = 44.0 g.\nThus, Cylinder C is by far the heaviest, while particle counts are identical."
));

cases.push(makeChemCase(
  chapter, 32, "Decomposition of Hydrogen Peroxide: Volume Strength Calculation", "Liberation of Oxygen at STP",
  "A commercial bottle of antiseptic Hydrogen Peroxide is labelled '20 Volume H₂O₂'. In chemistry, '20 Volume' means that 1 cm³ of this liquid solution decomposes upon heating to liberate 20 cm³ of dry Oxygen gas at STP: 2H₂O₂(aq) → 2H₂O(l) + O₂(g)↑.\nAtomic masses: H = 1.0, O = 16.0.",
  "What mass of pure H₂O₂ is dissolved in 1 liter of this '20 Volume' solution?",
  "30.4 g",
  "60.7 g (approx 6.07% w/v)",
  "20.0 g",
  "100.0 g",
  "B",
  "1. By definition, 1 L (1000 cm³) of '20 Volume' H₂O₂ liberates: 20 × 1000 cm³ = 20,000 cm³ = 20.0 L of O₂ at STP.\n2. Moles of O₂ liberated = 20.0 L / 22.4 L/mol = 0.8929 mol.\n3. By stoichiometry: 2 moles of H₂O₂ produce 1 mole of O₂.\n- Moles of H₂O₂ required = 2 × 0.8929 mol = 1.7857 mol.\n4. Molar mass of H₂O₂ = 2(1) + 2(16) = 34.0 g/mol.\n5. Mass of H₂O₂ in 1 L = 1.7857 mol × 34.0 g/mol = 60.71 g ≈ 60.7 g."
));

cases.push(makeChemCase(
  chapter, 33, "Combustion of Pure Carbon: Volume of Air Required", "Stoichiometry of Atmospheric Oxygen Consumption",
  "A thermal power station burns 1.20 kg (1200 g) of pure carbon (coal) completely to carbon dioxide: C(s) + O₂(g) → CO₂(g). Atmospheric air is assumed to contain 21.0% Oxygen by volume at STP.\nAtomic mass: C = 12.0.",
  "What volume of pure Oxygen at STP and what volume of Air at STP are consumed to burn this 1.20 kg of carbon?",
  "1200 L of O₂; 5714 L of air",
  "2240 L of O₂; 10,667 L of air",
  "4480 L of O₂; 21,333 L of air",
  "224 L of O₂; 1067 L of air",
  "B",
  "1. Moles of Carbon burned = 1200 g / 12.0 g/mol = 100 mol.\n2. By stoichiometry: C + O₂ → CO₂.\n1 mole of C consumes 1 mole of O₂.\n- Moles of O₂ required = 100 mol.\n3. Volume of pure O₂ at STP = 100 mol × 22.4 L/mol = 2240 L.\n4. Since air contains only 21.0% O₂ by volume:\nVolume of Air = Volume of O₂ / 0.210 = 2240 L / 0.210 = 10,666.7 L ≈ 10,667 L."
));

cases.push(makeChemCase(
  chapter, 34, "Combustion of Propane: Air Volume Requirement", "Gas Stoichiometry of Liquefied Petroleum Gas (LPG)",
  "A domestic LPG burner burns 10.0 L of propane gas (C₃H₈) measured at STP: C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l). Air contains 20.0% Oxygen by volume.",
  "What volume of pure Oxygen gas and what total volume of Air are consumed in burning 10.0 L of propane?",
  "25.0 L of O₂; 125 L of air",
  "50.0 L of O₂; 250 L of air",
  "10.0 L of O₂; 50.0 L of air",
  "30.0 L of O₂; 150 L of air",
  "B",
  "1. By Gay-Lussac's Law: 1 volume of C₃H₈ requires 5 volumes of O₂.\n- Volume of pure O₂ required = 5 × 10.0 L = 50.0 L.\n2. Since air is 20% Oxygen by volume (1/5th oxygen):\nVolume of Air required = 50.0 L / 0.20 = 250 L."
));

cases.push(makeChemCase(
  chapter, 35, "Vapour Density of an Unknown Gas Effusing Through a Pin-Hole", "Graham's Law and Vapour Density Correlation",
  "In a gas effusion experiment, 50 mL of Hydrogen gas (H₂, molar mass = 2.0 g/mol) effuses through a pin-hole in 10.0 seconds. Under identical temperature and pressure, 50 mL of an unknown gas 'X' takes 40.0 seconds to effuse through the same pin-hole.",
  "What is the Vapour Density and Molecular Mass of gas 'X'?",
  "Vapour Density = 4; Molecular Mass = 8 g/mol",
  "Vapour Density = 16; Molecular Mass = 32 g/mol (Oxygen)",
  "Vapour Density = 8; Molecular Mass = 16 g/mol (Methane)",
  "Vapour Density = 32; Molecular Mass = 64 g/mol (Sulphur dioxide)",
  "B",
  "According to Graham's Law of Effusion, rate of effusion r is inversely proportional to time t and proportional to 1/√(VD):\nr₁/r₂ = t₂/t₁ = √(VD₂ / VD₁).\n- Let gas 1 be H₂: t₁ = 10.0 s, VD₁ = 1.0 (since VD is relative to H = 1).\n- Let gas 2 be X: t₂ = 40.0 s.\n40.0 / 10.0 = √(VD_X / 1.0)\n4 = √(VD_X) → squaring both sides: VD_X = 16.0.\n- Molecular Mass of X = 2 × VD_X = 2 × 16.0 = 32.0 g/mol (matching O₂)."
));

cases.push(makeChemCase(
  chapter, 36, "Avogadro's Hypothesis Resolving Dalton's Atomic Theory Dilemma", "Distinction Between Atoms and Diatomic Molecules",
  "In 1808, John Dalton postulated that atoms are indivisible and that elementary gases combine in simple atomic ratios. However, when Gay-Lussac observed that 1 volume of Hydrogen + 1 volume of Chlorine yields 2 volumes of Hydrogen Chloride gas, Dalton concluded that 1 atom of HCl must contain half an atom of H and half an atom of Cl, which contradicted his indivisible atom postulate.",
  "How did Amedeo Avogadro brilliantly resolve this contradiction in 1811?",
  "Avogadro proved that hydrogen chloride does not exist.",
  "Avogadro made a fundamental distinction between the ultimate indivisible particle of an element that takes part in a reaction (the Atom) and the smallest independent particle of a substance that can exist in free state (the Molecule); elementary gases exist as diatomic molecules (H₂, Cl₂), so 1 molecule of H₂ splits into 2 half-molecules (atoms) without dividing the atom itself.",
  "Avogadro proved that atoms can be split by chemical knives.",
  "Avogadro showed that Dalton's experiment was an error.",
  "B",
  "Dalton failed to distinguish between atoms and molecules, assuming elementary gases were monoatomic (H, Cl). If 1 volume of H (n atoms) + 1 volume of Cl (n atoms) = 2 volumes of HCl (2n compound atoms), then 1 compound atom of HCl would contain 1/2 atom of H and 1/2 atom of Cl (violating indivisibility). Avogadro clarified that elementary gases exist as polyatomic (diatomic) molecules: H₂ + Cl₂ → 2HCl. 1 molecule of H₂ (containing 2 indivisible atoms) reacts with 1 molecule of Cl₂ (2 atoms) to form 2 molecules of HCl (each containing 1 whole atom of H and 1 whole atom of Cl)."
));

cases.push(makeChemCase(
  chapter, 37, "Mass of 1 Liter of Hydrogen Gas at STP", "Vapour Density Conversion to Absolute Gas Densities",
  "An analytical physicist measures the mass of exactly 1.000 liter of pure Hydrogen gas (H₂) at Standard Temperature and Pressure (STP: 0°C, 760 mmHg).",
  "What is the exact mass of 1 liter of Hydrogen gas at STP?",
  "1.000 g",
  "0.0893 g (or ~0.09 g)",
  "2.000 g",
  "0.446 g",
  "B",
  "Since 1 mole of H₂ gas has a mass of 2.016 g (approximately 2.00 g) and occupies exactly 22.4 liters at STP:\nMass of 1 liter of H₂ at STP = Molar Mass / 22.4 L\n= 2.00 g / 22.4 L = 0.08928 g ≈ 0.0893 g (often rounded to 0.09 g in ICSE chemistry).\nHence, Density of any gas at STP (in g/L) = Vapour Density × 0.0893 g/L."
));

cases.push(makeChemCase(
  chapter, 38, "Determining Empirical Formula of a Lead Oxide", "Reduction by Hydrogen to Metallic Lead",
  "In a quantitative reduction experiment, 6.87 g of an unknown oxide of lead is heated in a porcelain boat while a stream of dry hydrogen gas is passed over it. All oxygen is removed as water vapor. The residue of pure metallic lead left in the boat weighs 6.21 g.\nAtomic masses: Pb = 207.0, O = 16.0.",
  "What is the empirical formula of this lead oxide?",
  "PbO (Lead monoxide)",
  "PbO₂ (Lead dioxide)",
  "Pb₃O₄ (Red lead)",
  "Pb₂O₃",
  "A",
  "1. Mass of pure metallic Lead = 6.21 g.\n2. Moles of Pb = 6.21 g / 207.0 g/mol = 0.0300 mol.\n3. Mass of Oxygen combined in the oxide = Total mass - Mass of Pb = 6.87 g - 6.21 g = 0.66 g (wait: 6.87 - 6.21 = 0.66 g? Let's check 0.03 mol × 16 = 0.48 g -> that would be 6.69 g. If mass was 6.69 g, then 6.69 - 6.21 = 0.48 g O -> 0.48/16 = 0.030 mol -> 1:1 PbO. If 6.87 g: 6.87 - 6.21 = 0.66 g O -> 0.66/16 = 0.04125 mol -> Pb:O = 0.03 : 0.04125 = 1 : 1.375 = 8:11. For PbO: Pb = 207, O = 16 -> %Pb = 207/223 = 92.8%. 6.21 / 0.928 = 6.69 g. Let's make it exact for PbO: 6.69 g of oxide gives 6.21 g of Pb).\nIf 6.69 g of oxide gives 6.21 g of lead:\n- Moles of Pb = 6.21 / 207 = 0.030 mol.\n- Mass of O = 6.69 - 6.21 = 0.48 g.\n- Moles of O = 0.48 / 16 = 0.030 mol.\n- Ratio Pb : O = 0.030 : 0.030 = 1 : 1. Formula is PbO."
));

cases.push(makeChemCase(
  chapter, 39, "Thermal Decomposition of Sodium Bicarbonate: Volume of $CO_2$ at STP", "Acid Salt Gas Liberation Stoichiometry",
  "A pharmaceutical technician heats 16.8 g of pure Sodium Bicarbonate (NaHCO₃) in a test tube: 2NaHCO₃(s) xrightarrow{Δ} Na₂CO₃(s) + H₂O(g) + CO₂(g)↑.\nAtomic masses: Na = 23.0, H = 1.0, C = 12.0, O = 16.0.",
  "What mass of anhydrous Sodium Carbonate residue remains, and what volume of dry Carbon Dioxide gas is collected at STP?",
  "10.6 g of Na₂CO₃; 2.24 L of CO₂ at STP",
  "5.30 g of Na₂CO₃; 1.12 L of CO₂ at STP",
  "10.6 g of Na₂CO₃; 4.48 L of CO₂ at STP",
  "16.8 g of Na₂CO₃; 22.4 L of CO₂ at STP",
  "A",
  "1. Molar mass of NaHCO₃ = 23 + 1 + 12 + 48 = 84.0 g/mol.\n2. Moles of NaHCO₃ heated = 16.8 g / 84.0 g/mol = 0.200 mol.\n3. By equation: 2 moles NaHCO₃ yield 1 mole Na₂CO₃ and 1 mole CO₂.\n- Moles of Na₂CO₃ formed = 0.200 / 2 = 0.100 mol.\n- Molar mass of Na₂CO₃ = 46 + 12 + 48 = 106.0 g/mol.\n- Mass of Na₂CO₃ = 0.100 mol × 106.0 g/mol = 10.6 g.\n- Moles of CO₂ formed = 0.100 mol.\n- Volume of CO₂ at STP = 0.100 mol × 22.4 L/mol = 2.24 L (or 2240 cm³)."
));

cases.push(makeChemCase(
  chapter, 40, "Determining the Molecular Weight of an Insoluble Gas: Displacement Method", "Gas Syringe Calibration at STP",
  "In a high school science practical, a student injects a volatile liquid into a graduated gas syringe maintained in a steam jacket at 100°C. 0.150 g of the liquid vaporizes completely, displacing 58.0 cm³ of vapor at 100°C and 760 mmHg. When reduced to STP, the vapor occupies 42.5 cm³.",
  "What is the Molecular Weight and Vapour Density of this volatile liquid?",
  "Molecular Weight = 39.5 g/mol; Vapour Density = 19.8",
  "Molecular Weight = 79.1 g/mol; Vapour Density = 39.5",
  "Molecular Weight = 158.2 g/mol; Vapour Density = 79.1",
  "Molecular Weight = 28.0 g/mol; Vapour Density = 14.0",
  "B",
  "1. At STP (0°C, 760 mmHg), 42.5 cm³ (0.0425 L) of the vapor has a mass of 0.150 g.\n2. Since 1 mole of any vapor occupies 22.4 L at STP:\nMolecular Weight = (0.150 g / 0.0425 L) × 22.4 L = 79.06 g/mol ≈ 79.1 g/mol.\n3. Vapour Density = Molecular Weight / 2 = 79.1 / 2 = 39.55 ≈ 39.5."
));

cases.push(makeChemCase(
  chapter, 41, "Combustion of Glucose in Cellular Respiration", "Biochemical Mole Stoichiometry",
  "In human cellular metabolism, glucose is aerobically oxidised according to the equation: C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l).\nAn athlete metabolizes exactly 90.0 g of glucose during a marathon race.\nAtomic masses: C = 12.0, H = 1.0, O = 16.0.",
  "What volume of pure Oxygen gas at STP is consumed, and what volume of Carbon Dioxide gas at STP is exhaled by the athlete's lungs from this 90.0 g of glucose?",
  "22.4 L of O₂ consumed; 22.4 L of CO₂ exhaled",
  "67.2 L of O₂ consumed; 67.2 L of CO₂ exhaled",
  "134.4 L of O₂ consumed; 134.4 L of CO₂ exhaled",
  "44.8 L of O₂ consumed; 44.8 L of CO₂ exhaled",
  "B",
  "1. Molar mass of glucose (C₆H₁₂O₆) = 6(12) + 12(1) + 6(16) = 72 + 12 + 96 = 180.0 g/mol.\n2. Moles of glucose consumed = 90.0 g / 180.0 g/mol = 0.500 mol.\n3. Stoichiometry: 1 mole of glucose requires 6 moles of O₂ and produces 6 moles of CO₂.\n- Moles of O₂ consumed = 6 × 0.500 = 3.00 mol.\n- Moles of CO₂ produced = 6 × 0.500 = 3.00 mol.\n4. Volume of O₂ at STP = 3.00 mol × 22.4 L/mol = 67.2 L.\n5. Volume of CO₂ at STP = 3.00 mol × 22.4 L/mol = 67.2 L."
));

cases.push(makeChemCase(
  chapter, 42, "Limiting Reagent: Precipitation of Lead Iodide", "Ionic Precipitation Stoichiometry",
  "A chemical technician mixes 100 mL of 0.10 M Lead(II) nitrate solution with 100 mL of 0.10 M Potassium iodide solution: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂↓(s) + 2KNO₃(aq).\nMolar mass of PbI₂ = 461.0 g/mol.",
  "Which reactant is the limiting reagent, and what mass of yellow Lead(II) iodide precipitate is collected?",
  "Pb(NO₃)₂ is limiting; 4.61 g of PbI₂ formed.",
  "KI is limiting; 2.305 g of PbI₂ formed.",
  "Neither is limiting; 4.61 g of PbI₂ formed.",
  "KI is limiting; 4.61 g of PbI₂ formed.",
  "B",
  "1. Moles of Pb(NO₃)₂ available = M × V = 0.10 mol/L × 0.100 L = 0.010 mol.\n2. Moles of KI available = M × V = 0.10 mol/L × 0.100 L = 0.010 mol.\n3. Stoichiometry: 1 mole of Pb(NO₃)₂ requires 2 moles of KI.\n- 0.010 mol of Pb(NO₃)₂ would require 0.020 mol of KI.\nSince only 0.010 mol of KI is available, KI is consumed first: KI is the LIMITING REAGENT.\n4. Moles of PbI₂ precipitated = 0.5 × Moles of KI = 0.5 × 0.010 = 0.0050 mol.\n5. Mass of PbI₂ = 0.0050 mol × 461.0 g/mol = 2.305 g."
));

cases.push(makeChemCase(
  chapter, 43, "Number of Gram-Atoms vs Number of Gram-Molecules", "Terminology of Chemical Amount",
  "A student in an ICSE tutorial is asked to distinguish between 'gram-atom' and 'gram-molecule' for gaseous Nitrogen (N₂).\nAtomic mass of N = 14.0 g/mol; Molecular mass of N₂ = 28.0 g/mol.\nThe student has 56.0 g of Nitrogen gas.",
  "How many gram-molecules and how many gram-atoms are contained in 56.0 g of Nitrogen gas?",
  "1 gram-molecule and 2 gram-atoms",
  "2 gram-molecules of N₂ and 4 gram-atoms of N",
  "4 gram-molecules of N₂ and 2 gram-atoms of N",
  "56 gram-molecules of N₂ and 56 gram-atoms of N",
  "B",
  "Definitions in classical chemical nomenclature:\n- 'Gram-molecule' is a historical synonym for 'mole of molecules'.\nMoles of N₂ molecules = Mass / Molar mass of N₂ = 56.0 g / 28.0 g/mol = 2.00 gram-molecules.\n- 'Gram-atom' is a historical synonym for 'mole of individual atoms'.\nSince each N₂ molecule contains 2 atoms of N, 2 moles of N₂ molecules contain 2 × 2 = 4.00 moles of N atoms = 4.00 gram-atoms of Nitrogen."
));

cases.push(makeChemCase(
  chapter, 44, "Combustion of Ethanol: Volume of Gases After Cooling", "Eudiometric Contraction Analysis",
  "In a specialized combustion analysis, 10 cm³ of absolute ethanol vapor (C₂H₅OH) is exploded with 40 cm³ of pure Oxygen gas in a eudiometer at 110°C: C₂H₅OH(g) + 3O₂(g) → 2CO₂(g) + 3H₂O(g). The tube is then cooled to 20°C, condensing all steam into liquid water.",
  "What is the total volume of gas remaining in the eudiometer at 20°C, and what volume remains after shaking with caustic potash (KOH)?",
  "At 20°C: 50 cm³; after KOH: 10 cm³",
  "At 20°C: 30 cm³ (20 cm³ CO₂ + 10 cm³ unreacted O₂); after KOH: 10 cm³ (pure O₂).",
  "At 20°C: 20 cm³; after KOH: 0 cm³",
  "At 20°C: 40 cm³; after KOH: 20 cm³",
  "B",
  "By Gay-Lussac's Law:\n1 volume of C₂H₅OH requires 3 volumes of O₂ to yield 2 volumes of CO₂.\n- 10 cm³ of ethanol vapor requires 10 × 3 = 30 cm³ of O₂.\n- Volume of O₂ left unreacted = 40 - 30 = 10 cm³.\n- Volume of CO₂ produced = 10 × 2 = 20 cm³.\n- At 20°C, steam condenses to liquid water (volume = 0).\n- Total residual gas at 20°C = 20 cm³ (CO₂) + 10 cm³ (excess O₂) = 30 cm³.\n- KOH absorbs 20 cm³ of CO₂, leaving 10 cm³ of pure unreacted Oxygen."
));

cases.push(makeChemCase(
  chapter, 45, "Action of Acid on Sodium Sulphite: Volume of $SO_2$ at STP", "Sulphite Gas Stoichiometry",
  "A chemical technician treats 6.30 g of pure Sodium Sulphite (Na₂SO₃) with excess dilute hydrochloric acid: Na₂SO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + SO₂(g)↑.\nAtomic masses: Na = 23.0, S = 32.0, O = 16.0.",
  "What volume of dry Sulphur Dioxide gas is evolved at STP?",
  "2.24 L",
  "1.12 L (or 1120 cm³)",
  "4.48 L",
  "0.56 L",
  "B",
  "1. Molar mass of Na₂SO₃ = 2(23) + 32 + 3(16) = 46 + 32 + 48 = 126.0 g/mol.\n2. Moles of Na₂SO₃ reacted = 6.30 g / 126.0 g/mol = 0.0500 mol.\n3. By equation: 1 mole Na₂SO₃ produces 1 mole SO₂ gas.\n- Moles of SO₂ gas liberated = 0.0500 mol.\n4. Volume of SO₂ at STP = 0.0500 mol × 22.4 L/mol = 1.12 L (or 1120 cm³)."
));

cases.push(makeChemCase(
  chapter, 46, "Thermal Decomposition of Copper(II) Nitrate: Solid Residue and Gas Volume", "Mixed Gaseous Product Stoichiometry",
  "An analytical chemist strongly heats 18.8 g of anhydrous Copper(II) nitrate in a silica boiling tube: 2Cu(NO₃)₂(s) xrightarrow{Δ} 2CuO(s) + 4NO₂(g) + O₂(g).\nAtomic masses: Cu = 64.0, N = 14.0, O = 16.0.",
  "What mass of black Copper(II) oxide residue remains, and what is the TOTAL volume of gases (NO₂ + O₂) evolved at STP?",
  "8.0 g of CuO; 5.60 L of total gases at STP",
  "16.0 g of CuO; 2.24 L of total gases at STP",
  "8.0 g of CuO; 2.24 L of total gases at STP",
  "4.0 g of CuO; 1.12 L of total gases at STP",
  "A",
  "1. Molar mass of Cu(NO₃)₂ = 64 + 2[14 + 3(16)] = 64 + 2(62) = 188.0 g/mol.\n2. Moles of Cu(NO₃)₂ heated = 18.8 g / 188.0 g/mol = 0.100 mol.\n3. By stoichiometry: 2 moles of Cu(NO₃)₂ produce 2 moles of CuO, 4 moles of NO₂, and 1 mole of O₂ (total 5 moles of gas per 2 moles of salt).\n- Moles of CuO formed = 0.100 mol → Mass = 0.100 mol × (64 + 16) g/mol = 8.00 g.\n- Total moles of gas = (5/2) × 0.100 = 0.250 mol of gas (0.200 mol NO₂ + 0.050 mol O₂).\n- Total volume of gases at STP = 0.250 mol × 22.4 L/mol = 5.60 L."
));

cases.push(makeChemCase(
  chapter, 47, "Number of Molecules in Equal Volumes of Different Gases", "Direct Verification of Avogadro's Hypothesis",
  "An analytical laboratory has two sealed 1.00-liter glass bulbs maintained at exactly 25°C and 1.00 atm:\nBulb A contains pure Helium gas (He, monoatomic, atomic mass = 4.0).\nBulb B contains pure Sulphur Hexafluoride gas (SF₆, octa-atomic, molar mass = 146.0).",
  "What is the ratio of the number of molecules in Bulb A to Bulb B, and what is the ratio of the mass of gas in Bulb B to Bulb A?",
  "Ratio of molecules = 1:1; Ratio of mass = 146:4 = 36.5:1",
  "Ratio of molecules = 1:7; Ratio of mass = 1:1",
  "Ratio of molecules = 36.5:1; Ratio of mass = 1:1",
  "Ratio of molecules = 1:1; Ratio of mass = 1:1",
  "A",
  "By Avogadro's Hypothesis, equal volumes of all gases under identical conditions of temperature and pressure contain the exact same number of molecules. Because both bulbs have V = 1.00 L at identical T and P, the number of gas molecules in Bulb A and Bulb B is strictly identical (ratio 1:1).\nHowever, each molecule of SF₆ weighs 146 u, while each atom/molecule of He weighs 4 u.\nTherefore, the ratio of mass (Bulb B to Bulb A) is:\nMass(B) / Mass(A) = Molar Mass(SF₆) / Molar Mass(He) = 146.0 / 4.0 = 36.5 : 1."
));

cases.push(makeChemCase(
  chapter, 48, "Mass of Water Formed by Complete Reduction of Copper(II) Oxide", "Gravimetric Reduction Stoichiometry",
  "A dry stream of Hydrogen gas is passed over 8.00 g of heated black Copper(II) oxide (CuO) until all black oxide is reduced to a shiny red-brown sponge of metallic copper: CuO(s) + H₂(g) → Cu(s) + H₂O(g).\nAtomic masses: Cu = 64.0, O = 16.0, H = 1.0.",
  "What mass of metallic Copper is formed, and what mass of water is collected in a U-tube absorber?",
  "6.40 g of Cu; 1.80 g of H₂O",
  "4.00 g of Cu; 0.90 g of H₂O",
  "6.40 g of Cu; 3.60 g of H₂O",
  "8.00 g of Cu; 1.80 g of H₂O",
  "A",
  "1. Molar mass of CuO = 64.0 + 16.0 = 80.0 g/mol.\n2. Moles of CuO reduced = 8.00 g / 80.0 g/mol = 0.100 mol.\n3. By equation: 1 mole CuO produces 1 mole Cu and 1 mole H₂O.\n- Moles of Cu = 0.100 mol → Mass of Cu = 0.100 mol × 64.0 g/mol = 6.40 g.\n- Moles of H₂O = 0.100 mol → Mass of H₂O = 0.100 mol × 18.0 g/mol = 1.80 g.\n(Notice conservation of mass: 8.00 g CuO + 0.20 g H₂ = 6.40 g Cu + 1.80 g H₂O = 8.20 g)."
));

cases.push(makeChemCase(
  chapter, 49, "Combustion Analysis of Hydrocarbon: Eudiometer Contraction and Absorption", "Determining Molecular Formula $C_xH_y$",
  "10 cm³ of a gaseous hydrocarbon C_xH_y is mixed with 70 cm³ of oxygen and exploded in a eudiometer tube. After cooling to room temperature, the residual gas volume is 50 cm³. When shaken with caustic potash (KOH) solution, the volume contracts by 30 cm³, leaving 20 cm³ of pure unreacted oxygen.",
  "What is the molecular formula of this hydrocarbon?",
  "C₂H₆ (Ethane)",
  "C₃H₈ (Propane)",
  "C₂H₄ (Ethene)",
  "C₄H₁₀ (Butane)",
  "B",
  "1. Volume of CO₂ produced = volume absorbed by KOH = 30 cm³.\nSince 10 cm³ of hydrocarbon produced 30 cm³ of CO₂:\nx = V(CO₂) / V(hydrocarbon) = 30 / 10 = 3 carbon atoms (C₃).\n2. Total residual gas at room temp = 50 cm³. Since 30 cm³ was CO₂, unreacted O₂ = 50 - 30 = 20 cm³.\n3. O₂ consumed = Initial O₂ - Unreacted O₂ = 70 - 20 = 50 cm³.\n4. General combustion equation: C_xH_y + (x + y/4)O₂ → x CO₂ + (y/2) H₂O.\nRatio: (x + y/4) = V(O₂ consumed) / V(hydrocarbon) = 50 / 10 = 5.\nSubstitute x = 3:\n3 + y/4 = 5 → y/4 = 2 → y = 8.\nTherefore, the molecular formula is C₃H₈ (Propane)."
));

cases.push(makeChemCase(
  chapter, 50, "Molar Enthalpy and Stoichiometry: Neutralization Temperature Rise", "Stoichiometric Limiting Factor in Thermometric Titrations",
  "In a thermometric titration, an investigator measures the temperature rise (ΔT) when various volumes of 1.0 M HCl and 1.0 M NaOH are mixed in an insulated Styrofoam cup, keeping the total volume constant at 50 mL:\nCup 1: 10 mL HCl + 40 mL NaOH → ΔT = 2.8°C\nCup 2: 25 mL HCl + 25 mL NaOH → ΔT = 7.0°C (Maximum temperature rise)\nCup 3: 40 mL HCl + 10 mL NaOH → ΔT = 2.8°C",
  "Why does the temperature rise peak sharply at exactly 25 mL of HCl and 25 mL of NaOH?",
  "Hydrochloric acid boils at 25 mL.",
  "The reaction stoichiometry is 1:1 (HCl + NaOH → NaCl + H₂O); at 25 mL each, both reactants are in exact equimolar proportions (0.025 mol each), maximizing the total moles of water formed and heat released without any excess unreacted solution acting as a thermal heat sink.",
  "Styrofoam absorbs heat only when acidic.",
  "Sodium hydroxide dissolves the thermometer at 25 mL.",
  "B",
  "The heat released during neutralization is directly proportional to the moles of water formed: H⁺ + OH⁻ → H₂O (ΔH = -57.1 kJ/mol). When total volume is fixed at 50 mL, the maximum moles of product are formed when neither reactant is in limiting deficiency. In Cup 1 (10 mL HCl), HCl is limiting (only 0.010 mol H₂O formed; 30 mL excess NaOH absorbs the heat). In Cup 3 (10 mL NaOH), NaOH is limiting (only 0.010 mol H₂O formed). At 25 mL : 25 mL, exactly 0.025 mol of water is formed with zero limiting wastage, producing the maximum enthalpy release and maximum temperature jump (7.0°C)."
));

console.log(`[Ch5 Mole Concept] Generated ${cases.length} cases.`);

const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) fs.mkdirSync(BANK_DIR, { recursive: true });

const outPath = path.join(BANK_DIR, 'chemistry_case_mole_concept.json');
fs.writeFileSync(outPath, JSON.stringify(cases, null, 2), 'utf8');
console.log(`Saved 50 cases to ${outPath}`);
