'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const motionVariants = {
  tap: { scale: 0.97 },
  hover: { scale: 1.02 },
  rest: { scale: 1 },
};

interface CopyEmailProps {
  email: string;
  className?: string;
}

export function CopyEmail({ email, className = '' }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const [showFloatingLabel, setShowFloatingLabel] = useState(false);
  const [floatingPosition, setFloatingPosition] = useState({ x: 0, y: 0 });

  const handleCopy = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault();
      const clientX = 'clientX' in e ? e.clientX : window.innerWidth / 2;
      const clientY = 'clientY' in e ? e.clientY : window.innerHeight / 2;

      if (!navigator.clipboard?.writeText) return;
      navigator.clipboard.writeText(email).then(() => {
        setFloatingPosition({ x: clientX, y: clientY });
        setShowFloatingLabel(true);
        setCopied(true);
        setTimeout(() => setShowFloatingLabel(false), 1200);
        setTimeout(() => setCopied(false), 1500);
      });
    },
    [email]
  );

  const displayText = copied ? 'EMAIL COPIED' : email.toUpperCase();

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.button
        type="button"
        onClick={handleCopy}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCopy(e);
          }
        }}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={motionVariants}
        transition={{ duration: 0.2, ease }}
        className="relative cursor-pointer rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        style={{ transformOrigin: 'center' }}
        aria-label={`Copy email ${email}`}
        data-cursor="link"
      >
        <span className="relative inline-block font-heading text-xl font-bold uppercase leading-tight tracking-tight text-text-primary transition-opacity duration-200 hover:opacity-90 sm:text-2xl md:text-4xl lg:text-5xl">
          <motion.span
            className="relative block break-words"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={displayText}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.25, ease }}
                className="inline-block"
              >
                {displayText}
              </motion.span>
            </AnimatePresence>
          </motion.span>
          {/* Underline grow on hover */}
          <motion.span
            className="absolute bottom-0 left-0 h-px bg-accent/70"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2, ease }}
            style={{ transformOrigin: 'left', width: '100%' }}
            aria-hidden
          />
        </span>
        {/* Subtle glow on hover */}
        <motion.span
          className="pointer-events-none absolute inset-0 -z-10 rounded opacity-0 blur-xl transition-opacity duration-200"
          whileHover={{ opacity: 1 }}
          style={{ boxShadow: '0 0 40px rgba(215, 255, 0, 0.08)' }}
          aria-hidden
        />
      </motion.button>

      {/* Floating "COPIED" label near click position */}
      <AnimatePresence>
        {showFloatingLabel && (
          <motion.span
            className="pointer-events-none fixed z-[10004] font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            style={{
              left: floatingPosition.x,
              top: floatingPosition.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              y: -24,
              scale: 0.96,
              transition: { duration: 1.2, ease },
            }}
            exit={{ opacity: 0 }}
            aria-hidden
          >
            COPIED
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
