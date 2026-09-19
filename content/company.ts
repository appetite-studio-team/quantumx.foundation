/**
 * Content for the /company page.
 * Founders are pulled from content/founders.ts so names and titles stay in one place.
 */

import { ajmal, ameen, samad } from './founders';

/** A leadership card. Only founders have a `slug`, which links to their /founder/<slug> profile. */
export type LeadershipMember = {
  slug?: string;
  name: string;
  eyebrow: string;
  role: string;
  photo: string;
  photoAlt: string;
  linkedin?: string;
  x?: string;
};

export const company = {
  eyebrow: 'The Company',
  heading: 'About QuantumX',
  intro:
    'QuantumX Foundation is a deep-tech company building an open, accessible, and reliable quantum future. We design quantum and post-quantum technology, train the next generation of quantum talent, and grow a global community around both.',
  /** Used for <meta name="description">, OG/Twitter cards and AboutPage JSON-LD. */
  metaDescription:
    'QuantumX Foundation is a Bangalore-based deep-tech company building quantum computing tools, post-quantum cryptography, and quantum education. Meet the founders and leadership team.',
  mission: {
    heading: 'Our mission',
    paragraphs: [
      'Quantum computing will change how we simulate molecules, design materials, and secure data. It will also break the public-key cryptography that protects most of the internet today. QuantumX exists to make sure people and institutions are ready for both sides of that shift.',
      'We build in the open, ship working systems rather than roadmaps, and hold our engineering to the constraints of real quantum hardware: decoherence, gate fidelity, and error budgets as they exist today.',
    ],
  },
  pillars: [
    {
      number: '01',
      title: 'QuantumX Ventures',
      description: 'Our venture studio, building the next generation of quantum companies.',
      href: 'https://quantumx.ventures/',
    },
    {
      number: '02',
      title: 'QuantumX Technology',
      description: 'Quantum software and post-quantum security tools, including QxACE, QxQuark, and DsynQ.',
      href: '/projects',
    },
    {
      number: '03',
      title: 'QuantumX School',
      description: 'Open, accessible quantum education for students and engineers.',
      href: 'https://quantumx.school/',
    },
    {
      number: '04',
      title: 'QuantumX Community',
      description: 'Events, hackathons, and meetups for the global quantum community.',
      href: '/community',
    },
  ],
  milestone: {
    heading: 'Officially launched',
    paragraph:
      "QuantumX Foundation was officially launched by the Hon'ble Chief Minister of Karnataka, Shri D.K. Shivakumar, joining Karnataka's Rs. 1,000-crore Quantum Mission toward a $20B quantum economy and the state's goal of becoming the quantum capital of Asia by 2035.",
  },
  leadership: {
    heading: 'Founders & leadership',
    intro: 'QuantumX is led by a founding team that spans quantum science, product, and engineering.',
    members: [ajmal, ameen, samad] as LeadershipMember[],
  },
} as const;
