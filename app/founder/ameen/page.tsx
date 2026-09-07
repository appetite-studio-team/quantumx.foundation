import type { Metadata } from 'next';
import { FounderProfile } from '@/components/founder/FounderProfile';
import { ameen } from '@/content/founders';
import { founderMetadata, founderJsonLd, founderBreadcrumbJsonLd } from '@/lib/founder-seo';

export const metadata: Metadata = founderMetadata(ameen);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd(ameen)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderBreadcrumbJsonLd(ameen)) }}
      />
      <FounderProfile founder={ameen} />
    </>
  );
}
