/**
 * Home page content for the 6-section layout.
 */

export const hero = {
  headlineLine1: 'THE QUANTUMX',
  headlineLine2: 'FOUNDATION.',
  tagline:
    'Building the foundations of the post-quantum era.',
} as const;

const pillarImage = {
  imageSrc: '/images/qc-lab.webp',
  imageSrcLight: '/images/qx-lab-white.webp',
  imageAlt: 'QuantumX quantum computing laboratory',
} as const;

/**
 * Home page pillar sections. Each renders a statement (heading + paragraph)
 * followed by the lab image and a foldable list of branches.
 */
export const pillars = [
  {
    id: 'technology',
    heading: 'TECHNOLOGY',
    paragraph:
      'We believe technology is not just a tool but a language. At QuantumX Foundation, open collaboration and accessible education are the keys to building a quantum future that benefits everyone.',
    ...pillarImage,
    branches: [
      {
        number: '01',
        title: 'Post-Quantum Security',
        description: 'Cryptography that holds up once quantum computers arrive.',
        products: [
          { label: 'QxACE', href: '/projects/qxace' },
          { label: 'QuantumX Vault', href: 'http://qxvault.quantumx.technology/' },
          { label: 'Quantum Vulnerability System', href: 'https://vulnerable.quantumx.technology/' },
        ],
      },
      {
        number: '02',
        title: 'Quantum Tooling',
        description: 'Hands-on tools and open data for builders and researchers.',
        products: [
          { label: 'QxQuark', href: '/projects/qxquark' },
          { label: 'Qubit Database', href: 'https://qubit.quantumx.technology/' },
        ],
      },
      {
        number: '03',
        title: 'Photonic Design',
        description: 'Physics-driven, AI-assisted design for quantum photonic chips.',
        products: [{ label: 'DsynQ', href: '/projects/dsynq' }],
      },
    ],
  },
  {
    id: 'school',
    heading: 'SCHOOL',
    paragraph:
      'Quantum literacy should not be locked behind a lab door. QuantumX School makes quantum computing and post-quantum security open and approachable for students, engineers, and the curious.',
    imageSrc: '/images/school.webp',
    imageSrcLight: '/images/school.webp',
    imageAlt: 'Quantum computing books, a laptop showing a Bloch sphere, and study notes',
    branches: [
      {
        number: '01',
        title: 'Courses',
        description: 'Structured learning in quantum computing and security.',
        products: [{ label: 'QuantumX School', href: 'https://quantumx.school/' }],
      },
      {
        number: '02',
        title: 'Research',
        description: 'Papers, ongoing work, and the roadmap we are building toward.',
        products: [
          { label: 'Research', href: '/research' },
          { label: 'Quantum Research & Roadmap', href: 'https://roadmap.quantumx.school/' },
        ],
      },
      {
        number: '03',
        title: 'Explainers',
        description: 'Plain-language perspectives on where quantum is heading.',
        products: [{ label: 'Blog', href: '/blog' }],
      },
    ],
  },
  {
    id: 'community',
    heading: 'COMMUNITY',
    paragraph:
      'No one builds the quantum future alone. QuantumX Community brings researchers, developers, and students together through events, hackathons, and meetups around the world.',
    imageSrc: '/images/community.webp',
    imageSrcLight: '/images/community.webp',
    imageAlt: 'A QuantumX community talk on quantum computing',
    fadeEdges: true,
    branches: [
      {
        number: '01',
        title: 'Events & Meetups',
        description: 'Talks, workshops, and gatherings for the quantum community.',
        products: [
          { label: 'QuantumX Community', href: 'https://quantumx.community/' },
          { label: 'Luma', href: 'https://luma.com/user/quantumx' },
        ],
      },
      {
        number: '02',
        title: 'Hackathons',
        description: 'Build, ship, and compete on real quantum problems.',
        products: [{ label: 'QX Hack', href: '/qx-hack' }],
      },
      {
        number: '03',
        title: 'Speakers',
        description: 'Voices from our stages, across academia and industry.',
        products: [{ label: 'Speakers', href: '/speakers' }],
      },
    ],
  },
  {
    id: 'venture',
    heading: 'VENTURE',
    paragraph:
      'Breakthroughs need companies to carry them into the world. QuantumX Ventures is our venture studio, building and backing the next generation of quantum companies.',
    ...pillarImage,
    branches: [
      {
        number: '01',
        title: 'Venture Studio',
        description: 'Building the next generation of quantum companies.',
        products: [{ label: 'QuantumX Ventures', href: 'https://quantumx.ventures/' }],
      },
      {
        number: '02',
        title: 'Partner With Us',
        description: 'Founders, investors, and institutions shaping the quantum economy.',
        products: [{ label: 'Get in touch', href: '/contact' }],
      },
      {
        number: '03',
        title: 'Join the Team',
        description: 'Help build quantum companies from day one.',
        products: [{ label: 'Open positions', href: '/careers' }],
      },
    ],
  },
] as const;

export const studioPhilosophy = {
  heading: 'OFFICIALLY LAUNCHED.',
  paragraph:
    "QuantumX Foundation was officially launched by the Hon'ble Chief Minister of Karnataka, Shri D.K. Shivakumar, joining Karnataka's Rs. 1,000-crore Quantum Mission toward a $20B quantum economy and the state's goal of becoming the quantum capital of Asia by 2035. Just the beginning for us.",
  imageSrc: '/images/launch-image.jpg',
  imageAlt: 'QuantumX launch – Ajmal and team with QuantumX banner',
  headshotSrc: '/images/ajmal-founder.jpg',
  name: 'Ajmal Ibn Mohammed Althaf',
  role: 'Founder, QuantumX Foundation',
  profileHref: '/founder/ajmal',
} as const;

export type HeroContent = typeof hero;
export type PillarContent = (typeof pillars)[number];
export type StudioPhilosophyContent = typeof studioPhilosophy;
