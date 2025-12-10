# Quick Deployment to Vercel

## Why Vercel?
- Built specifically for Next.js
- Free PostgreSQL database included
- Automatic environment variable setup
- Better Next.js performance

## Steps:

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
vercel
```

Follow the prompts:
- Link to existing project? **No**
- Project name? **hoet** (or your choice)
- Directory? **./** (press Enter)
- Want to modify settings? **No**

### 4. Add Vercel Postgres

After deployment:
1. Go to your project dashboard on vercel.com
2. Click "Storage" tab
3. Click "Create Database"
4. Select "Postgres"
5. Click "Continue" (free tier)
6. Your database is automatically connected!

### 5. Run Database Schema

Get your database connection string from Vercel dashboard and run:
```bash
psql "your-vercel-postgres-connection-string" < database/db.sql
```

Or use the Vercel Postgres dashboard to run the SQL directly.

### 6. Deploy to Production
```bash
vercel --prod
```

That's it! Your app will be live with a working database.

## If You Want to Stay on Netlify

You need to use Neon or Supabase for the database:

1. Create a Neon account (free): https://neon.tech
2. Create a new project
3. Copy your connection details
4. Update Netlify environment variables:
   - Go to Site Settings → Environment Variables
   - Update DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT
5. Redeploy

---

**Recommended: Use Vercel** - It's designed for Next.js and much easier!
