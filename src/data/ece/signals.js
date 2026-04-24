const signals = {
  label: "Signals",
  questions: [
    {
      id: 1,
      prompt: "Which modulation changes the carrier amplitude?",
      options: ["AM", "FM", "PM", "PCM"],
      answerIndex: 0,
      explanation: "Amplitude modulation varies the amplitude of the carrier wave.",
    },
    {
      id: 2,
      prompt: "What does sampling convert?",
      options: [
        "Analog signal to discrete time",
        "Digital signal to analog",
        "Current to voltage",
        "Noise to power",
      ],
      answerIndex: 0,
      explanation:
        "Sampling converts a continuous-time signal into a discrete-time one.",
    },
    {
      id: 3,
      prompt: "Which theorem sets a lower bound on sampling frequency?",
      options: ["Ohm's law", "Nyquist theorem", "Kirchhoff law", "Gauss law"],
      answerIndex: 1,
      explanation:
        "Nyquist theorem states the sampling rate should be at least twice the highest signal frequency.",
    },
  ],
};

export default signals;