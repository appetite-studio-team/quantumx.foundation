'use client';

import { ReactNode } from 'react';
import { SmoothScroll } from '@/components/smooth-scroll/SmoothScroll';
import { MouseTracking } from '@/components/mouse-tracking/MouseTracking';
import { PageTransition } from '@/components/transitions/PageTransition';
import { SiteHeader } from '@/components/site-header/SiteHeader';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';

export function StudioShell({ children }: { children: ReactNode }) {
  return (
    <>
      <AnnouncementBanner />
      <SiteHeader />
      <SmoothScroll>
        <PageTransition>{children}</PageTransition>
      </SmoothScroll>
      <MouseTracking />
    </>
  );
}
