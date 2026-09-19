/**
 * Copy for the home page "From the Lab" section.
 * Edit content/from-the-lab.json to change it. The posts themselves live in
 * content/blog/*.md and are loaded by lib/blog.ts.
 */

import data from './from-the-lab.json';

export type FromTheLabContent = {
  heading: string;
  subheading: string;
  comingSoon: {
    label: string;
    title: string;
    body: string;
    ctaText: string;
    ctaHref: string;
  };
};

export const fromTheLab: FromTheLabContent = data as FromTheLabContent;
