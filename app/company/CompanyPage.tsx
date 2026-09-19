'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { company } from '@/content/company';
import { site } from '@/content/site';
import { LinkedInIcon } from '@/components/icons';

export function CompanyPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-section md:pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">{company.eyebrow}</p>
          <h1 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {company.heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">{company.intro}</p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className="grid gap-8 border-t border-gray-secondary/20 pt-10 md:grid-cols-[0.3fr,0.7fr] md:gap-12"
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-secondary">
            {company.mission.heading}
          </h2>
          <div className="space-y-6">
            {company.mission.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-base leading-relaxed text-gray-secondary md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founders & leadership */}
      <section
        aria-labelledby="leadership-heading"
        className="mx-auto max-w-7xl px-6 pb-section md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <h2
            id="leadership-heading"
            className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-4xl"
          >
            {company.leadership.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-secondary md:text-lg">
            {company.leadership.intro}
          </p>
        </motion.div>

        <motion.ul
          className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {company.leadership.members.map((founder) => (
            <motion.li
              key={founder.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
            >
              <article className="flex h-full flex-col border border-gray-secondary/20">
                {founder.slug ? (
                  <Link
                    href={`/founder/${founder.slug}`}
                    className="group relative block aspect-[4/3] w-full overflow-hidden bg-gray-secondary/10"
                    aria-label={`${founder.name}, ${founder.role}`}
                  >
                    <Image
                      src={founder.photo}
                      alt={founder.photoAlt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>
                ) : (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-secondary/10">
                    <Image
                      src={founder.photo}
                      alt={founder.photoAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">
                    {founder.eyebrow}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl">
                    {founder.slug ? (
                      <Link href={`/founder/${founder.slug}`} className="hover:text-accent">
                        {founder.name}
                      </Link>
                    ) : (
                      founder.name
                    )}
                  </h3>
                  <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    {founder.role}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                    {founder.slug ? (
                      <Link
                        href={`/founder/${founder.slug}`}
                        className="inline-flex items-center border border-accent/50 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-text-primary transition-colors hover:border-accent hover:text-accent"
                      >
                        Read profile →
                      </Link>
                    ) : null}
                    {founder.linkedin ? (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on LinkedIn`}
                        className="inline-flex items-center gap-2 border border-gray-secondary/30 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        <LinkedInIcon className="h-4 w-4 shrink-0" />
                        LinkedIn
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* What we do */}
      <section aria-labelledby="pillars-heading" className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <h2
          id="pillars-heading"
          className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-4xl"
        >
          What we do
        </h2>
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {company.pillars.map(({ number, title, description, href }) => {
            const external = href.startsWith('http');
            return (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={defaultTransition}
                className="flex flex-col border border-gray-secondary/20 p-6 md:p-8"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gray-secondary">{number}</span>
                <h3 className="mt-3 font-heading text-xl font-semibold uppercase tracking-tight-heading text-text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-secondary">{description}</p>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="mt-auto pt-6 text-xs uppercase tracking-[0.2em] text-text-primary hover:text-accent"
                >
                  Explore {title} →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Milestone */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className="grid gap-8 border-t border-gray-secondary/20 pt-10 md:grid-cols-[0.3fr,0.7fr] md:gap-12"
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-secondary">
            {company.milestone.heading}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-gray-secondary md:text-lg">
            {company.milestone.paragraph}
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className="border border-gray-secondary/20 p-8 md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Get in touch</p>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-4xl">
            Build the quantum future with us
          </h2>
          {site.address ? (
            <address className="mt-4 max-w-2xl text-base not-italic text-gray-secondary md:text-lg">
              {site.address}
            </address>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center border border-accent/50 px-6 py-3 text-sm uppercase tracking-[0.2em] text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              {site.email} →
            </a>
            <Link
              href="/careers"
              className="inline-flex items-center border border-gray-secondary/30 px-6 py-3 text-sm uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:border-accent/60 hover:text-accent"
            >
              Open roles
            </Link>
          </div>
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
