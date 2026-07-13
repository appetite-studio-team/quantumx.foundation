'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { SmoothScroll } from '@/components/smooth-scroll/SmoothScroll';
import { PageTransition } from '@/components/transitions/PageTransition';
import { SiteHeader } from '@/components/site-header/SiteHeader';
import { ContactFooterSection } from '@/components/sections/ContactFooterSection';

// Purely decorative (renders nothing until mounted) and holds no page
// content, so it's safe to split out of the main bundle and skip SSR.
const MouseTracking = dynamic(
  () => import('@/components/mouse-tracking/MouseTracking').then((mod) => mod.MouseTracking),
  { ssr: false }
);

export function StudioShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // The qx-hack subsite ships its own themed footer; every other page gets the
  // single global footer widget rendered here once.
  const showGlobalFooter = !pathname?.startsWith('/qx-hack');

  return (
    <>
      <SiteHeader />
      <SmoothScroll>
        <PageTransition>{children}</PageTransition>
        {showGlobalFooter && <ContactFooterSection />}
      </SmoothScroll>
      <MouseTracking />
    </>
  );
}
