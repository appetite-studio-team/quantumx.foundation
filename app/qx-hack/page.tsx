import type { Metadata } from 'next';
import { qxHack } from '@/content/qx-hack';
import { QxHackPage } from './QxHackPage';

const PAGE_URL = 'https://quantumx.foundation/qx-hack/';
const POSTER_URL = 'https://quantumx.foundation/images/qx-hack/qx-hack-poster.png';

export const metadata: Metadata = {
  title: qxHack.meta.seoTitle,
  description: qxHack.meta.description,
  keywords: [...qxHack.meta.keywords],
  category: 'Event',
  alternates: {
    canonical: '/qx-hack/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QuantumX Foundation',
    url: PAGE_URL,
    title: qxHack.meta.seoTitle,
    description: qxHack.meta.description,
    images: [
      {
        url: POSTER_URL,
        width: 800,
        height: 800,
        alt: 'Quantum for Social Good Hackathon - May 23, Startup Park Bengaluru',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Quantum_X_',
    creator: '@_Quantum_X_',
    title: qxHack.meta.seoTitle,
    description: qxHack.meta.description,
    images: [
      {
        url: POSTER_URL,
        alt: 'Quantum for Social Good Hackathon - May 23, Startup Park Bengaluru',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Event JSON-LD - unlocks Google rich results: the hackathon will appear
 * in search with date, venue, and register link directly in the SERP.
 * Schema: https://schema.org/Event
 */
const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hackathon',
  name: 'Quantum for Social Good Hackathon',
  description: qxHack.meta.description,
  image: [POSTER_URL],
  startDate: '2026-05-23T09:00:00+05:30',
  endDate: '2026-05-23T19:00:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'iQue Startup Park, Bengaluru',
    url: qxHack.venueUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
  },
  organizer: [
    {
      '@type': 'Organization',
      name: 'QuantumX Foundation',
      url: 'https://quantumx.foundation',
    },
    {
      '@type': 'Organization',
      name: 'iQue Startup Park',
    },
  ],
  offers: {
    '@type': 'Offer',
    name: 'General Entry',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-04-01T00:00:00+05:30',
    url: qxHack.applyUrl,
  },
  url: PAGE_URL,
  inLanguage: 'en',
  maximumAttendeeCapacity: 100,
  isAccessibleForFree: true,
  keywords: qxHack.meta.keywords.join(', '),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <QxHackPage />
    </>
  );
}
