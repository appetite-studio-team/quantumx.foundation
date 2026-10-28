'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { associates, associatesIntro } from '@/content/associates';

export function AssociatesSection() {
  return (
    <section
      id="associates"
      aria-labelledby="associates-title"
      className="bg-background py-section px-6 text-text-primary md:px-10"
    >
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={defaultTransition}
      >
        <h2 id="associates-title" className="text-xs uppercase tracking-[0.2em] text-gray-secondary">
          {associatesIntro.label}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-text-primary/85">{associatesIntro.body}</p>
      </motion.div>
      <motion.ul
        className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:mt-20 lg:gap-y-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={defaultTransition}
      >
        {associates.map((associate) => (
          <li key={associate.name} className="flex items-center justify-center">
            <div
              className={`relative w-full max-w-[9.5rem] opacity-60 transition-opacity duration-300 hover:opacity-100 ${
                associate.tall ? 'h-14 sm:h-[4.5rem]' : 'h-10 sm:h-12'
              }`}
            >
              {/* Logos are white-on-transparent; invert them on the light theme. */}
              <Image
                src={associate.logo}
                alt={associate.name}
                fill
                sizes="160px"
                className="associate-logo object-contain"
              />
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
