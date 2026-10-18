# Development & Deployment Guide

This guide covers how to work on the portfolio site locally and how to publish it. For a general overview of the site, see the [README](README.md).

## Setup

The site is a React app. Vite handles development and builds.

### Installation

```bash
npm install
```

### Development server

```bash
npm run dev
```

This starts a Vite dev server with hot module reloading. The terminal shows the local URL, usually `http://localhost:5173`.

### Production build

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project Structure

```
index.html               # HTML entry point (loads Bulma and Google Fonts)
src/
├── index.jsx            # React entry point
├── App.jsx              # Routes and page layout
├── components/          # One component per site section
│   ├── Navbar.jsx       # Navigation with burger menu
│   ├── Hero.jsx         # Intro, headshot, profile links
│   ├── Projects.jsx     # Project gallery (home page and /projects)
│   ├── ProjectCategoryPage.jsx  # /projects/<category> pages
│   ├── ProjectCard.jsx  # Individual project card
│   ├── Experience.jsx   # Employment history
│   ├── Skills.jsx       # Skill groups
│   ├── Education.jsx    # Degrees
│   ├── Certifications.jsx  # Certificates with verification links
│   ├── Contact.jsx      # Contact form
│   └── Copyright.jsx    # Footer with dynamic year
├── data/                # All site content lives here as data
│   ├── projects.json    # Projects by category: descriptions, tools, links, images
│   ├── projectCategories.js  # Category keys, URL slugs, and labels
│   ├── employment.json  # Work history
│   ├── skills.json      # Skill groups
│   └── credentials.json # Certifications and their verification links
└── styles/              # Stylesheets (bulma_version.css holds the custom overrides)

public/
├── media/               # Static assets (images, fonts, documents)
├── 404.html
└── CNAME                # GitHub Pages custom domain
```

### Updating content

Most of the site's content is stored as data. To add or change a project, job, skill, or certification, edit the JSON file for it in `src/data/`. You don't need to touch any components.

Project entries can include these link fields, and each one shows up on the project card:

- `link`: the main "View Project" link (live demo, repo, video, or slides)
- `workshopPage`: a Steam Workshop or ModDB page
- `artstationLink`: an ArtStation page or album
- `additionalLinks`: any extra links, as a list of `{ "label", "text", "url" }` entries. For example, a project with a repo `link` can add its slide deck here, and each entry shows up as **Label:** text.
- `image`: a thumbnail, with `src` (a path under `public/media/`) and `alt` text

## Routing

React Router handles three routes:

- `/`: the home page with every section
- `/projects`: all project categories
- `/projects/<category>`: one category, using the slugs in `projectCategories.js`

Unknown paths redirect to `/`. `App.jsx` also has a `ScrollToHash` helper, so links like `/#skills` scroll to the right section even when they're clicked from another route.

## Key Features

- **Responsive design**: the layout uses Bulma, with a burger menu on smaller screens.
- **Data-driven**: projects, experience, skills, and certifications all render from the files in `src/data/`.
- **Email obfuscation**: the Hero component stores the email address base64-encoded and decodes it at runtime.
- **Contact form**: submissions are emailed through FormSubmit.co.

## Deployment

The site is hosted on GitHub Pages at [theelliotgong.com](https://theelliotgong.com).

### Prerequisites

- In the repository's **Settings → Pages**, the **Source** must be set to **GitHub Actions**.
- `public/CNAME` must contain `theelliotgong.com`. The domain's DNS must point to GitHub Pages, and the custom domain must be set in the Pages settings.

### How deployment works

Every push to `main` runs the **Deploy site** GitHub Actions workflow (`.github/workflows/deploy.yml`). You can also start it manually from the Actions tab. The workflow:

1. installs dependencies with `npm ci` on Node 20
2. builds the site with `npm run build`
3. copies `public/CNAME` into `dist/`, which keeps the custom domain
4. uploads `dist/` and publishes it to GitHub Pages with `actions/deploy-pages`

You don't need to deploy by hand. Committing and pushing to `main` is enough. To check a deploy, open the repository's **Actions** tab.

The old `gh-pages` branch is from the manual deployment the site used before the Actions workflow. Nothing publishes from it anymore.

### Recommended workflow

1. Make changes and test them locally with `npm run dev`.
2. Run `npm run build` to catch build errors before pushing.
3. For bigger changes, work on a separate branch and merge it into `main` when it's ready.
4. Push to `main`, and the site deploys automatically.

### Post-deployment checklist

- [ ] The site loads at theelliotgong.com
- [ ] The navigation and the project category pages work
- [ ] Images load
- [ ] Project and profile links work
- [ ] The layout works on mobile
- [ ] The contact form submits
- [ ] The browser console (F12 → Console) shows no errors

### Rolling back

If a deploy breaks the site, run `git revert <commit>` on the bad commit and push to `main`. The workflow redeploys the previous working version. Then fix the problem and push again.

### Environment variables

The site doesn't use any right now. If it ever needs them, put them in `.env.development` and `.env.production`. Vite only exposes variables that start with `VITE_`, and code reads them through `import.meta.env.VITE_*` (not `process.env.REACT_APP_*`). Don't put secrets in these files. Everything in a static site's build is public.

## Troubleshooting

**The site still shows the old version.** Check that the latest Actions run succeeded. Then hard refresh (Ctrl+F5, or Cmd+Shift+R on Mac). GitHub Pages can take a few minutes to update.

**Images return 404.** Make sure the file is under `public/media/`, and check that the path in the data files matches its location there (for example, `media/images/...`).

**The custom domain stops working.** Make sure `public/CNAME` exists and contains the domain. Then check the DNS records and the custom domain setting under **Settings → Pages**.

**Styles don't load.** Hard refresh the page. Bulma loads from the jsDelivr CDN in `index.html`, so also check that the CDN link still works.

**Deep links like `/projects/ai` return 404 on GitHub Pages.** GitHub Pages only serves static files, so routes handled by React Router rely on `public/404.html` to send visitors back to the app. Keep that file in place.

## Security checklist

- [ ] No API keys, passwords, or personal information in the code or its git history
- [ ] The contact form posts to FormSubmit over HTTPS
- [ ] Run `npm audit` now and then to check dependencies

## Technologies

- **React 19** and **React Router 7**: UI and routing
- **Vite**: dev server and bundler
- **Bulma 0.9.3**: CSS framework, loaded from a CDN in `index.html`
- **GitHub Actions and GitHub Pages**: build and hosting

## Styling

`index.html` loads Bulma and Google Fonts (Bungee and Roboto) from CDNs. Custom overrides are in `src/styles/bulma_version.css`. Components use Bulma utility classes along with that custom CSS.

## Notes

- `src/script.js` and `src/components.jsx` are left over from the static version, and nothing imports them.
- The site serves assets from `public/media/` and references them with `/media/...` paths.
