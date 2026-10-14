import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { founderList } from '@/content/founders';
import { DirectorCard } from '@/components/bc/DirectorCard';
import { CompanyFooter } from '@/components/bc/CompanyFooter';

/** Per-director card page, ready for future business cards with personal QR codes. */
export function generateStaticParams() {
  return founderList.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const founder = founderList.find((f) => f.slug === params.slug);
  if (!founder) return {};
  return {
    title: founder.card.name,
    description: `Save ${founder.card.name}, ${founder.card.title} at QuantumX, to your contacts.`,
    alternates: { canonical: `/bc/${founder.slug}/` },
    robots: { index: false, follow: true },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const founder = founderList.find((f) => f.slug === params.slug);
  if (!founder) notFound();

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <section className="mx-auto max-w-xl px-6 pt-32 pb-section md:pt-40">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-gray-secondary">QuantumX</p>
        <DirectorCard founder={founder} priority />
        <Link
          href="/bc"
          className="mt-8 inline-block text-xs uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
        >
          All directors →
        </Link>
      </section>

      <CompanyFooter />
    </main>
  );
}
