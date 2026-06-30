'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultTransition } from '@/lib/motion-variants';
import { LinkedInIcon } from '@/components/icons';
import type { FromTheLabArticle } from '@/content/from-the-lab';

export function ArticleCard({
  article,
  className = '',
}: {
  article: FromTheLabArticle;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className={`flex flex-col gap-5 ${className}`}
    >
      <p className="text-sm text-gray-secondary">{article.date}</p>
      <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-xl">
        {article.title}
      </h3>
      <p className="text-base leading-relaxed text-gray-secondary">
        {article.excerpt}
      </p>
      {article.href.includes('linkedin.com') ? (
        <a
          href={article.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-text-primary underline underline-offset-4 transition-colors hover:text-accent"
        >
          Read article
          <LinkedInIcon className="h-4 w-4 shrink-0" />
        </a>
      ) : (
        <Link
          href={article.href}
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-text-primary underline underline-offset-4 transition-colors hover:text-accent"
        >
          Read article
        </Link>
      )}
    </motion.div>
  );
}
