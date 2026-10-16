// build_chem_case_ch8_hydrogen_chloride.js
// 50 Case-Based MCQs for ICSE Class 10 Chemistry: Chapter 8 - Hydrogen Chloride & Hydrochloric Acid

const fs = require('fs');
const path = require('path');
const { makeChemCase } = require('./chem_case_helper');

const chapter = "Hydrogen Chloride";
const cases = [];

// Case 1
cases.push(makeChemCase(
  chapter, 1, "Laboratory Preparation: Rationale for Non-Volatile Concentrated H₂SO₄", "Volatility Contrast with Nitric Acid",
  "In a school laboratory, a student prepares hydrogen chloride gas by heating dry sodium chloride with concentrated sulphuric acid in a round-bottom flask. A classmate suggests replacing concentrated sulphuric acid with concentrated nitric acid (HNO₃), arguing that nitric acid is also a strong acid and readily donates hydrogen ions.",
  "Why is concentrated sulphuric acid specifically chosen for the laboratory preparation of hydrogen chloride gas, while concentrated nitric acid cannot be used?",
  "Concentrated nitric acid is an explosive solid that cannot react with sodium chloride.",
  "Concentrated sulphuric acid is chosen because it is non-volatile and has a high boiling point (338°C); concentrated nitric acid is highly volatile (boiling point 83°C) and vaporises alongside the evolving hydrogen chloride gas, contaminating it with nitric acid vapors and toxic brown nitrogen dioxide.",
  "Concentrated nitric acid neutralises hydrogen chloride into water and solid sulphur.",
  "Sodium chloride refuses to react with any nitrate-containing acid under laboratory conditions.",
  "B",
  "The preparation of a volatile acid (like HCl, boiling point -85°C) from its salt requires the displacement by a non-volatile acid. Concentrated sulphuric acid (H₂SO₄) is non-volatile and has a very high boiling point (338°C), so it does not vaporise during heating. In contrast, concentrated nitric acid (HNO₃) is volatile (boiling point ~83°C); upon heating, it vaporises and decomposes to yield NO₂ fumes, severely contaminating the evolving HCl gas. Thus, conc. H₂SO₄ is the unique acid of choice: NaCl + H₂SO₄ (<200°C) → NaHSO₄ + HCl↑."
));

// Case 2
cases.push(makeChemCase(
  chapter, 2, "Laboratory Preparation: The Strict < 200°C Temperature Limit", "NaHSO₄ vs Hard Crust Na₂SO₄ and Thermal Shock",
  "During the preparation of hydrogen chloride gas from sodium chloride and concentrated sulphuric acid, the laboratory technician carefully maintains the Bunsen burner flame so that the thermometer remains strictly below 200°C. When an inquisitive student turns the burner to full heat, the temperature shoots up past 300°C.",
  "What detrimental chemical and physical consequences occur when the reaction temperature exceeds 200°C in the laboratory preparation flask?",
  "Hydrogen chloride gas decomposes immediately into liquid water and toxic liquid chlorine.",
  "Above 200°C, normal sodium sulphate (Na₂SO₄) forms as a hard, insoluble crust that adheres tenaciously to the glass flask, is difficult to remove, and creates localized thermal stress that cracks the round-bottom flask, while wasting fuel and causing excessive volatilisation of H₂SO₄.",
  "The reaction reverses completely, consuming the already-formed hydrogen chloride to regenerate solid rock salt.",
  "Sodium chloride sublimates instantly into the atmosphere, clogging all delivery tubes.",
  "B",
  "Below 200°C, the reaction proceeds as: NaCl + H₂SO₄ (<200°C) → NaHSO₄ + HCl↑. The product sodium bisulphate (NaHSO₄) forms a soft, easily soluble, and removable mass. Above 200°C, the reaction proceeds further: 2NaCl + H₂SO₄ (>200°C) → Na₂SO₄ + 2HCl↑. The normal sodium sulphate (Na₂SO₄) forms a tenacious, vitreous crust that strongly adheres to the glass. Because it is poorly soluble and conducts heat poorly, localized thermal expansion cracks the glass flask. Furthermore, heating above 200°C wastes fuel and risks boiling over conc. H₂SO₄."
));

// Case 3
cases.push(makeChemCase(
  chapter, 3, "Choice of Drying Agent: Incompatibility of Quicklime (CaO)", "Basic Oxide Neutralisation & Chemical Reaction with CaO",
  "The moist hydrogen chloride gas evolving from the generator must be dried before collection. A student notices a bottle of quicklime (calcium oxide, CaO), which is commonly used to dry basic gases like ammonia, and proposes passing the moist HCl gas through a tower packed with fresh CaO lumps.",
  "Why is quicklime (calcium oxide) strictly prohibited as a drying agent for hydrogen chloride gas?",
  "Quicklime is an acidic oxide that repels hydrogen chloride by electrostatic charge.",
  "Quicklime is highly explosive when exposed to gases lighter than air.",
  "Quicklime (CaO) is a strongly basic oxide that chemically reacts with acidic hydrogen chloride gas to form calcium chloride and water (CaO + 2HCl → CaCl₂ + H₂O), completely consuming the gas instead of drying it.",
  "Quicklime dissolves into a poisonous liquid that evaporates into the collecting jar.",
  "C",
  "A drying agent must be purely hygroscopic and chemically inert toward the gas being dried. Hydrogen chloride is an acidic gas. Quicklime (CaO) is a basic oxide. If passed over CaO, a rapid neutralisation reaction occurs: CaO + 2HCl → CaCl₂ + H₂O. The HCl gas is chemically destroyed and converted into solid calcium chloride and water. Consequently, basic drying agents (such as CaO or slaked lime) cannot dry acidic gases."
));

// Case 4
cases.push(makeChemCase(
  chapter, 4, "Choice of Drying Agent: Incompatibility of Phosphorus Pentoxide (P₂O₅)", "Formation of Phosphoryl Chloride and Metaphosphoric Acid",
  "In an advanced analytical chemistry project, an intern seeks an alternative desiccating agent to dry newly synthesised hydrogen chloride gas. The intern tests phosphorus pentoxide (P₂O₅), well-known for its aggressive affinity for moisture.",
  "What happens chemically when moist hydrogen chloride gas is passed over phosphorus pentoxide (P₂O₅), and why is it unsuitable?",
  "Phosphorus pentoxide chemically reacts with hydrogen chloride gas to form volatile phosphoryl chloride (phosphorus oxychloride, POCl₃) and metaphosphoric acid (HPO₃), contaminating the gas and consuming HCl.",
  "Phosphorus pentoxide instantly reduces hydrogen chloride to elemental phosphorus and liquid chlorine.",
  "Phosphorus pentoxide catalyzes the rapid nuclear transmutation of chlorine into argon.",
  "Phosphorus pentoxide absorbs all nitrogen from the air, creating a vacuum that implodes the drying tower.",
  "A",
  "Phosphorus pentoxide (P₂O₅) is a powerful dehydrating agent, but it is not chemically inert toward hydrogen chloride. It reacts with HCl: P₂O₅ + 3HCl → POCl₃ + 2HPO₃ (or P₂O₅ + 6HCl → 2POCl₃ + 3H₂O). Because it undergoes chemical combination with HCl to yield volatile phosphorus oxychloride (POCl₃) and metaphosphoric acid (HPO₃), it cannot be used. Concentrated sulphuric acid (H₂SO₄) is the only suitable drying agent because it is acidic, purely absorbs water, and does not react with HCl."
));

// Case 5
cases.push(makeChemCase(
  chapter, 5, "Gas Collection: Upward Displacement of Air vs Water Displacement", "Vapor Density of 18.25 vs Extreme Water Solubility",
  "A student sets up an apparatus to collect dry hydrogen chloride gas. Remembering the water-trough method used for collecting hydrogen and oxygen gases, the student attempts to invert a gas jar filled with water over a beehive shelf to collect the emerging HCl gas. To their astonishment, not a single bubble accumulates in the jar; instead, water rushes up the delivery tube.",
  "Why cannot hydrogen chloride gas be collected over water, and why is it collected by the upward displacement of air (downward delivery)?",
  "HCl gas is lighter than air and reacts with nitrogen to form ammonium gas.",
  "HCl gas is an inert noble gas that liquefies at room temperature under water pressure.",
  "HCl gas has a vapor density equal to air and therefore cannot displace any fluids.",
  "HCl gas is phenomenally soluble in water (~452 volumes of HCl dissolve in 1 volume of water at 20°C), causing water to absorb it instantly; because its vapor density is 18.25 (molecular mass 36.5), it is approximately 1.28 times heavier than air (vapor density 14.4) and is therefore collected by the upward displacement of dry air.",
  "D",
  "Hydrogen chloride gas cannot be collected over water because of its extreme solubility in water: 1 volume of water dissolves approximately 452 volumes of HCl gas at room temperature (20°C). Any gas bubbling into water dissolves instantaneously, creating a vacuum that causes dangerous suck-back. The molecular mass of HCl is 36.5, giving it a vapor density of 36.5 / 2 = 18.25. Since dry air has an average vapor density of 14.4, HCl is about 1.28 times denser than air. Consequently, it sinks and is collected by the upward displacement of air (downward delivery) in a dry gas jar."
));

// Case 6
cases.push(makeChemCase(
  chapter, 6, "Testing Full Jar Collection: Glass Rod with Ammonia", "Formation of Dense White Sublimable Ammonium Chloride Fumes",
  "A laboratory technician wants to verify whether a gas jar being filled with dry hydrogen chloride gas by upward displacement of air is completely full. The technician dips a glass rod into a bottle of concentrated ammonia solution (NH₄OH / NH₃) and holds it near the open mouth of the upright gas jar. Instantly, voluminous, dense white fumes billow outward.",
  "What is the chemical composition of these dense white fumes, and what unique type of reaction does this demonstrate?",
  "The fumes are tiny droplets of liquid hydrochloric acid condensing in air.",
  "The fumes consist of solid micro-particles of Ammonium Chloride (NH₄Cl), formed by the direct combination of two colourless volatile gases (NH₃(g) + HCl(g) → NH₄Cl(s)), exemplifying the synthesis of a solid from two gases.",
  "The fumes are toxic white phosphorus formed by the reduction of chlorine.",
  "The fumes are steam generated by the extreme heat of burning nitrogen gas.",
  "B",
  "When a glass rod dipped in ammonia solution is brought near HCl gas, ammonia gas (NH₃) vaporising from the rod reacts instantaneously with escaping HCl gas: NH₃(g) + HCl(g) → NH₄Cl(s). The product, ammonium chloride, is a white crystalline solid that forms as a dense suspension of microscopic solid particles, appearing as thick white billowing fumes. This test is the standard qualitative confirmation that the gas jar is completely filled with HCl gas. It is also a classic example of two colourless gases combining directly to form a single solid."
));

// Case 7
cases.push(makeChemCase(
  chapter, 7, "The Fountain Experiment: Extreme Solubility Dynamics", "Partial Vacuum Creation via 1:452 Volume Dissolution at RTP",
  "In the classic Fountain Experiment demonstrating the physical properties of hydrogen chloride, a completely dry, round-bottom flask is filled with pure HCl gas and sealed with a two-holed rubber stopper. One hole carries a dropper filled with water, and the other carries a long jet tube dipping into a trough of blue litmus solution. When the dropper is squeezed to inject a few drops of water into the flask, an astonishing fountain of liquid erupts vigorously through the jet tube.",
  "What physical and thermodynamic mechanism drives the rapid eruption of the fountain into the flask?",
  "The few drops of water dissolve virtually the entire volume of HCl gas in the flask (~452 times its own volume), creating a partial vacuum (drastic pressure drop) inside; high external atmospheric pressure acting on the litmus solution in the trough forces the liquid up the jet tube as a high-speed fountain.",
  "The reaction between water and HCl generates enormous heat and pressure that pushes liquid downward.",
  "Water decomposes into hydrogen gas, which pressurises the trough and shoots water upwards.",
  "The blue litmus dye reacts with the rubber stopper to produce an electrostatic suction force.",
  "A",
  "The fountain experiment demonstrates two fundamental properties of hydrogen chloride gas: high solubility in water and its acidic nature in aqueous solution. When a few drops of water are introduced via the dropper, the HCl gas inside the flask dissolves instantaneously due to its immense solubility (1 volume of water dissolves ~452 volumes of HCl). This instantaneous dissolution removes gas molecules from the enclosed space, causing an extreme drop in internal pressure (creating a near-complete partial vacuum). The prevailing atmospheric pressure (~760 mm Hg) acting on the surface of the blue litmus solution in the trough outside drives the liquid violently up the jet tube, creating a dramatic fountain."
));

// Case 8
cases.push(makeChemCase(
  chapter, 8, "The Fountain Experiment: Indicator Dynamics and Acidity", "Hydronium Ion Formation and Litmus Color Transition from Blue to Red",
  "During the Fountain Experiment described in Case 7, the liquid in the trough is initially a deep blue litmus solution. As the liquid sprays into the flask from the tip of the jet tube, its colour changes instantaneously to brilliant red.",
  "Why does the blue litmus fountain turn red upon entering the flask, and what does this prove about hydrogen chloride?",
  "The red colour is due to thermal emission of light caused by friction in the jet tube.",
  "Blue litmus is bleached white, and the glass flask reflects red light from the laboratory walls.",
  "The blue litmus turns red because dissolved hydrogen chloride gas ionises completely in the incoming water to release hydronium ions (H₃O⁺ / H⁺), proving that aqueous hydrogen chloride is a strong acid.",
  "Hydrogen chloride reacts with litmus to form insoluble blue copper hydroxide.",
  "C",
  "Dry hydrogen chloride gas is a covalent molecule and does not exhibit acidic properties on dry indicators. However, as the blue litmus solution sprays into the flask, HCl gas dissolves and ionises in water: HCl + H₂O ⇌ H₃O⁺ + Cl⁻. The high concentration of hydronium ions (H₃O⁺) protonates the litmus indicator molecules, shifting their conjugated electronic structure and causing the solution to turn from blue to brilliant red. This confirms that aqueous hydrogen chloride (hydrochloric acid) is acidic in nature."
));

// Case 9
cases.push(makeChemCase(
  chapter, 9, "Thermodynamic Influence on Fountain Effect: Hot Water Inefficacy", "Exothermic Dissolution and Le Chatelier Gas Solubility Temperature Dependency",
  "A student attempts the Fountain Experiment using water heated to 85°C in the dropper and the trough instead of room-temperature water at 20°C. To the student's disappointment, only a sluggish trickle enters the jet tube, and no high-pressure fountain forms.",
  "Applying Henry's law and Le Chatelier's principle, why does hot water fail to produce a vigorous fountain with hydrogen chloride gas?",
  "Hot water freezes instantly upon contacting hydrogen chloride gas, blocking the jet tube.",
  "Hydrogen chloride gas reacts with steam to form unreactive liquid mercury.",
  "Hot water expands the glass flask, equalising the internal pressure with the atmosphere.",
  "The dissolution of HCl gas in water is an intensely exothermic process (ΔH < 0); according to Le Chatelier's principle, increasing the temperature drastically decreases the solubility of the gas, preventing the sharp pressure drop required to create a powerful fountain.",
  "D",
  "The dissolution of hydrogen chloride gas in water is strongly exothermic: HCl(g) + aq → H⁺(aq) + Cl⁻(aq) + 75.3 kJ/mol. In accordance with Le Chatelier's principle, an increase in temperature shifts the dissolution equilibrium in the reverse (endothermic) direction, drastically reducing the volume of gas dissolved per unit volume of water. At 85°C, water dissolves far less HCl gas, so injecting hot water does not create the steep drop in internal pressure necessary to establish a high-pressure partial vacuum. Atmospheric pressure cannot force the liquid rapidly up the tube, resulting in only a feeble trickle."
));

// Case 10
cases.push(makeChemCase(
  chapter, 10, "The Inverted Funnel Arrangement: Preventing Back-Suction", "Anti-Suckback Mechanics and Surface Area Expansion",
  "A chemist wishes to prepare a concentrated aqueous solution of hydrochloric acid by dissolving dry HCl gas in a beaker of pure water. A junior technician connects a standard narrow glass delivery tube directly into the beaker so that its tip dips 3 cm below the water surface. The senior chemist immediately stops the experiment.",
  "Why is a straight delivery tube dipped in water dangerous when dissolving hydrogen chloride, and how does an inverted funnel arrangement prevent this hazard?",
  "A straight delivery tube reacts with HCl to produce toxic silicate fumes that dissolve the glass.",
  "Due to the extraordinary solubility of HCl gas in water, the gas inside the tube dissolves faster than it is generated, causing the liquid in the beaker to be sucked back up the delivery tube into the hot generating flask, where cold water contacting boiling concentrated H₂SO₄ causes violent steam explosion and shattering of the flask; an inverted funnel provides a large surface area and breaks the suction.",
  "A straight delivery tube prevents the dissolution of HCl because the tube is too narrow for gas bubbles.",
  "An inverted funnel cools the gas to -100°C so it solidifies before touching water.",
  "B",
  "When a narrow delivery tube is submerged in water, HCl gas dissolves in water far faster than it is evolved from the reaction flask. This creates a severe partial vacuum inside the tube. Atmospheric pressure on the surface of the water in the beaker forces water rapidly backward through the delivery tube into the reaction flask ('back-suction' or 'suck-back'). When cold water strikes the hot concentrated sulphuric acid in the generating flask, extreme localized boiling causes violent spattering, thermal shock, and explosion of the glassware. To prevent this, an inverted funnel arrangement is used."
));

// Case 11
cases.push(makeChemCase(
  chapter, 11, "Inverted Funnel Dynamics: The Air-Gap Rhythmic Oscillation", "Breaking Suction and Gravity Reset of Water Column",
  "In the inverted funnel setup for manufacturing aqueous hydrochloric acid, an inverted glass funnel is connected via rubber tubing to the HCl generator. The broad rim of the funnel is placed such that it just touches the surface of the water in the trough. During the dissolution process, the water level inside the funnel rises slightly, drops back, and continues a rhythmic pulsating cycle.",
  "Explain the mechanical self-regulating principle by which the inverted funnel prevents back-suction and allows steady dissolution of HCl gas.",
  "When gas dissolves rapidly, a partial vacuum causes water to rise into the flared funnel; because of the funnel's wide cross-section, the rising column creates an air gap between the rim and the water surface outside, which breaks the vacuum, allowing gravity to pull the water back down into the trough where the rim reseals to repeat the cycle safely.",
  "The funnel generates a magnetic field that repels water molecules downward whenever the current flows.",
  "The water reacts with the glass rim to form a solid wax barrier that stops the liquid from rising.",
  "The air gap allows cold air to enter and oxidise HCl into solid potassium chloride.",
  "A",
  "The inverted funnel arrangement operates as a self-regulating safety mechanism: 1) Large surface area: The broad mouth of the funnel provides a wide area of contact for rapid gas absorption. 2) Back-suction prevention: When rapid dissolution creates a partial vacuum, water begins to rise inside the cone of the funnel. Because of the flared shape, a large volume of water must rise to fill the cone, which causes the external water level around the rim to drop. The rim momentarily loses contact with the water surface, creating an air gap. Air enters beneath the rim, instantly equalising the internal pressure with the atmosphere. 3) Gravity return: The unsupported column of water falls back into the beaker under its own weight, re-submerging the rim to resume smooth absorption without any liquid ever reaching the reaction flask."
));

// Case 12
cases.push(makeChemCase(
  chapter, 12, "Physical Nature: Liquid Dry HCl as a Non-Conductor", "Covalent Bond Integrity in Dry State vs Ionisation",
  "A sample of pure, moisture-free hydrogen chloride gas is compressed and cooled to -85°C, condensing into a clear, colourless liquid. Two platinum electrodes connected in series with a 12V DC battery and a sensitive light bulb are submerged into this liquid anhydrous HCl. The bulb remains completely dark. Furthermore, dry blue litmus paper dipped into this liquid shows no colour change.",
  "Why does pure liquid anhydrous hydrogen chloride fail to conduct electricity and fail to change the colour of dry blue litmus paper?",
  "Liquid HCl contains free mobile sodium cations that cancel out all electrical conductivity.",
  "Liquid HCl is an ionic lattice whose ions are locked in a rigid solid crystal grid.",
  "Pure anhydrous HCl consists of discrete, neutral polar covalent molecules with no free hydronium (H₃O⁺) or chloride (Cl⁻) ions; without ionisation, which requires a polar solvent with a high dielectric constant, it cannot conduct electricity or exhibit acidic indicator reactions.",
  "The platinum electrodes react with HCl to form an insulating gas shield of nitrogen.",
  "C",
  "In the absence of water or a polar solvent, pure hydrogen chloride (whether in gaseous or liquefied state) exists entirely as neutral covalent molecules (H:Cl with a polar covalent bond). Acidic properties—such as turning blue litmus red and electrical conductivity—are strictly manifestations of free solvated hydronium ions (H₃O⁺) and chloride ions (Cl⁻). Without an ionizing solvent like water, no protolysis occurs: HCl does not dissociate into ions. Therefore, liquid anhydrous HCl is a non-electrolyte and exhibits no acidic reactions on dry litmus."
));

// Case 13
cases.push(makeChemCase(
  chapter, 13, "Dissolution in Non-Polar Solvents: HCl in Toluene / Benzene", "Absence of Dipole Solvation and Lack of Acidic Properties",
  "An investigator dissolves dry hydrogen chloride gas in dry toluene (an organic non-polar aromatic hydrocarbon, C₇H₈). The resulting solution is divided into three test tubes: Test Tube 1: A strip of dry blue litmus paper is introduced.\nTest Tube 2: A strip of magnesium ribbon is added.\nTest Tube 3: Platinum electrodes connected to a light bulb and power supply are inserted.\nIn all three test tubes, no reaction occurs: the litmus remains blue, no gas bubbles evolve from the magnesium, and the bulb does not glow.",
  "Why does a solution of hydrogen chloride in toluene show no acidic characteristics whatsoever?",
  "Toluene contains nitrogen atoms that neutralise all hydrochloric acid into solid salt.",
  "Magnesium ribbon dissolves toluene before it can react with any dissolved chemicals.",
  "Toluene reacts with HCl to form insoluble polymers that destroy all chlorine atoms.",
  "Toluene is a non-polar solvent with a very low dielectric constant; it cannot solvate or pull apart the polar covalent H–Cl bond, so HCl remains in molecular form without forming H₃O⁺ or Cl⁻ ions, exhibiting neither conductivity nor acidic reactions with metals or indicators.",
  "D",
  "Water's ability to turn HCl into an acid depends on its high dielectric constant (~80) and strong dipole moment, which allows water molecules to hydrate H⁺ and Cl⁻ ions, overcoming the H–Cl bond energy: HCl + H₂O → H₃O⁺ + Cl⁻. Toluene (and benzene) is a non-polar hydrocarbon with a dielectric constant of only ~2.4. It lacks dipole-dipole or ion-dipole interaction capabilities, so it cannot ionise the H–Cl covalent bond. The dissolved HCl remains intact as neutral covalent molecules. Hence, the solution is a non-electrolyte, does not produce hydronium ions to turn litmus red, and cannot react with magnesium to liberate hydrogen gas."
));

// Case 14
cases.push(makeChemCase(
  chapter, 14, "Dissolution in Polar Solvents: High Dielectric Constant of Water", "Hydration Energy Exceeding H-Cl Bond Energy Producing H₃O⁺ and Cl⁻",
  "When the same dry HCl gas from Case 13 is bubbled into pure distilled water, the resulting solution vigorously turns blue litmus paper red, reacts briskly with magnesium ribbon to evolve hydrogen gas with effervescence, and allows the connected light bulb to glow brightly.",
  "What energetic and molecular mechanism enables water to transform covalent HCl into a powerful ionic conducting acid?",
  "Water contains dissolved oxygen that burns hydrogen chloride into ionic flames.",
  "Water is a polar molecule with a high dielectric constant (approx. 80); the lone pairs on the oxygen atom attract the partial positive hydrogen of the polar H–Cl bond, forming a coordinate bond to yield hydronium ions [H₃O⁺] and chloride ions [Cl⁻], where the immense hydration energy released easily overcomes the covalent H–Cl bond dissociation energy.",
  "Water reduces the chlorine atom to metallic copper, which conducts electric current.",
  "Water strips all electrons from hydrogen chloride, converting it into a radioactive plasma.",
  "B",
  "Water is an intensely polar solvent (dielectric constant ~80). When polar covalent HCl (H^δ+ — Cl^δ-) is introduced into water, the partially negative oxygen atom of H₂O interacts strongly with the partially positive hydrogen atom of HCl. A lone pair from oxygen is donated to form a coordinate bond with H⁺, liberating a hydrated hydronium ion: HCl + H₂O ⇌ H₃O⁺ + Cl⁻. The large hydration energy released during this process exceeds the covalent bond dissociation energy of H–Cl. The resulting free, mobile H₃O⁺ and Cl⁻ ions carry electric current and exhibit the full suite of acidic chemical reactions."
));

// Case 15
cases.push(makeChemCase(
  chapter, 15, "Azeotropic Behavior: Distillation of Dilute Hydrochloric Acid", "Constant Boiling Azeotrope at 22.2% HCl and 110°C",
  "A chemical technician places a 5% dilute solution of hydrochloric acid in a distillation flask fitted with a condenser and thermometer, hoping to boil off the water and obtain 100% pure concentrated hydrochloric acid. As boiling begins at 100°C, pure water vapor distils over into the receiver, and the liquid in the flask becomes progressively more concentrated. However, when the temperature reaches 110°C, the boiling point stabilizes and the remaining liquid distils over unchanged at a fixed concentration of 22.2% HCl by mass.",
  "Why is it impossible to concentrate dilute hydrochloric acid beyond 22.2% HCl by fractional distillation?",
  "At 110°C and 760 mm Hg pressure, a 22.2% aqueous solution of HCl forms a maximum-boiling constant-boiling mixture (azeotrope); the vapor phase has the exact same composition (22.2% HCl and 77.8% H₂O) as the boiling liquid phase, so further distillation occurs without any change in concentration.",
  "Dilute hydrochloric acid decomposes into hydrogen and chlorine gases at 100°C.",
  "Water forms an unbreakable covalent polymer with sodium chloride at 110°C.",
  "Hydrochloric acid turns into solid ice at 110°C, preventing further vaporisation.",
  "A",
  "When a dilute aqueous solution of HCl (less than 22.2% by mass) is distilled, water has a higher vapor pressure than the solution and distils off predominantly. The concentration of HCl in the flask rises, and the boiling point increases from 100°C toward 110°C. At 110°C (under 760 mm Hg atmospheric pressure), the concentration reaches 22.2% HCl by mass. At this exact point, the solution forms a constant-boiling mixture (azeotrope). In an azeotrope, the vapor has the identical percentage composition as the boiling liquid (22.2% HCl and 77.8% H₂O by mass). Consequently, the entire mixture distils over unchanged at constant temperature, making it impossible to obtain higher concentrations or pure dry HCl by simple distillation."
));

// Case 16
cases.push(makeChemCase(
  chapter, 16, "Azeotropic Behavior: Distillation of Concentrated Hydrochloric Acid", "Preferential Vaporisation of HCl Gas Until 22.2% Azeotrope Reached",
  "In a companion experiment to Case 15, another technician takes commercial concentrated hydrochloric acid (containing approximately 36% HCl by mass) and distils it under standard atmospheric pressure. The technician observes that dense, pungent fumes evolve at lower temperatures, and the concentration of the liquid remaining in the boiling flask steadily drops until it stabilizes at 110°C.",
  "What is the composition and boiling point of the liquid that remains in the distillation flask when concentrated (36%) hydrochloric acid is boiled?",
  "The flask goes completely dry because all 36% HCl boils off instantly at 50°C.",
  "The liquid becomes 100% pure water boiling at 100°C.",
  "HCl gas has a higher vapor pressure than water in concentrated solution and vaporises first; the concentration in the flask decreases until it reaches 22.2% HCl by mass, after which it boils constantly at 110°C as an azeotrope.",
  "The liquid solidifies into pure crystalline ammonium chloride.",
  "C",
  "For solutions containing more than 22.2% HCl by mass (such as commercial 36% conc. HCl), the partial vapor pressure of volatile HCl gas is significantly higher than that of water vapor. Upon heating, pure HCl gas boils off first along with very little water vapor. As a result, the concentration of HCl in the boiling flask decreases, and the boiling temperature rises until it reaches 110°C. At this temperature, the liquid composition reaches exactly 22.2% HCl by mass, forming the maximum-boiling azeotropic mixture, which then distils over at a constant temperature of 110°C without any further change in concentration."
));

// Case 17
cases.push(makeChemCase(
  chapter, 17, "Monobasicity of Hydrochloric Acid: Lack of Acid Salts", "Single Ionisable Hydrogen per Molecule Forming Only Normal Chlorides",
  "A chemistry teacher writes two chemical equations on the board representing the neutralisation of sodium hydroxide by two different mineral acids:\nReaction 1: NaOH + H₂SO₄ → NaHSO₄ + H₂O (and with excess NaOH → Na₂SO₄ + 2H₂O)\nReaction 2: NaOH + HCl → NaCl + H₂O\nThe teacher asks why sulphuric acid can form both an acid salt (NaHSO₄) and a normal salt (Na₂SO₄), whereas hydrochloric acid can only form a single normal salt (NaCl).",
  "What structural property of hydrochloric acid explains why it never forms acid salts?",
  "Hydrochloric acid contains three replaceable hydrogen atoms per molecule.",
  "Hydrochloric acid is a weak organic acid that cannot donate protons to bases.",
  "Hydrochloric acid forms only basic salts because chlorine is an alkaline metal.",
  "Hydrochloric acid is a monobasic acid containing only one replaceable hydrogen atom (proton) per molecule; it ionises in a single step (HCl → H⁺ + Cl⁻), so it can form only one series of salts—normal salts (chlorides)—and cannot form acid salts.",
  "D",
  "Basicity of an acid is defined as the number of replaceable hydronium ions (protons) that one molecule of the acid produces in aqueous solution. Hydrochloric acid (HCl) has only one ionisable hydrogen atom per molecule: HCl(aq) ⇌ H⁺(aq) + Cl⁻(aq). Thus, it is strictly monobasic. When reacted with a base like NaOH, replacing this single proton completely neutralises the acid radical, yielding only the normal chloride salt (NaCl). In contrast, dibasic acids like H₂SO₄ possess two replaceable hydrogens, permitting stepwise neutralisation to yield an acid salt (NaHSO₄, containing replaceable H) and a normal salt (Na₂SO₄)."
));

// Case 18
cases.push(makeChemCase(
  chapter, 18, "Action on Active Metals: The Lead (Pb) Passivation Anomaly", "Insoluble PbCl₂ Protective Crust Halting Reaction with Dilute HCl",
  "A student tests the reactivity of various metals placed above hydrogen in the electrochemical activity series by adding dilute hydrochloric acid to separate test tubes containing Magnesium, Zinc, Iron, and Lead:\n- Magnesium: Vigorous effervescence of H₂ gas.\n- Zinc: Steady effervescence of H₂ gas.\n- Iron: Slow, continuous effervescence of H₂ gas.\n- Lead: A brief flurry of a few tiny bubbles, after which the reaction completely stops, leaving the lead piece unreacted.",
  "Why does the reaction between lead and dilute hydrochloric acid cease almost immediately, despite lead being positioned above hydrogen in the reactivity series?",
  "Lead is an inert noble metal that never reacts with any acid.",
  "Lead initially reacts with dilute HCl to form Lead(II) chloride (PbCl₂); because PbCl₂ is insoluble in cold water, it forms an impermeable, insoluble protective coating over the metal surface that physically blocks further acid from contacting the unreacted lead.",
  "Lead oxidises hydrochloric acid into chlorine gas, which suffocates the reaction.",
  "Lead decomposes dilute HCl into toxic cyanide compounds that freeze the solution.",
  "B",
  "Lead (Pb) lies above hydrogen in the metal activity series, so thermodynamically it should displace hydrogen: Pb + 2HCl → PbCl₂ + H₂↑. However, unlike magnesium chloride, zinc chloride, or ferrous chloride (all of which are highly soluble in water), lead(II) chloride (PbCl₂) is virtually insoluble in cold water. As soon as a microscopic layer of PbCl₂ forms on the lead surface, it adheres tightly as a passive, insoluble barrier. This crust shields the underlying metal from coming into contact with hydronium ions, halting the reaction almost instantaneously. (If the mixture is heated to boiling, PbCl₂ dissolves, allowing the reaction to proceed)."
));

// Case 19
cases.push(makeChemCase(
  chapter, 19, "Action on Iron: Dry HCl Gas vs Aqueous HCl", "Formation of Iron(II) Chloride (FeCl₂) Due to Reducing Nascent/Liberated H₂",
  "In a metallurgical preparation, dry hydrogen chloride gas is passed over heated red-hot iron filings in a combustion tube. An anhydrous crystalline chloride of iron condenses in the receiver flask. When analyzed, this compound is found to be Iron(II) chloride (ferrous chloride, FeCl₂), with not a trace of Iron(III) chloride (ferric chloride, FeCl₃).",
  "Why does heated iron react with dry hydrogen chloride gas to produce ferrous chloride (FeCl₂) instead of ferric chloride (FeCl₃)?",
  "The hydrogen gas liberated during the reaction (Fe + 2HCl → FeCl₂ + H₂↑) is a reducing agent that prevents the oxidation of iron(II) to iron(III), ensuring only FeCl₂ is formed.",
  "Iron has a maximum valency of 1 when reacting with dry gases.",
  "Hydrogen chloride gas contains no chlorine atoms capable of forming trivalent bonds.",
  "Ferric chloride is unstable and explodes into metallic iron at room temperature.",
  "A",
  "When dry hydrogen chloride gas is passed over heated iron, the reaction produces iron(II) chloride and hydrogen gas: Fe + 2HCl → FeCl₂ + H₂↑. Hydrogen gas (especially in nascent/reducing conditions) acts as a reducing agent. It prevents any oxidation of the newly formed Fe²⁺ (ferrous) ions to Fe³⁺ (ferric) state. Even if any FeCl₃ were momentarily formed, it would be reduced back by hydrogen: 2FeCl₃ + H₂ → 2FeCl₂ + 2HCl. Consequently, dry HCl gas reacting with iron exclusively produces anhydrous iron(II) chloride (FeCl₂)."
));

// Case 20
cases.push(makeChemCase(
  chapter, 20, "Action on Iron: Contrast with Chlorine Gas Oxidation", "Formation of Anhydrous Iron(III) Chloride (FeCl₃) by Strong Oxidant Cl₂",
  "To contrast with the experiment in Case 19, the laboratory instructor passes dry chlorine gas (Cl₂) instead of HCl gas over heated iron filings in the exact same apparatus. This time, dark reddish-brown, glistening scales of anhydrous Iron(III) chloride (FeCl₃) condense in the cooled receiver flask.",
  "Why does chlorine gas oxidize iron all the way to Iron(III) chloride (FeCl₃), whereas hydrogen chloride gas only yields Iron(II) chloride (FeCl₂)?",
  "Chlorine gas is an inert noble gas that cools the iron into brown crystals.",
  "Chlorine gas is a reducing agent that adds electrons to iron atoms.",
  "Chlorine gas (Cl₂) is a powerful oxidising agent with a high electron affinity; it readily oxidises Fe²⁺ to Fe³⁺ (2Fe + 3Cl₂ → 2FeCl₃) and produces no reducing hydrogen by-product.",
  "Iron filings melt into liquid copper when exposed to chlorine gas.",
  "C",
  "The difference lies in the redox nature of the attacking reagents: 1) In the reaction with HCl: Fe + 2HCl → FeCl₂ + H₂↑. The by-product is hydrogen gas, which is a reducing agent that maintains iron in the lower (+2) oxidation state. 2) In the reaction with Cl₂: 2Fe + 3Cl₂ → 2FeCl₃. Chlorine is a powerful oxidising agent with a high standard reduction potential (E° = +1.36 V). It aggressively abstracts valence electrons from iron, oxidising it past the Fe²⁺ state into the stable trivalent Fe³⁺ (ferric) state: Fe → Fe³⁺ + 3e⁻. Furthermore, no reducing agent is present in the system, so anhydrous FeCl₃ forms exclusively."
));

// Case 21
cases.push(makeChemCase(
  chapter, 21, "Action on Insoluble Basic Metal Oxides: Copper(II) Oxide Dissolution", "Neutralisation Forming Bluish-Green CuCl₂ Solution",
  "A black powder consisting of copper(II) oxide (cupric oxide, CuO) is placed in a beaker. When dilute hydrochloric acid is added and the mixture is gently warmed and stirred, the black powder gradually dissolves completely. The resulting solution exhibits a distinctive, brilliant bluish-green colour.",
  "What chemical reaction occurs between copper(II) oxide and dilute hydrochloric acid, and what species imparts the bluish-green colour?",
  "Copper(II) oxide is reduced to red metallic copper with evolution of oxygen gas.",
  "Copper(II) oxide decomposes into black copper sulphide and liquid chlorine.",
  "Copper(II) oxide reacts with hydrochloric acid to form insoluble white copper carbonate.",
  "Copper(II) oxide is a basic oxide that undergoes neutralisation with hydrochloric acid to form soluble copper(II) chloride and water (CuO + 2HCl → CuCl₂ + H₂O); the hydrated copper(II) ions [Cu(H₂O)₆]²⁺ impart the bluish-green colour.",
  "D",
  "Copper(II) oxide is a basic metallic oxide. When treated with dilute hydrochloric acid, an acid-base neutralisation reaction takes place: CuO(s) [black] + 2HCl(aq) → CuCl₂(aq) + H₂O(l). The insoluble black solid dissolves completely. In aqueous solution, copper(II) chloride dissociates into Cu²⁺ and Cl⁻ ions; the cupric ions coordinate with water molecules to form hydrated copper complex ions ([Cu(H₂O)₆]²⁺), which exhibit a characteristic deep bluish-green hue (turning greenish in concentrated chloride solutions due to [CuCl₄]²⁻ formation)."
));

// Case 22
cases.push(makeChemCase(
  chapter, 22, "Action on Insoluble Hydroxides: Iron(III) Hydroxide Neutralisation", "Dissolution of Reddish-Brown Fe(OH)₃ to Yield Yellowish-Brown FeCl₃",
  "A freshly precipitated gelatinous reddish-brown precipitate of iron(III) hydroxide [Fe(OH)₃] is suspended in a test tube. A student adds dilute hydrochloric acid dropwise with shaking. The precipitate rapidly clears, yielding a transparent, yellowish-brown solution.",
  "What is the chemical equation for this dissolution, and how is it classified?",
  "Fe(OH)₃ + HCl → FeO + H₂O + Cl₂; classified as a thermal decomposition reaction.",
  "Fe(OH)₃ + 3HCl → FeCl₃ + 3H₂O; classified as an acid-base neutralisation reaction between an insoluble basic hydroxide and a mineral acid.",
  "Fe(OH)₃ + 2HCl → FeCl₂ + H₂O₂; classified as a catalytic cracking reaction.",
  "Fe(OH)₃ + 6HCl → 2FeCl₃ + 3H₂; classified as a metal displacement reaction.",
  "B",
  "Iron(III) hydroxide is an insoluble basic hydroxide. When dilute hydrochloric acid is added, a standard acid-base neutralisation occurs between the basic hydroxide and the acid: Fe(OH)₃(s) [reddish-brown precipitate] + 3HCl(aq) → FeCl₃(aq) [yellowish-brown solution] + 3H₂O(l). The insoluble hydroxide provides OH⁻ ions that combine with H⁺ ions from HCl to form unionised water molecules, while Fe³⁺ and Cl⁻ ions remain in solution as soluble iron(III) chloride."
));

// Case 23
cases.push(makeChemCase(
  chapter, 23, "Action on Metallic Carbonates: Effervescence and Gas Identity", "Decomposition of Carbonates Yielding Odourless CO₂ Gas",
  "When dilute hydrochloric acid is poured over solid sodium carbonate (Na₂CO₃) crystals in a conical flask fitted with a delivery tube, brisk effervescence immediately occurs. The gas evolved is colourless and odourless. When bubbled through clear lime water, the lime water turns milky, and when passed through acidified potassium dichromate paper, the paper remains completely orange with no colour change.",
  "Identify the gas evolved and write the balanced chemical equation for the reaction.",
  "Carbon dioxide gas (CO₂); Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑.",
  "Sulphur dioxide gas (SO₂); Na₂CO₃ + 2HCl → 2NaCl + H₂O + SO₂↑.",
  "Hydrogen sulphide gas (H₂S); Na₂CO₃ + 2HCl → Na₂S + H₂O + Cl₂↑.",
  "Chlorine gas (Cl₂); Na₂CO₃ + 2HCl → 2NaCl + CO + Cl₂↑.",
  "A",
  "Hydrochloric acid decomposes all metallic carbonates to liberate carbon dioxide gas, water, and the corresponding metal chloride: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑. The brisk effervescence is caused by CO₂ gas. Carbon dioxide is colourless, odourless, turns lime water milky due to insoluble calcium carbonate precipitation (Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O), and does not affect acidified potassium dichromate solution (unlike reducing SO₂ gas, which turns orange dichromate green). This confirms the gas is CO₂."
));

// Case 24
cases.push(makeChemCase(
  chapter, 24, "Action on Hydrogen Carbonates: Comparison with Sulphites", "Distinction via Gas Tests: Odourless CO₂ vs Suffocating SO₂",
  "Two unlabelled white crystalline powders, Compound X and Compound Y, are tested with dilute hydrochloric acid:\n- Compound X produces brisk effervescence of a colourless, odourless gas that extinguishes a burning splinter and turns lime water milky.\n- Compound Y produces brisk effervescence of a colourless gas with a suffocating, burning sulphur smell that turns acidified potassium permanganate solution from pink to colourless.",
  "Based on these diagnostic tests with dilute HCl, identify the functional anions present in Compound X and Compound Y.",
  "Compound X is a sulphide (S²⁻); Compound Y is a chloride (Cl⁻).",
  "Compound X is a nitrate (NO₃⁻); Compound Y is a carbonate (CO₃²⁻).",
  "Compound X is a hydrogen carbonate or carbonate (HCO₃⁻ / CO₃²⁻); Compound Y is a sulphite or bisulphite (SO₃²⁻ / HSO₃⁻).",
  "Compound X is a sulphate (SO₄²⁻); Compound Y is a thiosulphate (S₂O₃²⁻).",
  "C",
  "Dilute hydrochloric acid is a standard analytical reagent used to distinguish carbonates from sulphites: 1) Carbonates and hydrogen carbonates (HCO₃⁻) react with HCl to evolve carbon dioxide (CO₂): NaHCO₃ + HCl → NaCl + H₂O + CO₂↑. CO₂ is odourless, extinguishes flames, and turns lime water milky without affecting KMnO₄ or K₂Cr₂O7. 2) Sulphites and bisulphites (SO₃²⁻ / HSO₃⁻) react with HCl to evolve sulphur dioxide (SO₂): Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂↑. SO₂ has a pungent, suffocating smell of burning sulphur and is a strong reducing agent that decolourises pink acidified KMnO₄ solution (2KMnO₄ + 5SO₂ + 2H₂O → K₂SO₄ + 2MnSO₄ + 2H₂SO₄)."
));

// Case 25
cases.push(makeChemCase(
  chapter, 25, "Action on Metallic Sulphites: Sulphur Dioxide Generation", "Liberation of SO₂ Gas Turning Acidified Potassium Dichromate Green",
  "In a laboratory test, dilute hydrochloric acid is added to solid sodium sulphite (Na₂SO₃) in a boiling tube. A gas is evolved that has the choking odour of burning sulphur. A filter paper moistened with acidified potassium dichromate solution (K₂Cr₂O₇ + dilute H₂SO₄) is held in the mouth of the tube, and its colour changes from bright orange to deep green.",
  "Explain the chemical transformation that causes the filter paper to turn green.",
  "The gas is hydrogen, which reduces potassium to green metallic chromium.",
  "The gas is carbon dioxide, which forms green basic copper carbonate on the paper.",
  "The gas is chlorine, which bleaches the orange dye into yellow-green chlorine water.",
  "The gas is sulphur dioxide (SO₂), liberated via Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂↑; SO₂ reduces orange potassium dichromate (containing Cr⁶⁺) to green chromium sulphate [Cr₂(SO₄)₃, containing Cr³⁺].",
  "D",
  "Dilute hydrochloric acid decomposes sulphites: Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂↑. The evolved sulphur dioxide (SO₂) is a powerful reducing agent. When it contacts acidified potassium dichromate paper: K₂Cr₂O₇ + H₂SO₄ + 3SO₂ → K₂SO₄ + Cr₂(SO₄)₃ + H₂O. The orange dichromate ion (Cr₂O₇²⁻, where Cr has an oxidation state of +6) is reduced to green chromium(III) sulphate (Cr³⁺). This colour change from orange to green is a definitive diagnostic confirmation of SO₂ gas and differentiates sulphites from carbonates."
));

// Case 26
cases.push(makeChemCase(
  chapter, 26, "Action on Metallic Bisulphites: Quantitative Analysis", "Stoichiometric Sulphite Cleavage and Absence of Precipitate",
  "A solution of calcium bisulphite [Ca(HSO₃)₂] is treated with dilute hydrochloric acid. A student notes that unlike calcium sulphate reactions, no precipitate forms in the beaker; instead, a clear solution remains while a choking gas is continuously liberated.",
  "What is the balanced molecular equation for the reaction between calcium bisulphite and dilute hydrochloric acid?",
  "Ca(HSO₃)₂ + HCl → CaS + 2H₂O + 2Cl₂",
  "Ca(HSO₃)₂ + 2HCl → CaCl₂ + 2H₂O + 2SO₂↑",
  "Ca(HSO₃)₂ + 4HCl → CaCl₂ + 2H₂S + 2Cl₂ + O₂",
  "Ca(HSO₃)₂ + 2HCl → CaSO₄↓ + 2HCl + H₂",
  "B",
  "Calcium bisulphite (calcium hydrogen sulphite) reacts with dilute hydrochloric acid in a 1:2 molar ratio: Ca(HSO₃)₂ + 2HCl → CaCl₂ + 2H₂O + 2SO₂↑. Calcium chloride (CaCl₂) is highly soluble in water, so no precipitate forms and the solution remains completely clear. The sulphur dioxide gas (SO₂) evolves with effervescence."
));

// Case 27
cases.push(makeChemCase(
  chapter, 27, "Action on Metallic Sulphides: Hydrogen Sulphide Evolution", "Evolution of H₂S with Rotten Egg Odour and Lead Acetate Blackening",
  "A piece of black iron(II) sulphide (ferrous sulphide, FeS) is placed in a test tube and dilute hydrochloric acid is poured over it without heating. A colourless gas is evolved immediately that has the foul stench of rotten eggs. When a strip of filter paper soaked in lead acetate solution [(CH₃COO)₂Pb] is held over the mouth of the tube, the paper turns silvery black.",
  "Identify the gas evolved and write the chemical equation for the blackening of the lead acetate paper.",
  "The gas is hydrogen sulphide (H₂S); it reacts with lead acetate to form a black precipitate of Lead(II) sulphide: (CH₃COO)₂Pb + H₂S → PbS↓ (black) + 2CH₃COOH.",
  "The gas is sulphur trioxide (SO₃); it reacts with lead to form white lead sulphate.",
  "The gas is chlorine (Cl₂); it bleaches the paper and burns it to black carbon soot.",
  "The gas is carbon monoxide (CO); it reduces lead acetate to metallic lead nanoparticles.",
  "A",
  "When dilute hydrochloric acid reacts with metallic sulphides, hydrogen sulphide gas (H₂S) is evolved: FeS + 2HCl → FeCl₂ + H₂S↑. Hydrogen sulphide is a colourless gas with a highly repulsive, characteristic odour of rotten eggs. The standard analytical test for H₂S is its reaction with lead acetate paper: (CH₃COO)₂Pb(aq) + H₂S(g) → PbS(s) [silvery black precipitate] + 2CH₃COOH(aq). The formation of insoluble black lead sulphide (PbS) confirms the presence of sulphide ions."
));

// Case 28
cases.push(makeChemCase(
  chapter, 28, "Action on Sodium Thiosulphate: Dual Gas and Colloidal Sulphur", "Disproportionation Yielding SO₂ and Pale Yellow Turbidity of Sulphur",
  "A student adds dilute hydrochloric acid to a clear solution of sodium thiosulphate (Na₂S₂O₃) in a conical flask placed over a piece of white paper marked with a black cross 'X'. Slowly, the solution turns milky-yellow and opaque, completely obscuring the cross, while a gas with a burning sulphur smell is evolved.",
  "What unique reaction takes place between sodium thiosulphate and dilute hydrochloric acid, and what causes the yellow opacity?",
  "Sodium thiosulphate decomposes into sodium metal and chlorine gas, which reacts with paper.",
  "Sodium thiosulphate oxidises HCl into liquid bromine, which tints the water yellow.",
  "The thiosulphate ion undergoes acid-catalysed decomposition (redox disproportionation) to liberate sulphur dioxide gas (SO₂) and precipitate insoluble colloidal sulphur (S) as a fine pale-yellow suspension: Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂↑ + S↓.",
  "Dilute HCl polymerises with water to form yellow plastic crystals.",
  "C",
  "The reaction of sodium thiosulphate with dilute hydrochloric acid is a classic reaction in chemical kinetics: Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂↑ + S↓. This is an intramolecular redox (disproportionation) reaction where the two sulphur atoms in the thiosulphate ion (average oxidation state +2) undergo simultaneous oxidation to sulphur dioxide (SO₂, where S is +4) and reduction to elemental sulphur (S, where S is 0). The insoluble elemental sulphur precipitates as microscopic colloidal particles, creating a cloudy pale-yellow turbidity that obscures the black cross."
));

// Case 29
cases.push(makeChemCase(
  chapter, 29, "Action on Silver Nitrate: Characteristic Curdy White Precipitate", "Precipitation of Insoluble AgCl and Solubility in Aqueous Ammonia",
  "A chemist adds dilute hydrochloric acid to a solution of silver nitrate (AgNO₃). A thick, curdy white precipitate forms instantly. The chemist divides the precipitate into two portions:\n- Portion 1: Dilute nitric acid (HNO₃) is added; the precipitate remains completely undissolved.\n- Portion 2: Excess ammonium hydroxide solution (NH₄OH) is added; the precipitate dissolves completely, yielding a water-clear solution.",
  "Identify the curdy white precipitate and explain why it dissolves in excess ammonium hydroxide.",
  "The precipitate is silver oxide (Ag₂O); it dissolves in ammonia by forming liquid silver metal.",
  "The precipitate is silver nitride (Ag₃N); it dissolves because ammonia is an acid.",
  "The precipitate is silver carbonate (Ag₂CO₃); it dissolves by releasing carbon dioxide gas.",
  "The precipitate is Silver Chloride (AgCl), formed via AgNO₃ + HCl → AgCl↓ + HNO₃; it is insoluble in dilute HNO₃ but dissolves in excess NH₄OH by forming a soluble coordination complex, Diamminesilver(I) chloride: AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O.",
  "D",
  "The silver nitrate test is the definitive test for chloride ions. When dilute HCl is added to AgNO₃: AgNO₃(aq) + HCl(aq) → AgCl(s)↓ [curdy white ppt] + HNO₃(aq). Silver chloride (AgCl) is insoluble in water and insoluble in dilute nitric acid (which distinguishes it from silver sulphite or silver carbonate, both of which dissolve in HNO₃). When excess aqueous ammonia (NH₄OH) is added, AgCl dissolves due to complexation: AgCl(s) + 2NH₄OH(aq) → [Ag(NH₃)₂]Cl(aq) + 2H₂O(l). The formation of the linear coordination cation diamminesilver(I) ([Ag(NH₃)₂]⁺) completely brings the silver ions into solution."
));

// Case 30
cases.push(makeChemCase(
  chapter, 30, "Photochemical Sensitivity of Silver Chloride: Photolysis Mechanism", "Photolytic Cleavage of AgCl to Metallic Silver and Chlorine Gas",
  "A test tube containing the fresh curdy white precipitate of silver chloride (AgCl) obtained from Case 29 is left on a windowsill exposed to bright natural sunlight. Over the course of 30 minutes, the pristine white precipitate gradually darkens, turning violet and eventually dark greyish-black.",
  "What chemical reaction occurs when silver chloride is exposed to sunlight, and what substance causes the dark grey coloration?",
  "Silver chloride absorbs moisture to form black silver hydride.",
  "Silver chloride undergoes photochemical decomposition (photolysis): 2AgCl(s) --[sunlight]--> 2Ag(s) + Cl₂(g); the finely divided metallic silver particles formed appear dark greyish-black.",
  "Silver chloride reacts with atmospheric oxygen to form black silver oxide.",
  "Sunlight melts silver chloride into a black liquid polymer.",
  "B",
  "Silver chloride is intrinsically light-sensitive (photochemically active). When photons of ultraviolet and blue light strike the solid AgCl crystal lattice, an electron is transferred from a chloride ion to an adjacent silver cation: Cl⁻ + hν → Cl + e⁻, followed by Ag⁺ + e⁻ → Ag. The overall stoichiometric equation is: 2AgCl(s) --[light]--> 2Ag(s) + Cl₂(g). The chlorine gas escapes into the air, while colloidal clusters of metallic silver remain dispersed in the solid. Due to surface plasmon resonance and light scattering of micro-fine silver particles, the precipitate changes from white through violet to a dark greyish-black colour. (This was the historical basis of black-and-white photography)."
));

// Case 31
cases.push(makeChemCase(
  chapter, 31, "Action on Lead Nitrate: Thermal Solubility Inversion", "Precipitation of PbCl₂ Soluble in Hot Water and Recrystallising upon Cooling",
  "Dilute hydrochloric acid is added to a solution of lead(II) nitrate [Pb(NO₃)₂] in a boiling tube. A heavy white precipitate of lead(II) chloride (PbCl₂) forms immediately. The student heats the boiling tube over a Bunsen flame, and the white precipitate completely dissolves to form a clear, colourless liquid. When the tube is removed from the heat and allowed to cool in a beaker of cold water, sparkling, needle-shaped white crystals reappear throughout the liquid.",
  "What fundamental physical-chemical property of lead(II) chloride is demonstrated by this reversible thermal phenomenon?",
  "PbCl₂ has a steep temperature-dependent solubility curve: it is virtually insoluble in cold water (precipitating at room temperature), but highly soluble in boiling water; upon cooling, the excess dissolved solute crystallises out as pure crystalline needles.",
  "PbCl₂ decomposes on heating into gaseous lead and chlorine, which re-condense on cooling.",
  "Heating converts lead chloride into silver chloride, which is soluble.",
  "The heat destroys the covalent bonds, turning lead into water.",
  "A",
  "When dilute HCl reacts with lead nitrate: Pb(NO₃)₂ + 2HCl → PbCl₂↓ + 2HNO₃. Lead(II) chloride (PbCl₂) precipitates as a white crystalline powder because its solubility at 20°C is very low (~10 g/L). However, its solubility increases dramatically with temperature (reaching ~33 g/L at 100°C). When heated to boiling, the kinetic energy of water molecules breaks the lattice and all PbCl₂ dissolves completely, yielding a clear solution. When cooled, the solution becomes supersaturated, and pure PbCl₂ crystallises out in the form of characteristic, glistening, needle-like crystals. This thermal solubility reversal distinguishes PbCl₂ from AgCl (which is insoluble even in boiling water)."
));

// Case 32
cases.push(makeChemCase(
  chapter, 32, "Action on Mercury(I) Nitrate: Formation of Calomel", "Precipitation of Hg₂Cl₂ and Blackening Reaction with Ammonia Solution",
  "In a specialized cation separation scheme, dilute hydrochloric acid is added to a solution of mercurous nitrate [Hg₂(NO₃)₂]. A heavy white precipitate forms. When aqueous ammonia (NH₄OH) is added to this precipitate, instead of dissolving like AgCl, the precipitate immediately turns pitch black.",
  "What is the identity of the white precipitate, and why does it turn black upon addition of aqueous ammonia?",
  "The white precipitate is mercury(II) chloride (HgCl₂); it turns black because ammonia burns it to elemental carbon.",
  "The white precipitate is metallic mercury; it reacts with ammonia to form liquid black ink.",
  "The white precipitate is Mercurous chloride (Calomel, Hg₂Cl₂); aqueous ammonia causes disproportionation into finely divided metallic mercury (Hg, black) and white mercuric amidochloride (Hg(NH₂)Cl), the mixture appearing pitch black.",
  "The white precipitate is ammonium nitrate; it turns black by oxidising the test tube glass.",
  "C",
  "Mercurous ions exist as diatomic cations (Hg₂²⁺). Adding dilute HCl precipitates mercurous chloride (calomel): Hg₂(NO₃)₂ + 2HCl → Hg₂Cl₂↓ (white) + 2HNO₃. Unlike AgCl (which dissolves in NH₄OH to form a clear solution) or PbCl₂ (which is unaffected by NH₄OH), Hg₂Cl₂ undergoes an auto-redox (disproportionation) reaction when treated with aqueous ammonia: Hg₂Cl₂ + 2NH₃ → Hg(s) [black metallic mercury] + Hg(NH₂)Cl(s) [white mercuric amidochloride] + NH₄Cl. The dispersed colloidal metallic mercury imparts an intense, jet-black appearance to the precipitate. This is a definitive confirmatory test for mercurous ions."
));

// Case 33
cases.push(makeChemCase(
  chapter, 33, "Oxidation of Concentrated HCl: Manganese Dioxide (MnO₂) Reagent", "Laboratory Preparation of Chlorine Gas via Thermal Oxidation of HCl",
  "In a gas preparation flask, black powdered manganese dioxide (MnO₂) is mixed with concentrated hydrochloric acid. At room temperature, little reaction occurs. When the flask is heated over a wire gauze, vigorous effervescence ensues, liberating a greenish-yellow gas with a suffocating, choking odour that bleaches moist coloured litmus paper.",
  "What chemical role does manganese dioxide play in this reaction, and what is the balanced chemical equation?",
  "MnO₂ acts as a dehydrating agent that extracts water from HCl to form chlorine gas.",
  "MnO₂ acts as a basic hydroxide that neutralises HCl into solid manganese sulphate.",
  "MnO₂ acts as a reducing agent that adds electrons to chlorine atoms.",
  "MnO₂ acts as an oxidising agent that oxidises concentrated hydrochloric acid (where Cl is -1) to elemental chlorine gas (Cl₂, where Cl is 0), while Mn⁴⁺ is reduced to Mn²⁺ (MnCl₂): MnO₂ + 4HCl(conc.) --[heat]--> MnCl₂ + 2H₂O + Cl₂↑.",
  "D",
  "Manganese dioxide (MnO₂) is an oxidising agent. In this classic laboratory preparation of chlorine gas, MnO₂ oxidises the chloride ions of concentrated HCl: MnO₂ + 4HCl(conc.) --[Δ]--> MnCl₂ + 2H₂O + Cl₂↑. In this redox process: 1) Manganese is reduced from oxidation state +4 (in MnO₂) to +2 (in MnCl₂): Mn⁴⁺ + 2e⁻ → Mn²⁺. 2) Chloride ions are oxidised from -1 to 0: 2Cl⁻ → Cl₂ + 2e⁻. Dilute HCl cannot be used because its reduction potential is insufficient to drive the reaction without excessive acid concentration; heating is required to provide the activation energy."
));

// Case 34
cases.push(makeChemCase(
  chapter, 34, "Oxidation of Concentrated HCl: Potassium Permanganate (KMnO₄)", "Spontaneous Room Temperature Oxidation of HCl with Decolourisation of Purple MnO₄⁻",
  "A student places dark purple crystals of potassium permanganate (KMnO₄) in a round-bottom flask and adds concentrated hydrochloric acid dropwise from a thistle funnel. Immediately, without any external heating, violent effervescence occurs, releasing voluminous greenish-yellow chlorine gas, while the intense purple colour of the solution is completely discharged, leaving a pale pink/colourless liquid.",
  "Why does potassium permanganate oxidize concentrated hydrochloric acid at room temperature without heating, and what is the balanced stoichiometric equation?",
  "KMnO₄ contains liquid chlorine that is displaced by hydrogen ions without any electron transfer.",
  "Potassium permanganate is an extraordinarily powerful oxidising agent (Mn is in the +7 oxidation state); it oxidises Cl⁻ to Cl₂ spontaneously at room temperature: 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂↑.",
  "KMnO₄ acts as a catalyst that decomposes water into chlorine gas and ozone.",
  "KMnO₄ is a flammable substance that combusts HCl into toxic nitrogen gas.",
  "B",
  "Potassium permanganate (KMnO₄) contains manganese in its highest oxidation state (+7). Because of its exceptionally high standard reduction potential (E° = +1.51 V in acid medium), it is a far stronger oxidising agent than MnO₂ (E° = +1.23 V). Consequently, it does not require external heating to overcome activation energy: it oxidises concentrated hydrochloric acid instantaneously at room temperature: 2KMnO₄ + 16HCl(conc.) → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂↑. The deep purple permanganate ion (MnO₄⁻) is reduced to the virtually colourless manganese(II) ion (Mn²⁺), discharging the purple colour while liberating greenish-yellow chlorine gas."
));

// Case 35
cases.push(makeChemCase(
  chapter, 35, "Oxidation of Concentrated HCl: Trilead Tetroxide / Red Lead (Pb₃O₄)", "Mixed Oxide Behavior (2PbO.PbO₂) Yielding PbCl₂ and Cl₂ Gas",
  "A bright red powder known as red lead (trilead tetroxide, minium, Pb₃O₄) is treated with concentrated hydrochloric acid and warmed. A choking, greenish-yellow gas is evolved that turns starch-iodide paper blue. As the reaction proceeds, the red powder disappears and is replaced by a heavy white crystalline precipitate.",
  "Explain the chemical nature of red lead as a mixed oxide, and write the balanced equation for its reaction with concentrated hydrochloric acid.",
  "Red lead is a stoichiometric mixed oxide composed of two basic Lead(II) oxide molecules and one oxidising Lead(IV) oxide molecule (2PbO·PbO₂); the PbO component undergoes neutralisation (2PbO + 4HCl → 2PbCl₂ + 2H₂O) while the PbO₂ component oxidises HCl (PbO₂ + 4HCl → PbCl₂ + 2H₂O + Cl₂↑), giving the overall reaction: Pb₃O₄ + 8HCl → 3PbCl₂↓ + 4H₂O + Cl₂↑.",
  "Red lead is an alloy of lead and iron that burns in hydrochloric acid to produce hydrogen.",
  "Red lead is a peroxide that releases pure oxygen gas, which reacts with nitrogen.",
  "Red lead acts purely as a mono-acidic base forming only PbCl₄ and liquid water.",
  "A",
  "Red lead (Pb₃O₄) is not a simple oxide but a stoichiometric mixed oxide represented structurally as 2PbO·PbO₂ [dilead(II) lead(IV) oxide]. When reacted with concentrated hydrochloric acid: 1) The two basic PbO units undergo ordinary neutralisation: 2PbO + 4HCl → 2PbCl₂ + 2H₂O. 2) The single Lead(IV) dioxide (PbO₂) unit acts as a powerful oxidising agent, oxidising chloride ions to chlorine gas: PbO₂ + 4HCl → PbCl₂ + 2H₂O + Cl₂↑. Combining both reactions yields the complete equation: Pb₃O₄ + 8HCl → 3PbCl₂ + 4H₂O + Cl₂↑. The white precipitate formed is insoluble lead(II) chloride (PbCl₂), and the evolved gas is chlorine."
));

// Case 36
cases.push(makeChemCase(
  chapter, 36, "Oxidation of Concentrated HCl: Lead Dioxide (PbO₂) vs Lead Monoxide (PbO)", "Higher Oxide Oxidising Property vs Purely Basic Neutralisation",
  "Two different oxides of lead, Oxide A (dark brown powder, PbO₂) and Oxide B (yellow powder, litharge, PbO), are heated separately with concentrated hydrochloric acid in two boiling tubes:\n- Tube 1 (Oxide A + conc. HCl): The brown powder dissolves, forming a white precipitate, and evolves a greenish-yellow gas that bleaches moist litmus paper.\n- Tube 2 (Oxide B + conc. HCl): The yellow powder dissolves, forming a white precipitate, but NO gas whatsoever is evolved.",
  "Why does Lead dioxide (PbO₂) evolve chlorine gas with concentrated hydrochloric acid, whereas Lead monoxide (PbO) does not?",
  "PbO₂ contains radioactive oxygen that splits chlorine atoms into gas.",
  "PbO is a reducing agent that absorbs all gases before they can escape.",
  "PbO₂ is a higher oxide containing lead in the +4 oxidation state, making it an oxidising agent capable of oxidising Cl⁻ to Cl₂ (PbO₂ + 4HCl → PbCl₂ + 2H₂O + Cl₂↑); PbO contains lead in the +2 oxidation state and is a purely basic oxide that undergoes simple neutralisation without any redox reaction (PbO + 2HCl → PbCl₂ + H₂O).",
  "PbO₂ is an acid that reacts with hydrochloric acid to form explosive nitrogen gas.",
  "C",
  "In PbO (lead monoxide), lead is in its stable +2 oxidation state. Because PbO has no oxidising capacity, it acts simply as a metallic basic oxide, undergoing standard neutralisation: PbO + 2HCl → PbCl₂↓ + H₂O. No change in oxidation state occurs, so no gas is liberated. In contrast, in PbO₂ (lead dioxide), lead is in the unstable +4 oxidation state. Tetravalent lead (Pb⁴⁺) has a strong thermodynamic driving force to gain 2 electrons and reduce to the stable divalent plumbous state (Pb²⁺). Thus, PbO₂ acts as an oxidising agent: PbO₂ + 4HCl → PbCl₂↓ + 2H₂O + Cl₂↑, oxidising -1 chloride to 0 elemental chlorine."
));

// Case 37
cases.push(makeChemCase(
  chapter, 37, "Oxidation of Concentrated HCl: Potassium Dichromate (K₂Cr₂O₇)", "Redox Cleavage Forming Green CrCl₃ and Greenish-Yellow Cl₂ Gas",
  "Bright orange crystals of potassium dichromate (K₂Cr₂O₇) are placed in a boiling tube, and concentrated hydrochloric acid is added. Upon warming the tube, the orange crystals dissolve, the solution turns a rich emerald green, and a pungent greenish-yellow gas is evolved that turns moist starch-iodide paper blue.",
  "What is the balanced equation for this redox reaction, and what chemical species is responsible for the emerald green colour?",
  "K₂Cr₂O₇ + 4HCl → 2KCl + Cr₂O₃ + 2H₂O + Cl₂; green colour is due to elemental potassium.",
  "K₂Cr₂O₇ + 2HCl → K₂CrO₄ + CrCl₂ + H₂O; green colour is due to chlorine gas dissolved in water.",
  "K₂Cr₂O₇ + 7HCl → 2KCl + 2Cr + 7H₂O + 3Cl₂; green colour is due to colloidal chromium metal.",
  "K₂Cr₂O₇ + 14HCl(conc.) --[heat]--> 2KCl + 2CrCl₃ + 7H₂O + 3Cl₂↑; the emerald green colour is due to the formation of hydrated chromium(III) chloride [CrCl₃ / Cr³⁺ ions].",
  "D",
  "Potassium dichromate is a strong oxidising agent. In the presence of concentrated hydrochloric acid, it oxidises chloride ions to chlorine gas: K₂Cr₂O₇ + 14HCl(conc.) --[Δ]--> 2KCl + 2CrCl₃ + 7H₂O + 3Cl₂↑. In this reaction: 1) The chromium in dichromate (Cr₂O₇²⁻) is in the +6 oxidation state (orange). It is reduced to chromium(III) chloride (CrCl₃), where chromium is in the +3 oxidation state (green). 2) Six chloride ions (from 14 HCl) are oxidised to 3 molecules of Cl₂ gas. The emergence of the green Cr³⁺ complex in solution alongside the evolution of greenish-yellow Cl₂ gas confirms this redox reaction."
));

// Case 38
cases.push(makeChemCase(
  chapter, 38, "Aqua Regia: Stoichiometric Composition and Nascent Chlorine Generation", "3:1 Mixture of Conc. HCl and Conc. HNO₃ Forming NOCl and Nascent [Cl]",
  "A goldsmith prepares a fuming, yellowish-orange corrosive liquid called 'Aqua Regia' (royal water) to dissolve gold scrap. The goldsmith measures concentrated hydrochloric acid and concentrated nitric acid into a beaker in a specific volumetric ratio.",
  "What is the precise volumetric ratio of concentrated acids used to prepare Aqua Regia, and what transient active chemical species makes it capable of dissolving noble metals?",
  "1 part concentrated HCl to 3 parts concentrated HNO₃; active species is hydrogen gas.",
  "3 parts concentrated HCl to 1 part concentrated HNO₃ by volume; the active species is nascent chlorine ([Cl]) and nitrosyl chloride (NOCl), generated via: 3HCl(conc.) + HNO₃(conc.) → NOCl + 2H₂O + 2[Cl].",
  "1 part concentrated HCl to 1 part concentrated HNO₃; active species is pure steam.",
  "3 parts concentrated H₂SO₄ to 1 part concentrated HCl; active species is sulphur dioxide.",
  "B",
  "Aqua Regia is prepared by mixing 3 volumes of concentrated hydrochloric acid with 1 volume of concentrated nitric acid: 3HCl(conc.) + HNO₃(conc.) → NOCl (nitrosyl chloride) + 2H₂O + 2[Cl] (nascent chlorine). Neither concentrated HCl nor concentrated HNO₃ alone can dissolve noble metals like gold (Au) or platinum (Pt). In Aqua Regia, nitric acid acts as a powerful oxidising agent that oxidises hydrochloric acid to release atomic (nascent) chlorine ([Cl]). Because nascent chlorine is in a monoatomic, highly reactive state, it readily attacks noble metals."
));

// Case 39
cases.push(makeChemCase(
  chapter, 39, "Aqua Regia: Industrial Dissolution of Metallic Gold", "Oxidation of Noble Metal to Soluble Chloroauric Acid (HAuCl₄)",
  "A piece of pure 24-carat gold foil (Au) is dropped into a beaker of freshly prepared Aqua Regia. The gold rapidly dissolves, producing a yellow-orange solution and evolving brownish-red nitrogen dioxide fumes. After complete dissolution, the liquid is evaporated gently to yield yellow crystals.",
  "What soluble chemical compound is formed when metallic gold dissolves in Aqua Regia?",
  "Tetrachloroauric(III) acid (chloroauric acid, HAuCl₄), formed via the attack of nascent chlorine: Au + 3[Cl] → AuCl₃, followed by AuCl₃ + HCl → HAuCl₄.",
  "Gold nitrate [Au(NO₃)₃], formed by direct displacement of hydrogen.",
  "Insoluble gold(I) oxide [Au₂O], which precipitates as yellow sand.",
  "Gold sulphate [Au₂(SO₄)₃], formed by the action of dissolved atmospheric sulphur.",
  "A",
  "Gold is an unreactive noble metal with a very high standard reduction potential (E° Au³⁺/Au = +1.50 V). Concentrated HNO₃ alone cannot oxidise gold because the equilibrium lies far to the left. However, in Aqua Regia, nascent chlorine generated from the 3:1 HCl:HNO₃ mixture attacks gold directly: Au + 3[Cl] → AuCl₃. The gold(III) chloride then coordinates with excess hydrochloric acid present in the mixture: AuCl₃ + HCl → HAuCl₄ (tetrachloroauric(III) acid / chloroauric acid). The formation of the extremely stable soluble complex anion [AuCl₄]⁻ lowers the free Au³⁺ concentration, shifting the oxidation potential and allowing complete dissolution of the metal."
));

// Case 40
cases.push(makeChemCase(
  chapter, 40, "Distinction Test: Dilute HCl vs Dilute H₂SO₄ via Barium Chloride", "Soluble BaCl₂ Producing White Insoluble BaSO₄ Precipitate Exclusively with H₂SO₄",
  "A student is provided with two unlabelled reagent bottles, Bottle A and Bottle B. Both contain colourless, odourless, strongly acidic liquids. The instructor informs the student that one is dilute hydrochloric acid and the other is dilute sulphuric acid. The student adds a few drops of Barium chloride solution (BaCl₂) to a sample from each bottle:\n- Sample from Bottle A: No visible change; remains completely clear.\n- Sample from Bottle B: An immediate, thick, heavy white precipitate forms that does not dissolve even upon adding concentrated hydrochloric acid and boiling.",
  "Identify the contents of Bottle A and Bottle B, and write the ionic reaction responsible for the white precipitate.",
  "Bottle A is dilute H₂SO₄; Bottle B is dilute HCl; precipitate is BaCl₂.",
  "Bottle A is water; Bottle B is nitric acid; precipitate is Ba(NO₃)₂.",
  "Bottle A is dilute Hydrochloric acid (HCl); Bottle B is dilute Sulphuric acid (H₂SO₄); the white precipitate is Barium sulphate: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)↓ (insoluble in all dilute and concentrated mineral acids).",
  "Bottle A is carbonic acid; Bottle B is acetic acid; precipitate is barium carbonate.",
  "C",
  "Barium chloride solution (BaCl₂) is the standard diagnostic reagent used to distinguish between dilute hydrochloric acid and dilute sulphuric acid: 1) With dilute HCl: BaCl₂ + 2HCl → BaCl₂ + 2HCl. Both reagents share the common chloride ion (Cl⁻); no reaction occurs and the solution remains crystal clear. 2) With dilute H₂SO₄: BaCl₂(aq) + H₂SO₄(aq) → BaSO₄(s)↓ [heavy white precipitate] + 2HCl(aq). Barium sulphate (BaSO₄) is exceptionally insoluble in water and completely insoluble in all dilute and concentrated mineral acids (including boiling HCl or HNO₃). Thus, Bottle A is dilute HCl and Bottle B is dilute H₂SO₄."
));

// Case 41
cases.push(makeChemCase(
  chapter, 41, "Distinction Test: Dilute HCl vs Dilute HNO₃ via Silver Nitrate", "Formation of Curdy White AgCl Precipitate Exclusively with HCl",
  "In another chemical identification exercise, a technician must distinguish between two identical flasks: Flask 1 contains dilute Hydrochloric acid, and Flask 2 contains dilute Nitric acid. The technician adds Silver nitrate solution (AgNO₃) to separate aliquots from both flasks.",
  "What distinct visual observation is made in each flask, and what confirmatory test proves the identity of the precipitate?",
  "Both flasks form thick white precipitates that dissolve when heated.",
  "Flask 1 shows no change; Flask 2 forms a yellow precipitate of silver iodide.",
  "Flask 1 forms a red precipitate of silver oxide; Flask 2 turns brilliant green.",
  "Flask 1 (dilute HCl) produces a curdy white precipitate of silver chloride (AgCl↓), which is insoluble in dilute HNO₃ but dissolves completely in excess ammonium hydroxide (NH₄OH); Flask 2 (dilute HNO₃) produces no precipitate whatsoever and remains completely clear.",
  "D",
  "Silver nitrate solution (AgNO₃) serves as the primary diagnostic differentiator between dilute HCl and dilute HNO₃: 1) Flask 1 (dilute HCl): AgNO₃ + HCl → AgCl↓ (curdy white precipitate) + HNO₃. Silver chloride precipitates because it has an extremely low solubility product (Ksp ≈ 1.8 × 10⁻¹⁰). This precipitate is confirmed by its total insolubility in dilute HNO₃ and complete dissolution in excess aqueous ammonia to form soluble [Ag(NH₃)₂]Cl. 2) Flask 2 (dilute HNO₃): Adding AgNO₃ to HNO₃ introduces no incompatible ions (both share NO₃⁻); all nitrates are soluble in water, so no precipitation occurs and the solution remains completely clear."
));

// Case 42
cases.push(makeChemCase(
  chapter, 42, "Synthesis of Hydrogen Chloride: Diffused vs Direct Sunlight Dynamics", "Free Radical Photochemical Chain Reaction and Explosive Kinetics in Direct Sunlight",
  "Equal volumes of pure hydrogen gas and chlorine gas are mixed in an airtight, heavy-walled quartz tube at room temperature:\n- Experiment 1: The tube is kept in diffused (indirect) sunlight. The greenish-yellow colour of chlorine gradually fades over several minutes without any noise, quietly forming colourless hydrogen chloride gas.\n- Experiment 2: The tube is exposed directly to intense, unshaded direct sunlight. Instantly, a blinding flash of light and a violent, shattering explosion occur.",
  "What photochemical mechanism explains the difference between the quiet reaction in diffused sunlight and the violent explosion in direct sunlight?",
  "Diffused sunlight contains only infrared rays that cool the molecules, whereas direct sunlight heats the gas to 5000°C.",
  "The reaction proceeds via a free-radical chain mechanism (H₂ + Cl₂ → 2HCl): in diffused sunlight, chlorine molecules dissociate slowly into chlorine free radicals (Cl·) yielding a controllable chain reaction; in direct sunlight, intense ultraviolet photons dissociate massive numbers of Cl₂ molecules simultaneously, causing an explosive, self-accelerating chain-branching reaction with instantaneous release of heat.",
  "Direct sunlight converts hydrogen into solid carbon, which detonates.",
  "Chlorine gas reacts with atmospheric nitrogen only in direct sunlight.",
  "B",
  "The synthesis of HCl from its elements (H₂ + Cl₂ → 2HCl) is a classic photochemical free-radical chain reaction: 1) Initiation: A photon of light splits a chlorine molecule: Cl₂ + hν → 2Cl· (chlorine radicals). 2) Propagation: Cl· + H₂ → HCl + H·; then H· + Cl₂ → HCl + Cl·. This cycle repeats thousands of times per absorbed photon. In diffused sunlight, photon flux is moderate; initiation occurs at a controlled rate, and heat of reaction is dissipated safely to the surroundings. In direct sunlight, intense ultraviolet radiation causes near-instantaneous photodissociation of enormous numbers of Cl₂ molecules. The propagation cycles multiply exponentially, generating massive thermal energy faster than it can dissipate. The rapid thermal expansion of gases produces a catastrophic explosive shockwave."
));

// Case 43
cases.push(makeChemCase(
  chapter, 43, "Industrial Synthesis of Hydrochloric Acid: The Silica Burner Method", "Combustion of Excess H₂ in Cl₂ Atmosphere to Avoid Toxic Cl₂ Effluent",
  "In a modern chemical chlor-alkali plant, hydrogen chloride is manufactured synthetically by burning hydrogen gas in an atmosphere of chlorine gas inside specially designed fused silica (quartz) combustion chambers. In the process control room, the chemical engineer strictly programs the mass-flow controllers to maintain an excess of hydrogen gas (approximately 5% to 10% excess H₂) over chlorine gas.",
  "Why is hydrogen gas deliberately fed in excess during the industrial combustion synthesis of hydrogen chloride?",
  "Chlorine gas is extremely toxic, corrosive, and difficult to separate from product gases; feeding excess hydrogen ensures that 100% of the toxic chlorine is completely consumed, while unreacted hydrogen is non-toxic, easily vented, or recycled.",
  "Excess hydrogen acts as a fire extinguisher to prevent the silica burner from burning.",
  "Chlorine gas is cheaper than hydrogen, so plants prefer to waste chlorine.",
  "Excess hydrogen turns the resulting hydrochloric acid into an alkaline fertilizer.",
  "A",
  "In industrial synthetic HCl production (H₂ + Cl₂ → 2HCl), chlorine gas (Cl₂) is a highly toxic, greenish-yellow, suffocating pollutant and an environmental hazard that cannot be permitted in the plant exhaust or dissolved product acid. Free dissolved Cl₂ turns hydrochloric acid yellow and impairs its commercial purity. Hydrogen gas (H₂), on the other hand, is non-toxic, insoluble in water, and completely harmless when vented. By supplying an excess of hydrogen (typically 5–10% stoichiometric excess), the plant ensures that the limiting reactant is chlorine, driving its conversion to exactly 100% and yielding pure, chlorine-free, water-white hydrochloric acid."
));

// Case 44
cases.push(makeChemCase(
  chapter, 44, "Action on Bleaching Powder: Liberation of Available Chlorine", "Acid Decomposition of Calcium Hypochlorite / Chloride Complex Yielding Cl₂",
  "A municipal water treatment facility stores bleaching powder [calcium hypochlorite / chloride complex, CaOCl₂]. When dilute hydrochloric acid is poured over a sample of bleaching powder in a gas generator, effervescence occurs, liberating copious volumes of a greenish-yellow gas with a potent bleaching action.",
  "What is the balanced chemical equation for the action of dilute hydrochloric acid on bleaching powder, and what is the liberated gas?",
  "CaOCl₂ + 2HCl → CaCl₂ + H₂O + H₂↑; liberated gas is hydrogen.",
  "CaOCl₂ + HCl → Ca(OH)₂ + 2Cl₂↑; liberated gas is carbon dioxide.",
  "CaOCl₂ + 2HCl → CaCl₂ + H₂O + Cl₂↑; the liberated gas is 'available chlorine' (Cl₂).",
  "CaOCl₂ + 4HCl → Ca + 2H₂O + 3Cl₂↑; liberated gas is ozone.",
  "C",
  "Bleaching powder is chemically calcium hypochlorite-chloride: CaOCl₂ (or Ca(OCl)Cl). When treated with excess dilute hydrochloric acid, both the hypochlorite and chloride moieties undergo decomposition: CaOCl₂ + 2HCl → CaCl₂ + H₂O + Cl₂↑. The hypochlorite ion (OCl⁻, Cl in +1 state) oxidises the chloride ion (Cl⁻ in -1 state) in the presence of acid to form elemental chlorine gas (Cl₂ in 0 state). This liberated chlorine is commercially termed the 'available chlorine' of bleaching powder, responsible for its powerful sterilising, disinfecting, and bleaching capabilities."
));

// Case 45
cases.push(makeChemCase(
  chapter, 45, "Qualitative Separation of Chlorides: AgCl vs PbCl₂ Mixture", "Hot Water Differential Extraction and Confirmation with Aqueous Ammonia",
  "A solid forensic sample contains an intimate white mixture of Silver Chloride (AgCl) and Lead(II) Chloride (PbCl₂). A forensic analyst is tasked with separating the two metal chlorides completely into pure individual compounds using only distilled water, heat, and dilute ammonium hydroxide.",
  "Describe the exact experimental procedure to separate and confirm AgCl and PbCl₂ from this mixture.",
  "Dissolve the mixture in cold water; AgCl dissolves and PbCl₂ remains as a residue.",
  "Heat the dry mixture until AgCl vaporises into a gas and PbCl₂ melts into lead metal.",
  "Add concentrated nitric acid; both chlorides decompose into nitrogen gas and water.",
  "Boil the solid mixture with distilled water and filter while hot: PbCl₂ dissolves completely in boiling water and passes into the filtrate (recrystallising as sparkling needles upon cooling), while AgCl remains insoluble and is collected on the filter paper, where it is confirmed by dissolving in dilute ammonium hydroxide to form [Ag(NH₃)₂]Cl.",
  "D",
  "The qualitative separation of Group I insoluble chlorides relies on differential solubility: 1) Separation: Boiling water is added to the mixture. Lead(II) chloride (PbCl₂) is soluble in hot water, whereas silver chloride (AgCl) remains completely insoluble even at 100°C. Filtering the boiling mixture separates PbCl₂ (in the hot filtrate) from AgCl (as the residue on the filter paper). 2) PbCl₂ confirmation: As the hot filtrate cools, PbCl₂ crystallises out as characteristic glistening white needle-like crystals. 3) AgCl confirmation: The residue on the filter paper is treated with dilute ammonium hydroxide (NH₄OH); it dissolves completely to form the clear, soluble complex diamminesilver(I) chloride ([Ag(NH₃)₂]Cl), which reprecipitates as white AgCl upon re-acidification with dilute HNO₃."
));

// Case 46
cases.push(makeChemCase(
  chapter, 46, "Electrolysis of Concentrated Hydrochloric Acid: Inert Anode Phenomena", "Quantitative Evolution of H₂ at Cathode and Cl₂ at Anode with Solvent Saturation Delay",
  "Concentrated hydrochloric acid is placed in a Hoffman voltameter fitted with inert graphite (carbon) electrodes. A direct electric current is passed through the electrolyte. In the first few minutes, the volume of gas collecting in the cathode limb (hydrogen) is noticeably greater than the volume of gas collecting in the anode limb (chlorine). However, once electrolysis has proceeded for 20 minutes, the rate of gas accumulation stabilizes at an exact 1:1 volume ratio.",
  "Why is the volume of chlorine gas collected at the anode initially less than that of hydrogen at the cathode, and what are the electrode reactions?",
  "Chlorine molecules are destroyed by graphite electrodes to form diamond crystals.",
  "At cathode: 2H⁺ + 2e⁻ → H₂↑; at anode: 2Cl⁻ - 2e⁻ → Cl₂↑; chlorine gas is moderately soluble in water (~2 volumes of Cl₂ dissolve in 1 volume of water at room temperature), so initially evolved chlorine dissolves in the aqueous electrolyte until the solution becomes fully saturated, after which H₂ and Cl₂ collect in the theoretical 1:1 molar/volume ratio.",
  "Hydrogen gas is denser than chlorine and compresses into a smaller volume.",
  "The electric current breaks down carbon from the cathode into methane gas.",
  "B",
  "Electrolysis of concentrated hydrochloric acid proceeds according to: Cathode (negative): 2H⁺ + 2e⁻ → H₂↑ (reduction). Anode (positive): 2Cl⁻ - 2e⁻ → Cl₂↑ (oxidation). Overall: 2HCl(aq) → H₂(g) + Cl₂(g). According to Avogadro's law, equal moles of gases occupy equal volumes under identical conditions, predicting an exact 1:1 volume ratio. However, hydrogen is virtually insoluble in water, so all generated H₂ bubbles out immediately into the cathode limb. Chlorine gas, in contrast, is moderately soluble in aqueous solution (~2.3 L Cl₂ per 1 L water at 20°C). During the initial minutes of electrolysis, a substantial portion of the newly liberated chlorine dissolves in the surrounding aqueous solution. Only when the electrolyte becomes completely saturated with dissolved chlorine does all evolved Cl₂ gas escape into the anode tube, achieving the true 1:1 stoichiometric volume ratio."
));

// Case 47
cases.push(makeChemCase(
  chapter, 47, "Comparative Acidic Strength: Degree of Ionisation of HCl vs Weak Acids", "Complete Dissociation and High Hydronium Ion Concentration",
  "A physical chemistry student prepares 0.1 M aqueous solutions of three acids: Solution 1: 0.1 M Hydrochloric acid (HCl)\nSolution 2: 0.1 M Acetic acid (CH₃COOH)\nSolution 3: 0.1 M Carbonic acid (H₂CO₃)\nThe student measures their electrical conductivities using a conductivity meter and determines their pH values using a calibrated digital pH probe. The data show: HCl has a pH of ~1.0 and high conductivity; CH₃COOH has a pH of ~2.9 and moderate conductivity; H₂CO₃ has a pH of ~3.8 and very low conductivity.",
  "Explain why 0.1 M HCl exhibits vastly higher electrical conductivity and lower pH compared to equimolar acetic and carbonic acids.",
  "Hydrochloric acid is a strong mineral acid that undergoes virtually 100% ionisation in water (HCl + H₂O → H₃O⁺ + Cl⁻), producing a high concentration of free mobile ions ([H₃O⁺] = 0.1 M), whereas acetic acid and carbonic acid are weak acids that ionise only partially (<1.3%), leaving most solute as un-ionised molecules.",
  "Hydrochloric acid contains sodium ions that conduct electricity faster than hydrogen.",
  "Acetic acid neutralises its own ions into solid sugar molecules.",
  "Carbonic acid contains no hydrogen atoms capable of carrying charge.",
  "A",
  "The strength of an acid is determined by its degree of ionisation (α) in water: 1) Strong acids: Hydrochloric acid is a strong electrolyte and a strong acid with a very large dissociation constant (Ka > 10⁶). In 0.1 M aqueous solution, its degree of ionisation is virtually 100% (α ≈ 1.0). Every single molecule dissociates: HCl + H₂O → H₃O⁺ + Cl⁻. The concentration of hydronium ions is [H₃O⁺] = 0.1 M, giving pH = -log(0.1) = 1.0. 2) Weak acids: Acetic acid (CH₃COOH, Ka ≈ 1.8 × 10⁻⁵) and carbonic acid (H₂CO₃, Ka1 ≈ 4.3 × 10⁻⁷) undergo only very slight, reversible ionisation (<1.3% for 0.1 M acetic acid). Most acid remains as neutral, non-conducting covalent molecules, yielding vastly lower [H₃O⁺], higher pH, and poor electrical conductivity."
));

// Case 48
cases.push(makeChemCase(
  chapter, 48, "Quantitative Carbonate Displacement: Measuring Molar Gas Volume", "Stoichiometry of Effervescence and Gas Syringe Volume Validation",
  "An analytical chemist reacts exactly 5.30 g of pure anhydrous sodium carbonate (Na₂CO₃, molar mass = 106 g/mol) with an excess of dilute hydrochloric acid in an airtight conical flask connected to a calibrated gas syringe at Standard Temperature and Pressure (STP, 0°C and 1 atm, where 1 mole of any ideal gas occupies 22.4 dm³).",
  "What volume of dry carbon dioxide gas will be collected in the gas syringe at STP?",
  "0.56 dm³ (560 cm³)",
  "2.24 dm³ (2240 cm³)",
  "1.12 dm³ (1120 cm³)",
  "4.48 dm³ (4480 cm³)",
  "C",
  "The stoichiometric calculation proceeds as follows: 1) Balanced chemical equation: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑. 2) Moles of Na₂CO₃ reacted: moles = mass / molar mass = 5.30 g / 106 g/mol = 0.050 mol. 3) Stoichiometric mole ratio: From the equation, 1 mole of Na₂CO₃ produces 1 mole of CO₂ gas. Therefore, moles of CO₂ produced = 0.050 mol. 4) Volume of CO₂ at STP: Volume = moles × molar volume at STP = 0.050 mol × 22.4 dm³/mol = 1.12 dm³ (or 1120 cm³). The gas syringe will record exactly 1.12 dm³ of carbon dioxide gas."
));

// Case 49
cases.push(makeChemCase(
  chapter, 49, "Thermal Dissociation of Hydrogen Chloride Gas", "High Bond Dissociation Enthalpy and Negligible Dissociation Below 1500°C",
  "In a high-temperature materials laboratory, pure dry hydrogen chloride gas is pumped through an alumina combustion tube and heated incrementally from 200°C to 1200°C. Gas chromatography at the outlet shows no detectable traces of free hydrogen (H₂) or chlorine (Cl₂) gas. Only when the temperature is elevated past 1500°C does a minuscule fraction (<0.3%) of the gas begin to dissociate into its constituent elements.",
  "What thermodynamic property of hydrogen chloride explains its extraordinary thermal stability against thermal dissociation?",
  "The H–Cl bond is an ionic bond that cannot be broken by heat.",
  "Hydrogen chloride molecules polymerise into heat-resistant graphite fibers.",
  "Chlorine atoms freeze into solid crystals at elevated temperatures.",
  "The H–Cl single bond has a remarkably high covalent bond dissociation enthalpy (~431 kJ/mol), making the molecule exceptionally thermally stable, so negligible thermal dissociation (2HCl ⇌ H₂ + Cl₂ - 185 kJ) occurs below 1500°C.",
  "D",
  "Hydrogen chloride is one of the most thermally stable diatomic hydrides known. The covalent bond between hydrogen and chlorine is short (bond length ~127 pm) with significant ionic character (approx. 17%) due to the electronegativity difference (3.0 for Cl vs 2.1 for H). The bond dissociation enthalpy is an impressive 431 kJ/mol. The thermal dissociation reaction: 2HCl(g) ⇌ H₂(g) + Cl₂(g) is strongly endothermic (ΔH = +185 kJ). Thermal energy available below 1000°C is completely insufficient to break the H–Cl bond. Only at temperatures exceeding 1500°C does thermal vibration overcome this bond energy, resulting in a negligible (<0.3%) reversible dissociation."
));

// Case 50
cases.push(makeChemCase(
  chapter, 50, "Environmental Safety: Acid Spill Neutralisation and Atmospheric Fogging", "Hygroscopic Condensation with Atmospheric Moisture and Neutralisation using Slaked Lime",
  "An industrial tank carrying concentrated hydrochloric acid develops a leak in a chemical depot on a humid monsoon day. Dense white suffocating 'fogs' immediately envelop the spill area. Emergency hazmat crews arrive wearing full chemical-resistant suits and immediately spread large quantities of powdered slaked lime [calcium hydroxide, Ca(OH)₂] or crushed limestone [calcium carbonate, CaCO₃] over the liquid spill, rather than washing it down with water.",
  "Explain why concentrated HCl produces dense fogs in humid air, and why slaked lime / limestone is used for emergency spill neutralisation.",
  "The fog is steam caused by water freezing into ice; limestone cools the acid into snow.",
  "HCl gas continuously escapes from concentrated acid and, being intensely hygroscopic, dissolves in water vapor in the humid atmosphere to form microscopic suspended droplets of liquid hydrochloric acid appearing as dense white fumes; slaked lime / limestone neutralises the corrosive acid into harmless calcium chloride, water, and carbon dioxide without explosive splattering (Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O).",
  "The fog is chlorine gas; slaked lime oxidises chlorine into liquid nitrogen.",
  "Concentrated HCl burns air into carbon smoke; limestone dissolves the smoke into oil.",
  "B",
  "1) Atmospheric fogging: Concentrated hydrochloric acid is an aqueous solution saturated with volatile HCl gas. When exposed to ambient air, HCl gas readily escapes from the liquid surface. Because HCl has a phenomenal affinity for water (hygroscopic nature), escaping gas molecules dissolve in the water vapor present in humid air, condensing into microscopic aerosol droplets of hydrochloric acid. These suspended acid mist droplets scatter light, appearing as dense white fumes or acid fog. 2) Hazmat neutralisation: Adding water to a large concentrated acid spill causes localized boiling, spattering, and accelerates acid fogs. Hazmat crews apply basic powders such as slaked lime [Ca(OH)₂] or crushed limestone [CaCO₃]. These bases safely neutralise the acid: Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O. The products are non-volatile, non-toxic calcium chloride and neutral water, completely eliminating the hazardous acid."
));

console.log(`[Ch8 Hydrogen Chloride] Generated ${cases.length} cases.`);

const outDir = path.join(__dirname, 'questionBank');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outFile = path.join(outDir, 'chemistry_case_hydrogen_chloride.json');
fs.writeFileSync(outFile, JSON.stringify(cases, null, 2), 'utf8');
console.log(`Saved ${cases.length} cases to ${outFile}`);
