# Quiz Lab — BTech Quiz Portal

> A polished React + Vite quiz platform for Computer Science, ECE, Mechanical, and Civil.

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#how-it-works">How it works</a> ·
  <a href="#courses">Courses</a> ·
  <a href="#getting-started">Getting started</a>
</p>

---

## ✨ Highlights

- **Branch-first learning**: Choose your engineering branch, then move into subject-wise decks.
- **Guided quiz flow**: Progress bar, per-question feedback, and a complete results review.
- **Practice + Progress**: Timed/untimed practice concepts and a progress modal experience.
- **Clean UI with modals**: Frontend-only **Login / Signup** modal flow.

---

## 🖼️ Screenshots

Add screenshots for a premium look. If you don’t have them yet, keep these placeholders:

- Landing page: `screenshots/landing.png`
- Course selection: `screenshots/courses.png`
- Quiz question + options: `screenshots/quiz.png`
- Results review: `screenshots/results.png`

> Tip: Create a `screenshots/` folder and update these filenames once you capture images.

---

## 🧭 How it works

1. **Landing**
   - Explore the portal
   - Optionally log in / sign up (UI-only flow)
2. **Choose a course (branch)**
   - CS, ECE, ME, CE
3. **Pick a subject deck**
   - The quiz loads questions from the selected subject
4. **Take the quiz**
   - Select an option → Check answer → Next question
   - Progress updates live
5. **View results**
   - See score summary
   - Review correct/incorrect answers with explanations

---

## 🏗️ Courses / Branches

This app organizes content as:

- **Courses (branches)**: Computer Science (CSE), ECE, Mechanical (ME), Civil (CE)
- **Subjects**: Each branch includes subject-wise decks (data-driven)

The quiz catalog is assembled from:

- `src/data/quizCatalog.js`
- `src/data/{cse,ece,me,ce}/...`

---

## 🔌 Tech stack

- **React** (UI)
- **Vite** (build + dev server)
- **JavaScript ES Modules**

---

## 📦 Project structure

Key files:

- `index.html` — App entry HTML
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — Landing, auth modals, course/subject selection, quiz + results flow
- `src/data/quizCatalog.js` — Aggregates all branch data
- `src/data/*` — Decks/questions for each branch and subject

---

## 🚀 Getting started

### Prerequisites

- Node.js (LTS recommended)

### Install

```bash
npm install
```

### Run (development)

```bash
npm run dev
```

### Build (production)

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## 📝 Notes

- **Authentication is frontend-only**: Login/Signup currently stores user state in the UI and does not connect to a backend.
- The UI is designed around a **single-page quiz experience**: landing → quiz → results.

---

## 🤝 Contributing

Contributions are welcome.

If you add new questions or decks:

- Keep the data format consistent with existing quiz objects.
- Update the relevant branch module under `src/data/`.

---
