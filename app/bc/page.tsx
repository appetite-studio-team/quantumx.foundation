import type { Metadata } from 'next';
import { founderList } from '@/content/founders';
import { site } from '@/content/site';
import { DirectorCard } from '@/components/bc/DirectorCard';
import { CompanyFooter } from '@/components/bc/CompanyFooter';

/**
 * Landing page for the QR code printed on every director's business card.
 * All three cards share this one URL, so it lists every director.
 */
export const metadata: Metadata = {
  title: 'Contact the Directors',
  description: 'Save a QuantumX director to your contacts, or reach them by email, phone, or LinkedIn.',
  alternates: { canonical: '/bc/' },
  // A QR landing page, not something to surface in search.
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 md:pt-40 md:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">QuantumX</p>
        <h1 className="mt-4 font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
          Nice to meet you
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-secondary md:text-xl">
          {site.tagline} Find the director whose card you&apos;re holding and save them to your
          contacts.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {founderList.map((founder) => (
            <DirectorCard key={founder.slug} founder={founder} priority />
          ))}
        </div>
      </section>

      <CompanyFooter />
    </main>
  );
}
