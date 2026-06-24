# DeLoreans Website — Project Instructions

## Permissions

The following are **pre-authorized** — no confirmation needed:
- Create, edit, or delete any file within this project directory
- Install packages (`pnpm install`, `pnpm add`, etc.)
- Run dev servers (`pnpm dev`, etc.)
- Run builds (`pnpm build`, etc.)
- Convert audio/image files using CLI tools (ffmpeg, sharp, etc.)
- Create git commits
- Create directories and scaffold project structure

The following **always require explicit confirmation**:
- `git push` to any remote
- Deleting files outside this project directory
- Sending any email or external message
- Publishing or deploying to a live URL

## Project Decisions (Pre-Answered)

- **Framework:** Astro (static output, Netlify deploy)
- **Site type:** Single scrolling page
- **Audio:** No audio on the website for now
- **Video:** Use `.mp4` files only (no `.mov`). Prefer YouTube embeds if videos are uploaded there; otherwise self-host `.mp4` in `/public/video/`
- **Language:** English only
- **Shows section:** "Contact us to book" (no hardcoded gig dates unless told)
- **Domain:** deloreans.at — Netlify site will be configured to use this custom domain

## Key Assets

All source assets live in subdirectories of this project root:
- `logos/` — logo_with_car.jpeg (hero), logo_long.png (nav), logo_fake_png.png (transparent)
- `photos/` — B&W live shots and portraits
- `flyers/` — Cafe Carina gig flyer
- `audio/` — WAV recordings (to be converted to MP3)
- `video/` — mp4/mov clips
- `web/` — website project lives here

## Design System

- **Background:** `#0A0A0F`
- **Neon pink:** `#FF1493`
- **Electric cyan:** `#00D4FF`
- **Purple:** `#9B30FF`
- **Text:** `#FFFFFF`
- **Display font:** Bebas Neue (Google Fonts)
- **Body font:** Barlow Condensed (Google Fonts)
- **Aesthetic:** Synthwave / retrowave / 80s hard rock — dark, neon, CRT-grained

## Band Info

- **Full name:** The DeLoreans (always spelled "DeLoreans" — capital L)
- **Members:** Adam J. Arling (guitar/vocals) & Zoltan 'BZ' Batky (vocals/guitar)
- **Based in:** Vienna, Austria
- **Genre:** Acoustic 80s rock & pop covers (Bon Jovi, Whitesnake, Bryan Adams, etc.)
- **Tagline:** "Acoustic Time Travel — Back to When Music Was Still Awesome"
- **Email:** deloreans.official@gmail.com
- **Debut:** January 2026, Cafe Carina, Vienna
