// build_chem_case_ch7_metallurgy.js
// 50 Case-Based MCQs for ICSE Class 10 Chemistry: Chapter 7 - Metallurgy

const fs = require('fs');
const path = require('path');
const { makeChemCase } = require('./chem_case_helper');

const chapter = "Metallurgy";
const cases = [];

cases.push(makeChemCase(
  chapter, 1, "Minerals vs Ores: The Economic Criterion", "Commercial Viability in Mineral Extraction",
  "A geological survey identifies two massive subterranean deposits in Odisha:\nDeposit A consists of clay (Bauxite aluminosilicate, Al₂O₃·2SiO₂·2H₂O) containing 28% aluminium.\nDeposit B consists of Bauxite (hydrated aluminium oxide, Al₂O₃·2H₂O) containing 55% aluminium.\nA mining company builds an industrial extraction plant exclusively at Deposit B, completely ignoring Deposit A.",
  "Why is Bauxite classified as an 'ore' of aluminium, while clay is merely a 'mineral'?",
  "Clay contains no aluminium atoms.",
  "All ores are minerals, but an ore is specifically a mineral from which the metal can be extracted economically, profitably, and conveniently on an industrial scale; clay contains strong aluminosilicate bonds that make aluminium extraction economically unviable.",
  "Clay is radioactive and dangerous to mine.",
  "Bauxite is a synthetic man-made alloy that does not exist in nature.",
  "B",
  "A 'mineral' is any naturally occurring inorganic compound of a metal found in the Earth's crust. An 'ore' is a mineral from which a metal can be extracted profitably, easily, and on a commercial scale. Both clay and bauxite are minerals of aluminium. However, extracting aluminium from clay requires complex chemical decomposition of tightly bound silicate networks, making the cost far higher than the market value of the metal. In bauxite, aluminium is present as hydrated oxide, allowing profitable extraction via Baeyer's process and Hall-Héroult electrolysis."
));

cases.push(makeChemCase(
  chapter, 2, "Froth Floatation: Differential Wetting of Sulphide Ores", "Collectors, Frothers, and Surface Hydrophobicity",
  "A mining beneficiation plant processes Zinc Blende ore (ZnS) contaminated with heavy silica and rocky gangue. The crushed ore is placed in a large tank of water containing Pine Oil and Sodium Ethyl Xanthate. Compressed air is blown through a submerged agitator, creating a thick frothy foam. The zinc sulphide concentrates in the floating froth at the surface, while the rocky gangue sinks to the bottom.",
  "What is the physical principle of the Froth Floatation process, and why does zinc sulphide rise with the froth?",
  "Zinc sulphide is lighter than water and floats by buoyancy.",
  "Froth floatation is based on the difference in wetting characteristics of ore and gangue: pine oil (collector) preferentially wets the sulphide ore particles, making them hydrophobic (water-repellent) so they attach to rising air bubbles, while water preferentially wets the siliceous gangue particles, causing them to sink.",
  "Pine oil dissolves zinc sulphide into a gas.",
  "Compressed air creates an electric current that magnetizes the ore.",
  "B",
  "Froth floatation separates minerals based on surface wettability. Sulphide ores (ZnS, PbS, CuFeS₂) have non-polar surfaces that are preferentially wetted by non-polar oils (such as pine oil or xanthates). The collector molecules coat the sulphide particles, rendering them hydrophobic. When compressed air is vigorously bubbled through the pulp, the oiled sulphide particles adhere to the air bubbles and float to the surface as a stable, mineral-laden froth. The polar siliceous gangue particles are wetted by polar water molecules, become heavy, and sink to the bottom."
));

cases.push(makeChemCase(
  chapter, 3, "Depressants in Froth Floatation: Separating $PbS$ from $ZnS$", "Selective Coordination Complex Depressant Mechanism",
  "A mineral deposit contains a complex lead-zinc sulphide ore composed of Galena (PbS) and Sphalerite (Zinc Blende, ZnS). If froth floatation is attempted without additives, both sulphides float together into the froth. The mineral processing engineer adds Sodium Cyanide (NaCN) and Sodium Carbonate as 'depressants' to the pulp before aerating.",
  "How does Sodium Cyanide selectively depress Zinc Blende (ZnS) while allowing Galena (PbS) to float into the froth?",
  "Sodium cyanide destroys zinc blende by converting it into lead.",
  "NaCN selectively reacts with ZnS on the particle surface to form a soluble coordination complex, Sodium tetracyanozincate(II) [Na₂[Zn(CN)₄]], preventing pine oil from wetting ZnS and keeping it in the pulp, while PbS does not react with NaCN and floats into the froth.",
  "Sodium cyanide freezes the zinc sulphide into ice.",
  "Galena is magnetic and is repelled by sodium cyanide.",
  "B",
  "When an ore contains multiple sulphides, chemical depressants allow selective sequential floatation. Sodium cyanide (NaCN) acts as a selective depressant for zinc sulphide: 4NaCN + ZnS → Na₂[Zn(CN)₄] (soluble sodium tetracyanozincate complex) + Na₂S. This soluble complex layer renders the ZnS particles hydrophilic, preventing pine oil from adhering to them; ZnS remains submerged in the water. Galena (PbS) does not form a stable cyanide complex under these conditions, remains hydrophobic, and floats with the froth. Once galena is skimmed off, copper sulphate (activator) is added to restore ZnS floatability."
));

cases.push(makeChemCase(
  chapter, 4, "Baeyer's Process: Digestion of Bauxite with Caustic Soda", "Amphoteric Alumina Dissolution and Red Mud Separation",
  "In the first stage of Baeyer's process for refining bauxite, finely powdered bauxite ore (containing Al₂O₃·2H₂O, Fe₂O₃, and SiO₂) is digested with a 45% concentrated Sodium Hydroxide solution in an industrial autoclave at 150°C–200°C under 5 atmospheres of pressure for several hours. The resulting slurry is filtered, separating a clear filtrate from a dense red-brown residue termed 'Red Mud'.",
  "What is the chemical composition of the clear filtrate and the insoluble Red Mud?",
  "Filtrate contains pure liquid aluminium; Red Mud contains sodium chloride.",
  "Filtrate contains soluble Sodium meta-aluminate (NaAlO₂); Red Mud contains insoluble Iron(III) oxide (Fe₂O₃) and silica/titanium impurities.",
  "Filtrate contains sulphuric acid; Red Mud contains metallic iron.",
  "Both filtrate and residue contain identical amounts of dissolved bauxite.",
  "B",
  "In Baeyer's process, the amphoteric nature of aluminium oxide is exploited to separate it from basic iron impurities. When bauxite is digested with hot concentrated NaOH under pressure: Al₂O₃·2H₂O(s) + 2NaOH(aq) → 2NaAlO₂(aq) (soluble sodium aluminate) + 3H₂O(l). Iron(III) oxide (Fe₂O₃) is a purely basic oxide that does not react with or dissolve in sodium hydroxide; it remains behind as an insoluble red-brown solid. Upon filtration, Fe₂O₃ and insoluble silicates separate as 'Red Mud', leaving pure sodium aluminate in the clear filtrate."
));

cases.push(makeChemCase(
  chapter, 5, "Baeyer's Process: Seeding and Precipitation of $Al(OH)_3$", "Controlled Hydrolysis and Seed Crystal Nucleation",
  "In the second stage of Baeyer's process, the clear sodium aluminate filtrate is transferred to large precipitator tanks, diluted with cold distilled water, cooled to 50°C, and seeded with freshly precipitated, finely divided crystals of Aluminium Hydroxide (Al(OH)₃) while being continuously agitated for 48 hours.",
  "Why is the solution diluted and seeded with fresh Al(OH)₃ crystals?",
  "Seeding converts sodium aluminate into sodium chloride.",
  "Dilution and cooling reverse the digestion equilibrium (promoting hydrolysis: NaAlO₂ + 2H₂O → NaOH + Al(OH)₃↓); fresh Al(OH)₃ crystals provide nucleation seed sites that accelerate the rapid crystallization of pure aluminium hydroxide.",
  "The seed crystals act as fuel that boils the solution.",
  "Aluminium hydroxide decomposes into hydrogen gas.",
  "B",
  "Sodium meta-aluminate is stable in hot, concentrated alkali. When diluted with water and cooled to 50°C, the chemical equilibrium shifts toward hydrolysis: NaAlO₂(aq) + 2H₂O(l) ⇌ NaOH(aq) + Al(OH)₃(s)↓. However, sodium aluminate solution tends to form a supersaturated, metastable state that crystallizes very slowly. Adding freshly precipitated, high-surface-area Al(OH)₃ seed crystals provides nucleation centers that lower the activation barrier, inducing rapid, complete precipitation of pure, crystalline aluminium hydroxide while regenerating sodium hydroxide in solution."
));

cases.push(makeChemCase(
  chapter, 6, "Baeyer's Process: Calcination of $Al(OH)_3$ in Rotary Kiln", "High-Temperature Thermal Dehydration to Pure Alumina",
  "In the third stage of Baeyer's process, the precipitated Aluminium Hydroxide is filtered, washed thoroughly with water to remove adhering alkali, and fed into an enormous inclined rotary kiln heated by burning gas flames to approximately 1000°C–1100°C.",
  "What chemical transformation occurs inside the rotary kiln at 1000°C?",
  "Aluminium hydroxide melts into liquid metallic aluminium.",
  "Aluminium hydroxide decomposes thermally to drive off chemically combined water, yielding pure, dry anhydrous Alumina powder: 2Al(OH)₃(s) xrightarrow{1000°C} Al₂O₃(s) + 3H₂O(g)↑.",
  "Aluminium hydroxide oxidises into toxic aluminium peroxide.",
  "The kiln converts aluminium hydroxide into sodium aluminate.",
  "B",
  "The final step of Baeyer's purification is calcination. The washed aluminium hydroxide is calcined at 1000°C–1100°C in a rotary kiln: 2Al(OH)₃(s) xrightarrow{1000°C} Al₂O₃(s) + 3H₂O(g)↑. All chemically bound water of constitution is driven off as superheated steam, leaving behind pure, dry, anhydrous α-alumina (Al₂O₃) as a fine white powder, ready to serve as the feed for the Hall-Héroult electrolytic cell."
));

cases.push(makeChemCase(
  chapter, 7, "Calcination vs Roasting: Chemical Objectives and Conditions", "Thermal Conversion of Carbonates vs Sulphides to Oxides",
  "A metallurgical engineer operates two industrial furnaces:\nFurnace 1 heats Calamine ore (ZnCO₃) in the absence of air below its melting point.\nFurnace 2 heats Zinc Blende ore (ZnS) in an excess blast of pre-heated air below its melting point.",
  "What are the names of the processes carried out in Furnace 1 and Furnace 2, and what are their respective chemical equations?",
  "Furnace 1 is Roasting; Furnace 2 is Calcination.",
  "Furnace 1 is Calcination: ZnCO₃(s) xrightarrow{Δ} ZnO(s) + CO₂(g)↑; Furnace 2 is Roasting: 2ZnS(s) + 3O₂(g) xrightarrow{Δ} 2ZnO(s) + 2SO₂(g)↑.",
  "Furnace 1 is Smelting; Furnace 2 is Refining.",
  "Both furnaces carry out identical combustion of zinc into zinc metal.",
  "B",
  "The two primary thermal methods for converting concentrated ore into reducible metal oxides:\n1. Calcination: Heating the ore in the absence or limited supply of air below its melting point. Used for carbonate and hydrated ores to expel volatile moisture and CO₂: ZnCO₃ → ZnO + CO₂↑. The ore becomes porous.\n2. Roasting: Heating the ore in a continuous excess of air/oxygen below its melting point. Used for sulphide ores to convert them into oxides and remove sulphur, arsenic, and antimony as volatile oxides: 2ZnS + 3O₂ → 2ZnO + 2SO₂↑."
));

cases.push(makeChemCase(
  chapter, 8, "Reduction of Zinc Oxide: The Vertical Retort Process", "High-Temperature Carbon Reduction and Zinc Distillation",
  "Calcined/roasted Zinc oxide (ZnO) is mixed with crushed anthracite coke and clay, pressed into briquettes, and charged into a vertical continuous retort heated externally to 1400°C. Zinc metal has a boiling point of 907°C.",
  "What chemical reaction occurs inside the retort, in what physical state does zinc emerge, and why must it be cooled rapidly?",
  "ZnO + CO₂ → ZnCO₃; zinc emerges as a solid lump.",
  "ZnO + C xrightarrow{1400°C} Zn(g) + CO(g); zinc emerges as gaseous vapor because the operating temperature (1400°C) exceeds zinc's boiling point (907°C); it must be condensed rapidly without air exposure to prevent re-oxidation to ZnO (Zn + CO ⇌ ZnO + C).",
  "Zinc is reduced by hydrogen gas to form liquid zinc.",
  "Zinc oxide decomposes into zinc metal without using carbon.",
  "B",
  "Zinc oxide is reduced by carbon at high temperatures: ZnO(s) + C(s) xrightarrow{1400°C} Zn(g) + CO(g). Because the retort operates at 1400°C and zinc boils at 907°C, the newly formed zinc metal vaporizes immediately and distills out of the retort alongside carbon monoxide gas. In the condenser, the zinc vapors are rapidly chilled to molten liquid zinc (spelter). Rapid cooling is vital because the reduction reaction is reversible at high temperatures (Zn + CO ⇌ ZnO + C); slow cooling or presence of air would re-oxidise the zinc vapor back into zinc oxide dust ('blue powder')."
));

cases.push(makeChemCase(
  chapter, 9, "Spelter: Composition and Refining", "Fractional Distillation vs Electrolytic Refining of Zinc",
  "Crude zinc obtained directly from the condensation of zinc vapors in the retort process is known as 'Spelter'. Chemical assay reveals that Spelter contains approximately 97–98% Zinc, with impurities of Lead (b.p. 1740°C), Cadmium (b.p. 765°C), and traces of Iron.",
  "How can pure zinc (99.99%) be separated from its volatile impurities (Cadmium and Lead) by fractional distillation?",
  "Cadmium freezes first, followed by lead.",
  "By exploiting differences in boiling points: Cadmium boils at 765°C and distills off first; Zinc boils at 907°C and distills second, leaving high-boiling Lead (b.p. 1740°C) and Iron behind in the distillation retort.",
  "Lead is dissolved in water while zinc floats on top.",
  "All impurities are removed by blowing compressed air through the liquid.",
  "B",
  "Fractional distillation of zinc utilizes large boiling-point differentials:\n- Cadmium boils at 765°C (more volatile than zinc).\n- Zinc boils at 907°C.\n- Lead boils at 1740°C and Iron at 2862°C (far less volatile).\nIn the first distillation column maintained at ~800°C, cadmium vaporizes and distills over, leaving zinc, lead, and iron. In the second column maintained at ~950°C, pure zinc vaporizes and distills over into pure zinc ingots, while lead and iron remain behind as liquid residue in the retort bottom."
));

cases.push(makeChemCase(
  chapter, 10, "Extraction of Iron in Blast Furnace: Charge Composition", "Haematite, Coke, and Limestone Ratios",
  "A blast furnace stands 30 meters tall, lined with refractory firebrick. The furnace is continuously charged from the top via a double-bell hopper with a raw material mixture consisting of Haematite ore (Fe₂O₃), Coke (C), and Limestone (CaCO₃) in an approximate mass ratio of 8 : 4 : 1, while a superheated blast of dry air at 800°C is injected through tuyeres at the base.",
  "What specific metallurgical role does each of the three solid raw materials play in the blast furnace?",
  "Haematite is the fuel; Coke is the flux; Limestone is the source of iron.",
  "Haematite (Fe₂O₃) is the source of iron to be reduced; Coke (C) acts as the fuel to generate heat and produces carbon monoxide reducing agent; Limestone (CaCO₃) acts as the basic flux to remove acidic silica gangue as fusible slag.",
  "Haematite removes carbon; Coke absorbs oxygen; Limestone conducts electricity.",
  "All three components are fuels that burn together.",
  "B",
  "Roles of the blast furnace charge components:\n1. Haematite (Fe₂O₃): The concentrated iron ore that supplies the iron atoms to be reduced.\n2. Coke (C): Serves two essential functions: (a) Burns in the air blast at the tuyeres to generate high thermal temperatures (~1900°C); (b) Reacts with CO₂ to produce Carbon Monoxide (CO), the primary gaseous reducing agent.\n3. Limestone (CaCO₃): Thermal decomposition yields Calcium Oxide (CaO), a basic flux that reacts chemically with non-fusible acidic silica gangue (SiO₂) in the ore to form easily fusible, molten Calcium Silicate slag (CaSiO₃)."
));

cases.push(makeChemCase(
  chapter, 11, "Blast Furnace Zones: Combustion Zone at Tuyeres", "Exothermic Carbon Oxidation and Heat Generation",
  "At the bottom of the blast furnace hearth, right in front of the water-cooled copper blast nozzles (tuyeres), coke encounters the roaring blast of preheated air. The temperature soars to 1500°C–1900°C.",
  "What is the chemical reaction occurring in this Zone of Combustion, and what gas is generated?",
  "C + O₂ → CO₂ + 394 kJ/mol (strongly exothermic combustion of coke to carbon dioxide).",
  "Fe₂O₃ + 3C → 2Fe + 3CO",
  "CaCO₃ → CaO + CO₂",
  "2C + O₂ → 2CO",
  "A",
  "The base of the blast furnace is the Zone of Combustion (Bosh/Hearth tuyere region). Coke burns furiously in the excess oxygen of the preheated air blast: C(s) + O₂(g) → CO₂(g) + 394 kJ/mol. This is the most exothermic reaction in the furnace, raising the localized temperature to ~1900°C. This intense heat provides all the thermal energy needed to maintain the furnace temperatures and keep both iron and slag in a molten state."
));

cases.push(makeChemCase(
  chapter, 12, "Blast Furnace Zones: Reduction Zone and CO Producer", "Boudouard Equilibrium and Haematite Reduction",
  "As the hot carbon dioxide gas rises through the furnace, it encounters cooler layers of descending white-hot coke at 1000°C–1200°C, reacting endothermically to form carbon monoxide: CO₂ + C → 2CO. The carbon monoxide ascends to the upper reduction zone (400°C–700°C) where it meets the descending porous haematite ore.",
  "What is the stepwise reduction reaction of Haematite by Carbon Monoxide in the upper reduction zone?",
  "Fe₂O₃ + 3C → 2Fe + 3CO",
  "Fe₂O₃ + 3CO xrightarrow{400°C-700°C} 2Fe(s) (spongy iron) + 3CO₂(g)↑.",
  "Fe₂O₃ + 3O₂ → 2Fe + 3O₃",
  "Haematite melts into liquid steel without reacting with CO.",
  "B",
  "In the upper stack of the blast furnace (Zone of Reduction, 400°C–700°C), Carbon Monoxide acts as the primary reducing agent because gaseous CO can diffuse deeply into the porous lumps of haematite ore. The overall reduction is: Fe₂O₃(s) + 3CO(g) → 2Fe(s) + 3CO₂(g)↑. The reduced iron remains solid as a porous, spongy mass ('spongy iron') which descends into hotter zones, absorbing carbon and eventually melting at ~1200°C."
));

cases.push(makeChemCase(
  chapter, 13, "Blast Furnace Zones: Slag Formation and Flux Action", "Removal of Acidic Silica Gangue by Basic Flux",
  "Haematite ore contains substantial impurities of sand/quartz (Silica, SiO₂), which has a melting point of 1710°C and cannot melt at intermediate furnace temperatures. In the Zone of Slag Formation (800°C–1000°C), limestone decomposes into Calcium Oxide (CaO), which reacts with the silica.",
  "What is the balanced equation for the formation of slag, and why is this reaction critical to furnace operation?",
  "CaO + CO₂ → CaCO₃ (re-forming limestone)",
  "CaCO₃ xrightarrow{Δ} CaO + CO₂; CaO (basic flux) + SiO₂ (acidic gangue) → CaSiO₃ (molten calcium silicate slag, melting point ~1050°C).",
  "SiO₂ + C → Si + CO₂",
  "CaO + Fe₂O₃ → CaFe₂O₄",
  "B",
  "Silica (SiO₂) is an acidic, high-melting gangue that would choke the furnace if left solid. Limestone decomposes: CaCO₃ → CaO + CO₂. Calcium oxide is a basic flux. It undergoes an acid-base neutralization with acidic silica: CaO(s) + SiO₂(s) → CaSiO₃(l) (calcium silicate slag). Molten slag melts at ~1050°C and trickles down to the hearth as a fluid liquid, effectively sweeping non-fusible sand out of the furnace."
));

cases.push(makeChemCase(
  chapter, 14, "Blast Furnace Hearth: Density Separation of Molten Pig Iron and Slag", "Protective Floating Blanket Mechanism",
  "At the bottom of the blast furnace hearth, two immiscible liquid layers accumulate. Liquid pig iron (density ~7.0 g/cm³) collects at the very bottom and is periodically tapped through the lower iron notch. Molten calcium silicate slag (density ~2.8 g/cm³) forms a thick distinct layer floating directly on top of the molten iron and is tapped through the higher slag notch.",
  "What critical chemical protection does the floating molten slag layer provide to the molten iron below it?",
  "The slag cools the molten iron into solid steel.",
  "The floating slag layer forms a physical barrier that prevents the superheated molten iron from being re-oxidised back to iron oxide by the furious blast of air entering through the nearby tuyeres.",
  "The slag removes all iron atoms from the furnace.",
  "The slag conducts electricity to keep the furnace warm.",
  "B",
  "Molten slag (CaSiO₃, density ~2.8 g/cm³) has a far lower density than molten liquid iron (density ~7.0 g/cm³), floating as an immiscible blanket over the iron bath. This serves a vital chemical protective purpose: the oxygen in the roaring air blast entering through the tuyeres just above the hearth would instantly re-oxidise the hot liquid iron back into iron oxide (Fe + O₂ → FeO). The floating slag barrier physically shields the liquid iron from contacting the oxygen blast, preserving the reduced metal."
));

cases.push(makeChemCase(
  chapter, 15, "Comparison of Commercial Forms of Iron: Pig, Cast, Wrought, and Steel", "Carbon Content and Mechanical Properties",
  "A metallurgist compares four commercial varieties of iron:\nVariety 1: Crude iron tapped directly from the blast furnace (3.5%–4.5% carbon)\nVariety 2: Remelted with scrap iron and cast into molds (2.5%–3.5% carbon)\nVariety 3: Manufactured in a Bessemer converter or basic oxygen furnace (0.1%–1.5% carbon)\nVariety 4: Purified in a reverberatory furnace with haematite lining (<0.25% carbon)",
  "What are the names of Varieties 1, 2, 3, and 4 in order of decreasing carbon content?",
  "Steel, Cast Iron, Wrought Iron, Pig Iron",
  "Pig Iron (3.5%–4.5% C) > Cast Iron (2.5%–3.5% C) > Steel (0.1%–1.5% C) > Wrought Iron (<0.25% C).",
  "Wrought Iron > Steel > Cast Iron > Pig Iron",
  "Cast Iron > Pig Iron > Wrought Iron > Steel",
  "B",
  "The mechanical properties of iron are dictated almost entirely by its carbon content:\n1. Pig Iron: Crude product from blast furnace, highest carbon content (3.5%–4.5%), very hard, brittle, low melting point (~1200°C).\n2. Cast Iron: Pig iron remelted with scrap iron; 2.5%–3.5% carbon; brittle, cannot be forged or welded, expands upon solidification (excellent for castings).\n3. Steel: Intermediate carbon (0.1%–1.5%), high tensile strength, elastic, malleable, weldable, heat-treatable.\n4. Wrought Iron: Purest commercial form of iron (<0.25% carbon), extremely tough, malleable, ductile, easily welded and forged."
));

cases.push(makeChemCase(
  chapter, 16, "Why Cast Iron Expands on Solidification: Making Machine Castings", "Graphite Flake Precipitation and Intricate Mold Filling",
  "Heavy industrial engine blocks, drainage manhole covers, and ornate lamp posts are cast from molten Cast Iron rather than pure wrought iron or steel. When poured into intricate sand molds, cast iron expands slightly upon cooling, reproducing every fine detail of the mold without shrinkage cavities.",
  "Why does cast iron expand slightly upon solidification, and why can it not be forged with a hammer?",
  "Cast iron absorbs nitrogen gas from the sand mold.",
  "Upon cooling, carbon precipitates out of solution as low-density microscopic graphite flakes that expand the solid lattice; the presence of brittle graphite flakes destroys slip planes, making cast iron shatter under tensile impact (cannot be forged or hammered).",
  "Cast iron is an elastic rubber-like polymer.",
  "Cast iron contains lead that expands when frozen.",
  "B",
  "Cast iron contains 2.5%–3.5% carbon. As molten cast iron solidifies, excess carbon crystallizes out of the iron matrix as free graphite flakes (grey cast iron). Because graphite has a much lower density (~2.2 g/cm³) than iron (~7.8 g/cm³), its precipitation causes a slight overall net volume expansion upon freezing. This expansion forces the molten metal firmly into every sharp corner and crevice of the mold. However, these sharp graphite flakes act as internal stress-concentrators; under hammer blows (tension/shear), cracks propagate instantly along the graphite flakes, causing brittle fracture (it cannot be forged)."
));

cases.push(makeChemCase(
  chapter, 17, "Thermite Process (Aluminothermic Reduction): Welding Railway Tracks", "Extreme Exothermicity and High Affinity of Aluminium for Oxygen",
  "In remote railway construction, maintenance crews weld severed high-speed steel rail tracks in situ using 'Thermite'. A mixture of Iron(III) oxide (haematite powder) and Aluminium powder (ratio 3 : 1 by mass) is placed in a refractory crucible above the rail gap and ignited with a magnesium ribbon fuse. An intensely brilliant blinding flash occurs, and white-hot liquid molten iron (~3000°C) pours into the rail joint.",
  "What is the chemical reaction occurring in the Thermite process, and why is aluminium capable of reducing iron oxide?",
  "Al + Fe → AlFe + heat",
  "Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + 850 kJ/mol; Aluminium has a much higher chemical affinity for oxygen than iron does (higher position in reactivity series), releasing colossal exothermic enthalpy that melts the liberated iron (m.p. 1538°C) into a liquid at ~3000°C.",
  "Aluminium oxidises iron into rust.",
  "Magnesium ribbon melts the railway track directly without chemical reaction.",
  "B",
  "The Goldschmidt Thermite reaction: Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + 850 kJ/mol. Aluminium sits much higher than iron in the electrochemical activity series and has an immense heat of oxide formation (ΔH°f of Al₂O₃ is -1676 kJ/mol). The displacement reaction is so violently exothermic that the temperature instantaneously reaches 3000°C. Because this far exceeds the melting point of iron (1538°C), the reduced iron is produced as a boiling, white-hot liquid metal. The liquid iron sinks into the rail gap, fusing the rail ends into a seamless continuous weld."
));

cases.push(makeChemCase(
  chapter, 18, "Hoopes Three-Layer Process: Electrolytic Refining of Aluminium", "Density Stratification in High-Purity Refining",
  "Commercial aluminium from the Hall-Héroult cell is 99%–99.5% pure, which is unsuitable for specialized optical mirrors and aerospace foils. In Hoopes process, aluminium is refined to 99.99% purity in a cell containing three distinct immiscible liquid layers at 750°C:\nBottom Layer: Heavy molten impure aluminium alloyed with Copper (density ~3.5 g/cm³)\nMiddle Layer: Molten mixture of fluorides of Al, Ba, Na, and Ca (density ~2.7 g/cm³)\nTop Layer: Molten pure aluminium (density ~2.3 g/cm³)",
  "How does current flow, and which layer acts as the anode and cathode?",
  "Bottom layer is Cathode; Top layer is Anode.",
  "Bottom layer (impure Al-Cu alloy) is the ANODE (Al loses electrons: Al → Al³⁺ + 3e⁻); Top layer (pure Al) is the CATHODE (Al³⁺ gains electrons: Al³⁺ + 3e⁻ → Al); pure aluminium floats on top because it has the lowest density.",
  "Current flows sideways through the carbon walls only.",
  "Middle layer acts as both anode and cathode.",
  "B",
  "Hoopes electrolytic cell relies on density stratification to keep three liquid layers unmixed without physical diaphragms:\n1. Bottom layer (Anode, +): Impure aluminium alloyed with copper (copper increases density to ~3.5 g/cm³). Connected to carbon bottom lining. Aluminium atoms ionise: Al → Al³⁺ + 3e⁻.\n2. Middle layer (Electrolyte): Molten cryolite, barium fluoride, and aluminium fluoride (density ~2.7 g/cm³). Al³⁺ ions migrate upward through this layer.\n3. Top layer (Cathode, -): Molten pure aluminium (density ~2.3 g/cm³), connected to suspended graphite rods. Al³⁺ ions receive electrons and deposit as 99.99% pure aluminium, which floats at the top and is tapped off."
));

cases.push(makeChemCase(
  chapter, 19, "Alloy: Duralumin in Aircraft Construction", "Lightness Combined with High Tensile Strength",
  "A commercial aerospace engineer selects materials for the fuselage skin and wing ribs of a passenger airliner. Pure aluminium is rejected for being too soft and weak (tensile strength ~90 MPa). Steel is rejected for being too heavy (density ~7.8 g/cm³). The engineer specifies 'Duralumin' (an alloy of 95% Aluminium, 4% Copper, 0.5% Magnesium, and 0.5% Manganese).",
  "What mechanical advantages does Duralumin offer over pure aluminium and steel for aircraft construction?",
  "Duralumin is lighter than air and floats like helium.",
  "Duralumin combines the low density of aluminium (~2.8 g/cm³, lightness) with the high tensile strength and hardness of mild steel (~450 MPa), along with superior corrosion resistance and ductility.",
  "Duralumin is an electrical insulator that blocks radar waves.",
  "Duralumin is cheaper than raw iron ore.",
  "B",
  "Aircraft structural efficiency requires a high strength-to-weight ratio. Pure aluminium has low density (~2.7 g/cm³) but poor yield strength (~90 MPa). Alloying aluminium with 4% Cu and small amounts of Mg and Mn followed by heat-treatment (precipitation hardening) produces Duralumin. Sub-microscopic CuAl₂ precipitates lock crystal slip planes, quadrupling tensile strength to ~450 MPa (comparable to structural steel) while maintaining 65% weight savings over steel, providing the stiffness, lightness, and fatigue resistance essential for flight."
));

cases.push(makeChemCase(
  chapter, 20, "Alloy: Magnalium for Precision Balances and Optical Instruments", "Lightweight Rigidity and Mirror Polish",
  "A laboratory instrument maker manufactures beam balances and astronomical telescope casings from 'Magnalium' (an alloy of 95% Aluminium and 5% Magnesium).",
  "What properties of Magnalium make it superior to pure aluminium and brass for scientific balances?",
  "Magnalium is a liquid alloy that self-levels.",
  "Magnalium is even lighter than pure aluminium, significantly harder and more rigid, highly resistant to atmospheric corrosion, and capable of taking a brilliant, mirror-like polish.",
  "Magnalium is magnetic and attracts laboratory weights.",
  "Magnalium dissolves in acid to form protective glass.",
  "B",
  "Magnalium (95% Al, 5% Mg) is an engineered lightweight structural alloy. Because magnesium has a density of only 1.74 g/cm³, Magnalium is lighter than pure aluminium (~2.6 g/cm³). The magnesium solute atoms distort the aluminium crystal lattice, greatly increasing hardness, mechanical rigidity, and dimensional stability over time. It resists oxidation in lab air and can be machined and buffed to a mirror finish, making it the premier material for precision analytical balance beams and scientific instruments."
));

cases.push(makeChemCase(
  chapter, 21, "Alloy: Brass vs Bronze Composition and Properties", "Copper-Zinc vs Copper-Tin Metallurgical Profiles",
  "A museum curator inspects two ancient metallic artifacts:\nArtifact A is a shiny golden-yellow musical trumpet (Brass).\nArtifact B is a dark, heavy, weather-resistant antique statue of a warrior (Bronze).",
  "What is the chemical composition of Brass and Bronze, and why is Bronze preferred for outdoor statues?",
  "Brass = Copper + Lead; Bronze = Copper + Iron",
  "Brass is an alloy of Copper (60–70%) and Zinc (30–40%); Bronze is an alloy of Copper (80%), Tin (18%), and Zinc (2%); Bronze is far harder, more corrosion-resistant to weathering, and expands slightly upon solidifying to take crisp casting impressions.",
  "Brass = Pure zinc; Bronze = Pure tin",
  "Both alloys have identical composition but are painted different colors.",
  "B",
  "Comparison of copper alloys:\n1. Brass (Cu + Zn): Homogeneous solid solution of 60–70% Copper and 30–40% Zinc. Golden-yellow appearance, malleable, ductile, easily machined, highly sonorous (resonant), ideal for musical instruments, plumbing fittings, and ammunition casings.\n2. Bronze (Cu + Sn + Zn): Alloy of ~80% Copper, ~18% Tin, and ~2% Zinc. Harder and more brittle than brass, highly resistant to sea water and atmospheric corrosion. Crucially, bronze expands slightly upon freezing, filling the intricate details of sculptors' molds before developing a handsome protective green patina (CuCO₃·Cu(OH)₂), making it ideal for statues, bells, and medals."
));

cases.push(makeChemCase(
  chapter, 22, "Alloy: Solder (Soft Solder) in Electrical Circuits", "Eutectic Low Melting Point for Electrical Fusing",
  "An electronics technician solders copper wires onto a printed circuit board using an alloy called 'Solder' (consisting of 50% Lead and 50% Tin). Pure Lead melts at 327°C, and pure Tin melts at 232°C. The technician uses a soldering iron heated to only 200°C.",
  "Why does Solder melt at a much lower temperature (~183°C) than either of its constituent pure metals, and why is this critical in electronics?",
  "Lead decomposes into liquid mercury when mixed with tin.",
  "Alloying creates a eutectic mixture with disrupted crystal lattice packing that lowers the melting point to ~183°C; this allows the solder to fuse readily and create electrical joints without melting or thermally destroying delicate copper tracks and semiconductor components.",
  "Solder is an adhesive glue that does not contain metals.",
  "Tin boils away, leaving lead as a cold liquid.",
  "B",
  "Pure lead melts at 327°C, and pure tin melts at 232°C. When mixed in a 50:50 (or 63:37 eutectic) proportion, the disparate atomic radii of Lead and Tin prevent the formation of a tightly bound, uniform crystal lattice. The disordered atomic packing significantly lowers cohesive binding energy, producing a eutectic melting point of ~183°C (much lower than either constituent). In electronics, this low melting point allows making reliable electrical and mechanical joints using a modest soldering iron without scorching delicate silicone chips or lifting copper circuit board traces."
));

cases.push(makeChemCase(
  chapter, 23, "Alloy: Stainless Steel and Chromium Passivation", "Invisible Chromium Oxide Layer That Prevents Rusting",
  "A cutlery manufacturer fabricates chef knives and surgical scalpels from Stainless Steel (73% Iron, 18% Chromium, 8% Nickel, 1% Carbon). Despite being exposed daily to moisture, citrus fruit acids, and boiling water, the knives never develop rust.",
  "What is the chemical mechanism by which Chromium prevents iron from rusting in stainless steel?",
  "Chromium is a radioactive element that evaporates water.",
  "Chromium (18%) in the alloy reacts with atmospheric oxygen to form an invisible, ultra-thin, continuous, self-healing passive surface layer of Chromium(III) oxide (Cr₂O₃) that blocks oxygen and water from attacking the iron substrate.",
  "Nickel absorbs all magnetic fields to prevent oxidation.",
  "Carbon converts all water into methane gas.",
  "B",
  "Ordinary iron rusts because iron oxide (Fe₂O₃·xH₂O) is porous, flaky, and non-adherent, allowing air and water to penetrate deeper into the metal. When at least 10.5% (typically 18%) Chromium is alloyed with iron, chromium has a higher thermodynamic affinity for oxygen than iron does. It reacts with atmospheric oxygen to form a microscopic, transparent, non-porous, adherent passive film of chromium(III) oxide (Cr₂O₃). Even if the surface is scratched or abraded, the exposed chromium atoms instantly react with ambient oxygen to 'self-heal' the protective oxide film, rendering stainless steel immune to corrosion."
));

cases.push(makeChemCase(
  chapter, 24, "Amalgams: Why Mercury is Shipped in Iron Flasks", "Amalgam Formation and Iron's Exemption",
  "A chemical logistics company transports liquid Mercury in heavy, welded Iron containers. A trainee suggests switching to lighter Aluminium, Copper, or Zinc flasks.",
  "Why must liquid Mercury ALWAYS be stored and transported in Iron flasks, and what is an 'Amalgam'?",
  "Iron is transparent to mercury rays.",
  "An amalgam is an alloy of mercury with another metal; mercury readily attacks and dissolves aluminium, copper, zinc, and silver to form amalgams, but Iron, Platinum, and Cobalt do NOT form amalgams with mercury and remain chemically unaffected.",
  "Iron flasks freeze mercury into a solid.",
  "Mercury reacts with iron to produce gold.",
  "B",
  "An 'amalgam' is a metallic solution or alloy containing liquid mercury as one of its components (e.g., sodium amalgam, silver-tin dental amalgam). Mercury is a liquid metal that wets and dissolves most metals (Cu, Zn, Ag, Au, Al) via intermetallic bonding, destroying containers made of those metals. In fact, mercury destroys aircraft aluminium structures within hours. However, Iron (along with Platinum, Tantalum, and Tungsten) has negligible solubility in mercury and does not form an amalgam. Hence, liquid mercury is exclusively stored and shipped in forged iron or steel bottles."
));

cases.push(makeChemCase(
  chapter, 25, "Thermal Extraction of Mercury from Cinnabar ($HgS$)", "Low Affinity for Oxygen and Thermal Decomposition",
  "In the industrial metallurgy of Mercury, crushed Cinnabar ore (Mercury(II) sulphide, HgS) is roasted in a furnace in a current of air at 500°C without adding any carbon reducing agent. Gaseous mercury vapor emerges from the furnace and is condensed in water-cooled earthenware tubes to yield liquid mercury metal.",
  "What is the chemical reaction occurring during the extraction of mercury from cinnabar, and why is no reducing agent required?",
  "HgS + C → Hg + CS₂",
  "2HgS + 3O₂ xrightarrow{Δ} 2HgO + 2SO₂↑, followed immediately by thermal decomposition: 2HgO xrightarrow{>400°C} 2Hg(g) + O₂↑; Mercury sits at the bottom of the reactivity series with very weak metal-oxygen bonds, so heat alone decomposes its oxide.",
  "HgS decomposes into helium gas and lead.",
  "Cinnabar reacts with nitrogen to form mercury nitrate.",
  "B",
  "Mercury sits near the very bottom of the electrochemical reactivity series (below hydrogen and copper). When cinnabar is roasted in air: 2HgS(s) + 3O₂(g) → 2HgO(s) + 2SO₂(g)↑. Mercury(II) oxide (HgO) is thermally unstable because the Hg-O bond enthalpy is very low. At the roasting temperature (>400°C–500°C), HgO undergoes spontaneous thermal decomposition: 2HgO(s) → 2Hg(g)↑ + O₂(g)↑. Because mercury boils at 357°C, it distills directly out of the furnace as pure mercury vapor, which condenses into liquid metal upon cooling."
));

cases.push(makeChemCase(
  chapter, 26, "Magnetic Separation: Separating Tinstone ($SnO_2$) from Wolframite", "Exploiting Magnetic Susceptibility Differences",
  "Tin ore (Cassiterite / Tinstone, SnO₂) is non-magnetic, but in tin mines it is heavily contaminated with Wolframite (iron/manganese tungstate, FeWO₄ / MnWO₄), which is magnetic. Both have similar high densities, making gravity separation ineffective.",
  "How is magnetic separation utilized to separate Tinstone from Wolframite?",
  "The ore is dissolved in nitric acid and placed near a compass.",
  "Finely powdered ore is fed onto a leather conveyor belt running over a magnetic roller; non-magnetic Tinstone drops vertically into a collector hopper under gravity, while magnetic Wolframite is attracted to the roller and carried farther, dropping into a separate hopper.",
  "A magnetic crane lifts all the tin out of the ore.",
  "The ore is heated until Wolframite evaporates.",
  "B",
  "Magnetic separation is employed when one component (ore or gangue) is magnetic and the other is non-magnetic. Cassiterite (SnO₂) is diamagnetic (non-magnetic), while its primary impurity Wolframite ((Fe,Mn)WO₄) is ferromagnetic/paramagnetic. The pulverized ore travels along a conveyor belt moving over a powerful electromagnetic roller. As the belt rounds the roller, non-magnetic SnO₂ flies off tangent to the belt and drops vertically into the first bin. Magnetic Wolframite clings to the belt by magnetic attraction until the belt leaves the magnetic field, dropping into a second bin."
));

cases.push(makeChemCase(
  chapter, 27, "Hydraulic Washing (Gravity Separation): Density Differential", "Wilfley Table and Hydraulic Classifier Mechanism",
  "Haematite ore (Fe₂O₃, specific gravity ~5.2) contains large quantities of rocky, sandy gangue (specific gravity ~2.6). The pulverized ore is fed onto a sloped, vibrating wooden platform with horizontal wooden ridges ('Wilfley table') over which a continuous upward/downward stream of water flows.",
  "How does gravity separation separate the heavy haematite ore from the light gangue?",
  "Haematite dissolves in water while gangue floats away.",
  "The lighter gangue particles (density 2.6) are easily washed away by the rushing water stream, while the heavier haematite particles (density 5.2) sink rapidly, get trapped behind the wooden riffles, and are shaken off into a separate concentrate bin.",
  "The water reacts chemically to turn haematite into gas.",
  "Gravity separation uses centrifuges in outer space.",
  "B",
  "Gravity separation (hydraulic washing) is based on the difference in specific gravities (densities) between ore particles and gangue particles. It is ideal for heavy oxide ores like Haematite (Fe₂O₃, sp gr 5.2) and Tinstone (SnO₂, sp gr 7.0). When an upward stream of water or a vibrating grooved Wilfley table is used, the light siliceous and clay gangue (sp gr ~2.6) is buoyed up and washed away down the incline by the water flow. The dense ore grains sink through the current, lodge behind the transverse wooden riffles, and are collected as enriched ore concentrate."
));

cases.push(makeChemCase(
  chapter, 28, "Smelting: Role of Reducing Agent and Flux Combined", "Simultaneous Chemical Reduction and Slag Cleansing",
  "A metallurgical textbook defines 'Smelting' as a combined high-temperature operation carried out in a furnace (blast furnace or reverberatory furnace) following calcination or roasting.",
  "What is the precise definition of 'Smelting' in extractive metallurgy?",
  "Smelting is the process of washing ore with cold water.",
  "Smelting is the process of reducing roasted or calcined ore to molten metal at high temperatures above its melting point using a chemical reducing agent (coke or CO) in the presence of a suitable flux to remove gangue as fusible slag.",
  "Smelting is the painting of metal with rust-proof coating.",
  "Smelting is the process of dissolving ore in sulphuric acid.",
  "B",
  "Smelting is the core thermal reduction step in pyrometallurgy. It involves heating the calcined or roasted metal oxide with a reducing agent (usually carbon/coke, carbon monoxide, or hydrogen) and a flux (substance that reacts with non-fusible gangue) to temperatures exceeding the melting points of both the metal and the slag. The reducing agent strips oxygen from the metal oxide, converting it to molten metal, while the flux chemically combines with the gangue to form an immiscible molten slag layer that separates cleanly from the liquid metal."
));

cases.push(makeChemCase(
  chapter, 29, "Acidic vs Basic Flux: Selection Criteria", "Neutralizing Acidic vs Basic Gangue",
  "A metallurgist formulates the flux for two different smelting operations:\nOperation 1: Copper extraction where the roasted ore contains excess basic Iron(II) oxide (FeO) gangue.\nOperation 2: Iron extraction where the haematite ore contains excess acidic Silica (SiO₂) gangue.",
  "What types of flux must be selected for Operation 1 and Operation 2?",
  "Operation 1 requires Basic flux; Operation 2 requires Acidic flux.",
  "Operation 1 requires Acidic flux (Silica, SiO₂) to form iron silicate slag: FeO + SiO₂ → FeSiO₃; Operation 2 requires Basic flux (Limestone / Lime, CaO) to form calcium silicate slag: CaO + SiO₂ → CaSiO₃.",
  "Both operations use pure water as flux.",
  "Both operations use sodium chloride as flux.",
  "B",
  "The choice of flux is governed strictly by the chemical nature of the gangue to be removed (acid-base neutralization):\n1. If the gangue is BASIC (e.g., FeO, CaO, MgO in copper smelting), an ACIDIC FLUX like Silica (sand, SiO₂) is added: FeO(basic gangue) + SiO₂(acidic flux) → FeSiO₃ (fusible iron silicate slag).\n2. If the gangue is ACIDIC (e.g., SiO₂, P₂O₅ in iron smelting), a BASIC FLUX like Limestone (CaCO₃ → CaO) is added: CaO(basic flux) + SiO₂(acidic gangue) → CaSiO₃ (fusible calcium silicate slag)."
));

cases.push(makeChemCase(
  chapter, 30, "Environmental Hazard: Sulphur Dioxide from Roasting and Acid Rain", "Capture of $SO_2$ in Sulphuric Acid Manufacture",
  "A copper and zinc smelter in an industrial basin roasts thousands of tons of sulphide ores daily (2ZnS + 3O₂ → 2ZnO + 2SO₂; 2CuFeS₂ + 4O₂ → Cu₂S + 2FeO + 3SO₂). In the 19th century, this gas was vented into the air, completely killing all vegetation within a 20-mile radius.",
  "How do modern metallurgical smelters capture and neutralize this toxic $SO_2$ gas to prevent acid rain?",
  "They freeze the SO₂ into ice and bury it underground.",
  "They scrub the flue gases and channel the captured SO₂ directly into an adjacent Contact Process plant, oxidising it to SO₃ and converting it into commercial Sulphuric acid (H₂SO₄).",
  "They burn SO₂ with methane to produce diamonds.",
  "They vent it into the stratosphere through taller chimneys.",
  "B",
  "Sulphur dioxide (SO₂) emitted during sulphide roasting is a severe atmospheric pollutant that reacts with cloud moisture to form sulphurous and sulphuric acids, causing catastrophic acid rain that acidifies soils, destroys aquatic ecosystems, and corrodes infrastructure. Modern pyrometallurgical plants are legally mandated to install electrostatic dust precipitators and gas scrubbing systems that clean and capture the hot SO₂ streams, feeding them directly into an on-site Contact Process chemical plant: 2SO₂ + O₂ xrightarrow{V₂O₅} 2SO₃; SO₃ + H₂SO₄ → H₂S₂O₇ → 2H₂SO₄, converting waste pollutant into valuable industrial acid."
));

cases.push(makeChemCase(
  chapter, 31, "Corrosion: Why Gold and Platinum Never Tarnish", "Electrochemical Inactivity and High Ionisation Energy",
  "Archaeologists excavating a 3000-year-old Egyptian pharaoh's tomb discover that iron swords have rusted into crumbled brown powder, bronze shields have developed a thick green crust, but gold funeral masks and platinum jewelry shine with the exact same brilliant, untarnished luster as the day they were crafted.",
  "Why are Gold and Platinum completely immune to corrosion in the Earth's atmosphere over thousands of years?",
  "Gold and platinum are plastic materials that repel water.",
  "Gold and Platinum sit at the very bottom of the electrochemical series with positive standard reduction potentials and very high ionisation energies; they have zero thermodynamic tendency to lose electrons to atmospheric oxygen or moisture, making them chemically unreactive noble metals.",
  "The tomb was filled with carbon dioxide gas.",
  "Gold reflects all sunlight in the tomb.",
  "B",
  "Corrosion is the spontaneous electrochemical oxidation of a metal by atmospheric agents (O₂, H₂O, CO₂). Reactive metals (Fe, Cu, Zn) have negative standard reduction potentials and low ionisation potentials, readily losing valence electrons to form metal oxides, hydroxides, and carbonates. Gold (E° = +1.50 V) and Platinum (E° = +1.18 V) are noble metals with very high positive reduction potentials and tightly bound valence electrons (due to relativistic contraction and poor 4f shielding). The Gibbs free energy for the reaction of gold with oxygen (4Au + 3O₂ → 2Au₂O₃) is strongly positive (+ΔG), making spontaneous oxidation thermodynamically impossible under ambient conditions."
));

cases.push(makeChemCase(
  chapter, 32, "Anodic Protection of Underground Pipelines: Sacrificial Anodes", "Magnesium and Zinc Cathodic Protection",
  "A petroleum company buries a 500-kilometer cross-country steel pipeline underground. To prevent soil moisture and salts from corroding the pipe, electrical engineers attach thick blocks of solid Magnesium or Zinc to the pipeline at regular intervals using insulated copper cables.",
  "How do blocks of Magnesium prevent the underground steel pipeline from corroding?",
  "Magnesium absorbs all electricity from lightning strikes.",
  "Magnesium is significantly more electropositive than iron (lower reduction potential); it acts as a 'sacrificial anode', losing electrons preferentially and corroding away while continuously pumping electrons into the steel pipe, keeping the iron cathodic and uncorroded.",
  "Magnesium converts the surrounding soil into solid rock.",
  "Magnesium coats the pipe with molten metal.",
  "B",
  "This technique is known as Sacrificial Anode Cathodic Protection. Iron corrodes by anodic oxidation: Fe → Fe²⁺ + 2e⁻. Magnesium (E° = -2.37 V) is vastly more active and electropositive than iron (E° = -0.44 V). When connected to the pipe, a galvanic circuit is established with the moist soil acting as an electrolyte. Magnesium acts as the anode, oxidising spontaneously: Mg → Mg²⁺ + 2e⁻. The released electrons travel through the copper cable into the steel pipeline, forcing the iron to act exclusively as a cathode (where dissolved oxygen is reduced: O₂ + 2H₂O + 4e⁻ → 4OH⁻). The magnesium blocks slowly dissolve and are replaced every few years, preserving the pipeline indefinitely."
));

cases.push(makeChemCase(
  chapter, 33, "Tinning: Why Scratched Tin-Plated Cans Rust Faster Than Bare Iron", "Galvanic Couple Acceleration When Coating is Breached",
  "Food tin cans are manufactured by coating mild steel sheet with a thin layer of pure Tin (Sn). A food scientist warns that if a tin can is dented or deeply scratched so that the underlying iron is exposed, the iron rusts far MORE rapidly than if it had never been coated with tin at all.",
  "Why does a breach in a tin coating accelerate the rusting of the underlying iron?",
  "Tin reacts with food to form sulphuric acid.",
  "Iron is more electropositive than tin (E° Fe²⁺/Fe = -0.44 V vs Sn²⁺/Sn = -0.14 V); when both metals are exposed to moisture, a galvanic couple is formed where Iron acts as the anode and corrodes rapidly to protect the tin cathode.",
  "Tin dissolves in air to produce water.",
  "Tin becomes radioactive when scratched.",
  "B",
  "In the electrochemical activity series, Iron is ABOVE Tin (Fe is more active; E° Fe = -0.44 V, E° Sn = -0.14 V). As long as the tin coating is completely intact, tin provides excellent non-toxic barrier protection against acidic foods. However, if the coating is scratched to expose bare iron, a galvanic corrosion cell is created. Because iron has a more negative reduction potential than tin, iron acts as the ANODE and tin acts as the CATHODE. The presence of the large cathodic tin surface accelerates the electrochemical dissolution of the small exposed iron anode, causing rapid pitting and perforation of the can."
));

cases.push(makeChemCase(
  chapter, 34, "Hall's Process for Bauxite Purification", "Sodium Carbonate Fusion for Siliceous Bauxite",
  "When bauxite contains significant quantities of both Iron(III) oxide and Silica impurities, Baeyer's process can suffer from loss of alumina as insoluble sodium aluminium silicate. In Hall's chemical process, the crude bauxite is fused with solid Sodium Carbonate (Na₂CO₃) in a reverberatory furnace at 1000°C.",
  "What chemical reaction occurs during fusion with sodium carbonate, and how is aluminium hydroxide precipitated from the resulting solution?",
  "Al₂O₃ + Na₂CO₃ → Al + Na₂O + CO₂",
  "Al₂O₃ + Na₂CO₃ xrightarrow{1000°C} 2NaAlO₂ + CO₂↑; the cooled fused mass is extracted with water, and Carbon Dioxide gas is bubbled through the solution at 50°C–60°C to precipitate aluminium hydroxide: 2NaAlO₂ + CO₂ + 3H₂O → 2Al(OH)₃↓ + Na₂CO₃.",
  "Bauxite decomposes into metallic sodium.",
  "Sodium carbonate bleaches the bauxite to white.",
  "B",
  "Hall's process is an alternative dry chemical method for purifying bauxite:\n1. Fusion: Crude bauxite is fused with sodium carbonate: Al₂O₃(s) + Na₂CO₃(s) xrightarrow{1000°C} 2NaAlO₂(s) + CO₂(g)↑. Iron oxide does not react and forms an insoluble sinter.\n2. Leaching: The cooled mass is stirred with warm water; soluble sodium aluminate dissolves, while iron oxide is filtered off.\n3. Precipitation: Carbon dioxide gas is bubbled through the filtrate at 50°C–60°C: 2NaAlO₂(aq) + CO₂(g) + 3H₂O(l) → 2Al(OH)₃(s)↓ + Na₂CO₃(aq). The precipitated Al(OH)₃ is filtered, washed, and calcined to pure Al₂O₃."
));

cases.push(makeChemCase(
  chapter, 35, "Alnico: Permanent Magnet Composition", "High Coercivity Alloy for Modern Loudspeakers",
  "In acoustic engineering, high-efficiency loudspeakers and electric guitar pickups require powerful permanent magnets that do not lose their magnetic field over time. Engineers fabricate these magnets from 'Alnico'.",
  "What are the constituent elements of the magnetic alloy Alnico?",
  "Aluminium, Nickel, Cobalt, and Iron (plus minor Copper and Titanium).",
  "Aluminium, Nitrogen, and Carbon.",
  "Aluminium, Nickel, and Copper only.",
  "Lead, Tin, and Zinc.",
  "A",
  "Alnico is an acronym derived from its primary elemental constituents: ALuminium (8–12%), NIckel (14–20%), CObalt (5–35%), and the balance Iron (Fe), often with small additions of Copper and Titanium. Alnico alloys are ferromagnetic and possess exceptionally high coercivity (resistance to demagnetization) and high thermal stability, retaining their magnetic properties even at temperatures up to 500°C. They are widely used in loudspeakers, microphone transducers, electric guitar pickups, and magnetic sensors."
));

cases.push(makeChemCase(
  chapter, 36, "Why Carbon Monoxide is the Reducing Agent in the Upper Blast Furnace", "Gas Diffusion and Activation Energy in Porous Ores",
  "A student asks why Carbon Monoxide (CO) gas reduces haematite in the upper blast furnace (Fe₂O₃ + 3CO → 2Fe + 3CO₂), while solid Coke (C) only reduces iron oxides at the very bottom (FeO + C → Fe + CO).",
  "Why is carbon monoxide a vastly more effective reducing agent than solid carbon at the lower temperatures (400°C–700°C) of the upper furnace?",
  "Solid carbon is an insulator that cannot transfer electrons.",
  "Carbon monoxide is a gas that can penetrate deeply into the microscopic pores and crevices of the haematite lumps to provide intimate molecular contact at low temperatures, whereas solid coke is an immobile solid that can only react at physical contact points with high activation energy.",
  "Carbon monoxide is colder than coke.",
  "Coke evaporates out of the furnace before reacting.",
  "B",
  "Chemical kinetics in heterogeneous reactions depend on molecular contact and mass transfer. Solid coke (carbon) can only interact with solid haematite at discrete microscopic contact points where two solid surfaces touch; solid-solid reduction has an enormous activation energy and is negligibly slow below 800°C. Carbon monoxide is a gaseous reducing agent. It permeates rapidly through every microscopic pore, fissure, and capillary of the porous haematite lumps, bathing every iron atom in a continuous reducing gas stream, allowing rapid thermodynamic reduction at 400°C–700°C."
));

cases.push(makeChemCase(
  chapter, 37, "Refining of Blister Copper: Poling Process", "Reduction of Dissolved Cuprous Oxide with Green Wood Poles",
  "Before electrolytic refining, crude molten copper from the converter furnace contains dissolved Copper(I) oxide (Cu₂O) impurities that make the metal brittle. The smelter operators stir the molten metal bath with long, green, freshly cut hardwood poles (a traditional process called 'Poling'). Dense white clouds of steam and hydrocarbons erupt, and the copper becomes ductile.",
  "What chemical reaction occurs during the poling of crude copper?",
  "The wood melts into carbon soot that coats the copper.",
  "The heat of the molten copper causes the green wood to undergo destructive distillation, liberating hydrocarbon reducing gases (methane, aldehydes) that reduce dissolved Copper(I) oxide back to metallic copper: Cu₂O + CH₄ (or CO) → 2Cu + CO₂ + H₂O.",
  "The green wood absorbs copper into its cellulose fibers.",
  "The wood acts as a basic flux that removes silica.",
  "B",
  "During smelting, molten copper dissolves atmospheric oxygen to form cuprous oxide (Cu₂O), which segregates at crystal grain boundaries upon cooling, making the metal brittle and unworkable. In 'poling', freshly cut green saplings/logs are thrust into the molten copper bath at 1150°C. The intense heat causes rapid destructive distillation of the green timber, releasing reducing hydrocarbon gases (primarily methane, carbon monoxide, and hydrogen). These reducing gases bubble through the liquid copper, reacting with dissolved cuprous oxide: 4Cu₂O + CH₄ → 8Cu + CO₂↑ + 2H₂O↑, reducing oxygen content to <0.04% (producing tough-pitch copper)."
));

cases.push(makeChemCase(
  chapter, 38, "Bessemerization of Copper Matte: Formation of Blister Copper", "Self-Reduction (Auto-Reduction) of Copper Sulphide",
  "In copper extraction, 'copper matte' (a molten mixture of Cu₂S and FeS) is charged into a tilting Bessemer converter. First, a blast of air oxidises FeS to FeO, which is slagged off with silica flux. Then, the air blast oxidises part of the Cu₂S to Cu₂O. When the air blast is stopped, the un-oxidised Cu₂S reacts directly with the Cu₂O to produce metallic copper.",
  "What is the balanced equation for this 'self-reduction' reaction, and why is the product called 'Blister Copper'?",
  "Cu₂S + O₂ → 2Cu + SO₂",
  "Cu₂S + 2Cu₂O → 6Cu(l) + SO₂(g)↑; as the molten copper solidifies, escaping SO₂ gas bubbles erupt through the surface, freezing into rough, blister-like swellings.",
  "Cu₂S + 2Fe → 2Cu + Fe₂S",
  "Copper melts into yellow brass.",
  "B",
  "The conversion of copper matte is an example of metallurgical auto-reduction (self-reduction):\n1. Partial oxidation: 2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂↑.\n2. Auto-reduction: The newly formed cuprous oxide reacts with the remaining cuprous sulphide without requiring any external reducing agent: Cu₂S(l) + 2Cu₂O(l) → 6Cu(l) + SO₂(g)↑.\n3. Blister formation: Sulphur dioxide is highly soluble in molten copper. As the molten copper is poured into flat molds and freezes, the solubility of SO₂ drops precipitously. The escaping gas bubbles burst through the crust, leaving the solidified metal covered with rough, blister-like cavities; hence the industrial name 'Blister Copper' (~98% pure)."
));

cases.push(makeChemCase(
  chapter, 39, "Thermal Reduction of Haematite by Carbon: Why $CO$ Preponderates Over $CO_2$ at High Temp", "The Boudouard Reaction ($\Delta G$ and Temperature)",
  "In a thermodynamic simulation of blast furnace gas chemistry, an engineer tracks the Boudouard equilibrium: C(s) + CO₂(g) ⇌ 2CO(g); ΔH° = +172 kJ/mol. Below 500°C, the equilibrium lies almost 100% to the left (CO₂ is stable). Above 900°C, the equilibrium shifts almost 100% to the right (CO is stable).",
  "Applying Le Chatelier's principle and thermodynamics, why is Carbon Monoxide the dominant gas above 900°C in the blast furnace?",
  "CO has a higher molecular weight than CO₂.",
  "The reaction C + CO₂ ⇌ 2CO is endothermic (absorbs heat, ΔH > 0) and produces an increase in gas moles (ΔS > 0); high temperatures thermodynamically favor the endothermic forward reaction, making CO the only stable carbon oxide at elevated temperatures.",
  "Carbon dioxide freezes at 900°C.",
  "Carbon monoxide absorbs neutrons from the coke.",
  "B",
  "The Boudouard reaction is: C(s) + CO₂(g) ⇌ 2CO(g). It is an endothermic reaction (ΔH° = +172 kJ/mol) and increases the number of gaseous molecules from 1 to 2, resulting in a large positive entropy change (ΔS° > 0). According to the Gibbs equation (ΔG = ΔH - TΔS), the -TΔS term becomes increasingly negative as temperature T rises. Above 800°C–900°C, ΔG becomes strongly negative, shifting the equilibrium completely toward CO. Therefore, any CO₂ entering the hot coke zone is instantly reduced to CO, making CO the overwhelming reducing gas throughout the middle and lower furnace."
));

cases.push(makeChemCase(
  chapter, 40, "Why Cryolite Contains Sodium and Fluorine, Yet Aluminium Deposits", "Electrochemical Discharge Potentials in Cryolite Bath",
  "A student examines the formula of Cryolite (Na₃AlF₆) used in the Hall-Héroult cell. The bath contains abundant Sodium cations (Na⁺) alongside Aluminium cations (Al³⁺).",
  "Why is Aluminium deposited at the carbon cathode rather than Sodium metal?",
  "Sodium is a gas at 950°C and cannot deposit.",
  "Aluminium sits lower in the electrochemical series than Sodium (higher standard reduction potential: E° Al³⁺/Al = -1.66 V vs Na⁺/Na = -2.71 V); Al³⁺ ions accept electrons far more easily than Na⁺, depositing pure molten aluminium metal at the cathode.",
  "Cryolite does not contain sodium atoms.",
  "Sodium dissolves in the carbon electrodes.",
  "B",
  "In the fused Hall-Héroult electrolyte, both Na⁺ (from cryolite) and Al³⁺ (from alumina) are present in the molten bath and migrate to the negatively charged carbon cathode. However, Sodium is an alkali metal (Group 1) with an extremely negative reduction potential (-2.71 V). Aluminium (Group 13) has a reduction potential of -1.66 V (more than 1 Volt less negative than sodium). Under the applied cell voltage (~5–6 V), Al³⁺ accepts electrons preferentially: Al³⁺ + 3e⁻ → Al(l). Sodium ions remain in the melt as spectator ions."
));

cases.push(makeChemCase(
  chapter, 41, "Why Titanium Dioxide ($TiO_2$) in Bauxite Remains in Red Mud", "Insolubility of Inert Amphoteric/Acidic Oxides in $NaOH$",
  "A chemical petrologist analyzes Red Mud from an alumina refinery. Bauxite ore contains ~3% Titanium Dioxide (TiO₂, rutile/anatase).",
  "Why does Titanium Dioxide remain undissolved in the Red Mud residue during digestion with concentrated sodium hydroxide at 150°C?",
  "TiO₂ reacts with sodium hydroxide to form an explosive gas.",
  "Under the digestion conditions (150°C–200°C in aqueous NaOH), crystalline TiO₂ is chemically inert and does not react with sodium hydroxide, remaining completely insoluble and separating alongside iron(III) oxide in the red mud filter cake.",
  "Titanium dioxide dissolves into water vapor.",
  "Titanium is an alkali metal that dissolves in acid only.",
  "B",
  "While aluminium oxide dissolves readily in 45% NaOH to form soluble sodium meta-aluminate (NaAlO₂), crystalline mineral forms of Titanium dioxide (such as rutile or anatase) are exceptionally stable and resistant to chemical attack by aqueous alkalis at 150°C–200°C. They do not dissolve to form titanates in aqueous solution, passing quantitatively into the insoluble Red Mud alongside Fe₂O₃ and unreacted quartz, ensuring high purity for the aluminate filtrate."
));

cases.push(makeChemCase(
  chapter, 42, "Galvanization: Continuous Hot-Dip Zinc Coating of Steel", "Metallurgical Intermetallic Bonding and Spangle Formation",
  "In a continuous hot-dip galvanizing line, steel sheet is degreased, pickled in acid, fluxed with zinc ammonium chloride, and immersed into a bath of molten Zinc at 450°C for several seconds. As the steel emerges and cools, large, decorative, crystalline flower-like patterns ('spangles') form on the silvery zinc surface.",
  "What is the nature of the bond between zinc and steel, and why does hot-dip galvanization provide superior protection over electroplated zinc?",
  "Zinc is glued onto the steel with organic resin.",
  "At 450°C, a metallurgical diffusion reaction occurs, forming a series of hard, corrosion-resistant iron-zinc intermetallic alloy layers (Gamma, Delta, Zeta phases) metallurgically fused to the steel substrate beneath an outer pure zinc layer; this metallurgical bond provides far greater mechanical adhesion and abrasion resistance than cold electroplating.",
  "Hot-dip zinc penetrates the atomic nucleus of the iron.",
  "The spangles are formed by frozen water droplets.",
  "B",
  "Hot-dip galvanizing is not a superficial physical coating. At 450°C, molten zinc diffuses into the iron crystal lattice, producing a sequence of iron-zinc intermetallic alloy layers: the Gamma phase (75% Fe, 25% Zn), Delta phase (90% Zn, 10% Fe), and Zeta phase (94% Zn, 6% Fe), topped by the outer Eta phase (100% pure Zn). These intermetallic layers are actually harder than the base steel itself, providing extraordinary resistance to gouging, chipping, and abrasion in harsh outdoor environments."
));

cases.push(makeChemCase(
  chapter, 43, "Extraction of Zinc: Why Zinc Blende Must Be Converted to Oxide Prior to Reduction", "Thermodynamic Inability of Carbon to Reduce Sulphides",
  "A metallurgy student asks why zinc blende (ZnS) cannot simply be heated with carbon directly to obtain zinc metal (ZnS + C → Zn + CS₂), bypassing the expensive roasting step (2ZnS + 3O₂ → 2ZnO + 2SO₂).",
  "Why is direct reduction of metal sulphides with carbon thermodynamically impossible?",
  "Carbon sulphide is an explosive solid that destroys furnaces.",
  "The free energy change (ΔG) for the reaction of metal sulphides with carbon to form carbon disulphide (CS₂) is strongly positive (thermodynamically non-spontaneous); Carbon has very low affinity for sulphur, whereas carbon has high affinity for oxygen, making oxide reduction (ZnO + C → Zn + CO) highly spontaneous.",
  "Sulphur atoms destroy all electrons in carbon.",
  "Zinc sulphide has a boiling point of 0°C.",
  "B",
  "From Ellingham diagrams, carbon is a powerful reducing agent for metal OXIDES because the formation of CO and CO₂ involves a very large negative free energy change (high metal-oxygen vs carbon-oxygen affinity). However, carbon has almost no chemical affinity for sulphur. The formation of Carbon Disulphide (CS₂) is endothermic and has an unfavorable positive free energy (ΔG > 0). Therefore, metal sulphides (ZnS, PbS, Cu₂S) cannot be reduced directly by carbon. They must first be roasted in air to convert the sulphide into an oxide (releasing SO₂), after which the oxide is readily reduced by carbon."
));

cases.push(makeChemCase(
  chapter, 44, "Heat Treatment of Steel: Quenching, Tempering, and Annealing", "Controlling Martensite and Pearlite Crystal Structures",
  "A master swordmaker heats medium-carbon steel to a bright cherry-red (800°C) and plunges it into cold water (Quenching); the steel becomes glass-hard, but so brittle that it shatters if dropped. The swordmaker then reheats the brittle blade to 250°C and cools it slowly in air (Tempering); the blade retains high cutting hardness, but becomes tough, springy, and resilient.",
  "What metallurgical structural changes occur during Quenching and subsequent Tempering of steel?",
  "Quenching removes all carbon; tempering adds nitrogen.",
  "Quenching rapidly freezes carbon in a supersaturated, strained, needle-like crystal lattice called Martensite (glass-hard and brittle); Tempering relieves internal crystal lattice strain and allows fine carbide precipitates to form, restoring toughness and impact resistance.",
  "Quenching converts iron into copper; tempering converts copper into gold.",
  "Steel melts into a liquid during tempering.",
  "B",
  "At 800°C, steel exists as Austenite (face-centered cubic γ-iron dissolving carbon). Rapid quenching in water or oil prevents carbon from diffusing out of the lattice into cementite; the lattice is forced into a highly distorted, strained, body-centered tetragonal phase called Martensite. Martensite is extraordinarily hard, but severely brittle with high internal microstresses. 'Tempering' involves reheating the quenched martensite to an intermediate temperature (200°C–400°C) below the transformation point; this relieves internal stresses, allows trapped carbon to precipitate as ultra-fine spherical cementite particles in ferrite, transforming extreme brittleness into high fracture toughness and springiness."
));

cases.push(makeChemCase(
  chapter, 45, "Extraction of Aluminium: Why Graphite Lining Acts as Cathode", "Cell Design in Hall-Héroult Electrolysis",
  "The Hall-Héroult reduction cell consists of a massive rectangular steel shell lined on the interior with dense carbon blocks (graphite/anthracite). Heavy copper busbars connect the steel shell directly to the negative terminal of the DC substation.",
  "Why does the carbon bottom lining of the cell serve as the Cathode, and how is pure molten aluminium tapped?",
  "Carbon is an insulator that protects the steel shell from electricity.",
  "The carbon lining acts as the negative electrode (Cathode) where Al³⁺ ions are reduced to molten aluminium (Al³⁺ + 3e⁻ → Al); molten aluminium is denser than the molten cryolite electrolyte, sinking to form a liquid metal pool directly on the carbon hearth, which is periodically siphoned out through a tapping hole.",
  "Carbon dissolves in the aluminium to produce high-carbon steel.",
  "The carbon lining acts as the anode that produces oxygen gas.",
  "B",
  "In the Hall-Héroult cell, the entire interior floor and walls of the steel box are lined with rammed carbon blocks, connected as the CATHODE (-). At this cathode floor, aluminium ions gain electrons: Al³⁺ + 3e⁻ → Al(l). Because liquid aluminium at 950°C has a density of ~2.3 g/cm³, while the molten cryolite-fluorspar-alumina bath has a density of ~2.1 g/cm³, the newly formed liquid aluminium metal continuously sinks through the electrolyte. It pools on the carbon cathode floor, which acts both as an electrical contact and a protective reservoir. The molten aluminium is tapped periodically via vacuum siphons."
));

cases.push(makeChemCase(
  chapter, 46, "Function of Fluorspar ($CaF_2$) in Hall-Héroult Bath", "Fluidity and Mobility Enhancement in Molten Electrolyte",
  "In addition to Cryolite (Na₃AlF₆), mineral Fluorspar (Calcium Fluoride, CaF₂) is added to the Hall-Héroult bath.",
  "What specific physical property does Fluorspar impart to the molten electrolytic mixture?",
  "It makes the molten bath opaque so workers cannot see the metal.",
  "Fluorspar lowers the melting point of the bath even further and significantly increases the fluidity (decreases viscosity) and ionic mobility of the molten mixture, allowing rapid ion migration and easy sinking of molten aluminium droplets.",
  "It reacts with aluminium to produce fluorocarbon gas.",
  "Fluorspar acts as a solid fuel that burns without oxygen.",
  "B",
  "While Cryolite dissolves alumina and lowers its melting point, adding ~5%–10% Fluorspar (CaF₂) and Aluminium Fluoride (AlF₃) optimizes the physical chemistry of the bath: (1) It further depresses the eutectic liquidus temperature below 950°C; (2) Crucially, it drastically lowers the kinematic viscosity of the molten fluoride melt, increasing its fluidity; (3) High fluidity ensures that tiny droplets of liquid aluminium formed at the cathode can coalesce rapidly and sink without being swept up by convective currents to the surface where they would burn in air."
));

cases.push(makeChemCase(
  chapter, 47, "Why Calamine Ore Decreases in Mass During Calcination", "Stoichiometry of Carbon Dioxide Expulsion",
  "A metallurgical technician weighs 12.54 g of concentrated Calamine ore (Zinc Carbonate, ZnCO₃) into a porcelain crucible. The crucible is heated strongly in a muffle furnace at 500°C for 30 minutes in the absence of air. After cooling in a desiccator, the residual white/yellow powder weighs exactly 8.14 g.\nAtomic masses: Zn = 65.4, C = 12.0, O = 16.0.",
  "What causes the 4.40 g loss in mass during the calcination of Calamine?",
  "Zinc evaporated as zinc gas.",
  "Thermal decomposition expelled carbon dioxide gas: ZnCO₃(s) xrightarrow{Δ} ZnO(s) + CO₂(g)↑; exactly 4.40 g (0.100 mole) of CO₂ gas was liberated into the atmosphere.",
  "The crucible absorbed lead from the furnace walls.",
  "Water of crystallization evaporated from the calamine.",
  "B",
  "1. Molar mass of ZnCO₃ = 65.4 + 12.0 + 3(16.0) = 125.4 g/mol.\n2. Moles of ZnCO₃ heated = 12.54 g / 125.4 g/mol = 0.100 mol.\n3. By equation of calcination: ZnCO₃(s) xrightarrow{Δ} ZnO(s) + CO₂(g)↑.\n- 0.100 mol of ZnCO₃ decomposes to produce 0.100 mol of solid ZnO residue and 0.100 mol of gaseous CO₂.\n- Molar mass of ZnO = 65.4 + 16.0 = 81.4 g/mol → Mass of ZnO residue = 0.100 mol × 81.4 g/mol = 8.14 g.\n- Molar mass of CO₂ = 44.0 g/mol → Mass of CO₂ gas lost = 0.100 mol × 44.0 g/mol = 4.40 g.\nNotice: 12.54 g - 8.14 g = 4.40 g exact loss in mass."
));

cases.push(makeChemCase(
  chapter, 48, "Why Carbon Anodes Must Be Lowered Continuously in Hall-Héroult Cell", "Compensating for Graphite Consumption",
  "A Hall-Héroult cell operator uses automated screw jacks to lower the carbon anode suspension beam by several centimeters every 24 hours.",
  "Why must the carbon anodes be continuously lowered deeper into the bath during operation?",
  "The anodes are being pushed into the earth by gravity.",
  "Because oxygen gas evolved at the anode continuously burns away the bottom face of the carbon rods (forming CO and CO₂), lowering the rods maintains a constant, optimal inter-electrode distance (~4–5 cm) between the anode tips and the cathode pool.",
  "The anodes melt into liquid aluminium at the bottom.",
  "Lowering the anodes cools the bath to room temperature.",
  "B",
  "In the Hall-Héroult cell, the distance between the bottom of the suspended carbon anodes and the top surface of the molten aluminium cathode pool (the 'anode-cathode distance' or ACD) must be maintained strictly at 4 to 5 cm. If the distance is too large, the electrical resistance of the molten cryolite bath increases, wasting massive electricity as excess heat. If too small, liquid aluminium can touch the anode and short-circuit the cell. Because the anode tips are continuously consumed by oxidation (C + O₂ → CO₂), the anodes erode upward at ~1.5–2 cm per day; automated jacks slowly lower the anode assembly to keep the ACD constant."
));

cases.push(makeChemCase(
  chapter, 49, "Why Roasting of Iron Pyrites ($FeS_2$) is Used for Sulphuric Acid, Not Iron", "Residual Sulphur Embrittlement in Steel",
  "Iron pyrites (FeS₂, 'Fool's Gold') is abundant and contains 46.6% iron. However, metallurgical iron smelters strictly reject iron pyrites as an iron ore, using Haematite (Fe₂O₃) instead; iron pyrites is roasted exclusively to manufacture Sulphuric Acid.",
  "Why is Iron Pyrites rejected for the extraction of iron metal in a blast furnace?",
  "Iron pyrites contains no iron atoms.",
  "Roasting cannot remove 100% of the sulphur; even residual traces of sulphur (0.05%) in iron cause extreme 'hot-shortness' (brittleness at red heat, causing the steel to crack and shatter when forged or rolled).",
  "Iron pyrites dissolves the blast furnace firebricks into water.",
  "Iron pyrites is radioactive.",
  "B",
  "In steel metallurgy, sulphur is the most harmful impurity. Iron and sulphur form low-melting iron sulphide (FeS, m.p. 1190°C), which forms an insoluble, low-melting eutectic film along the crystal grain boundaries of steel. When the steel is heated for forging or rolling (at 1000°C–1200°C), this FeS boundary film melts into liquid, causing adjacent metal grains to slide apart and crack catastrophically under the hammer (known as 'hot-shortness' or red-shortness). Because roasting FeS₂ leaves residual sulphur that is nearly impossible to eliminate in a blast furnace, FeS₂ is discarded as an iron ore."
));

cases.push(makeChemCase(
  chapter, 50, "Atmospheric Corrosion of Copper: Formation of Basic Carbonate Patina", "Long-Term Surface Weathering Chemistry",
  "The Statue of Liberty in New York Harbor was constructed from shining reddish-brown pure copper sheets in 1886. Over several decades of exposure to maritime air, rainwater, and atmospheric gases, the entire exterior surface transformed into a distinctive, permanent pale-green patina.",
  "What is the chemical composition of the protective green patina that forms on weathered copper?",
  "Copper(II) oxide (CuO)",
  "Basic Copper Carbonate, CuCO₃·Cu(OH)₂ (or Basic Copper Sulphate, CuSO₄·3Cu(OH)₂ in coastal/urban air), formed by slow reaction with atmospheric CO₂, O₂, and moisture: 2Cu + H₂O + CO₂ + O₂ → CuCO₃·Cu(OH)₂.",
  "Copper(II) chloride crystals",
  "Green algae growing on the copper metal",
  "B",
  "When copper is exposed to moist air containing carbon dioxide over extended periods, it undergoes slow atmospheric oxidation to form a protective green coating known as 'patina'. The chemical reaction is: 2Cu(s) + H₂O(l) + CO₂(g) + O₂(g) → CuCO₃·Cu(OH)₂(s) (basic copper carbonate). In maritime or urban atmospheres with trace SO₂, basic copper sulphate (CuSO₄·3Cu(OH)₂) also forms. This patina is adherent and non-porous; it seals the underlying copper metal completely, protecting it from further atmospheric decay for centuries."
));

console.log(`[Ch7 Metallurgy] Generated ${cases.length} cases.`);

const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) fs.mkdirSync(BANK_DIR, { recursive: true });

const outPath = path.join(BANK_DIR, 'chemistry_case_metallurgy.json');
fs.writeFileSync(outPath, JSON.stringify(cases, null, 2), 'utf8');
console.log(`Saved 50 cases to ${outPath}`);
