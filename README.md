# Web Dev Portfolio

This repository contains a personal portfolio website for a web developer and full-stack engineer. It is designed to showcase technical skills, featured projects, background experience, and contact information in a modern and responsive single-page application.

Live demo: https://mosarah99.github.io/webdev-portfolio

## Project Overview

This project is a portfolio site built primarily for myself, but structured in a way that can also serve as a reusable template for other web developers or job-seeking technologists. The app includes:

- A landing page with a hero section and introductory content
- A skills page to display technical competencies
- A projects page with filtering and pagination
- Featured project highlights and a project detail experience
- A contact section for inquiries or networking
- A polished UI built with a professional dark/light theme system

## Tech Stack

This project is built with the following technologies and versions from the current configuration:

- React: 19.2.4
- React DOM: 19.2.4
- TypeScript: ~5.9.3
- Vite: 8.0.1
- @vitejs/plugin-react: 6.0.1
- @mui/material: 9.3.1
- @mui/icons-material: 9.3.1
- @emotion/react: 11.14.0
- @emotion/styled: 11.14.1
- react-router: 8.3.0
- nuqs: 2.8.9
- react-redux: 9.2.0
- @reduxjs/toolkit: 2.11.2
- swiper: 14.1.0
- react-markdown: 10.1.0
- rehype-raw: 7.0.0
- uuid: 14.0.2
- usehooks-ts: 3.1.1
- ESLint: 9.39.4

## Main Techniques and Design Patterns Used

The codebase incorporates several practical frontend patterns and visual techniques:

- Responsive single-page portfolio layout using React and MUI
- Custom theme system with palette-based styling and responsive typography
- Fixed background hero sections with layered gradients and background-attachment for a premium landing-page effect
- Reusable section and card components to keep UI consistent across pages
- Data-driven project and skill rendering from typed data files
- Filterable and paginated project browsing using state derived from selected skill categories
- Featured project carousel using Swiper with autoplay, coverflow effect, and pagination
- Lazy loading of route pages using React lazy imports for smoother performance
- URL-driven page state using nuqs and browser query parameters
- Custom navigation hook and page schema-based routing structure
- Glass-like panels and modern UI surfaces using MUI styling overrides and alpha-based color blending

## Project Structure

The application is organized to make the portfolio easier to maintain and extend:

- src/App.tsx: root app layout and routing shell
- src/pages/: page-level components such as Home, Projects, Skills, and Contact
- src/components/: reusable UI components like buttons, cards, sections, modals, and navigation
- src/templates/: higher-order reusable templates such as hero sections and headers
- src/assets/: project and skill data used to populate content dynamically
- src/theme/: custom theme creation and palette configuration

## What a Beginner Can Learn from This Project

This project is a strong learning resource for someone starting in frontend development or full-stack web work:

- How to structure a React app with reusable components
- How to use TypeScript with typed data models and props
- How to build responsive layouts with MUI and CSS utilities
- How to create routing for multi-page portfolio navigation
- How to work with theme customization and color systems
- How to load data from configuration files and render dynamic lists
- How to implement filtering, pagination, and interactive UI states
- How to use image backgrounds, gradients, and section styling for branding
- How to organize a portfolio project for real-world presentation and maintainability

## How to Run the Project Locally

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Build for production:

   npm run build

6. Preview the production build:

   npm run preview

## Contribution Guidelines

Contributions are welcome. If you want to improve the portfolio, add sections, refine styling, or fix bugs, here is a good workflow:

1. Fork the repository
2. Create a feature branch:

   git checkout -b feature/your-improvement

3. Make your changes in a focused and well-documented way
4. Run the project locally and test the affected area
5. Commit your changes with a clear message:

   git commit -m "Add: your change description"

6. Push the branch:

   git push origin feature/your-improvement

7. Open a pull request describing the improvement, bug fix, or enhancement

Good contribution ideas include:

- Improving the homepage copy and branding
- Adding new project data and case studies
- Enhancing mobile responsiveness
- Improving accessibility and keyboard navigation
- Updating the color palette or typography system
- Refactoring repeated UI logic into cleaner reusable components

## Notes

This project is intentionally designed as a personal portfolio with a strong visual identity, real-world project storytelling, and a professional web developer aesthetic. It reflects a practical blend of portfolio presentation and frontend code architecture, making it useful both as a personal site and as a reference project for aspiring developers.

## Repository Status

- Portfolio project for a web developer/full-stack professional
- Frontend-focused project with reusable UI patterns
- Suitable for GitHub Pages deployment
- Structured for easy expansion and maintenance

