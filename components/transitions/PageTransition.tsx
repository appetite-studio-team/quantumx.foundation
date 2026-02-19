'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/motion-variants';

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  );
}
