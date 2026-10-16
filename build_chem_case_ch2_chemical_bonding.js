// build_chem_case_ch2_chemical_bonding.js
// 50 Case-Based MCQs for ICSE Class 10 Chemistry: Chapter 2 - Chemical Bonding

const fs = require('fs');
const path = require('path');
const { makeChemCase } = require('./chem_case_helper');

const chapter = "Chemical Bonding";
const cases = [];

cases.push(makeChemCase(
  chapter, 1, "Thermodynamics of Sodium Chloride Crystal Lattice", "Lattice Energy and Born-Haber Cycle",
  "A chemical engineer studies the formation of solid sodium chloride from gaseous ions: Na⁺(g) + Cl⁻(g) → NaCl(s). The ionisation energy of sodium requires +496 kJ/mol, while the electron affinity of chlorine releases only -349 kJ/mol, giving a net endothermic deficit of +147 kJ/mol. Despite this deficit, the overall reaction between sodium metal and chlorine gas is violently exothermic (ΔH° = -411 kJ/mol).",
  "What thermodynamic energy component compensates for the initial endothermic cost and drives the spontaneous synthesis of sodium chloride?",
  "The heat of evaporation of chlorine gas.",
  "The immense lattice energy (-788 kJ/mol) released when oppositely charged Na⁺ and Cl⁻ ions condense into a three-dimensional cubic crystal lattice held by omnidirectional electrostatic forces.",
  "The magnetic attraction between atomic nuclei.",
  "The formation of covalent bonds between sodium and chlorine.",
  "B",
  "Although removing an electron from sodium and transferring it to chlorine requires net energy (+147 kJ/mol), when the gaseous Na⁺ and Cl⁻ ions come together to form an alternating 3D face-centered cubic lattice, a massive amount of electrostatic potential energy called Lattice Energy (ΔH_lattice = -788 kJ/mol) is released. This large negative enthalpy easily overwhelms the ionization penalty, resulting in a strongly exothermic and spontaneous reaction."
));

cases.push(makeChemCase(
  chapter, 2, "Lattice Energy Comparison: MgO vs NaCl", "Coulomb's Law and Ionic Charge Multipliers",
  "A materials scientist compares the melting points of two ionic solids having the exact same rock-salt crystal structure and similar inter-ionic distances: Sodium Chloride (NaCl) melts at 801°C, while Magnesium Oxide (MgO) melts at 2852°C. Born-Haber calculations show that the lattice energy of MgO (-3791 kJ/mol) is nearly five times greater than that of NaCl (-788 kJ/mol).",
  "Based on Coulomb's law of electrostatics, why is the lattice energy of MgO so dramatically higher than that of NaCl?",
  "Magnesium oxide contains four covalent bonds.",
  "Electrostatic force is proportional to the product of ionic charges (q₁ × q₂); MgO has divalent ions (Mg²⁺ and O²⁻, product = 4), whereas NaCl has univalent ions (Na⁺ and Cl⁻, product = 1), quadrupling the attractive force.",
  "Sodium is a radioactive element that melts under atmospheric pressure.",
  "Magnesium has more neutrons in its nucleus than sodium.",
  "B",
  "According to Coulomb's Law, lattice energy is proportional to (z₁ × z₂)/r₀, where z₁ and z₂ are the ionic charges and r₀ is the internuclear distance. In NaCl, z₁ = +1 and z₂ = -1 (product = 1). In MgO, z₁ = +2 and z₂ = -2 (product = 4). Since the inter-ionic distances are comparable (NaCl: 282 pm, MgO: 212 pm), the quadrupled charge product causes the electrostatic attraction in MgO to be nearly four to five times stronger, yielding a colossal lattice energy (-3791 kJ/mol) and an ultra-high melting point (2852°C)."
));

cases.push(makeChemCase(
  chapter, 3, "All Three Bond Types in Ammonium Chloride", "Coexistence of Ionic, Covalent, and Coordinate Bonds",
  "An ICSE chemistry teacher asks students to analyze the bonding in solid Ammonium Chloride (NH₄Cl). A spectroscopic investigation reveals that the crystal contains distinct ammonium cations (NH₄⁺) and chloride anions (Cl⁻). Within each ammonium ion, four hydrogen atoms are attached to a central nitrogen atom.",
  "Which three distinct types of chemical bonds are present within the solid Ammonium Chloride compound?",
  "Only ionic bonds throughout the entire crystal lattice.",
  "Ionic bond between NH₄⁺ and Cl⁻; three polar covalent bonds between N and three H atoms; and one coordinate (dative) covalent bond between the N lone pair and H⁺.",
  "Metallic bonds between nitrogen and chlorine; hydrogen bonds between ammonia molecules.",
  "Double covalent bonds between nitrogen and chlorine.",
  "B",
  "Ammonium chloride contains: (1) Three polar covalent single bonds between nitrogen and three hydrogen atoms in the original ammonia molecule (sharing one electron each); (2) One coordinate (dative) covalent bond formed when the lone pair on nitrogen is donated into the empty 1s orbital of a hydrogen ion (H⁺); (3) An electrovalent (ionic) bond between the polyatomic NH₄⁺ cation and the Cl⁻ chloride anion."
));

cases.push(makeChemCase(
  chapter, 4, "Formation of Hydronium Ion ($H_3O^+$)", "Lone Pair Donation and Dative Covalent Bonding",
  "When dry hydrogen chloride gas is bubbled into liquid water, electrical conductivity surges. Physical chemists note that isolated bare protons (H⁺) cannot exist freely in aqueous solution because a bare proton is an extremely tiny subatomic particle (radius ~10⁻¹⁵ m) with infinite charge density. Instead, H⁺ immediately binds to a water molecule.",
  "How is the hydronium ion (H₃O⁺) formed, and what type of bond joins the incoming proton to the water molecule?",
  "The proton strips all electrons from oxygen, forming a metallic bond.",
  "Oxygen in the water molecule has two lone pairs of electrons; it donates one of these lone pairs into the empty 1s orbital of the H⁺ ion to form a coordinate (dative) covalent bond.",
  "The hydrogen ion forms an ionic bond with the hydrogen atoms of water.",
  "Oxygen undergoes nuclear fusion with the proton to form fluorine.",
  "B",
  "A water molecule (H₂O) has two shared bonding pairs and two unshared lone pairs on the central oxygen atom (sp³ hybridised). When an acid releases a proton (H⁺, having an empty 1s orbital), oxygen acts as a Lewis base and donates one of its lone pairs to the proton. The resulting bond is a coordinate covalent bond (O → H⁺). Once formed, all three O-H bonds in H₃O⁺ are identical in length and energy due to resonance and charge delocalisation."
));

cases.push(makeChemCase(
  chapter, 5, "Inertness of Nitrogen Gas ($N_2$)", "Triple Covalent Bond and Dissociation Energy",
  "In industrial manufacturing and food packaging, gaseous Nitrogen (N₂) is routinely used to create an inert, non-reactive protective atmosphere to prevent oxidation of potato chips and preserve pharmaceutical vials at room temperature. Nitrogen remains completely chemically unreactive under standard conditions, requiring temperatures exceeding 1000°C or electric sparks to react with oxygen or hydrogen.",
  "What molecular bonding feature confers such extraordinary chemical inertness on diatomic Nitrogen at room temperature?",
  "Nitrogen atoms are held by weak Van der Waals forces that absorb no energy.",
  "The two nitrogen atoms are joined by a triple covalent bond (one σ and two π bonds) with an exceptionally high bond dissociation energy (945 kJ/mol) that requires extreme thermal energy to break.",
  "Nitrogen is a noble gas with an atomic number of 10.",
  "Nitrogen molecules have an ionic bond that repels oxygen molecules.",
  "B",
  "Each nitrogen atom (1s² 2s² 2p³) requires 3 electrons to complete its octet. In the N₂ molecule, the two atoms share three pairs of electrons, forming a triple bond (:N≡N: consisting of one strong σ bond and two π bonds). Because of the small atomic size of nitrogen, the overlap is very effective, resulting in an exceptionally short bond length (1.098 Å) and a massive bond dissociation energy of 945 kJ/mol. This immense activation energy barrier makes N₂ virtually inert at ambient temperatures."
));

cases.push(makeChemCase(
  chapter, 6, "Dipole Moment of $CO_2$ vs $H_2O$", "Molecular Geometry and Vector Sum of Bond Dipoles",
  "A physical chemistry student measures the electric dipole moments of Carbon Dioxide (CO₂) and Water (H₂O). In both molecules, the bonds are polar covalent: ΔEN(C-O) = 1.0 and ΔEN(H-O) = 1.4. However, experimental dielectric testing shows that Carbon Dioxide has a net dipole moment of exactly μ = 0 D, while Water has a large permanent dipole moment of μ = 1.85 D.",
  "Why is Carbon Dioxide completely non-polar while Water is a strongly polar molecule?",
  "Carbon is more metallic than hydrogen.",
  "CO₂ is a linear molecule (O=C=O, 180°), so the two equal C=O bond dipole vectors point in exactly opposite directions and cancel out completely; H₂O has a bent/V-shaped geometry (104.5°) due to two lone pairs on oxygen, causing the O–H dipole vectors to add up constructively.",
  "Oxygen atoms in CO₂ do not attract electrons.",
  "Water contains free mobile ions that generate an electric field.",
  "B",
  "Dipole moment is a vector quantity (μ = q × d). Carbon dioxide is a linear molecule (O=C=O) with a bond angle of 180°. The two individual C=O bond dipoles are equal in magnitude but oriented in exactly opposite directions; their vector sum is zero (μ_net = 0 D). In contrast, water has a bent geometry with a bond angle of 104.5° because of repulsions between the two lone pairs on oxygen. The two O-H bond dipoles do not cancel each other; instead, they reinforce each other, resulting in a large net dipole moment."
));

cases.push(makeChemCase(
  chapter, 7, "Dipole Moment Paradox: $NH_3$ vs $NF_3$", "Lone Pair vs Bond Pair Dipole Alignment",
  "In an advanced molecular structure seminar, a professor compares Ammonia (NH₃) and Nitrogen Trifluoride (NF₃). Both molecules have an identical trigonal pyramidal geometry with one lone pair on nitrogen. Fluorine is the most electronegative element (4.0 vs N: 3.0), whereas Hydrogen has a lower electronegativity than Nitrogen (H: 2.1 vs N: 3.0). Yet, the measured dipole moment of NH₃ is 1.47 D, while that of NF₃ is only 0.24 D.",
  "Why is the dipole moment of NH₃ much larger than that of NF₃, despite the N–F bonds being far more polar than N–H bonds?",
  "Ammonia contains an ionic bond that generates electricity.",
  "In NH₃, the N–H bond dipoles point toward nitrogen in the same direction as the lone pair dipole, reinforcing each other; in NF₃, the highly electronegative fluorine atoms pull electron density downward, opposing and canceling the upward dipole of the lone pair.",
  "Fluorine atoms in NF₃ have zero electrons.",
  "Nitrogen trifluoride is a planar molecule with 120° angles.",
  "B",
  "Both molecules have a lone pair on nitrogen whose orbital dipole points away from the nucleus. In NH₃, Nitrogen (3.0) is more electronegative than Hydrogen (2.1), so all three N-H bond dipoles point toward the nitrogen atom, adding constructively to the lone pair dipole (reinforcement → μ = 1.47 D). In NF₃, Fluorine (4.0) is more electronegative than Nitrogen (3.0), so the three N-F bond dipoles point away from nitrogen toward the fluorines, opposing the lone pair dipole vector (cancellation → μ = 0.24 D)."
));

cases.push(makeChemCase(
  chapter, 8, "Carbon Tetrachloride ($CCl_4$) Symmetrical Non-Polarity", "Tetrahedral Symmetry and Dipole Cancellation",
  "Carbon tetrachloride (CCl₄) is widely utilized as a non-polar solvent for dissolving fats, oils, and greases. A student notes that Chlorine is much more electronegative than Carbon (3.0 vs 2.5), meaning each individual C–Cl bond is polar with a dipole moment of ~1.5 D. However, liquid CCl₄ does not deflect when brought near an electrically charged Teflon rod.",
  "Why does Carbon Tetrachloride have a net molecular dipole moment of zero despite containing four strongly polar bonds?",
  "The chlorine atoms cancel each other by transferring electrons to carbon.",
  "CCl₄ has a regular tetrahedral geometry (sp³ hybridised, 109.5° bond angles) with four identical C–Cl bonds; the symmetrical spatial arrangement causes the vector sum of the four bond dipoles to equal exactly zero.",
  "The C–Cl bond is non-polar because carbon and chlorine share the same group.",
  "Carbon tetrachloride undergoes rapid rotation that destroys all electric fields.",
  "B",
  "In CCl₄, the central carbon atom is sp³ hybridised, forming a regular tetrahedral geometry with four equivalent C-Cl bonds oriented at 109°28'. Although each individual C-Cl bond is polar, the tetrahedral symmetry is completely isotropic. The vector resultant of any three C-Cl bond dipoles is exactly equal in magnitude and opposite in direction to the fourth C-Cl bond dipole, causing complete vector cancellation (μ_net = 0 D)."
));

cases.push(makeChemCase(
  chapter, 9, "Dielectric Constant of Water and Ionic Dissolution", "Coulombic Force Attenuation in Polar Solvents",
  "An electrochemist dissolves crystals of Sodium Chloride in water (dielectric constant ε_r ≈ 80) and in liquid Benzene (dielectric constant ε_r ≈ 2.3). In water, the salt crystals dissolve instantly to yield a conducting electrolytic solution. In benzene, the salt crystals remain completely undissolved as a solid sediment.",
  "How does the high dielectric constant of water facilitate the dissociation and dissolution of electrovalent ionic lattices?",
  "Water chemically oxidises sodium chloride into sodium hydroxide and chlorine gas.",
  "Water attenuates (reduces) the electrostatic attractive forces between Na⁺ and Cl⁻ ions by a factor of 80; polar water molecules then surround the separated ions (hydration), releasing hydration enthalpy that overcomes the crystal's lattice energy.",
  "Benzene is an acid that neutralizes sodium chloride.",
  "Water dissolves all solids because it is a lighter liquid than benzene.",
  "B",
  "Coulomb's Law in a dielectric medium is F = (1 / 4πε₀ε_r) × (q₁q₂ / r²). Because water has a high dielectric constant (ε_r ≈ 80), it reduces the electrostatic attraction between Na⁺ and Cl⁻ ions to 1/80th of its value in a vacuum or air. Thermal agitation easily separates the weakened ions. Once separated, water dipoles orient themselves around the ions (oxygen δ- toward Na⁺, hydrogen δ+ toward Cl⁻), releasing significant hydration enthalpy (ΔH_hyd = -784 kJ/mol) that stabilizes the solution."
));

cases.push(makeChemCase(
  chapter, 10, "Electrical Conductivity: Solid vs Molten / Aqueous NaCl", "Mobile Ions vs Rigid Crystal Lattice",
  "A student constructs a conductivity apparatus with a 6V battery, light bulb, and two carbon electrodes. When dry solid NaCl powder is placed between the electrodes, the bulb does not glow at all. When the NaCl is heated until it melts into a clear liquid at 801°C, the bulb shines brightly. When solid NaCl is dissolved in distilled water at room temperature, the bulb also shines brightly.",
  "Why is solid Sodium Chloride an electrical insulator, whereas molten and aqueous Sodium Chloride are excellent conductors of electricity?",
  "Solid NaCl has no electrons, but melting creates electrons.",
  "In the solid state, Na⁺ and Cl⁻ ions are held rigidly in fixed lattice positions by strong electrostatic forces and cannot move; upon melting or dissolving in water, the lattice breaks down, freeing the ions to migrate toward oppositely charged electrodes.",
  "Solid NaCl contains covalent bonds, while molten NaCl contains metallic bonds.",
  "Water and heat turn sodium chloride into gaseous hydrogen.",
  "B",
  "Electrical conduction in ionic substances requires mobile charged carriers. In solid NaCl, Na⁺ and Cl⁻ ions are locked firmly in a rigid face-centered cubic crystal lattice by strong electrostatic forces; electrons are localized, and ions cannot translate. When melted or dissolved in water, thermal energy or hydration breaks the crystal lattice, freeing the ions to move independently. Under an electric potential, Na⁺ cations migrate to the cathode and Cl⁻ anions migrate to the anode, carrying the current."
));

cases.push(makeChemCase(
  chapter, 11, "Anomalous High Boiling Point of Water vs Hydrogen Sulphide", "Intermolecular Hydrogen Bonding",
  "A chemical engineer compares the boiling points of Group 16 hydrides: Water (H₂O, molecular weight 18) boils at +100°C, while Hydrogen Sulphide (H₂S, molecular weight 34) boils at -60°C. Despite H₂S having nearly double the molecular mass and larger electron cloud than H₂O, it is a foul-smelling gas at room temperature, while water is a high-boiling liquid.",
  "What intermolecular bonding phenomenon explains the exceptionally high boiling point of water compared to hydrogen sulphide?",
  "Water contains covalent bonds, while hydrogen sulphide contains ionic bonds.",
  "Oxygen is small and highly electronegative (3.5), forming extensive three-dimensional networks of intermolecular hydrogen bonds between H₂O molecules that require massive thermal energy to break; Sulphur is larger and less electronegative (2.5), forming no significant hydrogen bonds.",
  "Hydrogen sulphide is a noble gas that does not condense.",
  "Water molecules are held together by nuclear forces.",
  "B",
  "Hydrogen bonding requires a hydrogen atom covalently bonded to a small, highly electronegative atom (F, O, N). Oxygen (EN = 3.5) creates a very polar O-H bond, and each water molecule can form up to four strong intermolecular hydrogen bonds with neighboring molecules, creating a cohesive liquid network. Sulphur (EN = 2.5) has a larger radius and low electronegativity, so H₂S molecules are held only by weak dipole-dipole forces, boiling at -60°C."
));

cases.push(makeChemCase(
  chapter, 12, "Density Anomaly: Why Ice Floats on Liquid Water", "Open Cage-like Tetrahedral Hydrogen-Bonded Lattice",
  "In a limnology study during severe winter freezing, biologists observe that ice forms at the surface of lakes, allowing aquatic fish to survive in the dense 4°C liquid water beneath. Precision density measurements reveal that solid ice at 0°C has a density of 0.917 g/cm³, whereas liquid water at 0°C has a density of 0.9998 g/cm³ (and peaks at 1.0000 g/cm³ at 4°C).",
  "What structural reorganization of hydrogen bonds causes ice to expand and float upon freezing?",
  "Water loses hydrogen atoms upon freezing, making it lighter.",
  "In solid ice, each oxygen atom is tetrahedrally surrounded by four other oxygens via hydrogen bonds, locking molecules into an open cage-like crystalline lattice with large empty hexagonal channels; upon melting, the open cage collapses into a more closely packed liquid.",
  "Ice contains trapped atmospheric air bubbles that cannot be removed.",
  "Liquid water contains heavy metal isotopes that sink to the bottom.",
  "B",
  "In ice, each water molecule participates in four hydrogen bonds directed toward the vertices of a regular tetrahedron. This open, cage-like structure creates large hexagonal voids or channels within the crystal lattice. When ice melts at 0°C, the rigid hydrogen-bonded framework partially breaks down, allowing water molecules to tumble into the open voids. This decreases molar volume and increases density, which is why liquid water is denser than solid ice and reaches maximum density at 4°C."
));

cases.push(makeChemCase(
  chapter, 13, "Coordinate Covalent Bonding in Carbon Monoxide", "Dative Triple Bond and Formal Charge Balance",
  "A combustion engineer examines the electronic structure of Carbon Monoxide (CO). Carbon has 4 valence electrons (needs 4) and Oxygen has 6 valence electrons (needs 2). If Carbon and Oxygen share two electron pairs in a normal double bond (C=O), oxygen completes its octet (8 e⁻) but carbon has only 6 valence electrons (incomplete octet).",
  "How does the carbon monoxide molecule achieve an octet for both atoms?",
  "Carbon steals two protons from oxygen.",
  "Oxygen donates one of its lone pairs to carbon to form a coordinate (dative) covalent bond, creating a triple bond (:C≡O: or C⇇O) where one of the three shared pairs is provided entirely by oxygen.",
  "Carbon monoxide converts into an ionic compound C⁴⁺ O²⁻.",
  "Carbon shares electrons with a second carbon monoxide molecule.",
  "B",
  "In CO, carbon (2s² 2p²) has 4 valence electrons and oxygen (2s² 2p⁴) has 6. To allow carbon to complete its octet, oxygen shares two electrons mutually with carbon (forming two normal covalent bonds) and additionally donates a full unshared lone pair from its 2p orbital into the vacant 2p orbital of carbon (a coordinate bond). The resulting molecule is written as :C⇇O: or :C≡O: with a triple bond, giving both atoms a stable 8-electron octet."
));

cases.push(makeChemCase(
  chapter, 14, "Coordinate Bonding in Nitric Acid ($HNO_3$)", "Tetra-coordinate Nitrogen Octet Constraint",
  "A chemistry student draws the Lewis structure for Nitric Acid (HNO₃). Nitrogen has 5 valence electrons and is bonded to three oxygen atoms and one hydrogen atom (arranged as H–O–N(=O)...). If nitrogen formed two double bonds and one single bond, it would have 10 valence electrons, violating the octet rule because Period 2 elements cannot expand their valence shell.",
  "How is the second terminal oxygen atom bonded to nitrogen in the true Lewis structure of Nitric Acid?",
  "By an electrovalent ionic bond where nitrogen loses an electron to oxygen.",
  "By a coordinate (dative) covalent bond where nitrogen donates its lone pair to the neutral oxygen atom (N → O), preserving an exact octet of 8 electrons on nitrogen.",
  "By a triple covalent bond.",
  "By a metallic bond delocalised over the entire flask.",
  "B",
  "Nitrogen (Period 2) has only 2s and 2p orbitals (maximum 4 orbitals, 8 electrons maximum). It cannot expand its octet to 10 electrons. In HNO₃, nitrogen forms: (1) one single covalent bond to the -OH group, (2) one double covalent bond to a terminal oxygen (=O), and (3) uses its remaining lone pair to form a coordinate (dative) bond with the third terminal oxygen (N → O or N⁺–O⁻). This maintains an octet on nitrogen."
));

cases.push(makeChemCase(
  chapter, 15, "Coordinate Bonding in Ozone ($O_3$)", "Dative Bond in Allotropic Triatomic Oxygen",
  "Atmospheric scientists monitor the stratospheric ozone layer (O₃) which shields Earth from harmful solar ultraviolet radiation. An ozone molecule consists of three identical oxygen atoms. The central oxygen forms a double covalent bond with one terminal oxygen (O=O).",
  "How is the third oxygen atom bonded to the central oxygen atom in the Ozone molecule?",
  "By an ionic bond formed by transfer of two electrons.",
  "The central oxygen donates one of its remaining lone pairs into the empty orbital of the third oxygen atom to form a coordinate (dative) covalent bond (O=O → O).",
  "By a triple bond involving all three oxygen atoms simultaneously.",
  "By a weak gravitational attraction.",
  "B",
  "The central oxygen atom initially has 6 valence electrons. By forming a double covalent bond with one terminal oxygen, it achieves an octet (4 bonding electrons + 2 lone pairs = 8 e⁻). To bond the third oxygen atom without exceeding its own octet, the central oxygen donates one of its lone pairs to the third oxygen atom, forming a coordinate covalent bond (O=O → O). Resonance between the two terminal oxygens makes both bond lengths equal (1.278 Å)."
));

cases.push(makeChemCase(
  chapter, 16, "Covalent Character in Tin Chlorides: $SnCl_2$ vs $SnCl_4$", "Fajan's Rule: Cation Charge and Polarisability",
  "A chemical manufacturer synthesizes two chlorides of Tin: Tin(II) chloride (SnCl₂) and Tin(IV) chloride (SnCl₄). Anhydrous SnCl₂ is a high-melting white crystalline solid (m.p. 247°C) that conducts electricity in the molten state. Anhydrous SnCl₄ is a colorless, fuming volatile liquid (b.p. 114°C) that does not conduct electricity and is miscible with non-polar organic solvents.",
  "According to Fajan's rules, why is SnCl₄ a volatile covalent liquid while SnCl₂ is an ionic solid?",
  "SnCl₂ contains radioactive isotopes of tin.",
  "Sn⁴⁺ has a much higher positive charge (+4 vs +2) and smaller radius than Sn²⁺, giving it an immensely higher polarizing power that severely distorts the electron clouds of the Cl⁻ anions, conferring predominantly covalent character.",
  "SnCl₄ has more chlorine atoms, which weigh down the molecules into a liquid.",
  "Tin in SnCl₂ is a non-metal while in SnCl₄ it is an alkali metal.",
  "B",
  "According to Fajan's rules, covalent character increases with higher cation charge. Sn⁴⁺ has a charge of +4 and an ionic radius of 69 pm, whereas Sn²⁺ has a charge of +2 and a radius of 118 pm. The charge density (polarizing power) of Sn⁴⁺ is vastly greater than Sn²⁺. Sn⁴⁺ pulls the electron clouds of the surrounding chloride anions into the internuclear region, converting the bonds into shared covalent bonds. Thus, SnCl₄ exists as discrete covalent molecules (volatile liquid), while SnCl₂ remains an ionic lattice."
));

cases.push(makeChemCase(
  chapter, 17, "Solubility and Color of Silver Halides: $AgF$ vs $AgI$", "Fajan's Rule: Anion Size and Polarisability",
  "In qualitative inorganic analysis, a student tests the solubility and appearance of silver halides:\nSilver Fluoride (AgF): white solid, completely soluble in water (1800 g/L)\nSilver Chloride (AgCl): white precipitate, sparingly soluble (0.0019 g/L)\nSilver Bromide (AgBr): pale yellow precipitate, insoluble (0.00014 g/L)\nSilver Iodide (AgI): bright canary-yellow precipitate, completely insoluble (0.000003 g/L)",
  "Applying Fajan's rules, what periodic and structural factor explains the dramatic increase in covalent character and insolubility from AgF to AgI?",
  "Silver becomes a non-metal when reacting with iodine.",
  "Anion radius increases significantly from F⁻ (133 pm) to I⁻ (220 pm); the large electron cloud of I⁻ is easily polarized and distorted by the Ag⁺ cation, introducing strong covalent character and intense charge-transfer color.",
  "Fluorine atoms are heavier than iodine atoms.",
  "Silver fluoride forms an unstable gaseous compound in water.",
  "B",
  "According to Fajan's rules, large anions have diffuse, loosely held electron clouds that are easily polarized by cations. F⁻ is small and holds its electrons tightly (low polarisability), so AgF is predominantly ionic and highly soluble. Down the group to I⁻, the electron cloud is huge and easily distorted by Ag⁺ (which possesses a pseudo-noble gas 4d¹⁰ configuration with high polarizing power). The intense electron sharing (covalency) in AgI collapses its water solubility and enables charge-transfer absorption in the visible spectrum (canary yellow)."
));

cases.push(makeChemCase(
  chapter, 18, "Pseudo-Noble Gas Configuration: $CuCl$ vs $NaCl$", "Polarising Power of $d^{10}$ vs $s^2p^6$ Cations",
  "A physical chemist compares Sodium Chloride (NaCl) and Copper(I) Chloride (CuCl). Both cations have identical charge (+1) and nearly identical ionic radii: Na⁺ = 102 pm, Cu⁺ = 96 pm. Despite these physical similarities, NaCl has a high melting point (801°C) and is highly soluble in water, whereas CuCl has a low melting point (426°C), is insoluble in water, and dissolves in organic solvents.",
  "Why is Copper(I) Chloride far more covalent than Sodium Chloride despite having virtually the same cation radius and charge?",
  "Sodium is a radioactive metal that destroys covalent bonds.",
  "Cu⁺ has a pseudo-noble gas electron configuration (3s² 3p⁶ 3d¹⁰) where d-electrons shield the nuclear charge very poorly, exerting a much higher effective nuclear charge and polarizing power than the noble gas core (2s² 2p⁶) of Na⁺.",
  "Chlorine prefers reacting with copper rather than sodium.",
  "CuCl contains triple bonds between copper and chlorine.",
  "B",
  "Na⁺ has a noble gas configuration ([Ne] = 2s² 2p⁶), where s and p electrons provide effective screening of the nuclear charge. Cu⁺ has a pseudo-noble gas configuration ([Ar] 3d¹⁰ = 3s² 3p⁶ 3d¹⁰). The 10 d-electrons have poor shielding ability, allowing the high positive nuclear charge of copper (+29) to penetrate outward. Consequently, Cu⁺ exerts a vastly stronger electric field gradient (polarizing power) than Na⁺ (+11), heavily polarizing the Cl⁻ anion and conferring high covalent character to CuCl."
));

cases.push(makeChemCase(
  chapter, 19, "Trigonal Pyramidal Geometry of Ammonia ($NH_3$)", "VSEPR Theory: Lone Pair-Bond Pair Repulsion",
  "A student in a molecular modeling workshop calculates the bond angles of Methane (CH₄), Ammonia (NH₃), and Water (H₂O). All three molecules have four electron pairs around the central atom (sp³ hybridised). However, while Methane has a perfect tetrahedral angle of 109.5°, Ammonia has a bond angle of 107.3°, and Water has a bond angle of 104.5°.",
  "According to VSEPR theory, why does the presence of a lone pair in Ammonia compress the H–N–H bond angle below the regular tetrahedral value?",
  "Hydrogen atoms in ammonia repel each other with magnetic forces.",
  "A lone pair of electrons is attracted by only one nucleus and occupies a larger spatial volume than a bonding pair; the stronger repulsion of the lone pair (lp–bp > bp–bp) squeezes the three N–H bonding pairs closer together.",
  "Nitrogen undergoes radioactive decay that shortens the bond angle.",
  "Ammonia is an unstable free radical that changes shape continuously.",
  "B",
  "Under VSEPR theory, electron pair repulsions decrease in the order: lone pair-lone pair (lp-lp) > lone pair-bond pair (lp-bp) > bond pair-bond pair (bp-bp). In CH₄, there are four equivalent bond pairs, yielding an ideal 109.5° tetrahedron. In NH₃, the central nitrogen has three bond pairs and one lone pair. Because the lone pair is localized on nitrogen alone, its electron cloud spreads out and exerts strong lp-bp repulsion, forcing the N-H bonding pairs together and reducing the bond angle to 107.3°."
));

cases.push(makeChemCase(
  chapter, 20, "Bent / Angular Geometry of Water ($H_2O$)", "Two Lone Pairs Compressing the Bond Angle to 104.5°",
  "Continuing the VSEPR analysis, the student observes that Water (H₂O) has two bonding pairs and two lone pairs on the central oxygen atom. The measured H–O–H bond angle is compressed even further to 104.5°.",
  "Why is the bond angle in Water (104.5°) smaller than in Ammonia (107.3°)?",
  "Oxygen has fewer protons than nitrogen, so it cannot hold its bonds open.",
  "Oxygen possesses two unshared lone pairs that exert powerful lp–lp repulsion against each other and double lp–bp repulsions on the two O–H bonding pairs, squeezing the bond angle down from 109.5° to 104.5°.",
  "Water molecules are linear when dissolved in ethanol.",
  "The two hydrogen atoms in water attract each other to form a covalent bond.",
  "B",
  "In water, oxygen has four electron pairs (sp³): two lone pairs and two bond pairs. The two lone pairs repel each other with maximum intensity (lp-lp repulsion), expanding their own spatial domain. In doing so, both lone pairs push downward against the two O-H bond pairs (lp-bp repulsion). This dual compression forces the two bonding pairs much closer together than in ammonia (which has only one lone pair), reducing the H-O-H bond angle to 104.5°."
));

cases.push(makeChemCase(
  chapter, 21, "Bond Length and Strength: Single, Double, Triple Bonds", "Bond Order Correlation with Energy and Internuclear Distance",
  "A spectroscopic analysis of three hydrocarbons—Ethane (C₂H₆), Ethene (C₂H₄), and Ethyne (C₂H₂) reveals the following carbon-carbon bond metrics:\nEthane: C–C single bond, length = 1.54 Å, dissociation energy = 348 kJ/mol\nEthene: C=C double bond, length = 1.34 Å, dissociation energy = 614 kJ/mol\nEthyne: C≡C triple bond, length = 1.20 Å, dissociation energy = 839 kJ/mol",
  "What fundamental relationship exists between bond order, bond length, and bond dissociation energy?",
  "As bond order increases, bond length increases and bond energy decreases.",
  "As bond order increases (single → double → triple), more electron pairs are shared between the two carbon nuclei, pulling them closer together (shorter bond length) and requiring greater energy to break (higher bond strength).",
  "All carbon-carbon bonds have the same length regardless of bond order.",
  "Triple bonds are weaker than single bonds because π bonds repel each other.",
  "B",
  "Bond order represents the number of shared electron pairs between two atoms. As bond order increases from 1 (ethane) to 2 (ethene) to 3 (ethyne), the increased electron density between the two carbon nuclei exerts a greater electrostatic attraction on both positive nuclei, pulling them closer together. Consequently, bond length decreases (1.54 Å → 1.34 Å → 1.20 Å) and bond dissociation energy increases dramatically (348 → 614 → 839 kJ/mol)."
));

cases.push(makeChemCase(
  chapter, 22, "Non-Directional Nature of Ionic Bonds vs Directional Covalent Bonds", "Electrostatic Field Symmetry and Molecular Shapes",
  "A crystallography professor contrasts the mechanical properties of Sodium Chloride crystals and Quartz (silica, SiO₂). When struck sharply with a hammer, NaCl crystals cleave cleanly along flat crystal planes, but shatter if deformed. In contrast, quartz has high hardness in all directions. The professor explains this difference based on directional vs non-directional bonding.",
  "Why are electrovalent (ionic) bonds non-directional, whereas covalent bonds are strictly directional?",
  "Ionic bonds are non-directional because ions are spherical charges that exert electrostatic attractive forces uniformly in all directions; covalent bonds are directional because they are formed by the localized spatial overlap of specific atomic orbitals.",
  "Covalent bonds are non-directional because electrons move randomly like a gas.",
  "Ionic bonds are directional because they always point toward the North Pole.",
  "All chemical bonds are non-directional in the solid state.",
  "A",
  "An ion acts as a point charge whose electrostatic electric field radiates symmetrically in all three dimensions. Therefore, a Na⁺ ion attracts Cl⁻ ions from any direction without spatial preference (non-directional). In contrast, covalent bonds form by the constructive overlap of atomic orbitals (such as p-orbitals or hybrid sp³ orbitals) that possess specific spatial orientations in space (e.g., along x, y, z axes). This gives covalent molecules definite geometric shapes and directional angles."
));

cases.push(makeChemCase(
  chapter, 23, "Brittleness of Ionic Crystals Under Mechanical Impact", "Like-Charge Repulsion Along Crystal Slip Planes",
  "In a materials testing lab, a mineralogist strikes a cubic crystal of halite (rock salt, NaCl) with a metal chisel along its face. Instead of flattening or denting like a malleable piece of copper or lead, the salt crystal fractures cleanly and shatters into smaller cubic fragments.",
  "What molecular-level event causes ionic crystals to be brittle and shatter under mechanical shear stress?",
  "Mechanical shock creates heat that boils the sodium atoms.",
  "Shear force causes adjacent layers of the crystal lattice to slide slightly; this displacement brings ions of the same charge (Na⁺ with Na⁺, Cl⁻ with Cl⁻) into direct alignment, causing colossal electrostatic repulsion that splits the crystal along cleavage planes.",
  "The chisel injects electrons into the salt, creating an explosion.",
  "Ionic bonds convert into weak covalent bonds when touched by metal.",
  "B",
  "In a resting ionic crystal, cations and anions alternate in perfect three-dimensional symmetry, maximizing attractive forces and minimizing repulsions. When a shear mechanical stress is applied, one plane of ions slides past another by just one ionic diameter. This displacement brings like-charged ions into immediate adjacent contact (positive next to positive, negative next to negative). The resulting instantaneous, overwhelming electrostatic repulsion cleaves the crystal cleanly apart."
));

cases.push(makeChemCase(
  chapter, 24, "Malleability of Metals: The Electron Sea Model", "Delocalised Electrons and Atomic Plane Slippage",
  "In an industrial metal forge, a blacksmith heats a block of pure copper and beats it with a heavy hammer into a paper-thin sheet without breaking or cracking it. In contrast, beating an ionic or giant covalent crystal causes immediate shattering.",
  "According to the electron sea model, why are metals malleable and ductile while ionic crystals are brittle?",
  "Metals are liquids at room temperature that freeze when hammered.",
  "In a metallic lattice, positive metal ions are immersed in a non-directional sea of delocalised valence electrons; when hammered, planes of metal ions can slide past each other without repulsion because the mobile electron sea instantly readjusts to cushion and bond the displaced ions.",
  "Metals have no chemical bonds, so atoms can move freely.",
  "Copper atoms absorb the hammer's kinetic energy as radioactive rays.",
  "B",
  "In metallic bonding, valence electrons are not bound to individual atoms but form a delocalised, highly mobile 'electron sea' surrounding positive metal kernels (cations). The metallic bond is completely non-directional. When a mechanical shear stress is applied, layers of positive cations can glide past one another without disrupting the bond, because the fluid electron sea immediately flows and maintains electrostatic attraction between all ions in their new positions, preventing repulsive cleavage."
));

cases.push(makeChemCase(
  chapter, 25, "Incomplete Octet / Hypovalent Molecules: $BF_3$", "Lewis Acid Character and Electron Deficiency",
  "A chemical researcher investigates Boron Trifluoride (BF₃). Boron has 3 valence electrons and shares one electron with each of three fluorine atoms, forming three single covalent bonds in a trigonal planar arrangement (120° angles). Counting the valence electrons around the central Boron atom yields only 6 electrons, leaving it two electrons short of a complete octet.",
  "How does Boron Trifluoride stabilize its incomplete octet when mixed with Ammonia (NH₃)?",
  "Boron steals a proton from the ammonia molecule.",
  "BF₃ acts as an electron-pair acceptor (Lewis acid) and reacts with NH₃ (which has a lone pair on nitrogen, Lewis base) to form an addition adduct (H₃N → BF₃) via a coordinate covalent bond, completing boron's octet.",
  "Boron trifluoride decomposes into solid boron metal.",
  "Fluorine atoms donate protons to nitrogen.",
  "B",
  "BF₃ is an electron-deficient molecule with an incomplete octet (6 valence electrons around B). It possesses a vacant 2p orbital perpendicular to the molecular plane. Ammonia (NH₃) has an unshared lone pair on nitrogen. When mixed, NH₃ donates its lone pair into the empty 2p orbital of boron, forming a stable Lewis acid-base coordination adduct: F₃B ← :NH₃. In this adduct, boron achieves a complete 8-electron octet."
));

cases.push(makeChemCase(
  chapter, 26, "Expanded Octet / Hypervalent Molecules: $PCl_5$ and $SF_6$", "Participation of Vacant d-Orbitals in Period 3 Elements",
  "A student in an advanced chemistry class examines the Lewis structures of Phosphorus Pentachloride (PCl₅) and Sulphur Hexafluoride (SF₆). In PCl₅, phosphorus shares electrons to form five single bonds (10 valence electrons). In SF₆, sulphur forms six single bonds (12 valence electrons). Both exceed the classic 8-electron octet rule.",
  "Why are Period 3 elements like Phosphorus and Sulphur able to form expanded octet molecules, whereas Period 2 elements like Nitrogen (cannot form NCl₅) and Oxygen (cannot form OF₆) cannot?",
  "Period 3 elements are radioactive and emit extra electrons.",
  "Phosphorus and Sulphur belong to Period 3 (n=3) and possess energetically accessible vacant 3d orbitals that can participate in bonding (sp³d and sp³d² hybridisation); Nitrogen and Oxygen (n=2) have only 2s and 2p orbitals and strictly cannot accommodate more than 8 electrons.",
  "Chlorine and fluorine are metals that force phosphorus to expand.",
  "Molecules with 10 or 12 electrons are unstable and explode at room temperature.",
  "B",
  "The octet rule is strictly enforced for Period 2 elements (C, N, O, F) because their valence shell (n=2) contains only four orbitals (one 2s and three 2p), limiting maximum covalency to 4 (8 electrons). Period 3 elements (P, S, Cl) have principal quantum number n=3, which includes 3s, 3p, and five vacant 3d orbitals of comparable energy. By unpairing valence electrons and promoting them into vacant 3d orbitals, they can form 5 bonds (PCl₅, sp³d) or 6 bonds (SF₆, sp³d²), expanding their octet."
));

cases.push(makeChemCase(
  chapter, 27, "Resonance and Bond Equivalence in Carbonate Ion ($CO_3^{2-}$)", "Delocalisation of π-Electrons Across Equivalent Oxygens",
  "An X-ray crystallographer determines the carbon-oxygen bond lengths in Calcium Carbonate (CaCO₃). A single C–O bond has a standard length of 1.43 Å, while a double C=O bond has a length of 1.22 Å. The scientist discovers that in the carbonate ion (CO₃²⁻), all three carbon-oxygen bonds are completely identical, measuring exactly 1.29 Å.",
  "Why are all three C–O bonds in the carbonate ion identical in length and strength rather than having one short double bond and two long single bonds?",
  "The carbonate ion rotates so fast that the X-ray camera takes a blurred image.",
  "The π-electrons are delocalised through resonance across all three carbon-oxygen bonds, producing a resonance hybrid where each bond has an identical intermediate bond order of 1.33.",
  "Calcium transfers three protons to the carbon atom.",
  "The carbonate ion contains three separate ionic bonds.",
  "B",
  "The classical Lewis structure of CO₃²⁻ depicts one double bond (C=O) and two single bonds (C-O⁻). However, the double bond can be placed with equal probability on any of the three oxygen atoms, yielding three equivalent contributing resonance structures. In reality, the π-electron pair is delocalised over the entire planar trigonal ion. Each carbon-oxygen bond is a hybrid with a fractional bond order of 4/3 = 1.33, resulting in identical bond lengths (1.29 Å) intermediate between single and double bonds."
));

cases.push(makeChemCase(
  chapter, 28, "Polar Covalent Ionisation: $HCl$ Gas in Non-Polar Toluene vs Water", "Solvent Dielectric and Hydration vs Dispersion",
  "A laboratory technician bubbles anhydrous hydrogen chloride gas (HCl) into two separate beakers: Beaker A contains pure liquid toluene (a non-polar organic solvent); Beaker B contains pure distilled water. When tested with dry blue litmus paper and an electrical conductivity apparatus: Beaker A shows NO color change on litmus and ZERO electrical conductivity; Beaker B turns litmus red instantly and conducts electric current powerfully.",
  "Why does hydrogen chloride exhibit acidic properties and electrical conductivity in water but not in toluene?",
  "Toluene contains a chemical base that neutralizes hydrochloric acid.",
  "HCl is a polar covalent gas that does not ionise in non-polar toluene (low dielectric constant); in water, polar water dipoles pull the H–Cl bond apart via hydration, forming hydronium (H₃O⁺) and chloride (Cl⁻) ions that conduct electricity and act as an acid.",
  "Toluene destroys the protons in the hydrogen atom.",
  "Hydrogen chloride evaporates instantly out of water.",
  "B",
  "Hydrogen chloride (H-Cl) is a polar covalent molecular gas, not an ionic compound. Toluene is a non-polar hydrocarbon with a low dielectric constant (ε_r ≈ 2.4) and cannot form strong dipole-dipole interactions with HCl; thus, HCl remains as un-ionised covalent molecules that cannot conduct current or turn litmus red. In water (ε_r ≈ 80), the strong ion-dipole attraction (hydration enthalpy) between water and the polar H-Cl bond cleaves the covalent bond completely: HCl + H₂O → H₃O⁺ + Cl⁻."
));

cases.push(makeChemCase(
  chapter, 29, "Equatorial vs Axial Bond Lengths in $PCl_5$", "Trigonal Bipyramidal Geometry and VSEPR Repulsions",
  "A structural chemist performs electron diffraction on gaseous Phosphorus Pentachloride (PCl₅). The molecule adopts a trigonal bipyramidal geometry with phosphorus at the center. Surprisingly, the five P–Cl bonds are not identical: the three equatorial P–Cl bonds have a length of 2.02 Å, while the two axial P–Cl bonds are significantly longer, measuring 2.14 Å.",
  "Why are the axial bonds in Phosphorus Pentachloride longer and weaker than the equatorial bonds?",
  "Axial chlorine atoms have more neutrons than equatorial chlorine atoms.",
  "Axial bond pairs experience strong 90° repulsions from three equatorial bond pairs, whereas equatorial bond pairs experience 90° repulsions from only two axial pairs; the greater repulsive strain forces the axial bonds to lengthen and weaken.",
  "Equatorial bonds are ionic while axial bonds are metallic.",
  "Axial bonds are held by weak gravity from the ceiling of the flask.",
  "B",
  "In a trigonal bipyramidal geometry (sp³d hybridisation), the three equatorial bonds lie in a plane at 120° to each other, while the two axial bonds lie along a vertical axis perpendicular to the equatorial plane (90°). Each axial bond pair is at 90° to three equatorial bond pairs (high repulsion). Each equatorial bond pair is at 90° to only two axial bond pairs. Because 90° repulsions are severe, the axial pairs are pushed farther out from the central phosphorus atom, making the axial bonds longer (2.14 Å) and weaker (more easily cleaved on heating: PCl₅ → PCl₃ + Cl₂)."
));

cases.push(makeChemCase(
  chapter, 30, "Intramolecular vs Intermolecular Hydrogen Bonding in Nitrophenols", "Steam Distillation Separation of Isomers",
  "An organic chemist synthesizes a mixture of ortho-nitrophenol and para-nitrophenol. When subjected to steam distillation, ortho-nitrophenol distills over rapidly with steam at 100°C, while para-nitrophenol remains behind in the distillation flask, boiling only at 279°C.",
  "What difference in hydrogen bonding between the ortho and para isomers accounts for the high volatility of ortho-nitrophenol?",
  "Ortho-nitrophenol has a higher molecular weight than para-nitrophenol.",
  "Ortho-nitrophenol forms an intramolecular hydrogen bond (within the same molecule between the adjacent -OH and -NO₂ groups, forming a 6-membered chelate ring), preventing association with other molecules; para-nitrophenol forms extensive intermolecular hydrogen bonds linking multiple molecules into high-boiling aggregates.",
  "Para-nitrophenol contains ionic bonds that solidify at 100°C.",
  "Ortho-nitrophenol is a non-polar gas that does not condense.",
  "B",
  "In ortho-nitrophenol, the -OH group and -NO₂ group are positioned on adjacent carbon atoms (close spatial proximity), allowing the hydrogen of -OH to form an internal hydrogen bond with an oxygen of -NO₂ (intramolecular hydrogen bonding or chelation). This satisfies the hydrogen bonding internally, leaving the molecule non-associated, non-polar, and volatile (steam distillable). In para-nitrophenol, the groups are on opposite ends (180° apart); it forms strong intermolecular hydrogen bonds with neighboring molecules, resulting in high molecular association and a high boiling point (279°C)."
));

cases.push(makeChemCase(
  chapter, 31, "Octet Rule Limitations: Odd-Electron Molecules ($NO$ and $NO_2$)", "Paramagnetism and Free Radical Dimerisation",
  "A physical chemist measures the magnetic susceptibility of Nitric Oxide (NO, 11 valence electrons) and Nitrogen Dioxide (NO₂, 17 valence electrons) at room temperature. Both gases are paramagnetic (attracted into an external magnetic field). Furthermore, upon cooling, brown NO₂ gas rapidly dimerises into a colorless diamagnetic liquid, Dinitrogen Tetroxide (N₂O₄).",
  "Why do NO and NO₂ fail to obey the octet rule, and why does NO₂ dimerise upon cooling?",
  "Both molecules have an odd total number of valence electrons, meaning at least one electron must remain unpaired as an odd-electron free radical (causing paramagnetism); dimerisation of NO₂ pairs the two odd electrons into a stable N–N single bond in N₂O₄.",
  "NO and NO₂ are noble gases that repel magnetic fields.",
  "Nitrogen undergoes nuclear fission at room temperature.",
  "The oxygen atoms absorb electrons from the air to form an octet.",
  "A",
  "In NO, total valence electrons = 5 (N) + 6 (O) = 11. In NO₂, total valence electrons = 5 (N) + 12 (2O) = 17. Because the total number of valence electrons is odd, it is mathematically impossible for all electrons to be paired into 8-electron octets. The odd unpaired electron resides in an antibonding/non-bonding orbital on nitrogen, imparting paramagnetism and high free-radical reactivity. Upon cooling, two NO₂ molecules combine to pair their odd electrons: 2NO₂ (brown, paramagnetic) ⇌ N₂O₄ (colorless, diamagnetic)."
));

cases.push(makeChemCase(
  chapter, 32, "Formal Charge Determination in Ozone ($O_3$)", "Lewis Structure Charge Allocation",
  "A student calculates the formal charges on the three oxygen atoms in Ozone (labelled O₁, O₂, O₃ from left to right in the Lewis structure: O₁=O₂–O₃, where O₁ has 2 lone pairs, central O₂ has 1 lone pair, and O₃ has 3 lone pairs). The formula used is: Formal Charge = (Valence e⁻) - (Non-bonding e⁻) - 0.5 × (Bonding e⁻).",
  "What are the formal charges on O₁, O₂, and O₃ in this resonance contributor of Ozone?",
  "O₁ = 0, O₂ = +1, O₃ = -1",
  "O₁ = -1, O₂ = +2, O₃ = -1",
  "O₁ = +1, O₂ = 0, O₃ = -1",
  "All three oxygen atoms have a formal charge of 0.",
  "A",
  "Using the formal charge formula: For O₁ (terminal double-bonded): 6 - 4 - 0.5(4) = 0. For central O₂ (one double bond, one single bond, one lone pair): 6 - 2 - 0.5(6) = +1. For O₃ (terminal single-bonded with coordinate bond): 6 - 6 - 0.5(2) = -1. The sum of formal charges is 0 + 1 + (-1) = 0, matching the neutral charge of the ozone molecule."
));

cases.push(makeChemCase(
  chapter, 33, "Strength of Hydrogen Bond: F–H···F vs O–H···O vs N–H···N", "Electronegativity and Dipole Intensity in Hydrogen Bonds",
  "In a molecular thermodynamics laboratory, an investigator measures the bond dissociation enthalpies of three hydrogen bonds in gaseous complexes:\nF–H···F (in HF): ~40 kJ/mol\nO–H···O (in H₂O): ~21 kJ/mol\nN–H···N (in NH₃): ~13 kJ/mol",
  "What periodic property of the electronegative atom dictates the order of hydrogen bond strength: F > O > N?",
  "Atomic mass; heavier atoms form stronger hydrogen bonds.",
  "Electronegativity; Fluorine is the most electronegative atom (4.0), followed by Oxygen (3.5) and Nitrogen (3.0), creating the largest partial positive charge on hydrogen (δ+) and the highest electrostatic attraction for the adjacent lone pair.",
  "Number of neutrons in the nucleus.",
  "Metallic conductivity of nitrogen.",
  "B",
  "A hydrogen bond is primarily an electrostatic dipole-dipole attraction between a positively polarized hydrogen atom (Hδ+) and an electronegative atom's lone pair (Xδ-). The strength of the hydrogen bond is directly proportional to the electronegativity of the atom bonded to hydrogen. Because Fluorine has the highest electronegativity (4.0), the H-F bond has the greatest dipole moment, creating the strongest positive charge density on hydrogen, yielding the strongest hydrogen bond (~40 kJ/mol). Oxygen (3.5) and Nitrogen (3.0) yield progressively weaker H-bonds."
));

cases.push(makeChemCase(
  chapter, 34, "Coordinate Bonding in Copper Tetraammine Complex $[Cu(NH_3)_4]^{2+}$", "Ligand Lone Pair Donation into Vacant Transition Orbitals",
  "When concentrated aqueous ammonia is added to a pale blue solution of Copper(II) sulphate, a pale blue precipitate forms initially, which dissolves upon adding excess ammonia to form an intensely deep inky-blue solution containing the tetraamminecopper(II) complex ion, [Cu(NH₃)₄]²⁺.",
  "What type of chemical bonding joins the four ammonia molecules to the central Cu²⁺ cation in the complex ion?",
  "Four ionic bonds formed by electron transfer from copper to ammonia.",
  "Four coordinate (dative) covalent bonds, where each ammonia molecule acts as a Lewis base and donates its nitrogen lone pair into empty hybrid orbitals of the central Cu²⁺ transition metal ion.",
  "Metallic bonding between copper and nitrogen atoms.",
  "Weak London dispersion forces that decompose in light.",
  "B",
  "In the [Cu(NH₃)₄]²⁺ complex cation, the central copper(II) ion (Cu²⁺) has vacant 4s, 4p, and 4d orbitals (dsp² hybridisation, square planar geometry). Each of the four ammonia molecules (NH₃) possesses a localized lone pair of electrons on its nitrogen atom. Ammonia acts as a monodentate neutral ligand (Lewis base), donating its lone pair into a vacant hybrid orbital of Cu²⁺ to form a coordinate (dative) covalent bond: Cu²⁺ ← :NH₃."
));

cases.push(makeChemCase(
  chapter, 35, "Physical State of Ionic vs Covalent Substances at Room Temp", "Lattice Energy vs Intermolecular Forces",
  "A chemical stockroom inventory categorizes common substances at 25°C:\nIonic: NaCl (solid, m.p. 801°C), CaCO₃ (solid, decomposes 900°C), CuSO₄ (solid)\nCovalent: CH₄ (gas, b.p. -161°C), HCl (gas, b.p. -85°C), CCl₄ (liquid, b.p. 77°C), I₂ (solid, m.p. 114°C)",
  "Why are almost all ionic compounds crystalline solids with high melting points at room temperature, while simple covalent compounds are mostly gases, volatile liquids, or low-melting solids?",
  "Ionic compounds contain dense atomic nuclei that cannot vibrate.",
  "Ionic compounds consist of continuous three-dimensional giant lattices held together by powerful, omnidirectional electrostatic forces requiring massive thermal energy to disrupt; simple covalent compounds consist of discrete molecules held only by weak intermolecular forces.",
  "Covalent molecules have no mass, so they float as gases.",
  "Ionic compounds are radioactive minerals that solidify upon exposure to air.",
  "B",
  "Ionic compounds do not exist as isolated molecules; they form vast, repeating three-dimensional crystal lattices where every cation is surrounded by multiple anions and vice versa. Overcoming these strong electrostatic Coulombic forces across the entire lattice requires very high thermal kinetic energy (m.p. typically 600°C–3000°C). In contrast, in molecular covalent substances, strong covalent bonds exist only INSIDE each molecule; between neighboring molecules, only weak intermolecular forces (Van der Waals or dipole-dipole) exist, which break easily at room temperature."
));

cases.push(makeChemCase(
  chapter, 36, "Why Anhydrous $AlCl_3$ Sublimes as a Dimer ($Al_2Cl_6$)", "Octet Completion via Bridging Coordinate Bonds",
  "In an industrial organic synthesis, anhydrous Aluminium Chloride (AlCl₃) is used as a Friedel-Crafts catalyst. Solid AlCl₃ sublimes at a low temperature of 180°C. In the vapor phase at temperatures below 400°C, molecular weight determinations show that aluminium chloride exists exclusively as a dimeric molecule with the formula Al₂Cl₆.",
  "How does the formation of the Al₂Cl₆ dimer allow each aluminium atom to achieve a stable octet of electrons?",
  "Aluminium atoms fuse together to form a single nucleus.",
  "In monomeric AlCl₃, aluminium has only 6 valence electrons; two AlCl₃ units dimerise by each chlorine atom donating a lone pair to the vacant orbital of the adjacent aluminium atom, forming two bridging coordinate covalent bonds (Al–Cl→Al) that complete the octet on both aluminiums.",
  "The dimer forms an ionic bond with atmospheric nitrogen.",
  "Aluminium shares electrons with hydrogen gas.",
  "B",
  "In monomeric AlCl₃, aluminium has three valence electrons and shares them with three chlorine atoms, leaving an incomplete octet of 6 electrons (hypovalent Lewis acid). To satisfy the octet rule without ionic lattice formation, two planar AlCl₃ molecules align, and a lone pair on a chlorine atom of one molecule is donated into the vacant 3p orbital of the aluminium atom in the other molecule, and vice versa. These two bridging coordinate bonds form a stable dimer Al₂Cl₆ where each Al atom achieves an 8-electron octet."
));

cases.push(makeChemCase(
  chapter, 37, "Lewis Structure of Sulphate Ion ($SO_4^{2-}$)", "Formal Charge Minimization vs Strict Octet Rule",
  "An analytical chemist models the sulphate ion (SO₄²⁻). In Model 1, sulphur forms four single bonds with four oxygens (satisfying the octet rule with 8 electrons, but giving sulphur a high formal charge of +2 and each oxygen -1). In Model 2, sulphur forms two double bonds (S=O) and two single bonds (S–O⁻), expanding its valence shell to 12 electrons.",
  "Why is Model 2 (with two S=O double bonds and two S–O⁻ single bonds) considered the preferred representation of the sulphate ion?",
  "Sulphur cannot form single bonds with oxygen.",
  "Model 2 minimizes formal charges across the molecule (sulphur has a formal charge of 0, and the -2 net charge is distributed on the two single-bonded oxygens), which is thermodynamically favored and matches experimental bond lengths (intermediate order ~1.5).",
  "Model 2 converts the sulphate ion into a neutral gas.",
  "Oxygen atoms in Model 2 lose their electrons to sulphur.",
  "B",
  "In modern chemical bonding theory, formal charge minimization takes precedence when d-orbitals are available. In Model 1 (octet rule strictly obeyed), sulphur has a formal charge of +2 (6 - 0 - 4 = +2) and all four oxygens have -1. In Model 2 (expanded valence shell of 12 electrons using 3d orbitals), sulphur has a formal charge of 0 (6 - 0 - 6 = 0), the two double-bonded oxygens have formal charge 0, and the two single-bonded oxygens have formal charge -1. This lower formal charge distribution aligns with experimental X-ray data showing shortened, strengthened S-O bonds."
));

cases.push(makeChemCase(
  chapter, 38, "Solubility of Ethanol in Water vs Dimethyl Ether", "Hydrogen Bonding Capability of Functional Isomers",
  "Ethanol (CH₃CH₂OH) and Dimethyl Ether (CH₃OCH₃) are functional isomers sharing the identical molecular formula C₂H₆O (molecular weight 46). Despite having the same molecular weight, Ethanol is completely miscible with water in all proportions and boils at +78°C, while Dimethyl Ether is a gas at room temperature (b.p. -24°C) with very limited solubility in water.",
  "Why does Ethanol dissolve infinitely in water while Dimethyl Ether has poor water solubility?",
  "Ethanol is an ionic salt that dissociates into hydroxide ions.",
  "Ethanol contains a polar hydroxyl group (-O–H) that forms strong intermolecular hydrogen bonds with water molecules; Dimethyl Ether has no O–H bond and cannot act as a hydrogen bond donor to water.",
  "Dimethyl ether contains metallic bonds that repel water dipoles.",
  "Ethanol has a much higher molecular weight than dimethyl ether.",
  "B",
  "Solubility of covalent organic compounds in water depends on their ability to form hydrogen bonds with water dipoles. Ethanol has a hydrogen atom directly bonded to an electronegative oxygen atom (-O-H). It can act as both a hydrogen-bond donor and acceptor, forming robust intermolecular hydrogen bonds with water molecules (H-bonding hydration). Dimethyl ether (CH₃-O-CH₃) has oxygen bonded only to carbon; it lacks an acidic hydrogen and cannot donate hydrogen bonds, severely limiting its interaction with water."
));

cases.push(makeChemCase(
  chapter, 39, "Thermal Stability Comparison: $NaCl$ vs $CCl_4$", "Lattice Dissociation vs Covalent Molecular Bond Cleavage",
  "In a high-temperature materials test, solid Sodium Chloride (NaCl) and liquid Carbon Tetrachloride (CCl₄) are heated in an inert nitrogen furnace. NaCl remains completely chemically intact even when heated to 1000°C (merely melting at 801°C). In contrast, CCl₄ vaporizes at 77°C, and upon heating its vapor to 400°C, the covalent C–Cl bonds thermally decompose into carbon soot and toxic chlorine gas.",
  "What fundamental structural difference explains why ionic NaCl withstands extreme temperatures without chemical decomposition while covalent CCl₄ decomposes readily?",
  "Carbon is a radioactive element that decays at 400°C.",
  "NaCl is an extended ionic lattice where every ion is surrounded by six oppositely charged neighbors with a massive cumulative lattice energy, whereas CCl₄ consists of discrete individual molecules whose covalent bonds rupture once the thermal energy matches the specific C–Cl bond dissociation energy.",
  "Sodium chloride contains nuclear bonds that cannot be broken by heat.",
  "Carbon tetrachloride contains ionic bonds that melt at 77°C.",
  "B",
  "In NaCl, the solid is a continuous macroscopic network held by immense multidirectional electrostatic forces (lattice energy = 788 kJ/mol). Melting merely provides kinetic energy to allow ions to slip past each other, but the ions remain strongly attracted in the liquid state; chemical decomposition requires breaking the entire Coulombic array. In CCl₄, discrete molecules are held together only by weak Van der Waals forces, causing boiling at 77°C; at 400°C, thermal vibrations exceed the individual C-Cl covalent bond dissociation energy (~327 kJ/mol), causing chemical pyrolysis."
));

cases.push(makeChemCase(
  chapter, 40, "Linear Geometry of Beryllium Dichloride ($BeCl_2$) Vapor", "sp Hybridisation and 180° Bond Angle",
  "A chemical vapor spectroscopy experiment measures the geometry of anhydrous Beryllium Dichloride (BeCl₂) vapor at 1000°C. The molecule consists of one central Beryllium atom bonded to two Chlorine atoms (Cl–Be–Cl). The measured bond angle is exactly 180° with a dipole moment of 0 D.",
  "According to VSEPR theory and hybridization concepts, what is the geometric shape of the gaseous BeCl₂ monomer and why?",
  "Bent (104.5°) because beryllium has two lone pairs.",
  "Linear (180°) because beryllium uses sp hybrid orbitals to form two equivalent bonding pairs with chlorine, which orient themselves in opposite directions to minimize electrostatic repulsion.",
  "Trigonal planar (120°) because beryllium has three valence electrons.",
  "Tetrahedral (109.5°) because chlorine atoms are bulky.",
  "B",
  "In the gaseous monomer BeCl₂, the central beryllium atom has 2 valence electrons (2s²). Upon excitation, one 2s electron is promoted to a 2p orbital (2s¹ 2p¹), undergoing sp hybridisation to produce two equivalent collinear hybrid orbitals oriented at 180°. Each sp hybrid orbital overlaps with a 3p orbital of a chlorine atom, forming two identical Be-Cl σ-bonds. With only two bond pairs and zero lone pairs on beryllium, the minimum repulsion geometry is strictly linear (180°)."
));

cases.push(makeChemCase(
  chapter, 41, "Coordinate Bond in the Hydroxyl Ion Formation vs Water Dissociation", "Autoionisation of Water and Proton Transfer",
  "In an ultra-pure water sample, sensitive electrical conductivity apparatus detects a tiny residual conductance (Kw = 1.0 × 10⁻¹⁴ at 25°C). Physical chemists explain this through the self-ionisation of water: 2H₂O ⇌ H₃O⁺ + OH⁻.",
  "In this autoionisation equilibrium, how does a neutral water molecule transform into a hydroxide ion (OH⁻)?",
  "Water loses two electrons to the air to become OH⁻.",
  "A polar O–H bond in one water molecule breaks heterolytically, leaving the shared pair of electrons entirely on the oxygen atom (forming the OH⁻ anion with three lone pairs), while the departed bare proton (H⁺) is accepted by a second water molecule via a coordinate bond to form H₃O⁺.",
  "Oxygen atoms split into helium nuclei.",
  "Hydrogen atoms undergo nuclear fusion.",
  "B",
  "Autoionisation of water involves heterolytic bond cleavage. In one water molecule, the highly electronegative oxygen pulls the shared pair of electrons in an O-H bond toward itself until the bond cleaves: H:O:H → H⁺ + :O:H⁻. Oxygen retains the bonding electron pair, becoming a hydroxide ion (OH⁻) with a single negative charge and three lone pairs. The detached proton (H⁺) simultaneously attaches to a lone pair on a second water molecule, forming a coordinate bond in the hydronium ion (H₃O⁺)."
));

cases.push(makeChemCase(
  chapter, 42, "Covalent Nature of Beryllium Chloride vs Ionic Magnesium Chloride", "Fajan's Rules Applied to Group 2 Chlorides",
  "A metallurgist contrasts Beryllium Chloride (BeCl₂) and Magnesium Chloride (MgCl₂). Anhydrous MgCl₂ is a crystalline solid that melts at 714°C and readily conducts electricity in the molten state. Anhydrous BeCl₂ melts at a much lower temperature (405°C), does not conduct electricity in the liquid state, and dissolves easily in non-polar organic solvents like diethyl ether.",
  "Why is Beryllium Chloride predominantly covalent while Magnesium Chloride is predominantly ionic?",
  "Beryllium is a non-metal belonging to the halogen group.",
  "Be²⁺ has an exceptionally small ionic radius (31 pm) compared to Mg²⁺ (72 pm); its enormous charge-to-radius ratio (polarising power) strongly distorts the electron clouds of the Cl⁻ anions, conferring high covalent character.",
  "Magnesium chloride contains metallic bonds.",
  "Beryllium atoms absorb electrons from the air to form an octet.",
  "B",
  "According to Fajan's rules, covalent character is favored by small cation size. Be²⁺ is the smallest divalent cation in the periodic table (radius 31 pm vs Mg²⁺ 72 pm). Its charge density (z/r) is colossal. When Be²⁺ approaches the relatively large Cl⁻ anion (radius 181 pm), it pulls the anion's valence electrons into the region between the nuclei, forming shared covalent bonds. Thus, BeCl₂ forms polymeric covalent chains in the solid state and does not conduct electricity, unlike ionic MgCl₂."
));

cases.push(makeChemCase(
  chapter, 43, "Why Nitrogen Does Not Form $NCl_5$", "Covalency Cap in Second Period Elements",
  "In an industrial chlorine synthesis, phosphorus reacts with excess chlorine to produce stable Phosphorus Pentachloride (PCl₅). However, when nitrogen is treated with excess chlorine under identical conditions, only Nitrogen Trichloride (NCl₃) is obtained; Nitrogen Pentachloride (NCl₅) has never been synthesized and does not exist.",
  "Why is Nitrogen fundamentally incapable of forming a pentachloride (NCl₅)?",
  "Nitrogen is less electronegative than phosphorus.",
  "Nitrogen belongs to Period 2 and has an electronic configuration of 1s² 2s² 2p³; its valence shell (n=2) contains only four orbitals (one 2s and three 2p) with no vacant d-orbitals, capping its maximum covalency strictly at 4.",
  "Chlorine gas decomposes in the presence of nitrogen.",
  "Nitrogen atoms are too heavy to bind five chlorine atoms.",
  "B",
  "To form five covalent bonds in NCl₅, nitrogen would need to expand its valence shell to accommodate 10 electrons (5 shared pairs). Nitrogen is a Period 2 element with principal quantum number n=2, which possesses only 2s and 2p subshells (total 4 orbitals). It completely lacks d-orbitals. Because there are no energetically accessible empty orbitals to unpair and promote electrons, nitrogen has an absolute covalency ceiling of 4 (as in NH₄⁺). Phosphorus (Period 3) has vacant 3d orbitals, enabling PCl₅."
));

cases.push(makeChemCase(
  chapter, 44, "Polarisation and Color: Lead Iodide ($PbI_2$)", "Anion Distortion and Charge-Transfer Coloration",
  "In a classic qualitative analysis demonstration known as 'Golden Rain', a colorless solution of Lead(II) nitrate is mixed with a colorless solution of Potassium iodide. Instantly, an intensely brilliant golden-yellow precipitate of Lead(II) iodide (PbI₂) forms, which recrystallizes on cooling as sparkling golden-yellow hexagonal plates.",
  "Why is Lead(II) iodide intensely colored golden-yellow while Lead(II) fluoride (PbF₂) is a plain white solid?",
  "Potassium iodide contains yellow dye.",
  "Iodide (I⁻) is a much larger and more polarisable anion than Fluoride (F⁻); the strong polarisation of the I⁻ electron cloud by the Pb²⁺ cation narrows the energy gap, allowing visible blue light absorption via metal-ligand charge transfer, producing the complementary golden-yellow color.",
  "Lead fluoride decomposes into yellow lead metal in water.",
  "Iodine atoms are radioactive and glow yellow in the dark.",
  "B",
  "Color in heavy metal halides often arises from polarization-induced charge-transfer transitions. Pb²⁺ is a post-transition cation with high polarizing power. F⁻ is small and holds its electrons tightly, so PbF₂ is purely ionic and absorbs only in the ultraviolet (white). I⁻ is large (220 pm) with loosely bound valence electrons. Pb²⁺ heavily distorts the I⁻ electron cloud, transferring electron density into the metal-ligand bond. This narrows the HOMO-LUMO gap, absorbing high-energy blue/violet light and reflecting brilliant golden yellow."
));

cases.push(makeChemCase(
  chapter, 45, "Electronegativity Difference Criterion for Bond Character", "Pauling's 50% Ionic Character Threshold",
  "Linus Pauling proposed an empirical formula relating the difference in electronegativity (ΔEN = |χ_A - χ_B|) to the percentage of ionic character in a chemical bond: % Ionic Character = 16(ΔEN) + 3.5(ΔEN)². When ΔEN = 1.7, the bond has approximately 50% ionic and 50% covalent character.",
  "Based on this criterion, which pair of elements forms a predominantly covalent bond and which forms a predominantly ionic bond?\nPair 1: Hydrogen (2.1) and Chlorine (3.0)\nPair 2: Potassium (0.8) and Fluorine (4.0)",
  "Pair 1 is ionic (ΔEN = 2.1); Pair 2 is covalent (ΔEN = 0.8).",
  "Pair 1 is polar covalent (ΔEN = 0.9 < 1.7, ~19% ionic); Pair 2 is strongly ionic (ΔEN = 3.2 > 1.7, ~89% ionic).",
  "Both pairs form metallic bonds because both contain non-metals.",
  "Neither pair forms a bond because electronegativities are different.",
  "B",
  "For Pair 1 (H-Cl): ΔEN = 3.0 - 2.1 = 0.9. Since ΔEN is well below 1.7, the bond is predominantly covalent (specifically, a polar covalent bond with ~19% ionic character). For Pair 2 (K-F): ΔEN = 4.0 - 0.8 = 3.2. Because ΔEN is far greater than 1.7, electron transfer occurs completely from potassium to fluorine, yielding a classic electrovalent (ionic) bond with ~89% ionic character."
));

cases.push(makeChemCase(
  chapter, 46, "Paramagnetism of Diatomic Oxygen ($O_2$)", "Failure of Lewis Structure and Molecular Orbital Evidence",
  "A physics demonstration pours liquid Oxygen (O₂) between the magnetic pole pieces of a powerful permanent neodymium magnet. Liquid oxygen is suspended and sticks between the magnetic poles, proving it is paramagnetic. In contrast, the classic Lewis electron-dot structure (:O=O:) depicts all 12 valence electrons paired up as bond pairs or lone pairs.",
  "Why is oxygen paramagnetic, and how does this expose a fundamental limitation of the simple Lewis octet model?",
  "Oxygen absorbs iron particles from the magnet.",
  "Molecular Orbital (MO) theory proves that the two highest-energy electrons in O₂ occupy two degenerate antibonding π* orbitals with parallel spins (unpaired electrons), which the Lewis structure fails to predict because it forces all electrons into pairs.",
  "Oxygen has an odd number of protons in its nucleus.",
  "Liquid oxygen contains dissolved liquid iron.",
  "B",
  "The Lewis structure for O₂ (:O=O:) pairs all electrons into two lone pairs per oxygen and a central double bond (4 bonding e⁻), which would predict diamagnetism. However, liquid oxygen is strongly paramagnetic. Molecular Orbital (MO) theory resolves this: the 12 valence electrons fill the MOs up to the degenerate π*2p_x and π*2p_y orbitals. According to Hund's rule, these two highest-energy electrons occupy separate orbitals with parallel spins, creating two unpaired electrons that account for the observed paramagnetism."
));

cases.push(makeChemCase(
  chapter, 47, "Why Water Expands upon Freezing at 0°C", "Hexagonal Symmetry and Empty Ice Channels",
  "A homeowner forgets a sealed glass bottle completely filled with liquid water in an outdoor freezer at -10°C. The following morning, the bottle has shattered completely into fragments, and the frozen water occupies a volume approximately 9% larger than the original liquid.",
  "What molecular-scale bonding behavior causes water to expand upon freezing, unlike almost all other liquids which contract upon freezing?",
  "The water reacts with glass to produce carbon dioxide gas.",
  "As water cools to 0°C and solidifies, hydrogen bonds lock into an open hexagonal crystalline framework with large vacant internal channels; this rigid geometry requires more space per molecule than the disordered, closely packed liquid state.",
  "The glass contracts by 50% due to cold temperatures.",
  "Ice absorbs heavy water from the freezer atmosphere.",
  "B",
  "Almost all substances contract upon freezing because thermal kinetic motion decreases and molecules pack more tightly. Water is an extraordinary exception. In liquid water, thermal motion breaks and re-forms hydrogen bonds continuously, allowing molecules to pack closely. At 0°C, every water molecule forms four fixed, directional hydrogen bonds oriented tetrahedrally. This creates an open, cage-like hexagonal crystal lattice with empty interior channels. As a result, the volume increases by ~9%, exerting immense hydrostatic pressure that shatters rigid containers."
));

cases.push(makeChemCase(
  chapter, 48, "Why Hydrogen Bonds Cannot Form in $CH_4$ or $H_2S$", "Strict Criteria for Hydrogen Bond Formation",
  "A student wonders why Methane (CH₄, containing four hydrogen atoms) and Hydrogen Sulphide (H₂S, containing two hydrogen atoms) do not form hydrogen bonds, whereas Water (H₂O), Ammonia (NH₃), and Hydrogen Fluoride (HF) form strong hydrogen bonds.",
  "What two essential conditions are strictly required for an atom to form a hydrogen bond, which are absent in CH₄ and H₂S?",
  "The molecule must be in the solid state, and the temperature must be below 0°C.",
  "Hydrogen must be covalently bonded to an atom of (1) very high electronegativity (F, O, or N) and (2) very small atomic size, so that high positive charge density is created on the hydrogen atom.",
  "The molecule must contain metal cations and transition metals.",
  "The compound must be an organic hydrocarbon.",
  "B",
  "Hydrogen bond formation strictly requires two conditions: (1) The atom bonded to hydrogen must have high electronegativity (≥ 3.0 on Pauling's scale: F, O, N) to strongly polarize the covalent bond and generate a substantial positive charge (δ+) on hydrogen; (2) The atom must have a small atomic radius so that its unshared lone pair has high localized charge density to attract the positive hydrogen. In CH₄, carbon is not electronegative enough (2.5) and has no lone pair. In H₂S, sulphur has low electronegativity (2.5) and a large, diffuse 3p electron cloud, failing to create a significant hydrogen bond."
));

cases.push(makeChemCase(
  chapter, 49, "Solubility of Table Sugar (Covalent Sucrose) in Water", "Extensive Polyhydroxy Hydrogen Bonding",
  "A student in a chemistry lab observes that while non-polar covalent substances like naphthalene or hexane are completely insoluble in water, table sugar (sucrose, C₁₂H₂₂O₁₁, a purely covalent organic compound) dissolves abundantly in water (up to 2000 g per liter at 25°C).",
  "Why does the covalent sucrose molecule dissolve so exceptionally well in water despite containing zero ionic bonds?",
  "Sucrose decomposes into sodium and chloride ions in water.",
  "A sucrose molecule possesses 8 polar hydroxyl (-OH) groups on its ring framework; these form a dense network of intermolecular hydrogen bonds with polar water molecules, releasing sufficient hydration enthalpy to dissolve the crystal.",
  "Sugar is an acid that neutralizes water molecules.",
  "Water breaks sucrose into radioactive carbon atoms.",
  "B",
  "While non-polar covalent solids do not dissolve in water due to weak solvent-solute interactions, sucrose (table sugar) is a polyhydroxy molecule containing eight -OH groups attached to its disaccharide framework. When placed in water, each of these eight hydroxyl groups readily acts as both a hydrogen-bond donor and acceptor to surrounding water molecules. The extensive, highly favorable hydrogen-bonding network between sucrose and water overcomes the intermolecular forces within the sugar crystal, resulting in massive solubility."
));

cases.push(makeChemCase(
  chapter, 50, "Comparison of Single, Double, and Triple Bond Reactivity", "Presence and Vulnerability of π-Bonds in Alkenes and Alkynes",
  "An organic chemist bubbled three different gases through bromine water in separate test tubes: Ethane (C₂H₆, single bond C–C), Ethene (C₂H₄, double bond C=C), and Ethyne (C₂H₂, triple bond C≡C). Ethane causes NO change in the reddish-brown bromine water. Both Ethene and Ethyne decolorize bromine water rapidly at room temperature.",
  "Based on chemical bonding principles, why are double and triple bonds chemically far more reactive toward addition reactions than single covalent bonds?",
  "Single bonds contain mobile free electrons that repel bromine.",
  "A double bond consists of one strong σ-bond and one weaker, laterally overlapping π-bond; a triple bond consists of one σ-bond and two π-bonds; the diffuse π-electron clouds lie above and below the internuclear axis and are highly accessible and vulnerable to electrophilic attack.",
  "Ethene and ethyne are radioactive gases that destroy bromine atoms.",
  "Ethane has no electrons and cannot react with chemicals.",
  "B",
  "A single C-C bond is a σ-bond formed by direct coaxial overlap of hybrid orbitals along the internuclear axis, holding electrons tightly between the nuclei (chemically stable, unreactive). A double bond (C=C) contains one σ-bond and one π-bond; a triple bond (C≡C) contains one σ-bond and two π-bonds. π-bonds are formed by the parallel, sideways (lateral) overlap of p-orbitals. The resulting π-electron density is situated outside the internuclear axis, making the electrons loosely held, polarizable, and readily accessible to attack by electrophilic reagents like Br₂."
));

console.log(`[Ch2 Chemical Bonding] Generated ${cases.length} cases.`);

const BANK_DIR = path.join(__dirname, 'questionBank');
if (!fs.existsSync(BANK_DIR)) fs.mkdirSync(BANK_DIR, { recursive: true });

const outPath = path.join(BANK_DIR, 'chemistry_case_chemical_bonding.json');
fs.writeFileSync(outPath, JSON.stringify(cases, null, 2), 'utf8');
console.log(`Saved 50 cases to ${outPath}`);
