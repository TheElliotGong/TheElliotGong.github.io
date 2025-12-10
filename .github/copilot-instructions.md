# AI Coding Agent Instructions for This Repo

These instructions capture the essential context to be productive quickly in this codebase. They document how the site is structured, how behavior is implemented, and the conventions to follow when making changes.

## Overview
- **Project type:** Static portfolio website hosted via GitHub Pages.
- **Primary files:** `index.html` (main page), `old_version.html` (legacy), `styles/*.css`, `src/script.js` (vanilla JS behaviors).
- **Assets:** Under `media/` (images, fonts, resumes, executables). `CNAME` indicates a custom domain.
- **CSS framework:** Bulma (`cdn.jsdelivr`), plus custom styles in `styles/`.
- **JS:** Plain DOM scripting in `src/script.js` for nav burger and collapsible sections; no bundler/build step.
- **React note:** `react`/`react-dom` are listed in `package.json` but currently unused. README mentions a possible future migration to React; treat current site as static unless explicitly asked to migrate.

## Architecture & Key Patterns
- **Page structure:** Single-page layout in `index.html` with sections: About, Projects (multiple categories), Experience, Contact.
- **Bulma layout:** Uses Bulma columns and responsive utility classes (e.g., `columns`, `column`, `is-one-third`, `is-size-*`, `has-text-weight-bold`). Preserve class semantics.
- **Collapsible sections:** A `button.collapsible` is immediately followed by a `.content` container. `src/script.js` toggles `maxHeight` on the next sibling.
  - Pattern: `button.collapsible` → `div.content` → inner `div.columns ...` containing `.project` cards.
  - On screens `<= 1023px`, JS sets `maxHeight: 0` initially and toggles on click; wider screens expand content to `scrollHeight` and remove the click handler.
- **Navbar burger:** `#burger` toggles `#nav-links.is-active` for mobile menu.
- **Email obfuscation:** The `.email-link` `href` is set at runtime using Base64-decoded value from `src/script.js`. If adding/removing the email icon, ensure the `.email-link` class remains.
- **Project cards:** Each project is a `.project.column ...` container with:
  - `h4` title
  - `a` or media element (image/iframe) as thumbnail
  - `ul` with `li` entries: About, What I did (optional), Team Size, Project Length, Tools
  - Example snippet (keep Bulma classes):
    ```html
    <div class="project column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen" id="Example_Project">
      <h4 class="has-text-weight-bold is-size-4">Example Project (2025)</h4>
      <a href="https://example.com" target="_blank"><img src="media/images/example.png" alt=""></a>
      <ul>
        <li><strong>About:</strong> Short description.</li>
        <li><strong>Team Size:</strong> Self</li>
        <li><strong>Project Length:</strong> 2 weeks</li>
        <li><strong>Tools:</strong> HTML5, CSS3, JavaScript</li>
      </ul>
    </div>
    ```

## Conventions
- **No build step:** Link scripts and styles directly in `index.html`. Avoid introducing bundlers unless asked.
- **Asset paths:** Place images under `media/images/...` and reference with relative paths (e.g., `media/images/...`). Keep alt attributes populated.
- **Styling:** Prefer Bulma classes; add custom rules in `styles/bulma_version.css`, `styles/slideshow.css`, or new specific stylesheet if justified.
- **Responsiveness:** Test changes at breakpoints around `1023px` due to collapsible logic; ensure content inside `.content` can compute `scrollHeight`.
- **IDs & hooks:** Preserve IDs used by JS: `#burger`, `#nav-links`, and `.email-link`. Collapsible behavior requires `button.collapsible` and its immediate `.content` sibling.
- **External links:** Use `target="_blank"` for project links.

## Developer Workflow
- **Local preview:** Open `index.html` directly in a browser or serve statically. Example with PowerShell:
  ```pwsh
  # Simple Python HTTP server (if Python is available)
  python -m http.server 8000
  # Then visit http://localhost:8000/index.html
  ```
- **No npm scripts:** `package.json` only lists dependencies; there are no scripts or build tasks. Do not rely on `npm run` unless adding scripts explicitly.
- **Hosting:** GitHub Pages deploys from `main`. Changes to HTML/CSS/JS are reflected after push.

## Safe Change Examples
- **Add a new project category:** Duplicate the pattern `button.collapsible` + `div.content` + inner `columns` block. Ensure the JS’s sibling selection still applies.
- **Modify navbar:** Update links in `index.html` and keep `#burger` + `#nav-links` IDs intact.
- **Update email:** If changing the address, update the Base64 string in `src/script.js` and keep `.email-link` class on the anchor.

## What to Avoid
- Introducing frameworks/build tools without direction.
- Changing hook IDs or class names that `src/script.js` depends on.
- Breaking Bulma’s grid by removing essential `columns/column` wrappers.

## Reference Files
- `index.html`: Main content and structure.
- `src/script.js`: Navbar burger, collapsibles, email obfuscation.
- `styles/bulma_version.css`: Custom styling overrides.
- `media/`: Assets (images/3D, logos/icons, resumes, fonts).
- `README.md`: Project description and note about potential React migration.

If anything here seems off or incomplete (e.g., missing scripts, unused directories like `server/`), please flag it and I’ll refine these instructions.
