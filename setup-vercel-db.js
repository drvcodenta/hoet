// Run this script to setup your Vercel Postgres database
// Usage: node setup-vercel-db.js "your-postgres-url-here"

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionString = process.argv[2];

if (!connectionString) {
  console.error('❌ Please provide the Postgres URL as an argument');
  console.log('Usage: node setup-vercel-db.js "your-postgres-url"');
  process.exit(1);
}

const pool = new Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
});

async function setupDatabase() {
  try {
    console.log('🔗 Connecting to Vercel Postgres...');
    
    const sqlPath = path.join(__dirname, 'database', 'db.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    
    console.log('📝 Running SQL schema...');
    await pool.query(sql);
    
    console.log('✅ Database setup complete!');
    console.log('📊 Sample tasks have been created.');
    
    // Verify
    const result = await pool.query('SELECT COUNT(*) FROM tasks');
    console.log(`✅ Found ${result.rows[0].count} tasks in database`);
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
  } finally {
    await pool.end();
  }
}

setupDatabase();
