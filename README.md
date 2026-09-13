-- Dev Stack Builder

A modern and responsive web application—'Dev Stack Builder'—where users can learn about various development technologies and create a custom 'technology stack' (a curated list of technologies) based on their preferences.

- Live Link: https://devstack-lime-eta.vercel.app/

---

- ​​Features

Fully responsive design
Opportunity to learn about various development technologies
Add new technologies to a personal stack
Prevent selecting the same technology multiple times
Remove specific technologies from the stack
Clear all selected technologies at once
Display technology ratings
Information regarding categories, difficulty levels, and badges
Fast and smooth user experience
Modern User Interface (UI) built with Tailwind CSS
Dynamic data loading from JSON
Mobile-friendly navigation

---

- ​​Technologies Used

-- React
-- TypeScript
-- Tailwind CSS
-- Vite
-- React Icons
-- JavaScript / ES6+
-- JSON

---

- ​​Project Overview

- Home / Hero Section

The hero section introduces the application and allows users to explore various technologies or learn more about the project.

- Technologies Section

Users can browse the available technologies here, which include the following details:

- Technology Name
- Category
- Description
- Rating
- Difficulty Level
- Badge
- Technology Icon

- Your Stack

Selected technologies are displayed in a dedicated **'Your Stack'** section. What users can do:

- Add technologies
- Remove a specific technology
- Remove all technologies
- View the total number of selected technologies

---

- ​​Project Structure

```text
src/
├── assets/
│   ├── logo-text.png
│   └── banner-stack.png
│
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── technologyes/
│       ├── Technologe.tsx
│       ├── YourStack.tsx
│       └── Footer.tsx
│
├── type/
│   └── type.ts
│
├── App.tsx
├── App.css
└── main.tsx

public/
└── data.json
```

---

Installation and Setup

1. Clone the repository

```bash
git clone [https://github.com/890asif/assingment-5-devStack.git]
```

### 2. Navigate to the project directory

```bash
cd dev-stack
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

The application will then run locally using Vite. ---

- ​​Project Objectives

The primary goal of this project is to practice and demonstrate the following:

- React component development
- TypeScript type safety
- React Props and State
- Event handling
- Array methods
- Conditional rendering
- Promise-based data loading
- `use()` and `Suspense`
- Responsive UI design
- Tailwind CSS
- Component-based architecture

---

- ​​Responsive Design

The application is designed to function seamlessly across all devices:

- Desktop
- Laptop
- Tablet
- Mobile

---

- ​​Future Enhancements

Potential features to be added in the future:

- Technology search
- Filtering technologies by category
- Dark mode
- Saving stacks using Local Storage
- User authentication
- Stack statistics
- User profiles

---

- ​​Developer

-- MD Asif Ali

Web Developer | JavaScript, TypeScript, Tailwind, React

---

- ​​If you like this project, please consider giving the repository a star!

-- This project was created for educational and practice purposes.
