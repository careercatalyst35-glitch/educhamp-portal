const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Sound";

const soundCases = [
  makeCase(
    chapter, 1, "Echo Sounding Against a Vertical Mountain Cliff", "Echo Distance and Persistence of Hearing",
    "A mountaineer stands in a quiet valley at a distance d from a tall vertical granite cliff on a cold morning when the speed of sound in air is v = 340 m/s. The mountaineer fires a starting pistol and hears a clear distinct echo reflected from the cliff exactly 0.80 seconds after firing.",
    "What is the distance d between the mountaineer and the cliff, and what is the minimum distance required to perceive a distinct echo in these conditions?",
    "Distance d = 272 m; Minimum distance = 34 m",
    "Distance d = 136 m; Minimum distance = 17 m",
    "Distance d = 68 m; Minimum distance = 17 m",
    "Distance d = 544 m; Minimum distance = 34 m",
    "B",
    "The total round-trip distance traveled by sound is 2d = v × t. Here, 2d = 340 m/s × 0.80 s = 272 m, so d = 136 m. Human ear persistence of hearing is Δt = 0.10 s. The minimum distance to distinguish an echo from the original sound is d_min = v × Δt / 2 = 340 × 0.10 / 2 = 17 m."
  ),
  makeCase(
    chapter, 2, "Echoes Between Two Parallel Vertical Cliffs", "Dual Echo Intervals Between Parallel Reflectors",
    "A surveyor stands at an asymmetric position between two parallel vertical cliffs separated by a distance D in air where the speed of sound is 330 m/s. When the surveyor claps loudly, the first echo is heard after 1.5 seconds and the second echo is heard after 2.5 seconds.",
    "What is the distance between the two cliffs D, and after how much time from the clap will the third echo be heard?",
    "D = 660 m; Third echo at 4.0 seconds",
    "D = 1320 m; Third echo at 5.0 seconds",
    "D = 660 m; Third echo at 3.0 seconds",
    "D = 330 m; Third echo at 4.0 seconds",
    "A",
    "Let distances to Cliff 1 and Cliff 2 be d1 and d2. Round trip 1: 2d1 = v × t1 => d1 = 330 × 1.5 / 2 = 247.5 m. Round trip 2: 2d2 = v × t2 => d2 = 330 × 2.5 / 2 = 412.5 m. Total distance D = d1 + d2 = 247.5 + 412.5 = 660 m. The third echo represents sound that reflects off Cliff 1 then Cliff 2 (or vice versa), traveling a total distance of 2(d1 + d2) = 2D; its time is t3 = t1 + t2 = 1.5 s + 2.5 s = 4.0 s."
  ),
  makeCase(
    chapter, 3, "Oceanographic Bathymetry Using SONAR Echo Sounding", "SONAR Principles and Ultrasonic Wave Selection",
    "An oceanographic survey vessel mapping the continental shelf uses a hull-mounted SONAR transducer emitting ultrasonic pulses at a frequency of 50 kHz. The speed of sound in seawater is measured as 1500 m/s. A pulse transmitted vertically downward returns as an echo from the ocean floor after 3.2 seconds.",
    "What is the depth of the ocean floor at this station, and why are ultrasonic waves preferred over audible sound waves in SONAR?",
    "Depth = 4800 m; ultrasonic waves are audible to deep-sea fish.",
    "Depth = 2400 m; ultrasonic waves have high frequency, short wavelength, can be focused into narrow directional beams, and suffer low absorption in water.",
    "Depth = 1200 m; ultrasonic waves travel five times faster than audible sound.",
    "Depth = 2400 m; ultrasonic waves travel as transverse waves in water.",
    "B",
    "Depth h = v × t / 2 = (1500 m/s × 3.2 s) / 2 = 2400 m. Ultrasonic waves (f > 20 kHz) have extremely short wavelengths, allowing them to form tight directional pencil beams with minimal diffraction spread. They also penetrate seawater with low attenuation and do not interfere with human audible communications."
  ),
  makeCase(
    chapter, 4, "Medical Ultrasound Imaging of Abdominal Organs", "Acoustic Impedance and Ultrasonic Non-Invasiveness",
    "A medical sonographer applies acoustic coupling gel to a patient's abdomen before scanning the liver with a 3.5 MHz piezoelectric ultrasound probe. The transducer measures the time delay and amplitude of echoes reflected from boundaries between different soft tissue layers.",
    "What is the function of the coupling gel, and why is ultrasound used instead of X-rays for prenatal fetal examinations?",
    "The gel sterilizes the skin; ultrasound is used because it charges fetal blood cells.",
    "The gel eliminates the thin air gap between transducer and skin (preventing 99.9% reflection due to impedance mismatch); ultrasound is non-ionizing mechanical radiation with zero carcinogenic risk to the fetus.",
    "The gel increases the sound velocity to 300,000 km/s; ultrasound is used because X-rays cannot penetrate skin.",
    "The gel dissolves grease; ultrasound produces thermal cauterization of tissues.",
    "B",
    "The acoustic impedance Z = ρv of air is ~400 Rayls, while skin is ~1.5 × 10⁶ Rayls. Without gel, almost 100% of the acoustic energy is reflected back at the air-skin boundary. Coupling gel matches the acoustic impedance, enabling smooth transmission. Ultrasound uses non-ionizing mechanical pressure waves, causing no DNA breaks or mutation risks, unlike ionizing X-rays."
  ),
  makeCase(
    chapter, 5, "Free Vibrations of a Tuning Fork in a Vacuum Bell Jar", "Natural Frequency and Free Vibrations",
    "A steel tuning fork marked '512 Hz' is struck against a rubber pad and held inside an airtight bell jar connected to a high-vacuum mechanical pump. As air is pumped out to a high vacuum, the acoustic sound ceases completely, but laser interferometry shows the tines still vibrating at exactly 512 Hz for an extended period.",
    "What determines the 512 Hz frequency of the tuning fork, and how does the vacuum affect its damping?",
    "The striking force determines 512 Hz; in vacuum it stops instantly.",
    "The natural frequency depends strictly on the physical dimensions, shape, density, and elastic modulus of the steel; in vacuum, the absence of air resistance eliminates viscous damping, allowing vibrations to persist much longer with constant frequency.",
    "The bell jar glass induces 512 Hz; the fork vibrates at a higher frequency in vacuum.",
    "Atmospheric pressure creates 512 Hz; in vacuum its frequency drops to zero.",
    "B",
    "A body set into motion and left to itself executes free vibrations at its intrinsic natural frequency, governed solely by its inertia and stiffness (dimensions, mass, and elasticity). When struck, the tines oscillate at 512 Hz regardless of strike amplitude. In a vacuum, air drag is removed, eliminating fluid friction damping so the oscillations decay extremely slowly."
  ),
  makeCase(
    chapter, 6, "Exponential Amplitude Decay in Damped Mechanical Vibrations", "Damped Vibrations and Energy Dissipation",
    "A simple pendulum consisting of a 100 g brass bob suspended by a 1.0 m light thread is set into oscillation in air with an initial amplitude of 10.0 cm. A motion sensor records its amplitude at subsequent intervals: after 20 cycles it is 6.5 cm, and after 50 cycles it is 2.5 cm, while the period remains constant at 2.0 seconds.",
    "What classification of vibration is demonstrated, and what happens to the mechanical energy of the pendulum?",
    "Forced vibration; energy is converted into gravitational mass.",
    "Damped vibration; mechanical energy is continuously dissipated as thermal energy in the air and pivot due to viscous friction, causing amplitude to decrease exponentially while frequency remains invariant.",
    "Resonant vibration; energy increases with time.",
    "Natural free vibration; energy is perfectly conserved indefinitely.",
    "B",
    "Vibrations executed in a resisting medium with continuously decreasing amplitude are damped vibrations. Frictional resistance of surrounding air and bending losses at the suspension convert the mechanical energy (kinetic + potential) into microscopic heat. Crucially, the period and frequency of oscillation remain essentially constant throughout the decay."
  ),
  makeCase(
    chapter, 7, "Forced Vibrations of a Laboratory Tabletop Under a Tuning Fork", "Forced Oscillations Under an External Driving Force",
    "A vibrating tuning fork of natural frequency 256 Hz is held in air; its sound is barely audible to students in the third row. When the stem of the vibrating fork is pressed firmly against the wooden surface of the large laboratory demonstration table, the sound suddenly becomes loud and clearly audible across the entire lecture theater.",
    "Why does the tabletop produce a much louder sound, and at what frequency does the tabletop vibrate?",
    "The tabletop vibrates at its own natural frequency of 1000 Hz, amplifying the energy.",
    "The vibrating fork exerts an external periodic force on the tabletop, forcing its large surface area to vibrate at 256 Hz; the larger surface area sets a much greater volume of air into motion.",
    "The tabletop undergoes resonance because its natural frequency is exactly 256 Hz.",
    "Sound travels through wood as light waves, which travel faster and louder.",
    "B",
    "This is an example of forced vibration. The tabletop is driven by the periodic force from the fork stem to vibrate at the driving frequency (256 Hz), not its own natural frequency. Because the tabletop has a massive surface area compared to the thin tines of the fork, it displaces a much greater volume of air molecules per cycle, transmitting far greater acoustic power (loudness)."
  ),
  makeCase(
    chapter, 8, "Acoustic Resonance in Two Identical Mounted Tuning Forks", "Acoustic Resonance Between Matching Frequencies",
    "Two identical tuning forks A and B, each having a natural frequency of 440 Hz, are mounted on separate hollow wooden resonance sound boxes placed 50 cm apart with their open ends facing each other. Tuning fork A is struck with a rubber mallet and allowed to vibrate for 5 seconds. The experimenter then touches the tines of fork A with their fingers to completely stop its vibration.",
    "What observation is made regarding tuning fork B, and what physical principle is demonstrated?",
    "Fork B remains completely silent because air cannot transmit energy across 50 cm.",
    "Fork B is heard vibrating clearly and loudly at 440 Hz; demonstrating acoustic resonance because the natural frequency of B matches the driving frequency emitted by A.",
    "Fork B vibrates at 880 Hz due to octave doubling.",
    "Fork B's wooden box splits open due to shockwaves.",
    "B",
    "Resonance is a special case of forced vibration where the frequency of the external periodic driving force matches the natural frequency of the receiver (f_A = f_B = 440 Hz). Periodic compressions and rarefactions transmitted through the air and sound boxes deliver impulses in exact phase with fork B's natural mode, causing a rapid transfer of energy and large-amplitude resonant oscillations."
  ),
  makeCase(
    chapter, 9, "Why Soldiers Must Break Step While Crossing a Suspension Bridge", "Structural Resonance and Bridge Collapse Hazard",
    "Military field manuals strictly mandate that a company of soldiers marching in cadence must break step (march out of rhythm) before crossing any suspension or truss bridge.",
    "What catastrophic physics phenomenon is this military order designed to prevent?",
    "Cadence marching wears out the asphalt paving of the bridge deck.",
    "If the frequency of periodic footfalls happens to match the natural mechanical frequency of the bridge structure, resonance will occur, causing violently increasing oscillation amplitudes that could exceed structural elastic limits and collapse the bridge.",
    "Synchronized marching creates high air pressure underneath the bridge that lifts it off its piers.",
    "Rhythmic vibrations demagnetize the steel suspension cables, making them brittle.",
    "B",
    "Every bridge has intrinsic natural modes and frequencies of vibration. If a column of soldiers marches in cadence at a stepping frequency matching one of the bridge's natural frequencies, the bridge enters mechanical resonance. Each synchronized footstep adds energy in phase, driving the oscillation amplitude to destructive levels, as occurred in the catastrophic collapse of the Broughton Suspension Bridge (1831)."
  ),
  makeCase(
    chapter, 10, "Resonance in an Air Column of a Variable-Length Resonance Tube", "Quarter-Wave Acoustic Resonance in a Closed Tube",
    "In a physics laboratory, a resonance tube apparatus consists of a vertical glass tube partially filled with water, forming a closed air column of adjustable length L. A tuning fork of frequency f = 512 Hz is vibrated over the open top of the tube. As the water level is slowly lowered, a first deafening boom of sound is heard when L = 16.0 cm, and a second loud resonance occurs when L = 49.0 cm. The speed of sound in the laboratory air is calculated.",
    "What is the acoustic condition for the first resonance in a closed pipe, and what is the experimental speed of sound?",
    "First resonance occurs at L ≈ λ/2; speed of sound = 164 m/s",
    "First resonance occurs at L + e = λ/4; wavelength λ = 2(L2 - L1) = 66.0 cm; speed of sound v = f × λ = 512 × 0.660 ≈ 338 m/s",
    "First resonance occurs at L = λ; speed of sound = 680 m/s",
    "First resonance occurs at L = 2λ; speed of sound = 512 m/s",
    "B",
    "An air column closed at one end by water forms a displacement node at the water surface and an antinode near the open top. The fundamental resonance occurs when the column length equals approximately one-quarter wavelength: L1 + e = λ/4. The second resonance occurs at L2 + e = 3λ/4. Subtracting eliminates end correction: L2 - L1 = λ/2 => λ = 2(49.0 - 16.0) = 66.0 cm = 0.66 m. Speed v = f × λ = 512 × 0.66 ≈ 338 m/s."
  ),
  makeCase(
    chapter, 11, "Chladni Plate Nodal Patterns and Resonant Modes", "Two-Dimensional Acoustic Resonant Modes and Chladni Figures",
    "A square brass plate is clamped at its center and sprinkled uniformly with fine dry silica sand. A violin bow is drawn vertically against one edge while a finger lightly touches a corner node. The plate emits a piercing musical tone, and the sand immediately bounces away from vigorously vibrating antinodal areas, gathering into intricate geometric white line patterns.",
    "What do the sand lines on a Chladni plate physically represent?",
    "Points of maximum vibration amplitude (antinodes).",
    "Nodal lines of zero vibration displacement where the plate remains stationary during resonance.",
    "Lines of maximum magnetic flux generated by the brass.",
    "Paths of sound waves escaping into the air.",
    "B",
    "Chladni figures demonstrate two-dimensional standing wave vibrational modes. The sand grains are violently thrown away from regions of maximum vertical oscillation (antinodes) and settle stably along lines where the displacement amplitude is identically zero (nodal lines). Different bowing points and nodal constraints produce distinct resonant frequencies and characteristic geometric patterns."
  ),
  makeCase(
    chapter, 12, "Rattling of Rearview Mirror at a Specific Engine RPM", "Mechanical Resonance Induced by Engine RPM",
    "A motorist notices that when the car idles at 800 RPM or accelerates at 3000 RPM, the car interior is quiet. However, whenever the engine tachometer passes exactly 1800 RPM (a piston firing frequency of 60 Hz), the interior rearview mirror vibrates violently and blurs, stopping as soon as the speed increases to 2000 RPM.",
    "What explains why the mirror shakes violently only at 1800 RPM and not at higher or lower speeds?",
    "The engine produces maximum horsepower at 1800 RPM.",
    "The natural mechanical frequency of the mirror mounting assembly is exactly 60 Hz; at 1800 RPM the engine vibration frequency matches this natural frequency, inducing resonant oscillation.",
    "At 1800 RPM, the car's alternator produces reverse electric current.",
    "Sound waves from the exhaust reflect off the windshield into the mirror.",
    "B",
    "The mirror assembly forms an elastic mechanical oscillating system with a specific natural resonant frequency (60 Hz). At 1800 RPM, the periodic mechanical vibrations transmitted through the chassis match 60 Hz. Under this resonance condition, maximum energy is transferred into the mirror, producing large visual oscillations. At other RPMs, the forced vibration is non-resonant and of negligible amplitude."
  ),
  makeCase(
    chapter, 13, "Loudness vs Intensity: Subjective Sensation vs Objective Measurement", "Loudness, Intensity, and Decibel Scale",
    "An acoustic engineer uses a calibrated sound level meter to measure two sound waves in an auditorium. Sound 1 has a measured physical intensity of I_1 = 10⁻⁴ W/m², while Sound 2 has an intensity of I_2 = 10⁻² W/m² (100 times greater intensity).",
    "What is the difference between loudness and intensity, and how many decibels louder is Sound 2 compared to Sound 1?",
    "Intensity is a subjective sensation; Sound 2 is 100 dB louder.",
    "Intensity is an objective physical quantity (energy per second per unit area, W/m²), whereas loudness is the subjective physiological sensation perceived by the ear; Sound 2 has a sound level 20 dB higher than Sound 1.",
    "Loudness and intensity are identical physical quantities measured in Joules; Sound 2 is 2 dB louder.",
    "Sound 2 is 10,000 dB louder by Weber-Fechner law.",
    "B",
    "Intensity is an objective, physically measurable quantity: I = P/A (W/m²), independent of the human ear. Loudness is subjective, depending on intensity and the ear's auditory sensitivity (Weber-Fechner law: L ∝ log₁₀ I). The difference in sound intensity level is Δβ = 10 log₁₀(I₂ / I₁) = 10 log₁₀(10⁻² / 10⁻⁴) = 10 log₁₀(100) = 10 × 2 = 20 dB."
  ),
  makeCase(
    chapter, 14, "Inverse Square Law of Sound Intensity in Open Air", "Sound Intensity Variation with Distance from a Point Source",
    "At an outdoor music festival, a sound engineer measures the acoustic intensity of a spherical point source loudspeaker at a distance of r1 = 10 m to be 0.16 W/m² in a free field without reflecting surfaces.",
    "What is the sound intensity at a distance of r2 = 40 m from the loudspeaker?",
    "0.08 W/m²",
    "0.04 W/m²",
    "0.01 W/m²",
    "0.005 W/m²",
    "C",
    "In a free open field, sound energy spreads out spherically across a surface area A = 4πr². Total acoustic power P is conserved, so intensity follows the inverse square law: I ∝ 1/r². Thus: I₂ / I₁ = (r₁ / r₂)² = (10 / 40)² = (1/4)² = 1/16. Therefore, I₂ = 0.16 W/m² / 16 = 0.01 W/m²."
  ),
  makeCase(
    chapter, 15, "Loudness Dependence on Amplitude of Vibration", "Intensity Proportionality to Square of Amplitude",
    "A drummer strikes a bass drum lightly, producing a vibration amplitude of A1 = 1.0 mm. Later, for a dramatic climax, the drummer strikes the drumhead with great force, increasing the vibration amplitude to A2 = 3.0 mm at the same fundamental pitch.",
    "By what factor does the acoustic energy intensity emitted by the drumhead increase?",
    "Increases by a factor of 3",
    "Increases by a factor of 6",
    "Increases by a factor of 9",
    "Increases by a factor of 27",
    "C",
    "The intensity of a sound wave is directly proportional to the square of the amplitude of vibration: I ∝ A² (specifically I = 2π²ρvf²A²). When the amplitude increases from 1.0 mm to 3.0 mm (a threefold increase), the intensity increases by (A₂ / A₁)² = (3 / 1)² = 9 times. This produces a vastly louder sound."
  ),
  makeCase(
    chapter, 16, "Pitch Variation Between Male Voice and Female/Child Voice", "Pitch and Fundamental Frequency",
    "A speech scientist analyzes voice recordings on an oscilloscope. The adult male voice has a fundamental frequency of 120 Hz, whereas the adult female voice has a fundamental frequency of 240 Hz and a child's voice has a fundamental frequency of 350 Hz.",
    "Which characteristic of sound distinguishes the higher-pitched female/child voice from the grave male voice, and why do their vocal cords differ?",
    "Loudness; male vocal cords are longer and thinner.",
    "Pitch; the pitch of a sound is determined by its frequency. Female and child vocal cords are shorter, thinner, and under greater tension, producing higher frequency vibrations and hence a shriller, higher-pitched sound.",
    "Timbre; male vocal cords vibrate with electromagnetic waves.",
    "Velocity; female sound travels faster through air than male sound.",
    "B",
    "Pitch is the sensation that allows sounds to be classified on a musical scale from low (grave/bass) to high (shrill/treble), and it depends directly on frequency (f). The vocal cords in adult males are thicker and longer (~17–25 mm), producing lower fundamental frequencies. Women and children have shorter, lighter vocal cords (~12–17 mm) that vibrate at higher frequencies, yielding higher pitch."
  ),
  makeCase(
    chapter, 17, "Quality or Timbre of Musical Instruments: Violin vs Flute", "Timbre, Harmonics, and Waveform",
    "A violinist and a flutist in an orchestra both play middle C (frequency f = 256 Hz) at the exact same loudness of 70 dB. Even with their eyes closed, an audience member can effortlessly distinguish the violin from the flute.",
    "Which characteristic of sound enables this identification, and what is its underlying physical basis?",
    "Velocity of sound; violin sound travels faster than flute sound.",
    "Quality (or Timbre); which is determined by the number, relative frequencies, and amplitudes of subsidiary harmonics (overtones) accompanying the fundamental note, resulting in a distinct complex waveform.",
    "Pitch; because the violin has a higher frequency than the flute.",
    "Loudness; because strings displace more air than open pipes.",
    "B",
    "Quality (timbre) is that subjective characteristic by which two musical notes of the same pitch (frequency) and loudness (intensity) can be distinguished. While both instruments play 256 Hz, a flute emits an almost pure tone with few weak upper harmonics, producing a smooth sine-like wave. A violin produces numerous rich, prominent odd and even harmonics, yielding a complex sawtooth-like waveform."
  ),
  makeCase(
    chapter, 18, "String Tension and Pitch in a Sonometer Wire", "Frequency Dependence on Tension: f ∝ √T",
    "A student tunes a sonometer wire of fixed length L = 50 cm. Initially, the wire is stretched by a suspended mass of M1 = 4.0 kg, vibrating in its fundamental mode at a frequency of f1 = 200 Hz. The student then increases the suspended mass to M2 = 16.0 kg while keeping the vibrating length constant.",
    "What will be the new fundamental frequency f2 of the sonometer wire?",
    "f2 = 100 Hz",
    "f2 = 400 Hz",
    "f2 = 800 Hz",
    "f2 = 50 Hz",
    "B",
    "The fundamental frequency of a stretched string is given by Mersenne's laws: f = (1 / 2L) × √(T / m), where T is the tension (T = Mg) and m is linear mass density. Thus, frequency is directly proportional to the square root of tension: f ∝ √T. When the hanging mass increases from 4 kg to 16 kg (a 4-fold increase in tension), the frequency increases by a factor of √4 = 2. Therefore, f₂ = 200 Hz × 2 = 400 Hz."
  ),
  makeCase(
    chapter, 19, "String Length and Pitch in a Sonometer Wire", "Frequency Dependence on Length: f ∝ 1/L",
    "A guitarist presses their finger against a guitar fret, shortening the vibrating length of an E-string from L1 = 64 cm to L2 = 48 cm while keeping the wire tension and linear density constant. The original open string frequency was f1 = 330 Hz.",
    "What is the new vibrating frequency f2 of the stopped guitar string?",
    "f2 = 247.5 Hz",
    "f2 = 440 Hz",
    "f2 = 660 Hz",
    "f2 = 165 Hz",
    "B",
    "By Mersenne's first law of strings, the fundamental frequency of vibration of a stretched wire is inversely proportional to its vibrating length: f ∝ 1/L (when tension T and mass per unit length m are held constant). Therefore: f₁ × L₁ = f₂ × L₂ => f₂ = f₁ × (L₁ / L₂) = 330 Hz × (64 cm / 48 cm) = 330 × (4 / 3) = 440 Hz (concert pitch A4)."
  ),
  makeCase(
    chapter, 20, "String Thickness / Linear Density and Pitch", "Frequency Dependence on Radius and Density: f ∝ 1/r",
    "A cello manufacturer constructs two strings of identical length L and made of the same steel alloy under the exact same tension T. String A has a radius of r_A = 0.5 mm, while String B has a radius of r_B = 1.0 mm (twice as thick).",
    "How does the fundamental frequency of String B compare to String A?",
    "String B vibrates at twice the frequency of String A.",
    "String B vibrates at half the frequency of String A.",
    "String B vibrates at four times the frequency of String A.",
    "Both strings vibrate at identical frequencies.",
    "B",
    "Linear mass density is m = πr²ρ. Substituting into Mersenne's formula yields f = (1 / 2Lr) × √(T / πρ), meaning frequency is inversely proportional to the radius (thickness) of the string: f ∝ 1/r. String B has twice the radius of String A, so its fundamental frequency is halved: f_B = f_A / 2. Thicker strings produce deeper, lower-pitched bass notes."
  ),
  makeCase(
    chapter, 21, "Speed of Sound in Air vs Steel vs Water", "Speed of Sound in Solids, Liquids, and Gases",
    "A demolition worker strikes a long continuous structural steel water pipeline with a sledgehammer at a distance of 1530 m from an observer. The observer places their ear against the steel pipe and also listens to the air.",
    "In what order does the observer receive the sound through steel (v_steel ≈ 5100 m/s), water inside the pipe (v_water ≈ 1500 m/s), and air (v_air ≈ 340 m/s)?",
    "Through air first (0.3 s), water second (1.0 s), steel last (4.5 s).",
    "Through steel first (0.3 s), water second (1.02 s), air last (4.5 s).",
    "All three arrive simultaneously at 1.5 seconds.",
    "Through water first because water is incompressible.",
    "B",
    "Speed of sound is governed by Newton-Laplace formula v = √(E/ρ), where E is elasticity modulus. Solids have vastly higher elastic moduli (Young's modulus Y) than liquids (bulk modulus K) and gases (adiabatic bulk modulus γP), far outweighing density differences. Speed in steel (~5100 m/s) > water (~1500 m/s) > air (~340 m/s). Travel times: t_steel = 1530/5100 = 0.3 s; t_water = 1530/1500 = 1.02 s; t_air = 1530/340 = 4.5 s."
  ),
  makeCase(
    chapter, 22, "Effect of Temperature on Speed of Sound in Air", "Temperature Dependence: v ∝ √T",
    "On a freezing winter day when ambient temperature is 0°C (273 K), the speed of sound in air is measured as 332 m/s. On a scorching summer afternoon in the same city, the air temperature rises to 40°C (313 K).",
    "What is the speed of sound at 40°C (using the temperature coefficient of 0.61 m/s per °C)?",
    "332.0 m/s",
    "356.4 m/s",
    "307.6 m/s",
    "400.0 m/s",
    "B",
    "The speed of sound in a gas is directly proportional to the square root of its absolute temperature: v ∝ √T. For small temperature changes from 0°C, the speed increases by approximately 0.61 m/s for each 1°C rise in temperature: v_t = v₀ + 0.61 × t. At 40°C: v₄₀ = 332 + (0.61 × 40) = 332 + 24.4 = 356.4 m/s."
  ),
  makeCase(
    chapter, 23, "Effect of Humidity on Speed of Sound in Air", "Moisture Content and Molar Mass of Air",
    "During the monsoon season, a weather station records that the relative humidity of air increases from 20% to 95% at a constant temperature of 30°C and atmospheric pressure of 1 atm.",
    "How does high humidity affect the speed of sound in air, and what is the underlying physical reason?",
    "High humidity decreases the speed of sound because water droplets create drag.",
    "High humidity increases the speed of sound because moist air has a lower density than dry air (water vapor molecular mass 18 g/mol is less than dry air 28.9 g/mol).",
    "Humidity has zero effect on sound speed because sound travels only in nitrogen.",
    "Sound speed drops to zero when humidity exceeds 80%.",
    "B",
    "Water vapor (H₂O) has a molecular weight of 18 g/mol, which is lighter than the effective molecular weight of dry air (~28.96 g/mol, predominantly N₂ and O₂). Adding moisture lowers the density ρ of the air mixture at constant pressure and temperature. By the Laplace formula v = √(γP/ρ), a decrease in density causes an increase in the speed of sound."
  ),
  makeCase(
    chapter, 24, "Effect of Pressure on the Speed of Sound in Air", "Invariance of Sound Speed with Atmospheric Pressure",
    "A mountaineer measures the speed of sound at sea level (pressure P = 76 cm Hg, temperature T = 20°C). The mountaineer then ascends to a high mountain plateau where atmospheric pressure drops by 30% to P = 53.2 cm Hg, but the temperature is artificially kept at the same 20°C.",
    "How does the speed of sound at the mountain plateau compare to that at sea level?",
    "It decreases by 30% because there are fewer air molecules.",
    "It remains completely unchanged because at constant temperature, pressure and density change in the exact same proportion (P/ρ = constant).",
    "It increases by 30% due to less atmospheric drag.",
    "Sound cannot propagate below 60 cm Hg.",
    "B",
    "According to the ideal gas law, P/ρ = RT/M. Substituting into Laplace's equation v = √(γP/ρ) gives v = √(γRT/M). This shows that the speed of sound in an ideal gas depends solely on temperature and gas composition, and is completely independent of pressure. When pressure drops at constant temperature, density decreases in the exact same proportion, leaving the ratio P/ρ and sound speed constant."
  ),
  makeCase(
    chapter, 25, "Echo from a Moving Ship Approaching a Cliff", "Echo Timing with Source Movement",
    "A cruise ship traveling at a constant speed of u = 20 m/s directly toward a vertical sea cliff sounds its foghorn. An echo from the cliff is heard by the ship's navigator after t = 4.0 seconds. The speed of sound in air is v = 340 m/s.",
    "What was the distance of the ship from the cliff at the moment the foghorn was sounded?",
    "680 m",
    "720 m",
    "640 m",
    "1360 m",
    "B",
    "Let the initial distance of the ship from the cliff be D. In t seconds, the ship moves toward the cliff by a distance x = u × t = 20 × 4.0 = 80 m. The sound travels to the cliff and back to the moving ship, covering a total distance: 2D - x = v × t. Thus: 2D - 80 = 340 × 4.0 = 1360 m => 2D = 1440 m => D = 720 m."
  ),
  makeCase(
    chapter, 26, "Acoustic Reflection in an Empty Hall vs Carpeted Auditorium", "Reverberation and Sound Absorbing Materials",
    "When a speaker talks in an unfurnished empty concrete hall with bare walls, speech sounds muddy, muffled, and unintelligible due to excessive overlapping echoes. When thick velvet draperies, plush carpet, and perforated acoustic ceiling tiles are installed, speech becomes crisp, clear, and perfectly intelligible.",
    "What acoustic defect was present in the empty hall, and how did furnishings eliminate it?",
    "Sound was undergoing total internal reflection; carpets cool the air.",
    "Excessive reverberation due to repeated reflections from hard non-porous surfaces; porous furnishings absorb sound energy, rapidly damping reflections and reducing reverberation time to an optimal level.",
    "The empty hall suffered from destructive resonance of carbon dioxide.",
    "Hard walls convert sound into ultrasonic waves.",
    "B",
    "Reverberation is the persistence of sound in an enclosure due to repeated multiple reflections from rigid, non-porous walls (concrete, plaster). If reverberation time is too long, syllables overlap, causing severe loss of speech clarity. Porous acoustic materials (carpets, draperies, perforated acoustic tiles) absorb acoustic energy via viscous air friction in pores, reducing reverberation time to an optimum value (~1 second)."
  ),
  makeCase(
    chapter, 27, "Bat Echolocation in Complete Darkness", "Ultrasonic Bio-Sonar in Insect Hunting",
    "A microbat hunting nocturnal moths in pitch-black forest glades emits rapid ultrasonic frequency sweeps ranging from 20 kHz to 120 kHz. The bat detects a tiny fluttering moth 3.4 meters away and intercepts it in mid-air.",
    "How does the bat determine the distance and wing-beat flutter of the insect?",
    "By detecting the heat emitted by the moth's wings.",
    "By calculating round-trip transit time delay (t = 2d/v) to measure distance and observing Doppler frequency shifts in returning echoes to detect wing flutter.",
    "By emitting laser beams from its eyes that reflect off moth wings.",
    "By sniffing the pheromones vibrating in the air.",
    "B",
    "Bats use biological sonar (echolocation). By timing the delay between emitting an ultrasonic pulse and receiving its echo, the bat's auditory cortex computes distance: d = v × t / 2. High ultrasonic frequencies provide millimeter-scale wavelengths needed to resolve tiny insects. Furthermore, Doppler frequency modulation in the returning echo reveals the target's relative velocity and fluttering wing-beat rate."
  ),
  makeCase(
    chapter, 28, "Flaw Detection in Steel Rails Using Ultrasonic Testing (UT)", "Non-Destructive Testing via Ultrasonic Pulse-Echo",
    "Railway maintenance engineers inspect a section of high-speed steel railway track for internal fatigue cracks. A handheld ultrasonic transducer sends a 4 MHz pulse into the top rail head. The screen displays a transmission pulse at t = 0 μs, an echo from an internal fatigue fissure at t = 20 μs, and the back-wall bottom echo at t = 50 μs. Speed of sound in steel is 5000 m/s.",
    "At what depth from the rail surface is the internal fatigue crack located?",
    "100 mm",
    "50 mm",
    "25 mm",
    "12.5 mm",
    "B",
    "In ultrasonic pulse-echo non-destructive testing (NDT), ultrasound reflects wherever there is an acoustic impedance mismatch, such as an internal air crack or void. Depth d = v × t / 2. Here v = 5000 m/s = 5 mm/μs. The crack echo arrives at t = 20 μs. Depth d = (5000 m/s × 20 × 10⁻⁶ s) / 2 = 0.05 m = 50 mm."
  ),
  makeCase(
    chapter, 29, "Acoustic Resonance in Stem Glasses (Breaking Glass with Voice)", "Resonance Threshold and Brittle Fracture",
    "A trained opera singer sings a sustained, piercing pure note directly into a delicate lead crystal wine glass. A strobe light reveals the circular rim of the glass deforming violently into an ellipse. When the singer increases volume while holding the exact note, the glass suddenly shatters into fragments.",
    "Under what precise physics condition does the wine glass shatter?",
    "When the singer sings at an ultrasonic frequency exceeding 50 kHz.",
    "When the singing frequency precisely matches the natural vibrational frequency of the wine glass and the acoustic power is high enough that resonant displacement exceeds the glass's ultimate tensile strain.",
    "When sound waves melt the lead crystal by acoustic cavitation.",
    "When air pressure inside the glass drops to a total vacuum.",
    "B",
    "A crystal glass has a high acoustic Q-factor (very low internal damping) and a sharp natural resonance frequency. When an acoustic wave strikes it at precisely this resonant frequency, energy accumulates continuously with each cycle. If the acoustic intensity is sufficiently high, the antinodal displacement amplitude grows until dynamic bending stresses exceed the ultimate tensile strength of brittle crystal, shattering it."
  ),
  makeCase(
    chapter, 30, "Sound Box Function in an Acoustic Guitar or Cello", "Forced Vibration of Soundboard and Air Volume",
    "A solid-body electric guitar unplugged from its amplifier produces an extremely faint plinking sound when strummed. In contrast, an acoustic guitar with a hollow wooden body and soundhole produces a rich, room-filling sound.",
    "What is the mechanical role of the acoustic guitar's hollow wooden body and soundboard?",
    "The hollow body creates electricity via piezoelectric wood fibers.",
    "The thin string has a tiny surface area and displaces very little air; the string vibrations are transferred via the bridge to the large wooden soundboard and trapped air volume, forcing them into forced vibration and displacing a massive volume of air.",
    "The wooden body stores sound waves for several seconds before releasing them.",
    "The guitar body speeds up the sound wave from 340 m/s to 1500 m/s.",
    "B",
    "A vibrating string has minute cross-sectional area and simply cuts through air with minimal displacement of air molecules, yielding very low acoustic intensity. The bridge couples the string's vibration to the expansive wooden top plate (soundboard) and internal air cavity. The soundboard acts as an acoustic transformer, forcing a large surface area of air into vibration, vastly amplifying radiated sound power."
  ),
  makeCase(
    chapter, 31, "Waveform Differences: Pure Musical Tone vs Industrial Noise", "Periodic vs Non-Periodic Complex Acoustic Waveforms",
    "An audio oscilloscope displays two sound inputs: Input A is produced by a tuning fork vibrating at 440 Hz, showing a smooth, regular, repeating sinusoidal wave. Input B is produced by an pneumatic jackhammer breaking asphalt, showing a completely irregular, jagged, non-repeating chaotic waveform.",
    "What distinguishes a musical sound from noise based on waveform and perception?",
    "A musical sound has an irregular waveform; noise has a strictly periodic waveform.",
    "A musical sound is produced by regular, periodic vibrations that produce a pleasing sensation on the ear; noise is produced by irregular, non-periodic, discontinuous vibrations that produce a harsh, jarring sensation.",
    "Noise travels twice as fast as musical sound in air.",
    "Musical sound has zero harmonics while noise has only one harmonic.",
    "B",
    "The distinction between musical sound and noise lies in periodicity and regularity. Musical sounds result from continuous, periodic oscillations of a vibrating source (strings, air columns, tines), displaying a repeating periodic waveform and pleasant auditory sensation. Noise is generated by sudden, non-periodic, chaotic pressure transients with no definite pitch or harmonic structure."
  ),
  makeCase(
    chapter, 32, "Whistling of Wind Through Overhead Transmission Cables", "Aeolian Tones and Vortex Shedding Resonance",
    "During a winter gale, high-voltage overhead transmission power cables strung between pylons emit a loud, eerie musical humming or whistling tone known as an Aeolian harp tone.",
    "What fluid dynamic phenomenon causes cables to vibrate and hum in the wind?",
    "Electricity leaking from the high voltage line into the wind.",
    "Periodic alternating vortex shedding (von Kármán vortex street) behind the cylindrical wire exerts alternating lift forces; when the shedding frequency matches the wire's natural harmonic, resonant singing occurs.",
    "Frictional heating between air molecules and aluminum conductors.",
    "Electromagnetic repulsion between wind ions and transmission electrons.",
    "B",
    "As air flows past a cylindrical cable at velocity U, alternating vortices peel off the top and bottom surfaces in a staggered wake known as a von Kármán vortex street. Each shed vortex induces an alternating transverse aerodynamic lift force on the wire at Strouhal frequency f = St × U / D. When this shedding frequency coincides with a natural structural mode of the wire, intense resonant Aeolian vibration occurs."
  ),
  makeCase(
    chapter, 33, "Acoustic Shadowing Behind a Concrete Noise Barrier", "Diffraction of Sound Waves vs Wavelength",
    "Highway authorities install a 4-meter-tall solid concrete noise barrier along an expressway adjacent to a residential suburb. Residents notice that low-frequency rumbling truck exhaust (100 Hz, λ ≈ 3.4 m) easily bends over the top of the barrier, while high-frequency tire hissing (4000 Hz, λ ≈ 0.085 m) is blocked effectively.",
    "Why does the sound barrier block high-pitched sound far more effectively than low-pitched rumble?",
    "High-frequency sound has greater photon mass and cannot lift over concrete.",
    "Diffraction is pronounced only when the wavelength is comparable to or larger than the obstacle height; long wavelengths (low pitch) readily diffract over the barrier edge, while short wavelengths (high pitch) travel rectilinearly and cast a sharp acoustic shadow.",
    "Concrete absorbs only high frequencies and reflects low frequencies.",
    "Low-frequency sound travels through the concrete by nuclear transmission.",
    "B",
    "Wave diffraction (bending around obstacles) is significant only when obstacle dimensions are comparable to the wavelength: λ ~ d. For low-frequency rumble (100 Hz), λ ≈ 3.4 m, which is comparable to the 4 m wall, causing extensive diffraction into the acoustic shadow zone. For high frequencies (4 kHz), λ ≈ 8.5 cm ≪ 4 m, so the waves travel in straight ray paths, casting a deep acoustic shadow."
  ),
  makeCase(
    chapter, 34, "Open Pipe vs Closed Pipe Musical Harmonics", "Harmonic Series of Open and Closed Acoustic Cylinders",
    "An organ builder constructs two organ pipes of the exact same physical length L = 1.0 m: Pipe A is open at both ends, while Pipe B is open at one end and closed at the other by a wooden stopper. Air temperature gives sound speed v = 340 m/s.",
    "What are the fundamental frequencies and available harmonic series of Pipe A and Pipe B?",
    "Pipe A: f1 = 170 Hz (all integer harmonics 1, 2, 3...); Pipe B: f1 = 85 Hz (only odd harmonics 1, 3, 5...)",
    "Pipe A: f1 = 85 Hz (only odd harmonics); Pipe B: f1 = 170 Hz (all harmonics)",
    "Pipe A and Pipe B both have f1 = 170 Hz and all harmonics.",
    "Pipe A has f1 = 340 Hz; Pipe B has f1 = 85 Hz.",
    "A",
    "For an open pipe of length L, antinodes form at both ends; fundamental λ = 2L, so f₁ = v / 2L = 340 / 2 = 170 Hz, and it supports all integer harmonics (f, 2f, 3f, 4f...). For a closed pipe, a node forms at the closed end and an antinode at the open end; fundamental λ = 4L, so f₁ = v / 4L = 340 / 4 = 85 Hz, and it produces only odd harmonics (f, 3f, 5f...), giving closed pipes a darker, hollower timbre."
  ),
  makeCase(
    chapter, 35, "Pitch Rise While Filling a Bucket with Water from a Tap", "Decreasing Air Column Length and Frequency Elevation",
    "A person places an empty tall plastic bucket under a running water tap. Even without looking at the bucket, the person can clearly tell when the bucket is nearly full because the pitch of the gurgling sound rises continuously from a deep hollow rumble to a shrill high pitch.",
    "Why does the pitch of the sound rise as the bucket fills with water?",
    "Water temperature drops as more water enters.",
    "The bucket acts as a closed acoustic tube; as water fills the bucket, the length L of the vibrating air column above the water decreases, and since frequency f ∝ 1/L, the pitch rises continuously.",
    "The velocity of sound in air increases due to water splash energy.",
    "The plastic walls of the bucket become thicker under water weight.",
    "B",
    "The air column between the rising water surface and the bucket lip behaves as an acoustic pipe closed at one end (water surface). The fundamental frequency of a closed pipe is f = v / 4L. As the bucket fills, the height of the air column L steadily decreases. Since frequency is inversely proportional to column length (f ∝ 1/L), the emitted fundamental resonant frequency and perceived pitch steadily rise."
  ),
  makeCase(
    chapter, 36, "Acoustic Tuning with a Variable Resonance Water Tube", "Determining End Correction in Resonance Experiments",
    "In an acoustic resonance experiment with a 500 Hz tuning fork, the first resonance length is measured at L1 = 16.2 cm and the second resonance length at L2 = 50.2 cm. The lab manual instructs the student to account for the antinode extending slightly beyond the open end of the tube by an 'end correction' e.",
    "What is the end correction e for this resonance tube apparatus?",
    "e = 0.8 cm",
    "e = 1.6 cm",
    "e = 2.4 cm",
    "e = 0.4 cm",
    "A",
    "At first resonance: L1 + e = λ/4. At second resonance: L2 + e = 3λ/4. Subtracting gives L2 - L1 = λ/2 => λ = 2(50.2 - 16.2) = 2 × 34.0 = 68.0 cm. Therefore λ/4 = 17.0 cm. Substituting into the first equation: 16.2 cm + e = 17.0 cm => e = 17.0 - 16.2 = 0.8 cm."
  ),
  makeCase(
    chapter, 37, "Auditory Threshold of Hearing and Pain in Human Ears", "Audible Frequency Band and Decibel Dynamic Range",
    "An audiologist tests a patient's hearing using an audiometer. The patient can hear tones between 20 Hz and 20,000 Hz, with maximum sensitivity around 3000–4000 Hz. The quietest audible sound at 1000 Hz corresponds to 0 dB (I₀ = 10⁻¹² W/m²), while sounds at 120 dB (I = 1 W/m²) cause acute physical discomfort and pain.",
    "By what factor does sound intensity increase between the threshold of hearing (0 dB) and the threshold of pain (120 dB)?",
    "120 times",
    "1,200 times",
    "1,000,000 times (10⁶)",
    "1,000,000,000,000 times (10¹²)",
    "D",
    "The decibel scale is logarithmic: β = 10 log₁₀(I / I₀). At the threshold of pain (120 dB): 120 = 10 log₁₀(I / I₀) => log₁₀(I / I₀) = 12 => I / I₀ = 10¹². The acoustic intensity at the threshold of pain is one trillion (10¹²) times greater than the threshold of hearing, demonstrating the astonishing dynamic range of the human auditory system."
  ),
  makeCase(
    chapter, 38, "Galton's Whistle for Dog Training", "Infrasonic, Sonic, and Ultrasonic Frequencies",
    "A dog trainer blows into a small metallic Galton's whistle. To the human handler and bystanders, the whistle produces no audible sound whatsoever, yet a search-and-rescue dog 200 meters away immediately perks its ears and runs to the trainer.",
    "Why can the dog hear the whistle while humans cannot?",
    "The whistle produces ultrasonic sound at frequencies above 20,000 Hz (e.g., 30 kHz); dogs can detect frequencies up to ~45,000 Hz, whereas human adult hearing is capped at 20,000 Hz.",
    "The whistle emits electromagnetic radio waves that stimulate dog fur.",
    "The whistle produces infrasonic sound at 5 Hz which travels only along the ground.",
    "Dogs hear sound through their paws via seismic shear waves.",
    "A",
    "Human hearing is limited to the sonic frequency range between 20 Hz and 20,000 Hz. Canines have evolved wider auditory bandwidth, hearing up to ~45 kHz. A Galton's whistle is an acoustic pipe with an adjustable resonant chamber calibrated to produce ultrasonic frequencies (~25–35 kHz). This frequency is inaudible to human ears but loud and clear to dogs."
  ),
  makeCase(
    chapter, 39, "Infrasonic Waves Emitted by Earthquakes and Tsunamis", "Infrasound Characteristics and Animal Early Warning",
    "Before the catastrophic arrival of giant tsunami waves following a sub-sea megathrust earthquake, coastal villagers observed wild elephants, birds, and zoo animals displaying extreme agitation and fleeing to high ground inland minutes before humans noticed anything unusual.",
    "What physical acoustic waves alerted the animals before the water hit the coast?",
    "Ultrasonic waves emitted by boiling seabed rocks.",
    "Infrasonic pressure waves (frequency f < 20 Hz) generated by massive seabed displacement; infrasound suffers minimal atmospheric attenuation and travels long distances, detectable by animals with low-frequency auditory adaptations.",
    "Electromagnetic gamma radiation leaking from underwater faults.",
    "Microscopic gravity pulses created by mantle shifting.",
    "B",
    "Infrasonic waves are acoustic pressure oscillations with frequencies below 20 Hz (often 0.1 to 10 Hz). Due to their very long wavelengths, infrasonic waves suffer virtually zero absorption in air or ground, propagating for hundreds of kilometers. Animals like elephants and birds possess specialized infrasound receptors (Pacinian corpuscles in feet and inner ear structures), alerting them to seismic disturbances."
  ),
  makeCase(
    chapter, 40, "Acoustic Reflection from a Concave Parabolic Whisper Dish", "Geometric Focusing of Reflected Acoustic Waves",
    "In a science museum, two large concave parabolic metallic dishes (diameter 2 m) are placed facing each other across an expansive exhibition hall 50 meters apart. A visitor placing their ear at the focal point of Dish A can clearly hear a tiny faint whisper spoken at the focal point of Dish B, while visitors standing in the middle of the hall hear nothing.",
    "What acoustic reflection principle explains this whisper gallery effect?",
    "Parabolic dishes convert acoustic pressure into electrical radio signals.",
    "Sound diverging from the focus of Dish B reflects as a parallel beam of sound; traversing the hall with minimal geometric divergence, it strikes Dish A and reflects inward, converging all acoustic energy into the focus of Dish A.",
    "Sound travels through the museum floor via subterranean resonance.",
    "Dish B amplifies sound using nuclear crystal resonance.",
    "B",
    "Sound waves obey the same laws of reflection as light (angle of incidence = angle of reflection). A parabolic reflector has the geometric property that rays originating at its focus reflect as a collimated parallel beam. This plane wave crosses the 50 m hall with negligible 1/r² spreading loss. Upon striking the receiving parabolic dish, the parallel wavefronts reflect and converge precisely onto its focal point."
  ),
  makeCase(
    chapter, 41, "Why Sound is Louder at Night than During the Day", "Atmospheric Temperature Inversion and Acoustic Refraction",
    "Residents living 3 kilometers from an active railway switching yard notice that during hot sunny afternoons the train horns are faint and barely audible, whereas on calm, clear cold nights the exact same train horns sound remarkably loud and close.",
    "What atmospheric acoustic phenomenon causes sound to carry much further at night?",
    "Air molecules stop moving at night, offering zero resistance to sound.",
    "At night, Earth's surface cools rapidly by radiation, creating a temperature inversion where cold air lies beneath warm air; because sound travels faster in warm air, acoustic wavefronts refract (bend) downward back toward the ground instead of escaping into the upper atmosphere.",
    "The absence of sunlight allows sound waves to double their frequency.",
    "Train horns use higher electrical voltage at night.",
    "B",
    "During the day, ground heating creates a lapse rate (hot air near ground, cold air aloft); since v ∝ √T, sound travels faster near the ground, bending wavefronts upward away from surface listeners. At night, radiative cooling produces a temperature inversion (cold air near ground, warmer air above). Sound speed increases with height, refracting sound rays continuously downward back toward the ground, acting as an atmospheric acoustic duct."
  ),
  makeCase(
    chapter, 42, "Determining the Frequency of a Tuning Fork Using a Sonometer", "Unison Tuning and Beat Elimination",
    "A student determines the unknown frequency f_x of a tuning fork using a sonometer wire under constant tension. The student places a tiny paper rider at the midpoint of the wire between two movable bridges. When the vibrating fork is held on the sonometer base and the bridge distance is adjusted to L = 25.0 cm, the paper rider vigorously flies off the wire.",
    "Why does the paper rider fly off at L = 25.0 cm, and what state has the wire achieved?",
    "The paper rider is blown off by wind from the student's breath.",
    "The wire is in resonance with the tuning fork, establishing a standing wave with maximum vibration amplitude (an antinode) at its center, which throws off the paper rider.",
    "The wire melts under the acoustic heat.",
    "The paper rider becomes electrically charged and repels the steel wire.",
    "B",
    "When the natural fundamental frequency of the wire segment matches the frequency of the tuning fork, acoustic resonance occurs. The wire oscillates with large standing-wave amplitude. At the midpoint between bridges, a displacement antinode forms. The vigorous vertical acceleration at the antinode easily exceeds gravitational acceleration (g), projecting the light paper rider into the air."
  ),
  makeCase(
    chapter, 43, "Acoustic Cavitation in Ultrasonic Cleaning Baths", "Cavitation Bubbles and Surface Degreasing",
    "A jeweler cleans an intricate gold necklace encrusted with polishing compound by immersing it in an ultrasonic cleaning tank filled with aqueous detergent solution vibrating at 40 kHz. Within 60 seconds, all dirt, oil, and grime are stripped away from microscopic crevices without scratching the metal.",
    "What physical phenomenon responsible for cleaning occurs in the liquid bath under high-intensity 40 kHz ultrasound?",
    "The liquid heats up to 500°C, melting all dirt away.",
    "Acoustic cavitation: alternating cycles of rarefaction create millions of microscopic vapor bubbles that violently collapse during compression cycles, generating localized high-energy shock waves and micro-jets that mechanically scrub surfaces.",
    "Ultrasonic waves dissolve gold into liquid colloid.",
    "The detergent molecules undergo nuclear fission, blasting dirt away.",
    "B",
    "High-frequency, high-intensity ultrasonic pressure waves produce intense alternating rarefactions (negative pressure) that tear the liquid apart, creating microscopic vapor-filled cavities (acoustic cavitation). During subsequent positive compression phases, these bubbles implode violently in nanoseconds, creating localized shock waves (pressures > 1000 atm and temperatures > 5000 K on a micro-scale) that blast contaminants off surfaces."
  ),
  makeCase(
    chapter, 44, "Echo Reflection Off a Seafloor Trench: Minimum Timing", "Depth Calculation with Angled Reflector",
    "A submarine at depth 200 m sends an ultrasonic pulse vertically down to the ocean floor. The pulse reflects from the seabed and is detected by the submarine's hydrophone after 1.6 seconds. The speed of sound in seawater is 1500 m/s.",
    "What is the total water depth from the ocean surface to the seabed at that position?",
    "1200 m",
    "1400 m",
    "2400 m",
    "600 m",
    "B",
    "The distance between the submarine and the seabed is d_sub = v × t / 2 = (1500 m/s × 1.6 s) / 2 = 1200 m. Since the submarine is already submerged at a depth of 200 m below the ocean surface, the total water depth from surface to seabed is H = 200 m + 1200 m = 1400 m."
  ),
  makeCase(
    chapter, 45, "Difference in Fundamental Pitch Between Open and Stopped Flutes", "Effect of Opening the Lower End of a Pipe",
    "A pan flute pipe closed at one end has a fundamental resonance frequency of 220 Hz (A3). The musician removes the bottom plug, converting the pipe into an open-ended acoustic pipe of the same length.",
    "What will be the new fundamental frequency of the pipe after opening the end?",
    "110 Hz",
    "440 Hz",
    "330 Hz",
    "220 Hz",
    "B",
    "For a closed pipe: f_closed = v / 4L = 220 Hz. For an open pipe of the same length L: f_open = v / 2L = 2 × (v / 4L) = 2 × f_closed. Therefore, the new fundamental frequency doubles to 2 × 220 Hz = 440 Hz (concert pitch A4, exactly one musical octave higher)."
  ),
  makeCase(
    chapter, 46, "Acoustic Damping Using Sorbothane and Viscoelastic Isolators", "Viscoelastic Damping and Kinetic Dissipation",
    "High-end audiophile turntables are mounted on hemispherical isolation feet made of Sorbothane (a viscoelastic polyurethane polymer) rather than rigid steel springs. When struck with an impact, vibrations die out in 0.05 seconds instead of ringing for 3 seconds.",
    "Why is viscoelastic Sorbothane superior to steel springs for damping mechanical vibrations?",
    "Sorbothane creates an anti-gravity field that levitates the turntable.",
    "Steel springs store energy elastically and oscillate for a long time; viscoelastic polymers possess high internal damping hysteresis, converting vibration mechanical energy directly into internal molecular friction heat rapidly.",
    "Sorbothane conducts acoustic vibrations into the electrical ground wire.",
    "Sorbothane reflects all sound waves back into the earth.",
    "B",
    "Purely elastic materials (like steel springs) store mechanical deformation energy with minimal loss, resulting in prolonged underdamped ringing. Viscoelastic materials exhibit high mechanical hysteresis: during deformation and recovery, internal long-chain polymer molecules slide against each other, dissipating the kinetic energy of vibration directly into microscopic thermal energy, achieving critical or near-critical damping."
  ),
  makeCase(
    chapter, 47, "Determination of Gunshot Position via Echo Timing", "Echo Distance Triangulation in Forest Clearing",
    "A forest ranger standing 510 m from a sheer rock cliff hears the direct crack of a poacher's rifle shot, and exactly 2.0 seconds later hears the echo of the shot reflected off the cliff. The speed of sound is 340 m/s. The poacher, the ranger, and the cliff lie along the same straight line.",
    "What was the distance between the poacher and the ranger when the rifle was fired?",
    "170 m",
    "340 m",
    "510 m",
    "680 m",
    "A",
    "Let the poacher be at distance x from the cliff, with the ranger between poacher and cliff (or poacher between ranger and cliff). The cliff is at 510 m from the ranger. The echo travels from poacher to cliff (x) and then cliff to ranger (510 m), total distance = x + 510. The direct sound travels directly from poacher to ranger: distance = |510 - x|. The time difference is Δt = [(x + 510) - (510 - x)] / v = 2x / v. 2.0 s = 2x / 340 => x = 340 m from the cliff. The distance between poacher and ranger is 510 m - 340 m = 170 m."
  ),
  makeCase(
    chapter, 48, "Loudness Variation with Density of Medium", "Acoustic Energy Transfer vs Medium Density",
    "A small mechanical electric bell is energized inside a sealed glass vessel under three different gaseous atmospheres at identical pressure and temperature: Gas 1 is hydrogen (density ρ_H ≈ 0.089 kg/m³), Gas 2 is air (ρ_air ≈ 1.20 kg/m³), and Gas 3 is sulfur hexafluoride (ρ_SF6 ≈ 6.13 kg/m³).",
    "In which gas does the bell sound noticeably the loudest to an external observer?",
    "Gas 1 (hydrogen)",
    "Gas 2 (air)",
    "Gas 3 (sulfur hexafluoride)",
    "The loudness is identical in all three gases.",
    "C",
    "The intensity of a sound wave is directly proportional to the density of the medium in which it travels: I = 2π²ρvf²A² (where ρ is medium density). A denser medium provides greater inertial coupling and acoustic impedance, allowing the vibrating surface to transfer more mechanical energy per cycle to surrounding gas molecules, resulting in higher acoustic intensity and perceived loudness."
  ),
  makeCase(
    chapter, 49, "Ultrasonic Welding of Thermoplastic Automotive Components", "Frictional Interfacial Melting via High-Frequency Sonotrodes",
    "In an automotive manufacturing plant, two molded plastic dashboard panels (polycarbonate) are joined using an ultrasonic welding horn (sonotrode) vibrating at 20 kHz with an amplitude of 30 μm under pneumatic clamping pressure. In 0.4 seconds, a permanent hermetic bond is formed with zero added glue or external heat.",
    "What causes the plastic to melt and fuse along the joint line during ultrasonic welding?",
    "High ultrasonic frequency excites electrons to produce plasma sparks.",
    "High-frequency cyclic shear stresses cause intense intermolecular friction and interfacial hysteretic viscoelastic dissipation, generating rapid localized heat that melts the plastic joint interface.",
    "Ultrasonic waves chemically alter polymer bonds into metallic bonds.",
    "Air trapped between panels undergoes adiabatic compression up to 2000°C.",
    "B",
    "Ultrasonic welding applies high-frequency mechanical vibrations (20–40 kHz) under normal clamping pressure. The cyclical microscopic shear strain causes rapid friction between mating surfaces and internal intermolecular viscoelastic hysteresis within the plastic. This generates intense localized heat at the joint boundary, exceeding the glass transition/melting temperature of the polymer in a fraction of a second."
  ),
  makeCase(
    chapter, 50, "Doppler Effect Observation on Passing Train Siren", "Frequency Shift with Relative Motion",
    "An observer stands on a railway station platform as an express train approaches at 30 m/s with its whistle sounding at 600 Hz. After passing the platform, the train recedes at the same 30 m/s. The speed of sound in air is 330 m/s.",
    "What frequencies does the stationary observer perceive as the train approaches and as it recedes?",
    "Approaching: 660 Hz; Receding: 550 Hz",
    "Approaching: 600 Hz; Receding: 600 Hz",
    "Approaching: 550 Hz; Receding: 660 Hz",
    "Approaching: 700 Hz; Receding: 500 Hz",
    "A",
    "By the Doppler effect formula for a moving source: f' = f × [v / (v ∓ v_s)]. While approaching: f'_app = 600 × [330 / (330 - 30)] = 600 × (330 / 300) = 600 × 1.1 = 660 Hz (higher pitch). While receding: f'_rec = 600 × [330 / (330 + 30)] = 600 × (330 / 360) = 600 × (11 / 12) = 550 Hz (lower pitch)."
  )
];

const targetPath = path.join(__dirname, 'questionBank', 'physics_case_sound.json');
fs.writeFileSync(targetPath, JSON.stringify(soundCases, null, 2), 'utf8');
console.log(`Saved ${soundCases.length} case studies for Sound to ${targetPath}`);
