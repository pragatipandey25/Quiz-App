import { useMemo, useState } from "react";
import "./App.css";
import quizCatalog, { courseOrder } from "./data/quizCatalog.js";

function LandingPage({ onLogin, onSignup, onExplore }) {
  return (
    <main className="landing-shell">
      <section className="landing-hero">
        <div className="landing-copy">
          <span className="eyebrow">BTech quiz portal</span>
          <h1>Learn, practice, and test your core engineering subjects.</h1>
          <p>
            A focused quiz platform for Computer Science, ECE, Mechanical, and
            Civil topics. Sign in to save your learning session or create a new
            account to get started.
          </p>

          <div className="landing-actions">
            <button type="button" className="primary-button" onClick={onSignup}>
              Sign up
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={onLogin}
            >
              Log in
            </button>
          </div>

          <button type="button" className="landing-link" onClick={onExplore}>
            Explore quizzes without an account
          </button>
        </div>

        <div className="landing-panel">
          <article>
            <span>4 branches</span>
            <strong>CS, ECE, ME, CE</strong>
            <p>Choose a branch and jump into subject-wise practice.</p>
          </article>
          <article>
            <span>Login + signup</span>
            <strong>Quick access</strong>
            <p>Simple frontend auth flow before entering the quiz.</p>
          </article>
          <article>
            <span>Course-wise subjects</span>
            <strong>Structured learning</strong>
            <p>Each branch is split into subject decks for easier revision.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

function AuthModal({ mode, onClose, onSwitchMode, onSubmit }) {
  const isLogin = mode === "login";

  return (
    <div className="auth-backdrop" role="presentation" onClick={onClose}>
      <section
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-label={isLogin ? "Log in" : "Sign up"}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="auth-header">
          <div>
            <span className="eyebrow">
              {isLogin ? "Welcome back" : "Join now"}
            </span>
            <h2>{isLogin ? "Log in" : "Create account"}</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          {!isLogin ? (
            <label>
              Full name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
          ) : null}

          <label>
            Email address
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>

          <button type="submit" className="primary-button">
            {isLogin ? "Log in" : "Sign up"}
          </button>
        </form>

        <button type="button" className="landing-link" onClick={onSwitchMode}>
          {isLogin
            ? "Need an account? Sign up"
            : "Already have an account? Log in"}
        </button>
      </section>
    </div>
  );
}

function CourseTabs({ selectedCourse, onChangeCourse }) {
  return (
    <div className="course-picker" aria-label="BTech courses">
      {courseOrder.map((courseKey) => {
        const course = quizCatalog[courseKey];
        const isActive = selectedCourse === courseKey;

        return (
          <button
            key={courseKey}
            type="button"
            className={["course-chip", isActive ? "active" : ""]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onChangeCourse(courseKey)}
          >
            {course.label}
          </button>
        );
      })}
    </div>
  );
}

function SubjectTabs({ subjects, selectedSubject, onChangeSubject }) {
  return (
    <div className="subject-picker" aria-label="Subject list">
      {Object.entries(subjects).map(([subjectKey, subject]) => {
        const isActive = selectedSubject === subjectKey;

        return (
          <button
            key={subjectKey}
            type="button"
            className={["subject-chip", isActive ? "active" : ""]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onChangeSubject(subjectKey)}
          >
            {subject.label}
          </button>
        );
      })}
    </div>
  );
}

function QuizSummary({ questionCount, score, progressValue }) {
  return (
    <div className="stats-grid" aria-label="Quiz summary">
      <article>
        <span>Questions</span>
        <strong>{questionCount}</strong>
      </article>
      <article>
        <span>Current score</span>
        <strong>
          {score}/{questionCount}
        </strong>
      </article>
      <article>
        <span>Progress</span>
        <strong>
          {progressValue}/{questionCount}
        </strong>
      </article>
    </div>
  );
}

function App() {
  const initialCourse = courseOrder[0];
  const initialSubject = Object.keys(quizCatalog[initialCourse].subjects)[0];

  const [screen, setScreen] = useState("landing");
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(initialCourse);
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [locked, setLocked] = useState(false);

  const quiz = quizCatalog[selectedCourse];
  const subjectKeys = Object.keys(quiz.subjects);
  const activeSubjectKey = quiz.subjects[selectedSubject]
    ? selectedSubject
    : subjectKeys[0];
  const activeSubject = quiz.subjects[activeSubjectKey];
  const quizQuestions = activeSubject.questions;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isFinished = currentQuestionIndex >= quizQuestions.length;

  const score = useMemo(
    () => answers.filter((entry) => entry.correct).length,
    [answers],
  );

  const progressValue = isFinished
    ? quizQuestions.length
    : currentQuestionIndex + 1;

  const questionCount = quizQuestions.length;

  const resetQuizState = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setLocked(false);
  };

  const startCourse = (courseKey) => {
    const nextSubject = Object.keys(quizCatalog[courseKey].subjects)[0];

    setSelectedCourse(courseKey);
    setSelectedSubject(nextSubject);
    resetQuizState();
  };

  const startSubject = (subjectKey) => {
    setSelectedSubject(subjectKey);
    resetQuizState();
  };

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
    resetQuizState();
  };

  const openAuth = (mode) => {
    setAuthMode(mode);
    setScreen("auth");
  };

  const handleAuthSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name") || email;

    setUser({ name, email });
    setScreen("quiz");
  };

  const enterQuiz = () => {
    setScreen("quiz");
  };

  const logout = () => {
    setUser(null);
    setScreen("landing");
    resetQuizState();
  };

  if (screen === "landing") {
    return (
      <>
        <LandingPage
          onLogin={() => openAuth("login")}
          onSignup={() => openAuth("signup")}
          onExplore={enterQuiz}
        />
      </>
    );
  }

  if (screen === "auth") {
    return (
      <>
        <LandingPage
          onLogin={() => openAuth("login")}
          onSignup={() => openAuth("signup")}
          onExplore={enterQuiz}
        />
        <AuthModal
          mode={authMode}
          onClose={() => setScreen("landing")}
          onSwitchMode={() =>
            setAuthMode((currentMode) =>
              currentMode === "login" ? "signup" : "login",
            )
          }
          onSubmit={handleAuthSubmit}
        />
      </>
    );
  }

  return (
    <main className="app-shell">
      <header className="app-topbar">
        <div>
          <span className="eyebrow">BTech quiz portal</span>
          <h1 className="topbar-title">Quiz Lab</h1>
        </div>
        <div className="topbar-actions">
          <span className="user-pill">
            {user ? `Hi, ${user.name}` : "Guest session"}
          </span>
          <button type="button" className="secondary-button" onClick={logout}>
            {user ? "Log out" : "Home"}
          </button>
        </div>
      </header>

      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">{quiz.eyebrow}</span>
          <h1>{quiz.title}</h1>
          <p>{quiz.description}</p>

          <CourseTabs
            selectedCourse={selectedCourse}
            onChangeCourse={startCourse}
          />

          <SubjectTabs
            subjects={quiz.subjects}
            selectedSubject={activeSubjectKey}
            onChangeSubject={startSubject}
          />
        </div>

        <QuizSummary
          questionCount={questionCount}
          score={score}
          progressValue={progressValue}
        />
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
                  width: `${(progressValue / questionCount) * 100}%`,
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
              You scored {score} out of {questionCount}.
            </h2>
            <p>
              {score === questionCount
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
