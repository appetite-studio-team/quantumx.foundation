import type { Metadata } from 'next';
import { PrivacyPage } from './PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How QuantumX Foundation collects, uses, and protects your information.',
  alternates: {
    canonical: '/privacy/',
  },
  openGraph: {
    title: 'Privacy Policy - QuantumX Foundation',
    description:
      'How QuantumX Foundation collects, uses, and protects your information.',
    url: 'https://quantumx.foundation/privacy/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - QuantumX Foundation',
    description:
      'How QuantumX Foundation collects, uses, and protects your information.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <PrivacyPage />;
}
