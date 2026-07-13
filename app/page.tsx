import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuantumSpeedupSection } from '@/components/sections/QuantumSpeedupSection';
import { TechnologyStatementSection } from '@/components/sections/TechnologyStatementSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { FromTheLabSection } from '@/components/sections/FromTheLabSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
// TODO: re-enable once the real Discord invite is set in content/site.ts:
// import { DiscordCtaSection } from '@/components/sections/DiscordCtaSection';

export const metadata: Metadata = {
  title: 'QuantumX Foundation - Building the Post-Quantum Era',
  description:
    'We are a deep-tech initiative building an open, accessible, and reliable quantum future. Explore our post-quantum cryptography, quantum tooling, research, and community programs.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'QuantumX Foundation - Building the Foundations of the Post-Quantum Era',
    description:
      'We are a deep-tech initiative building an open, accessible, and reliable quantum future.',
    url: 'https://quantumx.foundation/',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumX Foundation - Building the Foundations of the Post-Quantum Era',
    description:
      'We are a deep-tech initiative building an open, accessible, and reliable quantum future.',
    images: ['/images/og-cover.png'],
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <QuantumSpeedupSection />
      <TechnologyStatementSection />
      <CapabilitiesSection />
      <FromTheLabSection />
      <EventsSection />
      {/* <DiscordCtaSection /> */}
      <NewsletterSection />
    </main>
  );
}
