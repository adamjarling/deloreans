# EPK Build Brief — The DeLoreans

**For:** Claude Code (working inside this repo)
**Goal:** Build a dedicated, booker-facing Electronic Press Kit (EPK) at `/epk`, trilingual, reusing the existing design system and data.
**Audience of the page:** club owners, bookers, and event organizers deciding whether to hire the band. Every choice should make it easy for them to say yes and easy to forward the page to a colleague.

---

## 0. Read these first (existing conventions — do NOT reinvent)

- **Framework:** Astro, static output, Netlify deploy. Single scrolling homepage today.
- **i18n:** Trilingual — `de` (default, no prefix), `en` (`/en/`), `hu` (`/hu/`). All copy lives in `src/i18n/ui.ts` as keyed strings, consumed via `getLangFromUrl` + `useTranslations` (see `src/i18n/utils.ts`). **Every new string must be added to all three language blocks.**
- **Single source of truth for live dates:** `src/data/gigs.ts`. The EPK **must** render dates from this file — never hardcode gigs. (The file's own comment already anticipates an `EpkLive.astro` press-kit renderer.)
- **Design system** (defined as CSS vars in `src/layouts/Layout.astro` global styles): bg `#0A0A0F`, pink `#FF1493`, cyan `#00D4FF`, purple `#9B30FF`, text `#FFFFFF`. Display font Bebas Neue, body font Barlow Condensed. Aesthetic: synthwave / retrowave / 80s. **Reuse existing tokens and utility classes** (`.container`, `.section-label`, `.section-title`, `.neon-line`, `.btn`, etc.) — match the look of `About.astro` / `Watch.astro` / `Contact.astro`.
- **Hard rules:** Band name is always **"DeLoreans"** (capital L). Video: `.mp4` only, prefer YouTube embeds. No audio on the site. Do not `git push` or deploy without explicit confirmation.

### Two discrepancies to resolve, not guess
1. **Email:** live site uses `deloreans.official@gmail.com`; the bio PDF uses `DeLoreansOfficial@gmail.com`. Gmail ignores dots/case so both reach the same inbox, but **pick one for consistency across the EPK** and match the homepage (`deloreans.official@gmail.com`) unless Adam says otherwise.
2. **`CLAUDE.md` says "Language: English only"** but the codebase is already trilingual. The code is the source of truth — **build the EPK trilingual (de/en/hu)** and, if convenient, update that stale line in `CLAUDE.md`.

---

## 1. Route & structure

Create a dedicated page, mirroring the existing homepage locale pattern:

- `src/pages/epk.astro` (German, default)
- `src/pages/en/epk.astro`
- `src/pages/hu/epk.astro`

Each imports a set of EPK section components (compose the same way `pages/index.astro` composes the homepage). Build the page from focused components in `src/components/epk/` (or prefixed `Epk*`):

1. `EpkHero` — band name/logo, one-line hook, key facts strip, primary "Book the band" CTA + "Download press kit (PDF)".
2. `EpkFacts` — the at-a-glance table (see §2).
3. `EpkBio` — short bio + long bio + the two member bios (reuse `adam.bio` / `zoltan.bio` strings — do not duplicate them, reference the same i18n keys).
4. `EpkLive` — live videos. Reuse the two YouTube IDs already in `Watch.astro` (`waiJKm_FP_g`, `oMSiwV3fe1E`).
5. `EpkRepertoire` — representative setlist (see §2).
6. `EpkShows` — upcoming + past dates from `gigs.ts` (this is the anticipated `EpkLive.astro` role; name it clearly, e.g. `EpkShows.astro`, to avoid confusion with the video section).
7. `EpkPress` — press/venue quotes (placeholders for now — see §2).
8. `EpkTech` — technical requirements / stage plot (placeholders — see §2).
9. `EpkDownloads` — hi-res photos, logo pack, PDF one-sheet (see §3).
10. `EpkContact` — booking contact + socials. Can reuse/adapt `Contact.astro`.

**Discoverability:** the page is meant to be sent directly via email, so it does not need to be in the main nav. Add a discreet **"Press Kit / EPK"** link in the footer (`Contact.astro` footer area) and include `/epk` in `sitemap.xml`. Leave it indexable (no `noindex`).

---

## 2. Content blocks (drafted copy — English)

Add each as i18n keys (`epk.*`) in `ui.ts` for **all three languages**. English is drafted below; translate to German and Hungarian in the same voice as the existing site copy. **Adam/Zoltan should verify DE/HU before launch.** Where you see `⚠ TO CONFIRM`, insert a clearly-marked placeholder — **do not fabricate** facts, quotes, gear, or fees.

### One-line hook (hero)
> Acoustic 80s rock, stripped to two guitars and a whole lot of soul — singalong hits from Bon Jovi to Whitesnake, built to fill a room.

Keep the existing tagline available too: *"Acoustic Time Travel — Back to When Music Was Still Awesome."*

### At-a-glance facts (EpkFacts)
| Field | Value |
|---|---|
| Genre | Acoustic 80s rock & pop covers |
| Format | Acoustic duo — two guitars, percussion, vocals; often expanded with guest musicians |
| Based in | Vienna, Austria |
| Active since | January 2026 |
| Ideal for | Clubs, pubs & bars, private events, festivals, winery & beach events |
| Set length | ⚠ TO CONFIRM (suggested: 2 × 45 min or 3 × 40 min, flexible) |
| Travel radius | Austria, Germany, Hungary |
| Languages | Members speak English, German & Hungarian |
| Booking fee | ⚠ TO CONFIRM (recommend "on request" rather than a public number) |

### Short bio (~50 words)
> The DeLoreans are a Vienna-based acoustic duo reimagining the great rock hits of the 1980s — Bon Jovi, Whitesnake, Bryan Adams and more — on two guitars, percussion and vocals. Founded by touring veterans Adam J. Arling and Zoltan 'BZ' Batky, they've been packing Vienna rooms since their January 2026 debut.

### Long bio
Reuse the existing `about.p1` + `about.p2` copy, or adapt the fuller narrative from `press-kit/DeLoreans Bio.pdf`. Do not rewrite the member bios — reference `adam.bio` and `zoltan.bio`.

### Why book The DeLoreans (selling points — the core of a booker's decision)
1. **Easy to host.** A compact acoustic setup — minimal stage, PA and load-in needs. Fits anything from a corner of a café to a festival stage.
2. **Proven live draw.** Playing Vienna regularly since January 2026 (Café Carina, Club Quattro, Café Stadler) plus dates in Hungary.
3. **Serious pedigree.** Adam toured 20+ years with Urge Overkill, The Last Vegas and Warrior Soul, sharing stages with AC/DC and Guns N' Roses; Zoltan is an award-winning songwriter with nearly twenty albums.
4. **Crowd-pleasing repertoire.** Universally known singalong hits — the kind that get a room moving and keep it there.
5. **Flexible.** Scales from an intimate duo to a fuller sound with guest musicians, and adapts the set to your room and crowd.

### Repertoire (EpkRepertoire — pull from `set-lists/DeLoreans Song Catalog.csv`)
Representative selection (list ~15–20, then "& many more"):
Bon Jovi — *You Give Love a Bad Name*, *Wanted Dead or Alive*; Whitesnake — *Here I Go Again*, *Is This Love*; Bryan Adams — *Summer of '69*; Billy Idol — *White Wedding*, *Rebel Yell*; Queen — *Fat Bottomed Girls*, *Crazy Little Thing Called Love*; Prince — *Purple Rain*; The Police — *Every Breath You Take*; Don Henley — *The Boys of Summer*; Ozzy Osbourne — *Mama I'm Coming Home*; Eric Clapton — *Cocaine*, *Layla*; Poison — *Every Rose Has Its Thorn*; Twisted Sister — *We're Not Gonna Take It*; Bruce Springsteen — *Thunder Road*.

### Press / venue quotes (EpkPress)
⚠ TO CONFIRM — no real quotes yet. Build the section and insert 2–3 clearly-marked placeholders (e.g. `"[Venue quote to come]" — [Name, Venue]`). Do **not** invent quotes. Adam to source a line from Café Carina / Café Stadler.

### Technical requirements / stage plot (EpkTech)
⚠ TO CONFIRM — Adam to supply real specs. Scaffold the section with this template and mark each line as placeholder:
- **Band brings:** 2 acoustic guitars + DI/pickups, percussion, ⚠ (own mics? in-ears? small mixer?).
- **Venue provides:** PA suitable for the room, ⚠ (number of vocal mics / stands), ⚠ (monitor(s)), power, ⚠ (stage/space min. dimensions).
- **Channel/input list:** ⚠ (e.g. Gtr 1 DI, Gtr 2 DI, Vox 1, Vox 2, Percussion — confirm).
- **Setup/soundcheck time:** ⚠.
- Offer a downloadable stage plot in `EpkDownloads` once specs exist.

---

## 3. Assets & downloads (EpkDownloads)

Create `public/downloads/` and wire up three download items. Source assets already in the repo (`public/images/` and the project's `photos/`, `logos/`, `press-kit/` folders):

- **Hi-res press photos** — select the strongest 3–4 (candidates: `zoltan_adam_carina.jpeg`, `zoltan_adam_80s_bg.jpg`, `carina_lights.jpeg`, `deloreans_guitarist_live.jpeg`). Offer individual downloads and/or a single zip. Use the highest-resolution originals available from `photos/` rather than any downscaled web copies.
- **Logo pack** — `logo_long.png` (horizontal), `logo_cropped.png`, `logo_fake_png.png` (transparent), `logo_with_car.jpeg`. Bundle as `DeLoreans-Logos.zip`.
- **PDF one-sheet** — `DeLoreans-EPK.pdf`, a printable one-page summary (hook, short bio, selling points, key repertoire, photo, contact). Two acceptable approaches:
  - (a) Add a print stylesheet to `/epk` so browser "Save as PDF" produces a clean one-pager, **and/or**
  - (b) link a static `public/downloads/DeLoreans-EPK.pdf`. *(Adam can have this PDF generated separately and dropped in — leave the link in place pointing at that path.)*

Each download link should have a clear label and, ideally, file type/size.

---

## 4. Contact (EpkContact)

- **Email:** `deloreans.official@gmail.com` (see §0 discrepancy note).
- **Website:** deloreans.at
- **Socials:** YouTube (`@DeLoreansOfficial`), Facebook (`facebook.com/deloreansrock`). Instagram/TikTok are placeholders on the homepage — keep them placeholder here too.
- **Phone/WhatsApp:** the bio lists Zoltan +43 660 381 1724 and Adam +43 676 788 9419. ⚠ CONFIRM with Adam whether to publish phone numbers on a public EPK (fine for bookers, but it's public). Default to including a WhatsApp booking line if Adam approves; otherwise email-only.
- Primary CTA everywhere: **"Book the band"** → mailto with a prefilled subject like `Booking enquiry — The DeLoreans`.

---

## 5. Constraints & definition of done

**Constraints (recap):** trilingual (all strings in `ui.ts` × 3), reuse design tokens & components, dates only from `gigs.ts`, "DeLoreans" capital L, `.mp4`/YouTube only, no audio, no fabricated content (mark `⚠ TO CONFIRM`), no `git push`/deploy without approval.

**Done when:**
- [ ] `/epk`, `/en/epk`, `/hu/epk` all render and are visually consistent with the rest of the site.
- [ ] All ten sections present; no lorem ipsum; every unknown clearly marked `⚠ TO CONFIRM` (not invented).
- [ ] All new copy exists in `ui.ts` for de/en/hu; member bios referenced, not duplicated.
- [ ] Shows section pulls from `gigs.ts` (verify by editing a date and seeing it update).
- [ ] Downloads section links resolve (photos, logo zip, PDF path).
- [ ] Footer "Press Kit" link + `sitemap.xml` entry added.
- [ ] Fully responsive (check mobile ≤640px and desktop).
- [ ] `pnpm build` passes clean; `pnpm dev` verified in all three locales.
- [ ] Basic a11y: images have alt text, sufficient contrast, headings ordered.

**Suggested commit sequence:** (1) scaffold routes + empty components, (2) add i18n keys, (3) fill sections, (4) downloads + PDF/print, (5) footer link + sitemap, (6) responsive/a11y pass. Commit locally at each step; do not push.

---

*Prepared as a handoff spec. Items marked ⚠ TO CONFIRM need Adam/Zoltan input before launch — Claude Code should scaffold them as visible placeholders rather than guessing.*
