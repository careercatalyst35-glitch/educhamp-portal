// build_chem_case_ch1_periodic_table.js
// 50 Case-Based MCQs for ICSE Class 10 Chemistry: Chapter 1 - Periodic Table, Periodic Properties & Variations

const fs = require('fs');
const path = require('path');
const { makeChemCase } = require('./chem_case_helper');

const chapter = "Periodic Table";
const cases = [];

cases.push(makeChemCase(
  chapter, 1, "Moseley's X-ray Tube and Modern Periodic Law", "Modern Periodic Law and Atomic Number",
  "In 1913, Henry Moseley bombarded various target metals with high-speed cathode rays and measured the frequencies (ν) of the emitted characteristic X-rays. He discovered that a straight-line plot was obtained when square root of frequency (√ν) was plotted against the atomic number (Z), whereas plotting against atomic mass produced irregular fluctuations. This resolved historical anomalies in Mendeleev's periodic table such as Tellurium (mass 127.6) preceding Iodine (mass 126.9).",
  "Why is atomic number rather than atomic weight the fundamental property that dictates an element's position and chemical properties in the periodic table?",
  "Atomic weight varies because isotopes have different proton counts.",
  "Atomic number equals the nuclear charge (number of protons) which dictates the ground-state electronic configuration and valence electrons; isotopes differ only in neutrons which do not affect valence chemistry.",
  "X-ray frequencies depend solely on the physical density of the metal crystal lattice.",
  "Moseley proved that electrons have no mass and therefore atomic weight is an imaginary concept.",
  "B",
  "Henry Moseley demonstrated that the characteristic X-ray frequency satisfies √ν = a(Z - b). The atomic number Z equals the positive nuclear charge (number of protons), which equals the number of planetary electrons in a neutral atom. Since chemical behavior and valency depend on electronic configuration—specifically valence shell electrons—atomic number is the fundamental criterion of periodicity."
));

cases.push(makeChemCase(
  chapter, 2, "Successive Ionisation Energies of Magnesium", "Successive Ionisation Enthalpies and Core Electron Removal",
  "A physical chemist conducts mass spectrometric photoionisation on gaseous magnesium atoms (Z = 12) and records the successive energy inputs: IE₁ = 738 kJ/mol, IE₂ = 1451 kJ/mol, and IE₃ = 7733 kJ/mol. The student notes that while IE₂ is approximately double IE₁, IE₃ jumps by more than 500% compared to IE₂.",
  "What electronic phenomenon explains the massive, discontinuous jump between the second and third ionisation energies of magnesium?",
  "The third electron is removed from an unstable d-orbital.",
  "Removing two electrons causes the magnesium nucleus to gain a proton.",
  "The first two electrons are removed from the outer 3s valence subshell; removing the third electron requires disrupting the stable, noble-gas neon octet (2p⁶ core), which experiences much higher effective nuclear charge.",
  "The third electron has a positive charge and is repelled by the mass spectrometer.",
  "C",
  "Mg has the configuration 1s² 2s² 2p⁶ 3s². Removing the two 3s valence electrons leaves the isoelectronic Mg²⁺ ion with a stable neon noble gas core (2s² 2p⁶). The third electron must be extracted from the tightly held, shielded 2p subshell with principal quantum number n=2, where effective nuclear charge per electron is vastly higher, causing an enormous energy jump from 1451 to 7733 kJ/mol."
));

cases.push(makeChemCase(
  chapter, 3, "Electron Affinity Discrepancy: Fluorine vs Chlorine", "Electron Gain Enthalpy and Valence Repulsion",
  "A chemical researcher compares the electron affinities of Group 17 halogens. Thermochemical data shows that chlorine has an electron affinity of -349 kJ/mol, whereas fluorine has a surprisingly lower electron affinity of -328 kJ/mol, despite fluorine being significantly smaller and having a higher electronegativity.",
  "Why does chlorine possess a higher electron affinity (releases more energy upon electron capture) than fluorine?",
  "Chlorine has more protons in its nucleus, so it always exerts greater pull on any external electron.",
  "The 2p valence subshell of fluorine is extremely compact, resulting in high inter-electronic repulsion that partially offsets the nuclear attraction for the incoming electron; chlorine's larger 3p subshell accommodates the extra electron with minimal repulsion.",
  "Fluorine is a noble gas that resists gaining any electrons.",
  "Chlorine has a metallic lattice that absorbs electrons as delocalised electrons.",
  "B",
  "Fluorine has a very small atomic radius (r ≈ 72 pm), meaning its 7 valence electrons are crowded into a compact 2p subshell. When an additional electron approaches, strong electron-electron repulsions occur, decreasing the net energy released. In chlorine, the incoming electron enters the larger, more diffuse 3p subshell (r ≈ 99 pm), where inter-electronic repulsion is minimal, resulting in higher electron affinity."
));

cases.push(makeChemCase(
  chapter, 4, "Isoelectronic Species Radius Comparison", "Isoelectronic Ions and Effective Nuclear Charge",
  "In an advanced crystallography study, an X-ray diffraction analyst tabulates the ionic radii of five isoelectronic species, all containing exactly 10 electrons: N³⁻, O²⁻, F⁻, Na⁺, and Mg²⁺. The measured radii in picometers are: 171 pm, 140 pm, 133 pm, 102 pm, and 72 pm.",
  "Which principle correctly accounts for the dramatic shrinkage in radius from N³⁻ to Mg²⁺ despite having the exact same number of electrons?",
  "The number of electron shells decreases from 3 to 1.",
  "The nuclear charge increases from +7 in N³⁻ to +12 in Mg²⁺; with more protons attracting the same 10 electrons, the electron cloud is pulled progressively closer to the nucleus.",
  "Magnesium loses mass due to radioactive decay in the crystal lattice.",
  "Nitrogen atoms absorb photons that inflate their electron orbitals.",
  "B",
  "All five species have 10 electrons in the 1s² 2s² 2p⁶ configuration. However, the nuclear charges (proton count) are: N (7), O (8), F (9), Na (11), Mg (12). The effective nuclear charge per electron (Z/e ratio) increases from 7/10 = 0.7 in N³⁻ to 12/10 = 1.2 in Mg²⁺. Greater nuclear positive charge exerts a stronger electrostatic pull on the electron cloud, progressively decreasing the ionic radius."
));

cases.push(makeChemCase(
  chapter, 5, "First Ionisation Energy Anomaly: Nitrogen vs Oxygen", "Half-Filled Orbital Stability and Hund's Rule",
  "A spectroscopy team measures the first ionisation energies across Period 2 elements. As expected, IE generally increases from Lithium to Neon. However, Nitrogen (Z = 7) has an IE₁ of 1402 kJ/mol, which is notably higher than that of Oxygen (Z = 8) at 1314 kJ/mol, defying the general left-to-right increasing trend.",
  "What is the quantum mechanical origin of Nitrogen having a higher first ionisation energy than Oxygen?",
  "Nitrogen has a higher nuclear charge than oxygen.",
  "Nitrogen has a stable, half-filled 2p subshell (2p_x¹ 2p_y¹ 2p_z¹) with extra exchange energy, whereas Oxygen has paired electrons in one 2p orbital (2p_x² 2p_y¹ 2p_z¹) causing electron-electron repulsion that facilitates electron removal.",
  "Oxygen has fewer protons than nitrogen, so it holds its electrons loosely.",
  "Nitrogen forms a triple bond in isolated atomic state.",
  "B",
  "Nitrogen (1s² 2s² 2p³) has an exactly half-filled 2p subshell with parallel spins, which provides special quantum exchange stability and symmetry. Oxygen (1s² 2s² 2p⁴) contains two paired electrons in one 2p orbital. The inter-electronic repulsion between these two paired electrons in the same spatial orbital raises their energy and makes it easier to remove one electron, resulting in a lower IE₁ for oxygen."
));

cases.push(makeChemCase(
  chapter, 6, "First Ionisation Energy Anomaly: Beryllium vs Boron", "Subshell Penetration Effect and s vs p Ionisation",
  "In the same Period 2 survey, Beryllium (Z = 4) exhibits an IE₁ of 899 kJ/mol, whereas Boron (Z = 5) exhibits a lower IE₁ of 801 kJ/mol. A student wonders why Boron, which has a higher nuclear charge (5 protons vs 4 protons) and smaller atomic radius, requires less energy to ionise.",
  "Which factor explains why Boron has a lower first ionisation potential than Beryllium?",
  "Beryllium is a non-metal while Boron is a transition metal.",
  "The electron removed from Beryllium is a 2s electron from a completely filled, penetrating 2s subshell; the electron removed from Boron is a 2p electron, which is higher in energy, less penetrating, and shielded by the inner 2s electrons.",
  "Boron has an octet configuration that repels incoming photons.",
  "Beryllium loses a proton during ionisation to become Lithium.",
  "B",
  "Be has configuration 1s² 2s² (fully filled 2s orbital). B has configuration 1s² 2s² 2p¹. The 2p electron in Boron resides in a higher energy subshell that is more diffuse and heavily shielded by the inner 1s² and 2s² electrons. Furthermore, 2s electrons penetrate closer to the nucleus than 2p electrons. Consequently, less energy is needed to remove the 2p¹ electron of Boron than the 2s² electron of Beryllium."
));

cases.push(makeChemCase(
  chapter, 7, "Hydrated Radii and Ionic Mobility of Alkali Metals", "Hydration Enthalpy vs Ionic Size in Aqueous Solution",
  "An electrochemist investigates the ionic conductivities of Group 1 alkali metal ions in aqueous solution at 25°C. In the gas phase, Li⁺ has the smallest ionic radius (76 pm) and Cs⁺ has the largest (167 pm). However, in aqueous solution, Li⁺ has the lowest ionic mobility and electrical conductivity, while Cs⁺ has the highest.",
  "Why does the tiny Li⁺ ion migrate more slowly through an electric field in water than the much bulkier Cs⁺ ion?",
  "Li⁺ undergoes nuclear fusion with water molecules.",
  "Due to its extremely high charge density (small radius with +1 charge), Li⁺ exerts an immense electrostatic pull on polar water dipoles, acquiring a massive hydration sphere that drastically increases its hydrodynamic radius.",
  "Cs⁺ loses its positive charge in water and becomes a neutral atom.",
  "Water molecules decompose into hydrogen gas when encountering Li⁺ ions.",
  "B",
  "Hydration enthalpy is inversely proportional to ionic radius (ΔH_hyd ∝ 1/r). Because Li⁺ is tiny, its charge-to-radius ratio is enormous, attracting multiple hydration shells of water molecules. Its hydrated radius is therefore much larger than that of Cs⁺, which has a low charge density and weak hydration. The bulky hydrated Li⁺ ion experiences high viscous drag in solution, reducing its ionic mobility."
));

cases.push(makeChemCase(
  chapter, 8, "Period 3 Oxides: Acid-Base Transition", "Electronegativity Difference and Nature of Oxides",
  "A research chemist tests the chemical behavior of normal oxides across Period 3: Na₂O, MgO, Al₂O₃, SiO₂, P₄O₁₀, SO₃, and Cl₂O₇ by reacting each with water, dilute hydrochloric acid, and sodium hydroxide solution.",
  "Which row correctly describes the chemical nature of these oxides from left to right across Period 3?",
  "All Period 3 oxides are neutral because oxygen has an oxidation state of -2.",
  "Na₂O (strongly basic), MgO (basic), Al₂O₃ (amphoteric), SiO₂ (weakly acidic), P₄O₁₀ (acidic), SO₃ (strongly acidic), Cl₂O₇ (very strongly acidic).",
  "Na₂O (acidic), MgO (amphoteric), Al₂O₃ (basic), SiO₂ (neutral), P₄O₁₀ (basic).",
  "Every oxide across Period 3 is amphoteric because aluminium is in Period 3.",
  "B",
  "Across a period, metallic character decreases and non-metallic character increases as electronegativity rises. Elements on the far left with low electronegativity form basic ionic oxides (Na₂O, MgO). Aluminium has intermediate electronegativity and forms the amphoteric Al₂O₃ (reacts with both acids and bases). Non-metals on the right form covalent acidic anhydrides whose acidity increases with oxidation state (SiO₂ < P₄O₁₀ < SO₃ < Cl₂O₇)."
));

cases.push(makeChemCase(
  chapter, 9, "Diagonal Relationship: Lithium and Magnesium", "Charge-to-Radius Ratio and Diagonal Similarity",
  "During a mineralogical study, an inorganic chemist observes that Lithium (Group 1, Period 2) shows striking behavioral resemblances to Magnesium (Group 2, Period 3) rather than its fellow alkali metals. Both form normal oxides (Li₂O, MgO) rather than superoxides, their carbonates decompose thermally on heating, and their chlorides are deliquescent.",
  "What underlying atomic property explains the diagonal relationship between Lithium and Magnesium?",
  "They possess the exact same atomic mass.",
  "Moving right across a period increases polarizing power while moving down a group decreases it; these opposing effects cancel diagonally, giving Li⁺ and Mg²⁺ nearly identical charge-to-radius ratios (polarizing power).",
  "Both elements have full d-orbitals in their valence shell.",
  "Lithium and magnesium are isotopes of the same element.",
  "B",
  "Moving across Period 2 from Li to Be increases nuclear charge and decreases size, raising polarizing power (charge/radius). Moving down from Be to Mg adds an electron shell, increasing size and lowering polarizing power. The net result is that diagonally positioned Li⁺ (r ≈ 76 pm, charge +1) and Mg²⁺ (r ≈ 72 pm, charge +2) have remarkably similar polarizing powers (Li⁺ ≈ 1.3, Mg²⁺ ≈ 2.8), giving rise to similar covalent tendencies, lattice energies, and thermal behaviors."
));

cases.push(makeChemCase(
  chapter, 10, "Diagonal Relationship: Beryllium and Aluminium", "Amphoteric Nature and Covalent Halides",
  "A chemical engineering student analyzes Beryllium and Aluminium. Both elements resist attack by concentrated nitric acid due to passivation, their hydroxides Be(OH)₂ and Al(OH)₃ dissolve in excess NaOH to form beryllate and aluminate complexes, and their anhydrous chlorides BeCl₂ and AlCl₃ act as Lewis acids that fume in moist air.",
  "Why do Beryllium (Group 2, Period 2) and Aluminium (Group 13, Period 3) exhibit virtually identical amphoteric and covalent properties?",
  "Beryllium and aluminium have the same number of valence electrons.",
  "Due to the diagonal relationship, Be²⁺ and Al³⁺ have comparable ionic radii and very high charge-to-radius ratios, which strongly polarize electron clouds of adjacent anions, conferring covalent character to their bonds.",
  "Both elements are noble gases at room temperature.",
  "Aluminium decays radioactively into beryllium in nature.",
  "B",
  "Be²⁺ (ionic radius 31 pm) and Al³⁺ (ionic radius 53.5 pm) both have extremely high charge density (polarizing power). According to Fajan's rules, high cation charge density pulls electron density away from adjacent anions (like Cl⁻ or O²⁻), transforming otherwise ionic bonds into predominantly covalent bonds. This high covalency accounts for their polymeric/dimeric chlorides, amphoteric hydroxides, and passivity."
));

cases.push(makeChemCase(
  chapter, 11, "Noble Gas Van der Waals Radii vs Covalent Radii", "Interatomic Distance and Radii Definitions",
  "In a periodic table textbook, a student notices that the atomic radius of Argon is listed as 188 pm, which is noticeably larger than Chlorine (99 pm) and even larger than Sodium (186 pm). The student is puzzled because atomic radius is stated to decrease from left to right across a period.",
  "Why is the reported atomic radius of Argon dramatically larger than that of Chlorine?",
  "Argon has an extra electron shell that Chlorine lacks.",
  "For noble gases like Argon, the radius measured is the non-bonded Van der Waals radius between adjacent atoms, which is inherently much larger than the covalent radius measured for chemically bonded diatomic Chlorine.",
  "Argon has 0 protons, so its electrons fly far away from the nucleus.",
  "Argon is an alkali metal that has expanded due to high reactivity.",
  "B",
  "Chlorine exists as diatomic Cl₂ molecules bonded by covalent single bonds, so its reported radius is the covalent radius (half the internuclear distance between two covalently bonded atoms). Argon, being a monoatomic inert gas, does not form covalent bonds; its radius is measured as the Van der Waals radius (half the distance between two non-bonded atoms in solid/liquid state). Van der Waals forces are weak, resulting in much larger internuclear distances."
));

cases.push(makeChemCase(
  chapter, 12, "Anomalous Density of Potassium in Group 1", "Lattice Volume vs Atomic Mass in Alkali Metals",
  "A metallurgist measures the physical densities of Group 1 metals at 20°C: Lithium (0.53 g/cm³), Sodium (0.97 g/cm³), Potassium (0.86 g/cm³), Rubidium (1.53 g/cm³), and Cesium (1.87 g/cm³). The general trend shows density increasing down the group, but Potassium is unexpectedly less dense than Sodium.",
  "What is the structural cause for Potassium having a lower density than Sodium?",
  "Potassium has fewer protons than sodium.",
  "The addition of the fourth electron shell in potassium produces a disproportionately large expansion in atomic volume (due to diffuse 4s orbital and presence of empty 3d subshell) that outweighs the increase in its atomic mass.",
  "Potassium reacts with air to produce helium gas bubbles inside its metal crystal.",
  "Sodium forms a hexagonal close-packed crystal while potassium is a liquid.",
  "B",
  "Density is given by mass/volume. From Na (Z=11) to K (Z=19), the mass increases from 23 to 39 u (an increase of ~70%), but the atomic volume increases by over 100% due to the insertion of the bulky 4s shell and the screening of the core. Because the increase in atomic volume exceeds the increase in atomic mass, Potassium has an anomalously low density (0.86 g/cm³) and actually floats on water alongside Li and Na."
));

cases.push(makeChemCase(
  chapter, 13, "Halogen Displacement Reactions and Oxidising Trends", "Standard Electrode Potentials and Halogen Reactivity",
  "A school lab technician sets up three test tubes containing aqueous solutions of Potassium Chloride, Potassium Bromide, and Potassium Iodide. Upon bubbling fresh chlorine gas into each test tube, Tube 1 (KCl) shows no change, Tube 2 (KBr) turns reddish-orange, and Tube 3 (KI) turns dark brown with violet vapors upon gentle warming.",
  "What does this experiment demonstrate regarding the periodic variation of oxidising power down Group 17?",
  "Chlorine is the weakest oxidising agent in Group 17.",
  "Oxidising power decreases down Group 17 (F₂ > Cl₂ > Br₂ > I₂); chlorine has a higher electron affinity and reduction potential than bromine and iodine, displacing bromide and iodide ions from their salt solutions.",
  "Potassium chloride is an organic substance that cannot react with halogens.",
  "Bromine oxidises chlorine to form potassium hypochlorite.",
  "B",
  "Down Group 17, atomic radius increases and effective nuclear pull on incoming electrons decreases, lowering electron gain enthalpy and standard reduction potential (E°: Cl₂/Cl⁻ = +1.36 V, Br₂/Br⁻ = +1.09 V, I₂/I⁻ = +0.54 V). Thus, Cl₂ is a stronger oxidising agent than Br₂ and I₂: Cl₂ + 2KBr → 2KCl + Br₂ (orange), and Cl₂ + 2KI → 2KCl + I₂ (brown/violet). Cl₂ cannot displace F⁻ because fluorine is even more electronegative."
));

cases.push(makeChemCase(
  chapter, 14, "Silicon's Peak Melting Point in Period 3", "Giant Covalent Network Lattice vs Metallic/Molecular Bonding",
  "A materials scientist plots the melting points of Period 3 elements: Na (98°C), Mg (650°C), Al (660°C), Si (1414°C), P₄ (44°C), S₈ (115°C), Cl₂ (-101°C), and Ar (-189°C). The melting point rises gradually from Na to Al, peaks dramatically at Silicon, and then plunges abruptly at Phosphorus.",
  "Why does Silicon exhibit an exceptionally high melting point compared to all other Period 3 elements?",
  "Silicon contains dense metallic bonds with 14 delocalised electrons.",
  "Silicon forms a three-dimensional giant covalent network lattice (like diamond) where each atom is held by four strong directional covalent bonds that require massive thermal energy to break.",
  "Silicon is a radioactive element that generates internal nuclear heat.",
  "Phosphorus and sulphur contain ionic lattices that decompose at room temperature.",
  "B",
  "Na, Mg, and Al have metallic bonding with increasing valence electrons (1, 2, 3), leading to increasing melting points. Silicon (Group 14) forms a giant three-dimensional macromolecular tetrahedral covalent lattice. Melting silicon requires breaking thousands of strong Si-Si covalent bonds (bond energy ~222 kJ/mol). From P₄ onwards, elements exist as discrete simple molecules held only by weak intermolecular Van der Waals forces, which collapse at low temperatures."
));

cases.push(makeChemCase(
  chapter, 15, "Period 3 Chlorides: Hydrolysis Mechanisms", "Vacant 3d Orbitals and Covalent Halide Hydrolysis",
  "A chemical analyst adds liquid Silicon Tetrachloride (SiCl₄) and liquid Carbon Tetrachloride (CCl₄) to separate beakers of cold distilled water. CCl₄ remains completely unreacted, forming a separate immiscible lower layer. In contrast, SiCl₄ hydrolyses violently, effervescing dense white choking fumes of HCl gas and precipitating white hydrated silica (H₄SiO₄).",
  "Why does SiCl₄ undergo rapid hydrolysis in water while CCl₄ is completely immune to hydrolysis?",
  "Silicon has lower atomic mass than carbon.",
  "Silicon belongs to Period 3 and possesses energetically accessible vacant 3d orbitals that can accept lone pairs from attacking water molecules, whereas Carbon in Period 2 has no d-orbitals and cannot expand its octet.",
  "Carbon tetrachloride is an ionic compound that repels water molecules.",
  "Silicon tetrachloride contains metallic ionic bonds that dissolve instantly.",
  "B",
  "Hydrolysis of non-metal halides begins with the nucleophilic attack of a water molecule's lone pair on the central atom. Silicon (1s² 2s² 2p⁶ 3s² 3p²) has vacant 3d orbitals in its valence shell, allowing it to expand its coordination number and form an unstable intermediate [SiCl₄·OH₂] that readily expels HCl. Carbon (Period 2) has only 2s and 2p valence orbitals; its octet is fully locked and steric crowding prevents water from attacking."
));

cases.push(makeChemCase(
  chapter, 16, "Electronegativity Trend on Pauling Scale", "Nuclear Attraction and Shared Pair Polarization",
  "Linus Pauling evaluated the bond energies of heteronuclear diatomic molecules to construct the Pauling Electronegativity Scale. On this scale, Fluorine is assigned the maximum value of 4.0, Caesium is 0.79, and Francium is 0.7. Across Period 2, the values are: Li (1.0), Be (1.5), B (2.0), C (2.5), N (3.0), O (3.5), and F (4.0).",
  "What atomic factors cause electronegativity to increase uniformly across a period and decrease down a group?",
  "Electronegativity depends only on the number of neutrons in the nucleus.",
  "Across a period, nuclear charge increases while atomic radius decreases, pulling shared electron pairs closer; down a group, added electron shells increase shielding and distance from the nucleus, weakening the pull on shared electrons.",
  "Elements on the right of the table lose electrons easily to form positive ions.",
  "Electronegativity is an experimental artifact caused by laboratory atmospheric pressure.",
  "B",
  "Electronegativity is the relative tendency of an atom in a molecule to attract shared pairs of bonding electrons toward itself. Across a period, increasing effective nuclear charge combined with decreasing atomic radius increases the electrostatic pull on bonding pairs. Down a group, each successive element adds a new principal shell, increasing atomic radius and shielding, which progressively weakens nuclear attraction on bonding electrons."
));

cases.push(makeChemCase(
  chapter, 17, "Flame Test Emissions in Groups 1 and 2", "Low Ionisation Energy and Optical De-excitation",
  "A forensic scientist uses a platinum wire cleaned with concentrated HCl to perform flame tests on unknown white salts: Salt A gives a persistent golden yellow flame; Salt B gives a delicate lilac flame through blue cobalt glass; Salt C gives a brick-red flame.",
  "Which fundamental electronic property of s-block elements allows them to produce characteristic flame colors, and which cations are present in A, B, and C?",
  "High electron affinity releases photons when halogen ions absorb electrons; A=Cl⁻, B=Br⁻, C=I⁻.",
  "Low ionisation energies allow thermal energy of the Bunsen burner flame to excite valence electrons to higher energy levels; upon returning to ground state, the electrons emit radiation in the visible spectrum. A=Na⁺, B=K⁺, C=Ca²⁺.",
  "Radioactive decay produces beta emission; A=U⁴⁺, B=Th⁴⁺, C=Ra²⁺.",
  "The flame heats the platinum wire which oxidises to different colors; no cations are identified.",
  "B",
  "Alkali and alkaline earth metals have low ionisation energies. When introduced into a non-luminous flame, thermal excitation promotes loosely bound valence electrons to higher quantum energy states. As these excited electrons drop back to ground or lower levels, the absorbed energy is emitted as visible light of specific wavelengths characteristic of the energy gap (ΔE = hc/λ). Na⁺ emits at 589 nm (yellow), K⁺ at 766 nm (lilac), and Ca²⁺ at 622 nm (brick red)."
));

cases.push(makeChemCase(
  chapter, 18, "Inert Pair Effect in Heavier p-Block Elements", "Relativistic Contraction of s-Electrons in Post-Transition Elements",
  "An inorganic chemist investigates the oxidation states of Group 14 elements: Carbon and Silicon form stable +4 compounds (CO₂, CCl₄, SiO₂), whereas Lead preferentially forms stable +2 compounds (PbO, PbCl₂) and its +4 compounds (PbO₂, PbCl₄) act as strong oxidising agents that readily revert to +2.",
  "What periodic phenomenon causes the lower (+2) oxidation state to become increasingly stable over the group oxidation state (+4) in heavier elements like Lead?",
  "Lead has an odd atomic number that prevents forming four bonds.",
  "The 'inert pair effect', where the 6s² valence electrons are strongly attracted by the high effective nuclear charge (due to poor shielding by intervening 4f and 5d subshells) and remain unshared/reluctant to participate in bonding.",
  "Lead atoms lose two neutrons during chemical reactions.",
  "Carbon has vacant 6d orbitals that lead lacks.",
  "B",
  "In heavier p-block elements (Period 6: Tl, Pb, Bi), the valence s-electrons are preceded by 14 4f and 10 5d electrons, which have poor screening efficiency. The effective nuclear charge experienced by the outermost 6s² electrons is extraordinarily high, drawing them closer to the nucleus. Because bond energies decrease down the group, the energy released during bonding is insufficient to unpair and promote the 6s² electrons, rendering them chemically 'inert'."
));

cases.push(makeChemCase(
  chapter, 19, "Periodicity of Metallic Character Across Period 3", "Ionisation Potential and Sea of Delocalised Electrons",
  "During a physics and chemistry interdisciplinary lecture, samples of Sodium, Magnesium, Aluminium, Silicon, Phosphorus, and Sulphur are tested for electrical resistivity at room temperature. Electrical resistivity is very low in Na, Mg, and Al, moderate in Si (exhibiting semiconductor characteristics with negative temperature coefficient), and extremely high in P and S.",
  "How does the variation in ionisation potential across Period 3 correlate with this progressive transition from metallic conductors to semiconductors to insulators?",
  "High ionisation potential produces mobile free electrons in the solid state.",
  "Low ionisation potential in Na, Mg, and Al enables valence electrons to be easily released into a delocalised metallic electron sea; intermediate IP in Si creates covalent bonds with a small band gap; high IP in P and S holds electrons tightly in localised covalent bonds.",
  "Silicon conducts electricity only because it is contaminated with copper wires.",
  "Phosphorus and sulphur conduct electricity better than sodium when placed in a vacuum.",
  "B",
  "Metallic character is the tendency of an atom to lose electrons and form positive ions (electropositivity). Elements with low ionisation energy (Na, Mg, Al) readily release valence electrons to form a mobile 'electron gas' that conducts electricity. As IE increases across the period, electron loss becomes unfavorable. Silicon shares electrons to form a network lattice with an intermediate band gap (semiconductor). P and S have high IE, locking all electrons into localised covalent bonds (insulators)."
));

cases.push(makeChemCase(
  chapter, 20, "Anomalous Properties of Second Period Elements", "Absence of d-Orbitals and Small Atomic Dimensions",
  "A chemical researcher observes that Lithium, Beryllium, Boron, Carbon, Nitrogen, Oxygen, and Fluorine (Period 2) exhibit anomalous physical and chemical behaviors compared to their heavier congeners in the same groups. For instance, Nitrogen is a diatomic gas (N≡N) while Phosphorus is a tetra-atomic solid (P₄); Carbon forms stable pπ-pπ multiple bonds (C=C, C≡C) while Silicon does not.",
  "What combination of fundamental atomic features distinguishes Period 2 elements from all subsequent periods in their respective groups?",
  "Period 2 elements have the largest atomic radii and highest number of neutron isotopes.",
  "Extremely small atomic size, high electronegativity, high ionisation energy, and the total absence of vacant d-orbitals in their valence shell (principal quantum number n=2 max covalency = 4).",
  "Period 2 elements do not obey Hund's rule or Pauli's exclusion principle.",
  "All Period 2 elements are inert noble gases under standard conditions.",
  "B",
  "Period 2 elements have n=2, which possesses only 2s and 2p subshells (maximum 4 orbitals, enforcing a strict octet limit of covalency 4). They completely lack d-orbitals, meaning they cannot expand their octet (unlike PCl₅, SF₆). Furthermore, their compact size allows their 2p orbitals to overlap laterally with high efficiency, forming strong pπ-pπ multiple bonds (N₂, CO₂, alkenes). Heavier congeners have larger diffuse orbitals that form weak π-bonds."
));

cases.push(makeChemCase(
  chapter, 21, "Group 1 Reactivity with Liquid Water", "Ionisation Energy and Heat of Metal Atomisation",
  "A chemistry teacher performs a demonstration behind a safety blast shield. Small pea-sized chunks of Lithium, Sodium, and Potassium are dropped into separate water troughs containing phenolphthalein. Lithium fizzes steadily and moves slowly; Sodium melts into a silvery ball that darts vigorously across the water with a yellow flame; Potassium instantly explodes into a bright lilac flame with violent splattering.",
  "What periodic trend dictates this dramatic escalation in reactivity down Group 1 with water?",
  "Nuclear charge decreases down Group 1, making potassium atoms colder.",
  "Down Group 1, atomic radius increases and ionisation energy decreases significantly, enabling the metal to lose its valence electron more readily, coupled with a decreasing melting point that causes sodium and potassium to liquefy rapidly during the exothermic reaction.",
  "Potassium reacts by nuclear fission while lithium reacts by chemical oxidation.",
  "Lithium has zero valence electrons, so it cannot react with water dipoles.",
  "B",
  "The reaction is 2M(s) + 2H₂O(l) → 2M⁺(aq) + 2OH⁻(aq) + H₂(g). The ease of oxidation depends on low ionisation energy (Li: 520, Na: 496, K: 419 kJ/mol). Lower IE allows Potassium to transfer electrons to water much faster. The immense heat liberated cannot dissipate quickly; because Potassium has a very low melting point (63.5°C), it liquefies immediately, exposing maximal surface area and igniting the evolving H₂ gas with its characteristic potassium emission (lilac)."
));

cases.push(makeChemCase(
  chapter, 22, "Halogen Hydracid Strengths in Aqueous Solution", "Bond Dissociation Energy vs Electronegativity in Acidic Trends",
  "In an analytical laboratory, equal molar concentrations (0.1 M) of four hydrohalic acids: HF, HCl, HBr, and HI are tested with a precision pH meter. The measured pH values are: HF = 2.06 (weak acid, Ka = 6.6 × 10⁻⁴), HCl = 1.0 (strong acid), HBr = 1.0 (strong acid), and HI = 1.0 (strongest acid, pKa ≈ -10).",
  "Why is Hydrofluoric acid (HF) a weak acid while Hydroiodic acid (HI) is an exceptionally strong acid, despite Fluorine being far more electronegative than Iodine?",
  "Fluorine is a metal that neutralizes acidic hydronium ions.",
  "Acid strength down Group 17 is governed by the H–X bond dissociation energy rather than electronegativity; the H–F bond is exceptionally short and strong (567 kJ/mol), resisting dissociation, while the H–I bond is long and very weak (298 kJ/mol), dissociating completely in water.",
  "Iodine atoms absorb water molecules to form solid crystals.",
  "HF contains no hydrogen ions in its molecular structure.",
  "B",
  "When comparing acids of elements in the same group of the periodic table, the bond dissociation enthalpy of the H–A bond is the overriding factor, not electronegativity. Down Group 17, halogen atomic radius increases rapidly (F: 72 pm to I: 133 pm), causing the orbital overlap with the small 1s orbital of hydrogen to become increasingly poor. The bond strength drops steeply (H-F: 567 > H-Cl: 431 > H-Br: 366 > H-I: 298 kJ/mol). HI readily cleaves to release H⁺ ions."
));

cases.push(makeChemCase(
  chapter, 23, "Lothar Meyer's Atomic Volume Curve", "Periodicity of Molar Volume and Physical Properties",
  "In 1869, German chemist Lothar Meyer plotted the atomic volume of elements (atomic weight divided by solid-state density) against their atomic weights. The resulting periodic curve featured sharp periodic peaks, descending slopes, bottoms of troughs, and ascending slopes.",
  "Which elements occupy the sharp peaks and which occupy the deep troughs of Lothar Meyer's atomic volume curve?",
  "Noble gases occupy the peaks and halogens occupy the troughs.",
  "Alkali metals (Li, Na, K, Rb, Cs) occupy the sharp peaks due to their large atomic radii and open body-centered cubic structures; transition metals with high densities and tight packing occupy the deep troughs.",
  "Transition metals occupy the peaks and alkali metals occupy the troughs.",
  "Non-metals occupy the peaks and metalloids occupy the troughs.",
  "B",
  "Lothar Meyer showed that physical properties are periodic functions of atomic weights. Alkali metals (Group 1) have the largest atomic radii in their respective periods and crystallize in relatively open BCC lattices, giving them the highest molar volumes (sharp peaks). In contrast, transition metals (like Fe, Co, Ni, Pt) have small atomic radii and dense close-packed crystal structures, placing them at the bottom of the troughs."
));

cases.push(makeChemCase(
  chapter, 24, "Cation and Anion Size vs Neutral Parent Atom", "Effective Nuclear Charge in Cations and Anions",
  "A crystallography lab measures the atomic and ionic radii of sodium and chlorine. Neutral Na atom is 186 pm, whereas Na⁺ cation is 102 pm. Neutral Cl atom is 99 pm, whereas Cl⁻ anion is 181 pm.",
  "What electronic changes cause a cation to shrink and an anion to expand relative to their parent neutral atoms?",
  "Cations gain protons and anions lose protons.",
  "Forming a cation removes valence electrons (often losing an entire shell) and increases the effective nuclear charge per remaining electron; forming an anion adds electrons to the same shell, increasing electron-electron repulsion and expanding the cloud.",
  "Cations absorb dark matter while anions expel magnetic fields.",
  "Anions become lighter in weight, so they float outward.",
  "B",
  "When Na (2,8,1) loses an electron to become Na⁺ (2,8), it completely sheds its outermost n=3 shell. The remaining 10 electrons are drawn by 11 protons (Z/e = 1.1), contracting the radius from 186 to 102 pm. Conversely, Cl (2,8,7) gains an electron to form Cl⁻ (2,8,8); 17 protons now hold 18 electrons (Z/e = 0.94). The increased inter-electronic repulsions force the valence orbitals to expand outward, increasing the radius from 99 to 181 pm."
));

cases.push(makeChemCase(
  chapter, 25, "Polarising Power and Fajan's Rules across Periods", "Covalent Character in Metal Halides (LiCl vs NaCl)",
  "A chemical thermodynamicist measures the melting points of Group 1 chlorides: LiCl (605°C), NaCl (801°C), KCl (770°C), and RbCl (715°C). While melting points normally decrease down a group as ionic radii expand, Lithium Chloride has an anomalously low melting point and is soluble in organic solvents like alcohol and pyridine.",
  "According to Fajan's rules, why does Lithium Chloride exhibit pronounced covalent character compared to Sodium Chloride?",
  "Lithium is a non-metal that forms molecular compounds.",
  "Li⁺ has an exceptionally small ionic radius (76 pm), giving it a very high charge-to-radius ratio (polarising power) that heavily distorts the electron cloud of the Cl⁻ anion, introducing substantial covalent character.",
  "Chlorine shares a proton with the lithium nucleus.",
  "LiCl decomposes into lithium gas at room temperature.",
  "B",
  "According to Fajan's rules: (1) Small cation size, (2) Large anion size, and (3) High ionic charge favor covalency. The tiny Li⁺ cation has a massive positive electric field gradient at its surface (high polarizing power). When it approaches the large polarizable Cl⁻ anion (radius 181 pm), it pulls the Cl⁻ electron cloud into the internuclear region between the ions. This partial electron sharing confers significant covalent character, lowering its melting point and enabling solubility in non-polar organic solvents."
));

cases.push(makeChemCase(
  chapter, 26, "Valency Across Period 3 with Oxygen vs Hydrogen", "Variable Valence Trends Across Period 3",
  "A teacher presents a table showing the formulas of hydrides and highest oxides of Period 3 elements:\nHydrides: NaH, MgH₂, AlH₃, SiH₄, PH₃, H₂S, HCl\nHighest Oxides: Na₂O, MgO, Al₂O₃, SiO₂, P₂O₅ (P₄O₁₀), SO₃, Cl₂O₇",
  "How does the valency of elements change across Period 3 with respect to hydrogen compared to oxygen?",
  "Valency with respect to hydrogen increases 1 to 7; valency with respect to oxygen remains constant at 2.",
  "Valency with respect to hydrogen increases from 1 to 4 and then decreases to 1; valency with respect to oxygen increases steadily from 1 to 7.",
  "Both valencies remain constant at 8 across the entire period.",
  "Valency with respect to oxygen decreases from 7 to 1, while hydrogen valency remains zero.",
  "B",
  "Valency with respect to hydrogen represents the number of hydrogen atoms an element combines with. Because hydrogen is electropositive and monovalent, elements from Group 1 to 14 use their valence electrons (1, 2, 3, 4: NaH to SiH₄); from Group 15 to 17, elements share electrons to complete their octet (8 - group number: PH₃, H₂S, HCl: 3, 2, 1). With electronegative oxygen, elements can utilize all their valence electrons in bonding, so the oxidation state rises steadily from +1 to +7 (Na₂O to Cl₂O₇)."
));

cases.push(makeChemCase(
  chapter, 27, "Chlorine Disproportionation in Cold vs Hot Alkali", "Redox Potential and Halogen Disproportionation",
  "An industrial chemist bubbles chlorine gas into aqueous sodium hydroxide. Under cold, dilute conditions (15°C), the reaction yields Sodium Chloride and Sodium Hypochlorite (household bleach). Under hot, concentrated conditions (70°C), the reaction yields Sodium Chloride and Sodium Chlorate.",
  "What are the oxidation states of Chlorine in the products formed under cold vs hot conditions, and what periodic property drives this disproportionation?",
  "Cold: -1 and +1; Hot: -1 and +5; driven by Chlorine's intermediate electronegativity and variable oxidation states (vacant d-orbitals).",
  "Cold: 0 and -2; Hot: +2 and +7; driven by Chlorine's basic character.",
  "Cold: -3 and +3; Hot: 0 and +4; driven by Chlorine's metallic conductivity.",
  "Chlorine does not change its oxidation state in either reaction.",
  "A",
  "In cold dilute alkali: Cl₂ + 2NaOH → NaCl (-1) + NaClO (+1) + H₂O. Chlorine simultaneously undergoes reduction (0 to -1) and oxidation (0 to +1). In hot concentrated alkali: 3Cl₂ + 6NaOH → 5NaCl (-1) + NaClO₃ (+5) + 3H₂O. The hypochlorite ion (ClO⁻) is thermally unstable and disproportionates at elevated temperatures: 3ClO⁻ → 2Cl⁻ + ClO₃⁻. This behavior reflects chlorine's ability to exhibit multiple oxidation states (-1, +1, +3, +5, +7) utilizing vacant 3d orbitals."
));

cases.push(makeChemCase(
  chapter, 28, "Thermal Stability of Group 2 Carbonates", "Polarising Power and Thermal Decomposition Trends",
  "In an analytical geochemistry furnace, equal molar amounts of Group 2 carbonates are heated to determine their decomposition temperatures:\nMgCO₃ decomposes at 540°C\nCaCO₃ decomposes at 900°C\nSrCO₃ decomposes at 1290°C\nBaCO₃ decomposes at 1360°C",
  "Why does the thermal stability of alkaline earth metal carbonates increase so dramatically down Group 2?",
  "Barium is radioactive and produces shielding heat.",
  "Down Group 2, cation radius increases (Mg²⁺: 72 pm to Ba²⁺: 135 pm), decreasing its polarizing power; smaller Mg²⁺ strongly polarizes and distorts the large CO₃²⁻ anion, weakening the C–O bond and facilitating decomposition into MgO and CO₂ at much lower temperatures.",
  "Carbon dioxide gas is heavier when released from magnesium carbonate.",
  "Calcium carbonate is an organic compound that does not contain metal ions.",
  "B",
  "The decomposition reaction is MCO₃(s) → MO(s) + CO₂(g). A carbonate ion (CO₃²⁻) is a large, polarizable oxyanion. A small cation with high charge density (Mg²⁺) exerts a strong polarizing pull on the electron cloud of an oxygen atom in the carbonate ion, drawing it toward itself and weakening the C–O bond. Down the group, as cation radius expands (Mg²⁺ < Ca²⁺ < Sr²⁺ < Ba²⁺), polarizing power weakens, leaving the carbonate lattice intact until much higher thermal energies."
));

cases.push(makeChemCase(
  chapter, 29, "Acidic Nature of Period 3 Hydrides", "Electronegativity and Polar Covalent Cleavage",
  "A student examines the behavior of Period 3 hydrides in aqueous solution: SiH₄ is neutral and insoluble; PH₃ is very weakly basic (forms PH₄⁺ only with concentrated acids); H₂S is a weak diprotic acid (Ka₁ = 9.1 × 10⁻⁸); and HCl is a very strong monoprotic acid (Ka ≈ 10⁷).",
  "What periodic trend explains the transition from neutral hydride (SiH₄) to weakly acidic (H₂S) to strong acid (HCl)?",
  "The number of hydrogen atoms decreases, so the acid becomes stronger.",
  "Across the period from Si to Cl, electronegativity increases sharply (Si: 1.9, P: 2.1, S: 2.5, Cl: 3.0), creating a strongly polarized H–X bond where electron density is drawn away from H, facilitating the release of H⁺ ions in water.",
  "Silicon hydride has more neutrons, which suppresses proton ionization.",
  "All hydrides across Period 3 are strong bases in liquid ammonia.",
  "B",
  "Across Period 3, non-metallic character and electronegativity increase from left to right. In SiH₄, electronegativities of Si (1.9) and H (2.1) are nearly identical, resulting in an essentially non-polar bond. In H₂S, S (2.5) polarizes the H-S bond, allowing weak dissociation in water. In HCl, Cl (3.0) is strongly electronegative, creating a highly polar covalent bond (Hδ+ - Clδ-) that completely dissociates into H₃O⁺ and Cl⁻ in water."
));

cases.push(makeChemCase(
  chapter, 30, "Position of Hydrogen in Modern Periodic Table", "Dual Resemblance to Alkali Metals and Halogens",
  "In an advanced chemistry debate, students discuss the placement of Hydrogen (atomic number 1). Student X argues that Hydrogen should be in Group 1 because it has one valence electron (1s¹) and forms H⁺ cations. Student Y argues that Hydrogen should be in Group 17 because it is a non-metal gas, exists as diatomic molecules (H₂), and gains one electron to form hydride anions (H⁻) with a noble gas helium configuration.",
  "Why is hydrogen's position considered unique, and how does it differ fundamentally from Group 1 alkali metals?",
  "Hydrogen is a transition metal that forms colored complexes.",
  "Hydrogen resembles Group 1 in valency and forming H⁺, but unlike alkali metals, it is a non-metallic gas with an extremely high first ionisation energy (1312 kJ/mol vs Li: 520 kJ/mol) that shares electrons to form covalent bonds.",
  "Hydrogen has no nucleus and therefore cannot be classified in any group.",
  "Hydrogen belongs strictly to the noble gas Group 18 because it has a full outer shell.",
  "B",
  "Hydrogen has a unique electronic configuration (1s¹). Like alkali metals (Group 1), it has one valence electron, forms halides (HCl), oxides (H₂O), and loses an electron to form H⁺. Like halogens (Group 17), it requires one electron to achieve a noble gas configuration (He: 1s²), forms diatomic molecules (H₂), and forms ionic hydrides (NaH) containing H⁻. However, its ionisation energy (1312 kJ/mol) is vastly higher than any alkali metal, justifying its standalone placement."
));

cases.push(makeChemCase(
  chapter, 31, "Second Electron Gain Enthalpy of Oxygen", "Inter-electronic Repulsion in Dianion Formation",
  "In a thermochemical Born-Haber cycle calculation for Magnesium Oxide, a physical chemist records the successive electron gain enthalpies of Oxygen (Z = 8):\nO(g) + e⁻ → O⁻(g); ΔH_eg1 = -141 kJ/mol (exothermic)\nO⁻(g) + e⁻ → O²⁻(g); ΔH_eg2 = +780 kJ/mol (strongly endothermic)",
  "Why is the second electron gain enthalpy of oxygen strongly positive (endothermic) despite the resulting O²⁻ ion achieving a stable noble gas neon octet?",
  "The second electron must be added to a higher principal quantum shell (n=3).",
  "The incoming electron is repelled by the net negative charge of the O⁻ monoanion; significant electrostatic work must be done to overcome this strong electron-electron repulsion.",
  "Oxygen loses a proton when forming the oxide ion.",
  "The neon octet is an unstable configuration that repels all electrons.",
  "B",
  "While adding the first electron to a neutral oxygen atom is exothermic (energy released due to nuclear attraction), the second electron must be added to an already negatively charged ion (O⁻). The incoming negative electron experiences massive electrostatic repulsion from the existing electron cloud. Energy must be supplied from external surroundings to force the electron into the orbital, making ΔH_eg2 strongly positive (+780 kJ/mol)."
));

cases.push(makeChemCase(
  chapter, 32, "Screening Effect and Effective Nuclear Charge ($Z_{eff}$)", "Slater's Rules and Valence Electron Shielding",
  "A theoretical chemist calculates the effective nuclear charge ($Z_{eff}$) experienced by the outermost valence electron in Sodium (Z = 11) and Chlorine (Z = 17). Both elements have electrons occupying the n = 3 principal shell. The calculated $Z_{eff}$ for Sodium is +2.2, whereas for Chlorine it is +6.1.",
  "Why is the effective nuclear charge for Chlorine nearly three times greater than that of Sodium in the same period?",
  "Sodium has fewer core electrons than chlorine.",
  "Across Period 3, each successive proton added to the nucleus is matched by an electron in the SAME valence shell; electrons in the same shell do not shield each other effectively, so $Z_{eff}$ rises rapidly.",
  "Chlorine has a smaller mass number than sodium.",
  "The screening effect of inner shells increases by 100% at each step across the period.",
  "B",
  "Effective nuclear charge is given by $Z_{eff} = Z - \sigma$, where $\sigma$ is the screening constant. Both Na and Cl have identical 10-electron inner cores (1s² 2s² 2p⁶) providing the primary shielding. As we move from Na (Z=11) to Cl (Z=17), 6 protons are added to the nucleus while 6 electrons enter the same 3rd shell. Because electrons in the same principal energy level provide very poor mutual shielding, the nuclear charge outpaces screening, pulling the valence electrons much tighter."
));

cases.push(makeChemCase(
  chapter, 33, "Döbereiner's Triads and Atomic Weight Averages", "Historical Development of Periodic Classification",
  "In 1829, German chemist Johann Wolfgang Döbereiner grouped elements into sets of three called 'Triads', where the atomic weight of the middle element was approximately equal to the arithmetic mean of the other two elements. For example, in the triad Calcium (40.1), Strontium (87.6), and Barium (137.3), the mean of Ca and Ba is (40.1 + 137.3)/2 = 88.7, which closely matches Strontium.",
  "Which triad proposed by Döbereiner failed to establish a universal periodic system, and why was the concept abandoned?",
  "Hydrogen, Helium, Lithium; failed because helium was unknown.",
  "Döbereiner could only identify a few isolated triads (e.g., Li-Na-K, Ca-Sr-Ba, Cl-Br-I), while other elements with similar properties (such as Fe, Co, Ni or N, P, As) did not conform to the arithmetic mean rule.",
  "Triads were abandoned because atomic weight was proven to be a myth.",
  "All triads were proven to be radioactive elements that decomposed into lead.",
  "B",
  "Döbereiner's Law of Triads was an early attempt to classify elements by atomic weights and chemical properties. However, it was strictly limited to a handful of triads. For example, Nitrogen (14), Phosphorus (31), and Arsenic (75) share identical valencies and chemical behaviors, but the mean of N and As is (14 + 75)/2 = 44.5, which deviates wildly from Phosphorus (31). Hence, it could not serve as a universal classification."
));

cases.push(makeChemCase(
  chapter, 34, "Newlands' Law of Octaves and Its Failure", "Periodicity Pattern and Musical Analogy",
  "In 1865, English chemist John Newlands arranged elements in increasing order of atomic weights and observed that every eighth element exhibited properties similar to the first, comparing this repetition to the octaves of musical notes (sa, re, ga, ma, pa, dha, ni, sa).",
  "At which element did Newlands' Law of Octaves break down completely, and what major discovery later destroyed its 8-element periodicity cycle?",
  "It broke down at Hydrogen; destroyed by discovery of isotopes.",
  "It broke down after Calcium (Z = 20) because the insertion of 10 d-block transition elements expanded the period to 18 elements; furthermore, the later discovery of noble gases (Group 18) altered the octave interval to 9.",
  "It broke down at Carbon; destroyed by discovery of diamond.",
  "It broke down at Uranium; destroyed by discovery of nuclear fission.",
  "B",
  "Newlands' Law of Octaves was valid only up to Calcium (mass 40). Beyond Calcium, the commencement of the 3d transition series meant that elements separated by 8 places no longer had similar properties (e.g., Chromium and Titanium showed no resemblance to Group 1 or 2). Moreover, Newlands assumed only 56 elements existed. When Ramsay later discovered the inert noble gases (He, Ne, Ar, Kr, Xe), every 9th element became similar, invalidating the octave analogy."
));

cases.push(makeChemCase(
  chapter, 35, "Anomalous Atomic Weight Pairs in Mendeleev's Table", "Inversion of Atomic Mass Sequence to Preserve Grouping",
  "Dmitri Mendeleev published his iconic periodic table in 1869, arranging elements primarily by increasing atomic weight. However, to keep elements with similar chemical properties in the same vertical group, Mendeleev boldly inverted the atomic weight order for several pairs: Cobalt (58.9) was placed before Nickel (58.7), Tellurium (127.6) was placed before Iodine (126.9), and Argon (39.9) was later placed before Potassium (39.1).",
  "How did Henry Moseley's Modern Periodic Table mathematically vindicate Mendeleev's chemical placement of these anomalous pairs?",
  "Moseley showed that atomic weights had been calculated incorrectly by 50%.",
  "Moseley proved that atomic number (Z), not atomic mass, determines periodicity; the true atomic numbers sequence correctly without any inversion: Co (27) before Ni (28), Te (52) before I (53), and Ar (18) before K (19).",
  "Moseley converted all atomic masses into metric grams.",
  "Moseley showed that Cobalt radioactively transforms into Nickel.",
  "B",
  "Mendeleev prioritized chemical properties (e.g., grouping Iodine with halogens and Tellurium with Group 16) over strict atomic mass order. When Moseley measured characteristic X-ray frequencies, he proved that atomic number Z represents nuclear charge. The atomic numbers are: Argon (Z=18) < Potassium (Z=19); Cobalt (Z=27) < Nickel (Z=28); Tellurium (Z=52) < Iodine (Z=53). In terms of atomic number, the sequence is perfectly regular with zero inversions."
));

cases.push(makeChemCase(
  chapter, 36, "Metallic and Non-Metallic Character in Period 2 vs Group 17", "Electropositivity vs Electronegativity Gradients",
  "An advanced chemistry student tracks the metallic character across Period 2 (Li, Be, B, C, N, O, F) and down Group 17 (F, Cl, Br, I, At). Across Period 2, properties shift rapidly from soft, reactive alkali metal (Li) to corrosive non-metal gas (F₂). Down Group 17, dark solid Iodine exhibits a metallic luster and conducts electricity under pressure.",
  "What is the dual periodic trend for metallic character across a period and down a group?",
  "Metallic character increases across a period and increases down a group.",
  "Metallic character decreases across a period (left to right) and increases down a group (top to bottom).",
  "Metallic character is constant across periods and drops to zero down groups.",
  "Metallic character increases across a period and decreases down a group.",
  "B",
  "Metallic character is the ease with which an atom loses electrons (electropositivity). Across a period, increasing nuclear charge and decreasing atomic size make electron loss difficult, reducing metallic character. Down a group, the addition of electron shells increases the atomic radius and shielding, weakening nuclear pull on valence electrons; hence ionisation energy drops and metallic character increases (e.g., Iodine shows metallic luster and forms I⁺ cations in molten ICl)."
));

cases.push(makeChemCase(
  chapter, 37, "Oxidising vs Reducing Power Across Period 3", "Electron Transfer Energetics Across Period 3",
  "A laboratory technician investigates the redox capabilities of Sodium, Magnesium, Chlorine, and Argon. Sodium reacts vigorously with water, reducing H⁺ to H₂ gas. Chlorine bubbles through iron(II) chloride solution, rapidly oxidising Fe²⁺ to Fe³⁺. Argon exhibits zero redox activity.",
  "Which statement accurately summarizes the periodic variation in oxidising and reducing power across Period 3?",
  "Reducing power increases from left to right; oxidising power increases from right to left.",
  "Reducing power is strongest on the far left (alkali metals) and decreases across the period; oxidising power is strongest on the far right (halogens) and increases across the period.",
  "All elements across Period 3 are strong oxidising agents because they are non-metals.",
  "Noble gases on the far right are the strongest reducing agents in the periodic table.",
  "B",
  "A reducing agent donates electrons (undergoes oxidation). Elements with low ionisation potentials (Group 1: Na) readily donate electrons, making them potent reducing agents. Across the period, ionisation energy increases and electron affinity becomes more negative, making electron donation difficult and electron acceptance highly favorable. Halogens (Group 17: Cl) readily accept electrons, making them powerful oxidising agents. Noble gases (Group 18) are completely inert."
));

cases.push(makeChemCase(
  chapter, 38, "Basic to Acidic Character of Period 3 Hydroxides", "Electronegativity and O-H vs M-O Bond Cleavage",
  "A solution of Sodium Hydroxide (NaOH) has a pH of 13. A suspension of Magnesium Hydroxide (Mg(OH)₂) has a pH of 10. Aluminium Hydroxide (Al(OH)₃) dissolves in both HCl and NaOH. Orthosilicic acid (Si(OH)₄), Phosphoric acid (H₃PO₄ / P(O)(OH)₃), Sulphuric acid (H₂SO₄ / SO₂(OH)₂), and Perchloric acid (HClO₄ / ClO₃(OH)) are all acids of increasing strength.",
  "What periodic mechanism governs whether an element-hydroxyl compound E–O–H dissociates as a base (E⁺ + OH⁻) or as an acid (EO⁻ + H⁺)?",
  "Compounds with higher molecular weight are always bases.",
  "If the electronegativity of element E is low (metals like Na, Mg), the E–O bond is ionic and cleaves to release OH⁻ (basic); if the electronegativity of E is high (non-metals like S, Cl), the E–O bond is strongly covalent, polarizing the O–H bond and causing it to cleave to release H⁺ (acidic).",
  "Hydroxides of elements in Period 3 all release hydrogen gas when dissolved in water.",
  "The number of oxygen atoms determines whether a compound contains electrons.",
  "B",
  "In any hydroxy compound E–O–H, dissociation depends on the electronegativity difference. For electropositive metals (Na: 0.9, Mg: 1.2), ΔEN(E-O) is very large (~2.3 to 2.6), making the E-O bond ionic; water breaks the weak ionic E-O bond, yielding E⁺ + OH⁻ (base). For electronegative non-metals (Cl: 3.0), the E-O bond is covalent and strong, but the high positive charge density on E pulls electrons from oxygen, which in turn pulls electrons from hydrogen, weakening the O-H bond so that it cleaves to yield H⁺ (acid)."
));

cases.push(makeChemCase(
  chapter, 39, "Reactivity of Group 17 Halogens with Hydrogen", "Bond Enthalpy and Spontaneity of Halogenation",
  "A physical chemistry researcher compares the reaction conditions required to synthesize hydrogen halides from elemental hydrogen and halogens:\nF₂ + H₂ → 2HF (reacts explosively even in the dark at -200°C)\nCl₂ + H₂ → 2HCl (reacts explosively in direct sunlight, slowly in diffused light)\nBr₂ + H₂ → 2HBr (requires heating to 200°C in the presence of platinum catalyst)\nI₂ + H₂ ⇌ 2HI (reversible reaction, sluggish even at 400°C with platinum)",
  "What periodic factor drives this rapid diminution in chemical reactivity of halogens toward hydrogen down Group 17?",
  "Down the group, the molecular weight of the halogen increases, causing gravitational deceleration.",
  "Down the group, atomic radius increases and electronegativity/electron affinity decreases, lowering the driving force (free energy release) to form the H–X covalent bond as H–X bond enthalpy drops.",
  "Iodine molecules are larger than hydrogen molecules, so they cannot collide.",
  "Fluorine reacts explosively because it contains radioactive alpha particles.",
  "B",
  "Reactivity of halogens measures their tendency to act as oxidising agents by gaining an electron from hydrogen. Down Group 17, atomic radius increases (F to I), so effective nuclear attraction on incoming electrons drops. The heat of reaction (ΔH) decreases dramatically: H-F bond formation is extraordinarily exothermic (-271 kJ/mol) due to small atomic size and high orbital overlap, whereas H-I formation is slightly endothermic (+26.5 kJ/mol) and reversible due to long, fragile bonds."
));

cases.push(makeChemCase(
  chapter, 40, "Atomic Radius Trend across Transition Series (3d)", "Inward Nuclear Pull Balanced by d-Electron Shielding",
  "A crystallographer measures the metallic atomic radii across the 3d transition series (Period 4): Scandium (162 pm), Titanium (147 pm), Vanadium (134 pm), Chromium (128 pm), Manganese (127 pm), Iron (126 pm), Cobalt (125 pm), Nickel (124 pm), Copper (128 pm), and Zinc (138 pm). The student notes that after an initial decrease, the radius remains virtually constant from Cr to Ni and then slightly increases at Cu and Zn.",
  "Why does atomic radius remain nearly constant across the middle of the transition series unlike the sharp contraction observed across s- and p-blocks?",
  "Transition elements do not possess atomic nuclei.",
  "Electrons are added to the penultimate inner (3d) subshell rather than the outer valence (4s) shell; the shielding provided by these intervening 3d electrons almost perfectly offsets the increasing nuclear charge, keeping effective nuclear charge on 4s nearly constant.",
  "Transition metals form crystal lattices that compress under laboratory gravity.",
  "Scandium and Zinc have the same number of valence electrons.",
  "B",
  "In main group elements, electrons enter the outermost valence shell where screening is minimal, causing sharp contractions. In transition elements, electrons enter the penultimate (n-1)d subshell (3d). These inner d-electrons shield the outer 4s electrons from the increasing positive nuclear charge. From Cr to Ni, the increasing nuclear attraction is almost exactly counterbalanced by the repulsive screening of the added 3d electrons, resulting in steady atomic radii (~125 pm)."
));

cases.push(makeChemCase(
  chapter, 41, "Thermal Decomposition of Group 1 vs Group 2 Nitrates", "Polarising Power and Nitrate Decomposition Pathway",
  "In an ICSE chemistry laboratory, a student heats two white crystalline solids in separate hard glass test tubes:\nTube 1 containing Sodium Nitrate (NaNO₃) melts and releases a colorless gas that relights a glowing splinter, leaving a pale yellow liquid residue of Sodium Nitrite (NaNO₂).\nTube 2 containing Magnesium Nitrate (Mg(NO₃)₂) decrepitates, releasing pungent reddish-brown fumes of NO₂ gas and oxygen, leaving a white solid residue of Magnesium Oxide (MgO).",
  "What periodic property explains why Sodium Nitrate decomposes only to nitrite and oxygen, while Magnesium Nitrate decomposes completely to metal oxide, nitrogen dioxide, and oxygen?",
  "Sodium is a transition metal that does not react with nitrogen.",
  "Mg²⁺ has a much higher charge-to-radius ratio (polarising power) than Na⁺; it heavily polarizes the nitrate anion, facilitating complete cleavage into the stable oxide lattice (MgO), whereas the weakly polarizing Na⁺ only cleaves the nitrate to nitrite (NaNO₂).",
  "Magnesium nitrate is an organic compound that burns in air.",
  "Sodium nitrate contains zero oxygen atoms in its crystal structure.",
  "B",
  "Group 1 alkali metal nitrates (except LiNO₃) decompose mildly on heating: 2NaNO₃ → 2NaNO₂ + O₂. Na⁺ is a large univalent cation with low polarising power, incapable of destabilizing the nitrite backbone. Group 2 nitrates (and LiNO₃, due to diagonal relationship) contain small, highly charged divalent cations (Mg²⁺, radius 72 pm, charge +2). Mg²⁺ strongly polarizes the electron cloud of the nitrate ion, decomposing it completely: 2Mg(NO₃)₂ → 2MgO + 4NO₂↑ + O₂↑."
));

cases.push(makeChemCase(
  chapter, 42, "Periodic Variation of Acid Anhydride Strengths", "Oxidation State and Acidic Strength of Oxoacids",
  "An analytical chemist measures the acid dissociation constants (pKa) of oxoacids formed by chlorine in its various positive oxidation states:\nHypochlorous acid (HClO, Cl = +1): pKa = 7.5 (very weak)\nChlorous acid (HClO₂, Cl = +3): pKa = 2.0 (weak)\nChloric acid (HClO₃, Cl = +5): pKa = -1.0 (strong)\nPerchloric acid (HClO₄, Cl = +7): pKa = -10 (extremely strong superacid)",
  "What is the structural and periodic reason why the acidic strength of oxoacids increases so drastically with the oxidation state of the central halogen atom?",
  "Chlorine gains protons in its nucleus as the oxidation number rises.",
  "A higher oxidation state increases the positive charge on chlorine, which pulls electron density strongly away from the attached oxygen atoms, heavily polarizing the O–H bond and stabilizing the resulting conjugate oxyanion through resonance delocalisation across multiple terminal oxygens.",
  "Perchloric acid contains ionic bonds that break instantly in cold air.",
  "Hypochlorous acid has a higher molecular weight than perchloric acid.",
  "B",
  "In oxoacids, hydrogen is bonded to oxygen (Cl-O-H). As the oxidation state of Cl increases from +1 to +7, the number of non-hydrogen-bearing terminal oxygen atoms increases from 0 in HClO to 3 in HClO₄ (written as ClO₃(OH)). Highly electronegative terminal oxygens draw electron density away from Cl, which in turn pulls electrons from the O-H bond, facilitating proton release. Furthermore, the conjugate base (ClO₄⁻) delocalises its negative charge symmetrically over four equivalent oxygen atoms."
));

cases.push(makeChemCase(
  chapter, 43, "Solubility Trends of Group 2 Sulphates", "Hydration Enthalpy vs Lattice Energy in Group 2",
  "In a qualitative analysis experiment, solutions of magnesium sulphate, calcium sulphate, and barium sulphate are prepared. Magnesium sulphate (MgSO₄) dissolves readily in water to form a clear concentrated solution; Calcium sulphate (CaSO₄) is sparingly soluble; Barium sulphate (BaSO₄) is completely insoluble, precipitating instantly even at micromolar concentrations.",
  "What thermodynamic competition between lattice energy and hydration enthalpy causes the solubility of Group 2 sulphates to decrease so sharply down the group?",
  "Barium sulphate is an explosive compound that repels water molecules.",
  "The sulphate anion (SO₄²⁻) is very large, so lattice enthalpy remains nearly constant down the group; however, cation hydration enthalpy drops precipitously as cation size increases (Mg²⁺ to Ba²⁺), making dissolution thermodynamically unfavorable for heavier sulphates.",
  "Magnesium sulphate is a non-polar covalent liquid.",
  "Barium ions react with water to form insoluble elemental barium metal.",
  "B",
  "Solubility requires that hydration enthalpy exceeds lattice enthalpy (ΔH_sol = ΔH_lattice - ΔH_hyd < 0). The sulphate ion (SO₄²⁻) is bulky (radius ~230 pm), meaning the change in lattice energy from MgSO₄ to BaSO₄ is minimal. However, hydration enthalpy depends strongly on cation size (1/r). Tiny Mg²⁺ (72 pm) has an enormous hydration enthalpy (-1920 kJ/mol) that easily overcomes lattice energy. Bulky Ba²⁺ (135 pm) has a much smaller hydration enthalpy (-1305 kJ/mol), which cannot overcome the lattice enthalpy."
));

cases.push(makeChemCase(
  chapter, 44, "Basicity of Group 1 Hydroxides down the Group", "Ionic Bond Weakening and Hydroxide Ion Liberation",
  "An electrochemist titrates aqueous solutions of Lithium Hydroxide (LiOH), Sodium Hydroxide (NaOH), and Potassium Hydroxide (KOH) against standardized hydrochloric acid. The base dissociation constants (Kb) and electrical conductivities increase in the order: LiOH < NaOH < KOH < RbOH < CsOH.",
  "Why does the basic strength of alkali metal hydroxides increase uniformly down Group 1?",
  "Cesium has fewer electrons than lithium, so it is more basic.",
  "Down Group 1, cation radius increases, which increases the M–OH bond distance and lowers lattice/bond dissociation energy, enabling the ionic hydroxide to dissociate completely and release free OH⁻ ions in solution.",
  "Potassium hydroxide absorbs hydrogen ions from the atmosphere.",
  "Lithium hydroxide is an organic acid that neutralizes alkali metals.",
  "B",
  "Basic strength in aqueous solution is measured by the concentration of free hydroxide ions (OH⁻) liberated. Group 1 hydroxides are ionic solids (M⁺ OH⁻). Down the group, the ionic radius of the metal increases (Li⁺: 76 pm to Cs⁺: 167 pm). The electrostatic attraction between M⁺ and OH⁻ weakens with increasing distance (Coulomb's Law: F ∝ 1/r²). Therefore, the M-OH bond dissociates with increasing ease in water, making CsOH the strongest base."
));

cases.push(makeChemCase(
  chapter, 45, "Identification of Unknown Element via Successive Ionisation Energies", "Valence Shell Electronic Structure Determination",
  "A physical chemistry researcher subjects gaseous atoms of an unknown main-group element 'X' to mass spectrometric photoionisation. The successive ionisation energies are determined in kJ/mol:\nIE₁ = 578\nIE₂ = 1817\nIE₃ = 2745\nIE₄ = 11578\nIE₅ = 14842",
  "To which group of the modern periodic table does element 'X' belong, and what is the formula of its stable chloride?",
  "Group 1; XCl",
  "Group 2; XCl₂",
  "Group 13; XCl₃",
  "Group 14; XCl₄",
  "C",
  "Look at the energy jumps: IE₁ (578) → IE₂ (1817) → IE₃ (2745) increase steadily as electrons are removed from the valence shell. Between IE₃ (2745 kJ/mol) and IE₄ (11,578 kJ/mol), there is a massive jump of nearly 9000 kJ/mol (over 400%). This indicates that the 4th electron is removed from a stable noble-gas inner core. Therefore, element X possesses exactly 3 valence electrons, placing it in Group 13 (such as Aluminium). Its stable chloride is XCl₃."
));

cases.push(makeChemCase(
  chapter, 46, "Reactivity of Halogens with Cold Non-Polar Solvents", "Dispersion Forces and Color Gradients in Group 17",
  "In an organic chemistry laboratory, small quantities of elemental Fluorine, Chlorine, Bromine, and Iodine are dissolved in liquid carbon tetrachloride (CCl₄) in separate stoppered flasks. Fluorine and Chlorine are pale gases; Bromine dissolves to form an intense reddish-brown liquid; Iodine dissolves to give a magnificent violet solution.",
  "What periodic trend dictates the physical states and intensifying colors of halogens at room temperature down Group 17?",
  "Down Group 17, atomic number increases, causing elements to become radioactive liquids.",
  "Down Group 17, the number of electrons increases, expanding the polarisable electron cloud; this dramatically strengthens London dispersion forces (F₂ gas, Cl₂ gas, Br₂ liquid, I₂ solid) and narrows the HOMO-LUMO gap, shifting light absorption from UV into the visible spectrum.",
  "Iodine dissolves as a violet liquid because it forms an ionic bond with carbon tetrachloride.",
  "All halogens are solids when dissolved in organic solvents.",
  "B",
  "All halogens exist as non-polar diatomic molecules (X₂). Down Group 17, atomic size and total electron count increase (F₂: 18 e⁻ to I₂: 106 e⁻). Larger electron clouds are easily distorted (higher polarisability), resulting in much stronger intermolecular London dispersion forces: F₂ and Cl₂ are gases, Br₂ is a liquid (b.p. 59°C), and I₂ is a solid (m.p. 114°C). Furthermore, excitation of valence electrons across the narrowing HOMO-LUMO gap absorbs longer wavelengths (higher complementary visible colors: yellow to violet)."
));

cases.push(makeChemCase(
  chapter, 47, "Thermal Stability of Group 1 vs Group 2 Hydroxides", "Lattice Energies and Hydroxide Thermal Cleavage",
  "In a high-temperature chemistry furnace, samples of Sodium Hydroxide (NaOH) and Magnesium Hydroxide (Mg(OH)₂) are heated to 500°C. Magnesium hydroxide decomposes rapidly into white Magnesium Oxide (MgO) powder and steam. Sodium hydroxide melts at 318°C into a clear liquid without decomposing even when heated to red heat (800°C).",
  "Why is Sodium Hydroxide thermally stable while Magnesium Hydroxide decomposes readily upon heating?",
  "Sodium is an inert noble gas that cannot lose water.",
  "Mg²⁺ has a small ionic radius and +2 charge, giving it a high charge density that polarizes the OH⁻ ion and promotes cleavage into the exceptionally stable MgO crystal lattice (very high lattice energy); Na⁺ has a +1 charge and lower charge density, making NaOH thermally resistant to decomposition.",
  "Magnesium hydroxide contains organic hydrogen bonds that evaporate at 100°C.",
  "Sodium hydroxide is an acid and therefore does not contain hydroxide ions.",
  "B",
  "Thermal decomposition of hydroxides follows: M(OH)₂ → MO + H₂O. The driving force is the formation of the metal oxide lattice. Mg²⁺ is small and divalent (charge +2), so the lattice energy of MgO (3791 kJ/mol) is colossal due to U ∝ (z+ · z-)/r. This massive lattice enthalpy easily compensates for breaking the Mg-OH bonds. In contrast, Na⁺ is univalent (+1); the lattice energy of Na₂O (2488 kJ/mol) is far lower, so NaOH simply melts into liquid NaOH without thermal decomposition."
));

cases.push(makeChemCase(
  chapter, 48, "Transition Metal Complex Formation vs Main Group Elements", "Vacant d-Orbitals and High Nuclear Charge Density",
  "An inorganic research chemist mixes aqueous ammonia with magnesium sulphate and copper(II) sulphate. With Magnesium, only a temporary white precipitate of Mg(OH)₂ forms. With Copper, a pale blue precipitate forms initially, which dissolves in excess ammonia to produce an intensely deep inky-blue complex solution of [Cu(NH₃)₄]²⁺.",
  "What fundamental electronic features of d-block transition elements enable them to readily form stable coordination complex ions, unlike s-block elements?",
  "Transition metals have zero electrons in their valence shell.",
  "Transition metal cations have small ionic radii, high effective nuclear charge, and energetically accessible vacant (n-1)d orbitals that can accept lone pairs of electrons from ligand molecules.",
  "Magnesium is a radioactive element that repels ammonia molecules.",
  "Copper undergoes nuclear transmutation in ammonia solution.",
  "B",
  "Transition metals excel at forming coordination complexes because: (1) Their cations are relatively small with high nuclear charge density (e.g., Cu²⁺), allowing strong electrostatic attraction for electron-rich ligands. (2) They possess vacant (n-1)d, ns, and np orbitals of appropriate energies that can accept lone electron pairs donated by Lewis bases (ligands like NH₃, H₂O, CN⁻) to form stable coordinate covalent bonds (d²sp³ or sp³d² hybridisation)."
));

cases.push(makeChemCase(
  chapter, 49, "Environmental Toxicity Trends in the Periodic Table", "Heavy Metal Substitution and Chemical Periodicity",
  "An environmental biochemist studies how toxic heavy metals like Lead (Pb²⁺), Cadmium (Cd²⁺), and Mercury (Hg²⁺) poison human enzymes. In cellular pathways, Lead displaces Calcium (Ca²⁺) in neural junctions, while Cadmium replaces Zinc (Zn²⁺) in metabolic metalloenzymes, causing irreversible protein malfunction.",
  "Based on periodic properties, why do heavy p-block and d-block cations successfully displace essential lighter biological ions like Ca²⁺ and Zn²⁺ in human physiology?",
  "Heavy metals have lower atomic weights than calcium and zinc.",
  "Heavy metal ions have similar ionic radii and charges to essential ions (Pb²⁺ ≈ Ca²⁺, Cd²⁺ ≈ Zn²⁺), allowing them to occupy the enzyme's binding pocket, but their higher polarisability and soft Lewis acid character form irreversible, permanent covalent bonds with protein thiol (-SH) groups.",
  "Heavy metals are radioactive isotopes that destroy all water molecules in blood.",
  "Lead and cadmium are alkali metals that dissolve bones.",
  "B",
  "Biochemical mimicry occurs because Pb²⁺ (ionic radius ~119 pm) is very close in size to Ca²⁺ (100 pm), and Cd²⁺ (95 pm) matches Zn²⁺ (74 pm). The cell's enzyme receptor sites recognize the size and charge (+2). However, while Ca²⁺ and Zn²⁺ form labile, reversible electrostatic bonds, heavy metals have high polarising power and soft Lewis acid character, forming exceptionally strong, permanent covalent bonds with active-site cysteine sulphur atoms (-SH), permanently inactivating the enzyme."
));

cases.push(makeChemCase(
  chapter, 50, "Covalent vs Ionic Character of Metal Chlorides Across Period 3", "Electronegativity Differences and Fajan's Rules",
  "A student investigates the physical properties of Period 3 chlorides in anhydrous state:\nNaCl: crystalline solid, m.p. 801°C, conducts electricity in molten state\nMgCl₂: crystalline solid, m.p. 714°C, conducts electricity in molten state\nAlCl₃: volatile solid, sublimes at 180°C, does not conduct electricity in molten state, soluble in organic benzene\nSiCl₄: volatile liquid, b.p. 57°C, non-conductor of electricity",
  "What periodic trend explains the sharp transition from high-melting ionic conductors (NaCl, MgCl₂) to volatile covalent non-conductors (AlCl₃, SiCl₄)?",
  "The number of chlorine atoms decreases from left to right.",
  "Across Period 3, metal electronegativity increases (Na: 0.9 to Si: 1.9), drastically narrowing the electronegativity difference with Chlorine (3.0); simultaneously, cation charge increases and radius shrinks (Al³⁺, Si⁴⁺), maximizing polarising power and transforming ionic bonding into covalent bonding.",
  "Silicon tetrachloride is a metallic alloy that boils at low temperature.",
  "Sodium chloride contains covalent bonds that strengthen when heated.",
  "B",
  "Bond character depends on electronegativity difference (ΔEN) and cation polarising power. For NaCl, ΔEN = 3.0 - 0.9 = 2.1 (predominantly ionic lattice). For MgCl₂, ΔEN = 1.8 (ionic). For AlCl₃, ΔEN = 1.4; furthermore, Al³⁺ is a tiny trication with immense polarising power that completely pulls the electron clouds of the three Cl⁻ ions into shared covalent bonds (AlCl₃ exists as covalent Al₂Cl₆ dimers). For SiCl₄, ΔEN = 1.1, yielding discrete tetrahedral non-polar covalent molecules."
));

console.log(`[Ch1 Periodic Table] Generated ${cases.length} cases.`);

const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) fs.mkdirSync(BANK_DIR, { recursive: true });

const outPath = path.join(BANK_DIR, 'chemistry_case_periodic_table.json');
fs.writeFileSync(outPath, JSON.stringify(cases, null, 2), 'utf8');
console.log(`Saved 50 cases to ${outPath}`);
