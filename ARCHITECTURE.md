# Architecture Documentation

## System Overview

This is a full-stack CRUD application built with modern web technologies, following best practices for scalability, security, and maintainability.

## Technology Stack

### Frontend
- **Next.js 15.2** - React framework with App Router
- **React 19.1** - UI library
- **TypeScript 5.3** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Icons 4.12** - Icon library
- **Sonner 2.0** - Toast notifications

### Backend
- **Next.js API Routes** - RESTful API endpoints
- **PostgreSQL** - Relational database
- **pg 8.11** - PostgreSQL client for Node.js

### Validation & Security
- **Zod** - Runtime type validation
- **Parameterized Queries** - SQL injection prevention
- **Input Sanitization** - XSS protection

### Development & Deployment
- **Docker** - Containerization
- **Vercel** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Browser   │  │   Mobile    │  │   Tablet    │         │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘         │
└─────────┼─────────────────┼─────────────────┼───────────────┘
          │                 │                 │
          └─────────────────┴─────────────────┘
                            │
          ┌─────────────────▼─────────────────┐
          │      NEXT.JS APPLICATION          │
          │  ┌─────────────────────────────┐  │
          │  │     App Router (SSR)        │  │
          │  ├─────────────────────────────┤  │
          │  │  React Components (Client)  │  │
          │  ├─────────────────────────────┤  │
          │  │    API Routes (Server)      │  │
          │  └─────────────┬───────────────┘  │
          └────────────────┼──────────────────┘
                           │
          ┌────────────────▼──────────────────┐
          │      MIDDLEWARE LAYER             │
          │  ┌──────────────────────────────┐ │
          │  │  Input Validation (Zod)      │ │
          │  ├──────────────────────────────┤ │
          │  │  Error Handling              │ │
          │  ├──────────────────────────────┤ │
          │  │  Database Connection Pool    │ │
          │  └──────────────┬───────────────┘ │
          └─────────────────┼─────────────────┘
                            │
          ┌─────────────────▼─────────────────┐
          │      DATABASE LAYER               │
          │  ┌──────────────────────────────┐ │
          │  │    PostgreSQL Database       │ │
          │  │  ┌────────┐  ┌─────────────┐ │ │
          │  │  │ Tasks  │  │   Indexes   │ │ │
          │  │  │ Table  │  │ (Optimized) │ │ │
          │  │  └────────┘  └─────────────┘ │ │
          │  └──────────────────────────────┘ │
          └───────────────────────────────────┘
```

## Data Flow

### Create Task Flow
```
1. User fills form → TaskForm component
2. Form submission → handleSubmit()
3. Client-side fetch → POST /api/tasks
4. API Route validates → Zod schema
5. Database insert → PostgreSQL with parameterized query
6. Response → JSON with created task
7. UI update → Router.push("/")
8. Page re-renders → SSR with latest data
```

### Read Tasks Flow
```
1. User visits homepage → page.tsx
2. Server Component → Executes at build/request time
3. Database query → SELECT * FROM tasks
4. Data fetched → QueryResult<Task>
5. Component renders → TaskList with TaskCards
6. Client hydration → Interactive UI
```

### Update Task Flow
```
1. User clicks task → Navigate to /tasks/edit/[id]
2. Page loads → Fetch task by ID
3. Form populated → initialTask prop
4. User edits → Form state updates
5. Submit → PUT /api/tasks/[id]
6. Validation → Zod schema (partial update)
7. Database update → Dynamic query building
8. Response → Updated task data
9. Redirect → Homepage with fresh data
```

### Delete Task Flow
```
1. User clicks delete → Opens confirmation modal
2. Confirms deletion → handleDelete()
3. API call → DELETE /api/tasks/[id]
4. Database deletion → PostgreSQL DELETE query
5. Success response → Navigate to homepage
```

## Database Schema

### Tables

#### tasks
```sql
Column      | Type                        | Constraints
------------|-----------------------------|------------------
id          | SERIAL                      | PRIMARY KEY
title       | VARCHAR(100)                | NOT NULL
description | TEXT                        | 
status      | VARCHAR(20)                 | CHECK constraint, DEFAULT 'pending'
priority    | VARCHAR(20)                 | CHECK constraint, DEFAULT 'medium'
created_on  | TIMESTAMP WITH TIME ZONE    | DEFAULT CURRENT_TIMESTAMP
updated_on  | TIMESTAMP WITH TIME ZONE    | DEFAULT CURRENT_TIMESTAMP
```

### Indexes
- `idx_tasks_status` - Query by status
- `idx_tasks_priority` - Query by priority  
- `idx_tasks_created_on` - Sort by date (DESC)
- `idx_tasks_title` - Search by title

### Triggers
- `update_tasks_updated_on` - Auto-update timestamp on modification

## API Design

### RESTful Principles
- **Resource-based URLs**: `/api/tasks`, `/api/tasks/[id]`
- **HTTP Methods**: GET, POST, PUT, DELETE
- **Status Codes**: 200, 201, 400, 404, 409, 500
- **JSON Format**: All requests and responses

### Error Handling
```typescript
// Consistent error response format
{
  "message": "User-friendly error message",
  "errors": [/* Validation errors if applicable */]
}
```

### Validation Flow
```typescript
Request → Zod Schema → Parse → Success/Error
                              ↓          ↓
                         Valid Data   Error Response
                              ↓
                        Database Operation
```

## Component Architecture

### Server Components (Default)
- `page.tsx` - Home page with SSR
- `layout.tsx` - Root layout
- Initial data fetching

### Client Components ("use client")
- `TaskForm` - Interactive form with state
- `Navbar` - Navigation with links
- `Footer` - Static footer with links

### Component Hierarchy
```
RootLayout
├── Navbar
├── HomePage
│   └── TaskList
│       └── TaskCard (multiple)
├── NewTaskPage
│   └── TaskForm
├── EditTaskPage
│   └── TaskForm (with initialTask)
└── Footer
```

## Security Architecture

### Layers of Protection

1. **Input Layer**
   - Zod validation schemas
   - Type checking (TypeScript)
   - String trimming and sanitization

2. **Application Layer**
   - Parameterized queries
   - Error message sanitization
   - React XSS protection

3. **Database Layer**
   - Connection pooling
   - CHECK constraints
   - Indexed queries (DoS prevention)

4. **Transport Layer**
   - HTTPS (in production)
   - Environment variables
   - Secrets management

## Performance Optimizations

### Server-Side Rendering
- Initial page load optimized
- SEO-friendly
- Fast Time to First Byte (TTFB)

### Database Optimizations
- Connection pooling (reuse connections)
- Indexed columns (fast queries)
- Efficient query patterns
- LIMIT clauses where appropriate

### Client-Side Optimizations
- Code splitting (automatic with Next.js)
- Image optimization (Next.js Image component)
- CSS optimization (Tailwind purging)
- Minimal JavaScript bundle

### Caching Strategy
- Static generation where possible
- Dynamic routes with revalidation
- Browser caching headers

## Scalability Considerations

### Current Architecture
- Stateless API routes (horizontal scaling)
- Connection pooling (database efficiency)
- CDN-ready static assets

### Future Enhancements
1. **Caching Layer**: Redis for session/data caching
2. **Load Balancing**: Multiple Next.js instances
3. **Database**: Read replicas for high traffic
4. **CDN**: Global content delivery
5. **Monitoring**: Application performance monitoring
6. **Rate Limiting**: Prevent abuse

## Error Handling Strategy

### Client-Side
```typescript
try {
  // API call
} catch (error) {
  toast.error("User-friendly message");
  console.error(error); // Development only
}
```

### Server-Side
```typescript
try {
  // Database operation
} catch (error) {
  console.error("Detailed error:", error); // Server logs
  return NextResponse.json(
    { message: "Generic error message" }, // Client response
    { status: 500 }
  );
}
```

## Deployment Architecture

### Vercel Platform
- **Edge Network**: Global CDN
- **Serverless Functions**: API routes
- **Automatic Scaling**: Based on traffic
- **Environment Variables**: Secure configuration

### CI/CD Pipeline
```
Git Push → GitHub → Actions → Build → Test → Deploy → Vercel
```

## Development Workflow

```
1. Feature Branch → Local Development
2. Testing → Manual/Automated
3. Pull Request → Code Review
4. Merge to Main → CI/CD Triggered
5. Deploy to Production → Vercel
6. Monitor → Logs & Analytics
```

## Monitoring and Logging

### Current Implementation
- Server-side console logging
- Client-side error boundaries
- Development error overlays

### Recommended Additions
- **Sentry**: Error tracking
- **Vercel Analytics**: Performance monitoring
- **PostgreSQL Logs**: Query performance
- **Custom Metrics**: Business analytics

## Best Practices Applied

✅ **Separation of Concerns**: Clear layer separation  
✅ **DRY Principle**: Reusable components and utilities  
✅ **Type Safety**: TypeScript throughout  
✅ **Error Handling**: Comprehensive try-catch blocks  
✅ **Input Validation**: All user inputs validated  
✅ **Security First**: Multiple security layers  
✅ **Performance**: Optimized queries and rendering  
✅ **Scalability**: Stateless architecture  
✅ **Documentation**: Comprehensive docs  
✅ **Code Quality**: Clean, readable code  

---

Last Updated: December 10, 2025
