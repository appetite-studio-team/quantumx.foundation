import type { Metadata } from 'next';
import { CompanyPage } from './CompanyPage';
import { company } from '@/content/company';
import { site } from '@/content/site';
import { founderUrl } from '@/lib/founder-seo';

const baseUrl = 'https://quantumx.foundation';
const pageUrl = `${baseUrl}/company/`;
const title = 'The Company: About QuantumX, Founders & Leadership';

export const metadata: Metadata = {
  title: 'The Company',
  description: company.metaDescription,
  keywords: [
    'QuantumX Foundation',
    'about QuantumX',
    'QuantumX founders',
    'QuantumX leadership',
    'Ajmal Ibn Mohammed Althaf',
    'Muhammed Ameen Sulaiman',
    'quantum computing company India',
    'quantum computing startup Bangalore',
    'post-quantum cryptography company',
  ],
  alternates: {
    canonical: '/company/',
  },
  openGraph: {
    type: 'website',
    title,
    description: company.metaDescription,
    url: pageUrl,
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'QuantumX Foundation: the company and its founders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: company.metaDescription,
    images: ['/images/og-cover.png'],
  },
};

const people = company.leadership.members.map((founder) => ({
  '@type': 'Person',
  '@id': `${founderUrl(founder)}#person`,
  name: founder.name,
  jobTitle: founder.role,
  url: founderUrl(founder),
  image: `${baseUrl}${founder.photo}`,
  ...(founder.linkedin ? { sameAs: [founder.linkedin] } : {}),
}));

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description: company.metaDescription,
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', name: site.name, url: baseUrl },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: site.name,
    url: baseUrl,
    logo: `${baseUrl}/images/App-Icon-Black.png`,
    description: company.intro,
    email: site.email,
    ...(site.address
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: '3rd Floor, Startup Park, Opposite Police Station, Singasandra',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            postalCode: '560068',
            addressCountry: 'IN',
          },
        }
      : {}),
    founder: people,
    employee: people,
    knowsAbout: [
      'Quantum computing',
      'Post-quantum cryptography',
      'Quantum education',
      'Photonic chip design',
    ],
    sameAs: site.externalLinks.map((link) => link.href),
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'The Company', item: pageUrl },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CompanyPage />
    </>
  );
}
