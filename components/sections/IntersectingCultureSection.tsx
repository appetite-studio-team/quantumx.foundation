'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { slideUpOnScroll, maskReveal, defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { intersectingCulture } from '@/content/home';

export function IntersectingCultureSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying((p) => !p);
  }, [isPlaying]);

  return (
    <section className="bg-[#f5f5f0] py-section px-6 text-background md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Left: heading + copy */}
        <div className="flex flex-col justify-center">
          {intersectingCulture.badge && (
            <motion.span
              className="mb-4 inline-block rounded-full bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-background/80"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={defaultTransition}
            >
              {intersectingCulture.badge}
            </motion.span>
          )}
          <motion.h2
            className="font-heading text-clamp-display font-bold uppercase leading-tight tracking-tight-heading"
            {...slideUpOnScroll}
          >
            {intersectingCulture.headingLine1}
            <br />
            {intersectingCulture.headingLine2}
          </motion.h2>
          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-background/80 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            {intersectingCulture.paragraph}
          </motion.p>
        </div>

        {/* Right: video with play button */}
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-sm bg-background/10"
          initial={maskReveal.initial}
          whileInView={maskReveal.whileInView}
          viewport={maskReveal.viewport}
          transition={maskReveal.transition}
        >
          <video
            ref={videoRef}
            src={intersectingCulture.videoSrc}
            poster={intersectingCulture.posterSrc}
            className="absolute inset-0 h-full w-full object-cover"
            loop
            muted
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent pointer-events-none" />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background/30 bg-background/10 transition-colors hover:border-accent hover:bg-accent/20"
            onClick={togglePlay}
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
