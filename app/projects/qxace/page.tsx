import type { Metadata } from 'next';
import { QxAcePage } from './QxAcePage';

const title = 'QxACE - Adaptive Cryptography Engine';
const description =
  'The Adaptive Cryptography Engine (ACE) is a context-aware, risk-adaptive orchestration framework that scores quantum exposure and selects post-quantum encryption strategies for every secret in real time.';

export const metadata: Metadata = {
  title: 'QxACE',
  description,
  alternates: {
    canonical: '/projects/qxace/',
  },
  openGraph: {
    title,
    description,
    url: 'https://quantumx.foundation/projects/qxace/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og-cover.png'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quantumx.foundation/' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://quantumx.foundation/projects/' },
    { '@type': 'ListItem', position: 3, name: 'QxACE', item: 'https://quantumx.foundation/projects/qxace/' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <QxAcePage />
    </>
  );
}
