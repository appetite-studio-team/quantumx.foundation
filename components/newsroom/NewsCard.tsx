'use client';

import { motion } from 'framer-motion';
import { defaultTransition } from '@/lib/motion-variants';
import type { NewsItem } from '@/content/newsroom';

function RedirectIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(215,255,0,0.06)]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-square overflow-hidden bg-gray-secondary/20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <p className="text-sm text-gray-secondary">{item.displayDate}</p>

        <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight-heading text-text-primary transition-colors duration-300 group-hover:text-accent md:text-xl">
          {item.title}
        </h3>

        <p className="text-base leading-relaxed text-gray-secondary">
          {item.summary}
        </p>

        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-primary underline underline-offset-4 transition-colors hover:text-accent"
        >
          Read more
          <RedirectIcon className="h-4 w-4 shrink-0" />
        </a>
      </div>
    </motion.div>
  );
}
