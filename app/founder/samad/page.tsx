import type { Metadata } from 'next';
import { FounderProfile } from '@/components/founder/FounderProfile';
import { samad } from '@/content/founders';
import { founderMetadata, founderJsonLd, founderBreadcrumbJsonLd } from '@/lib/founder-seo';

export const metadata: Metadata = founderMetadata(samad);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd(samad)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderBreadcrumbJsonLd(samad)) }}
      />
      <FounderProfile founder={samad} />
    </>
  );
}
