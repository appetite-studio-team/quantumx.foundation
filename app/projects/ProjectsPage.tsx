'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { projectsContent } from '@/content/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function ProjectsPage() {
  const { heading, subheading, projects } = projectsContent;

  const coreProjects = projects.filter((p) => p.group !== 'opensource');
  const openSourceProjects = projects.filter((p) => p.group === 'opensource');

  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero — text + side image */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-section md:pt-40 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:gap-14">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              QuantumX Technology
            </span>
            <h1 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
              {heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-secondary md:text-xl">
              {subheading}
            </p>
          </motion.div>

          {/* Right: image */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="relative bg-background"
          >
            <div className="relative aspect-[16/9] w-full">
              {/* Dark theme render */}
              <div className="theme-dark-only absolute inset-0">
                <Image
                  src="/images/qc-lab.png"
                  alt="QuantumX quantum computing laboratory - control rack, dilution refrigerator, and readout console"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                />
              </div>
              {/* Light theme render */}
              <div className="theme-light-only absolute inset-0">
                <Image
                  src="/images/qx-lab-white.png"
                  alt="QuantumX quantum computing laboratory - control rack, dilution refrigerator, and readout console"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>
              {/* Edge vignette — blends the render into the page background on both themes */}
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden
                style={{ boxShadow: 'inset 0 0 70px 24px var(--color-background)' }}
              />
            </div>
          </motion.figure>
        </div>
      </section>

      {/* Projects grid */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {coreProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </motion.div>
      </section>

      {/* Open Source division */}
      {openSourceProjects.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={defaultTransition}
            className="mb-8 border-t border-gray-secondary/15 pt-10 md:mb-10"
          >
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Open Source
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase leading-none tracking-tight-heading text-text-primary md:text-3xl">
              Open Source Projects
            </h2>
            <p className="mt-4 max-w-xl text-base text-gray-secondary md:text-lg">
              Open, community-driven tools and data anyone can use, build on, and contribute to.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {openSourceProjects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </motion.div>
        </section>
      )}

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
