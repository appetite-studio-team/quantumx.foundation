'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import {
  ArrowRight,
  BookIcon,
  btnPrimary,
  btnPrimaryStyle,
  btnSecondary,
  cardBase,
  cardHover,
  ClusterIcon,
  CheckIcon,
  CopyIcon,
  Counter,
  DocIcon,
  eyebrow,
  FilterIcon,
  GithubIcon,
  HashIcon,
  LayersIcon,
  PaperIcon,
  SearchIcon,
  sectionHeading,
  terminalBar,
  terminalCard,
  termToken,
  TrafficLights,
  VectorIcon,
} from './_shared';
import { ArchitectureDiagram } from './ArchitectureDiagram';

/* External destinations — swap to real URLs once published. */
const LINKS = {
  getStarted: 'https://quark.quantumx.technology/',
  docs: 'https://github.com/Quantumx-fn/Quark#readme',
  github: 'https://github.com/quantumx-foundation',
  modelCard: 'https://github.com/Quantumx-fn/Quark/blob/main/HF_MODEL_CARD.md',
  paper: 'https://github.com/Quantumx-fn/Quark/blob/main/paper/quark.tex',
};

/* Reusable scroll-in wrapper matching the site's fade-up rhythm. */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Shared eyebrow + heading + optional subtitle block. */
function SectionHead({
  kicker,
  title,
  subtitle,
  align = 'left',
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal
      className={
        align === 'center'
          ? 'mx-auto max-w-3xl text-center'
          : 'max-w-3xl'
      }
    >
      {kicker && <span className={eyebrow}>{kicker}</span>}
      <h2 className={`${kicker ? 'mt-4' : ''} ${sectionHeading}`}>{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* ============================ HERO ============================ */

const CODE_LINES: { tokens: { t: string; c?: string }[] }[] = [
  { tokens: [{ t: 'from', c: 'kw' }, { t: ' qiskit ' }, { t: 'import', c: 'kw' }, { t: ' QuantumCircuit' }] },
  { tokens: [{ t: 'from', c: 'kw' }, { t: ' quark ' }, { t: 'import', c: 'kw' }, { t: ' CircuitEncoder, embed' }] },
  { tokens: [{ t: '' }] },
  { tokens: [{ t: 'a ' }, { t: '=', c: 'op' }, { t: ' QuantumCircuit', c: 'fn' }, { t: '(' }, { t: '3', c: 'num' }, { t: ')' }] },
  { tokens: [{ t: 'a.', c: '' }, { t: 'h', c: 'fn' }, { t: '(' }, { t: '0', c: 'num' }, { t: ')' }] },
  { tokens: [{ t: 'a.', c: '' }, { t: 'cx', c: 'fn' }, { t: '(' }, { t: '0', c: 'num' }, { t: ',' }, { t: '1', c: 'num' }, { t: ')' }] },
  { tokens: [{ t: '' }] },
  { tokens: [{ t: 'b ' }, { t: '=', c: 'op' }, { t: ' QuantumCircuit', c: 'fn' }, { t: '(' }, { t: '3', c: 'num' }, { t: ')' }] },
  { tokens: [{ t: 'b.', c: '' }, { t: 'h', c: 'fn' }, { t: '(' }, { t: '0', c: 'num' }, { t: ')' }] },
  { tokens: [{ t: 'b.', c: '' }, { t: 'h', c: 'fn' }, { t: '(' }, { t: '0', c: 'num' }, { t: ')' }] },
  { tokens: [{ t: 'b.', c: '' }, { t: 'h', c: 'fn' }, { t: '(' }, { t: '0', c: 'num' }, { t: ')' }] },
  { tokens: [{ t: 'b.', c: '' }, { t: 'cx', c: 'fn' }, { t: '(' }, { t: '0', c: 'num' }, { t: ',' }, { t: '1', c: 'num' }, { t: ')' }] },
  { tokens: [{ t: '' }] },
  { tokens: [{ t: 'ea, eb ' }, { t: '=', c: 'op' }, { t: ' embed', c: 'fn' }, { t: '(model, [a, b])' }] },
  { tokens: [{ t: 'print', c: 'fn' }, { t: '((ea ' }, { t: '*', c: 'op' }, { t: ' eb).' }, { t: 'sum', c: 'fn' }, { t: '())' }] },
  { tokens: [{ t: '# 0.96', c: 'cm' }] },
];

const HERO_METRICS = [
  { value: '647K', label: 'Parameters' },
  { value: '128-D', label: 'Embeddings' },
  { value: 'CPU', label: 'Fast' },
  { value: 'Open', label: 'Source' },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Faint grid — same overlay used on the home hero / 404 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(var(--color-text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Soft accent wash top-right */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        aria-hidden
        style={{
          background:
            'radial-gradient(closest-side, rgba(215,255,0,0.10), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-36 pb-section md:grid-cols-2 md:gap-16 md:px-10 md:pt-44">
        {/* Left: copy */}
        <div>
          <motion.span
            className="inline-flex items-center gap-2 rounded-none border-2 border-[#0a0a0a] bg-accent px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-[#0a0a0a]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />
            QxQuark · Embeddings for Quantum Circuits
          </motion.span>

          <motion.h1
            className="mt-6 font-heading text-clamp-display font-bold uppercase leading-[0.95] tracking-tight-heading text-text-primary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.05 }}
          >
            Embeddings for
            <br />
            Quantum Circuits
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-secondary md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            A lightweight transformer that converts quantum circuits into semantic
            vector representations, enabling search, deduplication, clustering, and
            fast equivalence filtering.
          </motion.p>

          {/* Metrics row */}
          <motion.div
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/15 sm:grid-cols-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.15 }}
          >
            {HERO_METRICS.map((m) => (
              <div key={m.label} className="bg-background px-4 py-5 text-center sm:text-left">
                <p className="font-heading text-xl font-bold uppercase tracking-tight text-text-primary md:text-2xl">
                  {m.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-secondary">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            <a href={LINKS.getStarted} target="_blank" rel="noopener noreferrer" className={btnPrimary} style={btnPrimaryStyle} data-magnetic>
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={LINKS.docs} target="_blank" rel="noopener noreferrer" className={btnSecondary} data-magnetic>
              View Documentation
            </a>
          </motion.div>
        </div>

        {/* Right: code preview card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...defaultTransition, delay: 0.15 }}
        >
          <div
            className="pointer-events-none absolute -inset-4 opacity-70 blur-2xl"
            aria-hidden
            style={{
              background:
                'radial-gradient(60% 60% at 70% 20%, rgba(215,255,0,0.08), transparent 70%)',
            }}
          />
          <div className={`relative ${terminalCard}`}>
            {/* Terminal title bar */}
            <div className={terminalBar}>
              <TrafficLights />
              <span className="mx-auto flex items-center gap-1 font-mono text-xs text-[#8b8b94]">
                <span className="text-[#5f5f68]">quark@quantumx</span>
                <span className="text-[#3f3f47]">:</span>
                <span>~/similarity.py</span>
              </span>
            </div>
            {/* Terminal body */}
            <div className="bg-[#0c0c0e] px-5 py-5">
            <p className="mb-3 font-mono text-[13px] text-[#8b8b94] md:text-sm">
              <span className="text-[#27c93f]">$</span>{' '}
              <span className="text-[#d7ff00]">python</span> similarity.py
            </p>
            <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-[#d4d4d8] md:text-sm">
              <code>
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tok.c ? termToken[tok.c] : undefined}>
                        {tok.t}
                      </span>
                    ))}
                    {line.tokens.length === 1 && line.tokens[0].t === '' ? ' ' : ''}
                  </div>
                ))}
                <div className="mt-2 whitespace-pre">
                  <span className="text-[#27c93f]">$</span>{' '}
                  <span className="inline-block h-[1.05em] w-[0.55em] translate-y-[0.16em] animate-pulse bg-[#d7ff00]" />
                </div>
              </code>
            </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== WORKFLOW DIAGRAM ==================== */

function WorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="Architecture"
          title="QxQuark Circuit Understanding Workflow"
          subtitle="Transform quantum circuits into semantic vector representations for retrieval, clustering, and equivalence-aware analysis."
          align="center"
        />

        <div className="mt-14">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}

/* ==================== KEY CAPABILITIES ==================== */

const CAPABILITIES = [
  {
    icon: SearchIcon,
    title: 'Semantic Search',
    desc: 'Find circuits that compute similar operations even when implemented differently.',
  },
  {
    icon: CopyIcon,
    title: 'Circuit Deduplication',
    desc: 'Identify duplicate circuits across repositories and benchmark datasets.',
  },
  {
    icon: FilterIcon,
    title: 'Equivalence Pre-Filtering',
    desc: 'Filter candidates before expensive exact unitary verification.',
  },
  {
    icon: ClusterIcon,
    title: 'Repository Discovery',
    desc: 'Cluster and explore large collections of quantum circuits using embeddings.',
  },
];

function CapabilitiesSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="What it does" title="Key Capabilities" />
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {CAPABILITIES.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={defaultTransition}
                className={`group flex flex-col ${cardBase} ${cardHover} p-6 md:p-7`}
              >
                <span className="flex size-12 items-center justify-center rounded-sm border border-gray-secondary/20 bg-background text-accent transition-colors duration-500 group-hover:border-accent/40">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-secondary">{c.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== PERFORMANCE ==================== */

const PERFORMANCE = [
  {
    counter: { to: 1000, suffix: '+' },
    unit: 'Circuits / Second',
    desc: 'Generate embeddings efficiently on commodity CPU hardware.',
  },
  {
    counter: { to: 128, suffix: '-D' },
    unit: 'Vector Representation',
    desc: 'Compact semantic representation suitable for retrieval and indexing.',
  },
  {
    counter: { to: 9 },
    unit: 'Verified Rewrite Families',
    desc: 'Trained using equivalence-preserving circuit transformations.',
  },
];

function PerformanceSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Performance" title="Accelerate Quantum Circuit Analysis" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PERFORMANCE.map((p, i) => (
            <Reveal key={p.unit} delay={i * 0.08}>
              <div className={`relative h-full overflow-hidden ${cardBase} ${cardHover} p-8 md:p-10`}>
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 blur-2xl"
                  aria-hidden
                  style={{ background: 'radial-gradient(closest-side, rgba(215,255,0,0.10), transparent 70%)' }}
                />
                <p className="font-heading text-5xl font-bold uppercase tracking-tight-heading text-accent md:text-6xl">
                  <Counter to={p.counter.to} suffix={p.counter.suffix ?? ''} />
                </p>
                <p className="mt-3 font-heading text-base font-semibold uppercase tracking-tight text-text-primary md:text-lg">
                  {p.unit}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-secondary">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== THE PROBLEM ==================== */

const PROBLEM_ROWS = [
  { approach: 'Hash Gate Strings', limitation: 'Breaks under equivalence-preserving rewrites.' },
  { approach: 'Sort Gates', limitation: 'Loses important ordering information.' },
  { approach: 'Gate Counts', limitation: 'Ignores circuit structure and qubit relationships.' },
  { approach: 'Full Unitary Comparison', limitation: 'Exact but computationally expensive.' },
  { approach: 'QxQuark', limitation: 'Fast semantic similarity with practical scalability.', highlight: true },
];

function ProblemSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          kicker="The Problem"
          title="The Problem"
          subtitle="Which of these circuits are actually the same?"
        />

        <Reveal className="mt-12">
          <div className={`overflow-hidden ${cardBase}`}>
            {/* Header row */}
            <div className="grid grid-cols-[1fr,1.4fr] border-b border-gray-secondary/15 bg-gray-secondary/[0.04]">
              <div className="px-5 py-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gray-secondary md:px-7">
                Approach
              </div>
              <div className="px-5 py-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gray-secondary md:px-7">
                Limitation
              </div>
            </div>
            {PROBLEM_ROWS.map((row) => (
              <div
                key={row.approach}
                className={`grid grid-cols-[1fr,1.4fr] border-b border-gray-secondary/10 last:border-b-0 ${
                  row.highlight ? 'bg-accent/[0.05]' : ''
                }`}
              >
                <div className="flex items-center gap-2 px-5 py-5 md:px-7">
                  {row.highlight && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />}
                  <span
                    className={`font-heading text-sm font-semibold uppercase tracking-tight ${
                      row.highlight ? 'text-accent' : 'text-text-primary'
                    }`}
                  >
                    {row.approach}
                  </span>
                </div>
                <div className="px-5 py-5 text-sm leading-relaxed text-gray-secondary md:px-7">
                  {row.limitation}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Callout */}
        <Reveal className="mt-8" delay={0.05}>
          <div className="relative overflow-hidden rounded-sm border border-accent/30 bg-accent/[0.05] p-7 md:p-9">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              aria-hidden
              style={{ background: 'radial-gradient(60% 100% at 0% 50%, rgba(215,255,0,0.08), transparent 70%)' }}
            />
            <p className="relative text-lg font-medium leading-relaxed text-text-primary md:text-xl">
              <span className="text-accent">&ldquo;</span>
              QxQuark sits between fragile heuristics and expensive exact verification,
              providing fast semantic understanding of quantum circuits.
              <span className="text-accent">&rdquo;</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== HOW IT WORKS ==================== */

const STEPS = [
  { icon: HashIcon, title: 'Tokenize', desc: 'Each gate becomes a structured token.' },
  { icon: VectorIcon, title: 'Embed', desc: 'Learned embeddings capture gate semantics.' },
  { icon: LayersIcon, title: 'Transformer Encoder', desc: '3 layers, 4 attention heads, CLS representation.' },
  { icon: CheckIcon, title: 'Normalize', desc: 'Produces a 128-dimensional unit vector.' },
];

const HOW_STATS = [
  { value: '647K', label: 'Parameters' },
  { value: '3', label: 'Transformer Layers' },
  { value: '4', label: 'Attention Heads' },
  { value: '128-D', label: 'Embeddings' },
  { value: 'CPU', label: 'Optimized' },
];

function HowItWorksSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Under the hood" title="How QxQuark Works" align="center" />

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={defaultTransition}
                className="relative"
              >
                <div className={`group flex h-full flex-col ${cardBase} ${cardHover} p-6 md:p-7`}>
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-sm border border-gray-secondary/20 bg-background text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gray-secondary/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-secondary">{step.desc}</p>
                </div>
                {/* connector arrow between steps (desktop) */}
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-gray-secondary/30 md:block"
                    aria-hidden
                  >
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats strip */}
        <Reveal className="mt-8" delay={0.1}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/15 sm:grid-cols-3 md:grid-cols-5">
            {HOW_STATS.map((s) => (
              <div key={s.label} className="bg-background px-4 py-6 text-center">
                <p className="font-heading text-2xl font-bold uppercase tracking-tight text-accent md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== BENCHMARKS ==================== */

const BENCHMARKS = [
  { title: 'In-Distribution Recall@10', quark: 1.0, baseline: 0.88 },
  { title: 'Held-Out Rewrite Recall@10', quark: 0.98, baseline: 0.55 },
  { title: 'Gate vs Inverse Separation', quark: 0.67, baseline: 0.0 },
  { title: 'QASMBench OOD Recall@10', quark: 0.17, baseline: 0.17 },
];

function BenchmarkBar({ label, value, accent }: { label: string; value: number; accent: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className={`font-heading text-xs font-semibold uppercase tracking-[0.15em] ${accent ? 'text-accent' : 'text-gray-secondary'}`}>
          {label}
        </span>
        <span className={`font-mono text-sm ${accent ? 'text-text-primary' : 'text-gray-secondary'}`}>
          {value.toFixed(2)}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-secondary/15">
        <motion.div
          className={`h-full rounded-full ${accent ? 'bg-accent' : 'bg-gray-secondary/50'}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.max(value * 100, 1.5)}%` }}
          viewport={defaultViewport}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

function BenchmarksSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="Benchmarks"
          title="Benchmark Results"
          subtitle="Real benchmark numbers with transparent reporting."
        />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {BENCHMARKS.map((b) => (
            <motion.div
              key={b.title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={defaultTransition}
              className={`${cardBase} ${cardHover} p-6 md:p-8`}
            >
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-text-primary md:text-lg">
                {b.title}
              </h3>
              <div className="mt-6 space-y-5">
                <BenchmarkBar label="QxQuark" value={b.quark} accent />
                <BenchmarkBar label="Baseline" value={b.baseline} accent={false} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-8" delay={0.05}>
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-gray-secondary">
            <span className="text-accent">Note — </span>
            Ties the strongest baseline on out-of-distribution benchmarks while significantly
            outperforming on equivalence-aware retrieval tasks.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== RESEARCH HIGHLIGHTS ==================== */

const RESEARCH = [
  {
    title: 'Distinct Inverse Tokens',
    desc: 'Separates S from S†, T from T†, and other inverse operations.',
  },
  {
    title: 'Hard Negative Training',
    desc: 'Improves discrimination between near-equivalent circuits.',
  },
  {
    title: 'Expanded Rewrite Coverage',
    desc: 'Supports additional verified equivalence-preserving transformations.',
  },
];

function ResearchSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Research" title="Research Highlights" />
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {RESEARCH.map((r, i) => (
            <motion.div
              key={r.title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={defaultTransition}
              className={`group ${cardBase} ${cardHover} p-7 md:p-8`}
            >
              <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gray-secondary/40">
                R{i + 1}
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-secondary">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== USE CASES ==================== */

const USE_CASES = [
  'Quantum Research Labs',
  'Quantum Software Platforms',
  'Circuit Repositories',
  'Compiler Validation',
  'Benchmark Dataset Curation',
  'Quantum Education Platforms',
  'Circuit Search Engines',
  'Quantum Workflow Automation',
];

function UseCasesSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Applications" title="Industry & Research Applications" />
        <motion.div
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/15 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {USE_CASES.map((u, i) => (
            <motion.div
              key={u}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={defaultTransition}
              className="group flex items-center gap-3 bg-background px-6 py-7 transition-colors duration-300 hover:bg-gray-secondary/[0.04]"
            >
              <span className="font-heading text-xs font-semibold tracking-[0.2em] text-accent/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-heading text-sm font-semibold uppercase tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                {u}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== PLAYGROUND ==================== */

type PlaygroundExample = {
  id: string;
  label: string;
  circuitA: string[];
  circuitB: string[];
  score: number;
  truth: 'Equivalent' | 'Not Equivalent';
};

const EXAMPLES: PlaygroundExample[] = [
  {
    id: 'three-h',
    label: 'Three H = One H',
    circuitA: ['H q0', 'H q0', 'H q0', 'CX q0·q1'],
    circuitB: ['H q0', 'CX q0·q1'],
    score: 1.0,
    truth: 'Equivalent',
  },
  {
    id: 'reordered',
    label: 'Reordered Gates',
    circuitA: ['H q0', 'X q1', 'CX q0·q1'],
    circuitB: ['X q1', 'H q0', 'CX q0·q1'],
    score: 0.99,
    truth: 'Equivalent',
  },
  {
    id: 's-sdg',
    label: 'S vs S†',
    circuitA: ['H q0', 'S q0'],
    circuitB: ['H q0', 'S† q0'],
    score: -0.18,
    truth: 'Not Equivalent',
  },
  {
    id: 'cx-cy',
    label: 'CX vs CY',
    circuitA: ['H q0', 'CX q0·q1'],
    circuitB: ['H q0', 'CY q0·q1'],
    score: 0.24,
    truth: 'Not Equivalent',
  },
];

function CircuitCard({ title, gates }: { title: string; gates: string[] }) {
  return (
    <div className="rounded-sm border border-gray-secondary/15 bg-background p-5">
      <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gray-secondary">
        {title}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {gates.map((g, i) => (
          <span
            key={`${g}-${i}`}
            className="rounded-sm border border-gray-secondary/25 bg-gray-secondary/5 px-3 py-1.5 font-mono text-xs text-text-primary"
          >
            {g}
          </span>
        ))}
      </div>
    </div>
  );
}

function PlaygroundSection() {
  const [active, setActive] = useState(0);
  const example = EXAMPLES[active];
  const isEquivalent = example.truth === 'Equivalent';
  const scoreColor = example.score >= 0.9 ? 'text-accent' : example.score >= 0.5 ? 'text-text-primary' : 'text-gray-secondary';

  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="Try it"
          title="Interactive Playground"
          subtitle="Two circuits in. One similarity score out."
          align="center"
        />

        <Reveal className="mt-12">
          <div className={`relative overflow-hidden ${cardBase} p-6 md:p-10`}>
            <div
              className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full opacity-50 blur-3xl"
              aria-hidden
              style={{ background: 'radial-gradient(closest-side, rgba(215,255,0,0.10), transparent 70%)' }}
            />

            {/* Example selector */}
            <div className="relative flex flex-wrap gap-2.5">
              {EXAMPLES.map((ex, i) => (
                <button
                  key={ex.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-full border px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    i === active
                      ? 'border-accent/50 bg-accent/10 text-accent'
                      : 'border-gray-secondary/25 bg-gray-secondary/5 text-gray-secondary hover:border-gray-secondary/50 hover:text-text-primary'
                  }`}
                >
                  {ex.label}
                </button>
              ))}
            </div>

            <div className="relative mt-8 grid gap-6 lg:grid-cols-[1fr,1fr,0.9fr]">
              <CircuitCard title="Circuit A" gates={example.circuitA} />
              <CircuitCard title="Circuit B" gates={example.circuitB} />

              {/* Score panel */}
              <div className="flex flex-col justify-center rounded-sm border border-accent/25 bg-accent/[0.03] p-6 text-center">
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gray-secondary">
                  Similarity Score
                </p>
                <p className={`mt-3 font-heading text-5xl font-bold tracking-tight-heading ${scoreColor}`}>
                  {example.score >= 0 ? '+' : '−'}
                  {Math.abs(example.score).toFixed(3)}
                </p>
                <div className="mt-5 flex items-center justify-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isEquivalent ? 'bg-accent' : 'bg-gray-secondary'}`}
                  />
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-gray-secondary">
                    Ground Truth: <span className={isEquivalent ? 'text-accent' : 'text-text-primary'}>{example.truth}</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="relative mt-8 text-center text-sm leading-relaxed text-gray-secondary">
              Cosine similarity between the two 128-dimensional embeddings. Scores near{' '}
              <span className="text-accent">+1.000</span> indicate semantically equivalent circuits;
              low or negative scores indicate the circuits compute different operations.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== OPEN SOURCE ==================== */

const OS_BUTTONS = [
  { label: 'GitHub Repository', href: LINKS.github, icon: GithubIcon },
  { label: 'Documentation', href: LINKS.docs, icon: BookIcon },
  { label: 'Model Card', href: LINKS.modelCard, icon: DocIcon },
  { label: 'Research Paper', href: LINKS.paper, icon: PaperIcon },
];

function OpenSourceSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHead kicker="Open Source" title="Open Source & Research" align="center" />

        <Reveal className="mx-auto mt-12 max-w-2xl">
          <div className={terminalCard}>
            <div className={terminalBar}>
              <TrafficLights />
              <span className="mx-auto flex items-center gap-1 font-mono text-xs text-[#8b8b94]">
                <span className="text-[#5f5f68]">quark@quantumx</span>
                <span className="text-[#3f3f47]">:</span>
                <span>~</span>
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#0c0c0e] px-5 py-6 font-mono text-sm md:text-base">
              <span className="select-none text-[#27c93f]">$</span>
              <span className="text-[#d4d4d8]">pip install qx-quark</span>
              <span className="inline-block h-[1.05em] w-[0.55em] translate-y-[0.16em] animate-pulse bg-[#d7ff00]" />
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8" delay={0.05}>
          <div className="flex flex-wrap justify-center gap-3">
            {OS_BUTTONS.map((b) => {
              const Icon = b.icon;
              return (
                <a
                  key={b.label}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnSecondary}
                  data-magnetic
                >
                  <Icon className="h-4 w-4" />
                  {b.label}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== FINAL CTA ==================== */

function FinalCtaSection() {
  return (
    <section className="bg-background px-6 pb-section pt-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 p-10 text-center md:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              aria-hidden
              style={{
                background:
                  'radial-gradient(50% 80% at 50% 0%, rgba(215,255,0,0.08), transparent 70%)',
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary">
                Build Smarter Quantum Circuit Workflows
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-secondary md:text-lg">
                Use semantic embeddings to search, organize, analyze, and understand quantum
                circuits at scale.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href={LINKS.getStarted} target="_blank" rel="noopener noreferrer" className={btnPrimary} style={btnPrimaryStyle} data-magnetic>
                  Get Started with QxQuark
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={LINKS.docs} target="_blank" rel="noopener noreferrer" className={btnSecondary} data-magnetic>
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="text-sm uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==================== PAGE ==================== */

export function QxQuarkPage() {
  return (
    <main className="relative min-h-screen bg-background text-text-primary">
      <HeroSection />
      <WorkflowSection />
      <CapabilitiesSection />
      <PerformanceSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenchmarksSection />
      <ResearchSection />
      <UseCasesSection />
      <PlaygroundSection />
      <OpenSourceSection />
      <FinalCtaSection />
    </main>
  );
}
