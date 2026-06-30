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

/** Whether an event's date is today or in the future. */
export function isUpcoming(dateStr: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(dateStr + 'T00:00:00');
  return eventDate >= today;
}

/**
 * Full list for the dedicated events page:
 * upcoming first (soonest → latest), then past (most-recent → oldest).
 */
export function sortedEvents(): Event[] {
  return [...eventsContent.events].sort((a, b) => {
    const aUp = isUpcoming(a.date);
    const bUp = isUpcoming(b.date);
    if (aUp !== bUp) return aUp ? -1 : 1;
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    return aUp ? aTime - bTime : bTime - aTime;
  });
}

/** Landing preview: the `n` events with the latest dates, newest first. */
export function recentEvents(n = 3): Event[] {
  return [...eventsContent.events]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n);
}
