'use client';

import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site } from '@/content/site';

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function CareersPage() {
  const pitchHref = `mailto:${site.email}?subject=${encodeURIComponent('Careers: ')}`;

  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero: pitch + the two ways in */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-section md:pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Careers · Bengaluru
          </span>
          <h1 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            Build the post-quantum stack
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-secondary md:text-xl">
            A small team shipping real products, not slide decks. You own what you build.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.wellfoundJobsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-background"
              data-magnetic
            >
              See open roles
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={pitchHref}
              className="inline-flex items-center justify-center border border-gray-secondary/30 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors hover:border-accent hover:text-accent"
              data-magnetic
            >
              Pitch yourself
            </a>
          </div>
        </motion.div>
      </section>

      {/* How to apply: two clear paths */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          className="grid gap-px overflow-hidden rounded-lg border border-gray-secondary/20 bg-gray-secondary/20 md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <a
            href={site.wellfoundJobsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-background p-8 transition-colors hover:bg-gray-secondary/5 md:p-10"
          >
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Open roles
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl">
              Apply on Wellfound
            </h2>
            <p className="mt-3 max-w-md text-base text-gray-secondary">
              Every current opening, with scope and requirements.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors group-hover:text-accent">
              View roles
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href={pitchHref}
            className="group flex flex-col bg-background p-8 transition-colors hover:bg-gray-secondary/5 md:p-10"
          >
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              No listing fits
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl">
              Show us your work
            </h2>
            <p className="mt-3 max-w-md text-base text-gray-secondary">
              Send a repo, paper, or demo and one line on what you&apos;d build here. Skip the
              cover letter.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors group-hover:text-accent">
              {site.email}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {site.address && (
          <p className="mt-6 text-sm text-gray-secondary">
            Office:{' '}
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-accent"
            >
              Startup Park, Koramangala, Bengaluru
            </a>
          </p>
        )}
      </section>
    </main>
  );
}
