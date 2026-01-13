# AI Coding Agent Instructions for This Repo

Essential context for working productively in this portfolio website codebase undergoing React migration.

## Current State (Branch: `react-version`)
- **Architecture:** Hybrid vanilla JS + React components; active migration from static HTML to data-driven React.
- **Data layer:** JSON imports via `assert { type: "json" }` in `src/script.js` (ES modules); data schemas in `src/data/projects.json`, `src/data/employment.json`.
- **Components:** `src/components.jsx` (React/JSX), `src/components.js` (React.createElement), and `src/script.js` (DOM manipulation + data loading).
- **Main branch:** `main` (static HTML); `react-version` (current, in-progress).
- **Deployment:** GitHub Pages with `public/CNAME`; CircleCI config exists (`.circleci/config.yaml`) but may need updating for build process.

## Data Schema & Patterns
- **Projects JSON structure** (`src/data/projects.json`):
  ```json
  {
    "web-apps": [{ 
      "name": "Project (Year)", 
      "link": "https://...", 
      "image": {"src": "media/images/...", "alt": "..."},
      "description": { 
        "about": "...", 
        "role": "...", 
        "teamSize": "N", 
        "status": "Complete|Ongoing", 
        "tools": "..." 
      }
    }],
    "games": [], "ux": [], "3d-models": []
  }
  ```
- **Component data binding:** `createProjectElement()` in `src/script.js` generates DOM from JSON; supports flexible field names (`role`/`whatIDid`, `projectLength`/`length`/`duration`).
- **React components:** `<Project>` (JSX) and `Project()` (createElement) exist with parallel implementations - JSX in `components.jsx`, createElement in `components.js`. Migration incomplete.

## Architecture & Key Files
- **`index.html`:** Main page structure, collapsible sections (`button.collapsible` + `div.content`), Bulma grid. React UMD scripts loaded but components not yet integrated.
- **`src/script.js`:** 
  - Imports `projects.json` & `employment.json` with ES module JSON assertions
  - `DOMContentLoaded`: email obfuscation, navbar burger, collapsibles, dynamic year
  - `createProjectElement()`: DOM generation from JSON (vanilla JS)
  - `loadProjects()`: Experimental React rendering (currently unused; `loadProjects()` call commented out)
- **`src/components.jsx`:** React components (`<Project>`, `<Job>`) using JSX syntax
- **`src/components.js`:** React components using `React.createElement()` (alternative to JSX)
- **`styles/`:** `bulma_version.css` (overrides), `slideshow.css`, `p1Specs.css`

## Critical UI Behaviors (Vanilla JS)
1. **Collapsible sections** (`setupCollapsibles()` in `src/script.js`):
   - Pattern: `button.collapsible` → `div.content` → `div.columns.projectContent`
   - **Breakpoint:** `<= 1023px` = collapsed by default (click to expand); `> 1023px` = always expanded
   - Implementation: toggles `maxHeight` between `0` and `scrollHeight`; uses `resize` listener
   - When adding sections: maintain `button.collapsible` + immediate sibling `.content` structure
2. **Navbar burger** (`#burger`):
   - Toggles `#nav-links.is-active` class for mobile menu
   - Hook IDs: preserve `#burger` and `#nav-links`
3. **Email obfuscation:**
   - Base64-encoded: `dGhlZWxsaW90Z29uZ0Bob3RtYWlsLmNvbQ==` → decoded at runtime
   - Target: `.email-link` class; do not remove
4. **Dynamic year:** `#year` element auto-populated with `new Date().getFullYear()`

## Bulma & Styling Conventions
- **Grid system:** `columns` wrapper + `column` children with responsive breakpoints:
  - `is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen`
- **Typography:** `is-size-*` (e.g., `is-size-2-desktop`, `is-size-3-touch`), `has-text-weight-bold`
- **Custom CSS:** Overrides in `styles/bulma_version.css`; avoid inline styles
- **Asset paths:** Relative from root: `media/images/...`, `media/Fonts/...`, `media/resumes/...`

## Developer Workflow
- **Local preview:** Open `index.html` directly in a browser or serve statically. Example with PowerShell:
  ```pwsh
  # Simple Python HTTP server (if Python is available)
  python -m http.server 8000
  # Then visit http://localhost:8000/index.html
  ```
- **No npm scripts:** `package.json` only lists dependencies; there are no scripts or build tasks. Do not rely on `npm run` unless adding scripts explicitly.
- **Hosting:** GitHub Pages deploys from `main`. Changes to HTML/CSS/JS are reflected after push.
- **Testing collapsibles:** Resize browser to <= 1023px width to test mobile collapse behavior.

## Migration Status & Future Work
- **Current approach:** Vanilla JS with JSON data imports via ES module assertions
- **React readiness:** Dependencies installed, UMD scripts loaded, components written but not yet rendered
- **Next steps:** See `plan-reactMigrationPlan.prompt.md` for Vite-based migration plan
- **Webpack note:** Empty `webpack.config` file exists; not currently used
- **Babel/dev deps:** Installed but inactive; build step not configured

## Common Tasks
- **Add a project:** Update `src/data/projects.json` under appropriate category key. Image path: `media/images/yourproject.png`
- **Add a category:** In `index.html`, duplicate `button.collapsible` + `div.content` pattern. Ensure `.projectContent` container exists inside
- **Modify navbar:** Update links in `index.html`; keep `#burger` + `#nav-links` IDs intact
- **Update email:** Change Base64 string in `src/script.js` (`encodedEmail` variable); keep `.email-link` class on anchor
- **Custom styling:** Add rules to `styles/bulma_version.css`; avoid breaking Bulma grid structure

## Known Issues & Quirks
- **Typo in import:** Line 1 of `src/script.js` has `projectDate` instead of `projectData` (variable is referenced as `projectData` later)
- **Empty `employment.json`:** Employment data file exists but is empty; employment section in HTML hardcoded
- **Unused `server/` directory:** Legacy folder; not part of current architecture
- **CircleCI config:** Expects Node 16.10 and npm test script (which doesn't exist); may need updating for actual build/deploy

## What to Avoid
- Introducing frameworks/build tools without direction
- Changing hook IDs or class names that `src/script.js` depends on (`#burger`, `#nav-links`, `.email-link`)
- Breaking Bulma's grid by removing essential `columns/column` wrappers
- Removing JSON import assertions - required for ES module JSON imports without build step

## Reference Files
- **Primary:**
  - [index.html](../index.html): Main page structure and content
  - [src/script.js](../src/script.js): All vanilla JS behaviors and JSON data imports
  - [src/data/projects.json](../src/data/projects.json): Project data schema
  - [styles/bulma_version.css](../styles/bulma_version.css): Custom styling overrides
- **React (experimental):**
  - [src/components.jsx](../src/components.jsx): JSX components
  - [src/components.js](../src/components.js): React.createElement alternative
- **Documentation:**
  - [plan-reactMigrationPlan.prompt.md](../plan-reactMigrationPlan.prompt.md): Future migration roadmap
  - [README.md](../README.md): Project overview
- **Assets:** `media/` directory (images, fonts, resumes)
