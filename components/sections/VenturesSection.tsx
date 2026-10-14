'use client';

import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { ventures } from '@/content/home';

export function VenturesSection() {
  return (
    <section id="ventures" className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.25fr,1fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">{ventures.eyebrow}</p>
          <h2 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {ventures.heading}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-secondary md:mt-12 md:text-xl">
            {ventures.paragraph}
          </p>
          <a
            href={ventures.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center border border-gray-secondary/25 bg-gray-secondary/5 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
            data-magnetic
          >
            {ventures.ctaText}
          </a>
        </motion.div>

        <motion.ul
          className="self-end divide-y divide-gray-secondary/20 border-t border-gray-secondary/20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {ventures.focusAreas.map((area, index) => (
            <motion.li
              key={area}
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={defaultTransition}
              className="flex items-baseline gap-4 py-5"
            >
              <span className="font-heading text-sm font-semibold tabular-nums text-gray-secondary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xl font-medium text-text-primary md:text-2xl">{area}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
