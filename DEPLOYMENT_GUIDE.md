# GitHub Pages Deployment Guide

## Overview

Your portfolio is now a React application that needs to be built before deployment to GitHub Pages.

## Prerequisites

- Node.js and npm installed
- Repository with `main` and `react-version` branches
- GitHub Pages enabled on the repository

## Deployment Steps

### Option 1: Manual Deployment

#### 1. Build the Project
```bash
npm run build
```
This creates a `dist/` folder with the production build.

#### 2. Copy Files to gh-pages Branch

If using `gh-pages` branch:
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy
npx gh-pages -d dist
```

Or manually:
```bash
# Switch to gh-pages branch
git checkout gh-pages

# Copy dist contents to root
cp -r dist/* .

# Commit and push
git add .
git commit -m "Deploy React portfolio build"
git push origin gh-pages
```

#### 3. Verify Custom Domain
Ensure `public/CNAME` file exists with your custom domain. It will be copied to `dist/CNAME` during build.

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: theelliotgong.com  # Change to your domain
```

### Option 3: Vercel (Alternative)

1. Connect repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

## Post-Deployment Verification

After deployment, verify:

- [ ] Site loads at your custom domain
- [ ] Navigation works
- [ ] Images load correctly
- [ ] Links work
- [ ] Mobile responsiveness works
- [ ] Contact form submits
- [ ] Console has no errors (F12 -> Console)

## Troubleshooting

### Issue: GitHub Pages shows old version
**Solution**: 
- Clear browser cache (Ctrl+Shift+Delete)
- Wait up to 10 minutes for GitHub Pages to update
- Check that deploy action succeeded

### Issue: Images show 404 errors
**Solution**: 
- Ensure `media/` folder is in `public/` directory
- Verify image paths use `/media/...` format
- Check that build output includes media files

### Issue: Custom domain not working
**Solution**:
- Verify `public/CNAME` file exists with domain name
- Check DNS settings point to GitHub Pages
- Verify domain is configured in GitHub settings

### Issue: Styles not loading
**Solution**:
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check that Bulma CDN is accessible
- Verify CSS file is in build output

## Environment-Specific Configuration

If you need different API endpoints or configuration for dev vs production:

Create `.env` files:
- `.env.development` - for local development
- `.env.production` - for production build

Then update components to use `process.env.REACT_APP_*` variables.

## Branch Strategy

Recommended workflow:

1. **Development**: Work on `react-version` branch
2. **Testing**: Test locally with `npm run dev`
3. **Build**: Run `npm run build`
4. **Deploy**: Push to `main` or create PR → merge → auto-deploy via GitHub Actions

## Rollback Strategy

If something goes wrong after deployment:

1. Switch back to previous version in git history
2. Rebuild with `npm run build`
3. Redeploy using same process
4. Fix issue on `react-version` branch
5. Redeploy corrected version

## Monitoring

Set up monitoring to catch deployment issues:
- Google Analytics for traffic
- Sentry for error tracking
- GitHub Actions for build status

## Performance Tips

1. **Image Optimization**: Consider using next/image or similar optimization
2. **Code Splitting**: Components are automatically split by Webpack
3. **Caching**: GitHub Pages caches content; use cache busting for updates
4. **Minification**: Webpack automatically minifies production build

## Security Checklist

- [ ] Remove sensitive information from code
- [ ] Use environment variables for API keys
- [ ] Ensure form submissions use HTTPS
- [ ] Check that dependencies are up to date (`npm audit`)
- [ ] Verify no credentials in git history

## Support

For questions about:
- **React**: See `REACT_DEV_GUIDE.md`
- **Building**: See `package.json` scripts
- **GitHub Pages**: https://docs.github.com/en/pages
- **Webpack**: https://webpack.js.org/guides/

---

**First time deploying?** Start with Option 1 (Manual) or Option 2 (GitHub Actions).
