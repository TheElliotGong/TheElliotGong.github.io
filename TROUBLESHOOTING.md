# React Portfolio - Troubleshooting & FAQ

## Common Questions

### Q: How do I get started?
A: Follow the `QUICK_START.md` guide:
```bash
npm install
npm run dev
```
Then visit `http://localhost:8080`

### Q: What versions of Node.js do I need?
A: Node.js 14+ recommended. Check with `node -v`

### Q: Can I use this with GitHub Pages?
A: Yes! See `DEPLOYMENT_GUIDE.md` for step-by-step instructions.

### Q: How do I add a new project?
A: Add an object to the appropriate category in `src/data/projects.json`:
```json
{
  "name": "My Project",
  "year": "2025",
  "link": "https://example.com",
  "image": { "src": "media/images/myproject.png", "alt": "..." },
  "description": {
    "about": "Description",
    "whatIDid": "My role",
    "teamSize": "5",
    "projectLength": "3 months",
    "tools": "React, Node.js"
  }
}
```

### Q: How do I update my email address?
A: Edit `src/components/Hero.jsx`:
1. Encode your email in Base64: use an online encoder
2. Replace the string in `const encodedEmail = "..."`

For example:
```javascript
// Old email: theelliotgong@hotmail.com → dGhlZWxsaW90Z29uZ0Bob3RtYWlsLmNvbQ==
// New email: newemail@example.com → bmV3ZW1haWxAZXhhbXBsZS5jb20=
const encodedEmail = 'bmV3ZW1haWxAZXhhbXBsZS5jb20=';
```

### Q: How do I change the contact form endpoint?
A: Edit `src/components/Contact.jsx` and update the form action:
```jsx
action="https://formsubmit.co/YOUR_EMAIL_HERE"
```

### Q: Can I deploy without GitHub Actions?
A: Yes! Use `npx gh-pages -d dist` or manually copy `dist/` contents to your hosting.

### Q: How do I add new employment records?
A: Edit `src/data/employment.json`:
```json
{
  "jobTitle": "Job Title",
  "company": "Company Name",
  "duration": "Month Year - Month Year",
  "duties": [
    "Duty 1",
    "Duty 2",
    "Duty 3"
  ]
}
```

---

## Troubleshooting

### Issue: `npm install` fails
**Symptoms**: Error messages about missing packages or authentication

**Solutions**:
1. Clear npm cache: `npm cache clean --force`
2. Update npm: `npm install -g npm@latest`
3. Delete `node_modules/` and `package-lock.json`, then try again
4. Check internet connection
5. Try: `npm install --legacy-peer-deps`

### Issue: `npm run dev` doesn't start
**Symptoms**: Port already in use or module not found

**Solutions**:
1. Kill process on port 8080:
   - Windows: `netstat -ano | findstr :8080` then `taskkill /PID <PID> /F`
   - Mac/Linux: `lsof -i :8080` then `kill -9 <PID>`
2. Check that webpack.config.js exists in root directory
3. Verify `src/index.jsx` exists
4. Try different port: Edit webpack.config.js and change port number

### Issue: Images not loading
**Symptoms**: 404 errors for images, console errors

**Solutions**:
1. Ensure `media/` folder exists in `public/` directory
2. Check image paths in JSON use `media/images/...` format
3. Verify image files actually exist in `public/media/images/`
4. Hard refresh browser: `Ctrl+Shift+Delete` or `Cmd+Shift+R`
5. Check browser console for exact path being requested

### Issue: Styles not applied
**Symptoms**: Page looks unstyled, no colors, wrong layout

**Solutions**:
1. Hard refresh browser: `Ctrl+F5`
2. Check `public/index.html` includes `<link>` to Bulma CDN
3. Verify `styles/bulma_version.css` is being imported in `src/App.jsx`
4. Check console for CSS loading errors
5. Clear browser cache completely

### Issue: Hot reload not working
**Symptoms**: Changes to files don't appear without full page reload

**Solutions**:
1. Make sure dev server is running: `npm run dev`
2. Check you're accessing `http://localhost:8080` (not different port)
3. Verify you're editing files in `src/` directory
4. Some CSS changes may require hard refresh
5. Restart dev server: `Ctrl+C` then `npm run dev` again

### Issue: Build fails with `npm run build`
**Symptoms**: Errors during webpack compilation

**Solutions**:
1. Check for syntax errors in JSX files
2. Ensure all imports are correct: `import Component from './path/to/Component'`
3. Verify JSON files are valid: use jsonlint.com
4. Check webpack.config.js for typos
5. Try: `npm run build -- --verbose` for more details

### Issue: Form doesn't submit
**Symptoms**: Clicking submit does nothing

**Solutions**:
1. Check FormSubmit endpoint in `src/components/Contact.jsx`
2. Ensure form has `method="POST"` and `action="..."`
3. Check that input fields have `name` attributes
4. Verify all required fields are filled
5. Check browser console for JavaScript errors
6. Visit FormSubmit.co to verify your endpoint exists

### Issue: Collapsibles don't work on mobile
**Symptoms**: Project categories don't collapse on small screens

**Solutions**:
1. Verify window width detection: check if `window.innerWidth <= 1023`
2. Hard refresh to clear old JavaScript
3. Check that `Projects.jsx` has useEffect with resize listener
4. Test on actual mobile device, not just browser zoom
5. Check browser console for errors

### Issue: Email link not working
**Symptoms**: Clicking email icon doesn't open mail client

**Solutions**:
1. Check Base64 encoding is correct (use online decoder to verify)
2. Verify email string decodes to valid email format
3. Ensure `href` includes `mailto:` prefix
4. Try opening browser console to see actual href value
5. Verify email address doesn't have special characters that need escaping

### Issue: Webpack bundle too large
**Symptoms**: Build output is very large, slow load times

**Solutions**:
1. Run `npm run build` with analysis:
   ```bash
   npm install --save-dev webpack-bundle-analyzer
   ```
2. Check for large dependencies
3. Ensure minification is working in webpack.config.js
4. Consider code splitting for heavy components
5. Remove unused dependencies: `npm prune --production`

### Issue: Port 8080 doesn't open automatically
**Symptoms**: Dev server starts but browser doesn't open

**Solutions**:
1. Manually open `http://localhost:8080` in browser
2. Verify firewall isn't blocking port 8080
3. Check if port is already in use: `netstat -ano | findstr :8080`
4. Try different port in webpack.config.js

### Issue: GitHub Pages shows 404 for assets
**Symptoms**: Site loads but images/CSS are missing

**Solutions**:
1. Check that `dist/` folder has `media/` subdirectory
2. Verify paths in components use `/media/...` (with leading slash)
3. Ensure CNAME file is deployed if using custom domain
4. Check GitHub Pages settings point to correct branch
5. Wait 10 minutes for GitHub Pages cache to clear

---

## Advanced Troubleshooting

### Enable Verbose Logging
```bash
# For webpack
npm run build -- --verbose

# For npm
npm install --verbose
```

### Check Node Modules
```bash
# Verify all dependencies installed
npm ls

# Check for dependency conflicts
npm audit

# Update dependencies (be careful!)
npm update
```

### Debug Webpack
Add this to webpack.config.js:
```javascript
module.exports = {
  // ... existing config
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  }
};
```

### React DevTools
Install React Developer Tools browser extension for better debugging:
- Chrome: React Developer Tools
- Firefox: React Developer Tools

### Check Bundle Size
```bash
npm install --save-dev webpack-bundle-analyzer

# Add to webpack.config.js:
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins: [
  new BundleAnalyzerPlugin()
]
```

---

## Performance Tips

### Optimize Images
- Use compressed images (Tinypng.com)
- Use appropriate formats (PNG for graphics, JPG for photos)
- Consider WebP format with fallbacks

### Lazy Load Components
```javascript
import { lazy, Suspense } from 'react';
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### Code Splitting
Webpack automatically handles this, but you can optimize further with dynamic imports.

### Caching Strategy
Set cache headers when deploying:
```
Cache-Control: max-age=31536000 # For bundle.js
Cache-Control: max-age=3600     # For HTML
```

---

## Getting Help

### Useful Resources
- React Docs: https://react.dev
- Webpack Docs: https://webpack.js.org
- Bulma Docs: https://bulma.io
- MDN Web Docs: https://developer.mozilla.org

### Where to Look for Errors
1. **Browser Console**: F12 → Console tab
2. **Terminal**: Where you ran `npm run dev`
3. **Source Maps**: F12 → Sources tab
4. **Network Tab**: F12 → Network tab (for asset loading)

### Steps to Debug
1. Open browser console (F12)
2. Look for red error messages
3. Check file path in error
4. Verify that file exists and path is correct
5. Search for similar errors online or in documentation

---

## Still Stuck?

If you can't find the solution here:
1. Check the React dev guide: `REACT_DEV_GUIDE.md`
2. Check migration summary: `MIGRATION_SUMMARY.md`
3. Search error message on Google/Stack Overflow
4. Check package documentation on npm
5. Ask ChatGPT/Claude with specific error message

Remember: Most issues are:
- Missing dependencies (run `npm install`)
- Typos in file paths
- Incorrect configuration
- Browser cache issues (hard refresh helps)
- Module not found (check import statements)

Good luck! 🚀
