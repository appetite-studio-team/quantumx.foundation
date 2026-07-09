/**
 * Projects (the QuantumX product ecosystem).
 *
 * NOTE: the `description` lines below are first-draft copy - edit them to match
 * how you'd like each product framed. `status` is optional; set it to mark a
 * project as not-yet-launched (renders a badge + disables the visit link).
 *
 * `tagline` is the short one-liner shown in the platform overview cards.
 * `icon` selects a line-icon (see ProductIcon in PlatformSection).
 */

export type ProjectIcon =
  | 'education'
  | 'tooling'
  | 'research'
  | 'vault'
  | 'database'
  | 'shield'
  | 'cipher'
  | 'photonics';

export type Project = {
  number: string;
  name: string;
  description: string;
  tagline: string;
  icon: ProjectIcon;
  href: string;
  status?: string;
};

/** A platform category groups a set of products under one heading. */
export type PlatformCategory = {
  /** Selects a category icon (see CategoryIcon in PlatformSection). */
  icon: 'learn' | 'secure';
  label: string;
  /** Project `number`s that belong to this category, in display order. */
  projectNumbers: string[];
};

export type ProjectsContent = {
  heading: string;
  subheading: string;
  /** Copy for the platform overview section. */
  platform: {
    eyebrow: string;
    heading: string;
    description: string;
    categories: PlatformCategory[];
  };
  projects: Project[];
};

export const projectsContent: ProjectsContent = {
  heading: 'PROJECTS',
  subheading:
    'The QuantumX ecosystem - the tools, platforms, and research we build to make the post-quantum era open, accessible, and reliable.',
  platform: {
    eyebrow: 'THE QUANTUMX PLATFORM',
    heading: 'Tools to help you build the post-quantum future',
    description:
      'Open education, tooling, and research to make the post-quantum era accessible, secure, and reliable.',
    categories: [
      {
        icon: 'learn',
        label: 'Learn & build',
        projectNumbers: ['03', '06', '07'],
      },
      {
        icon: 'secure',
        label: 'Secure & track',
        projectNumbers: ['01', '02', '04', '05'],
      },
    ],
  },
  projects: [
    {
      number: '01',
      name: 'QuantumX ACE',
      tagline: 'Adaptive cryptographic intelligence',
      icon: 'cipher',
      description:
        'The Adaptive Cryptography Engine - context-aware, risk-adaptive orchestration that selects post-quantum encryption strategies in real time.',
      href: '/qxace',
    },
    {
      number: '02',
      name: 'QuantumX Vault',
      tagline: 'Post-quantum cryptography',
      icon: 'vault',
      description:
        'A secure home for post-quantum cryptographic tooling and resources.',
      href: 'http://qxvault.quantumx.technology/',
    },
    {
      number: '03',
      name: 'QuantumX Quark',
      tagline: 'Hands-on quantum tooling',
      icon: 'tooling',
      description:
        'Hands-on quantum tooling for builders and researchers exploring what quantum hardware can do.',
      href: '/qxquark',
    },
    {
      number: '04',
      name: 'Qubit Database',
      tagline: 'Track quantum hardware',
      icon: 'database',
      description:
        'A growing, open database of qubit and quantum hardware data to track the state of the field.',
      href: 'https://qubit.quantumx.technology/',
    },
    {
      number: '05',
      name: 'Quantum Vulnerability System',
      tagline: 'Monitor crypto at risk',
      icon: 'shield',
      description:
        'Track the cryptographic vulnerabilities exposed by quantum computing and monitor what is at risk.',
      href: 'https://vulnerable.quantumx.technology/',
    },
    {
      number: '06',
      name: 'Quantum Research & Roadmap',
      tagline: 'Our research direction',
      icon: 'research',
      description:
        'Our research direction and roadmap toward a reliable, open quantum future.',
      href: 'https://roadmap.quantumx.school/',
    },
    {
      number: '07',
      name: 'DsynQ',
      tagline: 'Physics-driven photonic design',
      icon: 'photonics',
      description:
        'Physics-driven design for quantum photonics - let Maxwell’s equations, not trial and error, shape the waveguides, resonators, and single-photon sources at the heart of quantum hardware.',
      href: '/dsynq',
    },
  ],
};
