'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { staggerContainer, staggerItem, defaultViewport, defaultTransition } from '@/lib/motion-variants';

const COPY =
  'We combine art, technology and human experience into work that resonates. Our process is collaborative and iterative—driven by curiosity and a commitment to craft that pushes boundaries.';

export function StudioPhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '8%', '0%']);

  return (
    <section ref={containerRef} className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Left: media with parallax */}
        <motion.div
          className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-secondary/20"
          style={{ y: imageY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent" />
        </motion.div>

        {/* Right: heading + paragraph */}
        <div className="flex flex-col justify-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="space-y-6"
          >
            <motion.h2
              className="font-heading text-clamp-display font-bold uppercase leading-tight tracking-tight-heading text-text-primary"
              variants={staggerItem}
            >
              ART, TECHNOLOGY,
              <br />
              EXPERIENCE.
            </motion.h2>
            <motion.p
              className="max-w-lg text-base leading-relaxed text-gray-secondary md:text-lg"
              variants={staggerItem}
            >
              {COPY}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
