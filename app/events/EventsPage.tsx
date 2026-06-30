'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { eventsContent, sortedEvents } from '@/content/events';
import { EventCard } from '@/components/events/EventCard';
import { MomentsGallery } from '@/components/events/MomentsGallery';

export function EventsPage() {
  const events = sortedEvents();

  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-section md:pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
        >
          <h1 className="font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {eventsContent.heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            {eventsContent.subheading}
          </p>
        </motion.div>
      </section>

      {/* A look back - moments from past events */}
      <MomentsGallery />

      {/* All events grid */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </motion.div>
      </section>

      {/* Back to home */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
        >
          ← Back to home
        </Link>
      </section>
    </main>
  );
}
