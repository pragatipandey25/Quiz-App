import materials from "./materials.js";
import surveying from "./surveying.js";
import structures from "./structures.js";

const ce = {
  label: "Civil",
  eyebrow: "BTech quiz app",
  title: "Civil Fundamentals",
  description:
    "Subject-wise practice for structures, surveying, and materials.",
  subjects: {
    materials,
    surveying,
    structures,
  },
};

export default ce;