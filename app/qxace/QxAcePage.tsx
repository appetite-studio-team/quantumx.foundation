'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import {
  ArrowRight,
  BoltIcon,
  BrainIcon,
  btnPrimary,
  btnPrimaryStyle,
  btnSecondary,
  cardBase,
  cardHover,
  CheckIcon,
  Counter,
  CycleIcon,
  eyebrow,
  GaugeIcon,
  KeyIcon,
  LayersIcon,
  LockIcon,
  PolicyIcon,
  RadarIcon,
  SelectorIcon,
  sectionHeading,
  ShieldIcon,
  TelemetryIcon,
  terminalBar,
  terminalCard,
  termToken,
  ThreatIcon,
  TrafficLights,
} from './_shared';
import { ArchitectureDiagram } from './ArchitectureDiagram';

const LINKS = {
  contact: '/contact',
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
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
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
  { tokens: [{ t: 'from', c: 'kw' }, { t: ' qxace ' }, { t: 'import', c: 'kw' }, { t: ' Engine, Secret' }] },
  { tokens: [{ t: '' }] },
  { tokens: [{ t: 'ace ' }, { t: '=', c: 'op' }, { t: ' Engine', c: 'fn' }, { t: '(policy', c: '' }, { t: '=', c: 'op' }, { t: '"pci-dss")', c: 'str' }] },
  { tokens: [{ t: '' }] },
  { tokens: [{ t: 'ace.', c: '' }, { t: 'protect', c: 'fn' }, { t: '(' }] },
  { tokens: [{ t: '    Secret', c: 'fn' }, { t: '("api_key")', c: 'str' }, { t: ',', c: 'op' }] },
  { tokens: [{ t: '    sensitivity', c: '' }, { t: '=', c: 'op' }, { t: '"critical"', c: 'str' }, { t: ',', c: 'op' }] },
  { tokens: [{ t: '    lifespan', c: '' }, { t: '=', c: 'op' }, { t: '"5y"', c: 'str' }, { t: ',', c: 'op' }] },
  { tokens: [{ t: ')' }] },
  { tokens: [{ t: '' }] },
  { tokens: [{ t: '# risk: critical → PQC hybrid selected', c: 'cm' }] },
  { tokens: [{ t: '# rotation + migration: auto-managed', c: 'cm' }] },
];

const HERO_METRICS = [
  { value: 'ML-KEM', label: 'Post-Quantum' },
  { value: 'QRS', label: 'Risk Scoring' },
  { value: 'Adaptive', label: 'Encryption' },
  { value: 'Real-Time', label: 'Threat Defense' },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Faint grid - same overlay used on the home hero / 404 */}
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
        style={{ background: 'radial-gradient(closest-side, rgba(215,255,0,0.10), transparent 70%)' }}
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
            QxACE · Adaptive Cryptography Engine
          </motion.span>

          <motion.h1
            className="mt-6 font-heading text-clamp-display font-bold uppercase leading-[0.95] tracking-tight-heading text-text-primary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.05 }}
          >
            Cryptography
            <br />
            That Thinks
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-secondary md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            The Adaptive Cryptography Engine turns static encryption into cryptographic
            intelligence - continuously scoring risk, reading threat signals, and selecting
            the right post-quantum strategy for every secret, in real time.
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
            <Link href={LINKS.contact} className={btnPrimary} style={btnPrimaryStyle} data-magnetic>
              Request Access
              <ArrowRight className="h-4 w-4" />
            </Link>
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
            style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(215,255,0,0.08), transparent 70%)' }}
          />
          <div className={`relative ${terminalCard}`}>
            <div className={terminalBar}>
              <TrafficLights />
              <span className="mx-auto flex items-center gap-1 font-mono text-xs text-[#8b8b94]">
                <span className="text-[#5f5f68]">ace@quantumx</span>
                <span className="text-[#3f3f47]">:</span>
                <span>~/protect.py</span>
              </span>
            </div>
            <div className="bg-[#0c0c0e] px-5 py-5">
              <p className="mb-3 font-mono text-[13px] text-[#8b8b94] md:text-sm">
                <span className="text-[#27c93f]">$</span>{' '}
                <span className="text-[#d7ff00]">python</span> protect.py
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
                      {line.tokens.length === 1 && line.tokens[0].t === '' ? ' ' : ''}
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

/* ==================== SHIFT (static → adaptive) ==================== */

function ShiftSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          kicker="The Shift"
          title="From Static Encryption to Cryptographic Intelligence"
          subtitle="Traditional vaults apply one fixed policy to every secret. ACE evaluates each secret's context and adapts protection continuously across its entire lifecycle."
          align="center"
        />

        <Reveal className="mt-12">
          <div className={`grid gap-px overflow-hidden ${cardBase} sm:grid-cols-2`}>
            <div className="bg-background p-8 md:p-10">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gray-secondary">
                Legacy Vaults
              </span>
              <p className="mt-4 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-text-primary md:text-3xl">
                Static Encryption
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-secondary">
                {[
                  'One algorithm for every secret',
                  'Manual, calendar-based rotation',
                  'Blind to threat conditions',
                  'Painful, all-or-nothing PQC migration',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-secondary/60" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-accent/[0.04] p-8 md:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                aria-hidden
                style={{ background: 'radial-gradient(70% 100% at 100% 0%, rgba(215,255,0,0.08), transparent 70%)' }}
              />
              <span className="relative font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                QuantumX ACE
              </span>
              <p className="relative mt-4 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-text-primary md:text-3xl">
                Adaptive Intelligence
              </p>
              <ul className="relative mt-6 space-y-3 text-sm leading-relaxed text-gray-secondary">
                {[
                  'Right strategy per secret, by risk',
                  'Autonomous, policy-driven rotation',
                  'Threat-aware cryptographic escalation',
                  'Continuous, prioritized PQC migration',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1.5 shrink-0 text-accent">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== ARCHITECTURE ==================== */

function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          kicker="Architecture"
          title="How ACE Orchestrates Protection"
          subtitle="Every request flows through a live risk-and-threat pipeline that decides how each secret is encrypted - before a single byte is written."
          align="center"
        />
        <div className="mt-14">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}

/* ==================== CORE COMPONENTS ==================== */

const COMPONENTS = [
  {
    icon: RadarIcon,
    title: 'Risk Analyzer',
    desc: 'Scores every secret on sensitivity, lifespan, access, privilege, geography, and exposure probability.',
  },
  {
    icon: PolicyIcon,
    title: 'Policy Engine',
    desc: 'Declarative, compliance-aware rules that map risk and context to cryptographic requirements.',
  },
  {
    icon: SelectorIcon,
    title: 'Adaptive Crypto Selector',
    desc: 'Chooses algorithm, PQC variant, rotation interval, hybrid config, and migration urgency.',
  },
  {
    icon: ThreatIcon,
    title: 'Threat Monitor',
    desc: 'Watches for anomalous access, geographic outliers, brute-force patterns, and insider signals.',
  },
  {
    icon: TelemetryIcon,
    title: 'Telemetry & Observability',
    desc: 'Full audit trail of encryption history, migrations, rotations, and threat-triggered actions.',
  },
  {
    icon: BrainIcon,
    title: 'AI Security Adaptation',
    desc: 'Behavioral intelligence that lets protection respond to the live operating environment.',
  },
];

function ComponentsSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Core Components" title="A Cryptographic Control Plane" />
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {COMPONENTS.map((c) => {
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

/* ==================== QUANTUM RISK SCORE ==================== */

const RISK_LEVELS = [
  { range: '0–30', level: 'Low', accent: false },
  { range: '31–60', level: 'Medium', accent: false },
  { range: '61–85', level: 'High', accent: false },
  { range: '86–100', level: 'Critical', accent: true },
];

const RISK_FACTORS = [
  'Data sensitivity',
  'Retention period',
  'Exposure probability',
  'Compliance level',
  'Access frequency',
  'Geographic spread',
];

const POLICY_LINES: { tokens: { t: string; c?: string }[] }[] = [
  { tokens: [{ t: 'IF', c: 'kw' }, { t: ' risk ' }, { t: '=', c: 'op' }, { t: ' critical', c: 'str' }] },
  { tokens: [{ t: 'THEN', c: 'kw' }, { t: ' escalate PQC strength', c: 'fn' }] },
  { tokens: [{ t: '' }] },
  { tokens: [{ t: 'IF', c: 'kw' }, { t: ' compliance ' }, { t: '=', c: 'op' }, { t: ' regulated', c: 'str' }] },
  { tokens: [{ t: 'THEN', c: 'kw' }, { t: ' enforce short rotation', c: 'fn' }] },
  { tokens: [{ t: '' }] },
  { tokens: [{ t: 'IF', c: 'kw' }, { t: ' lifespan ' }, { t: '=', c: 'op' }, { t: ' long-lived', c: 'str' }] },
  { tokens: [{ t: 'THEN', c: 'kw' }, { t: ' prioritize PQC migration', c: 'fn' }] },
];

function RiskSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="Risk Intelligence"
          title="The Quantum Risk Score"
          subtitle="A live 0–100 score that quantifies quantum exposure per secret and drives the required cryptographic strength."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Risk levels + factors */}
          <div className="grid gap-6">
            <Reveal>
              <div className={`overflow-hidden ${cardBase} p-6 md:p-8`}>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-sm border border-gray-secondary/20 bg-background text-accent">
                    <GaugeIcon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-text-primary">
                    Risk Categories
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {RISK_LEVELS.map((r) => (
                    <div
                      key={r.level}
                      className={`rounded-sm border p-4 text-center ${
                        r.accent ? 'border-accent/40 bg-accent/[0.05]' : 'border-gray-secondary/15 bg-gray-secondary/[0.03]'
                      }`}
                    >
                      <p className={`font-heading text-lg font-bold tracking-tight ${r.accent ? 'text-accent' : 'text-text-primary'}`}>
                        {r.range}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-secondary">{r.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className={`overflow-hidden ${cardBase} p-6 md:p-8`}>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-sm border border-gray-secondary/20 bg-background text-accent">
                    <RadarIcon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-text-primary">
                    Signals ACE Evaluates
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {RISK_FACTORS.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-text-primary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Policy terminal */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col">
              <div className={`flex h-full flex-col ${terminalCard}`}>
                <div className={terminalBar}>
                  <TrafficLights />
                  <span className="mx-auto flex items-center gap-1 font-mono text-xs text-[#8b8b94]">
                    <span className="text-[#5f5f68]">ace@quantumx</span>
                    <span className="text-[#3f3f47]">:</span>
                    <span>~/policy.rules</span>
                  </span>
                </div>
                <div className="flex-1 bg-[#0c0c0e] px-6 py-6">
                  <p className="mb-4 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b8f3d]">
                    Adaptive Policy Rules
                  </p>
                  <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-[#d4d4d8]">
                    <code>
                      {POLICY_LINES.map((line, i) => (
                        <div key={i} className="whitespace-pre">
                          {line.tokens.map((tok, j) => (
                            <span key={j} className={tok.c ? termToken[tok.c] : undefined}>
                              {tok.t}
                            </span>
                          ))}
                          {line.tokens.length === 1 && line.tokens[0].t === '' ? ' ' : ''}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==================== PILLARS ==================== */

const PILLARS = [
  {
    icon: BoltIcon,
    title: 'Threat-Aware Cryptography',
    desc: 'ACE escalates protection under elevated threat - strengthening policies, raising protection levels, and triggering defensive actions when anomalies surface. A proactive posture, not a reactive one.',
  },
  {
    icon: LayersIcon,
    title: 'Cryptographic Agility',
    desc: 'Adapt to new standards, evolving PQC algorithms, and future vulnerabilities without an architectural rewrite - the foundation of long-term post-quantum resilience.',
  },
  {
    icon: CycleIcon,
    title: 'Secret Lifecycle Intelligence',
    desc: 'Secrets are dynamic entities. ACE adapts protection across creation, classification, rotation, migration, expiration, and revocation.',
  },
  {
    icon: TelemetryIcon,
    title: 'Cryptographic Observability',
    desc: 'Deep visibility into algorithm usage, migration state, and protection evolution - powering auditing, compliance, and security analytics.',
  },
];

function PillarsSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="What Makes It Different" title="Built for the Post-Quantum Era" />
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={defaultTransition}
                className={`group flex gap-5 ${cardBase} ${cardHover} p-7 md:p-8`}
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm border border-gray-secondary/20 bg-background text-accent transition-colors duration-500 group-hover:border-accent/40">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-sm font-semibold tracking-[0.2em] text-gray-secondary/40">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-secondary">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== LIFECYCLE ==================== */

const LIFECYCLE = [
  'Creation',
  'Classification',
  'Encryption',
  'Rotation',
  'Migration',
  'Expiration',
  'Archival',
  'Revocation',
];

function LifecycleSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="Lifecycle"
          title="Protection That Evolves With Every Secret"
          subtitle="ACE continuously re-evaluates and re-protects each secret through every stage of its life."
          align="center"
        />
        <motion.div
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/15 sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          {LIFECYCLE.map((stage, i) => (
            <motion.div
              key={stage}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={defaultTransition}
              className="group flex items-center gap-3 bg-background px-6 py-7 transition-colors duration-300 hover:bg-gray-secondary/[0.04]"
            >
              <span className="font-heading text-xs font-semibold tracking-[0.2em] text-accent/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-heading text-sm font-semibold uppercase tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                {stage}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== OBJECTIVES / STATS ==================== */

const OBJECTIVE_STATS = [
  { counter: { to: 100 }, unit: 'Quantum Risk Score', desc: 'A single 0–100 signal driving cryptographic strength per secret.' },
  { counter: { to: 1024 }, unit: 'ML-KEM Key Strength', desc: 'Adaptive escalation to ML-KEM-1024 for critical, long-lived secrets.' },
  { counter: { to: 8 }, unit: 'Lifecycle Stages', desc: 'Continuous, stage-aware protection from creation to revocation.' },
];

function ObjectivesSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="By Design" title="Quantum-Safe, Autonomous, Agile" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {OBJECTIVE_STATS.map((p, i) => (
            <Reveal key={p.unit} delay={i * 0.08}>
              <div className={`relative h-full overflow-hidden ${cardBase} ${cardHover} p-8 md:p-10`}>
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 blur-2xl"
                  aria-hidden
                  style={{ background: 'radial-gradient(closest-side, rgba(215,255,0,0.10), transparent 70%)' }}
                />
                <p className="font-heading text-5xl font-bold uppercase tracking-tight-heading text-accent md:text-6xl">
                  <Counter to={p.counter.to} />
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

/* ==================== USE CASES ==================== */

const USE_CASES = [
  'Secrets & Key Management',
  'Regulated Financial Systems',
  'Healthcare & PHI Vaults',
  'Government & Defense',
  'Critical Infrastructure',
  'Cloud & Multi-Tenant SaaS',
  'Long-Lived Data Archives',
  'Zero-Trust Platforms',
];

function UseCasesSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Applications" title="Where ACE Protects" />
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

/* ==================== ENCRYPTION MODEL CALLOUT ==================== */

function EncryptionCallout() {
  const chips = [
    { icon: LockIcon, label: 'AES-256' },
    { icon: ShieldIcon, label: 'ML-KEM' },
    { icon: KeyIcon, label: 'Hybrid Keys' },
    { icon: LayersIcon, label: 'Multi-PQC' },
  ];
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-accent/30 bg-accent/[0.05] p-8 text-center md:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              aria-hidden
              style={{ background: 'radial-gradient(60% 100% at 50% 0%, rgba(215,255,0,0.08), transparent 70%)' }}
            />
            <p className="relative text-lg font-medium leading-relaxed text-text-primary md:text-xl">
              <span className="text-accent">&ldquo;</span>
              ACE never bets on a single algorithm. It composes classical and post-quantum
              primitives into hybrid encryption, so your secrets stay protected against
              both today&rsquo;s attackers and tomorrow&rsquo;s quantum ones.
              <span className="text-accent">&rdquo;</span>
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              {chips.map((c) => {
                const Icon = c.icon;
                return (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-secondary/25 bg-background px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-text-primary"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    {c.label}
                  </span>
                );
              })}
            </div>
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
              style={{ background: 'radial-gradient(50% 80% at 50% 0%, rgba(215,255,0,0.08), transparent 70%)' }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary">
                Make Your Cryptography Adaptive
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-secondary md:text-lg">
                Bring risk-aware, quantum-safe protection to every secret in your
                infrastructure - and be ready for the post-quantum era before it arrives.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link href={LINKS.contact} className={btnPrimary} style={btnPrimaryStyle} data-magnetic>
                  Request Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={LINKS.contact} className={btnSecondary} data-magnetic>
                  Talk to the Team
                </Link>
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

export function QxAcePage() {
  return (
    <main className="relative min-h-screen bg-background text-text-primary">
      <HeroSection />
      <ShiftSection />
      <ArchitectureSection />
      <ComponentsSection />
      <RiskSection />
      <PillarsSection />
      <LifecycleSection />
      <ObjectivesSection />
      <UseCasesSection />
      <EncryptionCallout />
      <FinalCtaSection />
    </main>
  );
}
