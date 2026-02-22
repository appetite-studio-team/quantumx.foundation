'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { fromTheLab } from '@/content/home';

export function FromTheLabSection() {
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
          {fromTheLab.articles.map((article) => (
            <motion.div
              key={article.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
              className="flex flex-col gap-5 first:md:pr-10 md:px-10 last:md:pl-10 last:md:pr-0"
            >
              <p className="text-sm text-gray-secondary">{article.date}</p>
              <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-xl">
                {article.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-secondary">
                {article.excerpt}
              </p>
              <Link
                href={article.href}
                className="mt-auto text-sm font-medium text-text-primary underline underline-offset-4 transition-colors hover:text-accent"
                data-cursor="link"
              >
                Read article
              </Link>
            </motion.div>
          ))}

          {/* Coming soon */}
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
            <Link
              href={fromTheLab.comingSoon.ctaHref}
              className="mt-auto text-sm font-medium text-gray-secondary underline underline-offset-4 transition-colors hover:text-text-primary"
              data-cursor="link"
            >
              {fromTheLab.comingSoon.ctaText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
