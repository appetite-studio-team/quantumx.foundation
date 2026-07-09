/**
 * Shared primitives for the DsynQ product page.
 *
 * Mirrors the QxQuark / QxACE product pages so DsynQ reads as part of the same
 * design system (theme-aware CSS variables, lime accent, Space Grotesk
 * headings, sharp/soft card rhythm). Photonics-flavoured icon set.
 */

'use client';

import { useEffect, useRef, useState, type SVGProps } from 'react';

/* ---------- reusable class tokens (match ProjectCard + main-site pages) ---------- */

export const cardBase =
  'rounded-sm border border-gray-secondary/15 bg-gray-secondary/5 transition-all duration-500';

export const cardHover =
  'hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(215,255,0,0.06)]';

/** Filled primary CTA — sharp-edged accent fill with black border + black label. */
export const btnPrimary =
  'inline-flex items-center justify-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.15em] px-7 py-4 rounded-none border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(215,255,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export const btnPrimaryStyle = {
  backgroundColor: 'var(--color-accent)',
  color: '#0a0a0a',
  borderColor: '#0a0a0a',
} as const;

/** Outlined secondary CTA — bordered, lifts to accent on hover. */
export const btnSecondary =
  'inline-flex items-center justify-center gap-2 rounded-none border border-gray-secondary/40 px-7 py-4 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors duration-300 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export const eyebrow =
  'font-heading text-xs font-semibold uppercase tracking-[0.25em] text-accent';

export const sectionHeading =
  'font-heading text-clamp-section font-bold uppercase leading-tight tracking-tight-heading text-text-primary';

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

export function WaveIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M2 12c3.3-6 6.7-6 10 0s6.7 6 10 0" />
    </svg>
  );
}

export function TargetIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
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

export function CpuIcon({ className = 'h-6 w-6' }: IconProps) {
  return <ChipIcon className={className} />;
}

export function LayersIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </svg>
  );
}

export function GaugeIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-5" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
}

export function BeamSplitterIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="8" y="8" width="8" height="8" rx="1" transform="rotate(45 12 12)" />
      <path d="M3 12h4M17 12h4M12 3v2.5M12 18.5V21" strokeOpacity="0.7" />
    </svg>
  );
}

export function ExportIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 15V3m0 0-4 4m4-4 4 4" />
      <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function AtomIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(-60 12 12)" />
    </svg>
  );
}

export function SparkleIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3l1.8 4.9L18.7 9.7l-4.9 1.8L12 16.4l-1.8-4.9L5.3 9.7l4.9-1.8L12 3Z" />
      <path d="M18.5 15.5l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z" strokeOpacity="0.7" />
    </svg>
  );
}

export function DocIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M14 3v5h5" />
      <path d="M6 3h8l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M8 13h8M8 17h5" strokeOpacity="0.6" />
    </svg>
  );
}

export function GridIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 9h16M4 14h16M9 4v16M14 4v16" strokeOpacity="0.6" />
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
