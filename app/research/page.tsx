import type { Metadata } from 'next';
import { ResearchPage } from './ResearchPage';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Peer-reviewed work and technical publications from QuantumX Foundation on quantum computing, communication, and the post-quantum era.',
  alternates: {
    canonical: '/research/',
  },
  openGraph: {
    title: 'Research - QuantumX Foundation',
    description:
      'Peer-reviewed work and technical publications from QuantumX Foundation on quantum computing, communication, and the post-quantum era.',
    url: 'https://quantumx.foundation/research/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Research - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research - QuantumX Foundation',
    description:
      'Peer-reviewed work and technical publications from QuantumX Foundation on quantum computing, communication, and the post-quantum era.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <ResearchPage />;
}
