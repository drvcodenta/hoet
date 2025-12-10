-- CREATE DATABASE tasksdb;

-- \c tasksdb;

-- Enhanced tasks table with additional fields for better task management
CREATE TABLE IF NOT EXISTS tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in-progress', 'completed')),
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority);
CREATE INDEX IF NOT EXISTS idx_tasks_created_on ON tasks(created_on DESC);
CREATE INDEX IF NOT EXISTS idx_tasks_title ON tasks(title);

-- Trigger to automatically update updated_on timestamp
CREATE OR REPLACE FUNCTION update_updated_on_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_on = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_tasks_updated_on BEFORE UPDATE ON tasks
    FOR EACH ROW EXECUTE FUNCTION update_updated_on_column();

-- Sample data (optional, for testing)
INSERT INTO tasks(title, description, status, priority) 
VALUES ('Setup Development Environment', 'Install Node.js, PostgreSQL, and configure project', 'completed', 'high')
ON CONFLICT DO NOTHING;

INSERT INTO tasks(title, description, status, priority) 
VALUES ('Implement CRUD Operations', 'Create API routes for Create, Read, Update, Delete', 'in-progress', 'high')
ON CONFLICT DO NOTHING;

INSERT INTO tasks(title, description, status, priority) 
VALUES ('Add Data Validation', 'Implement Zod schemas for input validation', 'pending', 'medium')
ON CONFLICT DO NOTHING;

-- Useful queries
-- SELECT * FROM tasks ORDER BY created_on DESC;
-- SELECT * FROM tasks WHERE status = 'pending';
-- SELECT * FROM tasks WHERE priority = 'high';