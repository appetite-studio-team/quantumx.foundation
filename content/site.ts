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

/** Menu dropdown items in priority order: Socials, Careers, Projects, Founder note */
export const menuItems = [
  {
    id: 'socials',
    label: 'Socials',
    links: site.externalLinks,
  },
  {
    id: 'careers',
    label: 'Careers',
    href: '/careers/',
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/#capabilities',
  },
  {
    id: 'founder-note',
    label: 'Founder note',
    href: '/#founder-note',
  },
] as const;

export type Site = typeof site;
