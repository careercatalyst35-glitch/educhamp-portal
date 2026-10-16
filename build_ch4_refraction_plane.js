const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Refraction of Light at Plane Surfaces";

const refPlaneCases = [
  makeCase(
    chapter, 1, "Laboratory Verification of Snell's Law in Water Tank", "Snell's Law Ratio of Sines",
    "A student in an ICSE physics laboratory directs a narrow red diode laser beam from air into a rectangular acrylic tank filled with pure distilled water. The student measures the angle of incidence in air as i = 45° and the corresponding angle of refraction in water as r = 32°.",
    "What is the measured refractive index of water, and what physical constant does this ratio represent?",
    "μ = sin(45°) / sin(32°) = 0.7071 / 0.5299 ≈ 1.334; represents the ratio of the speed of light in air to that in water.",
    "μ = 45° / 32° = 1.406; represents the ratio of incidence to refraction angles directly.",
    "μ = tan(45°) / tan(32°) = 1.600; represents the Brewster angle tangent.",
    "μ = cos(32°) / cos(45°) = 1.200; represents optical density variance.",
    "A",
    "By Snell's Law (the second law of refraction), the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant for a given pair of media: 1μ2 = sin i / sin r = sin(45°) / sin(32°) = 0.7071 / 0.5299 ≈ 1.334. This constant equals the ratio of the phase speed of light in the first medium (air) to that in the second medium (water): μ = c / v."
  ),
  makeCase(
    chapter, 2, "Normal Incidence of Laser into Dense Flint Glass Block", "No Deviation at i = 0°",
    "A laser beam strikes the top flat polished surface of a dense flint glass block (refractive index μ = 1.65) perpendicularly (normal incidence, i = 0°). The speed of light in air is c = 3.0 × 10^8 m/s.",
    "What is the angle of refraction r, and what happens to the direction, speed, and wavelength of the laser light inside the glass?",
    "Angle r = 0° (no deviation in direction); speed decreases to 1.82 × 10^8 m/s and wavelength decreases proportionally.",
    "Angle r = 90°; speed increases to 4.95 × 10^8 m/s.",
    "Angle r = 0°; speed remains 3.0 × 10^8 m/s because there is no refraction.",
    "Angle r = 45°; speed decreases and frequency decreases.",
    "A",
    "At normal incidence, i = 0°. By Snell's Law: sin r = (sin 0°) / μ = 0, so r = 0°. The light continues without any change in direction (zero deviation). However, because glass is optically denser than air, the speed of light drops to v = c / μ = 3.0 × 10^8 / 1.65 ≈ 1.818 × 10^8 m/s. Since frequency f is invariant, wavelength inside glass shortens: λ_glass = λ_air / μ."
  ),
  makeCase(
    chapter, 3, "Laser Lateral Displacement Through Rectangular Glass Slab", "Lateral Shift Formula",
    "A laser beam enters an optical crown glass block of thickness t = 6.0 cm and refractive index μ = 1.5 at an angle of incidence i = 60°. The beam refracts at angle r = 35.26° and emerges from the opposite parallel face parallel to its original path, but shifted sideways by a lateral displacement d.",
    "What is the lateral displacement d of the emerging beam?",
    "d = 6.0 cm × sin(60° - 35.26°) / cos(35.26°) ≈ 3.07 cm",
    "d = 6.0 cm × sin(60°) = 5.20 cm",
    "d = 6.0 cm / 1.5 = 4.0 cm",
    "d = 6.0 cm × cos(60°) = 3.0 cm",
    "A",
    "Lateral displacement through a parallel-sided slab is given by d = t·sin(i - r) / cos r. Here i = 60°, r = 35.26°, i - r = 24.74°. sin(24.74°) ≈ 0.4185, cos(35.26°) ≈ 0.8165. d = 6.0 cm × (0.4185 / 0.8165) ≈ 6.0 × 0.5126 ≈ 3.075 cm."
  ),
  makeCase(
    chapter, 4, "Wavelength Dependence of Lateral Displacement", "Dispersion in Lateral Shift",
    "A composite beam containing collinear red light (λ = 700 nm) and violet light (λ = 400 nm) is incident at i = 45° onto a thick parallel-sided glass slab. Crown glass has refractive index μ_red = 1.51 and μ_violet = 1.53.",
    "How does the lateral displacement of the emergent violet beam compare with that of the emergent red beam?",
    "The violet beam suffers greater lateral displacement than the red beam because μ_violet > μ_red.",
    "The red beam suffers greater lateral displacement because red light has a longer wavelength.",
    "Both beams emerge with identical lateral displacement because they entered along the same path.",
    "Neither beam is displaced because the faces are parallel.",
    "A",
    "Since violet light travels slower in glass than red light (v_violet < v_red), glass has a higher refractive index for violet (μ_violet > μ_red). By Snell's Law, violet refracts more (r_violet < r_red), making (i - r_violet) larger than (i - r_red). Therefore, lateral displacement d = t·sin(i-r)/cos r is greater for violet than for red."
  ),
  makeCase(
    chapter, 5, "Temperature Effect on Atmospheric Refractive Index", "Thermal Expansion and Optical Density",
    "Meteorologists study laser transmission through the lower atmosphere. On a scorching summer afternoon, the air temperature 1 meter above an asphalt road reaches 50°C, while air 10 meters above is at 25°C. Warm air expands and has lower mass density than cold air.",
    "How does the refractive index of hot air compare to cold air, and what does this cause?",
    "Hot air has a lower refractive index than cold air; light bends away from the normal as it enters hotter layers.",
    "Hot air has a higher refractive index than cold air; light bends toward the normal.",
    "Temperature has zero effect on the refractive index of gases.",
    "Hot air absorbs light completely, preventing refraction.",
    "A",
    "When a gas is heated, it expands and its density decreases. With fewer molecules per unit volume, the electromagnetic interaction slows light down less, so the speed of light is higher and the refractive index μ is lower in hot air. Light passing from cold (denser, higher μ) to hot (rarer, lower μ) air bends away from the normal."
  ),
  makeCase(
    chapter, 6, "Apparent Depth of a Gold Coin in a Wishing Fountain", "Apparent Depth = Real Depth / μ",
    "A tourist looks vertically downward into a clear wishing fountain filled with water to a depth of 2.0 meters (refractive index of water μ = 4/3 = 1.333). A gold coin rests on the flat horizontal bottom.",
    "At what apparent depth below the water surface does the coin appear to be located, and what is its apparent vertical shift?",
    "Apparent depth = 1.50 m; Apparent upward shift = 0.50 m",
    "Apparent depth = 2.67 m; Apparent upward shift = 0.67 m",
    "Apparent depth = 1.33 m; Apparent upward shift = 0.67 m",
    "Apparent depth = 1.00 m; Apparent upward shift = 1.00 m",
    "A",
    "For near-normal viewing: Apparent depth = Real depth / μ = 2.0 m / (4/3) = 2.0 × (3/4) = 1.50 m. Apparent vertical shift = Real depth - Apparent depth = 2.0 m - 1.50 m = 0.50 m (or Shift = Real depth × (1 - 1/μ) = 2.0 × (1 - 3/4) = 0.50 m)."
  ),
  makeCase(
    chapter, 7, "Postage Stamp Under a Thick Glass Paperweight", "Apparent Shift Formula Shift = t(1 - 1/μ)",
    "A collector places a thick rectangular glass paperweight of thickness t = 4.5 cm and refractive index μ = 1.50 directly over a rare postage stamp resting on a desk, viewing it from directly above.",
    "By what vertical distance does the postage stamp appear to be raised when viewed through the glass?",
    "1.50 cm",
    "3.00 cm",
    "0.75 cm",
    "2.25 cm",
    "A",
    "The apparent upward shift of an object viewed through a medium of thickness t and refractive index μ is given by Shift = t × (1 - 1/μ). Here t = 4.5 cm and μ = 1.50 = 3/2: Shift = 4.5 × (1 - 2/3) = 4.5 × (1/3) = 1.50 cm. The stamp appears at depth 4.5 - 1.5 = 3.0 cm, raised by 1.5 cm."
  ),
  makeCase(
    chapter, 8, "Beaker Containing Immiscible Dual Liquid Layers", "Sum of Apparent Depths",
    "A glass beaker contains two immiscible liquids: a 6.0 cm bottom layer of carbon tetrachloride (μ1 = 1.50) topped with an 8.0 cm upper layer of water (μ2 = 1.33 = 4/3). A small metal bead rests on the bottom of the beaker.",
    "When viewed from directly above in air, what is the apparent depth of the bead below the top water surface?",
    "10.0 cm",
    "14.0 cm",
    "9.0 cm",
    "10.5 cm",
    "A",
    "When viewing through multiple parallel transparent layers, the total apparent depth is the sum of the individual apparent depths: Apparent depth = (d1 / μ1) + (d2 / μ2) = (6.0 cm / 1.50) + (8.0 cm / (4/3)) = 4.0 cm + 6.0 cm = 10.0 cm. The total real depth was 6.0 + 8.0 = 14.0 cm, so the bead appears raised by 4.0 cm."
  ),
  makeCase(
    chapter, 9, "Bent Appearance of an Immersed Pencil in Water", "Virtual Image of Refracted Rays",
    "A straight wooden pencil is partially immersed obliquely into a glass beaker of clear water. When viewed from the side in air, the submerged portion of the pencil appears bent upwards and thicker at the water surface.",
    "What optical phenomenon causes this apparent bend?",
    "Light rays originating from each submerged point bend away from the normal upon leaving water into air, forming virtual images higher than the actual object points.",
    "Light reflects off the water surface into the pencil wood.",
    "The water magnifies the pencil by chemical reaction.",
    "Total internal reflection within the pencil wood.",
    "A",
    "Light rays traveling from the denser water into the rarer air bend away from the normal. When extrapolated backward, the refracted rays intersect above the actual physical location of the pencil points. As a result, every point on the submerged pencil forms an elevated virtual image, making the pencil appear sharply bent upward at the water-air interface."
  ),
  makeCase(
    chapter, 10, "Submerged Scuba Diver's Window of Vision", "Snell's Window and Critical Angle Cone",
    "A scuba diver swimming 5.0 meters below the mirror-smooth surface of a clear lake looks directly upward toward the sky on a bright sunny day. Water has a critical angle of C = 48.7° (≈ 49°).",
    "What does the diver see when looking upward in all directions?",
    "The entire 180° hemispherical sky compressed into a bright circular cone of apex angle 2C ≈ 98°; beyond this cone, the water surface acts as a mirror reflecting the lake bed.",
    "Complete darkness because water absorbs all light below 2 meters.",
    "The sky visible uniformly in all directions up to 180°.",
    "A magnified inverted image of the sun across the entire surface.",
    "A",
    "Light rays from the external world entering water at grazing incidence (i ≈ 90°) refract at the critical angle C ≈ 49°. By reversibility of light, all light from the outside hemisphere is compressed into an inverted cone of half-angle C (apex angle 2C ≈ 98°), known as Snell's Window. Beyond this circular cone, the angle of incidence from underwater exceeds C, causing total internal reflection of the dark lake bottom."
  ),
  makeCase(
    chapter, 11, "Astronomical Twinkling of Distant Stars", "Atmospheric Refraction Fluctuation",
    "On a clear night, an astronomer observes that distant point-like stars appear to twinkle (fluctuate rapidly in apparent position and brightness), whereas broad planetary discs like Jupiter and Mars shine with a steady, non-twinkling light.",
    "What is the physical cause of star twinkling, and why do planets not twinkle?",
    "Turbulent atmospheric air currents constantly fluctuate in density and refractive index, shifting the ray path of point-source star light; planets are extended sources whose multi-point fluctuations cancel out.",
    "Stars burn with pulsating nuclear flares while planets emit steady nuclear light.",
    "Space dust between Earth and stars moves at the speed of light.",
    "Earth's magnetic field periodically bends starlight.",
    "A",
    "Distant stars appear as pinpoints of light. As starlight passes through turbulent layers of the atmosphere with continuously fluctuating temperature, density, and refractive index, the ray is continuously refracted, shifting slightly in position and intensity into the eye (twinkling). Planets are much closer and act as extended discs composed of millions of adjacent point sources; individual fluctuations average out to zero."
  ),
  makeCase(
    chapter, 12, "Advanced Sunrise and Delayed Sunset", "Atmospheric Curvature Refraction",
    "Due to Earth's atmosphere having an optical density that decreases with altitude, a solar observer at the equator sees the sun rise above the eastern horizon approximately 2 minutes before the sun geometrically crosses the horizon, and sees it set 2 minutes after it has geometrically dropped below the horizon.",
    "What is the total lengthening of daylight caused by atmospheric refraction, and how does the light bend?",
    "Daylight is lengthened by about 4 minutes; rays from below the horizon bend progressively toward the normal into denser lower air, curving around the Earth.",
    "Daylight is lengthened by 2 minutes; rays bend away from the normal.",
    "Daylight is shortened by 4 minutes due to atmospheric absorption.",
    "Daylight is unchanged because refraction does not alter time.",
    "A",
    "Rays of sunlight from the sun slightly below the horizon enter the atmosphere from the vacuum of space, traveling through air layers of increasing optical density and refractive index. The rays bend continuously toward the normal, following a curved path around Earth's curvature. This elevates the sun's apparent image by about 0.5° (its own diameter) at both sunrise and sunset, lengthening daylight by 2 + 2 = 4 minutes."
  ),
  makeCase(
    chapter, 13, "Oval Flattening of the Sun at Sunrise and Sunset", "Differential Atmospheric Refraction",
    "When photographing the sun as it touches the ocean horizon at sunset, the solar disc appears distinctly flattened vertically into an oval/elliptical shape rather than a perfect circle.",
    "What optical explanation accounts for this vertical flattening?",
    "The lower limb of the sun is closer to the horizon where atmospheric density gradient is steeper, refracting its light upward by about 35', while the upper limb is refracted upward by only 29'.",
    "Gravitational tidal pull from the ocean distorts the sun.",
    "Air temperature increases with altitude, compressing the top of the sun.",
    "The camera lens suffers from cylindrical spherical aberration at sea level.",
    "A",
    "Atmospheric density increases rapidly toward ground level. Light from the sun's lower limb travels through denser, steeper atmospheric gradients and is refracted upward by approximately 35 arcminutes, whereas light from the upper limb (0.5° higher) is refracted upward by only 29 arcminutes. This differential vertical lift compresses the vertical diameter by about 6 arcminutes while the horizontal diameter is unaffected, creating an oval shape."
  ),
  makeCase(
    chapter, 14, "Highway Desert Mirage on a Scorching Day", "Inferior Mirage Total Internal Reflection",
    "A motorist driving across a desert highway on a hot afternoon observes what appears to be a pool of shimmering water on the asphalt several hundred meters ahead, reflecting inverted images of distant trees and sky. Upon reaching the spot, the asphalt is completely dry.",
    "What optical sequence produces this inferior mirage?",
    "Air layers closest to the hot asphalt become intensely heated and optically rarer; light rays from the sky bending away from the normal undergo Total Internal Reflection, curving upward into the motorist's eye.",
    "Moisture evaporating from the tarmac condenses into a temporary pool.",
    "Light reflects off the polished tarmac via Brewster's polarization angle.",
    "Heat haze dissolves the asphalt into an optical mirror.",
    "A",
    "The sun heats the dark road surface, creating a temperature gradient where air density and refractive index increase with height. Light from the sky travels downward through layers of progressively lower refractive index, bending continuously away from the normal. When the angle of incidence exceeds the critical angle, the ray undergoes Total Internal Reflection, curving upward into the observer's eye, who perceives an inverted sky reflection resembling water."
  ),
  makeCase(
    chapter, 15, "Arctic Superior Mirage and Looming Over Cold Seas", "Superior Mirage Refraction",
    "In polar regions, sailors frequently observe 'looming', where distant ships that are far over the geometric horizon appear elevated and hovering high in the sky, sometimes inverted above the sea surface.",
    "What temperature and refractive index conditions produce a superior mirage?",
    "A strong temperature inversion where ice chills the lowest air layer, making it optically dense with higher μ, causing light rays to curve concave downward toward Earth.",
    "Superheated ocean water creating low-density air at the sea surface.",
    "Atmospheric ozone reflecting radio waves into visual spectra.",
    "Cloud shadows projecting ship images onto the troposphere.",
    "A",
    "In a superior mirage (looming), cold sea ice cools the air directly above it, while air higher up remains warmer (temperature inversion). The lowest air layer has the highest density and refractive index. Light rays traveling upward from a ship bend continuously toward the denser lower layers (concave downward), entering the observer's eyes from above horizontal sightlines, making the ship appear elevated in mid-air."
  ),
  makeCase(
    chapter, 16, "Critical Angle Determination for Pure Water", "Formula sin C = 1 / μ",
    "An optical laboratory measures the refractive index of pure water as μ = 1.333 (4/3). A laser immersed inside the water tank directs light toward the water-air interface at varying angles.",
    "What is the critical angle C for the water-air boundary, and what happens if light strikes the interface at 55° from within the water?",
    "Critical angle C = 48.6° (≈ 49°); at 55°, the light undergoes 100% Total Internal Reflection back into the water.",
    "Critical angle C = 45.0°; at 55°, the light refracts into air at 90°.",
    "Critical angle C = 60.0°; at 55°, the light refracts into air with minor reflection.",
    "Critical angle C = 30.0°; at 55°, the light is absorbed completely.",
    "A",
    "Critical angle C is the angle of incidence in the denser medium for which the angle of refraction in the rarer medium is 90°. By Snell's Law: sin C = 1 / μ = 1 / (4/3) = 3/4 = 0.75 => C = arcsin(0.75) ≈ 48.59° ≈ 48.6° (or 49°). At an angle of incidence i = 55° > C, the conditions for Total Internal Reflection are met, and the entire beam reflects back into water obeying the laws of reflection."
  ),
  makeCase(
    chapter, 17, "Critical Angle of Crown Glass vs Flint Glass", "Refractive Index and Critical Angle Relationship",
    "An optician compares two optical prisms: Prism A made of crown glass (μ = 1.50) and Prism B made of dense flint glass (μ = 1.66).",
    "What are the critical angles of Prism A and Prism B, and how does critical angle vary with refractive index?",
    "Prism A: C ≈ 41.8° (≈ 42°); Prism B: C ≈ 37.0°; critical angle decreases as refractive index increases.",
    "Prism A: C ≈ 48.6°; Prism B: C ≈ 52.0°; critical angle increases with refractive index.",
    "Both prisms have C = 45.0° because they are made of glass.",
    "Prism A: C ≈ 30.0°; Prism B: C ≈ 60.0°.",
    "A",
    "By the relation sin C = 1 / μ: For crown glass: sin C_A = 1 / 1.50 = 0.6667 => C_A ≈ 41.81° (typically 42°). For flint glass: sin C_B = 1 / 1.66 = 0.6024 => C_B ≈ 37.04° (typically 37°). The critical angle is inversely related to the refractive index: an optically denser material with higher μ possesses a smaller critical angle."
  ),
  makeCase(
    chapter, 18, "Brilliance and Fire of a Cut Diamond", "Extremely Small Critical Angle and Facet Angles",
    "Gemologists cut diamond (refractive index μ = 2.42) into brilliant round shapes with precise faceted angles. In contrast, glass (μ = 1.50) cut in the exact same geometry appears lifeless and dull.",
    "What is the critical angle of diamond, and why does diamond sparkle with intense brilliance?",
    "Critical angle C ≈ 24.4°; its exceptionally small critical angle ensures light entering the top facets undergoes multiple Total Internal Reflections before emerging from the top.",
    "Critical angle C ≈ 45.0°; diamond emits its own radioactive luminescence.",
    "Critical angle C ≈ 60.0°; diamond absorbs all light and re-radiates it as ultraviolet.",
    "Critical angle C ≈ 12.0°; diamond polarizes light into circular spectra.",
    "A",
    "For diamond: sin C = 1 / 2.42 = 0.4132 => C ≈ 24.41° (approx 24°). This extremely small critical angle means that almost any light ray entering diamond strikes an internal facet at an angle greater than 24.4°, undergoing multiple successive Total Internal Reflections without escaping through the sides or bottom. The rays ultimately exit through the top crown facets, producing dazzling sparkle and high dispersion ('fire')."
  ),
  makeCase(
    chapter, 19, "Periscope 45°-90°-45° Total Reflecting Prisms", "Deviation by 90° via TIR",
    "A submarine periscope uses two right-angled isosceles glass prisms (45°-90°-45°, μ = 1.50, critical angle C = 42°) to guide light from above the water down to the observer's eye.",
    "How does light pass through each prism, and why is this superior to using plane silvered mirrors?",
    "Light enters normal to a cathetus face without deviation, strikes the hypotenuse at i = 45° (> 42°) undergoing 100% TIR, and exits normal; produces 100% reflection with zero ghost images and no silver degradation.",
    "Light refracts at 90° into the hypotenuse and reflects off silver backing.",
    "Light disperses into a rainbow inside each prism.",
    "Light undergoes two reflections at 30° each.",
    "A",
    "Light enters face AB normally (i = 0°, r = 0°). It strikes the hypotenuse AC inside glass at i = 45°. Since 45° > critical angle (42°), it undergoes 100% Total Internal Reflection, turning through 90° toward face BC where it emerges normally. Unlike plane mirrors which reflect only ~85-90% and suffer silver corrosion and ghost images, total reflecting prisms reflect nearly 100% of light losslessly."
  ),
  makeCase(
    chapter, 20, "Porro Prisms in Prism Binoculars", "Deviation by 180° and Image Inversion",
    "A pair of binoculars utilizes a Porro prism system comprising two identical right-angled isosceles glass prisms (45°-90°-45°, critical angle 42°). Light from the objective enters the hypotenuse face normally and undergoes internal reflections.",
    "What total deviation does each Porro prism produce, and what is its optical effect on the image?",
    "Deviates the beam by 180° through two successive Total Internal Reflections (at 45° each), inverting the image and shortening the binocular body length.",
    "Deviates the beam by 90° through one reflection.",
    "Deviates the beam by 360° without inverting the image.",
    "Deviates the beam by 45°.",
    "A",
    "In a Porro prism, light enters the hypotenuse face normally (i = 0°). It strikes the first cathetus face at i = 45° (> 42° TIR), turns 90°, strikes the second cathetus face at i = 45° (> 42° TIR), and turns another 90°, emerging from the hypotenuse parallel to the entry beam (total deviation = 90° + 90° = 180°). Two such orthogonal prisms fully erect the inverted image from the objective and fold the optical path."
  ),
  makeCase(
    chapter, 21, "Erecting Dove Prism in Optical Instruments", "Inversion Without Lateral Axis Deviation",
    "An optical spectrometer incorporates a truncated right-angled prism known as a Dove prism (trapezoidal glass block with 45° base angles, μ = 1.50). A beam of parallel light enters one slanted face, refracts toward the base, undergoes Total Internal Reflection at the flat bottom base, and emerges from the second slanted face.",
    "What is the optical effect of the Dove prism on the transmitted image?",
    "It inverts the image upside-down while allowing the light beam to continue along the same straight-line optical axis without angular deviation.",
    "It deviates the light beam by 90° into a periscope.",
    "It magnifies the image by a factor of 2.",
    "It disperses the light into a pure spectrum.",
    "A",
    "In a Dove prism, rays entering the tilted face are refracted toward the base at an angle that exceeds the critical angle (42°), causing TIR at the bottom flat base. The rays then refract out of the opposite slanted face along the original axis. This single reflection inverts the image vertically while maintaining the forward collinear direction of the beam."
  ),
  makeCase(
    chapter, 22, "Equilateral 60° Prism Ray Tracing and TIR", "Total Internal Reflection in Equilateral Prism",
    "A monochromatic ray of light is incident normally (i = 0°) onto face AB of an equilateral crown glass prism ABC (all angles 60°, critical angle C = 42°).",
    "What is the subsequent path of the ray inside and upon exiting the prism?",
    "The ray passes undeviated to face AC, strikes it at i = 60° (> 42°), undergoes TIR toward base BC, strikes BC at i = 30° (< 42°), and refracts out into air at r = 48.6°.",
    "The ray refracts out of face AC at 90°.",
    "The ray undergoes TIR at all three faces indefinitely.",
    "The ray emerges from face AC without deviation.",
    "A",
    "At face AB: normal incidence means the ray enters undeviated. At face AC: geometric normal to AC is at 60° to the horizontal ray, so angle of incidence is i = 60°. Since 60° > 42° (critical angle), Total Internal Reflection occurs. The reflected ray travels at 60° downward to base BC, striking it at angle i = 30°. Since 30° < 42°, it refracts into air: sin r = 1.5 × sin(30°) = 1.5 × 0.5 = 0.75 => r = arcsin(0.75) ≈ 48.6°."
  ),
  makeCase(
    chapter, 23, "Right-Angled 30°-60°-90° Prism Path Analysis", "Critical Angle Threshold in 30-60-90 Prism",
    "A light ray enters normally (i = 0°) into face AB of a glass prism ABC having angles A = 90°, B = 30°, and C = 60° (glass critical angle C = 42°). The ray strikes the hypotenuse BC from inside the glass.",
    "What is the angle of incidence on the hypotenuse BC, and does the ray undergo Total Internal Reflection or refraction?",
    "Angle of incidence on hypotenuse is 60°; since 60° > 42°, it undergoes Total Internal Reflection.",
    "Angle of incidence on hypotenuse is 30°; it refracts into air at 48.6°.",
    "Angle of incidence on hypotenuse is 45°; it undergoes TIR.",
    "Angle of incidence on hypotenuse is 0°; it passes undeviated.",
    "A",
    "The ray enters face AB normally and travels straight to hypotenuse BC. In right triangle with angles 90° and 30°, the third angle between the ray and BC is 30°. The angle of incidence i with the normal to hypotenuse BC is 90° - 30° = 60°. Since 60° exceeds the critical angle of glass (42°), the ray undergoes 100% Total Internal Reflection at the hypotenuse."
  ),
  makeCase(
    chapter, 24, "Fiber Optic Telecommunications Cable Core and Cladding", "Total Internal Reflection Waveguiding",
    "A transoceanic fiber optic cable carries high-speed laser pulses across thousands of kilometers. The cable comprises an inner glass core of refractive index μ_core = 1.48 surrounded by an outer glass cladding of refractive index μ_cladding = 1.45.",
    "What is the critical angle at the core-cladding boundary, and how do light pulses travel through the core without leaking out?",
    "Critical angle C = arcsin(1.45 / 1.48) ≈ 78.5°; light injected at small angles strikes the core wall at angles > 78.5°, propagating via continuous lossless Total Internal Reflection.",
    "Critical angle C = 45°; light reflects off a silver mirror coating on the cladding.",
    "Critical angle C = 90°; light travels in a straight line without touching the walls.",
    "Critical angle C = 30°; light refracts into the cladding and back into the core.",
    "A",
    "By Snell's Law for a boundary between two dense media: sin C = μ_rarer / μ_denser = μ_cladding / μ_core = 1.45 / 1.48 ≈ 0.9797 => C ≈ 78.5°. Because the core is optically denser than the cladding, light rays striking the boundary at grazing angles of incidence greater than 78.5° undergo repeated Total Internal Reflection, traveling thousands of kilometers with negligible signal attenuation."
  ),
  makeCase(
    chapter, 25, "Medical Endoscope Coherent Optical Fiber Bundle", "Internal Organ Visualization via TIR",
    "A gastroenterologist performs an endoscopy to examine a patient's stomach lining. The endoscope flexible insertion tube contains two bundles of thousands of microscopic optical fibers: an incoherent light guide bundle for illumination, and a coherent imaging bundle.",
    "What optical principle guides light through the flexible fibers even when the endoscope tube is bent around sharp anatomical curves?",
    "Total Internal Reflection within each individual fiber, provided the bending radius does not cause the internal incidence angle to drop below the critical angle.",
    "Diffraction of light around the curvature of the tube.",
    "Conduction of photons through hollow silver capillary tubes.",
    "Phosphorescent emission from radioactive tracers inside the tube.",
    "A",
    "Each microscopic fiber in the bundle consists of a high-refractive-index glass core coated with lower-index cladding. Light injected into the fiber undergoes tens of thousands of Total Internal Reflections per meter. Even when the flexible tube curves inside the body, the angle of incidence on the core walls remains greater than the critical angle, allowing lossless image transmission."
  ),
  makeCase(
    chapter, 26, "Total Internal Reflection vs Reflection from Silvered Glass Mirror", "100% Reflectance and Zero Ghost Images",
    "An optical designer compares using a 45°-90°-45° glass total reflecting prism versus a flat silvered glass mirror to direct light in a high-precision surveying theodolite.",
    "What are two decisive optical advantages of the total reflecting prism over the silvered glass mirror?",
    "The prism provides 100% reflection with zero light absorption, and produces a single sharp image with no secondary ghost reflections.",
    "The prism is lighter in mass and costs less than silver foil.",
    "The mirror produces higher reflectance (99.9%) than total internal reflection.",
    "The prism polarizes light into monochromatic ultraviolet rays.",
    "A",
    "In a silvered glass mirror: (1) Reflection at the metallic silver backing is never 100% (~10-15% of light is absorbed/scattered), and (2) Partial reflection from the front glass surface produces faint, overlapping 'ghost' images. In contrast, Total Internal Reflection within a prism is 100% lossless (zero energy absorbed), and since reflection occurs at a single internal boundary, it produces a single pristine image that never tarnishes."
  ),
  makeCase(
    chapter, 27, "Ghost Images in a Thick Back-Silvered Glass Mirror", "Multiple Reflections in Thick Mirror",
    "A student places a glowing candle in front of a thick plate-glass mirror that is silvered on its rear surface. Looking into the mirror obliquely, the student observes a series of multiple images of the candle flame.",
    "Which image in the series is the brightest, and why?",
    "The second image is the brightest, because it is formed by strong reflection from the rear silvered surface (~85-90% light), while the first image is from faint front-surface reflection (~4-10%).",
    "The first image is the brightest because light strikes it first.",
    "The third image is the brightest due to optical resonance.",
    "All images are of strictly identical brightness.",
    "A",
    "Light from the candle strikes the front surface of the thick glass: ~4% reflects to form Image 1 (faint). The remaining ~96% enters the glass, travels to the back silvered surface, and undergoes strong metallic reflection (~85-90%), emerging through the front face to form Image 2, which is by far the brightest. Internal bouncing between front and rear surfaces produces subsequent increasingly faint images (3rd, 4th, etc.)."
  ),
  makeCase(
    chapter, 28, "Angle of Minimum Deviation in an Equilateral Prism", "Symmetry Condition i1 = i2 and r1 = r2",
    "A laboratory spectrometer measures the deviation produced by an equilateral crown glass prism (angle A = 60°, μ = 1.50). The angle of incidence i1 is varied systematically while measuring the deviation angle δ.",
    "What unique symmetry condition occurs at the angle of minimum deviation δ_min, and what is the orientation of the refracted ray inside the prism?",
    "Angle of incidence equals angle of emergence (i1 = i2), angles of refraction are equal (r1 = r2 = A/2 = 30°), and the ray travels parallel to the base.",
    "Angle of incidence is 90° and the ray exits along the apex.",
    "Angle of incidence is 0° and deviation is zero.",
    "The ray undergoes Total Internal Reflection at both faces.",
    "A",
    "At the angle of minimum deviation δ_min, light traverses the prism symmetrically: the angle of incidence equals the angle of emergence (i1 = i2 = i), and the internal angles of refraction are equal: r1 = r2 = r = A / 2 = 60° / 2 = 30°. For an equilateral or isosceles prism, this geometric symmetry forces the refracted ray inside the prism to travel completely parallel to the base."
  ),
  makeCase(
    chapter, 29, "Prism Refractive Index Formula Calculation", "Formula μ = sin((A + δ_min)/2) / sin(A/2)",
    "In a physics board examination practical, a student measures the angle of a prism as A = 60° and finds that the angle of minimum deviation for yellow sodium light is δ_min = 38°.",
    "What is the refractive index μ of the prism material?",
    "μ = sin(49°) / sin(30°) = 0.7547 / 0.5000 ≈ 1.509",
    "μ = sin(60°) / sin(38°) = 0.866 / 0.6157 ≈ 1.406",
    "μ = (60° + 38°) / 60° = 1.633",
    "μ = sin(38°) / sin(30°) = 0.6157 / 0.5000 = 1.231",
    "A",
    "The standard prism formula relates refractive index to prism angle A and minimum deviation δ_min: μ = sin((A + δ_min) / 2) / sin(A / 2). Substituting A = 60° and δ_min = 38°: μ = sin((60° + 38°) / 2) / sin(60° / 2) = sin(98° / 2) / sin(30°) = sin(49°) / sin(30°) = 0.7547 / 0.5000 ≈ 1.509."
  ),
  makeCase(
    chapter, 30, "Hollow Glass Prism Filled with Water", "Liquid Prism Refraction and Minimum Deviation",
    "A hollow prism constructed from thin optical microscope slides of angle A = 60° is filled with pure water (μ = 1.333 = 4/3). A student compares its angle of minimum deviation with a solid glass prism of identical angle A = 60° (μ = 1.50).",
    "How does the angle of minimum deviation of the water-filled prism compare with the solid glass prism?",
    "The water prism has a smaller angle of minimum deviation (~22°) than the glass prism (~38°) because μ_water < μ_glass.",
    "The water prism has a larger angle of minimum deviation because water has greater mass.",
    "Both prisms have identical minimum deviation because angle A is 60° for both.",
    "The water prism produces zero deviation because water is transparent.",
    "A",
    "The angle of deviation depends directly on the refractive index of the prism material relative to air. Since water (μ = 1.33) is optically less dense than glass (μ = 1.50), light slows down less in water, producing less refraction at both faces. Consequently, the angle of minimum deviation for water (~22°) is substantially smaller than that for glass (~38°)."
  ),
  makeCase(
    chapter, 31, "Air-Filled Hollow Prism Immersed Inside a Water Aquarium", "Inversion of Deviation Direction",
    "A hollow glass prism containing air (μ = 1.0) is sealed and submerged inside a large glass aquarium filled with water (μ = 1.33). A horizontal laser beam in the water strikes the prism face.",
    "In which direction does the light ray bend as it passes through the air prism inside water?",
    "The ray bends toward the apex of the prism (away from the base), opposite to normal prism behavior.",
    "The ray bends toward the base of the prism as usual.",
    "The ray passes completely undeviated.",
    "The ray undergoes Total Internal Reflection inside the air cavity.",
    "A",
    "Normally, a prism bends light toward its thicker base because the prism is optically denser than the surrounding air (μ_prism > μ_surroundings). However, inside water, the air prism is optically rarer than the surrounding water (μ_air = 1.0 < μ_water = 1.33). As light enters the rarer air, it bends away from the normal, and upon exiting into water, it bends toward the normal, causing the net deviation to bend toward the apex."
  ),
  makeCase(
    chapter, 32, "Semi-Circular Glass Slab Critical Angle Experiment", "Radial Incidence with Zero Surface Deviation",
    "A student conducts an optical bench experiment using a semi-circular glass slab of radius R = 8.0 cm. A narrow laser beam is directed toward the curved surface such that its path is along a radius directed toward the center O of the flat diameter edge.",
    "Why does the ray enter the curved glass surface without any deviation, and what happens at the central point O?",
    "The ray is normal to the curved surface at all points (along radius, i = 0°); at O, it strikes the flat face from inside glass, allowing precise measurement of the critical angle.",
    "The curved surface has zero refractive index.",
    "Total internal reflection occurs at the curved surface.",
    "The ray curves into a spiral toward the center.",
    "A",
    "Any line drawn along the radius of a circle is perpendicular to the circumference at the point of entry. Therefore, a radial ray strikes the curved surface at normal incidence (i = 0°, r = 0°), entering the glass with zero deviation. It reaches the flat boundary at center O cleanly, allowing the student to vary the internal angle of incidence simply by rotating the laser."
  ),
  makeCase(
    chapter, 33, "Fish Looking Upward at an Angler on the Riverbank", "Apparent Height Elevation for Submerged Observer",
    "A trout swimming underwater looks upward at an angler of true height H = 1.80 m standing on the riverbank at the water's edge (taking refractive index of water μ = 4/3).",
    "Does the angler appear taller, shorter, or the same height to the fish, and what is the apparent height?",
    "The angler appears taller (Apparent height = H × μ = 1.80 m × (4/3) = 2.40 m).",
    "The angler appears shorter (Apparent height = 1.80 m / (4/3) = 1.35 m).",
    "The angler appears exactly 1.80 m tall.",
    "The angler appears completely inverted.",
    "A",
    "When viewing from a denser medium (water) into a rarer medium (air), light rays from the top of the object bend toward the normal as they enter the water. Projecting these refracted rays backward makes the virtual image appear farther and higher than the actual object. Apparent height = Real height × μ = 1.80 m × (4/3) = 2.40 m. The angler appears significantly taller."
  ),
  makeCase(
    chapter, 34, "Measuring Refractive Index Using Traveling Microscope", "Formula μ = Real Depth / Apparent Depth",
    "In a physics laboratory, a student measures the refractive index of a liquid using a vernier traveling microscope. The microscope focuses on: (1) A scratch on the beaker bottom (Reading R1 = 2.40 cm); (2) The scratch viewed through 6.0 cm of the liquid (Reading R2 = 3.90 cm); and (3) Lycopodium powder sprinkled on the liquid surface (Reading R3 = 8.40 cm).",
    "What is the refractive index of the liquid?",
    "μ = Real depth / Apparent depth = (8.40 - 2.40) / (8.40 - 3.90) = 6.00 / 4.50 = 1.333",
    "μ = 3.90 / 2.40 = 1.625",
    "μ = 8.40 / 6.00 = 1.400",
    "μ = 4.50 / 2.40 = 1.875",
    "A",
    "Real depth = Surface reading - Bottom reading = R3 - R1 = 8.40 cm - 2.40 cm = 6.00 cm. Apparent depth = Surface reading - Apparent bottom reading = R3 - R2 = 8.40 cm - 3.90 cm = 4.50 cm. Refractive index μ = Real depth / Apparent depth = 6.00 / 4.50 = 4/3 ≈ 1.333 (confirming pure water)."
  ),
  makeCase(
    chapter, 35, "Glass Block with Silvered Rear Face", "Refraction Plus Reflection Equivalent System",
    "A thick glass block of thickness t = 9.0 cm and refractive index μ = 1.50 has its rear face silvered to act as a plane mirror. A small pin is placed in front of the unsilvered front face at a distance of 15.0 cm.",
    "At what distance from the front face is the final image of the pin formed by the silvered block?",
    "27.0 cm behind the front face",
    "33.0 cm behind the front face",
    "24.0 cm behind the front face",
    "15.0 cm behind the front face",
    "A",
    "The glass slab of thickness t = 9 cm has an apparent optical thickness = t / μ = 9 / 1.5 = 6.0 cm. The position of the mirror effectively appears at a distance = 15.0 cm (in air) + 6.0 cm (apparent glass thickness) = 21.0 cm from the pin. The image formed by the mirror lies 21.0 cm behind the effective mirror position, which corresponds to 6.0 + 21.0 = 27.0 cm behind the front face."
  ),
  makeCase(
    chapter, 36, "Refraction Through Sequential Liquid-Glass Layers", "Principle of Consecutive Media 1μ3 = 1μ2 × 2μ3",
    "A light ray passes from Air (1) into Water (2, μ = 4/3), then into Crown Glass (3, μ = 3/2), and finally emerges back into Air (1). All layer interfaces are parallel.",
    "What is the relative refractive index of glass with respect to water (w_μ_g), and what is the direction of the final emergent ray in air?",
    "w_μ_g = μ_glass / μ_water = (3/2) / (4/3) = 9/8 = 1.125; emergent ray is strictly parallel to the initial incident ray.",
    "w_μ_g = 2.00; emergent ray is deviated by 45°.",
    "w_μ_g = 0.889; emergent ray is reflected back into glass.",
    "w_μ_g = 1.50; emergent ray is perpendicular to incident ray.",
    "A",
    "By the principle of consecutive media: 1μ2 × 2μ3 × 3μ1 = 1. The relative refractive index of glass with respect to water is w_μ_g = a_μ_g / a_μ_w = (1.50) / (1.333) = (3/2) / (4/3) = 9/8 = 1.125. Because all interfaces are parallel, the angle of emergence from the final glass-air boundary equals the original angle of incidence in air, meaning the emergent ray is strictly parallel to the incident ray."
  ),
  makeCase(
    chapter, 37, "Critical Angle at a Glass-Water Submerged Boundary", "Relative Critical Angle sin C = μ_r / μ_d",
    "An underwater camera housing is made of crown glass (μ_glass = 1.50 = 3/2) submerged in sea water (μ_water = 1.333 = 4/3). An internal flash lamp inside the glass housing directs light toward the glass-water interface.",
    "What is the critical angle C for Total Internal Reflection at this glass-water boundary?",
    "C = arcsin((4/3) / (3/2)) = arcsin(8/9) ≈ 62.7°",
    "C = arcsin(1 / 1.5) ≈ 41.8°",
    "C = arcsin(1 / 1.33) ≈ 48.6°",
    "C = arcsin(1.5 / 1.33) = undefined",
    "A",
    "When light attempts to pass from a denser medium (glass, μ_d = 1.50) into an adjacent rarer medium (water, μ_r = 1.333): sin C = μ_r / μ_d = (4/3) / (3/2) = 8/9 ≈ 0.8889 => C = arcsin(0.8889) ≈ 62.73° (approx 62.7°). Notice that the critical angle at a glass-water interface (62.7°) is significantly larger than at a glass-air interface (42°)."
  ),
  makeCase(
    chapter, 38, "Principle of Reversibility of Light Path", "Reversibility Law 1μ2 = 1 / 2μ1",
    "A physics experiment establishes that the refractive index of glass with respect to air is a_μ_g = 1.50 (3/2). A light ray is then directed in reverse, traveling from glass into air.",
    "What is the refractive index of air with respect to glass (g_μ_a), and what physical principle governs this?",
    "g_μ_a = 1 / a_μ_g = 1 / 1.50 = 2/3 ≈ 0.667; governed by the Principle of Reversibility of Light.",
    "g_μ_a = -1.50; governed by reflection laws.",
    "g_μ_a = 1.50; refractive index is independent of light direction.",
    "g_μ_a = 0; light cannot enter air from glass.",
    "A",
    "By the Principle of Reversibility of Light, if the path of a ray of light is reversed after suffering any number of refractions and reflections, it retraces its entire path in reverse. Therefore: 1μ2 = 1 / 2μ1 => g_μ_a = 1 / a_μ_g = 1 / (3/2) = 2/3 ≈ 0.667."
  ),
  makeCase(
    chapter, 39, "Angle of Deviation Curve for a Triangular Prism", "Variation of Deviation with Angle of Incidence",
    "A student systematically plots the angle of deviation δ against the angle of incidence i for a 60° glass prism, recording data from i = 30° to i = 80°.",
    "What is the shape and characteristic behavior of the resulting i-δ curve?",
    "U-shaped curve: as i increases, δ first decreases to a minimum value (δ_min) and then increases.",
    "A straight line with negative slope.",
    "A horizontal line showing deviation is independent of incidence angle.",
    "A parabola opening downward with a maximum peak.",
    "A",
    "The i-δ characteristic curve of a prism is distinctly U-shaped. Starting from small incidence angles, as i increases, the angle of deviation δ decreases steadily until it reaches a unique minimum point (the angle of minimum deviation δ_min). Beyond this point, any further increase in i causes the deviation δ to rise again."
  ),
  makeCase(
    chapter, 40, "Deviation Produced by a Thin Prism (A < 10°)", "Formula δ ≈ (μ - 1)·A",
    "An optometrist uses a thin ophthalmic prism of small refracting angle A = 4.0° made of crown glass (μ = 1.52) to correct strabismus (eye misalignment) in a patient.",
    "What is the approximate angular deviation produced by this thin prism for near-normal incidence?",
    "δ ≈ (μ - 1)·A = (1.52 - 1) × 4.0° = 2.08°",
    "δ = 1.52 × 4.0° = 6.08°",
    "δ = 4.0° / 1.52 = 2.63°",
    "δ = (1.52 + 1) × 4.0° = 10.08°",
    "A",
    "For a thin prism with small refracting angle A (typically A ≤ 10°), the sines of angles can be approximated by the angles in radians (sin θ ≈ θ). The standard prism formula simplifies to: δ ≈ (μ - 1)·A. Substituting μ = 1.52 and A = 4.0°: δ = (1.52 - 1) × 4.0° = 0.52 × 4.0° = 2.08°."
  ),
  makeCase(
    chapter, 41, "Color Dependence of Prism Angular Deviation", "Dispersion Due to Wavelength Dependence of μ",
    "A narrow beam of white light containing all visible wavelengths from red (700 nm) to violet (400 nm) strikes the face of a 60° flint glass prism at an incidence angle of 50°.",
    "Which color of light undergoes the greatest angular deviation, and why?",
    "Violet light undergoes the greatest deviation because its shorter wavelength experiences the highest refractive index (μ_violet > μ_red).",
    "Red light undergoes the greatest deviation because it carries greater momentum.",
    "Green light undergoes the greatest deviation because it lies at the spectrum center.",
    "All colors deviate equally because they share the same angle of incidence.",
    "A",
    "According to Cauchy's dispersion formula, the refractive index of a transparent medium is inversely related to wavelength (μ = A + B/λ²). Since violet light has the shortest visible wavelength (~400 nm), it travels slowest in glass and experiences the highest refractive index: μ_violet > μ_red. By δ ≈ (μ - 1)·A, violet deviates the most (at the bottom of spectrum) while red deviates the least."
  ),
  makeCase(
    chapter, 42, "Color Dependence of the Critical Angle", "Critical Angle Ordering C_red > C_violet",
    "A physicist tests the critical angle of crown glass for red laser light (λ = 650 nm) versus violet laser light (λ = 405 nm). The refractive indices are μ_red = 1.510 and μ_violet = 1.532.",
    "Which color has a larger critical angle in glass, and what are their respective values?",
    "Red light has a larger critical angle: C_red ≈ 41.47° > C_violet ≈ 40.75°.",
    "Violet light has a larger critical angle: C_violet ≈ 45.0° > C_red ≈ 40.0°.",
    "Both colors have strictly identical critical angles of 42.0°.",
    "Critical angle does not depend on the wavelength of light.",
    "A",
    "By definition, sin C = 1 / μ. Because refractive index is smaller for longer wavelengths (μ_red < μ_violet), the ratio 1/μ is larger for red: sin C_red = 1 / 1.510 ≈ 0.6623 => C_red ≈ 41.47°. For violet: sin C_violet = 1 / 1.532 ≈ 0.6527 => C_violet ≈ 40.75°. Hence, C_red > C_violet. Red light can strike the boundary at steeper angles before undergoing Total Internal Reflection."
  ),
  makeCase(
    chapter, 43, "Apparent Depth of a Swimming Pool", "Why Swimming Pools Look Deeper When Wet",
    "A swimmer stands beside a commercial swimming pool of uniform depth 2.40 m filled with clear water (μ = 4/3). Looking down obliquely into the water, the swimmer estimates the depth before diving in.",
    "Why does the pool bottom appear dangerously shallower than its true depth?",
    "The apparent depth is only 3/4 of the true depth (Apparent depth = 2.40 / (4/3) = 1.80 m), making it look 60 cm shallower than it actually is.",
    "The pool bottom appears deeper by 4/3 (3.20 m).",
    "Light reflections from chlorine make the floor look inverted.",
    "The pool appears shallower because water evaporates rapidly.",
    "A",
    "Light rays traveling from the pool floor into air bend away from the normal at the water surface. Virtual backward extensions of these divergent rays intersect at an apparent depth h' = h / μ = 2.40 m / (4/3) = 1.80 m. An apparent upward shift of 60 cm (25% reduction) misleads swimmers into underestimating water depth."
  ),
  makeCase(
    chapter, 44, "Pyrex Glass Stirring Rod Invisible in Vegetable Glycerin", "Index Matching and Zero Refraction",
    "In a classroom chemistry magic demonstration, a teacher lowers a transparent Pyrex glass stirring rod (refractive index μ_glass = 1.474) into a beaker filled with clear pure vegetable glycerin (refractive index μ_liquid = 1.474).",
    "What happens to the appearance of the submerged glass rod, and what is the physical reason?",
    "The glass rod becomes completely invisible because both glass and glycerin have identical refractive indices, causing zero refraction and zero reflection at the boundary.",
    "The rod glows brightly due to chemical phosphorescence.",
    "The rod appears bent at a 90° angle.",
    "The rod dissolves instantly in glycerin.",
    "A",
    "An object is visible because light undergoes reflection and refraction at its surface due to a difference in refractive index between the object and the surrounding medium. When a glass rod is immersed in a liquid of identical refractive index (μ_glass = μ_liquid = 1.474), light passes across the interface without any change in speed, direction, or reflection (Snell's Law: r = i, reflection = 0%). The interface ceases to exist optically."
  ),
  makeCase(
    chapter, 45, "Turpentine vs Water Optical Density Paradox", "Mass Density vs Optical Density",
    "A student in a chemistry-physics interdisciplinary lab measures the physical properties of water and oil of turpentine. Water has mass density ρ = 1.00 g/cm³ and refractive index μ = 1.33. Turpentine has mass density ρ = 0.87 g/cm³ (floats on water) but refractive index μ = 1.47.",
    "What crucial distinction does this experiment demonstrate regarding mass density and optical density?",
    "Optical density is related to the speed of light in the medium and does not necessarily track mass density; turpentine has lower mass density but higher optical density than water.",
    "Mass density and optical density are always directly proportional.",
    "Turpentine must have higher mass density because it has a higher refractive index.",
    "Light travels faster in turpentine than in water.",
    "A",
    "Mass density is mass per unit volume (g/cm³). Optical density is the property of a medium that determines the speed of light within it (governed by molecular polarizability and refractive index μ = c/v). Turpentine has lower mass density (0.87 < 1.00 g/cm³) and floats on water, yet it has higher optical density (μ = 1.47 > 1.33), meaning light travels slower in turpentine (v = 2.04 × 10^8 m/s) than in water (v = 2.25 × 10^8 m/s)."
  ),
  makeCase(
    chapter, 46, "Primary Rainbow Internal Reflection Mechanics", "Refraction, Dispersion, and Single Internal Reflection",
    "During a late afternoon sun shower, an observer with their back to the sun sees a brilliant primary rainbow arc across the eastern sky. Sunlight strikes spherical airborne raindrops.",
    "What is the complete optical sequence inside a raindrop producing the primary rainbow?",
    "Refraction with dispersion as light enters the drop -> One internal reflection at the back curved wall -> Second refraction out of the drop into air.",
    "Two internal reflections followed by one refraction.",
    "Pure external reflection off the raindrop surface without entry.",
    "Diffraction through the air space between adjacent drops.",
    "A",
    "In a primary rainbow, sunlight enters the spherical raindrop, refracting and dispersing into constituent colors (violet bending most, red least). The dispersed rays strike the back wall at an angle where they undergo one internal reflection. Finally, the rays refract out of the front of the drop into air, emerging at an angle of 40° (violet) to 42° (red) relative to the incident sunlight."
  ),
  makeCase(
    chapter, 47, "Gemstone Faceting and Critical Angle Optimization", "Facet Angle Engineering for Maximum Sparkle",
    "A lapidary cut artisan cuts facets on a cubic zirconia gemstone (μ = 2.15, critical angle C ≈ 27.7°). If the pavilion (bottom) facets are cut at an angle of 43° to the normal.",
    "Why must pavilion facet angles be engineered strictly relative to the critical angle?",
    "Cutting pavilion facets such that incoming rays strike at angles greater than the critical angle ensures total internal reflection, directing light back up through the crown facets.",
    "To allow light to escape through the bottom into the jewelry setting.",
    "To absorb ultraviolet rays and emit green fluorescence.",
    "To make the gemstone appear darker and opaque.",
    "A",
    "If pavilion facets are cut too shallow or too steep, light striking them hits at an angle less than the critical angle (i < C) and refracts out through the bottom of the stone (known as 'light leakage' or 'fish-eye' effect). Lapidaries calculate facet angles precisely so that rays entering through the top crown strike pavilion facets at i > C (27.7°), undergoing multiple TIR bounces that bounce 100% of light back out through the top face."
  ),
  makeCase(
    chapter, 48, "Apparent Elevation of Heavenly Bodies Near Zenith", "Continuous Atmospheric Ray Bending",
    "An astronomical observatory tracks a distant star located at a true zenith angle of 45°. Because of Earth's atmosphere.",
    "Does the apparent position of the star appear higher or lower in the sky than its true physical position, and why?",
    "Higher in the sky (closer to zenith), because incoming starlight bends continuously toward the vertical normal as it traverses increasingly dense atmospheric layers.",
    "Lower in the sky (closer to the horizon).",
    "Exactly at its true position because starlight travels at c.",
    "Shifted horizontally East or West depending on Earth's spin.",
    "A",
    "Starlight enters Earth's atmosphere from the vacuum of space, passing through layers of air of continuously increasing density and refractive index. At each boundary, the ray bends toward the normal (which points vertically downward toward Earth's center). An observer looking back along the final tangent sees the star elevated above its true geometric position (closer to the zenith)."
  ),
  makeCase(
    chapter, 49, "Total Internal Reflection Prism in SLR Camera Pentaprism", "Roof Pentaprism Image Erection",
    "A single-lens reflex (SLR) camera viewfinder employs a solid glass pentaprism (or roof pentaprism) with silvered and total reflecting faces.",
    "What is the optical function of the pentaprism in the viewfinder?",
    "It reflects light from the reflex mirror twice, correcting both vertical inversion and left-right reversal to present a fully erect, true-sided view in the eyepiece.",
    "It magnifies the image tenfold like a compound microscope.",
    "It polarizes light to reduce glare on the camera sensor.",
    "It acts as a shutter to regulate exposure time.",
    "A",
    "The 45° reflex mirror inside an SLR camera flips the image from the lens right-side up, but leaves it laterally reversed (mirror image). The pentaprism positioned above the focusing screen reflects the light twice internally via precision roof facets, correcting the lateral reversal so that the photographer sees a completely natural, upright, and non-reversed image through the viewfinder."
  ),
  makeCase(
    chapter, 50, "Apparent Thickness of a Glass Cube Viewed from Opposite Faces", "Shift in Multi-Faced Optical Blocks",
    "A solid glass cube of edge length L = 12.0 cm and refractive index μ = 1.50 contains a tiny air bubble trapped inside. When viewed normally from Face 1, the bubble appears to be 5.0 cm deep. When viewed normally from the opposite Face 2, what is its apparent depth?",
    "3.0 cm",
    "5.0 cm",
    "7.0 cm",
    "4.0 cm",
    "A",
    "Let real distance of bubble from Face 1 be x1, and from Face 2 be x2. Total thickness x1 + x2 = L = 12.0 cm. Apparent depth from Face 1: d1' = x1 / μ => 5.0 cm = x1 / 1.5 => x1 = 5.0 × 1.5 = 7.5 cm. Therefore, real distance from Face 2 is x2 = 12.0 - 7.5 = 4.5 cm. Apparent depth from Face 2: d2' = x2 / μ = 4.5 cm / 1.5 = 3.0 cm."
  )
];

const outPath = path.join(__dirname, 'questionBank', 'physics_case_refraction_of_light_at_plane_surfaces.json');
fs.writeFileSync(outPath, JSON.stringify(refPlaneCases, null, 2), 'utf8');
console.log(`Saved ${refPlaneCases.length} case studies for Refraction at Plane Surfaces to ${outPath}`);
