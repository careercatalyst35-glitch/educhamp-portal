const fs = require('fs');
const path = require('path');

const BANK_DIR = path.join(__dirname, '..', 'questionBank');

// 1. Clean Periodic Table
const ptPath = path.join(BANK_DIR, 'chemistry_periodic_table.json');
const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));

pt.forEach(q => {
  if (q.question.startsWith('s-block d-block p-block Central block highlighted')) {
    q.question = 'Refer to the periodic table diagram shown. Iron (Fe, atomic number 26) is highlighted in the central block. Which block and group does it belong to?';
  } else if (q.question.startsWith('1st and 8th positions: Li and Na')) {
    q.question = "According to Newlands' law of octaves, lithium and sodium occupy the 1st and 8th positions respectively. Which limitation is most accurately associated with Newlands' law?";
  } else if (q.question.startsWith('H 1 electron 1s¹ Li 2, 1 Loses 1 e⁻')) {
    q.question = "Refer to the diagram showing hydrogen's dual resemblance to Group 1 (alkali metals) and Group 17 (halogens). Why is hydrogen assigned an anomalous position in the periodic table?";
  } else if (q.question.startsWith('Al₂O₃ Aluminium oxide Acid Reacts Base Reacts')) {
    q.question = 'A student observes that aluminium oxide reacts with both acids and bases as shown in the diagram. Which conclusion correctly identifies the chemical nature of aluminium oxide?';
  } else if (q.question.startsWith('Atomic radius Metallic character Qualitative representation')) {
    q.question = 'Refer to the periodic trends diagram. Which statement correctly describes the general variation of atomic radius and metallic character across a period and down a group?';
  } else if (q.question.startsWith('Mg 2 valence e⁻ Transfer O 6 valence e⁻')) {
    q.question = 'Refer to the electron transfer diagram between magnesium and oxygen. Which explanation correctly follows from the transfer to form Mg²⁺ and O²⁻?';
  } else if (q.question.startsWith('s d p f-block: two detached rows An element has the outer')) {
    q.question = 'An element has the outer electronic configuration 3s² 3p⁵. Which block and group does it belong to in the modern periodic table?';
  } else if (q.question.startsWith('Each ion contains 10 electrons. Illustrative size ranking')) {
    q.question = 'Refer to the isoelectronic series shown (each ion contains 10 electrons: N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺). Which statement correctly accounts for their decreasing size?';
  } else if (q.question.startsWith('Historical ordering Tellurium 127.6 Iodine 126.9')) {
    q.question = "In Mendeleev's periodic table, tellurium (127.6) was placed before iodine (126.9). How was this atomic-mass anomaly resolved in the modern periodic table?";
  } else if (q.question.startsWith('Middle mass compared with the outer two')) {
    q.question = "In Dobereiner's triads, the atomic mass of sodium (23) is approximately the mean of lithium (7) and potassium (39). Which observation best supports this classification?";
  } else if (q.question.startsWith('Modern periodic table — schematic blocks s Left d Centre p Right')) {
    q.question = 'Refer to the schematic blocks of the modern periodic table shown. Which statement correctly classifies the positions of the s, p, d, and f blocks?';
  } else if (q.question.startsWith('K = 2 L = 8 M = 8 Argon · Atomic number 18')) {
    q.question = 'Argon has atomic number 18 and electronic configuration 2, 8, 8. Which explanation best accounts for argon’s low chemical reactivity under ordinary conditions?';
  } else if (q.question.startsWith('Metallic character and ease of electron loss increase')) {
    q.question = 'Down Group 1 (alkali metals), metallic character increases. Why does potassium lose its outer valence electron more readily than sodium?';
  } else if (q.question.startsWith('Common valencies of Period 2 elements')) {
    q.question = 'Refer to the valency trend across Period 2 elements from lithium to neon. Which statement correctly interprets the observed pattern?';
  } else if (q.question.startsWith('Cl atom** 17 electrons **Cl⁻ ion** 18 electrons')) {
    q.question = 'Refer to the size comparison between a neutral chlorine atom (17 e⁻) and a chloride anion (Cl⁻, 18 e⁻). Why is the chloride anion larger than the neutral atom?';
  } else if (q.question.startsWith('Na 1 valence e⁻ e⁻ transfer Cl 7 valence e⁻')) {
    q.question = 'Refer to the electron transfer diagram between sodium and chlorine. Which statement best explains the bonding and stability in sodium chloride?';
  } else if (q.question.startsWith('Approximate atomic mass Co 58.93 Ni 58.69')) {
    q.question = 'Cobalt (atomic mass 58.93, Z = 27) is placed before nickel (atomic mass 58.69, Z = 28). Why does the modern periodic table justify this ordering?';
  } else if (q.question.startsWith('Main body of the periodic table Lanthanides')) {
    q.question = 'Why are the lanthanide (Period 6) and actinide (Period 7) series placed as two detached horizontal rows at the bottom of the modern periodic table?';
  } else if (q.question.startsWith('K shell L shell M shell The diagram shows three occupied shells')) {
    q.question = 'An element’s Bohr diagram shows three occupied electron shells (K, L, M). Which conclusion regarding its period is justified?';
  } else if (q.question.startsWith('Qualitative trend for halogen reactivity')) {
    q.question = 'Down Group 17 (the halogens), reactivity decreases from fluorine to iodine. Which explanation best accounts for this decreasing reactivity?';
  } else if (q.question.startsWith('Chlorine water KBr solution Displacement possible')) {
    q.question = 'When chlorine water is added to an aqueous solution of potassium bromide (KBr), which outcome is expected based on halogen displacement?';
  } else if (q.question.startsWith('Qualitative first-ionisation-energy curve. The highlighted dip is from Mg to Al')) {
    q.question = 'Across Period 3, the first ionisation energy shows a dip from magnesium to aluminium. Which statement correctly explains why aluminium has a lower first ionisation energy than magnesium?';
  } else if (q.question.startsWith('For Groups 13–18, the usual valence-electron count is')) {
    q.question = 'For representative p-block elements (Groups 13 to 18), which rule correctly relates the number of valence electrons to the IUPAC group number?';
  } else if (q.question.startsWith('Mg 2 valence e⁻ 1 e⁻ to each Cl Cl Cl')) {
    q.question = 'Refer to the electron transfer diagram between magnesium and chlorine. Which statement correctly predicts the formula and ionic bonding in magnesium chloride?';
  } else if (q.question.startsWith('Neon 2, 8 Argon 2, 8, 8')) {
    q.question = 'Neon (configuration 2, 8) and argon (2, 8, 8) both have octet structures. Which statement most accurately explains why noble gases generally exhibit zero valency?';
  } else if (q.question.startsWith('valence e⁻ Which conclusion follows')) {
    q.question = 'Across Period 3, elements share the same number of occupied electron shells. Which conclusion follows regarding their valence electron count?';
  } else if (q.question.startsWith('18 groups Vertical columns 7 periods')) {
    q.question = 'The modern periodic table consists of 18 vertical columns (groups) and 7 horizontal rows (periods). Which statement correctly interprets this structural arrangement?';
  }
});

fs.writeFileSync(ptPath, JSON.stringify(pt, null, 2), 'utf8');
console.log('Sanitized Periodic Table questions!');

// 2. Clean Analytical Chemistry
const acPath = path.join(BANK_DIR, 'chemistry_analytical_chemistry.json');
const ac = JSON.parse(fs.readFileSync(acPath, 'utf8'));

ac.forEach(q => {
  if (q.question.startsWith('Solution A NaOH, then excess White ppt.')) {
    q.question = 'Two colourless solutions, A and B, are tested with NaOH and NH₄OH. Solution A forms a white precipitate that dissolves in excess of both reagents. Solution B forms a white precipitate that dissolves in excess NaOH, but remains insoluble in excess NH₄OH. Which identification is correct?';
  } else if (q.question.startsWith('Stage I Few drops NH₄OH Stage II Excess NH₄OH')) {
    q.question = 'A salt solution is tested in two stages: in Stage I, adding a few drops of aqueous NH₄OH produces a pale blue precipitate; in Stage II, adding excess NH₄OH dissolves the precipitate to form a deep inky blue solution. Which statement correctly explains the final stage?';
  } else if (q.question.startsWith('Unknown salt solution Add a few drops of NaOH Reddish brown precipitate')) {
    q.question = 'An unknown salt solution produces a reddish brown precipitate upon adding a few drops of NaOH, which remains insoluble when excess NaOH is added. Which cation is present?';
  } else if (q.question.startsWith('Tube I Excess NaOH Tube II Excess NH₄OH')) {
    q.question = 'A metal salt solution is tested in two tubes: Tube I with excess NaOH and Tube II with excess NH₄OH. Both yield a gelatinous white precipitate that dissolves in excess reagent. Which cation is present?';
  } else if (q.question.startsWith('Few drops NaOH Excess NaOH Which explanation is correct if the unknown solution is ZnSO₄?')) {
    q.question = 'When aqueous sodium hydroxide is added dropwise and then in excess to zinc sulphate solution (ZnSO₄), which explanation correctly accounts for the observation?';
  }
});

fs.writeFileSync(acPath, JSON.stringify(ac, null, 2), 'utf8');
console.log('Sanitized Analytical Chemistry questions!');

// 3. Clean Chemical Bonding
const cbPath = path.join(BANK_DIR, 'chemistry_chemical_bonding.json');
const cb = JSON.parse(fs.readFileSync(cbPath, 'utf8'));

cb.forEach(q => {
  if (q.question.trim() === 'Which conclusion is correct?') {
    q.question = `Refer to the chemical bonding diagram for ${q.title || 'the compound'}. Which conclusion regarding the formation and stability of the bond is correct?`;
  } else if (q.question.trim() === 'Which explanation is correct?') {
    q.question = `Refer to the experimental bonding diagram for ${q.title || 'the substance'}. Which explanation correctly accounts for the observed property?`;
  } else if (q.question.trim() === 'Which statement is correct?') {
    q.question = `Refer to the electron configuration and bonding diagram. Which statement correctly describes the nature of the bond?`;
  }
});

fs.writeFileSync(cbPath, JSON.stringify(cb, null, 2), 'utf8');
console.log('Sanitized Chemical Bonding questions!');
