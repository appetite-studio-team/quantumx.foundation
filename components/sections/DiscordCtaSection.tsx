'use client';

import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { DiscordIcon } from '@/components/icons';
import { site } from '@/content/site';

/**
 * "Join our Discord" band, ported from the QFF 2026 landing page.
 * A full-bleed accent band with an oversized Discord glyph clipped behind the copy.
 * Text uses a fixed dark ink so it stays legible on the accent in both themes.
 * `className` controls the outer spacing so it can match its neighbours.
 */
export function DiscordCtaSection({ className = 'my-section' }: { className?: string }) {
  return (
    <section
      aria-labelledby="discord-cta-heading"
      className={`relative isolate overflow-hidden bg-accent px-6 py-16 text-[#0a0a0a] md:px-10 md:py-24 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-16 opacity-10 sm:-right-4"
      >
        <DiscordIcon className="h-[280px] w-[280px] lg:h-[380px] lg:w-[380px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={defaultTransition}
      >
        <div className="max-w-2xl">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em]">
            Community
          </span>
          <h2
            id="discord-cta-heading"
            className="mt-4 font-heading text-3xl font-bold uppercase leading-tight tracking-tight-heading md:text-5xl"
          >
            Join the QuantumX
            <br />
            Discord community
          </h2>
          <p className="mt-5 max-w-xl text-base opacity-80 md:text-lg">
            Stay on top of event updates and connect with folks in the quantum
            tech space: mentors, speakers, and everyone else building through
            the foundation.
          </p>
          <a
            href={site.discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-[#0a0a0a] px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent transition-transform hover:translate-x-1"
            data-magnetic
          >
            <DiscordIcon className="h-4 w-4" />
            Join Discord server
          </a>
        </div>
      </motion.div>
    </section>
  );
}
