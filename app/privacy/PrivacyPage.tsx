'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site } from '@/content/site';

const lastUpdated = 'July 8, 2026';

const sections = [
  {
    heading: '1. Introduction',
    body: [
      `${site.name} ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services (the "Services").`,
      'By using the Services, you consent to the practices described in this policy.',
    ],
  },
  {
    heading: '2. Information we collect',
    body: [
      'We may collect information you provide directly to us, such as your name and email address when you contact us or subscribe to updates.',
      'We also automatically collect certain technical information, such as your IP address, browser type, device information, and usage data, through cookies and similar technologies.',
    ],
  },
  {
    heading: '3. How we use your information',
    body: [
      'We use the information we collect to operate and improve the Services, respond to your enquiries, send updates you have requested, analyze usage trends, and comply with legal obligations.',
    ],
  },
  {
    heading: '4. Cookies and tracking',
    body: [
      'We use cookies and similar technologies to remember your preferences and understand how the Services are used. You can control cookies through your browser settings, though disabling them may affect some functionality.',
    ],
  },
  {
    heading: '5. Sharing of information',
    body: [
      'We do not sell your personal information. We may share information with service providers who help us operate the Services, or when required by law, or to protect our rights and safety.',
    ],
  },
  {
    heading: '6. Data retention and security',
    body: [
      'We retain your information for as long as necessary to fulfil the purposes described in this policy. We implement reasonable technical and organizational measures to protect your information, though no method of transmission over the internet is completely secure.',
    ],
  },
  {
    heading: '7. Your rights',
    body: [
      'Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal information. To exercise these rights, please contact us using the details below.',
    ],
  },
  {
    heading: '8. Children’s privacy',
    body: [
      'The Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children.',
    ],
  },
  {
    heading: '9. Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.',
    ],
  },
  {
    heading: '10. Contact',
    body: [
      `If you have any questions about this Privacy Policy, please contact us at ${site.email}.`,
    ],
  },
];

export function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-section md:pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
        >
          <h1 className="font-heading text-clamp-display font-bold uppercase leading-none tracking-tight-heading text-text-primary">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            How {site.name} collects, uses, and protects your information.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-secondary">
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-3xl px-6 pb-section md:px-10">
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
            hidden: {},
          }}
        >
          {sections.map(({ heading, body }) => (
            <motion.div
              key={heading}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={defaultTransition}
            >
              <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
                {heading}
              </h2>
              {body.map((paragraph, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-gray-secondary">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Back to home */}
      <section className="mx-auto max-w-7xl px-6 pb-section md:px-10">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.2em] text-gray-secondary hover:text-accent"
        >
          ← Back to home
        </Link>
      </section>
    </main>
  );
}
