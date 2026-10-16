const math = require('mathjs');

/**
 * Gate 3 Real Math Engine using mathjs
 * Solves and verifies mathematical assertions programmatically.
 * Code result is the final authority over model outputs.
 */

// Solve quadratic equation ax^2 + bx + c = 0
function solveQuadratic(a, b, c) {
  const disc = b * b - 4 * a * c;
  if (disc < 0) return null;
  const sqrtD = Math.sqrt(disc);
  const r1 = (-b + sqrtD) / (2 * a);
  const r2 = (-b - sqrtD) / (2 * a);
  return { r1, r2, positiveRoot: Math.max(r1, r2) > 0 ? (r1 > 0 ? r1 : r2) : null };
}

// Power of a Point: Tangent-Secant
function solvePowerOfPointTangentSecant({ pt, pa, pb, ab }) {
  if (pt && pa && !ab) {
    // (PT)^2 = PA * PB  => PB = PT^2 / PA => AB = PB - PA
    const pbCalc = (pt * pt) / pa;
    const abCalc = pbCalc - pa;
    return {
      pb: Math.round(pbCalc * 100) / 100,
      ab: Math.round(abCalc * 100) / 100,
      formula: `PB = (PT)^2 / PA = (${pt})^2 / ${pa} = ${pbCalc}; AB = PB - PA = ${abCalc}`
    };
  }
  if (pt && ab && !pa) {
    // PA * (PA + AB) = PT^2 => PA^2 + AB*PA - PT^2 = 0
    const quad = solveQuadratic(1, ab, -(pt * pt));
    return {
      pa: quad ? Math.round(quad.positiveRoot * 100) / 100 : null,
      formula: `PA^2 + ${ab}*PA - ${pt * pt} = 0`
    };
  }
  return null;
}

// Power of a Point: Intersecting Chords
function solveIntersectingChords({ pa, pb, pc, pd }) {
  // PA * PB = PC * PD
  if (pa && pb && pc && !pd) {
    const pdCalc = (pa * pb) / pc;
    return {
      pd: Math.round(pdCalc * 100) / 100,
      formula: `PD = (PA * PB) / PC = (${pa} * ${pb}) / ${pc} = ${pdCalc}`
    };
  }
  return null;
}

// Perpendicular Chords Radius Formula
function solvePerpendicularChordsRadius({ pa, pb, pc, pd }) {
  // Diameter^2 = PA^2 + PB^2 + PC^2 + PD^2 => R = (1/2) * sqrt(PA^2 + PB^2 + PC^2 + PD^2)
  const sumSq = pa * pa + pb * pb + pc * pc + pd * pd;
  const radius = 0.5 * Math.sqrt(sumSq);
  return {
    radius: Math.round(radius * 100) / 100,
    sumSq,
    formula: `R = 0.5 * sqrt(${pa}^2 + ${pb}^2 + ${pc}^2 + ${pd}^2) = ${radius}`
  };
}

// Ptolemy's Theorem
function solvePtolemyCyclic({ ab, bc, cd, da }) {
  // AC * BD = AB * CD + BC * DA
  const product = (ab * cd) + (bc * da);
  return {
    ac_times_bd: product,
    formula: `AC * BD = (${ab} * ${cd}) + (${bc} * ${da}) = ${product}`
  };
}

// Common Tangent Lengths
function solveCommonTangents({ d, r1, r2, type }) {
  if (type === 'direct' || type === 'external') {
    // L = sqrt(d^2 - (R - r)^2)
    const diff = Math.abs(r1 - r2);
    const sq = d * d - diff * diff;
    if (sq < 0) return null;
    return { length: Math.round(Math.sqrt(sq) * 100) / 100, formula: `L = sqrt(${d}^2 - (${r1}-${r2})^2)` };
  }
  if (type === 'transverse' || type === 'internal') {
    // L = sqrt(d^2 - (R + r)^2)
    const sum = r1 + r2;
    const sq = d * d - sum * sum;
    if (sq < 0) return null;
    return { length: Math.round(Math.sqrt(sq) * 100) / 100, formula: `L = sqrt(${d}^2 - (${r1}+${r2})^2)` };
  }
  return null;
}

// Inradius for right triangle
function solveRightTriangleInradius({ a, b, c }) {
  // r = (a + b - c) / 2 where c is hypotenuse
  const r = (a + b - c) / 2;
  return { inradius: r, formula: `r = (${a} + ${b} - ${c}) / 2 = ${r}` };
}

// Brahmagupta's Formula
function solveBrahmaguptaArea({ a, b, c, d }) {
  const s = (a + b + c + d) / 2;
  const prod = (s - a) * (s - b) * (s - c) * (s - d);
  if (prod <= 0) return null;
  const area = Math.sqrt(prod);
  return { area: Math.round(area * 100) / 100, s, formula: `Area = sqrt((${s}-${a})(${s}-${b})(${s}-${c})(${s}-${d})) = ${area}` };
}

// Nine-point circle radius
function solveNinePointRadius({ R }) {
  return { radius: R / 2, formula: `R_N = R / 2 = ${R / 2}` };
}

// Extract numeric values from options and question text
function parseNumbers(str) {
  if (!str) return [];
  const matches = str.match(/-?\d+(\.\d+)?/g);
  return matches ? matches.map(Number) : [];
}

// General symbolic and numeric evaluator using mathjs
function verifyWithMathCode(questionObj) {
  const qText = questionObj.question || '';
  const options = questionObj.options || [];
  const correctKey = questionObj.correct_option || questionObj.correct;

  // 1. Try matching known geometric archetypes
  // Power of a Point: PT = X, PA = Y
  const ptMatch = qText.match(/PT\s*=\s*(\d+(\.\d+)?)/i);
  const paMatch = qText.match(/PA\s*=\s*(\d+(\.\d+)?)/i);
  if (ptMatch && paMatch && qText.toLowerCase().includes('ab')) {
    const pt = parseFloat(ptMatch[1]);
    const pa = parseFloat(paMatch[1]);
    const solved = solvePowerOfPointTangentSecant({ pt, pa });
    if (solved && solved.ab) {
      // Find matching option
      const matchingOpt = options.find(o => {
        const nums = parseNumbers(o.text);
        return nums.some(n => Math.abs(n - solved.ab) < 0.05);
      });
      if (matchingOpt) {
        return {
          verified: true,
          verified_by: 'code',
          computed_value: solved.ab,
          expected_option: matchingOpt.key,
          matches_declared: matchingOpt.key === correctKey,
          formula: solved.formula
        };
      }
    }
  }

  // Ptolemy's Theorem: AB = a, BC = b, CD = c, DA = d
  const ptolemyMatch = qText.match(/AB\s*=\s*(\d+).*?BC\s*=\s*(\d+).*?CD\s*=\s*(\d+).*?DA\s*=\s*(\d+)/is);
  if (ptolemyMatch) {
    const ab = parseInt(ptolemyMatch[1]);
    const bc = parseInt(ptolemyMatch[2]);
    const cd = parseInt(ptolemyMatch[3]);
    const da = parseInt(ptolemyMatch[4]);
    const solved = solvePtolemyCyclic({ ab, bc, cd, da });
    if (solved) {
      const matchingOpt = options.find(o => {
        const nums = parseNumbers(o.text);
        return nums.some(n => Math.abs(n - solved.ac_times_bd) < 0.05);
      });
      if (matchingOpt) {
        return {
          verified: true,
          verified_by: 'code',
          computed_value: solved.ac_times_bd,
          expected_option: matchingOpt.key,
          matches_declared: matchingOpt.key === correctKey,
          formula: solved.formula
        };
      }
    }
  }

  // Right triangle inradius: legs a and b and hypotenuse c
  const inradiusMatch = qText.match(/leg[s]?\s*(?:lengths?)?\s*(\d+)\s*(?:cm)?\s*and\s*(\d+)\s*(?:cm)?\s*and\s*hypotenuse\s*(\d+)/i);
  if (inradiusMatch) {
    const a = parseInt(inradiusMatch[1]);
    const b = parseInt(inradiusMatch[2]);
    const c = parseInt(inradiusMatch[3]);
    const solved = solveRightTriangleInradius({ a, b, c });
    if (solved) {
      const matchingOpt = options.find(o => {
        const nums = parseNumbers(o.text);
        return nums.some(n => Math.abs(n - solved.inradius) < 0.05);
      });
      if (matchingOpt) {
        return {
          verified: true,
          verified_by: 'code',
          computed_value: solved.inradius,
          expected_option: matchingOpt.key,
          matches_declared: matchingOpt.key === correctKey,
          formula: solved.formula
        };
      }
    }
  }

  // Intersecting chords: PA = a, PB = b, PC = c
  const chordsMatch = qText.match(/PA\s*=\s*(\d+).*?PB\s*=\s*(\d+).*?PC\s*=\s*(\d+)/is);
  if (chordsMatch && (qText.includes('chord') || qText.includes('PD'))) {
    const pa = parseInt(chordsMatch[1]);
    const pb = parseInt(chordsMatch[2]);
    const pc = parseInt(chordsMatch[3]);
    const solved = solveIntersectingChords({ pa, pb, pc });
    if (solved) {
      const matchingOpt = options.find(o => {
        const nums = parseNumbers(o.text);
        return nums.some(n => Math.abs(n - solved.pd) < 0.05);
      });
      if (matchingOpt) {
        return {
          verified: true,
          verified_by: 'code',
          computed_value: solved.pd,
          expected_option: matchingOpt.key,
          matches_declared: matchingOpt.key === correctKey,
          formula: solved.formula
        };
      }
    }
  }

  // Brahmagupta Area: sides a, b, c, d
  const cyclicSidesMatch = qText.match(/sides?\s*(?:of\s*lengths?)?\s*(\d+),\s*(\d+),\s*(\d+),\s*(?:and\s*)?(\d+)/i);
  if (cyclicSidesMatch && (qText.includes('area') || qText.includes('Brahmagupta'))) {
    const a = parseInt(cyclicSidesMatch[1]);
    const b = parseInt(cyclicSidesMatch[2]);
    const c = parseInt(cyclicSidesMatch[3]);
    const d = parseInt(cyclicSidesMatch[4]);
    const solved = solveBrahmaguptaArea({ a, b, c, d });
    if (solved) {
      const matchingOpt = options.find(o => {
        const nums = parseNumbers(o.text);
        return nums.some(n => Math.abs(n - solved.area) < 0.1);
      });
      if (matchingOpt) {
        return {
          verified: true,
          verified_by: 'code',
          computed_value: solved.area,
          expected_option: matchingOpt.key,
          matches_declared: matchingOpt.key === correctKey,
          formula: solved.formula
        };
      }
    }
  }

  // Not directly computable by the code rules: requires multi-model consensus
  return {
    verified: false,
    verified_by: 'needs_consensus',
    reason: 'Problem geometry requires multi-model consensus solving'
  };
}

module.exports = {
  verifyWithMathCode,
  solvePowerOfPointTangentSecant,
  solveIntersectingChords,
  solvePtolemyCyclic,
  solveRightTriangleInradius,
  solveCommonTangents,
  solveBrahmaguptaArea,
  solveNinePointRadius
};
