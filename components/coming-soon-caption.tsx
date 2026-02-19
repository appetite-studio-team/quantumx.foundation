'use client';

import { useState, useEffect } from 'react';

const CAPTIONS = [
  'Deploying qubits... please hold.',
  'Entangling the final components.',
  'Compiling the quantum stack as we speak.',
  'Almost out of superposition.',
  'The team is in deep focus mode.',
  'Calibrating... ETA: soon.',
  'This page is under quantum construction.',
  'Building at Planck speed.',
  "The wavefunction hasn't collapsed yet.",
  'Hold tight - the bits are becoming qubits.',
];

export function RandomComingSoonCaption() {
  const [caption, setCaption] = useState(CAPTIONS[0]);

  useEffect(() => {
    setCaption(CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)]);
  }, []);

  return <>{caption}</>;
}
