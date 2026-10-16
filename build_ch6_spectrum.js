const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Spectrum";

const spectrumCases = [
  makeCase(
    chapter, 1, "Solar Beam Dispersion through Crown Glass Prism", "Dispersion and Cauchy's Dispersion Relation",
    "In an optics laboratory, a collimated narrow beam of pure white solar light is incident on the first refracting face of a 60° crown glass prism at an angle of incidence of 45°. Inside the glass prism, the light splits into a continuous fan of seven colors. A sensor measures the refractive indices of crown glass: 1.514 for red light (λ = 700 nm) and 1.532 for violet light (λ = 400 nm).",
    "What is the fundamental physical cause of this separation of colors inside the glass prism?",
    "Different colors have different frequencies inside the glass, causing unequal angles of reflection.",
    "The refractive index of glass varies inversely with wavelength, causing violet light to travel slower and refract by a larger angle than red light.",
    "Red light travels slower in glass than violet light, so red light deviates by a greater angle.",
    "The glass prism adds color pigments to white light according to its prism angle.",
    "B",
    "Dispersion occurs because refractive index depends on wavelength (Cauchy's relation: μ = A + B/λ²). Because λ_v < λ_r, μ_v > μ_r. The speed in glass is v = c/μ, meaning violet travels slower than red. By Snell's law, a higher refractive index causes greater bending toward the normal, separating white light into its constituent wavelengths."
  ),
  makeCase(
    chapter, 2, "Monochromatic Sodium D-Line vs White Light Prism Traversal", "Monochromatic vs Polychromatic Light",
    "A student shines two different light sources through an equilateral flint glass prism: Source 1 is a low-pressure sodium vapor lamp emitting monochromatic yellow light of wavelength 589 nm. Source 2 is a tungsten filament incandescent bulb emitting continuous polychromatic white light.",
    "What will be observed on a white screen placed behind the prism for Source 1 and Source 2?",
    "Source 1 splits into yellow and green bands; Source 2 splits into seven colors.",
    "Source 1 undergoes only deviation with no dispersion; Source 2 undergoes both deviation and dispersion into a seven-color spectrum.",
    "Source 1 undergoes dispersion into red and yellow; Source 2 undergoes deviation with no dispersion.",
    "Neither source deviates because flint glass has parallel refracting faces.",
    "B",
    "Monochromatic light consists of a single wavelength, so every ray experiences the exact same refractive index; hence it undergoes deviation without splitting (no dispersion). Polychromatic white light consists of a wide spectrum of wavelengths, each experiencing a different refractive index, thereby producing both deviation and dispersion."
  ),
  makeCase(
    chapter, 3, "Newton's Classic Recombination Experiment with Inverted Prism", "Recombination of Spectrum into White Light",
    "Sir Isaac Newton placed a second identical glass prism P2 in an inverted position adjacent and antiparallel to a first dispersing glass prism P1. A beam of white light enters P1 and disperses into violet, indigo, blue, green, yellow, orange, and red. The dispersed rays then immediately fall on the refracting face of P2.",
    "What emerges from the outer face of the inverted prism P2, and what conclusion did Newton establish?",
    "A broader seven-color spectrum emerges; proving that prisms generate color.",
    "A beam of white light emerges parallel to the incident beam; proving that white light is a superposition of all spectral colors and prisms merely separate them.",
    "A beam of pure green light emerges; proving green is the mean wavelength of light.",
    "No light emerges due to total internal reflection between the two prisms.",
    "B",
    "The inverted prism P2 exerts an equal and opposite angular dispersion on each color compared to P1. The angular deviations cancel out, recombining the dispersed constituent colors into a single emergent beam of white light that is parallel to the original incident beam, proving white light is composite."
  ),
  makeCase(
    chapter, 4, "Angular Deviation Difference Between Red and Violet Rays", "Prism Deviation Formula and Color Dependence",
    "A thin glass prism with a small refracting angle A = 6.0° is placed in air. For this prism glass, the refractive index for red light is μ_r = 1.50 and for violet light is μ_v = 1.54. A narrow beam of white light is incident normally on the prism.",
    "Calculate the angle of deviation for red light (δ_r), violet light (δ_v), and the angular dispersion (δ_v - δ_r) produced by this thin prism.",
    "δ_r = 3.00°, δ_v = 3.24°, Angular dispersion = 0.24°",
    "δ_r = 6.00°, δ_v = 9.24°, Angular dispersion = 3.24°",
    "δ_r = 0.50°, δ_v = 0.54°, Angular dispersion = 0.04°",
    "δ_r = 9.00°, δ_v = 9.24°, Angular dispersion = 0.24°",
    "A",
    "For a thin prism of small angle A, angle of deviation δ ≈ (μ - 1)A. For red light: δ_r = (1.50 - 1) × 6° = 0.50 × 6° = 3.00°. For violet light: δ_v = (1.54 - 1) × 6° = 0.54 × 6° = 3.24°. The angular dispersion is δ_v - δ_r = 3.24° - 3.00° = 0.24°."
  ),
  makeCase(
    chapter, 5, "Electromagnetic Wave Propagation Speed in Deep Space Vacuum", "Speed and Nature of Electromagnetic Waves",
    "An astronomical observatory monitors three electromagnetic signals emitted simultaneously by a distant supernova explosion 10 light-years away: high-energy Gamma rays (frequency 10²⁰ Hz), visible green light (frequency 5.5 × 10¹⁴ Hz), and radio signals (frequency 100 MHz).",
    "In what order do these three electromagnetic waves arrive at the space telescope in the interstellar vacuum?",
    "Gamma rays arrive first, then visible green light, and radio signals arrive last.",
    "Radio signals arrive first because longer wavelengths face less cosmic drag.",
    "All three electromagnetic waves arrive at the exact same instant because all EM waves travel at c = 3 × 10⁸ m/s in vacuum.",
    "Green light arrives first because vacuum is tuned to the visible optical window.",
    "C",
    "In a vacuum or free space, all electromagnetic radiations travel at the exact same universal speed c = 3 × 10⁸ m/s, irrespective of their frequency, wavelength, or photon energy. Their speed is determined solely by vacuum permittivity and permeability: c = 1/√(μ₀ε₀)."
  ),
  makeCase(
    chapter, 6, "Detecting Invisible Radiation with Blackened Bulb Thermometer", "Detection and Heating Property of Infrared Rays",
    "A researcher projects a solar spectrum onto a white cardboard in a dark room. To detect invisible thermal emissions, the researcher slowly moves a sensitive thermometer with a blackened bulb across the spectrum: starting from violet, passing through green, yellow, and red, and finally moving slightly beyond the red end into the dark region.",
    "Where is the maximum rate of temperature rise recorded by the blackened bulb thermometer?",
    "At the violet end because violet light has the highest photon frequency.",
    "At the green region because green is the peak intensity color of the solar spectrum.",
    "In the dark region just beyond the red end (the infrared region).",
    "The temperature remains identical everywhere across the entire spectrum.",
    "C",
    "Infrared radiations lie just beyond the red end of the visible spectrum. Infrared radiation is absorbed strongly by matter, producing large mechanical vibrations of molecules that translate directly into heat. A blackened bulb absorbs almost all incident thermal radiation, producing the maximum rise in temperature in the infrared region."
  ),
  makeCase(
    chapter, 7, "Silver Chloride Paper Exposure to Visible and Ultraviolet Light", "Detection and Chemical Activity of Ultraviolet Rays",
    "A photographic strip soaked in freshly precipitated white silver chloride (AgCl) suspension is placed along the dispersed spectrum of an electric carbon arc lamp. The strip spans from beyond the red region, through the visible rainbow colors, and into the dark space beyond the violet end.",
    "What chemical change is observed on the AgCl strip, and in which spectral zone does it occur most rapidly?",
    "The strip bleaches to transparent in the infrared zone due to heat.",
    "The strip turns rapidly dark violet and then black in the dark zone just beyond the violet end (ultraviolet region).",
    "The strip turns bright yellow in the yellow region because yellow is the most chemically active.",
    "The strip remains completely white because silver chloride reacts only to radio waves.",
    "B",
    "Silver chloride paper is highly sensitive to actinic (chemical) rays. Ultraviolet rays, located just beyond violet, possess higher photon energy (E = hf) than visible light, rapidly photoreducing AgCl to finely divided metallic silver: 2AgCl + hf -> 2Ag (black) + Cl₂."
  ),
  makeCase(
    chapter, 8, "Prism Material Choice for Infrared Spectroscopy", "Infrared Absorption by Glass vs Rock-Salt Prism",
    "A spectroscopy lab wants to record the infrared spectrum emitted by a heated ceramic filament. The technician has two prisms available: one made of ordinary crown glass and another cut from a single crystal of rock-salt (halite / NaCl).",
    "Why must the rock-salt prism be chosen over the crown glass prism for infrared dispersion?",
    "Rock-salt transmits infrared radiation, whereas ordinary glass strongly absorbs infrared rays.",
    "Glass prism transmits infrared but scatters visible light completely.",
    "Rock-salt prism reflects infrared light back into the detector.",
    "Glass prisms melt when exposed to infrared radiation.",
    "A",
    "Ordinary silicate glass strongly absorbs infrared radiation because the molecular vibrations of Si-O bonds resonate with infrared frequencies. Rock-salt (NaCl) is completely transparent to infrared rays over a wide wavelength band, making it the ideal prism material for infrared spectroscopy."
  ),
  makeCase(
    chapter, 9, "Quartz vs Crown Glass Prism for Ultraviolet Spectrum", "Ultraviolet Absorption by Glass vs Quartz Transparency",
    "In an experiment to study the emission lines of a mercury discharge lamp in the ultraviolet region (λ = 200 nm to 380 nm), a student replaces a quartz prism with an ordinary crown glass prism. The photographic plate no longer records the expected ultraviolet spectral lines.",
    "What is the physical explanation for the disappearance of the UV lines when using glass?",
    "Glass increases the wavelength of UV rays until they convert to microwaves.",
    "Ordinary glass is opaque to ultraviolet radiation because it strongly absorbs wavelengths below 350 nm, whereas quartz is transparent to UV.",
    "Quartz prism polarizes light, which is strictly required to see UV rays.",
    "Crown glass reflects all UV rays back towards the mercury lamp.",
    "B",
    "Ordinary glass absorbs ultraviolet radiations strongly due to electronic transitions in silicates at wavelengths λ < 350 nm. Quartz (crystalline SiO₂) has a wider optical bandgap, making it transparent to UV down to ~180 nm. Hence, UV optics must be made of quartz."
  ),
  makeCase(
    chapter, 10, "Infrared Photography through Thick Fog and Haze", "Scattering vs Wavelength and Penetration of IR",
    "Aerial reconnaissance aircraft and emergency rescue helicopters operating in mountain valleys shrouded in dense fog and haze use infrared cameras rather than visible optical cameras to photograph terrain and locate survivors.",
    "Why do infrared waves penetrate dense fog and haze far more effectively than visible light?",
    "Infrared waves have much longer wavelengths than visible light, so they experience vastly less Rayleigh scattering by mist particles.",
    "Infrared waves travel at twice the speed of visible light through water vapor.",
    "Fog droplets absorb visible light and re-emit it as gamma rays.",
    "Infrared waves ionize fog droplets, clearing an open path through the air.",
    "A",
    "Rayleigh scattering intensity is inversely proportional to the fourth power of wavelength (I ∝ 1/λ⁴). Infrared radiation has a significantly longer wavelength than visible light (λ_IR > λ_vis). Consequently, infrared rays suffer minimal scattering by atmospheric haze and suspended particulates, penetrating long distances without degradation."
  ),
  makeCase(
    chapter, 11, "Earth's Greenhouse Effect and Glass Enclosures", "Transmission of Short IR and Trapping of Long IR",
    "A solar botanic greenhouse maintains an interior temperature of 28°C on a freezing winter day when outdoor ambient air is 2°C. Solar radiation passes through the clear glass roof and warms the interior soil and plants, which then re-radiate thermal energy upward.",
    "Why does the glass roof trap heat inside the greenhouse?",
    "Glass is completely transparent to incoming short-wavelength infrared from the hot Sun, but opaque to outgoing long-wavelength infrared emitted by the cool greenhouse floor.",
    "Glass reflects incoming sunlight and converts visible light into conduction heat.",
    "Glass generates its own infrared radiation when struck by ultraviolet rays.",
    "Glass prevents air molecules from undergoing radioactive decay.",
    "A",
    "The Sun, having a high surface temperature (~5800 K), emits short-wavelength infrared radiation which readily penetrates glass. The warmed earth and plants (around 300 K) re-radiate infrared at much longer wavelengths (Wien's displacement law). Glass is opaque to these long infrared wavelengths, reflecting and absorbing them, thereby trapping thermal energy inside."
  ),
  makeCase(
    chapter, 12, "Rayleigh Scattering Law and Clear Midday Sky Color", "Rayleigh's 1/λ⁴ Scattering and Blue Sky",
    "On a clear cloudless afternoon, sunlight travels through Earth's atmosphere composed of nitrogen and oxygen molecules whose molecular diameters d (approx 0.3 nm) are much smaller than the wavelength of visible light λ (400 nm to 700 nm). An observer looking up at the sky away from the Sun perceives a bright azure blue color.",
    "According to Rayleigh's law of scattering, what is the ratio of scattering intensity of violet light (λ_v = 400 nm) to that of red light (λ_r = 800 nm)?",
    "Intensity ratio I_v / I_r = 2",
    "Intensity ratio I_v / I_r = 4",
    "Intensity ratio I_v / I_r = 16",
    "Intensity ratio I_v / I_r = 1/16",
    "C",
    "Rayleigh's law states that for particles much smaller than wavelength (d ≪ λ), scattering intensity I ∝ 1/λ⁴. Therefore: I_v / I_r = (λ_r / λ_v)⁴ = (800 nm / 400 nm)⁴ = 2⁴ = 16. Blue and violet light are scattered approximately 16 times more strongly than red light, flooding the sky with scattered blue wavelengths."
  ),
  makeCase(
    chapter, 13, "Why the Clear Sky Appears Blue Rather than Violet", "Human Eye Sensitivity vs Atmospheric Scattering",
    "Since violet light (λ ≈ 400 nm) has an even shorter wavelength than blue light (λ ≈ 460 nm) and is scattered even more strongly by atmospheric molecules according to Rayleigh's law, a physics student wonders why the daytime sky appears distinctly blue rather than deep violet to human eyes.",
    "What is the correct scientific explanation for this perceptual phenomenon?",
    "Solar sunlight contains very little violet radiation compared to blue, and the human eye's retina has much higher photopic sensitivity to blue light than violet.",
    "Violet light is completely absorbed by the ozone layer before entering the lower troposphere.",
    "Violet light travels faster in air and escapes into outer space immediately.",
    "Nitrogen molecules have an optical bandpass filter that annihilates violet photons.",
    "A",
    "Two factors explain this: First, solar spectral irradiance peaks in the green-blue region and drops off sharply toward violet. Second, human retinal cone cells (specifically M and S cones) are significantly more sensitive to blue light than to violet. The blend of scattered blue, violet, and green triggers the brain's color perception as vivid sky blue."
  ),
  makeCase(
    chapter, 14, "Deep Red Appearance of Sun at Sunrise and Sunset", "Atmospheric Path Length and Selective Red Transmission",
    "During sunrise and sunset, the disk of the Sun appears distinctly reddish-orange and can be viewed comfortably without eye strain, whereas at noon the Sun appears blinding white with a slight yellowish tinge.",
    "Why does the Sun appear red at sunrise and sunset?",
    "The Sun cools down by several thousand Kelvin at dawn and dusk.",
    "Light from the horizon Sun traverses a much thicker path through the atmosphere; shorter blue and green wavelengths are scattered away from the line of sight, leaving primarily the least scattered long red wavelengths to reach the observer.",
    "Refraction by atmospheric humidity converts blue photons into red photons.",
    "Earth's magnetic field bends red light toward the horizon while deflecting blue light.",
    "B",
    "At the horizon, sunlight travels through a significantly longer column of air than when overhead at noon. By Rayleigh's scattering (I ∝ 1/λ⁴), most of the shorter wavelengths (violet, indigo, blue, green) are scattered away along the long atmospheric journey. The longest wavelength (red) suffers the least scattering and passes directly into the observer's eyes."
  ),
  makeCase(
    chapter, 15, "Danger Signals and Tail Lights Chosen in Crimson Red", "Red Light Scattering Minimization",
    "Traffic engineers, railway authorities, and aviation regulators universally standardize red lights for emergency stop signals, railway warning markers, and obstruction lights atop tall radio towers.",
    "What optical principle justifies the universal choice of red light for danger signals?",
    "Red light has the shortest wavelength, allowing it to penetrate through metal barriers.",
    "Red light has the longest wavelength among visible colors, so it suffers the least scattering by air molecules, smoke, and fog, remaining visible over the greatest distance.",
    "Red light travels at 4 × 10⁸ m/s in air, arriving faster than yellow or blue signals.",
    "Red light is not absorbed by water droplets under any weather conditions.",
    "B",
    "According to Rayleigh's scattering law (I ∝ 1/λ⁴), light with the largest wavelength λ experiences the minimal amount of scattering. Red has the longest wavelength in the visible spectrum (~700 nm). Consequently, red light travels through thick fog, smoke, and atmospheric dust with negligible loss of direct beam intensity, ensuring clear visibility from long distances."
  ),
  makeCase(
    chapter, 16, "Appearance of Sky to an Astronaut on the Moon", "Absence of Atmosphere and Lack of Scattering",
    "An Apollo astronaut standing in the bright sunlight on the surface of the Moon looks away from the lunar surface into the daytime sky above. The astronaut observes the distant stars and the bright disk of Earth against a jet-black background.",
    "Why does the daytime sky on the Moon appear completely black even while the Sun is shining brightly?",
    "The Moon absorbs all light because of its basaltic rock composition.",
    "The Moon has no atmosphere, so there are no air molecules or dust particles to scatter sunlight into the astronaut's eyes.",
    "Sunlight cannot undergo reflection on the Moon due to low gravity.",
    "The astronaut's gold-coated helmet visor completely filters out blue photons.",
    "B",
    "Scattering requires scattering centers (gas molecules, dust, or aerosols). Because the Moon has negligible atmosphere, sunlight travels in straight lines through the vacuum of lunar space without being scattered. Unless looking directly at a source (Sun, Earth, or stars) or illuminated ground, no light enters the eye, rendering the sky completely black."
  ),
  makeCase(
    chapter, 17, "Why Dense Rain Clouds and Fog Appear Opaque White", "Scattering by Large Particles (Mie Scattering)",
    "While clear sky is blue, cumulus clouds laden with billions of microscopic liquid water droplets (diameter d = 10 μm to 50 μm) appear brilliant white when illuminated by sunlight.",
    "Why do clouds appear white instead of blue under Rayleigh's scattering law?",
    "The droplet size d is much larger than the wavelength of visible light (d ≫ λ), so Rayleigh's law breaks down and all visible wavelengths are scattered equally in all directions.",
    "Water droplets selectively absorb blue and violet light, reflecting only red and green which mix to white.",
    "Cloud droplets reflect light purely specularly like miniature silver mirrors.",
    "Water inside clouds conducts electricity, emitting white synchrotron radiation.",
    "A",
    "Rayleigh's 1/λ⁴ scattering law holds strictly when the particle diameter d is much smaller than λ (d ≪ λ). For cloud water droplets and aerosols where d ≫ λ, scattering follows Mie scattering theory, where scattering is independent of wavelength (I is roughly constant for all λ). All colors are scattered with equal efficiency, resulting in white scattered light."
  ),
  makeCase(
    chapter, 18, "Ultraviolet Sterilization in Hospital Operating Theaters", "Germicidal Properties of Short UV Radiations",
    "A modern hospital surgical suite employs overhead germicidal lamps that emit UV-C radiation (wavelength λ = 254 nm) to sterilize surgical instruments and room air before operations. Personnel must evacuate the room while the lamps are energized.",
    "What mechanism allows UV-C radiation to destroy bacteria, and why must human skin and eyes be shielded?",
    "UV-C heats the room to 500°C instantly; burning bacteria and human skin alike.",
    "UV-C photons have high energy that breaks molecular bonds in microbial DNA, inactivating pathogens, but also damages human corneal cells and skin DNA.",
    "UV-C induces nuclear fission in the cellular atoms of bacteria.",
    "UV-C generates microwaves that boil the cytoplasmic water of bacteria.",
    "B",
    "UV-C photons carry significant energy (E = hf = hc/λ ≈ 4.9 eV). This energy matches the resonance absorption band of nucleic acids (DNA and RNA), inducing adjacent thymine bases to dimerize, disabling replication and killing the pathogens. The same photochemical damage causes severe photokeratitis in human eyes and skin erythema/carcinogenesis."
  ),
  makeCase(
    chapter, 19, "Infrared Radiator Efficiency in Industrial Paint Curing", "Selective Resonance Absorption of Infrared Waves",
    "An automotive assembly plant cures automotive paint on steel chassis using an array of ceramic infrared radiant heaters rather than blowing hot air through a convective furnace. The paint layer dries from the inside out in 4 minutes instead of 45 minutes.",
    "Why is radiant infrared heating vastly more effective for drying paint layers than hot air convection?",
    "Infrared radiation heats only the metal chassis while keeping the paint chilled.",
    "Organic polymer resin molecules in paint possess natural vibrational frequencies matching infrared frequencies, leading to intense resonance absorption of radiant energy throughout the paint layer.",
    "Infrared waves freeze paint solvents by removing kinetic energy.",
    "Convective hot air cannot transfer thermal energy to solid surfaces.",
    "B",
    "Thermal radiation in the infrared band matches the vibrational mode frequencies of covalent bonds (C-H, C-O, O-H) present in paint binders. By resonance, these bonds directly absorb IR photons and convert radiant energy into vibrational kinetic energy (heat) instantaneously throughout the coating thickness, achieving rapid uniform curing without skinning."
  ),
  makeCase(
    chapter, 20, "Fluorescence of Security Markings on Currency Notes", "Absorption of UV and Emission of Visible Light",
    "A bank teller examines a genuine 500-rupee currency note by placing it inside a counterfeit detection box equipped with a Wood's glass ultraviolet lamp (λ = 365 nm). Under the invisible UV illumination, invisible embedded fibers and watermark numerals glow in vivid neon green and orange.",
    "What physical phenomenon explains why an object glows in visible colors when irradiated with invisible ultraviolet light?",
    "Phosphorescence caused by beta decay inside the banknote paper.",
    "Fluorescence, where phosphor molecules absorb high-energy UV photons and instantaneously re-emit photons of lower energy (longer wavelength) in the visible range.",
    "Total internal reflection of UV rays within the cellulose fibers.",
    "Photoelectric emission of conduction electrons producing spark discharges.",
    "B",
    "Fluorescence occurs when certain substances (phosphors) absorb high-energy, short-wavelength radiation (such as UV). Electrons are excited to higher quantum states, undergo rapid non-radiative vibrational relaxation, and then transition back to ground state by emitting lower-energy, longer-wavelength photons (Stokes shift) falling within the visible spectrum."
  ),
  makeCase(
    chapter, 21, "Wavelength Boundaries of the Visible Spectrum", "Visible Spectrum Bandwidth in Nanometers and Angstroms",
    "A student calibrates a diffraction grating spectrometer to record the boundary limits of human vision. The spectrometer is illuminated by a standard broadband tungsten-halogen calibration lamp.",
    "What is the accepted approximate wavelength range of the visible spectrum in nanometers and Angstrom units?",
    "100 nm to 200 nm (1,000 Å to 2,000 Å)",
    "400 nm to 700 nm (4,000 Å to 7,000 Å)",
    "700 nm to 1,500 nm (7,000 Å to 15,000 Å)",
    "10 nm to 50 nm (100 Å to 500 Å)",
    "B",
    "The visible spectrum spans from the violet limit at approximately 400 nm (4,000 Å) to the deep red limit at approximately 700 nm (7,000 Å; often cited up to 750–800 nm depending on detector sensitivity). 1 nm = 10⁻⁹ m = 10 Å."
  ),
  makeCase(
    chapter, 22, "Frequency Calculation Across the Visible Spectrum", "Relationship Between Speed of Light, Frequency, and Wavelength",
    "A laser pointer emits pure red light of wavelength λ_r = 660 nm in air. A helium-cadmium laser emits violet light of wavelength λ_v = 440 nm in air. The speed of light in air is c = 3.0 × 10⁸ m/s.",
    "What are the frequencies of the red light (f_r) and violet light (f_v)?",
    "f_r = 4.55 × 10¹⁴ Hz; f_v = 6.82 × 10¹⁴ Hz",
    "f_r = 2.20 × 10¹⁴ Hz; f_v = 1.47 × 10¹⁴ Hz",
    "f_r = 6.60 × 10¹⁴ Hz; f_v = 4.40 × 10¹⁴ Hz",
    "f_r = 1.98 × 10¹⁵ Hz; f_v = 1.32 × 10¹⁵ Hz",
    "A",
    "Frequency f = c / λ. For red: f_r = (3.0 × 10⁸ m/s) / (660 × 10⁻⁹ m) ≈ 4.55 × 10¹⁴ Hz. For violet: f_v = (3.0 × 10⁸ m/s) / (440 × 10⁻⁹ m) ≈ 6.82 × 10¹⁴ Hz. Violet light has approximately 1.5 times the frequency of red light."
  ),
  makeCase(
    chapter, 23, "Electromagnetic Radiation Sequence in Order of Decreasing Wavelength", "Ordering the Electromagnetic Spectrum",
    "A physics exam asks students to arrange the following four electromagnetic wave bands in order of decreasing wavelength (from longest wavelength to shortest wavelength): Microwaves, X-rays, Infrared waves, and Ultraviolet rays.",
    "Which sequence represents the correct strictly decreasing order of wavelength?",
    "X-rays > Ultraviolet > Infrared > Microwaves",
    "Microwaves > Infrared > Ultraviolet > X-rays",
    "Infrared > Microwaves > X-rays > Ultraviolet",
    "Ultraviolet > X-rays > Microwaves > Infrared",
    "B",
    "In order of decreasing wavelength (which corresponds to increasing frequency and photon energy): Radio waves > Microwaves (~1 mm to 30 cm) > Infrared (~700 nm to 1 mm) > Visible (400–700 nm) > Ultraviolet (~10 nm to 400 nm) > X-rays (~0.01 nm to 10 nm) > Gamma rays (<0.01 nm)."
  ),
  makeCase(
    chapter, 24, "Thermopile Response to Different Spectral Regions", "Quantitative Measurement of Infrared Radiation",
    "A bismuth-antimony thermopile connected to a sensitive ballistic galvanometer is exposed to three equal-intensity beams: Beam A consists of ultraviolet rays, Beam B of yellow light, and Beam C of infrared rays. The receiver face of the thermopile is coated with lampblack.",
    "Which beam produces the largest galvanometer deflection, and why?",
    "Beam A produces the largest deflection because UV photons have the greatest energy.",
    "Beam C produces the largest deflection because infrared radiation produces the highest heating effect on the thermopile junctions.",
    "Beam B produces the largest deflection because the eye sees yellow best.",
    "All three beams produce zero deflection because thermopiles respond only to magnetic fields.",
    "B",
    "A thermopile operates on the Seebeck thermoelectric effect: a temperature difference between hot and cold junctions creates an electromotive force (EMF). Because infrared radiation is absorbed efficiently and converts directly into heat, it raises the temperature of the blackened junction most effectively, producing the maximum thermoelectric current."
  ),
  makeCase(
    chapter, 25, "Why Pure Water in a Deep Ocean Appears Deep Blue", "Selective Absorption and Water Scattering",
    "A research submarine explores the open tropical ocean far from coastal runoff and sediment. Looking out the quartz viewport at a depth of 30 meters, the water appears an intense deep sapphire blue.",
    "What optical processes cause deep, clear ocean water to appear blue?",
    "Water molecules reflect the blue sky perfectly like a flat mirror.",
    "Water molecules selectively absorb longer wavelengths (red, orange, and yellow) much more strongly than shorter blue wavelengths, while blue light undergoes molecular scattering.",
    "Dissolved salt ions emit blue fluorescence when under high hydrostatic pressure.",
    "Plankton emit blue chemiluminescence across all depths of the ocean.",
    "B",
    "Liquid water has intrinsic vibrational overtones that cause significant absorption in the red and infrared parts of the optical spectrum (red light is absorbed within 10–15 meters). Blue and violet light suffer minimal absorption and are scattered by water molecules back to the observer, giving deep pure water its natural rich blue hue."
  ),
  makeCase(
    chapter, 26, "X-ray Imaging of Human Skeletal Fractures", "Differential Absorption of X-rays by Bone and Soft Tissue",
    "A patient suspected of having a fractured ulna undergoes a diagnostic radiograph. An X-ray beam passes through the patient's forearm and exposes a photographic film cassette underneath.",
    "Why do bones appear as white (radiopaque) shadows on the developed negative X-ray film while surrounding muscles appear dark gray?",
    "Bone contains dense calcium phosphate (high atomic number Z) which strongly absorbs X-rays by photoelectric effect, casting a shadow, while soft tissue allows X-rays to pass through and blacken the film.",
    "Bone reflects all X-rays forward, overexposing the film beneath it.",
    "Muscle tissue emits its own X-rays that darken the photographic emulsion.",
    "X-rays cannot penetrate skin unless it is treated with iodine.",
    "A",
    "X-ray attenuation depends strongly on density and atomic number (Z³). Calcium in bone has Z = 20, whereas soft tissue (water, carbon, hydrogen) has an average Z ≈ 7. Bone absorbs X-rays heavily, shielding the film beneath so it remains unexposed (clear/white after chemical development), whereas X-rays penetrating soft tissue expose and blacken silver halide grains."
  ),
  makeCase(
    chapter, 27, "Gamma Ray Penetration vs Alpha and Beta Particles", "High Energy Photons vs Charged Particulate Radiation",
    "A nuclear physics safety officer evaluates shielding requirements for three radiation sources: Source α (alpha particles), Source β (beta particles), and Source γ (gamma rays). The officer places a thin sheet of notebook paper, a 3 mm aluminum sheet, and a 10 cm thick lead block.",
    "Which radiation penetrates both the paper and the aluminum sheet, requiring the thick lead block to attenuate it significantly?",
    "Alpha radiation",
    "Beta radiation",
    "Gamma radiation",
    "All three radiations are completely blocked by a single sheet of paper.",
    "C",
    "Alpha particles (He²⁺ nuclei) have low penetration and are stopped by paper. Beta particles (high-speed electrons) penetrate paper but are stopped by a few millimeters of aluminum. Gamma rays are uncharged, high-frequency electromagnetic photons with zero rest mass and very high photon energy; they do not interact via Coulomb forces, requiring dense materials like thick lead to attenuate them via Compton scattering and pair production."
  ),
  makeCase(
    chapter, 28, "Microwave Oven Heating Mechanism", "Dielectric Heating and Water Dipole Rotation",
    "A food scientist tests a microwave oven operating at the standard frequency of 2.45 GHz (wavelength λ ≈ 12.2 cm). A bowl containing 200 g of dry dry ceramic beads and a bowl containing 200 g of water are placed side-by-side in the oven for 60 seconds.",
    "What will be the temperature outcome, and what is the underlying heating mechanism?",
    "Both bowls heat up by exactly 50°C by thermal conduction.",
    "The water gets boiling hot while the dry ceramic beads remain virtually cool, because microwave electric fields cause polar water molecules to oscillate rapidly, generating dielectric friction heat.",
    "The ceramic beads melt because microwaves only heat crystalline solids.",
    "Microwaves cause nuclear fusion in hydrogen atoms of water.",
    "B",
    "Water is an asymmetric polar molecule with a permanent electric dipole moment. The oscillating high-frequency electric field of microwaves (2.45 billion times per second) exerts an alternating torque on water molecules, forcing them into continuous rotational reorientation. Molecular friction and viscous dissipation convert this field energy directly into thermal kinetic energy."
  ),
  makeCase(
    chapter, 29, "Total Internal Reflection in Optical Fiber Communications", "Light Guidance Without Spectral Distortion",
    "An optical telecommunications engineer transmits broadband data using infrared laser pulses at λ = 1550 nm through a silica glass optical fiber of core refractive index n_core = 1.48 and cladding refractive index n_clad = 1.46.",
    "What condition must the angle of incidence θ at the core-cladding boundary satisfy for the infrared signal to propagate without escaping?",
    "θ must be equal to 0° (normal to core boundary).",
    "θ must be strictly greater than the critical angle θ_c = arcsin(1.46 / 1.48) ≈ 80.6°.",
    "θ must be less than 45° so light can refract into the cladding.",
    "θ must be exactly 90° so light travels along the outside surface of the cable.",
    "B",
    "Optical fiber relies on total internal reflection (TIR) within the higher-index core (n1 = 1.48) surrounded by a lower-index cladding (n2 = 1.46). For TIR to occur, light must travel from denser to rarer medium and the angle of incidence at the interface must exceed the critical angle: θ_c = sin⁻¹(n2/n1) = sin⁻¹(1.46/1.48) ≈ 80.6°."
  ),
  makeCase(
    chapter, 30, "Comparison of Refractive Index for Visible Colors in Flint Glass", "Refractive Index Ordering for Spectral Colors",
    "In a precision optical workshop, an optician measures the refractive index of dense flint glass for four specific spectral lines: red (656 nm), yellow (589 nm), blue (486 nm), and violet (404 nm).",
    "Which inequality correctly represents the relative refractive index of flint glass for these four colors?",
    "μ_red > μ_yellow > μ_blue > μ_violet",
    "μ_violet > μ_blue > μ_yellow > μ_red",
    "μ_yellow > μ_red > μ_violet > μ_blue",
    "μ_red = μ_yellow = μ_blue = μ_violet",
    "B",
    "According to Cauchy's dispersion formula, refractive index μ increases as wavelength λ decreases. Since λ_red > λ_yellow > λ_blue > λ_violet, the refractive indices follow the strictly opposite order: μ_violet > μ_blue > μ_yellow > μ_red. Flint glass refracts violet light the most and red light the least."
  ),
  makeCase(
    chapter, 31, "PIR (Passive Infrared) Motion Sensor Operation", "Detection of Blackbody Thermal Radiation from Living Bodies",
    "A home security alarm system uses a PIR sensor module installed in a hallway. When an intruder walks across the hallway at night in total pitch darkness, the sensor instantly triggers an audible siren, but when an inanimate robotic toy car at room temperature moves across the floor, the alarm does not sound.",
    "What physical property of the human body does the PIR sensor detect?",
    "Radio wave emissions from human nerve impulses.",
    "Thermal infrared radiation (wavelength around 9–10 μm) emitted naturally by human skin due to core body temperature (37°C), which changes the differential heat flux on the sensor.",
    "Visible green fluorescence emitted by human clothes in darkness.",
    "Gravitational fluctuations caused by human mass.",
    "B",
    "Every warm body emits electromagnetic radiation governed by Planck's blackbody law and Stefan-Boltzmann law. Human skin at 37°C (310 K) has peak thermal emission in the mid-infrared range at λ_max ≈ 2898 / 310 ≈ 9.35 μm (Wien's law). Pyroelectric infrared (PIR) sensors use differential sensor elements to detect changes in incident infrared flux as warm humans cross optical Fresnel zones."
  ),
  makeCase(
    chapter, 32, "Rock-Salt vs Quartz Prism for Infrared vs Ultraviolet Separation", "Summary of Prism Transmission Bands",
    "A university student prepares a comparative table of optical prism materials for dispersing different regions of the electromagnetic spectrum: Prism 1 for Ultraviolet, Prism 2 for Visible light, and Prism 3 for Infrared radiation.",
    "Which combination of materials correctly identifies the standard prisms for each respective region?",
    "UV: Quartz; Visible: Glass; Infrared: Rock-salt (NaCl)",
    "UV: Glass; Visible: Rock-salt; Infrared: Quartz",
    "UV: Rock-salt; Visible: Quartz; Infrared: Glass",
    "UV: Lead crystal; Visible: Diamond; Infrared: Water",
    "A",
    "Quartz is transparent to ultraviolet (down to ~180 nm) while glass absorbs UV. Crown or flint glass is ideal for visible light (400–700 nm). Rock-salt (halite crystal, NaCl) is transparent across the infrared spectrum where ordinary glass becomes totally opaque due to silicate phonon absorption bands."
  ),
  makeCase(
    chapter, 33, "Why Yellow Light is Used for Sodium Street Lighting", "Atmospheric Penetration and Human Visual Acuity",
    "Before LED lighting became widespread, highway authorities illuminated fog-prone highways, expressway interchanges, and tunnels with amber-yellow low-pressure sodium vapor lamps (emitting at λ = 589 nm).",
    "Why was yellow sodium light preferred over white or blue lighting for misty highways?",
    "Yellow light travels faster than all other colors in air.",
    "Yellow light has a longer wavelength than blue/violet, suffering significantly less scattering in fog, and coincides with the peak sensitivity of the human eye under photopic vision.",
    "Yellow light chemically repels water droplets in fog.",
    "Yellow light cannot undergo refraction through car windscreens.",
    "B",
    "Yellow light (~589 nm) experiences much less scattering than blue/violet light due to Rayleigh's inverse fourth-power law (1/λ⁴). Furthermore, the human eye's photopic luminous efficiency curve peaks in the yellow-green region (~555 nm). Sodium lamps therefore maximize contrast, penetration through fog, and visual acuity while minimizing blinding glare."
  ),
  makeCase(
    chapter, 34, "Ozone Layer Depletion and Ultraviolet Penetration", "Solar UV Band Absorption in Stratosphere",
    "Environmental atmospheric chemists measure solar irradiance at ground level. They find that solar UV radiation is partitioned into three bands: UV-A (315–400 nm), UV-B (280–315 nm), and UV-C (100–280 nm).",
    "Which ultraviolet band is completely absorbed by the stratospheric ozone layer, and which band partially penetrates to cause sunburn and skin cancer?",
    "UV-A is completely absorbed; UV-C reaches ground level in full intensity.",
    "UV-C is completely absorbed by ozone; UV-B is partially absorbed, and excess penetration due to ozone depletion causes severe sunburn and DNA mutations.",
    "All UV bands pass through ozone without any attenuation.",
    "Ozone absorbs visible green light while amplifying ultraviolet radiation.",
    "B",
    "Stratospheric ozone (O₃) photolyzes upon absorbing high-energy UV-C (< 280 nm), shielding Earth's surface 100% from lethal UV-C. UV-B (280–315 nm) is mostly absorbed by ozone, but residual amounts reach the ground, causing erythema (sunburn) and DNA thymine dimers leading to skin melanomas. UV-A (315–400 nm) passes through with minimal absorption."
  ),
  makeCase(
    chapter, 35, "Scattering by Smoke vs Clean Air in a Laser Demonstration", "Tyndall Effect and Visibility of Light Beam",
    "A physics teacher directs a red helium-neon laser beam across a clean, dust-free classroom. The students cannot see the path of the beam across the air, seeing only a red dot on the opposite wall. The teacher then burns an incense stick, introducing smoke into the laser's path, and the entire red beam instantly becomes brilliantly visible.",
    "Why does the beam path become visible only when smoke particles are introduced?",
    "Smoke particles generate red light by combustion.",
    "In clean air, molecular scattering is negligible for red light; smoke particles are large colloidal centers that scatter laser light in all directions into the students' eyes (Tyndall effect).",
    "Smoke particles reflect the laser beam back into the laser cavity.",
    "Smoke slows the speed of red light down to zero, stopping the photons in mid-air.",
    "B",
    "Light is only visible to an observer if photons enter the observer's pupils. In clean dust-free air, the red laser beam travels in a tight collimated beam with virtually no Rayleigh scattering because red has a long wavelength. Colloidal smoke particles act as scattering centers, diverting a portion of the laser beam sideways into the observers' eyes (Tyndall effect)."
  ),
  makeCase(
    chapter, 36, "Dispersion Angle in Water Droplets During Rainbow Formation", "Internal Reflection and Dispersion in Water Spheres",
    "Following a summer rain shower, an observer with the sun behind them at an elevation of 20° views a bright primary rainbow in the opposite sky. White sunlight enters a spherical raindrop, undergoes refraction with dispersion at the front surface, total/partial reflection at the back inner surface, and emerges refracted into the air.",
    "What are the characteristic exit angles of the red and violet rays relative to the incoming solar rays in a primary rainbow?",
    "Red emerges at approximately 42° and violet at approximately 40°; with red forming the outer arc.",
    "Violet emerges at 54° and red at 51°; with violet forming the outer arc.",
    "Both red and violet emerge at exactly 90°.",
    "Red emerges at 20° and violet at 30°; with violet on the outside.",
    "A",
    "In a primary rainbow (one internal reflection), the minimum deviation concentration angle is approximately 42° for red rays and 40° for violet rays relative to the anti-solar axis. Because red light deviates less inside water (lower refractive index of water for red, μ_r ≈ 1.331 vs μ_v ≈ 1.344), red rays emerge at a steeper angle (42°), placing the red band on the outermost perimeter of the primary bow."
  ),
  makeCase(
    chapter, 37, "Infrared Emissivity of Black vs Polished Silver Surfaces", "Leslie's Cube Experiment on Thermal Radiation",
    "A Leslie's cube filled with boiling water at 100°C has four vertical faces: Face 1 is coated with dull matte black paint, Face 2 is painted white, Face 3 is dull rough copper, and Face 4 is polished shiny silver. A thermopile is placed at an identical distance of 10 cm from each face in turn.",
    "Which face radiates the maximum intensity of infrared radiation, and which radiates the minimum?",
    "Maximum from Face 4 (polished silver); Minimum from Face 1 (matte black)",
    "Maximum from Face 1 (matte black); Minimum from Face 4 (polished silver)",
    "All four faces radiate identical infrared intensity because all are at 100°C.",
    "Face 2 (white) radiates maximum because white reflects visible light.",
    "B",
    "According to Kirchhoff's law of thermal radiation, a good absorber is an equally good emitter at any given wavelength (emissivity ε = absorptivity α). A dull matte black surface has an emissivity ε close to 1.0, making it an excellent emitter of infrared radiation. A polished silver surface has very low emissivity (ε ≈ 0.04) and high reflectivity, emitting minimal infrared."
  ),
  makeCase(
    chapter, 38, "Secondary Rainbow Color Inversion and Angular Position", "Double Internal Reflection and Intensity Attenuation",
    "During intense afternoon sunlight after a torrential downpour, an observer notices a fainter secondary rainbow arching above the primary rainbow. The observer notices that the color sequence of the secondary rainbow is completely reversed compared to the primary rainbow.",
    "What causes the color reversal and the fainter brightness of the secondary rainbow?",
    "Light enters the bottom of the raindrop and undergoes three refractions without reflection.",
    "Sunlight undergoes two internal reflections inside the water droplet; each internal reflection inverts the angular dispersion order and loses light energy through partial transmission.",
    "The secondary rainbow is formed by reflection off ice crystals in the upper stratosphere.",
    "Secondary rainbows are an optical illusion created by the human cornea.",
    "B",
    "A secondary rainbow is formed by rays that undergo two internal reflections inside spherical water droplets before emerging. The two internal reflections invert the angular order of the emerging rays, causing violet light to emerge at ~54° and red light at ~51° (violet on the outside, red on the inside). Because light escapes at each internal boundary, the secondary bow is noticeably fainter."
  ),
  makeCase(
    chapter, 39, "Sun's Oval Distortion and Early Sunrise Due to Atmospheric Refraction", "Atmospheric Refraction Gradient and Apparent Shift",
    "Astronomers observe that the Sun is visible about 2 minutes before it physically crosses the true geometrical horizon at sunrise, and remains visible for about 2 minutes after setting below the horizon at sunset. Furthermore, the disk of the setting Sun appears noticeably flattened (elliptical) rather than circular.",
    "What causes the 2-minute time advancement and the vertical flattening of the solar disk at the horizon?",
    "Continuous increase in atmospheric air density towards Earth's surface bends light rays downward, raising the Sun's apparent position, while the lower limb of the Sun is refracted upward more than the upper limb.",
    "Earth's magnetic field curves solar light around the planetary curvature.",
    "Sunspots expand the solar diameter during dawn and twilight.",
    "Rayleigh scattering repels the upper edge of the Sun while pulling down the lower edge.",
    "A",
    "Atmospheric density increases toward Earth's surface, creating a continuous gradient of increasing refractive index. Light rays from the horizon Sun refract along a curved path toward Earth, making the Sun appear raised by about 0.5° (about one solar diameter), giving ~2 extra minutes of daylight at both sunrise and sunset. Because the lower limb is closer to the horizon, it experiences greater refraction than the upper limb, vertically compressing the disk into an oval."
  ),
  makeCase(
    chapter, 40, "Transmission of Radio Waves vs Gamma Rays through Concrete Walls", "Wavelength Scale and Diffraction/Absorption Through Obstacles",
    "A student in a basement bunker built with 30 cm thick reinforced concrete walls can easily listen to an FM radio station broadcasting at 100 MHz (λ = 3.0 m) using an indoor wire antenna, but high-energy diagnostic X-rays and medical gamma rays cannot penetrate the bunker walls.",
    "Why do long radio waves penetrate or diffract around building structures whereas optical and gamma rays do not?",
    "Radio waves have wavelengths comparable to or larger than door and window openings, allowing extensive wave diffraction around obstacles, whereas gamma rays have sub-atomic wavelengths and interact via particulate photon absorption.",
    "Radio waves have higher photon energy than gamma rays, allowing them to vaporize concrete.",
    "Concrete is made of magnetic materials that attract radio waves.",
    "Gamma rays are electrically charged and become grounded in concrete.",
    "A",
    "Electromagnetic waves with large wavelengths (like VHF radio waves, λ = 1 to 10 m) undergo significant diffraction around doorways, windows, and obstacles whose physical dimensions are on the order of λ. X-rays and gamma rays have microscopic wavelengths (< 1 nm), showing no macroscopic diffraction, and their photons are attenuated exponentially via Compton scattering and photoelectric absorption by dense matter."
  ),
  makeCase(
    chapter, 41, "Thermal Radiation Emission Proportionality with Absolute Temperature", "Stefan-Boltzmann Law and Spectral Shift",
    "An electric heating coil is connected to a variable autotransformer. At 500 K (227°C), the coil emits invisible infrared radiation that can be felt by a hand held nearby. When the voltage is increased until the coil temperature doubles to 1000 K (727°C), the coil glows a distinct dull cherry red.",
    "By what factor does the total radiant energy emitted per second by the coil increase when its absolute temperature is doubled from 500 K to 1000 K?",
    "It increases by a factor of 2.",
    "It increases by a factor of 4.",
    "It increases by a factor of 8.",
    "It increases by a factor of 16 (since E ∝ T⁴).",
    "D",
    "According to the Stefan-Boltzmann law of thermal radiation, the total radiant energy emitted per second per unit surface area by a blackbody is directly proportional to the fourth power of its absolute thermodynamic temperature: E = σT⁴. When T increases by a factor of 2 (from 500 K to 1000 K), the radiant emission increases by 2⁴ = 16 times. Furthermore, by Wien's law (λ_max ∝ 1/T), the peak wavelength shifts into the visible red range."
  ),
  makeCase(
    chapter, 42, "Prism Dispersion Power Comparison: Flint vs Crown Glass", "Dispersive Power and Chromatic Aberration",
    "An optical lens designer is constructing an achromatic doublet lens to eliminate color fringing in a high-power telescope. The designer compares two prisms of the same refracting angle A: one made of flint glass (containing lead oxide) and one made of crown glass (soda-lime silicate).",
    "How does the dispersive power of flint glass compare with that of crown glass?",
    "Flint glass has a much higher dispersive power than crown glass, producing a wider spread between red and violet rays for the same mean deviation.",
    "Crown glass has a higher dispersive power and smaller refractive index.",
    "Both glasses have identical dispersive power because both are transparent.",
    "Flint glass produces no dispersion at all.",
    "A",
    "Dispersive power ω = (μ_v - μ_r) / (μ_y - 1). Dense flint glass has a higher lead content, which causes its refractive index to change much more sharply with wavelength (higher dispersion gradient dμ/dλ) compared to crown glass. Thus, flint glass produces a significantly broader spectrum for a given mean deviation angle."
  ),
  makeCase(
    chapter, 43, "Photochemical Decomposition of Hydrogen Peroxide by UV Light", "Storage in Dark Amber Glass Bottles",
    "In a pharmacy, bottles of hydrogen peroxide (H₂O₂) and silver nitrate solution (AgNO₃) are strictly stored in dark amber-colored or opaque brown glass bottles rather than clear transparent glass bottles.",
    "What is the optical reason for using dark amber glass bottles for storing these chemical reagents?",
    "Amber glass absorbs high-energy ultraviolet and blue wavelengths, preventing light-induced photochemical decomposition of the sensitive reagents.",
    "Amber glass reflects infrared rays to keep the chemicals warm.",
    "Clear glass reacts chemically with peroxide ions.",
    "Amber glass increases the shelf life by emitting gamma rays.",
    "A",
    "Molecules like H₂O₂ and AgNO₃ are photochemically unstable. Photons of high frequency and short wavelength (ultraviolet and blue light) possess sufficient quantum energy (E = hf) to break covalent and ionic bonds, causing spontaneous decomposition: 2H₂O₂ + hf -> 2H₂O + O₂. Dark amber glass absorbs UV and violet/blue light, shielding the chemicals from actinic photolysis."
  ),
  makeCase(
    chapter, 44, "Total Angular Deviation in an Equilateral Triangular Prism", "Deviation Formula δ = i + e - A",
    "A ray of monochromatic light is incident on an equilateral glass prism (refracting angle A = 60°) at an angle of incidence i = 48°. The ray travels through the prism and emerges from the opposite face at an angle of emergence e = 48°.",
    "What is the angle of deviation δ experienced by the light ray, and what special condition does this symmetric traversal represent?",
    "δ = 96°; condition of maximum deviation.",
    "δ = 36°; condition of minimum deviation (δ_min), where the refracted ray travels parallel to the base inside the prism.",
    "δ = 60°; condition of zero dispersion.",
    "δ = 12°; condition of total internal reflection.",
    "B",
    "The general relation for refraction through a prism is δ = i + e - A. Here i = 48°, e = 48°, and A = 60°. Therefore: δ = 48° + 48° - 60° = 96° - 60° = 36°. When i = e, the prism is in the unique state of minimum deviation (δ = δ_min), and for an equilateral prism, the refracted ray travels strictly parallel to the prism base."
  ),
  makeCase(
    chapter, 45, "Infrared Sauna vs Conventional Steam Sauna", "Direct Radiant Heating of Dermal Tissue",
    "In a wellness clinic, a sports therapist compares an infrared sauna operating with ceramic heating elements (emitting far-infrared radiation at λ = 3 μm to 10 μm) to a conventional steam sauna. The infrared sauna induces intense sweating at an air temperature of only 45°C, whereas the steam sauna requires air at 85°C to produce the same physiological response.",
    "Why does the infrared sauna produce deep thermal heating at a much lower ambient air temperature?",
    "Infrared radiation heats the ambient room air first by superheating nitrogen molecules.",
    "Far-infrared radiation is directly absorbed by deep dermal tissue and subcutaneous water molecules without relying on air conduction, warming the body directly.",
    "Steam sauna absorbs all body heat while infrared creates nuclear reactions in sweat glands.",
    "Infrared waves lower the boiling point of human blood.",
    "B",
    "Infrared radiant energy does not require a medium to transfer heat. Instead of relying on convective heating through hot ambient air (as in a steam room), far-infrared waves penetrate several millimeters into human subcutaneous tissue where they are absorbed directly by cellular water molecules, elevating core tissue temperature directly with minimal ambient air heating."
  ),
  makeCase(
    chapter, 46, "Color of Ocean Water from a Low-Flying Aircraft", "Scattering vs Reflection of Ocean Surface",
    "An aerial photographer observes that open tropical ocean water appears bright turquoise cyan near coral reefs and sandy shallows, but deep cobalt navy blue in abyssal offshore trenches. On an overcast gray day, however, the surface appears dull slate gray.",
    "What dual factors determine the perceived color of the sea surface under these varied conditions?",
    "Purely the color of marine algae and coral polyps across all depths.",
    "Under clear skies, selective red absorption and molecular Rayleigh scattering of sunlight within water determine deep blue color, while specular Fresnel reflection of the sky dome dominates the surface appearance on overcast days.",
    "Water has no color under any circumstance; the appearance is solely an optical illusion of cameras.",
    "Dissolved oxygen absorbs blue light while nitrogen reflects green.",
    "B",
    "The intrinsic color of clear water is pale blue due to selective absorption of red wavelengths combined with molecular scattering of blue wavelengths. In shallow waters, reflected sunlight from white sand combines with blue-green water transmission to produce turquoise cyan. Furthermore, the water surface acts as a weak Fresnel mirror; on overcast days, it reflects the diffuse gray cloud canopy, appearing dull gray."
  ),
  makeCase(
    chapter, 47, "Why Red Color is Seen First at Dawn Before the Sun Rises", "Differential Atmospheric Refraction and Scattering",
    "Just before the Sun's upper limb crosses the horizon at dawn, the eastern horizon glows with a deep fiery red band, followed sequentially by orange and then yellow as the Sun draws nearer to the horizon.",
    "Why does the red color appear earliest along the eastern horizon before sunrise?",
    "Red light is traveling at the highest speed in interstellar space.",
    "Red light has the longest wavelength and suffers the least scattering as it traverses the extreme tangent path through hundreds of kilometers of atmosphere, allowing it to reach the observer first.",
    "The atmosphere creates red light by fusing hydrogen atoms at dawn.",
    "Earth's rotation accelerates red photons towards the east.",
    "B",
    "When the Sun is several degrees below the horizon, solar rays must traverse the longest possible slant path through the lower atmosphere. Along this extreme optical path length, Rayleigh scattering (I ∝ 1/λ⁴) completely strips out violet, indigo, blue, and green. Only the longest wavelength (red) survives the immense atmospheric attenuation, painting the pre-dawn horizon sky red."
  ),
  makeCase(
    chapter, 48, "Fluorescent vs Incandescent Lamps in Optical Energy Efficiency", "Visible Luminous Efficacy vs Infrared Heat Waste",
    "An electrical engineer compares a 60 W incandescent tungsten filament bulb with an equivalent 10 W LED lamp. A spectrometer records that 90% of the electromagnetic radiation emitted by the incandescent bulb lies in the infrared band (λ > 700 nm), while the LED lamp emits almost exclusively in the visible spectrum (400–700 nm).",
    "Why is the incandescent bulb so energy inefficient compared to the LED lamp?",
    "The incandescent bulb produces too much ultraviolet radiation.",
    "The incandescent filament operates as a thermal blackbody radiator whose emission peaks in the invisible infrared spectrum, dissipating most electrical energy as invisible heat rather than visible light.",
    "The incandescent bulb loses energy due to nuclear fission of tungsten.",
    "The LED converts electrical energy into magnetic fields rather than light.",
    "B",
    "A tungsten filament heated to ~2700 K behaves as an incandescent thermal radiator. According to Wien's displacement law, its emission spectrum peaks around λ_max ≈ 1070 nm, which is well into the invisible near-infrared. Only ~5–10% of its radiant output falls within the visible band (400–700 nm), making ~90% of the consumed electricity wasted as invisible heat."
  ),
  makeCase(
    chapter, 49, "Ultraviolet Curing of Dental Resin Fillings", "Photopolymerization Initiated by UV/Blue Light",
    "A dentist restores a patient's decayed molar using a soft, malleable composite resin paste containing a photo-initiator (camphorquinone). The dentist shapes the soft filling and then shines a high-intensity blue/near-UV curing light (λ = 400–470 nm) directly onto the tooth for 20 seconds. The resin instantly hardens into a rigid, rock-solid tooth filling.",
    "What physical and chemical process occurs when the composite resin is exposed to the curing light?",
    "The curing light melts the tooth enamel, fusing it with the plastic.",
    "Photons of specific frequency are absorbed by photo-initiator molecules, generating free radicals that trigger rapid cross-linking polymer chain formation (photopolymerization).",
    "The light evaporates all moisture from the resin by boiling it.",
    "The light magnetizes the resin molecules so they stick to the calcium of the tooth.",
    "B",
    "Photopolymerization is a light-activated chemical reaction. The dental curing lamp emits high-intensity photons whose wavelength matches the absorption peak of the resin's photo-initiator. The absorbed photon energy excites the initiator, cleaving chemical bonds to form active free radicals that propagate rapid addition polymerization across monomer chains, turning liquid/paste resin into a dense solid matrix in seconds."
  ),
  makeCase(
    chapter, 50, "Electromagnetic Wave Propagation through Dielectric Media", "Refractive Index as Ratio of Wave Speeds",
    "A pulsed laser emits a nanosecond pulse of green light (frequency f = 5.0 × 10¹⁴ Hz) from air (n ≈ 1.0) into a block of optical glass having a refractive index of n = 1.50. The speed of light in vacuum is c = 3.0 × 10⁸ m/s.",
    "What are the speed v, frequency f, and wavelength λ of the green light inside the glass block?",
    "v = 2.0 × 10⁸ m/s; f = 5.0 × 10¹⁴ Hz; λ = 400 nm",
    "v = 3.0 × 10⁸ m/s; f = 3.33 × 10¹⁴ Hz; λ = 600 nm",
    "v = 2.0 × 10⁸ m/s; f = 7.5 × 10¹⁴ Hz; λ = 600 nm",
    "v = 4.5 × 10⁸ m/s; f = 5.0 × 10¹⁴ Hz; λ = 900 nm",
    "A",
    "When a wave enters a new medium, its frequency f is invariant because it depends only on the source: f = 5.0 × 10¹⁴ Hz. The wave speed in glass is v = c / n = (3.0 × 10⁸ m/s) / 1.50 = 2.0 × 10⁸ m/s. The wavelength in glass is λ_glass = v / f = (2.0 × 10⁸ m/s) / (5.0 × 10¹⁴ Hz) = 4.0 × 10⁻⁷ m = 400 nm (or λ_air / n = 600 nm / 1.5 = 400 nm)."
  )
];

const targetPath = path.join(__dirname, 'questionBank', 'physics_case_spectrum.json');
fs.writeFileSync(targetPath, JSON.stringify(spectrumCases, null, 2), 'utf8');
console.log(`Saved ${spectrumCases.length} case studies for Spectrum to ${targetPath}`);
