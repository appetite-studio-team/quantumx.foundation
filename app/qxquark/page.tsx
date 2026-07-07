import type { Metadata } from 'next';
import { QxQuarkPage } from './QxQuarkPage';

const title = 'QxQuark - Embeddings for Quantum Circuits';
const description =
  'A lightweight transformer that converts quantum circuits into semantic vector representations, enabling search, deduplication, clustering, and fast equivalence filtering.';

export const metadata: Metadata = {
  title: 'QxQuark',
  description,
  alternates: {
    canonical: '/qxquark/',
  },
  openGraph: {
    title,
    description,
    url: 'https://quantumx.foundation/qxquark/',
    images: ['/images/og-cover.png'],
  },
  twitter: {
    title,
    description,
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <QxQuarkPage />;
}
