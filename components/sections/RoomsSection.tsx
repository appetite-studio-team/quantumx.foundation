'use client';

import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { roomsContent } from '@/content/rooms';

export function RoomsSection() {
  return (
    <section id="rooms" className="bg-background py-section px-6 text-text-primary md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <h2 className="font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {roomsContent.heading}
          </h2>
          <p className="mt-4 text-base text-gray-secondary md:text-lg">
            {roomsContent.subheading}
          </p>
        </motion.div>

        {/* Rooms grid */}
        <motion.ul
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {roomsContent.rooms.map((room) => (
            <motion.li
              key={room.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
              className="relative flex min-h-32 items-center justify-center border border-gray-secondary/15 bg-gray-secondary/5 px-4 pb-6 pt-10 text-center transition-colors duration-300 hover:border-accent/40 md:min-h-40"
            >
              {room.badge && (
                <span className="absolute left-1.5 top-1.5 bg-accent px-2 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-background md:text-xs">
                  {room.badge}
                </span>
              )}
              <span className="text-base leading-snug text-text-primary md:text-lg">
                {room.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
