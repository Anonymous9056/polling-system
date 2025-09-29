# 🚀 Quick Deploy Guide - Live Polling System

## 📁 Project Structure (Now Organized!)

```
polling-system/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express + Socket.io backend
│   ├── server.js
│   ├── package.json
│   └── env.example
├── database/                 # MongoDB models
│   ├── models/
│   └── connection.js
├── package.json             # Root package.json
├── deploy.sh               # Quick deploy script
└── render-*.yaml           # Render configurations
```

## ⚡ Quick Deploy Steps (5 minutes!)

### Step 1: Prepare Your Code
```bash
# Run the deploy script
./deploy.sh

# Or manually:
npm run install:all
npm run build:frontend
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 3: Deploy Backend on Render

1. **Go to [render.com](https://render.com)**
2. **Create New Web Service**
3. **Connect GitHub Repository**
4. **Use these settings:**
   ```
   Name: live-polling-backend
   Environment: Node
   Build Command: cd backend && npm install
   Start Command: cd backend && npm start
   ```

5. **Add Environment Variables:**
   ```
   NODE_ENV = production
   PORT = 10000
   MONGODB_URI = (from MongoDB Atlas)
   FRONTEND_URL = https://live-polling-frontend.onrender.com
   ```

### Step 4: Set Up MongoDB Atlas (Free Database)

1. **Go to [mongodb.com/atlas](https://mongodb.com/atlas)**
2. **Create Free Account**
3. **Create New Cluster (Free Tier)**
4. **Get Connection String:**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/live-polling
   ```
5. **Add to Render Environment Variables**

### Step 5: Deploy Frontend on Render

1. **Create New Static Site**
2. **Connect Same GitHub Repository**
3. **Use these settings:**
   ```
   Name: live-polling-frontend
   Environment: Static
   Build Command: cd frontend && npm install && npm run build
   Publish Directory: frontend/dist
   ```

4. **Add Environment Variable:**
   ```
   VITE_API_URL = https://live-polling-backend.onrender.com
   ```

### Step 6: Update Backend CORS

1. **Go to Backend Service in Render**
2. **Update Environment Variable:**
   ```
   FRONTEND_URL = https://live-polling-frontend.onrender.com
   ```
3. **Redeploy Backend**

## 🎯 Your URLs After Deployment

- **Frontend**: `https://live-polling-frontend.onrender.com`
- **Backend API**: `https://live-polling-backend.onrender.com`
- **Health Check**: `https://live-polling-backend.onrender.com/api/health`

## 🔧 Database Setup Details

### MongoDB Atlas Configuration

1. **Create Cluster** (Free M0 tier)
2. **Create Database User:**
   - Username: `live-polling-user`
   - Password: `your-secure-password`
3. **Whitelist IP Addresses:**
   - Add `0.0.0.0/0` for Render access
4. **Get Connection String:**
   ```
   mongodb+srv://live-polling-user:password@cluster0.xxxxx.mongodb.net/live-polling?retryWrites=true&w=majority
   ```

### Database Models Included

- **Polls**: Store poll questions, options, results
- **Participants**: Track teachers and students
- **Chat Messages**: Store chat history per poll

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Check Node version
   node --version  # Should be 16+
   
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Database Connection Issues**
   - Check MongoDB Atlas IP whitelist
   - Verify connection string format
   - Check environment variables in Render

3. **CORS Errors**
   - Update FRONTEND_URL in backend environment
   - Redeploy backend service

4. **Socket.io Not Working**
   - Check if both services are running
   - Verify environment variables
   - Check browser console for errors

### Debug Commands

```bash
# Test locally
npm run dev

# Test production build
npm run build:frontend
cd backend && npm start

# Check environment variables
echo $MONGODB_URI
echo $FRONTEND_URL
```

## 📊 Monitoring Your App

### Render Dashboard
- **Logs**: Real-time application logs
- **Metrics**: CPU, memory usage
- **Health Checks**: Automatic monitoring

### MongoDB Atlas
- **Database Metrics**: Query performance
- **Storage Usage**: Data size monitoring
- **Connection Monitoring**: Active connections

## 💰 Cost Breakdown

- **Render Free Tier**: 750 hours/month (sleeps after 15 min)
- **MongoDB Atlas Free**: 512MB storage, shared clusters
- **Total Cost**: $0/month (free tier)

## 🎉 You're Done!

Your Live Polling System is now deployed with:
- ✅ **Separate Frontend/Backend Services**
- ✅ **MongoDB Database Integration**
- ✅ **Real-time Socket.io Communication**
- ✅ **Production-Ready Configuration**
- ✅ **Environment Variable Management**

**Test your deployment:**
1. Visit your frontend URL
2. Create a poll as a teacher
3. Join as a student from another browser
4. Test real-time features!

---

**Need Help?** Check the logs in Render dashboard or create an issue in your GitHub repository.
