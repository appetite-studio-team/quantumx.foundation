/**
 * Events section content.
 * Edit content/events.json to add or change events.
 */

import data from './events.json';

export type Event = {
  title: string;
  date: string;
  displayDate: string;
  location: string;
  thumbnail: string;
  registerUrl: string;
};

export type EventsContent = {
  heading: string;
  subheading: string;
  events: Event[];
};

export const eventsContent: EventsContent = data as EventsContent;
