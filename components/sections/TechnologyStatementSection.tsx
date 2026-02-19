'use client';

import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';

const PHILOSOPHY =
  'We believe technology is not just a tool but a language. It shapes how we communicate, create and experience the world. Our work sits at the intersection of rigorous craft and forward-thinking innovation—where every pixel and every frame serves a larger idea.';

export function TechnologyStatementSection() {
  return (
    <section className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          & TECHNOLOGY
        </motion.h2>
        <motion.p
          className="mt-12 max-w-2xl text-lg leading-relaxed text-gray-secondary md:mt-16 md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ ...defaultTransition, delay: 0.15 }}
        >
          {PHILOSOPHY}
        </motion.p>
      </div>
    </section>
  );
}
