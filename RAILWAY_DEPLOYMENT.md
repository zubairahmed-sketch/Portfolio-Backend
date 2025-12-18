# Portfolio Backend - Railway Deployment Guide

## Quick Deploy to Railway (5 minutes)

### Step 1: Go to Railway
1. Visit **https://railway.app**
2. Click **"Login"** → Sign in with GitHub
3. Click **"New Project"**

### Step 2: Deploy from GitHub
1. Click **"Deploy from GitHub Repo"**
2. Select your GitHub account
3. Search for and select **"Portfolio-Backend"** repo
4. Click **"Deploy Now"**

### Step 3: Wait for Deployment
Railway will automatically:
- Install dependencies (`npm install`)
- Deploy the server
- Give you a live URL like: `https://portfolio-backend-production-xxxx.up.railway.app`

### Step 4: Get Your Backend URL
1. Go to your Railway project dashboard
2. Click the **Portfolio-Backend** service
3. Go to **"Settings"** tab
4. Look for **"Domain"** section
5. Copy the public URL

### Step 5: Add Environment Variables to Railway
In Railway dashboard:
1. Go to **Variables** tab
2. Add:
   - **Key:** `MONGODB_URI`
   - **Value:** `mongodb+srv://za0183625_db_user:UzWTlg0Ax93ncrMr@cluster0.gs902gr.mongodb.net/?appName=Cluster0`
3. Click **Save**

Railway will auto-restart with the new variables.

### Step 6: Update Frontend

In your **Portfolio** repo, update these 3 files:

**Replace all fetch URLs from `/api/` to `https://your-railway-url/api/`**

#### In `src/components/Skills.jsx`:
```javascript
const response = await fetch('https://your-railway-url/api/skills')
```

#### In `src/components/Services.jsx`:
```javascript
const response = await fetch('https://your-railway-url/api/services')
```

#### In `src/components/Projects.jsx`:
```javascript
const response = await fetch('https://your-railway-url/api/projects')
```

### Step 7: Commit and Push
```bash
cd e:\Portfolio
git add .
git commit -m "Update API endpoints to use Railway backend"
git push
```

Vercel will auto-deploy and your portfolio will fetch data from Railway backend!

---

## Your Backend URL
Once deployed, your backend will be live at:
```
https://portfolio-backend-production-xxxx.up.railway.app/api/skills
https://portfolio-backend-production-xxxx.up.railway.app/api/services
https://portfolio-backend-production-xxxx.up.railway.app/api/projects
```

---

## Testing
Once deployed, test your API:
```
https://your-railway-url/api/skills
https://your-railway-url/api/services
https://your-railway-url/api/projects
```

Should return JSON with your MongoDB data!
