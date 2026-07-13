import type { Metadata } from 'next';
import { ContactPage } from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with QuantumX Foundation - partnerships, press, careers, and general enquiries as we build the foundations of the post-quantum era.',
  alternates: {
    canonical: '/contact/',
  },
  openGraph: {
    title: 'Contact - QuantumX Foundation',
    description:
      'Get in touch with QuantumX Foundation - partnerships, press, careers, and general enquiries.',
    url: 'https://quantumx.foundation/contact/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Contact - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - QuantumX Foundation',
    description:
      'Get in touch with QuantumX Foundation - partnerships, press, careers, and general enquiries.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <ContactPage />;
}
