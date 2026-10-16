// chem_ar_data_1.js - Assertion-Reasoning questions for Chapters 1 to 3
// ICSE Class 10 Chemistry: Periodic Table, Chemical Bonding, Acids Bases and Salts

module.exports = {
  periodic_table: [
    {
      title: 'Atomic radius across a period',
      a: 'The atomic radius of elements decreases gradually from left to right across a period.',
      r: 'Across a period, electrons are added to the same outermost valence shell while the nuclear charge increases, pulling the electron shells closer.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The increased effective nuclear charge pulls the electrons closer to the nucleus because shielding remains relatively constant across the same period.'
    },
    {
      title: 'Atomic radius down a group',
      a: 'The atomic radius increases down a group in the modern periodic table.',
      r: 'Down a group, each successive element adds a new shell of electrons, which outweighs the increase in nuclear charge.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The addition of new principal energy shells increases the distance of valence electrons from the nucleus, leading to a larger atomic size despite higher nuclear charge.'
    },
    {
      title: 'Cation size vs parent atom',
      a: 'A sodium cation (Na⁺) is smaller in radius than a neutral sodium atom (Na).',
      r: 'Loss of a valence electron results in the complete loss of the outermost shell and increases the effective nuclear charge per remaining electron.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Na (2,8,1) loses its 3rd shell to form Na⁺ (2,8). The remaining 10 electrons are attracted by 11 protons, pulling the electrons tighter.'
    },
    {
      title: 'Anion size vs parent atom',
      a: 'A chloride ion (Cl⁻) has a larger radius than a neutral chlorine atom (Cl).',
      r: 'Adding an electron increases inter-electronic repulsions in the valence shell while the nuclear charge remains constant.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Cl has 17 protons attracting 17 electrons. Cl⁻ has 17 protons attracting 18 electrons; increased mutual repulsion expands the electron cloud.'
    },
    {
      title: 'Ionisation energy across a period',
      a: 'Ionisation potential generally increases from left to right across a period.',
      r: 'Across a period, atomic size decreases and effective nuclear charge increases, making valence electrons more strongly bound.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Higher nuclear charge and smaller radius make it harder to remove an electron from the outermost shell.'
    },
    {
      title: 'Ionisation energy down a group',
      a: 'Ionisation potential decreases down any group of the periodic table.',
      r: 'Down a group, the increasing number of shells increases shielding and distance from the nucleus, lowering electrostatic attraction on valence electrons.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Distance and shielding effect dominate over nuclear charge down a group, decreasing the energy required to remove an electron.'
    },
    {
      title: 'Electron affinity of noble gases',
      a: 'Noble gases have practically zero or positive electron affinity values.',
      r: 'Noble gases have completely filled stable valence octets (or duplet in He), offering no electrostatic attraction to an additional incoming electron.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Extra electrons would have to enter a new principal quantum level of higher energy, which is energetically unfavorable.'
    },
    {
      title: 'Fluorine vs Chlorine electron affinity anomaly',
      a: 'Chlorine has a higher electron affinity than fluorine.',
      r: 'Fluorine has an extremely compact 2p subshell with high electron density, causing strong inter-electronic repulsions against an incoming electron.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Chlorine has a larger 3p subshell where incoming electrons face much less repulsion than in the tiny 2p shell of fluorine.'
    },
    {
      title: 'Electronegativity trend across period',
      a: 'Fluorine is the most electronegative element in the modern periodic table.',
      r: 'Fluorine has a small atomic radius and a high effective nuclear charge, giving it the strongest tendency to attract a shared pair of electrons.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Electronegativity increases across a period and decreases down a group; fluorine sits at the top right of active elements.'
    },
    {
      title: 'Metallic character down a group',
      a: 'Metallic character increases down any group in the periodic table.',
      r: 'As atomic size increases down a group, ionisation energy decreases, making it easier for atoms to lose valence electrons.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Metals are defined by their ability to lose electrons (electropositive character), which increases as ionisation potential drops.'
    },
    {
      title: 'Non-metallic character across a period',
      a: 'Non-metallic character increases from left to right across a period.',
      r: 'Elements across a period exhibit decreasing atomic size and increasing electronegativity, readily gaining electrons to complete their octet.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Electro-negativity and electron affinity rise across a period, making elements stronger electron acceptors.'
    },
    {
      title: 'Period number and electron shells',
      a: 'The period number of an element in the periodic table indicates the number of electron shells in its atom.',
      r: 'Elements in Period 3 (Na to Ar) possess electrons distributed across three shells: K, L, and M.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Period number directly corresponds to the principal quantum number (number of shells occupied by electrons).'
    },
    {
      title: 'Group number and valence electrons',
      a: 'All elements in Group 17 (Halogens) have seven valence electrons.',
      r: 'Elements belonging to the same vertical group possess identical numbers of valence electrons and exhibit similar chemical properties.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Group 17 elements (F, Cl, Br, I) all possess 7 valence electrons and form univalent anions (X⁻).'
    },
    {
      title: 'Basic nature of oxides across period 3',
      a: 'Across Period 3, oxides change from strongly basic (Na₂O) to amphoteric (Al₂O₃) and finally to acidic (Cl₂O₇).',
      r: 'Across Period 3, elements transition from strongly metallic electropositive elements to electronegative non-metals.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Metallic oxides are basic, transition/metalloid oxides can be amphoteric, and non-metallic oxides are acidic.'
    },
    {
      title: 'Mendeleev vs Modern Periodic Law',
      a: 'Mendeleev arranged elements in increasing order of their atomic numbers.',
      r: 'Henry Moseley showed that atomic number, not atomic mass, is the fundamental property governing an element chemical behavior.',
      ans: 'D',
      exp: 'Assertion is false because Mendeleev arranged elements in order of increasing atomic masses. Reason is true; Moseley discovered the atomic number relationship through X-ray spectra.'
    },
    {
      title: 'Alkali metals reactivity trend',
      a: 'Potassium (K) is chemically more reactive than sodium (Na).',
      r: 'Potassium has a larger atomic radius and lower first ionisation energy than sodium, losing its valence electron more readily.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Down Group 1, lower ionisation potential correlates directly with higher electropositivity and chemical reactivity.'
    },
    {
      title: 'Halogen reactivity trend',
      a: 'Fluorine (F₂) is chemically more reactive as an oxidising agent than iodine (I₂).',
      r: 'Fluorine has a smaller atomic size and higher electronegativity, accepting electrons more readily than iodine.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Non-metallic reactivity and oxidising power decrease down Group 17 as atomic size increases.'
    },
    {
      title: 'Isoelectronic species radius comparison',
      a: 'Among isoelectronic ions N³⁻, O²⁻, F⁻, Na⁺, and Mg²⁺, Mg²⁺ has the smallest ionic radius.',
      r: 'For isoelectronic species, ionic radius decreases as nuclear charge increases.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. All have 10 electrons, but Mg²⁺ has 12 protons pulling them, producing the highest effective nuclear charge and smallest radius.'
    },
    {
      title: 'Second ionisation energy vs first',
      a: 'The second ionisation energy of an element is always greater than its first ionisation energy.',
      r: 'Removing an electron from a positively charged cation requires more energy because the remaining electrons experience a higher effective nuclear charge.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. In a cation, protons outnumber electrons, exerting a stronger electrostatic pull on each remaining valence electron.'
    },
    {
      title: 'Noble gas chemical inertness',
      a: 'Helium, Neon, and Argon do not form chemical bonds under standard conditions.',
      r: 'Noble gases possess stable duplet or octet electronic configurations with high ionisation energy and zero electron affinity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Their complete outer shells provide maximum electronic stability, making electron loss, gain, or sharing energetically unfavorable.'
    },
    {
      title: 'Position of Hydrogen in the Periodic Table',
      a: 'Hydrogen resembles both Group 1 alkali metals and Group 17 halogens.',
      r: 'Hydrogen forms a positive ion H⁺ like alkali metals and forms a hydride ion H⁻ by gaining one electron like halogens.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Hydrogen has 1 electron, requiring 1 more to achieve helium duplet, and can also lose 1 electron to form a proton.'
    },
    {
      title: 'Valency trend across Period 3 with respect to oxygen',
      a: 'With respect to oxygen, the valency of Period 3 elements increases progressively from 1 to 7.',
      r: 'Valency with respect to oxygen corresponds to the total number of valence electrons an atom can share or donate to oxygen.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true (Na₂O, MgO, Al₂O₃, SiO₂, P₂O₅, SO₃, Cl₂O₇ exhibit valencies from 1 to 7).'
    },
    {
      title: 'Valency trend across Period 3 with respect to hydrogen',
      a: 'With respect to hydrogen, valency increases from 1 to 4 and then decreases to 1 across Period 3.',
      r: 'Valency of non-metals with hydrogen equals 8 minus the group number.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true: NaH(1), MgH₂(2), AlH₃(3), SiH₄(4), PH₃(3), H₂S(2), HCl(1).'
    },
    {
      title: 'Bridge elements / Diagonal relationship',
      a: 'Lithium shows chemical similarities to magnesium, and beryllium resembles aluminium.',
      r: 'Diagonally adjacent elements in Periods 2 and 3 have comparable charge-to-radius ratios (ionic potentials).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The polarizing power and electronegativities of diagonal pairs are very close, giving rise to diagonal relationships.'
    },
    {
      title: 'Reducing power trend down Group 1',
      a: 'Cesium is a stronger reducing agent than lithium in the gas phase.',
      r: 'Cesium has a lower ionisation potential than lithium in the gaseous state.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. In the vapor/gas phase, reducing power is governed directly by ionisation energy.'
    },
    {
      title: 'Electronegativity vs Electron Affinity distinction',
      a: 'Electronegativity is an experimental quantity measured in kJ/mol.',
      r: 'Electronegativity is the tendency of an atom in a bonded molecule to attract the shared pair of electrons towards itself.',
      ans: 'D',
      exp: 'Assertion is false because electronegativity is a dimensionless comparative property (Pauling scale), not measured in energy units. Electron affinity is measured in kJ/mol. Reason is true.'
    },
    {
      title: 'Shielding effect down a group',
      a: 'The inner electron shells shield outer valence electrons from the attractive force of the nucleus.',
      r: 'Shielding effect increases down a group as the number of intervening electron shells increases.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The additional inner shells repel the valence electrons, canceling out a substantial fraction of the nuclear charge.'
    },
    {
      title: 'Effective nuclear charge across a period',
      a: 'Effective nuclear charge (Z_eff) increases across a period.',
      r: 'Each step across a period adds one proton to the nucleus, while electrons enter the same valence shell where shielding from inner shells is constant.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Because inner core electrons remain the same, each added proton increases the net positive attraction felt by valence electrons.'
    },
    {
      title: 'Density trend down alkali metals',
      a: 'Potassium has a lower density than sodium.',
      r: 'The increase in atomic volume from Na to K is unusually large and outweighs the increase in atomic mass.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Potassium has density 0.86 g/cm³ while sodium has 0.97 g/cm³, representing a well-known ICSE periodic anomaly.'
    },
    {
      title: 'Transition elements valencies',
      a: 'Transition elements exhibit variable oxidation states.',
      r: 'The energy difference between (n-1)d and ns subshells in transition metals is very small, allowing electrons from both levels to participate in bonding.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Iron exhibits Fe²⁺ and Fe³⁺, and copper exhibits Cu⁺ and Cu²⁺ due to this small subshell energy gap.'
    },
    {
      title: 'Acidic nature of non-metallic hydrides down a group',
      a: 'HI is a stronger acid in aqueous solution than HF.',
      r: 'Down the halogen group, the H-X bond length increases and bond dissociation energy decreases, releasing H⁺ ions more readily.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Larger size of I⁻ weakens the H-I bond compared to the short, strong H-F bond.'
    },
    {
      title: 'Electronegativity of noble gases',
      a: 'Noble gases are assigned the highest electronegativity values on the Pauling scale.',
      r: 'Electronegativity increases across every period up to Group 18.',
      ans: 'D',
      exp: 'Assertion is false; noble gases do not form stable covalent bonds under standard conditions and have zero electronegativity on Pauling scale. Reason is false; electronegativity peaks at Group 17 (halogens).'
    },
    {
      title: 'Ionisation energy of Nitrogen vs Oxygen',
      a: 'Nitrogen has a slightly higher first ionisation potential than oxygen.',
      r: 'Nitrogen has a stable half-filled 2p³ subshell electronic configuration which resists loss of an electron.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Nitrogen (2p³) requires more energy to disrupt than oxygen (2p⁴), which achieves a stable half-filled state upon losing an electron.'
    },
    {
      title: 'Beryllium vs Boron ionisation energy',
      a: 'Beryllium has a higher first ionisation energy than boron.',
      r: 'The 2s subshell of beryllium is completely filled and has greater penetration power than the single 2p electron in boron.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Removing an electron from a full 2s subshell in Be (1s² 2s²) requires more energy than removing the isolated 2p¹ electron in B.'
    },
    {
      title: 'Amphoteric character of Aluminium oxide',
      a: 'Aluminium oxide (Al₂O₃) reacts with both hydrochloric acid and sodium hydroxide.',
      r: 'Al₂O₃ is an amphoteric oxide that exhibits both acidic and basic chemical properties.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O (basic action) and Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (acidic action).'
    },
    {
      title: 'Non-metal formation of anions',
      a: 'Non-metals act as oxidising agents in chemical reactions.',
      r: 'Non-metals have high electronegativity and high electron affinities, readily accepting electrons from other elements.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. An oxidising agent gains electrons during a redox process, which non-metals do readily.'
    },
    {
      title: 'Electropositive nature of metals',
      a: 'Metals are reducing agents because they donate electrons easily.',
      r: 'Metals possess low ionisation energies and lose their valence electrons readily to form positive cations.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Reducing agents get oxidised by losing electrons, a defining feature of electropositive metallic elements.'
    },
    {
      title: 'Modern periodic table classification principle',
      a: 'Elements in the modern periodic table are arranged in periods according to their atomic weights.',
      r: 'Physical and chemical properties of elements are periodic functions of their atomic numbers.',
      ans: 'D',
      exp: 'Assertion is false because elements in the modern periodic table are arranged by atomic number, not atomic weight. Reason is the true statement of Modern Periodic Law.'
    },
    {
      title: 'Silicon as a metalloid',
      a: 'Silicon is classified as a metalloid.',
      r: 'Silicon exhibits intermediate electrical conductivity and both metallic and non-metallic chemical behavior.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Silicon possesses a shiny metallic luster like a metal but is brittle and acts as a semiconductor with covalent bonding like a non-metal.'
    },
    {
      title: 'Argon placement before potassium',
      a: 'Argon (atomic mass 39.9) is placed before potassium (atomic mass 39.1) in the modern periodic table.',
      r: 'The modern periodic table is ordered by increasing atomic number; Argon has atomic number 18 and Potassium has 19.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Moseley atomic number ordering resolved the anomalous pairs of Mendeleev table where Argon had preceded Potassium despite its higher atomic mass.'
    }
  ],

  chemical_bonding: [
    {
      title: 'High melting point of electrovalent compounds',
      a: 'Sodium chloride has a high melting point of 801°C.',
      r: 'Electrovalent compounds consist of oppositely charged ions held together by strong electrostatic forces in a three-dimensional crystal lattice.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Breaking down the rigid crystal lattice of Na⁺ and Cl⁻ ions requires an immense amount of thermal energy.'
    },
    {
      title: 'Electrical conductivity of solid NaCl',
      a: 'Solid sodium chloride does not conduct an electric current.',
      r: 'In the solid state, Na⁺ and Cl⁻ ions are locked in fixed positions in the crystal lattice and are not free to migrate.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Electrical conduction requires mobile charge carriers; in solid NaCl, ions can only vibrate about their fixed lattice sites.'
    },
    {
      title: 'Electrical conductivity of molten NaCl',
      a: 'Molten sodium chloride is an excellent electrical conductor.',
      r: 'Heat energy breaks the electrostatic forces between ions in the crystal lattice, rendering the Na⁺ and Cl⁻ ions mobile.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The mobile ions migrate towards oppositely charged electrodes when a potential difference is applied.'
    },
    {
      title: 'Non-polar nature of CCl4',
      a: 'Carbon tetrachloride (CCl₄) is a non-polar covalent molecule despite containing polar C-Cl bonds.',
      r: 'CCl₄ has a symmetrical tetrahedral geometry in which the individual C-Cl bond dipoles cancel each other out vectorially.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The net dipole moment of a symmetrical tetrahedral molecule with identical terminal atoms is zero.'
    },
    {
      title: 'Polarity of water molecule',
      a: 'Water (H₂O) is a polar covalent molecule with a significant dipole moment.',
      r: 'The water molecule has a bent (V-shaped) geometry and unequal electronegativity between oxygen and hydrogen, resulting in an uncancelled net dipole.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The two lone pairs on oxygen create an angular shape of 104.5°, preventing the two H-O bond dipoles from canceling.'
    },
    {
      title: 'Coordinate bond in ammonium ion',
      a: 'The ammonium ion (NH₄⁺) contains both covalent and coordinate covalent bonds.',
      r: 'An ammonia molecule (NH₃) donates its lone pair of electrons to an electron-deficient hydrogen ion (H⁺).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. NH₃ contains 3 normal covalent N-H bonds. The 4th N-H bond forms when nitrogen donates its lone pair to H⁺, forming a dative bond.'
    },
    {
      title: 'Coordinate bond in hydronium ion',
      a: 'A hydronium ion (H₃O⁺) has three covalent bonds, one of which is a coordinate bond.',
      r: 'A water molecule uses one of its two lone pairs on the oxygen atom to bond with a hydrogen ion (H⁺).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. H₂O possesses two lone pairs on oxygen. One lone pair is shared with H⁺ to complete the octet, forming the coordinate bond in H₃O⁺.'
    },
    {
      title: 'Low melting points of covalent compounds',
      a: 'Methane (CH₄) and carbon dioxide (CO₂) exist as gases with very low boiling points at room temperature.',
      r: 'Molecules of simple covalent substances are held together by weak intermolecular van der Waals forces.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Little thermal energy is required to overcome the weak intermolecular attractions between neutral covalent molecules.'
    },
    {
      title: 'Solubility of electrovalent compounds',
      a: 'Sodium chloride dissolves readily in water but is insoluble in organic solvents like benzene and carbon tetrachloride.',
      r: 'Water is a polar solvent with a high dielectric constant that weakens ionic bonds and hydrates the separated ions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The hydration energy released exceeds the lattice energy of NaCl. Non-polar solvents lack dipoles and cannot solvate the ions.'
    },
    {
      title: 'Formation of covalent bond between identical non-metals',
      a: 'Two chlorine atoms combine by sharing a pair of electrons to form a Cl₂ molecule.',
      r: 'Both chlorine atoms have equal electronegativity and require one electron to complete their stable octets.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since neither atom can take an electron from the other, mutual sharing of one electron pair establishes a non-polar single covalent bond.'
    },
    {
      title: 'Triple covalent bond in nitrogen molecule',
      a: 'A nitrogen molecule (N₂) contains a triple covalent bond and is chemically inert at room temperature.',
      r: 'Sharing three pairs of electrons results in very high bond dissociation energy (945 kJ/mol) between the nitrogen atoms.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The triple bond (one sigma, two pi bonds) holds the two N atoms tightly, requiring substantial energy to break.'
    },
    {
      title: 'Double covalent bond in oxygen molecule',
      a: 'An oxygen molecule (O₂) possesses a double covalent bond.',
      r: 'Each oxygen atom has 6 valence electrons and requires two electrons to achieve the neon configuration, sharing two electron pairs.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Oxygen shares 2 pairs of electrons, leaving two lone pairs on each atom.'
    },
    {
      title: 'Octet rule definition and limitation',
      a: 'All stable chemical molecules strictly obey the octet rule with 8 valence electrons.',
      r: 'Atoms combine by losing, gaining, or sharing electrons to achieve a noble gas electronic configuration.',
      ans: 'D',
      exp: 'Assertion is false because several molecules violate the octet rule, including BF₃ (incomplete octet with 6 electrons) and PCl₅ (expanded octet with 10 electrons). Reason is the general statement of chemical bonding.'
    },
    {
      title: 'Electrovalent bond formation requirement',
      a: 'An electrovalent bond is formed most readily between an element with low ionisation energy and an element with high electron affinity.',
      r: 'Low ionisation energy facilitates cation formation, while high electron affinity promotes anion formation with significant energy release.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. When the difference in electronegativity between the two bonding atoms is greater than 1.7, an ionic bond is favored.'
    },
    {
      title: 'Calcium oxide electron transfer',
      a: 'In the formation of calcium oxide (CaO), two electrons are transferred from calcium to oxygen.',
      r: 'Calcium (2,8,8,2) loses two electrons to achieve an argon octet, while oxygen (2,6) gains two electrons to achieve a neon octet.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Ca → Ca²⁺ + 2e⁻ and O + 2e⁻ → O²⁻, forming an ionic lattice held by divalent electrostatic attraction.'
    },
    {
      title: 'Magnesium chloride stoichiometry',
      a: 'One magnesium atom combines with two chlorine atoms to form MgCl₂.',
      r: 'Magnesium loses two electrons, whereas each chlorine atom can only accept one electron to complete its octet.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Mg → Mg²⁺ + 2e⁻; each Cl atom accepts 1 electron (2Cl + 2e⁻ → 2Cl⁻), maintaining electrical neutrality.'
    },
    {
      title: 'Polar covalent bond in hydrogen chloride',
      a: 'Dry hydrogen chloride gas is a polar covalent compound.',
      r: 'Chlorine is more electronegative than hydrogen, shifting the shared electron pair towards the chlorine atom and creating partial charges Hδ⁺-Clδ⁻.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The electronegativity difference (Cl=3.0, H=2.1) produces a permanent bond dipole.'
    },
    {
      title: 'Ionisation of HCl in water',
      a: 'An aqueous solution of hydrogen chloride conducts electricity and turns blue litmus red, whereas liquefied dry HCl does not conduct.',
      r: 'Water molecules ionise polar covalent HCl by hydration into hydronium (H₃O⁺) and chloride (Cl⁻) mobile ions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Dry HCl is purely molecular. The high dielectric constant and dipole interaction of water cause heterolytic cleavage of the H-Cl bond.'
    },
    {
      title: 'Non-electrolyte nature of pure covalent liquids',
      a: 'Pure liquid carbon tetrachloride (CCl₄) is a non-electrolyte.',
      r: 'Carbon tetrachloride consists of non-polar covalent molecules and produces no mobile ions in the liquid state.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Without ions or free electrons, non-polar covalent liquids cannot conduct an electric current.'
    },
    {
      title: 'Lone pair definition',
      a: 'A lone pair of electrons is a pair of valence electrons that is not shared with another atom in a covalent bond.',
      r: 'In an ammonia molecule, the nitrogen atom has three bonding pairs and one lone pair of electrons.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Nitrogen (2,5) shares 3 electrons with 3 hydrogen atoms, leaving 2 unshared electrons as one lone pair.'
    },
    {
      title: 'Coordinate bond vs ordinary covalent bond',
      a: 'Once formed, a coordinate covalent bond is identical in chemical behavior to a normal covalent bond.',
      r: 'In both coordinate and covalent bonds, a shared pair of electrons is held between the nuclei of the bonded atoms.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The distinction lies solely in the origin of the electron pair (one atom vs both atoms). Once established, the bond pair is indistinguishable.'
    },
    {
      title: 'Structure of hydroxyl ion',
      a: 'The hydroxyl ion (OH⁻) has three lone pairs of electrons on the oxygen atom.',
      r: 'When water self-ionises, the H-O bond breaks heterolytically and oxygen retains both electrons of the bonding pair.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Oxygen in H₂O had two lone pairs; gaining the bonding pair from H⁺ leaves oxygen with 3 lone pairs and a net negative charge.'
    },
    {
      title: 'Conditions for coordinate bond formation',
      a: 'A coordinate bond requires a donor atom with at least one lone pair and an acceptor atom with an incomplete valence shell.',
      r: 'The donor atom provides both electrons of the shared pair to complete the octet of the electron-deficient species.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Lewis base (donor) and Lewis acid (acceptor) interact to form a dative bond without electron transfer.'
    },
    {
      title: 'Hardness and brittleness of ionic solids',
      a: 'Ionic crystals are hard but brittle and shatter when struck with a hammer.',
      r: 'A mechanical blow causes like-charged ions in adjacent layers to shift into alignment, resulting in strong electrostatic repulsion that cleaves the crystal.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Shifting a layer aligns Na⁺ with Na⁺ and Cl⁻ with Cl⁻, forcing the lattice layers apart along cleavage planes.'
    },
    {
      title: 'Non-directional nature of electrovalent bonds',
      a: 'Electrovalent bonds are non-directional, whereas covalent bonds are directional.',
      r: 'Electrostatic force fields around spherical ions act equally in all directions, whereas covalent bonds form along the direction of overlapping electron orbitals.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. This explains why covalent compounds show stereoisomerism and fixed bond angles, while ionic crystals form packed geometric lattices.'
    },
    {
      title: 'Number of covalent bonds in methane',
      a: 'A methane (CH₄) molecule contains four single covalent bonds.',
      r: 'A carbon atom has four valence electrons and shares one electron with each of four hydrogen atoms to achieve a stable octet.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Carbon forms 4 C-H single bonds with a tetrahedral angle of 109.5°.'
    },
    {
      title: 'Ethene double bond composition',
      a: 'An ethene (C₂H₄) molecule contains a total of six shared electron pairs.',
      r: 'Ethene possesses four C-H single covalent bonds and one C=C double covalent bond.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 4 single C-H bonds (4 pairs) + 1 double C=C bond (2 pairs) = 6 shared electron pairs (12 shared electrons).'
    },
    {
      title: 'Ethyne triple bond composition',
      a: 'An ethyne (C₂H₂) molecule contains five covalent bonds.',
      r: 'Ethyne has two single C-H bonds and one triple C≡C bond between the two carbon atoms.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2 single C-H bonds (2 pairs) + 1 triple C≡C bond (3 pairs) = 5 covalent bonds total.'
    },
    {
      title: 'Volatile nature of organic covalent liquids',
      a: 'Ethanol and ether evaporate quickly at room temperature.',
      r: 'Intermolecular forces in covalent liquids are significantly weaker than the ionic bonds in electrovalent salts.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Weak dipole-dipole or dispersion forces require little ambient heat to allow molecules to escape into the vapor phase.'
    },
    {
      title: 'Electronegativity difference and bond type',
      a: 'When the electronegativity difference between two bonded atoms is zero, the bond is purely non-polar covalent.',
      r: 'The shared electron pair is attracted equally by both identical nuclei and remains symmetrically positioned midway between them.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. In homonuclear diatomic molecules like H₂, Cl₂, and O₂, ΔEN = 0 and no dipole moment exists.'
    },
    {
      title: 'Lead bromide molten conduction',
      a: 'Solid lead bromide (PbBr₂) does not conduct electricity, but molten PbBr₂ conducts and undergoes electrolysis.',
      r: 'Melting provides thermal energy to overcome electrostatic forces, releasing mobile Pb²⁺ and Br⁻ ions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Conduction in molten PbBr₂ is ionic, with Pb²⁺ moving to the cathode and Br⁻ moving to the anode.'
    },
    {
      title: 'Sodium chloride vs hydrogen chloride bonding',
      a: 'NaCl is ionic while HCl is covalent, even though both contain chlorine combined with a Group 1 element.',
      r: 'Hydrogen has a much higher electronegativity (2.1) than sodium (0.9), resulting in electron sharing with chlorine rather than complete transfer.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The electronegativity difference for Na-Cl is 2.1 (ionic), whereas for H-Cl it is 0.9 (polar covalent).'
    },
    {
      title: 'Ammonia solubility in water',
      a: 'Ammonia gas (NH₃) is extremely soluble in water.',
      r: 'Polar ammonia molecules form strong hydrogen bonds with polar water molecules and react to produce ammonium and hydroxide ions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Like dissolves like: polar NH₃ readily forms hydrogen bonds with H₂O, producing NH₄⁺ and OH⁻.'
    },
    {
      title: 'Lewis electron-dot structure representation',
      a: 'In a Lewis electron-dot symbol, only the valence electrons of an atom are shown.',
      r: 'Only outer valence electrons participate in chemical bonding, while inner core electrons remain unaffected.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Chemical properties and bonding are determined solely by valence shell configuration.'
    },
    {
      title: 'Linear geometry of carbon dioxide',
      a: 'Carbon dioxide (CO₂) has a zero net dipole moment.',
      r: 'Carbon dioxide has a linear O=C=O structure where two equal C=O bond dipoles point in opposite directions (180°) and cancel.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Vector addition of two equal and opposite bond dipoles produces a net dipole of zero.'
    },
    {
      title: 'Coordinate bond representation',
      a: 'A coordinate bond is conventionally represented by an arrow (→) pointing from the donor atom to the acceptor atom.',
      r: 'The arrow indicates that both electrons in the shared pair originated from the donor atom.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The arrow symbol denotes the asymmetric origin of the bonding pair.'
    },
    {
      title: 'Lattice energy and ionic bond strength',
      a: 'Magnesium oxide (MgO) has a higher lattice energy and melting point (2852°C) than sodium chloride (801°C).',
      r: 'Electrostatic force between ions is directly proportional to the product of ionic charges (Mg²⁺ and O²⁻ have charges of ±2, compared to ±1 in Na⁺ and Cl⁻).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. By Coulomb law, F ∝ (q₁q₂)/r². Quadrupled charge product and smaller ionic radii give MgO vastly superior lattice energy.'
    },
    {
      title: 'Dative bond in carbon monoxide',
      a: 'A carbon monoxide (CO) molecule contains a coordinate covalent bond from oxygen to carbon.',
      r: 'After sharing two pairs of electrons, carbon still lacks an octet; oxygen donates a lone pair into carbon empty orbital to complete its octet.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The CO molecule has a triple bond: two normal covalent bonds and one coordinate bond (C ⇇ O).'
    },
    {
      title: 'Stability of noble gas configuration',
      a: 'Helium achieves chemical stability with a duplet configuration of two electrons.',
      r: 'The K shell (first shell, n=1) has a maximum capacity of two electrons and is completely filled in helium.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. For the first principal energy level, a duplet represents a complete, closed shell of maximum stability.'
    },
    {
      title: 'Polar covalent solvent rule',
      a: 'Electrovalent compounds are soluble in petrol and kerosene.',
      r: 'Petrol and kerosene are non-polar organic solvents that cannot break the strong electrostatic attractions of an ionic crystal lattice.',
      ans: 'D',
      exp: 'Assertion is false; electrovalent compounds are insoluble in non-polar solvents like petrol and kerosene. Reason is a true statement explaining why they do not dissolve.'
    }
  ],

  acids_bases_and_salts: [
    {
      title: 'Basicity of orthophosphorous acid',
      a: 'Orthophosphorous acid (H₃PO₃) is a dibasic acid, not a tribasic acid.',
      r: 'In H₃PO₃, only two hydrogen atoms are bonded to oxygen atoms as ionisable -OH groups, while the third hydrogen is bonded directly to phosphorus.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Only hydrogen atoms attached to electronegative oxygen atoms ionise in aqueous solution to yield H₃O⁺ ions.'
    },
    {
      title: 'Basicity of orthophosphoric acid',
      a: 'Orthophosphoric acid (H₃PO₄) is a tribasic acid.',
      r: 'All three hydrogen atoms in H₃PO₄ are present as ionisable hydroxyl (-OH) groups attached to the central phosphorus atom.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. H₃PO₄ ionises in three steps in water, yielding 3 moles of H₃O⁺ per mole of acid.'
    },
    {
      title: 'Basicity of hypophosphorous acid',
      a: 'Hypophosphorous acid (H₃PO₂) is a monobasic acid.',
      r: 'H₃PO₂ contains only one P-OH bond and two P-H bonds; only the oxygen-linked hydrogen can ionise in water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. P-H bonds are non-polar and do not release protons in aqueous solution.'
    },
    {
      title: 'Basicity of acetic acid',
      a: 'Acetic acid (CH₃COOH) has four hydrogen atoms but is a monobasic acid.',
      r: 'Only the hydrogen atom in the carboxyl (-COOH) group ionises in water; the three hydrogen atoms of the methyl group are non-ionisable.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. CH₃COOH ⇌ CH₃COO⁻ + H⁺ in water, providing only one replaceable hydrogen ion per molecule.'
    },
    {
      title: 'Acidity of a base definition',
      a: 'Aluminium hydroxide, Al(OH)₃, is a triacidic base.',
      r: 'The acidity of a base is the number of replaceable hydroxyl (OH⁻) ions produced per molecule of the base in aqueous solution.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. One mole of Al(OH)₃ neutralises three moles of a monobasic acid like HCl.'
    },
    {
      title: 'Strong acid vs weak acid distinction',
      a: 'Hydrochloric acid is a strong acid, whereas acetic acid is a weak acid.',
      r: 'Hydrochloric acid completely ionises in dilute aqueous solution, while acetic acid undergoes only partial ionisation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Strong acids dissociate ~100% into ions; weak acids remain predominantly as undissociated molecules in dynamic equilibrium with their ions.'
    },
    {
      title: 'Alkali definition',
      a: 'All alkalis are bases, but not all bases are alkalis.',
      r: 'An alkali is specifically a water-soluble base that furnishes OH⁻ ions in aqueous solution, whereas insoluble metallic hydroxides like Cu(OH)₂ are bases but not alkalis.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Soluble bases like NaOH and KOH are alkalis; insoluble bases like Fe(OH)₃ and Cu(OH)₂ are not alkalis.'
    },
    {
      title: 'Action of dilute acid on carbonates',
      a: 'Dilute hydrochloric acid reacts with calcium carbonate with brisk effervescence.',
      r: 'Carbonates react with dilute acids to liberate carbon dioxide gas, which turns lime water milky.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. The rapid release of CO₂ produces brisk effervescence.'
    },
    {
      title: 'Action of dilute acid on sulphites',
      a: 'When dilute sulphuric acid is added to sodium sulphite, a gas with the choking smell of burning sulphur is evolved.',
      r: 'Sulphur dioxide (SO₂) gas is liberated, which turns acidified potassium dichromate solution from orange to green.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Na₂SO₃ + H₂SO₄ → Na₂SO₄ + H₂O + SO₂↑. SO₂ reduces orange Cr₂O₇²⁻ to green Cr³⁺.'
    },
    {
      title: 'Action of dilute acid on sulphides',
      a: 'Adding dilute hydrochloric acid to iron(II) sulphide produces a gas with a rotten egg smell.',
      r: 'Hydrogen sulphide (H₂S) gas is liberated, which turns moist lead acetate paper silvery black.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. FeS + 2HCl → FeCl₂ + H₂S↑. H₂S reacts with (CH₃COO)₂Pb to precipitate black PbS.'
    },
    {
      title: 'Formation of acid salt vs normal salt',
      a: 'Sodium hydrogen sulphate (NaHSO₄) is an acid salt, whereas sodium sulphate (Na₂SO₄) is a normal salt.',
      r: 'An acid salt is formed by the partial replacement of ionisable hydrogen atoms of a polybasic acid by a metal ion.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. H₂SO₄ has two replaceable H⁺ ions. Replacing one yields NaHSO₄; replacing both yields Na₂SO₄.'
    },
    {
      title: 'Acidic nature of NaHSO4 solution',
      a: 'An aqueous solution of sodium hydrogen sulphate turns blue litmus red.',
      r: 'NaHSO₄ ionises in water to produce H⁺ (or H₃O⁺) ions: NaHSO₄ → Na⁺ + H⁺ + SO₄²⁻.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The presence of the replaceable hydrogen ion gives the solution an acidic pH and turns blue litmus red.'
    },
    {
      title: 'Normal salt from monobasic acid',
      a: 'Hydrochloric acid (HCl) cannot form an acid salt.',
      r: 'HCl is a monobasic acid and has only one replaceable hydrogen atom per molecule.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Only polybasic acids (dibasic or tribasic) can form acid salts through incomplete neutralisation.'
    },
    {
      title: 'Insoluble salt preparation by precipitation',
      a: 'Barium sulphate is prepared in the laboratory by precipitation (double decomposition), not by direct neutralisation.',
      r: 'Barium sulphate is insoluble in water and precipitates immediately when solutions of barium chloride and sodium sulphate are mixed.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄↓ + 2NaCl(aq). Precipitation is the standard method for preparing insoluble salts.'
    },
    {
      title: 'Soluble salt preparation by titration',
      a: 'Sodium chloride is prepared in the laboratory by titrating sodium hydroxide against hydrochloric acid using phenolphthalein.',
      r: 'Both the reactants (NaOH, HCl) and the product salt (NaCl) are soluble in water, necessitating an indicator to detect the exact neutralisation point.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Titration allows determining the stoichiometric equivalence point before evaporating the neutral solution to crystallise NaCl.'
    },
    {
      title: 'Insoluble base and acid reaction',
      a: 'Copper(II) sulphate crystals can be prepared by reacting black copper(II) oxide with dilute sulphuric acid.',
      r: 'An insoluble basic oxide neutralises dilute sulphuric acid on gentle warming to form soluble copper sulphate and water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l). Excess insoluble CuO is filtered off, leaving pure blue CuSO₄ solution.'
    },
    {
      title: 'Why copper does not react with dilute HCl',
      a: 'Copper metal does not react with dilute hydrochloric acid to produce hydrogen gas.',
      r: 'Copper lies below hydrogen in the electrochemical (activity) series and cannot displace hydrogen from dilute non-oxidising acids.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Elements with standard reduction potentials higher than hydrogen cannot reduce H⁺ to H₂.'
    },
    {
      title: 'Why lead reacts sluggishly with dilute H2SO4',
      a: 'Lead appears to stop reacting after a few seconds when treated with dilute sulphuric acid.',
      r: 'An insoluble coating of lead sulphate (PbSO₄) forms on the surface of lead, preventing further contact with the acid.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The insoluble crust of PbSO₄ halts the reaction (passivation).'
    },
    {
      title: 'Why lead reacts sluggishly with dilute HCl',
      a: 'The reaction between lead metal and dilute hydrochloric acid ceases prematurely.',
      r: 'Lead(II) chloride (PbCl₂) is insoluble in cold water and forms a protective barrier over the metal surface.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. PbCl₂ precipitates on the metal in cold acid; it only dissolves upon heating.'
    },
    {
      title: 'Efflorescence definition and example',
      a: 'Washing soda crystals (Na₂CO₃·10H₂O) crumble to a white powder when exposed to dry air.',
      r: 'Washing soda is an efflorescent substance that loses its water of crystallisation because its crystal vapor pressure exceeds atmospheric moisture vapor pressure.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Na₂CO₃·10H₂O loses 9 molecules of water to form a monohydrate powder: Na₂CO₃·H₂O.'
    },
    {
      title: 'Deliquescence definition and example',
      a: 'Solid anhydrous calcium chloride (CaCl₂) turns into a puddle of liquid when left exposed to humid air.',
      r: 'Calcium chloride is a deliquescent substance that absorbs moisture from the air and dissolves in the absorbed water to form a concentrated solution.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Deliquescent salts have vapor pressures significantly lower than the partial pressure of water vapor in air.'
    },
    {
      title: 'Hygroscopic substances vs deliquescent',
      a: 'Concentrated sulphuric acid is hygroscopic, but not deliquescent.',
      r: 'Hygroscopic substances absorb moisture from the atmosphere without changing their physical state, whereas deliquescent solids dissolve in the absorbed moisture.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Concentrated H₂SO₄ is already a liquid; it absorbs moisture and becomes diluted without undergoing a phase change.'
    },
    {
      title: 'pH scale logarithmic relationship',
      a: 'A solution with pH = 3 has ten times higher hydronium ion concentration than a solution with pH = 4.',
      r: 'pH is defined as the negative logarithm to the base 10 of the hydronium ion concentration: pH = -log₁₀[H₃O⁺].',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Each decrease of 1 pH unit represents a 10-fold increase in [H₃O⁺].'
    },
    {
      title: 'Effect of dilution on pH of an acid',
      a: 'Diluting an aqueous solution of an acid increases its pH towards 7.',
      r: 'Dilution decreases the concentration of H₃O⁺ ions per unit volume of the solution.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Lower [H₃O⁺] corresponds to a higher numerical value of -log₁₀[H₃O⁺], approaching 7 at infinite dilution.'
    },
    {
      title: 'Effect of dilution on pH of an alkali',
      a: 'Adding water to an aqueous solution of sodium hydroxide decreases its pH towards 7.',
      r: 'Dilution reduces the concentration of OH⁻ ions per unit volume, which increases the [H₃O⁺] concentration through the ionic product of water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. [H₃O⁺][OH⁻] = 10⁻¹⁴; decreasing [OH⁻] increases [H₃O⁺], lowering pH from e.g. 13 towards 7.'
    },
    {
      title: 'Universal indicator advantage over litmus',
      a: 'Universal indicator is preferred over litmus paper for measuring the strength of acids and bases.',
      r: 'Litmus paper only indicates whether a solution is acidic or alkaline, whereas universal indicator displays a full spectrum of colors corresponding to specific pH values.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Universal indicator is a mixture of organic dyes that shows red for pH 1-2, green for pH 7, and purple/violet for pH 13-14.'
    },
    {
      title: 'Why sodium cannot be used with dilute acids in laboratory',
      a: 'Sodium metal is never used with dilute acids to prepare hydrogen gas in school laboratories.',
      r: 'The reaction between sodium and dilute acids is violently explosive and highly exothermic, igniting the liberated hydrogen.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Granulated zinc with dilute HCl or H₂SO₄ is preferred for safe, steady hydrogen evolution.'
    },
    {
      title: 'Concentrated sulphuric acid non-volatile nature',
      a: 'Concentrated sulphuric acid is used to prepare volatile acids like HCl and HNO₃ from their respective salts.',
      r: 'Concentrated sulphuric acid has a high boiling point (338°C) and acts as a non-volatile acid that displaces more volatile acids upon heating.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. NaCl + H₂SO₄ → NaHSO₄ + HCl↑ (HCl boils at -85°C and readily escapes as vapor).'
    },
    {
      title: 'Why concentrated nitric acid cannot prepare HCl',
      a: 'Concentrated nitric acid cannot replace concentrated sulphuric acid in the laboratory preparation of HCl.',
      r: 'Nitric acid is volatile and would vaporise along with HCl, and it also oxidises HCl to chlorine gas.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. HNO₃ would contaminate the HCl gas with nitric acid vapors and toxic nitrosyl chloride/chlorine.'
    },
    {
      title: 'Direct combination for preparing anhydrous iron(III) chloride',
      a: 'Anhydrous iron(III) chloride (FeCl₃) is prepared by direct combination (synthesis), not by reacting iron with dilute HCl.',
      r: 'Reacting iron with dilute hydrochloric acid produces iron(II) chloride (FeCl₂) because liberated hydrogen gas prevents oxidation to iron(III).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. 2Fe + 3Cl₂ → 2FeCl₃ (direct synthesis). Fe + 2HCl → FeCl₂ + H₂↑ (reducing atmosphere of H₂ prevents FeCl₃ formation).'
    },
    {
      title: 'Water of crystallisation definition',
      a: 'Copper(II) sulphate pentahydrate crystals turn from blue to white upon strong heating.',
      r: 'Heating drives off the five molecules of water of crystallisation, forming anhydrous white copper(II) sulphate.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. CuSO₄·5H₂O(blue) → CuSO₄(white) + 5H₂O↑. The blue color is due to hydrated Cu²⁺ coordination complexes.'
    },
    {
      title: 'Hydrolysis of salts of weak acid and strong base',
      a: 'An aqueous solution of sodium carbonate (Na₂CO₃) turns red litmus paper blue.',
      r: 'Sodium carbonate undergoes salt hydrolysis in water, producing a strong base (NaOH) and a weak acid (H₂CO₃), leaving an excess of OH⁻ ions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. CO₃²⁻ + 2H₂O ⇌ H₂CO₃ + 2OH⁻; the solution is alkaline with pH > 7.'
    },
    {
      title: 'Hydrolysis of salts of strong acid and weak base',
      a: 'An aqueous solution of ammonium chloride (NH₄Cl) is acidic to litmus.',
      r: 'NH₄Cl undergoes hydrolysis to produce strong hydrochloric acid and weak ammonium hydroxide, yielding an excess of H₃O⁺ ions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. NH₄⁺ + H₂O ⇌ NH₄OH + H⁺; the presence of free H⁺ makes the solution acidic with pH < 7.'
    },
    {
      title: 'Neutral salt solution from strong acid and strong base',
      a: 'An aqueous solution of potassium nitrate (KNO₃) has a pH of 7.',
      r: 'KNO₃ is formed from strong potassium hydroxide and strong nitric acid; neither K⁺ nor NO₃⁻ undergoes hydrolysis.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Salts of strong acids and strong bases yield neutral solutions that do not alter the color of litmus.'
    },
    {
      title: 'Basic salt formation',
      a: 'Basic lead chloride, Pb(OH)Cl, is classified as a basic salt.',
      r: 'A basic salt is formed by the partial replacement of hydroxyl ions of a diacidic or triacidic base by an acid radical.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Pb(OH)₂ + HCl → Pb(OH)Cl + H₂O. The presence of the unneutralised -OH group makes it a basic salt.'
    },
    {
      title: 'Amphoteric hydroxide reaction with alkali',
      a: 'Zinc hydroxide dissolves in excess sodium hydroxide solution.',
      r: 'Zinc hydroxide is an amphoteric hydroxide that reacts with excess alkali to form a soluble complex salt, sodium zincate (Na₂ZnO₂).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Zn(OH)₂ + 2NaOH → Na₂ZnO₂ + 2H₂O. The precipitate dissolves to form a clear colorless solution.'
    },
    {
      title: 'Dehydrating action vs drying action of H2SO4',
      a: 'Concentrated sulphuric acid turns blue copper sulphate crystals into a white anhydrous powder.',
      r: 'Concentrated sulphuric acid acts as a powerful dehydrating agent, chemically removing the water of crystallisation from hydrated salts.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Dehydration involves the removal of chemically combined water molecules, distinct from absorbing surface moisture.'
    },
    {
      title: 'Charring of sugar by concentrated H2SO4',
      a: 'Adding concentrated sulphuric acid to cane sugar produces a spongy black mass of carbon accompanied by steam.',
      r: 'Concentrated sulphuric acid dehydrates cane sugar (C₁₂H₂₂O₁₁) by removing hydrogen and oxygen in the exact ratio of water (2:1).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. C₁₂H₂₂O₁₁ → 12C + 11H₂O. The intense heat of hydration boils the water into steam, leaving spongy sugar charcoal.'
    },
    {
      title: 'Action of heat on calcium hydrogen carbonate',
      a: 'Temporary hardness in water containing Ca(HCO₃)₂ can be removed by simple boiling.',
      r: 'Heating decomposes soluble calcium hydrogen carbonate into insoluble calcium carbonate precipitate, water, and carbon dioxide.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑. Insoluble CaCO₃ is filtered out, softening the water.'
    },
    {
      title: 'Acidic nature of non-metal oxides',
      a: 'Carbon monoxide (CO) turns moist blue litmus red.',
      r: 'All oxides of non-metals are acidic oxides.',
      ans: 'D',
      exp: 'Assertion is false; carbon monoxide is a neutral oxide and has no effect on litmus. Reason is false; several non-metallic oxides like CO, NO, and N₂O are neutral, not acidic.'
    }
  ]
};
