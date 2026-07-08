import type { Metadata } from 'next';
import { EventsPage } from './EventsPage';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Hackathons, workshops, and gatherings from QuantumX Foundation - explore our upcoming and past events building the foundations of the post-quantum era.',
  alternates: {
    canonical: '/community/',
  },
  openGraph: {
    title: 'Events - QuantumX Foundation',
    description:
      'Hackathons, workshops, and gatherings from QuantumX Foundation - explore our upcoming and past events.',
    url: 'https://quantumx.foundation/community/',
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Events - QuantumX Foundation',
    description:
      'Hackathons, workshops, and gatherings from QuantumX Foundation - explore our upcoming and past events.',
    images: ['/images/App-Icon-Black.png'],
  },
};

export default function Page() {
  return <EventsPage />;
}
