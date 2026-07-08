'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { eventsContent, recentEvents } from '@/content/events';
import { EventCard } from '@/components/events/EventCard';

export function EventsSection() {
  const events = recentEvents(3);

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
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </motion.div>

        {/* View all events */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <Link
            href="/community"
            className="inline-flex items-center gap-2 border border-gray-secondary/30 bg-background px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors hover:border-accent hover:text-accent"
            data-magnetic
          >
            View all events
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
