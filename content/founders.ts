/**
 * Founder profile content.
 * One entry per founder, keyed by the /founder/<slug> route segment.
 */

export type Founder = {
  slug: string;
  name: string;
  role: string;
  email: string;
  linkedin: string;
  headline: string;
  photo: string;
  photoAlt: string;
  bio: string[];
  focusAreas: string[];
};

export const ajmal: Founder = {
  slug: 'ajmal',
  name: 'Ajmal Ibn Mohammed Althaf',
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
};

export const founders = { ajmal } as const;
