'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';

// Each image is mapped to a named grid area (a–l). On large screens the areas
// tessellate into a gapless, uneven mosaic; on small screens they collapse to a
// clean 2-column square grid. See `.event-mosaic` in globals.css.
const tiles = [
  { src: '/images/moments/image-1.png', area: 'ev-a' },
  { src: '/images/moments/image-2.png', area: 'ev-b' },
  { src: '/images/moments/image-3.png', area: 'ev-c' },
  { src: '/images/moments/image-4.png', area: 'ev-d' },
  { src: '/images/moments/image-5.png', area: 'ev-e' },
  { src: '/images/moments/image-6.png', area: 'ev-f' },
  { src: '/images/moments/image-7.png', area: 'ev-g' },
  { src: '/images/moments/image-8.png', area: 'ev-h' },
  { src: '/images/moments/image-9.png', area: 'ev-i' },
  { src: '/images/moments/image-10.png', area: 'ev-j' },
  { src: '/images/moments/image-11.png', area: 'ev-k' },
  { src: '/images/moments/image-12.png', area: 'ev-l' },
];

export function MomentsGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={defaultTransition}
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-secondary md:text-[11px]">
          A look back
        </p>
        <h2 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
          Moments from
          <br />
          <span className="text-gray-secondary">past events</span>
        </h2>
      </motion.div>

      <motion.div
        className="event-mosaic mt-12 gap-2 md:mt-16 md:gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={{
          visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          hidden: {},
        }}
      >
        {tiles.map(({ src, area }, i) => (
          <motion.div
            key={src}
            className={`${area} group relative overflow-hidden bg-white/5`}
            variants={{
              hidden: { opacity: 0, scale: 0.98 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={defaultTransition}
          >
            <Image
              src={src}
              alt={`Past event photo ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover grayscale contrast-[1.1] brightness-[0.92] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:brightness-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
