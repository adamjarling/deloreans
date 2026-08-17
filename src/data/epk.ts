import type { TranslationKey } from '../i18n/ui';

/**
 * ─────────────────────────────────────────────────────────────
 *  EPK CONTENT — structural scaffold
 * ─────────────────────────────────────────────────────────────
 *  Language-NEUTRAL content lives here (file paths, URLs, venue
 *  names, dates, numbers). Anything with prose in it references a
 *  translation key instead, and the actual wording lives in
 *  src/i18n/ui.ts for all three languages.
 *
 *  Anything marked TODO renders as a visible "pending" placeholder
 *  on the page until it's filled in — nothing silently ships empty.
 * ─────────────────────────────────────────────────────────────
 */

/* ── Contact & social ─────────────────────────────────────── */

export const contact = {
  email: 'deloreans.official@gmail.com',
  phone: null as string | null,          // TODO: booking phone number?
  website: 'https://deloreans.at',
  city: 'Vienna, Austria',
};

export const social = [
  { name: 'YouTube',   url: 'https://www.youtube.com/@DeLoreansOfficial' },
  { name: 'Facebook',  url: 'https://www.facebook.com/deloreansrock' },
  { name: 'Instagram', url: null },       // TODO: add when the account exists
  { name: 'Spotify',   url: null },       // TODO: if/when there are recordings
];

/* ── Quick-facts strip (top of the EPK) ───────────────────── */

export interface Fact {
  labelKey: TranslationKey;
  /** Either a literal, language-neutral value… */
  value?: string;
  /** …or a translation key when the value is prose. */
  valueKey?: TranslationKey;
}

export const facts: Fact[] = [
  { labelKey: 'epk.fact.genre',     valueKey: 'epk.fact.genre.value' },
  { labelKey: 'epk.fact.lineup',    valueKey: 'epk.fact.lineup.value' },
  { labelKey: 'epk.fact.based',     valueKey: 'epk.fact.based.value' },
  { labelKey: 'epk.fact.formed',    valueKey: 'epk.fact.formed.value' },   // debut gig: Jan 2026
  { labelKey: 'epk.fact.setLength', valueKey: 'epk.fact.setLength.value' },
  { labelKey: 'epk.fact.travel',    valueKey: 'epk.fact.travel.value' },
];

/* ── Audio / streaming ────────────────────────────────────── */

export interface AudioTrack {
  title: string;
  /** mp3 path in /public/audio — none exist yet */
  src: string;
  note?: string;
}

// TODO: the band decided against site audio for now. If the EPK should
// carry demo tracks for promoters, drop mp3s in /public/audio and list them.
export const audio: AudioTrack[] = [];

/* ── Press photos (hi-res, downloadable) ──────────────────── */

export interface PressPhoto {
  src: string;
  altKey: TranslationKey;
  /** Photographer credit line, shown under the image and in the usage note */
  credit: string | null;   // TODO: confirm credits before promoters republish
}

export const pressPhotos: PressPhoto[] = [
  { src: '/images/deloreans_balaton_sunset.jpg',        altKey: 'gallery.alt.13', credit: null },
  { src: '/images/deloreans_promo_2026-02.png',         altKey: 'gallery.alt.16', credit: null },
  { src: '/images/zoltan_adam_80s_bg.jpg',               altKey: 'gallery.alt.8',  credit: null },
  { src: '/images/zoltan_adam_carina_coctails.jpeg',    altKey: 'gallery.alt.17', credit: null },
];

/* ── Press quotes / reviews ───────────────────────────────── */

export interface Quote {
  /** Prose — add the text itself under this key in ui.ts, per language */
  textKey: TranslationKey;
  source: string;
  url?: string | null;
}

// TODO: no press coverage collected yet. Add reviews, venue testimonials,
// or promoter quotes here and the section will render itself.
export const quotes: Quote[] = [];

/* ── Technical requirements ───────────────────────────────── */

export interface TechItem {
  labelKey: TranslationKey;
  valueKey: TranslationKey;
}

// TODO: confirm the real rider with Adam & Zoltan — these are the
// structural slots, the values in ui.ts are educated placeholders.
export const techSpec: TechItem[] = [
  { labelKey: 'epk.tech.stage',    valueKey: 'epk.tech.stage.value' },
  { labelKey: 'epk.tech.channels', valueKey: 'epk.tech.channels.value' },
  { labelKey: 'epk.tech.monitors', valueKey: 'epk.tech.monitors.value' },
  { labelKey: 'epk.tech.power',    valueKey: 'epk.tech.power.value' },
  { labelKey: 'epk.tech.setup',    valueKey: 'epk.tech.setup.value' },
  { labelKey: 'epk.tech.ownPa',    valueKey: 'epk.tech.ownPa.value' },
];

/* ── Downloadable assets ──────────────────────────────────── */

export interface Download {
  labelKey: TranslationKey;
  descKey: TranslationKey;
  /** null = not produced yet; renders disabled with a "coming soon" state */
  href: string | null;
}

// One-sheet & rider PDFs are produced separately (Adam) — leave href null until dropped in.
export const downloads: Download[] = [
  { labelKey: 'epk.dl.onesheet', descKey: 'epk.dl.onesheet.desc', href: null },
  { labelKey: 'epk.dl.photos',   descKey: 'epk.dl.photos.desc',   href: '/press/deloreans-press-photos.zip' },
  { labelKey: 'epk.dl.logos',    descKey: 'epk.dl.logos.desc',    href: '/press/deloreans-logos.zip' },
  { labelKey: 'epk.dl.rider',    descKey: 'epk.dl.rider.desc',    href: null },
];
