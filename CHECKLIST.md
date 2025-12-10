# Pre-Submission Checklist

Use this checklist before submitting your project.

## ✅ Code Completion

- [x] All CRUD operations working
- [x] Data validation implemented (Zod)
- [x] Error handling in place
- [x] TypeScript types defined
- [x] Components are reusable
- [x] API routes follow REST principles

## 🎨 UI/UX

- [x] Responsive design (mobile, tablet, desktop)
- [x] Intuitive navigation
- [x] Visual feedback (toasts, loading states)
- [x] Status and priority badges
- [x] Clean, modern design
- [ ] **TODO: Update Footer with YOUR name, GitHub, and LinkedIn**

## 🗄️ Database

- [x] Schema created (`database/db.sql`)
- [x] Indexes added for performance
- [x] Constraints for data integrity
- [x] Triggers for auto-updates
- [ ] **TODO: Test database connection**
- [ ] **TODO: Run schema on your database**

## 🔒 Security

- [x] Input validation (Zod schemas)
- [x] SQL injection prevention (parameterized queries)
- [x] XSS protection
- [x] Error message sanitization
- [x] Environment variables for secrets
- [ ] **TODO: Create `.env.local` file**
- [ ] **TODO: Never commit `.env.local` to Git**

## 📝 Documentation

- [x] README.md updated
- [x] ARCHITECTURE.md created
- [x] SECURITY.md created
- [x] DEPLOYMENT.md created
- [x] CONTRIBUTING.md created
- [x] QUICKSTART.md created
- [ ] **TODO: Update README with your repository URL**
- [ ] **TODO: Update README with your name**

## 🚀 Deployment

- [x] Vercel configuration (`vercel.json`)
- [x] CI/CD pipeline (`.github/workflows/ci-cd.yml`)
- [x] Environment variables documented
- [ ] **TODO: Deploy to Vercel**
- [ ] **TODO: Set environment variables in Vercel**
- [ ] **TODO: Test production deployment**

## 🧪 Testing

- [ ] **TODO: Test all CRUD operations locally**
- [ ] **TODO: Test create task**
- [ ] **TODO: Test read tasks**
- [ ] **TODO: Test update task**
- [ ] **TODO: Test delete task**
- [ ] **TODO: Test form validation**
- [ ] **TODO: Test error handling**
- [ ] **TODO: Test on mobile device**
- [ ] **TODO: Test in different browsers**

## 📊 Performance

- [x] Server-side rendering enabled
- [x] Database queries optimized
- [x] Connection pooling configured
- [x] Indexes on database
- [ ] **TODO: Test page load speed**
- [ ] **TODO: Check console for errors**

## 🔧 Final Steps

### 1. Update Personal Information
Edit `src/components/Footer.tsx`:
```typescript
// Line 9: Add your name
<h3 className="text-xl font-bold mb-2">John Doe</h3>

// Line 16-22: Add your GitHub URL
href="https://github.com/yourusername"

// Line 25-31: Add your LinkedIn URL  
href="https://linkedin.com/in/yourusername"
```

### 2. Update README
Edit `README.md`:
```markdown
# Line 1: Update repository URL
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Bottom of file: Add your info
**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
```

### 3. Create Environment File
Create `.env.local` in project root:
```env
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tasksdb
```

### 4. Setup Database
```bash
# Start PostgreSQL
docker-compose up -d

# Or run SQL manually
psql -U postgres -d tasksdb -f database/db.sql
```

### 5. Test Locally
```bash
npm install
npm run dev
# Visit http://localhost:3000
# Test all features
```

### 6. Deploy to Vercel
```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Vercel Dashboard
# 1. Go to https://vercel.com/new
# 2. Import your GitHub repository
# 3. Configure environment variables
# 4. Deploy
```

### 7. Set Vercel Environment Variables
In Vercel project settings, add:
- `DB_USER` = your_database_user
- `DB_PASSWORD` = your_database_password
- `DB_HOST` = your_database_host
- `DB_PORT` = 5432
- `DB_NAME` = your_database_name

### 8. Verify Production
- [ ] Visit deployed URL
- [ ] Test create task
- [ ] Test edit task
- [ ] Test delete task
- [ ] Check footer shows your info
- [ ] Verify responsive design
- [ ] Check for console errors

## 📤 Submission

### Required Items
- [ ] **GitHub Repository URL** (public)
- [ ] **Live Deployment URL** (Vercel)
- [ ] **Footer shows your name**
- [ ] **Footer has GitHub profile link**
- [ ] **Footer has LinkedIn profile link**

### GitHub Repository Checklist
- [ ] Code is pushed to GitHub
- [ ] Repository is public
- [ ] README.md is complete
- [ ] .env.local is NOT committed
- [ ] All features working

### Live Deployment Checklist
- [ ] Application is live on Vercel
- [ ] Database is connected
- [ ] All features functional
- [ ] No console errors
- [ ] Responsive on all devices

## 🎯 Quick Test Scenario

1. **Visit Homepage**
   - ✓ See task list or "No tasks yet"
   - ✓ See navigation bar
   - ✓ See footer with your info

2. **Create Task**
   - ✓ Click "New Task"
   - ✓ Fill form (title, description, status, priority)
   - ✓ Submit successfully
   - ✓ Redirect to homepage
   - ✓ See new task in list

3. **Edit Task**
   - ✓ Click on task card
   - ✓ Form pre-filled with data
   - ✓ Modify fields
   - ✓ Save successfully
   - ✓ See updated task

4. **Delete Task**
   - ✓ Click on task
   - ✓ Click delete button
   - ✓ Confirm deletion
   - ✓ Task removed from list

5. **Validation**
   - ✓ Try empty title → Error shown
   - ✓ Try very long text → Error shown
   - ✓ Proper error messages displayed

## ⚠️ Common Issues

### Database Connection Failed
- Check PostgreSQL is running
- Verify .env.local credentials
- Test with: `psql -U root -h localhost -d tasksdb`

### Port 3000 in Use
```bash
npx kill-port 3000
```

### Vercel Deployment Failed
- Check build logs
- Verify environment variables
- Ensure all dependencies in package.json

### Tasks Not Showing
- Check database has data
- Check browser console
- Check API response in Network tab

## 📞 Need Help?

1. Check `QUICKSTART.md` for quick setup
2. Check `README.md` for full documentation
3. Check `TROUBLESHOOTING` section in README
4. Review code comments
5. Check console logs

## ✨ You're Done When...

- ✅ All checkboxes above are checked
- ✅ Application runs locally without errors
- ✅ Application deployed to Vercel successfully
- ✅ Footer shows YOUR name and links
- ✅ README shows YOUR repository
- ✅ All CRUD operations work
- ✅ You're proud of the result! 🎉

---

**Good luck with your submission! 🚀**
