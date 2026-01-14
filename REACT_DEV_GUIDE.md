# React Portfolio - Development Guide

## Setup

After the React migration, the portfolio is now a modern React application using Vite for bundling and development.

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This starts a Vite dev server with hot module reloading enabled. It will output the local URL to access (typically `http://localhost:5173`).

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Project Structure

```
src/
├── App.jsx              # Main application component
├── index.jsx            # React entry point
├── components/          # React components
│   ├── Navbar.jsx       # Navigation with burger menu
│   ├── Hero.jsx         # About/hero section
│   ├── Projects.jsx     # Project gallery with collapsibles
│   ├── ProjectCard.jsx  # Individual project card
│   ├── Experience.jsx   # Employment history
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer with dynamic year
└── data/
    ├── projects.json    # All project data (27 projects, 4 categories)
    └── employment.json  # Employment history (3 positions)

public/
├── index.html          # HTML entry point for webpack
├── media/              # Static assets (images, fonts, resumes)
└── CNAME               # GitHub Pages custom domain

styles/
└── bulma_version.css   # Custom Bulma CSS overrides
```

## Key Features

- **Responsive Design**: Mobile-first approach with Bulma framework
- **Dynamic Collapsibles**: Project categories collapse on mobile (<= 1023px), expand on desktop
- **Data-Driven**: All projects and experience rendered from JSON files
- **Email Obfuscation**: Email address base64-encoded in Hero component
- **Contact Form**: FormSubmit.co integration for email submissions

## Building & Deploying

The site is hosted on GitHub Pages. To deploy:

1. Run `npm run build`
2. The `dist/` folder contents should be deployed to the `gh-pages` branch

Current workflow uses `public/CNAME` for custom domain configuration.

## Technologies

- **React 19.2.1**: UI framework
- **Vite**: Module bundler and development server
- **Bulma 0.9.3**: CSS framework (via CDN)

## Styling

Bulma is loaded via CDN in the HTML head. Custom overrides are in `styles/bulma_version.css`. All component styles use Bulma utility classes and custom CSS.

## Notes

- The old `src/script.js` and `src/components.js` are deprecated and can be removed
- `old_version.html` is the previous static version for reference
- Assets are served from `public/media/` and referenced with `/media/...` paths in the application
