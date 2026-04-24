const materials = {
  label: "Materials",
  questions: [
    {
      id: 1,
      prompt:
        "Which material is commonly used as the primary binder in concrete?",
      options: ["Gypsum", "Cement", "Lime", "Sand"],
      answerIndex: 1,
      explanation:
        "Cement acts as the binder that holds aggregates together in concrete.",
    },
    {
      id: 2,
      prompt: "What is the SI unit of force?",
      options: ["Joule", "Newton", "Pascal", "Watt"],
      answerIndex: 1,
      explanation:
        "Force is measured in newtons in the International System of Units.",
    },
    {
      id: 3,
      prompt: "Which property of cement is most related to setting time?",
      options: ["Fineness", "Color", "Porosity", "Mass"],
      answerIndex: 0,
      explanation:
        "Fineness affects the rate of hydration and therefore the setting time.",
    },
  ],
};

export default materials;