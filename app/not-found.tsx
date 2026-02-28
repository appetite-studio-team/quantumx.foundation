import Link from 'next/link';
import { Random404Caption } from '@/components/404-random-caption';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-16 text-center">
      {/* Grid accent matching the rest of the site */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(var(--color-text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg">
        {/* Meme already shows 404 – no duplicate label */}
        <figure className="w-full rounded overflow-hidden border bg-[var(--color-muted-bg)]" style={{ borderColor: 'var(--color-muted-border)' }}>
          <img
            src="https://http.cat/404"
            alt="404 cat meme - page not found"
            className="w-full h-auto object-cover block"
            width={750}
            height={600}
          />
          <figcaption className="text-gray-secondary text-xs sm:text-sm py-2 px-3">
            <Random404Caption />
          </figcaption>
        </figure>

        {/* White sharp-edge button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center font-semibold font-[var(--font-heading)] px-8 py-4 rounded-none border-0 cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-ring)] focus:ring-offset-2 no-underline"
          style={{
            borderRadius: 0,
            backgroundColor: 'var(--color-cta-bg)',
            color: 'var(--color-cta-text)',
            ['--tw-ring-offset-color' as string]: 'var(--color-cta-ring-offset)',
          }}
        >
          Go back to site
        </Link>
      </div>
    </main>
  );
}
