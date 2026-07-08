'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';
import { hero } from '@/content/home';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col bg-background">
      {/* Subtle grid overlay – same as 404 for consistent box/lines feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(var(--color-text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Center content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-32 md:px-10">
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
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-sm leading-relaxed text-gray-secondary md:text-base"
            variants={staggerItem}
          >
            {hero.tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
