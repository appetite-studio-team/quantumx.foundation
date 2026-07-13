import type { Metadata } from 'next';
import { EventsPage } from './EventsPage';

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Hackathons, workshops, and gatherings from QuantumX Foundation - explore our upcoming and past events building the foundations of the post-quantum era.',
  alternates: {
    canonical: '/community/',
  },
  openGraph: {
    title: 'Community - QuantumX Foundation',
    description:
      'Hackathons, workshops, and gatherings from QuantumX Foundation - explore our upcoming and past events.',
    url: 'https://quantumx.foundation/community/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Community - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community - QuantumX Foundation',
    description:
      'Hackathons, workshops, and gatherings from QuantumX Foundation - explore our upcoming and past events.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <EventsPage />;
}
