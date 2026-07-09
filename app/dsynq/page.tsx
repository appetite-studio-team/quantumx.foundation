import type { Metadata } from 'next';
import { DsynqPage } from './DsynqPage';

const title = 'DsynQ - Physics-Driven Design for Quantum Photonics';
const description =
  'DsynQ transforms photonic quantum device requirements into fabrication-ready chip designs using AI-assisted workflows - a gdsfactory layout engine paired with an AI intelligence layer that takes you from plain-language requirements to GDSII in under a minute.';

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
