'use client';

import { ReactNode } from 'react';
import { SmoothScroll } from '@/components/smooth-scroll/SmoothScroll';
import { Cursor } from '@/components/cursor/Cursor';
import { MouseTracking } from '@/components/mouse-tracking/MouseTracking';
import { PageTransition } from '@/components/transitions/PageTransition';

export function StudioShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll>
        <PageTransition>{children}</PageTransition>
      </SmoothScroll>
      <Cursor />
      <MouseTracking />
    </>
  );
}
