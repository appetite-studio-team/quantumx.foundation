import type { Metadata } from 'next';
import { BlogPage } from './BlogPage';
import { JsonLd } from '@/components/blog/JsonLd';
import { getAllTags, getPostSummaries } from '@/lib/blog';
import { blogIndexMetadata, blogJsonLd, breadcrumbJsonLd } from '@/lib/blog-seo';

export const metadata: Metadata = blogIndexMetadata();

export default function Page() {
  const posts = getPostSummaries();
  const tags = getAllTags().map((tag) => tag.name);

  return (
    <>
      <JsonLd data={blogJsonLd(posts)} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Blog', path: '/blog/' }])} />
      <BlogPage posts={posts} tags={tags} />
    </>
  );
}
