// build_chem_case_ch4_analytical_chemistry.js
// 50 Case-Based MCQs for ICSE Class 10 Chemistry: Chapter 4 - Analytical Chemistry

const fs = require('fs');
const path = require('path');
const { makeChemCase } = require('./chem_case_helper');

const chapter = "Analytical Chemistry";
const cases = [];

cases.push(makeChemCase(
  chapter, 1, "Action of Sodium Hydroxide on Iron(II) vs Iron(III) Salts", "Precipitation and Aerial Oxidation of Iron Hydroxides",
  "A forensic laboratory analyst receives two pale green and yellow crystalline samples labeled Salt A and Salt B. When dilute sodium hydroxide solution is added dropwise to an aqueous solution of Salt A, a dirty green gelatinous precipitate forms, which is insoluble in excess NaOH; upon standing exposed to air for 15 minutes, the top layer of the dirty green precipitate turns reddish-brown. When NaOH is added to an aqueous solution of Salt B, an immediate reddish-brown precipitate forms that remains insoluble in excess NaOH.",
  "Which iron cations are present in Salt A and Salt B, and what causes the dirty green precipitate in Salt A to turn reddish-brown?",
  "Salt A contains Fe³⁺; Salt B contains Fe²⁺; turned brown by evaporation of water.",
  "Salt A contains Fe²⁺ (Iron(II)); Salt B contains Fe³⁺ (Iron(III)); dirty green Fe(OH)₂ is oxidised by atmospheric oxygen to reddish-brown hydrated Iron(III) hydroxide: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃.",
  "Both salts contain metallic iron; turned brown by rust falling from the ceiling.",
  "Salt A contains copper; Salt B contains zinc.",
  "B",
  "Iron(II) salts (ferrous, Fe²⁺) react with sodium hydroxide to form a dirty green precipitate of iron(II) hydroxide: FeSO₄ + 2NaOH → Fe(OH)₂↓(dirty green) + Na₂SO₄. Fe(OH)₂ is a basic hydroxide insoluble in excess alkali. When exposed to air, Fe²⁺ is readily oxidised by atmospheric oxygen to Fe³⁺, converting dirty green Fe(OH)₂ into reddish-brown iron(III) hydroxide (Fe(OH)₃). Salt B contains iron(III) (ferric, Fe³⁺), which precipitates directly as reddish-brown Fe(OH)₃: FeCl₃ + 3NaOH → Fe(OH)₃↓(reddish-brown) + 3NaCl."
));

cases.push(makeChemCase(
  chapter, 2, "Action of Excess Ammonium Hydroxide on Copper(II) Salts", "Deep Inky-Blue Tetraamminecopper(II) Complex Formation",
  "A high school student adds dilute ammonium hydroxide (NH₄OH) dropwise to a bright blue solution of Copper(II) sulphate. A pale blue precipitate of Copper(II) hydroxide forms initially. When the student continues adding ammonium hydroxide in excess, the pale blue precipitate dissolves completely, transforming into a magnificent, clear, deeply intense inky-blue solution.",
  "What is the chemical identity of the soluble inky-blue species formed in excess ammonium hydroxide?",
  "Copper metal dissolved in nitric acid.",
  "Tetraamminecopper(II) sulphate complex, [Cu(NH₃)₄]SO₄, formed by coordinate covalent bonding between copper(II) ions and neutral ammonia ligands: Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → [Cu(NH₃)₄]SO₄ + 4H₂O.",
  "Copper(II) nitrate precipitate.",
  "Anhydrous copper sulphate crystals suspended in alcohol.",
  "B",
  "When NH₄OH is added dropwise to CuSO₄, it initially precipitates pale blue copper(II) hydroxide: CuSO₄ + 2NH₄OH → Cu(OH)₂↓(pale blue) + (NH₄)₂SO₄. When excess NH₄OH is added, the basic hydroxide dissolves due to coordination complex formation: Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₄OH → [Cu(NH₃)₄]SO₄ + 4H₂O. The unshared lone pairs on four ammonia molecules coordinate to the Cu²⁺ ion, forming the soluble square-planar tetraamminecopper(II) cation [Cu(NH₃)₄]²⁺, which exhibits an intense inky-blue/deep azure color."
));

cases.push(makeChemCase(
  chapter, 3, "Action of Excess $NaOH$ on Zinc Salts vs Lead Salts", "Amphoteric Hydroxide Dissolution in Strong Alkali",
  "In a qualitative analysis examination, a student is given two test tubes containing white precipitates:\nTest Tube 1: Gelatinous white precipitate of Zinc hydroxide, Zn(OH)₂\nTest Tube 2: Chalky white precipitate of Lead(II) hydroxide, Pb(OH)₂\nWhen excess sodium hydroxide solution is added to both test tubes, BOTH precipitates dissolve completely to form clear, colorless solutions.",
  "Why do both Zinc hydroxide and Lead(II) hydroxide dissolve in excess sodium hydroxide, and what soluble salts are formed?",
  "Both hydroxides are neutral organic substances that dissolve in water.",
  "Both Zn(OH)₂ and Pb(OH)₂ are amphoteric hydroxides that react with excess strong alkali to form soluble complex salts: Sodium Zincate (Na₂ZnO₂) and Sodium Plumbite (Na₂PbO₂).",
  "Both hydroxides decompose into flammable hydrogen gas and steam.",
  "Excess sodium hydroxide turns zinc and lead into liquid metals.",
  "B",
  "Zinc and Lead are amphoteric metals whose hydroxides possess dual acidic and basic properties. When treated with excess strong alkali (NaOH), they behave as acids, neutralizing the alkali to form soluble oxy-salts and water: Zn(OH)₂ + 2NaOH → Na₂ZnO₂ (sodium zincate) + 2H₂O; and Pb(OH)₂ + 2NaOH → Na₂PbO₂ (sodium plumbite) + 2H₂O. The dissolution of both white precipitates in excess NaOH confirms their amphoteric character."
));

cases.push(makeChemCase(
  chapter, 4, "Definitive Distinction Between $Zn^{2+}$ and $Pb^{2+}$ Using Excess $NH_4OH$", "Differential Solubility in Weak vs Strong Alkalis",
  "Because both Zn²⁺ and Pb²⁺ give white precipitates with NaOH that dissolve in excess, a student cannot distinguish them using sodium hydroxide alone. The teacher instructs the student to test separate fresh solutions of the two metal salts with dilute Ammonium Hydroxide (NH₄OH) dropwise and then in excess.",
  "How does the reaction with excess ammonium hydroxide definitively distinguish Zinc ions from Lead(II) ions?",
  "Lead ions produce a green solution while zinc ions explode.",
  "Both produce white precipitates initially, but with excess NH₄OH, Zinc hydroxide dissolves completely to form the soluble [Zn(NH₃)₄]²⁺ complex, whereas Lead(II) hydroxide remains completely INSOLUBLE in excess NH₄OH.",
  "Zinc hydroxide turns into black zinc oxide with excess NH₄OH.",
  "Lead ions do not react with ammonium hydroxide at all.",
  "B",
  "This is the premier ICSE analytical distinction between Zn²⁺ and Pb²⁺. With NH₄OH: ZnSO₄ + 2NH₄OH → Zn(OH)₂↓(gelatinous white) + (NH₄)₂SO₄. In excess NH₄OH, Zn(OH)₂ dissolves due to complexation: Zn(OH)₂ + 4NH₄OH → [Zn(NH₃)₄](OH)₂ + 4H₂O (forms soluble tetraamminezinc(II) hydroxide). With Lead salts: Pb(NO₃)₂ + 2NH₄OH → Pb(OH)₂↓(chalky white) + 2NH₄NO₃. However, Lead cannot form an ammine complex; Pb(OH)₂ remains completely INSOLUBLE in excess NH₄OH."
));

cases.push(makeChemCase(
  chapter, 5, "Distinction Between $Zn^{2+}$ and $Al^{3+}$ Using Excess $NH_4OH$", "Ammine Complexation vs Insoluble Hydroxide",
  "A technician has two unlabelled bottles of white powders: Zinc sulphate (ZnSO₄) and Aluminium sulphate (Al₂(SO₄)₃). Both salts give gelatinous white precipitates with sodium hydroxide that dissolve in excess NaOH to form colorless zincate and aluminate solutions.",
  "What visual observation upon adding excess ammonium hydroxide (NH₄OH) allows the technician to distinguish Zinc sulphate from Aluminium sulphate?",
  "Aluminium sulphate turns bright red with ammonium hydroxide.",
  "With excess NH₄OH, the gelatinous white precipitate of Zinc hydroxide dissolves completely to give a clear colorless solution, whereas the gelatinous white precipitate of Aluminium hydroxide remains completely INSOLUBLE in excess NH₄OH.",
  "Zinc sulphate precipitates yellow crystals in excess NH₄OH.",
  "Both precipitates remain insoluble in excess ammonium hydroxide.",
  "B",
  "Both Zn²⁺ and Al³⁺ are amphoteric and form white gelatinous precipitates with NaOH that dissolve in excess NaOH (forming Na₂ZnO₂ and NaAlO₂). However, with ammonium hydroxide: Al₂(SO₄)₃ + 6NH₄OH → 2Al(OH)₃↓(white gelatinous) + 3(NH₄)₂SO₄. Al(OH)₃ is completely insoluble in excess NH₄OH because NH₄OH is a weak base with insufficient OH⁻ to dissolve it, and Al³⁺ cannot form an ammine complex. In contrast, Zn(OH)₂ dissolves readily in excess NH₄OH to form the soluble [Zn(NH₃)₄]²⁺ coordination complex."
));

cases.push(makeChemCase(
  chapter, 6, "Action of Alkalis on Calcium Salts: Why $NH_4OH$ Gives No Precipitate", "Solubility Product ($K_{sp}$) Threshold in Weak vs Strong Alkalis",
  "A student adds sodium hydroxide solution to an aqueous solution of Calcium chloride; a white precipitate of Calcium hydroxide forms, which is sparingly soluble in excess NaOH. However, when the student adds ammonium hydroxide (NH₄OH) dropwise and in large excess to a separate portion of Calcium chloride solution, NO precipitate forms whatsoever.",
  "Why does Sodium Hydroxide precipitate Calcium hydroxide, while Ammonium Hydroxide produces zero precipitation with calcium salts?",
  "Ammonium hydroxide destroys calcium ions by nuclear transmutation.",
  "Ammonium hydroxide is a weak base with a very low degree of ionisation; the concentration of OH⁻ ions it provides is too low for the ionic product [Ca²⁺][OH⁻]² to exceed the relatively high solubility product (K_sp = 5.5 × 10⁻⁶) of Ca(OH)₂.",
  "Calcium chloride is insoluble in pure sodium hydroxide.",
  "Sodium hydroxide is an acid that neutralizes calcium salts.",
  "B",
  "Precipitation occurs only when the ionic product of the constituent ions exceeds the solubility product (K_sp). Calcium hydroxide, Ca(OH)₂, has a relatively high K_sp (~5.5 × 10⁻⁶). Sodium hydroxide is a strong base (100% ionised) that provides a massive concentration of OH⁻, easily driving the ionic product [Ca²⁺][OH⁻]² above K_sp and causing precipitation. Ammonium hydroxide is a weak base (partially ionised); its low [OH⁻] is insufficient to exceed K_sp of Ca(OH)₂, resulting in zero precipitation."
));

cases.push(makeChemCase(
  chapter, 7, "Action of Alkalis on Ammonium Salts: Identification of Ammonia Gas", "Displacement of Volatile Base by Non-Volatile Alkali",
  "A student heats a mixture of solid Ammonium Chloride (NH₄Cl) and solid Calcium Hydroxide (slaked lime, Ca(OH)₂) in a dry test tube. A colorless gas with a pungent, choking, suffocating odor is evolved. When a glass rod dipped in concentrated hydrochloric acid is held at the mouth of the tube, dense, choking white fumes billow out immediately.",
  "What is the identity of the evolved gas, and what chemical compound constitutes the dense white fumes?",
  "Hydrogen gas; fumes are liquid water droplets.",
  "Ammonia gas (NH₃); fumes are fine suspended particles of solid Ammonium Chloride (NH₄Cl) formed by the gas-phase reaction: NH₃(g) + HCl(g) → NH₄Cl(s).",
  "Chlorine gas; fumes are liquid bleaching powder.",
  "Carbon dioxide gas; fumes are dry ice snow.",
  "B",
  "When any ammonium salt is heated with an alkali (NaOH, KOH, or Ca(OH)₂), the volatile base ammonia is liberated: 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃↑. Ammonia is a pungent, alkaline gas that turns moist red litmus blue. The classic confirmatory test is bringing a glass rod dipped in concentrated hydrochloric acid near the gas: ammonia gas reacts with HCl gas vaporizing from the rod to produce tiny crystalline solid particles of ammonium chloride: NH₃(g) + HCl(g) → NH₄Cl(s), appearing as dense white fumes."
));

cases.push(makeChemCase(
  chapter, 8, "Nessler's Reagent Test for Ammonia / Ammonium Ions", "Alkaline Potassium Tetraiodomercurate(II) and Millon's Base",
  "An environmental quality inspector tests industrial wastewater for traces of toxic dissolved ammonia. A few drops of Nessler's Reagent (an alkaline solution of Potassium tetraiodomercurate(II), K₂[HgI₄], containing KOH) are added to the test sample. Instantly, an intense brown coloration and a dark brown precipitate form even at parts-per-million ammonia concentration.",
  "What is the chemical name and identity of the dark brown precipitate formed in Nessler's test for ammonia?",
  "Mercuric chloride precipitate.",
  "Iodide of Millon's base (chemically: amino-mercuric iodide, H₂N–Hg–O–Hg–I), formed by the reaction of Nessler's reagent with trace ammonia.",
  "Solid elemental iodine crystals.",
  "Potassium metal foil.",
  "B",
  "Nessler's reagent is a highly sensitive qualitative test for ammonia and ammonium salts. It consists of an alkaline solution of potassium tetraiodomercurate(II): 2K₂[HgI₄] + 3KOH + NH₃ → H₂N–Hg–O–Hg–I↓(brown precipitate of iodide of Millon's base) + 7KI + 2H₂O. The formation of a pale yellow/brown coloration (at trace levels) or a distinct chocolate-brown precipitate confirms the presence of ammonia."
));

cases.push(makeChemCase(
  chapter, 9, "Action of Hot Concentrated $NaOH$ on Aluminium Metal Powder", "Aluminate Formation and Vigorous Hydrogen Gas Liberation",
  "In a chemistry demonstration of amphoteric reactivity, a teacher adds aluminium foil scraps to a test tube containing concentrated Sodium Hydroxide solution. The mixture is heated gently. Within 30 seconds, a violent reaction takes place: the aluminium dissolves with furious effervescence, and the evolved gas burns with a sharp 'pop' sound when tested with a lighted taper.",
  "What is the balanced equation for this reaction, and what soluble salt is formed in solution?",
  "Al + NaOH → NaAl + OH + H₂",
  "2Al + 2NaOH + 2H₂O → 2NaAlO₂ (Sodium meta-aluminate) + 3H₂↑; soluble sodium meta-aluminate is formed.",
  "Al + 3NaOH → Al(OH)₃ + 3Na",
  "Aluminium does not react with sodium hydroxide.",
  "B",
  "Aluminium is an amphoteric metal that reacts with boiling concentrated sodium hydroxide to produce soluble sodium meta-aluminate and hydrogen gas: 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑ (or formulated as sodium tetrahydroxoaluminate, Na[Al(OH)₄]). The reaction is highly exothermic and demonstrates the acidic behavior of amphoteric aluminium in the presence of a strong base."
));

cases.push(makeChemCase(
  chapter, 10, "Potassium Iodide ($KI$) Test: Distinguishing $Pb^{2+}$ from $Al^{3+}$ and $Zn^{2+}$", "Brilliant Golden-Yellow Lead Iodide Precipitation",
  "A student must distinguish between solutions of Lead Nitrate (Pb(NO₃)₂) and Zinc Nitrate (Zn(NO₃)₂). Both give white precipitates with sodium hydroxide that dissolve in excess. The student adds a few drops of Potassium Iodide (KI) solution to both test tubes. Test Tube A remains clear and colorless. Test Tube B instantly produces a magnificent, brilliant canary-yellow precipitate.",
  "What is the identity of the yellow precipitate in Test Tube B, and what happens when the mixture is boiled and then cooled?",
  "Zinc iodide; it decomposes into purple iodine gas upon boiling.",
  "Lead(II) iodide (PbI₂); it dissolves in boiling water to form a clear colorless solution, and recrystallizes on cooling as sparkling golden spangles ('Golden Rain').",
  "Potassium nitrate crystals that melt when boiled.",
  "Elemental lead metal powder.",
  "B",
  "The addition of potassium iodide provides a definitive distinction: Pb(NO₃)₂ + 2KI → PbI₂↓(brilliant yellow precipitate) + 2KNO₃. Zinc iodide (ZnI₂) is highly soluble in water, so zinc salts produce no precipitate with KI. Furthermore, PbI₂ has a unique physical property: it is sparingly soluble in cold water, but dissolves readily in boiling water; upon cooling under a cold water tap, it crystallizes out as glistening golden-yellow hexagonal flakes, a famous demonstration known as 'Golden Rain'."
));

cases.push(makeChemCase(
  chapter, 11, "Potassium Ferrocyanide Test for Iron: Prussian Blue Formation", "Complexation of Iron(III) with Hexacyanoferrate(II)",
  "A chemical pathologist tests an unknown iron tonic solution to verify if iron is present as Iron(II) (ferrous) or Iron(III) (ferric). When Potassium Ferrocyanide solution (K₄[Fe(CN)₆]) is added to the tonic, an intensely deep, dark navy-blue precipitate known as 'Prussian Blue' forms instantly.",
  "Which iron ion is confirmed by the formation of Prussian Blue, and what is the chemical formula of Prussian Blue?",
  "Iron(II) ion (Fe²⁺); formula is Fe[Fe(CN)₆].",
  "Iron(III) ion (Fe³⁺); formula is Fe₄[Fe(CN)₆]₃ (Iron(III) hexacyanoferrate(II)).",
  "Metallic iron atoms; formula is Fe(CN)₂.",
  "Iron(III) oxide; formula is Fe₂O₃.",
  "B",
  "The reaction of ferric ions (Fe³⁺) with potassium ferrocyanide (potassium hexacyanoferrate(II)) produces the insoluble, intensely deep-blue pigment Prussian Blue: 4FeCl₃ + 3K₄[Fe(CN)₆] → Fe₄[Fe(CN)₆]₃↓(Prussian Blue) + 12KCl. Ferrous ions (Fe²⁺) react with potassium ferrocyanide to produce only a pale bluish-white precipitate of K₂Fe[Fe(CN)₆] that turns blue only upon prolonged aerial oxidation. Thus, instant Prussian blue formation confirms Fe³⁺."
));

cases.push(makeChemCase(
  chapter, 12, "Potassium Ferricyanide Test for Iron: Turnbull's Blue Formation", "Complexation of Iron(II) with Hexacyanoferrate(III)",
  "In a complementary test, the pathologist adds Potassium Ferricyanide solution (K₃[Fe(CN)₆]) to a sample containing Iron(II) sulphate (FeSO₄). An immediate, brilliant deep dark-blue precipitate known as 'Turnbull's Blue' separates out.",
  "What is the chemical reaction between Iron(II) ions and Potassium Ferricyanide?",
  "3FeSO₄ + 2K₃[Fe(CN)₆] → Fe₃[Fe(CN)₆]₂↓(Turnbull's Blue) + 3K₂SO₄.",
  "FeSO₄ + K₃[Fe(CN)₆] → Fe[Fe(CN)₆] + K₂SO₄.",
  "Iron(II) reduces potassium ferricyanide to metallic potassium.",
  "No reaction occurs because both compounds are salts of iron.",
  "A",
  "Ferrous ions (Fe²⁺) react specifically with potassium ferricyanide (potassium hexacyanoferrate(III)) to produce a deep blue precipitate known as Turnbull's Blue: 3FeSO₄ + 2K₃[Fe(CN)₆] → Fe₃[Fe(CN)₆]₂↓(Turnbull's Blue) + 3K₂SO₄. Modern crystallographic studies show that Prussian Blue and Turnbull's Blue are structurally identical mixed-valence coordination networks (Fe³⁺-CN-Fe²⁺), but the test protocol specifically distinguishes Fe²⁺ from Fe³⁺ in classical wet analysis."
));

cases.push(makeChemCase(
  chapter, 13, "Potassium Thiocyanate ($KSCN$) Test for Iron(III)", "Blood-Red Pentaaquathiocyanatoiron(III) Complex",
  "A forensics investigator tests a dried stain suspected of containing blood. After extracting with dilute acid, a single drop of Potassium Thiocyanate (KSCN) solution is added. Instantly, the solution turns an intensely shocking, deep blood-red color.",
  "What chemical species causes the blood-red coloration when KSCN reacts with Iron(III) ions?",
  "Solid red iron rust (Fe₂O₃).",
  "The soluble coordination complex ion pentaaquathiocyanatoiron(III), [Fe(SCN)(H₂O)₅]²⁺ (or [Fe(SCN)]²⁺), formed by the coordinate bonding of thiocyanate to Fe³⁺.",
  "Potassium sulphide precipitate.",
  "Cyanide gas dissolved in water.",
  "B",
  "The thiocyanate test is an extraordinarily sensitive qualitative confirmation for iron(III) ions (detectable down to micromolar concentrations). Fe³⁺ ions react with thiocyanate ions (SCN⁻) to form a series of intensely colored blood-red coordination complexes: Fe³⁺(aq) + SCN⁻(aq) ⇌ [Fe(SCN)]²⁺(aq) (blood-red). Iron(II) ions (Fe²⁺) do not react with KSCN and produce zero color change, providing an instant distinction between ferrous and ferric oxidation states."
));

cases.push(makeChemCase(
  chapter, 14, "Flame Test: Why Concentrated $HCl$ and Platinum Wire Are Used", "Volatile Chloride Formation and Wire Inertness",
  "An analytical technician performs a flame test to detect metal cations. The protocol specifies:\nStep 1: Clean a platinum wire loop by dipping it in concentrated hydrochloric acid and heating in a Bunsen flame until it imparts no color.\nStep 2: Moisten the clean wire in conc. HCl, touch the unknown salt, and hold it in the non-luminous flame.",
  "Why is concentrated Hydrochloric acid used to make the paste, and why must the wire be made of Platinum?",
  "Concentrated HCl destroys all radioactive isotopes; platinum is the cheapest available metal.",
  "Concentrated HCl converts metal salts into volatile metal chlorides that vaporize easily in the non-luminous flame; Platinum is used because it has a very high melting point, is chemically inert, and imparts zero color of its own to the flame.",
  "Concentrated HCl acts as a fuel that ignites the flame; platinum conducts electricity to create a spark.",
  "Hydrochloric acid bleaches the salt so that only visible light is emitted.",
  "B",
  "Metal chlorides are significantly more volatile than metal sulphates, nitrates, or oxides because of their lower lattice energies. Treating the solid salt with concentrated HCl converts it into the metal chloride on the wire loop: Salt + HCl → Metal Chloride + Acid. In the high-temperature non-luminous zone of the Bunsen flame, volatile metal chlorides vaporize and dissociate into gaseous atoms/ions whose valence electrons are thermally excited. Platinum is chosen because it is noble, non-reactive, has a melting point of 1768°C, and imparts no color to the flame."
));

cases.push(makeChemCase(
  chapter, 15, "Flame Test Colors: Cation Identification", "Characteristic Optical Emissions in Bunsen Flame",
  "A chemistry student performs flame tests on three unlabelled pure solid salts using a clean platinum wire and concentrated HCl:\nSalt 1 produces an intense, persistent golden-yellow flame.\nSalt 2 produces a delicate lilac flame that appears crimson-violet when viewed through blue cobalt glass.\nSalt 3 produces a vivid brick-red flame.",
  "Which metal cations are definitively identified in Salt 1, Salt 2, and Salt 3?",
  "Salt 1 = Copper (Cu²⁺); Salt 2 = Barium (Ba²⁺); Salt 3 = Sodium (Na⁺)",
  "Salt 1 = Sodium (Na⁺); Salt 2 = Potassium (K⁺); Salt 3 = Calcium (Ca²⁺)",
  "Salt 1 = Lead (Pb²⁺); Salt 2 = Iron (Fe²⁺); Salt 3 = Zinc (Zn²⁺)",
  "Salt 1 = Magnesium (Mg²⁺); Salt 2 = Aluminium (Al³⁺); Salt 3 = Silver (Ag⁺)",
  "B",
  "Characteristic flame test colors for ICSE Class 10:\n1. Sodium (Na⁺): persistent, blinding golden-yellow flame (589 nm D-line emission).\n2. Potassium (K⁺): delicate lilac/pale violet flame; when viewed through cobalt blue glass (which absorbs yellow sodium glare), it appears crimson-violet.\n3. Calcium (Ca²⁺): distinctive brick-red flame.\n4. Copper (Cu²⁺): brilliant peacock blue / blue-green flame.\n5. Barium (Ba²⁺): apple-green flame."
));

cases.push(makeChemCase(
  chapter, 16, "Thermal Decomposition of Copper(II) Hydroxide Precipitate", "Black Copper(II) Oxide Conversion Upon Boiling",
  "A student precipitates pale blue Copper(II) hydroxide by adding sodium hydroxide to copper(II) sulphate solution in a boiling tube: CuSO₄ + 2NaOH → Cu(OH)₂↓(pale blue) + Na₂SO₄. The student then boils the test tube contents over a Bunsen burner flame for 60 seconds.",
  "What visible change occurs upon boiling the pale blue suspension, and what chemical reaction takes place?",
  "The pale blue precipitate dissolves to form a clear colorless solution.",
  "The pale blue precipitate decomposes into a dense black precipitate of Copper(II) oxide (CuO) and steam: Cu(OH)₂ → CuO(black) + H₂O.",
  "The precipitate turns bright yellow due to copper iodide formation.",
  "The precipitate boils away into purple iodine gas.",
  "B",
  "Copper(II) hydroxide, Cu(OH)₂, is thermally unstable. When an aqueous suspension of pale blue copper(II) hydroxide is heated to near boiling point (~80°C–100°C), it readily undergoes thermal dehydration: Cu(OH)₂(s)(pale blue) xrightarrow{Δ} CuO(s)(black) + H₂O(l). The blue gelatinous solid transforms into fine black granules of copper(II) oxide. This test is a classic confirmatory observation for copper salts in analytical chemistry."
));

cases.push(makeChemCase(
  chapter, 17, "Action of Alkalis on Magnesium Salts vs Calcium Salts", "Insolubility of Magnesium Hydroxide in Excess Alkalis",
  "An analyst tests a solution of Magnesium sulphate (MgSO₄) by adding sodium hydroxide solution dropwise and in excess. A dull white precipitate of Magnesium hydroxide (Mg(OH)₂) forms. When excess NaOH is added, the precipitate remains completely insoluble. When tested with excess ammonium hydroxide, the precipitate also remains completely insoluble.",
  "Why is Magnesium hydroxide completely insoluble in excess sodium hydroxide, unlike Zinc or Lead hydroxides?",
  "Magnesium is a noble gas that does not react with water.",
  "Magnesium hydroxide, Mg(OH)₂, is purely a basic hydroxide with zero amphoteric character; it cannot react with bases or excess hydroxide ions to form soluble complex salts.",
  "Magnesium hydroxide dissolves into white gas that escapes the tube.",
  "Magnesium chloride forms a protective diamond coating.",
  "B",
  "Amphoteric hydroxides like Zn(OH)₂, Al(OH)₃, and Pb(OH)₂ dissolve in excess sodium hydroxide because they can act as acids, forming soluble zincates, aluminates, and plumbites. Magnesium hydroxide, Mg(OH)₂, is an alkaline earth hydroxide that is purely basic. It has no amphoteric character whatsoever and cannot react with or dissolve in excess strong alkali (NaOH) or weak alkali (NH₄OH). Thus, dull white Mg(OH)₂ remains stubbornly insoluble in excess alkali."
));

cases.push(makeChemCase(
  chapter, 18, "Nitrate Radical Identification: The Brown Ring Test", "Formation of Nitroso Iron(II) Sulphate Complex",
  "In an ICSE chemistry practical, a student performs the Brown Ring Test for a Nitrate salt:\nStep 1: To an aqueous solution of Potassium Nitrate (KNO₃), freshly prepared Iron(II) sulphate (FeSO₄) solution is added.\nStep 2: Concentrated Sulphuric acid (H₂SO₄) is slowly and carefully poured down the inclined inner side of the test tube without shaking.",
  "What visible observation confirms the presence of the nitrate ion, and what is the chemical formula of the brown substance formed at the junction of the two liquids?",
  "A white precipitate of barium sulphate forms at the bottom.",
  "A distinct dark brown ring forms at the junction of the two liquid layers; its chemical formula is Nitroso iron(II) sulphate, [Fe(H₂O)₅(NO)]SO₄ (or FeSO₄·NO).",
  "A brown gas explodes with a pop sound.",
  "The entire solution turns yellow with no ring formation.",
  "B",
  "The Brown Ring test is the definitive test for nitrates (NO₃⁻). When concentrated H₂SO₄ (dense liquid) is poured down the side, it forms a lower layer beneath the aqueous solution. At the interface, concentrated H₂SO₄ reacts with nitrate to produce nitric oxide (NO): 6FeSO₄ + 3H₂SO₄ + 2HNO₃ → 3Fe₂(SO₄)₃ + 4H₂O + 2NO. The nitric oxide gas reacts immediately with excess unoxidised ferrous sulphate to form the dark brown coordination complex: FeSO₄ + NO + 5H₂O → [Fe(H₂O)₅(NO)]SO₄. Shaking destroys the ring because the heat of dilution decomposes the fragile complex."
));

cases.push(makeChemCase(
  chapter, 19, "Why Freshly Prepared $FeSO_4$ Must Be Used in the Brown Ring Test", "Atmospheric Oxidation of Ferrous to Ferric Ions",
  "A student attempts the Brown Ring Test using a bottle of Iron(II) sulphate solution that has been sitting open on the shelf for six months. The solution has turned rusty yellow-brown. When the student adds concentrated sulphuric acid, no brown ring forms at the interface.",
  "Why must freshly prepared Iron(II) sulphate solution always be used for the Brown Ring Test?",
  "Old iron(II) sulphate evaporates into air.",
  "On standing, aqueous Fe²⁺ ions are spontaneously oxidised by dissolved atmospheric oxygen into Fe³⁺ (ferric) ions; ferric ions cannot reduce nitrate to nitric oxide (NO) and cannot form the brown nitroso complex.",
  "Old iron sulphate turns into hydrochloric acid.",
  "Concentrated sulphuric acid only reacts with iron metal.",
  "B",
  "Ferrous sulphate in aqueous solution is thermodynamically prone to aerial oxidation: 4FeSO₄ + O₂ + 2H₂O → 4Fe(OH)SO₄ (basic ferric sulphate, rusty yellow-brown). In the Brown Ring test, Fe²⁺ is required to act as a reducing agent (reducing NO₃⁻ to NO) and as a complexing cation (binding NO to form [Fe(H₂O)₅(NO)]²⁺). If the solution has already oxidised to Fe³⁺, no reduction can occur and no brown ring can form. Hence, freshly prepared crystals of FeSO₄ must be dissolved immediately prior to the test."
));

cases.push(makeChemCase(
  chapter, 20, "Identification of Sulphate ($SO_4^{2-}$) vs Sulphite ($SO_3^{2-}$) Using $BaCl_2$", "Insolubility in Dilute Hydrochloric Acid",
  "A chemist tests two unlabelled solutions containing sodium salts:\nTest: Barium chloride solution (BaCl₂) is added to both solutions. Both yield a dense white precipitate.\nConfirmatory Step: Dilute hydrochloric acid is added to both white precipitates.\nResult: Precipitate in Tube 1 dissolves completely with effervescence of a gas with burning sulphur odor. Precipitate in Tube 2 remains completely INSOLUBLE even on boiling.",
  "Which acid radical is present in Tube 1 and Tube 2?",
  "Tube 1 contains Sulphate; Tube 2 contains Sulphite.",
  "Tube 1 contains Sulphite (SO₃²⁻, forms BaSO₃ which dissolves in HCl releasing SO₂); Tube 2 contains Sulphate (SO₄²⁻, forms BaSO₄ which is completely insoluble in dilute HCl).",
  "Both tubes contain carbonate ions.",
  "Neither tube contains sulphur compounds.",
  "B",
  "Barium chloride reacts with both sulphite and sulphate to form white precipitates: Na₂SO₃ + BaCl₂ → BaSO₃↓(white) + 2NaCl; Na₂SO₄ + BaCl₂ → BaSO₄↓(white) + 2NaCl. However, Barium Sulphite dissolves readily in dilute hydrochloric acid with effervescence of SO₂: BaSO₃ + 2HCl → BaCl₂ + H₂O + SO₂↑. In contrast, Barium Sulphate (BaSO₄) is completely insoluble in dilute mineral acids (HCl, HNO₃) due to its extremely low solubility product, remaining as a permanent white precipitate."
));

cases.push(makeChemCase(
  chapter, 21, "Identification of Chloride ($Cl^-$) Ion Using Silver Nitrate ($AgNO_3$)", "Curdy White Precipitate Soluble in Ammonium Hydroxide",
  "To detect a halide in a clear solution, an analyst adds dilute Nitric acid followed by Silver Nitrate solution (AgNO₃). A curdy white precipitate forms immediately. When the analyst adds excess dilute Ammonium Hydroxide solution, the curdy white precipitate dissolves completely to yield a clear, transparent solution.",
  "What is the identity of the white precipitate, and why does it dissolve in ammonium hydroxide?",
  "White precipitate is Lead chloride; dissolves by thermal boiling.",
  "White precipitate is Silver Chloride (AgCl); it dissolves in ammonium hydroxide by forming the soluble coordination complex diamminesilver(I) chloride: AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O.",
  "White precipitate is Silver oxide; dissolves by reduction to silver.",
  "White precipitate is Calcium carbonate; dissolves by effervescence.",
  "B",
  "The addition of silver nitrate to a solution containing chloride ions precipitates insoluble silver chloride: NaCl + AgNO₃ → AgCl↓(curdy white) + NaNO₃. AgCl is completely insoluble in dilute nitric acid, confirming it is not carbonate or sulphite. When excess ammonium hydroxide is added, the Ag⁺ ion complexes with two neutral ammonia ligands, shifting the dissolution equilibrium: AgCl(s) + 2NH₄OH(aq) → [Ag(NH₃)₂]Cl(aq) + 2H₂O. The soluble diamminesilver(I) complex ion dissolves the precipitate completely."
));

cases.push(makeChemCase(
  chapter, 22, "Gas Identification: Chlorine ($Cl_2$) Gas Reactions", "Greenish-Yellow Color, Bleaching Action, and Starch-Iodide Paper",
  "During an oxidation reaction in a fume hood, a suffocating, greenish-yellow gas with an irritating, choking odor is evolved. A student tests the gas with two separate reagent papers:\nTest 1: Moist blue litmus paper turns red momentarily, and then turns completely bleached white.\nTest 2: Moist starch-iodide paper turns an intense, deep blue-black.",
  "What is the identity of the gas, and what chemical reaction turns the starch-iodide paper blue-black?",
  "Sulphur dioxide; SO₂ oxidises starch to blue sugar.",
  "Chlorine gas (Cl₂); chlorine oxidises iodide ions (I⁻) to elemental iodine (I₂), which forms an intense blue-black inclusion complex with starch: Cl₂ + 2KI → 2KCl + I₂.",
  "Nitrogen dioxide; NO₂ forms blue copper nitrate on the paper.",
  "Hydrogen chloride; HCl dissolves starch into liquid ink.",
  "B",
  "Chlorine (Cl₂) is a greenish-yellow gas with a choking odor. Its reactions are: (1) Bleaching action: Cl₂ dissolves in moisture to form hydrochloric and hypochlorous acids (Cl₂ + H₂O → HCl + HOCl). Acidic HCl turns blue litmus red; unstable HOCl decomposes to release nascent oxygen (HOCl → HCl + [O]), which bleaches the litmus dye to white. (2) Starch-iodide test: Chlorine is a stronger oxidising agent than iodine; it displaces I⁻ to form free iodine (Cl₂ + 2KI → 2KCl + I₂). Free iodine reacts with starch helices to form an intensely colored deep blue-black complex."
));

cases.push(makeChemCase(
  chapter, 23, "Gas Identification: Sulphur Dioxide ($SO_2$) vs Carbon Dioxide ($CO_2$)", "Acidified $KMnO_4$ and $K_2Cr_2O_7$ Decolorization",
  "A chemical technician needs to confirm whether a gas evolving from an unknown reaction is Sulphur Dioxide (SO₂) or Carbon Dioxide (CO₂). Both gases are colorless, denser than air, non-flammable, and turn lime water milky.",
  "Which chemical reagent test definitively confirms Sulphur Dioxide and rules out Carbon Dioxide?",
  "Testing with a burning wooden splinter.",
  "Bubbling through acidified Potassium Permanganate (KMnO₄) solution; SO₂ decolorizes purple KMnO₄ to clear colorless (or turns orange K₂Cr₂O₇ to green), whereas CO₂ produces zero color change.",
  "Measuring the gas temperature with a mercury thermometer.",
  "Bubbling through pure distilled water.",
  "B",
  "Because both CO₂ and SO₂ turn lime water milky (forming CaCO₃ and CaSO₃ precipitates), lime water cannot distinguish them. However, Sulphur dioxide is a powerful reducing agent (S = +4 can be oxidised to +6), whereas Carbon dioxide is in its maximum oxidation state (C = +4) and cannot be oxidised further. Acidified potassium permanganate is an intense purple oxidizer; SO₂ reduces MnO₄⁻ (purple, Mn⁷⁺) to Mn²⁺ (colorless): 2KMnO₄ + 2H₂O + 5SO₂ → K₂SO₄ + 2MnSO₄ + 2H₂SO₄. CO₂ produces no reaction."
));

cases.push(makeChemCase(
  chapter, 24, "Gas Identification: Nitrogen Dioxide ($NO_2$) Brown Fumes", "Acidified Ferrous Sulphate and Potassium Iodide Paper",
  "When concentrated nitric acid is heated with copper turnings, dense reddish-brown fumes are evolved that fill the gas jar. A student holds a moist potassium iodide-starch paper at the mouth of the jar, which turns deep blue-black. Furthermore, when the gas is bubbled into cold acidified Iron(II) sulphate solution, the solution turns dark brown.",
  "What is the identity of the reddish-brown gas?",
  "Bromine vapor (Br₂).",
  "Nitrogen Dioxide gas (NO₂).",
  "Chromyl chloride vapor (CrO₂Cl₂).",
  "Red phosphorus vapor.",
  "B",
  "Nitrogen dioxide (NO₂) is a heavy, pungent, reddish-brown gas formed by the reduction of concentrated nitric acid: Cu + 4HNO₃(conc) → Cu(NO₃)₂ + 2H₂O + 2NO₂↑. Being an oxidising agent, NO₂ oxidises iodide in starch-iodide paper to free iodine (turning it blue-black), and dissolves in cold ferrous sulphate solution to form the dark brown nitroso complex [Fe(H₂O)₅(NO)]SO₄. Bromine vapor is also reddish-brown, but bromine does not turn cold ferrous sulphate solution dark brown."
));

cases.push(makeChemCase(
  chapter, 25, "Gas Identification: Water Vapor ($H_2O$) Confirmatory Tests", "Anhydrous Copper(II) Sulphate and Cobalt Chloride Paper",
  "A condensation droplet collects on the neck of a reaction flask during the dehydration of an organic alcohol. An analyst confirms the droplet is pure water using two standard anhydrous chemical indicators.",
  "What color changes occur when water touches anhydrous Copper(II) sulphate and dry Cobalt(II) chloride paper?",
  "Anhydrous CuSO₄ turns from white to black; Cobalt chloride paper turns from green to yellow.",
  "Anhydrous Copper(II) sulphate turns from snowy white to brilliant blue; dry Cobalt(II) chloride paper turns from deep blue to pink.",
  "Both indicators turn bright red.",
  "Both indicators dissolve to produce flammable hydrogen gas.",
  "B",
  "The two classical qualitative tests for water (liquid or vapor) are:\n1. Anhydrous Copper(II) sulphate (CuSO₄): pure anhydrous CuSO₄ is a snowy white powder. When it contacts water, it rehydrates exothermically to form the pentahydrate CuSO₄·5H₂O, turning brilliant blue.\n2. Cobalt(II) chloride paper: filter paper impregnated with anhydrous CoCl₂ is deep blue. When exposed to water moisture, it forms the hydrated complex [Co(H₂O)₆]Cl₂, changing color from deep blue to bright pink."
));

cases.push(makeChemCase(
  chapter, 26, "Action of Alkalis on Lead Salts: Sodium Plumbite Formation", "Amphoteric Hydroxide Solubilisation in Hot $NaOH$",
  "A white precipitate of Lead(II) hydroxide (Pb(OH)₂) is prepared by mixing Lead(II) nitrate with sodium hydroxide solution. When excess concentrated sodium hydroxide is added and warmed, the white precipitate completely dissolves to form a clear, colorless solution.",
  "What is the balanced equation for the dissolution of Lead(II) hydroxide in excess sodium hydroxide?",
  "Pb(OH)₂ + 2NaOH → Na₂PbO₂ (Sodium plumbite) + 2H₂O",
  "Pb(OH)₂ + NaOH → Pb + Na₂O + H₂O",
  "Pb(OH)₂ + 4NaOH → Na₄Pb + 3H₂O + O₂",
  "Lead hydroxide does not dissolve in sodium hydroxide.",
  "A",
  "Lead(II) hydroxide is an amphoteric hydroxide. In the presence of excess strong base (NaOH), it acts as an acid: Pb(OH)₂(s) + 2NaOH(aq) → Na₂PbO₂(aq) (sodium plumbite) + 2H₂O(l) (or formulated as sodium tetrahydroxoplumbate(II), Na₂[Pb(OH)₄]). The dissolution confirms the amphoteric nature of lead(II) hydroxide."
));

cases.push(makeChemCase(
  chapter, 27, "Why Ammonium Hydroxide Cannot Dissolve Lead(II) Hydroxide", "Weak Base Dissociation and Lack of Ammine Complexation",
  "In an analytical laboratory test, a student observes that Lead(II) hydroxide dissolves completely in excess Sodium Hydroxide, but remains completely insoluble even when a large excess of concentrated Ammonium Hydroxide is added and heated.",
  "Why is Lead(II) hydroxide soluble in excess $NaOH$ but insoluble in excess $NH_4OH$?",
  "Sodium hydroxide is an acid while ammonium hydroxide is a base.",
  "NaOH is a strong base with high [OH⁻] that forces amphoteric Pb(OH)₂ into the soluble plumbite anion (PbO₂²⁻); NH₄OH is a weak, poorly ionised base with insufficient [OH⁻] to form plumbite, and Lead(II) ions do not form stable ammine coordination complexes with NH₃.",
  "Ammonium hydroxide precipitates lead as elemental lead metal.",
  "Lead hydroxide reacts with ammonium hydroxide to form explosive lead azide.",
  "B",
  "Two factors explain this fundamental ICSE distinction:\n1. Amphoteric dissolution to form plumbite requires a high concentration of free hydroxide ions (OH⁻). NaOH (strong electrolyte, 100% ionised) provides massive [OH⁻] to drive Pb(OH)₂ + 2OH⁻ → PbO₂²⁻ + 2H₂O. NH₄OH (weak electrolyte, <1% ionised) cannot supply enough OH⁻.\n2. Unlike Copper(II) and Zinc(II), which dissolve in excess NH₄OH by forming stable ammine complexes ([Cu(NH₃)₄]²⁺ and [Zn(NH₃)₄]²⁺), Lead(II) has no affinity for ammonia ligands and cannot form an ammine complex. Therefore, Pb(OH)₂ remains completely insoluble in excess NH₄OH."
));

cases.push(makeChemCase(
  chapter, 28, "Gas Identification: Hydrogen Sulphide ($H_2S$) Lead Acetate Test", "Insoluble Black Lead Sulphide Deposition",
  "During a mineral identification test, a geologist treats an unknown sulfide ore with dilute hydrochloric acid. A gas with a sickening rotten-egg odor is evolved. The geologist holds a filter paper strip moistened with Lead(II) acetate solution across the test tube mouth. Within three seconds, the paper turns a lustrous silvery-black.",
  "What chemical reaction turns the moist lead acetate paper black?",
  "(CH₃COO)₂Pb + H₂S → PbS↓(black) + 2CH₃COOH",
  "Pb + H₂S → PbS + H₂",
  "(CH₃COO)₂Pb + 2HCl → PbCl₂ + 2CH₃COOH",
  "Lead acetate reacts with air to form black carbon soot.",
  "A",
  "Hydrogen sulphide gas (H₂S) reacts with aqueous lead(II) acetate on the moistened test paper: (CH₃COO)₂Pb(aq) + H₂S(g) → PbS(s)↓(black) + 2CH₃COOH(aq). Insoluble Lead(II) sulphide (PbS) has an extremely low solubility product (K_sp ≈ 10⁻²⁸) and precipitates instantly on the cellulose fibers as an adherent, metallic-black film. This is the definitive confirmatory test for H₂S."
));

cases.push(makeChemCase(
  chapter, 29, "Action of Alkalis on Zinc Metal vs Zinc Oxide vs Zinc Hydroxide", "Common Product: Sodium Zincate ($Na_2ZnO_2$)",
  "A chemical manufacturer prepares Sodium Zincate (Na₂ZnO₂) solution using three different starting materials:\nBatch 1: Zinc metal granules (Zn)\nBatch 2: Zinc oxide powder (ZnO)\nBatch 3: Zinc hydroxide precipitate (Zn(OH)₂)\nEach starting material is heated with concentrated Sodium Hydroxide solution.",
  "What is the byproduct evolved in Batch 1 compared to Batch 2 and Batch 3?",
  "Batch 1 produces Oxygen gas; Batch 2 and 3 produce Chlorine gas.",
  "Batch 1 produces Hydrogen gas (Zn + 2NaOH → Na₂ZnO₂ + H₂↑); Batch 2 and Batch 3 produce Water only (ZnO + 2NaOH → Na₂ZnO₂ + H₂O; Zn(OH)₂ + 2NaOH → Na₂ZnO₂ + 2H₂O).",
  "Batch 1 produces Water; Batch 2 and 3 produce Hydrogen gas.",
  "All three batches produce identical amounts of hydrogen gas.",
  "B",
  "All three zinc species react with hot concentrated NaOH to yield the identical soluble salt, Sodium Zincate (Na₂ZnO₂). However, the byproduct differs:\n- From elemental metal: Zn + 2NaOH → Na₂ZnO₂ + H₂↑ (redox displacement, liberates flammable H₂ gas).\n- From basic/amphoteric oxide: ZnO + 2NaOH → Na₂ZnO₂ + H₂O (neutralization, yields water).\n- From amphoteric hydroxide: Zn(OH)₂ + 2NaOH → Na₂ZnO₂ + 2H₂O (neutralization, yields water)."
));

cases.push(makeChemCase(
  chapter, 30, "Distinguishing Aluminium Salts from Zinc Salts Using Flame Test", "Non-Volatile Non-Emission vs Colorless Flame",
  "A student wonders why a flame test cannot be used to distinguish Aluminium salts from Zinc salts in the laboratory.",
  "Why are flame tests useless for identifying Aluminium, Zinc, and Lead cations?",
  "Aluminium and zinc explode when heated in a Bunsen burner.",
  "Aluminium, Zinc, and Lead do not impart any characteristic color to the Bunsen burner flame because their valence electrons require excitation energies far higher than that provided by a simple thermal Bunsen flame.",
  "All three metals turn the flame pitch black.",
  "Flame tests can only be performed on liquid acids.",
  "B",
  "Flame tests rely on low ionisation energies and easily excitable valence electrons (as found in s-block Group 1 and Group 2 metals like Na, K, Ca, Ba, and Cu). Aluminium (Group 13), Zinc (Group 12), and Lead (Group 14) have tightly held valence electrons with large energy gaps (ΔE) that cannot be excited by the modest thermal energy (~1000°C–1500°C) of a non-luminous Bunsen burner flame. Hence, they impart no characteristic visible color to the flame and must be identified by wet precipitation reactions with NaOH and NH₄OH."
));

cases.push(makeChemCase(
  chapter, 31, "Action of Heat on White Zinc Oxide: Yellow When Hot, White When Cold", "Non-Stoichiometric Defect and Lattice Distortion",
  "A student heats a small porcelain crucible containing pure white Zinc Oxide (ZnO) powder over a roaring Bunsen burner flame. At red heat, the powder turns an intense bright yellow. When the crucible is removed from the flame and allowed to cool to room temperature, the yellow color vanishes completely, restoring the pristine white powder.",
  "What physical phenomenon explains why Zinc Oxide is yellow when hot and white when cold?",
  "Zinc oxide undergoes chemical combustion to form sulphur.",
  "Upon heating, ZnO loses a tiny fraction of lattice oxygen (forming non-stoichiometric Zn_{1+x}O); the liberated electrons are trapped in crystal lattice anion vacancies (F-centers), absorbing blue light and reflecting yellow; on cooling, oxygen is reabsorbed, restoring the stoichiometric white lattice.",
  "The porcelain crucible melts and coats the zinc oxide with yellow glaze.",
  "Zinc oxide converts into metallic gold when heated.",
  "B",
  "Zinc oxide exhibits reversible thermochromism: ZnO(s)(white) xrightarrow{Δ} Zn_{1+x}O(s)(yellow) + (x/2)O₂(g). When heated strongly, a few oxide ions (O²⁻) leave the crystal lattice as O₂ gas, leaving behind excess interstitial Zn²⁺ ions and trapped free electrons in the vacant anion sites (metal-excess non-stoichiometric defect / F-centers). These trapped electrons absorb high-energy blue/violet light from the visible spectrum, making the hot solid appear yellow. Upon cooling, the defect reverses as atmospheric oxygen re-enters the lattice, restoring the white color."
));

cases.push(makeChemCase(
  chapter, 32, "Action of Heat on Lead Monoxide ($PbO$): Litharge vs Massicot", "Reddish-Brown / Yellow Thermochromism of Lead Oxide",
  "In a mineralogy assay, a student strongly heats yellow powder of Lead(II) oxide (Litharge/Massicot, PbO) in a hard glass test tube. While red hot, the powder turns a dark reddish-brown and fuses to the glass walls. Upon cooling down to room temperature, the fused solid turns back to a bright canary yellow.",
  "What is the characteristic color of Lead(II) oxide when hot versus when cold?",
  "White when hot, black when cold.",
  "Reddish-brown when hot, yellow when cold.",
  "Green when hot, blue when cold.",
  "Colorless when hot, purple when cold.",
  "B",
  "Lead(II) oxide (PbO) exhibits a classic, diagnostic thermochromic color transition: it is reddish-brown when hot and canary yellow when cold. Furthermore, molten PbO attacks and fuses with the silica in glass, leaving a permanent yellow glassy stain on the test tube walls. This property is an essential ICSE diagnostic marker for identifying lead compounds."
));

cases.push(makeChemCase(
  chapter, 33, "Precipitation of Calcium Sulphate vs Barium Sulphate", "Comparative Solubility in Boiling Water",
  "An analytical chemist precipitates Calcium sulphate (CaSO₄) and Barium sulphate (BaSO₄) in separate test tubes by adding sodium sulphate to calcium chloride and barium chloride solutions. Both form white precipitates. The chemist then boils both test tubes with 50 mL of distilled water.",
  "What observation is made upon boiling, and what does it reveal about the relative solubilities of CaSO₄ and BaSO₄?",
  "Both precipitates dissolve completely in boiling water.",
  "CaSO₄ is sparingly soluble and partially dissolves in boiling water; BaSO₄ is completely insoluble and remains totally unchanged even in prolonged boiling water.",
  "BaSO₄ dissolves while CaSO₄ turns into a black powder.",
  "Both precipitates decompose into sulphur dioxide gas.",
  "B",
  "Calcium sulphate (CaSO₄) is a sparingly soluble salt (solubility ~2 g/L at 20°C); upon heating with a large volume of boiling water, it dissolves appreciably to yield a clear or faintly hazy solution. In contrast, Barium sulphate (BaSO₄) has an infinitesimal solubility product (K_sp = 1.1 × 10⁻¹⁰; solubility ~0.0025 g/L); it is completely insoluble in cold water, boiling water, and concentrated mineral acids."
));

cases.push(makeChemCase(
  chapter, 34, "Action of Dilute $HCl$ on Lead Nitrate vs Silver Nitrate", "Hot Water Solubility Distinction of White Chlorides",
  "A student adds dilute hydrochloric acid to two separate test tubes containing clear colorless solutions of Lead(II) nitrate (Pb(NO₃)₂) and Silver nitrate (AgNO₃). Both test tubes produce dense white precipitates (PbCl₂ and AgCl). The student heats both test tubes to boiling.",
  "How does heating with water distinguish the white precipitate of Lead(II) chloride from Silver chloride?",
  "Silver chloride dissolves in boiling water, while lead chloride remains insoluble.",
  "Lead(II) chloride (PbCl₂) dissolves completely in boiling water to form a clear solution and recrystallizes as white needles on cooling; Silver chloride (AgCl) remains completely insoluble in boiling water.",
  "Both precipitates dissolve and turn into green copper chloride.",
  "Lead chloride explodes upon boiling.",
  "B",
  "Both Ag⁺ and Pb²⁺ form white insoluble chlorides when treated with dilute HCl: AgNO₃ + HCl → AgCl↓(white) + HNO₃; Pb(NO₃)₂ + 2HCl → PbCl₂↓(white) + 2HNO₃. However, they possess dramatically different temperature coefficients of solubility. AgCl is completely insoluble in cold and boiling water (it dissolves only in NH₄OH). PbCl₂ is sparingly soluble in cold water, but its solubility increases by more than 300% in boiling water; it dissolves completely to form a clear solution, and upon cooling, it recrystallizes as silky white needle-like crystals."
));

cases.push(makeChemCase(
  chapter, 35, "Action of Ammonia on Silver Chloride Precipitate: Photochemical Violet Tint", "Complexation Followed by Photochemical Decomposition",
  "A white precipitate of Silver chloride (AgCl) is divided into two watch glasses:\nWatch Glass 1 is treated with excess aqueous Ammonium Hydroxide: the precipitate dissolves instantly into a clear colorless liquid.\nWatch Glass 2 is left sitting on a sunny windowsill: over two hours, the white solid gradually turns violet, and eventually turns dark greyish-black.",
  "What two chemical phenomena account for the dissolution in Watch Glass 1 and the darkening in Watch Glass 2?",
  "Dissolution: evaporation of silver; Darkening: formation of silver rust.",
  "Dissolution: formation of soluble diamminesilver(I) complex [Ag(NH₃)₂]Cl; Darkening: photochemical decomposition of AgCl in sunlight into finely divided metallic silver (black) and chlorine gas: 2AgCl xrightarrow{hν} 2Ag(s) + Cl₂(g).",
  "Dissolution: conversion into hydrochloric acid; Darkening: absorption of soot from air.",
  "Both watch glasses undergo nuclear decay.",
  "B",
  "In Watch Glass 1, AgCl dissolves via coordination: AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O. In Watch Glass 2, silver chloride is light-sensitive. When exposed to solar ultraviolet radiation (hν), it undergoes photochemical dissociation: 2AgCl(s) xrightarrow{hν} 2Ag(s)(violet-black) + Cl₂(g)↑. The liberated metallic silver is in an ultra-fine, colloidal state that appears violet initially and turns greyish-black as more silver deposits. This photochemical sensitivity forms the basis of traditional black-and-white photography."
));

cases.push(makeChemCase(
  chapter, 36, "Identification of Carbonate ($CO_3^{2-}$) vs Bicarbonate ($HCO_3^-$) Using $MgSO_4$", "Cold Precipitation vs Boiling Precipitation",
  "An analytical chemist has two unlabelled white powders: Solid A is Sodium Carbonate (Na₂CO₃); Solid B is Sodium Bicarbonate (NaHCO₃). Both effervesce with dilute acid, producing CO₂ that turns lime water milky. To distinguish them, the chemist prepares aqueous solutions of both and adds Magnesium sulphate (MgSO₄) solution to each at room temperature.\nResult: Solution A produces an immediate white precipitate in the cold. Solution B produces NO precipitate in the cold, but when boiled, a white precipitate forms.",
  "Why does Sodium Carbonate precipitate Magnesium carbonate in the cold, while Sodium Bicarbonate precipitates only on boiling?",
  "Sodium carbonate is colder than sodium bicarbonate.",
  "Magnesium carbonate (MgCO₃) is insoluble and precipitates immediately in the cold: MgSO₄ + Na₂CO₃ → MgCO₃↓ + Na₂SO₄; Magnesium bicarbonate (Mg(HCO₃)₂) is soluble in the cold, but upon boiling, it decomposes into insoluble Magnesium carbonate: Mg(HCO₃)₂ xrightarrow{Δ} MgCO₃↓ + H₂O + CO₂↑.",
  "Sodium bicarbonate is an organic compound that does not react with magnesium.",
  "Boiling decomposes magnesium sulphate into yellow sulphur.",
  "B",
  "This is the definitive analytical test to distinguish soluble carbonates from bicarbonates: (1) In the cold: Na₂CO₃ + MgSO₄ → MgCO₃↓(white precipitate) + Na₂SO₄. Magnesium carbonate has a low solubility product and precipitates immediately at room temperature. (2) With bicarbonate in the cold: 2NaHCO₃ + MgSO₄ → Mg(HCO₃)₂ + Na₂SO₄. Magnesium hydrogen carbonate is highly soluble in cold water (no precipitate). Upon heating/boiling, soluble Mg(HCO₃)₂ thermally decomposes: Mg(HCO₃)₂ xrightarrow{Δ} MgCO₃↓(white) + H₂O + CO₂↑."
));

cases.push(makeChemCase(
  chapter, 37, "Identification of Nitrate ($NO_3^-$) by Copper Turnings Test", "Dense Brown Nitrogen Dioxide Evolution with Conc. $H_2SO_4$",
  "A dry salt is mixed with copper turnings and concentrated sulphuric acid in a hard glass test tube, and the mixture is heated strongly. Within one minute, dense reddish-brown choking fumes fill the tube, and the reaction liquid turns a magnificent bright blue.",
  "What acid radical is confirmed by this test, and why does the solution turn blue?",
  "Chloride radical; solution turns blue due to chlorine gas.",
  "Nitrate radical (NO₃⁻); concentrated H₂SO₄ liberates nitric acid from the salt, which oxidises the copper turnings to blue Copper(II) nitrate while being reduced to reddish-brown Nitrogen Dioxide (NO₂) gas: Cu + 4HNO₃ → Cu(NO₃)₂ + 2H₂O + 2NO₂↑.",
  "Carbonate radical; solution turns blue due to carbon soot.",
  "Sulphate radical; copper melts to form a blue alloy.",
  "B",
  "The copper foil/turnings test is a classic dry confirmatory test for nitrates. Concentrated H₂SO₄ displaces volatile nitric acid from the nitrate salt: KNO₃ + H₂SO₄ → KHSO₄ + HNO₃. The hot, concentrated HNO₃ vigorously oxidises copper metal to copper(II) nitrate, imparting a bright blue color to the liquid: Cu + 4HNO₃ → Cu(NO₃)₂(blue) + 2H₂O + 2NO₂↑(dense reddish-brown fumes). The dense brown fumes of NO₂ that intensify upon heating confirm the nitrate radical."
));

cases.push(makeChemCase(
  chapter, 38, "Identification of Acetate ($CH_3COO^-$) Radical by Esterification", "Fruity Smell of Ethyl Acetate Formation",
  "A solid unknown salt is treated with concentrated sulphuric acid and gently warmed. A sharp smell of vinegar is detected. The student then adds 1 mL of pure ethanol and 1 mL of concentrated sulphuric acid to the salt, warms the tube gently in a water bath, and pours the contents into a beaker of cold water. A pleasant, sweet, fruity apple-like aroma fills the room.",
  "What acid radical is confirmed by the formation of this sweet fruity odor, and what chemical compound is formed?",
  "Formate radical; forms formaldehyde gas.",
  "Acetate radical (CH₃COO⁻); reacts with ethanol in the presence of concentrated sulphuric acid catalyst to form the sweet-smelling ester Ethyl Acetate: CH₃COOH + C₂H₅OH xrightarrow{H₂SO₄} CH₃COOC₂H₅ (ethyl acetate) + H₂O.",
  "Sulphate radical; forms sweet sulphur dioxide.",
  "Nitrate radical; forms sweet nitric acid.",
  "B",
  "The vinegar smell upon adding acid indicates acetic acid: CH₃COONa + H₂SO₄ → NaHSO₄ + CH₃COOH. When heated with absolute ethanol and a few drops of concentrated H₂SO₄ (esterification catalyst and dehydrating agent), acetic acid condenses with ethanol to form an ester: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (ethyl acetate) + H₂O. Pouring into cold water removes unreacted ethanol and acid, volatilizing the insoluble ester which produces a delightful, sweet, fruity, apple/pear-like aroma."
));

cases.push(makeChemCase(
  chapter, 39, "Identification of Ammonium Radical: Litmus and Nessler's Confirmation", "Dual Confirmatory Workflow for $NH_4^+$",
  "A white crystalline salt is tested in the analytical laboratory:\nStep 1: Heated with concentrated NaOH: liberates a colorless gas that turns moist red litmus paper blue and produces dense white fumes with a glass rod dipped in concentrated HCl.\nStep 2: The gas is bubbled into a test tube containing Nessler's reagent: a chocolate-brown precipitate separates out immediately.",
  "Which cation is definitively identified by this sequence of tests?",
  "Sodium cation (Na⁺)",
  "Ammonium cation (NH₄⁺)",
  "Calcium cation (Ca²⁺)",
  "Magnesium cation (Mg²⁺)",
  "B",
  "The ammonium cation (NH₄⁺) is uniquely identified by its reaction with alkalis: NH₄⁺ + OH⁻ xrightarrow{Δ} NH₃↑ + H₂O. Ammonia is the only common alkaline gas; it turns moist red litmus blue, produces dense white fumes of NH₄Cl with HCl, and reacts with Nessler's reagent (K₂[HgI₄]) to precipitate brown iodide of Millon's base. These tests definitively confirm the ammonium radical."
));

cases.push(makeChemCase(
  chapter, 40, "Action of Alkalis on Aluminium Salts: Gelatinous Precipitate Formation", "Amphoteric Hydroxide Formation and Aluminate Dissolution",
  "When sodium hydroxide solution is added dropwise to an aqueous solution of Aluminium chloride (AlCl₃), a white gelatinous precipitate forms. When excess sodium hydroxide is added with shaking, the precipitate dissolves completely to yield a clear colorless solution.",
  "What are the chemical formulas of the white gelatinous precipitate and the soluble product formed in excess sodium hydroxide?",
  "Precipitate: AlCl₃; Soluble: Al(OH)₃",
  "Precipitate: Aluminium Hydroxide, Al(OH)₃; Soluble: Sodium meta-aluminate, NaAlO₂ (or Na[Al(OH)₄]).",
  "Precipitate: Aluminium oxide, Al₂O₃; Soluble: Aluminium metal, Al",
  "Precipitate: Sodium chloride; Soluble: Sodium aluminate",
  "B",
  "Aluminium chloride reacts with sodium hydroxide dropwise to precipitate insoluble aluminium hydroxide: AlCl₃ + 3NaOH → Al(OH)₃↓(white gelatinous precipitate) + 3NaCl. Because Al(OH)₃ is amphoteric, adding excess strong alkali (NaOH) causes it to react as an acid, forming soluble sodium meta-aluminate: Al(OH)₃ + NaOH → NaAlO₂ (sodium meta-aluminate) + 2H₂O. The gelatinous precipitate dissolves completely."
));

cases.push(makeChemCase(
  chapter, 41, "Why $Al(OH)_3$ Does NOT Dissolve in Excess $NH_4OH$", "Contrast with Zinc Hydroxide Ammine Formation",
  "Continuing from the previous case, a student repeats the experiment using Ammonium Hydroxide (NH₄OH) instead of Sodium Hydroxide. A white gelatinous precipitate of Al(OH)₃ forms. However, when the student adds excess NH₄OH, the precipitate does NOT dissolve, remaining visible as a white jelly.",
  "Why does Aluminium hydroxide dissolve in excess $NaOH$ but fail to dissolve in excess $NH_4OH$?",
  "Ammonium hydroxide is an acid that neutralizes aluminium.",
  "NaOH is a strong base with high [OH⁻] that drives the formation of the aluminate anion (AlO₂⁻); NH₄OH is a weak base with very low [OH⁻] that cannot form aluminate, and Aluminium does not form an ammine coordination complex with ammonia.",
  "Aluminium hydroxide decomposes into aluminium gas in ammonium hydroxide.",
  "Ammonium hydroxide dissolves only heavy metals like gold.",
  "B",
  "Dissolving an amphoteric hydroxide like Al(OH)₃ into aluminate (AlO₂⁻ or [Al(OH)₄]⁻) requires a very high concentration of hydroxide ions. NaOH is a strong base that ionises 100%, supplying abundant OH⁻. NH₄OH is a weak base that ionises very slightly (<1%), so [OH⁻] is far too low to convert Al(OH)₃ into aluminate. Furthermore, unlike Zinc (which forms [Zn(NH₃)₄]²⁺) or Copper ([Cu(NH₃)₄]²⁺), Aluminium does not form stable ammine complexes. Therefore, Al(OH)₃ remains insoluble in excess NH₄OH."
));

cases.push(makeChemCase(
  chapter, 42, "Color of Transition Metal Salts in Aqueous Solution", "Partially Filled d-Orbitals and d-d Transitions",
  "An analytical chemist observes the characteristic colors of various transition metal solutions in volumetric flasks:\nCopper(II) sulphate: bright sky-blue\nIron(II) sulphate: pale light-green\nIron(III) chloride: yellow-brown\nZinc sulphate: completely clear and colorless",
  "Why are Copper(II), Iron(II), and Iron(III) salts colored in aqueous solution, whereas Zinc salts are completely colorless?",
  "Zinc salts absorb all visible light and reflect black.",
  "Transition metal ions with partially filled d-orbitals (Cu²⁺: 3d⁹, Fe²⁺: 3d⁶, Fe³⁺: 3d⁵) undergo d–d electronic transitions by absorbing specific visible wavelengths; Zinc (Zn²⁺: 3d¹⁰) has completely filled d-orbitals, preventing d–d transitions and leaving the solution colorless.",
  "Copper, iron, and zinc solutions contain dissolved food coloring dyes.",
  "Color depends on the number of protons in the water molecules.",
  "B",
  "The color of transition metal ions in aqueous solution arises from d-d electron transitions. In a hydrated complex, the electric field of water ligands splits the five d-orbitals into two energy levels (t₂g and eg). When d-orbitals are partially filled (d¹ to d⁹: Cu²⁺ is 3d⁹, Fe²⁺ is 3d⁶, Fe³⁺ is 3d⁵), an electron can absorb a photon of visible light and transition from a lower d-orbital to a higher d-orbital; the complementary transmitted wavelength gives the solution its characteristic color. Zn²⁺ has a completely filled d-subshell (3d¹⁰); with no empty d-orbital available for excitation, it cannot absorb visible light, rendering Zn²⁺ salts completely colorless."
));

cases.push(makeChemCase(
  chapter, 43, "Action of Alkalis on Lead(II) Salts: Chalky White Precipitate", "Insoluble Hydroxide Precipitation and Alkali Dynamics",
  "A bottle of Lead(II) nitrate solution is treated dropwise with dilute sodium hydroxide. A chalky white precipitate of Lead(II) hydroxide (Pb(OH)₂) forms. When excess NaOH is added, the chalky precipitate dissolves completely.",
  "What is the balanced equation for the initial precipitation of Lead(II) hydroxide?",
  "Pb(NO₃)₂ + 2NaOH → Pb(OH)₂↓(chalky white) + 2NaNO₃",
  "Pb(NO₃)₂ + NaOH → PbOH + NaNO₃",
  "Pb(NO₃)₂ + 4NaOH → Na₄Pb + 2HNO₃",
  "Lead nitrate does not react with sodium hydroxide.",
  "A",
  "When sodium hydroxide is added dropwise to a solution of lead(II) nitrate, a double displacement reaction precipitates insoluble lead(II) hydroxide: Pb(NO₃)₂(aq) + 2NaOH(aq) → Pb(OH)₂↓(chalky white precipitate) + 2NaNO₃(aq). The precipitate is characterized as 'chalky white' to distinguish its appearance from the 'gelatinous white' precipitates of Zinc and Aluminium hydroxides."
));

cases.push(makeChemCase(
  chapter, 44, "Complete Separation Scheme for a Mixture of $Fe^{3+}$, $Cu^{2+}$, and $Zn^{2+}$", "Selective Precipitation via $NaOH$ and $NH_4OH$",
  "An analytical chemist is tasked with separating the cations in a solution containing Fe³⁺, Cu²⁺, and Zn²⁺.\nStep 1: Excess Sodium Hydroxide (NaOH) is added, and the mixture is filtered.\nStep 2: The filtrate from Step 1 contains a soluble zinc salt, while the filter residue contains a mixture of two precipitates.\nStep 3: Excess Ammonium Hydroxide (NH₄OH) is added to the residue from Step 1 and filtered.",
  "What substance remains as the final insoluble residue in Step 3, and what substance dissolves into the filtrate?",
  "Residue: Copper hydroxide; Filtrate: Iron hydroxide.",
  "Residue: Reddish-brown Iron(III) hydroxide, Fe(OH)₃; Filtrate: Deep inky-blue tetraamminecopper(II) solution, [Cu(NH₃)₄]²⁺.",
  "Residue: Zinc oxide; Filtrate: Sodium chloride.",
  "All three metals dissolve completely in Step 3.",
  "B",
  "In Step 1: Adding excess NaOH precipitates Fe(OH)₃ (reddish-brown) and Cu(OH)₂ (pale blue), while amphoteric Zn(OH)₂ dissolves completely into the filtrate as soluble sodium zincate (Na₂ZnO₂). In Step 3: When the insoluble residue of Fe(OH)₃ and Cu(OH)₂ is treated with excess NH₄OH, Cu(OH)₂ dissolves into the filtrate as the deep inky-blue complex [Cu(NH₃)₄]²⁺, while purely basic Fe(OH)₃ is completely insoluble in NH₄OH and remains behind on the filter paper as the pure reddish-brown residue."
));

cases.push(makeChemCase(
  chapter, 45, "Identification of Oxygen ($O_2$) vs Hydrogen ($H_2$) Gas", "Glowing Splinter Relighting vs Pop Sound Combustion",
  "During the thermal decomposition of salts, two colorless, odorless gases (Gas X and Gas Y) are evolved in separate experiments. A student tests both gases with a wooden splinter:\nWhen a glowing wooden splinter is introduced into Gas X, the splinter immediately bursts into bright, vigorous flame.\nWhen a burning wooden splinter is brought to the mouth of the tube containing Gas Y, the gas ignites with a sharp, squeaky 'pop' sound and burns with a pale blue flame, extinguishing the splinter.",
  "What is the identity of Gas X and Gas Y?",
  "Gas X = Hydrogen (H₂); Gas Y = Oxygen (O₂)",
  "Gas X = Oxygen (O₂); Gas Y = Hydrogen (H₂)",
  "Gas X = Carbon dioxide (CO₂); Gas Y = Nitrogen (N₂)",
  "Gas X = Chlorine (Cl₂); Gas Y = Ammonia (NH₃)",
  "B",
  "The two classic combustible/combustion-supporting gas tests:\n1. Oxygen (O₂): Non-combustible, but a powerful supporter of combustion. Introducing a glowing wooden ember/splinter causes it to rekindle and burst into active flame: C + O₂ → CO₂ + heat.\n2. Hydrogen (H₂): Combustible, but a non-supporter of combustion. It burns with a pale blue flame, and when mixed with air, rapid ignition produces a characteristic miniature acoustic shockwave known as the 'pop' sound: 2H₂ + O₂ → 2H₂O."
));

cases.push(makeChemCase(
  chapter, 46, "Thermal Decomposition of Lead Nitrate: Diagnostic Observations", "Decrepitation, Reddish-Brown Fumes, and Fused Yellow Residue",
  "A student heats dry crystalline Lead(II) nitrate (Pb(NO₃)₂) in a hard glass test tube over a Bunsen flame. Three distinct diagnostic observations occur:\nObservation 1: A sharp cracking/snapping sound (decrepitation) is heard.\nObservation 2: Pungent reddish-brown fumes of a gas evolve that turn moist starch-iodide paper blue, accompanied by a gas that relights a glowing splinter.\nObservation 3: A solid residue remains in the tube that is reddish-brown when hot, canary yellow when cold, and fuses into the glass.",
  "What is the balanced equation for the thermal decomposition of Lead(II) nitrate?",
  "Pb(NO₃)₂ → Pb + 2NO₂ + O₂",
  "2Pb(NO₃)₂(s) xrightarrow{Δ} 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑",
  "Pb(NO₃)₂ → PbO + N₂O + O₂",
  "Lead nitrate sublimes without chemical decomposition.",
  "B",
  "The thermal decomposition of Lead(II) nitrate is a comprehensive ICSE analytical reaction: 2Pb(NO₃)₂(s) xrightarrow{Δ} 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑.\n1. Decrepitation: Rapid vaporization of microscopic trapped water pockets inside the crystals causes the crystals to crackle loudly.\n2. Gases evolved: Reddish-brown Nitrogen dioxide (NO₂) and colorless Oxygen (O₂), which relights a glowing splinter.\n3. Residue: Lead(II) oxide (PbO, litharge), which is reddish-brown when hot, yellow when cold, and melts to fuse into the silica glass."
));

cases.push(makeChemCase(
  chapter, 47, "Action of Dilute Acids on Carbonates vs Bicarbonates vs Sulphites", "Gas Odor and Decolorization Summary Matrix",
  "An analytical technician creates a rapid reference card for testing unknown solid sodium salts with dilute hydrochloric acid:\nSalt 1: Brisk effervescence, colorless odorless gas, turns lime water milky, no effect on acidified dichromate.\nSalt 2: Colorless gas with suffocating odor of burning sulphur, turns lime water milky, turns acidified potassium dichromate from orange to green.\nSalt 3: Colorless gas with rotten-egg odor, turns moist lead acetate paper silvery black.",
  "What anions are present in Salt 1, Salt 2, and Salt 3?",
  "Salt 1 = Chloride; Salt 2 = Nitrate; Salt 3 = Sulphate",
  "Salt 1 = Carbonate / Bicarbonate (CO₃²⁻ / HCO₃⁻); Salt 2 = Sulphite / Bisulphite (SO₃²⁻ / HSO₃⁻); Salt 3 = Sulphide (S²⁻)",
  "Salt 1 = Acetate; Salt 2 = Oxalate; Salt 3 = Cyanide",
  "Salt 1 = Lead; Salt 2 = Zinc; Salt 3 = Copper",
  "B",
  "Summary of volatile acid gas liberation:\n- Carbonate (CO₃²⁻) or Bicarbonate (HCO₃⁻) + acid → CO₂↑ (colorless, odorless, turns lime water milky, negative dichromate test).\n- Sulphite (SO₃²⁻) or Bisulphite (HSO₃⁻) + acid → SO₂↑ (choking burning-sulphur smell, turns lime water milky, reduces orange K₂Cr₂O₇ to green Cr³⁺).\n- Sulphide (S²⁻) + acid → H₂S↑ (foul rotten-egg odor, blackens lead acetate paper to form PbS)."
));

cases.push(makeChemCase(
  chapter, 48, "Why Barium Chloride Does Not Precipitate Lead Salts", "Precipitation of Barium Sulphate vs Insoluble Lead Chloride",
  "A student attempts to test a solution of Lead Nitrate for sulphate ions by adding Barium chloride solution. Surprisingly, a white precipitate forms immediately, even though NO sulphate is present in the beaker.",
  "Why did adding Barium chloride to Lead Nitrate produce a white precipitate in the absence of sulphate?",
  "Barium chloride decomposed into barium metal.",
  "Chloride ions (Cl⁻) from the barium chloride reagent reacted with Lead ions (Pb²⁺) to precipitate insoluble Lead(II) chloride: Pb²⁺ + 2Cl⁻ → PbCl₂↓(white); Barium nitrate should have been used instead.",
  "Lead nitrate is an insoluble salt that does not dissolve in water.",
  "Barium chloride precipitates all metal nitrates as white crystals.",
  "B",
  "Reagent cross-reactivity is a critical consideration in qualitative analysis. To test for sulphate using Ba²⁺ ions, one must choose a barium salt whose anion does not precipitate the test cation. Because Lead(II) chloride (PbCl₂) is an insoluble salt, adding BaCl₂ introduces Cl⁻ ions that immediately precipitate Pb²⁺ as PbCl₂↓. To avoid this interference when testing lead solutions, Barium Nitrate, Ba(NO₃)₂, must be used as the barium source because all nitrates are soluble."
));

cases.push(makeChemCase(
  chapter, 49, "Action of Alkalis on Insoluble Basic Oxides vs Amphoteric Oxides", "Solubility Comparison Matrix",
  "A student tests four solid oxides with concentrated Sodium Hydroxide solution:\nOxide 1: Copper(II) oxide (CuO, black)\nOxide 2: Iron(III) oxide (Fe₂O₃, reddish-brown)\nOxide 3: Zinc oxide (ZnO, white)\nOxide 4: Lead(II) oxide (PbO, yellow)\nEach oxide is heated with concentrated NaOH.",
  "Which oxides dissolve in concentrated sodium hydroxide, and which remain completely insoluble?",
  "All four oxides dissolve completely because all are metal oxides.",
  "Oxides 1 (CuO) and 2 (Fe₂O₃) are purely basic oxides and remain completely INSOLUBLE; Oxides 3 (ZnO) and 4 (PbO) are amphoteric oxides and DISSOLVE to form soluble zincate and plumbite.",
  "Oxides 1 and 2 dissolve, while Oxides 3 and 4 remain insoluble.",
  "None of the oxides dissolve in sodium hydroxide.",
  "B",
  "Metallic oxides are classified by their acid-base behavior: (1) Basic oxides (e.g., CuO, Fe₂O₃, MgO) react only with acids; they have zero reactivity with bases and are completely insoluble in boiling sodium hydroxide solution. (2) Amphoteric oxides (e.g., ZnO, PbO, Al₂O₃) react with both acids and strong bases; they dissolve readily in hot concentrated NaOH to form soluble oxy-anion salts: ZnO + 2NaOH → Na₂ZnO₂ + H₂O; PbO + 2NaOH → Na₂PbO₂ + H₂O."
));

cases.push(makeChemCase(
  chapter, 50, "Why $NH_4OH$ is Preferred Over $NaOH$ for Certain Qualitative Separations", "Controllable pH and Weak Base Selectivity",
  "In analytical chemistry schemes, Ammonium Hydroxide (NH₄OH) is often preferred over Sodium Hydroxide (NaOH) for group precipitation of metal cations (such as separating Fe³⁺ and Al³⁺ from Ca²⁺ and Mg²⁺).",
  "What chemical advantage does Ammonium Hydroxide have over Sodium Hydroxide in qualitative cation group separation?",
  "Ammonium hydroxide is an acid that destroys transition metals.",
  "NH₄OH is a weak, partially ionised base whose hydroxide ion concentration [OH⁻] can be buffered and controlled (using NH₄Cl via the common ion effect) to selectively exceed the K_sp of less soluble hydroxides (Fe³⁺, Al³⁺) without precipitating more soluble hydroxides (Mg²⁺, Ca²⁺).",
  "Ammonium hydroxide contains no water molecules.",
  "Sodium hydroxide cannot be purchased in pure liquid form.",
  "B",
  "In qualitative analysis, selective precipitation requires precise control over the reagent ion concentration. NaOH is a strong base that ionises 100%, producing an overwhelming concentration of OH⁻ that indiscriminately precipitates almost all metallic cations (Fe²⁺, Fe³⁺, Cu²⁺, Zn²⁺, Al³⁺, Pb²⁺, Mg²⁺, Ca²⁺). Ammonium hydroxide is a weak base (NH₄OH ⇌ NH₄⁺ + OH⁻). By adding Ammonium Chloride (NH₄Cl), the common ion effect suppresses the dissociation of NH₄OH, fine-tuning [OH⁻] to a level that precipitates only cations with extremely low solubility products (like Fe(OH)₃, K_sp ≈ 10⁻³⁸ and Al(OH)₃, K_sp ≈ 10⁻³²) while keeping Mg²⁺ (K_sp ≈ 10⁻¹¹) in solution."
));

console.log(`[Ch4 Analytical Chemistry] Generated ${cases.length} cases.`);

const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) fs.mkdirSync(BANK_DIR, { recursive: true });

const outPath = path.join(BANK_DIR, 'chemistry_case_analytical_chemistry.json');
fs.writeFileSync(outPath, JSON.stringify(cases, null, 2), 'utf8');
console.log(`Saved 50 cases to ${outPath}`);
