/**
 * Global site branding and footer content.
 */

export const site = {
  name: 'QuantumX Foundation',
  email: 'hi@quantumx.foundation',
  tagline: 'Building the foundations of the post-quantum era.',
  address: null as string | null,
  internalLinks: [
    { label: 'Work', href: '/' },
    { label: 'Studio', href: '/' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '#contact' },
  ],
  externalLinks: [
    { label: 'X', href: 'https://x.com/_Quantum_X_' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/quantumx-foundation/' },
  ],
  wellfoundJobsUrl: 'https://wellfound.com/company/quantumx-qx-pvt-ltd',
} as const;

/** Project links from OG site (for menu and capabilities) */
export const projectLinks = [
  { label: 'Quantum Roadmap', href: 'https://roadmap.quantumx.school/' },
  { label: 'Vulnerability Database', href: 'https://vulnerable.quantumx.technology/' },
  { label: 'Qubit Database', href: 'https://qubit.quantumx.technology/' },
  { label: 'QuantumX School', href: 'https://quantumx.school/' },
  { label: 'Quantum Experience Center', href: '/coming-soon' },
] as const;

/** Menu dropdown: Careers (Wellfound), Projects (section link), Founder note, Socials (icons) */
export const menuItems = [
  {
    id: 'careers',
    label: 'Careers',
    href: site.wellfoundJobsUrl,
    external: true,
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/#capabilities',
  },
  {
    id: 'articles',
    label: 'Articles',
    href: '/#from-the-lab',
  },
  {
    id: 'socials',
    label: 'Socials',
    links: site.externalLinks,
  },
] as const;

export type Site = typeof site;
