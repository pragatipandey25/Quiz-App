const thermo = {
  label: "Thermodynamics",
  questions: [
    {
      id: 1,
      prompt:
        "Which law relates pressure, volume, and temperature of a gas?",
      options: [
        "Boyle's law",
        "Charles's law",
        "Ideal gas law",
        "Newton's law",
      ],
      answerIndex: 2,
      explanation:
        "The ideal gas law connects pressure, volume, temperature, and gas amount.",
    },
    {
      id: 2,
      prompt: "Which term describes heat transfer by fluid motion?",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      answerIndex: 1,
      explanation: "Convection transfers heat through moving fluid.",
    },
    {
      id: 3,
      prompt: "What is the Zeroth law related to?",
      options: ["Work", "Temperature equilibrium", "Entropy", "Pressure"],
      answerIndex: 1,
      explanation:
        "The Zeroth law establishes the concept of thermal equilibrium and temperature.",
    },
  ],
};

export default thermo;