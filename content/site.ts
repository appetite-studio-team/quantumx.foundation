/**
 * Global site branding and footer content.
 */

/**
 * External Wellfound listing that hosts our open roles.
 * On-site "Jobs"/"Careers" links point to /careers, which then links out here.
 */
const wellfoundJobsUrl = 'https://wellfound.com/company/quantumx-qx-pvt-ltd';

export const site = {
  name: 'QuantumX Foundation',
  email: 'hi@quantumx.foundation',
  eventsEmail: 'events@quantumx.community',
  tagline: 'Building the foundations of the post-quantum era.',
  // TODO: replace with the real Discord invite before shipping.
  discordInviteUrl: 'https://discord.gg/REPLACE_ME',
  address:
    '3rd Floor, Startup Park, Opposite Police Station, Singasandra, Bangalore South, Karnataka 560068' as string | null,
  mapUrl: 'https://maps.app.goo.gl/fhyThBjLeGu8QUSb9',
  // Footer "Company" column.
  internalLinks: [
    { label: 'The Company', href: '/company' },
    { label: 'Jobs', href: '/careers' },
    { label: 'Community', href: '/community' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Research', href: '/research' },
    { label: 'Newsroom', href: '/newsroom' },
    { label: 'Academy', href: 'https://quantumx.school/' },
    { label: 'Contact', href: '/contact' },
  ],
  // Footer "Departments" column.
  departmentLinks: [
    { label: 'QuantumX Technology', href: '/projects' },
    { label: 'QuantumX School', href: 'https://quantumx.school/' },
    { label: 'QuantumX Community', href: '/community' },
  ],
  // Footer "Resources" column.
  resourceLinks: [
    { label: 'Blog', href: '/blog' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  externalLinks: [
    { label: 'X', href: 'https://x.com/_Quantum_X_' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/quantumx-foundation/' },
    { label: 'Instagram', href: 'https://www.instagram.com/quantumx.school/' },
  ],
  wellfoundJobsUrl,
} as const;

/** Project links from OG site (for menu and capabilities) */
export const projectLinks = [
  { label: 'QxACE', href: '/projects/qxace' },
  { label: 'QxQuark', href: '/projects/qxquark' },
  { label: 'DsynQ', href: '/projects/dsynq' },
  { label: 'QuantumX Vault', href: 'http://qxvault.quantumx.technology/' },
  { label: 'Qubit Database', href: 'https://qubit.quantumx.technology/' },
  { label: 'Vulnerability Database', href: 'https://vulnerable.quantumx.technology/' },
  { label: 'Quantum Roadmap', href: 'https://roadmap.quantumx.school/' },
] as const;

/** Primary navigation. Items with `links` render as dropdowns on desktop and grouped sections in the mobile menu. */
export type NavLink = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

export type NavItem =
  | { id: string; label: string; href: string; external?: boolean }
  | { id: string; label: string; links: readonly NavLink[] };

export const navItems: readonly NavItem[] = [
  {
    id: 'projects',
    label: 'Projects',
    href: '/projects',
  },
  {
    id: 'learn',
    label: 'Learn',
    links: [
      {
        label: 'Academy',
        href: 'https://quantumx.school/',
        description: 'Courses in quantum computing and security',
        external: true,
      },
      { label: 'Blog', href: '/blog', description: 'Explainers and perspectives on quantum' },
      { label: 'Research', href: '/research', description: 'Papers and ongoing work' },
    ],
  },
  {
    id: 'community',
    label: 'Community',
    links: [
      { label: 'Community', href: '/community', description: 'Events, meetups and hackathons' },
      { label: 'Speakers', href: '/speakers', description: 'Voices from our stages' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    links: [
      { label: 'Company', href: '/company', description: 'Founders, leadership and mission' },
      { label: 'Jobs', href: '/careers', description: 'Open roles at QuantumX' },
    ],
  },
];

export const joinCta = {
  label: 'Join',
  href: 'https://quantumx.community/',
} as const;

export type Site = typeof site;
