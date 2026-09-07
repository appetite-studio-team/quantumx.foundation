/**
 * Founder profile content.
 * One entry per founder, keyed by the /founder/<slug> route segment.
 */

export type Founder = {
  slug: string;
  name: string;
  /** Small label above the name in the hero. */
  eyebrow: string;
  role: string;
  email: string;
  linkedin?: string;
  headline: string;
  photo: string;
  photoAlt: string;
  bio: string[];
  focusAreas: string[];
  /** Used for <meta name="description">, OG/Twitter cards and Person JSON-LD. */
  metaDescription: string;
  /** Optional school for the alumniOf field in Person JSON-LD. */
  alumniOf?: string;
  /** Copy for the "Get in touch" block. */
  contactBlurb: string;
};

export const ajmal: Founder = {
  slug: 'ajmal',
  name: 'Ajmal Ibn Mohammed Althaf',
  eyebrow: 'Founder',
  role: 'Founder, CEO & Scientific Lead',
  email: 'ajmal@quantumx.foundation',
  linkedin: 'https://www.linkedin.com/in/ajmal-ima/',
  headline: 'Driving quantum innovation, from molecular quantum mechanics to the tools built on top of it.',
  photo: '/images/founder/ajmal.webp',
  photoAlt: 'Ajmal Ibn Mohammed Althaf, Founder, CEO and Scientific Lead at QuantumX, speaking on stage',
  bio: [
    'Ajmal leads QuantumX as Founder, CEO and Scientific Lead, holding both the direction of the company and its scientific agenda. His remit runs the length of the applied quantum stack: photonic device design, circuit-level tooling for near-term hardware, and the post-quantum cryptographic transition now reshaping global security infrastructure.',
    'Under his direction, QuantumX has moved work from theory into shipped systems. DsynQ pairs a gdsfactory layout engine with an AI intelligence layer to turn device requirements into fabrication-ready photonic chip layouts. QuantumX ACE orchestrates post-quantum encryption strategies in real time, selecting them against live risk context. Quark, released open source, fingerprints equivalent quantum circuits at scale.',
    'His scientific work is anchored in ongoing doctoral research in Physics, centered on Molecular Quantum Mechanics and the electronic structure methods used to model molecular systems on quantum hardware. That first-principles grounding sets the standard he holds QuantumX to: architecture decided against decoherence, gate fidelity, and error budgets as they exist today, not as roadmaps promise them.',
    'He has mentored more than 1,000 quantum enthusiasts, from students compiling their first circuit to engineers and researchers moving into the field mid-career, and has built the curricula, programs, and community infrastructure that carry that work at scale. With an academic foundation from VIT Vellore and sustained engagement in scholarly research, he is committed to closing the distance between advanced quantum theory and the working systems, security standards, and technical talent the next decade will demand.',
  ],
  focusAreas: ['Quantum Computing', 'Quantum Information', 'Molecular Quantum Mechanics'],
  metaDescription:
    'Ajmal Ibn Mohammed Althaf is Founder, CEO and Scientific Lead at QuantumX, advancing quantum computing innovation alongside doctoral research in Molecular Quantum Mechanics.',
  alumniOf: 'VIT Vellore',
  contactBlurb:
    'Research collaborations, speaking invitations, and mentorship requests are all welcome. Write directly and it lands on the right desk.',
};

export const ameen: Founder = {
  slug: 'ameen',
  name: 'Muhammed Ameen Sulaiman',
  eyebrow: 'Co-Founder',
  role: 'Co-Founder, CTO & Product Lead',
  email: 'ameen@quantumx.foundation',
  headline:
    'Building the systems behind ambitious ideas, from emerging technology and digital infrastructure to products designed for real-world impact.',
  photo: '/images/founder/ameen.webp',
  photoAlt: 'Muhammed Ameen Sulaiman, Co-Founder, CTO and Product Lead at QuantumX',
  bio: [
    'Muhammed Ameen Sulaiman is a technologist, product builder, and Co-Founder, CTO & Product Lead at QuantumX, where he works across the organization\'s technology, products, and digital infrastructure.',
    'His work focuses on turning ambitious ideas in emerging technology into products that can be built, deployed, and used in the real world. At QuantumX, he works across product strategy, engineering, system architecture, and execution, helping transform research and technical concepts into practical tools and platforms.',
    'He has built and shipped products across mobile, web, AI, blockchain, and decentralized systems, with experience spanning the full product lifecycle from early concepts and technical architecture to development, deployment, and iteration. His approach combines technical depth with a strong focus on usability, execution, and long-term product thinking.',
    'At QuantumX, Muhammed contributes to the development of its technology ecosystem, working alongside researchers and engineers to build infrastructure for the emerging quantum technology landscape. His work spans product development, developer infrastructure, research tooling, and technology platforms that support the broader QuantumX ecosystem.',
    'His interests lie at the intersection of technology, infrastructure, and human coordination. He is particularly interested in how software and emerging technologies can create new systems for how people build, collaborate, and solve complex problems.',
    'Before and alongside his work at QuantumX, Muhammed has worked with startups and technology organizations, building products and engineering teams across different domains. This experience has shaped his perspective on building technology that is not only technically ambitious, but also practical, accessible, and capable of reaching real users.',
    'With a background in Computer Applications and hands-on experience across modern software systems, Muhammed focuses on building the technology that turns ideas into reality.',
  ],
  focusAreas: ['Product Engineering', 'Emerging Technology', 'Digital Infrastructure'],
  metaDescription:
    'Muhammed Ameen Sulaiman is Co-Founder, CTO and Product Lead at QuantumX, building product engineering, emerging technology, and digital infrastructure into systems people can rely on.',
  contactBlurb:
    'Product collaborations, engineering partnerships, and technical conversations are all welcome. Write directly and it lands on the right desk.',
};

export const founders = { ajmal, ameen } as const;
