# BTech Quiz Portal

A React + Vite quiz app for BTech students. It starts with a landing page, includes login and signup UI, and then opens a branch-wise quiz experience with subject-level decks.

## Features

- Landing page with sign up, log in, and explore options
- Frontend-only login and signup modal flow
- Course selection for Computer Science, ECE, Mechanical, and Civil
- Subject-wise quizzes inside each course
- Score tracking, progress bar, and review screen

## Project Structure

- `src/App.jsx` handles the landing page, auth modal, and quiz flow
- `src/data/quizCatalog.js` combines the course data
- `src/data/*/` stores each course and subject quiz deck separately

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run lint` runs ESLint across the project

## Notes

- The login and signup flow is UI-only for now and does not connect to a backend.
- Core Computer Science content was merged into the Computer Science course, so CS is the main CS branch in the app.
