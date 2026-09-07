'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import type { Founder } from '@/content/founders';
import { site } from '@/content/site';
import { CopyButton } from '@/components/ui/CopyButton';
import { LinkedInIcon } from '@/components/icons';

/** Shared layout for every /founder/<slug> page. */
export function FounderProfile({ founder }: { founder: Founder }) {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero - name + portrait */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-section md:pt-40 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
          {/* Left: identity */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">{founder.eyebrow}</p>
            <h1 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
              {founder.name}
            </h1>
            <p className="mt-5 font-heading text-base font-semibold uppercase tracking-[0.12em] text-accent md:text-lg">
              {founder.role}
            </p>
            <p className="mt-5 max-w-xl text-lg text-gray-secondary md:text-xl">
              {founder.headline}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {founder.focusAreas.map((area) => (
                <li
                  key={area}
                  className="border border-gray-secondary/25 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-gray-secondary"
                >
                  {area}
                </li>
              ))}
            </ul>

            {founder.linkedin ? (
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on LinkedIn`}
                className="mt-6 inline-flex items-center gap-2.5 border border-gray-secondary/30 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0" />
                LinkedIn
              </a>
            ) : null}
          </motion.div>

          {/* Right: portrait */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Offset accent frame */}
            <div
              className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full border border-accent/30"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-sm border border-gray-secondary/20 bg-background">
              <div className="relative aspect-square w-full bg-gray-secondary/10">
                <Image
                  src={founder.photo}
                  alt={founder.photoAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 448px"
                  priority
                />
              </div>
              <figcaption className="border-t border-gray-secondary/20 px-5 py-4">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
                  QuantumX
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-secondary">
                  {founder.role}
                </p>
              </figcaption>
            </div>
          </motion.figure>
        </div>
      </section>

      {/* Bio */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className="grid gap-8 border-t border-gray-secondary/20 pt-10 md:grid-cols-[0.3fr,0.7fr] md:gap-12"
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-secondary">About</h2>
          <div className="space-y-6">
            {founder.bio.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-base leading-relaxed text-gray-secondary md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Get in touch */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className="border border-gray-secondary/20 p-8 md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Get in touch</p>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-4xl">
            Work with us
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-secondary md:text-lg">
            {founder.contactBlurb}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${founder.email}`}
              className="inline-flex items-center border border-accent/50 px-6 py-3 text-sm uppercase tracking-[0.2em] text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              {founder.email} →
            </a>
            <CopyButton value={founder.email} label="Copy email" />
          </div>
          <p className="mt-5 text-sm text-gray-secondary">
            For anything team wide,{' '}
            <a
              href={`mailto:${site.email}`}
              className="text-text-primary underline underline-offset-4 hover:text-accent"
            >
              {site.email}
            </a>
            .
          </p>
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
