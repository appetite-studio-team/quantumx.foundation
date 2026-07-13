import type { Metadata } from 'next';
import { NewsroomPage } from './NewsroomPage';

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'Announcements, milestones, and stories from QuantumX Foundation - building the foundations of the post-quantum era.',
  alternates: {
    canonical: '/newsroom/',
  },
  openGraph: {
    title: 'Newsroom - QuantumX Foundation',
    description:
      'Announcements, milestones, and stories from QuantumX Foundation.',
    url: 'https://quantumx.foundation/newsroom/',
    images: ['/images/og-cover.png'],
  },
  twitter: {
    title: 'Newsroom - QuantumX Foundation',
    description:
      'Announcements, milestones, and stories from QuantumX Foundation.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <NewsroomPage />;
}
