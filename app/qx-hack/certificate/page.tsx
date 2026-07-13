import { Suspense } from 'react';
import type { Metadata } from 'next';
import { qxHack } from '@/content/qx-hack';
import { CertificatePage } from './CertificatePage';

const PAGE_URL = 'https://quantumx.foundation/qx-hack/certificate/';
const POSTER_URL = 'https://quantumx.foundation/images/qx-hack/qx-hack-poster.png';

const title = `Download Certificate - ${qxHack.meta.title}`;
const description =
  'Download your personalized participation certificate for the Quantum for Social Good Hackathon held on May 23, 2026 at Startup Park, Bengaluru.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    ...qxHack.meta.keywords,
    'hackathon certificate',
    'participation certificate',
    'quantum hackathon certificate',
  ],
  alternates: {
    canonical: '/qx-hack/certificate/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QuantumX Foundation',
    url: PAGE_URL,
    title,
    description,
    images: [
      {
        url: POSTER_URL,
        width: 800,
        height: 800,
        alt: 'Quantum for Social Good Hackathon - Certificate',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Quantum_X_',
    creator: '@_Quantum_X_',
    title,
    description,
    images: [{ url: POSTER_URL, alt: 'Quantum for Social Good Hackathon - Certificate' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quantumx.foundation/' },
    { '@type': 'ListItem', position: 2, name: qxHack.meta.title, item: PAGE_URL.replace('/certificate/', '/') },
    { '@type': 'ListItem', position: 3, name: 'Certificate', item: PAGE_URL },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Suspense>
        <CertificatePage />
      </Suspense>
    </>
  );
}
