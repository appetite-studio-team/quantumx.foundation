'use client';

import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site } from '@/content/site';

/**
 * "Join our Discord" call-to-action card.
 * Used at the end of the home page and on the community page.
 * `className` controls the outer section spacing so it can match its neighbours
 * (home uses `py-section`; community sections use `pb-section`).
 */
export function DiscordCtaSection({ className = 'py-section' }: { className?: string }) {
  return (
    <section className={`bg-background px-6 md:px-10 ${className}`}>
      <motion.a
        href={site.discordInviteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto flex max-w-7xl flex-col gap-6 border border-gray-secondary/20 bg-gray-secondary/5 p-8 transition-colors hover:border-accent/40 md:flex-row md:items-center md:justify-between md:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={defaultTransition}
        data-magnetic
      >
        <div className="max-w-2xl">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Join the community
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl">
            Build the quantum future with us
          </h2>
          <p className="mt-3 text-base text-gray-secondary md:text-lg">
            Join our Discord to connect with builders, researchers, and students
            across the QuantumX community, get event updates, and collaborate on
            open quantum projects.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-background transition-transform group-hover:translate-x-1">
          Join our Discord →
        </span>
      </motion.a>
    </section>
  );
}
