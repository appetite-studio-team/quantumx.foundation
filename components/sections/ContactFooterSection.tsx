'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';
import { site, projectLinks } from '@/content/site';

export function ContactFooterSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(site.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-background pt-section pb-12 text-text-primary md:px-10 md:pb-16"
    >
      {/* Gradient: dark → purple glow at bottom */}
      <div
        className="pointer-events-none absolute inset-0 top-1/2 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/25"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Email + subtext */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <div className="relative inline-block">
            <button
              type="button"
              onClick={copyEmail}
              className="group relative block font-heading text-xl font-bold uppercase leading-tight tracking-tight text-text-primary hover:text-accent break-words text-left sm:text-2xl md:text-4xl lg:text-5xl"
              data-cursor="link"
              aria-label={`Copy email ${site.email}`}
            >
              {site.email.toUpperCase()}
              {/* Copy email tooltip - purple box, white text */}
              <span
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 font-heading text-sm font-medium uppercase tracking-wider text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none bg-purple-600 ${copied ? '!opacity-100' : ''}`}
                aria-hidden
              >
                {copied ? 'Copied!' : 'Copy email →'}
              </span>
            </button>
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-secondary">
            {site.tagline}
          </p>
        </motion.div>

        {/* Footer grid */}
        <motion.div
          className="mt-16 grid gap-12 border-t border-gray-secondary/20 pt-12 md:mt-24 md:grid-cols-3 md:gap-8 md:pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={defaultViewport}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Projects</p>
            <nav className="mt-2 flex flex-col gap-2" aria-label="Project links">
              {projectLinks.map(({ label, href }) =>
                href.startsWith('http') ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-primary hover:text-accent"
                    data-cursor="link"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm text-text-primary hover:text-accent"
                    data-cursor="link"
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Explore</p>
            <nav className="mt-2 flex flex-col gap-2" aria-label="Internal links">
              {site.internalLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-text-primary hover:text-accent"
                  data-cursor="link"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-secondary">Follow</p>
            <nav className="mt-2 flex flex-col gap-2" aria-label="External links">
              {site.externalLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-primary hover:text-accent"
                  data-cursor="link"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
