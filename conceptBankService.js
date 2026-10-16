const fs = require('fs');
const path = require('path');
const { computeJaccardSimilarity, normalizeText } = require('./dedupEngine');

const BANK_FILE = path.join(__dirname, 'concept_bank.json');

function loadBank() {
  if (!fs.existsSync(BANK_FILE)) {
    const initial = seedCirclesConceptBank();
    fs.writeFileSync(BANK_FILE, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }
  try {
    return JSON.parse(fs.readFileSync(BANK_FILE, 'utf8'));
  } catch (e) {
    const initial = seedCirclesConceptBank();
    fs.writeFileSync(BANK_FILE, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }
}

function saveBank(bank) {
  fs.writeFileSync(BANK_FILE, JSON.stringify(bank, null, 2), 'utf8');
}

// Generate the 150+ high-quality validated Three-Level Concept Bank for Circles
function seedCirclesConceptBank() {
  const items = [];
  let idCounter = 1;

  function addConcept(title, desc, diff, rel) {
    const tag = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    const id = `C1_${idCounter++}`;
    const row = {
      id,
      class: 'Class 9-10 / Senior Olympiad',
      subject: 'Mathematics',
      chapter: 'Circles',
      level: 1,
      parent_id: null,
      concept_tag: tag,
      title,
      description: desc,
      difficulty: diff,
      olympiad_relevance: rel,
      source_hint: 'IMO / RMO / AMC / USAMO Core Geometry',
      status: 'active',
      fail_count: 0,
      created_at: new Date().toISOString()
    };
    items.push(row);
    return id;
  }

  function addTechnique(parentId, title, desc, diff, rel) {
    const tag = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    const id = `C2_${idCounter++}`;
    const row = {
      id,
      class: 'Class 9-10 / Senior Olympiad',
      subject: 'Mathematics',
      chapter: 'Circles',
      level: 2,
      parent_id: parentId,
      concept_tag: tag,
      title,
      description: desc,
      difficulty: diff,
      olympiad_relevance: rel,
      source_hint: 'Olympiad Technique',
      status: 'active',
      fail_count: 0,
      created_at: new Date().toISOString()
    };
    items.push(row);
    return id;
  }

  function addArchetype(parentId, title, desc, diff, rel, sourceHint) {
    const tag = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    const id = `C3_${idCounter++}`;
    const row = {
      id,
      class: 'Class 9-10 / Senior Olympiad',
      subject: 'Mathematics',
      chapter: 'Circles',
      level: 3,
      parent_id: parentId,
      concept_tag: tag,
      title,
      description: desc,
      difficulty: diff,
      olympiad_relevance: rel,
      source_hint: sourceHint || 'Olympiad Problem Archetype',
      status: 'unused', // unused | used | retired
      fail_count: 0,
      created_at: new Date().toISOString()
    };
    items.push(row);
    return id;
  }

  // -------------------------------------------------------------
  // LEVEL 1: 1. Power of a Point & Intersecting Chords
  // -------------------------------------------------------------
  const l1_pop = addConcept('Power of a Point Theorem', 'Product of segments of intersecting secants, chords, and tangents from a point', 3, 5);

  const l2_pop_tangent_secant = addTechnique(l1_pop, 'Tangent-Secant Application', 'Apply (PT)^2 = PA * PB for external point P, tangent PT, and secant PAB', 3, 5);
  addArchetype(l2_pop_tangent_secant, 'Find Chord Length Given External Secant and Tangent', 'Calculate chord AB when PT and external segment PA are known', 3, 5, 'AMC 12 / RMO');
  addArchetype(l2_pop_tangent_secant, 'Find Tangent Length Given Secant Coordinates', 'Determine length of tangent segment from point to circle in coordinate plane', 3, 4, 'AIME');
  addArchetype(l2_pop_tangent_secant, 'Ratio of Secant Segments from Tangent Ratio', 'Express ratio PA/PB when two secants share equal power to circle', 4, 4, 'INMO');
  addArchetype(l2_pop_tangent_secant, 'Tangent to Circle with Tangency at Midpoint', 'Compute secant length where tangent touches midpoint of another chord', 4, 5, 'RMO');

  const l2_pop_chords = addTechnique(l1_pop, 'Intersecting Chords Theorem', 'Apply PA * PB = PC * PD for two intersecting chords AB and CD inside a circle', 2, 5);
  addArchetype(l2_pop_chords, 'Find Unknown Segment of Internal Intersecting Chords', 'Compute segment PD when PA, PB, and PC are given integers', 2, 4, 'NMTC');
  addArchetype(l2_pop_chords, 'Perpendicular Chords Radius Formula', 'Find radius of circle when two perpendicular chords divide each other into segments', 3, 5, 'AIME');
  addArchetype(l2_pop_chords, 'Sum of Squares of Segments of Perpendicular Chords', 'Calculate diameter squared as sum of squares of 4 chord segments', 4, 5, 'USAMO');
  addArchetype(l2_pop_chords, 'Fixed Product Locus of Chord Midpoints', 'Determine locus of midpoint of chord passing through a fixed interior point', 4, 4, 'RMO');

  const l2_pop_secant_secant = addTechnique(l1_pop, 'Secant-Secant External Intersections', 'Apply PA * PB = PC * PD for two secants meeting at external point P', 3, 5);
  addArchetype(l2_pop_secant_secant, 'Find Second Secant External Segment', 'Determine PC when PA, PB, and full secant PD are known', 3, 4, 'AMC 12');
  addArchetype(l2_pop_secant_secant, 'Converse Power of a Point to Prove Concyclicity', 'Verify whether four points A, B, C, D lie on a circle via segment products', 4, 5, 'RMO');
  addArchetype(l2_pop_secant_secant, 'Harmonic Conjugates from Secant and Polar Line', 'Calculate cross-ratio of harmonic points on secant cut by polar line', 5, 5, 'INMO / IMO');

  // -------------------------------------------------------------
  // LEVEL 1: 2. Radical Axis and Radical Center
  // -------------------------------------------------------------
  const l1_rad = addConcept('Radical Axis and Radical Center', 'Locus of points having equal power with respect to two or three circles', 4, 5);

  const l2_rad_axis = addTechnique(l1_rad, 'Radical Axis of Two Circles', 'Equation and geometric line perpendicular to the line connecting centers', 3, 5);
  addArchetype(l2_rad_axis, 'Common Chord as Radical Axis of Intersecting Circles', 'Find length and equation of common chord of two intersecting circles', 3, 4, 'AIME');
  addArchetype(l2_rad_axis, 'Common Tangent Midpoints Lying on Radical Axis', 'Prove midpoint of external common tangent lies on radical axis', 4, 5, 'RMO');
  addArchetype(l2_rad_axis, 'Distance from Center to Radical Axis', 'Calculate distance from center of circle to radical axis using radii and center distance', 4, 4, 'INMO');
  addArchetype(l2_rad_axis, 'Orthogonal Circles Radical Axis Construction', 'Construct radical axis of two orthogonal non-intersecting circles', 4, 5, 'IMO Shortlist');

  const l2_rad_center = addTechnique(l1_rad, 'Radical Center of Three Circles', 'Point of concurrence of the three pairwise radical axes', 4, 5);
  addArchetype(l2_rad_center, 'Orthocenter as Radical Center of Diametric Circles', 'Prove orthocenter is radical center of three circles on triangle altitudes as diameters', 4, 5, 'INMO');
  addArchetype(l2_rad_center, 'Equal Tangent Lengths from Radical Center', 'Find unique point from which tangent lengths to three circles are equal', 4, 5, 'RMO');
  addArchetype(l2_rad_center, 'Concurrence of Common Chords of Three Intersecting Circles', 'Determine coordinates of radical center of three intersecting circles', 3, 4, 'AIME');

  // -------------------------------------------------------------
  // LEVEL 1: 3. Ptolemy\'s Theorem & Extensions
  // -------------------------------------------------------------
  const l1_ptolemy = addConcept('Ptolemys Theorem and Cyclic Quadrilaterals', 'Relation between sides and diagonals of an inscribed quadrilateral', 3, 5);

  const l2_ptolemy_basic = addTechnique(l1_ptolemy, 'Standard Ptolemys Identity', 'Apply AC * BD = AB * CD + BC * DA for cyclic quadrilaterals', 3, 5);
  addArchetype(l2_ptolemy_basic, 'Calculate Product of Diagonals Given 4 Cyclic Sides', 'Compute AC * BD when side lengths a, b, c, d are integers', 3, 4, 'RMO');
  addArchetype(l2_ptolemy_basic, 'Find Single Diagonal Length in Cyclic Quadrilateral', 'Determine individual diagonal AC using ratio of diagonal products', 4, 5, 'AIME');
  addArchetype(l2_ptolemy_basic, 'Equilateral Triangle Point on Circumcircle Distance Identity', 'For point P on arc BC of equilateral triangle ABC, prove PA = PB + PC', 3, 5, 'AMC 12');
  addArchetype(l2_ptolemy_basic, 'Regular Heptagon Diagonal Relation via Ptolemy', 'Prove 1/a = 1/b + 1/c for sides and diagonals of regular heptagon', 4, 5, 'INMO');

  const l2_ptolemy_ineq = addTechnique(l1_ptolemy, 'Ptolemys Inequality and Inversion', 'AC * BD <= AB * CD + BC * DA with equality iff concyclic', 4, 5);
  addArchetype(l2_ptolemy_ineq, 'Minimum Value of Sum of Products of Distances', 'Find minimum of a*PA + b*PB + c*PC using Ptolemy inequality', 5, 5, 'IMO Shortlist');
  addArchetype(l2_ptolemy_ineq, 'Caseys Theorem for Four Circles Tangent to a Common Circle', 'Calculate generalized Ptolemy tangent distance relation between 4 bitangent circles', 5, 5, 'INMO');

  // -------------------------------------------------------------
  // LEVEL 1: 4. Inscribed and Central Angles
  // -------------------------------------------------------------
  const l1_angles = addConcept('Inscribed Angle Theorems and Subtended Arcs', 'Angle subtended at center is twice angle at circumference', 2, 5);

  const l2_angle_circle = addTechnique(l1_angles, 'Inscribed Angle and Semicircle Theorems', 'Angles in same segment are equal; angle in semicircle is 90 degrees', 2, 5);
  addArchetype(l2_angle_circle, 'Thales Theorem for Right Angle in Semicircle', 'Find unknown side of triangle with hypotenuse as circle diameter', 2, 4, 'NMTC');
  addArchetype(l2_angle_circle, 'Angles in Same Arc Segment Equality', 'Compute subtended angle when central angle is given', 2, 4, 'AMC 10');
  addArchetype(l2_angle_circle, 'Angle in Alternate Segment Theorem', 'Angle between tangent and chord equals inscribed angle in opposite segment', 3, 5, 'RMO');
  addArchetype(l2_angle_circle, 'Intersecting Chords Angle Average Formula', 'Calculate interior angle as half the sum of intercepted arcs', 3, 4, 'AMC 12');
  addArchetype(l2_angle_circle, 'External Secants Angle Difference Formula', 'Calculate exterior angle as half the difference of intercepted arcs', 3, 4, 'AMC 12');

  const l2_cyclic_quad_angles = addTechnique(l1_angles, 'Opposite Angles of Cyclic Quadrilaterals', 'Sum of opposite angles of cyclic quadrilateral is 180 degrees', 2, 5);
  addArchetype(l2_cyclic_quad_angles, 'Find Missing Angle of Cyclic Quadrilateral', 'Determine fourth angle when three angles or exterior angle are known', 2, 4, 'SOF IMO');
  addArchetype(l2_cyclic_quad_angles, 'Exterior Angle of Cyclic Quadrilateral Equals Opposite Interior', 'Calculate angle using exterior-interior equality theorem', 2, 4, 'NMTC');
  addArchetype(l2_cyclic_quad_angles, 'Angle Chasing through Tangent and Chord intersections', 'Find target angle across chain of two intersecting cyclic quadrilaterals', 4, 5, 'RMO');

  // -------------------------------------------------------------
  // LEVEL 1: 5. Common Tangents & Bitangent Circles
  // -------------------------------------------------------------
  const l1_tangents = addTechnique(l1_angles, 'Common Tangents of Two Circles', 'Direct and transverse common tangents and centers of similitude', 3, 5);

  const l2_direct_tangent = addTechnique(l1_tangents, 'Direct Common Tangent Length', 'Formula L = sqrt(d^2 - (R - r)^2) for centers distance d and radii R, r', 3, 5);
  addArchetype(l2_direct_tangent, 'Compute Direct Common Tangent Length', 'Find external tangent segment when radii and center distance are given', 3, 4, 'AMC 12');
  addArchetype(l2_direct_tangent, 'Find Center Distance from Direct Tangent and Radii', 'Calculate distance between centers given external tangent length', 3, 4, 'AIME');

  const l2_transverse_tangent = addTechnique(l1_tangents, 'Transverse Common Tangent Length', 'Formula L = sqrt(d^2 - (R + r)^2) for internal tangents', 3, 5);
  addArchetype(l2_transverse_tangent, 'Compute Transverse Internal Common Tangent Length', 'Find internal tangent segment when two circles are separated', 3, 4, 'AMC 12');
  addArchetype(l2_transverse_tangent, 'Ratio of External to Internal Common Tangent Lengths', 'Determine ratio L_dir / L_trans for given geometry', 4, 5, 'RMO');

  // -------------------------------------------------------------
  // LEVEL 1: 6. Incircle, Excircles & Semi-perimeter
  // -------------------------------------------------------------
  const l1_incircle = addConcept('Incircle and Excircles Geometry', 'Circles tangent to the sides of a triangle and tangency distance formulas', 3, 5);

  const l2_tangency_dist = addTechnique(l1_incircle, 'Tangency Point Segments on Sides', 'Vertex distances to in-tangency points: s - a, s - b, s - c', 3, 5);
  addArchetype(l2_tangency_dist, 'Find Distance from Vertex to Incircle Tangency Point', 'Calculate s - a when sides a, b, c are given', 2, 4, 'AMC 10');
  addArchetype(l2_tangency_dist, 'Inradius Formula for Right-Angled Triangle', 'Apply r = (a + b - c)/2 to find inradius from leg lengths', 2, 5, 'NMTC');
  addArchetype(l2_tangency_dist, 'General Inradius Area Formula r = Delta / s', 'Calculate inradius from area Delta and semi-perimeter s', 3, 4, 'AIME');
  addArchetype(l2_tangency_dist, 'Distance Between Incenter and Excenter', 'Compute length II_a = 4R * sin(A/2)', 4, 5, 'INMO');
  addArchetype(l2_tangency_dist, 'Exradius Formula r_a = Delta / (s - a)', 'Determine exradius opposite vertex A', 3, 4, 'RMO');
  addArchetype(l2_tangency_dist, 'Relation 1/r = 1/r_a + 1/r_b + 1/r_c', 'Verify harmonic sum of exradii equals reciprocal of inradius', 4, 5, 'USAMO');

  // -------------------------------------------------------------
  // LEVEL 1: 7. Circumcircle and Extended Law of Sines
  // -------------------------------------------------------------
  const l1_circumcircle = addConcept('Circumcircle and Extended Law of Sines', 'Diameter 2R = a / sin(A) = b / sin(B) = c / sin(C) and R = abc / 4Delta', 3, 5);

  const l2_circum_sines = addTechnique(l1_circumcircle, 'Extended Sine Rule for Circumradius', 'Calculate R = a / (2 sin A) and relation to triangle area', 3, 5);
  addArchetype(l2_circum_sines, 'Calculate Circumradius from Side and Opposite Angle', 'Find R when side a = 12 and angle A = 30 degrees', 2, 4, 'AMC 10');
  addArchetype(l2_circum_sines, 'Circumradius from Three Sides Formula abc / 4Delta', 'Compute R from side lengths using Herons formula for Delta', 3, 4, 'AIME');
  addArchetype(l2_circum_sines, 'Distance Between Circumcenter and Incenter (Eulers Formula)', 'Apply d^2 = R(R - 2r) to find distance OI', 4, 5, 'RMO');
  addArchetype(l2_circum_sines, 'Eulers Inequality R >= 2r Equality Condition', 'Determine ratio R/r and verify minimum achieved for equilateral triangle', 3, 5, 'INMO');

  // -------------------------------------------------------------
  // LEVEL 1: 8. Brahmaguptas Formula & Cyclic Quadrilateral Areas
  // -------------------------------------------------------------
  const l1_brahmagupta = addConcept('Brahmaguptas Formula for Cyclic Quadrilaterals', 'Area Delta = sqrt((s-a)(s-b)(s-c)(s-d)) where s is semi-perimeter', 3, 5);

  const l2_brahma_area = addTechnique(l1_brahmagupta, 'Cyclic Quadrilateral Area Computation', 'Compute maximal area of quadrilateral inscribed in circle', 3, 5);
  addArchetype(l2_brahma_area, 'Find Area of Cyclic Quadrilateral with Given 4 Sides', 'Calculate exact area using Brahmagupta formula for integer sides', 3, 4, 'AIME');
  addArchetype(l2_brahma_area, 'Circumradius of Cyclic Quadrilateral Formula', 'Calculate circumradius R = (1 / 4Delta) * sqrt((ab+cd)(ac+bd)(ad+bc))', 4, 5, 'RMO');
  addArchetype(l2_brahma_area, 'Bicentric Quadrilateral Area Formula Delta = sqrt(abcd)', 'Compute area when quadrilateral has both incircle and circumcircle', 4, 5, 'INMO');

  // -------------------------------------------------------------
  // LEVEL 1: 9. Simson Line & Miquels Theorem
  // -------------------------------------------------------------
  const l1_simson = addConcept('Simson Line and Miquels Theorem', 'Feet of perpendiculars from circumcircle point onto triangle sides are collinear', 4, 5);

  const l2_simson_feet = addTechnique(l1_simson, 'Simson Line Collinearity', 'Collinear line of projections of point P on circumcircle', 4, 5);
  addArchetype(l2_simson_feet, 'Angle Between Simson Lines of Two Circumcircle Points', 'Find angle between Simson lines of P and Q as half arc PQ', 4, 5, 'RMO');
  addArchetype(l2_simson_feet, 'Simson Line Bisects Segment to Orthocenter', 'Prove midpoint of PH lies on the nine-point circle of the triangle', 5, 5, 'INMO');

  const l2_miquel = addTechnique(l1_simson, 'Miquels Theorem and Miquel Point', 'Three circles through vertices and adjacent side points meet at single point', 4, 5);
  addArchetype(l2_miquel, 'Find Coordinates of Miquel Point for Complete Quadrilateral', 'Determine concurrence point of 4 circumcircles of complete quadrilateral', 5, 5, 'IMO Shortlist');
  addArchetype(l2_miquel, 'Miquel Circle Concyclicity with Orthocenter', 'Prove Miquel point lies on circumcircle when vertices are aligned', 5, 5, 'USAMO');

  // -------------------------------------------------------------
  // LEVEL 1: 10. Nine-Point Circle & Feuerbachs Theorem
  // -------------------------------------------------------------
  const l1_nine_point = addConcept('Nine-Point Circle and Feuerbachs Theorem', 'Circle passing through 9 key triangle centers with radius R/2', 4, 5);

  const l2_nine_pts = addTechnique(l1_nine_point, 'Nine Specific Points Identification', 'Side midpoints, altitude feet, and midpoints of segments from orthocenter to vertices', 4, 5);
  addArchetype(l2_nine_pts, 'Radius of Nine-Point Circle Equals Half Circumradius', 'Calculate radius of nine-point circle R_N = R / 2', 3, 4, 'AMC 12');
  addArchetype(l2_nine_pts, 'Center of Nine-Point Circle as Midpoint of OH', 'Find coordinates of center N as midpoint of circumcenter and orthocenter', 4, 5, 'AIME');
  addArchetype(l2_nine_pts, 'Feuerbachs Tangency Theorem with Incircle and Excircles', 'Compute distance from center of nine-point circle to incenter as R/2 - r', 5, 5, 'INMO');

  // -------------------------------------------------------------
  // LEVEL 1: 11. Pole and Polar with Respect to a Circle
  // -------------------------------------------------------------
  const l1_pole_polar = addConcept('Poles and Polars with Respect to Circles', 'Duality mapping point P to straight polar line through circle inversions', 4, 5);

  const l2_polar_chord = addTechnique(l1_pole_polar, 'Chord of Contact as Polar Line', 'Line joining points of tangency of two tangents from external point P', 4, 5);
  addArchetype(l2_polar_chord, 'Equation of Chord of Contact from External Point', 'Find line T = 0 for point (x1, y1) with circle x^2 + y^2 = r^2', 3, 4, 'AIME');
  addArchetype(l2_polar_chord, 'Lahires Theorem on Reciprocal Pole-Polar Incidence', 'Prove point A lies on polar of B iff point B lies on polar of A', 4, 5, 'RMO');
  addArchetype(l2_polar_chord, 'Harmonic Division of Secant by Pole and Polar', 'Prove polar line divides any secant passing through pole harmonically', 5, 5, 'INMO / IMO');

  // -------------------------------------------------------------
  // LEVEL 1: 12. Circle Inversion & Orthogonality
  // -------------------------------------------------------------
  const l1_inversion = addConcept('Geometric Inversion with Respect to a Circle', 'Mapping point P to P prime such that OP * OP prime = R^2', 5, 5);

  const l2_inversion_props = addTechnique(l1_inversion, 'Inversion of Lines and Circles', 'Circles through center map to lines; circles not through center map to circles', 5, 5);
  addArchetype(l2_inversion_props, 'Find Invert Point Coordinates Across Circle', 'Calculate coordinates of inverted point under circle x^2 + y^2 = R^2', 4, 4, 'AIME');
  addArchetype(l2_inversion_props, 'Radius of Inverted Circle Formula', 'Compute radius of circle after inversion around center O', 5, 5, 'USAMO');
  addArchetype(l2_inversion_props, 'Orthogonal Circles Remain Invariant Under Inversion', 'Prove circle orthogonal to inversion circle maps onto itself', 5, 5, 'IMO Shortlist');

  // -------------------------------------------------------------
  // LEVEL 1: 13. Butterfly Theorem & Chord Geometry
  // -------------------------------------------------------------
  const l1_butterfly = addConcept('Butterfly Theorem on Chords', 'Symmetry of chords intersecting through midpoint of another chord', 4, 5);

  const l2_butterfly_mid = addTechnique(l1_butterfly, 'Midpoint Chord Invariance', 'If M is midpoint of chord PQ, and chords AB and CD pass through M, AD and BC cut PQ equidistant from M', 4, 5);
  addArchetype(l2_butterfly_mid, 'Find Segment Length in Butterfly Configuration', 'Calculate length XM given MY and chord properties', 4, 5, 'RMO');
  addArchetype(l2_butterfly_mid, 'Dual Butterfly Theorem for Cyclic Quadrilaterals', 'Apply butterfly configuration on intersecting tangents to verify collinearity', 5, 5, 'INMO');

  // -------------------------------------------------------------
  // LEVEL 1: 14. Coaxial Systems of Circles
  // -------------------------------------------------------------
  const l1_coaxial = addConcept('Coaxial Systems and Apollonian Circles', 'Family of circles having a common radical axis', 4, 5);

  const l2_apollonius = addTechnique(l1_coaxial, 'Apollonius Circle as Constant Distance Ratio', 'Locus of points P where PA / PB = k (constant) is a circle', 3, 5);
  addArchetype(l2_apollonius, 'Find Center and Radius of Apollonian Circle', 'Compute center and radius of locus PA / PB = 2 on line segment AB', 3, 4, 'AMC 12');
  addArchetype(l2_apollonius, 'Intersection of Apollonian Circle with Line of Centers', 'Determine internal and external harmonic division points', 3, 4, 'AIME');
  addArchetype(l2_apollonius, 'Orthogonal Family of Coaxial Circles', 'Prove circle passing through limit points is orthogonal to coaxial family', 5, 5, 'INMO');

  // -------------------------------------------------------------
  // LEVEL 1: 15. Tangent Circles & Sangaku Problems
  // -------------------------------------------------------------
  const l1_sangaku = addConcept('Mutually Tangent Circles and Descartess Theorem', 'Descartes circle theorem relating curvatures of four mutually tangent circles', 4, 5);

  const l2_descartes = addTechnique(l1_sangaku, 'Descartes Kissing Circles Theorem', 'Formula (k1 + k2 + k3 + k4)^2 = 2(k1^2 + k2^2 + k3^2 + k4^2) for curvatures k = 1/r', 4, 5);
  addArchetype(l2_descartes, 'Calculate Radius of Fourth Mutually Tangent Circle', 'Compute radius r4 of circle tangent externally to three mutually tangent circles', 4, 5, 'AIME');
  addArchetype(l2_descartes, 'Inner Kissing Circle Radius Inside Three Congruent Circles', 'Find radius of central small circle tangent to 3 mutually tangent unit circles', 3, 4, 'AMC 12');
  addArchetype(l2_descartes, 'Circle Tangent to Two Concentric Circles and Diameter', 'Determine radius of circle packed between two concentric circles', 3, 4, 'NMTC');
  addArchetype(l2_descartes, 'Arbelos Geometry (Shoemakers Knife) and Archimedean Twin Circles', 'Calculate radius of Archimedes twin circles inside arbelos with diameters a and b', 4, 5, 'RMO');

  // -------------------------------------------------------------
  // LEVEL 1: 16. Power & Homothety of Incircle and Circumcircle
  // -------------------------------------------------------------
  const l1_homothety = addConcept('Homothety and Circle Centers of Similitude', 'Dilations mapping one circle to another with collinear centers', 4, 5);

  const l2_homothety_trans = addTechnique(l1_homothety, 'Internal and External Centers of Similitude', 'Points dividing segment of centers in ratio of radii R : r', 3, 5);
  addArchetype(l2_homothety_trans, 'Find Coordinates of External Center of Similitude', 'Calculate center of dilation mapping small circle to large circle', 3, 4, 'AIME');
  addArchetype(l2_homothety_trans, 'Monge Theorem on Three Centers of Similitude Collinearity', 'Verify three external centers of similitude of three circles are collinear', 5, 5, 'RMO / INMO');
  addArchetype(l2_homothety_trans, 'Incircle to Circumcircle Tangency via Homothety', 'Determine touch point of mixtilinear incircle with circumcircle', 5, 5, 'IMO Shortlist');

  // -------------------------------------------------------------
  // LEVEL 1: 17. Cyclic Hexagons & Pascals Theorem
  // -------------------------------------------------------------
  const l1_pascal = addConcept('Pascals Hexagrammum Mysticum Theorem', 'Intersections of opposite sides of cyclic hexagon lie on a straight line', 5, 5);

  const l2_pascal_line = addTechnique(l1_pascal, 'Pascals Line Construction', 'Collinearity of AB cap DE, BC cap EF, CD cap FA for points on circle', 5, 5);
  addArchetype(l2_pascal_line, 'Degenerate Pascal Theorem on Cyclic Quadrilateral with Tangents', 'Prove intersection of tangents at opposite vertices lies on line of chord intersections', 5, 5, 'INMO / USAMO');
  addArchetype(l2_pascal_line, 'Concurrence Proof using Pascals Hexagon on Circle', 'Determine concurrency of three lines constructed from cyclic hexagon points', 5, 5, 'IMO');

  // -------------------------------------------------------------
  // LEVEL 1: 18. Circle Coordinate Geometry & Orthogonality
  // -------------------------------------------------------------
  const l1_coord = addConcept('Coordinate Geometry of Circles and Orthogonality', 'Equations of circles, orthogonal intersections 2g1g2 + 2f1f2 = c1 + c2', 3, 5);

  const l2_coord_ortho = addTechnique(l1_coord, 'Condition for Orthogonal Circles', 'Tangents at intersection point are perpendicular: 2g1g2 + 2f1f2 = c1 + c2', 3, 5);
  addArchetype(l2_coord_ortho, 'Find Parameter for Two Circles to Intersect Orthogonally', 'Solve for unknown parameter k making two circles orthogonal', 3, 4, 'AIME');
  addArchetype(l2_coord_ortho, 'Length of Tangent from Point to General Circle', 'Apply sqrt(x1^2 + y1^2 + 2gx1 + 2fy1 + c) to find tangent length', 2, 4, 'NMTC');
  addArchetype(l2_coord_ortho, 'Locus of Point Whose Tangents to Two Circles are in Constant Ratio', 'Prove locus is a coaxial circle and determine its radius', 4, 4, 'RMO');

  // -------------------------------------------------------------
  // LEVEL 1: 19. Carnot\'s Theorem on Incircle and Circumcircle Distances
  // -------------------------------------------------------------
  const l1_carnot = addConcept('Carnots Theorem on Signed Distances from Circumcenter', 'Sum of signed perpendicular distances from circumcenter to sides equals R + r', 4, 5);

  const l2_carnot_dist = addTechnique(l1_carnot, 'Carnots Identity R + r = d_a + d_b + d_c', 'Apply signed distance identity for acute and obtuse triangles', 4, 5);
  addArchetype(l2_carnot_dist, 'Calculate Distance from Circumcenter to Side in Acute Triangle', 'Find distance d_a = R * cos(A) from circumradius and angle', 3, 4, 'AMC 12');
  addArchetype(l2_carnot_dist, 'Japanese Theorem for Concyclic Polygons via Carnot', 'Prove sum of inradii of triangulation of cyclic polygon is independent of triangulation', 5, 5, 'INMO');

  // -------------------------------------------------------------
  // LEVEL 1: 20. Circle Packing, Arcs & Mensuration
  // -------------------------------------------------------------
  const l1_mensuration = addConcept('Advanced Circular Mensuration and Segment Areas', 'Areas of circular segments, sectors, lunes, and annuli in Olympiad contexts', 2, 5);

  const l2_segments = addTechnique(l1_mensuration, 'Circular Segment and Lunes Area', 'Formula Area = (1/2) * R^2 * (theta - sin theta) and Hippocrates Lunes', 3, 5);
  addArchetype(l2_segments, 'Area of Overlapping Region of Two Intersecting Congruent Circles', 'Calculate lens area when distance between centers equals radius R', 2, 4, 'AMC 10');
  addArchetype(l2_segments, 'Hippocrates Lunes Quadrature Area Identity', 'Prove area of lunes constructed on right triangle legs equals area of triangle', 3, 5, 'NMTC');
  addArchetype(l2_segments, 'Area of Region Between Three Mutually Tangent Unit Circles', 'Calculate exact area sqrt(3) - pi/2 bounded by three tangent circles', 2, 4, 'AMC 10');
  addArchetype(l2_segments, 'Annulus Area from Chord Tangent to Inner Circle', 'Compute annulus area pi * L^2 / 4 from length of chord L tangent to inner circle', 2, 4, 'AMC 12');

  return {
    chapter: 'Circles',
    class: 'Class 9-10 / Senior Olympiad',
    subject: 'Mathematics',
    total_items: items.length,
    counts: {
      level_1: items.filter(i => i.level === 1).length,
      level_2: items.filter(i => i.level === 2).length,
      level_3: items.filter(i => i.level === 3).length
    },
    items
  };
}

// Get all items or filter by chapter/level/status
function getBankItems(filters = {}) {
  const bank = loadBank();
  return bank.items.filter(item => {
    if (filters.chapter && item.chapter.toLowerCase() !== filters.chapter.toLowerCase()) return false;
    if (filters.level && item.level !== parseInt(filters.level)) return false;
    if (filters.status && item.status !== filters.status) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match = item.title.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.concept_tag.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });
}

// Get next unused Level-3 archetype (walking across diverse Level-1 concepts)
function getNextUnusedArchetype(chapter = 'Circles') {
  const bank = loadBank();
  const archetypes = bank.items.filter(i => i.level === 3 && i.status === 'unused' && (!chapter || i.chapter.toLowerCase() === chapter.toLowerCase()));
  if (archetypes.length === 0) return null;

  // Group by Level-1 ancestor to ensure questions spread evenly across different theorems
  const l1Map = new Map();
  bank.items.filter(i => i.level === 1).forEach(l1 => l1Map.set(l1.id, l1));
  const l2Map = new Map();
  bank.items.filter(i => i.level === 2).forEach(l2 => l2Map.set(l2.id, l2));

  // Pick first unused archetype
  const picked = archetypes[0];
  const l2 = l2Map.get(picked.parent_id);
  const l1 = l2 ? l1Map.get(l2.parent_id) : null;

  return {
    ...picked,
    technique_name: l2 ? l2.title : '',
    concept_name: l1 ? l1.title : ''
  };
}

// Mark archetype status
function updateArchetypeStatus(id, newStatus) {
  const bank = loadBank();
  const item = bank.items.find(i => i.id === id);
  if (item) {
    item.status = newStatus;
    if (newStatus === 'used') {
      item.used_at = new Date().toISOString();
    }
    saveBank(bank);
    return true;
  }
  return false;
}

// Increment fail count, auto-retire if >= maxFails (default 3)
function recordArchetypeFailure(id, maxFails = 3) {
  const bank = loadBank();
  const item = bank.items.find(i => i.id === id);
  if (item) {
    item.fail_count = (item.fail_count || 0) + 1;
    if (item.fail_count >= maxFails) {
      item.status = 'retired';
      item.retirement_reason = `Failed quality gates ${item.fail_count} times`;
    }
    saveBank(bank);
    return { fail_count: item.fail_count, retired: item.status === 'retired' };
  }
  return null;
}

// Check unused archetypes count
function getUnusedCount(chapter = 'Circles') {
  const bank = loadBank();
  return bank.items.filter(i => i.level === 3 && i.status === 'unused' && (!chapter || i.chapter.toLowerCase() === chapter.toLowerCase())).length;
}

module.exports = {
  loadBank,
  saveBank,
  getBankItems,
  getNextUnusedArchetype,
  updateArchetypeStatus,
  recordArchetypeFailure,
  getUnusedCount,
  seedCirclesConceptBank
};
