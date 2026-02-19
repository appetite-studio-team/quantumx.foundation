'use client';

import { useState, useEffect } from 'react';

const MEME_CAPTIONS = [
  'This page is in a superposition of existing and not existing.',
  'Error 404: Page failed to collapse into reality.',
  'The page you seek has decohered.',
  'We measured the page. It’s not here.',
  'This page is not in our Hilbert space.',
  '404: Observable not found.',
  'The link led to a null state.',
  'Page not found. Try adjusting your basis.',
  'This path has no eigenvalue.',
  'We looked. It’s just not there.',
];

export function Random404Caption() {
  const [caption, setCaption] = useState(MEME_CAPTIONS[0]);

  useEffect(() => {
    setCaption(MEME_CAPTIONS[Math.floor(Math.random() * MEME_CAPTIONS.length)]);
  }, []);

  return <>{caption}</>;
}
