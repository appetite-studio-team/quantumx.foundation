'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { SmoothScroll } from '@/components/smooth-scroll/SmoothScroll';
import { MouseTracking } from '@/components/mouse-tracking/MouseTracking';
import { PageTransition } from '@/components/transitions/PageTransition';
import { SiteHeader } from '@/components/site-header/SiteHeader';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';
import { ContactFooterSection } from '@/components/sections/ContactFooterSection';

export function StudioShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // The qx-hack subsite ships its own themed footer; every other page gets the
  // single global footer widget rendered here once.
  const showGlobalFooter = !pathname?.startsWith('/qx-hack');

  return (
    <>
      <AnnouncementBanner />
      <SiteHeader />
      <SmoothScroll>
        <PageTransition>{children}</PageTransition>
        {showGlobalFooter && <ContactFooterSection />}
      </SmoothScroll>
      <MouseTracking />
    </>
  );
}
