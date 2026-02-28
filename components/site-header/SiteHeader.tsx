'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components/menu/Menu';
import { useTheme } from '@/components/theme/ThemeContext';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="fixed left-0 right-0 top-10 z-[10001] flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        <Link
          href="/"
          className="text-text-primary hover:opacity-80 transition-opacity"
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
        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-text-primary hover:text-accent transition-colors md:text-sm"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '[LIGHT]' : '[DARK]'}
          </button>
          <button
            type="button"
            className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-text-primary hover:text-accent"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            [MENU]
          </button>
        </div>
      </header>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
