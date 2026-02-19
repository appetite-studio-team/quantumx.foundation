import type { Metadata } from 'next';
import Link from 'next/link';
import { RandomComingSoonCaption } from '@/components/coming-soon-caption';

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: "We're heavily working on this. Stay tuned.",
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-16 text-center">
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
        <figure className="w-full rounded overflow-hidden border border-white/10 bg-white/5">
          <img
            src="https://http.cat/102"
            alt="Processing cat meme - coming soon"
            className="w-full h-auto object-cover block"
            width={750}
            height={600}
          />
          <figcaption className="text-color-gray-secondary text-xs sm:text-sm py-2 px-3">
            <RandomComingSoonCaption />
          </figcaption>
        </figure>

        <p className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-text-primary">
          We're heavily working on this.
        </p>
        <p className="text-sm text-gray-secondary max-w-sm">
          This one's cooking. We'll have something exciting here soon.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-white text-[#0a0a0a] font-semibold font-[var(--font-heading)] px-8 py-4 rounded-none border-0 cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a0a0a] no-underline"
          style={{ borderRadius: 0 }}
        >
          Go back to site
        </Link>
      </div>
    </main>
  );
}
