import type { Metadata } from 'next';
import { DsynqPage } from './DsynqPage';

const title = 'DsynQ - Physics-Driven Design for Quantum Photonics';
const description =
  'DsynQ is an inverse-design engine for quantum photonic devices - it lets Maxwell’s equations, not trial and error, shape the fabrication-ready waveguides, resonators, and single-photon sources at the heart of quantum hardware.';

export const metadata: Metadata = {
  title: 'DsynQ',
  description,
  alternates: {
    canonical: '/dsynq/',
  },
  openGraph: {
    title,
    description,
    url: 'https://quantumx.foundation/dsynq/',
    images: ['/images/og-cover.png'],
  },
  twitter: {
    title,
    description,
    images: ['/images/og-cover.png'],
  },
};

export default function Page() {
  return <DsynqPage />;
}
