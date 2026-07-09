/**
 * Home page content for the 6-section layout.
 */

export const hero = {
  headlineLine1: 'THE QUANTUMX',
  headlineLine2: 'FOUNDATION.',
  tagline:
    'Building the foundations of the post-quantum era.',
} as const;

export const technology = {
  heading: 'TECHNOLOGY',
  paragraph:
    'We believe technology is not just a tool but a language. At QuantumX Foundation, open collaboration and accessible education are the keys to building a quantum future that benefits everyone.',
} as const;

export const capabilities = {
  branches: [
    {
      number: '01',
      title: 'QuantumX Technology',
      description: 'Tools and infrastructure for the post-quantum era.',
      products: [
        { label: 'QxACE', href: '/qxace' },
        { label: 'QxQuark', href: '/qxquark' },
        { label: 'DsynQ', href: '/dsynq' },
        { label: 'Qubit Database', href: 'https://qubit.quantumx.technology/' },
        { label: 'Quantum Vulnerability System', href: 'https://vulnerable.quantumx.technology/' },
        { label: 'QuantumX Vault', href: 'http://qxvault.quantumx.technology/' },
      ],
    },
    {
      number: '02',
      title: 'QuantumX School',
      description: 'Open, accessible education and research for everyone.',
      products: [
        { label: 'QuantumX School', href: 'https://quantumx.school/' },
        { label: 'Quantum Research & Roadmap', href: 'https://roadmap.quantumx.school/' },
      ],
    },
    {
      number: '03',
      title: 'QuantumX Community',
      description: 'A global network building the quantum future together.',
      products: [
        { label: 'Events & Meetups', href: '/community' },
        { label: 'Luma', href: 'https://luma.com/user/quantumx' },
      ],
    },
  ],
  leftImageSrc: '/images/qc-lab.png',
  leftImageSrcLight: '/images/qx-lab-white.png',
  leftImageAlt: 'QuantumX quantum computing laboratory',
  ctaText: 'VIEW OPEN POSITIONS →',
  ctaHref: '/careers',
  ctaExternal: false,
} as const;

export const studioPhilosophy = {
  heading: 'OPEN, ACCESSIBLE, RELIABLE.',
  paragraph:
    "The quantum revolution isn't just about faster computers, it's about reimagining what's possible. At QuantumX Foundation, we believe that open collaboration and accessible education are the keys to building a quantum future that benefits everyone.",
  imageSrc: '/images/launch-image.jpg',
  imageAlt: 'QuantumX launch – Ajmal and team with QuantumX banner',
  headshotSrc: '/images/ajmal-founder.jpg',
  name: 'Ajmal Ibn Mohammed Althaf',
  role: 'Founder, QuantumX Foundation',
} as const;

export type HeroContent = typeof hero;
export type TechnologyContent = typeof technology;
export type CapabilitiesContent = typeof capabilities;
export type StudioPhilosophyContent = typeof studioPhilosophy;
