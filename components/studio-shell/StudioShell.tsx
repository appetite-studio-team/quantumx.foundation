'use client';

import { ReactNode } from 'react';
import { SmoothScroll } from '@/components/smooth-scroll/SmoothScroll';
import { Cursor } from '@/components/cursor/Cursor';
import { MouseTracking } from '@/components/mouse-tracking/MouseTracking';
import { PageTransition } from '@/components/transitions/PageTransition';
import { SiteHeader } from '@/components/site-header/SiteHeader';

export function StudioShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <SmoothScroll>
        <PageTransition>{children}</PageTransition>
      </SmoothScroll>
      <Cursor />
      <MouseTracking />
    </>
  );
}
