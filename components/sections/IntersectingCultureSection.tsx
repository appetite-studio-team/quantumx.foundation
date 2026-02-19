'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpOnScroll, maskReveal, defaultViewport, defaultTransition } from '@/lib/motion-variants';

const COPY =
  'Studio Dialect explores how technology can shape the way people move, feel and interact with the world. We create experiences at the intersection of culture and innovation.';

export function IntersectingCultureSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#f5f5f0] py-section px-6 text-background md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Left: heading + copy */}
        <div className="flex flex-col justify-center">
          <motion.h2
            className="font-heading text-clamp-display font-bold uppercase leading-tight tracking-tight-heading"
            {...slideUpOnScroll}
          >
            INTERSECTING
            <br />
            CULTURE
          </motion.h2>
          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-background/80 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            {COPY}
          </motion.p>
        </div>

        {/* Right: media container with hover play */}
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-sm bg-background/10"
          initial={maskReveal.initial}
          whileInView={maskReveal.whileInView}
          viewport={maskReveal.viewport}
          transition={maskReveal.transition}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/5" />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background/30 bg-background/10 transition-colors hover:border-accent hover:bg-accent/20"
            onClick={() => setIsPlaying((p) => !p)}
            data-magnetic
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
            {!isPlaying ? (
              <svg
                className="ml-1 h-6 w-6 text-background"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
