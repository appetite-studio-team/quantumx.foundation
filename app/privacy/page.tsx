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
    images: ['/images/og-cover.png'],
  },
  twitter: {
    title: 'Privacy Policy - QuantumX Foundation',
    description:
      'How QuantumX Foundation collects, uses, and protects your information.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <PrivacyPage />;
}
