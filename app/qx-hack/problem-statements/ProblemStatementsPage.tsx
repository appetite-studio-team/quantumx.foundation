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

const tierColors = {
  emerald: {
    badge: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    accent: 'text-emerald-400',
    dot: 'bg-emerald-400',
    glow: 'from-emerald-500/20',
  },
  amber: {
    badge: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
    accent: 'text-amber-400',
    dot: 'bg-amber-400',
    glow: 'from-amber-500/20',
  },
  red: {
    badge: 'border-red-400/30 bg-red-400/10 text-red-300',
    accent: 'text-red-400',
    dot: 'bg-red-400',
    glow: 'from-red-500/20',
  },
} as const;

type Problem = (typeof qxHack.problems.tiers)[number]['problems'][number];
type TierColor = keyof typeof tierColors;

function ProblemCard({
  problem,
  color,
}: {
  problem: Problem;
  color: TierColor;
}) {
  const colors = tierColors[color];
  const p = problem as Problem & {
    sdg?: string;
    challenge?: string;
    mvp?: readonly string[];
  };

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className={`${glassCard} ${glassCardHover} group flex flex-col gap-4 p-6 md:p-7`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-3">
        <span className={`font-heading text-sm font-semibold uppercase tracking-[0.2em] ${colors.accent}`}>
          {p.number}
        </span>
        {p.sdg && (
          <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${colors.badge}`}>
            {p.sdg}
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-violet-300 md:text-xl">
        {p.title}
      </h2>

      {/* Summary */}
      <p className="text-sm leading-relaxed text-gray-secondary md:text-[15px]">
        {p.summary}
      </p>

      {/* Challenge (if present) */}
      {p.challenge && (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <p className="mb-2 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            Your challenge
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            {p.challenge}
          </p>
        </div>
      )}

      {/* MVP (if present) */}
      {p.mvp && p.mvp.length > 0 && (
        <div>
          <p className="mb-2 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            Expected MVP
          </p>
          <ul className="space-y-1.5">
            {p.mvp.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-gray-secondary">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot} opacity-60`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.article>
  );
}

function TierSection({
  tier,
}: {
  tier: (typeof qxHack.problems.tiers)[number];
}) {
  const colors = tierColors[tier.color];

  return (
    <section className="relative">
      {/* Tier header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={defaultTransition}
        className="mb-8 flex flex-col gap-3 md:mb-10"
      >
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${colors.dot}`} />
          <h2 className={`font-heading text-2xl font-bold uppercase tracking-tight md:text-3xl ${colors.accent}`}>
            {tier.label}
          </h2>
          <span className="font-heading text-sm text-white/30">
            {tier.problems.length} problems
          </span>
        </div>
        <p className="max-w-xl text-sm text-gray-secondary md:text-base">
          {tier.description}
        </p>
      </motion.div>

      {/* Problem cards */}
      <motion.div
        className="grid gap-4 md:grid-cols-2 md:gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={{
          visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
          hidden: {},
        }}
      >
        {tier.problems.map((problem) => (
          <ProblemCard
            key={problem.number}
            problem={problem}
            color={tier.color}
          />
        ))}
      </motion.div>
    </section>
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
            transition={{ ...defaultTransition, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base text-gray-secondary md:text-lg"
          >
            {problems.subheading}
          </motion.p>

          {/* Quick tier legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {problems.tiers.map((tier) => {
              const c = tierColors[tier.color];
              return (
                <a
                  key={tier.level}
                  href={`#${tier.level}`}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                  {tier.label}
                  <span className="text-white/30">({tier.problems.length})</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section className="relative space-y-20 px-6 pb-section md:space-y-24 md:px-10">
        <div className="mx-auto max-w-6xl space-y-20 md:space-y-24">
          {problems.tiers.map((tier) => (
            <div key={tier.level} id={tier.level}>
              <TierSection tier={tier} />
            </div>
          ))}
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
