'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';

const ITEMS = [
  '01 Experience Strategy & Design',
  '02 3D Visualisation',
  '03 Rapid Concept Prototyping',
  '04 Motion & Production',
  '05 Website & App Experience',
];

export function CapabilitiesSection() {
  return (
    <section className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr,1.5fr] md:gap-16">
        {/* Left: small image */}
        <motion.div
          className="relative aspect-square max-w-sm overflow-hidden rounded-sm bg-gray-secondary/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </motion.div>

        {/* Right: vertical list */}
        <div className="flex flex-col">
          <motion.ul
            className="divide-y divide-gray-secondary/20"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {ITEMS.map((label, i) => (
              <motion.li
                key={label}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={defaultTransition}
              >
                <a
                  href="#"
                  className="group flex items-center py-5 text-lg font-medium text-text-primary transition-colors hover:text-accent md:py-6 md:text-xl"
                  data-cursor="link"
                  data-magnetic
                >
                  <span className="block border-b border-transparent transition-colors group-hover:border-accent/50">
                    {label}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-12 md:mt-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ ...defaultTransition, delay: 0.3 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent hover:underline"
              data-magnetic
            >
              START A PROJECT →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
