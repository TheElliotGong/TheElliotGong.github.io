Plan: Static-to-React Migration (Vite + Pages)

Convert `index.html` to React components, replicate vanilla JS behaviors via React state/refs, and deploy via GitHub Pages with `CNAME` and assets under `public/`.

Steps
1. Scaffold React app with Vite; add `public/CNAME` and move `media/**` into `public/media/**`.
2. Port Bulma: keep CDN in `index.html` or install `bulma`; import `styles/*.css` globally.
3. Create components: `Navbar`, `Section`, `CollapsibleGroup`, `ProjectCard`, `SocialLinks`, `ExperienceItem`, `ContactForm`.
4. Extract data: build JSON arrays for projects by category and experience entries; map into components.
5. Replicate behaviors: burger toggle (`#burger/#nav-links`), collapsibles with `<=1023px` breakpoint, email obfuscation via Base64 in state.
6. Wire anchors: preserve `#about/#projects/#experience/#contact`; smooth scroll optional, no router needed.
7. Configure deploy: Vite `base: '/'`, GitHub Actions to publish `dist` to `gh-pages` and include `CNAME`.

Further Considerations
- Bulma: keep CDN for simplicity, or `npm i bulma` to import CSS.
- Assets: prefer `/media/...` absolute paths under `public` to avoid bundling issues.
- Cleanup: remove unused `server/` and experimental `src/components.jsx` after migration, or integrate appropriately.

Componentization Outline
- `Navbar`: props for links; state for mobile burger `isActive`.
- `Section`: wrapper with `id`, `title`, children.
- `CollapsibleGroup`: manages categories with `title` and content; responsive behavior via window width.
- `ProjectCard`: props for `title`, `year`, `thumbnail` (img or iframe), `details` list; optional fields.
- `SocialLinks`: GitHub, Email (obfuscated), LinkedIn, Sketchfab, ArtStation, Figma.
- `ExperienceItem`: role, org, dates, bullets.
- `ContactForm`: formsubmit.co endpoint.

Behavior Replication Notes
- Burger toggle: add/remove `is-active` on menu.
- Collapsibles: use `ref` to measure `scrollHeight`; `maxHeight` toggled; attach resize listener; expand on >1023px.
- Email obfuscation: decode Base64 on mount; set `mailto:` href.

Deployment Notes
- Vite `base: '/'` for custom domain.
- `public/CNAME` must be present in deployed branch.
- Use `peaceiris/actions-gh-pages` to push `dist` to `gh-pages`.

Pitfalls
- Ensure anchors work post-build.
- Debounce resize to avoid jank.
- Keep alt attributes and aria for accessibility.
- Maintain Bulma grid wrappers (`columns`/`column`).