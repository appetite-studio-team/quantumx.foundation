'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, staggerItem, defaultViewport } from '@/lib/motion-variants';
import { studioPhilosophy } from '@/content/home';

export function StudioPhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '8%', '0%']);

  return (
    <section ref={containerRef} id="founder-note" className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr,3fr] md:gap-16 lg:gap-24">
        {/* Left: founder image with parallax (half the previous column width) */}
        <motion.div
          className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-secondary/20"
          style={{ y: imageY }}
        >
          <Image
            src={studioPhilosophy.imageSrc}
            alt={studioPhilosophy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* Right: heading + paragraph + caption (center aligned) */}
        <div className="flex flex-col items-center justify-center text-center">
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
              {studioPhilosophy.heading}
            </motion.h2>
            <motion.p
              className="mx-auto max-w-lg text-base leading-relaxed text-gray-secondary md:text-lg"
              variants={staggerItem}
            >
              {studioPhilosophy.paragraph}
            </motion.p>
            <motion.div className="pt-2 flex flex-col items-center" variants={staggerItem}>
              <div className="flex items-center justify-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-secondary/30 bg-gray-secondary/20">
                  <Image
                    src={studioPhilosophy.imageSrc}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <p className="font-heading text-sm font-semibold uppercase text-text-primary">
                  {studioPhilosophy.name}
                </p>
              </div>
              <p className="mt-1 text-sm text-gray-secondary">{studioPhilosophy.role}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
