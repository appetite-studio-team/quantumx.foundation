/**
 * Shared metadata and JSON-LD builders for /blog pages.
 */

import type { Metadata } from 'next';
import {
  getAuthor,
  postUrl,
  siteUrl,
  type BlogPost,
  type BlogPostSummary,
} from '@/lib/blog';

export const blogTitle = 'Quantum Computing & Post-Quantum Security Blog';
export const blogDescription =
  'Guides and research notes on quantum computing, post-quantum cryptography, quantum-safe security, and building a career in quantum, from QuantumX Foundation.';
export const blogRssPath = '/blog/rss.xml';

const defaultImage = '/images/og-cover.png';
const publisher = {
  '@type': 'Organization',
  name: 'QuantumX Foundation',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/images/App-Icon-Black.png`,
  },
};

const rssAlternate = {
  types: { 'application/rss+xml': [{ url: blogRssPath, title: 'QuantumX Foundation Blog' }] },
};

function imageFor(post: BlogPostSummary): string {
  return post.cover ?? defaultImage;
}

/** Only the default image has known dimensions; covers can be any size. */
function ogImageFor(post: BlogPostSummary) {
  return post.cover
    ? { url: post.cover, alt: post.title }
    : { url: defaultImage, width: 1200, height: 630, alt: post.title };
}

export function blogIndexMetadata(): Metadata {
  return {
    title: blogTitle,
    description: blogDescription,
    alternates: { canonical: '/blog/', ...rssAlternate },
    openGraph: {
      type: 'website',
      title: `${blogTitle} - QuantumX Foundation`,
      description: blogDescription,
      url: `${siteUrl}/blog/`,
      images: [{ url: defaultImage, width: 1200, height: 630, alt: 'QuantumX Foundation Blog' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blogTitle} - QuantumX Foundation`,
      description: blogDescription,
      images: [defaultImage],
    },
  };
}

export function postMetadata(post: BlogPost): Metadata {
  const author = getAuthor(post.authorId);
  const image = imageFor(post);

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: author.name, url: `${siteUrl}${author.href}` }],
    alternates: { canonical: `/blog/${post.slug}/`, ...rssAlternate },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: postUrl(post.slug),
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [`${siteUrl}${author.href}`],
      section: post.tags[0],
      tags: post.tags,
      images: [ogImageFor(post)],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

export function tagMetadata(
  tag: { name: string; slug: string },
  postCount: number,
  indexable: boolean
): Metadata {
  const title = `${tag.name} Articles`;
  const description = `${postCount} ${postCount === 1 ? 'article' : 'articles'} on ${tag.name.toLowerCase()} from the QuantumX Foundation blog.`;

  return {
    title,
    description,
    alternates: { canonical: `/blog/tag/${tag.slug}/`, ...rssAlternate },
    // Thin archives stay out of the index but still pass link equity to the
    // posts they list.
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      type: 'website',
      title: `${title} - QuantumX Foundation`,
      description,
      url: `${siteUrl}/blog/tag/${tag.slug}/`,
      images: [{ url: defaultImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - QuantumX Foundation`,
      description,
      images: [defaultImage],
    },
  };
}

function authorJsonLd(authorId: string) {
  const author = getAuthor(authorId);
  return {
    '@type': author.type,
    name: author.name,
    url: `${siteUrl}${author.href}`,
    ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
    ...(author.sameAs ? { sameAs: author.sameAs } : {}),
  };
}

export function postJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: postUrl(post.slug),
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl(post.slug) },
    datePublished: post.date,
    dateModified: post.updated,
    author: authorJsonLd(post.authorId),
    publisher,
    image: `${siteUrl}${imageFor(post)}`,
    keywords: post.tags.join(', '),
    articleSection: post.tags[0],
    wordCount: post.wordCount,
    timeRequired: `PT${post.readingMinutes}M`,
    inLanguage: 'en',
    isPartOf: { '@type': 'Blog', '@id': `${siteUrl}/blog/`, name: 'QuantumX Foundation Blog' },
  };
}

export function blogJsonLd(posts: BlogPostSummary[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteUrl}/blog/`,
    name: 'QuantumX Foundation Blog',
    description: blogDescription,
    url: `${siteUrl}/blog/`,
    publisher,
    inLanguage: 'en',
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: postUrl(post.slug),
      datePublished: post.date,
      dateModified: post.updated,
      author: authorJsonLd(post.authorId),
    })),
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path}`,
    })),
  };
}
