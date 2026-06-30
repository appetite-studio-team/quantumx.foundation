'use client';

import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import {
  projectsContent,
  type Project,
  type ProjectIcon,
  type PlatformCategory,
} from '@/content/projects';

/* --- Line icons (minimal, currentColor-based) --- */

function Icon({ children, className = 'h-5 w-5' }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ProductIcon({ name, className }: { name: ProjectIcon; className?: string }) {
  switch (name) {
    case 'education':
      return (
        <Icon className={className}>
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
          <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
        </Icon>
      );
    case 'tooling':
      return (
        <Icon className={className}>
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
          <path d="M3 7l9 5 9-5M12 12v10" />
        </Icon>
      );
    case 'research':
      return (
        <Icon className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </Icon>
      );
    case 'vault':
      return (
        <Icon className={className}>
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </Icon>
      );
    case 'database':
      return (
        <Icon className={className}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </Icon>
      );
    case 'shield':
      return (
        <Icon className={className}>
          <path d="M12 3 5 6v5c0 4.3 3 7.7 7 9 4-1.3 7-4.7 7-9V6l-7-3Z" />
          <path d="M12 8v4M12 15.5v.5" />
        </Icon>
      );
    default:
      return null;
  }
}

function CategoryIcon({ name, className }: { name: PlatformCategory['icon']; className?: string }) {
  switch (name) {
    case 'learn':
      return (
        <Icon className={className}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" />
        </Icon>
      );
    case 'secure':
      return (
        <Icon className={className}>
          <path d="M12 3 4 6v6c0 4.6 3.4 8.4 8 9 4.6-.6 8-4.4 8-9V6l-8-3Z" />
        </Icon>
      );
    default:
      return null;
  }
}

/* --- Cards --- */

function ProductCard({ project }: { project: Project }) {
  const external = project.href.startsWith('http');

  return (
    <motion.a
      href={project.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className="group flex flex-col rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-gray-secondary/[0.08]"
      data-magnetic
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-gray-secondary/20 bg-background text-text-primary transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
          <ProductIcon name={project.icon} className="h-[18px] w-[18px]" />
        </span>
        <span className="font-heading text-base font-semibold leading-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
          {project.name}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-secondary">{project.tagline}</p>
    </motion.a>
  );
}

function CategoryCard({ category }: { category: PlatformCategory }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className="flex items-center gap-3 rounded-sm border border-gray-secondary/15 bg-gray-secondary/[0.03] px-5 py-5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gray-secondary/20 text-text-primary">
        <CategoryIcon name={category.icon} className="h-5 w-5" />
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight text-text-primary">
        {category.label}
      </span>
    </motion.div>
  );
}

/* --- Section --- */

export function PlatformSection() {
  const { platform, projects } = projectsContent;
  const byNumber = new Map(projects.map((p) => [p.number, p]));

  return (
    <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
      {/* Header */}
      <motion.div
        className="grid gap-8 lg:grid-cols-[1.5fr,1fr] lg:items-end"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={defaultTransition}
      >
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gray-secondary">
            {platform.eyebrow}
          </p>
          <h2 className="mt-6 max-w-2xl font-heading text-clamp-section font-bold tracking-tight-heading text-text-primary">
            {platform.heading}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-gray-secondary lg:pb-2">
          {platform.description}
        </p>
      </motion.div>

      {/* Categories + products */}
      <motion.div
        className="mt-12 grid gap-5 lg:grid-cols-2 md:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={{
          visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
          hidden: {},
        }}
      >
        {platform.categories.map((category) => (
          <div key={category.label} className="flex flex-col gap-5">
            <CategoryCard category={category} />
            <div className="grid gap-5 sm:grid-cols-3">
              {category.projectNumbers.map((num) => {
                const project = byNumber.get(num);
                return project ? <ProductCard key={num} project={project} /> : null;
              })}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
