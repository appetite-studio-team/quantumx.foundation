import type { Metadata } from 'next';
import { TermsPage } from './TermsPage';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms that govern your use of QuantumX Foundation’s website and services.',
  alternates: {
    canonical: '/terms/',
  },
  openGraph: {
    title: 'Terms of Use - QuantumX Foundation',
    description:
      'The terms that govern your use of QuantumX Foundation’s website and services.',
    url: 'https://quantumx.foundation/terms/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Terms of Use - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use - QuantumX Foundation',
    description:
      'The terms that govern your use of QuantumX Foundation’s website and services.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <TermsPage />;
}
