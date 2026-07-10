'use client';

import type { ComponentType, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';

/*
 * System Architecture & Pipeline - a custom React/SVG diagram rebuilt in the
 * site's premium dark aesthetic. Rendered as a fixed-dark "figure" panel so it
 * reads consistently in both light and dark site themes, and scrolls
 * horizontally inside its own container on small screens.
 */

type IconProps = SVGProps<SVGSVGElement> & { className?: string };
type Icon = ComponentType<IconProps>;

const s = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

/* ---------- icons ---------- */

const ChipI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M9.5 3v2.5M14.5 3v2.5M9.5 18.5V21M14.5 18.5V21M3 9.5h2.5M3 14.5h2.5M18.5 9.5H21M18.5 14.5H21" />
  </svg>
);
const IngestI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M4 7h6M4 12h6M4 17h6" />
    <circle cx="14.5" cy="7" r="1.4" />
    <circle cx="14.5" cy="17" r="1.4" />
    <circle cx="19" cy="12" r="1.4" />
    <path d="M10 7h3M10 17h3M15.8 7.6 17.8 11M15.8 16.4l2-3.4" strokeOpacity="0.6" />
  </svg>
);
const GateGridI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <rect x="4" y="4" width="7" height="7" rx="1" />
    <rect x="13" y="4" width="7" height="7" rx="1" />
    <rect x="4" y="13" width="7" height="7" rx="1" />
    <rect x="13" y="13" width="7" height="7" rx="1" />
  </svg>
);
const GraphI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="19" cy="18" r="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M7 12h3M13.7 11 17.4 7M13.7 13l3.7 4" strokeOpacity="0.6" />
  </svg>
);
const BrainI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M9 4a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 9a2.5 2.5 0 0 0 1 4.5V16a2.5 2.5 0 0 0 3 2.45M12 4.2V19M15 4a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 9a2.5 2.5 0 0 1-1 4.5V16a2.5 2.5 0 0 1-3 2.45" />
  </svg>
);
const DotsGridI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    {[6, 12, 18].map((y) => [6, 12, 18].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" />))}
  </svg>
);
const FingerprintI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M6.5 8.5a7 7 0 0 1 11 0M8.5 11a4 4 0 0 1 7 1.5M12 12v4.5M9.5 13.5c0 2 .3 3.5 1 5M14.5 13c.4 1.8.3 3.6-.3 5.3" />
  </svg>
);
const TargetI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeOpacity="0.6" />
  </svg>
);
const CubesI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M12 3 7 5.6v5.2L12 13l5-2.2V5.6L12 3ZM7 5.6 12 8l5-2.4M12 8v5" />
    <path d="M6 13.5 3.5 15v3L6 19.2 8.5 18v-3L6 13.5ZM18 13.5 15.5 15v3L18 19.2 20.5 18v-3L18 13.5Z" strokeOpacity="0.7" />
  </svg>
);
const ScaleI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M12 4v16M7 20h10M4 8l4-2 4 2M20 8l-4-2-4 2M8 6 5 12h6L8 6ZM16 6l-3 6h6l-3-6Z" />
  </svg>
);
const ShieldI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z" />
    <path d="m9 12 2 2 3.5-4" />
  </svg>
);
const CpuI: Icon = ({ className = 'h-5 w-5' }) => <ChipI className={className} />;
const FlameI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M12 3c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.4.6-2.4 1.3-3.2C10 9 11.5 7 12 3Z" />
    <path d="M12 20a2.5 2.5 0 0 0 2.5-2.5c0-1.5-1.5-2-2.5-3.5-1 1.5-2.5 2-2.5 3.5A2.5 2.5 0 0 0 12 20Z" strokeOpacity="0.7" />
  </svg>
);
const TerminalI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m7 9 3 3-3 3M13 15h4" />
  </svg>
);
const CopyI: Icon = ({ className = 'h-6 w-6' }) => (
  <svg className={className} {...s}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const SearchI: Icon = ({ className = 'h-6 w-6' }) => (
  <svg className={className} {...s}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const ClusterI: Icon = ({ className = 'h-6 w-6' }) => (
  <svg className={className} {...s}>
    <circle cx="6" cy="7" r="2.5" />
    <circle cx="18" cy="8" r="2.5" />
    <circle cx="12" cy="17" r="2.5" />
    <path d="M8 8.5 10 15M16 9.5 14 15M8.3 7.2h7.4" strokeOpacity="0.5" />
  </svg>
);
const BookI: Icon = ({ className = 'h-6 w-6' }) => (
  <svg className={className} {...s}>
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
    <path d="M4 19a2 2 0 0 1 2-2h13" strokeOpacity="0.6" />
  </svg>
);

/* ---------- primitives ---------- */

function Chevron() {
  return (
    <svg className="h-4 w-4 shrink-0 self-center text-white/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

/** Compact icon-left node used across the pipeline. */
function Mini({ icon: Icon, title, sub }: { icon: Icon; title: string; sub?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.03] px-3.5 py-3">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-white/65">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-heading text-[12px] font-semibold uppercase leading-tight tracking-tight text-white/90">
          {title}
        </p>
        {sub && <p className="mt-0.5 text-[10px] leading-snug text-white/40">{sub}</p>}
      </div>
    </div>
  );
}

/** Larger centered node for the head of the pipeline. */
function Primary({ icon: Icon, title, sub }: { icon: Icon; title: string; sub?: string }) {
  return (
    <div className="flex w-40 shrink-0 flex-col items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.025] px-4 py-6 text-center">
      <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.05] text-white/70">
        <Icon className="h-6 w-6" />
      </span>
      <p className="mt-4 font-heading text-sm font-semibold uppercase leading-tight tracking-tight text-white">
        {title}
      </p>
      {sub && <p className="mt-2 text-[10px] leading-snug text-white/45">{sub}</p>}
    </div>
  );
}

const BRANCHES: { a: [Icon, string]; b: [Icon, string] }[] = [
  { a: [DotsGridI, 'Vector Embeddings'], b: [FingerprintI, 'Semantic Fingerprints'] },
  { a: [TargetI, 'Similarity Metric'], b: [CubesI, 'Nearest-Neighbor Index'] },
  { a: [ScaleI, 'Equivalence Check'], b: [ShieldI, 'Unitary Verification'] },
];

const INFRA: [Icon, string][] = [
  [CpuI, 'CPU-Native · No GPU'],
  [FlameI, 'PyTorch Backend'],
  [TerminalI, 'Python SDK & CLI'],
];

const WORKFLOWS: { icon: Icon; title: string; sub: string }[] = [
  { icon: CopyI, title: 'Deduplication', sub: 'Group Equivalent Circuits' },
  { icon: SearchI, title: 'Semantic Search', sub: 'Search by Example' },
  { icon: ShieldI, title: 'Optimization QA', sub: 'Transpiler Regression Checks' },
  { icon: ClusterI, title: 'Clustering', sub: 'Structural Circuit Discovery' },
  { icon: BookI, title: 'Library Intelligence', sub: 'Searchable Codebases' },
];

export function ArchitectureDiagram() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={defaultTransition}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0a0b] via-[#0d0d0f] to-[#1a1a1d] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
    >
      {/* ambient accent wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{ background: 'radial-gradient(60% 50% at 45% 20%, rgba(215,255,0,0.05), transparent 70%)' }}
      />

      <div className="relative overflow-x-auto px-5 py-8 md:px-10 md:py-12">
        <div className="mx-auto min-w-[960px] max-w-6xl">
          {/* ---- Tier 1: pipeline ---- */}
          <div className="flex items-stretch justify-between gap-3">
            <Primary icon={ChipI} title="Quantum Circuits" />
            <Chevron />
            <Primary icon={IngestI} title="Multi-Framework Ingestion" sub="Qiskit · PennyLane · Cirq · OpenQASM" />
            <Chevron />

            {/* Engine */}
            <div className="relative flex w-60 shrink-0 flex-col justify-center rounded-2xl border border-accent/30 bg-accent/[0.04] p-3 shadow-[0_0_40px_-12px_rgba(215,255,0,0.25)]">
              <p className="mb-3 text-center font-heading text-sm font-bold uppercase tracking-tight text-white">
                QxQuark Engine
              </p>
              <div className="space-y-2">
                <Mini icon={GateGridI} title="Gate Tokenizer" />
                <Mini icon={GraphI} title="Graph Neural Encoder" />
                <Mini icon={BrainI} title="647K-Param Model" />
              </div>
            </div>
            <Chevron />

            {/* Branch pairs */}
            <div className="flex flex-col justify-center gap-3">
              {BRANCHES.map((br, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-44 shrink-0">
                    <Mini icon={br.a[0]} title={br.a[1]} />
                  </div>
                  <Chevron />
                  <div className="w-48 shrink-0">
                    <Mini icon={br.b[0]} title={br.b[1]} />
                  </div>
                </div>
              ))}
            </div>

            {/* dashed bracket to infra */}
            <div className="flex items-center" aria-hidden>
              <div className="h-[70%] w-4 rounded-r-md border-y border-r border-dashed border-white/15" />
            </div>

            {/* Infra column */}
            <div className="flex flex-col justify-center gap-3">
              {INFRA.map(([Icon, label]) => (
                <div key={label} className="w-48 shrink-0">
                  <Mini icon={Icon} title={label} />
                </div>
              ))}
            </div>
          </div>

          {/* ---- connector to tier 2 ---- */}
          <div className="relative mx-auto mt-10 flex justify-center" aria-hidden>
            <div className="absolute left-[10%] right-[10%] top-1/2 border-t border-dashed border-white/15" />
            <span className="relative rounded-full border border-white/12 bg-white/[0.05] px-5 py-2 font-heading text-[12px] font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur">
              Composable Quantum Workflows
            </span>
          </div>

          {/* ---- Tier 2: workflows ---- */}
          <div className="mt-8 grid grid-cols-5 gap-4">
            {WORKFLOWS.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="relative flex flex-col items-center rounded-2xl border border-white/[0.09] bg-white/[0.025] px-4 py-6 text-center">
                  <span className="absolute -top-6 left-1/2 h-6 w-px -translate-x-1/2 border-l border-dashed border-white/15" aria-hidden />
                  <span className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-heading text-[13px] font-semibold uppercase leading-tight tracking-tight text-white">
                    {w.title}
                  </p>
                  <span className="mt-2 h-px w-8 bg-white/15" aria-hidden />
                  <p className="mt-2 text-[11px] leading-snug text-white/45">{w.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <figcaption className="relative border-t border-white/[0.06] py-4 text-center font-heading text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
        System Architecture &amp; Pipeline
      </figcaption>
    </motion.figure>
  );
}
