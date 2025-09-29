#!/bin/bash

echo "🚀 Live Polling System - Quick Deploy Script"
echo "============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Live Polling System"
fi

# Install dependencies
echo "📥 Installing dependencies..."
npm run install:all

# Build frontend
echo "🔨 Building frontend..."
npm run build:frontend

echo "✅ Build complete!"
echo ""
echo "🌐 Next steps for Render deployment:"
echo "1. Push to GitHub: git push origin main"
echo "2. Go to render.com and create two services:"
echo "   - Backend: Use render-backend.yaml"
echo "   - Frontend: Use render-frontend.yaml"
echo "3. Set up MongoDB Atlas database"
echo "4. Update environment variables in Render"
echo ""
echo "📚 See DEPLOYMENT.md for detailed instructions"
