# Contributing to Task Manager

Thank you for considering contributing to this project! This document outlines the process for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- PostgreSQL 12.x or higher
- Git
- A code editor (VS Code recommended)

### Setting Up Development Environment

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/task-manager.git
   cd task-manager
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/task-manager.git
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Set Up Environment**
   ```bash
   cp .env.template .env.local
   # Edit .env.local with your database credentials
   ```

6. **Set Up Database**
   ```bash
   # Start PostgreSQL via Docker
   docker-compose up -d
   
   # Or run the SQL schema manually
   psql -U postgres -d tasksdb -f database/db.sql
   ```

7. **Run Development Server**
   ```bash
   npm run dev
   ```

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/ORIGINAL_OWNER/task-manager/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, Node version, etc.)

### Suggesting Features

1. Check existing [Issues](https://github.com/ORIGINAL_OWNER/task-manager/issues) and [Pull Requests](https://github.com/ORIGINAL_OWNER/task-manager/pulls)
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach

### Submitting Changes

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test Your Changes**
   ```bash
   # Run the application
   npm run dev
   
   # Test all features
   # Ensure no errors in console
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

   **Commit Message Format:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template with:
     - Description of changes
     - Related issue numbers
     - Screenshots (if UI changes)
     - Checklist completion

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` type when possible

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use meaningful component and variable names
- Implement proper error boundaries

### File Structure
```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
├── lib/             # Utility functions and validations
├── interfaces/      # TypeScript interfaces
└── utils/           # Helper functions
```

### Naming Conventions
- **Components**: PascalCase (e.g., `TaskCard.tsx`)
- **Functions**: camelCase (e.g., `createTask`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_TITLE_LENGTH`)
- **Files**: kebab-case or PascalCase based on content

### Best Practices
- **DRY Principle**: Don't Repeat Yourself
- **SOLID Principles**: Especially Single Responsibility
- **Error Handling**: Always handle errors gracefully
- **Validation**: Validate all user inputs
- **Security**: Never trust user input

## Testing

Currently, the project uses manual testing. Future contributions for automated testing are welcome:

- Unit tests (Jest + React Testing Library)
- Integration tests
- E2E tests (Playwright or Cypress)

## Documentation

When adding new features:
- Update README.md if needed
- Add JSDoc comments for functions
- Update API documentation
- Add examples for complex features

## Code Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## Getting Help

- Create an issue for questions
- Join our Discord (if available)
- Email: your-email@example.com

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing!
