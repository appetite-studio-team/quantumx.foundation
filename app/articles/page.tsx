import type { Metadata } from 'next';
import { ArticlesPage } from './ArticlesPage';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Insights, research, and perspectives from QuantumX Foundation on quantum computing and the post-quantum era.',
  alternates: {
    canonical: '/articles/',
  },
  openGraph: {
    title: 'Articles - QuantumX Foundation',
    description:
      'Insights, research, and perspectives from QuantumX Foundation on quantum computing and the post-quantum era.',
    url: 'https://quantumx.foundation/articles/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Articles - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles - QuantumX Foundation',
    description:
      'Insights, research, and perspectives from QuantumX Foundation on quantum computing and the post-quantum era.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <ArticlesPage />;
}
