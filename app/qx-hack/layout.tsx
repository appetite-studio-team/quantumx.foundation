import type { ReactNode } from 'react';

export default function QxHackLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Hide global site header + announcement banner on /qx-hack pages */}
      <style>{`header, .grain-overlay { display: none !important; }`}</style>

      <div className="force-dark relative min-h-screen overflow-hidden bg-background text-text-primary">
        {/* Page-wide subtle violet wash behind everything */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[1200px] opacity-50"
          aria-hidden
          style={{
            background:
              'radial-gradient(60% 50% at 50% 0%, rgba(124, 58, 237, 0.18), transparent 70%)',
          }}
        />
        {children}
      </div>
    </>
  );
}
