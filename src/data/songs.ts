/*
 * Generated from `set-lists/DeLoreans Song Catalog.csv`.
 * The CSV is the source of truth for what the band actually plays — this file
 * exists so the website can never claim a song or artist that isn't in it.
 * (The old Repertoire block was hardcoded and had drifted to list AC/DC and
 * The Eagles, neither of which is in the catalog.)
 *
 * Key/tempo/reference columns are deliberately not carried over: those are
 * rehearsal notes, and the 'Reference URL' links point at the original
 * artists' recordings, not at DeLoreans performances.
 *
 * Credit override: the CSV lists "Can't Find My Way Home" under House of
 * Lords (the cover the band learned from); it ships here as Blind Faith,
 * whose original the audience actually recognises.
 */

export interface Song {
  title: string;
  artist: string;
}

export const songs: Song[] = [
  { title: 'Birthday', artist: 'The Beatles' },
  { title: 'Born to Be My Baby', artist: 'Bon Jovi' },
  { title: 'Can\'t Find My Way Home', artist: 'Blind Faith' },
  { title: 'Cocaine', artist: 'Eric Clapton' },
  { title: 'Crazy Little Thing Called Love', artist: 'Queen' },
  { title: 'Dancing in the Dark', artist: 'Bruce Springsteen' },
  { title: 'Don\'t Know What You Got (Till It\'s Gone)', artist: 'Cinderella' },
  { title: 'Don\'t You (Forget About Me)', artist: 'Simple Minds' },
  { title: 'Every Breath You Take', artist: 'The Police' },
  { title: 'Every Rose Has Its Thorn', artist: 'Poison' },
  { title: 'Faith', artist: 'George Michael' },
  { title: 'Fat Bottomed Girls', artist: 'Queen' },
  { title: 'Gypsy Road', artist: 'Cinderella' },
  { title: 'Here I Go Again', artist: 'Whitesnake' },
  { title: 'If I Close My Eyes Forever', artist: 'Ozzy Osbourne & Lita Ford' },
  { title: 'Is This Love', artist: 'Whitesnake' },
  { title: 'Layla', artist: 'Eric Clapton' },
  { title: 'Mama, I\'m Coming Home', artist: 'Ozzy Osbourne' },
  { title: 'More Than Words', artist: 'Extreme' },
  { title: 'One', artist: 'U2' },
  { title: 'Patience', artist: 'Guns N\' Roses' },
  { title: 'Purple Rain', artist: 'Prince' },
  { title: 'Rebel Yell', artist: 'Billy Idol' },
  { title: 'Run to You', artist: 'Bryan Adams' },
  { title: 'Stop Draggin\' My Heart Around', artist: 'Stevie Nicks & Tom Petty' },
  { title: 'Summer of \'69', artist: 'Bryan Adams' },
  { title: 'Sweet Child o\' Mine', artist: 'Guns N\' Roses' },
  { title: 'Sweet Sixteen', artist: 'Billy Idol' },
  { title: 'The Boys of Summer', artist: 'Don Henley' },
  { title: 'Thunder Road', artist: 'Bruce Springsteen' },
  { title: 'Walking By Myself', artist: 'Gary Moore' },
  { title: 'Wanted Dead or Alive', artist: 'Bon Jovi' },
  { title: 'We\'re Not Gonna Take It', artist: 'Twisted Sister' },
  { title: 'White Wedding', artist: 'Billy Idol' },
  { title: 'Wild World', artist: 'Mr. Big' },
  { title: 'With or Without You', artist: 'U2' },
  { title: 'You Give Love a Bad Name', artist: 'Bon Jovi' },
];

export const songCount = songs.length;

/** Unique artists, ranked by how many of their songs are in the set. */
export const artistsByCount: { artist: string; count: number }[] = (() => {
  const tally = new Map<string, number>();
  for (const s of songs) tally.set(s.artist, (tally.get(s.artist) ?? 0) + 1);
  return [...tally.entries()]
    .map(([artist, count]) => ({ artist, count }))
    .sort((a, b) => b.count - a.count || a.artist.localeCompare(b.artist));
})();

export const artistCount = artistsByCount.length;
