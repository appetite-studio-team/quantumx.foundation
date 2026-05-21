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
    subheading:
      '19 problems across three difficulty levels. Every solution must include a quantum or quantum-inspired component and align with UN SDGs.',
    tiers: [
      {
        level: 'beginner' as const,
        label: 'Beginner',
        description: 'Highly feasible in 10 hours. Great starting points for first-time quantum builders.',
        color: 'emerald' as const,
        problems: [
          {
            number: '01',
            title: 'Quantum-Assisted Disease Risk Prediction',
            summary: 'Build a predictive model using patient health data to estimate disease risk, enhanced with a quantum or hybrid ML component. Focus on classification and performance comparison.',
          },
          {
            number: '02',
            title: 'Quantum-Based Traffic Flow Optimization',
            summary: 'Develop a system that optimizes traffic signals or routing using quantum-inspired optimization to reduce congestion and improve efficiency in urban environments.',
          },
          {
            number: '03',
            title: 'Disaster Resource Allocation using Quantum Optimization',
            summary: 'Design an optimization system to allocate limited resources (food, medical aid, rescue teams) efficiently during disasters using quantum techniques.',
          },
          {
            number: '04',
            title: 'Quantum-Safe Secure Communication System',
            summary: 'Create a secure communication system (chat/API) using post-quantum cryptographic algorithms to ensure protection against future quantum attacks.',
          },
          {
            number: '05',
            title: 'Smart Water Usage Prediction System',
            sdg: 'SDG 6 \u2013 Clean Water & Sanitation',
            summary: 'Water wastage and inefficient usage are major issues. Predict water usage patterns using historical data enhanced with a quantum ML model.',
            challenge: 'Build a system that predicts water usage patterns using historical data and enhances predictions using a quantum-enhanced ML model.',
            mvp: ['Input: Historical water usage data', 'Output: Predicted usage / demand'],
          },
          {
            number: '06',
            title: 'Food Distribution Optimization for NGOs',
            sdg: 'SDG 2 \u2013 Zero Hunger',
            summary: 'Food distribution systems often fail to efficiently allocate surplus food to areas in need.',
            challenge: 'Design a system that optimizes food distribution routes or allocation using quantum-inspired optimization.',
            mvp: ['Input: Food supply + demand locations', 'Output: Optimized distribution plan'],
          },
          {
            number: '07',
            title: 'Energy Consumption Forecasting for Smart Homes',
            sdg: 'SDG 7 \u2013 Affordable & Clean Energy',
            summary: 'Energy consumption is often unpredictable, leading to inefficiencies and higher costs.',
            challenge: 'Create a model that predicts household energy usage and demonstrates improvement using quantum-enhanced ML.',
            mvp: ['Input: Smart meter / energy usage data', 'Output: Energy consumption forecast'],
          },
          {
            number: '08',
            title: 'Waste Collection Route Optimization',
            sdg: 'SDG 11 \u2013 Sustainable Cities',
            summary: 'Inefficient waste collection routes increase fuel consumption and pollution.',
            challenge: 'Build a system that optimizes garbage collection routes using quantum-inspired routing algorithms.',
            mvp: ['Input: Locations + routes', 'Output: Optimized path'],
          },
        ],
      },
      {
        level: 'intermediate' as const,
        label: 'Intermediate',
        description: 'Feasible with proper scope management. Good for teams with some quantum or ML background.',
        color: 'amber' as const,
        problems: [
          {
            number: '09',
            title: 'Climate Risk Prediction using Hybrid Quantum Models',
            summary: 'Develop a hybrid quantum-classical model to predict environmental risks like floods or air pollution using weather or climate datasets.',
          },
          {
            number: '10',
            title: 'Post-Quantum Secure Digital Identity System',
            summary: 'Build a secure authentication system using post-quantum cryptography to protect user identity and prevent future security vulnerabilities.',
          },
          {
            number: '11',
            title: 'Air Quality Index (AQI) Prediction',
            sdg: 'SDG 13 \u2013 Climate Action',
            summary: 'Air pollution is a growing concern in cities, and accurate AQI prediction can help take preventive measures.',
            challenge: 'Develop a hybrid quantum-classical model to predict AQI levels based on environmental data.',
            mvp: ['Input: Pollution data (PM2.5, CO, etc.)', 'Output: AQI prediction'],
          },
          {
            number: '12',
            title: 'Quantum-Based Crop Yield Prediction',
            sdg: 'SDG 2 \u2013 Zero Hunger',
            summary: 'Farmers often lack accurate predictions for crop yield due to changing environmental conditions.',
            challenge: 'Build a system that predicts crop yield using environmental and soil data with a quantum-enhanced ML model.',
            mvp: ['Input: Soil, rainfall, temperature data', 'Output: Predicted yield'],
          },
          {
            number: '13',
            title: 'Post-Quantum Secure Voting System',
            sdg: 'SDG 16 \u2013 Peace, Justice & Strong Institutions',
            summary: 'Electronic voting systems must be secure against future quantum attacks.',
            challenge: 'Design a secure voting prototype using post-quantum cryptographic techniques.',
            mvp: ['Voting interface', 'Secure vote storage', 'PQC-based encryption'],
          },
        ],
      },
      {
        level: 'advanced' as const,
        label: 'Advanced',
        description: 'Complex builds - best for the final round and strong teams with quantum + ML experience.',
        color: 'red' as const,
        problems: [
          {
            number: '14',
            title: 'Quantum-Optimized Renewable Energy Distribution',
            summary: 'Design a system to optimize renewable energy distribution across a grid using quantum or quantum-inspired optimization techniques to minimize loss and improve efficiency.',
          },
          {
            number: '15',
            title: 'Drug Interaction Optimization using Quantum Simulation',
            summary: 'Create a prototype that simulates or analyzes drug interactions using quantum computing approaches to identify effective combinations or outcomes.',
          },
          {
            number: '16',
            title: 'Secure & Intelligent Emergency Response System',
            summary: 'Build an integrated system combining quantum machine learning for incident prediction and post-quantum cryptography for secure communication in emergency scenarios.',
          },
          {
            number: '17',
            title: 'Quantum-Assisted Financial Fraud Detection',
            sdg: 'SDG 8 \u2013 Decent Work & Economic Growth',
            summary: 'Financial fraud detection requires identifying complex patterns in transaction data.',
            challenge: 'Build a quantum-enhanced anomaly detection system for identifying fraudulent transactions.',
            mvp: ['Input: Transaction dataset', 'Output: Fraud detection score'],
          },
          {
            number: '18',
            title: 'Emergency Hospital Resource Optimization',
            sdg: 'SDG 3 \u2013 Good Health & Well-being',
            summary: 'Hospitals often struggle with resource allocation (beds, ICU, staff) during emergencies.',
            challenge: 'Design a system that optimizes hospital resource allocation using quantum optimization techniques.',
            mvp: ['Input: Resource availability + demand', 'Output: Allocation strategy'],
          },
          {
            number: '19',
            title: 'Quantum-Based Supply Chain Optimization for Essentials',
            sdg: 'SDG 9 \u2013 Industry & Infrastructure',
            summary: 'Supply chains for essential goods (food, medicine) need efficient routing and allocation.',
            challenge: 'Build a system that optimizes supply chain logistics using quantum-inspired optimization.',
            mvp: ['Input: Supply chain nodes', 'Output: Optimized flow'],
          },
        ],
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
