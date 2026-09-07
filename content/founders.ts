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
    'Muhammed Ameen Sulaiman is a technologist, product builder, and Co-Founder & CTO of Appetite, where he leads engineering and product development across a growing portfolio of digital products and platforms.',
    'His work sits at the intersection of technology and execution. He takes ideas from early concepts through architecture, development, deployment, and into the hands of real users. At Appetite, he works across AI, blockchain, Web3, governance, and modern software infrastructure, with a particular focus on turning emerging technologies into practical products.',
    'He has built and shipped products across mobile, web, and decentralized systems, working across the full product lifecycle, from defining technical direction and designing systems to building products and leading teams through production. His approach is grounded in a simple principle: technology matters most when it can move from an interesting idea to something people can actually use.',
    'Alongside his work at Appetite, Muhammed is involved with QuantumX, contributing to the development of its technology ecosystem and helping translate ambitious ideas in emerging technology into usable products, infrastructure, and experiences.',
    'His technical background spans software engineering, product architecture, AI, blockchain, cloud infrastructure, and application development. Over the years, he has worked with startups, organizations, and communities to build products ranging from consumer applications to platforms for governance, impact, and emerging technology.',
    'He is particularly interested in the space between technology and human coordination, and how software, networks, and new forms of infrastructure can change the way people build, organize, and solve problems.',
    'With a background in Computer Applications and years of hands-on experience building software, Muhammed continues to focus on one thing: building technology that moves beyond prototypes and becomes infrastructure people can rely on.',
  ],
  focusAreas: ['Product Engineering', 'Emerging Technology', 'Digital Infrastructure'],
  metaDescription:
    'Muhammed Ameen Sulaiman is Co-Founder, CTO and Product Lead at QuantumX, building product engineering, emerging technology, and digital infrastructure into systems people can rely on.',
  contactBlurb:
    'Product collaborations, engineering partnerships, and technical conversations are all welcome. Write directly and it lands on the right desk.',
};

export const founders = { ajmal, ameen } as const;
