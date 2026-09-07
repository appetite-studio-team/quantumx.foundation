import type { Metadata } from 'next';
import { SpeakersPage } from './SpeakersPage';

export const metadata: Metadata = {
  title: 'Speakers',
  description:
    'Researchers, founders, and engineers who have spoken at QuantumX Foundation events, workshops, and community sessions.',
  alternates: {
    canonical: '/speakers/',
  },
  openGraph: {
    title: 'Speakers - QuantumX Foundation',
    description:
      'Researchers, founders, and engineers who have spoken at QuantumX Foundation events, workshops, and community sessions.',
    url: 'https://quantumx.foundation/speakers/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Speakers - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speakers - QuantumX Foundation',
    description:
      'Researchers, founders, and engineers who have spoken at QuantumX Foundation events, workshops, and community sessions.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <SpeakersPage />;
}
