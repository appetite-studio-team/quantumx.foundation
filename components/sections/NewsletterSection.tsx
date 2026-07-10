'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { defaultViewport, defaultTransition } from '@/lib/motion-variants';

/**
 * Newsletter signup that posts to Netlify Forms.
 * Netlify detects the "newsletter" form from the static public/__forms.html;
 * this component submits to it over fetch so the user stays on the page.
 */
const FORM_NAME = 'newsletter';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': FORM_NAME, email }).toString(),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="bg-background py-section px-6 md:px-10">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col gap-6 border border-gray-secondary/20 bg-gray-secondary/5 p-8 md:flex-row md:items-center md:justify-between md:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={defaultTransition}
      >
        <div className="max-w-xl">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Stay in the loop
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight-heading text-text-primary md:text-3xl">
            Subscribe to our newsletter
          </h2>
          <p className="mt-3 text-base text-gray-secondary md:text-lg">
            Quantum research, product updates, and community events, straight to
            your inbox.
          </p>
        </div>

        {status === 'success' ? (
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent md:shrink-0">
            Thanks for subscribing.
          </p>
        ) : (
          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:shrink-0"
          >
            {/* Netlify detection + honeypot (hidden from users) */}
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden">
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="flex w-full flex-col gap-1">
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full border border-gray-secondary/30 bg-background px-4 py-3 text-sm text-text-primary placeholder:text-gray-secondary/60 focus:border-accent focus:outline-none sm:w-64"
              />
              {status === 'error' && (
                <span className="text-xs text-red-400">
                  Something went wrong. Please try again.
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex h-fit shrink-0 items-center justify-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-background transition-transform hover:translate-x-1 disabled:opacity-60"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe →'}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
