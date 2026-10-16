const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Radioactivity";

const radioactivityCases = [
  makeCase(
    chapter, 1, "Radioactivity as a Purely Nuclear Phenomenon", "Invariance Under Chemical and Physical Changes",
    "In a nuclear research laboratory, a sample of radioactive radium chloride (RaCl₂) is subjected to extreme conditions: (1) heated in an electric arc furnace to 2500°C, (2) cooled to near absolute zero (2 K) in liquid helium, (3) compressed in a diamond anvil cell to 500,000 atmospheres, and (4) reacted chemically with sulfuric acid to precipitate insoluble radium sulfate (RaSO₄).",
    "How does the half-life and decay rate (activity) of the radium atoms change across these four extreme tests?",
    "Heating speeds up decay by 50%; cooling stops decay completely.",
    "The decay rate and half-life remain strictly, identically unchanged across all tests, proving that radioactivity originates solely within the atomic nucleus and is completely independent of orbital electron configurations, chemical bonds, pressure, or temperature.",
    "Reacting with sulfuric acid converts radium into a non-radioactive isotope.",
    "Compression increases the half-life tenfold by squeezing the nucleus.",
    "B",
    "Radioactivity is a spontaneous nuclear phenomenon involving the decay of unstable atomic nuclei. Chemical reactions, temperature, pressure, oxidation states, and electric/magnetic fields affect only the valence electronic shells, which involve electron-volt energy scales (~eV). Nuclear binding forces operate inside the nucleus at mega-electron-volt energy scales (~MeV). Thus, external physical and chemical environments have zero effect on nuclear decay rate."
  ),
  makeCase(
    chapter, 2, "Alpha Particle Nature, Charge, and Mass", "Characteristics of Doubly Ionized Helium Nuclei",
    "Ernest Rutherford and Thomas Royds fired alpha particles emitted from radon gas through an ultra-thin glass wall into an evacuated discharge tube. After several days of collection, an electric discharge was passed through the collected gas, and its optical emission spectrum was analyzed.",
    "What gas spectrum was observed in the discharge tube, confirming the physical identity of alpha particles?",
    "Hydrogen gas spectrum, proving alpha particles are protons.",
    "Helium gas spectrum, proving that an alpha particle is a helium nucleus consisting of 2 protons and 2 neutrons (doubly ionized helium ion, He²⁺) of mass ~4 u and charge +2e.",
    "Oxygen gas spectrum, proving alpha particles are ozone ions.",
    "Nitrogen gas spectrum, proving alpha particles are atmospheric fragments.",
    "B",
    "Rutherford and Royds' famous 1909 experiment proved conclusively that alpha particles are bare helium nuclei (⁴₂He²⁺). An alpha particle consists of two protons and two neutrons tightly bound by strong nuclear forces (mass = 4.0015 u, electric charge = +2e = +3.2 × 10⁻¹⁹ C). Upon capturing two free orbital electrons from its surroundings, every alpha particle neutralizes into a normal helium atom."
  ),
  makeCase(
    chapter, 3, "Beta-Minus Decay Mechanism and Origin in the Nucleus", "Neutron to Proton Conversion and Antineutrino Emission",
    "Since an atomic nucleus contains only protons and neutrons and contains zero electrons, a physics student wonders how a radioactive nucleus can emit a high-speed beta-minus (β⁻) electron during radioactive decay.",
    "What subatomic nuclear transformation produces the beta-minus electron emitted from the nucleus?",
    "An orbital electron from the K-shell is sucked into the nucleus and ejected.",
    "An unstable neutron inside the nucleus spontaneously transforms into a proton, creating an electron (the beta particle) and an antineutrino, which are immediately ejected: n -> p + e⁻ + ν̅.",
    "Protons lose positive charge by friction, turning into electrons.",
    "Nuclear binding energy condenses directly into static electricity.",
    "B",
    "In a neutron-rich nucleus, stability is attained when a neutron decays via the weak nuclear interaction: ¹₀n -> ¹₁p + ⁰₋₁e⁻ + ν̅_e. The newly created proton remains bound inside the nucleus (increasing atomic number Z by 1), while the electron (β⁻ particle) and electron antineutrino (ν̅_e) are instantaneously expelled at relativistic speeds."
  ),
  makeCase(
    chapter, 4, "Comparison of Ionizing Power: Alpha vs Beta vs Gamma", "Differential Ionization Densities in Gas Chambers",
    "A cloud chamber is exposed to alpha particles, beta particles, and gamma rays. The track detector reveals: Radiation A produces broad, dense, continuous, thick straight vapor tracks. Radiation B produces thin, wispy, erratic zig-zag tracks. Radiation C produces no direct tracks, only sparse isolated specks where secondary electrons are liberated.",
    "What are the identities of Radiations A, B, and C, and what is their relative order of ionizing power?",
    "A: Gamma; B: Beta; C: Alpha (Gamma > Beta > Alpha)",
    "A: Alpha; B: Beta; C: Gamma (Alpha ~ 10,000 > Beta ~ 100 > Gamma = 1)",
    "A: Beta; B: Alpha; C: Gamma (Beta > Alpha > Gamma)",
    "All three radiations produce identical track densities.",
    "B",
    "Ionizing power depends on electric charge and velocity. Alpha particles carry double positive charge (+2e) and move relatively slowly (~1.5 × 10⁷ m/s), exerting strong Coulomb forces on gas atoms to produce ~10,000 ion pairs per millimeter (thick straight tracks). Beta particles have single charge (-e) and high relativistic speeds, ionizing ~100 times less (thin zig-zag tracks due to electron collisions). Gamma rays are uncharged photons, ionizing only indirectly via rare Compton/photoelectric interactions."
  ),
  makeCase(
    chapter, 5, "Comparison of Penetrating Power: Alpha vs Beta vs Gamma", "Shielding Materials and Absorption Thicknesses",
    "A radiation safety officer sets up a Geiger-Muller counter behind various shields: Shield 1 is a single sheet of copy paper (0.1 mm thick); Shield 2 is a 5 mm aluminum plate; Shield 3 is a 10 cm thick dense lead block.",
    "Which radiation is stopped by Shield 1 (paper), which penetrates Shield 1 but is stopped by Shield 2 (aluminum), and which requires Shield 3 (lead)?",
    "Paper stops Gamma; Aluminum stops Beta; Lead stops Alpha.",
    "Paper stops Alpha; Aluminum stops Beta; Lead attenuates Gamma.",
    "Paper stops Beta; Aluminum stops Alpha; Lead stops Gamma.",
    "All three penetrate paper and aluminum with zero attenuation.",
    "B",
    "Penetrating power is inversely related to ionizing power: (1) Alpha particles lose energy rapidly through intense ionization, completely absorbed by a sheet of paper or 3–5 cm of air. (2) Beta particles have lower mass and charge, penetrating paper but completely stopped by ~3–5 mm of aluminum or 1 m of air. (3) Gamma rays, possessing zero rest mass and charge, interact weakly with matter, requiring decimeters of lead or thick reinforced concrete to attenuate them."
  ),
  makeCase(
    chapter, 6, "Alpha Decay Displacement Law (Soddy-Fajans Rule)", "Nuclear Transformation: ΔA = -4 and ΔZ = -2",
    "A radioactive uranium-238 nucleus (²³⁸₉₂U) undergoes alpha decay to form a thorium daughter nucleus (Th) with the emission of an alpha particle (⁴₂He).",
    "What are the mass number A and atomic number Z of the resulting thorium nucleus?",
    "Mass number A = 234; Atomic number Z = 90 (²³⁴₉₀Th)",
    "Mass number A = 236; Atomic number Z = 91",
    "Mass number A = 238; Atomic number Z = 94",
    "Mass number A = 242; Atomic number Z = 90",
    "A",
    "According to the Soddy-Fajans alpha decay law: when a parent nucleus emits an alpha particle (⁴₂He), its mass number decreases by 4 and its atomic number decreases by 2: ²³⁸₉₂U -> ²³⁴₉₀Th + ⁴₂He. The daughter thorium nucleus lies two places to the left in the periodic table."
  ),
  makeCase(
    chapter, 7, "Beta-Minus Decay Displacement Law and Isobar Formation", "Nuclear Transformation: ΔA = 0 and ΔZ = +1",
    "A radioactive carbon-14 nucleus (¹⁴₆C) used in archaeological radiocarbon dating undergoes beta-minus decay to produce a stable nitrogen nucleus (N).",
    "What are the mass number A and atomic number Z of the daughter nitrogen nucleus, and what nuclear relationship exists between parent and daughter?",
    "A = 13, Z = 7; they are isotopes.",
    "A = 14, Z = 7 (¹⁴₇N); they are isobars (nuclei with identical mass number A = 14 but different atomic numbers Z).",
    "A = 14, Z = 5; they are isotones.",
    "A = 10, Z = 4; they are isomers.",
    "B",
    "In beta-minus decay, a neutron converts to a proton inside the nucleus: ¹⁴₆C -> ¹⁴₇N + ⁰₋₁e⁻ + ν̅. Total nucleon count (mass number A) remains 14 (ΔA = 0), while atomic number increases by 1 from 6 to 7 (ΔZ = +1). Nuclei with the same mass number A but different atomic numbers Z are isobars. The daughter shifts one place to the right in the periodic table."
  ),
  makeCase(
    chapter, 8, "Gamma Ray Emission: De-Excitation of Excited Nuclear States", "Nuclear Isomeric Transitions with Zero Change in A and Z",
    "Following an alpha or beta decay, the daughter nucleus is frequently left in an energetically excited nuclear state, designated as (AZ X*). To shed this excess binding energy, the nucleus emits a gamma-ray photon (γ) to reach the ground state.",
    "How do the mass number A and atomic number Z of the nucleus change during gamma ray emission?",
    "Mass number decreases by 1; atomic number increases by 1.",
    "Both mass number A and atomic number Z remain strictly unchanged (ΔA = 0, ΔZ = 0); the nucleus merely transitions from a higher nuclear energy level to a lower stable energy level.",
    "Mass number decreases by 2; atomic number decreases by 1.",
    "Atomic number increases by 2; mass number remains unchanged.",
    "B",
    "Gamma emission is the nuclear analogue of atomic photon emission. When an excited nucleus transitions to a lower energy state: AZ X* -> AZ X + γ. Because a photon carries zero rest mass and zero electric charge, there is no change in the number of protons or neutrons: ΔZ = 0 and ΔA = 0. The chemical identity and isotopic species remain identical."
  ),
  makeCase(
    chapter, 9, "Radioactive Decay Series: Calculating Number of Alpha and Beta Particles", "Sequential Decay from Uranium-238 to Lead-206",
    "A primordial uranium-238 nucleus (²³⁸₉₂U) undergoes a long radioactive decay cascade through successive alpha and beta emissions, terminating at a stable lead-206 nucleus (²⁰⁶₈₂Pb).",
    "How many alpha (α) particles and beta (β⁻) particles are emitted during this entire decay series?",
    "6 alpha particles and 8 beta particles",
    "8 alpha particles and 6 beta particles",
    "4 alpha particles and 2 beta particles",
    "8 alpha particles and 8 beta particles",
    "B",
    "Only alpha decay alters the mass number (each α reduces A by 4). Change in mass number: ΔA = 238 - 206 = 32. Number of alpha particles: n_α = ΔA / 4 = 32 / 4 = 8 alpha particles. Each alpha particle decreases Z by 2, so 8 alpha decays decrease Z by 8 × 2 = 16 (from 92 to 76). However, the final atomic number is Z = 82 (lead). The difference is restored by beta decays (each β⁻ increases Z by 1): n_β = 82 - 76 = 6 beta particles. Thus: 8 α and 6 β⁻."
  ),
  makeCase(
    chapter, 10, "Half-Life Calculation of a Radioactive Sample", "Exponential Decay Law N = N₀ (1/2)^n",
    "A radiochemist prepares a fresh 80 mg sample of radioactive iodine-131 (¹³¹I), which has a half-life of T_1/2 = 8.0 days. The sample is stored safely in a lead-lined vault.",
    "What mass of radioactive iodine-131 remains undecayed after 32 days?",
    "40 mg",
    "20 mg",
    "5.0 mg",
    "2.5 mg",
    "C",
    "The number of half-life periods elapsed is n = t / T_1/2 = 32 days / 8.0 days = 4 half-lives. The remaining mass of undecayed radioactive substance is given by m = m₀ × (1/2)ⁿ = 80 mg × (1/2)⁴ = 80 mg × (1/16) = 5.0 mg. (75 mg has decayed into stable xenon-131)."
  ),
  makeCase(
    chapter, 11, "Activity of a Radioactive Source and the Becquerel (Bq)", "Decay Constant and Activity Formula A = λN",
    "A medical cobalt-60 (⁶⁰Co) radiotherapy capsule contains N = 3.7 × 10¹⁶ radioactive atoms. The decay constant for cobalt-60 is λ = 4.17 × 10⁻⁹ s⁻¹.",
    "What is the activity A of this radiotherapy source in Becquerels (Bq) and in Curies (Ci)?",
    "A = 1.54 × 10⁸ Bq ≈ 4.17 mCi",
    "A = 3.7 × 10¹⁰ Bq = 1.0 Ci",
    "A = 1.54 × 10¹⁰ Bq ≈ 0.417 Ci",
    "A = 1000 Bq = 1.0 μCi",
    "A",
    "Activity A is the number of disintegrations per second: A = λ × N = (4.17 × 10⁻⁹ s⁻¹) × (3.7 × 10¹⁶ atoms) ≈ 1.543 × 10⁸ disintegrations per second (Becquerels, Bq). Since 1 Curie (Ci) = 3.7 × 10¹⁰ Bq: Activity in Curies = (1.543 × 10⁸) / (3.7 × 10¹⁰) ≈ 4.17 × 10⁻³ Ci = 4.17 mCi."
  ),
  makeCase(
    chapter, 12, "Background Radiation: Cosmic Rays, Radon Gas, and Internal Radioisotopes", "Ubiquitous Environmental Radiation Exposure",
    "A health physicist measures the count rate of an empty radiation lab using a sensitive scintillation detector with no radioactive sources present. The detector consistently registers 25 to 30 counts per minute.",
    "What accounts for this persistent baseline count rate, and what are its major natural sources?",
    "Electrical noise from the building's 50 Hz AC wiring.",
    "Natural background radiation, originating from cosmic rays entering from outer space, radon gas (²²²Rn) seeping from subterranean granite, and primordial radionuclides (⁴⁰K, ¹⁴C) naturally present in rocks, building bricks, food, and human bones.",
    "Thermal infrared radiation emitted by room air molecules.",
    "Leakage of radio waves from nearby FM radio towers.",
    "B",
    "Background radiation is ubiquitous. Natural sources contribute ~80% of human annual dose: (1) Radon-222 gas, an alpha-emitting noble gas product of subterranean uranium decay, accumulates in basements and soil. (2) Cosmic radiation from stellar/solar sources. (3) Terrestrial radionuclides in rocks and concrete (uranium, thorium decay chains). (4) Internal radioisotopes inside the human body (mainly Potassium-40, ⁴⁰K, and Carbon-14, ¹⁴C)."
  ),
  makeCase(
    chapter, 13, "Carbon-14 Dating of Ancient Wooden Artifacts", "Radiocarbon Equilibrium and Beta Decay of Carbon-14",
    "An archaeologist discovers an ancient wooden ceremonial bowl in an Egyptian tomb. Living wood exhibits a Carbon-14 activity of 16.0 disintegrations per minute per gram of carbon (dpm/g). Laboratory accelerator mass spectrometry reveals that the ancient wooden bowl has an activity of only 4.0 dpm/g. The half-life of Carbon-14 is 5,730 years.",
    "How old is the archaeological wooden bowl?",
    "2,865 years old",
    "5,730 years old",
    "11,460 years old",
    "22,920 years old",
    "C",
    "While an organism is alive, continuous photosynthesis and food intake maintain Carbon-14 in dynamic equilibrium with atmospheric ¹⁴C/¹²C ratio (16 dpm/g). Upon death, carbon intake ceases and ¹⁴C decays (half-life 5,730 years). Current activity / Initial activity = 4.0 / 16.0 = 1/4 = (1/2)². Exactly n = 2 half-lives have elapsed. Age = 2 × 5,730 years = 11,460 years."
  ),
  makeCase(
    chapter, 14, "Thickness Gauging in Paper Manufacturing Using Beta Radiation", "Non-Contact Industrial Quality Control with Beta Attenuation",
    "In a high-speed papermaking mill, continuous paper rolls moving at 20 m/s pass between a beta radiation source (Krypton-85 or Strontium-90) positioned below the sheet and a radiation detector mounted above it.",
    "Why is a beta source chosen over alpha or gamma sources for measuring the thickness of paper sheets?",
    "Alpha particles would burn through the paper with intense heat.",
    "Alpha particles cannot penetrate even a single sheet of paper, while gamma rays are too penetrating and would pass through with virtually zero attenuation; beta particles are partially attenuated by paper, so detected count rate varies sensitively with paper thickness and density.",
    "Gamma rays would make the paper radioactive.",
    "Beta particles reflect off paper like a mirror.",
    "B",
    "For thickness gauging, the radiation attenuation must be highly sensitive to microscopic changes in sheet thickness. Alpha particles are completely absorbed by paper (zero transmission). Gamma rays penetrate easily with < 0.1% attenuation (zero sensitivity). Beta particles are moderately absorbed (exponential attenuation I = I₀ e^(-μx)); small thickness variations produce sharp changes in transmitted beta counts, allowing real-time roller adjustment."
  ),
  makeCase(
    chapter, 15, "Medical Radiotherapy: Cobalt-60 Gamma Knife for Deep Tumors", "High Penetration of Gamma Rays in Cancer Therapy",
    "An oncology department uses a Cobalt-60 teletherapy machine (emitting gamma photons of 1.17 MeV and 1.33 MeV) to treat deep-seated brain tumors. Multiple collimated gamma beams converge precisely at the tumor target from multiple angles while the patient's head remains immobilized.",
    "Why are gamma rays chosen for deep tumor therapy rather than alpha or beta particles?",
    "Alpha and beta particles cannot penetrate skin and skull bone to reach deep brain tissue; high-energy gamma rays penetrate deeply with cross-firing beams delivering a lethal ionizing dose at the focal intersection while sparing surrounding healthy tissue.",
    "Gamma rays only kill cancerous cells while leaving all other cells completely unaffected.",
    "Gamma rays carry negative charge that attracts tumor blood vessels.",
    "Alpha particles would turn the patient's skull into gold.",
    "A",
    "Alpha particles cannot penetrate dead stratum corneum of skin (~0.05 mm), and beta particles penetrate only ~5–10 mm in soft tissue. For tumors buried centimeters deep, deeply penetrating gamma radiation is mandatory. By rotating multiple weak gamma beams that intersect at the exact stereotactic focal point of the tumor (Gamma Knife), the tumor receives a destructive cumulative radiation dose while surrounding healthy brain tissue receives minimal exposure."
  ),
  makeCase(
    chapter, 16, "Radioactive Tracers: Detecting Underground Water Pipe Leaks with Sodium-24", "Short Half-Life Radiotracers for Leak Detection",
    "A municipal water utility suspects an underground drinking water pipe is leaking beneath city streets. Engineers inject a tiny amount of Sodium-24 (²⁴Na, a beta/gamma emitter with a half-life of 15 hours) into the water pipeline and trace the pipeline route on the surface with a Geiger-Muller counter.",
    "How is the exact leak location pinpointed, and why is Sodium-24 safe to use in municipal water?",
    "The pipe explodes at the leak location.",
    "Water pooling into the surrounding soil at the leak site creates a sharp spike in detected surface radiation; Sodium-24 has a very short half-life (15 hours), so its radioactivity decays away completely to harmless trace levels within a few days.",
    "Sodium-24 turns the leaking water bright fluorescent green.",
    "The detector measures the temperature rise caused by nuclear fusion.",
    "B",
    "Where a pipe is cracked, radioactive water seeps into adjacent soil, accumulating a concentrated pool that registers as an unmistakable localized peak count rate on surface Geiger counters. Sodium-24 is ideal because: (1) it emits penetrating gamma rays detectable through soil, and (2) its 15-hour half-life ensures that after 10 half-lives (~6 days), its radioactivity is reduced by 2¹⁰ = 1024 times, leaving the water completely safe."
  ),
  makeCase(
    chapter, 17, "Radiation Protection Rules and Safety Equipment in Nuclear Laboratories", "Time, Distance, Shielding, and Dosimetry",
    "A nuclear physics technician handles a strong gamma radiation source. The lab safety protocol mandates: (1) minimizing exposure time, (2) handling sources with 1-meter-long remote tongs, (3) working behind a thick lead-glass shield, and (4) wearing a personal thermoluminescent dosimeter (TLD) badge.",
    "What physical radiation protection principles justify the use of long tongs and lead shielding?",
    "Tongs prevent static electricity; lead cools the radiation down.",
    "By the inverse square law (I ∝ 1/r²), doubling distance reduces radiation dose rate fourfold (1-meter tongs reduce dose by 100-fold compared to 10 cm); dense lead provides high atomic number (Z = 82) to attenuate gamma photons by photoelectric and Compton absorption.",
    "Tongs reflect gamma rays back toward the floor.",
    "Lead absorbs neutrons and converts them into alpha particles.",
    "B",
    "The fundamental tenets of radiation safety are Time, Distance, and Shielding: (1) Distance is immensely powerful: radiation intensity follows the inverse-square law (I ∝ 1/r²); increasing distance from 1 cm to 100 cm with tongs reduces dose rate by 10,000 times! (2) Shielding: Lead (Pb, Z = 82, density 11.3 g/cm³) has high electron density, maximizing photon attenuation via photoelectric effect and Compton scattering."
  ),
  makeCase(
    chapter, 18, "Nuclear Fission: Uranium-235 Fission by Slow (Thermal) Neutrons", "Fission Reaction, Fragment Nuclei, and Mass Defect",
    "In a commercial nuclear power reactor, a slow thermal neutron (kinetic energy ~0.025 eV) is absorbed by a uranium-235 nucleus (²³⁵₉₂U), forming an unstable uranium-236 compound nucleus which violently fissions into barium-141 (¹⁴¹₅₆Ba), krypton-92 (⁹²₃₆Kr), and 3 fast neutrons.",
    "What is the source of the immense energy (~200 MeV) released in this nuclear fission reaction?",
    "Combustion of uranium atoms with oxygen gas.",
    "The total rest mass of the fission products and emitted neutrons is slightly less than the initial mass of the uranium nucleus plus incident neutron; this mass defect Δm is converted into energy via Einstein's mass-energy equivalence: ΔE = Δm · c².",
    "Kinetic energy created by gravitational compression of the reactor core.",
    "Electrostatic repulsion between water molecules in the cooling pool.",
    "B",
    "Fission: ²³⁵₉₂U + ¹₀n -> ²³⁶₉₂U* -> ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + Q. The sum of the masses of the daughter fragments and neutrons is strictly less than the initial reactants (mass defect Δm ≈ 0.215 u per fission). According to Einstein's equation ΔE = Δm · c² (where 1 u = 931.5 MeV), this missing mass is transformed into ~200 MeV of kinetic energy of fragments and gamma radiation."
  ),
  makeCase(
    chapter, 19, "Nuclear Fusion: Thermonuclear Fusion in the Core of the Sun", "Proton-Proton Chain and Extreme Ignition Conditions",
    "In the deep core of the Sun at temperatures exceeding 15 million Kelvin and pressures exceeding 250 billion atmospheres, four hydrogen nuclei (protons) fuse through the proton-proton chain to form one stable helium-4 nucleus (⁴₂He), two positrons, two neutrinos, and gamma photons.",
    "Why does nuclear fusion require extraordinarily high temperatures and pressures that do not exist naturally on Earth's surface?",
    "To prevent hydrogen from freezing into ice.",
    "Protons carry positive electric charges and strongly repel each other via Coulomb's electrostatic force; extreme thermal kinetic energy (> 10⁷ K) is required to overcome this electrostatic repulsion barrier so nuclei can approach within 10⁻¹⁵ m where attractive strong nuclear forces take over.",
    "High pressure is required to break helium into neutrons.",
    "Hydrogen atoms need high temperatures to absorb sound waves.",
    "B",
    "For two nuclei to fuse, they must overcome the formidable Coulomb electrostatic repulsion barrier between positively charged protons (F ∝ q1·q2 / r²). At ordinary temperatures, thermal velocities are far too low, causing nuclei to bounce apart. At temperatures > 10⁷ K, thermal kinetic energy (KE = (3/2)kT) is sufficiently high that colliding nuclei penetrate the Coulomb barrier, allowing the short-range (< 10⁻¹⁵ m) strong nuclear force to bind them together."
  ),
  makeCase(
    chapter, 20, "Controlled Nuclear Chain Reaction: Moderators and Control Rods", "Role of Heavy Water/Graphite and Boron/Cadmium Rods",
    "A pressurized heavy water nuclear reactor (PHWR) maintains a critical chain reaction where the multiplication factor is exactly k = 1.00. The core contains fuel bundles of natural uranium, a heavy water (D₂O) moderator, and movable cadmium or boron control rods.",
    "What are the specific functions of the heavy water moderator and the cadmium control rods?",
    "Moderator cools the electrical generator; cadmium rods generate electricity directly.",
    "The moderator slows down fast fission neutrons (from 2 MeV to 0.025 eV thermal neutrons) via elastic collisions so they can be captured by ²³⁵U; cadmium/boron control rods absorb excess neutrons to regulate or safely shut down the chain reaction.",
    "Moderator reflects gamma rays; control rods accelerate neutrons to light speed.",
    "Moderator converts uranium into plutonium; control rods melt the fuel.",
    "B",
    "Fission neutrons are born fast (~2 MeV), but ²³⁵U has a very small cross-section for fast neutrons and captures slow thermal neutrons (~0.025 eV) with vastly higher probability. A moderator (D₂O or graphite) has light nuclei that elastically scatter fast neutrons, slowing them without absorbing them. Control rods (cadmium or boron) have huge neutron-absorption cross-sections; inserting them absorbs neutrons, reducing k below 1 to safely halt the reaction."
  ),
  makeCase(
    chapter, 21, "Energy Yield Comparison: Nuclear Fusion vs Nuclear Fission", "Energy Output per Unit Mass of Reactants",
    "An energy engineer compares the energy released per unit mass from two nuclear fuels: 1.0 kg of Uranium-235 undergoing fission, versus 1.0 kg of a Deuterium-Tritium mixture undergoing thermonuclear fusion.",
    "How does the energy released per kilogram in nuclear fusion compare with that in nuclear fission?",
    "Fission releases 100 times more energy per kilogram than fusion.",
    "Fusion releases approximately 3 to 4 times more energy per kilogram than fission (approx 3.4 × 10¹⁴ J/kg for D-T fusion vs 8.2 × 10¹³ J/kg for U-235 fission), because the mass defect percentage is significantly higher for light nuclei fusing than for heavy nuclei fissioning.",
    "Both processes release identical energy per kilogram.",
    "Fission releases energy while fusion absorbs net energy.",
    "B",
    "Although a single U-235 fission releases ~200 MeV and a single D-T fusion releases 17.6 MeV, the reactants in fusion are vastly lighter! A U-235 atom has mass 235 u (energy density = 200 MeV / 235 u ≈ 0.85 MeV/u). A D-T pair has mass 2 + 3 = 5 u (energy density = 17.6 MeV / 5 u ≈ 3.52 MeV/u). Thus, nuclear fusion yields over 4 times more energy per unit mass of fuel than nuclear fission."
  ),
  makeCase(
    chapter, 22, "Biological Damage of Ionizing Radiation: Somatic vs Genetic Effects", "Radiation Damage to Cellular DNA and Carcinogenesis",
    "A radiobiologist classifies the physiological health hazards of ionizing radiation exposure into somatic injuries (affecting the irradiated individual) and genetic mutations (affecting future offspring).",
    "What cellular mechanism causes radiation-induced cancers and hereditary genetic mutations?",
    "Radiation boils cytoplasmic water by microwave heating.",
    "Ionizing radiation directly breaks covalent bonds in nuclear DNA strands or radiolyzes intracellular water into reactive free radicals (·OH), causing un-repaired double-strand DNA breaks that lead to uncontrolled cellular proliferation (cancer) or defective gamete chromosomes.",
    "Radiation magnetizes hemoglobin, stopping blood circulation.",
    "Radiation turns cellular proteins into radioactive isotopes.",
    "B",
    "Ionizing radiation damages biological tissue via direct and indirect action: Direct action ionizes atoms in the DNA backbone, causing single- and double-strand breaks. Indirect action radiolyzes water molecules (H₂O -> H⁺ + ·OH), generating highly reactive hydroxyl free radicals that chemically attack DNA bases. Mismatched repair can silence tumor-suppressor genes, initiating cancer, or alter germline DNA in sperm/ova, transmitting mutations to offspring."
  ),
  makeCase(
    chapter, 23, "Disposal of High-Level Nuclear Waste in Deep Geological Repositories", "Shielding and Transmutation of Long-Lived Actinides",
    "Spent nuclear fuel removed from power reactors contains intensely radioactive fission products (Cesium-137, Strontium-90, half-lives ~30 years) and long-lived transuranic actinides (Plutonium-239, half-life 24,100 years).",
    "What is the accepted international engineering strategy for long-term safe containment of high-level nuclear waste?",
    "Dumping the waste into ocean trenches or shooting it into the Sun.",
    "Vitrification (immobilizing waste into molten borosilicate glass blocks), encasing in corrosion-resistant copper/steel canisters, and burying in stable, deep geological repositories 500 meters underground in ancient granite or salt formations.",
    "Diluting the waste with tap water and spraying it over agricultural fields.",
    "Burning the waste in municipal trash incinerators.",
    "B",
    "High-level nuclear waste remains hazardous for tens of thousands of years. The proven multi-barrier disposal method involves: (1) Vitrification: high-level liquid waste is fused into chemically inert, leach-resistant borosilicate glass. (2) Encapsulation: sealed inside thick copper/stainless-steel canisters. (3) Deep Geological Repository (DGR): burial 500+ meters deep in dry, seismically stable bedrock sealed with swelling bentonite clay."
  ),
  makeCase(
    chapter, 24, "Mass Defect and Nuclear Binding Energy per Nucleon Curve", "Peak Nuclear Stability Around Iron-56",
    "A graph of nuclear binding energy per nucleon (B/A) versus atomic mass number A rises steeply from hydrogen, peaks at approximately 8.8 MeV per nucleon for iron-56 (⁵⁶₂₆Fe), and then gradually declines toward 7.6 MeV per nucleon for heavy nuclei like uranium-238.",
    "How does the peak of the binding energy curve at iron-56 explain why both nuclear fusion of light elements and nuclear fission of heavy elements release energy?",
    "Iron-56 is the most radioactive element in the universe.",
    "Systems transition toward greater nuclear stability (higher binding energy per nucleon); fusing light nuclei (below iron) climbs the curve releasing energy, and splitting heavy nuclei (above iron) moves toward the iron peak, also releasing energy.",
    "Fission and fusion both convert iron into hydrogen.",
    "Binding energy per nucleon is zero for all stable elements.",
    "B",
    "Binding energy per nucleon represents the tightness with which nucleons are bound. Iron-56 lies at the global thermodynamic pinnacle of nuclear stability (~8.8 MeV/nucleon). Fusing light elements (A < 20) moves the system up the steep left slope toward iron, increasing binding energy and converting mass defect into kinetic energy. Fissioning heavy elements (A > 200) splits large nuclei into middle-mass fragments closer to iron, releasing ~0.8 MeV/nucleon."
  ),
  makeCase(
    chapter, 25, "Deflection of Nuclear Radiations in an Electric Field", "Separation of Alpha, Beta, and Gamma Beams",
    "A narrow beam of emissions from a radium source passes between two parallel metal plates connected to a high-voltage DC source: Plate 1 is at +5000 V and Plate 2 is at -5000 V.",
    "How does the electric field separate the three components of the radiation beam?",
    "Alpha bends sharply toward positive; Beta bends gently toward negative; Gamma goes straight.",
    "Alpha particles (+2e) deflect gently toward the negative plate; Beta particles (-e) deflect sharply toward the positive plate; Gamma rays (uncharged) pass through straight without any deflection.",
    "All three radiations deflect toward the negative plate.",
    "Gamma rays deflect toward both plates simultaneously.",
    "B",
    "In an electric field E: (1) Gamma rays are neutral electromagnetic photons (q = 0); electric force F = qE = 0, so they travel straight without deviation. (2) Alpha particles have positive charge (+2e); electric force attracts them toward the negative plate. Due to their large mass (m_α = 7300 m_e), their acceleration a = qE/m is small (gentle curve). (3) Beta particles have negative charge (-e); attracted toward positive plate with high acceleration due to tiny electron mass (sharp curve)."
  ),
  makeCase(
    chapter, 26, "Geiger-Muller (GM) Tube Operation and Avalanche Ionization", "Gas Amplification and Townsend Avalanche",
    "A Geiger-Muller radiation survey meter consists of a cylindrical metal tube filled with low-pressure argon gas and alcohol vapor, containing a central thin tungsten anode wire held at +1000 V. When a single beta particle enters the thin mica window, an electrical pulse is recorded.",
    "How does a single ionizing beta particle produce a measurable voltage pulse in the GM tube?",
    "The beta particle strikes the tungsten wire and rebounds.",
    "The beta particle ionizes argon atoms, creating electron-ion pairs; the intense radial electric field accelerates electrons toward the thin anode wire, creating an avalanche of secondary ionizations (Townsend avalanche) that produces a substantial current pulse.",
    "The beta particle heats the argon gas until it catches fire.",
    "The tube uses piezoelectric crystals that vibrate when struck.",
    "B",
    "The GM tube operates in the Geiger plateau region: primary ionization by an incident particle frees a few electrons. In the intense electric field near the thin central anode wire (E ∝ 1/r), these electrons gain sufficient kinetic energy to cause secondary ionization, triggering an escalating cascade (Townsend avalanche). Millions of electrons strike the anode in microseconds, creating a uniform, easily detectable ~1 V electrical pulse."
  ),
  makeCase(
    chapter, 27, "Isotopes, Isobars, and Isotones: Nuclear Classification", "Definitions and Nuclear Composition",
    "A nuclear physics exam asks students to match three pairs of nuclides: Pair 1: (¹²₆C and ¹⁴₆C); Pair 2: (⁴⁰₁₉K and ⁴⁰₂₀Ca); Pair 3: (¹³₆C and ¹⁴₇N).",
    "What are the correct scientific classifications for Pair 1, Pair 2, and Pair 3 respectively?",
    "Pair 1: Isotones; Pair 2: Isobars; Pair 3: Isotopes",
    "Pair 1: Isotopes (same Z = 6, different A); Pair 2: Isobars (same A = 40, different Z); Pair 3: Isotones (same number of neutrons N = A - Z = 7).",
    "Pair 1: Isobars; Pair 2: Isotopes; Pair 3: Isomers",
    "All three pairs are identical allotropes of carbon.",
    "B",
    "Definitions: (1) Isotopes: nuclides with the same atomic number Z (same protons), but different mass numbers A (different neutrons): ¹²₆C (6p, 6n) and ¹⁴₆C (6p, 8n). (2) Isobars: nuclides with the same mass number A (same nucleons), but different Z: ⁴⁰₁₉K and ⁴⁰₂₀Ca. (3) Isotones: nuclides with the exact same neutron number N = A - Z: ¹³₆C (13 - 6 = 7 neutrons) and ¹⁴₇N (14 - 7 = 7 neutrons)."
  ),
  makeCase(
    chapter, 28, "Smoke Detector Operation Using Americium-241 Alpha Source", "Ionization Smoke Detection Chamber",
    "A domestic ionization smoke detector contains a microscopic foil of Americium-241 (²⁴¹Am, an alpha emitter with a 432-year half-life) placed inside an open-air sensing chamber with two charged electrode plates.",
    "How does the presence of smoke particles in the room trigger the alarm in this ionization detector?",
    "Smoke particles burn the americium foil, setting off the buzzer.",
    "Alpha particles continuously ionize air molecules, allowing a tiny steady microcurrent to flow across the chamber; when smoke enters, smoke particles attach to ions, slowing them down and dropping the current, which triggers the electronic alarm circuit.",
    "Americium emits heat that melts a bimetallic strip in the smoke.",
    "Alpha particles reflect off smoke particles into a photo-sensor.",
    "B",
    "The ²⁴¹Am source constantly emits alpha particles that knock electrons off nitrogen and oxygen molecules, producing a steady stream of air ions that creates an electrical current (~10⁻¹¹ A) across the sensing gap. When microscopic combustion aerosols (smoke) enter the chamber, ions stick to the heavy smoke particles, drastically reducing ion mobility and causing the gap current to plunge. An operational amplifier detects this drop and sounds the siren."
  ),
  makeCase(
    chapter, 29, "Thermoluminescent Dosimeter (TLD) Badge for Radiation Workers", "Radiation Monitoring via Trapped Crystal Electrons",
    "Radiology nurses and nuclear plant technicians wear personal TLD badges containing lithium fluoride (LiF) crystals. At the end of each quarterly monitoring period, the badge crystals are heated inside a reader device, which measures emitted visible light to determine cumulative radiation exposure.",
    "How does the LiF crystal record radiation exposure, and why does heating release visible light?",
    "The crystal becomes permanently radioactive upon exposure.",
    "Ionizing radiation excites electrons into metastable trap states in the crystal lattice; upon controlled laboratory heating, the trapped electrons escape and drop to ground state, emitting visible photons whose total intensity is directly proportional to cumulative absorbed radiation dose.",
    "The crystal melts upon heating, releasing stored heat.",
    "Radiation creates chemical acids inside the plastic badge.",
    "B",
    "In a TLD crystal (LiF doped with Mg and Ti), incident ionizing radiation excites valence electrons, which become trapped at lattice defect impurities. These metastable traps are deep enough to store electrons indefinitely at room temperature. In the reader, the crystal is heated to ~250°C, providing thermal energy for trapped electrons to overcome the energy barrier and recombine with luminescence centers, emitting visible light proportional to absorbed dose."
  ),
  makeCase(
    chapter, 30, "Radiation Sickness and Acute Radiation Syndrome (ARS) Thresholds", "Dose Equivalent Units (Sievert vs Gray)",
    "Following a severe radiation accident, workers receive whole-body absorbed doses of gamma radiation. The absorbed dose is measured in Grays (1 Gy = 1 J/kg), and the biologically equivalent dose is measured in Sieverts (Sv = Gy × Quality Factor).",
    "What whole-body acute radiation dose produces early gastrointestinal symptoms and hemopoietic syndrome in humans?",
    "A dose of 0.001 mSv (equivalent to eating a banana)",
    "A whole-body acute dose of 2 to 6 Sieverts (causing severe bone marrow destruction, immune collapse, and nausea within hours).",
    "A dose of 100,000 Sieverts",
    "Human tissue is immune to all radiation doses.",
    "B",
    "Equivalent dose in Sieverts (Sv) accounts for biological damage. Background dose is ~2.4 mSv/year. Doses < 100 mSv produce no acute clinical symptoms (minor statistical cancer risk). Doses of 1–2 Sv produce mild radiation sickness. Doses between 2–6 Sv destroy rapidly dividing hematopoietic stem cells in bone marrow, causing severe thrombocytopenia, hemorrhage, infection, and hair loss; without medical care (blood transfusions, bone marrow transplant), mortality is high (LD 50/60 ≈ 4 Sv)."
  ),
  makeCase(
    chapter, 31, "Food Irradiation for Sterilization and Shelf-Life Extension", "Inactivation of Foodborne Pathogens with Gamma Radiation",
    "Bulk grain silos, fresh spices, and packaged poultry are exposed to cobalt-60 gamma radiation or electron beams at doses of 1 to 10 kGy to eliminate Salmonella, E. coli, and insect larvae.",
    "Does irradiating food make the food itself radioactive or unsafe to eat?",
    "Yes, irradiated food becomes dangerously radioactive and glows in the dark.",
    "No, gamma photons destroy microbial DNA without altering atomic nuclei; the food never becomes radioactive, and food safety agencies certify irradiated food as safe and wholesome.",
    "Yes, irradiation converts all food minerals into radioactive isotopes.",
    "Food irradiation is only permitted for non-edible cotton.",
    "B",
    "Food irradiation uses electromagnetic gamma rays (⁶⁰Co or ¹³⁷Cs) or electron beams with photon energies capped at 5–10 MeV, well below the photoneutron threshold required to induce nuclear transmutation in common elements (C, H, O, N). The radiation passes through the food, ionizing and killing bacteria and parasites, but leaves no radioactive residues whatsoever, preserving food safely."
  ),
  makeCase(
    chapter, 32, "Decay Law: Number of Half-Lives for 99.9% Decay", "Exponential Decay Fraction (1/2)^n = 0.001",
    "A hospital receives a consignment of technetium-99m (T_1/2 = 6.0 hours). The nuclear medicine physician calculates how long it takes for the initial activity of the source to decline to less than 0.1% (1/1000th) of its original value.",
    "Approximately how many half-life periods (n) and how many hours must elapse for radioactivity to decline to less than 0.1%?",
    "3 half-lives (18 hours)",
    "10 half-lives (60 hours, since 2¹⁰ = 1024 so (1/2)¹⁰ ≈ 0.098%)",
    "5 half-lives (30 hours)",
    "100 half-lives (600 hours)",
    "B",
    "Remaining fraction is (1/2)ⁿ. We want (1/2)ⁿ ≤ 0.001 = 1/1000 => 2ⁿ ≥ 1000. Since 2¹⁰ = 1024, exactly 10 half-lives reduce radioactivity to 1/1024 ≈ 0.0977% (less than 0.1%). For technetium-99m with T_1/2 = 6.0 hours: Elapsed time = 10 × 6.0 hours = 60 hours (2.5 days)."
  ),
  makeCase(
    chapter, 33, "Why Light Nuclei are Stable with N/Z ≈ 1 While Heavy Nuclei Need N/Z ≈ 1.5", "Neutron-to-Proton Ratio and Nuclear Stability Belt",
    "In stable light nuclei such as helium (⁴₂He), carbon (¹²₆C), and oxygen (¹⁶₈O), the neutron-to-proton ratio is N/Z = 1.0. In stable heavy nuclei like lead (²⁰⁸₈₂Pb), the ratio rises to N/Z ≈ 1.54 (126 neutrons to 82 protons).",
    "Why do stable heavy nuclei require a much higher proportion of neutrons than light nuclei?",
    "Neutrons carry negative charge that cancels proton positive charge.",
    "Protons exert long-range disruptive electrostatic repulsion on each other; as Z grows, extra neutrons are required to provide short-range attractive strong nuclear forces to glue the nucleus together without adding repulsive electric charge.",
    "Heavy nuclei have fewer electrons to balance protons.",
    "Excess neutrons are required to generate radioactive decay.",
    "B",
    "Nuclear stability is a balance between the attractive strong nuclear force (which acts between all nucleons: p-p, p-n, n-n, but only at short range ~1–2 fm) and the repulsive Coulomb force (which acts between all protons and has infinite range). In large nuclei, every proton repels every other proton across the entire nuclear diameter. Extra uncharged neutrons add strong binding glue without adding repulsive electrostatic forces, stabilizing heavy nuclei."
  ),
  makeCase(
    chapter, 34, "Radioactive Gold-198 Grains in Prostate Cancer Brachytherapy", "Short-Range Internal Radiation Delivery",
    "In prostate brachytherapy, a surgeon permanently implants 50 microscopic radioactive Gold-198 seeds (T_1/2 = 2.7 days, emitting beta particles and soft gamma rays) directly into a patient's prostate gland.",
    "What is the clinical advantage of interstitial brachytherapy over external beam radiation?",
    "Gold seeds can be extracted and sold after curing the patient.",
    "The radioactive seeds deliver a localized high-dose radiation field directly inside the tumor tissue, while rapid distance attenuation (1/r²) and the short half-life spare surrounding healthy bladder and rectal tissues.",
    "Gold seeds completely prevent any radiation from reaching tumor cells.",
    "Gold-198 emits ultrasonic sound that dissolves tumor cells.",
    "B",
    "Brachytherapy places sealed radiation sources directly inside the malignancy. Inverse square radiation fall-off (I ∝ 1/r²) ensures that adjacent healthy structures (rectum, bladder) receive negligible doses. Furthermore, Gold-198's short half-life (2.7 days) delivers ~90% of its cumulative therapeutic dose within 9 days, completely decaying to stable mercury-198 within a few weeks without requiring surgical removal."
  ),
  makeCase(
    chapter, 35, "Discovery of Radioactivity: Henri Becquerel's Accidental Uranium Experiment", "Spontaneous Dark Exposure of Wrapped Photographic Plates",
    "In 1896, French physicist Henri Becquerel placed crystals of potassium uranyl sulfate atop a photographic plate wrapped securely in thick black opaque paper, storing them inside a dark desk drawer for several days. Upon chemical development, the photographic plate revealed sharp, dark silhouettes of the uranium crystals.",
    "What revolutionary conclusion did Becquerel draw from this experiment?",
    "The crystals reflected sunlight through the wooden drawer.",
    "Uranium compounds spontaneously and continuously emit invisible, deeply penetrating radiations without requiring prior exposure to sunlight or optical fluorescence, proving an intrinsic atomic phenomenon.",
    "The black paper was chemically defective and reacted with silver.",
    "Dark drawers generate static electricity that exposes films.",
    "B",
    "Becquerel was investigating phosphorescence, expecting that uranium salts required excitation by sunlight to emit X-rays. Because the days were overcast, he stored the crystals atop light-tight black-wrapped plates in a pitch-black drawer. The developed plate showed dark exposures anyway, proving that uranium continuously and spontaneously generates penetrating rays without external illumination—the historic discovery of radioactivity."
  ),
  makeCase(
    chapter, 36, "Rutherford's Alpha Scattering Experiment and Nuclear Discovery", "Large-Angle Deflection and the Dense Positive Nucleus",
    "In 1911, Ernest Rutherford directed a beam of high-energy alpha particles at an ultra-thin gold foil (thickness ~400 nm). Most alpha particles passed straight through with negligible deflection, but approximately 1 in 8,000 alpha particles rebounded backward at angles greater than 90°.",
    "What groundbreaking model of the atom did Rutherford deduce from these backward-scattered alpha particles?",
    "Thomson's 'plum pudding' model was completely confirmed.",
    "Most of the atom is completely empty space, with all of its positive charge and almost all of its mass concentrated in an extraordinarily dense, microscopic central core called the nucleus.",
    "Gold atoms are made of solid continuous lead.",
    "Alpha particles are deflected by orbital electrons.",
    "B",
    "Under J.J. Thomson's diffuse 'plum pudding' model, positive charge was spread thinly throughout the atom; electric fields would be far too weak to turn an energetic alpha particle around. The astonishing observation of large-angle (> 90°) backward deflections ('as if you fired a 15-inch shell at tissue paper and it bounced back') proved that the positive charge and mass are concentrated in a tiny core (nucleus, r ~ 10⁻¹⁴ m) surrounded by vast empty space."
  ),
  makeCase(
    chapter, 37, "Nuclear Fusion in the Tokamak Magnetic Confinement Device", "Magnetic Bottle and Lawson Criterion for Fusion Plasma",
    "Experimental fusion reactors such as the international ITER Tokamak confine a Deuterium-Tritium plasma heated to 150 million Kelvin inside a toroidal vacuum chamber using powerful superconducting magnetic coils.",
    "Why must the fusion plasma be confined by magnetic fields rather than by physical solid container walls?",
    "Solid walls would make the plasma freeze into liquid hydrogen.",
    "No material container on Earth can withstand contact with a 150 million °C plasma; contact with physical walls would instantly vaporize the container wall and immediately quench and cool the plasma below fusion ignition temperature.",
    "Magnetic fields are required to supply neutrons to the plasma.",
    "Solid walls absorb all electromagnetic radiation from the plasma.",
    "B",
    "A thermonuclear fusion plasma operates at > 100,000,000°C, hotter than the core of the Sun. No known material can withstand these temperatures (tungsten melts at 3422°C). In a Tokamak, helical magnetic field lines trap charged ions and electrons along magnetic drift paths in mid-air, suspending the superheated plasma in a vacuum 'magnetic bottle' without touching the chamber walls."
  ),
  makeCase(
    chapter, 38, "Natural Decay Chain: Thorium-232 Decay Series", "Sequential Emissions to Stable Lead-208",
    "A thorium-232 nucleus (²³²₉₀Th) decays through a series of radioactive transformations to reach the stable end-product lead-208 (²⁰⁸₈₂Pb).",
    "How many alpha particles and beta particles are emitted in the Thorium-232 decay series?",
    "6 alpha particles and 4 beta particles",
    "4 alpha particles and 4 beta particles",
    "8 alpha particles and 6 beta particles",
    "6 alpha particles and 6 beta particles",
    "A",
    "Change in mass number: ΔA = 232 - 208 = 24. Since only alpha particles carry mass (4 u each): n_α = 24 / 4 = 6 alpha particles. Six alpha emissions reduce the atomic number by 6 × 2 = 12 (from 90 to 78). The final nucleus has atomic number Z = 82 (lead). The change in Z from 78 to 82 is achieved by beta-minus decays (each β⁻ increases Z by 1): n_β = 82 - 78 = 4 beta particles. Thus: 6 α and 4 β⁻."
  ),
  makeCase(
    chapter, 39, "Positron Emission (Beta-Plus Decay) and PET Imaging", "Proton to Neutron Conversion and Matter-Antimatter Annihilation",
    "In clinical Positron Emission Tomography (PET), a cancer patient is injected with fluorodeoxyglucose tagged with Fluorine-18 (¹⁸₉F, a beta-plus emitter). When an emitted positron (e⁺) collides with a tissue electron (e⁻), both annihilate.",
    "What radiation is produced by electron-positron annihilation, and how does the PET scanner detect tumors?",
    "A single alpha particle is emitted; detected by photographic film.",
    "Two collinear 511 keV gamma-ray photons are emitted in exactly opposite directions (180° apart); ring detectors detect these coincident photons to reconstruct high-resolution 3D metabolic tumor maps.",
    "Microwaves are emitted; detected by radar antennas.",
    "The tissue emits bright visible blue light.",
    "B",
    "In beta-plus decay: ¹⁸₉F -> ¹⁸₈O + ⁰₊₁e⁺ + ν_e. The emitted positron travels ~1 mm before encountering an ambient atomic electron. Their mass converts into energy via matter-antimatter annihilation (e⁺ + e⁻ -> 2γ). By conservation of momentum, two identical 511 keV gamma photons shoot out in precisely opposite directions (180°). Coincidence detection circuits triangulate the exact point of annihilation with millimeter precision."
  ),
  makeCase(
    chapter, 40, "Why Lead is Universally Used for Radiation Shielding", "High Density and High Atomic Number Attenuation",
    "Nuclear medicine transport containers, X-ray room walls, and radioactive waste shipping casks are heavily lined with solid lead (Pb) metal rather than aluminum, steel, or wood.",
    "What two physical properties make lead the premier shielding material against gamma and X-radiation?",
    "Lead is transparent to gamma rays and reflects them.",
    "Lead has very high mass density (11.34 g/cm³) and a high atomic number (Z = 82), maximizing the cross-section for photoelectric absorption and Compton scattering per unit thickness.",
    "Lead is a superconductor at room temperature.",
    "Lead absorbs radiation by undergoing nuclear fusion.",
    "B",
    "Gamma and X-ray photon attenuation depends exponentially on atomic number (photoelectric absorption cross-section scales as Z⁴ to Z⁵) and electron density. Lead (Z = 82) possesses tightly packed atomic shells and high physical density (11.34 g/cm³), providing immense stopping power in compact thicknesses compared to lightweight elements like aluminum (Z = 13) or iron (Z = 26)."
  ),
  makeCase(
    chapter, 41, "Neutron Activation Analysis (NAA) for Trace Elemental Detection", "Thermal Neutron Capture and Characteristic Gamma Spectroscopy",
    "Forensic detectives investigating a historical poisoning suspect examine a strand of hair using Neutron Activation Analysis. The hair is irradiated with thermal neutrons inside a research reactor, and the emitted gamma-ray spectrum is recorded.",
    "How does neutron bombardment identify trace arsenic atoms inside the hair strand?",
    "Arsenic atoms burn into black carbon ash.",
    "Stable Arsenic-75 captures a neutron to become radioactive Arsenic-76 (⁷⁶₃₃As), which decays by emitting gamma rays of precise characteristic energies (559 keV), identifying the element uniquely like a nuclear fingerprint.",
    "Arsenic emits alpha particles that melt the hair.",
    "Neutrons change arsenic into pure gold.",
    "B",
    "In Neutron Activation Analysis (NAA), non-radioactive stable nuclei in a sample capture thermal neutrons (n, γ reaction): ⁷⁵₃₃As + ¹₀n -> ⁷⁶₃₃As* -> ⁷⁶₃₃As + γ. The radioactive ⁷⁶₃₃As daughter decays with a 26.3-hour half-life, emitting gamma photons at precise quantized energies (559.1 keV, 657.0 keV). Measuring these discrete gamma energy lines with a high-purity germanium detector identifies parts-per-billion trace elements."
  ),
  makeCase(
    chapter, 42, "Mass-Energy Equivalence: Calculation of Energy Released by 1 amu", "Einstein's Equation E = mc² and the 931.5 MeV Constant",
    "A nuclear physics calculation determines the exact energy equivalent of one unified atomic mass unit (1 u = 1.6605 × 10⁻²⁷ kg). The speed of light is c = 2.998 × 10⁸ m/s, and 1 eV = 1.602 × 10⁻¹⁹ J.",
    "What is the energy equivalent of 1 atomic mass unit (1 u) in Joules and in Mega-electron-volts (MeV)?",
    "E = 1.492 × 10⁻¹⁰ J ≈ 931.5 MeV",
    "E = 1.000 × 10⁻⁶ J ≈ 1000 MeV",
    "E = 9.315 × 10⁻¹³ J ≈ 9.315 MeV",
    "E = 3.00 × 10⁸ J ≈ 300 MeV",
    "A",
    "By Einstein's mass-energy equation E = m c²: E = (1.66054 × 10⁻²⁷ kg) × (2.99792 × 10⁸ m/s)² = 1.66054 × 10⁻²⁷ × 8.98755 × 10¹⁶ J ≈ 1.4924 × 10⁻¹⁰ Joules. Converting Joules to electron-volts: E = (1.4924 × 10⁻¹⁰ J) / (1.60218 × 10⁻¹⁹ J/eV) ≈ 9.315 × 10⁸ eV = 931.5 MeV. This fundamental constant converts nuclear mass defects directly into energy."
  ),
  makeCase(
    chapter, 43, "Radon Gas (Rn-222) Seepage and Residential Lung Cancer Risk", "Alpha Emitters Inhaled into Pulmonary Bronchial Epithelium",
    "Environmental health authorities test basements of homes built over granite bedrock for Radon-222 gas (an alpha emitter, half-life 3.8 days). Radon is identified as the second leading cause of lung cancer worldwide after tobacco smoking.",
    "Why does inhaled Radon-222 pose such a catastrophic lung cancer risk while external alpha sources outside the body are completely harmless?",
    "External alpha particles are absorbed by clothing; inside the lungs, inhaled radon and its solid decay progeny (Polonium-218, Polonium-214) deposit directly on unprotected mucosal cells, delivering dense alpha ionization directly to bronchial epithelial DNA.",
    "Radon gas reacts with oxygen to form hydrofluoric acid in the lungs.",
    "Radon emits gamma rays that ignite lung tissue.",
    "Radon gas dissolves lung tissue by freezing it.",
    "A",
    "External alpha radiation cannot penetrate the outer non-living stratum corneum of human skin. However, Radon-222 is an inert noble gas that is easily inhaled deep into the respiratory tract. When it decays inside lung airways, it produces short-lived solid daughter isotopes (²¹⁸Po, ²¹⁴Po) that lodge against thin, delicate bronchial epithelial cells. Their high-LET alpha emissions directly bombard pulmonary stem cell DNA, causing double-strand breaks and lung carcinoma."
  ),
  makeCase(
    chapter, 44, "Critical Mass in an Uncontrolled Nuclear Fission Chain Reaction", "Surface Area to Volume Ratio and Neutron Leakage",
    "Nuclear weapon designers assemble a sub-critical sphere of pure Uranium-235 of mass 15 kg. Spontaneous fission neutrons escape through the surface into ambient air faster than new neutrons are generated, so no chain reaction occurs. When an implosion explosive compresses the fissile mass into a dense sphere of supercritical geometry, a runaway exponential chain reaction explodes in microseconds.",
    "What is 'critical mass', and why does compressing fissile material achieve supercriticality?",
    "Critical mass is the mass at which uranium becomes flammable.",
    "Critical mass is the minimum mass of fissile material necessary to sustain a self-propagating nuclear chain reaction; compression increases density, shortening the mean free path of neutrons so they induce fission before escaping through the surface.",
    "Compression forces uranium to undergo nuclear fusion.",
    "Compressing uranium removes all neutrons from the core.",
    "B",
    "In a fissile body, neutrons are produced throughout the volume (∝ R³) but leak out through the external surface area (∝ R²). For small masses, the surface-to-volume ratio is too high, and excess neutrons leak out before causing fission (subcritical). 'Critical mass' is the exact threshold where neutron production balances leakage plus non-fission absorption (multiplication factor k = 1). Compressing the sphere increases density ρ, dramatically shortening neutron mean free path and driving k > 1."
  ),
  makeCase(
    chapter, 45, "Iodine-131 Thyroid Therapy and Potassium Iodide Prophylaxis", "Targeted Radioisotope Uptake in Endocrine Tissues",
    "A patient suffering from hyperthyroidism (Graves' disease) swallows a capsule containing Iodine-131 (a beta and gamma emitter, half-life 8.0 days). In nuclear emergency guidelines, civilians near damaged reactors are issued stable Potassium Iodide (KI) tablets.",
    "Why does Iodine-131 selectively destroy thyroid tissue, and how do KI tablets protect the thyroid during a reactor accident?",
    "The thyroid gland is magnetic and attracts iodine ions.",
    "The human thyroid gland actively absorbs nearly all dietary iodine; radioactive ¹³¹I concentrates in the thyroid where localized beta particles destroy overactive follicular cells. Taking stable non-radioactive KI tablets saturates thyroid receptors, blocking uptake of radioactive iodine fallout.",
    "Iodine-131 cools the thyroid to freezing temperatures.",
    "Potassium iodide tablets absorb gamma rays like lead.",
    "B",
    "The thyroid gland uses iodine to synthesize hormones (T3/T4) and possesses sodium-iodide symporter pumps that concentrate iodine ~100-fold compared to blood. Ingested ¹³¹I concentrates almost exclusively in the thyroid. Beta particles (range ~1–2 mm in tissue) selectively irradiate and destroy hyperactive thyroid cells with minimal collateral whole-body damage. Taking stable KI floods receptors, preventing uptake of dangerous radioactive fallout."
  ),
  makeCase(
    chapter, 46, "Activity Comparison: Short Half-Life vs Long Half-Life Sources", "Decay Constant Inversely Proportional to Half-Life (λ = ln 2 / T_1/2)",
    "A radiochemistry laboratory has two equal masses (1.0 milligram each) of two pure radioisotopes: Isotope X has a half-life of T_1/2 = 1.0 hour, while Isotope Y has a half-life of T_1/2 = 10,000 years. Both have approximately the same atomic mass.",
    "How does the initial activity (disintegrations per second) of Isotope X compare to Isotope Y?",
    "Isotope Y is vastly more active because it lives longer.",
    "Isotope X is millions of times more radioactive (higher activity) than Isotope Y, because activity is inversely proportional to half-life (A = λN = (ln 2 / T_1/2) N); short half-life means atoms disintegrate at a tremendously faster rate.",
    "Both have identical activity because their masses are equal.",
    "Isotope X emits only light while Isotope Y emits neutrons.",
    "B",
    "Activity A is defined as A = -dN/dt = λ N = (ln 2 / T_1/2) × N. For equal masses and molar weights, both samples contain the same number of radioactive atoms N. However, the decay rate is inversely proportional to half-life (A ∝ 1 / T_1/2). Isotope X (1 hour) decays ~87 million times faster than Isotope Y (10,000 years = ~8.76 × 10⁷ hours). A short half-life means intense, concentrated radioactivity, while a long half-life means low, prolonged emission."
  ),
  makeCase(
    chapter, 47, "Why Nuclear Fusion Is Inherently Safer Than Nuclear Fission for Power", "Absence of Meltdown Risk and High-Level Long-Lived Waste",
    "In debates on future clean energy, nuclear physicists emphasize that commercial magnetic confinement fusion reactors (like ITER) will be inherently incapable of experiencing runaway Chernobyl- or Fukushima-style meltdowns.",
    "Why can a nuclear fusion reactor never experience a catastrophic runaway nuclear meltdown?",
    "Fusion uses water that automatically douses any explosion.",
    "A fusion reactor contains only a tiny amount of fuel (~1 gram of gas) in the reaction chamber at any instant; any malfunction or loss of magnetic confinement instantly cools the plasma and quenches the reaction within milliseconds, making a runaway chain reaction physically impossible.",
    "Fusion reactors operate at absolute zero temperature.",
    "Fusion reactions do not generate any heat.",
    "B",
    "Fission reactors contain years' worth of fuel inside the core (~100 tons of uranium), which continues producing decaying afterheat even after scram, risking core meltdown if cooling fails. A fusion Tokamak operates with only ~1–2 grams of D-T fuel in a 1000 m³ chamber at any moment. Because fusion requires ultra-precise plasma conditions, any disruption, vacuum leak, or cooling failure immediately cools the plasma, halting the reaction passively in milliseconds."
  ),
  makeCase(
    chapter, 48, "Beta Spectrum Continuous Energy Distribution vs Discrete Alpha Energy", "Discovery of the Neutrino by Wolfgang Pauli",
    "When alpha particles are emitted from a given radioactive nuclide, they emerge with sharp, discrete, monochromatic kinetic energies (e.g. exactly 5.3 MeV for Polonium-210). When beta particles are emitted from a radioactive nuclide, they emerge with a continuous spectrum of kinetic energies ranging from zero up to an endpoint maximum E_max.",
    "Why do beta particles exhibit a continuous energy spectrum, and what fundamental particle did Wolfgang Pauli propose to resolve this mystery?",
    "Beta particles lose energy by friction with orbital electrons.",
    "In beta decay, the decay energy is shared between three bodies (daughter nucleus, beta electron, and an elusive neutral particle called the neutrino); the continuous sharing of momentum and energy between electron and neutrino produces the continuous beta spectrum.",
    "Beta particles are made of varying numbers of quarks.",
    "Beta decay violates the Law of Conservation of Energy permanently.",
    "B",
    "In 2-body alpha decay (Parent -> Daughter + α), conservation of energy and momentum uniquely fixes the kinetic energy of the alpha particle. In beta decay, if only the electron and daughter were produced, the electron would also be monochromatic. The observed continuous energy distribution appeared to violate conservation of energy. In 1930, Pauli proposed that a third, nearly massless, uncharged particle—the neutrino (ν)—shares the decay energy: E_decay = E_beta + E_neutrino."
  ),
  makeCase(
    chapter, 49, "Radioactive Secular Equilibrium in Geological Rocks", "Activity Equality in Parent-Daughter Chains (A_parent = A_daughter)",
    "In an ancient unweathered uranium ore deposit (pitchblende, age 2 billion years), Uranium-238 (T_1/2 = 4.5 billion years) is in secular equilibrium with its decay product Radium-226 (T_1/2 = 1,600 years).",
    "How does the activity (disintegrations per second) of Radium-226 compare with that of Uranium-238 in the rock?",
    "Radium-226 activity is 2.8 million times higher than Uranium-238.",
    "The activity of Radium-226 exactly equals the activity of Uranium-238 (A_Ra = A_U), because in secular equilibrium the daughter decays at the exact same rate at which it is produced by the long-lived parent.",
    "Radium-226 has zero activity in solid rock.",
    "Uranium-238 activity is 2.8 million times higher than Radium-226.",
    "B",
    "When a parent nuclide has an extremely long half-life compared to its daughter (T_parent ≫ T_daughter), the system reaches secular equilibrium after ~7 daughter half-lives. At this state, the rate of production of daughter nuclei equals their rate of decay: dN_daughter / dt = λ_parent N_parent - λ_daughter N_daughter = 0. Therefore: Activity_daughter = Activity_parent (λ_d N_d = λ_p N_p). The ratio of atoms present is N_d / N_p = T_d / T_p = 1,600 / 4.5 × 10⁹ ≈ 1 : 2.8 × 10⁶."
  ),
  makeCase(
    chapter, 50, "Nuclear Binding Energy and the Strong Nuclear Force Characteristics", "Short-Range, Charge-Independent, and Saturation Properties",
    "A theoretical nuclear physicist summarizes the fundamental characteristics of the strong nuclear force that binds protons and neutrons together inside atomic nuclei.",
    "Which statement correctly summarizes the key physical properties of the strong nuclear force?",
    "It is a long-range electromagnetic force that acts only on positively charged protons.",
    "It is the strongest known force in nature (100 times stronger than electromagnetism), has an extremely short range (~1 to 2 fm), is strictly charge-independent (acts equally between p-p, n-n, and p-n), and exhibits saturation (each nucleon interacts only with its immediate neighbors).",
    "It is identical to the gravitational force and acts across astronomical distances.",
    "It repels neutrons while attracting protons and electrons.",
    "B",
    "The strong nuclear force possesses four unique characteristics: (1) Immense strength: within its range, it is ~100 times stronger than Coulomb repulsion and 10³⁸ times stronger than gravity. (2) Short range: acts only over subatomic distances (1–2 fm); at distances > 2.5 fm it drops to zero, and at < 0.5 fm it becomes strongly repulsive (preventing nuclear collapse). (3) Charge independence: identical between p-p, p-n, and n-n. (4) Saturation: each nucleon only binds with adjacent neighbors."
  )
];

const targetPath = path.join(__dirname, 'questionBank', 'physics_case_radioactivity.json');
fs.writeFileSync(targetPath, JSON.stringify(radioactivityCases, null, 2), 'utf8');
console.log(`Saved ${radioactivityCases.length} case studies for Radioactivity to ${targetPath}`);
