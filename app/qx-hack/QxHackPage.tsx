'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { qxHack } from '@/content/qx-hack';
import {
  ArrowRight,
  ChevronDown,
  ghostButton,
  glassCard,
  glassCardHover,
  purpleButton,
  statIcons,
  type StatIconKey,
} from './_shared';

function FoldableBlock({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-5 backdrop-blur-sm md:px-8 md:py-6">
      <summary className="cursor-pointer list-none select-none rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] [&::-webkit-details-marker]:hidden">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 max-w-2xl">
            <h2 className="font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary">
              {title}
            </h2>
            <p className="mt-4 text-base text-gray-secondary md:text-lg">{subtitle}</p>
          </div>
          <span
            className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] text-white/55 transition-colors group-open:border-white/20 group-open:bg-white/[0.06] group-open:text-white/90"
            aria-hidden
          >
            <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
          </span>
        </div>
      </summary>
      <div className="mt-8 md:mt-10">{children}</div>
    </details>
  );
}

const HIGHLIGHTS = [
  {
    icon: '🆓',
    title: 'Free entry',
    description: 'No participation fee. Food and workspace provided on-site.',
  },
  {
    icon: '🧩',
    title: '19 problem statements',
    description: 'Across beginner, intermediate, and advanced tiers - aligned with UN SDGs.',
  },
  {
    icon: '🎯',
    title: '4 tracks',
    description: 'Sustainability & Climate, Healthcare, Security & Privacy, Social Impact.',
  },
  {
    icon: '🛠',
    title: 'Tools',
    description: 'Qiskit, PennyLane, Cirq, PyTorch, TensorFlow Quantum - all welcome.',
  },
  {
    icon: '👨‍🏫',
    title: 'Mentorship',
    description: 'On-site mentors with 2 mandatory checkpoints to validate progress.',
  },
  {
    icon: '🏆',
    title: 'Final round',
    description: 'Top 4 teams shortlisted. 1 winning team declared after advanced Q&A.',
  },
  {
    icon: '🎒',
    title: 'What to bring',
    description: 'Laptop, charger, and your team. Hardware, simulators, models — all welcome.',
  },
] as const;

function QxHackFoldablesSection() {
  return (
    <section className="relative px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl space-y-2 md:space-y-3">
        <FoldableBlock
          title="What to expect"
          subtitle="Everything the poster doesn&rsquo;t tell you."
        >
          <motion.div
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {HIGHLIGHTS.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={defaultTransition}
                className={`${glassCard} p-6`}
              >
                <span className="text-2xl" aria-hidden>{item.icon}</span>
                <h3 className="mt-3 font-heading text-base font-semibold uppercase tracking-tight text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-secondary">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </FoldableBlock>

        <FoldableBlock
          title="Before the day"
          subtitle="Read the problem tracks and rules. Both live as their own pages so you can share or bookmark them directly."
        >
          <motion.div
            className="grid gap-4 md:grid-cols-2 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {qxHack.navCards.map((card) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={defaultTransition}
              >
                <Link
                  href={card.href}
                  className={`${glassCard} ${glassCardHover} group flex h-full flex-col gap-5 p-7 md:p-9`}
                >
                  <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                    {card.eyebrow}
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-violet-300 md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-secondary md:text-base">
                    {card.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-violet-300 transition-transform duration-300 group-hover:translate-x-1">
                    {card.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </FoldableBlock>

        <FoldableBlock
          title="FAQ"
          subtitle="Quick answers before you register."
        >
          <motion.div
            className="grid gap-4 md:grid-cols-3 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {qxHack.faq.map((item) => (
              <motion.div
                key={item.q}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={defaultTransition}
                className={`${glassCard} p-6`}
              >
                <h3 className="font-heading text-base font-semibold uppercase tracking-tight text-text-primary">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-secondary">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </FoldableBlock>
      </div>
    </section>
  );
}

function HeroSection() {
  const { applyUrl } = qxHack;

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Purple background fill */}
      <div className="pointer-events-none absolute inset-0 bg-[#1a0533]" aria-hidden />

      {/* Layered purple/violet radial glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 60% at 50% 30%, rgba(124, 58, 237, 0.40), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 50% at 80% 20%, rgba(168, 85, 247, 0.20), transparent 60%)',
          }}
        />
      </div>

      {/* Faint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center px-5 pt-20 pb-10 md:px-10 md:pt-28 md:pb-16">
        {/* Poster image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...defaultTransition, delay: 0.06 }}
          className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-[0_20px_80px_rgba(124,58,237,0.35)] md:max-w-lg"
        >
          <Image
            src="/images/qx-hack/qx-hack-poster.png"
            alt="Quantum for Social Good Hackathon - May 23, Startup Park Bengaluru"
            width={800}
            height={800}
            priority
            className="h-auto w-full"
          />
        </motion.div>

        {/* CTAs below poster */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={applyUrl}
            target={applyUrl.startsWith('http') ? '_blank' : undefined}
            rel={applyUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1a0533] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            data-magnetic
          >
            Register now
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link href="/qx-hack/rules" className={ghostButton}>
            Read rules
          </Link>
        </motion.div>

        {/* Brief description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...defaultTransition, delay: 0.3 }}
          className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-white/50 md:text-base"
        >
          A 10-hour, offline hackathon by QuantumX &times; iQue Startup Park.
          Build a functional quantum MVP with real social impact.
        </motion.p>
      </div>

      {/* Partnership logos - pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...defaultTransition, delay: 0.7 }}
        className="relative z-10 flex flex-col items-center px-6 pb-10 text-center md:px-10 md:pb-14"
      >
        <p className="font-heading text-[10px] font-medium uppercase tracking-[0.35em] text-white/40 md:text-xs">
          A partnership between
        </p>

        <div className="mt-5 flex items-center gap-6 md:mt-6 md:gap-10">
          <div className="relative h-8 w-auto md:h-10">
            <Image
              src="/images/qx-hack/quantumx-logo.png"
              alt="QuantumX Foundation"
              width={160}
              height={48}
              className="h-full w-auto object-contain brightness-0 invert"
            />
          </div>

          <span className="text-xl text-white/20 md:text-2xl">×</span>

          <div className="relative h-8 w-auto md:h-10">
            <Image
              src="/images/qx-hack/startup-park.png"
              alt="iQue Startup Park Bengaluru"
              width={200}
              height={48}
              className="h-full w-auto object-contain brightness-0 invert"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative bg-black px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {qxHack.stats.map((stat) => {
            const Icon = statIcons[stat.icon as StatIconKey];
            const isVenue = stat.icon === 'pin';
            const cardClass =
              'block h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl md:p-6';

            const cardInner = (
              <>
                <div className="flex items-center gap-2 text-white/50">
                  <Icon className="h-4 w-4 text-violet-300" />
                  <p className="font-heading text-[10px] font-medium uppercase tracking-[0.25em]">
                    {stat.label}
                  </p>
                </div>
                <p className="mt-3 font-heading text-base font-semibold uppercase tracking-tight text-white md:text-lg">
                  {stat.value}
                </p>
                {isVenue ? (
                  <p className="mt-2 inline-flex items-center gap-1 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-violet-300">
                    Open in maps
                    <ArrowRight className="h-3 w-3" />
                  </p>
                ) : null}
              </>
            );

            return (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={defaultTransition}
              >
                {isVenue ? (
                  <a
                    href={qxHack.venueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]`}
                  >
                    {cardInner}
                  </a>
                ) : (
                  <div className={cardClass}>{cardInner}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

const JUDGES = [
  {
    image: '/images/qx-hack/judges/4.png',
    name: 'Dr. Manjunath Konthe',
    role: 'HOD & Dean — Academics',
    org: 'HKBK College of Engineering',
  },
  {
    image: '/images/qx-hack/judges/3.png',
    name: 'Dr. Tabassum Ara',
    role: 'HOD & Dean — IIC',
    org: 'HKBK College of Engineering',
  },
  {
    image: '/images/qx-hack/judges/2.png',
    name: 'Akash Deb',
    role: 'Founder & CEO',
    org: 'ElatoAI',
  },
  {
    image: '/images/qx-hack/judges/1.png',
    name: 'Shaik Aleem Ur Rehaman',
    role: 'Principal Design Engineer',
    org: 'Microsoft',
  },
] as const;

function JudgesSection() {
  return (
    <section className="relative px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className="max-w-2xl"
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80">
            Judging panel
          </span>
          <h2 className="mt-4 font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary">
            Who you&rsquo;ll pitch to
          </h2>
          <p className="mt-4 text-base text-gray-secondary md:text-lg">
            Industry leaders and academics evaluating your build for impact, feasibility, and quantum craft.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:grid-cols-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {JUDGES.map((judge) => (
            <motion.div
              key={judge.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
              className={`${glassCard} group overflow-hidden`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-violet-500/10 to-white/[0.02]">
                <Image
                  src={judge.image}
                  alt={judge.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-heading text-base font-semibold uppercase tracking-tight text-text-primary md:text-lg">
                  {judge.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-violet-300/90">
                  {judge.role}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-secondary">
                  {judge.org}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OrganizersSection() {
  return (
    <section className="relative px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className={`${glassCard} relative overflow-hidden px-6 py-12 md:px-16 md:py-16`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
              maskImage:
                'radial-gradient(60% 60% at 50% 50%, black, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(60% 60% at 50% 50%, black, transparent 80%)',
              opacity: 0.04,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                'radial-gradient(60% 80% at 50% 40%, rgba(124, 58, 237, 0.18), transparent 70%)',
            }}
          />

          <div className="relative flex flex-col items-center text-center">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80">
              Organized by
            </span>
        

            <div className="mt-10 flex items-center gap-8 md:mt-12 md:gap-14">
              <a
                href="https://quantumx.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-10 w-auto transition-opacity duration-300 hover:opacity-80 md:h-14"
              >
                <Image
                  src="/images/qx-hack/quantumx-logo.png"
                  alt="QuantumX Foundation"
                  width={220}
                  height={64}
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </a>

              <span className="font-heading text-2xl text-white/25 md:text-3xl">×</span>

              <a
                href="https://www.thestartuppark.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-10 w-auto transition-opacity duration-300 hover:opacity-80 md:h-14"
              >
                <Image
                  src="/images/qx-hack/startup-park.png"
                  alt="iQue Startup Park Bengaluru"
                  width={280}
                  height={64}
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const { applyUrl } = qxHack;

  return (
    <section className="relative px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
          className={`${glassCard} relative overflow-hidden p-10 md:p-16`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            aria-hidden
            style={{
              background:
                'radial-gradient(60% 80% at 80% 20%, rgba(168, 85, 247, 0.22), transparent 70%), radial-gradient(60% 80% at 20% 80%, rgba(99, 102, 241, 0.18), transparent 70%)',
            }}
          />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary">
                Ready to build?
              </h2>
              <p className="mt-4 text-base text-gray-secondary md:text-lg">
                Spots are limited. Register now and we&rsquo;ll send you everything you
                need before the day.
              </p>
            </div>
            <a
              href={applyUrl}
              target={applyUrl.startsWith('http') ? '_blank' : undefined}
              rel={applyUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`${purpleButton} px-7 py-3.5`}
              data-magnetic
            >
              Register now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:text-text-primary"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export function QxHackPage() {
  return (
    <main className="relative">
      <HeroSection />
      <StatsSection />
      <QxHackFoldablesSection />
      <JudgesSection />
      <OrganizersSection />
      <FinalCtaSection />
    </main>
  );
}
