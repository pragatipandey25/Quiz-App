const communication = {
  label: "Communication",
  questions: [
    {
      id: 1,
      prompt: "Which logic gate outputs 1 only when both inputs are 1?",
      options: ["OR", "AND", "NOT", "XOR"],
      answerIndex: 1,
      explanation: "An AND gate returns true only when both inputs are true.",
    },
    {
      id: 2,
      prompt:
        "Which medium is commonly used for high-speed long-distance communication?",
      options: [
        "Twisted pair",
        "Optical fiber",
        "Copper wire",
        "Rubber cable",
      ],
      answerIndex: 1,
      explanation:
        "Optical fiber carries data using light and supports high bandwidth over long distances.",
    },
    {
      id: 3,
      prompt: "Which device regenerates signals over long distances?",
      options: ["Repeater", "Modulator", "Comparator", "Encoder"],
      answerIndex: 0,
      explanation: "Repeaters amplify or regenerate signals to reduce attenuation.",
    },
  ],
};

export default communication;