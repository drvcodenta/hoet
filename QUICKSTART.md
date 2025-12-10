# Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Clone & Install (2 min)
```bash
git clone <your-repo-url>
cd task-manager
npm install
```

### Step 2: Database Setup (2 min)
```bash
# Start PostgreSQL with Docker
docker-compose up -d

# Or use your existing PostgreSQL
# Create database: CREATE DATABASE tasksdb;
# Run schema: psql -U postgres -d tasksdb -f database/db.sql
```

### Step 3: Configure Environment (30 sec)
```bash
# Create .env.local file
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tasksdb
```

### Step 4: Run Application (30 sec)
```bash
npm run dev
# Visit http://localhost:3000
```

## 🎯 Common Tasks

### Create a Task
1. Click "New Task" button
2. Fill in title and description
3. Select status and priority
4. Click "Save"

### Edit a Task
1. Click on any task card
2. Modify fields
3. Click "Update"

### Delete a Task
1. Click on task to edit
2. Click "Delete" button
3. Confirm deletion

## 📝 API Quick Reference

### Get All Tasks
```bash
curl http://localhost:3000/api/tasks
```

### Create Task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"New Task","description":"Description","status":"pending","priority":"high"}'
```

### Update Task
```bash
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title"}'
```

### Delete Task
```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

## 🔧 Troubleshooting

### Database Won't Connect
```bash
# Check PostgreSQL is running
docker ps

# Verify credentials in .env.local
cat .env.local

# Test connection
psql -U root -h localhost -d tasksdb
```

### Port 3000 Already in Use
```bash
# Windows
npx kill-port 3000

# Linux/Mac
lsof -ti:3000 | xargs kill
```

### Clear Cache & Rebuild
```bash
rm -rf .next
npm run build
npm run dev
```

## 📚 Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage |
| `src/app/api/tasks/route.ts` | Tasks API |
| `src/components/tasks/TaskForm.tsx` | Create/Edit form |
| `database/db.sql` | Database schema |
| `.env.local` | Environment config |

## 🎨 Customization

### Change Footer Info
Edit `src/components/Footer.tsx`:
```typescript
<h3>Your Name</h3>
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
```

### Modify Task Fields
1. Update `database/db.sql` schema
2. Update `src/interfaces/Tasks.ts` interface
3. Update `src/lib/validations.ts` schema
4. Update `TaskForm.tsx` component

### Change Theme Colors
Edit `tailwind.config.js` or use Tailwind classes directly.

## 📦 Deployment

### Deploy to Vercel (2 min)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Environment Variables on Vercel
1. Go to project settings
2. Add environment variables:
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_HOST`
   - `DB_PORT`
   - `DB_NAME`

## 🧪 Testing Checklist

- [ ] Create task works
- [ ] View tasks displays correctly
- [ ] Edit task updates properly
- [ ] Delete task removes from list
- [ ] Status dropdown functions
- [ ] Priority dropdown functions
- [ ] Form validation works
- [ ] Error messages display
- [ ] Responsive on mobile
- [ ] Footer shows your info

## 📖 Additional Resources

- [Full README](./README.md)
- [Architecture Docs](./ARCHITECTURE.md)
- [Security Guide](./SECURITY.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Contributing Guide](./CONTRIBUTING.md)

## ⚡ Pro Tips

1. **Use Docker**: Easiest way to run PostgreSQL
2. **Keep .env.local**: Never commit to Git
3. **Update Footer**: Add your GitHub/LinkedIn
4. **Read Logs**: Check console for errors
5. **Test Locally**: Before deploying
6. **Use TypeScript**: Get type safety benefits
7. **Validate Inputs**: Always validate on server
8. **Handle Errors**: User-friendly messages

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

Need help? Check the full documentation or create an issue!
