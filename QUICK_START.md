# Quick Start Guide - React Portfolio

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd TheElliotGong.github.io
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
- Opens at `http://localhost:8080`
- Hot reloading enabled - changes appear instantly

### 3. View Your Portfolio
Navigate to the URL and you should see:
- ✅ Navigation with burger menu (test at mobile sizes)
- ✅ Hero section with headshot and social links
- ✅ Project gallery with 27 projects across 4 categories
- ✅ Collapsible project categories (collapse on mobile, expand on desktop)
- ✅ Experience/employment section
- ✅ Contact form
- ✅ Footer with dynamic year

## Testing Checklist

### Mobile Responsiveness
- [ ] Resize browser to <= 1023px
- [ ] Verify project categories are collapsed
- [ ] Click burger menu icon (3 lines) - should toggle navigation
- [ ] Verify text is readable and properly spaced

### Desktop View
- [ ] Resize browser to > 1023px
- [ ] Verify project categories are automatically expanded
- [ ] Verify burger menu is hidden
- [ ] Check that navigation links are visible

### Functionality
- [ ] Click on project cards - should open links/images
- [ ] Hover over social media icons - should show cursor
- [ ] Try clicking email icon - should open mail client
- [ ] Try submitting contact form

### Images & Assets
- [ ] All project images should load
- [ ] Headshot should display with rounded corners
- [ ] Social media icons should appear
- [ ] Resume link should work

## Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder. The files are ready to deploy to GitHub Pages.

## Common Issues

### Issue: "Cannot find module 'React'"
**Solution**: Run `npm install` to install dependencies

### Issue: Images not loading
**Solution**: Ensure `media/` folder is in the `public/` directory

### Issue: Port 8080 already in use
**Solution**: Change the port in `webpack.config.js` or kill the process using that port

### Issue: Hot reload not working
**Solution**: Make sure you're accessing `http://localhost:8080` in browser (not a different port)

## File Structure Reference

```
├── src/
│   ├── App.jsx              ← Main component
│   ├── index.jsx            ← React entry point
│   ├── components/          ← All React components
│   └── data/
│       ├── projects.json    ← All project data
│       └── employment.json  ← Job experience data
├── public/
│   ├── index.html           ← HTML entry point
│   └── media/               ← Images, fonts, resumes
├── styles/
│   └── bulma_version.css    ← Custom CSS
├── webpack.config.js        ← Build configuration
└── package.json             ← Dependencies & scripts
```

## Next: Deploy to GitHub Pages

After testing locally:

1. Commit and push changes to `react-version` branch
2. Run `npm run build`
3. Deploy `dist/` folder to GitHub Pages
4. Verify site works at your domain

For detailed setup, see `REACT_DEV_GUIDE.md` and `MIGRATION_SUMMARY.md`.

---

**Ready to develop?** Start with `npm run dev` 🚀
