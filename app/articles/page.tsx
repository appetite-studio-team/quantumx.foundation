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
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Articles - QuantumX Foundation',
    description:
      'Insights, research, and perspectives from QuantumX Foundation on quantum computing and the post-quantum era.',
    images: ['/images/App-Icon-Black.png'],
  },
};

export default function Page() {
  return <ArticlesPage />;
}
