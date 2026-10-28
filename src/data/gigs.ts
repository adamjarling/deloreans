import type { TranslationKey } from '../i18n/ui';

export interface Gig {
  date: Date;
  venue: string;
  /** i18n key resolved by the rendering component, e.g. 'gigs.location.vienna' */
  cityKey: TranslationKey;
  url: string | null;
  flyer: string | null;
  /** Local start time(s) as 'HH:MM' (24h). An array renders as multiple sets. Omitted when not yet confirmed. */
  time?: string | string[];
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
    flyer: '/flyers/deloreans_2026-09-19_quattro.jpg',
    time: '20:00', // per flyer: "MUSIC STARTS AT 20:00"
  },
  {
    date: new Date('2026-10-10'),
    // Jungenberggasse 61, 1210 Wien
    venue: "Tony's Buschenschank",
    cityKey: 'gigs.location.vienna',
    url: 'https://www.instagram.com/tonys_wines_naturalcrafts.at/',
    flyer: '/flyers/deloreans_2026-10-10_tonys-buschenschank.jpg',
    time: '18:00',
  },
  {
    date: new Date('2026-11-13'),
    // Simmeringer Hauptstraße 78, Wien-Simmering
    venue: 'RockX Music and More',
    cityKey: 'gigs.location.vienna',
    url: 'https://www.rockx-music-and-more.com/',
    flyer: null,
  },
  {
    date: new Date('2026-12-12'),
    // Rock & Leiwand X-Mas Markt, Lastenstrasse 19, 1230 Wien. Two 30-min sets per day.
    venue: 'Fassfabrik Wien-Liesing',
    cityKey: 'gigs.location.vienna',
    url: 'https://www.rockundleiwand.com/',
    flyer: '/flyers/deloreans_rock-leiwand_2026.jpg',
    time: ['16:30', '19:30'],
  },
  {
    date: new Date('2026-12-13'),
    // Rock & Leiwand X-Mas Markt, Lastenstrasse 19, 1230 Wien. Two 30-min sets per day.
    venue: 'Fassfabrik Wien-Liesing',
    cityKey: 'gigs.location.vienna',
    url: 'https://www.rockundleiwand.com/',
    flyer: '/flyers/deloreans_rock-leiwand_2026.jpg',
    time: ['16:30', '19:30'],
  },
  {
    date: new Date('2026-12-18'),
    // Rock & Leiwand X-Mas Markt, Lastenstrasse 19, 1230 Wien. Two 30-min sets per day.
    venue: 'Fassfabrik Wien-Liesing',
    cityKey: 'gigs.location.vienna',
    url: 'https://www.rockundleiwand.com/',
    flyer: '/flyers/deloreans_rock-leiwand_2026.jpg',
    time: ['16:30', '19:30'],
  },
  {
    date: new Date('2026-12-19'),
    // Rock & Leiwand X-Mas Markt, Lastenstrasse 19, 1230 Wien. Two 30-min sets per day.
    venue: 'Fassfabrik Wien-Liesing',
    cityKey: 'gigs.location.vienna',
    url: 'https://www.rockundleiwand.com/',
    flyer: '/flyers/deloreans_rock-leiwand_2026.jpg',
    time: ['16:30', '19:30'],
  },
  {
    date: new Date('2026-12-20'),
    // Rock & Leiwand X-Mas Markt, Lastenstrasse 19, 1230 Wien. Two 30-min sets per day.
    venue: 'Fassfabrik Wien-Liesing',
    cityKey: 'gigs.location.vienna',
    url: 'https://www.rockundleiwand.com/',
    flyer: '/flyers/deloreans_rock-leiwand_2026.jpg',
    time: ['16:30', '19:30'],
  },
  {
    date: new Date('2027-01-30'),
    // Simmeringer Hauptstraße 78, Wien-Simmering
    venue: 'RockX Music and More',
    cityKey: 'gigs.location.vienna',
    url: 'https://www.rockx-music-and-more.com/',
    flyer: null,
  },
];

const endOfDay = (d: Date) =>
  new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 23, 59, 59, 999));

export const upcomingGigs = (now = new Date()) => gigs.filter(g => endOfDay(g.date) >= now);
export const pastGigs = (now = new Date()) => gigs.filter(g => endOfDay(g.date) < now);
