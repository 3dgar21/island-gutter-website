import path from 'path';
import sqlite3 from 'sqlite3';

// Path to the SQLite database
const dbPath = path.join(process.cwd(), 'orders.db');

// Connect to the database
export const db = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) console.error(err.message);
    else console.log('✅ Connected to orders.db');
  }
);

// Create the orders table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    address TEXT,
    phone TEXT,
    email TEXT,
    items TEXT,
    total REAL,
    created_at TEXT
  )
`);

// ✅ Type-safe wrapper for db.run (no return data)
export const apiRun = (query: string, params: unknown[] = []): Promise<void> =>
  new Promise((resolve, reject) => {
    db.run(query, params, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

// ✅ Generic, type-safe db.all wrapper
export const apiGet = <T>(query: string, params: unknown[] = []): Promise<T[]> =>
  new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as T[]);
    });
  });
