import { useMemo, useState } from "react";
import "./App.css";

const quizQuestions = [
  {
    id: 1,
    prompt:
      "Which hook is used to keep local state in a React function component?",
    options: ["useRef", "useState", "useMemo", "useEffect"],
    answerIndex: 1,
    explanation:
      "useState returns a value and a setter, which is the standard way to manage local state in function components.",
  },
  {
    id: 2,
    prompt: "What does JSX compile to?",
    options: [
      "HTML templates",
      "CSS modules",
      "JavaScript function calls",
      "A database query",
    ],
    answerIndex: 2,
    explanation:
      "JSX is syntax sugar that compiles into JavaScript calls that create React elements.",
  },
  {
    id: 3,
    prompt: "What is the main benefit of lifting state up?",
    options: [
      "It makes CSS smaller",
      "It shares data between sibling components",
      "It removes the need for props",
      "It prevents bundling",
    ],
    answerIndex: 1,
    explanation:
      "Lifting state up lets a parent component coordinate data that multiple children need.",
  },
  {
    id: 4,
    prompt:
      "Which file typically renders the root React component in a Vite app?",
    options: ["index.css", "main.jsx", "vite.config.js", "package.json"],
    answerIndex: 1,
    explanation:
      "Vite apps usually mount React from main.jsx, where createRoot targets the root DOM node.",
  },
  {
    id: 5,
    prompt: "Which of these is a good practice for accessible buttons?",
    options: [
      "Use divs with onClick",
      "Hide all focus states",
      "Use semantic button elements",
      "Put interactive controls inside headings",
    ],
    answerIndex: 2,
    explanation:
      "Semantic button elements support keyboard interaction and screen readers out of the box.",
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [locked, setLocked] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isFinished = currentQuestionIndex >= quizQuestions.length;

  const score = useMemo(
    () => answers.filter((entry) => entry.correct).length,
    [answers],
  );

  const progressValue = isFinished
    ? quizQuestions.length
    : currentQuestionIndex + 1;

  const handleSelect = (optionIndex) => {
    if (locked) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmit = () => {
    if (locked || selectedOption === null) return;

    const correct = selectedOption === currentQuestion.answerIndex;
    setAnswers((previousAnswers) => [
      ...previousAnswers,
      {
        questionId: currentQuestion.id,
        selectedOption,
        correct,
      },
    ]);
    setLocked(true);
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
    setSelectedOption(null);
    setLocked(false);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setLocked(false);
  };

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">React quiz app</span>
          <h1>Quiz Lab</h1>
          <p>
            A focused quiz experience with instant feedback, score tracking, and
            a clean finish screen.
          </p>
        </div>

        <div className="stats-grid" aria-label="Quiz summary">
          <article>
            <span>Questions</span>
            <strong>{quizQuestions.length}</strong>
          </article>
          <article>
            <span>Current score</span>
            <strong>
              {score}/{quizQuestions.length}
            </strong>
          </article>
          <article>
            <span>Progress</span>
            <strong>
              {progressValue}/{quizQuestions.length}
            </strong>
          </article>
        </div>
      </section>

      <section className="quiz-card" aria-live="polite">
        {!isFinished ? (
          <>
            <div className="quiz-header">
              <div>
                <p className="quiz-kicker">
                  Question {currentQuestionIndex + 1}
                </p>
                <h2>{currentQuestion.prompt}</h2>
              </div>
              <span className="quiz-badge">{score} correct</span>
            </div>

            <div className="progress-track" aria-hidden="true">
              <div
                className="progress-fill"
                style={{
                  width: `${(progressValue / quizQuestions.length) * 100}%`,
                }}
              />
            </div>

            <div
              className="option-list"
              role="listbox"
              aria-label="Answer choices"
            >
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = selectedOption === optionIndex;
                const isCorrect =
                  locked && optionIndex === currentQuestion.answerIndex;
                const isWrong =
                  locked &&
                  isSelected &&
                  optionIndex !== currentQuestion.answerIndex;

                return (
                  <button
                    key={option}
                    type="button"
                    className={[
                      "option-card",
                      isSelected ? "selected" : "",
                      isCorrect ? "correct" : "",
                      isWrong ? "wrong" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => handleSelect(optionIndex)}
                    disabled={locked}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="option-index">{optionIndex + 1}</span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {locked ? (
              <div className="feedback-panel">
                <p className="feedback-label">
                  {selectedOption === currentQuestion.answerIndex
                    ? "Correct answer"
                    : "Not quite"}
                </p>
                <p>{currentQuestion.explanation}</p>
              </div>
            ) : null}

            <div className="actions-row">
              <button
                type="button"
                className="secondary-button"
                onClick={restartQuiz}
              >
                Restart
              </button>

              {!locked ? (
                <button
                  type="button"
                  className="primary-button"
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                >
                  Check answer
                </button>
              ) : (
                <button
                  type="button"
                  className="primary-button"
                  onClick={goToNextQuestion}
                >
                  Next question
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="results-panel">
            <p className="quiz-kicker">Quiz complete</p>
            <h2>
              You scored {score} out of {quizQuestions.length}.
            </h2>
            <p>
              {score === quizQuestions.length
                ? "Perfect run. You nailed every question."
                : "Nice work. Review the answers below, then try again to improve your score."}
            </p>

            <div className="results-summary">
              {quizQuestions.map((question, questionIndex) => {
                const answer = answers[questionIndex];
                const selected = answer
                  ? question.options[answer.selectedOption]
                  : "No answer";
                return (
                  <article key={question.id} className="result-item">
                    <span
                      className={
                        answer?.correct
                          ? "result-mark success"
                          : "result-mark error"
                      }
                    >
                      {answer?.correct ? "Correct" : "Review"}
                    </span>
                    <p>{question.prompt}</p>
                    <small>
                      Your answer: {selected} | Correct answer:{" "}
                      {question.options[question.answerIndex]}
                    </small>
                  </article>
                );
              })}
            </div>

            <div className="actions-row">
              <button
                type="button"
                className="primary-button"
                onClick={restartQuiz}
              >
                Try again
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
