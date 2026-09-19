'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultTransition } from '@/lib/motion-variants';
import { formatDate } from '@/lib/blog-utils';
import type { BlogPostSummary } from '@/lib/blog';

export function PostCard({
  post,
  headingLevel: Heading = 'h3',
  className = '',
  bodyClassName = '',
}: {
  post: BlogPostSummary;
  /** h2 on blog listings (under the page h1), h3 inside a titled section. */
  headingLevel?: 'h2' | 'h3';
  className?: string;
  /** Padding goes here, not on the card, so the cover image can run edge to edge. */
  bodyClassName?: string;
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className={`group relative flex flex-col ${className}`}
    >
      {post.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover}
          alt=""
          width={1280}
          height={720}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      )}
      <div className={`flex flex-1 flex-col gap-5 ${bodyClassName}`}>
        <p className="flex flex-wrap items-center gap-x-2 text-sm text-gray-secondary">
          {post.tags[0] && (
            <>
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {post.tags[0]}
              </span>
              <span aria-hidden>·</span>
            </>
          )}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </p>
        <Heading className="font-heading text-lg font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-xl">
          {/* The title is the link, so its anchor text is the post title. The
            ::after overlay stretches it over the card so the whole card is
            clickable without nesting a second, generic "read more" link. */}
          <Link
            href={`/blog/${post.slug}/`}
            className="transition-colors after:absolute after:inset-0 group-hover:text-accent"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="text-base leading-relaxed text-gray-secondary">{post.description}</p>
        <span
          aria-hidden
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-text-primary underline underline-offset-4 transition-colors group-hover:text-accent"
        >
          Read article →
        </span>
      </div>
    </motion.article>
  );
}
