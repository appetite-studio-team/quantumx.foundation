import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    "Join QuantumX Foundation in building the foundations of the post-quantum era. We're looking for passionate individuals who share our vision of an open, accessible, and reliable quantum future.",
  alternates: {
    canonical: '/careers/',
  },
  openGraph: {
    title: 'Careers - QuantumX Foundation',
    description:
      "Join QuantumX Foundation in building the foundations of the post-quantum era. We're looking for passionate individuals who share our vision.",
    url: 'https://quantumx.foundation/careers/',
    images: ['/images/App-Icon-Black.png'],
  },
  twitter: {
    title: 'Careers - QuantumX Foundation',
    description:
      "Join QuantumX Foundation in building the foundations of the post-quantum era. We're looking for passionate individuals who share our vision.",
    images: ['/images/App-Icon-Black.png'],
  },
};

const positions = [
  {
    title: 'Quantum Research Scientist',
    type: 'Full-time',
    location: 'Remote',
    description:
      "We're seeking a quantum research scientist to lead groundbreaking research in post-quantum cryptography and quantum computing systems.",
    emailSubject: 'Quantum Research Scientist Application',
  },
  {
    title: 'Open Source Developer',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Help us build open-source quantum computing tools and libraries that make quantum technology accessible to everyone.',
    emailSubject: 'Open Source Developer Application',
  },
  {
    title: 'Quantum Systems Engineer',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Design and build reliable, scalable quantum systems that form the foundation of our post-quantum infrastructure.',
    emailSubject: 'Quantum Systems Engineer Application',
  },
];

const whyJoinUs = [
  {
    title: 'Open Source First',
    description:
      'We believe in open collaboration. Your work will contribute to open-source projects that benefit the entire quantum community.',
  },
  {
    title: 'Cutting-Edge Research',
    description:
      'Work on the forefront of quantum technology, tackling challenges that will shape the future of computing and cryptography.',
  },
  {
    title: 'Remote First',
    description:
      "Work from anywhere. We're a distributed team that values flexibility and work-life balance.",
  },
  {
    title: 'Impact-Driven',
    description:
      'Your contributions will help build a more accessible and reliable quantum future for everyone.',
  },
];

export default function CareersPage() {
  return (
    <main className="pt-24">
      {/* Careers Hero Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Work at QuantumX Foundation
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl">
          Join us in building the foundations of the post-quantum era.
          We&apos;re looking for passionate individuals who share our vision of
          an open, accessible, and reliable quantum future.
        </p>
      </section>

      {/* Open Positions Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <h2 className="serif-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Open Positions
        </h2>
        <div className="space-y-6">
          {positions.map((position, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {position.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {position.type} • {position.location}
              </p>
              <p className="text-gray-700 mb-4">{position.description}</p>
              <a
                href={`mailto:careers@quantumx.foundation?subject=${encodeURIComponent(
                  position.emailSubject
                )}`}
                className="text-gray-900 font-medium hover:underline"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wellfound.com/company/appetite-studio/jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg transition-colors font-medium"
          >
            For More Openings →
          </a>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <h2 className="serif-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Why Join Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {whyJoinUs.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="serif-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Don&apos;t see a role that fits?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We&apos;re always looking for talented individuals who share our
            vision. Send us your resume and tell us how you&apos;d like to
            contribute.
          </p>
          <a
            href="mailto:hi@quantumx.foundation?subject=General Application"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
