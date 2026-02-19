'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';

const GALLERY_ITEMS = [
  { id: 1, label: 'Motion' },
  { id: 2, label: 'Design' },
  { id: 3, label: 'Interactive' },
  { id: 4, label: 'Experience' },
  { id: 5, label: 'Culture' },
  { id: 6, label: 'Technology' },
  { id: 7, label: 'Production' },
  { id: 8, label: 'Studio' },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 pt-8 md:px-10 md:pt-10">
        <span className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-text-primary">
          DIALECT
        </span>
        <button
          type="button"
          className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-text-primary hover:text-accent"
          data-cursor="link"
        >
          [MENU]
        </button>
      </header>

      {/* Center content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-32 md:px-10">
        <motion.div
          className="flex max-w-5xl flex-col items-center text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="font-heading text-clamp-hero font-bold uppercase leading-[0.95] tracking-tight-heading text-text-primary"
            variants={staggerItem}
          >
            EXPERT DIGITAL
            <br />
            PRODUCTION
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-sm leading-relaxed text-gray-secondary md:text-base"
            variants={staggerItem}
          >
            Award-winning motion, design and interactive experiences that connect
            culture, technology and contemporary aesthetics.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom: curved horizontal scrolling strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-6">
        <div className="relative flex w-full">
          <motion.div
            className="flex shrink-0 gap-12 pl-6 md:gap-16 md:pl-10"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 60, ease: 'linear' },
            }}
          >
            {[...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item) => (
              <div
                key={`${item.id}-${item.label}`}
                className="flex shrink-0 items-center gap-4 rounded-full border border-gray-secondary/30 bg-background/80 px-6 py-3 backdrop-blur-sm md:px-8 md:py-4"
              >
                <span className="font-heading text-sm font-semibold uppercase tracking-wider text-text-primary md:text-base">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
