/**
 * Shared primitives for /qx-hack/* - icons, glass card classes, atmosphere,
 * and the dark-purple CTA button styling. Keeps the hub page and the standalone
 * Problems / Rules pages visually consistent.
 */

import type { ComponentType, SVGProps } from 'react';

/* ---------- glass + button styles ---------- */

export const glassCard =
  'rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]';

export const glassCardHover =
  'transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.06]';

export const purpleButton =
  'inline-flex items-center gap-2 rounded-full bg-violet-700 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-violet-600 hover:shadow-[0_0_32px_rgba(124,58,237,0.5)]';

export const ghostButton =
  'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-text-primary backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/[0.06]';

/* ---------- atmosphere ---------- */

export function PurpleAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -top-1/3 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(124, 58, 237, 0.35), rgba(124, 58, 237, 0.08) 60%, transparent 80%)',
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(99, 102, 241, 0.25), transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] h-[55vh] w-[55vh] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(168, 85, 247, 0.22), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

/* ---------- icons ---------- */

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const baseIconProps = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  'aria-hidden': true,
} as const;

export function CalendarIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} {...baseIconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

export function MapPinIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} {...baseIconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export function ClockIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} {...baseIconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export function UsersIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} {...baseIconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

export function ArrowRight({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function ArrowLeft({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

/** Disclosure caret — rotates when placed inside `<details className="group">` via `group-open:rotate-180`. */
export function ChevronDown({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} {...baseIconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export type StatIconKey = 'clock' | 'calendar' | 'pin' | 'users';

export const statIcons: Record<StatIconKey, ComponentType<IconProps>> = {
  clock: ClockIcon,
  calendar: CalendarIcon,
  pin: MapPinIcon,
  users: UsersIcon,
};
