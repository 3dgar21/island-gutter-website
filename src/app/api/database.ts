import path from 'path';
import sqlite3 from 'sqlite3';

const dbPath = path.join(process.cwd(), 'orders.db');
export const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, err => {
  if (err) console.error(err.message);
  else console.log('✅ Connected to orders.db');
});

// Create the table if it doesn't exist
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

export const apiRun = (query: string, params: any[] = []) =>
  new Promise<void>((res, rej) => {
    db.run(query, params, err => (err ? rej(err) : res()));
  });

export const apiGet = <T>(query: string, params: any[] = []) =>
  new Promise<T[]>((res, rej) => {
    db.all(query, params, (err, rows) => (err ? rej(err) : res(rows)));
  });
