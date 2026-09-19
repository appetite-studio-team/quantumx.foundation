'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultTransition } from '@/lib/motion-variants';
import { PostGrid } from '@/components/blog/PostGrid';
import { TagList } from '@/components/blog/TagList';
import type { BlogPostSummary } from '@/lib/blog';

export function BlogPage({
  posts,
  tags,
}: {
  posts: BlogPostSummary[];
  tags: string[];
}) {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-block md:pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
        >
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            From the Lab
          </p>
          <h1 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            The QuantumX Blog
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            Practical guides and research notes on quantum computing, post-quantum
            cryptography, quantum-safe security, and building a career in quantum.
          </p>
        </motion.div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-6 pb-block md:px-10">
        <TagList tags={tags} label="Browse by topic" />
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10" aria-label="All articles">
        <PostGrid posts={posts} />
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
