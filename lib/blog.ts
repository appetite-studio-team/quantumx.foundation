/**
 * Blog content loader.
 *
 * Posts live as Markdown files in content/blog/<slug>.md, with YAML
 * frontmatter for metadata. Everything here runs at build time only (the site
 * is a static export), so reading from disk is fine.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import { ajmal, ameen, type Founder } from '@/content/founders';
import { slugify, tagSlug } from '@/lib/blog-utils';

export { slugify, tagSlug, formatDate } from '@/lib/blog-utils';

export const siteUrl = 'https://quantumx.foundation';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');
const WORDS_PER_MINUTE = 220;

export type BlogAuthor = {
  id: string;
  name: string;
  /** schema.org type used in BlogPosting JSON-LD. */
  type: 'Person' | 'Organization';
  /** On-site profile page, relative. */
  href: string;
  bio: string;
  jobTitle?: string;
  sameAs?: string[];
};

export type TocItem = { id: string; text: string; depth: 2 | 3 };

/** Everything a card or list needs. Plain data, safe to pass to client components. */
export type BlogPostSummary = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** ISO date, YYYY-MM-DD. Falls back to `date`. */
  updated: string;
  tags: string[];
  authorId: string;
  readingMinutes: number;
  wordCount: number;
  cover?: string;
  /** Where the post was first published, e.g. a LinkedIn article. */
  source?: string;
};

export type BlogPost = BlogPostSummary & {
  html: string;
  toc: TocItem[];
};

const organizationAuthor: BlogAuthor = {
  id: 'quantumx',
  name: 'QuantumX Foundation',
  type: 'Organization',
  href: '/',
  bio: 'QuantumX Foundation is a deep-tech initiative building an open, accessible, and reliable quantum future, through research, open tooling, and community education.',
};

function founderAuthor(founder: Founder): BlogAuthor {
  return {
    id: founder.slug,
    name: founder.name,
    type: 'Person',
    href: `/founder/${founder.slug}/`,
    bio: founder.metaDescription,
    jobTitle: founder.role,
    ...(founder.linkedin ? { sameAs: [founder.linkedin] } : {}),
  };
}

const authors: Record<string, BlogAuthor> = {
  quantumx: organizationAuthor,
  ajmal: founderAuthor(ajmal),
  ameen: founderAuthor(ameen),
};

export function getAuthor(id: string): BlogAuthor {
  const author = authors[id];
  if (!author) {
    throw new Error(`Unknown blog author "${id}". Add it to lib/blog.ts.`);
  }
  return author;
}

/** gray-matter turns unquoted YAML dates into Date objects; normalise both forms. */
function toIsoDate(value: unknown, field: string, file: string): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  throw new Error(`${file}: "${field}" must be a YYYY-MM-DD date.`);
}

function renderMarkdown(markdown: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const seen = new Map<string, number>();
  const marked = new Marked({ gfm: true });

  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        const base = slugify(inner) || 'section';
        const count = seen.get(base) ?? 0;
        seen.set(base, count + 1);
        const id = count === 0 ? base : `${base}-${count}`;
        if (depth === 2 || depth === 3) {
          toc.push({ id, text: inner.replace(/<[^>]+>/g, ''), depth });
        }
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens);
        const titleAttr = title ? ` title="${title}"` : '';
        const external = /^https?:\/\//.test(href) && !href.startsWith(siteUrl);
        const rel = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${href}"${titleAttr}${rel}>${inner}</a>`;
      },
    },
  });

  const html = marked.parse(markdown, { async: false }) as string;
  return { html, toc };
}

function readPost(file: string): BlogPost {
  const slug = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
  const { data, content } = matter(raw);

  for (const field of ['title', 'description', 'date', 'author'] as const) {
    if (!data[field]) throw new Error(`content/blog/${file}: missing "${field}".`);
  }

  const date = toIsoDate(data.date, 'date', file);
  const updated = data.updated ? toIsoDate(data.updated, 'updated', file) : date;
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const { html, toc } = renderMarkdown(content);

  // Fail the build on an unknown author rather than shipping a broken byline.
  getAuthor(data.author);

  return {
    slug,
    title: data.title,
    description: data.description,
    date,
    updated,
    tags: Array.isArray(data.tags) ? data.tags : [],
    authorId: data.author,
    readingMinutes: Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE)),
    wordCount,
    ...(data.cover ? { cover: data.cover } : {}),
    ...(data.source ? { source: data.source } : {}),
    html,
    toc,
  };
}

let cache: BlogPost[] | null = null;

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  if (!cache) {
    cache = fs
      .readdirSync(POSTS_DIR)
      .filter((file) => file.endsWith('.md'))
      .map(readPost)
      .sort((a, b) => b.date.localeCompare(a.date));
  }
  return cache;
}

export function toSummary(post: BlogPost): BlogPostSummary {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { html, toc, ...summary } = post;
  return summary;
}

export function getPostSummaries(): BlogPostSummary[] {
  return getAllPosts().map(toSummary);
}

export function latestPosts(n = 3): BlogPostSummary[] {
  return getPostSummaries().slice(0, n);
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

/** Every tag in use, with its URL slug and post count, most used first. */
export function getAllTags(): { name: string; slug: string; count: number }[] {
  const counts = new Map<string, { name: string; count: number }>();
  for (const post of getAllPosts()) {
    for (const name of post.tags) {
      const slug = tagSlug(name);
      const entry = counts.get(slug);
      counts.set(slug, { name: entry?.name ?? name, count: (entry?.count ?? 0) + 1 });
    }
  }
  return Array.from(counts.entries())
    .map(([slug, { name, count }]) => ({ name, slug, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getPostsByTag(slug: string): BlogPostSummary[] {
  return getPostSummaries().filter((post) => post.tags.some((tag) => tagSlug(tag) === slug));
}

/**
 * A tag archive is only worth indexing once it groups several posts. A single
 * post tag page is thin, near-duplicate content, so it stays noindex until then.
 */
export const MIN_POSTS_TO_INDEX_TAG = 2;

/** Posts sharing the most tags with `post`, then the newest, excluding itself. */
export function relatedPosts(post: BlogPostSummary, n = 3): BlogPostSummary[] {
  const tags = new Set(post.tags.map(tagSlug));
  return getPostSummaries()
    .filter((other) => other.slug !== post.slug)
    .map((other) => ({
      other,
      shared: other.tags.filter((tag) => tags.has(tagSlug(tag))).length,
    }))
    .sort((a, b) => b.shared - a.shared || b.other.date.localeCompare(a.other.date))
    .slice(0, n)
    .map(({ other }) => other);
}

export function postUrl(slug: string): string {
  return `${siteUrl}/blog/${slug}/`;
}
