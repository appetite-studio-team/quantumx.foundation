/**
 * Careers page content.
 */

export const careersHero = {
  title: 'Work at QuantumX Foundation',
  description:
    "Join us in building the foundations of the post-quantum era. We're looking for passionate individuals who share our vision of an open, accessible, and reliable quantum future.",
} as const;

export const positions = [
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
] as const;

export const whyJoinUs = [
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
] as const;

export const careersCta = {
  headline: "Don't see a role that fits?",
  body: "We're always looking for talented individuals who share our vision. Send us your resume and tell us how you'd like to contribute.",
  buttonText: 'Get in Touch',
  mailto: 'hi@quantumx.foundation',
  mailtoSubject: 'General Application',
} as const;

export const careersApplyEmail = 'careers@quantumx.foundation';
