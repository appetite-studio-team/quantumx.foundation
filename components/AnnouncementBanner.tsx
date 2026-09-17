'use client';

// Tagged so Qiskit Fall Fest registrations can be attributed back to this
// banner. Each QuantumX site that runs the banner sets its own utm_source.
const QFF_URL =
  'https://qff26.quantumx.foundation/?utm_source=quantumx.foundation&utm_medium=banner&utm_campaign=qff26';

export function AnnouncementBanner() {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-[10002] overflow-hidden px-3 py-2 md:px-4"
      style={{
        backgroundColor: 'var(--color-banner-bg)',
        color: 'var(--color-banner-text)',
      }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs md:gap-3 md:text-sm">
        <span className="hidden sm:inline">
          <strong className="font-semibold">Qiskit Fall Fest 2026</strong>
          <span className="mx-1.5 inline-block h-3 w-px bg-current opacity-25" aria-hidden />
          QuantumX is an official host of IBM Quantum&apos;s Qiskit Fall Fest
        </span>
        <span className="sm:hidden">
          <strong>Qiskit Fall Fest 2026</strong>, hosted by QuantumX
        </span>
        <a
          href={QFF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-0.5 text-xs font-semibold transition-opacity hover:opacity-85"
          style={{
            backgroundColor: 'var(--color-banner-text)',
            color: 'var(--color-banner-bg)',
          }}
        >
          Register now
          <span aria-hidden className="text-[0.85em]">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
