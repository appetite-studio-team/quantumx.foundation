import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/blog/JsonLd';
import { PostGrid } from '@/components/blog/PostGrid';
import { TagList } from '@/components/blog/TagList';
import {
  formatDate,
  getAllPosts,
  getAuthor,
  getPost,
  relatedPosts,
  type TocItem,
} from '@/lib/blog';
import { breadcrumbJsonLd, postJsonLd, postMetadata } from '@/lib/blog-seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  return post ? postMetadata(post) : {};
}

function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <ol className="space-y-3 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.depth === 3 ? 'pl-4' : undefined}>
          <a
            href={`#${item.id}`}
            className="text-gray-secondary transition-colors hover:text-accent"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const author = getAuthor(post.authorId);
  const related = relatedPosts(post);
  const showToc = post.toc.length >= 2;
  const wasUpdated = post.updated !== post.date;

  return (
    <>
      <JsonLd data={postJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Blog', path: '/blog/' },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />

      <main className="min-h-screen bg-background text-text-primary">
        <article className="mx-auto max-w-7xl px-6 pt-32 pb-section md:pt-40 md:px-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-secondary">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog/" className="hover:text-accent">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="max-w-[16rem] truncate text-text-primary sm:max-w-md">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="max-w-3xl">
            <TagList tags={post.tags} label="Article topics" />
            <h1 className="mt-6 font-heading text-clamp-section font-bold uppercase tracking-tight-heading text-text-primary">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-secondary md:text-xl">
              {post.description}
            </p>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-gray-secondary/20 pt-6 text-sm text-gray-secondary">
              <span>
                By{' '}
                <Link
                  href={author.href}
                  rel="author"
                  className="font-medium text-text-primary underline underline-offset-4 hover:text-accent"
                >
                  {author.name}
                </Link>
              </span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {wasUpdated && (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </span>
                </>
              )}
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
              {post.source && (
                <>
                  <span aria-hidden>·</span>
                  <a
                    href={post.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    Originally published on LinkedIn
                  </a>
                </>
              )}
            </p>
          </header>

          {post.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.cover}
              alt=""
              width={1280}
              height={720}
              className="mt-12 aspect-video w-full max-w-5xl border border-gray-secondary/20 object-cover"
            />
          )}

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,48rem)_16rem] lg:justify-between">
            <div>
              {showToc && (
                <details className="mb-10 border border-gray-secondary/20 p-5 lg:hidden">
                  <summary className="cursor-pointer font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-primary">
                    On this page
                  </summary>
                  <div className="mt-4">
                    <TableOfContents items={post.toc} />
                  </div>
                </details>
              )}

              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

              {/* Author */}
              <aside
                aria-label="About the author"
                className="mt-16 border-t border-gray-secondary/20 pt-10"
              >
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Written by
                </p>
                <p className="mt-3 font-heading text-lg font-bold uppercase tracking-tight-heading">
                  <Link href={author.href} rel="author" className="hover:text-accent">
                    {author.name}
                  </Link>
                </p>
                {author.jobTitle && (
                  <p className="mt-1 text-sm text-gray-secondary">{author.jobTitle}</p>
                )}
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-secondary">
                  {author.bio}
                </p>
              </aside>

              {/* Next step */}
              <aside
                aria-label="Keep learning"
                className="mt-12 flex flex-col gap-6 border border-gray-secondary/20 bg-gray-secondary/5 p-8 md:flex-row md:items-center md:justify-between"
              >
                <div className="max-w-md">
                  <p className="font-heading text-lg font-bold uppercase tracking-tight-heading">
                    Learn quantum with people, not alone
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-secondary">
                    Structured courses at QuantumX School, and meetups and workshops across India.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <a
                    href="https://quantumx.school/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-background transition-transform hover:translate-x-1"
                  >
                    QuantumX School →
                  </a>
                  <Link
                    href="/community/"
                    className="inline-flex items-center gap-2 border border-gray-secondary/30 px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Community
                  </Link>
                </div>
              </aside>
            </div>

            {showToc && (
              <aside aria-label="On this page" className="hidden lg:block">
                <div className="sticky top-36">
                  <p className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-primary">
                    On this page
                  </p>
                  <TableOfContents items={post.toc} />
                </div>
              </aside>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <section
            aria-labelledby="related-heading"
            className="mx-auto max-w-7xl border-t border-gray-secondary/20 px-6 pt-section pb-section md:px-10"
          >
            <h2
              id="related-heading"
              className="mb-10 font-heading text-clamp-section font-bold uppercase tracking-tight-heading"
            >
              Keep reading
            </h2>
            <PostGrid posts={related} headingLevel="h3" />
          </section>
        )}

        <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
          <Link
            href="/blog/"
            className="text-sm uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
          >
            ← All articles
          </Link>
        </section>
      </main>
    </>
  );
}
