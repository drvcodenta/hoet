import { Pool } from "pg";

// Use Vercel Postgres connection string if available, otherwise use individual env vars
const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

const pool = connectionString
  ? new Pool({
      connectionString: connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
    })
  : new Pool({
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "root",
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT || "5432"),
      database: process.env.DB_NAME || "tasksdb",
    });

export { pool };
