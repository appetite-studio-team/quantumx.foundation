/**
 * "Rooms we've been in" section content.
 * Hosts, venues and programmes QuantumX has run sessions with or joined.
 */

export type Room = {
  name: string;
  /** Optional tag rendered in the card's top-left corner. */
  badge?: string;
};

export const roomsContent = {
  heading: "Rooms we've been in",
  subheading: "Hosts, venues and programmes we've run sessions with or joined.",
  rooms: [
    { name: 'IBM Qiskit Fall Fest', badge: 'Official host 2026' },
    { name: 'University of Oxford' },
    { name: 'Imperial College London' },
    { name: 'University of Bristol' },
    { name: 'IIT Delhi' },
    { name: 'IISc Bengaluru' },
    { name: 'DIFC Innovation Hub' },
    { name: 'ISTE' },
    { name: 'Manipal Institute of Technology' },
    { name: 'IIIT Hyderabad' },
    { name: 'BQIT:26' },
    { name: 'Engine Shed Bristol' },
    { name: 'TinkerHub Foundation' },
    { name: 'Startup Park Bengaluru' },
    { name: 'Girls in Quantum' },
    { name: 'HKBK Group of Institutions' },
    { name: 'Kristu Jayanti University' },
    { name: 'VIT Chennai' },
    { name: 'Woi.eco' },
    { name: 'QETCI' },
  ] satisfies Room[],
};
