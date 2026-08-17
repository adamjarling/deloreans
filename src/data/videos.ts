import type { TranslationKey } from '../i18n/ui';

export interface Video {
  /** YouTube video id (the part after youtu.be/ or ?v=) */
  id: string;
  captionKey: TranslationKey;
}

/**
 * Single source of truth for embedded performance videos.
 * Rendered by both Watch.astro (homepage) and EpkMedia.astro (press kit).
 * Keep sorted ascending by performance date.
 */
export const videos: Video[] = [
  { id: 'waiJKm_FP_g', captionKey: 'watch.caption' },
  { id: 'oMSiwV3fe1E', captionKey: 'watch.caption2' },
  { id: '5Rp2mh3SS3k', captionKey: 'watch.caption3' },
];
