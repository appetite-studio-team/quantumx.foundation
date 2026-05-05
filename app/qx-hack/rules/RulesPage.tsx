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
  purpleButton,
} from '../_shared';

/* ------------------------------------------------------------ */
/*  Section renderers - one per content type                     */
/* ------------------------------------------------------------ */

function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-violet-400/70">
        {number}
      </span>
      <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-text-primary md:text-xl">
        {title}
      </h2>
    </div>
  );
}

function Footnote({ text }: { text: string }) {
  return (
    <p className="mt-4 border-l-2 border-violet-500/30 pl-4 text-[13px] leading-relaxed text-white/50 md:text-sm">
      {text}
    </p>
  );
}

function IntroText({ text }: { text: string }) {
  return (
    <p className="mb-3 text-sm text-gray-secondary md:text-[15px]">
      {text}
    </p>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-secondary md:text-[15px]">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ListSection({ section }: { section: Extract<SectionShape, { type: 'list' }> }) {
  return (
    <>
      {'intro' in section && section.intro && <IntroText text={section.intro} />}
      <BulletList items={section.items} />
      {'footnote' in section && section.footnote && <Footnote text={section.footnote} />}
    </>
  );
}

function KeyValueSection({ section }: { section: Extract<SectionShape, { type: 'keyvalue' }> }) {
  return (
    <>
      <div className="space-y-2">
        {section.items.map((kv) => (
          <div
            key={kv.key}
            className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
          >
            <span className="text-sm font-medium text-white/70 md:text-[15px]">
              {kv.key}
            </span>
            <span className="text-sm text-gray-secondary md:text-[15px]">{kv.value}</span>
          </div>
        ))}
      </div>
      {'footnote' in section && section.footnote && <Footnote text={section.footnote} />}
    </>
  );
}

function CheckpointsSection({
  section,
}: {
  section: Extract<SectionShape, { type: 'checkpoints' }>;
}) {
  return (
    <>
      {'intro' in section && section.intro && <IntroText text={section.intro} />}
      <div className="grid gap-3 sm:grid-cols-2">
        {section.items.map((cp) => (
          <div
            key={cp.label}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
          >
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              {cp.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-secondary">
              {cp.description}
            </p>
          </div>
        ))}
      </div>
      {'footnote' in section && section.footnote && <Footnote text={section.footnote} />}
    </>
  );
}

function MixedSection({ section }: { section: Extract<SectionShape, { type: 'mixed' }> }) {
  return (
    <div className="space-y-5">
      {section.blocks.map((block) => (
        <div key={block.label}>
          <p className="mb-2 text-sm font-medium text-white/70 md:text-[15px]">
            {block.label}
          </p>
          <BulletList items={block.items} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ */
/*  Discriminated union helper                                   */
/* ------------------------------------------------------------ */

type SectionShape = (typeof qxHack.rules.sections)[number];

function RuleCard({ section, index }: { section: SectionShape; index: number }) {
  return (
    <motion.section
      id={`rule-${section.number}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ ...defaultTransition, delay: index * 0.03 }}
      className={`${glassCard} space-y-4 p-6 md:p-8`}
    >
      <SectionHeader number={section.number} title={section.title} />

      {section.type === 'list' && <ListSection section={section as any} />}
      {section.type === 'keyvalue' && <KeyValueSection section={section as any} />}
      {section.type === 'checkpoints' && <CheckpointsSection section={section as any} />}
      {section.type === 'mixed' && <MixedSection section={section as any} />}
    </motion.section>
  );
}

/* ------------------------------------------------------------ */
/*  Quick-nav sidebar links                                      */
/* ------------------------------------------------------------ */

function QuickNav() {
  return (
    <nav className="hidden lg:block" aria-label="Rules quick navigation">
      <div className="sticky top-36">
        <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
          On this page
        </p>
        <ul className="mt-4 space-y-2">
          {qxHack.rules.sections.map((s) => (
            <li key={s.number}>
              <a
                href={`#rule-${s.number}`}
                className="flex items-baseline gap-2 text-[13px] text-white/40 transition-colors hover:text-text-primary"
              >
                <span className="font-heading text-[10px] text-violet-400/50">{s.number}</span>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------ */
/*  Main page                                                    */
/* ------------------------------------------------------------ */

export function RulesPage() {
  const { rules, applyUrl } = qxHack;

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
            {rules.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base text-gray-secondary md:text-lg"
          >
            {rules.subheading}
          </motion.p>
        </div>
      </section>

      {/* Rules grid + sidebar nav */}
      <section className="relative px-6 pb-section md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr,200px]">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
              hidden: {},
            }}
          >
            {rules.sections.map((section, i) => (
              <RuleCard key={section.number} section={section} index={i} />
            ))}
          </motion.div>

          <QuickNav />
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
                Agreed? Let&rsquo;s build.
              </h2>
              <p className="mt-3 text-sm text-gray-secondary md:text-base">
                By registering, you confirm you&rsquo;ve read and accept the rules above.
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
              href="/qx-hack/problem-statements"
              className="text-sm uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:text-text-primary"
            >
              See problem statements →
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
