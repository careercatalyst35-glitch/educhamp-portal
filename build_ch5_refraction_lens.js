const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Refraction through a Lens";

const refLensCases = [
  makeCase(
    chapter, 1, "Solar Fire-Starter Burning Glass", "Principal Focus and Solar Convergence",
    "A survival instructor uses a thick biconvex glass lens of diameter 8.0 cm and focal length f = 15 cm to ignite dry tinder. The instructor points the lens directly toward the midday sun, holding a sheet of dry paper behind it. When the paper is positioned exactly 15 cm from the lens center, a blinding, needle-sharp point of light forms and the paper bursts into flame.",
    "Why does the paper ignite precisely at 15 cm from the lens?",
    "Sunlight rays arrive virtually parallel from infinity and converge at the second principal focus F2 (15 cm), concentrating solar thermal energy into a microscopic area.",
    "The lens magnifies the sun's image to cover the entire paper.",
    "Frictional heat from air passing through the lens sets the paper on fire.",
    "The glass emits ultraviolet radiation that chemically combusts cellulose.",
    "A",
    "Because the sun is at an effective optical distance of infinity (u = ∞), incoming solar rays are parallel to the principal axis. A convex lens refracts all parallel incident rays to its second principal focus F2 at a distance equal to its focal length (v = f = 15 cm). The concentrated solar radiant flux at this tiny focal spot raises the paper's temperature above its ignition point."
  ),
  makeCase(
    chapter, 2, "Photographic Camera Landscape Imaging", "Convex Lens: Object Beyond 2F1",
    "A landscape photographer focuses a 35 mm SLR camera fitted with a 50 mm prime lens (f = +5.0 cm) on a distant mountain peak 500 meters away.",
    "Where is the image formed inside the camera, and what are its physical characteristics?",
    "Formed between F2 and 2F2 (practically at the focal plane F2 at 5.0 cm); real, inverted, and highly diminished.",
    "Formed beyond 2F2; real, inverted, and magnified.",
    "Formed between the optical center and F1; virtual and erect.",
    "Formed at 2F2; real, inverted, and same size.",
    "A",
    "When an object is positioned beyond 2F1 (in this case, at u = 500 m >> 2f = 10 cm), a convex lens forms a real, inverted, and diminished image located between F2 and 2F2, exceedingly close to the focal plane F2. In cameras, the digital sensor or film is positioned at this focal plane to record the sharp, miniature image."
  ),
  makeCase(
    chapter, 3, "Office Photocopier 1:1 Scale Duplication", "Convex Lens: Object at 2F1",
    "An optical analog photocopier uses an internal imaging convex lens of focal length f = 20 cm to project an image of an original document onto an electrostatic drum with an exact 1:1 scale reproduction (same size, linear magnification |m| = 1.0).",
    "Where must the document and the electrostatic drum be positioned relative to the lens?",
    "Document at 40 cm (2F1) in front of the lens; drum at 40 cm (2F2) behind the lens.",
    "Document at 20 cm (F1); drum at infinity.",
    "Document at 30 cm; drum at 60 cm.",
    "Document at 10 cm; drum at 20 cm.",
    "A",
    "To produce an inverted real image of exactly the same size as the object (magnification m = -1, |m| = 1.0), the object must be placed at twice the focal length (u = -2f = -40 cm). By the lens formula: 1/v - 1/(-40) = 1/20 => 1/v = 1/20 - 1/40 = 1/40 => v = +40 cm (+2f). Both document and drum are positioned at 2f from the lens."
  ),
  makeCase(
    chapter, 4, "Classroom Slide Projector Image Projection", "Convex Lens: Object Between F1 and 2F1",
    "A digital cinema projector uses a projection lens of focal length f = 10 cm to project a slide of width 3.5 cm onto an auditorium screen located 4.0 meters (400 cm) in front of the lens.",
    "Where is the slide positioned relative to the lens, and how must it be mounted in the holder to appear upright on the screen?",
    "Positioned between F1 and 2F1 (at u ≈ 10.26 cm); mounted upside-down because the lens produces an inverted real image.",
    "Positioned inside F1 (at u = 8 cm); mounted right-side up.",
    "Positioned beyond 2F1 (at u = 30 cm); mounted sideways.",
    "Positioned at F1 (at u = 10 cm); mounted upside-down.",
    "A",
    "To project an enlarged real image on a distant screen (v = +400 cm >> 2f), the object must be placed between F1 and 2F1: 1/u = 1/v - 1/f = 1/400 - 1/10 = (1 - 40)/400 = -39/400 => u ≈ -10.26 cm. Because all real images formed by a convex lens are inverted (upside-down and laterally reversed), slides must be inserted upside-down and backwards so the projected image appears normal."
  ),
  makeCase(
    chapter, 5, "Lighthouse Beam Collimation and Searchlights", "Convex Lens: Object at Principal Focus F1",
    "A marine lighthouse beacon features a high-intensity xenon arc lamp placed at the focal point of a massive convex lens of focal length f = 80 cm.",
    "What is the nature of the emergent light beam traveling out to sea?",
    "A powerful parallel beam of uniform diameter that travels to infinity without divergence or focal convergence.",
    "A converging beam that focuses to a sharp point 80 cm out to sea.",
    "A widely diverging cone of light that dissipates within 50 meters.",
    "A virtual beam trapped inside the lens housing.",
    "A",
    "By the principle of optical reversibility, when a point source of light is situated at the first principal focus F1 of a convex lens, all diverging rays striking the lens refract parallel to the principal axis. The emergent light forms a parallel, non-diverging collimated beam capable of penetrating sea fog over tens of nautical miles."
  ),
  makeCase(
    chapter, 6, "Jeweler's Eye Loupe (Simple Magnifying Glass)", "Convex Lens: Object Inside F1",
    "A master watchmaker inspects an antique watch balance wheel using a small convex loupe lens of focal length f = +5.0 cm held close to the eye. The watch wheel is held at a distance of 4.0 cm from the lens.",
    "Where is the image formed, and what are its characteristics?",
    "Formed 20 cm in front of the lens on the same side as the object; virtual, erect, and magnified 5 times.",
    "Formed 20 cm behind the lens; real, inverted, and magnified.",
    "Formed at 5.0 cm behind the lens; real and point-sized.",
    "Formed at infinity; virtual and diminished.",
    "A",
    "Object distance u = -4.0 cm, focal length f = +5.0 cm. Using 1/f = 1/v - 1/u => 1/5 = 1/v - 1/(-4.0) => 1/v = 1/5 - 1/4 = (4 - 5)/20 = -1/20 => v = -20 cm. Magnification m = v / u = (-20) / (-4.0) = +5.0. The negative image distance confirms a virtual image on the same side as the object, erect (m > 0), and enlarged 5 times."
  ),
  makeCase(
    chapter, 7, "Concave Diverging Lens Peephole in Apartment Door", "Concave Lens Virtual Diminished Image",
    "An apartment security door is fitted with a wide-angle peephole viewer utilizing a concave lens of focal length f = -10 cm. A visitor stands outside the door at a distance of 90 cm from the lens.",
    "Where is the image of the visitor formed, and what are its optical characteristics?",
    "Formed at v = -9.0 cm (between optical center and focus); virtual, erect, and diminished 10 times.",
    "Formed at v = +90 cm; real, inverted, and same size.",
    "Formed at v = -100 cm; virtual, inverted, and magnified.",
    "Formed at v = +10 cm; real and magnified.",
    "A",
    "For a concave lens: f = -10 cm, u = -90 cm. By lens formula: 1/v = 1/f + 1/u = 1/(-10) + 1/(-90) = (-9 - 1)/90 = -10/90 = -1/9 => v = -9.0 cm. Magnification m = v / u = (-9.0) / (-90) = +0.10. For any real object at any distance, a concave lens always forms a virtual, erect, and diminished image located between the optical center and the focus, providing a wide-angle field of view."
  ),
  makeCase(
    chapter, 8, "Bench Optical Distance Verification via Lens Formula", "Cartesian Sign Convention Application",
    "A student places an illuminated wire-mesh object 30 cm in front of a convex lens (u = -30 cm). A sharp real image is captured on a white paper screen placed 60 cm behind the lens (v = +60 cm).",
    "What is the focal length of the convex lens and the linear magnification of the image?",
    "f = +20 cm; Magnification m = -2.0 (real, inverted, magnified)",
    "f = +90 cm; Magnification m = +2.0",
    "f = -20 cm; Magnification m = -0.5",
    "f = +10 cm; Magnification m = -1.5",
    "A",
    "Applying Cartesian sign convention: u = -30 cm, v = +60 cm. By the lens formula: 1/f = 1/v - 1/u = 1/60 - 1/(-30) = 1/60 + 2/60 = 3/60 = 1/20 => f = +20 cm. Magnification m = v / u = (+60) / (-30) = -2.0. The negative sign denotes a real and inverted image, while |m| = 2.0 indicates an image twice as tall as the object."
  ),
  makeCase(
    chapter, 9, "Optometrist's Dioptric Power of Reading Glasses", "Power of a Lens P = 1 / f",
    "An eye specialist tests a pair of reading glasses prescribed for a farsighted patient. The glasses contain convex lenses of focal length f = +40 cm (+0.40 m).",
    "What is the optical power of the lenses in Dioptres?",
    "+2.5 D",
    "+0.25 D",
    "-2.5 D",
    "+4.0 D",
    "A",
    "The power of a lens is defined as the reciprocal of its focal length expressed in meters: P = 1 / f(in m). For f = +40 cm = +0.40 m: P = 1 / (+0.40) = +2.5 Dioptres (D). Convex lenses have positive power (+), whereas concave lenses have negative power (-)."
  ),
  makeCase(
    chapter, 10, "Myopia Corrective Spectacle Lens Power", "Negative Power of Concave Lenses",
    "A high school student diagnosed with myopia (nearsightedness) cannot see clearly beyond a far point of 50 cm (0.50 m). An optometrist prescribes a concave corrective lens of focal length f = -50 cm.",
    "What is the power of the prescribed spectacle lens?",
    "-2.0 D",
    "+2.0 D",
    "-0.5 D",
    "-5.0 D",
    "A",
    "Focal length f = -50 cm = -0.50 m. Optical power P = 1 / f(m) = 1 / (-0.50 m) = -2.0 D. The negative sign designates a concave diverging lens designed to push the virtual image of distant objects back to the student's natural far point."
  ),
  makeCase(
    chapter, 11, "Two Thin Lenses Placed in Direct Contact", "Combined Power P = P1 + P2",
    "An optometry researcher places a convex lens of focal length f1 = +20 cm in direct coaxial contact with a second convex lens of focal length f2 = +50 cm.",
    "What is the combined power and equivalent focal length of this two-lens combination?",
    "P_total = +7.0 D; F_eq = +14.29 cm",
    "P_total = +3.5 D; F_eq = +28.57 cm",
    "P_total = +10.0 D; F_eq = +10.0 cm",
    "P_total = +2.5 D; F_eq = +70.0 cm",
    "A",
    "P1 = 1 / 0.20 m = +5.0 D. P2 = 1 / 0.50 m = +2.0 D. For thin lenses in contact: P_total = P1 + P2 = +5.0 D + 2.0 D = +7.0 D. Equivalent focal length F_eq = 1 / P_total = 1 / 7.0 m ≈ 0.1429 m = 14.29 cm (or 1/F = 1/20 + 1/50 = 7/100 => F = 100/7 ≈ 14.29 cm)."
  ),
  makeCase(
    chapter, 12, "Contact Combination of Equal Convex and Concave Lenses", "Neutralization to Zero Power",
    "A student mounts a convex lens of focal length +25 cm (P1 = +4.0 D) in direct contact with an identical concave lens of focal length -25 cm (P2 = -4.0 D).",
    "How does the combined optical system behave when a beam of parallel light passes through it?",
    "The combination has net power P = 0 D (F = ∞), behaving optically like a flat plane-parallel glass plate with zero convergence or divergence.",
    "It behaves like a powerful magnifying lens of focal length 12.5 cm.",
    "It reflects 100% of the light backward as a plane mirror.",
    "It splits light into an inverted rainbow spectrum.",
    "A",
    "Net power P_eq = P1 + P2 = +4.0 D + (-4.0 D) = 0 D. Equivalent focal length F = 1 / P = 1 / 0 = ∞. A lens system with infinite focal length produces zero convergence and zero divergence; incoming parallel rays emerge completely parallel and undeviated, exactly like a parallel-sided plane glass sheet."
  ),
  makeCase(
    chapter, 13, "Contact Combination of Unequal Convex and Concave Lenses", "Dominance of Shorter Focal Length",
    "A compound optical doublet consists of a convex lens of focal length f1 = +10 cm (P1 = +10 D) cemented in contact with a concave lens of focal length f2 = -20 cm (P2 = -5 D).",
    "What is the net power and nature of the combination?",
    "Net power = +5.0 D; behaves as a converging convex lens of focal length +20 cm.",
    "Net power = -5.0 D; behaves as a diverging concave lens.",
    "Net power = +15.0 D; behaves as a convex lens of focal length 6.67 cm.",
    "Net power = 0 D; neutral system.",
    "A",
    "P_net = P1 + P2 = +10 D + (-5 D) = +5.0 D. Equivalent focal length F = 1 / (+5.0 D) = +0.20 m = +20 cm. Because the convex lens has a shorter focal length (10 cm < 20 cm), it possesses greater refractive power (+10 D > |-5 D|). The combination behaves as a converging (convex) lens dominated by the more powerful component."
  ),
  makeCase(
    chapter, 14, "Submerging a Glass Convex Lens in Water", "Focal Length Elongation in Liquids",
    "A biconvex crown glass lens (μ_glass = 1.50) has a focal length of f_air = 20 cm in air. The lens is placed in an underwater camera housing submerged in pure water (μ_water = 1.33 = 4/3).",
    "What happens to the focal length of the lens in water?",
    "Its focal length increases roughly fourfold to approx f_water ≈ 80 cm, because the relative refractive index difference (μ_glass / μ_water - 1) is much smaller.",
    "Its focal length decreases to 5 cm because water is denser than air.",
    "Its focal length remains unchanged at 20 cm.",
    "The lens transforms into a plane mirror.",
    "A",
    "By the Lens Maker's formula, 1/f = (μ_lens / μ_medium - 1) × (1/R1 - 1/R2). In air: (1.50/1.0 - 1) = 0.50. In water: (1.50 / 1.333 - 1) = (9/8 - 1) = 1/8 = 0.125. Ratio f_water / f_air = 0.50 / 0.125 = 4.0. Therefore, f_water = 4 × 20 cm = 80 cm. In water, the optical density difference is reduced, so rays bend far less sharply, quadrupling the focal length."
  ),
  makeCase(
    chapter, 15, "Glass Convex Lens Submerged in Carbon Disulfide", "Converging Lens Becoming Diverging",
    "A biconvex crown glass lens (μ_glass = 1.50) is submerged in a glass trough filled with clear carbon disulfide liquid (refractive index μ_liquid = 1.63). A beam of parallel light is directed through the submerged lens.",
    "How does the submerged glass lens behave in carbon disulfide?",
    "It behaves as a diverging (concave) lens, causing parallel rays to diverge outwards upon emergence.",
    "It converges light much more strongly than in air.",
    "It behaves as an opaque barrier absorbing all light.",
    "It reflects light with 100% Total Internal Reflection.",
    "A",
    "When a lens of refractive index μ_lens is immersed in a liquid of HIGHER refractive index (μ_liquid > μ_lens), the relative index (μ_lens / μ_liquid) becomes less than 1 (1.50 / 1.63 < 1), making (μ_rel - 1) negative. Consequently, the focal length reverses sign: a converging biconvex lens behaves as a diverging lens, and a concave lens behaves as a converging lens."
  ),
  makeCase(
    chapter, 16, "Immersion of Glass Lens in Index-Matched Liquid", "Zero Refraction and Disappearance",
    "A plano-convex glass lens made of borosilicate glass (μ = 1.474) is dropped into a beaker containing pure vegetable glycerin (μ = 1.474). A laser beam is shone through the liquid across the lens.",
    "What is the effective focal length of the lens in glycerin, and what does an observer see?",
    "Focal length becomes infinite (f = ∞); the lens is completely invisible, and the laser beam passes straight through undeviated.",
    "Focal length becomes zero; the laser beam focuses onto the glass surface.",
    "The lens appears as a dark black silhouette.",
    "The laser beam undergoes Total Internal Reflection inside the glycerin.",
    "A",
    "When μ_lens = μ_medium, (μ_lens / μ_medium - 1) = (1 - 1) = 0. Therefore, 1/f = 0 => f = ∞. With zero difference in refractive index across the curved boundary, light experiences no change in speed and suffers zero refraction and zero reflection. The lens has zero optical power and becomes physically invisible in the liquid."
  ),
  makeCase(
    chapter, 17, "Air Bubble Trapped Inside a Solid Glass Paperweight", "Spherical Air Cavity Diverging Effect",
    "A spherical air bubble (μ_air = 1.0) of radius 1.0 cm is trapped inside a transparent solid glass paperweight (μ_glass = 1.50). A beam of parallel light inside the glass strikes the curved front face of the air bubble.",
    "How does this spherical air cavity behave optically toward the light beam?",
    "It behaves as a diverging (concave) lens, spreading the light rays outward.",
    "It behaves as a converging (convex) lens, focusing light to a point inside the bubble.",
    "It acts as a plane mirror reflecting light backward.",
    "It has no optical effect because air has no mass.",
    "A",
    "Although the air bubble is convex in physical shape (thicker in the center), it contains an optically rarer medium (air, μ = 1.0) embedded within an optically denser medium (glass, μ = 1.50). When rays enter from denser glass to rarer air, they bend away from the normal, causing the rays to diverge outwards. Thus, an air bubble in glass or water always acts as a diverging lens."
  ),
  makeCase(
    chapter, 18, "Covering the Top Half of a Camera Lens", "Full Image Formation with Reduced Brightness",
    "A photographer uses a camera with a large 50 mm diameter convex lens to photograph a bird perched on a branch. A black cardboard disc accidentally covers exactly the upper 50% of the lens aperture.",
    "How does this blockage affect the image recorded on the camera sensor?",
    "The complete bird is still imaged in full detail, but the overall brightness and intensity of the image is reduced by half (50%).",
    "Only the bottom half of the bird is visible on the sensor.",
    "Only the top half of the bird is visible.",
    "The image is completely blackened out.",
    "A",
    "Every single point on the object radiates light rays in all directions toward the entire surface of the lens. The lower unblocked half of the lens still receives and refracts rays from every point on the bird (both top and bottom), forming a complete image. However, because half of the total light collection area is blocked, the total radiant energy reaching the image plane is halved, reducing brightness by 50%."
  ),
  makeCase(
    chapter, 19, "Cutting a Biconvex Lens Vertically Along its Diameter", "Halved Curvature and Doubled Focal Length",
    "An optical technician cuts a symmetrical biconvex glass lens of focal length f = 20 cm vertically into two identical plano-convex lenses along its transverse diameter plane.",
    "What is the focal length of each resulting plano-convex lens in air?",
    "Each plano-convex lens has focal length f' = 2f = 40 cm.",
    "Each plano-convex lens has focal length f' = f / 2 = 10 cm.",
    "Each plano-convex lens has focal length f' = 20 cm.",
    "Focal length becomes infinite.",
    "A",
    "By the Lens Maker's formula for a symmetrical biconvex lens: 1/f = (μ - 1)(1/R - (-1/R)) = (μ - 1)(2/R) => f = R / [2(μ - 1)]. When cut vertically, each half is a plano-convex lens with one curved face (radius R) and one flat face (radius ∞): 1/f' = (μ - 1)(1/R - 1/∞) = (μ - 1)(1/R) => f' = R / (μ - 1) = 2f. For f = 20 cm, f' = 40 cm (power is halved, focal length doubles)."
  ),
  makeCase(
    chapter, 20, "Cutting a Biconvex Lens Horizontally Along the Principal Axis", "Unchanged Focal Length with Halved Intensity",
    "A biconvex lens of focal length f = 15 cm and aperture diameter D is cut into two equal halves along its horizontal principal axis.",
    "What are the focal length and image brightness characteristics of each horizontal half lens?",
    "Focal length remains f' = 15 cm for each half, but image brightness drops to 50% due to halved collection aperture.",
    "Focal length doubles to 30 cm.",
    "Focal length halves to 7.5 cm.",
    "Each half can only form half of the object's image.",
    "A",
    "Cutting a lens horizontally along its principal axis does not alter the radius of curvature R1 or R2 of either refracting surface. Since the radii of curvature and refractive index are unchanged, the focal length remains exactly the same (f' = 15 cm). However, each half has only half the surface aperture area, so it collects half the light flux, reducing image intensity by 50%."
  ),
  makeCase(
    chapter, 21, "Simple Magnifier Normal Adjustment vs Near Point", "Angular Magnification m = 1 + D/f vs D/f",
    "A watchmaker tests a pocket magnifier lens of focal length f = +5.0 cm. The standard least distance of distinct vision is D = 25 cm.",
    "What is the maximum magnifying power when the image is formed at the near point (D = 25 cm), and what is the magnifying power for a relaxed eye (image at infinity)?",
    "At near point: m = 1 + D/f = 1 + 25/5 = 6; At infinity (relaxed eye): m = D/f = 25/5 = 5",
    "At near point: m = 5; At infinity: m = 6",
    "At near point: m = 25; At infinity: m = 5",
    "At near point: m = 2.5; At infinity: m = 1.0",
    "A",
    "When a simple microscope (magnifying glass) forms the virtual image at the eye's near point (D = 25 cm), maximum angular magnification is achieved: m = 1 + D / f = 1 + 25 / 5 = 6.0. When the object is placed at the principal focus so the image is at infinity, the eye muscles are completely relaxed (normal adjustment), and the magnifying power is m = D / f = 25 / 5 = 5.0."
  ),
  makeCase(
    chapter, 22, "Compound Microscope Optical Train Specifications", "Objective vs Eyepiece Focal Length Roles",
    "A laboratory biological compound microscope is designed to produce a total magnification of 400x.",
    "What are the relative focal lengths and aperture sizes of the objective lens compared to the eyepiece lens?",
    "The objective lens has a very short focal length and small aperture; the eyepiece lens has a larger focal length and larger aperture.",
    "The objective has a long focal length and large aperture; the eyepiece has a short focal length.",
    "Both objective and eyepiece must have identical focal lengths.",
    "The objective lens must be concave and the eyepiece convex.",
    "A",
    "In a compound microscope: (1) The objective lens must have a very short focal length (a few millimeters) so that a tiny specimen placed just outside its focus produces a highly magnified real intermediate image; its aperture is small to minimize spherical aberration. (2) The eyepiece acts as a simple magnifier to view this intermediate image, requiring a moderately larger focal length and wider aperture to accommodate the observer's eye pupil."
  ),
  makeCase(
    chapter, 23, "Astronomical Refracting Telescope Optical Train", "Large Objective for Light Gathering",
    "An astronomical observatory refracts starlight from distant galaxies using a giant 1.0-meter diameter refracting telescope.",
    "Why must the objective lens of an astronomical telescope have a very long focal length and an exceptionally large aperture, in stark contrast to a microscope?",
    "A large aperture collects maximum light flux from faint distant stars, and a long focal length produces large angular magnification M = f_objective / f_eyepiece.",
    "A large aperture prevents atmospheric air from entering the tube.",
    "A long focal length reduces the speed of starlight.",
    "The objective must produce a virtual image inside the tube.",
    "A",
    "Telescopes view objects at optical infinity. The angular magnification is M = f_o / f_e. To maximize magnification, the objective focal length f_o must be as long as possible, while the eyepiece f_e is short. Crucially, astronomical objects are faint, so the objective aperture must be as huge as possible to maximize light-gathering power (proportional to Area ∝ D²), resolving dim stars."
  ),
  makeCase(
    chapter, 24, "Terrestrial Telescope Erecting Lens System", "Intermediate 1:1 Inverting Lens",
    "A terrestrial telescope used for birdwatching includes a third intermediate convex lens of focal length f_erect = 8.0 cm positioned between the objective and the eyepiece.",
    "Where is the intermediate image from the objective located relative to this erecting lens, and what is its optical effect?",
    "Located at 2f (16 cm) from the erecting lens; produces an inverted image at 2f on the other side with 1:1 size, making the final view upright without changing magnification.",
    "Located at f; collimates the light into a parallel laser beam.",
    "Located at optical center; magnifies the image by 4x.",
    "Located at infinity; creates a virtual image.",
    "A",
    "In a terrestrial telescope, the objective produces an inverted real image. To make the view comfortable for earthly viewing without upside-down landscapes, an erecting lens is placed so that the first image falls at its 2F point (16 cm). The erecting lens forms a real image at its opposite 2F point with magnification m = -1 (same size, inverted again), erecting the image without altering overall telescope magnification."
  ),
  makeCase(
    chapter, 25, "Camera Lens f-Stop Aperture and Exposure Time", "Aperture Diameter and Light Flux",
    "A photographer adjusts a camera lens from f-number f/4 to f/8. The f-number is defined as N = f / D, where f is focal length and D is aperture diameter.",
    "How does stopping down from f/4 to f/8 change the aperture area and the required exposure time to achieve the same film exposure?",
    "Aperture diameter is halved, reducing light collection area to 1/4; exposure shutter time must be quadrupled (4x).",
    "Aperture area is halved; exposure time must be doubled.",
    "Aperture area quadruples; exposure time is halved.",
    "f-number does not affect light transmission.",
    "A",
    "f-number N = f / D => D = f / N. Shifting from f/4 to f/8 doubles N, so aperture diameter D is halved. The light-admitting area is proportional to D² (Area ∝ 1/N²). Halving the diameter reduces the area to (1/2)² = 1/4 of its original value. To deliver the identical total photon energy (Exposure = Intensity × time), the shutter exposure time must be increased fourfold."
  ),
  makeCase(
    chapter, 26, "Eyeglass Correction of Myopia (Nearsightedness)", "Ray Divergence to Bring Distant Focus to Retina",
    "A 15-year-old student can read textbooks clearly but struggles to read the classroom whiteboard beyond a distance of 1.2 meters because their eyeball is elongated anteroposteriorly, causing light from distant objects to converge in front of the retina.",
    "What type of lens corrects this condition, and how does it alter incoming light rays?",
    "A concave (diverging) lens; it slightly diverges incoming parallel rays so that after passing through the eye's crystalline lens, they focus sharply on the retina.",
    "A convex lens; it converges rays faster before entering the pupil.",
    "A cylindrical lens; it eliminates astigmatism.",
    "A bifocal lens with tinted polarized filters.",
    "A",
    "In myopia (short-sightedness), the refractive power of the eye is excessively strong or the eyeball is too long, focusing distant parallel rays in the vitreous humor in front of the retina. A concave lens of appropriate negative power provides just enough initial divergence so that the combined cornea-lens system brings the focal point exactly onto the retina surface."
  ),
  makeCase(
    chapter, 27, "Eyeglass Correction of Hypermetropia (Farsightedness)", "Additional Convergence for Short Eyeballs",
    "A 45-year-old patient can see distant airplanes sharply, but holding a book closer than 60 cm results in blurred text because the eye lens cannot converge rays sufficiently, causing rays from near objects to focus behind the retina.",
    "What type of corrective lens restores normal near vision (D = 25 cm)?",
    "A convex (converging) lens of positive power that pre-converges diverging rays from the book.",
    "A concave lens of negative power.",
    "A plano-parallel glass plate.",
    "An aperture pinhole mask.",
    "A",
    "In hypermetropia (long-sightedness), the eye lens is too flat or the eyeball is too short, so diverging rays from a near object (at 25 cm) strike the retina before converging, focusing at a virtual point behind the retina. A convex lens provides supplementary converging power (+D), bringing the focal point forward onto the retinal surface."
  ),
  makeCase(
    chapter, 28, "Presbyopia in Senior Citizens and Bifocal Lenses", "Loss of Ciliary Accommodation",
    "A 65-year-old retired teacher experiences presbyopia: the aging crystalline eye lenses have lost their flexibility, and the ciliary muscles can no longer alter lens curvature to accommodate between reading a newspaper and driving a car.",
    "What specialized corrective eyewear is prescribed, and how is it constructed?",
    "Bifocal glasses: the upper segment contains a concave or neutral lens for distant viewing, while the lower segment contains a convex lens for reading.",
    "Pure concave glasses of -6.0 D power.",
    "Pure convex sunglasses with UV coating.",
    "Prismatic lenses oriented horizontally.",
    "A",
    "Presbyopia is age-related loss of accommodation. To avoid constantly swapping glasses, bifocal lenses feature two distinct optical zones: the upper portion provides distance vision (often concave for myopic seniors or plain glass), while the lower portion incorporates a convex reading segment that compensates for the stiffened eye lens during downward reading gaze."
  ),
  makeCase(
    chapter, 29, "Corneal Astigmatism and Cylindrical Corrective Lenses", "Non-Spherical Asymmetrical Curvature",
    "An optometry patient has corneal astigmatism where the cornea is curved like the side of an American football rather than a basketball, having a steeper curvature in the vertical meridian than in the horizontal meridian.",
    "What type of lens is required to correct astigmatism?",
    "A cylindrical lens that has curvature and refractive power in only one specific meridian, equalizing the focal planes.",
    "A standard spherical biconvex lens.",
    "A standard spherical biconcave lens.",
    "A dark tinted polarizing filter.",
    "A",
    "Astigmatism arises because the cornea has unequal radii of curvature in orthogonal planes (e.g. vertical meridian focuses closer than horizontal meridian), preventing a sharp point focus. A cylindrical lens has power in only one axis. By orienting the cylindrical axis perpendicular to the corneal defect, it adds power solely in the flatter meridian, restoring a single sharp focal point."
  ),
  makeCase(
    chapter, 30, "Water Droplet on a Waxy Leaf as a Magnifier", "Plano-Convex Liquid Lens",
    "A morning dew droplet rests on a lotus leaf. Because of high water surface tension and waxy leaf cuticle, the droplet forms a smooth, curved hemispherical dome with a flat bottom.",
    "How does the water droplet affect the appearance of microscopic leaf cells directly beneath it?",
    "It acts as a plano-convex converging lens, forming an erect, magnified virtual image of the underlying leaf cells.",
    "It acts as a diverging concave lens, making cells look smaller.",
    "It acts as an opaque liquid mirror reflecting the sky.",
    "It burns a hole in the leaf immediately.",
    "A",
    "The curved upper dome of the water droplet in air forms a convex refracting surface, while the bottom resting on the leaf is flat, creating a plano-convex lens (μ_water = 1.33). Because the leaf cells lie well within the focal length of this microscopic liquid lens (u < f), it functions as a simple magnifier, producing an erect, magnified virtual image."
  ),
  makeCase(
    chapter, 31, "Chromatic Aberration in Single Uncoated Glass Lenses", "Dispersion of Focal Points f_violet < f_red",
    "An amateur astronomer builds a simple telescope using a single large biconvex crown glass lens as the objective. When viewing a bright white star, the star appears surrounded by an annoying colored purple-blue halo.",
    "What optical aberration causes this colored fringe, and where do the different colors focus?",
    "Chromatic aberration: glass has a higher refractive index for violet than for red, so violet light converges closer to the lens than red light (f_violet < f_red).",
    "Spherical aberration caused by dust particles.",
    "Coma aberration caused by atmospheric wind.",
    "Doppler shift caused by the star's rapid motion.",
    "A",
    "Because glass is dispersive (refractive index varies with wavelength: μ_violet > μ_red), a single lens acts like a combination of prisms. By the lens maker's formula, 1/f = (μ - 1)(2/R), so f_violet < f_red. White light is split along the optical axis, with violet focusing closer to the lens and red focusing further back. At any single focal plane, unfocused colors form an annoying colored fringe (chromatic aberration)."
  ),
  makeCase(
    chapter, 32, "Achromatic Doublet Lens Architecture", "Crown and Flint Glass Aberration Cancellation",
    "To eliminate chromatic aberration, telescope designers cement two different lenses together in contact to form an 'achromatic doublet': a converging biconvex lens made of crown glass (lower dispersion) paired with a diverging plano-concave lens made of dense flint glass (higher dispersion).",
    "How does this two-lens doublet eliminate colored fringes while retaining net converging power?",
    "The angular dispersion produced by the convex crown lens is exactly canceled by the opposite dispersion of the concave flint lens, while leaving a net positive converging power.",
    "Both lenses absorb all wavelengths except monochromatic yellow.",
    "The flint lens polarizes light to cancel reflection.",
    "The cement between lenses slows all colors to identical speeds.",
    "A",
    "In an achromatic doublet, the converging crown lens disperses colors in one direction, while the weaker diverging flint lens (which has higher dispersive power) disperses colors in the opposite direction. By matching lens geometries, the chromatic dispersions of red and blue cancel out completely (bringing their focal points together), while the net focal power remains positive (P_net = P_crown - P_flint > 0)."
  ),
  makeCase(
    chapter, 33, "Spherical Aberration in Wide-Aperture Thick Lenses", "Marginal vs Paraxial Ray Focal Discrepancy",
    "A laboratory technician tests a thick biconvex lens of large aperture. Rays passing through the outer rim of the lens (marginal rays) converge at point F_m = 18.0 cm, while rays passing close to the central axis (paraxial rays) converge at point F_p = 20.0 cm.",
    "What is this defect called, and what is a common practical method to eliminate it?",
    "Spherical aberration; eliminated by using an annular stop (diaphragm) to block marginal rays, or by using aspheric lens surfaces.",
    "Chromatic aberration; eliminated by using red laser light.",
    "Astigmatism; eliminated by rotating the lens 90°.",
    "Curvature of field; eliminated by increasing lens thickness.",
    "A",
    "Spherical aberration occurs because spherical lens surfaces bend outer marginal rays more severely than central paraxial rays, causing marginal rays to focus closer to the lens (F_m < F_p). This prevents a sharp point focus for large apertures. It can be minimized by: (1) Placing an aperture stop to block peripheral marginal rays, (2) Combining convex and concave lenses, or (3) Grinding the glass to non-spherical (aspheric) profiles."
  ),
  makeCase(
    chapter, 34, "Fresnel Lens in Historic Coastal Lighthouses", "Mass Reduction via Concentric Stepped Prisms",
    "In the 1820s, French physicist Augustin-Jean Fresnel revolutionized lighthouse design by replacing massive, multi-tonne glass convex lenses with stepped 'Fresnel lenses' consisting of concentric annular prism rings mounted in a light bronze frame.",
    "Why does a Fresnel lens produce the same powerful collimating focal power as a thick solid lens while weighing only a fraction as much?",
    "Refraction occurs exclusively at the curved surface boundaries; by removing the inert interior bulk glass and stepping the profile into concentric rings, full optical power is retained with minimal weight and absorption.",
    "Fresnel lenses are made of lightweight radioactive glass.",
    "Fresnel lenses reflect light via Total Internal Reflection rather than refraction.",
    "The bronze frame magnetizes light rays into parallel paths.",
    "A",
    "Refraction depends solely on the angle between the incident ray and the surface normal at the entry and exit faces; the bulk glass inside a thick lens contributes nothing to focal convergence except dead weight and absorption. Fresnel segmented the continuous curved surface into concentric annular sections with identical surface curvature but stepped thicknesses, maintaining the exact same focal power with 85% less glass mass."
  ),
  makeCase(
    chapter, 35, "Telephoto Camera Lens Construction", "Physical Barrel Shortening via Diverging Group",
    "A wildlife photographer uses a 400 mm telephoto lens. If constructed from a single convex element, the lens barrel would have to be over 40 cm long. Instead, optical engineers place a front converging lens group paired with a rear diverging lens group, achieving a 400 mm effective focal length inside a compact 22 cm barrel.",
    "How does the rear diverging lens group allow the physical lens barrel to be much shorter than its effective focal length?",
    "The rear diverging group bends the converging cone of rays outward, making them appear to originate from an equivalent single lens located far in front of the actual camera body.",
    "It compresses the wavelength of light inside the barrel.",
    "It slows down light to increase refractive index.",
    "It reflects rays back and forth multiple times like a kaleidoscope.",
    "A",
    "In a telephoto design, the front convex group converges light, and the rear concave group diverges the converging cone slightly before it reaches the sensor. Projecting the final cone of rays backward places the 'principal plane' far in front of the physical lens mount. This achieves a long effective focal length (e.g. 400 mm) within a physically compact barrel (220 mm)."
  ),
  makeCase(
    chapter, 36, "Optical Center Behavior in Thin vs Thick Lenses", "Lateral Shift in Thick Lenses vs Null in Thin Lenses",
    "An optical physics student traces a ray passing through the optical center O of a thin lens versus a thick lens.",
    "What is the exact distinction between how a thin lens and a thick glass lens refract a ray directed through the optical center?",
    "In a thin lens, the ray passes completely undeviated and unshifted; in a thick lens, the ray emerges parallel to its initial path but with a measurable lateral displacement.",
    "In a thin lens, the ray deviates by 90°; in a thick lens, it reflects.",
    "Both produce identical large lateral shifts of 5 cm.",
    "Neither lens allows light to pass through the optical center.",
    "A",
    "The optical center O is a point on the principal axis such that any ray passing through it emerges parallel to its incident direction. In a thick lens, the two opposite surfaces act like a parallel-sided glass slab, producing a small lateral shift. In a thin lens, the glass thickness t approaches zero (t -> 0), so the lateral displacement d = t·sin(i-r)/cos r vanishes completely, and the ray passes strictly undeviated."
  ),
  makeCase(
    chapter, 37, "First vs Second Principal Focus of a Convex Lens", "Definition and Optical Reversibility",
    "In an ICSE physics viva examination, an examiner asks a student to define the difference between the first principal focus (F1) and second principal focus (F2) of a convex lens.",
    "Which definition correctly distinguishes F1 from F2?",
    "F1 is the position of a point object on the axis whose rays emerge parallel to the axis; F2 is the convergence point on the axis for incident rays that enter parallel to the axis.",
    "F1 is always virtual, while F2 is always real.",
    "F1 is for white light, while F2 is for laser light.",
    "F1 lies on the lens surface, while F2 lies at infinity.",
    "A",
    "For a convex lens: First Principal Focus F1 is a fixed point on the principal axis such that rays starting from it (or directed toward it) become parallel to the principal axis after refraction. Second Principal Focus F2 is a fixed point on the principal axis where rays initially parallel to the axis converge after refraction. In a symmetrical lens, both lie at distance f on opposite sides."
  ),
  makeCase(
    chapter, 38, "First vs Second Principal Focus of a Concave Lens", "Virtual Focal Points of Diverging Lenses",
    "A student examines a concave lens. Rays entering parallel to the principal axis diverge outwards, appearing to emanate from point F_A on the incident side. Conversely, rays converging toward point F_B on the opposite side emerge parallel to the axis.",
    "What are points F_A and F_B respectively?",
    "Point F_A is the Second Principal Focus (F2); Point F_B is the First Principal Focus (F1).",
    "Point F_A is the First Principal Focus; Point F_B is the Second Principal Focus.",
    "Both are centers of curvature.",
    "Point F_A is real; Point F_B is virtual.",
    "A",
    "For a concave lens: The Second Principal Focus F2 is the point on the principal axis from which incident rays parallel to the axis appear to diverge after refraction (lies on the incident side). The First Principal Focus F1 is the point toward which incident rays must converge in order to emerge parallel to the principal axis after refraction (lies on the opposite side). Both foci are virtual."
  ),
  makeCase(
    chapter, 39, "Bessel's Displacement Method for Measuring Focal Length", "Formula f = (D² - d²) / (4D)",
    "On an optical bench, an illuminated pin object and a screen are held fixed at a distance D = 100 cm apart. A convex lens of focal length f is moved between them and produces sharp images on the screen at two distinct lens positions separated by a displacement distance d = 20 cm.",
    "What is the focal length f of the convex lens?",
    "f = (100² - 20²) / (4 × 100) = (10,000 - 400) / 400 = 9600 / 400 = 24.0 cm",
    "f = (100 + 20) / 4 = 30.0 cm",
    "f = (100 - 20) / 2 = 40.0 cm",
    "f = sqrt(100 × 20) = 44.7 cm",
    "A",
    "In Bessel's displacement method, when the fixed distance D between object and screen exceeds 4f (D > 4f), there are two conjugate lens positions that cast a sharp image on the screen. The focal length is given by: f = (D² - d²) / (4D). Here D = 100 cm and d = 20 cm: f = (10,000 - 400) / 400 = 9600 / 400 = 24.0 cm."
  ),
  makeCase(
    chapter, 40, "Ratio of Conjugate Image Heights in Displacement Method", "Formula O = sqrt(I1 × I2)",
    "Using the displacement method with fixed object-screen distance D, the height of the magnified image formed at the first lens position is I1 = 8.0 cm, while the height of the diminished image formed at the second lens position is I2 = 2.0 cm.",
    "What is the true height O of the object?",
    "O = sqrt(I1 × I2) = sqrt(8.0 × 2.0) = sqrt(16) = 4.0 cm",
    "O = (8.0 + 2.0) / 2 = 5.0 cm",
    "O = 8.0 - 2.0 = 6.0 cm",
    "O = 8.0 × 2.0 = 16.0 cm",
    "A",
    "Let m1 and m2 be the magnifications at the two conjugate positions: m1 = I1 / O = v1 / u1, and m2 = I2 / O = v2 / u2. Since the two positions are conjugate, u2 = v1 and v2 = u1, so m1 × m2 = 1. Therefore: (I1 / O) × (I2 / O) = 1 => O² = I1 × I2 => O = sqrt(I1 × I2) = sqrt(8.0 × 2.0) = 4.0 cm. The object height is the geometric mean of the two image heights."
  ),
  makeCase(
    chapter, 41, "Plano-Convex Lens with Silvered Flat Surface", "Equivalent Concave Mirror",
    "A plano-convex lens of refractive index μ = 1.50 has a curved face of radius R = 30 cm and a flat rear face that is silvered to act as a plane mirror.",
    "What is the equivalent focal length of this silvered optical system, and how does it behave?",
    "It behaves as a concave mirror of focal length F = R / (2μ) = 30 / (2 × 1.5) = 10 cm.",
    "It behaves as a convex mirror of focal length 30 cm.",
    "It behaves as a plane mirror of focal length infinity.",
    "It behaves as a diverging lens of focal length 15 cm.",
    "A",
    "Light enters the curved face (refraction, P_L), reflects off the silvered flat face (reflection, P_M = 0 since flat mirror R=∞), and refracts back out of the curved face (refraction, P_L). Total optical power P = 2·P_L + P_M = 2·[(μ - 1)/R] + 0 = 2·(0.5 / 30) = 1/30 cm^-1. Equivalent focal length of system acting as a mirror is F = 1 / (2·P_L) = R / [2(μ - 1) × 2]... simpler: F = R / (2μ) = 30 / (2 × 1.5) = 10 cm (concave mirror behavior)."
  ),
  makeCase(
    chapter, 42, "Plano-Convex Lens with Silvered Curved Surface", "Silvered Curved Face Behavior",
    "A plano-convex lens (μ = 1.50, curved face radius R = 20 cm) is silvered on its curved convex surface so that light enters through the flat face.",
    "What is the equivalent optical focal length of this silvered system?",
    "F = R / (2·μ) = 20 / (2 × 1.5) ≈ 6.67 cm (concave mirror behavior)",
    "F = 20 cm",
    "F = 40 cm",
    "F = 10 cm",
    "A",
    "Light refracts through flat face (P_L1 = 0), reflects off silvered concave inner curved face (P_M = 2/R), and refracts out through flat face. Total power P = 2·P_L + P_M. Since curved face is silvered, F_eq = R / (2μ) = 20 / (2 × 1.5) ≈ 6.67 cm. It acts as a concave mirror of short focal length."
  ),
  makeCase(
    chapter, 43, "Convex Lens Immersed in Equal Refractive Index Oil", "Refraction Disappearance in Immersion Oil",
    "An oil-immersion microscope objective uses specialized synthetic cedarwood oil with refractive index μ_oil = 1.515 placed between the glass coverslip (μ = 1.515) and the front lens element (μ = 1.515).",
    "Why does eliminating the air gap between coverslip and lens dramatically improve image resolution?",
    "It eliminates refraction and Total Internal Reflection at the glass-air boundary, allowing wide-angle light rays to enter the lens without deviation, maximizing numerical aperture.",
    "It magnifies the specimen by 2x.",
    "It polarizes light to eliminate blue reflections.",
    "It cools the microscope light bulb.",
    "A",
    "In a dry objective, light rays emerging obliquely from the glass coverslip into air bend away from the normal; at steep angles, they undergo Total Internal Reflection and cannot enter the lens. By filling the gap with immersion oil of the same refractive index as glass (μ = 1.515), the boundary vanishes optically. Light travels straight from coverslip into lens, dramatically increasing light collection and optical resolution."
  ),
  makeCase(
    chapter, 44, "Asymmetrical Biconvex Lens Orientation", "Lens Inversion Invariance in Thin Lenses",
    "A student tests an unsymmetrical biconvex thin lens having radii of curvature R1 = 10 cm and R2 = 30 cm. In Experiment 1, the R1 face faces the incoming parallel beam. In Experiment 2, the lens is flipped 180° so the R2 face faces the incoming beam.",
    "How does the focal length in Experiment 1 compare with Experiment 2?",
    "Focal length is strictly identical in both orientations (f1 = f2) for a thin lens in air.",
    "f1 is 3 times longer than f2.",
    "f2 is 3 times longer than f1.",
    "Experiment 1 converges light while Experiment 2 diverges light.",
    "A",
    "By the Lens Maker's formula: 1/f = (μ - 1)(1/R1 - 1/R2). In orientation 1: 1/f = (μ - 1)(1/10 - (-1/30)) = (μ - 1)(4/30). In orientation 2: R1' = 30 cm, R2' = -10 cm: 1/f = (μ - 1)(1/30 - (-1/10)) = (μ - 1)(4/30). The resulting focal length is completely identical regardless of which face receives the incident light."
  ),
  makeCase(
    chapter, 45, "Thick Solid Glass Marble as a Ball Lens", "Short Focal Length and High Aberration",
    "A child plays with a perfectly spherical solid glass marble of radius R = 1.5 cm and refractive index μ = 1.50.",
    "What is the distance from the center of the marble to its focal point for parallel incident light?",
    "2.25 cm from the center (0.75 cm outside the rear surface)",
    "1.5 cm (exactly on the rear surface)",
    "3.0 cm from the center",
    "4.5 cm from the center",
    "A",
    "For a solid sphere of radius R and refractive index μ in air, the effective focal length from the center is given by f = (μ·R) / [2(μ - 1)]. For μ = 1.50: f = (1.5 × 1.5 cm) / [2 × 0.50] = 2.25 / 1.0 = 2.25 cm from the center. Since the radius is 1.5 cm, the focal point lies 2.25 - 1.5 = 0.75 cm outside the rear glass surface."
  ),
  makeCase(
    chapter, 46, "Liquid Lens with Adjustable Curvature Membrane", "Variable Focal Length by Pressure",
    "A bio-medical engineering team designs an artificial intraocular lens using a transparent silicone fluid encapsulated between two flexible polydimethylsiloxane (PDMS) membranes. A micropump injects or withdraws fluid, altering the membrane radius of curvature R from 20 mm to 8.0 mm.",
    "What happens to the optical power of the liquid lens as fluid is injected to decrease R?",
    "Optical power increases (lens becomes more converging, focal length shortens) as curvature increases.",
    "Optical power decreases to zero.",
    "Optical power becomes negative, turning into a concave lens.",
    "Focal length remains constant because fluid volume is conserved.",
    "A",
    "The focal length of a biconvex lens is given by f = R / [2(μ - 1)], and optical power is P = 1/f = [2(μ - 1)] / R. As fluid is pumped into the lens, the membrane bulges outward, reducing its radius of curvature R. Since power P is inversely proportional to R, decreasing R directly increases the optical converging power, mimicking human eye accommodation."
  ),
  makeCase(
    chapter, 47, "Human Eye Lens Accommodation Mechanism", "Ciliary Muscle Contraction and Lens Curvature",
    "When a person looks at a distant mountain, the ciliary muscles of the eye relax, stretching the suspensory zonule ligaments and pulling the crystalline lens thin and flat (maximum focal length f ≈ 2.5 cm). When the person shifts gaze to read a smartphone held 25 cm away.",
    "What physiological changes occur in the eye lens to focus on the nearby screen?",
    "Ciliary muscles contract, relaxing the suspensory ligaments; the elastic lens bulges thicker with smaller radius of curvature, increasing its converging power.",
    "Ciliary muscles relax further, flattening the lens.",
    "The eyeball elongates by 5 mm.",
    "The pupil closes completely to act as a pinhole.",
    "A",
    "Accommodation for near vision is an active muscular process. The circular ciliary muscles contract, releasing tension on the suspensory ligaments. Freed from outward tension, the naturally elastic crystalline lens bulges more convex (radius of curvature decreases). This increases its refractive power (shorter focal length), sharply focusing divergent rays from the near smartphone onto the retina."
  ),
  makeCase(
    chapter, 48, "Virtual Image Formed by Convex Lens vs Concave Lens", "Distinction in Virtual Images",
    "A student views a 2.0 cm tall postage stamp through Lens X and observes an erect virtual image of height 6.0 cm. The student then views the stamp through Lens Y and observes an erect virtual image of height 1.0 cm.",
    "What are the types of lenses X and Y?",
    "Lens X is a Convex lens (magnifier, m = +3.0 > 1); Lens Y is a Concave lens (diminisher, m = +0.5 < 1).",
    "Lens X is a Concave lens; Lens Y is a Convex lens.",
    "Both are Convex lenses.",
    "Both are Concave lenses.",
    "A",
    "Both lenses can produce virtual, erect images, but their magnifications differ fundamentally: (1) A convex lens produces a virtual image ONLY when the object is inside its focus (u < f), and the virtual image is always magnified (m > 1, here m = 6/2 = +3.0). (2) A concave lens produces a virtual image for ALL object positions, and the virtual image is always diminished (m < 1, here m = 1/2 = +0.5)."
  ),
  makeCase(
    chapter, 49, "Convex Lens Projecting Sun Image on Thermopile", "Solar Irradiance Measurement",
    "A solar research station uses a quartz convex lens of diameter D = 10 cm (area A = π·D² / 4) and focal length f = 20 cm to focus solar radiation onto a calibrated thermopile sensor at the focus. On a clear day, solar irradiance is 1000 W/m².",
    "What total thermal power is focused onto the thermopile focal spot, assuming 90% transmission?",
    "≈ 7.07 Watts",
    "≈ 70.7 Watts",
    "≈ 1.57 Watts",
    "≈ 100 Watts",
    "A",
    "Lens aperture radius R = 5.0 cm = 0.05 m. Lens aperture area A = π·R² = 3.1416 × (0.05 m)² = 0.007854 m². Total incident solar power = Irradiance × Area = 1000 W/m² × 0.007854 m² ≈ 7.854 W. With 90% optical transmission: Focused power = 0.90 × 7.854 W ≈ 7.07 W."
  ),
  makeCase(
    chapter, 50, "Compound Microscope Final Virtual Image Formation", "Eyepiece Acting as Simple Magnifier",
    "In a compound microscope, the short-focus objective lens produces a real, inverted, magnified image A'B' of a cell specimen. This intermediate image A'B' is positioned just inside the first principal focus F_e of the eyepiece lens.",
    "What are the characteristics and orientation of the final image A''B'' seen by the observer through the eyepiece?",
    "Virtual, highly magnified, and inverted with respect to the original specimen (erect with respect to intermediate image A'B').",
    "Real, erect with respect to the specimen, and diminished.",
    "Virtual and erect with respect to the original specimen.",
    "Real and formed at the objective focus.",
    "A",
    "The objective lens forms a real, inverted, and magnified intermediate image A'B'. The eyepiece acts as a simple magnifying glass positioned so that A'B' lies inside its focal length (u < f_e). The eyepiece forms a virtual, erect image of A'B'. Since A'B' was already inverted relative to the original specimen, the final virtual image A''B'' remains inverted with respect to the original specimen, but is magnified enormously."
  )
];

const outPath = path.join(__dirname, 'questionBank', 'physics_case_refraction_through_a_lens.json');
fs.writeFileSync(outPath, JSON.stringify(refLensCases, null, 2), 'utf8');
console.log(`Saved ${refLensCases.length} case studies for Refraction through a Lens to ${outPath}`);
