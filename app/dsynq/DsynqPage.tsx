'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import {
  ArrowRight,
  AtomIcon,
  BookIcon,
  btnPrimary,
  btnPrimaryStyle,
  btnSecondary,
  cardBase,
  cardHover,
  Counter,
  eyebrow,
  ExportIcon,
  GaugeIcon,
  GridIcon,
  LayersIcon,
  sectionHeading,
  TargetIcon,
  WaveIcon,
} from './_shared';

/** External destination for the live product. */
const LAUNCH_URL = 'https://dsynq.quantumx.technology/';

const isLive = LAUNCH_URL.startsWith('http');

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
        <p className="mt-4 text-base leading-relaxed text-gray-secondary md:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}

/** Primary CTA — real link when the product is live, else a "coming soon" pill. */
function LaunchButton({ label }: { label: string }) {
  if (isLive) {
    return (
      <a
        href={LAUNCH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={btnPrimary}
        style={btnPrimaryStyle}
        data-magnetic
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center gap-2 rounded-none border-2 border-[#0a0a0a] bg-accent px-7 py-4 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-[#0a0a0a]"
      aria-disabled
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />
      Coming Soon
    </span>
  );
}

/* ============================ HERO ============================ */

const HERO_METRICS = [
  { value: 'Inverse', label: 'Design' },
  { value: 'Maxwell', label: 'Accurate' },
  { value: 'Fab', label: 'Aware' },
  { value: 'GPU', label: 'Accelerated' },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Faint grid — same overlay used across the site */}
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
            DsynQ · Quantum Photonics
          </motion.span>

          <motion.h1
            className="mt-6 font-heading text-clamp-display font-bold uppercase leading-[0.95] tracking-tight-heading text-text-primary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.05 }}
          >
            Physics-Driven
            <br />
            Design for Quantum
            <br />
            Photonics
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-secondary md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            DsynQ is an inverse-design engine for quantum photonic devices. Let
            Maxwell&rsquo;s equations — not trial and error — shape the waveguides,
            resonators, and single-photon sources at the heart of quantum hardware.
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
            <LaunchButton label="Explore DsynQ" />
            <Link href="/projects" className={btnSecondary} data-magnetic>
              All Projects
            </Link>
          </motion.div>
        </div>

        {/* Right: device schematic card */}
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
          <div className={`relative overflow-hidden ${cardBase} p-6 md:p-8`}>
            <div className="flex items-center justify-between">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gray-secondary">
                Photonic Layout
              </span>
              <span className="font-mono text-xs text-accent">λ = 1550 nm</span>
            </div>

            {/* Waveguide + optimized coupler schematic */}
            <svg
              viewBox="0 0 320 200"
              className="mt-6 w-full text-accent"
              fill="none"
              stroke="currentColor"
              aria-hidden
            >
              {/* substrate grid */}
              <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 32 + 4} x2="320" y2={i * 32 + 4} />
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 32} y1="0" x2={i * 32} y2="200" />
                ))}
              </g>
              {/* input / output waveguides */}
              <path d="M0 70 H120" strokeWidth="6" strokeOpacity="0.85" />
              <path d="M0 132 H120" strokeWidth="6" strokeOpacity="0.85" />
              <path d="M200 70 H320" strokeWidth="6" strokeOpacity="0.85" />
              <path d="M200 132 H320" strokeWidth="6" strokeOpacity="0.85" />
              {/* freeform, inverse-designed coupling region */}
              <path
                d="M120 50 C150 60 150 90 175 100 C150 110 150 140 120 150 L200 150 C185 130 185 70 200 50 Z"
                strokeWidth="2"
                strokeOpacity="0.6"
                fill="currentColor"
                fillOpacity="0.06"
              />
              {/* stippled optimization dots */}
              <g fill="currentColor" fillOpacity="0.5" stroke="none">
                {[
                  [140, 78], [158, 92], [150, 108], [168, 118], [176, 100],
                  [140, 122], [158, 130], [148, 70],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.4" />
                ))}
              </g>
            </svg>

            <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-gray-secondary/15 bg-gray-secondary/15">
              {[
                { k: 'Insertion loss', v: '0.11 dB' },
                { k: 'Footprint', v: '3.6 µm²' },
                { k: 'Bandwidth', v: '80 nm' },
              ].map((s) => (
                <div key={s.k} className="bg-background px-3 py-4 text-center">
                  <p className="font-heading text-sm font-bold text-accent">{s.v}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-secondary">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== CAPABILITIES ==================== */

const CAPABILITIES = [
  {
    icon: TargetIcon,
    title: 'Inverse Design',
    desc: 'Specify the target response and let adjoint optimization discover the device geometry that achieves it.',
  },
  {
    icon: WaveIcon,
    title: 'Full-Wave Physics',
    desc: 'Every candidate is scored against Maxwell-accurate electromagnetic simulation, not approximations.',
  },
  {
    icon: GridIcon,
    title: 'Fabrication-Aware',
    desc: 'Minimum feature size, curvature, and process constraints are baked into the optimizer so designs are manufacturable.',
  },
  {
    icon: LayersIcon,
    title: 'Component Library',
    desc: 'Couplers, splitters, resonators, and single-photon sources as reusable, parametric building blocks.',
  },
];

function CapabilitiesSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="What it does" title="Design at the Speed of Physics" />
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

/* ==================== HOW IT WORKS ==================== */

const STEPS = [
  { icon: TargetIcon, title: 'Specify', desc: 'Define the target spectrum, mode, and performance objective.' },
  { icon: WaveIcon, title: 'Simulate', desc: 'A full-wave electromagnetic solver evaluates the field response.' },
  { icon: GaugeIcon, title: 'Optimize', desc: 'Adjoint gradients reshape the geometry toward the objective.' },
  { icon: ExportIcon, title: 'Export', desc: 'Hand off a fabrication-ready GDS layout to the foundry.' },
];

function HowItWorksSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Under the hood" title="The DsynQ Design Loop" align="center" />

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
      </div>
    </section>
  );
}

/* ==================== WHY IT MATTERS ==================== */

const IMPACT = [
  {
    counter: { to: 10, suffix: '×' },
    unit: 'Smaller Footprints',
    desc: 'Inverse-designed devices routinely beat hand-tuned layouts on area and loss.',
  },
  {
    counter: { to: 1550, suffix: ' nm' },
    unit: 'Telecom Ready',
    desc: 'Design across the wavelengths quantum photonic hardware actually runs on.',
  },
  {
    counter: { to: 100, suffix: '%' },
    unit: 'Fab-Constrained',
    desc: 'Every geometry respects the foundry rules, so what you simulate is what you can build.',
  },
];

function ImpactSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Why it matters" title="Better Devices, Fewer Iterations" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {IMPACT.map((p, i) => (
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

/* ==================== USE CASES ==================== */

const USE_CASES = [
  'Single-Photon Sources',
  'Waveguide Couplers',
  'Beam Splitters',
  'Ring Resonators',
  'Mode Converters',
  'Photonic Integrated Circuits',
  'On-Chip Interferometers',
  'Quantum Sensing Frontends',
];

function UseCasesSection() {
  return (
    <section className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Applications" title="Built for Quantum Photonic Hardware" />
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
              <span className="inline-flex text-accent">
                <AtomIcon className="h-8 w-8" />
              </span>
              <h2 className="mt-5 font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary">
                Design the Next Quantum Chip
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-secondary md:text-lg">
                Put full-wave physics in the optimization loop and ship photonic devices
                that are smaller, lower-loss, and fabrication-ready.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <LaunchButton label="Explore DsynQ" />
                {isLive && (
                  <a
                    href={LAUNCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnSecondary}
                    data-magnetic
                  >
                    <BookIcon className="h-4 w-4" />
                    Documentation
                  </a>
                )}
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

export function DsynqPage() {
  return (
    <main className="relative min-h-screen bg-background text-text-primary">
      <HeroSection />
      <CapabilitiesSection />
      <HowItWorksSection />
      <ImpactSection />
      <UseCasesSection />
      <FinalCtaSection />
    </main>
  );
}
