/**
 * Shared primitives for the QxACE (Adaptive Cryptography Engine) product page.
 *
 * Mirrors the QxQuark product-page design language (theme-aware CSS variables,
 * lime accent, Space Grotesk headings, sharp/soft card rhythm, fixed-dark
 * terminal) so the page reads as if it shipped alongside the rest of
 * quantumx.foundation.
 */

'use client';

import { useEffect, useRef, useState, type SVGProps } from 'react';

/* ---------- reusable class tokens (match ProjectCard + main-site pages) ---------- */

export const cardBase =
  'rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 transition-all duration-500';

export const cardHover =
  'hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(215,255,0,0.06)]';

/** Filled primary CTA - sharp-edged accent fill with black border + black label. */
export const btnPrimary =
  'inline-flex items-center justify-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.15em] px-7 py-4 rounded-none border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(215,255,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export const btnPrimaryStyle = {
  backgroundColor: 'var(--color-accent)',
  color: '#0a0a0a',
  borderColor: '#0a0a0a',
} as const;

/** Outlined secondary CTA - bordered, lifts to accent on hover. */
export const btnSecondary =
  'inline-flex items-center justify-center gap-2 rounded-none border border-gray-secondary/40 px-7 py-4 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors duration-300 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export const eyebrow =
  'font-heading text-xs font-semibold uppercase tracking-[0.25em] text-accent';

export const sectionHeading =
  'font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary';

/* ---------- terminal window (fixed dark, theme-independent) ---------- */

/** Terminal shell - stays dark in both light/dark site themes for a real-terminal feel. */
export const terminalCard =
  'overflow-hidden rounded-lg border border-white/10 bg-[#0c0c0e] shadow-[0_24px_70px_-20px_rgba(0,0,0,0.65)]';

export const terminalBar =
  'flex items-center gap-2 border-b border-white/[0.08] bg-[#161619] px-4 py-3';

/** Fixed code-token colors for use on the dark terminal background. */
export const termToken: Record<string, string> = {
  kw: 'text-[#8b8b94]',
  fn: 'text-[#d7ff00]',
  num: 'text-[#b6e84f]',
  op: 'text-[#8b8b94]',
  cm: 'text-[#6b8f3d]',
  str: 'text-[#b6e84f]',
};

export function TrafficLights() {
  return (
    <span className="flex items-center gap-2" aria-hidden>
      <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
      <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
      <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
    </span>
  );
}

/* ---------- animated count-up (subtle, scroll-triggered, matches site motion) ---------- */

function useInViewOnce<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function Counter({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1400,
  className = '',
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo - same family as the site's [0.22, 1, 0.36, 1] feel
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------- icon set (Heroicons-style outline, currentColor) ---------- */

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const base = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function ArrowRight({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} {...base} strokeWidth={2}>
      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/** Adaptive cryptography engine - lock inside a pulse/orbit. */
export function CipherIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="6" y="10.5" width="12" height="9" rx="2" />
      <path d="M9 10.5V8a3 3 0 0 1 6 0v2.5" />
      <path d="M12 14v2" />
    </svg>
  );
}

/** Risk analyzer - radar sweep. */
export function RadarIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 12 19 7.5" />
      <path d="M20.5 8.5A9 9 0 1 1 15.5 3.6" />
      <path d="M17.5 6.2A5.5 5.5 0 1 0 18 12" strokeOpacity="0.55" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Policy engine - document with rules. */
export function PolicyIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M6 3h8l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5" />
      <path d="M8 13h5M8 16.5h7" strokeOpacity="0.7" />
      <circle cx="6.4" cy="13" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="6.4" cy="16.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Adaptive crypto selector - branching switch. */
export function SelectorIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 12h3l3-5.2M11 12l3 5.2" strokeOpacity="0.8" />
    </svg>
  );
}

/** Threat monitor - eye with alert. */
export function ThreatIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

/** Telemetry / observability - signal chart. */
export function TelemetryIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 3v18h18" />
      <path d="m7 14 3-4 3 3 4-6" />
    </svg>
  );
}

export function GaugeIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18 15.5 10.5" />
      <circle cx="12" cy="18" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function KeyIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="7.5" cy="15.5" r="3.5" />
      <path d="m10 13 8-8M15 5l2.5 2.5M13 7l2 2" />
    </svg>
  );
}

export function LockIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
      <path d="M12 14v3" />
    </svg>
  );
}

export function ShieldIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z" />
      <path d="m9 12 2 2 3.5-4" />
    </svg>
  );
}

export function BrainIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M9 4a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 9a2.5 2.5 0 0 0 1 4.5V16a2.5 2.5 0 0 0 3 2.45M12 4.2V19M15 4a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 9a2.5 2.5 0 0 1-1 4.5V16a2.5 2.5 0 0 1-3 2.45" />
    </svg>
  );
}

export function CycleIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 9M20 4v5h-5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15M4 20v-5h5" />
    </svg>
  );
}

export function LayersIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </svg>
  );
}

export function BoltIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function GithubIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function BookIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M4 19a2 2 0 0 1 2-2h13" strokeOpacity="0.6" />
    </svg>
  );
}

export function DocIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M14 3v5h5" />
      <path d="M6 3h8l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M8 13h8M8 17h5" strokeOpacity="0.6" />
    </svg>
  );
}

export function PaperIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 3h9l5 5v13H5V3Z" />
      <path d="M14 3v5h5" />
      <path d="M9 12.5 11 14l3.5-4" />
    </svg>
  );
}
