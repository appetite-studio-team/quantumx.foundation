'use client';

import { useRef, type CSSProperties, type PointerEvent } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';
import { hero } from '@/content/home';

const GRID_SIZE = 60;
/** Max distance in px the grid drifts toward the cursor. */
const PARALLAX = 10;

/** Grid lines that drift with the cursor via --px/--py, set on the section. */
function gridLines(color: string): CSSProperties {
  return {
    backgroundImage: `
      linear-gradient(${color} 1px, transparent 1px),
      linear-gradient(90deg, ${color} 1px, transparent 1px)
    `,
    backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
    backgroundPosition: 'var(--px, 0px) var(--py, 0px)',
  };
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frame = useRef<number | null>(null);

  // Pointer position is written to CSS variables so the grid reacts without re-rendering.
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return;
    const section = sectionRef.current;
    if (!section) return;
    const { clientX, clientY } = event;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = section.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      section.style.setProperty('--mx', `${x}px`);
      section.style.setProperty('--my', `${y}px`);
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        section.style.setProperty('--px', `${((x / rect.width) * 2 - 1) * PARALLAX}px`);
        section.style.setProperty('--py', `${((y / rect.height) * 2 - 1) * PARALLAX}px`);
      }
      section.style.setProperty('--spot', '1');
    });
  };

  const handlePointerLeave = () => {
    const section = sectionRef.current;
    if (!section) return;
    section.style.setProperty('--px', '0px');
    section.style.setProperty('--py', '0px');
    section.style.setProperty('--spot', '0');
  };

  const spotlightMask = `radial-gradient(${GRID_SIZE * 4}px circle at var(--mx, 50%) var(--my, 50%), #000 0%, transparent 100%)`;

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-screen flex-col overflow-hidden bg-background"
    >
      {/* Base grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] transition-[background-position] duration-700 ease-out motion-reduce:transition-none"
        style={gridLines('var(--color-text-primary)')}
      />
      {/* Accent spotlight: lights up the grid lines around the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-[opacity,background-position] duration-700 ease-out motion-reduce:transition-none"
        style={{
          ...gridLines('var(--color-accent)'),
          opacity: 'calc(var(--spot, 0) * 0.6)',
          maskImage: spotlightMask,
          WebkitMaskImage: spotlightMask,
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
