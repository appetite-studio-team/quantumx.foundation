import type { Metadata } from 'next';
import { ProjectsPage } from './ProjectsPage';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'The QuantumX ecosystem - the tools, platforms, and research we build to make the post-quantum era open, accessible, and reliable.',
  alternates: {
    canonical: '/projects/',
  },
  openGraph: {
    title: 'Projects - QuantumX Foundation',
    description:
      'The QuantumX ecosystem - the tools, platforms, and research we build to make the post-quantum era open, accessible, and reliable.',
    url: 'https://quantumx.foundation/projects/',
    images: ['/images/og-cover.png'],
  },
  twitter: {
    title: 'Projects - QuantumX Foundation',
    description:
      'The QuantumX ecosystem - the tools, platforms, and research we build to make the post-quantum era open, accessible, and reliable.',
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <ProjectsPage />;
}
