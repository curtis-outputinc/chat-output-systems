#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envFile = await readFile(path.join(__dirname, '..', '.env.local'), 'utf-8');

// Variables that Vercel manages itself — do NOT push these.
const SKIP = new Set([
  'NX_DAEMON', 'TURBO_CACHE', 'TURBO_DOWNLOAD_LOCAL_ENABLED',
  'TURBO_REMOTE_ONLY', 'TURBO_RUN_SUMMARY',
  'VERCEL', 'VERCEL_ENV', 'VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
  'VERCEL_GIT_COMMIT_AUTHOR_NAME', 'VERCEL_GIT_COMMIT_MESSAGE',
  'VERCEL_GIT_COMMIT_REF', 'VERCEL_GIT_COMMIT_SHA',
  'VERCEL_GIT_PREVIOUS_SHA', 'VERCEL_GIT_PROVIDER',
  'VERCEL_GIT_PULL_REQUEST_ID', 'VERCEL_GIT_REPO_ID',
  'VERCEL_GIT_REPO_OWNER', 'VERCEL_GIT_REPO_SLUG',
  'VERCEL_OIDC_TOKEN', 'VERCEL_TARGET_ENV', 'VERCEL_URL',
]);

const pairs = envFile
  .split('\n')
  .filter((l) => l && !l.startsWith('#') && l.includes('='))
  .map((l) => {
    const i = l.indexOf('=');
    let v = l.slice(i + 1);
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    return [l.slice(0, i), v];
  })
  .filter(([k]) => !SKIP.has(k));

function runCmd(cmd, args, stdin) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: ['pipe', 'pipe', 'pipe'], shell: true });
    let out = '', err = '';
    p.stdout.on('data', (d) => (out += d));
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) => {
      if (code === 0) resolve(out);
      else reject(new Error(`exit ${code}: ${err || out}`));
    });
    if (stdin) p.stdin.write(stdin);
    p.stdin.end();
  });
}

for (const [key, value] of pairs) {
  // Remove any existing value first, then add fresh for all 3 envs.
  for (const env of ['production', 'preview', 'development']) {
    try {
      await runCmd('vercel', ['env', 'rm', key, env, '--yes'], '');
    } catch {
      // not present — fine
    }
    try {
      await runCmd('vercel', ['env', 'add', key, env], value);
      console.log(`ok ${key} ${env}`);
    } catch (e) {
      console.error(`FAIL ${key} ${env}: ${e.message}`);
    }
  }
}
console.log('done');
