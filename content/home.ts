/**
 * Home page content for the 6-section layout.
 */

export const hero = {
  headlineLine1: 'THE QUANTUMX',
  headlineLine2: 'FOUNDATION.',
  tagline:
    'We are a deep-tech initiative building an open, accessible, and reliable quantum future. Building the foundations of the post-quantum era.',
  stripItems: [
    { id: '1', label: 'Quantum Roadmap', href: 'https://roadmap.quantumx.school/' },
    { id: '2', label: 'Vulnerability Database', href: 'https://vulnerable.quantumx.technology/' },
    { id: '3', label: 'Qubit Database', href: 'https://qubit.quantumx.technology/' },
    { id: '4', label: 'QuantumX School', href: 'https://quantumx.school/' },
    { id: '5', label: 'QEC', href: '/coming-soon' },
    { id: '6', label: 'Research', href: '/coming-soon' },
    { id: '7', label: 'Open Source', href: '/coming-soon' },
  ],
} as const;

export const technology = {
  heading: 'TECHNOLOGY',
  paragraph:
    'We believe technology is not just a tool but a language. At QuantumX Foundation, open collaboration and accessible education are the keys to building a quantum future that benefits everyone.',
} as const;

export const capabilities = {
  items: [
    { number: '01', label: 'Quantum Research & Roadmap', href: 'https://roadmap.quantumx.school/' },
    { number: '02', label: 'Quantum Vulnerability System', href: 'https://vulnerable.quantumx.technology/' },
    { number: '03', label: 'QuantumX School', href: 'https://quantumx.school/' },
    { number: '04', label: 'Qubit Database', href: 'https://qubit.quantumx.technology/' },
    { number: '05', label: 'Experience Center & Outreach', href: '/coming-soon' },
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
    "The quantum revolution isn't just about faster computers, it's about reimagining what's possible. At QuantumX Foundation, we believe that open collaboration and accessible education are the keys to building a quantum future that benefits everyone.",
  imageSrc: '/images/launch-image.jpg',
  imageAlt: 'QuantumX launch – Ajmal and team with QuantumX banner',
  headshotSrc: '/images/ajmal-founder.jpg',
  name: 'Ajmal Ibn Mohammed Althaf',
  role: 'Founder, QuantumX Foundation',
} as const;

export const fromTheLab = {
  heading: 'From the Lab',
  subheading: 'Insights, research, and perspectives',
  articles: [
    {
      date: 'Jan 13, 2026',
      title: 'What breaks first during a post-quantum migration?',
      excerpt:
        'Algorithms, infrastructure, or governance? Most conversations around post-quantum migration focus on swapping algorithms. But the first things that break are rarely the cryptographic primitives themselves.',
      href: '/coming-soon',
    },
    {
      date: 'Dec 17, 2025',
      title: "We're designing for a Quantum-safe world",
      excerpt:
        "Quantum safety is often framed as a future problem. Something to think about later. We believe the groundwork needs to be laid now, before the window closes.",
      href: '/coming-soon',
    },
  ],
  comingSoon: {
    label: 'Coming soon',
    title: 'More insights on the way',
    body: "We're working on new research and perspectives. Stay tuned.",
    ctaText: 'Subscribe for updates',
    ctaHref: '/coming-soon',
  },
} as const;

export type HeroContent = typeof hero;
export type TechnologyContent = typeof technology;
export type CapabilitiesContent = typeof capabilities;
export type StudioPhilosophyContent = typeof studioPhilosophy;
export type FromTheLabContent = typeof fromTheLab;
