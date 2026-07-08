'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site } from '@/content/site';

const lastUpdated = 'July 8, 2026';

const sections = [
  {
    heading: '1. Agreement',
    body: [
      `These Terms and Conditions ("Terms") form a legally binding agreement between you and ${site.name} governing your access to and use of our website, programs, events, and services (collectively, the "Services").`,
      'By accessing or using the Services, you confirm that you accept these Terms and agree to comply with them. If you do not agree, you must not use the Services.',
    ],
  },
  {
    heading: '2. Eligibility',
    body: [
      'You must be at least 18 years of age, or have the consent of a parent or legal guardian, to use the Services. By using the Services, you represent that you meet these requirements.',
    ],
  },
  {
    heading: '3. Accounts and registration',
    body: [
      'Certain features, programs, or events may require you to register or provide information. You agree to provide accurate and complete information and to keep it up to date. You are responsible for maintaining the confidentiality of any credentials associated with your participation.',
    ],
  },
  {
    heading: '4. Acceptable use',
    body: [
      'You agree not to misuse the Services, including by attempting to disrupt them, reverse engineer any part of them, transmit malicious code, harvest data, or use them for any unlawful or unauthorized purpose.',
      'We reserve the right to suspend or terminate access to the Services for any conduct that we consider, in our sole discretion, to violate these Terms or to be harmful to other users or to us.',
    ],
  },
  {
    heading: '5. Events and programs',
    body: [
      'Participation in events, hackathons, and programs may be subject to additional rules published for that specific activity. Where those rules conflict with these Terms, the activity-specific rules shall prevail for that activity.',
    ],
  },
  {
    heading: '6. Intellectual property',
    body: [
      `Unless otherwise stated, all materials on the Services are owned by or licensed to ${site.name} and are protected by intellectual property laws. You retain ownership of content you submit but grant us a non-exclusive, royalty-free licence to use it in connection with operating and promoting the Services.`,
    ],
  },
  {
    heading: '7. Disclaimers and liability',
    body: [
      'The Services are provided "as is" without warranties of any kind. To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.',
    ],
  },
  {
    heading: '8. Indemnity',
    body: [
      `You agree to indemnify and hold harmless ${site.name}, its officers, and its affiliates from any claims, losses, or expenses arising out of your breach of these Terms or your misuse of the Services.`,
    ],
  },
  {
    heading: '9. Governing law and jurisdiction',
    body: [
      'These Terms are governed by the laws of India. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka.',
    ],
  },
  {
    heading: '10. Changes and contact',
    body: [
      `We may revise these Terms at any time by updating this page. Your continued use of the Services after changes are posted constitutes acceptance of the revised Terms. For questions, contact us at ${site.email}.`,
    ],
  },
];

export function TermsAndConditionsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-secondary md:text-xl">
            The agreement governing your participation in {site.name}&rsquo;s programs, events, and services.
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
