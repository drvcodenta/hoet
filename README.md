# Task Manager - Next.js 15 & PostgreSQL

![Next.js](https://img.shields.io/badge/Next.js-15.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A full-stack, secure, and user-friendly CRUD application built with Next.js 15 and PostgreSQL. This application demonstrates modern web development practices including server-side rendering, data validation, error handling, and responsive design.

## 🚀 Features

### Core Functionality
- ✅ **Full CRUD Operations** - Create, Read, Update, and Delete tasks
- ✅ **Data Validation** - Input validation using Zod schemas
- ✅ **Error Handling** - Comprehensive error handling with user-friendly messages
- ✅ **Task Management** - Status tracking (Pending, In Progress, Completed)
- ✅ **Priority Levels** - Low, Medium, and High priority tasks
- ✅ **Responsive Design** - Mobile-first design using Tailwind CSS
- ✅ **Real-time Updates** - Instant UI updates with optimistic rendering

### Technical Features
- ✅ **TypeScript** - Full type safety across the application
- ✅ **Server-Side Rendering** - Optimized performance with SSR
- ✅ **API Routes** - RESTful API endpoints
- ✅ **Database Indexing** - Optimized PostgreSQL queries
- ✅ **Input Sanitization** - Protection against SQL injection and XSS
- ✅ **Environment Validation** - Runtime environment variable validation

### Security Considerations
- **SQL Injection Prevention** - Parameterized queries using pg library
- **Input Validation** - Zod schemas for all user inputs
- **Error Messages** - Sanitized error messages (no sensitive data exposure)
- **Environment Variables** - Secure configuration management
- **XSS Protection** - React's built-in XSS protection

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **PostgreSQL** 12.x or higher
- **npm** or **yarn** package manager

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Setup

#### Option A: Using Docker (Recommended)

```bash
docker-compose up -d
```

This will start PostgreSQL on port 5432.

#### Option B: Local PostgreSQL Installation

1. Install PostgreSQL
2. Create a database:
```sql
CREATE DATABASE tasksdb;
```

3. Run the schema:
```bash
psql -U postgres -d tasksdb -f database/db.sql
```

### 4. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Database Configuration
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tasksdb
```

### 5. Run the Application

#### Development Mode
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

#### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── tasks/          # API routes for CRUD operations
│   │   ├── tasks/              # Task-related pages
│   │   ├── layout.tsx          # Root layout with Navbar and Footer
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── tasks/              # Task-specific components
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── Footer.tsx          # Footer with personal info
│   ├── interfaces/
│   │   └── Tasks.ts            # TypeScript interfaces
│   ├── lib/
│   │   └── validations.ts      # Zod validation schemas
│   └── utils/
│       └── database.ts         # PostgreSQL connection pool
├── database/
│   └── db.sql                  # Database schema
├── public/                     # Static assets
├── .env.local                  # Environment variables (not in git)
├── docker-compose.yml          # Docker configuration
└── vercel.json                 # Vercel deployment config
```

## 🔧 API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks/[id]` | Get task by ID |
| PUT | `/api/tasks/[id]` | Update task by ID |
| DELETE | `/api/tasks/[id]` | Delete task by ID |

### Request/Response Examples

#### Create Task
```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the Next.js project",
  "status": "pending",
  "priority": "high"
}
```

#### Response
```json
{
  "id": 1,
  "title": "Complete project",
  "description": "Finish the Next.js project",
  "status": "pending",
  "priority": "high",
  "created_on": "2025-12-10T10:00:00Z",
  "updated_on": "2025-12-10T10:00:00Z"
}
```

## 🎨 UI Components

- **TaskList** - Grid display of all tasks
- **TaskCard** - Individual task card with status and priority badges
- **TaskForm** - Form for creating and editing tasks
- **Navbar** - Navigation with branding and quick actions
- **Footer** - Personal information and social links

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/task-manager)

1. Click the button above
2. Configure environment variables
3. Deploy!

## 🧪 Testing

Run linting:
```bash
npm run lint
```

## 🔒 Security Best Practices

1. **Input Validation**: All inputs are validated using Zod schemas
2. **SQL Injection Prevention**: Using parameterized queries
3. **Environment Variables**: Sensitive data stored in `.env.local`
4. **Error Handling**: Graceful error handling without exposing sensitive information
5. **Database Indexing**: Optimized queries for better performance

## 📈 Performance Optimizations

- **Server-Side Rendering**: Fast initial page loads
- **Database Indexing**: Indexed columns for faster queries
- **Connection Pooling**: Efficient database connection management
- **Code Splitting**: Automatic code splitting with Next.js
- **Caching**: Leveraging Next.js caching strategies

## 🐛 Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running
- Check credentials in `.env.local`
- Ensure database exists

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- PostgreSQL Community
- Tailwind CSS
- All open-source contributors

---

**Built with ❤️ using Next.js 15 and PostgreSQL**