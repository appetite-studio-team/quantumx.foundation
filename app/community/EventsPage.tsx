'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { eventsContent, isUpcoming, sortedEvents } from '@/content/events';
import { EventCard } from '@/components/events/EventCard';
import { MomentsGallery } from '@/components/events/MomentsGallery';
import { site } from '@/content/site';
import { DiscordCtaSection } from '@/components/sections/DiscordCtaSection';

const hackathonStats = [
  { value: '200+', label: 'Hackers' },
  { value: '50+', label: 'Teams' },
  { value: '12+', label: 'Hours' },
] as const;

const eventFilters = [
  { id: 'all', label: 'All' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'completed', label: 'Completed' },
] as const;

type EventFilter = (typeof eventFilters)[number]['id'];

export function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>('all');
  const allEvents = sortedEvents();
  const groups: Record<EventFilter, typeof allEvents> = {
    all: allEvents,
    upcoming: allEvents.filter((event) => isUpcoming(event.date)),
    completed: allEvents.filter((event) => !isUpcoming(event.date)),
  };
  const events = groups[filter];

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

      {/* Luma calendar CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.a
          href="https://luma.com/user/quantumx"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-6 rounded-lg border border-gray-secondary/20 bg-gray-secondary/5 p-8 transition-colors hover:border-accent/40 md:flex-row md:items-center md:justify-between md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          data-magnetic
        >
          <div className="max-w-2xl">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Never miss an event
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl">
              Follow QuantumX on Luma
            </h2>
            <p className="mt-3 text-base text-gray-secondary md:text-lg">
              Subscribe to our Luma calendar to get notified about upcoming workshops, meetups, and
              quantum events, and RSVP in one tap.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-background transition-transform group-hover:translate-x-1">
            View calendar →
          </span>
        </motion.a>
      </section>

      {/* A look back - moments from past events */}
      <MomentsGallery />

      {/* Events grid, filterable by status */}
      <section
        aria-labelledby="events-heading"
        className="mx-auto max-w-7xl px-6 pb-section md:px-10"
      >
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <h2
            id="events-heading"
            className="font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl"
          >
            Events
          </h2>
          <div role="group" aria-label="Filter events" className="flex flex-wrap gap-2">
            {eventFilters.map(({ id, label }) => {
              const active = id === filter;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 border px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                    active
                      ? 'border-accent bg-accent text-background'
                      : 'border-gray-secondary/30 text-text-primary hover:border-accent hover:text-accent'
                  }`}
                >
                  {label}
                  <span className={active ? 'opacity-70' : 'text-gray-secondary'}>
                    {groups[id].length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {events.length === 0 ? (
          <p className="rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 p-8 text-base text-gray-secondary md:text-lg">
            {filter === 'upcoming'
              ? 'No upcoming events right now. Follow us on Luma to hear about the next one.'
              : 'No completed events yet.'}
          </p>
        ) : (
          <motion.div
            key={filter}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
              hidden: {},
            }}
          >
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </motion.div>
        )}
      </section>

      {/* Join our Discord */}
      <DiscordCtaSection className="mb-section" />

      {/* Hackathon recap */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          className="overflow-hidden rounded-lg border border-gray-secondary/20 bg-gray-secondary/5 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Flagship event
          </span>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl">
            Quantum for Social Good Hackathon
          </h2>
          <p className="mt-3 max-w-2xl text-base text-gray-secondary md:text-lg">
            Our flagship offline hackathon with iQue Startup Park, Bengaluru, where the community
            shipped functional quantum MVPs with real social impact.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 md:mt-10 md:gap-6">
            {hackathonStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold tracking-tight-heading text-text-primary md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-gray-secondary md:mt-2 md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/qx-hack"
            className="group mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-background transition-transform hover:translate-x-1 md:mt-10"
            data-magnetic
          >
            Explore the hackathon →
          </Link>
        </motion.div>
      </section>

      {/* Queries */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <p className="text-base text-gray-secondary md:text-lg">
          For any queries, please reach out to{' '}
          <a
            href={`mailto:${site.eventsEmail}`}
            className="text-text-primary underline underline-offset-4 hover:text-accent"
          >
            {site.eventsEmail}
          </a>
          .
        </p>
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
