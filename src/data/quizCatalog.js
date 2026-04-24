import cse from "./cse/index.js";
import ece from "./ece/index.js";
import me from "./me/index.js";
import ce from "./ce/index.js";

const quizCatalog = {
  cse,
  ece,
  me,
  ce,
};

export const courseOrder = ["cse", "ece", "me", "ce"];

export default quizCatalog;