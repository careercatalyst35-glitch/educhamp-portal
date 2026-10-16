// chem_ar_data_3.js - Assertion-Reasoning questions for Chapters 7 and 8
// ICSE Class 10 Chemistry: Metallurgy, Hydrogen Chloride & Hydrochloric Acid

module.exports = {
  metallurgy: [
    {
      title: 'Minerals vs Ores',
      a: 'All ores are minerals, but all minerals are not ores.',
      r: 'An ore is a mineral from which a metal can be extracted economically, profitably, and conveniently.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Reason correctly explains Assertion. Bauxite and clay both contain aluminium, but aluminium is extracted only from bauxite commercially.'
    },
    {
      title: 'Bauxite as chief ore of aluminium',
      a: 'Bauxite (Al₂O₃·2H₂O) is the principal ore used for the industrial extraction of aluminium.',
      r: 'Bauxite contains a high percentage of aluminium and allows economically viable extraction unlike other aluminosilicates like clay.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Reason is the correct explanation. Clay contains aluminium but extraction is economically unfeasible due to complex aluminosilicate bonds.'
    },
    {
      title: 'Gravity separation for sulphide ores',
      a: 'Sulphide ores like zinc blende are concentrated primarily by the gravity separation method.',
      r: 'Sulphide ores are lighter than gangue and are preferentially wetted by pine oil in the froth floatation process.',
      ans: 'D',
      exp: 'Assertion is false, but Reason is true. Sulphide ores are concentrated by froth floatation, not gravity separation, because pine oil preferentially wets sulphide particles.'
    },
    {
      title: 'Froth floatation principle',
      a: 'Froth floatation is based on the difference in wetting characteristics of ore and gangue particles.',
      r: 'Pine oil preferentially wets sulphide ore particles making them hydrophobic, while water wets siliceous gangue particles.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Reason correctly explains the principle of froth floatation used for sulphide ores like ZnS, CuFeS₂, and PbS.'
    },
    {
      title: 'Magnetic separation of haematite',
      a: 'Magnetic separation can be used to concentrate magnetic iron ores containing non-magnetic siliceous impurities.',
      r: 'Haematite or magnetite is attracted by the magnetic roller while non-magnetic siliceous gangue falls vertically away.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The difference in magnetic susceptibility separates magnetic ores from non-magnetic gangue particles.'
    },
    {
      title: 'Roasting of zinc blende',
      a: 'Zinc blende (ZnS) is roasted in excess air prior to reduction.',
      r: 'Roasting converts zinc sulphide into zinc oxide, which can be readily reduced to metal by carbon.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2ZnS + 3O₂ → 2ZnO + 2SO₂. Sulphides are harder to reduce directly with carbon, so converting to oxide is essential.'
    },
    {
      title: 'Calcination of calamine',
      a: 'Calamine (ZnCO₃) is subjected to calcination rather than roasting.',
      r: 'Calcination decomposes carbonate ores into metal oxides with the expulsion of carbon dioxide in the absence or limited supply of air.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. ZnCO₃ → ZnO + CO₂↑. Carbonate ores require heating in absence of air (calcination) to drive off CO₂.'
    },
    {
      title: 'Calcination temperature and pore formation',
      a: 'Calcination expels moisture and volatile organic matter, making the ore porous and easier to reduce.',
      r: 'Calcination is carried out at temperatures well above the melting point of the metal ore to fuse all particles together.',
      ans: 'C',
      exp: 'Assertion is true, but Reason is false. Calcination and roasting are always carried out below the melting point of the ore so that it remains porous and does not melt or fuse.'
    },
    {
      title: 'Reduction of aluminium oxide with carbon',
      a: 'Aluminium metal cannot be extracted from alumina by reduction with carbon or coke in a blast furnace.',
      r: 'Aluminium has a very high chemical affinity for oxygen and forms aluminium carbide at extremely high temperatures instead of metal.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Al sits high in the reactivity series; its strong affinity for oxygen makes carbon reduction impossible at normal reduction temperatures.'
    },
    {
      title: 'Electrolytic reduction for highly electropositive metals',
      a: 'Reactive metals like K, Na, Ca, Mg, and Al are extracted exclusively by electrolytic reduction of their fused compounds.',
      r: 'These electropositive metals have a higher affinity for oxygen than carbon does, so carbon cannot reduce their oxides.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Reason correctly explains why electrolytic reduction is mandated for Group 1, Group 2, and Group 13 reactive metals.'
    },
    {
      title: 'Aqueous solution in aluminium extraction',
      a: 'Aluminium metal is commercially extracted by the electrolysis of an aqueous solution of aluminium sulphate.',
      r: 'In an aqueous solution of aluminium salts, H⁺ ions from water are discharged at the cathode in preference to Al³⁺ ions because hydrogen has a higher discharge potential.',
      ans: 'D',
      exp: 'Assertion is false, but Reason is true. Aluminium cannot be extracted from aqueous solution because H⁺ ions are discharged preferentially at cathode, evolving H₂ gas instead of Al.'
    },
    {
      title: 'Baeyer process digestion with NaOH',
      a: 'In Baeyer\'s process, finely powdered bauxite is digested with concentrated NaOH solution at 150°C–200°C under pressure.',
      r: 'Aluminium oxide is an amphoteric oxide that dissolves in hot concentrated NaOH to form soluble sodium aluminate, leaving insoluble basic impurities behind.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Al₂O₃·2H₂O + 2NaOH → 2NaAlO₂ + 3H₂O. The amphoteric property allows selective dissolution of aluminium.'
    },
    {
      title: 'Red mud in Baeyer process',
      a: 'Red mud residue formed during Baeyer\'s process consists mainly of iron(III) oxide and silica.',
      r: 'Iron(III) oxide is an amphoteric oxide that dissolves readily in boiling sodium hydroxide solution.',
      ans: 'C',
      exp: 'Assertion is true, but Reason is false. Fe₂O₃ is a basic oxide and remains completely insoluble in NaOH, which is why it separates out as insoluble red mud.'
    },
    {
      title: 'Dilution and seeding of sodium aluminate',
      a: 'The clear sodium aluminate filtrate is diluted with water and seeded with freshly precipitated Al(OH)₃ crystals.',
      r: 'Seeding lowers the activation energy and provides nucleation sites to hydrolyse sodium aluminate and precipitate aluminium hydroxide.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. NaAlO₂ + 2H₂O → NaOH + Al(OH)₃↓. Fresh Al(OH)₃ seeds induce rapid precipitation of gelatinous aluminium hydroxide.'
    },
    {
      title: 'Calcination of aluminium hydroxide',
      a: 'Precipitated aluminium hydroxide is heated strongly at about 1000°C in a rotary kiln to obtain pure anhydrous alumina.',
      r: 'Strong heating decomposes aluminium hydroxide into pure Al₂O₃ while driving off chemically combined water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2Al(OH)₃ → Al₂O₃ + 3H₂O↑. The process yields pure, dry anhydrous alumina required for the Hall-Héroult cell.'
    },
    {
      title: 'Addition of cryolite in Hall-Heroult cell',
      a: 'Cryolite (Na₃AlF₆) is added to molten alumina in the Hall-Héroult electrolytic process.',
      r: 'Cryolite lowers the melting point of pure alumina from ~2050°C to ~950°C and acts as a solvent that enhances electrical conductivity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Pure alumina melts at 2050°C and conducts electricity poorly; cryolite drastically reduces operating temperature and increases conductivity.'
    },
    {
      title: 'Role of fluorspar in Hall-Heroult process',
      a: 'Fluorspar (CaF₂) is added along with cryolite to the electrolytic bath in Hall-Héroult process.',
      r: 'Fluorspar further decreases the melting point of the mixture and increases its mobility and fluidity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Addition of fluorspar (CaF₂) lowers melting point, increases fluidity, and aids electrical conductivity of the molten electrolyte.'
    },
    {
      title: 'Powdered coke layer on electrolyte',
      a: 'A layer of powdered coke is sprinkled over the surface of the molten electrolytic bath in the Hall-Héroult cell.',
      r: 'Powdered coke acts as a thermal insulator to prevent heat loss by radiation and prevents the carbon anode from burning in atmospheric oxygen.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The coke layer keeps the temperature uniform by minimizing radiation losses and shields the carbon rods from open air combustion.'
    },
    {
      title: 'Periodic replacement of carbon anodes',
      a: 'In the Hall-Héroult process, the graphite anodes must be replaced periodically.',
      r: 'Oxygen gas evolved at the anode reacts with the hot carbon rods at ~950°C to form carbon monoxide and carbon dioxide, consuming the anodes.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2O²⁻ - 4e⁻ → O₂; C + O₂ → CO₂ and 2C + O₂ → 2CO. Anodes oxidize and wear away continuously.'
    },
    {
      title: 'Cathode reaction in Hall-Heroult cell',
      a: 'In the Hall-Héroult cell, molten aluminium metal is discharged and collects at the cathode.',
      r: 'Al³⁺ ions migrate to the carbon-lined cathode where they gain three electrons each and are reduced to molten aluminium metal.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Al³⁺ + 3e⁻ → Al(l). Molten aluminium is heavier than the fused electrolyte and sinks to the bottom.'
    },
    {
      title: 'Collection of molten aluminium',
      a: 'Molten aluminium collects at the bottom of the Hall-Héroult cell rather than floating to the surface.',
      r: 'Molten aluminium has a higher density than the molten mixture of cryolite, fluorspar, and alumina.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The density of molten aluminium (~2.3 g/cm³) is greater than the molten electrolyte (~2.1 g/cm³), preventing oxidation by surface air.'
    },
    {
      title: 'Reduction of zinc oxide by coke',
      a: 'Zinc oxide is reduced to zinc metal by heating with crushed coke in vertical retorts at around 1400°C.',
      r: 'Carbon has a higher reducing power than zinc at elevated temperatures, reducing ZnO to zinc vapor and carbon monoxide.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. ZnO + C → Zn(g) + CO. The reaction occurs at ~1400°C and zinc boils at 907°C, distilling over as vapor.'
    },
    {
      title: 'Rapid condensation of zinc vapor',
      a: 'Zinc vapor emerging from the reduction retort must be rapidly condensed without coming into contact with air.',
      r: 'If zinc vapor encounters atmospheric oxygen or carbon dioxide at high temperatures, it is instantly re-oxidised back to zinc oxide.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Zn + CO₂ ⇌ ZnO + CO is reversible at high temperatures; rapid chilling prevents zinc from turning back into blue powder or ZnO.'
    },
    {
      title: 'Composition of spelter',
      a: 'Spelter obtained directly from zinc condensation is an impure form of zinc.',
      r: 'Spelter contains small percentages of impurities such as lead, cadmium, and iron.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true, but Reason is a factual description of the impurities rather than an explanation of the metallurgical origin of the term.'
    },
    {
      title: 'Thermal extraction of mercury from cinnabar',
      a: 'Mercury is extracted from cinnabar (HgS) simply by roasting in air without using carbon as a reducing agent.',
      r: 'Mercury is very low in the electrochemical series and its oxide (HgO) is thermally unstable, decomposing into mercury metal and oxygen upon heating.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2HgS + 3O₂ → 2HgO + 2SO₂; 2HgO → 2Hg + O₂. Due to weak metal-oxygen affinity, heat alone reduces it.'
    },
    {
      title: 'Addition of limestone in blast furnace',
      a: 'Limestone (CaCO₃) is added as a flux along with haematite and coke in the blast furnace.',
      r: 'Limestone decomposes to form basic calcium oxide, which reacts with acidic silica gangue to form easily fusible calcium silicate slag.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (slag). Flux removes non-fusible gangue as fusible slag.'
    },
    {
      title: 'CO as main reducing agent in blast furnace',
      a: 'In the upper reduction zone of a blast furnace, carbon monoxide is the primary reducing agent for haematite.',
      r: 'Carbon monoxide is a gas that can penetrate porous lumps of haematite ore much more effectively than solid coke at lower temperatures.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Fe₂O₃ + 3CO → 2Fe + 3CO₂ at 400°C–700°C. Gaseous CO provides intimate surface contact with ore.'
    },
    {
      title: 'Slag floating over molten iron',
      a: 'In the blast furnace hearth, molten calcium silicate slag forms a distinct layer floating above molten iron.',
      r: 'Molten slag is less dense than molten iron and protects the reduced liquid iron from being re-oxidised by the incoming air blast.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Reason correctly explains the physical position and protective chemical function of the slag layer.'
    },
    {
      title: 'Wrought iron purity vs pig iron',
      a: 'Wrought iron is the purest commercial form of iron, containing less than 0.25% carbon.',
      r: 'Pig iron contains the lowest carbon percentage among commercial forms of iron and is exceptionally malleable.',
      ans: 'C',
      exp: 'Assertion is true, but Reason is false. Pig iron has the highest carbon content (3%–4%) making it hard and brittle, whereas wrought iron has the lowest (<0.25%).'
    },
    {
      title: 'Tensile strength and hardness of alloys',
      a: 'An alloy usually has higher tensile strength and greater hardness than its primary constituent metal.',
      r: 'An alloy is a homogeneous mixture of two or more metals, or a metal with a non-metal, prepared in molten state.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true, but Reason is merely the definition of an alloy. The real cause for increased hardness is lattice distortion caused by different atomic radii preventing slip planes.'
    },
    {
      title: 'Duralumin in aircraft construction',
      a: 'Duralumin is widely used in the construction of aircraft bodies and frames.',
      r: 'Duralumin (an alloy of Al, Cu, Mg, and Mn) combines low density with high tensile strength and superior corrosion resistance.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Pure aluminium is too soft; alloying it with Cu, Mg, Mn provides the structural rigidity and lightness required for aerospace frames.'
    },
    {
      title: 'Magnalium for precision balances',
      a: 'Magnalium is used for manufacturing scientific instruments and precision beam balances.',
      r: 'Magnalium (95% Al, 5% Mg) is light, hard, corrosion-resistant, and takes a high mirror-like polish.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Its lightweight nature combined with dimensional stability and resistance to corrosion makes it ideal for analytical balances.'
    },
    {
      title: 'Brass vs Bronze composition',
      a: 'Brass is an alloy of copper and zinc, whereas bronze is an alloy of copper and tin.',
      r: 'Zinc has a higher atomic mass than tin, imparting significantly higher density to brass.',
      ans: 'C',
      exp: 'Assertion is true, but Reason is false. Zinc has an atomic mass of 65.4 u, while tin (Sn) has an atomic mass of 118.7 u, so tin is heavier than zinc.'
    },
    {
      title: 'Low melting point of solder',
      a: 'Solder (an alloy of lead and tin) is widely used for fusing and joining electrical wires.',
      r: 'Solder has a lower melting point than either of its constituent metals (lead and tin), enabling it to melt easily without damaging copper circuits.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The eutectic mixture of 50% Pb and 50% Sn melts at ~183°C, which is significantly lower than pure lead (327°C) or tin (232°C).'
    },
    {
      title: 'Stainless steel corrosion resistance',
      a: 'Stainless steel does not rust when exposed to moisture and atmospheric oxygen.',
      r: 'Chromium present in stainless steel forms an invisible, self-healing, adherent passive layer of chromium(III) oxide that prevents oxidation of iron.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The presence of ~18% chromium forms a microscopic passivating oxide barrier that stops oxygen and water from attacking iron.'
    },
    {
      title: 'Amalgam formation with iron',
      a: 'Liquid mercury is transported and stored in iron flasks.',
      r: 'Iron does not form an amalgam with mercury, preventing corrosion or dissolution of the container.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Most metals form amalgams with mercury, but iron, platinum, and cobalt do not dissolve in mercury, making iron bottles ideal storage.'
    },
    {
      title: 'Cast iron brittleness',
      a: 'Cast iron cannot be welded or forged into shapes by hammering.',
      r: 'Cast iron contains around 3% to 4% carbon and impurities, making it hard and brittle.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The high percentage of carbon present in cast iron as graphite or cementite causes it to shatter under tension or impact rather than deform.'
    },
    {
      title: 'Electrolytic refining of copper',
      a: 'In the electrolytic refining of blister copper, the anode is made of impure copper and the cathode of pure copper.',
      r: 'Copper atoms at the anode lose electrons to form Cu²⁺ ions in solution, which migrate to the cathode and deposit as pure copper metal.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Impure copper anode dissolves (Cu → Cu²⁺ + 2e⁻) and pure copper deposits on cathode (Cu²⁺ + 2e⁻ → Cu).'
    },
    {
      title: 'Anode mud in copper refining',
      a: 'Anode mud collected at the bottom of the copper refining cell contains precious metals like silver, gold, and platinum.',
      r: 'Silver and gold are less electropositive than copper and do not ionise at the operating cell voltage, settling down as insoluble sludge.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Metals below copper in the electrochemical series do not lose electrons at the anode potential and precipitate as valuable anode slime.'
    },
    {
      title: 'Hoopes process three liquid layers',
      a: 'In the Hoopes electrolytic process for refining aluminium, three distinct liquid layers remain separate without mixing.',
      r: 'The three layers have different densities: bottom layer of heavy molten impure Al-Cu alloy, middle layer of molten fluorides, and top layer of pure molten aluminium having the lowest density.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Due to density gradation, pure aluminium stays at the top layer and can be drawn off continuously.'
    }
  ],

  hydrogen_chloride: [
    {
      title: 'Lab prep temperature limit below 200°C',
      a: 'In the laboratory preparation of hydrogen chloride gas from sodium chloride and sulphuric acid, the temperature is strictly maintained below 200°C.',
      r: 'Above 200°C, a hard crust of sodium sulphate (Na₂SO₄) is formed that adheres strongly to the glass vessel and is very difficult to remove.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Reason is the correct explanation. Below 200°C, NaHSO₄ is formed which is soft and easily washed out.'
    },
    {
      title: 'Apparatus safety below 200°C',
      a: 'Maintaining the reaction temperature below 200°C prevents cracking of the glass reaction flask.',
      r: 'Sodium bisulphate (NaHSO₄) formed below 200°C dissolves readily in water and can be rinsed out without scraping.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true, but Reason describes the solubility of NaHSO₄ rather than explaining why the glass flask cracks at higher temperatures (thermal shock/uneven heating).'
    },
    {
      title: 'Choice of concentrated sulphuric acid',
      a: 'Concentrated sulphuric acid is used as the acid in the laboratory preparation of hydrogen chloride gas.',
      r: 'Concentrated sulphuric acid is a non-volatile acid with a high boiling point that readily displaces volatile HCl from sodium chloride.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. NaCl + H₂SO₄ → NaHSO₄ + HCl↑. Non-volatile H₂SO₄ displaces the more volatile HCl gas.'
    },
    {
      title: 'Why conc. nitric acid cannot be used',
      a: 'Concentrated nitric acid cannot be used in place of concentrated sulphuric acid to prepare hydrogen chloride gas.',
      r: 'Concentrated nitric acid is volatile and its vapors contaminate the HCl gas, and it also oxidises HCl to chlorine gas.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. HNO₃ is volatile and a powerful oxidizer: 2HNO₃ + 6HCl → 2NO + 4H₂O + 3Cl₂. Hence, it cannot replace H₂SO₄.'
    },
    {
      title: 'Drying agent for HCl gas',
      a: 'Concentrated sulphuric acid is used as the drying agent for moist hydrogen chloride gas.',
      r: 'Concentrated sulphuric acid is a hygroscopic dehydrating agent that does not react chemically with hydrogen chloride gas.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Moist HCl is bubbled through conc. H₂SO₄, which absorbs moisture without reacting with HCl.'
    },
    {
      title: 'Quicklime cannot dry HCl gas',
      a: 'Quicklime (CaO) cannot be used to dry moist hydrogen chloride gas.',
      r: 'Quicklime is a basic oxide that chemically reacts with acidic hydrogen chloride gas to form calcium chloride and water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. CaO + 2HCl → CaCl₂ + H₂O. Basic drying agents react with acidic gases.'
    },
    {
      title: 'Phosphorus pentoxide cannot dry HCl gas',
      a: 'Phosphorus pentoxide (P₂O₅) cannot be used to dry moist hydrogen chloride gas.',
      r: 'Phosphorus pentoxide reacts chemically with hydrogen chloride gas to form phosphoryl chloride (POCl₃).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. P₂O₅ + 6HCl → 2POCl₃ + 3H₂O (or forms chlorophosphoric compounds). Hence, P₂O₅ cannot be used.'
    },
    {
      title: 'Collection of HCl gas by upward displacement of air',
      a: 'Hydrogen chloride gas is collected by the upward displacement of air (downward delivery).',
      r: 'Hydrogen chloride gas is about 1.28 times denser than air and is extremely soluble in water, ruling out collection over water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Its higher density (vapor density = 18.25 vs air = 14.4) allows downward delivery, and high solubility prevents pneumatic trough collection.'
    },
    {
      title: 'Collection over water impossibility',
      a: 'Hydrogen chloride gas can be conveniently collected over water in a pneumatic trough.',
      r: 'Hydrogen chloride gas is extremely soluble in water, dissolving at a ratio of about 450 volumes of gas per 1 volume of water at room temperature.',
      ans: 'D',
      exp: 'Assertion is false, but Reason is true. HCl dissolves violently and completely in water, so attempting collection over water causes instant dissolution and water suck-back.'
    },
    {
      title: 'Fountain experiment demonstration',
      a: 'The fountain experiment demonstrates both the extraordinary solubility of HCl gas in water and the acidic nature of the resulting solution.',
      r: 'Rapid dissolution of HCl gas in the few drops of water creates a partial vacuum inside the flask, driving blue litmus solution upward as a red fountain.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The vacuum pulls the blue litmus solution vigorously inside, which turns red due to the acidic nature of hydrochloric acid.'
    },
    {
      title: 'Ammonia test for HCl gas',
      a: 'A glass rod dipped in ammonium hydroxide solution produces dense white fumes when brought near the mouth of a jar containing HCl gas.',
      r: 'Gaseous HCl reacts with ammonia vapor evolved from ammonium hydroxide to form fine suspended particles of solid ammonium chloride.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. NH₃(g) + HCl(g) → NH₄Cl(s). This is a classic test where two gases combine to form a solid.'
    },
    {
      title: 'Action of dry HCl gas on dry litmus',
      a: 'Dry hydrogen chloride gas turns dry blue litmus paper red immediately.',
      r: 'Dry hydrogen chloride molecules are purely covalent and do not dissociate into hydrogen (H⁺) ions in the absence of moisture.',
      ans: 'D',
      exp: 'Assertion is false, but Reason is true. Dry HCl gas has no effect on dry blue litmus paper because acidic behavior requires hydrated protons (H₃O⁺).'
    },
    {
      title: 'HCl in non-polar toluene solvent',
      a: 'A solution of hydrogen chloride gas in toluene does not conduct electricity and does not turn blue litmus paper red.',
      r: 'Toluene is a non-polar solvent that does not ionise covalent HCl molecules into hydronium (H₃O⁺) and chloride ions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Ionisation requires a polar solvent with a high dielectric constant like water. In toluene, HCl remains un-ionised.'
    },
    {
      title: 'Ionisation of HCl in water',
      a: 'An aqueous solution of hydrogen chloride conducts electricity and acts as a strong monobasic acid.',
      r: 'Water molecules have a high dipole moment that pulls apart the polar covalent H–Cl bond, forming hydronium ions (H₃O⁺) and chloride ions (Cl⁻).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. HCl + H₂O → H₃O⁺ + Cl⁻. Complete ionisation produces free mobile ions that conduct electric current.'
    },
    {
      title: 'Inverted funnel arrangement purpose',
      a: 'An inverted funnel arrangement is used to dissolve hydrogen chloride gas in water to prepare hydrochloric acid.',
      r: 'The inverted funnel arrangement prevents back-suction of water into the generating flask and provides a large surface area for rapid absorption.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Direct immersion of a narrow tube causes water to suck back into hot conc. H₂SO₄, causing glass breakage and explosions.'
    },
    {
      title: 'Cause of back-suction',
      a: 'Dissolving HCl gas directly through a narrow delivery tube into water causes water to suck back violently into the reaction flask.',
      r: 'The rate of absorption of highly soluble HCl gas in water is much higher than the rate of generation of the gas, creating a sudden vacuum inside the tube.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The instantaneous dissolution creates a pressure drop, allowing atmospheric pressure to push water into the hot generator.'
    },
    {
      title: 'Mechanism of inverted funnel',
      a: 'During absorption through an inverted funnel, the water level inside the funnel rises and falls rhythmically.',
      r: 'When water rises into the wide rim of the funnel, an air gap is created with the water surface, causing the water column to drop down by gravity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The wide rim allows the water level to rise slightly, breaking contact with the trough and equalizing pressure.'
    },
    {
      title: 'Reaction of HCl with iron metal',
      a: 'When iron metal reacts with dilute hydrochloric acid, iron(II) chloride (FeCl₂) is formed rather than iron(III) chloride (FeCl₃).',
      r: 'Hydrogen gas liberated during the displacement reaction acts as a reducing agent and prevents the oxidation of iron(II) to iron(III).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Fe + 2HCl → FeCl₂ + H₂↑. Nascent/molecular hydrogen maintains the iron in the +2 ferrous oxidation state.'
    },
    {
      title: 'Preparation of iron(III) chloride',
      a: 'Anhydrous iron(III) chloride is prepared by passing dry chlorine gas over heated iron wire, not by reacting iron with hydrochloric acid.',
      r: 'Chlorine is a strong oxidizing agent that oxidises iron directly to the iron(III) state, whereas HCl yields only iron(II).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2Fe + 3Cl₂ → 2FeCl₃. Dry chlorine oxidises iron fully to FeCl₃, whereas HCl displacement stops at FeCl₂.'
    },
    {
      title: 'Deliquescence of iron(III) chloride',
      a: 'Anhydrous iron(III) chloride crystals must be stored in tightly sealed bottles.',
      r: 'Anhydrous iron(III) chloride is highly deliquescent and absorbs atmospheric moisture to turn into a concentrated brown liquid.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. FeCl₃ readily absorbs moisture from air and dissolves in its own water of absorption.'
    },
    {
      title: 'Action of dilute HCl on carbonates',
      a: 'Addition of dilute hydrochloric acid to sodium carbonate produces brisk effervescence of a colorless, odorless gas.',
      r: 'Dilute hydrochloric acid decomposes carbonates into soluble metal chloride, water, and carbon dioxide gas, which turns lime water milky.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑. The brisk effervescence is due to rapid liberation of CO₂.'
    },
    {
      title: 'Action of dilute HCl on sulphites',
      a: 'When dilute hydrochloric acid is added to sodium sulphite, a gas with the pungent, choking smell of burning sulphur is evolved.',
      r: 'Dilute HCl decomposes sulphites to liberate sulphur dioxide (SO₂) gas, which turns acidified potassium dichromate paper from orange to green.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂↑. SO₂ gas reduces dichromate ions (Cr⁶⁺) to green chromium ions (Cr³⁺).'
    },
    {
      title: 'Action of dilute HCl on sulphides',
      a: 'Treating iron(II) sulphide with dilute hydrochloric acid produces a gas with a foul, rotten egg smell.',
      r: 'Dilute HCl reacts with metal sulphides to liberate hydrogen sulphide (H₂S) gas, which turns moist lead acetate paper silvery black.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. FeS + 2HCl → FeCl₂ + H₂S↑. H₂S reacts with lead acetate to form insoluble black lead sulphide (PbS).'
    },
    {
      title: 'Reaction of dilute HCl with copper metal',
      a: 'Copper metal dissolves readily in dilute hydrochloric acid with the vigorous evolution of hydrogen gas.',
      r: 'Copper lies below hydrogen in the electrochemical series and cannot displace hydrogen ions from dilute non-oxidising acids.',
      ans: 'D',
      exp: 'Assertion is false, but Reason is true. Copper has a positive reduction potential (+0.34 V) and cannot reduce H⁺ to H₂ gas; dilute HCl does not attack copper.'
    },
    {
      title: 'Action of dilute HCl on silver nitrate',
      a: 'Addition of dilute hydrochloric acid to silver nitrate solution produces a curdy white precipitate.',
      r: 'Chloride ions react with silver ions to form insoluble silver chloride (AgCl), which is insoluble in dilute nitric acid.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. AgNO₃ + HCl → AgCl↓ + HNO₃. AgCl precipitate is insoluble in mineral acids like HNO₃.'
    },
    {
      title: 'Solubility of AgCl in ammonium hydroxide',
      a: 'A white precipitate of silver chloride dissolves completely upon adding excess ammonium hydroxide solution.',
      r: 'Silver chloride reacts with ammonium hydroxide to form a soluble coordination compound, diamminesilver(I) chloride, [Ag(NH₃)₂]Cl.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. AgCl + 2NH₄OH → [Ag(NH₃)₂]Cl + 2H₂O. The formation of the diamminesilver complex cation dissolves the precipitate.'
    },
    {
      title: 'Photochemical decomposition of silver chloride',
      a: 'A white precipitate of silver chloride turns violet and eventually black when left exposed to sunlight.',
      r: 'Silver chloride undergoes photochemical decomposition in sunlight, liberating chlorine gas and leaving finely divided metallic silver.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2AgCl xrightarrow{hν} 2Ag + Cl₂. Finely divided metallic silver appears dark grey/black.'
    },
    {
      title: 'Action of dilute HCl on lead nitrate',
      a: 'Addition of dilute hydrochloric acid to lead nitrate solution produces a white precipitate that dissolves upon heating and recrystallizes on cooling.',
      r: 'Lead(II) chloride (PbCl₂) is sparingly soluble in cold water but dissolves readily in boiling water to form a clear solution.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Pb(NO₃)₂ + 2HCl → PbCl₂↓ + 2HNO₃. PbCl₂ precipitates in cold water, dissolves in hot water, and recrystallizes as white needles on cooling.'
    },
    {
      title: 'Distinction between AgCl and PbCl2',
      a: 'A white precipitate of PbCl₂ can be distinguished from AgCl simply by heating the mixture with water.',
      r: 'PbCl₂ dissolves completely in boiling water, whereas AgCl remains totally insoluble in boiling water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Hot water solubility is a definitive test to distinguish PbCl₂ from AgCl without adding chemical reagents.'
    },
    {
      title: 'Oxidation of conc. HCl by manganese dioxide',
      a: 'Heating manganese dioxide (MnO₂) with concentrated hydrochloric acid liberates greenish-yellow chlorine gas.',
      r: 'Manganese dioxide acts as an oxidizing agent, oxidising chloride ions to elemental chlorine gas while being reduced to manganese(II) chloride.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂↑. This is the classical laboratory method for preparing chlorine.'
    },
    {
      title: 'Dilute HCl with manganese dioxide',
      a: 'Greenish-yellow chlorine gas is rapidly evolved when dilute hydrochloric acid is mixed with manganese dioxide at room temperature.',
      r: 'Dilute hydrochloric acid is not concentrated enough and lacks the required reducing potential to react with MnO₂ without heating.',
      ans: 'D',
      exp: 'Assertion is false, but Reason is true. MnO₂ requires concentrated HCl and heat to liberate chlorine gas; dilute HCl produces no reaction.'
    },
    {
      title: 'Oxidation of conc. HCl by potassium permanganate',
      a: 'Potassium permanganate (KMnO₄) oxidises concentrated hydrochloric acid to chlorine gas at room temperature without heating.',
      r: 'Potassium permanganate is a very powerful oxidizing agent capable of oxidising concentrated HCl to Cl₂ at ambient temperature.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂↑. No heat is required due to high redox potential.'
    },
    {
      title: 'Reaction of red lead with conc. HCl',
      a: 'Heating red lead (Pb₃O₄) with concentrated hydrochloric acid liberates chlorine gas and leaves a white crystalline precipitate on cooling.',
      r: 'Red lead is a mixed oxide (2PbO·PbO₂); the PbO₂ portion oxidises HCl to Cl₂ while PbO forms PbCl₂, which recrystallizes upon cooling.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Pb₃O₄ + 8HCl → 3PbCl₂ + 4H₂O + Cl₂↑. PbCl₂ dissolves in hot acid and precipitates on cooling.'
    },
    {
      title: 'Aqua regia composition and mechanism',
      a: 'Aqua regia dissolves noble metals like gold and platinum.',
      r: 'Aqua regia contains free hydrochloric acid that reacts directly with unreactive gold atoms to displace hydrogen gas.',
      ans: 'C',
      exp: 'Assertion is true, but Reason is false. Aqua regia (3 parts conc. HCl + 1 part conc. HNO₃) produces nascent chlorine: 3HCl + HNO₃ → NOCl + 2H₂O + 2[Cl]. Nascent chlorine attacks gold to form soluble HAuCl₄.'
    },
    {
      title: 'Constant boiling azeotrope of HCl',
      a: 'Dilute hydrochloric acid cannot be concentrated beyond 22.2% HCl by ordinary fractional distillation.',
      r: 'At 22.2% HCl by mass and 110°C, hydrochloric acid forms a constant boiling azeotropic mixture where the liquid and vapor have identical composition.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. A constant boiling mixture distills without any change in composition at 110°C, preventing further concentration.'
    },
    {
      title: 'Distillation of concentrated HCl (>22.2%)',
      a: 'When concentrated hydrochloric acid containing 36% HCl is boiled, hydrogen chloride gas escapes first until 22.2% concentration is reached.',
      r: 'The partial vapor pressure of HCl above a concentrated solution is much higher than that of water, causing volatile HCl gas to distill off preferentially.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Boiling drives off excess gaseous HCl until the azeotrope (22.2% at 110°C) is formed, after which it boils unchanged.'
    },
    {
      title: 'Lead dioxide vs lead monoxide with conc. HCl',
      a: 'Both lead(II) oxide (PbO) and lead(IV) oxide (PbO₂) react with concentrated hydrochloric acid to form lead(II) chloride.',
      r: 'PbO₂ oxidises hydrochloric acid to chlorine gas, whereas PbO undergoes simple acid-base neutralization forming only salt and water.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true, but Reason explains the difference in redox behavior rather than why both yield lead(II) chloride.'
    },
    {
      title: 'Neutralization of bases by hydrochloric acid',
      a: 'Hydrochloric acid completely neutralizes sodium hydroxide solution with the liberation of heat.',
      r: 'Hydrochloric acid is a strong monobasic acid that decomposes metal carbonates to evolve carbon dioxide gas.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true, but Reason discusses the reaction with carbonates, which does not explain neutralization with sodium hydroxide.'
    },
    {
      title: 'Thermal stability of HCl gas',
      a: 'Hydrogen chloride gas is exceptionally stable towards heat and dissociates into hydrogen and chlorine only above 1500°C.',
      r: 'The H–Cl single covalent bond has a high bond dissociation energy that requires extreme thermal energy to break.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The H–Cl bond energy is ~431 kJ/mol; thermal dissociation is negligible below 1500°C.'
    },
    {
      title: 'Distinction between dilute HCl and dilute H2SO4',
      a: 'Barium chloride solution (BaCl₂) can be used to chemically distinguish dilute sulphuric acid from dilute hydrochloric acid.',
      r: 'Dilute sulphuric acid forms an insoluble white precipitate of barium sulphate (BaSO₄) with BaCl₂, whereas dilute HCl produces no observable change.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. H₂SO₄ + BaCl₂ → BaSO₄↓(white) + 2HCl. BaSO₄ is insoluble in dilute mineral acids, providing a clean distinction.'
    }
  ]
};
