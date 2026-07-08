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
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Terms of Use - QuantumX Foundation',
    description:
      'The terms that govern your use of QuantumX Foundation’s website and services.',
    images: ['/images/App-Icon-Black.png'],
  },
};

export default function Page() {
  return <TermsPage />;
}
