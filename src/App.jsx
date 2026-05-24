import { useMemo, useState } from "react";
import "./App.css";
import quizCatalog, { courseOrder } from "./data/quizCatalog.js";

function Navbar({ user, onLogin, onSignup, onHome, onLogout }) {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div className="logo" onClick={onHome} role="button" tabIndex={0}>
          <strong>Quiz Lab</strong>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <button type="button" className="nav-link" onClick={onHome}>
            Home
          </button>
          <a className="nav-link" href="#features">
            Features
          </a>
          <a className="nav-link" href="#courses">
            Courses
          </a>
        </nav>

        <div className="nav-actions">
          {user ? (
            <>
              <span className="user-pill">Hi, {user.name}</span>
              <button className="secondary-button" onClick={onLogout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <button className="secondary-button" onClick={onLogin}>
                Log in
              </button>
              <button className="primary-button" onClick={onSignup}>
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Quiz Lab</div>
        <div>
          <a href="#">Privacy</a>
          <span> · </span>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function FeatureModal({
  featureKey,
  onClose,
  onPractice,
  onProgress,
  onExploreBranches,
}) {
  if (!featureKey) return null;

  const FEATURES = {
    practice: {
      title: "Practice mode",
      body: "Choose timed or untimed modes, adjust difficulty, and practice repeatedly until you master the topic.",
    },
    progress: {
      title: "Track progress",
      body: "Visualize your scores, review incorrect answers, and measure improvement over time.",
    },
    branch: {
      title: "Branch-focused",
      body: "Organized decks for CS, ECE, ME and CE so you can focus on the subjects that matter.",
    },
  };

  const feature = FEATURES[featureKey] || {
    title: "Feature",
    body: "Details coming soon.",
  };

  return (
    <div className="feature-backdrop" role="presentation" onClick={onClose}>
      <section
        className="feature-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <h3>{feature.title}</h3>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </header>
        <div className="feature-body">
          <p>{feature.body}</p>
        </div>
        <footer>
          {featureKey === "practice" ? (
            <button
              className="primary-button"
              onClick={() => {
                onPractice && onPractice();
                onClose && onClose();
              }}
            >
              Start practice
            </button>
          ) : featureKey === "progress" ? (
            <button
              className="primary-button"
              onClick={() => {
                onProgress && onProgress();
                onClose && onClose();
              }}
            >
              View progress
            </button>
          ) : (
            <button
              className="primary-button"
              onClick={() => {
                onExploreBranches && onExploreBranches();
                onClose && onClose();
              }}
            >
              Explore branches
            </button>
          )}
        </footer>
      </section>
    </div>
  );
}

function ProgressModal({ onClose, score, total, answers }) {
  return (
    <div className="feature-backdrop" role="presentation" onClick={onClose}>
      <section
        className="feature-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <h3>Your progress</h3>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </header>
        <div className="feature-body">
          <p>
            Score: <strong>{score}</strong> / <strong>{total}</strong>
          </p>
          <div className="progress-list">
            {answers.length ? (
              answers.map((a, i) => (
                <div key={i} className="progress-item">
                  <div>{a.questionId}</div>
                  <div>{a.correct ? "Correct" : "Wrong"}</div>
                </div>
              ))
            ) : (
              <p>No attempts yet.</p>
            )}
          </div>
        </div>
        <footer>
          <button className="primary-button" onClick={onClose}>
            Close
          </button>
        </footer>
      </section>
    </div>
  );
}

function LandingPage({
  onLogin,
  onSignup,
  onExplore,
  onStartCourse,
  onShowFeature,
}) {
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

      <section id="features" className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <article
            className="feature-card"
            role="button"
            tabIndex={0}
            onClick={() => onShowFeature && onShowFeature("practice")}
          >
            <h3>Practice mode</h3>
            <p>Timed and untimed quizzes to suit focused revision.</p>
          </article>
          <article
            className="feature-card"
            role="button"
            tabIndex={0}
            onClick={() => onShowFeature && onShowFeature("progress")}
          >
            <h3>Track progress</h3>
            <p>See your score, progress and review past answers.</p>
          </article>
          <article
            className="feature-card"
            role="button"
            tabIndex={0}
            onClick={() => onShowFeature && onShowFeature("branch")}
          >
            <h3>Branch-focused</h3>
            <p>Separate decks for CS, ECE, ME and CE subjects.</p>
          </article>
        </div>
      </section>

      <section id="courses" className="courses-section">
        <h2>Courses</h2>
        <div className="courses-grid">
          {courseOrder.map((courseKey) => {
            const course = quizCatalog[courseKey];
            return (
              <article key={courseKey} className="course-card">
                <div>
                  <strong>{course.label}</strong>
                  <p>{course.description}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => onStartCourse && onStartCourse(courseKey)}
                  >
                    Start
                  </button>
                </div>
              </article>
            );
          })}
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
  const [selectedFeature, setSelectedFeature] = useState(null);
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

  const showFeature = (featureKey) => {
    setSelectedFeature(featureKey);
  };

  const closeFeature = () => setSelectedFeature(null);

  const [practiceMode, setPracticeMode] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const handlePractice = () => {
    setPracticeMode(true);
    startCourse(selectedCourse);
    enterQuiz();
  };

  const handleShowProgress = () => {
    setShowProgress(true);
  };

  const handleExploreBranches = () => {
    setScreen("landing");
    // scroll to courses after render
    setTimeout(() => {
      try {
        window.location.hash = "#courses";
      } catch (e) {}
    }, 60);
  };

  const logout = () => {
    setUser(null);
    setScreen("landing");
    resetQuizState();
  };

  if (screen === "landing") {
    return (
      <>
        <Navbar
          user={user}
          onLogin={() => openAuth("login")}
          onSignup={() => openAuth("signup")}
          onHome={() => setScreen("landing")}
          onLogout={logout}
        />

        <LandingPage
          onLogin={() => openAuth("login")}
          onSignup={() => openAuth("signup")}
          onExplore={enterQuiz}
          onStartCourse={(courseKey) => {
            startCourse(courseKey);
            enterQuiz();
          }}
          onShowFeature={(k) => showFeature(k)}
        />

        {selectedFeature ? (
          <FeatureModal
            featureKey={selectedFeature}
            onClose={closeFeature}
            onPractice={handlePractice}
            onProgress={handleShowProgress}
            onExploreBranches={handleExploreBranches}
          />
        ) : null}

        {showProgress ? (
          <ProgressModal
            onClose={() => setShowProgress(false)}
            score={score}
            total={questionCount}
            answers={answers}
          />
        ) : null}

        <Footer />
      </>
    );
  }

  if (screen === "auth") {
    return (
      <>
        <Navbar
          user={user}
          onLogin={() => openAuth("login")}
          onSignup={() => openAuth("signup")}
          onHome={() => setScreen("landing")}
          onLogout={logout}
        />

        <LandingPage
          onLogin={() => openAuth("login")}
          onSignup={() => openAuth("signup")}
          onExplore={enterQuiz}
          onStartCourse={(courseKey) => {
            startCourse(courseKey);
            enterQuiz();
          }}
          onShowFeature={(k) => showFeature(k)}
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

        <Footer />
      </>
    );
  }

  return (
    <main className="app-shell">
      <Navbar
        user={user}
        onLogout={logout}
        onLogin={() => openAuth("login")}
        onSignup={() => openAuth("signup")}
        onHome={() => setScreen("landing")}
      />
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
      <Footer />
    </main>
  );
}

export default App;
