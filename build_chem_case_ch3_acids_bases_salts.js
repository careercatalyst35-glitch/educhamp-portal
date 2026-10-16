// build_chem_case_ch3_acids_bases_salts.js
// 50 Case-Based MCQs for ICSE Class 10 Chemistry: Chapter 3 - Acids, Bases and Salts

const fs = require('fs');
const path = require('path');
const { makeChemCase } = require('./chem_case_helper');

const chapter = "Acids, Bases and Salts";
const cases = [];

cases.push(makeChemCase(
  chapter, 1, "Basicity Anomaly of Phosphorus Oxoacids: $H_3PO_4$ vs $H_3PO_3$ vs $H_3PO_2$", "Replaceable Hydrogens and P–H vs P–OH Bonds",
  "A titration analyst titrates 0.1 M solutions of three phosphorus oxoacids—Orthophosphoric acid (H₃PO₄), Orthophosphorous acid (H₃PO₃), and Hypophosphorous acid (H₃PO₂) against standardized 0.1 M NaOH using phenolphthalein. The equivalence points require:\n10.0 mL of H₃PO₄ consumes 30.0 mL of NaOH (ratio 1:3)\n10.0 mL of H₃PO₃ consumes 20.0 mL of NaOH (ratio 1:2)\n10.0 mL of H₃PO₂ consumes only 10.0 mL of NaOH (ratio 1:1)",
  "Why is H₃PO₄ tribasic, H₃PO₃ dibasic, and H₃PO₂ only monobasic, despite all three formulas containing hydrogen atoms?",
  "All hydrogen atoms in phosphorus acids are acidic, but NaOH decomposes in H₃PO₂.",
  "Only hydrogen atoms covalently bonded to oxygen (P–O–H) can ionise as protons; hydrogens directly bonded to phosphorus (P–H) are non-polar, non-ionisable, and reduce the basicity.",
  "H₃PO₂ is an organic base that neutralizes hydrochloric acid.",
  "Phosphorus oxoacids have basicity equal to the number of phosphorus atoms.",
  "B",
  "Basicity is the number of replaceable hydronium ions (H⁺) an acid molecule produces in water. In phosphorus oxoacids, only hydrogen atoms attached to highly electronegative oxygen atoms (-O-H) are ionisable because the polar O-H bond can cleave heterolytically. Hydrogen atoms bonded directly to phosphorus (P-H) have virtually no polarity (EN of P = 2.1, H = 2.1) and cannot dissociate. H₃PO₄ has three P-OH bonds (tribasic); H₃PO₃ has two P-OH and one P-H bond (dibasic); H₃PO₂ has one P-OH and two P-H bonds (monobasic)."
));

cases.push(makeChemCase(
  chapter, 2, "Why $NaH_2PO_2$ is a Normal Salt While $NaH_2PO_4$ is an Acid Salt", "Classification of Salts: Presence of Replaceable Hydrogen",
  "A chemical stockroom label lists Sodium Dihydrogen Phosphate (NaH₂PO₄) as an 'Acid Salt', but lists Sodium Hypophosphite (NaH₂PO₂) as a 'Normal Salt'. A student questions the teacher, pointing out that both salts contain the formula fragment 'H₂' indicating hydrogen.",
  "Why is NaH₂PO₂ classified as a normal salt while NaH₂PO₄ is an acid salt?",
  "NaH₂PO₂ contains sodium in a higher oxidation state.",
  "In NaH₂PO₄ (derived from tribasic H₃PO₄), two replaceable hydrogens remain and can be further neutralized by alkali; in NaH₂PO₂ (derived from monobasic H₃PO₂), the parent acid had only one ionisable proton which was already replaced by Na⁺, leaving only non-ionisable P–H hydrogens.",
  "Normal salts must contain oxygen, while acid salts contain phosphorus.",
  "NaH₂PO₂ turns red litmus blue while NaH₂PO₄ is insoluble in water.",
  "B",
  "An 'acid salt' is defined as a salt formed by the partial replacement of replaceable hydrogen ions of a polybasic acid by a metal; it must retain at least one ionisable hydrogen that can react with a base. H₃PO₄ is tribasic; replacing one H⁺ with Na⁺ yields NaH₂PO₄, which still possesses two replaceable -OH hydrogens (acid salt). H₃PO₂ is strictly monobasic (only one replaceable H⁺ in the whole molecule). Replacing that single acidic proton with Na⁺ yields NaH₂PO₂, leaving zero replaceable hydrogens; hence, it is a normal salt."
));

cases.push(makeChemCase(
  chapter, 3, "The $10^{-8}\\text{ M } HCl$ Solution pH Paradox", "Water Autoionisation in Extremely Dilute Acidic Solutions",
  "A high school student enters the concentration of an ultra-dilute hydrochloric acid solution ([HCl] = 1.0 × 10⁻⁸ M) into a calculator using the simple formula pH = -log[H⁺], obtaining pH = 8.0. The teacher points out that an acid solution cannot have a basic pH (> 7) at 25°C.",
  "What is the actual pH of a 1.0 × 10⁻⁸ M HCl solution, and why does the simple formula fail?",
  "The true pH is 1.0 because HCl is a strong acid.",
  "In extremely dilute acid, the self-ionisation of water cannot be neglected; the total [H₃O⁺] is (1.0 × 10⁻⁸ M from HCl) + (~1.0 × 10⁻⁷ M from H₂O) ≈ 1.05 × 10⁻⁷ M, yielding a slightly acidic pH of 6.98.",
  "The true pH is 8.0 because ultra-dilute acid turns into sodium hydroxide.",
  "The solution has no pH because hydrochloric acid evaporates completely in water.",
  "B",
  "In water at 25°C, autoionisation contributes [H⁺]_water and [OH⁻]_water where Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴. When [H⁺]_acid is comparable to or smaller than 10⁻⁷ M, water's contribution dominates. Setting total [H⁺] = 10⁻⁸ + x and [OH⁻] = x: (10⁻⁸ + x)(x) = 10⁻¹⁴. Solving the quadratic yields x = 9.51 × 10⁻⁸ M. Thus, total [H⁺] = 1.0 × 10⁻⁸ + 9.51 × 10⁻⁸ = 1.05 × 10⁻⁷ M. Taking -log(1.05 × 10⁻⁷) yields pH = 6.98 (just below 7, as an acid must be)."
));

cases.push(makeChemCase(
  chapter, 4, "Action of Nitric Acid on Active Metals: $H_2$ Evolution Anomaly", "Powerful Oxidising Property vs Hydrogen Displacement",
  "A student in a chemistry lab tests the reaction of Zinc and Iron with dilute hydrochloric acid, dilute sulphuric acid, and dilute nitric acid. With dilute HCl and dilute H₂SO₄, vigorous effervescence of flammable Hydrogen gas occurs. However, with dilute Nitric acid (HNO₃), no hydrogen gas is evolved; instead, reddish-brown fumes of nitrogen oxides and water are produced.",
  "Why does dilute nitric acid fail to produce hydrogen gas with common active metals like Zinc and Iron?",
  "Nitric acid contains no hydrogen in its chemical formula.",
  "Nitric acid is a powerful oxidising agent; the nascent hydrogen liberated during the displacement reaction is immediately oxidised by HNO₃ to water, while nitric acid itself is reduced to nitrogen oxides (NO, NO₂).",
  "Zinc and iron are noble metals that cannot react with nitrates.",
  "Nitric acid forms an insoluble layer of lead nitrate on the zinc surface.",
  "B",
  "Nitric acid is a potent oxidizer because nitrogen is in its highest oxidation state (+5). When an active metal like Zn or Fe reacts, hydrogen is initially displaced at the metal surface. However, before molecular H₂ gas can escape, the strong oxidizing action of HNO₃ oxidises the nascent hydrogen atoms to water (H₂O), while the nitrate ion is reduced to lower nitrogen oxides: 4Zn + 10HNO₃(dil) → 4Zn(NO₃)₂ + NH₄NO₃ (or NO) + 3H₂O."
));

cases.push(makeChemCase(
  chapter, 5, "Exception: Very Dilute (~1%) $HNO_3$ with Magnesium and Manganese", "Threshold Oxidising Potential and Active Hydrogen Evolution",
  "Continuing the investigation, the student tests Magnesium ribbon and Manganese granules with very dilute, ice-cold nitric acid (~1% to 2% concentration). To the student's surprise, brisk effervescence of a colorless gas occurs, which gives a sharp 'pop' sound with a burning splinter, confirming Hydrogen gas.",
  "Why do Magnesium and Manganese uniquely liberate hydrogen gas with very dilute (1%) cold nitric acid?",
  "Magnesium and Manganese are non-metals that absorb nitrogen.",
  "Magnesium and Manganese are exceptionally electropositive metals located high in the reactivity series, and at ultra-low concentration (~1%) and cold temperatures, the oxidizing power of HNO₃ is drastically reduced, allowing simple hydrogen displacement to predominate: Mg + 2HNO₃ → Mg(NO₃)₂ + H₂↑.",
  "Nitric acid decomposes into hydrogen gas upon touching any transition metal.",
  "Magnesium splits water molecules into liquid oxygen.",
  "B",
  "Magnesium (E° = -2.37 V) and Manganese (E° = -1.18 V) are very powerful reducing agents situated high in the electrochemical series. When cold, very dilute (~1%) nitric acid is used, the concentration of nitrate oxidizer is too low to overpower the rapid proton reduction. Simple proton displacement dominates: Mg + 2HNO₃(extremely dilute) → Mg(NO₃)₂ + H₂↑. This is a classic ICSE exception."
));

cases.push(makeChemCase(
  chapter, 6, "Constancy of Heat of Neutralization for Strong Acids and Bases", "Spectator Ions and the Net Ionic Reaction",
  "A physical chemistry student measures the enthalpy of neutralization (ΔH_neut) in a bomb calorimeter for three different reactions:\n1. HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l); ΔH = -57.1 kJ/mol\n2. HNO₃(aq) + KOH(aq) → KNO₃(aq) + H₂O(l); ΔH = -57.1 kJ/mol\n3. 0.5 H₂SO₄(aq) + 0.5 Ba(OH)₂(aq) → 0.5 BaSO₄(s) + H₂O(l) (excluding precipitation); ΔH = -57.3 kJ/mol",
  "Why is the heat of neutralization between ANY strong monoprotic acid and strong base essentially constant at approximately -57.1 kJ/mol?",
  "All strong acids have the same molecular weight.",
  "Strong acids and strong bases are 100% dissociated in dilute aqueous solution; the metal and non-metal ions are inert spectator ions, so the net chemical reaction in all cases is identically: H⁺(aq) + OH⁻(aq) → H₂O(l).",
  "Calorimeters are calibrated to display -57.1 kJ/mol regardless of the reaction.",
  "Water releases nuclear energy when mixed with sodium chloride.",
  "B",
  "Strong acids (HCl, HNO₃) and strong bases (NaOH, KOH) are completely ionised in dilute aqueous solution. When mixed, the reaction is simply: [H⁺ + Cl⁻] + [Na⁺ + OH⁻] → [Na⁺ + Cl⁻] + H₂O. Canceling the spectator ions (Na⁺ and Cl⁻) leaves the identical net ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l). Because the exact same chemical bond (O-H in water) is formed from hydrated protons and hydroxide ions in all strong acid-strong base reactions, the molar enthalpy release is constant at -57.1 kJ/mol (-13.7 kcal/mol)."
));

cases.push(makeChemCase(
  chapter, 7, "Lower Neutralization Enthalpy for Weak Acids: $CH_3COOH + NaOH$", "Enthalpy of Ionisation of Weak Electrolytes",
  "In the same calorimetry experiment, the student neutralizes 1 mole of Acetic acid (CH₃COOH) with 1 mole of Sodium Hydroxide (NaOH). The measured heat of neutralization is only -55.2 kJ/mol, which is noticeably lower (less exothermic by ~1.9 kJ/mol) than the standard -57.1 kJ/mol.",
  "Why is the heat of neutralization of a weak acid like Acetic acid lower than that of a strong acid like Hydrochloric acid?",
  "Acetic acid neutralizes only 50% of the sodium hydroxide.",
  "Acetic acid is a weak electrolyte that is only partially ionised; a portion of the heat evolved during neutralization (~1.9 kJ/mol) is consumed as the enthalpy of ionisation to break the covalent O–H bonds and completely ionise the undissociated acetic acid molecules.",
  "Sodium acetate decomposes into flammable methane gas during titration.",
  "Acetic acid reacts with glass to cool the calorimeter.",
  "B",
  "Acetic acid is a weak acid with a low degree of ionisation (α ≈ 1.3% in 0.1 M solution). For neutralization to proceed to completion, the remaining 98.7% of undissociated CH₃COOH molecules must undergo endothermic dissociation into H⁺ and CH₃COO⁻ ions. This requires energy (the enthalpy of ionisation, ΔH_ion ≈ +1.9 kJ/mol). The net heat released is therefore: ΔH_net = ΔH_neutralization + ΔH_ion = -57.1 + 1.9 = -55.2 kJ/mol."
));

cases.push(makeChemCase(
  chapter, 8, "Hydrolysis of Salts: Basic Nature of Sodium Carbonate Solution", "Anionic Hydrolysis and Conjugate Base Alkalinity",
  "A chemical safety officer tests aqueous solutions of common salts with red litmus paper:\nSolution 1: Sodium Chloride (NaCl) - red litmus remains red, blue litmus remains blue (pH = 7.0)\nSolution 2: Sodium Carbonate (Na₂CO₃) - red litmus turns bright blue (pH = 11.5)\nSolution 3: Ammonium Chloride (NH₄Cl) - blue litmus turns red (pH = 5.0)",
  "Why is an aqueous solution of Sodium Carbonate strongly alkaline (basic) while Sodium Chloride is neutral?",
  "Sodium carbonate reacts with air to produce ammonia gas.",
  "Sodium carbonate is a salt of a strong base (NaOH) and a weak acid (H₂CO₃); the carbonate anion (CO₃²⁻) undergoes hydrolysis with water molecules to form bicarbonate and free hydroxide ions: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻.",
  "Sodium chloride precipitates all hydroxide ions as solid rust.",
  "Carbonate ions donate protons to water molecules.",
  "B",
  "Salt hydrolysis occurs when ions of a salt interact with water. In Na₂CO₃, Na⁺ comes from the strong base NaOH and does not hydrolyse. The carbonate ion (CO₃²⁻) is the conjugate base of the weak acid carbonic acid (H₂CO₃); it acts as a Brønsted-Lowry base, accepting a proton from water: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻. This hydrolysis generates an excess of free hydroxide ions ([OH⁻] > [H⁺]), producing an alkaline solution (pH ~11.5) that turns red litmus blue."
));

cases.push(makeChemCase(
  chapter, 9, "Hydrolysis of Salts: Acidic Nature of Ammonium Chloride Solution", "Cationic Hydrolysis and Hydronium Ion Generation",
  "Continuing from the previous case, the student examines Solution 3: Ammonium Chloride (NH₄Cl). A pH probe immersed in 0.1 M NH₄Cl reads pH = 5.1 (distinctly acidic).",
  "Why does the salt Ammonium Chloride produce an acidic solution in pure neutral water?",
  "Chloride ions react with water to form solid chlorine gas.",
  "NH₄Cl is the salt of a weak base (NH₄OH) and a strong acid (HCl); the ammonium cation (NH₄⁺) hydrolyses in water by donating a proton to form un-ionised ammonium hydroxide and excess hydronium ions: NH₄⁺ + H₂O ⇌ NH₄OH + H⁺.",
  "Ammonium chloride contains free hydrochloric acid mixed as an impurity.",
  "Water molecules are absorbed by the ammonium ions into ice.",
  "B",
  "NH₄Cl dissociates into NH₄⁺ and Cl⁻ ions. Cl⁻ is the conjugate base of the very strong acid HCl and has zero affinity for protons (does not hydrolyse). The ammonium cation (NH₄⁺) is the conjugate acid of the weak base NH₄OH. It readily undergoes cationic hydrolysis with water: NH₄⁺ + H₂O ⇌ NH₄OH + H₃O⁺. This generates an excess of hydronium ions ([H₃O⁺] > [OH⁻]), driving the solution pH below 7 and turning blue litmus red."
));

cases.push(makeChemCase(
  chapter, 10, "Lime Water Milky Reaction and Excess $CO_2$ Clearance", "Precipitation of Insoluble Carbonate vs Soluble Bicarbonate",
  "A student adds dilute hydrochloric acid to marble chips (CaCO₃) in a gas generator and bubbles the evolved carbon dioxide through a test tube containing freshly prepared lime water (aqueous Ca(OH)₂). Within 10 seconds, the clear lime water turns milky white. As the student continues bubbling CO₂ for another two minutes, the milky precipitate completely dissolves, restoring a clear colorless solution.",
  "What chemical transformations account for the appearance and subsequent disappearance of the white precipitate?",
  "Milky: formation of white Calcium chloride; Cleared: Calcium chloride boils away.",
  "Milky: formation of insoluble Calcium Carbonate (CaCO₃↓); Cleared: excess CO₂ and water convert insoluble CaCO₃ into soluble Calcium Bicarbonate (Ca(HCO₃)₂).",
  "Milky: precipitation of elemental carbon soot; Cleared: carbon dissolves in acid.",
  "Milky: formation of quicklime; Cleared: quicklime evaporates into air.",
  "B",
  "Initially, carbon dioxide reacts with calcium hydroxide to precipitate insoluble calcium carbonate, causing the milky turbidity: Ca(OH)₂ + CO₂ → CaCO₃↓(white) + H₂O. When excess CO₂ is passed continuously through the suspension, the insoluble calcium carbonate reacts with dissolved carbonic acid (CO₂ + H₂O) to form calcium hydrogen carbonate (calcium bicarbonate): CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂. Calcium bicarbonate is highly soluble in water, causing the milky precipitate to completely clear into a colorless solution."
));

cases.push(makeChemCase(
  chapter, 11, "Distinguishing Sulphite ($SO_3^{2-}$) from Carbonate ($CO_3^{2-}$)", "Action of Acid and Acidified Potassium Dichromate Test",
  "A forensics chemist is given two unlabelled white powders: Powder X (a metal carbonate) and Powder Y (a metal sulphite). Both powders produce brisk effervescence of a colorless gas when treated with dilute hydrochloric acid, and both evolved gases turn lime water milky.",
  "How can the chemist definitively distinguish the gas evolved from the sulphite (Powder Y) from the carbonate (Powder X)?",
  "By checking if the gas burns with a blue flame.",
  "The gas from sulphite is Sulphur dioxide (SO₂), which has a suffocating smell of burning sulphur and turns orange acidified potassium dichromate paper to green; the gas from carbonate is odorless CO₂, which has no effect on acidified potassium dichromate.",
  "Carbon dioxide gas is magnetic while sulphur dioxide gas is radioactive.",
  "Sulphur dioxide freezes into yellow sulfur crystals at room temperature.",
  "B",
  "Both CO₂ and SO₂ turn lime water milky due to the formation of insoluble CaCO₃ and CaSO₃ precipitates. However, they can be distinguished by two definitive tests: (1) Odor: CO₂ is completely odorless, whereas SO₂ has a sharp, choking, suffocating odor of burning sulphur. (2) Redox behavior: CO₂ is a fully oxidized carbon species (C = +4) and has no reducing properties. SO₂ contains sulphur in the +4 oxidation state and acts as a strong reducing agent: it turns filter paper soaked in orange acidified potassium dichromate (K₂Cr₂O₇) to dark green by reducing Cr₂O₇²⁻ (orange, Cr⁶⁺) to Cr³⁺ (green)."
));

cases.push(makeChemCase(
  chapter, 12, "Action of Dilute Acid on Sulphides: Hydrogen Sulphide Test", "Lead Acetate Paper and Black Precipitation",
  "In a metallurgical lab, a geologist tests a mineral fragment of iron(II) sulphide (pyrite) by adding dilute hydrochloric acid in a fume cupboard. A gas with a nauseating smell of rotten eggs is liberated. When a filter paper moistened with Lead(II) acetate solution is held over the mouth of the test tube, the paper turns silvery-black with a metallic sheen.",
  "What is the identity of the evolved gas, and what chemical reaction turns the lead acetate paper black?",
  "Hydrogen gas; reduces lead to metallic lead foil.",
  "Hydrogen sulphide gas (H₂S); reacts with lead acetate to form an insoluble black precipitate of Lead(II) sulphide (PbS): (CH₃COO)₂Pb + H₂S → PbS↓(black) + 2CH₃COOH.",
  "Sulphur dioxide gas; oxidises lead acetate to white lead sulphate.",
  "Methane gas; deposits black carbon soot onto the paper.",
  "B",
  "The reaction of a metal sulphide with dilute acid produces hydrogen sulphide gas: FeS + 2HCl → FeCl₂ + H₂S↑. Hydrogen sulphide has a foul, characteristic odor of rotten eggs. The standard qualitative test for H₂S is moist lead acetate paper: the gaseous H₂S dissolves in the moisture and reacts with lead(II) ions to precipitate insoluble lead(II) sulphide: (CH₃COO)₂Pb + H₂S → PbS↓(black) + 2CH₃COOH. The formation of black PbS is an unambiguous confirmation of sulphide."
));

cases.push(makeChemCase(
  chapter, 13, "Why $PbSO_4$ Cannot Be Prepared from $PbCO_3$ and Dilute $H_2SO_4$", "Insoluble Protective Crust and Reaction Passivation",
  "A student attempts to prepare Lead(II) sulphate (PbSO₄) by adding dilute sulphuric acid to solid Lead(II) carbonate (PbCO₃) in a beaker. Effervescence begins briskly, but within 5 seconds the bubbling halts completely, leaving unreacted white lead carbonate sitting at the bottom of the acid.",
  "Why does the preparation of Lead(II) sulphate fail when dilute sulphuric acid is added directly to lead carbonate or lead oxide?",
  "Lead carbonate dissolves in sulphuric acid to form a gas.",
  "Lead(II) sulphate (PbSO₄) is completely insoluble in water; as soon as the reaction begins, a dense, impermeable crust of PbSO₄ forms around the lead carbonate lumps, shielding the unreacted interior from further acid attack.",
  "Sulphuric acid is too weak an acid to react with carbonates.",
  "Carbon dioxide gas neutralizes all the sulphuric acid molecules.",
  "B",
  "The intended reaction is: PbCO₃(s) + H₂SO₄(aq) → PbSO₄(s) + H₂O(l) + CO₂(g). However, Lead(II) sulphate is an insoluble salt (solubility ~0.04 g/L). The moment the acid touches the surface of the insoluble PbCO₃ (or PbO), an adherent, impervious coating of insoluble PbSO₄ precipitates directly onto the solid particle. This crust physically isolates the underlying reactant from the acid, halting the reaction almost immediately. To prepare PbSO₄, one must use a soluble lead salt (like Lead Nitrate) and precipitate it with soluble sodium sulphate."
));

cases.push(makeChemCase(
  chapter, 14, "Preparation of Soluble Salts by Titration vs Insoluble Base", "Choice of Salt Preparation Route Based on Solubility",
  "An ICSE laboratory manual specifies two different preparation routes for crystalline salts:\nMethod A (Titration): Sodium Chloride (NaCl) is prepared by reacting Sodium Hydroxide solution with dilute Hydrochloric acid using a burette and phenolphthalein indicator.\nMethod B (Excess Insoluble Base): Copper(II) sulphate (CuSO₄) is prepared by adding black Copper(II) oxide powder to hot dilute sulphuric acid until no more dissolves, followed by filtration.",
  "Why is titration necessary for preparing Sodium Chloride, whereas filtration of excess reactant is used for Copper(II) sulphate?",
  "Copper oxide is an explosive chemical that cannot be placed in a burette.",
  "Both NaOH and HCl are soluble and colorless liquids, so there is no visible sign when neutralization is complete without an indicator; CuO is an insoluble solid, so excess CuO can be added to ensure all acid is consumed and the unreacted excess is simply filtered off.",
  "Sodium chloride precipitates as a rock salt crystal during titration.",
  "Sulphuric acid cannot react with soluble bases.",
  "B",
  "In preparing NaCl from NaOH (alkali) and HCl (acid), all reactants and products are clear, soluble liquids. If excess NaOH or HCl were added, it could not be separated from the NaCl solution. Titration with an indicator allows adding exact stoichiometric amounts. For CuSO₄, CuO is an insoluble basic oxide. It can be added in excess to guarantee 100% consumption of H₂SO₄; because CuO is insoluble, the excess is cleanly removed by simple paper filtration, leaving pure aqueous CuSO₄ in the filtrate."
));

cases.push(makeChemCase(
  chapter, 15, "Efflorescence in Washing Soda ($Na_2CO_3\\cdot 10H_2O$)", "Crystal Vapor Pressure vs Atmospheric Humidity",
  "A chemical storekeeper opens a fresh sack of transparent, crystalline Washing Soda (Sodium Carbonate Decahydrate, Na₂CO₃·10H₂O) on a dry summer afternoon. Within three days of exposure to the dry warehouse air, the shiny crystals lose their shape and luster, crumbling into an opaque, chalky white powder with a mass loss of over 50%.",
  "What phenomenon has occurred, and what is the chemical formula of the white powder formed?",
  "Deliquescence; the crystals absorbed water to form sodium bicarbonate.",
  "Efflorescence; the vapor pressure of water of crystallization in the decahydrate crystals is higher than the partial pressure of water vapor in dry air, causing the crystals to spontaneously lose 9 molecules of water to form Sodium Carbonate Monohydrate (Na₂CO₃·H₂O).",
  "Sublimation; sodium carbonate turned directly into carbon dioxide gas.",
  "Oxidation; the crystal reacted with oxygen to form sodium peroxide.",
  "B",
  "Efflorescence is the spontaneous loss of water of crystallization by a hydrated salt when exposed to the atmosphere. It occurs whenever the vapor pressure of water inside the crystal lattice exceeds the ambient water vapor pressure in the surrounding air. For washing soda: Na₂CO₃·10H₂O(s) → Na₂CO₃·H₂O(s) + 9H₂O(g). The decahydrate loses 9 of its 10 water molecules to the dry air, crumbling into an anhydrous/monohydrate white powder."
));

cases.push(makeChemCase(
  chapter, 16, "Deliquescence in Anhydrous Iron(III) Chloride ($FeCl_3$)", "Vapor Pressure of Saturated Solution vs Atmospheric Vapor",
  "A student leaves a watch glass containing a few dark crystals of anhydrous Iron(III) chloride (FeCl₃) uncovered on a laboratory bench on a humid monsoon morning. After two hours, the solid crystals have vanished completely, replaced by a puddle of dark brown, viscous liquid.",
  "What property causes anhydrous Iron(III) chloride to liquefy spontaneously on exposure to air?",
  "The crystals melted due to the high temperature of the bench.",
  "Deliquescence; FeCl₃ is extremely soluble and absorbs moisture from the humid air because the vapor pressure of its saturated solution is far lower than the atmospheric water vapor pressure, eventually dissolving completely in the absorbed water.",
  "The iron atoms reacted with nitrogen gas to form liquid iron nitride.",
  "Iron(III) chloride is a volatile gas that condensed into a liquid.",
  "B",
  "Deliquescence is the property of certain water-soluble substances to absorb moisture from the atmosphere when exposed to air, until they completely dissolve in the absorbed water to form a concentrated saturated solution. It occurs when the vapor pressure of the saturated solution of the substance is lower than the partial pressure of water vapor in the atmosphere. Common deliquescent substances include anhydrous FeCl₃, solid NaOH, KOH, MgCl₂, and CaCl₂."
));

cases.push(makeChemCase(
  chapter, 17, "Drying vs Dehydrating Action of Concentrated Sulphuric Acid", "Removal of Moisture vs Chemical Cleavage of Water Elements",
  "A chemist utilizes concentrated sulphuric acid in two different setups:\nExperiment 1: Moist hydrogen chloride gas is bubbled through concentrated H₂SO₄ in a wash bottle; dry HCl gas emerges with identical molecular structure.\nExperiment 2: Concentrated H₂SO₄ is poured over white cane sugar crystals (C₁₂H₂₂O₁₁) in a beaker; the mixture hisses violently, steams, and erupts into a black, spongy mass of porous carbon.",
  "What distinct chemical roles does concentrated sulphuric acid play in Experiment 1 versus Experiment 2?",
  "In Exp 1 it acts as an oxidising agent; in Exp 2 it acts as a reducing agent.",
  "In Exp 1 it acts as a Drying (hygroscopic) agent, removing physically mixed moisture without chemical change; in Exp 2 it acts as a Dehydrating agent, removing the elements of water (H and O in 2:1 ratio) chemically combined within the sugar molecules.",
  "In Exp 1 it neutralizes HCl; in Exp 2 it dissolves carbon.",
  "Concentrated sulphuric acid is an explosive in both experiments.",
  "B",
  "A drying agent (or desiccating agent) is a hygroscopic substance that absorbs physically present water vapor/moisture from a gas or liquid without altering its chemical identity (HCl remains HCl). A dehydrating agent chemically removes the elements of water (hydrogen and oxygen in a 2:1 atomic ratio) from within the chemical structure of a compound. In the sugar charring reaction: C₁₂H₂₂O₁₁ + conc. H₂SO₄ → 12C (black porous charcoal) + 11H₂O (absorbed by acid with immense heat liberation)."
));

cases.push(makeChemCase(
  chapter, 18, "Plaster of Paris: Dehydration of Gypsum at Exactly $100^\\circ\\text{C}$", "Partial Dehydration and Formation of Hemihydrate",
  "In an industrial gypsum kiln, crushed mineral Gypsum (CaSO₄·2H₂O) is heated to produce Plaster of Paris (POP). The process engineer maintains the kiln temperature strictly between 100°C and 120°C (373 K to 393 K). A trainee asks why the temperature must not be allowed to exceed 120°C.",
  "What chemical compound is formed if gypsum is overheated above 120°C (or strongly to 200°C), and why is it useless as a plaster?",
  "It forms calcium carbide, which explodes when mixed with water.",
  "It loses all of its water of crystallization to form anhydrous calcium sulphate (CaSO₄), known as 'dead burnt plaster', which sets extremely slowly and completely loses the hydraulic property of setting with water.",
  "It decomposes into toxic sulphur dioxide and calcium metal.",
  "It forms quicklime, which dissolves glass containers.",
  "B",
  "Gypsum is calcium sulphate dihydrate: CaSO₄·2H₂O. When heated carefully at 100°C (373 K), it loses three-fourths of its water of crystallization to form Calcium Sulphate Hemihydrate: 2(CaSO₄·2H₂O) → (CaSO₄)₂·H₂O (or CaSO₄·0.5H₂O) + 3H₂O. This is Plaster of Paris. If heated above 120°C (or to 200°C), all water of crystallization is driven off, forming anhydrous CaSO₄, termed 'dead burnt plaster'. Dead burnt plaster does not set quickly or expand upon adding water, rendering it useless for casts or architectural moldings."
));

cases.push(makeChemCase(
  chapter, 19, "Setting Mechanism of Plaster of Paris: Volume Expansion", "Exothermic Rehydration to Interlocking Gypsum Crystals",
  "An orthopedic surgeon applies a Plaster of Paris (POP) bandage around a fractured arm bone. Within 15 minutes, the moist paste becomes noticeably warm to the touch and hardens into a rigid, rock-solid cast. Furthermore, the surgeon notes that the paste expands by approximately 1% in volume as it sets, creating a tight, form-fitting mold.",
  "What chemical reaction causes Plaster of Paris to harden and release heat upon mixing with water?",
  "POP oxidises to form calcium nitrate with absorption of heat.",
  "POP undergoes an exothermic hydration reaction, reabsorbing water to form an interlocking network of needle-shaped crystalline gypsum (CaSO₄·2H₂O) that expands slightly in volume as the crystals grow.",
  "The plaster evaporates into the atmosphere, leaving only dried gauze.",
  "POP absorbs nitrogen gas from the air to form an alloy.",
  "B",
  "When Plaster of Paris is mixed with one-third its weight of water, it forms a plastic paste: (CaSO₄)₂·H₂O + 3H₂O → 2(CaSO₄·2H₂O). The reaction is exothermic (releasing heat noticeable to touch) and occurs in two stages: (1) Setting: within 5–15 minutes, the paste sets into an initial solid mass; (2) Hardening: over several hours, microscopic needle-like monoclinic crystals of gypsum grow and interlock into a rigid solid. Because the crystalline lattice of gypsum occupies ~1% more volume than the hemihydrate paste, it expands into every detail of the mold."
));

cases.push(makeChemCase(
  chapter, 20, "Tooth Decay: Hydroxyapatite Demineralisation and Fluoride", "Enamel Acid Erosion and Fluoroapatite Remineralisation",
  "A dentist explains to a patient how sweet chocolates cause dental cavities. Bacteria in dental plaque ferment dietary sucrose into lactic acid and other organic acids. When mouth saliva pH drops below the critical threshold of 5.5, tooth enamel—composed of crystalline Hydroxyapatite (Ca₅(PO₄)₃OH)—begins to dissolve. The dentist recommends a fluoride toothpaste.",
  "How does fluoride toothpaste protect teeth against bacterial acid erosion at the molecular level?",
  "Fluoride kills all saliva cells to stop acid formation.",
  "Fluoride ions replace the hydroxyl (OH⁻) ions in tooth enamel, converting hydroxyapatite into fluoroapatite (Ca₅(PO₄)₃F), which has a much lower solubility product and resists acid dissolution down to pH 4.5.",
  "Fluoride reacts with hydrochloric acid to produce calcium metal.",
  "Fluoride forms an impermeable coating of pure gold over teeth.",
  "B",
  "Tooth enamel is the hardest substance in the human body, composed of crystalline mineral hydroxyapatite: Ca₅(PO₄)₃OH. Plaque bacteria ferment carbohydrates into acids (H⁺). At pH < 5.5, H⁺ reacts with OH⁻ and PO₄³⁻, dissolving the enamel (demineralisation): Ca₅(PO₄)₃OH + 4H⁺ → 5Ca²⁺ + 3HPO₄²⁻ + H₂O. Fluoride toothpaste introduces F⁻ ions that substitute for OH⁻ in the mineral lattice: Ca₅(PO₄)₃OH + F⁻ → Ca₅(PO₄)₃F + OH⁻. Fluoroapatite is significantly harder and more acid-resistant, demineralising only at pH < 4.5."
));

cases.push(makeChemCase(
  chapter, 21, "Agricultural Soil Liming: Neutralizing Soil Acidity", "Slaked Lime and Calcium Carbonate Acid Neutralization",
  "An agricultural extension officer tests the soil of a tea plantation suffering from poor crop yields. Soil testing reveals a pH of 4.8 (strongly acidic due to excessive ammonium sulphate fertilizer use and acidic rainfall). The officer instructs the farmer to broadcast finely ground Agricultural Lime (Calcium Carbonate, CaCO₃) or Slaked Lime (Ca(OH)₂) over the fields.",
  "What is the chemical function of applying lime to agricultural soil?",
  "Lime adds sodium ions to bleach the soil.",
  "Lime acts as a basic compound that neutralizes excess soil hydronium ions (H⁺), raising soil pH to the optimal range (6.0–7.0) and precipitating toxic soluble aluminium ions (Al³⁺).",
  "Lime acts as an herbicide that kills all earthworms.",
  "Lime is an acid that decreases the pH to 2.0.",
  "B",
  "Acidic soils (pH < 5.5) suffer from nutrient lockup and toxic solubilisation of aluminium and manganese ions. Adding slaked lime (Ca(OH)₂) or crushed limestone/chalk (CaCO₃) neutralizes soil acids: Ca(OH)₂ + 2H⁺ → Ca²⁺ + 2H₂O, or CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂↑. This 'liming' restores the pH to the optimal 6.0–7.0 range, supplies essential Ca²⁺ nutrients, improves soil flocculation and aeration, and precipitates toxic Al³⁺ as insoluble Al(OH)₃."
));

cases.push(makeChemCase(
  chapter, 22, "Acid Rain Attack on Marble Monuments (Stone Cancer)", "Calcium Carbonate Conversion to Soluble Gypsum",
  "Environmental scientists monitor the Taj Mahal in Agra, noting surface flaking, pitting, and yellowing of the pristine white Makrana marble (pure CaCO₃). Air monitoring shows elevated levels of sulphur dioxide (SO₂) from nearby refineries. Rainwater collected at the site has an acidic pH of 4.2.",
  "What chemical reaction causes 'stone cancer' (deterioration of marble monuments by acid rain)?",
  "Marble evaporates as pure calcium gas upon contact with water.",
  "Atmospheric SO₂ dissolves in rain to form sulphuric acid (H₂SO₄); the acid attacks insoluble calcium carbonate marble, converting it into soluble/friable calcium sulphate (gypsum), which washes away or crumbles: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂↑.",
  "Marble is an organic wood product that rots in the rain.",
  "Acid rain deposits black lead onto the marble surface.",
  "B",
  "Sulphur dioxide emitted from fossil fuel combustion oxidises in the atmosphere to sulphur trioxide, which dissolves in raindrops to form sulphuric acid (H₂SO₄): 2SO₂ + O₂ + 2H₂O → 2H₂SO₄. When acid rain falls on marble structures (CaCO₃), a chemical displacement occurs: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂↑. Calcium sulphate (gypsum) is formed, which is slightly soluble and occupies greater volume than carbonate, causing internal stress, blistering, pitting, and flaking of the marble (known as 'stone cancer')."
));

cases.push(makeChemCase(
  chapter, 23, "Action of Hot Concentrated Alkali on Amphoteric Metals", "Zincate and Aluminate Formation with Hydrogen Evolution",
  "A chemical technician drops granulated Zinc into a test tube containing concentrated Sodium Hydroxide solution (NaOH). At room temperature, little reaction occurs. Upon heating the test tube over a Bunsen flame, vigorous bubbling ensues, and the gas evolved burns with a characteristic pop sound. The zinc granules dissolve completely, leaving a clear colorless solution.",
  "What compound is formed in solution, and why does zinc dissolve in strong alkali?",
  "Sodium zinc chloride; zinc is a halogen that dissolves in bases.",
  "Zinc is an amphoteric metal; it reacts with hot concentrated sodium hydroxide to form soluble Sodium Zincate (Na₂ZnO₂) and liberates Hydrogen gas: Zn + 2NaOH → Na₂ZnO₂ + H₂↑.",
  "Zinc oxide precipitate; the solution becomes acidic.",
  "Zinc forms metallic sodium that floats on water.",
  "B",
  "Most metals react only with acids. However, amphoteric metals (such as Zinc, Aluminium, and Lead) possess oxides and hydroxides that exhibit both basic and acidic properties. When treated with boiling concentrated alkalis, they behave as acidic elements, dissolving with the liberation of hydrogen gas: Zn + 2NaOH → Na₂ZnO₂ (sodium zincate) + H₂↑. Similarly, Aluminium reacts: 2Al + 2NaOH + 2H₂O → 2NaAlO₂ (sodium meta-aluminate) + 3H₂↑."
));

cases.push(makeChemCase(
  chapter, 24, "Classification of Oxides: Amphoteric Nature of $Al_2O_3$ and $ZnO$", "Reaction with Both Strong Acids and Strong Alkalis",
  "An analytical chemist tests four white oxide powders: Na₂O, CaO, Al₂O₃, and SO₃. The chemist discovers that while Na₂O and CaO react only with acids (basic oxides), and SO₃ reacts only with bases (acidic oxide), Aluminium oxide (Al₂O₃) dissolves readily in both hydrochloric acid and hot sodium hydroxide solution.",
  "Which balanced chemical equations prove that Aluminium Oxide is an amphoteric oxide?",
  "Al₂O₃ + H₂O → 2Al(OH)₃ and Al₂O₃ + O₂ → 2AlO₂",
  "With acid: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O; With base: Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (forming soluble sodium aluminate).",
  "Al₂O₃ + 2NaCl → 2AlCl + Na₂O₃",
  "Aluminium oxide reacts with nitrogen gas to form aluminium nitrate.",
  "B",
  "An amphoteric oxide is a metallic oxide that reacts with both acids and strong bases to form salt and water. Acting as a base with acids: Al₂O₃ + 6HCl → 2AlCl₃ (aluminium chloride salt) + 3H₂O. Acting as an acid with strong alkalis: Al₂O₃ + 2NaOH → 2NaAlO₂ (sodium aluminate salt) + H₂O. Zinc oxide (ZnO) exhibits identical behavior: ZnO + 2HCl → ZnCl₂ + H₂O; ZnO + 2NaOH → Na₂ZnO₂ + H₂O."
));

cases.push(makeChemCase(
  chapter, 25, "Complex Salt Formation: Potassium Ferrocyanide", "Distinction Between Double Salts and Complex Salts",
  "A student dissolves equal molar quantities of two iron-containing salts in water:\nBeaker 1: Mohr's salt (Ferrous Ammonium Sulphate, FeSO₄·(NH₄)₂SO₄·6H₂O)\nBeaker 2: Potassium Ferrocyanide (K₄[Fe(CN)₆])\nWhen sodium hydroxide solution is added to Beaker 1, a dirty green precipitate of Fe(OH)₂ forms immediately. When sodium hydroxide is added to Beaker 2, NO precipitate forms whatsoever.",
  "Why does Mohr's salt give a positive test for iron(II) ions, while Potassium Ferrocyanide gives no test for iron(II) ions?",
  "Mohr's salt contains metallic iron, while ferrocyanide contains no iron.",
  "Mohr's salt is a Double Salt that completely dissociates into individual simple ions (Fe²⁺, NH₄⁺, SO₄²⁻) in water; Potassium Ferrocyanide is a Complex Salt where Fe²⁺ is locked inside a stable coordinate complex anion [Fe(CN)₆]⁴⁻ that does not dissociate into free Fe²⁺ ions.",
  "Potassium ferrocyanide decomposes into cyanide gas before testing.",
  "Beaker 2 is too cold for chemical reactions to occur.",
  "B",
  "A double salt is an equimolar molecular compound that exists only in solid crystalline form; in aqueous solution, it dissociates completely into its constituent simple hydrated ions, giving individual qualitative tests for each ion (Fe²⁺, NH₄⁺, SO₄²⁻). A complex salt contains coordination bonds that remain intact in water. In K₄[Fe(CN)₆], it ionises into 4K⁺ cations and the stable ferrocyanide complex anion [Fe(CN)₆]⁴⁻. The iron is coordinatively bound to six cyanide ligands and does not exist as free Fe²⁺, hence failing to precipitate as Fe(OH)₂."
));

cases.push(makeChemCase(
  chapter, 26, "Thermal Dehydration of Blue Vitriol ($CuSO_4\\cdot 5H_2O$)", "Stepwise Loss of Water of Crystallization",
  "A chemistry demonstration heats brilliant blue crystals of Copper(II) sulphate pentahydrate (CuSO₄·5H₂O) in a hard glass test tube. At 100°C, droplets of water condense in the cooler parts of the tube, and the crystals turn into a pale bluish-white powder. Heating further to 250°C turns the powder completely snowy white (anhydrous CuSO₄). Finally, heating strongly to 750°C decomposes the white solid into a black powder with choking fumes of SO₂ and O₂.",
  "What is the chemical composition of the black powder formed at 750°C, and what happens if a few drops of cold water are added to the anhydrous white powder at room temperature?",
  "Black powder: Copper metal; adding water produces an explosion of hydrogen.",
  "Black powder: Copper(II) oxide (CuO); adding water to the white anhydrous powder immediately restores the brilliant blue color with the evolution of heat (exothermic rehydration).",
  "Black powder: Carbon soot; adding water dissolves the carbon.",
  "Black powder: Copper sulphate decahydrate; adding water freezes the tube.",
  "B",
  "CuSO₄·5H₂O loses water stepwise: at 100°C it loses 4 molecules to form CuSO₄·H₂O (monohydrate). At 250°C it loses the fifth, tightly hydrogen-bonded water molecule to yield pure anhydrous CuSO₄ (snowy white). At 750°C, anhydrous copper sulphate decomposes thermally: 2CuSO₄ → 2CuO (black copper(II) oxide) + 2SO₂↑ + O₂↑. If water is added to anhydrous white CuSO₄, it exothermically reabsorbs water to reconstitute the hydrated [Cu(H₂O)₄]²⁺ complex cation, turning brilliant blue."
));

cases.push(makeChemCase(
  chapter, 27, "Olfactory Indicators: Onion and Vanilla in Acid vs Base", "Loss of Characteristic Odor in Alkaline Medium",
  "A visually impaired student in a chemistry laboratory uses olfactory indicators to test two unlabelled clear solutions (Solution A and Solution B). Strips of clean cloth impregnated with fresh onion juice and vanilla essence are dipped into each solution. With Solution A, the pungent onion and sweet vanilla odors persist strongly. With Solution B, the odors completely disappear.",
  "What is the chemical nature of Solution A and Solution B?",
  "Solution A is neutral water; Solution B is pure alcohol.",
  "Solution A is an Acid (odors persist in acidic medium); Solution B is a Base / Alkali (alkalis chemically destroy the volatile organic compounds responsible for the characteristic smell).",
  "Solution A is a strong alkali; Solution B is concentrated sulphuric acid.",
  "Both solutions are toxic organic poisons that destroy the sense of smell.",
  "B",
  "Olfactory indicators are substances whose smell changes depending on whether they are in an acidic or alkaline medium. Onion juice and vanilla essence contain organic compounds (e.g., allicin in onion, vanillin in vanilla) that possess characteristic odors in acidic or neutral solutions. In an alkaline medium (such as NaOH solution), the hydroxide ions (OH⁻) chemically react with and deprotonate or hydrolyse these volatile compounds, destroying their characteristic odors."
));

cases.push(makeChemCase(
  chapter, 28, "Antacids in Gastric Hyperacidity: Chemistry of Relief", "Neutralization of Stomach $HCl$ by Mild Bases",
  "A patient complaining of severe heartburn and acid indigestion is examined at a clinic. The gastroenterologist explains that gastric parietal cells have oversecreted hydrochloric acid, causing stomach pH to drop from the normal 1.5–2.0 down to a corrosive 0.8. The doctor prescribes an antacid tablet containing Magnesium Hydroxide (Milk of Magnesia) and Aluminium Hydroxide.",
  "Why are mild bases like Mg(OH)₂ and Al(OH)₃ used as antacids rather than strong bases like Sodium Hydroxide (NaOH)?",
  "Sodium hydroxide is an acid that would worsen the heartburn.",
  "Mg(OH)₂ and Al(OH)₃ are sparingly soluble, mild bases that gently neutralize excess stomach acid without causing caustic chemical burns to the esophagus and stomach lining, unlike caustic strong alkalis like NaOH.",
  "Magnesium hydroxide dissolves all stomach proteins to aid digestion.",
  "Sodium hydroxide is a gas that would cause flatulence.",
  "B",
  "Gastric juice contains ~0.5% hydrochloric acid (pH 1.5–2.0) needed for pepsin activation. In hyperacidity, stomach acid damages the mucosal barrier. Strong alkalis like NaOH or KOH are highly caustic and corrosive (deliquescent), destroying esophageal tissues upon swallowing. Antacids utilize insoluble, mild basic hydroxides like Mg(OH)₂ (Milk of Magnesia) and Al(OH)₃: Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O; Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O. Being sparingly soluble, they act as buffers, neutralizing excess H⁺ without raising pH above neutrality."
));

cases.push(makeChemCase(
  chapter, 29, "Action of Acids on Metal Bicarbonates vs Carbonates", "Stoichiometry of Effervescence and Gas Production",
  "A lab technician compares the volume of Carbon Dioxide gas evolved when equal masses (1.00 g each) of anhydrous Sodium Carbonate (Na₂CO₃, molar mass 106 g/mol) and Sodium Bicarbonate (NaHCO₃, molar mass 84 g/mol) are treated with excess dilute hydrochloric acid at STP.",
  "Which solid compound produces a greater volume of CO₂ gas per gram, and why?",
  "Both produce identical volumes because both contain sodium.",
  "Sodium bicarbonate produces a larger volume of CO₂ (~267 mL vs ~211 mL for Na₂CO₃) because 1 mole of NaHCO₃ (84 g) produces 1 mole of CO₂ (ratio 1:1), giving more moles of CO₂ per gram than Na₂CO₃ (106 g/mol).",
  "Sodium carbonate produces twice the volume because it has two sodium atoms.",
  "Neither solid produces CO₂ gas with dilute hydrochloric acid.",
  "B",
  "The balanced equations are:\n1. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ (106 g of Na₂CO₃ yields 1 mol / 22.4 L of CO₂ → 22,400/106 = 211.3 mL CO₂ per gram).\n2. NaHCO₃ + HCl → NaCl + H₂O + CO₂ (84 g of NaHCO₃ yields 1 mol / 22.4 L of CO₂ → 22,400/84 = 266.7 mL CO₂ per gram).\nBecause NaHCO₃ has a lower molar mass per mole of carbonate radical, 1.00 g contains more moles of reactant, generating ~267 mL of CO₂ compared to only ~211 mL from 1.00 g of Na₂CO₃."
));

cases.push(makeChemCase(
  chapter, 30, "Acid-Base Buffer Action: Blood Homeostasis", "Carbonic Acid-Bicarbonate Buffer Equilibrium",
  "A medical biochemist monitors human blood plasma, noting that arterial blood pH is tightly regulated within the extremely narrow physiological window of 7.35 to 7.45. Even during intense muscular exercise when large amounts of lactic acid are dumped into the bloodstream, blood pH changes by less than 0.05 units.",
  "What chemical buffer system in human blood prevents drastic pH fluctuations, and how does it neutralize incoming acidic hydronium ions?",
  "Hydrochloric acid and sodium hydroxide buffer system.",
  "The Carbonic acid / Bicarbonate buffer system (H₂CO₃ / HCO₃⁻); incoming H⁺ ions from lactic acid are captured by bicarbonate ions to form weak carbonic acid (HCO₃⁻ + H⁺ → H₂CO₃), which is rapidly exhaled by the lungs as CO₂ and water.",
  "Blood contains metallic sodium that reacts with lactic acid.",
  "Hemoglobin decomposes all acids into nitrogen gas.",
  "B",
  "Human blood is buffered primarily by the carbonic acid-bicarbonate conjugate pair: CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. When excess acid (H⁺ from lactic acid) enters the circulation, the excess protons are consumed by the reservoir of bicarbonate anions: H⁺ + HCO₃⁻ → H₂CO₃. The resulting carbonic acid decomposes into CO₂ and H₂O, and the respiratory center in the brainstem increases ventilation rate to exhale the excess CO₂, keeping blood pH steady at 7.4."
));

cases.push(makeChemCase(
  chapter, 31, "Universal Indicator and pH Color Spectrum", "Mixture of Dyes and Broad-Range pH Determination",
  "A water quality inspector uses Universal Indicator solution to assess four water samples from different points along a river:\nSample 1 (Industrial effluent): Dark Red (pH ≈ 2.0)\nSample 2 (Agricultural runoff): Yellow-Orange (pH ≈ 5.0)\nSample 3 (Pristine forest stream): Green (pH ≈ 7.0)\nSample 4 (Detergent factory discharge): Violet-Purple (pH ≈ 11.0)",
  "What is Universal Indicator, and why is it superior to simple litmus paper for water testing?",
  "Universal indicator is a radioactive dye that measures water temperature.",
  "Universal indicator is a calibrated mixture of multiple organic dyes (thymol blue, methyl red, bromothymol blue, phenolphthalein) that displays a continuous spectrum of distinct colors corresponding to specific numerical pH values from 1 to 14, unlike litmus which only indicates whether a solution is broadly acidic or basic.",
  "Litmus paper dissolves completely in polluted river water.",
  "Universal indicator neutralizes all pollutants during testing.",
  "B",
  "Litmus paper only provides a binary qualitative indication: it turns red in any acid (whether pH 1 or 6) and blue in any alkali (whether pH 8 or 14). In contrast, Universal Indicator is a carefully proportioned blend of multiple pH-sensitive indicators (such as methyl red, bromothymol blue, thymol blue, phenolphthalein). Each dye changes color across a different pH interval, creating a continuous rainbow spectrum: red (pH 1-3), orange/yellow (pH 4-6), green (neutral pH 7), blue (pH 8-9), and violet/purple (pH 10-14)."
));

cases.push(makeChemCase(
  chapter, 32, "Action of Heat on Ammonium Salts: $NH_4Cl$ vs $NH_4NO_3$ vs $(NH_4)_2Cr_2O_7$", "Sublimation vs Explosive Decomposition vs Chemical Volcano",
  "In an advanced inorganic demonstration, a teacher heats three different ammonium salts in separate dry boiling tubes:\nTube 1: Solid Ammonium Chloride (NH₄Cl) sublimes, forming a dense white ring on the cooler upper tube walls.\nTube 2: Solid Ammonium Nitrate (NH₄NO₃) melts and decomposes gently into steam and laughing gas (N₂O), but explodes if heated above 250°C.\nTube 3: Orange Ammonium Dichromate ((NH₄)₂Cr₂O₇) sparks and erupts in an exothermic 'chemical volcano', swelling into a fluffy dark-green powder with steam and N₂ gas.",
  "What is the chemical identity of the fluffy dark-green powder formed in Tube 3, and what type of reaction occurs?",
  "Copper(II) oxide formed by displacement.",
  "Chromium(III) oxide (Cr₂O₃); an internal redox decomposition where ammonium nitrogen is oxidised from -3 to 0 (N₂) while chromium is reduced from +6 to +3 (Cr₂O₃).",
  "Iron(II) hydroxide formed by hydration.",
  "Lead chromate formed by sublimation.",
  "B",
  "Ammonium dichromate decomposition is a classic 'chemical volcano' reaction: (NH₄)₂Cr₂O₇(s) → N₂(g) + 4H₂O(g) + Cr₂O₃(s). It is a violent intramolecular redox reaction: Nitrogen in the ammonium cation (NH₄⁺) is in the -3 oxidation state and is oxidised to elemental N₂ (0). Chromium in the dichromate anion (Cr₂O₇²⁻) is in the +6 oxidation state and is reduced to Chromium(III) oxide (Cr₂O₃, +3), which forms a voluminous, fluffy dark-green solid that resembles volcanic ash."
));

cases.push(makeChemCase(
  chapter, 33, "Why Acetic Acid is a Weak Acid Despite Having Four Hydrogens", "Structure of the Carboxyl Group vs Methyl Group",
  "A student examines the molecular formula of Acetic Acid (CH₃COOH). It contains four hydrogen atoms. However, in laboratory titrations with 1.0 M NaOH, exactly 1 mole of Acetic acid neutralizes only 1 mole of NaOH, proving it is strictly monobasic.",
  "Why are the three hydrogen atoms in the methyl group (-CH₃) non-ionisable, while the single hydrogen in the carboxyl group (-COOH) is ionisable?",
  "The three methyl hydrogens are heavier than the carboxyl hydrogen.",
  "The methyl hydrogens are bonded to carbon by non-polar covalent C–H bonds (ΔEN ≈ 0.4) that do not dissociate; the single acidic hydrogen is bonded to highly electronegative oxygen (-O–H), which is polar and dissociates into H⁺, stabilized by resonance in the acetate anion (CH₃COO⁻).",
  "Acetic acid converts into methane gas in water.",
  "The three methyl hydrogens have a positive charge of +3.",
  "B",
  "In acetic acid (CH₃-C(=O)-O-H), the three hydrogen atoms attached to the methyl carbon atom participate in non-polar C-H single bonds; the carbon-hydrogen bond has very low polarity and carbon cannot stabilize a carbanion in water. In contrast, the hydrogen in the carboxyl group is bonded to an electronegative oxygen atom (-O-H). The adjacent carbonyl group (C=O) pulls electron density away, weakening the O-H bond. When the proton departs, the resulting acetate anion (CH₃COO⁻) is stabilized by resonance delocalisation of the negative charge across both oxygens."
));

cases.push(makeChemCase(
  chapter, 34, "Preparation of Insoluble Salts by Precipitation (Double Decomposition)", "Solubility Rules for Barium Sulphate and Lead Iodide",
  "An analytical chemist needs to prepare pure, dry samples of two insoluble salts: Barium Sulphate (BaSO₄) and Lead(II) Iodide (PbI₂). The stockroom contains: Barium Carbonate, Barium Chloride, Sodium Sulphate, Lead Nitrate, and Potassium Iodide.",
  "Which pairs of soluble aqueous solutions must be mixed to precipitate pure BaSO₄ and PbI₂, and how are the solid salts recovered?",
  "Mix Barium Carbonate with solid Lead Nitrate; heat until dry.",
  "Mix aqueous Barium Chloride with aqueous Sodium Sulphate (precipitates BaSO₄); mix aqueous Lead Nitrate with aqueous Potassium Iodide (precipitates PbI₂); filter, wash the residue with distilled water, and dry.",
  "Mix dry salts with concentrated sulphuric acid; collect the gas.",
  "Mix barium chloride with water; evaporate to dryness.",
  "B",
  "Insoluble salts are prepared by precipitation (double decomposition) by mixing two soluble salts. For Barium Sulphate: BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄↓(white precipitate) + 2NaCl(aq). For Lead(II) Iodide: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂↓(yellow precipitate) + 2KNO₃(aq). The insoluble precipitate is separated by filtration using filter paper in a funnel. The residue on the filter paper is washed repeatedly with cold distilled water to remove spectator ions (Na⁺, Cl⁻, K⁺, NO₃⁻) and then dried in a desiccator or warm oven."
));

cases.push(makeChemCase(
  chapter, 35, "Action of Acids on Metal Oxides: Basic Nature of $CuO$", "Acid-Base Neutralization and Salt Coloration",
  "A black solid powder of Copper(II) oxide (CuO) is placed in a beaker containing warm dilute hydrochloric acid. The beaker is swirled gently. Over several minutes, the black powder dissolves completely, and the solution turns a magnificent blue-green color. A student tests the final solution and detects copper(II) ions and chloride ions.",
  "What chemical reaction has occurred, and what does it demonstrate about the nature of Copper(II) oxide?",
  "Copper oxide is an acid that neutralizes hydrochloric acid to produce copper metal.",
  "Copper(II) oxide is a basic oxide that undergoes acid-base neutralization with hydrochloric acid to form soluble copper(II) chloride and water: CuO(s) + 2HCl(aq) → CuCl₂(aq) + H₂O(l).",
  "Copper oxide dissolves by physical sublimation without chemical change.",
  "Hydrochloric acid decomposes into chlorine gas and copper soot.",
  "B",
  "Most metallic oxides are basic oxides. Copper(II) oxide (CuO) is an insoluble black basic oxide. When treated with dilute hydrochloric acid, it undergoes a classic neutralization reaction: CuO(black) + 2HCl(aq) → CuCl₂(aq) + H₂O(l). The black solid disappears, and the resulting solution acquires a characteristic blue-green color due to hydrated copper(II) chloride complexes ([Cu(H₂O)₆]²⁺). This reaction proves that metallic oxides react with acids to form salt and water, establishing their basic character."
));

cases.push(makeChemCase(
  chapter, 36, "Preparation of Ferrous Chloride vs Ferric Chloride", "Acid Displacement vs Direct Combination Synthesis",
  "An industrial chemist wants to prepare Iron(II) chloride (FeCl₂) and Iron(III) chloride (FeCl₃). The chemist knows that reacting iron metal with hydrochloric acid yields only FeCl₂, not FeCl₃. To prepare anhydrous FeCl₃, the chemist passes dry chlorine gas over heated iron wire in a combustion tube.",
  "Why does the reaction of iron with hydrochloric acid yield Iron(II) chloride (FeCl₂), whereas reaction with dry chlorine gas yields Iron(III) chloride (FeCl₃)?",
  "Hydrochloric acid contains less chlorine than chlorine gas.",
  "In the reaction with HCl, hydrogen gas is liberated, which acts as a reducing agent and prevents iron(II) from being oxidised to iron(III): Fe + 2HCl → FeCl₂ + H₂↑; in contrast, Chlorine gas is a powerful oxidising agent that oxidises iron directly to the +3 state: 2Fe + 3Cl₂ → 2FeCl₃.",
  "Iron(III) chloride is an unstable gas that explodes in acid.",
  "Iron metal refuses to react with chlorine gas.",
  "B",
  "When iron reacts with hydrochloric acid: Fe + 2HCl → FeCl₂ + H₂↑. The evolving hydrogen gas maintains a reducing environment that prevents Fe²⁺ from oxidising to Fe³⁺. Even if traces of Fe³⁺ were formed, nascent H₂ would reduce it back to Fe²⁺. To prepare Iron(III) chloride, dry elemental chlorine gas (a powerful oxidising agent) is passed directly over heated iron: 2Fe(s) + 3Cl₂(g) → 2FeCl₃(s). Because chlorine is a strong oxidizer and no reducing hydrogen is present, iron is fully oxidised to the +3 ferric state."
));

cases.push(makeChemCase(
  chapter, 37, "Basic Salt Formation: Basic Copper Carbonate (Malachite)", "Incomplete Neutralization of Polyacidic Bases",
  "Green mineral malachite, found on weathered copper roofs and antique bronze statues, is chemically known as Basic Copper Carbonate with the formula CuCO₃·Cu(OH)₂. When treated with dilute sulphuric acid, it dissolves with effervescence, producing a bright blue solution of Copper(II) sulphate.",
  "How is a 'basic salt' formed, and what structural feature defines it?",
  "A basic salt is formed by the complete neutralization of a weak acid by a strong base.",
  "A basic salt is formed by the partial or incomplete replacement of the hydroxyl (OH⁻) groups of a diacidic or triacidic base by an acid radical; it still contains un-neutralized hydroxide groups in its chemical formula.",
  "A basic salt contains sodium hydroxide mixed with table salt.",
  "A basic salt is an organic compound that does not contain metal cations.",
  "B",
  "A basic salt is defined as a salt formed by the partial replacement of the replaceable hydroxide ions of a polyacidic base (such as Cu(OH)₂, Pb(OH)₂, or Bi(OH)₃) by an acid radical. Because neutralization is incomplete, the resulting salt retains one or more basic hydroxyl (OH⁻) groups attached to the metal cation. Examples include basic copper carbonate [CuCO₃·Cu(OH)₂], basic copper chloride [Cu(OH)Cl], and basic lead carbonate [2PbCO₃·Pb(OH)₂]."
));

cases.push(makeChemCase(
  chapter, 38, "pH of Mixed Salt: Bleaching Powder ($CaOCl_2$)", "Mixed Acid Anions in Calcium Hypochlorite",
  "In an industrial sanitization facility, Bleaching Powder (CaOCl₂) is dissolved in distilled water. The aqueous solution turns red litmus paper blue (alkaline), but within a few seconds, the blue litmus is completely bleached snowy white.",
  "Why is Bleaching Powder classified as a 'Mixed Salt', and what explains its simultaneous alkaline and bleaching action?",
  "It contains two different metals mixed together.",
  "Bleaching powder is a mixed salt containing two different acid anions (Chloride Cl⁻ and Hypochlorite OCl⁻) attached to the same calcium cation (Ca(OCl)Cl); in water it hydrolyses to form basic Ca(OH)₂ (alkaline) and liberates nascent oxygen from OCl⁻ (bleaching).",
  "Bleaching powder is a simple covalent compound that dissolves water molecules.",
  "Calcium hypochlorite contains radioactive chlorine.",
  "B",
  "A mixed salt is defined as a salt that contains more than one basic or acid radical (anions or cations). Bleaching powder is represented chemically as Ca(OCl)Cl, where the divalent calcium cation (Ca²⁺) is bonded simultaneously to two different anions: a chloride ion (Cl⁻, derived from HCl) and a hypochlorite ion (OCl⁻, derived from HOCl). In aqueous solution: (1) Hydrolysis of the salt of a weak acid (HOCl) releases OH⁻ ions, turning red litmus blue; (2) The hypochlorite ion decomposes to release nascent oxygen: OCl⁻ → Cl⁻ + [O], which chemically bleaches the colored litmus dye to white."
));

cases.push(makeChemCase(
  chapter, 39, "Acid Salt Thermal Decomposition: $NaHCO_3$ in Baking", "Decomposition to Normal Salt, Water, and $CO_2$",
  "In culinary chemistry, Sodium Bicarbonate (baking soda, NaHCO₃) is used as a chemical leavening agent in cake baking. When placed in an oven heated to 180°C, the batter rises dramatically, becoming light, fluffy, and spongy with thousands of tiny internal air pockets.",
  "What thermal decomposition reaction occurs in baking soda that causes cake batter to expand and rise?",
  "Sodium bicarbonate melts into a liquid that boils.",
  "Sodium bicarbonate decomposes thermally into solid sodium carbonate, steam, and carbon dioxide gas: 2NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)↑; the expanding CO₂ gas bubbles stretch the gluten matrix.",
  "Baking soda reacts with oxygen to form flammable hydrogen gas.",
  "Baking soda sublimes directly into gaseous sodium.",
  "B",
  "Acid salts of volatile acids (such as bicarbonates and bisulphites) decompose upon heating into their corresponding normal salts while releasing gas. For baking soda: 2NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)↑. At oven temperatures (>100°C), both carbon dioxide and steam are liberated as hot expanding gases. These trapped gas bubbles expand within the viscous dough, creating an open porous structure that solidifies as the cake bakes, giving it a soft, spongy texture."
));

cases.push(makeChemCase(
  chapter, 40, "Double Salt Formation: Potash Alum and Mohr's Salt", "Equimolar Crystallization from Mixed Salt Solutions",
  "A physical chemist prepares Potash Alum (K₂SO₄·Al₂(SO₄)₃·24H₂O) by dissolving equimolar quantities of pure Potassium sulphate and pure Aluminium sulphate in hot dilute sulphuric acid, followed by slow cooling. Octahedral crystals separate out cleanly.",
  "Why is Potash Alum classified as a 'Double Salt', and how does its behavior in aqueous solution differ from that of a complex salt?",
  "It contains two separate covalent bonds.",
  "It is formed by the equimolar combination of two simple salts (K₂SO₄ and Al₂(SO₄)₃) and exists as a unified crystal lattice only in the solid state; when dissolved in water, it completely dissociates into simple independent hydrated ions (K⁺, Al³⁺, SO₄²⁻), giving qualitative tests for each ion.",
  "Potash alum does not dissolve in water.",
  "Double salts contain transition metals that emit radioactivity.",
  "B",
  "A double salt is a stoichiometric addition compound of two simple salts that crystallizes as a unique crystal lattice containing water of crystallization. However, double salts are held together by ionic and hydrogen bonds that completely dissociate in polar aqueous media: K₂SO₄·Al₂(SO₄)₃·24H₂O(s) → 2K⁺(aq) + 2Al³⁺(aq) + 4SO₄²⁻(aq) + 24H₂O. The solution exhibits all individual chemical properties of K⁺, Al³⁺, and SO₄²⁻ ions, unlike a complex salt where the central metal ion is locked in a non-dissociating coordination complex."
));

cases.push(makeChemCase(
  chapter, 41, "Electrical Conductivity: Dilute $HCl$ vs Glacial Acetic Acid", "Degree of Ionisation in Aqueous Electrolytes",
  "A teacher sets up a conductivity cell containing a light bulb connected to two electrodes. When immersed in 0.1 M Hydrochloric acid, the bulb glows with blinding brightness. When immersed in pure glacial acetic acid (100% CH₃COOH), the bulb does not glow at all. When distilled water is added to the glacial acetic acid, the bulb begins to glow dimly.",
  "What fundamental electrolyte principle accounts for these electrical conductivity differences?",
  "Hydrochloric acid contains metal wires that conduct current.",
  "Glacial acetic acid is composed of un-ionised covalent molecules (no free ions); adding water facilitates partial ionisation (weak electrolyte, producing few ions and dim glow); HCl is a strong acid that undergoes 100% ionisation in water, producing a high concentration of mobile ions (bright glow).",
  "Water removes all electrical resistance from glass.",
  "Acetic acid is a non-metal gas that freezes into a plastic.",
  "B",
  "Electrical conduction in liquid media requires mobile ions. Pure glacial acetic acid is an anhydrous covalent liquid held by hydrogen bonds; with zero water present, no ionisation occurs, and it is a non-electrolyte (bulb stays dark). When water is added, the high dielectric constant of water induces partial ionisation: CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻. Because acetic acid is a weak acid (degree of dissociation α ≈ 1.3%), only a small concentration of ions is formed, giving dim conduction. In contrast, HCl is a strong electrolyte that dissociates completely (α ≈ 100%), providing a massive pool of ions that conducts electricity vigorously."
));

cases.push(makeChemCase(
  chapter, 42, "Action of Acids on Metal Hydroxides: Color Changes with $Fe(OH)_3$", "Neutralization of Insoluble Basic Hydroxide",
  "A reddish-brown gelatinous precipitate of Iron(III) hydroxide (Fe(OH)₃) is suspended in a test tube. Dilute hydrochloric acid is added dropwise with shaking. The reddish-brown precipitate dissolves completely, transforming into a clear, golden-yellow solution.",
  "What is the chemical reaction occurring in the test tube, and what does it prove regarding Iron(III) hydroxide?",
  "Iron(III) hydroxide is an amphoteric oxide that oxidises hydrochloric acid.",
  "Fe(OH)₃ is an insoluble basic hydroxide that neutralizes hydrochloric acid to produce soluble Iron(III) chloride and water: Fe(OH)₃(s) + 3HCl(aq) → FeCl₃(aq) + 3H₂O(l).",
  "Hydrochloric acid bleaches the reddish-brown color to white.",
  "Iron decomposes into chlorine gas and steam.",
  "B",
  "Metallic hydroxides are basic substances. Iron(III) hydroxide, Fe(OH)₃, is an insoluble, reddish-brown basic hydroxide. When treated with dilute hydrochloric acid, an acid-base neutralization reaction occurs: Fe(OH)₃(s) + 3HCl(aq) → FeCl₃(aq) + 3H₂O(l). The insoluble gelatinous solid dissolves to yield hydrated iron(III) chloride (FeCl₃), which imparts a characteristic clear golden-yellow/amber color to the solution."
));

cases.push(makeChemCase(
  chapter, 43, "Solubility Rules for Common Salts", "Predicting Precipitates in Double Displacement",
  "A student memorizes the fundamental ICSE solubility rules for common inorganic salts:\nRule 1: All salts of Sodium, Potassium, and Ammonium are soluble.\nRule 2: All Nitrates and Acetates are soluble.\nRule 3: Most Chlorides are soluble EXCEPT Silver (AgCl) and Lead (PbCl₂).\nRule 4: Most Sulphates are soluble EXCEPT Barium (BaSO₄), Lead (PbSO₄), and Calcium (CaSO₄).\nRule 5: Most Carbonates, Hydroxides, and Sulphides are INSOLUBLE.",
  "Based on these rules, which of the following combinations of aqueous solutions will produce an insoluble precipitate upon mixing?",
  "Potassium nitrate mixed with Sodium chloride.",
  "Barium chloride mixed with Sodium sulphate (precipitates BaSO₄).",
  "Ammonium chloride mixed with Potassium nitrate.",
  "Sodium carbonate mixed with Potassium hydroxide.",
  "B",
  "Applying solubility rules: In option B, mixing BaCl₂(aq) with Na₂SO₄(aq) produces the ion pairs (Ba²⁺ + SO₄²⁻) and (Na⁺ + Cl⁻). By Rule 4, Barium Sulphate (BaSO₄) is insoluble in water and precipitates immediately as a dense white solid: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄↓. In all other options, all possible cation-anion combinations form soluble salts according to Rules 1, 2, and 3, resulting in zero precipitate formation."
));

cases.push(makeChemCase(
  chapter, 44, "Why Carbonic Acid ($H_2CO_3$) is a Weak Acid", "Low Dissociation Constant and Carbon Dioxide Equilibrium",
  "In a carbonated soda bottling plant, pressurized CO₂ gas is dissolved in water to form Carbonic acid (H₂CO₃). A chemist measures the pH of freshly opened soda water, finding it to be moderately acidic (pH ≈ 4.0). Despite being an inorganic mineral acid, humans safely consume carbonated water without chemical damage to internal tissues.",
  "Why is Carbonic acid classified as a weak acid, unlike other mineral acids like Sulphuric acid or Nitric acid?",
  "Carbonic acid contains no hydrogen ions.",
  "Carbonic acid exists in a dynamic equilibrium with dissolved carbon dioxide (CO₂ + H₂O ⇌ H₂CO₃) and has a very small first dissociation constant (Ka₁ = 4.3 × 10⁻⁷), meaning less than 1% of the molecules dissociate into hydronium ions in water.",
  "Carbonic acid is a strong base that neutralizes stomach acid.",
  "Carbonic acid turns into solid diamond at room temperature.",
  "B",
  "Mineral acids like HCl, HNO₃, and H₂SO₄ are strong electrolytes that dissociate essentially 100% in water (Ka > 10³). In contrast, Carbonic acid is a weak diprotic acid. In aqueous solution, most dissolved CO₂ remains as loosely hydrated CO₂ molecules rather than H₂CO₃. Furthermore, the dissociation of H₂CO₃ into H⁺ and HCO₃⁻ is very weak (Ka₁ ≈ 4.3 × 10⁻⁷). Because the concentration of free H₃O⁺ is extremely low (pH ~4.0), it is non-corrosive and safe for human ingestion."
));

cases.push(makeChemCase(
  chapter, 45, "Hydrolysis of Aluminium Chloride: Acidic Fumes in Moist Air", "Cationic Hydrolysis and $HCl$ Vapor Liberation",
  "A chemical technician opens a bottle of anhydrous Aluminium Chloride (AlCl₃) crystals in a humid laboratory. Dense white, choking fumes immediately billow out from the neck of the bottle, and the moist neck of the bottle tests strongly acidic with blue litmus paper.",
  "Why does solid anhydrous Aluminium Chloride fume in moist air and produce an acidic solution?",
  "Aluminium reacts with oxygen to form chlorine gas.",
  "Al³⁺ is a small, highly charged cation with immense polarizing power; when it encounters atmospheric moisture, it undergoes vigorous cationic hydrolysis, stripping OH⁻ from water molecules to form aluminium hydroxide and liberating gaseous, choking hydrogen chloride (HCl) fumes.",
  "AlCl₃ sublimes directly into white nitrogen gas.",
  "Aluminium chloride is a radioactive substance that ionises air molecules.",
  "B",
  "Al³⁺ has a very high charge density (charge +3, radius 53 pm). In contact with water or humid air, Al³⁺ strongly polarizes the coordinated water dipoles, pulling electron density away from the O-H bonds until protons are expelled: [Al(H₂O)₆]³⁺ + H₂O ⇌ [Al(H₂O)₅(OH)]²⁺ + H₃O⁺. In solid anhydrous AlCl₃ exposed to moist air, the reaction proceeds vigorously to release gaseous HCl: AlCl₃ + 3H₂O → Al(OH)₃(s) + 3HCl(g)↑. The escaping HCl gas combines with atmospheric moisture to form tiny droplets of hydrochloric acid, appearing as dense white fumes."
));

cases.push(makeChemCase(
  chapter, 46, "Thermal Decomposition of Carbonates: $Na_2CO_3$ vs $CaCO_3$", "Thermal Stability of Alkali Metal vs Alkaline Earth Carbonates",
  "A geologist heats two white carbonate powders in an electric crucible furnace to 850°C:\nCrucible 1: Calcium Carbonate (CaCO₃) decomposes completely, releasing carbon dioxide gas and leaving white Calcium Oxide (CaO) powder.\nCrucible 2: Sodium Carbonate (Na₂CO₃) melts into a clear liquid at 851°C without releasing ANY carbon dioxide gas, remaining completely stable up to 1000°C.",
  "Why is Sodium Carbonate thermally stable to red heat, whereas Calcium Carbonate decomposes easily at 850°C?",
  "Calcium carbonate is an organic compound that burns in air.",
  "Na⁺ is a large univalent cation with low charge density that cannot polarize the carbonate anion; Ca²⁺ has a smaller radius and double the charge (+2), exerting powerful polarizing power that distorts the carbonate ion and promotes cleavage into stable CaO lattice and CO₂.",
  "Sodium carbonate has a higher molecular weight than calcium carbonate.",
  "Calcium metal attracts carbon dioxide gas from the atmosphere.",
  "B",
  "Thermal stability of metal carbonates depends on the polarizing power (charge/radius) of the metal cation. Na⁺ has a +1 charge and radius of 102 pm, giving it very low polarizing power; it cannot distort the carbonate (CO₃²⁻) oxyanion, making Group 1 carbonates (except Li₂CO₃) thermally stable up to their boiling points. Ca²⁺ is divalent (+2) with a smaller radius (100 pm). Its high polarizing power strongly pulls the electron cloud of an oxygen atom in CO₃²⁻ toward itself, weakening the C-O bond and facilitating decomposition into CaO and CO₂ at 850°C."
));

cases.push(makeChemCase(
  chapter, 47, "pH Change During Strong Acid - Strong Base Titration", "Sigmoidal Titration Curve and Equivalence Jump",
  "An analytical chemist titrates 25.0 mL of 0.1 M HCl against 0.1 M NaOH using a digital pH meter. As NaOH is added dropwise, the pH rises very slowly from 1.0 to 3.0 over the first 24.0 mL. However, between 24.9 mL and 25.1 mL, a dramatic vertical surge occurs: the pH skyrockets from 4.0 to 10.0 within just two drops (0.1 mL).",
  "Why does the pH change so slowly initially and then jump by 6 pH units within a fraction of a milliliter near the equivalence point?",
  "The burette valve leaks sodium hydroxide at the end.",
  "pH is a logarithmic function of hydronium ion concentration (pH = -log[H⁺]); a drop from 0.1 M to 0.01 M [H⁺] changes pH by only 1 unit, but near equivalence, the remaining tiny trace of H⁺ (10⁻⁵ M) is neutralized by a micro-excess of OH⁻ (10⁻⁵ M), causing a massive 10⁶-fold change in [H⁺].",
  "The hydrochloric acid boils away near the end of titration.",
  "The indicator reacts with the glass beaker to produce alkali.",
  "B",
  "Because pH is logarithmic (pH = -log₁₀[H⁺]), neutralizing 90% of the acid (from 0.1 M to 0.01 M) changes pH from 1 to 2 (only 1 unit). Neutralizing 99% brings pH to 3. At 24.9 mL, [H⁺] is ~10⁻⁴ M (pH 4). At 25.0 mL, complete neutralization occurs ([H⁺] = 10⁻⁷ M, pH 7). Just one extra drop (0.05 mL) of 0.1 M NaOH introduces excess OH⁻ (~10⁻⁴ M), driving pOH to 4 and pH to 10. This creates the steep vertical inflection jump characteristic of strong acid-strong base titration curves."
));

cases.push(makeChemCase(
  chapter, 48, "Why Pure Anhydrous $HNO_3$ is Colorless but Turns Yellow on Storage", "Photochemical Autodecomposition and $NO_2$ Dissolution",
  "A chemical warehouse receives a shipment of pure, freshly distilled concentrated nitric acid (HNO₃), which is completely colorless and transparent. After sitting on a sunny shelf in clear glass reagent bottles for two months, the liquid has acquired an intense brownish-yellow color.",
  "What chemical reaction causes concentrated nitric acid to turn yellow on exposure to light or heat?",
  "Nitric acid oxidises the glass bottle to form yellow silicon.",
  "Concentrated nitric acid undergoes photochemical decomposition in sunlight or warmth, decomposing into reddish-brown Nitrogen Dioxide (NO₂) gas, which dissolves in the remaining acid to impart a yellow color: 4HNO₃ → 4NO₂ + 2H₂O + O₂.",
  "Nitric acid absorbs yellow sulphur dust from the air.",
  "The acid decomposes into yellow liquid gold.",
  "B",
  "Pure nitric acid is inherently colorless. However, concentrated HNO₃ is thermally and photochemically unstable. When exposed to sunlight or ambient heat in clear bottles, it slowly undergoes photochemical decomposition: 4HNO₃(l) xrightarrow{hν / Δ} 4NO₂(g) + 2H₂O(l) + O₂(g). The reddish-brown nitrogen dioxide gas (NO₂) produced dissolves in the concentrated acid, imparting a distinct yellow or yellowish-brown tint. To prevent this autodecomposition, concentrated nitric acid is always stored in amber-colored or dark brown reagent bottles."
));

cases.push(makeChemCase(
  chapter, 49, "Action of Acid on Metal Bicarbonate vs Insoluble Carbonate", "Effervescence Rate and Surface Area Dynamics",
  "In a school science exhibition, a student adds equal volumes of 1 M HCl to two beakers:\nBeaker A receives 5 g of powdered Sodium Bicarbonate (NaHCO₃).\nBeaker B receives a 5 g solid lump of Marble (CaCO₃).\nIn Beaker A, a colossal geyser of foam erupts violently within 1 second. In Beaker B, gentle bubbling occurs slowly over 15 minutes.",
  "What two factors explain why sodium bicarbonate reacts almost instantaneously compared to the slow reaction of the marble lump?",
  "Sodium bicarbonate is an explosive while marble is non-reactive.",
  "NaHCO₃ is highly soluble in water and finely powdered (massive surface area and instant molecular contact with acid); the marble lump is completely insoluble with a tiny geometric surface area, restricting reaction to outer crystal faces.",
  "Marble contains no carbonate ions.",
  "Hydrochloric acid is neutralized immediately by the beaker glass.",
  "B",
  "The rate of a heterogeneous chemical reaction depends directly on: (1) Solubility of reactants: NaHCO₃ dissolves instantly in water, dispersing into free Na⁺ and HCO₃⁻ ions in homogenous contact with hydronium ions, triggering instantaneous neutralization: H⁺ + HCO₃⁻ → H₂O + CO₂↑. (2) Surface area: A fine powder provides an enormous surface area for collisions, whereas a solid crystalline lump of insoluble marble (CaCO₃) has a tiny surface-area-to-volume ratio, severely limiting the number of active collision sites available to attacking acid molecules."
));

cases.push(makeChemCase(
  chapter, 50, "Neutralization Curves: Methyl Orange vs Phenolphthalein Suitability", "Indicator pH Transition Ranges and Titration Equivalence",
  "An analytical chemist conducts two titrations:\nTitration 1: Strong Acid (HCl) vs Weak Base (NH₄OH) - the equivalence point occurs at pH ≈ 5.2.\nTitration 2: Weak Acid (CH₃COOH) vs Strong Base (NaOH) - the equivalence point occurs at pH ≈ 8.8.\nThe chemist must choose between Methyl Orange (pH transition range 3.1–4.4, red to yellow) and Phenolphthalein (pH transition range 8.3–10.0, colorless to pink).",
  "Which indicator is strictly suitable for Titration 1 and which for Titration 2?",
  "Phenolphthalein for Titration 1; Methyl Orange for Titration 2.",
  "Methyl Orange for Titration 1 (equivalence pH 5.2 lies near its transition range 3.1–4.4); Phenolphthalein for Titration 2 (equivalence pH 8.8 lies squarely within its transition range 8.3–10.0).",
  "Both indicators can be used interchangeably for any titration.",
  "Neither indicator works because weak electrolytes cannot be titrated.",
  "B",
  "An indicator is suitable for a titration only if its pH transition range coincides with the steep vertical inflection point of the titration curve. For Strong Acid + Weak Base (Titration 1), cationic hydrolysis of NH₄⁺ makes the equivalence point acidic (pH ~5.2); Methyl Orange (working range 3.1–4.4) changes color sharply at this point. For Weak Acid + Strong Base (Titration 2), anionic hydrolysis of CH₃COO⁻ makes the equivalence point basic (pH ~8.8); Phenolphthalein (working range 8.3–10.0) changes from colorless to pink exactly at this equivalence point."
));

console.log(`[Ch3 Acids Bases Salts] Generated ${cases.length} cases.`);

const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) fs.mkdirSync(BANK_DIR, { recursive: true });

const outPath = path.join(BANK_DIR, 'chemistry_case_acids_bases_and_salts.json');
fs.writeFileSync(outPath, JSON.stringify(cases, null, 2), 'utf8');
console.log(`Saved 50 cases to ${outPath}`);
