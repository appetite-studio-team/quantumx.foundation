import type { Metadata } from 'next';
import { sortedNewsItems } from '@/content/newsroom';
import { NewsroomPage } from './NewsroomPage';

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'Announcements, milestones, and stories from QuantumX Foundation - building the foundations of the post-quantum era.',
  alternates: {
    canonical: '/newsroom/',
  },
  openGraph: {
    title: 'Newsroom - QuantumX Foundation',
    description:
      'Announcements, milestones, and stories from QuantumX Foundation.',
    url: 'https://quantumx.foundation/newsroom/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Newsroom - QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsroom - QuantumX Foundation',
    description:
      'Announcements, milestones, and stories from QuantumX Foundation.',
    images: ['/images/og-cover.png'],
  },
};

const newsArticleListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: sortedNewsItems().map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'NewsArticle',
      headline: item.title,
      description: item.summary,
      datePublished: item.date,
      image: [`https://quantumx.foundation${item.image}`],
      url: item.href,
      publisher: {
        '@type': 'Organization',
        name: 'QuantumX Foundation',
        logo: {
          '@type': 'ImageObject',
          url: 'https://quantumx.foundation/images/App-Icon-Black.png',
        },
      },
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleListJsonLd) }}
      />
      <NewsroomPage />
    </>
  );
}
