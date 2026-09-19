import type { Metadata } from 'next';
import { CareersPage } from './CareersPage';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Work on post-quantum cryptography, quantum photonics, and open quantum tooling at QuantumX in Bengaluru.',
  alternates: {
    canonical: '/careers/',
  },
  openGraph: {
    title: 'Careers - QuantumX Foundation',
    description:
      'Work on post-quantum cryptography, quantum photonics, and open quantum tooling at QuantumX in Bengaluru.',
    url: 'https://quantumx.foundation/careers/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Careers - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - QuantumX Foundation',
    description:
      'Work on post-quantum cryptography, quantum photonics, and open quantum tooling at QuantumX in Bengaluru.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <CareersPage />;
}
