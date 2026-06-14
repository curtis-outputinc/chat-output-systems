#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MIGRATIONS_DIR = path.join(__dirname, '..', 'supabase', 'migrations');

const envFile = await readFile(path.join(__dirname, '..', '.env.local'), 'utf-8');
const env = Object.fromEntries(
  envFile
    .split('\n')
    .filter((l) => l && !l.startsWith('#') && l.includes('='))
    .map((l) => {
      const i = l.indexOf('=');
      let v = l.slice(i + 1);
      if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
      return [l.slice(0, i), v];
    }),
);

const url = env.DIRECT_URL || env.DATABASE_URL;
if (!url) {
  console.error('DIRECT_URL or DATABASE_URL not set in .env.local');
  process.exit(1);
}

const { Client } = pg;
const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
await client.connect();
console.log('connected');

await client.query(`
  CREATE TABLE IF NOT EXISTS _migrations (
    filename text PRIMARY KEY,
    applied_at timestamptz NOT NULL DEFAULT now()
  );
`);

const files = (await readdir(MIGRATIONS_DIR))
  .filter((f) => f.endsWith('.sql'))
  .sort();

for (const file of files) {
  const { rows } = await client.query('SELECT 1 FROM _migrations WHERE filename = $1', [file]);
  if (rows.length > 0) {
    console.log(`skip   ${file} (already applied)`);
    continue;
  }
  const sql = await readFile(path.join(MIGRATIONS_DIR, file), 'utf-8');
  console.log(`apply  ${file} (${sql.length} bytes)`);
  try {
    await client.query('BEGIN');
    await client.query(sql);
    await client.query('INSERT INTO _migrations (filename) VALUES ($1)', [file]);
    await client.query('COMMIT');
    console.log(`ok     ${file}`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(`FAIL   ${file}`);
    console.error(err.message);
    process.exit(1);
  }
}

await client.end();
console.log('done');
