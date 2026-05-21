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
          <strong className="font-semibold">QX Hack</strong>
          <span className="mx-1.5 inline-block h-3 w-px bg-white/25" aria-hidden />
          Quantum for Social Good Hackathon, May 23, Bengaluru
        </span>
        <span className="sm:hidden">
          <strong>QX Hack</strong>, May 23, Bengaluru
        </span>
        <Link
          href="/qx-hack/"
          className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-violet-600 px-3 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
        >
          Register
          <span aria-hidden className="text-[0.85em]">→</span>
        </Link>
      </div>
    </div>
  );
}
