/**
 * From the Lab section content.
 * Edit content/from-the-lab.json to add or change articles and copy.
 */

import data from './from-the-lab.json';

export type FromTheLabArticle = {
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

export type FromTheLabContent = {
  heading: string;
  subheading: string;
  articles: FromTheLabArticle[];
  comingSoon: {
    label: string;
    title: string;
    body: string;
    ctaText: string;
    ctaHref: string;
  };
};

export const fromTheLab: FromTheLabContent = data as FromTheLabContent;
