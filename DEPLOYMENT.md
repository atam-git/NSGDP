# Vercel Deployment Guide

## Prerequisites
- GitHub account with the repository pushed
- Vercel account (sign up at https://vercel.com)

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Import Project**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository: `atam-git/NSGDP`
   - Click "Import"

2. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables** (optional for now)
   ```
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   NEXT_PUBLIC_ENABLE_MOCK_DATA=true
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your app will be live at `https://your-app.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from frontend directory)
cd frontend
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? nsgdp-frontend
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Post-Deployment

### Custom Domain Setup
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., portal.nigerstate.gov.ng)
3. Follow DNS configuration instructions
4. Wait for SSL certificate provisioning (automatic)

### Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_API_URL` - Backend API URL (when ready)
- `NEXT_PUBLIC_APP_URL` - Your production URL
- `NEXT_PUBLIC_ENABLE_ANALYTICS` - Set to `true` when ready

### Performance Monitoring
- Analytics: Vercel Dashboard → Analytics
- Speed Insights: Automatically enabled
- Web Vitals: Check in Real Experience Score

## Automatic Deployments

Every push to `main` branch triggers:
- ✅ Automatic production deployment
- ✅ Build verification
- ✅ Preview URL generation

Pull requests get:
- 🔍 Preview deployments
- 💬 Deploy preview comments on PR

## Build Configuration

The project is configured with:
- **Framework**: Next.js 15
- **Node Version**: 20.x (auto-detected)
- **Package Manager**: npm
- **Build Time**: ~2-3 minutes
- **Output**: Optimized static + server components

## Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run lint
```

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables
- Check Settings → Environment Variables in Vercel

### 404 Errors
- Next.js automatically handles routing
- Check file structure in `src/app/`
- Verify dynamic routes use correct syntax `[slug]`

### Slow Build Times
- Optimize dependencies
- Use `output: 'standalone'` (already configured)
- Check for large files in build

## Production Checklist

Before going live:
- [ ] Test all pages work correctly
- [ ] Verify role-based access control
- [ ] Test on mobile devices
- [ ] Check SEO meta tags
- [ ] Enable analytics
- [ ] Set up custom domain
- [ ] Configure error monitoring
- [ ] Test download functionality
- [ ] Verify form submissions
- [ ] Check accessibility (WCAG AA)

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables](https://vercel.com/docs/environment-variables)
- [Custom Domains](https://vercel.com/docs/custom-domains)

## Support

For deployment issues:
- Vercel Support: https://vercel.com/support
- Next.js Discord: https://nextjs.org/discord
- GitHub Issues: https://github.com/atam-git/NSGDP/issues
