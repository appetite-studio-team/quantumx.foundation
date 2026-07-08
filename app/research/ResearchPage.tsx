'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { research } from '@/content/research';

export function ResearchPage() {
  const { publications } = research;

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
            {research.heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            {research.subheading}
          </p>
        </motion.div>
      </section>

      {/* Publications */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          className="flex flex-col gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {publications.map((pub) => (
            <motion.article
              key={pub.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
              className="flex flex-col gap-4 rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 p-6 transition-colors duration-500 hover:border-accent/40 md:p-8"
            >
              {pub.meta ? (
                <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">
                  {pub.meta}
                </p>
              ) : null}
              <h2 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-2xl">
                {pub.title}
              </h2>
              <p className="max-w-4xl text-base leading-relaxed text-gray-secondary">
                {pub.abstract}
              </p>
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                Read Abstract →
              </a>
            </motion.article>
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
