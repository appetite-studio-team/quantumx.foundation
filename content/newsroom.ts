/**
 * Newsroom section content.
 * Edit content/newsroom.json to add or change news items.
 */

import data from './newsroom.json';

export type NewsItem = {
  date: string;
  displayDate: string;
  title: string;
  summary: string;
  image: string;
  href: string;
};

export type NewsroomContent = {
  heading: string;
  subheading: string;
  items: NewsItem[];
};

export const newsroomContent: NewsroomContent = data as NewsroomContent;

/** All news items, newest first. */
export function sortedNewsItems(): NewsItem[] {
  return [...newsroomContent.items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
