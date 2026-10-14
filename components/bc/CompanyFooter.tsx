import Link from 'next/link';
import { site } from '@/content/site';

const links = [
  { label: 'Website', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Newsroom', href: '/newsroom' },
  { label: 'Careers', href: '/careers' },
];

/** Office address and site links shared by the /bc pages. */
export function CompanyFooter() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
      <div className="grid gap-10 border-t border-gray-secondary/20 pt-10 md:grid-cols-2">
        {site.address ? (
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Office</p>
            <address className="mt-3 max-w-md not-italic text-base leading-relaxed text-text-primary">
              {site.address}
            </address>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
            >
              View on map →
            </a>
          </div>
        ) : null}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-3">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm uppercase tracking-[0.2em] text-text-primary hover:text-accent"
                >
                  {label} →
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-secondary">
            General enquiries:{' '}
            <a
              href={`mailto:${site.email}`}
              className="text-text-primary underline underline-offset-4 hover:text-accent"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
