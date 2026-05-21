'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { qxHack } from '@/content/qx-hack';
import {
  ArrowLeft,
  ArrowRight,
  PurpleAtmosphere,
  glassCard,
  glassCardHover,
  purpleButton,
} from '../_shared';

type Problem = (typeof qxHack.problems.items)[number];

function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className={`${glassCard} ${glassCardHover} group flex flex-col gap-5 p-6 md:p-7`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          {problem.number}
        </span>
        <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-violet-200">
          {problem.sdg}
        </span>
      </div>

      <h2 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-violet-300 md:text-xl">
        {problem.title}
      </h2>

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
        <dt className="font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
          Domain
        </dt>
        <dd className="text-gray-secondary">{problem.domain}</dd>
        <dt className="font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
          SDG
        </dt>
        <dd className="text-gray-secondary">{problem.sdg}</dd>
      </dl>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
        <p className="mb-2 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
          Problem statement
        </p>
        <p className="text-sm leading-relaxed text-white/80">{problem.statement}</p>
      </div>
    </motion.article>
  );
}

export function ProblemStatementsPage() {
  const { problems, applyUrl } = qxHack;

  return (
    <main className="relative">
      {/* Header */}
      <section className="relative overflow-hidden px-6 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16">
        <PurpleAtmosphere />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            <Link
              href="/qx-hack"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-secondary transition-colors hover:text-text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              QX Hackathon
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.05 }}
            className="mt-6 font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {problems.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="mt-4 font-heading text-sm uppercase tracking-[0.3em] text-violet-300"
          >
            Theme: {problems.theme}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base text-gray-secondary md:text-lg"
          >
            {problems.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {problems.approaches.map((approach) => (
              <span
                key={approach}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
              >
                {approach}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem grid */}
      <section className="relative px-6 pb-section md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid gap-4 md:grid-cols-2 md:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
              hidden: {},
            }}
          >
            {problems.items.map((problem) => (
              <ProblemCard key={problem.number} problem={problem} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative px-6 pb-section md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={defaultTransition}
            className={`${glassCard} flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10`}
          >
            <div className="max-w-xl">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-text-primary md:text-3xl">
                Got a track in mind?
              </h2>
              <p className="mt-3 text-sm text-gray-secondary md:text-base">
                Lock your spot and we&rsquo;ll send you mentor intros and starter
                resources before the day.
              </p>
            </div>
            <a
              href={applyUrl}
              target={applyUrl.startsWith('http') ? '_blank' : undefined}
              rel={applyUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={purpleButton}
              data-magnetic
            >
              Register now
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/qx-hack/rules"
              className="text-sm uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:text-text-primary"
            >
              Read the rules →
            </Link>
            <Link
              href="/qx-hack"
              className="text-sm uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:text-text-primary"
            >
              ← Back to QX Hackathon
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
