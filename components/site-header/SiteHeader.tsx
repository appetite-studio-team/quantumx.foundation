'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components/menu/Menu';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-10 z-[10001] flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        <Link
          href="/"
          className="text-text-primary hover:opacity-80 transition-opacity"
          data-cursor="link"
          aria-label="QuantumX Foundation home"
        >
          <Image
            src="/images/App-Icon-Black.png"
            alt=""
            width={40}
            height={40}
            className="h-8 w-8 md:h-9 md:w-9"
          />
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
