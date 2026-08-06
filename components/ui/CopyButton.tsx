'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircleIcon, CopyIcon } from '@/components/icons';

interface CopyButtonProps {
  /** Text written to the clipboard. */
  value: string;
  /** Accessible label, e.g. "Copy email address". */
  label?: string;
  className?: string;
}

/**
 * Compact copy control sized to sit beside a bordered CTA link.
 * For the display-scale treatment used on /contact, see CopyEmail.
 */
export function CopyButton({ value, label = 'Copy', className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleCopy = useCallback(() => {
    if (!navigator.clipboard?.writeText) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1500);
    });
  }, [value]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${label}: ${value}`}
      className={`inline-flex min-w-[9rem] items-center justify-center gap-2 border border-gray-secondary/30 px-5 py-3 text-sm uppercase tracking-[0.2em] text-gray-secondary transition-colors hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      {copied ? (
        <CheckCircleIcon className="h-4 w-4 shrink-0" />
      ) : (
        <CopyIcon className="h-4 w-4 shrink-0" />
      )}
      <span>{copied ? 'Copied' : label}</span>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${value} copied to clipboard` : ''}
      </span>
    </button>
  );
}
