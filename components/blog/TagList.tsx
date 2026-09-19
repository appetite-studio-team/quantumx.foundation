import Link from 'next/link';
import { tagSlug } from '@/lib/blog-utils';

export function TagList({
  tags,
  activeSlug,
  label = 'Topics',
  className = '',
}: {
  tags: string[];
  activeSlug?: string;
  label?: string;
  className?: string;
}) {
  if (tags.length === 0) return null;

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const slug = tagSlug(tag);
          const active = slug === activeSlug;
          return (
            <li key={slug}>
              <Link
                href={`/blog/tag/${slug}/`}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex border px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  active
                    ? 'border-accent bg-accent text-background'
                    : 'border-gray-secondary/30 text-text-primary hover:border-accent hover:text-accent'
                }`}
              >
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
