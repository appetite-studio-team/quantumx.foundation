'use client';

import { useState } from 'react';
import Link from 'next/link';
import { hero } from '@/content/home';
import { Menu } from '@/components/menu/Menu';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[10001] flex items-center justify-between px-6 pt-8 md:px-10 md:pt-10">
        <Link
          href="/"
          className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-text-primary hover:text-accent"
          data-cursor="link"
        >
          {hero.logoLabel}
        </Link>
        <button
          type="button"
          className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-text-primary hover:text-accent"
          data-cursor="link"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          [MENU]
        </button>
      </header>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
