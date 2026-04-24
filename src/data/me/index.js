import thermo from "./thermo.js";
import manufacturing from "./manufacturing.js";
import machineDesign from "./machineDesign.js";

const me = {
  label: "Mechanical",
  eyebrow: "BTech quiz app",
  title: "Mechanical Fundamentals",
  description:
    "Subject-wise practice for thermodynamics, manufacturing, and machine design.",
  subjects: {
    thermo,
    manufacturing,
    machineDesign,
  },
};

export default me;