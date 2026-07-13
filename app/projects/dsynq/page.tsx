import type { Metadata } from 'next';
import { DsynqPage } from './DsynqPage';

const title = 'DsynQ - Physics-Driven Design for Quantum Photonics';
const description =
  'DsynQ transforms photonic quantum device requirements into fabrication-ready chip designs using AI-assisted workflows - a gdsfactory layout engine paired with an AI intelligence layer that takes you from plain-language requirements to GDSII in under a minute.';

export const metadata: Metadata = {
  title: 'DsynQ',
  description,
  alternates: {
    canonical: '/projects/dsynq/',
  },
  openGraph: {
    title,
    description,
    url: 'https://quantumx.foundation/projects/dsynq/',
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
    { '@type': 'ListItem', position: 3, name: 'DsynQ', item: 'https://quantumx.foundation/projects/dsynq/' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DsynqPage />
    </>
  );
}
