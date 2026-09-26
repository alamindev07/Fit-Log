FitLog

FitLog is a modern, responsive workout library and daily training planner built with Next.js. It allows users to explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and manage their training directly from the browser.

🔗 Project Links

Live Project: https://fitlog07.netlify.app/

GitHub Repository: https://github.com/alamindev07/Fit-Log

🛠️ Technologies Used

Next.js

React

JavaScript (JSX)

Tailwind CSS

Lucide React

React Hot Toast

REST API

Browser LocalStorage

Next.js App Router

✨ Key Features

Workout Library — Fetches workout data from a REST API and displays workout information in a responsive grid.

Workout Details — Dynamic details page with image, description, muscle groups, equipment, difficulty, sets, reps, duration, calories, rating, and instructions.

Daily Workout Plan — Add up to five workouts, view plan metrics, mark workouts as done, and remove workouts.

Save for Later — Save workouts for later and manage saved workouts from the My Plan page.

LocalStorage Persistence — Today's Plan and Saved Workouts persist after page refresh.

Workout Sorting — Sort workouts by Duration, Calories, or Rating.

Responsive Design — Optimized for mobile, tablet, laptop, and desktop screens.

Loading & Error States — Includes loading animation, API error handling, invalid workout handling, and a custom 404 page.

Toast Notifications — Provides feedback for add, save, complete, and remove actions.

Modern UI — Dark fitness-focused interface with lime accent colors and responsive components.

📋 Core Functionalities

Home Page

Workout Library hero section

Workout collection

Responsive workout cards

Workout count

Workout sorting

Loading state

API error state

Workout Details Page

Dynamic route:

/workout/[id]

Includes:

Workout image and name

Muscle groups

Equipment

Difficulty

Sets and reps

Duration

Calories

Rating

Description

Four-step instructions

Add to Today's Plan

Save for Later

My Plan Page

Route:

/my-plan

Includes two tabs:

Today's Plan

Saved

Today's Plan provides:

Exercise count

Total minutes

Total calories

View Details

Mark as Done

Remove workout

Saved provides:

Saved workout cards

View Details

Remove

🔌 API

All Workouts

https://api.abcz.workers.dev/api/fitlog

Single Workout

https://api.abcz.workers.dev/api/fitlog/:id

💾 LocalStorage

FitLog uses browser LocalStorage to persist user selections.

Storage keys:

fitlog-plan
fitlog-saved

fitlog-plan stores today's selected workouts.

fitlog-saved stores workouts saved for later.

The application restores these values after a browser refresh.

🚫 Plan Limit

Today's workout plan supports a maximum of five workouts.

The application prevents:

Adding more than five workouts.

Adding the same workout multiple times.

Saving the same workout multiple times.

📱 Responsive Design

FitLog is designed for:

Mobile devices

Tablets

Laptops

Desktop screens

Responsive Tailwind CSS utilities are used throughout the application.

⚡ Loading & Error Handling

The application provides appropriate UI feedback for different states.

Loading

Loading workouts...

API Error

A friendly error message and retry action are displayed when the workout API cannot be loaded.

Invalid Route

A custom 404 page is provided for unknown routes.

Invalid Workout

If a workout cannot be found, the details page displays a graceful error state.

🔔 Toast Notifications

React Hot Toast is used for instant feedback, including:

Workout added to today's plan

Workout already exists in today's plan

Workout saved for later

Workout already saved

Workout marked as done

Workout removed from today's plan

Workout removed from saved

📂 Project Structure

fit-log/
├── public/
│   ├── logo.png
│   └── banner.png
│
├── src/
│   ├── app/
│   │   ├── my-plan/
│   │   │   └── page.jsx
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   ├── not-found.jsx
│   │   └── page.jsx
│   │
│   ├── components/
│   │   ├── EmptyState.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PlanWorkoutCard.jsx
│   │   ├── SortDropdown.jsx
│   │   ├── WorkoutCard.jsx
│   │   └── WorkoutGrid.jsx
│   │
│   ├── context/
│   │   └── FitLogContext.jsx
│   │
│   └── lib/
│       └── api.js
│
├── package.json
├── next.config.mjs
└── README.md

🚀 Getting Started

1. Clone the Repository

git clone https://github.com/alamindev07/Fit-Log

2. Navigate to the Project

cd fit-log

3. Install Dependencies

npm install

4. Start Development Server

npm run dev

5. Open in Browser

http://localhost:3000

🏗️ Production Build

Create a production build:

npm run build

Start the production server:

npm start

📦 Main Dependencies

Next.js — React framework and application routing.

Tailwind CSS — Responsive styling and UI development.

Lucide React — Modern interface icons.

React Hot Toast — User feedback and action notifications.

🎯 Assignment Requirements Covered

Responsive design

Navbar

Workout navigation

My Plan navigation

Plan count badge

Saved count badge

Hero section

Workout Library

API integration

Responsive workout grid

Workout details page

Add to Today's Plan

Save for Later

My Plan page

Today's Plan tab

Saved tab

Plan metrics

Mark as Done

Remove workout

Five-workout plan limit

Duplicate prevention

LocalStorage persistence

Loading state

Error handling

Toast notifications

Sorting by Duration

Sorting by Calories

Sorting by Rating

Custom 404 page

Responsive mobile navigation

Footer

🌐 Deployment

FitLog can be deployed to platforms such as:

Netlify

Before deployment, verify that the production build completes successfully:

npm run build

👨‍💻 Developer

MD AL-AMIN

Developer & IT Assistant

GitHub: alamindev07

Portfolio: https://alamindev07.com/

📄 License

This project was created for educational and assignment purposes.