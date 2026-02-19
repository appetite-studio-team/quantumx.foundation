'use client';

import { useMousePosition } from '@/hooks/useMousePosition';
import { usePrefersReducedMotion, useHasTouch } from '@/hooks/useReducedMotion';
import { useEffect, useState } from 'react';

export function MouseTracking() {
  const { x, y } = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasTouch = useHasTouch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hasTouch || prefersReducedMotion) return null;

  return (
    <>
      {/* Live coordinates — top right */}
      <div
        className="pointer-events-none fixed right-4 top-4 z-[9999] hidden font-mono text-xs text-gray-secondary md:block"
        aria-hidden
      >
        <span>X: {Math.round(x)}</span>
        <span className="mx-1.5">/</span>
        <span>Y: {Math.round(y)}</span>
      </div>

      {/* Crosshair lines */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        aria-hidden
      >
        <div
          className="absolute h-px w-screen bg-gray-secondary/20"
          style={{
            transform: `translateY(${y}px)`,
          }}
        />
        <div
          className="absolute h-screen w-px bg-gray-secondary/20"
          style={{
            transform: `translateX(${x}px)`,
          }}
        />
      </div>
    </>
  );
}
