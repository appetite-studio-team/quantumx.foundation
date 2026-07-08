'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { projectsContent } from '@/content/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function ProjectsPage() {
  const { heading, subheading, projects } = projectsContent;

  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-section md:pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
        >
          <h1 className="font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            {subheading}
          </p>
        </motion.div>
      </section>

      {/* Quantum lab render */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className="group relative overflow-hidden rounded-sm border border-gray-secondary/15"
        >
          <div className="relative aspect-[16/9] w-full bg-white">
            <Image
              src="/images/quantum-lab.png"
              alt="QuantumX quantum computing laboratory - control rack, dilution refrigerator, and readout console"
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1152px"
              priority
            />
          </div>
          <figcaption className="flex items-center gap-2 border-t border-gray-secondary/15 bg-background px-5 py-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gray-secondary">
              Inside the QuantumX Technology stack
            </span>
          </figcaption>
        </motion.figure>
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
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
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
