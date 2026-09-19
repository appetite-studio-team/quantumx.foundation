'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, joinCta, site } from '@/content/site';
import { XIcon, LinkedInIcon, InstagramIcon } from '@/components/icons';

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

const linkClassName =
  'font-heading text-2xl font-medium uppercase tracking-tight text-text-primary hover:text-accent md:text-3xl';

const groupLabelClassName =
  'font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-gray-secondary';

function SocialIcon({ label, className }: { label: string; className: string }) {
  if (label === 'X') return <XIcon className={className} />;
  if (label === 'Instagram') return <InstagramIcon className={className} />;
  return <LinkedInIcon className={className} />;
}

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
            <div className="flex max-h-full w-full max-w-md flex-col items-center gap-8 overflow-y-auto py-24 text-center md:gap-10">
              <ul className="flex flex-col gap-7 md:gap-9">
                {navItems.map((item, i) => (
                  <motion.li key={item.id} custom={i} variants={itemVariants}>
                    {'links' in item ? (
                      <div className="flex flex-col items-center gap-1">
                        <p className={groupLabelClassName}>{item.label}</p>
                        {item.links.map((link) =>
                          link.external ? (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={linkClassName}
                              onClick={onClose}
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link key={link.href} href={link.href} className={linkClassName} onClick={onClose}>
                              {link.label}
                            </Link>
                          )
                        )}
                      </div>
                    ) : (
                      <Link href={item.href} className={linkClassName} onClick={onClose}>
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                custom={navItems.length}
                variants={itemVariants}
                className="flex flex-col items-center gap-8"
              >
                <a
                  href={joinCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-cta-bg)] px-8 py-3 font-heading text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-cta-text)] transition-opacity hover:opacity-85"
                  onClick={onClose}
                >
                  {joinCta.label}
                </a>
                <div className="flex items-center justify-center gap-6 md:gap-8">
                  {site.externalLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-accent transition-colors"
                      onClick={onClose}
                      aria-label={link.label}
                    >
                      <SocialIcon label={link.label} className="h-7 w-7 md:h-8 md:w-8" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
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
