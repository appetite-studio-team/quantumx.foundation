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
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Contact - QuantumX Foundation',
    description:
      'Get in touch with QuantumX Foundation - partnerships, press, careers, and general enquiries.',
    images: ['/images/App-Icon-Black.png'],
  },
};

export default function Page() {
  return <ContactPage />;
}
