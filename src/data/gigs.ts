import type { TranslationKey } from '../i18n/ui';

export interface Gig {
  date: Date;
  venue: string;
  /** i18n key resolved by the rendering component, e.g. 'gigs.location.vienna' */
  cityKey: TranslationKey;
  url: string | null;
  flyer: string | null;
  /** Local start time as 'HH:MM' (24h). Omitted when not yet confirmed. */
  time?: string;
}

/**
 * Single source of truth for live dates.
 * Rendered by both Gigs.astro (homepage) and EpkLive.astro (press kit).
 * Keep sorted ascending by date.
 */
export const gigs: Gig[] = [
  {
    date: new Date('2026-01-22'),
    venue: 'Cafe Carina',
    cityKey: 'gigs.location.vienna',
    url: null,
    flyer: '/flyers/delorians_22.01.2026_cafe-carina.jpeg',
  },
  {
    date: new Date('2026-04-18'),
    venue: 'Cafe Carina',
    cityKey: 'gigs.location.vienna',
    url: 'https://www.cafe-carina.at/2020/events/the-drags-deloreans/',
    flyer: '/flyers/delorians_18.04.2026_cafe-carina.jpeg',
  },
  {
    date: new Date('2026-05-23'),
    venue: 'Club Quattro',
    cityKey: 'gigs.location.vienna',
    url: null,
    flyer: '/flyers/deloreans_2026-05-23_quattro.jpeg',
    time: '20:00', // per flyer: "MUSIC STARTS AT 20:00"
  },
  {
    date: new Date('2026-06-27'),
    venue: 'Cafe Stadler',
    cityKey: 'gigs.location.wienerNeustadt',
    url: null,
    flyer: '/flyers/deloreans_2026-06-27_cafe-stadler.jpeg',
  },
  {
    date: new Date('2026-08-14'),
    venue: 'Szepezdfürdői Strand',
    cityKey: 'gigs.location.balatonszepezd',
    url: 'https://www.facebook.com/events/2219900218832999',
    // Combined flyer promotes both the 08-14 and 08-15 Hungary dates together.
    flyer: '/flyers/deloreans_hungary_2026.jpg',
  },
  {
    date: new Date('2026-08-15'),
    venue: 'Pálffy Winery',
    cityKey: 'gigs.location.koveskal',
    url: null,
    flyer: '/flyers/deloreans_hungary_2026.jpg',
  },
  {
    date: new Date('2026-09-19'),
    venue: 'Club Quattro',
    cityKey: 'gigs.location.vienna',
    url: null,
    flyer: null,
    time: '20:00',
  },
];

const endOfDay = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);

export const upcomingGigs = (now = new Date()) => gigs.filter(g => endOfDay(g.date) >= now);
export const pastGigs = (now = new Date()) => gigs.filter(g => endOfDay(g.date) < now);
