import type { Metadata } from 'next';
import { qxHack } from '@/content/qx-hack';
import { RulesPage } from './RulesPage';

const PAGE_URL = 'https://quantumx.foundation/qx-hack/rules/';
const POSTER_URL = 'https://quantumx.foundation/images/qx-hack/qx-hack-poster.png';

const title = `Rules & Regulations - ${qxHack.meta.title}`;
const description = `Eligibility, development rules, submission requirements, judging criteria, and more - everything you need to know before the Quantum for Social Good Hackathon on May 23, Bengaluru.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    ...qxHack.meta.keywords,
    'hackathon rules',
    'hackathon eligibility',
    'hackathon judging criteria',
    'hackathon submission',
  ],
  alternates: {
    canonical: '/qx-hack/rules/',
  },
  openGraph: {
    type: 'article',
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
        alt: 'Quantum for Social Good Hackathon - Rules & Regulations',
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
    images: [{ url: POSTER_URL, alt: 'Quantum for Social Good Hackathon - Rules' }],
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
    { '@type': 'ListItem', position: 2, name: qxHack.meta.title, item: PAGE_URL.replace('/rules/', '/') },
    { '@type': 'ListItem', position: 3, name: 'Rules & Regulations', item: PAGE_URL },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <RulesPage />
    </>
  );
}
