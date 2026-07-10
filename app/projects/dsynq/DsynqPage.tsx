'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import {
  ArrowRight,
  BeamSplitterIcon,
  btnPrimary,
  btnPrimaryStyle,
  btnSecondary,
  cardBase,
  cardHover,
  ChipIcon,
  DocIcon,
  eyebrow,
  ExportIcon,
  GaugeIcon,
  GridIcon,
  LayersIcon,
  sectionHeading,
  SparkleIcon,
  TargetIcon,
  WaveIcon,
} from './_shared';

/** External destination for the live product. */
const LAUNCH_URL = 'https://dsynq.quantumx.technology/';

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

/* ============================ HERO ============================ */

const HERO_METRICS = [
  { value: 'AI', label: 'Design Assistant' },
  { value: 'GDSII', label: 'Fab-Ready' },
  { value: 'SVG', label: 'Live Preview' },
  { value: '<1 min', label: 'To Layout' },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Faint grid - same overlay used across the site */}
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
            DsynQ · AI-Powered Quantum Photonics
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
            Transform photonic quantum device requirements into fabrication-ready chip
            designs using AI-assisted workflows.
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
            <a
              href={LAUNCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
              style={btnPrimaryStyle}
              data-magnetic
            >
              Start Designing
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={LAUNCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
              data-magnetic
            >
              View Demo
            </a>
          </motion.div>
        </div>

        {/* Right: layout preview card */}
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
            </div>

            {/* Illustrative photonic layout - a Mach–Zehnder interferometer */}
            <svg
              viewBox="0 0 320 200"
              className="mt-6 w-full text-accent"
              fill="none"
              stroke="currentColor"
              aria-hidden
            >
              <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 32 + 4} x2="320" y2={i * 32 + 4} />
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 32} y1="0" x2={i * 32} y2="200" />
                ))}
              </g>
              {/* input waveguide */}
              <path d="M0 100 H70" strokeWidth="6" strokeOpacity="0.85" />
              {/* first splitter → two arms */}
              <path d="M70 100 C95 100 100 70 125 70 H195" strokeWidth="6" strokeOpacity="0.85" />
              <path d="M70 100 C95 100 100 130 125 130 H195" strokeWidth="6" strokeOpacity="0.85" />
              {/* recombining splitter → output */}
              <path d="M195 70 C220 70 225 100 250 100 H320" strokeWidth="6" strokeOpacity="0.85" />
              <path d="M195 130 C220 130 225 100 250 100" strokeWidth="6" strokeOpacity="0.85" />
              {/* phase-shifter markers on the arms */}
              <g fill="currentColor" fillOpacity="0.5" stroke="none">
                <rect x="150" y="62" width="16" height="16" rx="2" />
                <rect x="150" y="122" width="16" height="16" rx="2" />
              </g>
            </svg>

            {/* Engine layers */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-3 rounded-sm border border-gray-secondary/15 bg-background px-4 py-3">
                <ChipIcon className="h-5 w-5 text-accent" />
                <span className="font-heading text-sm font-semibold text-text-primary">
                  gdsfactory layout engine
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-sm border border-gray-secondary/15 bg-background px-4 py-3">
                <SparkleIcon className="h-5 w-5 text-accent" />
                <span className="font-heading text-sm font-semibold text-text-primary">
                  AI intelligence layer
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== HOW IT WORKS ==================== */

const STEPS = [
  {
    icon: DocIcon,
    title: 'Define Requirements',
    desc: 'Describe your device in plain language or structured fields: wavelength, platform, objective.',
  },
  {
    icon: SparkleIcon,
    title: 'AI Design Assistant',
    desc: 'The AI engine translates intent into a validated, structured photonic design specification.',
  },
  {
    icon: ChipIcon,
    title: 'Photonic Layout Generation',
    desc: 'gdsfactory synthesizes real chip geometry with an interactive SVG preview.',
  },
  {
    icon: ExportIcon,
    title: 'Export Manufacturing Files',
    desc: 'Download fabrication-ready GDSII, SVG, JSON, and an engineering report.',
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="How it works"
          title="From Requirement to Tape-Out in Four Steps"
          align="center"
        />

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

/* ==================== COMPONENTS ==================== */

const COMPONENTS = [
  {
    icon: BeamSplitterIcon,
    name: 'Beam Splitter',
    label: 'Directional 1×2 power splitter',
    desc: 'Splits an input mode into two outputs at a configurable ratio. The workhorse of interferometric quantum photonic circuits.',
  },
  {
    icon: WaveIcon,
    name: 'Waveguide',
    label: 'Single-mode routing element',
    desc: 'Low-loss channel that confines and routes light across the chip. The foundation every other component connects to.',
  },
  {
    icon: LayersIcon,
    name: 'Directional Coupler',
    label: 'Evanescent 2×2 coupler',
    desc: 'Two waveguides brought close so light couples between them, the basis for tunable splitting and switching.',
  },
  {
    icon: GridIcon,
    name: 'Grating Coupler',
    label: 'Fiber-to-chip interface',
    desc: 'Diffractive grating that couples light between an optical fiber and an on-chip waveguide for I/O.',
  },
  {
    icon: GaugeIcon,
    name: 'Mach-Zehnder Interferometer',
    label: 'Tunable interferometric switch',
    desc: 'Two splitters bridged by two arms, the programmable unit cell of quantum photonic processors.',
  },
];

function ComponentsSection() {
  return (
    <section id="components" className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="Supported components"
          title="The Building Blocks of Photonic Circuits"
        />
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-6"
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
                key={c.name}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={defaultTransition}
                className={`group flex flex-col ${cardBase} ${cardHover} p-6 md:p-7`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-sm border border-gray-secondary/20 bg-background text-accent transition-colors duration-500 group-hover:border-accent/40">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Available
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {c.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-secondary/70">
                  {c.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-secondary">{c.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== BENEFITS ==================== */

const BENEFITS = [
  {
    icon: GaugeIcon,
    title: 'Faster Design Iteration',
    desc: 'Go from requirement to layout in seconds, compressing days of manual CAD work.',
  },
  {
    icon: SparkleIcon,
    title: 'AI-Assisted Engineering',
    desc: 'An intelligence layer that recommends parameters and writes your engineering summaries.',
  },
  {
    icon: ExportIcon,
    title: 'Fabrication-Ready Outputs',
    desc: 'Standards-compliant GDSII streams that drop straight into your tape-out flow.',
  },
  {
    icon: TargetIcon,
    title: 'Quantum Hardware Focused',
    desc: 'Built around the interferometric building blocks of quantum photonic processors.',
  },
];

function BenefitsSection() {
  return (
    <section id="benefits" className="bg-background px-6 py-section md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker="Benefits" title="An AI-Native Photonic Design Platform" />
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
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={defaultTransition}
                className={`group flex flex-col ${cardBase} ${cardHover} p-6 md:p-7`}
              >
                <span className="flex size-12 items-center justify-center rounded-sm border border-gray-secondary/20 bg-background text-accent transition-colors duration-500 group-hover:border-accent/40">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-secondary">{b.desc}</p>
              </motion.div>
            );
          })}
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
                <SparkleIcon className="h-8 w-8" />
              </span>
              <h2 className="mt-5 font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary">
                Design Your First Photonic Chip Today
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-secondary md:text-lg">
                Sign up and generate a fabrication-ready layout in under a minute.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={LAUNCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                  style={btnPrimaryStyle}
                  data-magnetic
                >
                  Start Designing
                  <ArrowRight className="h-4 w-4" />
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

export function DsynqPage() {
  return (
    <main className="relative min-h-screen bg-background text-text-primary">
      <HeroSection />
      <HowItWorksSection />
      <ComponentsSection />
      <BenefitsSection />
      <FinalCtaSection />
    </main>
  );
}
