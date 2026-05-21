/**
 * Content for the QuantumX "Quantum for Social Good" Hackathon page (/qx-hack).
 * Edit this file to update copy, problem statements, rules, and the apply URL.
 */

export const qxHack = {
  meta: {
    title: 'Quantum for Social Good Hackathon',
    /** Full-length SEO title for search results (up to ~60 chars is ideal). */
    seoTitle: 'Quantum for Social Good Hackathon - Bengaluru, May 23',
    description:
      'A 10-hour offline quantum hackathon at Startup Park, Bengaluru on May 23. Build a functional quantum MVP with real social impact. 19 problem statements, 4 tracks, UN SDG aligned. Free entry, food + workspace provided.',
    keywords: [
      'quantum hackathon',
      'quantum computing hackathon',
      'Bengaluru hackathon',
      'hackathon India 2026',
      'QuantumX',
      'iQue Startup Park',
      'Startup Park Bengaluru',
      'quantum for social good',
      'quantum MVP',
      'post-quantum cryptography hackathon',
      'quantum machine learning',
      'Qiskit hackathon',
      'PennyLane hackathon',
      'UN SDG hackathon',
      'quantum optimization',
      'hybrid quantum-classical',
      'student hackathon Bangalore',
      'May 23 2026 hackathon',
    ],
  },

  hero: {
    eyebrow: 'QX Hackathon · Bengaluru',
    title: 'Quantum for Social Good',
    titleAccent: 'Hackathon',
    tagline: 'Build. Innovate. Win.',
    description:
      'A 10-hour, offline hackathon by QuantumX × iQue Startup Park. Build a functional quantum MVP with real social impact.',
    date: 'May 23, 2026',
    location: 'Startup Park, Bengaluru',
    posterSrc: '/images/qx-hack/qx-hack-poster.png',
  },

  /**
   * Set this to the actual application URL (Luma / Google Form / Tally).
   * Falls back to a mailto so the page works out of the box.
   */
  applyUrl: 'https://luma.com/x9mbuajz',

  /** Google Maps link for the venue - used on the venue stat card. */
  venueUrl: 'https://maps.app.goo.gl/gWpFMMcUnfQTDh9P6',

  stats: [
    { icon: 'clock', label: 'Duration', value: '10 hours' },
    { icon: 'calendar', label: 'Date', value: 'May 23' },
    { icon: 'pin', label: 'Venue', value: 'Startup Park, Bengaluru' },
    { icon: 'users', label: 'Team size', value: '2–4 members' },
  ] as const,

  /** Cards shown on /qx-hack that link out to the standalone pages. */
  navCards: [
    // Hidden for now, problem statements not yet finalized.
    // {
    //   eyebrow: '01',
    //   title: 'Problem statements',
    //   description:
    //     '19 problems across beginner, intermediate, and advanced tiers. Aligned with UN SDGs - healthcare, climate, security, social impact, and more.',
    //   href: '/qx-hack/problem-statements',
    //   ctaLabel: 'View problems',
    // },
    {
      eyebrow: '01',
      title: 'Rules & regulations',
      description:
        'Eligibility, development rules, submission requirements, judging criteria - everything in one place.',
      href: '/qx-hack/rules',
      ctaLabel: 'View rules',
    },
  ] as const,

  problems: {
    heading: 'Problem statements',
    theme: 'Quantum for Social Good',
    intro:
      'Participants are required to build a functional MVP or prototype using quantum computing, quantum machine learning (QML), quantum-inspired optimization, or post-quantum cryptography (PQC). Solutions should address real-world challenges aligned with the United Nations Sustainable Development Goals (UN SDGs).',
    approaches: [
      'Quantum Computing',
      'Quantum Machine Learning (QML)',
      'Quantum-Inspired Optimization',
      'Post-Quantum Cryptography (PQC)',
    ],
    items: [
      {
        number: '01',
        title: 'Quantum-Assisted Disease Risk Prediction',
        domain: 'Healthcare & Emergency Systems',
        sdg: 'SDG 3 \u2013 Good Health & Well-being',
        statement:
          'Develop a predictive system that estimates disease risk using patient health data and enhances predictions using a hybrid quantum-classical ML approach.',
      },
      {
        number: '02',
        title: 'Quantum-Based Traffic Flow Optimization',
        domain: 'Smart Cities & Urban Optimization',
        sdg: 'SDG 11 \u2013 Sustainable Cities & Communities',
        statement:
          'Build a system that optimizes traffic routing or traffic signal management using quantum-inspired optimization techniques.',
      },
      {
        number: '03',
        title: 'Disaster Resource Allocation using Quantum Optimization',
        domain: 'Healthcare & Emergency Systems',
        sdg: 'SDG 11 & 13',
        statement:
          'Design a resource allocation system that distributes food, medical aid, or rescue resources efficiently during disasters using optimization techniques.',
      },
      {
        number: '04',
        title: 'Quantum-Safe Secure Communication System',
        domain: 'Cybersecurity & Digital Identity',
        sdg: 'SDG 16 \u2013 Peace, Justice & Strong Institutions',
        statement:
          'Develop a secure communication platform using post-quantum cryptographic algorithms to protect data against future quantum attacks.',
      },
      {
        number: '05',
        title: 'Smart Water Usage Prediction System',
        domain: 'Sustainability & Climate Tech',
        sdg: 'SDG 6 \u2013 Clean Water & Sanitation',
        statement:
          'Build a predictive system that forecasts water consumption patterns using historical usage data and quantum-enhanced ML models.',
      },
      {
        number: '06',
        title: 'Food Distribution Optimization for NGOs',
        domain: 'Agriculture & Food Systems',
        sdg: 'SDG 2 \u2013 Zero Hunger',
        statement:
          'Create a system that optimizes food distribution routes and allocation using quantum-inspired optimization methods.',
      },
      {
        number: '07',
        title: 'Energy Consumption Forecasting for Smart Homes',
        domain: 'Sustainability & Climate Tech',
        sdg: 'SDG 7 \u2013 Affordable & Clean Energy',
        statement:
          'Develop a predictive model for smart home energy consumption using quantum-enhanced machine learning.',
      },
      {
        number: '08',
        title: 'Waste Collection Route Optimization',
        domain: 'Smart Cities & Urban Optimization',
        sdg: 'SDG 11 \u2013 Sustainable Cities & Communities',
        statement:
          'Build an optimized routing system for waste collection vehicles using quantum-inspired path optimization techniques.',
      },
      {
        number: '09',
        title: 'Climate Risk Prediction using Hybrid Quantum Models',
        domain: 'Sustainability & Climate Tech',
        sdg: 'SDG 13 \u2013 Climate Action',
        statement:
          'Develop a hybrid quantum-classical model to predict environmental risks such as floods, pollution spikes, or heatwaves.',
      },
      {
        number: '10',
        title: 'Post-Quantum Secure Digital Identity System',
        domain: 'Cybersecurity & Digital Identity',
        sdg: 'SDG 9 \u2013 Industry, Innovation & Infrastructure',
        statement:
          'Design a secure authentication and identity verification system using post-quantum cryptographic techniques.',
      },
      {
        number: '11',
        title: 'Air Quality Index (AQI) Prediction using Hybrid Quantum Models',
        domain: 'Sustainability & Climate Tech',
        sdg: 'SDG 13 \u2013 Climate Action',
        statement:
          'Build a hybrid quantum-classical model that predicts AQI levels using pollution and environmental datasets.',
      },
      {
        number: '12',
        title: 'Quantum-Based Crop Yield Prediction',
        domain: 'Agriculture & Food Systems',
        sdg: 'SDG 2 \u2013 Zero Hunger',
        statement:
          'Create a crop yield prediction system using environmental and soil parameters enhanced with quantum machine learning.',
      },
      {
        number: '13',
        title: 'Post-Quantum Secure Voting System',
        domain: 'Cybersecurity & Digital Identity',
        sdg: 'SDG 16 \u2013 Peace, Justice & Strong Institutions',
        statement:
          'Develop a secure electronic voting system using post-quantum cryptographic algorithms.',
      },
      {
        number: '14',
        title: 'Quantum-Optimized Renewable Energy Distribution',
        domain: 'Sustainability & Climate Tech',
        sdg: 'SDG 7 \u2013 Affordable & Clean Energy',
        statement:
          'Design a system that optimizes renewable energy distribution across a grid using quantum or quantum-inspired optimization techniques.',
      },
      {
        number: '15',
        title: 'Drug Interaction Optimization using Quantum Simulation',
        domain: 'Healthcare & Emergency Systems',
        sdg: 'SDG 3 \u2013 Good Health & Well-being',
        statement:
          'Build a prototype that simulates or analyzes drug interactions using quantum computing techniques.',
      },
      {
        number: '16',
        title: 'Secure & Intelligent Emergency Response System',
        domain: 'Healthcare & Emergency Systems',
        sdg: 'SDGs 3, 11, 16',
        statement:
          'Create an emergency response platform combining quantum ML for incident prediction and post-quantum cryptography for secure communication.',
      },
      {
        number: '17',
        title: 'Quantum-Assisted Financial Fraud Detection',
        domain: 'Finance & Risk Analytics',
        sdg: 'SDG 8 \u2013 Decent Work & Economic Growth',
        statement:
          'Develop a quantum-enhanced anomaly detection system for identifying fraudulent financial transactions.',
      },
      {
        number: '18',
        title: 'Emergency Hospital Resource Optimization',
        domain: 'Healthcare & Emergency Systems',
        sdg: 'SDG 3 \u2013 Good Health & Well-being',
        statement:
          'Build a resource optimization system for hospitals to allocate ICU beds, staff, and medical equipment efficiently during emergencies.',
      },
      {
        number: '19',
        title: 'Quantum-Based Supply Chain Optimization for Essentials',
        domain: 'Logistics & Supply Chain',
        sdg: 'SDG 9 \u2013 Industry, Innovation & Infrastructure',
        statement:
          'Develop a system that optimizes supply chain logistics for essential goods using quantum-inspired optimization techniques.',
      },
    ],
  },

  rules: {
    heading: 'Rules & regulations',
    subheading: '12 sections. Read them once, then go build something quantum.',
    sections: [
      {
        number: '01',
        title: 'Eligibility & Participation',
        type: 'list' as const,
        items: [
          'Open to students, developers, and researchers.',
          'Register individually or as a team before the deadline.',
          'Team size: minimum 2, maximum 4 members.',
          'Each participant can be part of only one team.',
        ],
      },
      {
        number: '02',
        title: 'Hackathon Format',
        type: 'keyvalue' as const,
        items: [
          { key: 'Mode', value: 'Offline' },
          { key: 'Duration', value: '10 hours' },
          { key: 'Date', value: 'May 23 (Saturday)' },
        ],
        footnote: 'Teams must work only during the official hackathon hours.',
      },
      {
        number: '03',
        title: 'Problem Statements & Tracks',
        type: 'list' as const,
        intro: 'Participants must choose one track and build a solution aligned with it:',
        items: [
          'Sustainability & Climate',
          'Healthcare & Life Sciences',
          'Security & Privacy (Post-Quantum Focus)',
          'Social Impact & Optimization',
        ],
        footnote: 'Solutions must align with UN Sustainable Development Goals (SDGs).',
      },
      {
        number: '04',
        title: 'Development Rules',
        type: 'mixed' as const,
        blocks: [
          {
            label: 'Requirements',
            items: [
              'Build a functional MVP (Minimum Viable Product).',
              'Must include a quantum or quantum-inspired component with a clear explanation of its role.',
            ],
          },
          {
            label: 'Allowed tools',
            items: [
              'Qiskit, PennyLane, Cirq',
              'Hybrid AI frameworks (PyTorch, TensorFlow Quantum)',
              'Open-source libraries',
            ],
          },
          {
            label: 'Templates',
            items: [
              'Pre-built templates are allowed, but core logic must be developed during the hackathon.',
            ],
          },
        ],
      },
      {
        number: '05',
        title: 'Code of Conduct',
        type: 'list' as const,
        items: [
          'Maintain professional and respectful behavior.',
          'No harassment, discrimination, or misconduct.',
          'Follow instructions from organizers and mentors.',
          'Any violation may lead to immediate disqualification.',
        ],
      },
      {
        number: '06',
        title: 'Fair Play Policy',
        type: 'list' as const,
        items: [
          'Do not copy solutions from external sources or other teams.',
          'Previously built projects without modification are prohibited.',
          'Internet usage is allowed for research and documentation only.',
          'Direct copying of full solutions is strictly forbidden.',
          'Participants must bring their own laptops / systems.',
        ],
      },
      {
        number: '07',
        title: 'Mentorship & Checkpoints',
        type: 'checkpoints' as const,
        intro: 'Mentors will be available during the event. Two mandatory checkpoints:',
        items: [
          {
            label: 'Checkpoint 1',
            description: 'Validate idea, quantum component, and progress.',
          },
          {
            label: 'Checkpoint 2',
            description: 'Ensure MVP functionality and demo readiness.',
          },
        ],
        footnote: 'Teams must present progress when requested.',
      },
      {
        number: '08',
        title: 'Submission Requirements',
        type: 'list' as const,
        intro: 'Each team must submit:',
        items: [
          'GitHub repository (with README)',
          'Architecture diagram',
          'PPT (5–6 slides)',
          'Working demo',
          'Explanation of problem statement, solution, and quantum component',
        ],
        footnote: 'Late submissions may not be accepted.',
      },
      {
        number: '09',
        title: 'Presentation Rules',
        type: 'keyvalue' as const,
        items: [
          { key: 'Demo + explanation', value: '5 minutes' },
          { key: 'Q&A', value: '2 minutes' },
        ],
        footnote: 'Demo must be live or pre-recorded (if technical issues occur). All team members should be familiar with the project.',
      },
      {
        number: '10',
        title: 'Shortlisting & Final Round',
        type: 'list' as const,
        items: [
          'Top 4 teams will be selected for the final round.',
          'Final round may include advanced evaluation and additional Q&A.',
          '1 winning team will be declared.',
        ],
      },
      {
        number: '11',
        title: 'Intellectual Property',
        type: 'list' as const,
        items: [
          'All projects remain the intellectual property of participants.',
          'Organizers may use project summaries for promotion and documentation.',
        ],
      },
      {
        number: '12',
        title: 'Disqualification Criteria',
        type: 'list' as const,
        intro: 'Teams may be disqualified if they:',
        items: [
          'Violate rules or code of conduct.',
          'Submit plagiarized work.',
          'Fail to demonstrate a working MVP.',
          'Do not include a quantum component.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Do I need quantum experience?',
      a: 'No. We welcome first-timers. There will be mentors on-site, and a curated list of starter resources sent before the day.',
    },
    {
      q: 'Is there a participation fee?',
      a: 'No. Participation is free. Food and workspace are provided on-site.',
    },
    {
      q: 'What should I bring?',
      a: 'A laptop, charger, and your team. Anything you build with: hardware, simulators, models, all welcome.',
    },
    {
      q: 'Is there a prize?',
      a: 'Yes, prize details are TBA. We’ll announce the prize pool and recognition closer to the day.',
    },
  ],
} as const;

export type QxHackContent = typeof qxHack;
export type RuleSection = (typeof qxHack.rules.sections)[number];
