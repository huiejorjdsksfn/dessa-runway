# Dessa — Afterglow

Cinematic fashion montage: magazine-cover scenes with TikTok-style 3D transitions (cube, flip, glitch, punch, whip, shatter, spin), a 3D runway ring, parallax spreads and a contact sheet.

- `index.html` — the whole site (inline CSS/JS). `?record` renders the film deterministically for video export.
- `assets/looks/` — eleven looks (2x upscaled) + tiny blurred `bg-*` backdrops
- `assets/track.mp3` — soundtrack (from lavender-s-othaya-adventure `public/audio/date-song.mp3`)
- `video/dessa-montage.mp4` — 1080x1920, 24fps, vertical cut with the song
- `build.mjs` — copies the site into `dist/`

## Deploy (Tencent EdgeOne Pages)
`edgeone.json` already sets build command `node build.mjs` and output directory `./dist`.
In the console: Framework preset **Other**, leave build settings on defaults (the file overrides them).
Any static host also works by serving the repo root directly.
