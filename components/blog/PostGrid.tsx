'use client';

import { motion } from 'framer-motion';
import { defaultViewport } from '@/lib/motion-variants';
import { PostCard } from '@/components/blog/PostCard';
import type { BlogPostSummary } from '@/lib/blog';

export function PostGrid({
  posts,
  headingLevel = 'h2',
}: {
  posts: BlogPostSummary[];
  headingLevel?: 'h2' | 'h3';
}) {
  return (
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
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          headingLevel={headingLevel}
          className="overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 transition-colors duration-500 hover:border-accent/40"
          bodyClassName="p-6 md:p-8"
        />
      ))}
    </motion.div>
  );
}
