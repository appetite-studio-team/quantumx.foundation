'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { capabilities } from '@/content/home';

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr,1.5fr] md:gap-16">
        {/* Left: image */}
        <motion.div
          className="relative aspect-square max-w-sm overflow-hidden rounded-sm bg-gray-secondary/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <Image
            src={capabilities.leftImageSrc}
            alt={capabilities.leftImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 384px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
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
            {capabilities.items.map((item) => (
              <motion.li
                key={item.number}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={defaultTransition}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center py-5 text-lg font-medium text-text-primary transition-colors hover:text-accent md:py-6 md:text-xl"
                  data-cursor="link"
                  data-magnetic
                >
                  <span className="block border-b border-transparent transition-colors group-hover:border-accent/50">
                    {item.number} {item.label}
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
              href={capabilities.ctaHref}
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent hover:underline"
              data-magnetic
            >
              {capabilities.ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
