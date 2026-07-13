import type { Metadata } from 'next';
import { QxQuarkPage } from './QxQuarkPage';

const title = 'QxQuark - Embeddings for Quantum Circuits';
const description =
  'A lightweight transformer that converts quantum circuits into semantic vector representations, enabling search, deduplication, clustering, and fast equivalence filtering.';

export const metadata: Metadata = {
  title: 'QxQuark',
  description,
  alternates: {
    canonical: '/projects/qxquark/',
  },
  openGraph: {
    title,
    description,
    url: 'https://quantumx.foundation/projects/qxquark/',
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
    { '@type': 'ListItem', position: 3, name: 'QxQuark', item: 'https://quantumx.foundation/projects/qxquark/' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <QxQuarkPage />
    </>
  );
}
