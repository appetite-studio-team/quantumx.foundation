import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/blog/JsonLd';
import { PostGrid } from '@/components/blog/PostGrid';
import { TagList } from '@/components/blog/TagList';
import { MIN_POSTS_TO_INDEX_TAG, getAllTags, getPostsByTag } from '@/lib/blog';
import { breadcrumbJsonLd, tagMetadata } from '@/lib/blog-seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tag.slug }));
}

function findTag(slug: string) {
  return getAllTags().find((tag) => tag.slug === slug);
}

export function generateMetadata({ params }: { params: { tag: string } }): Metadata {
  const tag = findTag(params.tag);
  if (!tag) return {};
  return tagMetadata(tag, tag.count, tag.count >= MIN_POSTS_TO_INDEX_TAG);
}

export default function Page({ params }: { params: { tag: string } }) {
  const tag = findTag(params.tag);
  if (!tag) notFound();

  const posts = getPostsByTag(tag.slug);
  const allTags = getAllTags().map((t) => t.name);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Blog', path: '/blog/' },
          { name: tag.name, path: `/blog/tag/${tag.slug}/` },
        ])}
      />

      <main className="min-h-screen bg-background text-text-primary">
        <section className="mx-auto max-w-7xl px-6 pt-32 pb-block md:pt-40 md:px-10">
          <Link
            href="/blog/"
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline"
          >
            ← The QuantumX Blog
          </Link>
          <h1 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            {tag.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} on{' '}
            {tag.name.toLowerCase()} from QuantumX Foundation.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-block md:px-10">
          <TagList tags={allTags} activeSlug={tag.slug} label="Browse by topic" />
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-section md:px-10" aria-label={`${tag.name} articles`}>
          <PostGrid posts={posts} />
        </section>
      </main>
    </>
  );
}
