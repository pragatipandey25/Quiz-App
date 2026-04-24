const manufacturing = {
  label: "Manufacturing",
  questions: [
    {
      id: 1,
      prompt: "Which process removes material using a rotating cutter?",
      options: ["Casting", "Welding", "Milling", "Forging"],
      answerIndex: 2,
      explanation:
        "Milling removes material from a workpiece using a rotating cutting tool.",
    },
    {
      id: 2,
      prompt: "Which process joins metals by melting them together?",
      options: ["Casting", "Welding", "Broaching", "Lathing"],
      answerIndex: 1,
      explanation:
        "Welding joins materials by fusion with or without filler material.",
    },
    {
      id: 3,
      prompt: "Which method is used to shape metal by compressive force?",
      options: ["Forging", "Polishing", "Annealing", "Tempering"],
      answerIndex: 0,
      explanation: "Forging shapes metal using compressive forces.",
    },
  ],
};

export default manufacturing;