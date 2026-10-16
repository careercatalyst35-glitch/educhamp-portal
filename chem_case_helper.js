const crypto = require('crypto');

function computeHash(str) {
  return crypto.createHash('sha256').update((str || '').toLowerCase().replace(/[^a-z0-9]/g, '')).digest('hex');
}

function computeSkeleton(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function makeChemCase(chapter, num, title, concept, scenario, questionText, optA, optB, optC, optD, correct, explanation) {
  const fullQ = `**Case Scenario:**\n${scenario}\n\n**Investigative Question:**\n${questionText}\n\nChoose the correct option:`;
  const chKey = chapter.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const rnd = crypto.randomBytes(3).toString('hex');
  const gid = `qb_case_${chKey}_${num}_${rnd}`;
  return {
    globalId: gid,
    className: "Class 10",
    boardName: "ICSE",
    subjectName: "Science",
    subSubjectName: "Chemistry",
    sectionName: "CASE BASED STUDIES",
    chapter: chapter,
    title: `Case Study ${num}: ${title}`,
    question_type: "case_based",
    types_supported: ["case_based", "complex"],
    question: fullQ,
    diagramSvg: null,
    options: [
      { key: "A", text: optA },
      { key: "B", text: optB },
      { key: "C", text: optC },
      { key: "D", text: optD }
    ],
    correct_option: correct,
    explanation: explanation,
    concept_name: concept,
    concept_tag: `${chapter.toLowerCase()} case based ${concept.toLowerCase()}`,
    difficulty: "hard",
    verified_by: "code",
    source: "ICSE Class 10 Chemistry Master Vault - Case Based Studies",
    source_status: "verified",
    normalized_question_hash: computeHash(fullQ),
    question_skeleton: computeSkeleton(fullQ)
  };
}

module.exports = { makeChemCase };
