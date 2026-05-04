import type { Metadata } from 'next';
import { qxHack } from '@/content/qx-hack';
import { ProblemStatementsPage } from './ProblemStatementsPage';

const PAGE_URL = 'https://quantumx.foundation/qx-hack/problem-statements/';
const POSTER_URL = 'https://quantumx.foundation/images/qx-hack/qx-hack-poster.png';

const title = `Problem Statements — ${qxHack.meta.title}`;
const description = `19 problem statements across beginner, intermediate, and advanced tiers. Aligned with UN SDGs — healthcare, climate, security, social impact. Pick your track for the Quantum for Social Good Hackathon.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    ...qxHack.meta.keywords,
    'hackathon problem statements',
    'quantum problem statements',
    'UN SDG problems',
    'quantum use cases',
    'quantum projects ideas',
  ],
  alternates: {
    canonical: '/qx-hack/problem-statements/',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'QuantumX Foundation',
    url: PAGE_URL,
    title,
    description,
    images: [
      {
        url: POSTER_URL,
        width: 800,
        height: 800,
        alt: 'Quantum for Social Good Hackathon — Problem Statements',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Quantum_X_',
    creator: '@_Quantum_X_',
    title,
    description,
    images: [{ url: POSTER_URL, alt: 'Quantum for Social Good Hackathon — Problem Statements' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function Page() {
  return <ProblemStatementsPage />;
}
