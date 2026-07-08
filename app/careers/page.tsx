import type { Metadata } from 'next';
import { CareersPage } from './CareersPage';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join QuantumX Foundation - explore open roles and help build the foundations of the post-quantum era.',
  alternates: {
    canonical: '/careers/',
  },
  openGraph: {
    title: 'Careers - QuantumX Foundation',
    description:
      'Join QuantumX Foundation - explore open roles and help build the foundations of the post-quantum era.',
    url: 'https://quantumx.foundation/careers/',
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Careers - QuantumX Foundation',
    description:
      'Join QuantumX Foundation - explore open roles and help build the foundations of the post-quantum era.',
    images: ['/images/App-Icon-Black.png'],
  },
};

export default function Page() {
  return <CareersPage />;
}
