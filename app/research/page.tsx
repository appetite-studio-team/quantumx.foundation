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
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Research - QuantumX Foundation',
    description:
      'Peer-reviewed work and technical publications from QuantumX Foundation on quantum computing, communication, and the post-quantum era.',
    images: ['/images/App-Icon-Black.png'],
  },
};

export default function Page() {
  return <ResearchPage />;
}
