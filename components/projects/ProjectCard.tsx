'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultTransition } from '@/lib/motion-variants';
import type { Project } from '@/content/projects';

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const external = project.href.startsWith('http');
  const comingSoon = Boolean(project.status);

  const CtaLabel = (
    <>
      {comingSoon ? project.status : 'Visit'}
      {!comingSoon && <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className="group relative flex flex-col rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(215,255,0,0.06)] md:p-8"
    >
      {/* Number + status */}
      <div className="flex items-center justify-between">
        <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gray-secondary">
          {project.number}
        </span>
        {comingSoon && (
          <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-secondary">
            {project.status}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent md:text-2xl">
        {project.name}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-gray-secondary md:text-base">
        {project.description}
      </p>

      {/* CTA */}
      <div className="mt-auto pt-8">
        {comingSoon ? (
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-gray-secondary/70 transition-colors hover:text-accent"
            data-magnetic
          >
            {CtaLabel}
          </Link>
        ) : external ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent transition-colors"
            data-magnetic
          >
            {CtaLabel}
          </a>
        ) : (
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent transition-colors"
            data-magnetic
          >
            {CtaLabel}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
