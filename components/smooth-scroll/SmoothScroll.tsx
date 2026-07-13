'use client';

import { ReactNode, useEffect, useRef } from 'react';
import type Lenis from 'lenis';

export function SmoothScroll({ children }: { children: ReactNode }) {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lenis: Lenis | undefined;
    let cancelled = false;

    // Loaded dynamically so the `lenis` dependency ships in its own chunk
    // instead of the critical bundle every page needs to hydrate.
    import('lenis').then(({ default: LenisConstructor }) => {
      if (cancelled) return;

      lenis = new LenisConstructor({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      document.documentElement.classList.add('lenis');

      function raf(time: number) {
        lenis?.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      }
      rafRef.current = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      lenis?.destroy();
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return <>{children}</>;
}
