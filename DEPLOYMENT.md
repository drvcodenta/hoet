# Deployment Guide

## Prerequisites

Before deploying, ensure you have:

1. A Vercel account (sign up at https://vercel.com)
2. A PostgreSQL database (you can use Vercel Postgres, Supabase, or any PostgreSQL provider)
3. Git repository with your code

## Environment Variables

Set up the following environment variables in your Vercel project:

```
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=5432
DB_NAME=your_database_name
```

## Deployment Steps

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Configure environment variables
5. Deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your Git repository
3. Configure project settings
4. Add environment variables
5. Click "Deploy"

## Database Setup

1. Create your PostgreSQL database
2. Run the SQL schema from `database/db.sql`
3. Update environment variables with your database credentials

## Post-Deployment

1. Verify all environment variables are set correctly
2. Test the application functionality
3. Check database connectivity
4. Monitor application logs for any issues

## Continuous Deployment

This project includes GitHub Actions for CI/CD. On every push to the main branch:
- Linting checks run
- Build is verified
- Automatic deployment to Vercel (if configured)

To set up automatic deployments:
1. Add Vercel secrets to your GitHub repository
2. Configure GitHub Actions workflow
3. Push to trigger deployment

## Troubleshooting

### Database Connection Issues
- Verify environment variables are correct
- Check database firewall settings
- Ensure database allows connections from Vercel IPs

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs for specific errors

### Runtime Errors
- Check application logs in Vercel dashboard
- Verify environment variables in production
- Test database queries independently
