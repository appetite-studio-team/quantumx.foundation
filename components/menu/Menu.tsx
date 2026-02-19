'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '@/content/site';

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const itemVariants = {
  closed: { opacity: 0, x: -8 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * i },
  }),
  exit: { opacity: 0, x: -8 },
};

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial="closed"
            animate="open"
            exit="exit"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10002] bg-background/95 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.nav
            initial="closed"
            animate="open"
            exit="exit"
            variants={panelVariants}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[10003] flex items-center justify-center px-6 md:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-1 text-center md:gap-2">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  className="flex flex-col items-center gap-1 md:gap-2"
                >
                  {'links' in item ? (
                    <>
                      <span className="font-heading text-xs uppercase tracking-[0.25em] text-gray-secondary">
                        {item.label}
                      </span>
                      <div className="flex gap-6 md:gap-8">
                        {item.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-heading text-2xl font-medium uppercase tracking-tight text-text-primary hover:text-accent md:text-3xl lg:text-4xl"
                            data-cursor="link"
                            onClick={onClose}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-heading text-2xl font-medium uppercase tracking-tight text-text-primary hover:text-accent md:text-3xl lg:text-4xl"
                      data-cursor="link"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-6 top-8 font-heading text-sm uppercase tracking-[0.2em] text-gray-secondary hover:text-text-primary md:right-10 md:top-10"
              aria-label="Close menu"
            >
              [CLOSE]
            </button>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
