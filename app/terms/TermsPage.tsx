'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site } from '@/content/site';

const lastUpdated = 'July 8, 2026';

const sections = [
  {
    heading: '1. Acceptance of terms',
    body: [
      `By accessing or using ${site.name}'s website and services (the "Services"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Services.`,
      'We may update these terms from time to time. Continued use of the Services after changes are posted constitutes your acceptance of the revised terms.',
    ],
  },
  {
    heading: '2. Use of the Services',
    body: [
      'You may use the Services only for lawful purposes and in accordance with these terms. You agree not to use the Services in any way that could damage, disable, overburden, or impair them, or interfere with any other party’s use of the Services.',
      'You must not attempt to gain unauthorized access to any part of the Services, other accounts, computer systems, or networks connected to the Services.',
    ],
  },
  {
    heading: '3. Intellectual property',
    body: [
      `All content, trademarks, logos, and materials on the Services are the property of ${site.name} or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written permission.`,
    ],
  },
  {
    heading: '4. Third-party links',
    body: [
      'The Services may contain links to third-party websites or resources. We are not responsible for the content, products, or services available from third parties, and access to them is at your own risk.',
    ],
  },
  {
    heading: '5. Disclaimer of warranties',
    body: [
      'The Services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components.',
    ],
  },
  {
    heading: '6. Limitation of liability',
    body: [
      `To the fullest extent permitted by law, ${site.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services.`,
    ],
  },
  {
    heading: '7. Governing law',
    body: [
      'These terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka.',
    ],
  },
  {
    heading: '8. Contact',
    body: [
      `If you have any questions about these Terms of Use, please contact us at ${site.email}.`,
    ],
  },
];

export function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            The terms that govern your use of {site.name}&rsquo;s website and services.
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
