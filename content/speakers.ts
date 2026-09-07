/**
 * Speakers page content.
 * Edit content/speakers.json to add or change speakers.
 *
 * Each speaker needs a `name` and `title`. Everything else is optional:
 * - `photo`: path under /public (e.g. "/images/speakers/name.webp").
 *   Leave it out and the card falls back to the speaker's initials.
 * - `profileUrl`: internal page for the speaker, if we host one.
 * - `links`: any subset of youtube / x / instagram / linkedin / website.
 */

import data from './speakers.json';

export type SpeakerLinks = {
  youtube?: string;
  x?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
};

export type Speaker = {
  name: string;
  title: string;
  photo?: string;
  profileUrl?: string;
  links?: SpeakerLinks;
};

export type SpeakersContent = {
  heading: string;
  subheading: string;
  speakers: Speaker[];
};

export const speakersContent: SpeakersContent = data as SpeakersContent;

export const speakers: Speaker[] = speakersContent.speakers;

/** Initials fallback used when a speaker has no photo. */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}
