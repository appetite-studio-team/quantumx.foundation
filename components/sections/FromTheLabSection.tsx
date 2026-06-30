'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { LinkedInIcon } from '@/components/icons';
import { fromTheLab, latestArticles } from '@/content/from-the-lab';
import { ArticleCard } from '@/components/articles/ArticleCard';

export function FromTheLabSection() {
  const articles = latestArticles(3);

  return (
    <section id="from-the-lab" className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <h2 className="font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {fromTheLab.heading}
          </h2>
          <p className="mt-4 text-base text-gray-secondary md:text-lg">
            {fromTheLab.subheading}
          </p>
        </motion.div>

        {/* Article grid */}
        <motion.div
          className="grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gray-secondary/20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            hidden: {},
          }}
        >
          {articles.map((article) => (
            <ArticleCard
              key={article.title}
              article={article}
              className="first:md:pr-10 md:px-10 last:md:pl-10 last:md:pr-0"
            />
          ))}

          {/* Coming soon, only when there's empty room in the 3-col row */}
          {articles.length < 3 && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
              className="flex flex-col gap-5 last:md:pl-10 last:md:pr-0"
            >
              <p className="text-sm text-gray-secondary">{fromTheLab.comingSoon.label}</p>
              <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight-heading text-gray-secondary md:text-xl">
                {fromTheLab.comingSoon.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-secondary">
                {fromTheLab.comingSoon.body}
              </p>
              <a
                href={fromTheLab.comingSoon.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-secondary underline underline-offset-4 transition-colors hover:text-text-primary"
              >
                {fromTheLab.comingSoon.ctaText}
                <LinkedInIcon className="h-4 w-4 shrink-0" />
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* View all articles */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 border border-gray-secondary/30 bg-background px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors hover:border-accent hover:text-accent"
            data-magnetic
          >
            View all articles
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
