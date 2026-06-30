'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { fromTheLab, sortedArticles } from '@/content/from-the-lab';
import { ArticleCard } from '@/components/articles/ArticleCard';

export function ArticlesPage() {
  const articles = sortedArticles();

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
            {fromTheLab.heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            {fromTheLab.subheading}
          </p>
        </motion.div>
      </section>

      {/* Articles grid */}
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
          {articles.map((article) => (
            <ArticleCard
              key={article.title}
              article={article}
              className="rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 p-6 transition-colors duration-500 hover:border-accent/40 md:p-8"
            />
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
