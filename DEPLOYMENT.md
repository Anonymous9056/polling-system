# 🚀 Render Deployment Guide

This guide will help you deploy your Live Polling System to Render.com.

## 📋 Prerequisites

1. **GitHub Account**: Your code should be pushed to a GitHub repository
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **Node.js 16+**: Ensure your local environment has Node.js 16 or higher

## 🛠️ Pre-Deployment Setup

### 1. Push Your Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Live Polling System ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### 2. Test Local Production Build

```bash
# Install all dependencies
npm run install:all

# Build the frontend
npm run build

# Test the production build locally
npm start
```

## 🌐 Deploy to Render

### Method 1: Using Render Dashboard (Recommended)

1. **Go to Render Dashboard**
   - Visit [render.com](https://render.com) and sign in
   - Click "New +" → "Web Service"

2. **Connect GitHub Repository**
   - Select "Build and deploy from a Git repository"
   - Connect your GitHub account
   - Choose your polling-system repository

3. **Configure Service Settings**
   ```
   Name: live-polling-system
   Environment: Node
   Region: Choose closest to your users
   Branch: main
   Root Directory: (leave empty)
   Build Command: npm run install:all && npm run build
   Start Command: npm start
   ```

4. **Set Environment Variables**
   ```
   NODE_ENV = production
   PORT = 10000
   FRONTEND_URL = https://live-polling-system.onrender.com
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete (5-10 minutes)

### Method 2: Using render.yaml (Alternative)

If you prefer using the `render.yaml` file:

1. **Push the render.yaml file** to your repository
2. **Go to Render Dashboard**
   - Click "New +" → "Blueprint"
   - Connect your repository
   - Render will automatically detect and use the `render.yaml` configuration

## 🔧 Post-Deployment Configuration

### 1. Update CORS Settings

After deployment, update the CORS settings in your backend:

1. Go to your Render service dashboard
2. Note your app URL (e.g., `https://live-polling-system.onrender.com`)
3. Update the `FRONTEND_URL` environment variable to match your app URL

### 2. Test Your Deployment

1. **Health Check**: Visit `https://your-app-name.onrender.com/api/health`
2. **Frontend**: Visit `https://your-app-name.onrender.com`
3. **Socket.io**: Test real-time features

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (must be 16+)
   - Ensure all dependencies are in package.json
   - Check build logs in Render dashboard

2. **Socket.io Connection Issues**
   - Verify CORS settings
   - Check environment variables
   - Ensure WebSocket connections are allowed

3. **Static Files Not Loading**
   - Verify build output directory (`dist/`)
   - Check if `express.static` middleware is configured

4. **App Crashes on Start**
   - Check server logs in Render dashboard
   - Verify PORT environment variable
   - Ensure all required dependencies are installed

### Debug Commands

```bash
# Check if build works locally
npm run build

# Test production server locally
NODE_ENV=production npm start

# Check for linting errors
npm run lint
```

## 📊 Monitoring

### Render Dashboard Features

1. **Logs**: Real-time application logs
2. **Metrics**: CPU, memory, and response time
3. **Health Checks**: Automatic health monitoring
4. **Scaling**: Auto-scaling based on traffic

### Performance Optimization

1. **Enable Gzip Compression** (already configured)
2. **Set up CDN** for static assets
3. **Monitor Memory Usage** for large polls
4. **Set up Database** for production (currently using in-memory storage)

## 🔄 Updates and Maintenance

### Deploying Updates

1. **Make changes** to your code
2. **Commit and push** to GitHub
3. **Render automatically deploys** the changes
4. **Monitor deployment** in Render dashboard

### Environment Variables

To update environment variables:
1. Go to your service in Render dashboard
2. Click "Environment" tab
3. Add/modify variables as needed
4. Redeploy if necessary

## 💰 Cost Considerations

- **Free Tier**: 750 hours/month, sleeps after 15 minutes of inactivity
- **Paid Plans**: Start at $7/month for always-on service
- **Database**: Consider upgrading to paid database for production use

## 🎯 Next Steps

1. **Set up Custom Domain** (optional)
2. **Configure SSL Certificate** (automatic with Render)
3. **Set up Database** for persistent storage
4. **Add Monitoring** and alerting
5. **Implement CI/CD** pipeline

## 📞 Support

- **Render Documentation**: [render.com/docs](https://render.com/docs)
- **Community Support**: [render.com/community](https://render.com/community)
- **Project Issues**: Create issues in your GitHub repository

---

**🎉 Congratulations!** Your Live Polling System is now deployed and ready to use!
