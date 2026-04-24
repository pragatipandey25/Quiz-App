const structures = {
  label: "Structures",
  questions: [
    {
      id: 1,
      prompt:
        "Which structural element carries loads primarily in compression?",
      options: ["Beam", "Column", "Tie", "Cable"],
      answerIndex: 1,
      explanation:
        "Columns are vertical members that mainly resist compressive loads.",
    },
    {
      id: 2,
      prompt: "Which type of foundation spreads loads over a large area?",
      options: [
        "Shallow foundation",
        "Deep foundation",
        "Pile cap",
        "Caisson",
      ],
      answerIndex: 0,
      explanation:
        "Shallow foundations distribute the load near the surface across a broader area.",
    },
    {
      id: 3,
      prompt: "What is the main purpose of a beam?",
      options: ["Resist bending", "Store water", "Measure angles", "Filter soil"],
      answerIndex: 0,
      explanation: "Beams primarily resist bending loads.",
    },
  ],
};

export default structures;