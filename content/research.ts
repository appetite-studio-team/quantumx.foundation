/**
 * Research publications listed on /research.
 * Add new entries to the `publications` array.
 */

export type ResearchPublication = {
  title: string;
  abstract: string;
  href: string;
  /** Optional venue, year, or authors line shown above the title. */
  meta?: string;
};

export const research = {
  heading: 'Research',
  subheading:
    'Peer-reviewed work and technical publications from QuantumX Foundation and our collaborators.',
  publications: [
    {
      title: 'Decoherence in quantum communication protocols',
      meta: 'ResearchGate',
      abstract:
        'Applications of quantum mechanics in the communication tasks lead to a new field of research known as quantum communication. Though quantum channels offer high security, they are vulnerable to the noise. This is due to the interaction of the physical system with the environment. The present work aims to study the different types of noise models in certain quantum communication protocols. To be precise, bidirectional quantum direct secure communication protocols using non maximally entangled states will be analyzed. The analysis would help us to understand the communication protocols in the presence of decoherence.',
      href: 'https://www.researchgate.net/publication/353156548_Decoherence_in_quantum_communication_protocols',
    },
  ] as ResearchPublication[],
} as const;
