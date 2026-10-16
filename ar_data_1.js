// ar_data_1.js - Assertion-Reasoning Question Bank for Chapters 1 to 4
// ICSE Class 10 Physics

module.exports = {
  force: [
    {
      title: 'Moment of force handle length',
      a: 'A spanner with a long handle is preferred over a short one to loosen a tight nut.',
      r: 'The turning effect of a force is directly proportional to the perpendicular distance from the axis of rotation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The moment of force equals force times perpendicular distance. Increasing the handle length increases the moment for the same applied effort, which correctly explains why a longer handle is preferred.'
    },
    {
      title: 'Steering wheel diameter',
      a: 'Heavy vehicles like trucks and buses have steering wheels of larger diameter than small cars.',
      r: 'A couple consists of two equal and opposite parallel forces whose lines of action do not coincide.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true. However, the reason why large steering wheels are used is that the larger diameter increases the arm of the couple, reducing the effort needed to turn the wheels. Stating the definition of a couple does not directly explain why a larger diameter is chosen.'
    },
    {
      title: 'Uniform circular motion acceleration',
      a: 'A body moving in a circle with constant speed is in accelerated motion.',
      r: 'In uniform circular motion, the direction of velocity continuously changes at every point along the path.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Because velocity is a vector, continuous change in the direction of motion constitutes an acceleration (centripetal acceleration directed towards the center).'
    },
    {
      title: 'Centripetal vs Centrifugal force',
      a: 'Centrifugal force is a real force acting towards the center of a circular path.',
      r: 'Centripetal force is directed towards the center of rotation and is necessary to maintain circular motion.',
      ans: 'D',
      exp: 'Assertion is false because centrifugal force is a fictitious or pseudo force that appears in a rotating frame of reference and acts radially outwards, not towards the center. Reason is true.'
    },
    {
      title: 'Centre of gravity of a hollow sphere',
      a: 'The centre of gravity of a uniform hollow sphere lies at its geometric centre.',
      r: 'The centre of gravity of a body always lies within the material of the body.',
      ans: 'C',
      exp: 'Assertion is true (the CG of a hollow sphere is at its geometric center). Reason is false because the centre of gravity can lie in empty space outside the physical material, as in a hollow sphere, a ring, or a horseshoe.'
    },
    {
      title: 'Stability of a racing car',
      a: 'Racing cars are designed with a broad wheel base and a very low chassis.',
      r: 'A body is more stable when its centre of gravity is low and the area of its base is large.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Reason correctly explains the design of racing cars for maximum rotational and translational stability against toppling.'
    },
    {
      title: 'Translational equilibrium condition',
      a: 'If a body is in static equilibrium under multiple forces, the algebraic sum of all forces acting on it must be zero.',
      r: 'Translational equilibrium requires that the net external force on the body is zero.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the requirement of zero resultant force correctly explains translational equilibrium.'
    },
    {
      title: 'Rotational equilibrium condition',
      a: 'A meter rule pivoted at its 50 cm mark remains horizontal when equal weights are suspended at the 10 cm and 90 cm marks.',
      r: 'Clockwise moment of force is equal in magnitude to anticlockwise moment of force about the pivot.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The distance from the 50 cm mark to 10 cm is 40 cm (anticlockwise), and to 90 cm is 40 cm (clockwise). Equal weights at equal distances produce equal and opposite moments, fulfilling the principle of moments.'
    },
    {
      title: 'Sign convention of moments',
      a: 'An anticlockwise moment of force is taken as positive by international convention.',
      r: 'Clockwise moments tend to rotate a body in the direction of the hands of a clock.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true statements, but the definition of clockwise rotation is not the causal reason for the arbitrary sign convention adopting anticlockwise as positive.'
    },
    {
      title: 'Work done by centripetal force',
      a: 'The work done by the centripetal force on an electron revolving around the nucleus in a circular orbit is zero.',
      r: 'The centripetal force is always perpendicular to the instantaneous displacement of the body.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since force and instantaneous displacement are perpendicular (angle 90°), W = F·s·cos(90°) = 0.'
    },
    {
      title: 'Base of a dam',
      a: 'The base of a dam is made very thick and wide compared to its top.',
      r: 'Liquid pressure increases directly with increasing depth.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the increasing hydrostatic pressure with depth explains why the bottom must be thicker to withstand the lateral thrust.'
    },
    {
      title: 'Point of application of gravitational force',
      a: 'The entire weight of a body can be considered to act at its centre of gravity for calculating moments.',
      r: 'The algebraic sum of moments of weights of all constituent particles of a body about its centre of gravity is zero.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the vanishing sum of individual gravitational moments about the CG defines why the body balances at that point.'
    },
    {
      title: 'Door handle placement',
      a: 'A door handle is fixed near the hinged edge of the door for convenient operation.',
      r: 'A force applied at the hinge produces maximum moment of force.',
      ans: 'D',
      exp: 'Both Assertion and Reason are false. In fact, Assertion is false because the handle is placed near the free edge (furthest from the hinge), and Reason is false because a force at the hinge has zero perpendicular distance, hence zero moment.'
    },
    {
      title: 'Couple acting on a body',
      a: 'A couple produces pure rotational motion in a free rigid body without causing linear acceleration.',
      r: 'The resultant linear force of a couple is zero because the two constituent forces are equal in magnitude and opposite in direction.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the zero resultant force correctly explains why there is no translational acceleration.'
    },
    {
      title: 'Centre of gravity shifting',
      a: 'When a loaded ship is unloaded, its centre of gravity shifts downward.',
      r: 'The position of the centre of gravity depends upon the distribution of mass within the body.',
      ans: 'D',
      exp: 'Assertion is false because removing cargo from the top or middle raises the relative height of the remaining structure or shifts the CG upward compared to the hull bottom. Reason is true.'
    },
    {
      title: 'Circular motion vs linear motion speed',
      a: 'In uniform circular motion, speed is constant but linear momentum is not constant.',
      r: 'Linear momentum is a vector quantity and depends on velocity, whose direction changes continuously in a circle.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the vector nature of momentum explains why it continuously changes direction even when speed is constant.'
    },
    {
      title: 'Dynamic equilibrium example',
      a: 'A raindrop falling with a constant terminal velocity is in dynamic equilibrium.',
      r: 'The downward gravitational force on the raindrop is balanced by the upward buoyant force and viscous drag force.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the net zero resultant force on a moving body explains why it is in dynamic equilibrium.'
    },
    {
      title: 'Centrifugal force origin',
      a: 'Centrifugal force on a stone whirled in a circle by a string is the reaction force to the centripetal force.',
      r: 'Centripetal and centrifugal forces form an action-reaction pair according to Newton\'s third law.',
      ans: 'D',
      exp: 'Both Assertion and Reason are false. Centrifugal force is a fictitious force in a rotating frame, not Newton\'s third law reaction to centripetal force. The reaction to the tension on the stone is the outward pull exerted by the stone on the hand.'
    },
    {
      title: 'Turning of a water tap',
      a: 'To open or close a water tap, two equal and opposite forces are applied by the fingers.',
      r: 'A single force cannot produce rotation in a pivoted body.',
      ans: 'C',
      exp: 'Assertion is true (a couple is applied to turn the tap spindle). Reason is false because a single force can easily produce rotation if the body is pivoted at a point away from the line of action.'
    },
    {
      title: 'Equilibrium of a triangular lamina',
      a: 'A uniform triangular lamina balances horizontally when supported on the tip of a pencil at the intersection of its medians.',
      r: 'The centroid of a uniform triangular lamina coincides with its centre of gravity.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the centroid being the centre of gravity explains why the lamina balances stably on that point.'
    },
    {
      title: 'Moment of a force unit',
      a: 'The SI unit of moment of force is newton-metre (N m).',
      r: '1 N m of moment of force is equal to 1 joule of energy because both have the same base dimensional formula.',
      ans: 'C',
      exp: 'Assertion is true. Reason is false because moment of force is a vector quantity representing rotational effect, whereas joule is reserved exclusively for work and energy (scalar quantities).'
    },
    {
      title: 'Centre of gravity of a bent wire',
      a: 'If a straight uniform wire is bent into an L-shape with equal arms, its centre of gravity lies on the wire itself.',
      r: 'The centre of gravity of any symmetric body must lie on its axis of symmetry.',
      ans: 'D',
      exp: 'Assertion is false because the CG of an L-shaped wire lies in empty space between the two arms, not on the wire itself. Reason is true for symmetrical mass distributions.'
    },
    {
      title: 'Balancing a scale off-center',
      a: 'A uniform metre scale can be balanced at the 40 cm mark by suspending a suitable mass at the 10 cm mark.',
      r: 'The weight of the scale itself acts at its 50 cm mark and produces a clockwise moment about the 40 cm pivot.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. The scale\'s weight at 50 cm creates a clockwise moment (distance 10 cm), which is balanced by the anticlockwise moment of the suspended mass at 10 cm (distance 30 cm).'
    },
    {
      title: 'Planetary orbit centripetal force',
      a: 'The gravitational attraction between the Sun and a planet provides the necessary centripetal force for the planet\'s orbital motion.',
      r: 'Centripetal force is not a new fundamental force of nature but is provided by real physical forces such as gravity, tension, or electrostatic attraction.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Reason accurately explains how gravitational force acts as the centripetal provider.'
    },
    {
      title: 'Neutral equilibrium definition',
      a: 'A uniform sphere rolling on a flat horizontal floor is in neutral equilibrium.',
      r: 'In neutral equilibrium, when the body is slightly displaced, its centre of gravity neither rises nor falls.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the constant height of the centre of gravity during displacement defines neutral equilibrium.'
    },
    {
      title: 'Leaning Tower of Pisa stability',
      a: 'The Leaning Tower of Pisa does not topple over despite its noticeable tilt.',
      r: 'The vertical line passing through its centre of gravity falls well within its base of support.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the line of gravity remaining inside the base of support correctly explains why it does not topple.'
    },
    {
      title: 'Effect of force along axis of rotation',
      a: 'A force whose line of action passes through the axis of rotation produces zero moment of force.',
      r: 'The perpendicular distance from the axis of rotation to the line of action of the force is zero.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since moment = force × distance, a distance of zero guarantees zero torque.'
    },
    {
      title: 'Circular motion tangential acceleration',
      a: 'In non-uniform circular motion, the acceleration of the body is directed strictly towards the center.',
      r: 'Whenever a body moves along a circular path, it possesses centripetal acceleration.',
      ans: 'D',
      exp: 'Assertion is false because in non-uniform circular motion, there is both a centripetal acceleration and a tangential acceleration, so the net acceleration is not purely central. Reason is true.'
    },
    {
      title: 'Unstable equilibrium cone on apex',
      a: 'A solid cone balanced vertically on its apex is in unstable equilibrium.',
      r: 'A slight tilt causes its centre of gravity to lower, creating a toppling moment in the direction of tilt.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the lowering of the centre of gravity upon displacement characterizes unstable equilibrium.'
    },
    {
      title: 'Hand grinder handle placement',
      a: 'The handle of a domestic hand-flour grinder is placed near its outer rim.',
      r: 'Locating the handle far from the central axle maximizes the lever arm, minimizing the muscular force required.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and maximizing the lever arm to minimize effort is the correct physical explanation.'
    },
    {
      title: 'Mass and centre of gravity relationship',
      a: 'The centre of mass of a body and its centre of gravity always coincide in any gravitational field.',
      r: 'Centre of gravity depends on the local acceleration due to gravity, whereas centre of mass depends solely on mass distribution.',
      ans: 'D',
      exp: 'Assertion is false because in a non-uniform gravitational field (e.g. over a very large satellite or mountain), the CG shifts away from the CM toward the region of stronger field. Reason is true.'
    },
    {
      title: 'Bicycle banking on curves',
      a: 'A cyclist leans inward while negotiating a sharp curved track.',
      r: 'Leaning inward allows the normal reaction from the ground to provide the necessary centripetal force.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the inward tilt resolves the ground reaction into a horizontal component providing centripetal force.'
    },
    {
      title: 'Couple on a steering wheel',
      a: 'Turning a steering wheel with two hands requires less effort than turning it with one hand.',
      r: 'Two hands apply a couple whose forces produce moments in the same rotational sense.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and two equal forces producing additive rotational moments double the effective torque for the same effort.'
    },
    {
      title: 'Uniform velocity and equilibrium',
      a: 'An aircraft cruising at a steady altitude with constant velocity is in dynamic equilibrium.',
      r: 'The forward engine thrust balances air drag, and the aerodynamic lift balances the weight of the aircraft.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the exact balance of all opposing forces explains the constant-velocity dynamic equilibrium.'
    },
    {
      title: 'Tightrope walker pole role',
      a: 'A tightrope walker holds a long, flexible pole to maintain balance.',
      r: 'The long pole lowers the overall centre of gravity and increases rotational inertia, reducing rapid tipping.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the lowering of the CG and increased moment of inertia explain the stability advantage.'
    },
    {
      title: 'Zero resultant moment and translation',
      a: 'If the net torque on a rigid body is zero, the body cannot undergo any motion.',
      r: 'Zero torque guarantees that the body has no angular acceleration.',
      ans: 'D',
      exp: 'Assertion is false because the body can still undergo linear acceleration if the net linear force is non-zero, or it can maintain uniform linear motion. Reason is true.'
    },
    {
      title: 'Centre of gravity of irregular lamina',
      a: 'The centre of gravity of an irregular planar lamina can be located by suspending it freely from three plumb-line points.',
      r: 'When freely suspended from any point, the centre of gravity always lies vertically below the point of suspension.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the vertical alignment of the CG beneath the suspension point is the exact operating principle of the plumb-line method.'
    },
    {
      title: 'Centripetal force on Earth',
      a: 'The Earth does not fall into the Sun despite the immense gravitational pull between them.',
      r: 'The gravitational attraction provides the continuous centripetal acceleration required to curve the Earth\'s path into an elliptical orbit.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the continuous redirection into a closed orbit explains why orbital motion avoids collision.'
    },
    {
      title: 'Static equilibrium definition',
      a: 'A book lying at rest on a horizontal table is an example of static equilibrium.',
      r: 'Static equilibrium occurs only when no forces of any kind act on a body.',
      ans: 'C',
      exp: 'Assertion is true. Reason is false because static equilibrium requires that the net resultant force is zero (the downward gravitational force is balanced by the upward normal reaction), not that zero forces exist.'
    },
    {
      title: 'Perpendicular distance in torque',
      a: 'Pushing perpendicular to the surface of a door produces a greater turning effect than pushing at an oblique angle with the same force.',
      r: 'The perpendicular distance from the hinge to the line of action of the force is maximum when the force is applied perpendicular to the plane of the door.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and maximum perpendicular distance at 90° yields maximum torque.'
    }
  ],

  work_energy_power: [
    {
      title: 'Work done by gravitational force in a closed path',
      a: 'The total work done by gravity on an object taken around a closed path back to its initial point is zero.',
      r: 'Gravitational force is a conservative force, meaning work done depends only on initial and final positions.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the path-independent conservative nature of gravity correctly explains why net work along a closed circuit vanishes.'
    },
    {
      title: 'Coolie carrying luggage on head',
      a: 'A coolie carrying a heavy suitcase on his head while walking along a horizontal railway platform does zero work against gravity.',
      r: 'The force exerted by the coolie on the suitcase is vertical, while the displacement is horizontal, making the angle between them 90°.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since W = F·s·cos(90°) = 0, no work is done against gravity.'
    },
    {
      title: 'Kinetic energy and momentum relation',
      a: 'If the linear momentum of a body is doubled, its kinetic energy increases fourfold.',
      r: 'Kinetic energy is directly proportional to the square of linear momentum for a constant mass (K = p² / 2m).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the quadratic dependence K = p² / (2m) directly confirms the fourfold increase.'
    },
    {
      title: 'Negative work by friction',
      a: 'Friction between a sliding box and a rough horizontal floor does negative work on the box.',
      r: 'The frictional force acts in a direction opposite to the displacement of the sliding box (θ = 180°).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. With cos(180°) = -1, the work done is negative and kinetic energy is converted into heat.'
    },
    {
      title: 'Commercial unit of electrical energy',
      a: 'Kilowatt-hour (kWh) is a unit of electrical power.',
      r: '1 kilowatt-hour is equal to 3.6 × 10⁶ joules of energy.',
      ans: 'D',
      exp: 'Assertion is false because kilowatt-hour is a unit of energy, not power. Reason is true (1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J).'
    },
    {
      title: 'Mechanical energy conservation in free fall',
      a: 'During the free fall of a stone in a vacuum, the sum of its potential energy and kinetic energy remains constant at all points.',
      r: 'In the absence of dissipative forces like air drag, total mechanical energy is conserved.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the law of conservation of mechanical energy explains the constant total energy.'
    },
    {
      title: 'Work done by tension on a pendulum bob',
      a: 'The tension in the string of a swinging simple pendulum does no work on the bob.',
      r: 'At every point in the swing, the string tension is perpendicular to the instantaneous velocity of the bob.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and perpendicularity between the radial tension and tangential motion guarantees zero work.'
    },
    {
      title: 'Power of two machines',
      a: 'Machine A lifts 100 kg through 10 m in 5 s, while Machine B lifts 100 kg through 10 m in 20 s. Machine A has greater power.',
      r: 'Power is defined as the rate of doing work, so less time for the same work means greater power.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and P = W/t shows that Machine A develops four times the power of Machine B.'
    },
    {
      title: 'Potential energy of a stretched spring',
      a: 'A compressed spring possesses elastic potential energy.',
      r: 'Work done against the restoring spring force is stored as potential energy due to change in configuration.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and work done against internal restoring forces explains the stored elastic energy.'
    },
    {
      title: 'Kinetic energy sign',
      a: 'The kinetic energy of a moving body can sometimes be negative if its velocity is directed opposite to the positive axis.',
      r: 'Kinetic energy is a scalar quantity given by K = ½ m v², where mass and v² are always positive.',
      ans: 'D',
      exp: 'Assertion is false because kinetic energy cannot be negative. Reason is true and explains why kinetic energy is strictly non-negative.'
    },
    {
      title: 'Work done in stopping a moving car',
      a: 'When brakes are applied to bring a speeding car to rest, the work done by the braking force is negative.',
      r: 'The retarding braking force opposes the displacement of the car.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the opposing force (θ = 180°) leads directly to negative work.'
    },
    {
      title: 'Energy and momentum vectors',
      a: 'Two bodies with equal kinetic energies must possess identical linear momenta.',
      r: 'Kinetic energy depends on the mass and speed of the body, whereas momentum also depends on direction.',
      ans: 'D',
      exp: 'Assertion is false because p = √(2mK), so bodies with different masses have different momenta even if their kinetic energies are equal. Reason is true.'
    },
    {
      title: 'Work done against conservative force',
      a: 'The potential energy of a body decreases when conservative forces do positive work on it.',
      r: 'The change in potential energy is equal to the negative of the work done by conservative forces (ΔU = -W_c).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and ΔU = -W_c confirms that positive work by gravity or spring force reduces potential energy.'
    },
    {
      title: 'Power and velocity relation',
      a: 'For a car moving at constant velocity on a level road, the power developed by the engine equals force multiplied by velocity (P = F·v).',
      r: 'Work done per unit time equals (F · s) / t = F · (s/t) = F · v.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the mathematical derivation directly explains P = F·v.'
    },
    {
      title: 'Pendulum at extreme position',
      a: 'At the extreme position of its swing, a simple pendulum has maximum kinetic energy.',
      r: 'At the extreme position, the bob momentarily comes to rest before reversing its direction.',
      ans: 'D',
      exp: 'Assertion is false because at the extreme position, speed is zero so kinetic energy is minimum (zero), while potential energy is maximum. Reason is true.'
    },
    {
      title: 'Work done in holding a heavy rock',
      a: 'A student holding a 20 kg stone stationary in his hands for 30 minutes does no mechanical work on the stone.',
      r: 'Mechanical work requires that the point of application of force undergoes a displacement in the direction of force.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since displacement s = 0, mechanical work W = F·s = 0, despite muscular fatigue.'
    },
    {
      title: 'Gravitational potential energy reference',
      a: 'The gravitational potential energy of a body on the surface of the Earth is always strictly zero.',
      r: 'The choice of zero-level reference for potential energy is arbitrary and can be chosen at any convenient level.',
      ans: 'D',
      exp: 'Assertion is false because potential energy is zero at the Earth\'s surface only by convention; it can be assigned zero at infinity or any other datum. Reason is true.'
    },
    {
      title: 'Horsepower unit equivalence',
      a: 'One horsepower (hp) is equivalent to 746 watts.',
      r: 'Horsepower is an imperial unit of power commonly used to specify the output of electric motors and engines.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true statements, but the historical definition of 1 hp = 746 W is based on James Watt\'s experimental measure of a draft horse, not simply because it is an imperial unit.'
    },
    {
      title: 'Impact velocity from height',
      a: 'If a ball is dropped from height 4h, its speed upon hitting the ground is double the speed when dropped from height h.',
      r: 'From conservation of energy, impact velocity is proportional to the square root of the height of fall (v = √(2gh)).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since v ∝ √h, quadrupling the height doubles the impact velocity (√(4) = 2).'
    },
    {
      title: 'Work done in uniform circular orbit',
      a: 'An artificial satellite revolving in a circular orbit around the Earth requires continuous fuel expenditure to maintain its motion.',
      r: 'The gravitational force acts perpendicular to the satellite\'s orbital velocity, doing zero work.',
      ans: 'D',
      exp: 'Assertion is false because no fuel is needed in orbit; gravity keeps it in orbit without doing work. Reason is true.'
    },
    {
      title: 'Light and heavy body momentum',
      a: 'A light body and a heavy body have equal kinetic energies. The heavy body has greater linear momentum.',
      r: 'Linear momentum is given by p = √(2mK), so for a constant K, momentum is directly proportional to √m.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the formula p = √(2mK) confirms that larger mass gives larger momentum for the same kinetic energy.'
    },
    {
      title: 'Light and heavy body kinetic energy',
      a: 'A light body and a heavy body have equal linear momenta. The light body has greater kinetic energy.',
      r: 'Kinetic energy is given by K = p² / (2m), so for constant p, kinetic energy is inversely proportional to mass.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and K ∝ 1/m proves that the lighter body possesses greater kinetic energy.'
    },
    {
      title: 'Electric bulb power rating',
      a: 'A 100 W light bulb consumes 100 joules of electrical energy every second.',
      r: 'Power in watts represents the rate of energy consumption in joules per second (1 W = 1 J s⁻¹).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the definition of a watt as one joule per second validates the assertion.'
    },
    {
      title: 'Nuclear power station energy conversion',
      a: 'In a nuclear reactor, mass is converted directly into nuclear and thermal energy.',
      r: 'Mass and energy are interconvertible according to Einstein\'s mass-energy equation E = Δm c².',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Einstein\'s mass-energy equivalence equation explains the energy released from mass defect.'
    },
    {
      title: 'Work done on a satellite in elliptical orbit',
      a: 'In an elliptical orbit, the work done by Earth\'s gravity on a satellite over a small arc is not always zero.',
      r: 'In an elliptical orbit, the gravitational force is not always strictly perpendicular to the satellite\'s velocity vector.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Unlike circular orbits, the radius vector is not normal to the path everywhere, so gravity does positive work when approaching perigee and negative work when moving towards apogee.'
    },
    {
      title: 'Hydroelectric power conversion',
      a: 'Hydroelectric power plants utilize the potential energy of water stored in high dams.',
      r: 'Water falling from a height converts gravitational potential energy into kinetic energy to rotate turbines.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the transformation of potential energy into kinetic energy to drive generators explains hydroelectric generation.'
    },
    {
      title: 'Work done by normal reaction',
      a: 'The normal reaction on a box sliding down an inclined plane does no work on the box.',
      r: 'The normal reaction is always directed at 90° to the surface of the incline along which displacement occurs.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since the displacement is along the incline and normal reaction is perpendicular to it, cos(90°) = 0, giving zero work.'
    },
    {
      title: 'Energy dissipated in real pendulum',
      a: 'The oscillations of a simple pendulum in air gradually die down due to loss of total mechanical energy.',
      r: 'Work done against air resistance converts mechanical energy into thermal energy and sound.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and dissipative friction converting mechanical energy to heat correctly explains damping.'
    },
    {
      title: 'Joule vs calorie unit',
      a: 'One calorie is equal to approximately 4.186 joules.',
      r: 'Calorie is the SI unit of heat and work.',
      ans: 'C',
      exp: 'Assertion is true (1 cal ≈ 4.186 J). Reason is false because the SI unit of both heat and work is the joule (J), not the calorie.'
    },
    {
      title: 'Negative potential energy meaning',
      a: 'Gravitational potential energy of two masses bound together is negative when zero reference is taken at infinity.',
      r: 'Attractive forces perform positive work as the bodies are brought together from infinite separation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and positive work by attraction lowers the potential energy below the zero datum at infinity.'
    },
    {
      title: 'Work done by centrifugal force',
      a: 'Centrifugal force does positive work on a body during circular motion in an inertial frame.',
      r: 'Centrifugal force is observed only in rotating non-inertial frames and does not exist in an inertial frame.',
      ans: 'D',
      exp: 'Assertion is false because centrifugal force does not exist in an inertial frame and cannot do work. Reason is true.'
    },
    {
      title: 'Compressed air energy',
      a: 'Compressed air stored in a metal cylinder possesses potential energy.',
      r: 'Work was done on the air molecules during compression against gas pressure to store elastic potential energy.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and work done during compression stored as strain/pressure energy explains the assertion.'
    },
    {
      title: 'Linear motion zero work conditions',
      a: 'Work done on an object can be zero even when both force and displacement are non-zero.',
      r: 'When the angle between the applied force and the displacement is 90°, cos(90°) = 0.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and perpendicularity between force and displacement mathematically yields zero work.'
    },
    {
      title: 'Electric motor energy transformation',
      a: 'An electric motor converts mechanical energy into electrical energy.',
      r: 'An electric motor operates on the magnetic force experienced by a current-carrying coil.',
      ans: 'D',
      exp: 'Assertion is false because an electric motor converts electrical energy into mechanical energy (generators convert mechanical to electrical). Reason is true.'
    },
    {
      title: 'Speed squared and braking distance',
      a: 'If a car\'s speed is tripled, its minimum stopping distance under the same braking force increases by 9 times.',
      r: 'Work done by the braking force to stop the car must equal its initial kinetic energy (F · d = ½ m v²).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since kinetic energy is proportional to v², tripling speed increases KE by 3² = 9, requiring 9 times the stopping distance for the same braking force.'
    },
    {
      title: 'Pendulum mean position speed',
      a: 'A simple pendulum has its maximum speed when it passes through the lowest (mean) position.',
      r: 'At the mean position, all gravitational potential energy gained at the extreme positions is converted into kinetic energy.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and total conversion of PE to KE at the lowest point explains maximum velocity.'
    },
    {
      title: 'Kilowatt vs kilowatt-hour',
      a: 'Kilowatt and kilowatt-hour represent the same physical quantity expressed in different unit systems.',
      r: 'Kilowatt is a unit of power, while kilowatt-hour is a unit of energy.',
      ans: 'D',
      exp: 'Assertion is false because they represent entirely different physical quantities (power vs energy). Reason is true.'
    },
    {
      title: 'Bullet piercing a wooden block',
      a: 'A high-speed bullet penetrates much deeper into a wooden target than a heavy stone thrown with the same kinetic energy.',
      r: 'The bullet has a much smaller cross-sectional area, concentrating force and energy over a smaller resistance area.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the smaller contact area creates higher localized pressure overcoming the wood\'s cohesive resistance.'
    },
    {
      title: 'Elastic vs inelastic collisions',
      a: 'In an inelastic collision between two billiard balls, total momentum is conserved but total kinetic energy is not.',
      r: 'A fraction of kinetic energy is converted into heat, sound, and internal deformation.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and non-conservative dissipation during deformation explains kinetic energy loss in inelastic collisions.'
    },
    {
      title: 'Work-energy theorem validity',
      a: 'The work-energy theorem states that the net work done by all forces on a particle equals the change in its kinetic energy.',
      r: 'The work-energy theorem is valid for both constant and variable forces, and for both conservative and non-conservative forces.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true statements, but Reason is a statement of the theorem\'s scope of validity rather than an explanation of the physical principle itself.'
    }
  ],

  machines: [
    {
      title: 'Velocity ratio independence from friction',
      a: 'The velocity ratio of a machine does not change even if friction between moving parts increases.',
      r: 'Velocity ratio depends purely on the geometry and kinematic dimensions of the machine.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. VR = displacement of effort / displacement of load, which depends solely on wheel radii, pulley counts, or lever lengths, completely independent of friction.'
    },
    {
      title: 'Efficiency of a real machine',
      a: 'The efficiency of any practical machine is always strictly less than 100%.',
      r: 'A portion of the input energy is wasted in overcoming friction between moving parts and in moving the machine\'s own parts.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and energy dissipation due to friction and self-weight ensures output work is always less than input work.'
    },
    {
      title: 'Mechanical advantage vs velocity ratio for real machine',
      a: 'For any real machine with moving parts, the mechanical advantage is always less than its velocity ratio.',
      r: 'Efficiency is defined as the ratio of mechanical advantage to velocity ratio (η = MA / VR), and η < 1 for real machines.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and since η = MA / VR < 1, it follows directly that MA < VR.'
    },
    {
      title: 'Class I lever versatility',
      a: 'A Class I lever can have a mechanical advantage greater than 1, equal to 1, or less than 1.',
      r: 'In a Class I lever, the fulcrum lies between the load and the effort, allowing the effort arm to be longer, equal, or shorter than the load arm.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the variable position of the fulcrum between load and effort explains why MA = (effort arm)/(load arm) can take any value.'
    },
    {
      title: 'Class II lever force multiplier',
      a: 'A Class II lever always acts as a force multiplier (MA > 1).',
      r: 'In a Class II lever, the load is situated between the fulcrum and the effort, making the effort arm always longer than the load arm.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and since the effort arm is always the entire length from fulcrum to effort, effort arm > load arm, ensuring MA > 1.'
    },
    {
      title: 'Class III lever speed gain',
      a: 'A Class III lever has a mechanical advantage less than 1, but it provides a gain in speed.',
      r: 'In a Class III lever, the effort is between the fulcrum and the load, so the displacement of the load is greater than the displacement of the effort.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and load displacement exceeding effort displacement in the same time gives a gain in speed.'
    },
    {
      title: 'Single fixed pulley mechanical advantage',
      a: 'A single fixed pulley does not provide any multiplication of force (MA ≤ 1).',
      r: 'A single fixed pulley is used primarily to change the direction of applied effort to a more convenient downward direction.',
      ans: 'B',
      exp: 'Both Assertion and Reason are true statements. However, the reason why MA ≤ 1 is that the effort arm equals the load arm (radius of pulley), not merely that its purpose is to change direction.'
    },
    {
      title: 'Single movable pulley force multiplier',
      a: 'An ideal single movable pulley has an ideal mechanical advantage of 2.',
      r: 'The load is supported by two parallel segments of the string, each bearing half the load tension.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and two upward string tensions sharing the load explain why effort E = L/2, giving MA = 2.'
    },
    {
      title: 'Pair of shears vs scissors',
      a: 'A pair of shears used for cutting metal sheets has short blades and long handles.',
      r: 'A long effort arm combined with a short load arm provides a large mechanical advantage to cut hard sheets with small effort.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the high mechanical advantage of long handle / short blade directly explains the design.'
    },
    {
      title: 'Cloth cutting scissors design',
      a: 'Scissors used for cutting cloth have long blades and short handles.',
      r: 'Cloth requires very large force to cut, so scissors act as force multipliers.',
      ans: 'C',
      exp: 'Assertion is true (cloth scissors have long blades for speed/length of cut). Reason is false because cloth is soft and does not require large force; the long blade provides a gain in speed and cutting length, not force multiplication.'
    },
    {
      title: 'Block and tackle velocity ratio',
      a: 'In a block and tackle system of 5 pulleys, the velocity ratio is 5.',
      r: 'The velocity ratio of an ideal or real block and tackle pulley system is always equal to the total number of pulleys in both blocks.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the total pulley count determines how many string segments support the load, defining the velocity ratio.'
    },
    {
      title: 'Weight of lower block in pulley system',
      a: 'The efficiency of a block and tackle system can be improved by making the lower pulley block as light as possible.',
      r: 'The effort must lift both the useful load and the weight of the lower block and tackle.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and reducing the dead weight of the lower block minimizes wasted effort, raising efficiency.'
    },
    {
      title: 'Sugar tongs class of lever',
      a: 'Sugar tongs and forceps belong to Class III levers.',
      r: 'In sugar tongs, the effort is applied by fingers between the hinged fulcrum and the sugar cube load.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and effort located between fulcrum and load defines Class III levers.'
    },
    {
      title: 'Nutcracker class of lever',
      a: 'A nutcracker is an example of a Class II lever.',
      r: 'In a nutcracker, the nut (load) is placed between the hinge (fulcrum) and the handles where effort is applied.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and load located between fulcrum and effort defines Class II levers.'
    },
    {
      title: 'Crowbar versatility',
      a: 'A crowbar can be used as a force multiplier to lift a heavy boulder.',
      r: 'By placing the fulcrum very close to the boulder, the effort arm becomes much longer than the load arm.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and a long effort arm relative to load arm gives MA > 1.'
    },
    {
      title: 'Single movable pulley velocity ratio',
      a: 'The velocity ratio of a single movable pulley system is 2.',
      r: 'When the load moves up by a distance x, both supporting segments of the string must shorten by x, so the effort moves by 2x.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the 2x displacement of effort for x displacement of load geometrically explains VR = 2.'
    },
    {
      title: 'Human forearm lever class',
      a: 'The human forearm flexing to lift a weight in the hand acts as a Class III lever.',
      r: 'The bicep tendon applies the effort between the elbow joint (fulcrum) and the hand (load).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and effort applied between elbow fulcrum and hand load defines a Class III lever.'
    },
    {
      title: 'Efficiency and lubrication',
      a: 'Lubricating the axle of a pulley wheel increases its mechanical advantage.',
      r: 'Lubrication reduces frictional resistance, which increases efficiency (η) and therefore increases MA for a fixed VR.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and since MA = η × VR, reducing friction raises η and consequently increases MA.'
    },
    {
      title: 'Ideal machine definition',
      a: 'An ideal machine has an efficiency equal to 1 (100%).',
      r: 'In an ideal machine, the work output is exactly equal to the work input because there are no dissipative losses.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the equality of output work and input work defines 100% efficiency.'
    },
    {
      title: 'Wheelbarrow lever class',
      a: 'A wheelbarrow belongs to Class II levers.',
      r: 'The load lies between the wheel axle (fulcrum) and the handles where the lifting effort is applied.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and load placed between fulcrum and effort characterizes Class II levers.'
    },
    {
      title: 'Single fixed pulley direction advantage',
      a: 'It is easier to lift a bucket of water from a well using a fixed pulley than by pulling it directly upward.',
      r: 'Using a fixed pulley allows a person to pull downward in the direction of gravity and use their own body weight.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and pulling downward with body weight assistance makes lifting ergonomically easier.'
    },
    {
      title: 'Block and tackle string tension',
      a: 'In a block and tackle with velocity ratio n, the tension throughout the continuous string is assumed to be uniform in an ideal system.',
      r: 'An ideal string is light and inextensible, and friction at the pulley bearings is assumed to be zero.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and zero friction in ideal pulleys ensures constant tension along the entire string.'
    },
    {
      title: 'Effort arm zero moment',
      a: 'If the effort arm of a lever is zero, no turning effect can be produced regardless of the magnitude of effort.',
      r: 'Moment of effort is equal to effort multiplied by effort arm length.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and zero arm length guarantees zero moment.'
    },
    {
      title: 'Class I lever seesaw',
      a: 'A seesaw is an example of a Class I lever.',
      r: 'The fulcrum of a seesaw is situated at its center between the two riders.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and fulcrum situated between the two loads/efforts defines a Class I lever.'
    },
    {
      title: 'Fishing rod lever classification',
      a: 'A fishing rod is a Class III lever.',
      r: 'The fisherman\'s hand on the reel is the fulcrum, the other hand exerts effort in the middle, and the caught fish is the load at the tip.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and effort between fulcrum and load defines Class III.'
    },
    {
      title: 'Inclined plane as a machine',
      a: 'An inclined plane acts as a force multiplier.',
      r: 'The length of the inclined plane is always greater than its vertical height, so VR = (length / height) > 1.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and length exceeding vertical rise ensures VR > 1 and MA > 1.'
    },
    {
      title: 'Oar of a boat lever class',
      a: 'An oar rowing a boat can be considered a Class II lever when the blade in water acts as the temporary fulcrum.',
      r: 'The boat\'s rowlock carries the load (resisting boat mass) situated between the water blade fulcrum and the rower\'s handle.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and rowlock load between blade fulcrum and rower effort makes it a Class II lever.'
    },
    {
      title: 'Pulley velocity ratio changes with string stretch',
      a: 'The velocity ratio of a pulley system changes if an elastic string is used instead of an inextensible rope.',
      r: 'An elastic string stretches under load, altering the relationship between effort displacement and load displacement.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and string elongation changes the instantaneous displacement ratio.'
    },
    {
      title: 'Broom lever classification',
      a: 'Sweeping the floor with a domestic broom employs a Class III lever.',
      r: 'The upper hand holding the top handle acts as the fulcrum, the lower hand applies effort, and the broom bristles encounter load.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and effort between top fulcrum and bottom load defines Class III.'
    },
    {
      title: 'Mechanical advantage unit',
      a: 'Mechanical advantage and velocity ratio have the SI unit newton.',
      r: 'Mechanical advantage is the ratio of two forces, and velocity ratio is the ratio of two distances, so both are dimensionless.',
      ans: 'D',
      exp: 'Assertion is false because MA and VR are pure dimensionless ratios with no units. Reason is true.'
    },
    {
      title: 'Combined movable and fixed pulley',
      a: 'In a single movable pulley system, a fixed pulley is often added above the movable pulley.',
      r: 'The fixed pulley changes the direction of effort from upward to convenient downward without changing the velocity ratio.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and adding a fixed pulley for downward pull retains VR = 2.'
    },
    {
      title: 'Claw hammer lever class',
      a: 'A claw hammer pulling out a stubborn nail acts as a Class I lever.',
      r: 'The curved head resting against the wood acts as the fulcrum between the handle effort and the claw load.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and fulcrum between handle effort and nail load defines Class I.'
    },
    {
      title: 'Bottle opener lever class',
      a: 'A metal crown-cap bottle opener is a Class II lever.',
      r: 'The fulcrum rests on top of the cap, the lip hooks under the cap edge (load), and lifting effort is applied at the handle.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and load between fulcrum and handle effort defines Class II.'
    },
    {
      title: 'Tongs as speed multiplier',
      a: 'Fire tongs cannot act as a force multiplier.',
      r: 'In a Class III lever, the effort arm is always shorter than the load arm, so MA is always less than 1.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and MA < 1 guarantees that it cannot multiply force.'
    },
    {
      title: 'Ideal pulley efficiency',
      a: 'The mechanical advantage of an ideal pulley system equals its velocity ratio.',
      r: 'For an ideal machine with no friction and massless components, efficiency is 100% (η = 1).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since MA = η × VR and η = 1, MA = VR.'
    },
    {
      title: 'Effort direction in block and tackle',
      a: 'In a block and tackle with an odd number of total pulleys (e.g. 5), the string should be tied to the upper block if effort is pulled downward.',
      r: 'Tying the string to the upper block ensures that the effort can be applied in the downward direction from the top pulley.',
      ans: 'D',
      exp: 'Assertion is false because for 5 pulleys with downward effort, the string must be tied to the tackle of the movable (lower) block so that it passes over 5 pulleys with the last segment coming off the fixed block downward. Reason is true.'
    },
    {
      title: 'Paper cutter lever class',
      a: 'A desktop guillotine paper cutter is a Class II lever.',
      r: 'The hinge at one end is the fulcrum, the paper being sliced is the load, and the handle at the other end is the effort.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and paper load between hinge fulcrum and handle effort defines Class II.'
    },
    {
      title: 'Spade lifting soil lever class',
      a: 'A gardener lifting a heap of soil on a spade uses it as a Class III lever.',
      r: 'The hand near the top handle acts as the fulcrum, the lower hand lifts in the middle (effort), and the soil load rests at the blade.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and effort between fulcrum and soil load defines Class III.'
    },
    {
      title: 'Velocity ratio changes with load',
      a: 'The velocity ratio of a block and tackle decreases when a heavier load is attached.',
      r: 'Heavier loads cause increased friction in the pulley bearings.',
      ans: 'D',
      exp: 'Assertion is false because velocity ratio depends only on the number of pulleys and string geometry, not on the load magnitude. Reason is true (friction increases with load, reducing MA, not VR).'
    },
    {
      title: 'Nutcracker mechanical advantage value',
      a: 'A nutcracker with effort arm 15 cm and load arm 3 cm has an ideal mechanical advantage of 5.',
      r: 'Mechanical advantage of an ideal lever is the ratio of effort arm to load arm (15 / 3 = 5).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and MA = effort arm / load arm = 15/3 = 5.'
    }
  ],

  refraction_plane: [
    {
      title: 'Frequency invariance in refraction',
      a: 'When light travels from air into glass, its frequency remains unchanged.',
      r: 'Frequency is a characteristic property of the light source and does not depend on the medium through which light travels.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the source-dependent nature of frequency correctly explains why it does not change across boundaries.'
    },
    {
      title: 'Bending of light towards the normal',
      a: 'A ray of light traveling obliquely from air into water bends towards the normal.',
      r: 'The speed of light in water is less than the speed of light in air.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. According to Snell\'s law, reduction in speed in an optically denser medium causes the angle of refraction to be smaller than the angle of incidence, bending the ray towards the normal.'
    },
    {
      title: 'Total internal reflection conditions',
      a: 'Total internal reflection occurs only when light attempts to travel from an optically denser medium into an optically rarer medium.',
      r: 'The angle of refraction in the rarer medium can reach 90° and beyond only when the refracted ray bends away from the normal.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and bending away from the normal in a rarer medium is the essential physical condition for refraction to reach 90°.'
    },
    {
      title: 'Apparent depth of a swimming pool',
      a: 'A swimming pool filled with clear water appears shallower than it actually is.',
      r: 'Light rays diverging from the pool bottom bend away from the normal as they emerge into air, making them appear to originate from a virtual position higher up.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the upward virtual displacement caused by refraction away from the normal explains apparent depth.'
    },
    {
      title: 'Lateral displacement in glass slab',
      a: 'A ray of light emerging from a parallel-sided glass slab is parallel to the incident ray but laterally displaced.',
      r: 'The extent of bending at the first air-glass surface is equal and opposite to the bending at the second glass-air surface.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and parallel surfaces with equal and opposite refractions guarantee that the emergent ray remains parallel to the incident ray.'
    },
    {
      title: 'Normal incidence refraction',
      a: 'A ray of light falling normally on a glass slab passes through without any deviation.',
      r: 'For normal incidence, the angle of incidence is 0°, so according to Snell\'s law, the angle of refraction is also 0°.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. With i = 0°, sin(r) = (sin 0°)/μ = 0, so r = 0° and no deviation occurs.'
    },
    {
      title: 'Critical angle and refractive index',
      a: 'Diamond has a very small critical angle of approximately 24° in air.',
      r: 'Diamond has a very high refractive index (μ ≈ 2.42), and critical angle is inversely related to refractive index (sin c = 1/μ).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and sin c = 1/μ directly explains why a high refractive index produces a small critical angle.'
    },
    {
      title: 'Sparkling of cut diamond',
      a: 'A properly cut diamond sparkles brilliantly under white light.',
      r: 'Due to its small critical angle (24°), light entering the diamond undergoes multiple total internal reflections before emerging from specific facets.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and multiple total internal reflections trapping and directing light to top facets explain the brilliance.'
    },
    {
      title: 'Mirage formation in deserts',
      a: 'A mirage observed on a hot desert road is an optical illusion caused by total internal reflection.',
      r: 'Hot air near the ground is less dense than the cooler air above, creating an optically rarer layer near the surface.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the inverted refractive index gradient in hot air causes successive refraction and TIR.'
    },
    {
      title: 'Critical angle and color of light',
      a: 'The critical angle for red light in glass is greater than that for violet light.',
      r: 'The refractive index of glass for red light is smaller than that for violet light (μ_red < μ_violet), and sin c = 1/μ.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since μ_red < μ_violet, sin(c_red) > sin(c_violet), so c_red > c_violet.'
    },
    {
      title: 'Principle of reversibility',
      a: 'If the path of a light ray is reversed, it exactly retraces its previous trajectory.',
      r: 'The refractive index of medium 2 with respect to medium 1 is the reciprocal of the refractive index of medium 1 with respect to medium 2 (₁μ₂ = 1 / ₂μ₁).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and ₁μ₂ × ₂μ₁ = 1 mathematically expresses the reversibility of light rays.'
    },
    {
      title: 'Refraction index and temperature',
      a: 'The refractive index of a liquid decreases slightly when its temperature is raised.',
      r: 'Heating expands the liquid, decreasing its density and increasing the speed of light through it.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and thermal expansion reducing optical density explains the decrease in refractive index.'
    },
    {
      title: 'Total reflecting prism vs silvered mirror',
      a: 'Totally reflecting glass prisms are preferred over silvered plane mirrors in periscopes and binoculars.',
      r: 'A silvered mirror produces ghost images and tarnishes over time, whereas total internal reflection in a prism reflects 100% of incident light without multiple reflection ghosting.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the 100% reflection efficiency without multiple images explains the preference for prisms.'
    },
    {
      title: 'Apparent bending of a pencil in water',
      a: 'A pencil dipped obliquely in a beaker of water appears bent at the water surface.',
      r: 'Light rays from the submerged part of the pencil bend away from the normal on entering air, making the submerged portion appear raised.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and refraction away from the normal raising each point explains the apparent bent shape.'
    },
    {
      title: 'Wavelength change during refraction',
      a: 'When green light of wavelength 500 nm in air enters water (μ = 4/3), its color changes to blue.',
      r: 'The wavelength of light in a medium decreases according to λ_m = λ_air / μ.',
      ans: 'D',
      exp: 'Assertion is false because the perceived color of light is determined by its frequency, which remains unchanged upon entering water; hence its color remains green. Reason is true.'
    },
    {
      title: 'Right-angled isosceles prism 90 degree deviation',
      a: 'A 45°-90°-45° prism can deviate a beam of light through 90° by total internal reflection.',
      r: 'Light entering normally on one cathetus face strikes the hypotenuse face at 45°, which exceeds the 42° critical angle of ordinary crown glass.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and 45° angle of incidence exceeding the 42° critical angle ensures total internal reflection through 90°.'
    },
    {
      title: 'Right-angled isosceles prism 180 degree deviation',
      a: 'A 45°-90°-45° prism can turn a light beam through 180° (inverting prism).',
      r: 'Light entering normally through the hypotenuse undergoes two successive total internal reflections at 45° on the two legs.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and two successive 90° total reflections sum to an exact 180° reversal.'
    },
    {
      title: 'Twinkling of stars',
      a: 'Stars twinkle when viewed from the Earth\'s surface, but planets do not noticeably twinkle.',
      r: 'Stars are point sources of light whose rays undergo fluctuating refraction through turbulent atmospheric layers, whereas planets are extended discs.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the point-source nature of stars versus the averaging effect of extended planetary discs explains twinkling.'
    },
    {
      title: 'Early sunrise and delayed sunset',
      a: 'The Sun is visible about two minutes before actual sunrise and two minutes after actual sunset.',
      r: 'Atmospheric refraction bends sunlight around the curvature of the Earth when the Sun is slightly below the horizon.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and atmospheric curvature refraction raising the Sun\'s apparent position explains early sunrise and delayed sunset.'
    },
    {
      title: 'Refractive index formula speed of light',
      a: 'The absolute refractive index of a transparent medium is always greater than or equal to 1.',
      r: 'The speed of light in vacuum (c ≈ 3 × 10⁸ m s⁻¹) is the maximum attainable speed in the universe, so c ≥ v in all material media.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and since μ = c/v with c ≥ v, μ must be ≥ 1.'
    },
    {
      title: 'Coin in beaker appearing raised formula',
      a: 'The apparent shift of a coin at the bottom of a water beaker of depth d is given by shift = d (1 - 1/μ).',
      r: 'Apparent depth is related to real depth by the formula Apparent Depth = Real Depth / μ.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and Shift = Real Depth - Apparent Depth = d - d/μ = d(1 - 1/μ).'
    },
    {
      title: 'Critical angle for water-air interface',
      a: 'The critical angle for water (μ = 1.33) is approximately 48.6°.',
      r: 'Sin c = 1 / μ = 1 / (4/3) = 3/4 = 0.75, which corresponds to an angle of 48.6°.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the calculation sin c = 1/μ directly derives 48.6°.'
    },
    {
      title: 'Critical angle glass-water interface',
      a: 'The critical angle for a glass-water interface is greater than that for a glass-air interface.',
      r: 'The relative refractive index of glass with respect to water is less than the refractive index of glass with respect to air.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since _wμ_g = 1.5 / 1.33 = 1.125 < 1.5, sin c = 1 / _wμ_g is larger, making c_gw ≈ 63° > c_ga ≈ 42°.'
    },
    {
      title: 'Optical fibers communication principle',
      a: 'Optical fibers transmit light signals across long distances with virtually zero loss of energy.',
      r: 'Light signals inside an optical fiber core undergo repeated total internal reflections at the core-cladding boundary.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and total internal reflection with zero transmission leakage through cladding explains efficient optical waveguiding.'
    },
    {
      title: 'Equilateral prism deviation',
      a: 'An equilateral prism can produce total internal reflection of a light ray inside it.',
      r: 'In an equilateral glass prism, all three angles are 60°, which exceeds the 42° critical angle of glass for rays striking at suitable angles.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and internal angles exceeding 42° permit total reflection in 60° prisms.'
    },
    {
      title: 'Lateral displacement factor slab thickness',
      a: 'The lateral displacement of an oblique light ray passing through a glass slab increases with an increase in the slab\'s thickness.',
      r: 'A thicker slab provides a longer path inside the glass, allowing the displaced ray to separate further before emerging.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and lateral displacement d = t · sin(i - r) / cos(r) is directly proportional to thickness t.'
    },
    {
      title: 'Lateral displacement and angle of incidence',
      a: 'Lateral displacement produced by a glass slab increases as the angle of incidence increases from 0° to 90°.',
      r: 'As angle of incidence i increases, the angular separation (i - r) between the incident and refracted ray increases.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and larger (i - r) directly increases lateral displacement.'
    },
    {
      title: 'Lateral displacement and wavelength',
      a: 'Lateral displacement for violet light passing through a glass slab is greater than that for red light.',
      r: 'Glass has a higher refractive index for violet light than for red light, causing violet light to bend more.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and higher refractive index for violet produces smaller r and larger (i - r), giving greater lateral displacement.'
    },
    {
      title: 'Total internal reflection at grazing incidence',
      a: 'When angle of incidence in a denser medium equals the critical angle, the angle of refraction is 90°.',
      r: 'The refracted ray grazes the interface between the two media when i = c.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and r = 90° (grazing ray) defines the critical angle.'
    },
    {
      title: 'Air bubble inside water appearing silvery',
      a: 'An air bubble inside water shines with a brilliant silvery lustre when illuminated obliquely.',
      r: 'Light rays passing through water strike the water-air bubble boundary at angles greater than 48.6° and undergo total internal reflection.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and total internal reflection from the rarer air bubble back into the observer\'s eye causes the metallic sheen.'
    },
    {
      title: 'Endoscope working principle',
      a: 'Doctors use an endoscope to visualize internal organs of the human body.',
      r: 'An endoscope consists of a flexible bundle of thousands of optical fibers operating on total internal reflection.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and optical fiber total internal reflection explains how light is guided in and image relayed out.'
    },
    {
      title: 'Cracked glass test tube in water',
      a: 'A test tube with a silvered crack dipped in water appears silvery when viewed from certain angles.',
      r: 'Air trapped inside the crack acts as a rarer medium, causing total internal reflection of light rays entering from water.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and total internal reflection at the water-air interface inside the crack explains the silver appearance.'
    },
    {
      title: 'Light passing through prism dispersion',
      a: 'White light passing through a triangular prism splits into its component colors, but it does not split when passing through a parallel-sided slab.',
      r: 'In a parallel slab, the opposite faces are parallel, so the dispersion produced at the first face is exactly recombined at the second face.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and parallel surfaces produce equal and opposite lateral shifts for each color, emerging parallel and overlapping.'
    },
    {
      title: 'Snell\'s law validity condition',
      a: 'Snell\'s law of refraction is valid for any pair of media and for all non-normal angles of incidence.',
      r: 'The ratio sin(i) / sin(r) is constant and equals the relative refractive index of the second medium with respect to the first.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and the constant ratio sin i / sin r = ₁μ₂ defines Snell\'s law.'
    },
    {
      title: 'Refractive index of vacuum',
      a: 'The refractive index of a vacuum is defined as exactly 1.',
      r: 'The speed of light in a vacuum divided by itself is equal to 1 (c / c = 1).',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and μ = c/c = 1 mathematically defines unity refractive index for vacuum.'
    },
    {
      title: 'Critical angle for diamond in water',
      a: 'The critical angle for diamond placed in water is greater than the critical angle for diamond in air.',
      r: 'Water has a higher refractive index than air, so the relative refractive index of diamond with respect to water is smaller than that with respect to air.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true. Since _wμ_d = 2.42 / 1.33 ≈ 1.82 < 2.42, sin c = 1/1.82 ≈ 0.55 (c ≈ 33.3° > 24.4°).'
    },
    {
      title: 'Prism deviation angle factor',
      a: 'The angle of deviation produced by a triangular glass prism increases with an increase in the angle of the prism.',
      r: 'A larger refracting angle of the prism forces the light ray to travel through more material, resulting in greater cumulative bending.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and δ = (i + e) - A shows that a larger prism angle A increases overall deviation.'
    },
    {
      title: 'Porro prism in binoculars',
      a: 'Porro prisms in binoculars invert the image both vertically and laterally without reducing brightness.',
      r: 'Porro prisms utilize total internal reflection, which reflects virtually 100% of light without absorption losses of silver coatings.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and 100% total internal reflection in Porro prisms preserves maximum light transmission.'
    },
    {
      title: 'Refraction index and optical density',
      a: 'A medium with higher mass density always has a higher optical density (refractive index).',
      r: 'Optical density measures how much a medium slows down light, whereas mass density measures mass per unit volume.',
      ans: 'D',
      exp: 'Assertion is false because kerosene has lower mass density than water (it floats on water), but kerosene has a higher refractive index (1.44) than water (1.33). Reason is true.'
    },
    {
      title: 'Critical angle independent of light intensity',
      a: 'The critical angle for a glass-air interface remains constant whether dim light or bright laser light is used.',
      r: 'Critical angle depends solely on the refractive indices of the media for the given wavelength, not on the intensity of light.',
      ans: 'A',
      exp: 'Both Assertion and Reason are true, and sin c = 1/μ is strictly independent of beam intensity.'
    }
  ]
};
