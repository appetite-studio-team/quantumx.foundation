'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { capabilities } from '@/content/home';

function isExternal(href: string) {
  return href.startsWith('http');
}

export function CapabilitiesSection() {
  // First branch open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="capabilities" className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr,1.5fr] md:gap-16">
        {/* Left: image */}
        <motion.div
          className="relative aspect-square max-w-md overflow-hidden rounded-sm bg-gray-secondary/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          {/* Dark theme render */}
          <Image
            src={capabilities.leftImageSrc}
            alt={capabilities.leftImageAlt}
            fill
            className="theme-dark-only object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
          />
          {/* Light theme render */}
          <Image
            src={capabilities.leftImageSrcLight}
            alt={capabilities.leftImageAlt}
            fill
            className="theme-light-only object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </motion.div>

        {/* Right: foldable branches */}
        <div className="flex flex-col">
          <motion.ul
            className="divide-y divide-gray-secondary/20 border-t border-gray-secondary/20"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {capabilities.branches.map((branch, index) => {
              const isOpen = openIndex === index;
              const panelId = `branch-panel-${branch.number}`;
              return (
                <motion.li
                  key={branch.number}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={defaultTransition}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-start gap-4 py-6 text-left md:py-7"
                    data-magnetic
                  >
                    <span className="mt-1 font-heading text-sm font-semibold tabular-nums text-gray-secondary md:text-base">
                      {branch.number}
                    </span>
                    <span className="flex-1">
                      <span className="block text-xl font-medium text-text-primary transition-colors group-hover:text-accent md:text-2xl">
                        {branch.title}
                      </span>
                      <span className="mt-1 block max-w-md text-sm leading-relaxed text-gray-secondary md:text-base">
                        {branch.description}
                      </span>
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={defaultTransition}
                      className="mt-1 text-2xl font-light leading-none text-gray-secondary transition-colors group-hover:text-accent"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="flex flex-col gap-px pb-6 pl-10 md:pl-12">
                          {branch.products.map((product) => (
                            <li key={product.label}>
                              <a
                                href={product.href}
                                target={isExternal(product.href) ? '_blank' : undefined}
                                rel={isExternal(product.href) ? 'noopener noreferrer' : undefined}
                                className="group/link flex items-center gap-2 py-2 text-base text-gray-secondary transition-colors hover:text-accent md:text-lg"
                                data-magnetic
                              >
                                <span className="text-gray-secondary/60 transition-transform group-hover/link:translate-x-1 group-hover/link:text-accent">
                                  →
                                </span>
                                {product.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ ...defaultTransition, delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent hover:underline"
              data-magnetic
            >
              View all projects →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
