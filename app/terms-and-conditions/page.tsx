import type { Metadata } from 'next';
import { TermsAndConditionsPage } from './TermsAndConditionsPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The agreement governing your participation in QuantumX Foundation’s programs, events, and services.',
  alternates: {
    canonical: '/terms-and-conditions/',
  },
  openGraph: {
    title: 'Terms & Conditions - QuantumX Foundation',
    description:
      'The agreement governing your participation in QuantumX Foundation’s programs, events, and services.',
    url: 'https://quantumx.foundation/terms-and-conditions/',
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Terms & Conditions - QuantumX Foundation',
    description:
      'The agreement governing your participation in QuantumX Foundation’s programs, events, and services.',
    images: ['/images/App-Icon-Black.png'],
  },
};

export default function Page() {
  return <TermsAndConditionsPage />;
}
