import type { Metadata } from 'next';
import { AjmalPage } from './AjmalPage';
import { ajmal } from '@/content/founders';

const title = `${ajmal.name} - ${ajmal.role}`;
const description =
  'Ajmal Ibn Mohammed Althaf is Founder, CEO and Scientific Lead at QuantumX, advancing quantum computing innovation alongside doctoral research in Molecular Quantum Mechanics.';

export const metadata: Metadata = {
  title: ajmal.name,
  description,
  alternates: {
    canonical: '/founder/ajmal/',
  },
  openGraph: {
    title,
    description,
    url: 'https://quantumx.foundation/founder/ajmal/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og-cover.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: ajmal.name,
  url: 'https://quantumx.foundation/founder/ajmal/',
  image: `https://quantumx.foundation${ajmal.photo}`,
  jobTitle: ajmal.role,
  email: ajmal.email,
  description,
  worksFor: {
    '@type': 'Organization',
    name: 'QuantumX Foundation',
    url: 'https://quantumx.foundation',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'VIT Vellore',
  },
  knowsAbout: ajmal.focusAreas,
  sameAs: [ajmal.linkedin],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quantumx.foundation/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: ajmal.name,
      item: 'https://quantumx.foundation/founder/ajmal/',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AjmalPage />
    </>
  );
}
