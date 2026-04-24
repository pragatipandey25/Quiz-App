import circuits from "./circuits.js";
import signals from "./signals.js";
import communication from "./communication.js";

const ece = {
  label: "Electronics & Communication",
  eyebrow: "BTech quiz app",
  title: "ECE Fundamentals",
  description:
    "Subject-wise practice for circuits, signals, and communication systems.",
  subjects: {
    circuits,
    signals,
    communication,
  },
};

export default ece;