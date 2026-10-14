import Link from 'next/link';
import Image from 'next/image';
import type { Founder } from '@/content/founders';
import { vcardPath, phoneDigits } from '@/lib/vcard';
import { LinkedInIcon, XIcon } from '@/components/icons';

const actionClass =
  'inline-flex items-center justify-center gap-2 border border-gray-secondary/30 px-3 py-3 text-xs uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

/** One director's contact block on /bc and /bc/<slug>. */
export function DirectorCard({ founder, priority = false }: { founder: Founder; priority?: boolean }) {
  const { name, title, email } = founder.card;
  const phone = phoneDigits(founder.card.phone);

  return (
    <article className="flex flex-col border border-gray-secondary/20">
      <div className="flex items-center gap-4 p-5 md:p-6">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border border-gray-secondary/20 bg-gray-secondary/10">
          <Image
            src={founder.photo}
            alt={founder.photoAlt}
            fill
            className="object-cover object-center"
            sizes="64px"
            priority={priority}
          />
        </div>
        <div className="min-w-0">
          <h2 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight-heading text-text-primary">
            {name}
          </h2>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-accent">{title}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t border-gray-secondary/20 p-5 md:p-6">
        <a
          href={vcardPath(founder)}
          download={`${founder.slug}.vcf`}
          className="inline-flex items-center justify-center border border-accent/60 bg-accent/10 px-4 py-3.5 text-sm uppercase tracking-[0.2em] text-text-primary transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Save contact
        </a>

        <div className="grid grid-cols-2 gap-2">
          <a href={`mailto:${email}`} className={actionClass}>
            Email
          </a>
          <a href={`tel:${phone}`} className={actionClass}>
            Call
          </a>
          <a
            href={`https://wa.me/${phone.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            WhatsApp
          </a>
          {founder.linkedin ? (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className={actionClass}
            >
              <LinkedInIcon className="h-4 w-4 shrink-0" />
              LinkedIn
            </a>
          ) : null}
          {founder.x ? (
            <a
              href={founder.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on X`}
              className={actionClass}
            >
              <XIcon className="h-4 w-4 shrink-0" />X
            </a>
          ) : null}
        </div>

        <p className="mt-1 truncate text-sm text-gray-secondary">{email}</p>
        <p className="text-sm text-gray-secondary">{founder.card.phone}</p>

        <Link
          href={`/founder/${founder.slug}`}
          className="mt-auto pt-2 text-xs uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
        >
          Full profile →
        </Link>
      </div>
    </article>
  );
}
