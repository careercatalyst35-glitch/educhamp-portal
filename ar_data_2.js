// ar_data_2.js - Assertion-Reasoning Question Bank for Chapters 5 to 8
// ICSE Class 10 Physics

module.exports = {
  refraction_lens: [
    {
      title: 'Convex lens magnification condition',
      a: 'A convex lens can produce a magnified virtual and erect image of an object.',
      r: 'When an object is placed between the optical centre and the principal focus of a convex lens, the refracted rays diverge and appear to meet behind the object.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the divergent nature of rays behind the lens when u < f explains why a magnified virtual image is formed (magnifying glass).'
    },
    {
      title: 'Concave lens image nature',
      a: 'A concave lens always produces a virtual, erect, and diminished image of a real object, regardless of object distance.',
      r: 'A concave lens is a diverging lens that diverges incident light away from the principal axis.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and divergence of rays ensures they always appear to originate from between the optical centre and the focal point.'
    },
    {
      title: 'Power of convex and concave lens signs',
      a: 'The power of a convex lens is positive, while the power of a concave lens is negative.',
      r: 'Power is the reciprocal of focal length in metres (P = 1/f), and by sign convention, the focal length of a convex lens is positive and that of a concave lens is negative.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and P = 1/f combined with Cartesian sign convention explains the signs of power.'
    },
    {
      title: 'Thick vs thin lens focal length',
      a: 'A thick convex lens has a shorter focal length than a thin convex lens of the same material and diameter.',
      r: 'A thicker lens has greater surface curvature, causing stronger refraction and bending of light rays closer to the lens.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and greater surface curvature bends rays more sharply, shortening focal length.'
    },
    {
      title: 'Lens immersed in water focal length',
      a: 'When a convex glass lens is immersed in water, its focal length increases.',
      r: 'The relative refractive index of glass with respect to water is less than that of glass with respect to air, so light rays bend less.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and smaller refractive index ratio reduces ray deviation, shifting the focus farther away.'
    },
    {
      title: 'Air bubble in water as diverging lens',
      a: 'An air bubble trapped inside water acts as a diverging (concave) lens.',
      r: 'The refractive index of air inside the bubble is less than the refractive index of the surrounding water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Although shaped convexly, light travels from denser water to rarer air, causing rays to bend away from the normal and diverge.'
    },
    {
      title: 'Object at 2F of a convex lens',
      a: 'When an object is placed at 2F of a convex lens, its image is formed at 2F on the other side with magnification equal to -1.',
      r: 'From the lens formula 1/f = 1/v - 1/u, substituting u = -2f gives v = +2f, and m = v/u = +2f/(-2f) = -1.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the lens formula mathematically confirms v = 2f and m = -1 (real, inverted, same size).'
    },
    {
      title: 'Ray passing through optical centre',
      a: 'A ray of light passing through the optical centre of a thin lens undergoes no deviation.',
      r: 'At the optical centre, the central portion of the lens acts like a thin, parallel-sided glass slab with negligible lateral displacement.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the parallel-faced central zone explains why deviation is zero for thin lenses.'
    },
    {
      title: 'Dioptre definition',
      a: 'One dioptre is the power of a lens having a focal length of 1 metre.',
      r: 'The SI unit of optical power of a lens is the dioptre (D = m⁻¹).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and P = 1 / f(in m) directly gives 1 D for f = 1 m.'
    },
    {
      title: 'Covering half of a lens with black paper',
      a: 'If the lower half of a convex lens forming a sharp image on a screen is covered with black paper, half of the image disappears.',
      r: 'Covering half of the lens blocks light rays originating from the lower half of the object.',
      ans: 'D',
      exp: 'Assertion is false and Reason is false. Light rays from every point of the object pass through every part of the lens; covering half the lens forms the complete image, but with reduced brightness (half the intensity).'
    },
    {
      title: 'Magnification formula for lenses',
      a: 'Linear magnification produced by a spherical lens is given by m = v / u.',
      r: 'Linear magnification is defined as the ratio of image height to object height (m = h_i / h_o).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and from similar triangles formed by object and image, h_i / h_o = v / u.'
    },
    {
      title: 'Real image on a screen',
      a: 'A real image can always be caught on a screen, but a virtual image cannot be captured on a screen.',
      r: 'Light rays actually converge and intersect at the location of a real image, whereas they only appear to diverge from a virtual image.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and real convergence of photon energy at the focal point allows screen capture.'
    },
    {
      title: 'Convex lens burning glass',
      a: 'A convex lens can be used as a burning glass to ignite a dry leaf under bright sunlight.',
      r: 'A convex lens converges the parallel rays of sunlight to a single hot focal point, concentrating solar thermal energy.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and concentrating parallel solar rays onto the focal point explains ignition.'
    },
    {
      title: 'Combination of two lenses power',
      a: 'When a convex lens of +4 D is placed in contact with a concave lens of -2 D, the combination acts as a convex lens of +2 D.',
      r: 'The net power of two thin lenses in contact is the algebraic sum of their individual powers (P = P₁ + P₂).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. P = P₁ + P₂ = (+4 D) + (-2 D) = +2 D, which has positive power (convex behavior).'
    },
    {
      title: 'Focal length and color of light in lens',
      a: 'The focal length of a convex glass lens is longer for red light than for violet light.',
      r: 'Glass has a smaller refractive index for red light than for violet light, causing red light to bend less sharply.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Smaller refractive index for red means weaker convergence, focusing rays further away (f_red > f_violet).'
    },
    {
      title: 'Magnifying glass focal length choice',
      a: 'A convex lens of short focal length is preferred as a simple magnifying glass.',
      r: 'The magnifying power of a magnifying glass for normal vision is given by M = 1 + D/f, which increases as focal length f decreases.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and M = 1 + D/f mathematically confirms higher magnification for smaller f.'
    },
    {
      title: 'Object at principal focus of convex lens',
      a: 'When an object is placed at the principal focus of a convex lens, its image is formed at infinity.',
      r: 'Light rays originating from the principal focus emerge parallel to the principal axis after refraction through the lens.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and parallel emerging rays by definition meet at infinity.'
    },
    {
      title: 'Virtual image magnification sign',
      a: 'The linear magnification for a virtual image formed by any spherical lens is always positive.',
      r: 'A virtual image is always erect with respect to the object, so both object height and image height have the same sign.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and m = +h_i / +h_o > 0 for all erect images.'
    },
    {
      title: 'Real image magnification sign',
      a: 'The linear magnification for a real image formed by a lens is always negative.',
      r: 'A real image formed by a single lens is always inverted with respect to the object.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and an inverted image means h_i is negative, making m = h_i / h_o negative.'
    },
    {
      title: 'Concave lens as reading glass',
      a: 'A concave lens can be used as a reading glass to read fine newspaper print.',
      r: 'A concave lens produces erect and magnified images when placed close to an object.',
      ans: 'D',
      exp: 'Both Assertion and Reason are false. A concave lens always produces diminished images (m < 1), making fine print even smaller; convex lenses are used as reading glasses.'
    },
    {
      title: 'Principal focus definition convex lens',
      a: 'A convex lens has two real principal foci equidistant from its optical centre for a symmetric lens.',
      r: 'Light can pass through a lens from either direction, and parallel rays from either side converge to a focus on the opposite side.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and symmetry of the two refracting surfaces confirms two equidistant foci.'
    },
    {
      title: 'Concave lens focus reality',
      a: 'The principal focus of a concave lens is a virtual focus.',
      r: 'Rays incident parallel to the principal axis diverge after passing through the lens and appear to meet at the focus when extended backward.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and apparent convergence of backward-extended rays defines a virtual focus.'
    },
    {
      title: 'Lens immersed in liquid of equal refractive index',
      a: 'A glass lens placed in a liquid having the exact same refractive index as the glass becomes completely invisible.',
      r: 'No refraction or reflection occurs at the interface between two media of identical refractive index.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and zero refraction/reflection means light passes straight through without bending or boundary contrast.'
    },
    {
      title: 'Lens immersed in liquid of greater refractive index',
      a: 'A convex glass lens immersed in carbon disulfide (μ = 1.63 > μ_glass = 1.5) behaves as a diverging lens.',
      r: 'When the surrounding medium has a higher refractive index than the lens material, the direction of refraction at each surface is reversed.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and reversed relative refractive index inverts a converging geometry into a diverging lens.'
    },
    {
      title: 'Camera lens type',
      a: 'The objective lens of a photographic camera is a convex lens.',
      r: 'A camera requires a real, inverted, and diminished image to be focused on the photographic film or digital sensor.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and a convex lens focusing distant objects into real, diminished images matches camera sensor requirements.'
    },
    {
      title: 'Human eye crystalline lens',
      a: 'The crystalline lens of the human eye is a biconvex lens of variable focal length.',
      r: 'Ciliary muscles contract and relax to alter the curvature and focal length of the eye lens for accommodation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the action of ciliary muscles altering curvature explains accommodation.'
    },
    {
      title: 'Minimum distance between object and real image',
      a: 'The minimum distance between a real object and its real image formed by a convex lens of focal length f is 4f.',
      r: 'This occurs when the object is at 2F (distance 2f from lens) and the image is formed at 2F on the other side (total distance = 2f + 2f = 4f).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and calculus or the 2f+2f geometry confirms 4f as the minimum real-to-real separation.'
    },
    {
      title: 'Plano-convex lens focal length',
      a: 'A plano-convex lens has a longer focal length than a double-convex lens of the same material and same radius of curvature.',
      r: 'A plano-convex lens has only one curved refracting surface, providing only half the converging power of an equiconvex lens.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. From the lens maker\'s formula, 1/f = (μ - 1)(1/R), which is half of (μ - 1)(2/R), doubling the focal length.'
    },
    {
      title: 'Sign convention object distance',
      a: 'According to Cartesian sign convention, the object distance u is always taken as negative for a real object.',
      r: 'A real object is always placed to the left of the lens, in the direction opposite to the incident light.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and measuring against the incident light direction assigns a negative sign to u.'
    },
    {
      title: 'Aperture and image brightness',
      a: 'A camera lens with a larger diameter aperture produces a brighter image on the sensor.',
      r: 'The amount of light collected by a lens is directly proportional to the square of its aperture diameter (area ∝ d²).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and area ∝ d² confirms that larger aperture collects more light, increasing brightness.'
    },
    {
      title: 'Myopia corrective lens',
      a: 'A person suffering from myopia (short-sightedness) is prescribed spectacles with concave lenses.',
      r: 'A concave lens diverges parallel incoming rays so that they appear to come from the person\'s far point, focusing precisely on the retina.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and divergence of distant rays to move the image back onto the retina corrects myopia.'
    },
    {
      title: 'Hypermetropia corrective lens',
      a: 'A person with hypermetropia (long-sightedness) requires convex lenses for reading.',
      r: 'A convex lens provides converging power to form a virtual image of a nearby object at the person\'s near point.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and auxiliary converging power focusing near rays onto the retina corrects hypermetropia.'
    },
    {
      title: 'Convex lens beyond 2F image size',
      a: 'When an object is placed beyond 2F of a convex lens, its image is real, inverted, and diminished.',
      r: 'The image is formed between F and 2F on the opposite side of the lens.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. When u > 2f, f < v < 2f, and magnification |m| = v/u < 1, producing a diminished real image.'
    },
    {
      title: 'Convex lens between F and 2F image size',
      a: 'When an object is placed between F and 2F of a convex lens, its image is real, inverted, and magnified.',
      r: 'The image is formed beyond 2F on the opposite side, where image distance v is greater than object distance u.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. When f < u < 2f, v > 2f, so |m| = v/u > 1, producing an enlarged real image.'
    },
    {
      title: 'Focal length independent of light intensity',
      a: 'The focal length of a lens remains identical whether exposed to bright sunlight or dim moonlight.',
      r: 'Focal length is determined strictly by the radii of curvature and refractive index of the lens material, independent of beam intensity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and independence of refractive index from light intensity ensures constant focal length.'
    },
    {
      title: 'Power of plane glass plate',
      a: 'The optical power of a flat, plane glass window sheet is zero.',
      r: 'A plane glass plate has infinite radius of curvature, so its focal length is infinity and power P = 1 / ∞ = 0.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and P = 1/f = 1/∞ = 0 explains zero optical power.'
    },
    {
      title: 'Sign convention focal length of convex lens',
      a: 'The focal length of a convex lens is taken as positive in all ray-tracing calculations.',
      r: 'The primary focus where parallel incident rays converge lies on the right side of the lens in the direction of the incident light.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and measurement along the direction of incident light assigns a positive sign.'
    },
    {
      title: 'Chromatic aberration in single lens',
      a: 'A single spherical glass lens does not focus all colors of white light to the exact same point.',
      r: 'The refractive index of glass varies with wavelength, causing violet light to focus closer to the lens than red light.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and chromatic dispersion (μ_v > μ_r) causing split focal points defines chromatic aberration.'
    },
    {
      title: 'Convex lens virtual image position',
      a: 'When a convex lens forms a virtual image, the image is always formed on the same side of the lens as the object.',
      r: 'The refracted rays diverge, and when produced backward, they intersect on the incident side.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and backward extension on the incident side defines virtual image formation on the object\'s side.'
    },
    {
      title: 'Lens cutting along principal axis',
      a: 'If a symmetrical convex lens is cut into two halves along its principal axis, the focal length of each half remains equal to f.',
      r: 'The radii of curvature of the curved surfaces of each half are unchanged, and the refractive index of the glass remains the same.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The lens maker\'s formula 1/f = (μ-1)(2/R) depends only on R and μ; cutting along the axis changes aperture/brightness, but not focal length.'
    }
  ],

  spectrum: [
    {
      title: 'Dispersion of white light cause',
      a: 'White light passing through a glass prism splits into seven constituent spectral colors.',
      r: 'The speed of light in glass depends on wavelength, causing different colors to refract through different angles.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and wavelength-dependent speed (dispersion) explains the angular separation of spectral components.'
    },
    {
      title: 'Deviation of violet vs red light',
      a: 'Violet light undergoes maximum deviation and red light undergoes minimum deviation when white light passes through a prism.',
      r: 'Violet light has the shortest wavelength in the visible spectrum and travels slowest in glass, experiencing the highest refractive index.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Cauchy\'s formula shows μ decreases with increasing λ, so violet has maximum μ and maximum deviation.'
    },
    {
      title: 'Infrared radiation detection',
      a: 'Infrared radiation can be detected by using a sensitive blackened-bulb thermometer or a thermopile.',
      r: 'Infrared radiation has a strong heating effect, and a blackened surface absorbs thermal radiation most efficiently.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the strong heating effect absorbed by blackened surfaces is the standard method for detecting infrared.'
    },
    {
      title: 'Rock salt prism for infrared spectrum',
      a: 'A rock-salt (NaCl) prism is used instead of a glass prism to study the infrared spectrum.',
      r: 'Ordinary glass absorbs infrared radiation, whereas rock salt is transparent to infrared rays.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and rock salt\'s transparency to infrared wavelengths explains why glass cannot be used.'
    },
    {
      title: 'Quartz prism for ultraviolet spectrum',
      a: 'A quartz prism is employed to obtain the ultraviolet spectrum.',
      r: 'Ordinary glass is opaque to ultraviolet radiation, whereas quartz allows ultraviolet rays to transmit without absorption.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the opacity of glass to UV compared to quartz transparency justifies its use.'
    },
    {
      title: 'Scattering of light Rayleigh\'s law',
      a: 'Blue light is scattered much more strongly by atmospheric gas molecules than red light.',
      r: 'According to Rayleigh\'s scattering law, the intensity of scattered light is inversely proportional to the fourth power of wavelength (I ∝ 1/λ⁴).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since λ_blue ≈ ½ λ_red, (λ_red / λ_blue)⁴ ≈ 16, so blue is scattered roughly 16 times more than red.'
    },
    {
      title: 'Blue color of the sky',
      a: 'The sky appears blue on a clear sunny day when viewed from the surface of the Earth.',
      r: 'Air molecules scatter the shorter wavelengths (blue and violet) of sunlight in all directions into the observer\'s eyes.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and preferential Rayleigh scattering of blue wavelengths explains the color of the daytime sky.'
    },
    {
      title: 'Sky appearance from the Moon',
      a: 'An astronaut standing on the Moon sees a completely dark, black sky even during the daytime.',
      r: 'The Moon has no atmosphere, so there are no air molecules or particles to scatter sunlight.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the complete absence of atmospheric scattering on the Moon makes the sky appear black.'
    },
    {
      title: 'Red danger signals',
      a: 'Danger signals and brake lights on vehicles are universally made red.',
      r: 'Red light has the longest wavelength in the visible spectrum and undergoes minimum scattering by fog and smoke, making it visible from the greatest distance.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and minimum scattering due to large wavelength ensures red penetrates farthest through fog and dust.'
    },
    {
      title: 'Reddish appearance of Sun at sunrise and sunset',
      a: 'The Sun appears distinctly reddish at sunrise and sunset.',
      r: 'At sunrise and sunset, sunlight travels through a much thicker layer of atmosphere; shorter blue wavelengths are scattered away, leaving mostly red light to reach the eye.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the long atmospheric path scattering away blue light explains the surviving red transmission.'
    },
    {
      title: 'White appearance of clouds',
      a: 'Rain-free daytime clouds appear brilliant white.',
      r: 'Cloud water droplets are much larger than the wavelength of light, scattering all visible wavelengths equally without wavelength bias.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. When scattering particle size d >> λ, non-selective scattering occurs, and all colors scatter equally to produce white.'
    },
    {
      title: 'Electromagnetic spectrum speed in vacuum',
      a: 'Gamma rays, X-rays, visible light, and radio waves all travel at the exact same speed in a vacuum.',
      r: 'All electromagnetic waves travel through free space at the universal speed of light, c ≈ 3 × 10⁸ m s⁻¹.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the universal velocity c for all EM waves in vacuum validates the assertion.'
    },
    {
      title: 'Ultraviolet rays fluorescence effect',
      a: 'Ultraviolet radiation causes certain minerals and chemical dyes to glow visibly (fluorescence).',
      r: 'Fluorescent substances absorb high-energy ultraviolet photons and re-emit photons of lower energy in the visible spectrum.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Stokes shift re-emitting lower-energy visible photons explains UV-induced fluorescence.'
    },
    {
      title: 'Infrared radiation photography in fog',
      a: 'Special infrared cameras can capture clear photographs of distant landscapes even through dense haze and fog.',
      r: 'Infrared radiation has longer wavelengths than visible light and is scattered much less by fine fog particles.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and reduced scattering of long-wavelength infrared allows it to penetrate haze cleanly.'
    },
    {
      title: 'Greenhouse effect mechanism',
      a: 'A glass greenhouse traps heat and maintains a warmer interior than the outside environment.',
      r: 'Glass allows shorter-wavelength solar radiation to enter, but is opaque to the longer-wavelength infrared radiation re-emitted by the warm interior.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and differential transmission (transparent to short-wave IR, opaque to long-wave thermal IR) explains heat trapping.'
    },
    {
      title: 'Ultraviolet rays health hazard',
      a: 'Excessive exposure to ultraviolet radiation can cause skin cancer and severe damage to eye retinas.',
      r: 'Ultraviolet photons possess higher frequency and energy than visible light, capable of ionizing chemical bonds in living tissue.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and high photon energy (E = hf) breaking biological molecular bonds explains tissue damage.'
    },
    {
      title: 'Ozone layer protective shield',
      a: 'The ozone layer in the stratosphere is vital for the survival of life on Earth.',
      r: 'Ozone gas strongly absorbs lethal high-energy ultraviolet-C and ultraviolet-B radiation from solar rays.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and stratospheric ozone absorbing ionizing UV radiation protects the biosphere.'
    },
    {
      title: 'Color of opaque object reflection',
      a: 'A red rose appears bright red when viewed under white light, but appears black when illuminated by pure green light.',
      r: 'An opaque object appears in the color of the light it reflects; a red rose absorbs green light and reflects nothing.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The rose reflects only red wavelengths; when green light shines on it, all light is absorbed and none reflected, appearing black.'
    },
    {
      title: 'Newton\'s color disc recombining',
      a: 'When Newton\'s seven-colored disc is spun rapidly, it appears greyish-white.',
      r: 'The persistence of vision (about 1/16th of a second) causes the sensation of the seven spectral colors to blend on the retina.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and retinal persistence blending the rapidly cycling colors produces the perception of white.'
    },
    {
      title: 'Gamma rays penetrating power',
      a: 'Gamma rays possess the greatest penetrating power among all electromagnetic radiations.',
      r: 'Gamma rays have the highest frequency and shortest wavelength, giving their photons the highest energy and zero rest mass/charge.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and extremely high photon energy with zero electric charge enables deep penetration through matter.'
    },
    {
      title: 'Microwave oven heating water molecules',
      a: 'Microwave ovens heat food containing moisture rapidly from within.',
      r: 'Microwave frequencies resonate with the rotational energy levels of polar water molecules, causing rapid friction heating.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dielectric heating resonant with water dipole rotation explains microwave efficiency.'
    },
    {
      title: 'Infrared therapy lamps',
      a: 'Infrared heating lamps are widely used for medical heat therapy in muscle strains.',
      r: 'Infrared rays penetrate superficial skin layers and produce deep localized warmth, increasing blood circulation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and localized thermal penetration relieving muscular soreness explains their clinical use.'
    },
    {
      title: 'Monochromatic light dispersion',
      a: 'A beam of pure yellow sodium light splits into multiple colors when passed through a glass prism.',
      r: 'A prism disperses all light waves regardless of whether they are monochromatic or composite.',
      ans: 'D',
      exp: 'Both Assertion and Reason are false. Monochromatic light contains only one wavelength and cannot be dispersed into other colors; it only undergoes deviation.'
    },
    {
      title: 'Angle of minimum deviation condition',
      a: 'At the angle of minimum deviation, a ray of light passes symmetrically through an equilateral prism parallel to its base.',
      r: 'At minimum deviation, the angle of incidence equals the angle of emergence (i = e), making the refracted ray inside parallel to the base.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and i = e symmetry mathematically enforces that the internal ray runs parallel to the base.'
    },
    {
      title: 'Ultraviolet rays detection with silver chloride',
      a: 'Ultraviolet rays can be detected by their action on photographic paper coated with silver chloride.',
      r: 'Ultraviolet radiation causes chemical reduction of silver chloride, turning it rapidly dark/black.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and photochemical decomposition of AgCl is a classic chemical detection method for UV.'
    },
    {
      title: 'Radio waves propagation wavelength',
      a: 'Radio waves can bend around large hills and obstacles to transmit signals over long horizons.',
      r: 'Radio waves have the longest wavelengths in the electromagnetic spectrum, exhibiting noticeable diffraction around large terrestrial obstacles.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and large wavelength comparable to hill dimensions enables diffraction around obstacles.'
    },
    {
      title: 'X-rays diagnostic bone imaging',
      a: 'X-rays are routinely used to detect bone fractures in medicine.',
      r: 'X-rays penetrate soft biological tissues like skin and muscle, but are absorbed by dense bones containing calcium.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and differential absorption between dense calcium bone and soft tissue creates clear shadowgrams.'
    },
    {
      title: 'Pure spectrum requirements',
      a: 'To obtain a pure spectrum on a screen, an achromatic convex lens must be placed before and after the dispersing prism.',
      r: 'The first lens produces a parallel beam of light, and the second lens focuses each parallel monochromatic colored beam onto a distinct position on the screen.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and parallel beam illumination followed by chromatic focusing prevents overlapping of colors.'
    },
    {
      title: 'Refractive index of glass for red vs violet',
      a: 'The refractive index of crown glass for violet light (1.53) is greater than that for red light (1.51).',
      r: 'The speed of violet light in glass is less than the speed of red light in glass (v = c/μ).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and lower speed for violet directly corresponds to a higher refractive index.'
    },
    {
      title: 'Ultraviolet water sterilization',
      a: 'Ultraviolet lamps are commonly installed in domestic water purifiers.',
      r: 'Ultraviolet-C radiation destroys the DNA of bacteria and viruses, rendering them inactive without adding chemicals.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and germicidal UV-C disrupting microbial nucleic acid explains chemical-free sterilization.'
    },
    {
      title: 'Infrared remote control operation',
      a: 'Television remote control units typically use infrared light rather than visible light.',
      r: 'Infrared pulses cannot be seen by the human eye, preventing distracting flashes during TV viewing, and operate with low power consumption.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and invisible operation with easy LED modulation justifies infrared remote controls.'
    },
    {
      title: 'Sun appearance at noon',
      a: 'The Sun overhead at noon appears dazzling white rather than red.',
      r: 'At noon, sunlight travels the shortest vertical path through the atmosphere, so very little scattering of any color occurs.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and minimal scattering over the short perpendicular path allows all colors to reach the eye together as white.'
    },
    {
      title: 'Invisible spectrum boundaries',
      a: 'The full spectrum of sunlight extends far beyond the red and violet visible limits.',
      r: 'Solar radiation contains infrared rays beyond the red end and ultraviolet rays beyond the violet end.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the presence of infrared and ultraviolet extensions defines the invisible solar spectrum.'
    },
    {
      title: 'Visible spectrum wavelength range',
      a: 'The human eye is sensitive to electromagnetic radiation having wavelengths between approximately 400 nm and 700 nm.',
      r: 'Photoreceptors in the human retina (rods and cones) absorb photons only within the 400–700 nm range to trigger optic nerve signals.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the photochemical absorption range of retinal pigments defines the visible spectrum.'
    },
    {
      title: 'Dispersion in raindrops rainbow',
      a: 'A rainbow is formed by sunlight interacting with suspended raindrops in the sky.',
      r: 'Raindrops act as tiny prisms, causing refraction, dispersion, and internal reflection of sunlight.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the combination of dispersion, refraction, and internal reflection inside raindrops produces the rainbow.'
    },
    {
      title: 'Thermopile working principle',
      a: 'A thermopile generates a measurable electric current when exposed to infrared radiation.',
      r: 'A thermopile consists of multiple thermocouples connected in series that produce an EMF via the Seebeck thermoelectric effect when heated.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the Seebeck thermoelectric effect in series thermocouples explains thermopile detection.'
    },
    {
      title: 'Infrared photography for forged paintings',
      a: 'Infrared reflectography is used by art historians to discover underlying sketch drawings in historic paintings.',
      r: 'Infrared rays can penetrate surface layers of paint and reflect off carbon-based underdrawings.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and differential transmission through pigment layers to reveal carbon sketches explains art authentication.'
    },
    {
      title: 'Total internal reflection prism in spectrometer',
      a: 'Spectrometers often use totally reflecting prisms to redirect light beams without chromatic dispersion.',
      r: 'Total internal reflection is an internal boundary phenomenon that does not disperse light into constituent wavelengths.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and reflection at 100% efficiency without chromatic splitting preserves beam purity.'
    },
    {
      title: 'Cosmic rays in electromagnetic spectrum',
      a: 'Cosmic rays are electromagnetic waves having frequencies higher than gamma rays.',
      r: 'Electromagnetic waves consist of oscillating electric and magnetic fields traveling at the speed of light.',
      ans: 'D',
      exp: 'Assertion is false because cosmic rays are not electromagnetic waves; they are high-energy subatomic charged particles (mostly protons and atomic nuclei). Reason is true.'
    },
    {
      title: 'Ultraviolet rays vitamin D synthesis',
      a: 'Moderate exposure of the human skin to morning sunlight promotes the natural synthesis of vitamin D.',
      r: 'Ultraviolet-B radiation triggers a photochemical reaction in the skin that converts 7-dehydrocholesterol into vitamin D3.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the photochemical conversion of provitamin D by UV-B explains biological synthesis.'
    }
  ],

  sound: [
    {
      title: 'Sound propagation in vacuum',
      a: 'Sound waves cannot propagate through a perfect vacuum.',
      r: 'Sound is a mechanical longitudinal wave that requires a material medium containing particles for compression and rarefaction.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the mechanical wave nature requiring inter-particle collisions explains why sound cannot cross a vacuum.'
    },
    {
      title: 'Minimum distance for echo in air',
      a: 'To hear a distinct echo of a sharp sound in air at 20°C, the reflecting obstacle must be at least 17.2 metres away.',
      r: 'The sensation of hearing persists in the human brain for approximately 0.1 second (persistence of hearing).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Distance = (v × t) / 2 = (344 × 0.1) / 2 = 17.2 m, so persistence of hearing dictates the minimum distance.'
    },
    {
      title: 'Speed of sound in solids vs gases',
      a: 'Sound travels significantly faster in steel (approx. 5100 m/s) than in air (approx. 340 m/s).',
      r: 'Steel has a much higher modulus of elasticity than air, which more than compensates for its higher density (v = √(E/ρ)).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Speed v = √(E/ρ), and the elasticity of steel is roughly 10⁶ times that of air, overcoming the density difference.'
    },
    {
      title: 'Resonance as forced vibration',
      a: 'Resonance is a special case of forced vibrations in which the vibrating body oscillates with a very large amplitude.',
      r: 'Resonance occurs when the frequency of the external periodic driving force matches the natural frequency of the vibrating system.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and frequency matching leading to maximum energy transfer explains the massive amplitude.'
    },
    {
      title: 'Soldiers breaking step on bridges',
      a: 'Soldiers marching in formation are ordered to break step while crossing a suspension bridge.',
      r: 'If the marching cadence coincides with the natural frequency of the bridge, resonance could cause violent oscillations and structural collapse.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and avoiding resonant matching between marching frequency and bridge natural frequency is standard safety.'
    },
    {
      title: 'Damped vibrations amplitude decay',
      a: 'The amplitude of oscillations of a tuning fork struck in air gradually decreases with time.',
      r: 'Energy is continuously dissipated in doing work against air friction and internal friction.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and viscous air resistance converting mechanical vibration into heat defines damped oscillations.'
    },
    {
      title: 'Pitch and frequency relation',
      a: 'The voice of a woman generally has a higher pitch than the voice of a man.',
      r: 'A woman\'s vocal cords are typically thinner and shorter, vibrating with a higher natural frequency.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and pitch is the subjective sensation directly determined by physical frequency.'
    },
    {
      title: 'Loudness and amplitude relation',
      a: 'Striking a drum skin with greater muscular force increases the loudness of the sound produced.',
      r: 'Loudness is directly proportional to the square of the amplitude of vibration (L ∝ A²).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and L ∝ A² explains why a harder strike causing larger amplitude sounds louder.'
    },
    {
      title: 'Timbre or quality of musical notes',
      a: 'Two musical notes of identical pitch and equal loudness played on a flute and a violin can be easily distinguished by ear.',
      r: 'The notes differ in their quality (timbre) due to the presence of different numbers, frequencies, and relative amplitudes of overtones.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and different harmonic overtone structures producing different composite waveforms explain timbre.'
    },
    {
      title: 'SONAR depth sounding principle',
      a: 'Ships use SONAR (Sound Navigation and Ranging) with ultrasound to map the ocean depth.',
      r: 'Ultrasound has a high frequency and short wavelength, enabling it to travel in sharp beams over long distances without spreading or dispersing.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and directional beam propagation with high penetration through water justifies ultrasound in SONAR.'
    },
    {
      title: 'Bats obstacle navigation',
      a: 'Bats can fly and catch flying insects in complete darkness without colliding with obstacles.',
      r: 'Bats emit ultrasonic chirps and navigate by echolocation, analyzing the reflected echoes.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and ultrasonic echolocation explains obstacle avoidance and prey capture in the dark.'
    },
    {
      title: 'Speed of sound and temperature',
      a: 'The speed of sound in air increases by approximately 0.61 m/s for every 1°C rise in temperature.',
      r: 'Higher temperature decreases air density and increases the kinetic velocity of air molecules.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and v ∝ √T confirms the 0.61 m/s per degree Celsius increase.'
    },
    {
      title: 'Speed of sound and humidity',
      a: 'Sound travels faster in moist, humid air than in dry air at the same temperature and pressure.',
      r: 'Moist air contains water vapor (molecular mass 18), which is less dense than dry air (average molecular mass 29), and v = √(γP/ρ).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and lower density of moist air increases the speed of sound.'
    },
    {
      title: 'Speed of sound independent of pressure',
      a: 'A change in atmospheric air pressure does not affect the speed of sound if temperature remains constant.',
      r: 'When pressure changes at constant temperature, density changes in the exact same proportion, leaving the ratio P/ρ unchanged.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since v = √(γP/ρ) and P/ρ = constant at constant T, sound speed is independent of pressure.'
    },
    {
      title: 'Thunder heard after lightning',
      a: 'During a thunderstorm, lightning is seen before thunder is heard.',
      r: 'The speed of light (3 × 10⁸ m/s) is vastly greater than the speed of sound in air (340 m/s).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the million-fold difference in speeds explains the time delay between visual flash and acoustic roar.'
    },
    {
      title: 'Infrasonic vs Ultrasonic frequencies',
      a: 'Frequencies below 20 Hz are termed infrasonic, while frequencies above 20,000 Hz are termed ultrasonic.',
      r: 'The human ear is sensitive only to acoustic frequencies ranging between 20 Hz and 20,000 Hz (audible range).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the boundaries of human hearing define infrasound and ultrasound.'
    },
    {
      title: 'Tuning fork stem pressed on table',
      a: 'When the stem of a vibrating tuning fork is pressed firmly onto a wooden table, the sound becomes much louder.',
      r: 'The vibrating fork forces the large surface area of the tabletop into forced vibration, setting a larger mass of air into motion.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and larger vibrating surface area displacing more air molecules increases sound loudness.'
    },
    {
      title: 'Reverberation in empty hall',
      a: 'Speech sounds muffled and blurred due to excessive reverberation in a large, empty unfurnished hall.',
      r: 'Sound waves undergo repeated reflections from hard, bare walls, ceilings, and floors, creating a prolonged sound persistence.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and multiple overlapping reflections sustaining sound beyond 0.1 s cause reverberation blur.'
    },
    {
      title: 'Sound absorbing materials in cinema halls',
      a: 'Cinema halls are lined with porous acoustic tiles, heavy carpets, and upholstered curtains.',
      r: 'Porous materials absorb sound waves and prevent multiple echoes and undesirable reverberation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and absorption of acoustic energy prevents echo interference in theatres.'
    },
    {
      title: 'Guitar sound box purpose',
      a: 'A hollow wooden sound box is attached beneath the strings of an acoustic guitar.',
      r: 'The hollow box contains trapped air that undergoes forced vibration with the strings, increasing the radiating surface and loudness.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and forced resonance of the air cavity and soundboard amplifies the string sound.'
    },
    {
      title: 'Ultrasound cleaning delicate items',
      a: 'Ultrasound baths are used in industry to clean intricate watch parts and jewellery.',
      r: 'High-frequency ultrasonic vibrations create cavitation micro-bubbles in the solvent that scrub off dirt particles without mechanical wear.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and acoustic cavitation micro-scrubbing explains ultrasonic cleaning.'
    },
    {
      title: 'Natural frequency of a stretched string',
      a: 'Tightening a guitar string (increasing its tension) raises the pitch of the musical note produced.',
      r: 'The natural frequency of a stretched string is directly proportional to the square root of its tension (f ∝ √T).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and f = (1/2L)√(T/m) confirms that higher tension produces higher frequency (pitch).'
    },
    {
      title: 'Thick vs thin string pitch',
      a: 'A thicker (heavier) guitar string produces a note of lower pitch than a thin string of the same length and tension.',
      r: 'The frequency of a vibrating string is inversely proportional to the square root of its mass per unit length (f ∝ 1/√m).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and f ∝ 1/√m confirms that higher linear mass density lowers frequency and pitch.'
    },
    {
      title: 'Length of string and pitch',
      a: 'Pressing a violin string with a finger against the fretboard raises the pitch of the note.',
      r: 'Shortening the vibrating length of the string increases its frequency (f ∝ 1/L).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and f ∝ 1/L proves that reducing vibrating length increases pitch.'
    },
    {
      title: 'Hearing whistle of approaching train',
      a: 'The pitch of a train whistle appears higher to a stationary observer as the train approaches.',
      r: 'Due to the Doppler effect, the relative motion of the source compresses sound waves ahead of it, increasing the observed frequency.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the Doppler frequency shift caused by moving source compression explains the higher pitch.'
    },
    {
      title: 'Megaphone speaking trumpet shape',
      a: 'A megaphone or speaking trumpet has a conical horn shape.',
      r: 'The funnel shape guides and reflects sound waves forward in a concentrated direction, preventing spherical spreading.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and directional beam confinement prevents spreading loss, maintaining loudness.'
    },
    {
      title: 'Stethoscope working principle',
      a: 'A physician uses a stethoscope to listen to heartbeat sounds inside a patient\'s chest.',
      r: 'Sound travels along the narrow rubber tube of the stethoscope by multiple total internal reflections without much attenuation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and multiple acoustic reflections along the enclosed tube explain sound transmission to the earpieces.'
    },
    {
      title: 'Ultrasonography in medicine',
      a: 'Ultrasonography is preferred over X-rays to monitor the growth of a human foetus.',
      r: 'Ultrasound waves do not produce ionizing radiation, making them completely safe for developing tissues.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the non-ionizing mechanical nature of ultrasound explains its safety in prenatal imaging.'
    },
    {
      title: 'Acoustic resonance air column water tuning',
      a: 'When a vibrating tuning fork is held over a resonance tube, a loud booming sound is heard at a specific water level.',
      r: 'The natural frequency of the vibrating air column matches the frequency of the tuning fork, establishing resonance.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and acoustic resonance between the air column and the fork creates maximum sound amplitude.'
    },
    {
      title: 'Free vibrations definition',
      a: 'Free vibrations occur when a body oscillates with its own natural frequency in the total absence of resistive forces.',
      r: 'In free vibrations, the amplitude and frequency remain constant indefinitely because no energy is dissipated.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and constant amplitude and frequency in a conservative medium define ideal free vibrations.'
    },
    {
      title: 'Sound decibel unit',
      a: 'Loudness is measured in decibels (dB), which is a logarithmic scale.',
      r: 'The human ear responds to sound intensity logarithmically according to the Weber-Fechner law.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the logarithmic sensory response of human hearing justifies the decibel scale.'
    },
    {
      title: 'Safe noise level threshold',
      a: 'Continuous exposure to noise levels above 80 dB can lead to permanent hearing impairment.',
      r: 'Intense sound vibrations can permanently damage the delicate microscopic hair cells in the cochlea of the inner ear.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and acoustic overpressure destroying cochlear hair cells causes sensorineural hearing loss.'
    },
    {
      title: 'Speed of sound in hydrogen vs oxygen',
      a: 'Sound travels four times faster in hydrogen gas than in oxygen gas at the same temperature and pressure.',
      r: 'The molecular mass of oxygen (32) is 16 times that of hydrogen (2), and v ∝ 1/√M (√(16) = 4).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Speed v = √(γRT/M), and since M_O₂ = 16 M_H₂, v_H₂ = √(16) v_O₂ = 4 v_O₂.'
    },
    {
      title: 'Two tuning forks resonance condition',
      a: 'Two tuning forks of frequencies 256 Hz and 512 Hz mounted on resonance boxes will resonate when one is struck.',
      r: 'Resonance requires that the frequencies of the two systems be identical or in integer harmonic relation.',
      ans: 'D',
      exp: 'Assertion is false because tuning forks have sharp, highly selective resonance curves; a 256 Hz fork cannot induce resonance in a 512 Hz fork. Reason is partially true for string/air harmonics, but tuning forks require identical frequency for acoustic resonance.'
    },
    {
      title: 'Echo from a distant cliff',
      a: 'A person standing 340 m from a cliff claps and hears the echo 2 seconds later in air at 340 m/s.',
      r: 'Total distance traveled by the sound wave to the cliff and back is 2d = 2 × 340 = 680 m, so time t = 680 / 340 = 2 s.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and 2d = v·t directly verifies the 2 second delay.'
    },
    {
      title: 'Ultrasound flaw detection in metal blocks',
      a: 'Ultrasound is used in heavy industry to detect internal cracks within cast steel ingots.',
      r: 'Ultrasound rays reflect back from internal cavities or hairline cracks, creating abnormal echo signals on a detector.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and boundary reflection at internal crack voids explains non-destructive flaw detection.'
    },
    {
      title: 'Echo sounding equation',
      a: 'In echo depth sounding, depth d is calculated using the formula d = v × t / 2.',
      r: 'The transmitted signal must travel to the sea bed and the reflected signal must return to the receiver, doubling the path length (2d = v·t).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the two-way path explains the factor of 1/2 in the depth equation.'
    },
    {
      title: 'Loudness vs intensity distinction',
      a: 'Loudness is a physiological sensation, whereas sound intensity is an objective physical quantity.',
      r: 'Intensity is the energy passing per unit area per second (W/m²), which is measurable by instruments, whereas loudness depends on the ear\'s sensitivity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and objective energy flux versus subjective ear response distinguishes intensity from loudness.'
    },
    {
      title: 'Whispering gallery effect',
      a: 'In a whispering gallery with an elliptical ceiling, a faint whisper at one focus is heard clearly at the other focus.',
      r: 'All sound rays emitted from one focus of an ellipse reflect off the ceiling and converge precisely at the other focus.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the geometric reflection property of an ellipse focusing rays at the conjugate focus explains the effect.'
    },
    {
      title: 'Doppler effect for light and sound',
      a: 'The Doppler effect occurs for both mechanical sound waves and electromagnetic light waves.',
      r: 'Relative motion between the source and observer alters the rate at which wave crests are intercepted by the receiver.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and relative motion shifting observed frequency applies to all wave phenomena.'
    }
  ],

  current_electricity: [
    {
      title: 'Ohm\'s law validity condition',
      a: 'Ohm\'s law is strictly obeyed by a metallic wire only if its temperature remains constant.',
      r: 'The electrical resistance of a metallic conductor increases with an increase in temperature due to increased collision frequency of free electrons.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and temperature-dependent resistance explains why Ohm\'s law (constant V/I) holds only at constant temperature.'
    },
    {
      title: 'Superconductor resistance at critical temperature',
      a: 'A superconductor has exactly zero electrical resistance below its critical temperature.',
      r: 'At or below the critical temperature, electron pairs (Cooper pairs) flow through the crystal lattice without scattering.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and frictionless electron flow explains the complete vanishing of electrical resistance in superconductors.'
    },
    {
      title: 'EMF vs terminal potential difference',
      a: 'The terminal potential difference across a discharging cell is always less than its electromotive force (EMF).',
      r: 'A portion of the EMF is dropped across the cell\'s own internal resistance as \'lost volts\' (v = I·r).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Terminal voltage V = E - Ir, and since Ir > 0 for a discharging cell, V < E.'
    },
    {
      title: 'Internal resistance factors',
      a: 'The internal resistance of a chemical cell increases as the concentration of its electrolyte increases beyond a certain limit.',
      r: 'Higher concentration of electrolyte increases viscous drag on the ions and reduces ionic mobility.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and reduced ionic mobility in overly concentrated solutions increases internal resistance.'
    },
    {
      title: 'Series combination current',
      a: 'When multiple resistors of different resistances are connected in series, the same electric current flows through each resistor.',
      r: 'In a series circuit, there is only a single unbranched conductive path for the flow of charge (conservation of charge).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the single conductive path explains why current is uniform across all series elements.'
    },
    {
      title: 'Parallel combination voltage',
      a: 'When resistors are connected in parallel, the potential difference across each resistor is identical.',
      r: 'All resistors in a parallel circuit are connected across the same two common junction nodes.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and sharing the same two physical terminals ensures identical potential difference.'
    },
    {
      title: 'Equivalent resistance in parallel',
      a: 'The equivalent resistance of three resistors connected in parallel is always smaller than the resistance of the smallest individual resistor.',
      r: 'Connecting resistors in parallel increases the effective cross-sectional area available for current flow (1/R_p = 1/R₁ + 1/R₂ + 1/R₃).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and adding parallel branches increases conductance, yielding an equivalent resistance lower than the smallest branch.'
    },
    {
      title: 'Voltmeter high resistance requirement',
      a: 'An ideal voltmeter must have an infinitely large electrical resistance.',
      r: 'A voltmeter is connected in parallel with the circuit component and must draw negligible current to avoid altering the circuit voltage.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and zero current draw by high resistance ensures minimal loading error.'
    },
    {
      title: 'Ammeter low resistance requirement',
      a: 'An ideal ammeter must have zero electrical resistance.',
      r: 'An ammeter is connected in series in the circuit, so it must not add any extra resistance that would reduce the total circuit current.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and zero resistance prevents the ammeter from altering the current it is intended to measure.'
    },
    {
      title: 'Drift velocity of electrons',
      a: 'Even though electric current travels at almost the speed of light, the average drift velocity of free electrons in a copper wire is only a few millimeters per second.',
      r: 'Electric current is propagated by the rapid establishment of an electric field throughout the wire at nearly the speed of light.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the speed-of-light field setup explains instantaneous light-up despite slow physical electron drift.'
    },
    {
      title: 'Joule heating law current squared dependence',
      a: 'Doubling the current passing through a fixed resistor increases the rate of heat production by four times.',
      r: 'According to Joule\'s law of heating, the heat produced per second is directly proportional to the square of the current (H/t = I²R).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and H/t = I²R shows that doubling current (2I)² yields 4I²R, a fourfold increase.'
    },
    {
      title: 'Resistance wire stretching effect',
      a: 'If a wire of resistance R is stretched uniformly to double its original length, its new resistance becomes 4R.',
      r: 'When length doubles, the cross-sectional area halves to preserve constant volume, and R = ρ·l/A.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. R\' = ρ(2l)/(A/2) = 4(ρl/A) = 4R.'
    },
    {
      title: 'Thick connecting wires in laboratory',
      a: 'Connecting wires in an electrical laboratory are made of thick copper with low resistance.',
      r: 'Copper has very low resistivity, and large cross-sectional area minimizes lead resistance and unwanted voltage drops.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and thick copper minimizing parasitic lead resistance ensures accurate circuit measurements.'
    },
    {
      title: 'Rheostat variable resistance function',
      a: 'A rheostat is used in electrical circuits to smoothly vary the current without interrupting the circuit.',
      r: 'A rheostat adjusts the effective length of the resistance wire included in the circuit, thereby changing resistance (R ∝ l).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and sliding the wiper to vary effective wire length directly regulates current.'
    },
    {
      title: 'Electric power formulas',
      a: 'Electric power can be expressed as P = V·I = I²R = V²/R.',
      r: 'All three expressions are derived by substituting Ohm\'s law (V = IR) into the fundamental definition of power P = V·I.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and substituting V = IR and I = V/R into P = VI generates the three equivalent expressions.'
    },
    {
      title: 'Open circuit cell voltage',
      a: 'When a cell is in an open circuit (no current drawn), its terminal potential difference is exactly equal to its EMF.',
      r: 'In an open circuit, current I = 0, so the internal lost volts v = I·r = 0, giving V = E - 0 = E.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and V = E - Ir with I = 0 confirms that terminal voltage equals EMF in open circuit.'
    },
    {
      title: 'Resistance of alloys vs pure metals',
      a: 'Standard resistance coils and heating elements are made of alloys like manganin and nichrome rather than pure copper.',
      r: 'Alloys have much higher resistivity and negligible temperature coefficients of resistance compared to pure metals.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and high resistivity with temperature stability makes alloys ideal for standard resistors and heaters.'
    },
    {
      title: 'Short-circuit current hazard',
      a: 'Connecting a thick copper wire directly across the two terminals of a car battery can cause rapid overheating and fire.',
      r: 'The external resistance is nearly zero, so an enormous short-circuit current (I = E/r) flows, generating massive I²r heat inside the battery.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and near-zero load resistance causing massive current discharge explains the fire hazard.'
    },
    {
      title: 'Heating element glowing vs connecting wire',
      a: 'The nichrome heating element of an electric heater glows red-hot, while the copper connecting cord remains cool.',
      r: 'Nichrome has vastly higher resistance than copper; since both carry the same series current, I²R heat is concentrated in the nichrome.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and same series current with high R_nichrome concentrates Joule heating in the element.'
    },
    {
      title: 'Parallel combination for domestic appliances',
      a: 'Household electrical appliances are always connected in parallel across the mains supply.',
      r: 'In a parallel connection, each appliance receives the full rated mains voltage (220 V) and can be operated independently.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and full rated voltage plus independent switching explains why parallel wiring is universal in homes.'
    },
    {
      title: 'Internal resistance during charging',
      a: 'When a secondary cell is being recharged by an external DC charger, its terminal potential difference is greater than its EMF.',
      r: 'During charging, current enters the positive terminal, so the terminal voltage is given by V = E + I·r.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and reversing current direction through internal resistance gives V = E + Ir > E.'
    },
    {
      title: 'Resistance and length relationship',
      a: 'A 2-metre copper wire of diameter 1 mm has double the resistance of a 1-metre copper wire of the same diameter.',
      r: 'The electrical resistance of a conductor is directly proportional to its length for a constant cross-sectional area and material (R ∝ l).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and R ∝ l directly confirms that doubling length doubles resistance.'
    },
    {
      title: 'Resistance and cross-sectional area',
      a: 'A thin wire has greater resistance than a thick wire of the same material and length.',
      r: 'Resistance is inversely proportional to the cross-sectional area of the conductor (R ∝ 1/A).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and narrower cross-section offering more collision resistance per unit current confirms R ∝ 1/A.'
    },
    {
      title: 'Specific resistance (resistivity) unit',
      a: 'The SI unit of specific resistance (resistivity) is ohm-metre (Ω m).',
      r: 'Resistivity is given by ρ = R·A / l, with dimensions (Ω · m²) / m = Ω m.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dimensional analysis of ρ = RA/l yields ohm-metre.'
    },
    {
      title: 'Resistivity independent of geometry',
      a: 'If a wire is cut into two equal halves, the resistivity of each half remains unchanged.',
      r: 'Resistivity is an intrinsic property of the material and temperature, independent of dimensions like length or area.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and intrinsic material dependence explains why cutting does not alter resistivity.'
    },
    {
      title: 'Semiconductor resistance and temperature',
      a: 'The electrical resistance of semiconductors like silicon and germanium decreases as temperature rises.',
      r: 'Heating breaks covalent bonds, dramatically increasing the number of free electrons and holes available for conduction.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and negative temperature coefficient of resistance due to thermal carrier generation explains the decrease.'
    },
    {
      title: 'Fuse wire properties',
      a: 'An electric fuse wire should have high resistance and a low melting point.',
      r: 'High resistance generates rapid I²R heat during overcurrent, and low melting point ensures the wire melts quickly to break the circuit.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and rapid heat generation plus low melting threshold prevents wiring damage.'
    },
    {
      title: 'Current density as vector',
      a: 'Electric current is a scalar quantity, but current density is a vector quantity.',
      r: 'Electric current has a direction along the wire but does not obey vector addition laws, whereas current density has a defined spatial vector direction (J = I/A).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and failure to obey vector addition makes current a scalar, while current density J is a directional flux vector.'
    },
    {
      title: 'Work done in moving charge',
      a: 'The work done in moving a charge of 2 coulombs across a potential difference of 6 volts is 12 joules.',
      r: 'Potential difference is defined as work done per unit charge (V = W/Q), so W = Q·V = 2 × 6 = 12 J.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and W = QV mathematically confirms 12 J.'
    },
    {
      title: 'Cells in series EMF addition',
      a: 'Connecting three identical cells of EMF 1.5 V each in series produces a total battery EMF of 4.5 V.',
      r: 'In a series aiding arrangement, the total EMF is the algebraic sum of the individual EMFs (E_total = E₁ + E₂ + E₃).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and additive potential rise in series yields 1.5 + 1.5 + 1.5 = 4.5 V.'
    },
    {
      title: 'Cells in parallel total EMF',
      a: 'Connecting three identical 1.5 V cells in parallel produces an equivalent battery EMF of 1.5 V.',
      r: 'In a parallel connection of identical cells, the potential difference across the common terminals equals the EMF of a single cell.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and parallel nodes maintain the single cell EMF while increasing current capacity.'
    },
    {
      title: 'Filament lamp non-ohmic behavior',
      a: 'An incandescent tungsten filament bulb does not obey Ohm\'s law when operating from low to high voltage.',
      r: 'As the filament glows hotter, its temperature rises significantly, causing its resistance to increase non-linearly.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and non-constant temperature causing non-linear V-I curvature defines non-ohmic behavior.'
    },
    {
      title: 'Thermistor temperature sensor',
      a: 'A thermistor is an electrical component whose resistance changes drastically with small temperature variations.',
      r: 'Thermistors are made from semiconductor metal oxides that exhibit high temperature sensitivity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and semiconductor oxide properties explain high thermal sensitivity.'
    },
    {
      title: 'Carbon resistor color coding',
      a: 'Carbon composition resistors are marked with colored bands to indicate their resistance value and tolerance.',
      r: 'Printing readable numerical values on miniature cylindrical resistors is difficult and can rub off easily.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and durability and visibility on tiny cylindrical bodies justify color code rings.'
    },
    {
      title: 'Total internal resistance of parallel cells',
      a: 'Connecting n identical cells each of internal resistance r in parallel reduces the effective internal resistance to r/n.',
      r: 'In parallel connection, identical resistances combine as 1/r_eq = n/r, giving r_eq = r/n.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and parallel combination of n equal resistances reduces total internal resistance to r/n.'
    },
    {
      title: 'Conductance definition',
      a: 'The reciprocal of electrical resistance is called conductance, measured in siemens (S).',
      r: 'Conductance G = 1/R, with units ohm⁻¹ (or siemens).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the definition G = 1/R establishes siemens as the SI unit of conductance.'
    },
    {
      title: 'Conductivity definition',
      a: 'The reciprocal of resistivity is called electrical conductivity (σ = 1/ρ).',
      r: 'The SI unit of conductivity is ohm⁻¹ m⁻¹ or siemens per metre (S m⁻¹).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dimensional inversion of ohm-metre gives S m⁻¹.'
    },
    {
      title: 'Bird perched on high voltage wire',
      a: 'A small bird can perch safely on an uninsulated 11,000 V overhead power line without being electrocuted.',
      r: 'Both feet of the bird are on the same conductor at nearly the same electrical potential, so virtually zero potential difference exists across its body.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and negligible potential difference between adjacent feet means zero current flows through the bird.'
    },
    {
      title: 'Electrolyte conduction mechanism',
      a: 'Electricity is conducted through an electrolyte solution by both positive and negative ions.',
      r: 'In metallic conductors, electric current is carried exclusively by free electrons, whereas in electrolytes, mobile ions are the charge carriers.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and migration of both cations and anions explains electrolytic conduction.'
    },
    {
      title: 'Conservation of charge in Kirchhoff\'s junction rule',
      a: 'Kirchhoff\'s current rule (junction rule) states that the total current entering any junction equals the total current leaving it.',
      r: 'Electric charge can neither be created nor destroyed at a junction point (principle of conservation of electric charge).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and conservation of charge mathematically enforces zero net accumulation at any circuit node.'
    }
  ]
};
