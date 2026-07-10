/**
 * Shared primitives for the QxQuark product page.
 *
 * Everything here reuses the main-site design language (theme-aware CSS
 * variables, lime accent, Space Grotesk headings, sharp/soft card rhythm) so
 * the page reads as if it shipped alongside the rest of quantumx.foundation.
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

export function ChipIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 3v2.5M14.5 3v2.5M9.5 18.5V21M14.5 18.5V21M3 9.5h2.5M3 14.5h2.5M18.5 9.5H21M18.5 14.5H21" />
    </svg>
  );
}

export function BracketsIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M8 4H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

export function HashIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M9 4 7 20M17 4l-2 16M4 9h16M3 15h16" />
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

export function VectorIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="6" cy="7" r="1.4" />
      <circle cx="12" cy="12" r="1.4" />
      <circle cx="18" cy="6" r="1.4" />
      <circle cx="8" cy="17" r="1.4" />
      <circle cx="17" cy="16" r="1.4" />
      <path d="M6 7l6 5 6-6M12 12l-4 5m4-5 5 4" strokeOpacity="0.5" />
    </svg>
  );
}

export function DatabaseIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </svg>
  );
}

export function SearchIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function CopyIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function FilterIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z" />
    </svg>
  );
}

export function ClusterIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <circle cx="12" cy="17" r="2.5" />
      <path d="M8 8.5 10 15M16 9.5 14 15M8.3 7.2h7.4" strokeOpacity="0.5" />
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

export function CpuIcon({ className = 'h-6 w-6' }: IconProps) {
  return <ChipIcon className={className} />;
}
