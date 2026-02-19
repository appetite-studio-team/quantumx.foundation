/**
 * Home page content for the 6-section layout.
 */

export const hero = {
  headlineLine1: 'THE QUANTUM',
  headlineLine2: 'FOUNDATION.',
  tagline:
    'We are a deep-tech initiative building an open, accessible, and reliable quantum future. Building the foundations of the post-quantum era.',
  stripItems: [
    { id: '1', label: 'Quantum Roadmap' },
    { id: '2', label: 'Vulnerability Database' },
    { id: '3', label: 'Qubit Database' },
    { id: '4', label: 'QuantumX School' },
    { id: '5', label: 'QEC' },
    { id: '6', label: 'Research' },
    { id: '7', label: 'Open Source' },
  ],
} as const;

export const technology = {
  heading: '& TECHNOLOGY',
  paragraph:
    'We believe technology is not just a tool but a language. At QuantumX Foundation, open collaboration and accessible education are the keys to building a quantum future that benefits everyone.',
} as const;

export const capabilities = {
  items: [
    { number: '01', label: 'Quantum Research & Roadmap', href: 'https://roadmap.quantumx.school/' },
    { number: '02', label: 'Vulnerability & Qubit Databases', href: 'https://vulnerable.quantumx.technology/' },
    { number: '03', label: 'QuantumX School & Education', href: 'https://quantumx.school/' },
    { number: '04', label: 'Experience Center & Outreach', href: '#' },
    { number: '05', label: 'Open Source & Platforms', href: '#' },
  ],
  leftImageSrc: '/images/quantum-computer.png',
  leftImageAlt: 'Quantum computer',
  ctaText: 'VIEW OPEN POSITIONS →',
  ctaHref: 'https://wellfound.com/company/quantumx-qx-pvt-ltd',
  ctaExternal: true,
} as const;

export const studioPhilosophy = {
  heading: 'OPEN, ACCESSIBLE, RELIABLE.',
  paragraph:
    "The quantum revolution isn't just about faster computers—it's about reimagining what's possible. At QuantumX Foundation, we believe that open collaboration and accessible education are the keys to building a quantum future that benefits everyone.",
  imageSrc: '/images/ajmal-founder.jpg',
  imageAlt: 'Ajmal - Founder, QuantumX Foundation',
  name: 'Ajmal',
  role: 'Founder, QuantumX Foundation',
} as const;

export type HeroContent = typeof hero;
export type TechnologyContent = typeof technology;
export type CapabilitiesContent = typeof capabilities;
export type StudioPhilosophyContent = typeof studioPhilosophy;
