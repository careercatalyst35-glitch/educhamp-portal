const fs = require('fs');
const path = require('path');
const { makeCase } = require('./case_helper');

const chapter = "Machines";

const machineCases = [
  makeCase(
    chapter, 1, "Electrician's Side-Cutting Pliers", "Class I Lever as a Force Multiplier",
    "An electrician uses heavy-duty lineman's pliers to shear through a thick 4.0 mm solid copper wire. The pliers measure 20 cm in total length, with the central pivot pin located 2.5 cm from the cutting blades and 17.5 cm from the grip handles. The electrician squeezes the handles with an effort of 150 N.",
    "What is the mechanical advantage (MA) and the cutting force exerted on the copper wire, assuming 100% efficiency?",
    "MA = 7.0; Cutting force = 1050 N",
    "MA = 0.143; Cutting force = 21.4 N",
    "MA = 8.0; Cutting force = 1200 N",
    "MA = 3.5; Cutting force = 525 N",
    "A",
    "Pliers are a Class I lever with the fulcrum between the effort and the load. Effort arm = 17.5 cm, Load arm = 2.5 cm. Mechanical Advantage MA = Effort arm / Load arm = 17.5 / 2.5 = 7.0. Cutting force (Load) = Effort × MA = 150 N × 7.0 = 1050 N. Because the effort arm is much longer than the load arm (MA > 1), pliers act as a powerful force multiplier."
  ),
  makeCase(
    chapter, 2, "Metal-Cutting Shears vs Tailor's Paper Scissors", "Effort Arm to Load Arm Design Ratios",
    "In a vocational workshop, students compare two cutting tools: Tool A (tinman's metal shears) with short blades of length 4 cm and long handles of length 24 cm; and Tool B (tailor's fabric shears) with long blades of length 20 cm and short handles of length 5 cm.",
    "What are the mechanical functions and classifications of Tool A and Tool B?",
    "Tool A is a force multiplier (MA = 6.0 > 1); Tool B is a speed/distance multiplier (MA = 0.25 < 1); both are Class I levers.",
    "Tool A is a speed multiplier; Tool B is a force multiplier; both are Class II levers.",
    "Tool A is a Class II lever; Tool B is a Class III lever.",
    "Both tools have MA = 1 and serve only to change the direction of force.",
    "A",
    "Both tools have their fulcrum (pivot pin) between the load and effort, making them Class I levers. In Tool A (metal shears), Effort arm (24 cm) > Load arm (4 cm), so MA = 24/4 = 6.0 > 1 (force multiplier needed to shear tough metal). In Tool B (tailor's scissors), Effort arm (5 cm) < Load arm (20 cm), so MA = 5/20 = 0.25 < 1, but VR = 0.25 (speed multiplier: a small movement of fingers produces a large, rapid cut in cloth)."
  ),
  makeCase(
    chapter, 3, "Quarry Crowbar Dislodging a Heavy Granite Block", "Class I Lever with Movable Fulcrum",
    "A stonemason uses a heavy steel crowbar of total length 1.5 m to pry up a granite slab weighing 3600 N. The mason rests the crowbar on a small wooden block acting as a fulcrum placed 15 cm (0.15 m) from the tip wedged under the slab, leaving an effort arm of 1.35 m.",
    "What minimum downward effort must the mason exert at the free end to lift the slab?",
    "400 N",
    "266.7 N",
    "600 N",
    "360 N",
    "A",
    "In a Class I lever: Load × Load arm = Effort × Effort arm. Load = 3600 N, Load arm = 0.15 m, Effort arm = 1.50 - 0.15 = 1.35 m. Effort = (Load × Load arm) / Effort arm = (3600 N × 0.15 m) / 1.35 m = 540 / 1.35 = 400 N. The crowbar provides a mechanical advantage of 1.35 / 0.15 = 9.0."
  ),
  makeCase(
    chapter, 4, "Heavy Claw Hammer Extracting a Timber Spike", "Curved Head Fulcrum Mechanics",
    "A carpenter uses a claw hammer to pull a 75 mm nail from an oak beam. The curved head acts as a pivot located 3.5 cm from the nail claw. The carpenter pulls the handle perpendicularly at a point 28 cm from the pivot, applying an effort of 70 N.",
    "What is the mechanical advantage of the hammer and the extracting force exerted on the nail?",
    "MA = 8.0; Extracting force = 560 N",
    "MA = 0.125; Extracting force = 8.75 N",
    "MA = 4.0; Extracting force = 280 N",
    "MA = 10.0; Extracting force = 700 N",
    "A",
    "The claw hammer functions as a Class I lever with the fulcrum at the curved head contact point. Effort arm = 28 cm, Load arm = 3.5 cm. MA = Effort arm / Load arm = 28 / 3.5 = 8.0. Pulling force on nail (Load) = Effort × MA = 70 N × 8.0 = 560 N."
  ),
  makeCase(
    chapter, 5, "Symmetrical Playground Seesaw", "Class I Lever with MA = 1",
    "Two children of equal mass 30 kg sit on opposite seats of a uniform playground seesaw of length 3.0 m pivoted exactly at its central midpoint (taking g = 10 m/s²).",
    "What is the class of lever, the mechanical advantage, and the primary function of this machine?",
    "Class I lever; MA = 1; neither multiplies force nor speed, but balances equal loads at equal distances.",
    "Class II lever; MA > 1; acts as a force multiplier.",
    "Class III lever; MA < 1; acts as a speed multiplier.",
    "Class I lever; MA = 2; doubles the weight of each child.",
    "A",
    "A seesaw has its fulcrum between the load and the effort (Class I lever). Because the fulcrum is at the exact center, Effort arm = Load arm = 1.5 m. Mechanical Advantage MA = 1.5 / 1.5 = 1.0, and Velocity Ratio VR = 1.0. It neither multiplies force nor speed, but serves as a balanced oscillating beam."
  ),
  makeCase(
    chapter, 6, "Rowing Scull Oar Action in Water", "Class I Lever as a Speed Multiplier",
    "An Olympic rower pulls the handle of an oar with a stroke displacement of 0.40 m inside the boat. The oar pivots about the rowlock on the boat's gunwale. The inboard handle length from rowlock to hands is 0.80 m, while the outboard shaft from rowlock to blade tip in the water is 2.40 m.",
    "What is the velocity ratio (VR) of the oar and the displacement of the blade tip in the water?",
    "VR = 0.333; Blade tip moves 1.20 m (speed multiplier)",
    "VR = 3.0; Blade tip moves 0.133 m (force multiplier)",
    "VR = 1.0; Blade tip moves 0.40 m",
    "VR = 0.50; Blade tip moves 0.80 m",
    "A",
    "The oar pivoted at the rowlock operates as a Class I lever (rowlock is fulcrum, hands apply effort, water resistance at blade is load). Effort arm = 0.80 m, Load arm = 2.40 m. Velocity Ratio VR = d_effort / d_load = Effort arm / Load arm = 0.80 / 2.40 = 1/3 ≈ 0.333. Displacement of blade = d_effort / VR = 0.40 / (1/3) = 1.20 m. Moving the hands 0.40 m drives the blade through 1.20 m, acting as a powerful speed multiplier."
  ),
  makeCase(
    chapter, 7, "Anatomy of the Human Head Nodding Motion", "Class I Anatomical Lever",
    "In human biomechanics, nodding the head forward and backward is analyzed as a lever system. The atlanto-occipital joint at the base of the skull serves as the fulcrum. The weight of the facial skull (acting downward through its center of gravity in front of the joint) represents the load, while the posterior neck extensor muscles (splenius capitis) pulling downward at the back of the skull provide the effort.",
    "Which class of lever does the human head nodding mechanism represent?",
    "Class I Lever, because the fulcrum (joint) lies between the load (face) and the effort (neck muscles).",
    "Class II Lever, because the facial skull lies in the middle.",
    "Class III Lever, because the neck muscles insert between the joint and the face.",
    "It is not a lever because biological systems do not obey the Principle of Moments.",
    "A",
    "In the nodding head, the atlanto-occipital joint acts as the fulcrum F, situated between the facial weight (Load L in front) and the contraction of the neck extensor muscles (Effort E behind). Since the fulcrum lies between the load and the effort, it is a textbook example of a Class I lever in human anatomy."
  ),
  makeCase(
    chapter, 8, "Nutcracker Cracking a Hard Walnut", "Class II Lever Force Multiplication",
    "A person uses a solid metal nutcracker of length 18 cm to crack a hard walnut. The walnut is placed in the crushing teeth located 3.0 cm from the end hinge pivot. The person squeezes the handle grips at a distance of 15 cm from the hinge with an effort of 60 N.",
    "What is the mechanical advantage of the nutcracker and the crushing force exerted on the walnut?",
    "MA = 5.0; Crushing force = 300 N",
    "MA = 0.20; Crushing force = 12 N",
    "MA = 6.0; Crushing force = 360 N",
    "MA = 2.5; Crushing force = 150 N",
    "A",
    "A nutcracker is a Class II lever with the fulcrum at the hinged tip, the load (walnut) in the middle, and the effort applied at the far end. Effort arm = 15 cm, Load arm = 3.0 cm. Mechanical Advantage MA = Effort arm / Load arm = 15 / 3.0 = 5.0. Crushing force on walnut (Load) = Effort × MA = 60 N × 5.0 = 300 N. In Class II levers, Effort arm > Load arm always, so MA > 1 (force multiplier)."
  ),
  makeCase(
    chapter, 9, "Gardening Wheelbarrow Carrying Moist Soil", "Class II Lever with Load Between Fulcrum and Effort",
    "A gardener transports 60 kg of wet soil in a single-wheeled wheelbarrow. The wheel axle acts as the fulcrum. The center of gravity of the loaded soil bucket is located 40 cm horizontally from the wheel axle. The gardener lifts the handles at a horizontal distance of 120 cm from the wheel axle (taking g = 10 m/s²).",
    "What upward lifting effort must the gardener exert on the handles to support the wheelbarrow?",
    "200 N",
    "600 N",
    "1800 N",
    "300 N",
    "A",
    "A wheelbarrow is a Class II lever where the load lies between the fulcrum (wheel axle) and the effort (handles). Load = 60 kg × 10 m/s² = 600 N. Load arm = 40 cm = 0.40 m. Effort arm = 120 cm = 1.20 m. By Principle of Moments: Effort × Effort arm = Load × Load arm => Effort × 1.20 = 600 × 0.40 = 240 => Effort = 240 / 1.20 = 200 N. MA = 1.20 / 0.40 = 3.0."
  ),
  makeCase(
    chapter, 10, "Crown Bottle Opener Prying Metal Cap", "Class II Lever Mechanics",
    "A restaurant server opens a glass soda bottle using a standard metal crown bottle opener of length 12 cm. The curved tip of the opener rests firmly on the center of the bottle cap (acting as the fulcrum), the hook catches under the metal crimped edge 1.5 cm from the tip (load), and the server lifts the outer handle 10.5 cm from the fulcrum with an effort of 20 N.",
    "What is the mechanical advantage of the bottle opener and the upward prying force applied to the cap edge?",
    "MA = 7.0; Prying force = 140 N",
    "MA = 0.143; Prying force = 2.86 N",
    "MA = 8.0; Prying force = 160 N",
    "MA = 5.0; Prying force = 100 N",
    "A",
    "In a bottle opener, the tip resting on the top of the cap acts as the fulcrum F. The load L (crimped edge being pried up) lies between the fulcrum and the effort E (handle). This is a Class II lever. Effort arm = 10.5 cm, Load arm = 1.5 cm. MA = 10.5 / 1.5 = 7.0. Upward force on cap = 20 N × 7.0 = 140 N."
  ),
  makeCase(
    chapter, 11, "Printing Shop Paper Guillotine Cutter", "Class II Industrial Lever",
    "A print shop uses a manual paper guillotine to trim thick reams of paper. The heavy steel blade is hinged at one end to the wooden cutting base. The paper ream is clamped 10 cm from the hinge, and the operator presses down on the handle grip located 60 cm from the hinge with an effort of 80 N.",
    "What is the mechanical advantage and the shearing force delivered onto the paper ream?",
    "MA = 6.0; Shearing force = 480 N",
    "MA = 0.167; Shearing force = 13.3 N",
    "MA = 7.0; Shearing force = 560 N",
    "MA = 5.0; Shearing force = 400 N",
    "A",
    "The paper guillotine is a Class II lever because the load (paper ream being sheared) lies between the fulcrum (end hinge) and the effort (operator's hand on handle). Effort arm = 60 cm, Load arm = 10 cm. MA = 60 / 10 = 6.0. Shearing force = Effort × MA = 80 N × 6.0 = 480 N."
  ),
  makeCase(
    chapter, 12, "Kitchen Citrus Lemon Squeezer", "Class II Lever Design",
    "A chef uses a handheld cast aluminum lemon squeezer. The squeezer has a perforated bowl hinged to a pressing lever. The half-lemon is placed in the bowl 4.0 cm from the hinge pivot. The chef squeezes the handles together at a distance of 16 cm from the hinge with a force of 50 N.",
    "What is the crushing force applied to extract juice from the lemon?",
    "200 N",
    "12.5 N",
    "250 N",
    "150 N",
    "A",
    "A lemon squeezer is a Class II lever: the fulcrum is at the hinge pin, the load (lemon in bowl) is in the middle, and the effort is applied at the handles. Effort arm = 16 cm, Load arm = 4.0 cm. MA = 16 / 4 = 4.0. Crushing force on lemon = Effort × MA = 50 N × 4.0 = 200 N."
  ),
  makeCase(
    chapter, 13, "Biomechanical Analysis of Raising on the Ball of the Foot", "Class II Anatomical Lever",
    "When a person of weight W = 600 N stands on tiptoe, the ball of the foot in contact with the floor acts as the fulcrum. The entire weight of the body acts downward through the tibia at the ankle joint located 12 cm from the ball of the foot. The powerful calf muscle (gastrocnemius) pulls upward on the heel bone (calcaneus) via the Achilles tendon located 18 cm from the ball of the foot.",
    "Which class of lever does this motion represent, and what muscular tension must the Achilles tendon exert?",
    "Class II Lever; Achilles tendon tension = 400 N",
    "Class III Lever; Achilles tendon tension = 900 N",
    "Class I Lever; Achilles tendon tension = 600 N",
    "Class II Lever; Achilles tendon tension = 600 N",
    "A",
    "The fulcrum F is at the ball of the foot. The load L (body weight through tibia ankle joint, 12 cm) is in the middle. The effort E (Achilles tendon pulling upward at heel, 18 cm) is at the opposite end. Because the load is between the fulcrum and the effort, it is a Class II lever. By Principle of Moments: Effort × 18 cm = 600 N × 12 cm => Effort = 7200 / 18 = 400 N."
  ),
  makeCase(
    chapter, 14, "Sugar Tongs Gripping a Sugar Cube", "Class III Lever Speed/Distance Multiplier",
    "A pair of spring-steel sugar tongs of length 15 cm is joined at the rear end. A user squeezes the sides with their thumb and forefinger at a distance of 5.0 cm from the joined end to pick up a sugar cube held between the front claw tips (15 cm from the joined end).",
    "What is the class of lever, the mechanical advantage, and the function of the sugar tongs?",
    "Class III Lever; MA = 0.333 (< 1); serves to gain distance/reach and delicate handling, not force.",
    "Class II Lever; MA = 3.0 (> 1); serves as a force multiplier.",
    "Class I Lever; MA = 1.0; changes the direction of force.",
    "Class III Lever; MA = 3.0; multiplies both force and speed simultaneously.",
    "A",
    "In sugar tongs, the fulcrum F is at the joined rear end. The effort E (fingers squeezing) is applied in the middle (5.0 cm), while the load L (sugar cube at tip, 15 cm) is at the far end. Because the effort lies between the fulcrum and the load, it is a Class III lever. Effort arm = 5.0 cm, Load arm = 15 cm. MA = 5.0 / 15 = 0.333 (< 1). In all Class III levers, MA < 1; they act as distance/speed multipliers."
  ),
  makeCase(
    chapter, 15, "Laboratory Dissection Forceps Handling Delicate Specimens", "Class III Lever in Precision Instruments",
    "A biology student uses fine-tipped tweezers (forceps) of length 12 cm to place an insect wing on a microscope slide. The student presses the spring arms with an effort of 2.0 N at a point 4.0 cm from the fused rear hinge.",
    "What gripping force is exerted at the tips on the specimen, assuming ideal elasticity?",
    "0.667 N",
    "6.0 N",
    "2.0 N",
    "4.0 N",
    "A",
    "Forceps are a Class III lever: Fulcrum at the rear fused hinge, Effort applied in the middle (Effort arm = 4.0 cm), and Load at the tips (Load arm = 12 cm). Mechanical Advantage MA = Effort arm / Load arm = 4.0 / 12 = 1/3 ≈ 0.333. Gripping force (Load) = Effort × MA = 2.0 N × (1/3) ≈ 0.667 N. The reduced force allows delicate specimen manipulation without crushing."
  ),
  makeCase(
    chapter, 16, "Human Forearm in Bicep Curl Exercise", "Class III Biomechanical Lever",
    "An athlete holds a 12 kg dumbbell in their palm with the forearm horizontal. The elbow joint acts as the fulcrum. The dumbbell is positioned 36 cm from the elbow. The biceps muscle tendon attaches to the radial tuberosity 4.0 cm from the elbow joint. Neglecting forearm weight and taking g = 10 m/s².",
    "What class of lever does the forearm represent, and what upward tensile force must the biceps muscle exert?",
    "Class III Lever; Biceps tension = 1080 N",
    "Class I Lever; Biceps tension = 120 N",
    "Class II Lever; Biceps tension = 13.3 N",
    "Class III Lever; Biceps tension = 120 N",
    "A",
    "The elbow joint is the fulcrum F. The effort E (biceps pulling up) is applied in the middle at 4.0 cm. The load L (dumbbell, 120 N) is at the hand at 36 cm. Since the effort lies between the fulcrum and the load, the forearm is a Class III lever. Effort × Effort arm = Load × Load arm => Effort × 4.0 cm = 120 N × 36 cm => Effort = 4320 / 4.0 = 1080 N. MA = 4/36 = 1/9 (< 1); the biceps sacrifices force to gain speed and range of hand movement."
  ),
  makeCase(
    chapter, 17, "Angler Casting with a Long Carbon-Fiber Fishing Rod", "Class III Lever as a Speed Multiplier",
    "A sport fisherman casts a lure using a 3.0-meter carbon-fiber fishing rod. The fisherman's lower hand on the rod butt acts as a stationary pivot (fulcrum). The upper hand applies a forward casting effort at a point 0.50 m above the butt, moving forward through a distance of 0.30 m in 0.10 seconds.",
    "What is the velocity ratio (VR) and the tip speed of the rod during the cast?",
    "VR = 0.167; Tip speed = 18 m/s (speed multiplier)",
    "VR = 6.0; Tip speed = 0.5 m/s (force multiplier)",
    "VR = 1.0; Tip speed = 3.0 m/s",
    "VR = 0.50; Tip speed = 6.0 m/s",
    "A",
    "The fishing rod is a Class III lever: Fulcrum at butt end, Effort applied in the middle (0.50 m), and Load (lure at tip, 3.0 m) at the far end. VR = Effort arm / Load arm = 0.50 / 3.0 = 1/6 ≈ 0.167. Tip displacement = d_effort / VR = 0.30 / (1/6) = 1.80 m. Tip velocity = 1.80 m / 0.10 s = 18 m/s. The rod drastically multiplies speed, launching the lure at high velocity."
  ),
  makeCase(
    chapter, 18, "Gardener Tossing Soil with a Long-Handled Shovel", "Class III Lever Dynamics in Earthmoving",
    "A gardener scoops 80 N of wet earth onto a shovel. The upper hand at the end of the 1.2 m shaft acts as a stationary pivot (fulcrum). The lower hand lifts upward at the midpoint of the shaft, 0.60 m from the top hand, while the soil rests in the blade at the far end (1.20 m from the top hand).",
    "What upward effort must the lower hand exert, and what class of lever is this?",
    "Class III Lever; Effort = 160 N",
    "Class II Lever; Effort = 40 N",
    "Class I Lever; Effort = 80 N",
    "Class III Lever; Effort = 80 N",
    "A",
    "The fulcrum is the upper hand. The effort is exerted in the middle by the lower hand (Effort arm = 0.60 m). The load is at the blade tip (Load arm = 1.20 m). Effort lies between fulcrum and load, so it is a Class III lever. Effort × Effort arm = Load × Load arm => Effort × 0.60 m = 80 N × 1.20 m = 96 => Effort = 96 / 0.60 = 160 N. MA = 0.60 / 1.20 = 0.5 (< 1)."
  ),
  makeCase(
    chapter, 19, "Domestic Floor Sweeping Broom", "Class III Lever for Rapid Floor Coverage",
    "A person sweeps a tiled floor using a long broom. The upper hand holding the top of the handle acts as a pivot. The lower hand exerts a sweeping force 40 cm down the handle, moving back and forth through a distance of 15 cm. The broom bristles touch the floor 120 cm from the top hand.",
    "How far do the broom bristles sweep across the floor, and what class of lever is this?",
    "Class III Lever; Bristles sweep 45 cm",
    "Class I Lever; Bristles sweep 15 cm",
    "Class II Lever; Bristles sweep 5 cm",
    "Class III Lever; Bristles sweep 120 cm",
    "A",
    "The top hand is the fulcrum. The lower hand in the middle applies effort (Effort arm = 40 cm). The bristles on the floor represent the load (Load arm = 120 cm). Because effort is in the middle, it is a Class III lever. Velocity Ratio VR = Effort arm / Load arm = 40 / 120 = 1/3. Bristle sweep distance = Hand displacement / VR = 15 cm / (1/3) = 45 cm. It multiplies distance and speed for efficient sweeping."
  ),
  makeCase(
    chapter, 20, "Fireplace Coal Tongs Handling Hot Embers", "Class III Lever for Thermal Safety",
    "A homeowner uses a 40 cm pair of spring steel coal tongs to lift a glowing hot charcoal briquette weighing 10 N from a fireplace. The homeowner's hand squeezes the tongs at a point 10 cm from the rear joined pivot.",
    "What muscular squeezing force must the homeowner exert, and why is this machine used if it does not multiply force?",
    "Squeezing force = 40 N; used for safety and reach to keep hands away from extreme heat.",
    "Squeezing force = 2.5 N; used as a force multiplier.",
    "Squeezing force = 10 N; used only to change direction of force.",
    "Squeezing force = 100 N; used to crush the coal into powder.",
    "A",
    "Coal tongs are a Class III lever: Fulcrum at rear join, Effort in middle at 10 cm, Load at tip at 40 cm. Effort × 10 cm = 10 N × 40 cm => Effort = 400 / 10 = 40 N. MA = 10/40 = 0.25 (< 1). Although it requires 40 N of effort to lift a 10 N ember, the machine is invaluable because it extends reach by 40 cm, safely protecting the operator from burns."
  ),
  makeCase(
    chapter, 21, "Single Fixed Pulley for Lifting Water from a Well", "Velocity Ratio and Direction of Effort",
    "A villager draws water from a 12-meter-deep well using a single fixed pulley attached to an overhead wooden beam. The bucket of water weighs 150 N. Because of axle friction and the weight of the rope, the villager must pull downward with an effort of 180 N to raise the bucket at constant speed.",
    "What are the Velocity Ratio (VR), Mechanical Advantage (MA), and Efficiency (η) of this single fixed pulley?",
    "VR = 1; MA = 0.833; Efficiency = 83.3%",
    "VR = 2; MA = 1.667; Efficiency = 83.3%",
    "VR = 1; MA = 1.200; Efficiency = 120%",
    "VR = 0.833; MA = 1.0; Efficiency = 100%",
    "A",
    "For a single fixed pulley, the rope moves downward by the same distance that the bucket rises, so Velocity Ratio VR = d_effort / d_load = 1. Mechanical Advantage MA = Load / Effort = 150 N / 180 N = 0.833. Efficiency η = (MA / VR) × 100 = (0.833 / 1) × 100 = 83.3%. Although MA < 1, the single fixed pulley is used because it allows the operator to pull downward conveniently, using their own body weight."
  ),
  makeCase(
    chapter, 22, "Single Movable Pulley on a Construction Site", "Force Multiplication with Ideal vs Real Pulley",
    "Construction workers lift a pallet of mortar weighing 400 N using a single movable pulley supported by two vertical segments of rope. The free end of the rope is pulled vertically upward. The movable pulley block itself has a mass of 4.0 kg (weight = 40 N), and rope friction accounts for another 10 N of resistance.",
    "What is the Velocity Ratio (VR) and the actual upward effort required to lift the mortar?",
    "VR = 2; Effort = 225 N",
    "VR = 1; Effort = 450 N",
    "VR = 2; Effort = 200 N",
    "VR = 4; Effort = 112.5 N",
    "A",
    "In a single movable pulley, when the load rises by distance x, both rope segments shorten by x, so the effort must move by 2x; thus VR = 2. Total upward tension from 2 segments must lift the load (400 N) + pulley weight (40 N) + overcome friction (10 N) = 450 N. Effort in one rope segment E = 450 N / 2 = 225 N. MA = 400 / 225 ≈ 1.78."
  ),
  makeCase(
    chapter, 23, "Compound System of Three Movable Pulleys and One Fixed Pulley", "Exponential Mechanical Advantage 2^n",
    "An engineer rigs a heavy-lift mechanism consisting of n = 3 movable pulleys, each suspended from an overhead ceiling by its own separate cord, with the final cord passing over a single fixed pulley to allow downward pulling. The load L = 1600 N is attached to the lowest movable pulley.",
    "Assuming an ideal system (frictionless with negligible pulley weight), what is the Velocity Ratio (VR) and the required effort E?",
    "VR = 8 (2³); Effort = 200 N",
    "VR = 6 (2 × 3); Effort = 266.7 N",
    "VR = 4; Effort = 400 N",
    "VR = 16 (2⁴); Effort = 100 N",
    "A",
    "In a system with n movable pulleys each connected to separate cords, each movable pulley halves the effort required. The velocity ratio is given by VR = 2^n. For n = 3: VR = 2³ = 8. In an ideal system (η = 100%, MA = VR = 8): Effort E = Load / VR = 1600 N / 8 = 200 N."
  ),
  makeCase(
    chapter, 24, "Four-Pulley Block and Tackle Crane Rigging", "Standard Block and Tackle System VR = n",
    "A block and tackle pulley system is assembled with a total of 4 pulleys: two sheaves in the upper fixed block and two sheaves in the lower movable block. The tackle rope is tied to the upper fixed block, threaded alternately between blocks, and pulled downward from the final sheave.",
    "What is the Velocity Ratio (VR) of the system, and how far must the effort rope be pulled to raise a 1000 N engine block by 2.0 meters?",
    "VR = 4; Effort rope must be pulled 8.0 meters",
    "VR = 2; Effort rope must be pulled 4.0 meters",
    "VR = 5; Effort rope must be pulled 10.0 meters",
    "VR = 4; Effort rope must be pulled 2.0 meters",
    "A",
    "In a standard block and tackle system with total number of pulleys n = 4, the Velocity Ratio VR equals n (VR = 4) when the effort is pulled downward. VR = d_effort / d_load => 4 = d_effort / 2.0 m => d_effort = 4 × 2.0 m = 8.0 meters."
  ),
  makeCase(
    chapter, 25, "Five-Pulley Block and Tackle System Pulled Downward", "Even vs Odd Pulley Distribution",
    "A ship's boathouse uses a 5-pulley block and tackle system to hoist small motorboats. The upper fixed block contains 3 pulleys, while the lower movable block contains 2 pulleys. The rope is anchored to the lower movable block and passes over the top pulley so the effort is pulled vertically downward.",
    "What is the Velocity Ratio (VR) of this 5-pulley system, and what is its mechanical advantage if its efficiency is 80%?",
    "VR = 5; MA = 4.0",
    "VR = 6; MA = 4.8",
    "VR = 5; MA = 5.0",
    "VR = 4; MA = 3.2",
    "A",
    "Total number of pulleys n = 5 (3 in fixed block, 2 in movable block). When the rope is pulled downward from the fixed block, the number of supporting rope segments carrying the lower block is 5, so VR = 5. Efficiency η = (MA / VR) × 100 => 80 = (MA / 5) × 100 => MA = (80 × 5) / 100 = 4.0."
  ),
  makeCase(
    chapter, 26, "Five-Pulley Block and Tackle Pulled Upward", "Effort Pulled Upward from Lower Block VR = n + 1",
    "A specialized rescue tackle uses 2 pulleys in the upper fixed block and 3 pulleys in the lower movable block. The hauling line emerges from a sheave in the lower movable block and is pulled vertically upward by rescuers on a platform.",
    "What is the Velocity Ratio (VR) of this system when the effort is directed upward?",
    "VR = 6 (the hauling line itself directly supports the load)",
    "VR = 5",
    "VR = 4",
    "VR = 3",
    "A",
    "When the effort line emerges from the lower movable block and is pulled upward in the direction of load motion, the effort tension itself directly helps support the load. The number of supporting strands becomes n + 1 (or total sheaves in path carrying upward tension = 6). Thus, VR = 6."
  ),
  makeCase(
    chapter, 27, "Effect of Lower Block Weight on Pulley Efficiency", "Efficiency Equation η = 1 - (w / nE)",
    "A 4-pulley block and tackle system (VR = 4) has a heavy steel lower block of weight w = 100 N. The system is tested under two different loads: Load 1 = 300 N, and Load 2 = 1900 N. Assuming friction is negligible so that Effort E = (L + w) / 4.",
    "What is the efficiency of the pulley system under Load 1 compared to Load 2?",
    "Under Load 1: η = 75%; Under Load 2: η = 95%; efficiency increases with heavier load.",
    "Under Load 1: η = 95%; Under Load 2: η = 75%; efficiency decreases with heavier load.",
    "Efficiency is strictly 100% under both loads because there is no friction.",
    "Efficiency is 50% under both loads because of pulley weight.",
    "A",
    "For Load 1 (300 N): Effort E1 = (300 + 100)/4 = 100 N. MA1 = 300/100 = 3.0. Efficiency η1 = MA1/VR = 3.0/4 = 75%. For Load 2 (1900 N): Effort E2 = (1900 + 100)/4 = 500 N. MA2 = 1900/500 = 3.8. Efficiency η2 = MA2/VR = 3.8/4 = 95%. This proves that as the load increases, the relative fraction of effort wasted in lifting the lower block (w / nE) decreases, causing efficiency to rise."
  ),
  makeCase(
    chapter, 28, "Tension Distribution in a Four-Pulley Tackle", "String Tension Equilibrium L = nT",
    "In an ideal 4-pulley block and tackle system lifting an engine weighing 1200 N at constant speed, a continuous light rope is reeved through all four pulleys, and the effort is applied downward at the free end.",
    "What is the tension T in each of the four supporting rope segments, and what is the applied effort E?",
    "Tension T = 300 N in all segments; Effort E = 300 N",
    "Tension T = 1200 N in all segments; Effort E = 1200 N",
    "Tension T = 600 N in two segments, 0 N in others; Effort E = 300 N",
    "Tension T = 150 N in all segments; Effort E = 600 N",
    "A",
    "In an ideal continuous rope with frictionless pulleys, the tension T is uniform throughout the entire length of the rope. Since there are 4 rope segments supporting the lower block and load, total upward force = 4T. For equilibrium: 4T = Load = 1200 N => T = 300 N. The applied effort E at the free end is equal to the string tension: E = T = 300 N."
  ),
  makeCase(
    chapter, 29, "Rusty Pulley Axles and Invariant Velocity Ratio", "MA Decreases While VR Remains Constant",
    "A warehouse block and tackle system with 4 pulleys was tested when brand new, exhibiting MA = 3.6 and VR = 4 (η = 90%). After five years in a humid maritime climate, rust forms on the internal steel pin bushings, increasing rotational friction substantially.",
    "How are the Mechanical Advantage (MA) and Velocity Ratio (VR) affected by the rust?",
    "MA decreases (e.g. to 2.8) because more effort is required, while VR remains strictly 4 because VR depends solely on geometric geometry.",
    "Both MA and VR decrease proportionally.",
    "VR decreases while MA remains constant.",
    "Both MA and VR remain constant because machines have fixed ratings.",
    "A",
    "Velocity Ratio VR is a purely geometric property determined by the number of pulleys and the reeving configuration of the rope (d_effort / d_load). It cannot be altered by friction or wear. In contrast, Mechanical Advantage MA = Load / Effort depends directly on resistive losses; friction demands a larger effort for the same load, reducing MA and efficiency."
  ),
  makeCase(
    chapter, 30, "Stiff Wire Rope Bending Resistance in Heavy Winches", "Frictional Dissipation without VR Shift",
    "A maritime salvage tug uses an 8-sheave block and tackle strung with thick, stiff multi-strand steel wire rope of diameter 38 mm to raise a sunken barge. Engineers calculate that bending the stiff steel cable around each sheave requires substantial internal flexural work.",
    "What effect does this cable bending stiffness have on the hoist system's mechanical parameters?",
    "It decreases the system's efficiency and mechanical advantage, while the velocity ratio remains strictly 8.",
    "It increases the velocity ratio to 10.",
    "It increases mechanical advantage by gripping the sheaves.",
    "It has zero effect because wire rope is made of steel.",
    "A",
    "Bending stiff wire rope around sheaves absorbs mechanical energy due to internal inter-wire friction and hysteresis. This increases the total work input required, reducing the mechanical advantage and efficiency. However, the geometric distance ratio (VR) remains unchanged at exactly 8."
  ),
  makeCase(
    chapter, 31, "Fundamental Distinction Between MA and VR", "Physical Meaning of MA vs VR",
    "An ICSE physics student is asked to differentiate between Mechanical Advantage (MA) and Velocity Ratio (VR) of an inclined plane used to push a heavy crate onto a ramp.",
    "Which statement correctly highlights the fundamental physical distinction between MA and VR?",
    "VR is the ratio of effort displacement to load displacement and depends only on machine dimensions; MA is the ratio of load to effort and is affected by friction.",
    "MA is always greater than VR in real machines.",
    "VR changes when friction increases, while MA remains constant.",
    "MA has units of Newtons, while VR is dimensionless.",
    "A",
    "Velocity Ratio VR = d_effort / d_load is a purely kinematic, dimensionless ratio governed strictly by the geometry and dimensions of the machine. Mechanical Advantage MA = Load / Effort is a dynamic force ratio that reflects real-world operational performance; due to unavoidable friction, MA < VR in all real practical machines."
  ),
  makeCase(
    chapter, 32, "The Myth of the 100% Efficient Perpetual Machine", "Conservation of Energy and Real Machine Limits",
    "An inventor files a patent application claiming to have designed a compound multi-lever and gear machine that requires an effort of only 10 N to raise a load of 1000 N, while moving the effort through 80 meters to raise the load by 1.0 meter.",
    "Why will the patent examiner immediately reject this claim on fundamental physical grounds?",
    "It claims an efficiency of 125% (Work output = 1000 J > Work input = 800 J), which directly violates the Law of Conservation of Energy.",
    "The velocity ratio is too low for the claimed load.",
    "Machines cannot have a mechanical advantage greater than 50.",
    "Effort cannot move faster than 10 m/s.",
    "A",
    "Work input = Effort × d_effort = 10 N × 80 m = 800 J. Work output = Load × d_load = 1000 N × 1.0 m = 1000 J. Efficiency = (Work output / Work input) = 1000 / 800 = 125%. A machine cannot create energy out of nothing; the Law of Conservation of Energy dictates that Work output ≤ Work input (η ≤ 100%). Any claim of η > 100% describes an impossible perpetual motion machine."
  ),
  makeCase(
    chapter, 33, "Why Machine Efficiency is Always Strictly Less Than 100%", "Sources of Energy Dissipation in Real Machines",
    "A student in a mechanics lab performs multiple tests on levers, inclined planes, and pulley systems, consistently observing that efficiency η is always between 60% and 92%, but never 100%.",
    "What are the two primary physical causes preventing any real machine from achieving 100% efficiency?",
    "Friction between moving mechanical parts, and the weight of the moving components of the machine itself.",
    "Gravitational variation and atmospheric buoyancy.",
    "Thermal expansion of metallic components and air resistance only.",
    "Electromagnetic resistance and nuclear decay in bearings.",
    "A",
    "In any real practical machine: (1) A portion of the input work is dissipated as thermal and acoustic energy to overcome unavoidable friction between bearings, guides, and contact surfaces. (2) Additional input work must be expended in lifting or accelerating the moving parts of the machine itself (e.g. lower pulley blocks, ropes, levers). Hence, Useful Work Output < Total Work Input, so η < 100%."
  ),
  makeCase(
    chapter, 34, "Loading a Heavy Oil Drum Using an Inclined Plane", "Inclined Plane as a Force Multiplier",
    "Warehouse workers roll a heavy cylindrical oil drum of weight 1800 N onto a truck loading bed situated 1.5 m above the ground using a smooth inclined wooden plank of length 6.0 m.",
    "What is the Velocity Ratio (VR) of this inclined plane and the ideal effort needed to roll the drum up?",
    "VR = 4.0; Ideal effort = 450 N",
    "VR = 0.25; Ideal effort = 7200 N",
    "VR = 6.0; Ideal effort = 300 N",
    "VR = 1.5; Ideal effort = 1200 N",
    "A",
    "For an inclined plane of length l and height h, the effort moves along the incline (d_effort = l = 6.0 m) while the load rises vertically (d_load = h = 1.5 m). Velocity Ratio VR = l / h = 6.0 / 1.5 = 4.0 (also equal to 1 / sin θ). For an ideal plane: Effort = Load / VR = 1800 N / 4.0 = 450 N. The inclined plane acts as a force multiplier."
  ),
  makeCase(
    chapter, 35, "Hospital Wheelchair Ramp Gradient Standards", "Gentle Slopes and Mechanical Advantage",
    "Hospital accessibility building codes mandate that wheelchair ramps must have a maximum slope gradient of 1:12 (for every 1.0 m rise in height h, the ramp length l along the slope must be at least 12.0 m).",
    "What is the mechanical rationale for specifying such a long, gentle slope?",
    "It gives a high Velocity Ratio (VR = 12), drastically reducing the pushing effort required to propel the wheelchair up the incline.",
    "It increases the velocity of the wheelchair.",
    "It eliminates the gravitational pull of the earth on the patient.",
    "It minimizes the distance the wheelchair must travel.",
    "A",
    "Since VR = l / h, a 1:12 slope provides a Velocity Ratio of 12. By Principle of Moments / conservation of energy, Effort ≈ Load / VR = W / 12. Although the user must push the wheelchair over a 12-times longer distance, the required muscular pushing effort is reduced to just 1/12th of the combined wheelchair-patient weight, making self-propulsion feasible."
  ),
  makeCase(
    chapter, 36, "Automotive Screw Jack Mechanics", "Compound Machine VR = 2πL / p",
    "A motorist uses a mechanical screw jack to lift the corner of a 1200 kg car to change a flat tyre. The screw jack has a thread pitch p = 5.0 mm (0.005 m) and is turned by an operating handle bar of length L = 35 cm (0.35 m).",
    "What is the Velocity Ratio (VR) of this screw jack (taking π ≈ 22/7)?",
    "VR = 440",
    "VR = 70",
    "VR = 220",
    "VR = 880",
    "A",
    "A screw jack combines a lever and an inclined plane. In one complete rotation of the handle (displacement of effort = 2·π·L), the load is lifted vertically by one thread pitch p (displacement of load = p). Velocity Ratio VR = 2·π·L / p = (2 × (22/7) × 0.35 m) / 0.005 m = (2.2 m) / 0.005 m = 440. This enormous VR allows a human applying 50 N to lift a 22,000 N load ideally."
  ),
  makeCase(
    chapter, 37, "Traditional Village Well Wheel and Axle", "Wheel and Axle Principle VR = R / r",
    "A traditional village water well uses a wooden wheel and axle windlass. The large wheel has a radius R = 40 cm, while the cylindrical axle drum has a radius r = 8.0 cm. A rope wound around the axle lifts a bucket of water weighing 200 N when an effort is applied tangentially to the outer rim of the wheel.",
    "What is the Velocity Ratio (VR) of this wheel and axle, and what is the ideal effort required?",
    "VR = 5.0; Ideal effort = 40 N",
    "VR = 0.20; Ideal effort = 1000 N",
    "VR = 8.0; Ideal effort = 25 N",
    "VR = 2.5; Ideal effort = 80 N",
    "A",
    "In one complete revolution of the wheel and axle: Effort displacement = circumference of wheel = 2·π·R. Load displacement = circumference of axle = 2·π·r. Velocity Ratio VR = (2·π·R) / (2·π·r) = R / r = 40 cm / 8.0 cm = 5.0. Ideal effort = Load / VR = 200 N / 5.0 = 40 N. The wheel and axle acts as a continuous rotary lever (force multiplier)."
  ),
  makeCase(
    chapter, 38, "Screwdriver as a Wheel and Axle Machine", "Handle Diameter vs Shank Diameter",
    "A carpenter chooses between two screwdrivers to drive a thick woodscrew into dense timber: Screwdriver 1 has a fat plastic handle of diameter 36 mm (radius 18 mm), while Screwdriver 2 has a slim handle of diameter 18 mm (radius 9 mm). Both have the same blade shank radius of 3 mm.",
    "Why does Screwdriver 1 drive the screw into the timber with far less hand strain than Screwdriver 2?",
    "Screwdriver 1 acts as a wheel and axle with VR = 18/3 = 6.0, whereas Screwdriver 2 has VR = 9/3 = 3.0, providing twice the mechanical advantage.",
    "Screwdriver 1 has greater mass, increasing gravitational downforce.",
    "Screwdriver 2 creates reverse torque on the screw head.",
    "Screwdriver 1 changes the direction of the screw threads.",
    "A",
    "A screwdriver functions on the wheel and axle principle, where the handle is the wheel (radius R) and the metal blade/shank is the axle (radius r). VR = R / r. For Screwdriver 1: VR = 18 mm / 3 mm = 6.0. For Screwdriver 2: VR = 9 mm / 3 mm = 3.0. The fatter handle doubles the velocity ratio and torque multiplier, allowing the carpenter to generate double the twisting moment for the same hand grip effort."
  ),
  makeCase(
    chapter, 39, "Water Well Geared Windlass", "Compound Machine Velocity Ratio",
    "A deep mine drainage lift uses a compound windlass where a crank handle of radius R = 50 cm drives a pinion gear with 12 teeth meshed to a large drum gear with 60 teeth. The drum gear is fixed to a winding axle drum of radius r = 10 cm.",
    "What is the total Velocity Ratio (VR) of this compound geared machine?",
    "VR = 25",
    "VR = 5",
    "VR = 50",
    "VR = 10",
    "A",
    "Velocity Ratio of crank to drum axle = R / r = 50 cm / 10 cm = 5. Gear ratio between gears = Teeth on driven / Teeth on driver = 60 / 12 = 5. Total Velocity Ratio of compound machine = VR_crank × Gear ratio = 5 × 5 = 25. For every 25 cm the crank handle moves, the rope on the axle rises by 1 cm."
  ),
  makeCase(
    chapter, 40, "Multi-Speed Bicycle Derailleur Gearing", "Front Chainring to Rear Sprocket Gear Ratio",
    "A road racing cyclist selects a high gear: the front chainring has N_front = 52 teeth and the rear cassette cog has N_rear = 13 teeth. The bicycle wheel radius is R_wheel = 35 cm, while the pedal crank arm length is L_crank = 17.5 cm.",
    "What happens when the cyclist pedaling at this gear turns the crank through one complete rotation?",
    "The rear wheel turns 4.0 revolutions, traveling 8.80 meters; the bicycle acts as a speed multiplier.",
    "The rear wheel turns 0.25 revolutions; the bicycle acts as a force multiplier.",
    "The rear wheel turns 2.0 revolutions, traveling 4.40 meters.",
    "The bicycle produces four times the torque of the cyclist's legs.",
    "A",
    "Gear ratio = N_front / N_rear = 52 / 13 = 4.0. For 1 full rotation of the pedal crank, the rear wheel completes 4.0 revolutions. Distance traveled in 1 pedal turn = 4 × (2·π·R_wheel) = 4 × (2 × (22/7) × 0.35 m) = 4 × 2.2 m = 8.80 m. In high gear, the bicycle is an immense speed multiplier (trading large muscular leg force for high road speed)."
  ),
  makeCase(
    chapter, 41, "Mechanical Watch Gear Train Speed Multiplication", "Gear Train Velocity Multiplication",
    "In a mechanical wristwatch, the main center wheel rotates once every 60 minutes (1 revolution per hour). It drives an escape wheel via a train of multiplier gears so that the escape wheel ticks 18,000 times per hour (5 ticks per second).",
    "What is the mechanical function of this gear train?",
    "It acts as a high-ratio speed multiplier with Velocity Ratio VR << 1.",
    "It acts as a force multiplier to increase mainspring torque.",
    "It reverses the direction of rotation without changing speed.",
    "It acts as a Class II lever system.",
    "A",
    "A mechanical watch gear train transmits slow rotational motion from the mainspring barrel to the rapidly oscillating escapement. By using large driver gears with many teeth meshed to small driven pinions with few teeth, speed is drastically multiplied (VR << 1), trading high spring torque for rapid rotational velocity."
  ),
  makeCase(
    chapter, 42, "Automobile Service Station Hydraulic Jack", "Compound Machine MA = MA_lever × MA_hydraulic",
    "A garage hydraulic car jack combines a hand lever (Class II lever with Effort arm = 60 cm, Load arm = 6.0 cm) connected to the plunger of a small pump piston of area A1 = 2.0 cm². The small piston pushes hydraulic oil into a large lifting cylinder of piston area A2 = 100 cm² supporting the car.",
    "What is the total theoretical Mechanical Advantage (MA) of this compound hydraulic jack?",
    "MA = 500",
    "MA = 60",
    "MA = 50",
    "MA = 100",
    "A",
    "Mechanical advantage of the hand lever = Effort arm / Load arm = 60 cm / 6.0 cm = 10. Mechanical advantage of the hydraulic press by Pascal's principle = A2 / A1 = 100 cm² / 2.0 cm² = 50. Total Mechanical Advantage of the compound machine = MA_lever × MA_hydraulic = 10 × 50 = 500. An effort of only 20 N applied to the lever handle exerts an ideal lifting force of 20 × 500 = 10,000 N on the vehicle."
  ),
  makeCase(
    chapter, 43, "High-Capacity Compound Bolt Cutters", "Double-Lever Linkage Mechanics",
    "A firefighter uses a heavy-duty compound bolt cutter to cut through a 10 mm hardened steel padlock shackle. The tool consists of two Class I levers in series: Lever 1 (main handles) has Effort arm = 60 cm and Load arm = 5.0 cm (MA1 = 12). Lever 2 (jaw blades) has Effort arm = 8.0 cm and Load arm = 2.0 cm (MA2 = 4.0).",
    "What total crushing force is exerted on the padlock shackle when the firefighter squeezes the handles with an effort of 250 N?",
    "12,000 N (12 kN)",
    "3,000 N",
    "4,000 N",
    "1,000 N",
    "A",
    "In a compound lever system, the output force of the first lever becomes the input effort to the second lever. Overall MA = MA1 × MA2 = 12 × 4.0 = 48. Total shearing force on the padlock = Applied Effort × Total MA = 250 N × 48 = 12,000 N (12 kN). This immense force multiplier crushes through hardened steel with ease."
  ),
  makeCase(
    chapter, 44, "Heavy Platform Weighing Scale Linkage", "Compound Steelyard Reduction Levers",
    "A freight depot platform weighing scale uses a system of compound reduction levers below the deck so that a heavy truck of mass 10,000 kg resting on the platform exerts only a small force of 100 N on the counterpoise balance arm.",
    "What is the total Mechanical Advantage of the reduction lever mechanism, and what principle does it employ?",
    "MA = 1000; Principle of Moments applied across multiple linked Class I and Class II levers in series.",
    "MA = 100; Hydraulic pressure distribution.",
    "MA = 10; Wheel and axle multiplication.",
    "MA = 500; Centrifugal balance equilibrium.",
    "A",
    "Platform scale mechanisms link multiple levers in series where the output load of each stage connects to the effort point of the subsequent stage. Total MA = Load / Effort = (10,000 kg × 10 m/s²) / 100 N = 100,000 N / 100 N = 1000. Applying the Principle of Moments across compound levers allows a small, easily handled counterweight to balance massive freight."
  ),
  makeCase(
    chapter, 45, "Sailing Ship Halyard Luff Tackle Purchase", "Three-Fold Maritime Pulley Purchase",
    "Sailors on a vintage schooner hoist a heavy mainsail using a 'luff tackle' consisting of a double-sheave upper block and a single-sheave lower block (total 3 pulleys). The hauling line is pulled downward from the upper block.",
    "What is the Velocity Ratio (VR) of the luff tackle, and what effort is needed to lift a 600 N sail if efficiency is 75%?",
    "VR = 3; Effort = 266.7 N",
    "VR = 4; Effort = 200 N",
    "VR = 3; Effort = 150 N",
    "VR = 2; Effort = 400 N",
    "A",
    "Total number of pulleys n = 3 (2 in fixed, 1 in movable). Since effort is pulled downward from the fixed block, VR = 3. Efficiency η = (MA / VR) × 100 => 75 = (MA / 3) × 100 => MA = (75 × 3) / 100 = 2.25. Actual effort required E = Load / MA = 600 N / 2.25 = 266.67 N."
  ),
  makeCase(
    chapter, 46, "Mountain Rescue Z-Rig Pulley Haul System", "Field Mechanical Advantage Amplification",
    "A mountain rescue team rigs a 'Z-rig' haul system to raise an injured climber of weight 900 N from a crevasse. The Z-rig utilizes two single pulleys and rope friction hitches (Prusiks) to create a theoretical 3:1 mechanical advantage (VR = 3).",
    "Assuming an operational field efficiency of 60% due to rope drag on rock edges, what pulling force must the rescue team exert?",
    "500 N",
    "300 N",
    "180 N",
    "450 N",
    "A",
    "For VR = 3 and efficiency η = 60%: Mechanical Advantage MA = (η / 100) × VR = 0.60 × 3 = 1.80. Hauling effort required E = Load / MA = 900 N / 1.80 = 500 N."
  ),
  makeCase(
    chapter, 47, "Biomechanical Mastication in the Human Jaw", "Class III Lever in Mastication",
    "In human cranial mechanics, the lower jaw (mandible) hinges at the temporomandibular joint (TMJ), which acts as the fulcrum. The powerful masseter and temporalis chewing muscles attach to the jaw midway between the joint and the front incisor teeth, pulling upward with force E, while the teeth crush food at the front (load L).",
    "Which class of lever does the jaw represent, and what is its primary mechanical advantage characteristics?",
    "Class III Lever; Effort is in the middle, MA < 1, providing wide opening range and rapid bite closure rather than maximum force.",
    "Class II Lever; Load in the middle, MA > 1.",
    "Class I Lever; Fulcrum in the middle.",
    "It has MA > 10 to crush tough bones.",
    "A",
    "The temporomandibular joint is the fulcrum F at the back of the jaw. The masseter muscle attaches in the middle (Effort E), and the biting teeth are at the front (Load L). Because the effort is situated between the fulcrum and the load, the jaw is an anatomical Class III lever (MA < 1). The muscle must exert greater force than the bite force, but gains large angular movement of the teeth for chewing."
  ),
  makeCase(
    chapter, 48, "Tower Crane Multi-Sheave Reeving Adjustment", "Two-Fall vs Four-Fall Hoist Lines",
    "A construction tower crane operator reconfigures the hoist hook block from 'two-fall' (2 rope parts supporting the hook, VR = 2) to 'four-fall' (4 rope parts supporting the hook, VR = 4) by adding a movable double-sheave block.",
    "What effect does shifting to four-fall reeving have on the crane's maximum lifting capacity and maximum hoisting speed?",
    "Lifting capacity doubles, but maximum hoisting speed is halved for the same winch motor power.",
    "Both lifting capacity and hoisting speed double.",
    "Lifting capacity quadruples, and speed remains unchanged.",
    "Lifting capacity is halved, while hoisting speed quadruples.",
    "A",
    "Doubling the velocity ratio from VR = 2 to VR = 4 doubles the mechanical advantage, doubling the maximum load the winch motor can lift (force multiplier). However, by conservation of energy and VR = d_effort / d_load, the load moves only 1/4 as far as the rope; thus for a fixed winch cable speed, the load hoisting speed is halved."
  ),
  makeCase(
    chapter, 49, "Adjusting the Fulcrum of a Heavy Crowbar", "Modifying Load Arm to Maximize MA",
    "A railway maintenance worker uses a 2.0-meter steel crowbar to unseat a frozen rail track plate. The worker initially places the fulcrum block 40 cm (0.40 m) from the rail plate (MA = 1.6/0.4 = 4.0), but finds his maximum body weight effort of 750 N is insufficient to budge the plate. The worker then slides the fulcrum block closer to the rail plate, positioning it just 10 cm (0.10 m) from the tip.",
    "What is the new Mechanical Advantage, and what prying force is now exerted by the same 750 N effort?",
    "New MA = 19.0; Prying force = 14,250 N",
    "New MA = 20.0; Prying force = 15,000 N",
    "New MA = 8.0; Prying force = 6,000 N",
    "New MA = 10.0; Prying force = 7,500 N",
    "A",
    "New load arm = 0.10 m. New effort arm = 2.0 m - 0.10 m = 1.90 m. New Mechanical Advantage MA = Effort arm / Load arm = 1.90 / 0.10 = 19.0. Prying force (Load) = Effort × MA = 750 N × 19.0 = 14,250 N (an increase from 3000 N to 14,250 N, nearly fivefold)."
  ),
  makeCase(
    chapter, 50, "Heavy-Duty Worm Gear Steering Gearbox", "High-Ratio Irreversible Speed Reduction",
    "An industrial steering gearbox uses a single-start rotating worm screw meshed with a 40-tooth worm wheel attached to the steering drop arm.",
    "What is the Velocity Ratio of the worm drive, and what vital safety property does it provide?",
    "VR = 40; the worm drive is mechanically irreversible (self-locking), preventing road shock from back-driving and spinning the steering wheel.",
    "VR = 40; it acts as a speed multiplier to rapidly spin the wheels.",
    "VR = 1; it provides direct 1:1 steering feel.",
    "VR = 80; it allows the wheels to turn freely when the motor is off.",
    "A",
    "For a single-start worm, one complete rotation of the worm advances the worm wheel by exactly 1 tooth out of 40, yielding a Velocity Ratio VR = 40. Furthermore, because of the low lead angle and friction between the worm and gear teeth, the mechanism is self-locking: the worm can easily turn the gear, but the gear cannot turn the worm, preventing dangerous road bumps from ripping the steering wheel out of the driver's hands."
  )
];

const outPath = path.join(__dirname, 'questionBank', 'physics_case_machines.json');
fs.writeFileSync(outPath, JSON.stringify(machineCases, null, 2), 'utf8');
console.log(`Saved ${machineCases.length} case studies for Machines to ${outPath}`);
