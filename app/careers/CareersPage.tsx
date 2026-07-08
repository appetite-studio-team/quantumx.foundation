'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site } from '@/content/site';

const values = [
  {
    label: 'Frontier work',
    description:
      'Post-quantum cryptography, quantum tooling, and education - real problems that matter for the next decade of computing.',
  },
  {
    label: 'Open by default',
    description:
      'We build in the open and share what we learn. Your work reaches researchers, builders, and students worldwide.',
  },
  {
    label: 'Small, high-trust team',
    description:
      'Direct ownership, short feedback loops, and room to shape how we build the foundations of the post-quantum era.',
  },
];

export function CareersPage() {
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
            Careers
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            We&apos;re building the foundations of the post-quantum era - and we&apos;re looking for
            people who want to build it with us.
          </p>
        </motion.div>
      </section>

      {/* Why join */}
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
          {values.map(({ label, description }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
              className="flex flex-col border border-gray-secondary/20 p-6 md:p-8"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gray-secondary">
                {label}
              </span>
              <span className="mt-3 text-base leading-relaxed text-text-primary">
                {description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Open roles CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className="border border-gray-secondary/20 p-8 md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Open roles</p>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-4xl">
            View open positions
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-secondary md:text-lg">
            All of our current openings live on Wellfound. Browse roles, see what we&apos;re working
            on, and apply directly.
          </p>
          <a
            href={site.wellfoundJobsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center border border-accent/50 px-6 py-3 text-sm uppercase tracking-[0.2em] text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            View roles on Wellfound →
          </a>
        </motion.div>
      </section>

      {/* Nothing fits? */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">
            Don&apos;t see your role?
          </p>
          <p className="mt-3 max-w-2xl text-base text-gray-secondary md:text-lg">
            We&apos;re always keen to meet exceptional people. Tell us how you&apos;d make an
            impact -{' '}
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
