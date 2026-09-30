# Dessa — the issue

Static, no-build site: magazine-cover montage with TikTok-style 3D transitions (cube, flip, glitch, punch, whip, shatter, spin), a beat-reactive 3D runway ring, parallax magazine spreads and a contact sheet.

- `index.html` — everything (inline CSS/JS). Add `?record` to render the film deterministically for video export.
- `assets/looks/` — the looks (2x upscaled) plus tiny blurred `bg-*` backdrops
- `assets/track.mp3` — soundtrack, reused from the lavender-s-othaya-adventure repo (`public/audio/date-song.mp3`)
- `video/dessa-montage.mp4` — 1080x1920, 24fps, 34s vertical cut with the song

Deploy: Tencent EdgeOne Pages or any static host, no build command, output directory `/`.
