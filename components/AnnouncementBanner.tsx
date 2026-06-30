'use client';

import Link from 'next/link';

export function AnnouncementBanner() {
  return (
    <div className="fixed left-0 right-0 top-0 z-[10002] overflow-hidden py-2 px-3 md:px-4 bg-[#1a0a2e] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 30%, rgba(167,139,250,0.3) 50%, rgba(124,58,237,0.4) 70%, transparent)',
        }}
      />
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs md:gap-3 md:text-sm">
        <span className="inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-violet-400" aria-hidden />
        <span className="hidden sm:inline">
          <strong className="font-semibold">QuantumX School</strong>
          <span className="mx-1.5 inline-block h-3 w-px bg-white/25" aria-hidden />
          July cohort about to start, register today
        </span>
        <span className="sm:hidden">
          <strong>QuantumX School</strong>, July cohort starting
        </span>
        <Link
          href="https://quantumx.school/apply"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-black transition-colors hover:bg-white/90"
        >
          Register
          <span aria-hidden className="text-[0.85em]">→</span>
        </Link>
      </div>
    </div>
  );
}
