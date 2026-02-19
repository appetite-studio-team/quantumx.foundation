'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site } from '@/content/site';

export function ContactFooterSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-background pt-section pb-12 text-text-primary md:px-10 md:pb-16"
    >
      {/* Gradient: dark → neon yellow glow at bottom */}
      <div
        className="pointer-events-none absolute inset-0 top-1/2 bg-gradient-to-b from-transparent via-accent/5 to-accent/20"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Email + subtext */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <a
            href={`mailto:${site.email}`}
            className="font-heading text-clamp-display font-bold uppercase tracking-tight-heading text-text-primary hover:text-accent md:text-4xl lg:text-5xl"
            data-cursor="link"
          >
            {site.email.toUpperCase()}
          </a>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-secondary">
            {site.tagline}
          </p>
        </motion.div>

        {/* Footer grid */}
        <motion.div
          className="mt-16 grid gap-12 border-t border-gray-secondary/20 pt-12 md:mt-24 md:grid-cols-3 md:gap-8 md:pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={defaultViewport}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Address</p>
            <p className="mt-2 text-sm text-text-primary">
              {site.address ?? '—'}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Explore</p>
            <nav className="mt-2 flex flex-col gap-2" aria-label="Internal links">
              {site.internalLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-text-primary hover:text-accent"
                  data-cursor="link"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Follow</p>
            <nav className="mt-2 flex flex-col gap-2" aria-label="External links">
              {site.externalLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-primary hover:text-accent"
                  data-cursor="link"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
