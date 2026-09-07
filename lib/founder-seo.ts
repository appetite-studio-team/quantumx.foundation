/**
 * Shared metadata and JSON-LD builders for /founder/<slug> pages.
 */

import type { Metadata } from 'next';
import type { Founder } from '@/content/founders';

const baseUrl = 'https://quantumx.foundation';

export function founderUrl(founder: Founder): string {
  return `${baseUrl}/founder/${founder.slug}/`;
}

export function founderMetadata(founder: Founder): Metadata {
  const title = `${founder.name} - ${founder.role}`;
  const description = founder.metaDescription;

  return {
    title: founder.name,
    description,
    alternates: {
      canonical: `/founder/${founder.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: founderUrl(founder),
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
}

export function founderJsonLd(founder: Founder) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: founder.name,
    url: founderUrl(founder),
    image: `${baseUrl}${founder.photo}`,
    jobTitle: founder.role,
    email: founder.email,
    description: founder.metaDescription,
    worksFor: {
      '@type': 'Organization',
      name: 'QuantumX Foundation',
      url: baseUrl,
    },
    ...(founder.alumniOf
      ? { alumniOf: { '@type': 'CollegeOrUniversity', name: founder.alumniOf } }
      : {}),
    knowsAbout: founder.focusAreas,
    ...(founder.linkedin ? { sameAs: [founder.linkedin] } : {}),
  };
}

export function founderBreadcrumbJsonLd(founder: Founder) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: founder.name,
        item: founderUrl(founder),
      },
    ],
  };
}
