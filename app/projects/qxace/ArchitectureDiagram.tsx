'use client';

import type { ComponentType, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';

/*
 * ACE Orchestration Flow - a custom React/SVG diagram rebuilt in the site's
 * premium dark aesthetic. Rendered as a fixed-dark "figure" panel so it reads
 * consistently in both light and dark site themes, and scrolls horizontally
 * inside its own container on small screens.
 *
 * Mirrors the reference flow:
 *   User/API -> ACE -> {Risk Analyzer, Policy Engine, Threat Monitor}
 *            -> Adaptive Crypto Selector -> Encryption Strategy Decision Layer
 *            -> AES + ML-KEM / Multi-PQC Hybrid Encryption
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

const UserI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
);
const EngineI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <rect x="6" y="10.5" width="12" height="9" rx="2" />
    <path d="M9 10.5V8a3 3 0 0 1 6 0v2.5" />
    <path d="M12 14v2" />
  </svg>
);
const RadarI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M12 12 19 7.5" />
    <path d="M20.5 8.5A9 9 0 1 1 15.5 3.6" />
    <path d="M17.5 6.2A5.5 5.5 0 1 0 18 12" strokeOpacity="0.55" />
  </svg>
);
const PolicyI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M6 3h8l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M14 3v5h5M8 13h5M8 16.5h7" strokeOpacity="0.8" />
  </svg>
);
const ThreatI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
    <circle cx="12" cy="12" r="2.6" />
  </svg>
);
const SelectorI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M8 12h3l3-5.2M11 12l3 5.2" strokeOpacity="0.8" />
  </svg>
);
const LayersI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
  </svg>
);
const LockI: Icon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} {...s}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5M12 14v3" />
  </svg>
);

/* ---------- primitives ---------- */

/** Vertical dashed connector with a downward chevron. */
function Down({ label }: { label?: string }) {
  return (
    <div className="relative flex flex-col items-center py-3" aria-hidden>
      <span className="h-8 w-px border-l border-dashed border-white/20" />
      {label && (
        <span className="my-1 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur">
          {label}
        </span>
      )}
      <svg className="h-4 w-4 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

function Node({
  icon: Icon,
  title,
  sub,
  tone = 'default',
  className = '',
}: {
  icon: Icon;
  title: string;
  sub?: string;
  tone?: 'default' | 'primary' | 'terminal';
  className?: string;
}) {
  const toneCls =
    tone === 'primary'
      ? 'border-accent/40 bg-accent/[0.05] shadow-[0_0_40px_-12px_rgba(215,255,0,0.3)]'
      : tone === 'terminal'
        ? 'border-accent/25 bg-gradient-to-br from-accent/[0.08] to-white/[0.02]'
        : 'border-white/[0.09] bg-white/[0.03]';
  const iconCls =
    tone === 'primary' || tone === 'terminal' ? 'text-accent' : 'text-white/65';
  return (
    <div className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 ${toneCls} ${className}`}>
      <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] ${iconCls}`}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 text-left">
        <p className="font-heading text-[13px] font-semibold uppercase leading-tight tracking-tight text-white/95">
          {title}
        </p>
        {sub && <p className="mt-0.5 text-[10px] leading-snug text-white/45">{sub}</p>}
      </div>
    </div>
  );
}

const ANALYSIS: { icon: Icon; title: string; sub: string }[] = [
  { icon: RadarI, title: 'Risk Analyzer', sub: 'Quantum Risk Score' },
  { icon: PolicyI, title: 'Policy Engine', sub: 'Adaptive Rules' },
  { icon: ThreatI, title: 'Threat Monitor', sub: 'Real-Time Signals' },
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
        style={{ background: 'radial-gradient(60% 45% at 50% 15%, rgba(215,255,0,0.06), transparent 70%)' }}
      />

      <div className="relative overflow-x-auto px-5 py-10 md:px-10 md:py-14">
        <div className="mx-auto flex min-w-[340px] max-w-md flex-col items-stretch">
          <Node icon={UserI} title="User / API" sub="Secret write · access · rotation request" className="justify-center" />

          <Down />

          <Node
            icon={EngineI}
            title="Adaptive Cryptography Engine"
            sub="Contextual orchestration core"
            tone="primary"
            className="justify-center"
          />

          <Down label="Continuous evaluation" />

          {/* analysis fan-out */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {ANALYSIS.map((a) => (
              <Node key={a.title} icon={a.icon} title={a.title} sub={a.sub} />
            ))}
          </div>

          <Down label="Converge" />

          <Node icon={SelectorI} title="Adaptive Crypto Selector" sub="Algorithm · variant · rotation · urgency" className="justify-center" />

          <Down />

          <Node icon={LayersI} title="Encryption Strategy Decision Layer" className="justify-center" />

          <Down />

          <Node
            icon={LockI}
            title="AES + ML-KEM / Multi-PQC Hybrid"
            sub="Quantum-safe hybrid encryption"
            tone="terminal"
            className="justify-center"
          />
        </div>
      </div>

      <figcaption className="relative border-t border-white/[0.06] py-4 text-center font-heading text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
        ACE Orchestration Flow
      </figcaption>
    </motion.figure>
  );
}
