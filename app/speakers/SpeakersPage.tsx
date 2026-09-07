'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { speakersContent, speakers } from '@/content/speakers';
import { SpeakerCard } from '@/components/speakers/SpeakerCard';

export function SpeakersPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-block text-center md:pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
        >
          <h1 className="font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {speakersContent.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-secondary md:text-xl">
            {speakersContent.subheading}
          </p>
        </motion.div>
      </section>

      {/* Speaker grid */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </motion.div>
      </section>

      {/* Speak with us */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          className="rounded-lg border border-gray-secondary/20 bg-gray-secondary/5 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Want to speak?
          </span>
          <h2 className="mt-3 max-w-3xl font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl">
            Share your work with the QuantumX community
          </h2>
          <p className="mt-3 max-w-2xl text-base text-gray-secondary md:text-lg">
            We host talks, workshops, and hands-on sessions across quantum
            computing, photonics, and post-quantum security. If you are building
            or researching in the space, we would like to hear from you.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-background transition-transform hover:translate-x-1 md:mt-10"
            data-magnetic
          >
            Get in touch →
          </Link>
        </motion.div>
      </section>

      {/* Back to home */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
        >
          ← Back to home
        </Link>
      </section>
    </main>
  );
}
