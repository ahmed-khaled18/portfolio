# GitHub Pages Deployment Setup

This document explains how to set up GitHub Pages deployment for your Angular portfolio.

## 🔧 Setup Steps

### 1. GitHub Repository Settings

1. Go to your repository on GitHub: `https://github.com/ahmed-khaled18/portfolio`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy your site

### 2. Repository Permissions

Ensure your repository has the following permissions:

- **Actions**: Enabled (for GitHub Actions workflows)
- **Pages**: Enabled (for GitHub Pages deployment)
- **Read and write permissions**: For the GITHUB_TOKEN

### 3. Branch Protection (Optional)

For better security, consider:

- Enabling branch protection rules for `main`
- Requiring pull request reviews
- Requiring status checks to pass

## 🚀 Deployment Process

### Automatic Deployment

Every push to the `main` branch will:

1. **Checkout**: Download the repository code
2. **Setup**: Install Node.js and dependencies
3. **Quality Checks**:
   - Run ESLint for code quality
   - Run tests to ensure functionality
4. **Build**: Create optimized static files with proper base href
5. **Deploy**: Upload to GitHub Pages

### Manual Deployment

You can also manually trigger deployment by:

1. Pushing to the `main` branch
2. Creating a pull request to `main`

## 📁 File Structure

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
public/
  .nojekyll            # Prevents Jekyll processing
dist/
  portfolio/
    browser/           # Built static files (generated)
```

## 🌐 Live URL

After successful deployment, your portfolio will be available at:
**https://ahmed-khaled18.github.io/portfolio/**

## 🔍 Troubleshooting

### Common Issues

1. **404 Error**: Check that base href is set to `/portfolio/`
2. **Assets not loading**: Ensure .nojekyll file is present
3. **Build fails**: Check GitHub Actions logs for detailed error messages
4. **Permission denied**: Verify repository permissions for Actions and Pages

### Checking Deployment Status

1. Go to **Actions** tab in your repository
2. View the latest workflow run
3. Check logs for any errors

### Local Testing

Test GitHub Pages build locally:

```bash
npm run build:github-pages
```

## 📝 Configuration Files

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow
- **`angular.json`**: Build configuration with GitHub Pages settings
- **`package.json`**: Deployment scripts
- **`public/.nojekyll`**: Prevents Jekyll processing

## 🔐 Security

- Uses GitHub's built-in GITHUB_TOKEN
- No manual token configuration required
- Follows GitHub security best practices
