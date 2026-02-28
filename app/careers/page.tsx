import type { Metadata } from 'next';
import Link from 'next/link';
import {
  careersHero,
  whyJoinUs,
  careersCta,
} from '@/content/careers';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    "Join QuantumX Foundation in building the foundations of the post-quantum era. We're looking for passionate individuals who share our vision of an open, accessible, and reliable quantum future.",
  alternates: {
    canonical: '/careers/',
  },
  openGraph: {
    title: 'Careers - QuantumX Foundation',
    description:
      "Join QuantumX Foundation in building the foundations of the post-quantum era. We're looking for passionate individuals who share our vision.",
    url: 'https://quantumx.foundation/careers/',
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Careers - QuantumX Foundation',
    description:
      "Join QuantumX Foundation in building the foundations of the post-quantum era. We're looking for passionate individuals who share our vision.",
    images: ['/images/App-Icon-Black.png'],
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Careers Hero Section */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-section md:pt-40 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl relative z-10 [transform:translateZ(0)]">
          {careersHero.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-secondary md:text-2xl">
          {careersHero.description}
        </p>
      </section>

      {/* View open positions */}
      <section className="mx-auto max-w-4xl px-6 py-section lg:px-8">
        <div className="text-center">
          <a
            href={site.wellfoundJobsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-secondary/30 bg-background px-8 py-4 font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            view open positions →
          </a>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="mx-auto max-w-4xl px-6 py-section lg:px-8">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-text-primary md:text-4xl">
          Why Join Us
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {whyJoinUs.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-6 py-section lg:px-8">
        <div className="rounded-lg border border-gray-secondary/20 bg-gray-secondary/5 p-8 md:p-12">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-text-primary md:text-4xl">
            {careersCta.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-secondary">
            {careersCta.body}
          </p>
          <a
            href={`mailto:${careersCta.mailto}?subject=${encodeURIComponent(
              careersCta.mailtoSubject
            )}`}
            className="mt-8 inline-block bg-accent px-8 py-4 font-medium text-background transition-opacity hover:opacity-90"
            data-magnetic
          >
            {careersCta.buttonText}
          </a>
        </div>
      </section>

      {/* Back to home */}
      <section className="mx-auto max-w-4xl px-6 pb-section lg:px-8">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
        >
          ← Back to home
        </Link>
      </section>
    </main>
  );
}
