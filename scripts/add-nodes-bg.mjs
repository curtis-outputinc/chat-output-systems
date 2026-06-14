#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const TARGETS = [
  // [path, importPathDepth]
  ['app/about/page.tsx', '..'],
  ['app/process/page.tsx', '..'],
  ['app/compliance/page.tsx', '..'],
  ['app/privacy-policy/page.tsx', '..'],
  ['app/contact/page.tsx', '..'],
  ['app/intelligent-chat-systems/standard/page.tsx', '../..'],
  ['app/intelligent-chat-systems/service/page.tsx', '../..'],
  ['app/intelligent-chat-systems/retail/page.tsx', '../..'],
  ['app/intelligent-chat-systems/internal/page.tsx', '../..'],
  ['app/intelligent-chat-systems/custom/page.tsx', '../..'],
];

for (const [rel, depth] of TARGETS) {
  const full = path.join(root, rel);
  let src = await readFile(full, 'utf-8');

  if (src.includes('AnimatedNodesBackground')) {
    console.log(`skip   ${rel} (already has nodes)`);
    continue;
  }

  // 1) Add import line after SiteNav import.
  const importLine = `import AnimatedNodesBackground from '${depth}/components/AnimatedNodesBackground';`;
  const siteNavImport = `import SiteNav from '${depth}/components/SiteNav';`;
  if (!src.includes(siteNavImport)) {
    console.error(`FAIL   ${rel}: SiteNav import not found`);
    continue;
  }
  src = src.replace(siteNavImport, `${siteNavImport}\n${importLine}`);

  // 2) Insert <AnimatedNodesBackground /> right before <SiteNav active=...>.
  src = src.replace(
    /(\s*)(<SiteNav active=)/,
    (match, indent, navTag) => `${indent}<AnimatedNodesBackground />${indent}${navTag}`,
  );

  await writeFile(full, src, 'utf-8');
  console.log(`ok     ${rel}`);
}
console.log('done');
