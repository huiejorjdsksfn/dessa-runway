// Copies the static site into ./dist so hosts that expect a build output (EdgeOne Pages, Netlify, Vercel) just work.
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
for (const f of ['index.html', 'assets', 'video']) if (existsSync(f)) cpSync(f, `dist/${f}`, { recursive: true });
console.log('Built Dessa — Afterglow into ./dist');
