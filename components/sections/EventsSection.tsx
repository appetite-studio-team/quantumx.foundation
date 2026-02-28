'use client';

import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { eventsContent, type Event } from '@/content/events';

function isUpcoming(dateStr: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(dateStr + 'T00:00:00');
  return eventDate >= today;
}

function CalendarIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function MapPinIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function EventCard({ event }: { event: Event }) {
  const upcoming = isUpcoming(event.date);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(215,255,0,0.06)]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.thumbnail}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />

        {/* Status badge */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ${
            upcoming
              ? 'border border-accent/30 bg-accent/10 text-accent'
              : 'border border-gray-secondary/30 bg-background/60 text-gray-secondary'
          }`}
        >
          {upcoming ? 'Upcoming' : 'Past'}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-secondary">
          <span className="inline-flex items-center gap-1.5">
            <CalendarIcon className="h-3.5 w-3.5" />
            {event.displayDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5" />
            {event.location}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent md:text-xl">
          {event.title}
        </h3>

        {/* CTA */}
        <div className="mt-auto pt-2">
          {upcoming ? (
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-background transition-all duration-300 hover:shadow-[0_0_24px_rgba(215,255,0,0.2)]"
              data-magnetic
            >
              Register
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-secondary/60">
              Event ended
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function EventsSection() {
  return (
    <section id="events" className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <h2 className="font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {eventsContent.heading}
          </h2>
          <p className="mt-4 text-base text-gray-secondary md:text-lg">
            {eventsContent.subheading}
          </p>
        </motion.div>

        {/* Events grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            hidden: {},
          }}
        >
          {[...eventsContent.events]
            .sort((a, b) => {
              const aUp = isUpcoming(a.date);
              const bUp = isUpcoming(b.date);
              if (aUp !== bUp) return aUp ? -1 : 1;
              const aTime = new Date(a.date).getTime();
              const bTime = new Date(b.date).getTime();
              return aUp ? aTime - bTime : bTime - aTime;
            })
            .map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
