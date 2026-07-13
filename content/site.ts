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
  tagline: 'Building the foundations of the post-quantum era.',
  // TODO: replace with the real Discord invite before shipping.
  discordInviteUrl: 'https://discord.gg/REPLACE_ME',
  address:
    '3rd Floor, Startup Park, Opposite Police Station, Singasandra, Bangalore South, Karnataka 560068' as string | null,
  mapUrl: 'https://maps.app.goo.gl/fhyThBjLeGu8QUSb9',
  // Footer "Company" column.
  internalLinks: [
    { label: 'Jobs', href: '/careers' },
    { label: 'Community', href: '/community' },
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
    { label: 'Articles', href: '/articles' },
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

/** Menu dropdown: Jobs (Wellfound), Projects (section link), Founder note, Socials (icons) */
export const menuItems = [
  {
    id: 'projects',
    label: 'Projects',
    href: '/projects',
  },
  {
    id: 'articles',
    label: 'Articles',
    href: '/articles',
  },
  {
    id: 'research',
    label: 'Research',
    href: '/research',
  },
  {
    id: 'events',
    label: 'Community',
    href: '/community',
  },
  {
    id: 'academy',
    label: 'Academy',
    href: 'https://quantumx.school/',
    external: true,
  },
  {
    id: 'jobs',
    label: 'Jobs',
    href: '/careers',
  },
  {
    id: 'socials',
    label: 'Socials',
    links: site.externalLinks,
  },
] as const;

export type Site = typeof site;
