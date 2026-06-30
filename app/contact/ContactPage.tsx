'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site } from '@/content/site';
import { CopyEmail } from '@/components/ui/CopyEmail';

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    description: 'For partnerships, press, and general enquiries.',
  },
  {
    label: 'Careers',
    value: 'View open roles',
    href: site.wellfoundJobsUrl,
    description: 'Join the team building the post-quantum era.',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'QuantumX Foundation',
    href: 'https://www.linkedin.com/company/quantumx-foundation/',
    description: 'Follow along for updates and announcements.',
    external: true,
  },
  {
    label: 'X',
    value: '@_Quantum_X_',
    href: 'https://x.com/_Quantum_X_',
    description: 'The fastest way to reach us publicly.',
    external: true,
  },
];

export function ContactPage() {
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
            Contact
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            Have a question, a partnership idea, or want to get involved? Reach out - we read everything.
          </p>
        </motion.div>
      </section>

      {/* Email CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Drop us a line</p>
          <div className="mt-4">
            <CopyEmail email={site.email} />
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-secondary">
            {site.tagline}
          </p>

          {site.address && (
            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Office</p>
              <address className="mt-3 max-w-md not-italic text-base leading-relaxed text-text-primary">
                {site.address}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
              >
                View on map →
              </a>
            </div>
          )}
        </motion.div>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {channels.map(({ label, value, href, description, external }) => (
            <motion.a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
              className="group flex flex-col border border-gray-secondary/20 p-6 transition-colors hover:border-accent/50 md:p-8"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gray-secondary">
                {label}
              </span>
              <span className="mt-3 text-lg font-medium text-text-primary group-hover:text-accent">
                {value}
              </span>
              <span className="mt-2 text-sm text-gray-secondary">{description}</span>
            </motion.a>
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
