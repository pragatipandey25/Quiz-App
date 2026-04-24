const circuits = {
  label: "Circuits",
  questions: [
    {
      id: 1,
      prompt: "Which component opposes sudden changes in current?",
      options: ["Resistor", "Capacitor", "Inductor", "Diode"],
      answerIndex: 2,
      explanation:
        "An inductor stores energy in a magnetic field and resists rapid current change.",
    },
    {
      id: 2,
      prompt: "What is the standard unit of frequency?",
      options: ["Volt", "Watt", "Hertz", "Ohm"],
      answerIndex: 2,
      explanation: "Frequency is measured in hertz, or cycles per second.",
    },
    {
      id: 3,
      prompt: "Which device converts AC to DC?",
      options: ["Transformer", "Rectifier", "Oscillator", "Amplifier"],
      answerIndex: 1,
      explanation:
        "A rectifier allows current to flow in one direction and creates DC output.",
    },
  ],
};

export default circuits;