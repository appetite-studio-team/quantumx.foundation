import type { Metadata } from 'next';
import { QxAcePage } from './QxAcePage';

const title = 'QxACE - Adaptive Cryptography Engine';
const description =
  'The Adaptive Cryptography Engine (ACE) is a context-aware, risk-adaptive orchestration framework that scores quantum exposure and selects post-quantum encryption strategies for every secret in real time.';

export const metadata: Metadata = {
  title: 'QxACE',
  description,
  alternates: {
    canonical: '/projects/qxace/',
  },
  openGraph: {
    title,
    description,
    url: 'https://quantumx.foundation/projects/qxace/',
    images: ['/images/og-cover.png'],
  },
  twitter: {
    title,
    description,
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <QxAcePage />;
}
