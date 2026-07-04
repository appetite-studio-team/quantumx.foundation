'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components/menu/Menu';
import { useTheme } from '@/components/theme/ThemeContext';
import { menuItems } from '@/content/site';
import { XIcon, LinkedInIcon } from '@/components/icons';

const navLinkClassName =
  'font-heading text-sm font-medium uppercase tracking-[0.2em] text-text-primary hover:text-accent transition-colors';

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-7 md:flex lg:gap-9" aria-label="Primary">
      {menuItems.map((item) =>
        'links' in item ? (
          <div key={item.id} className="flex items-center gap-4">
            {item.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent transition-colors"
                aria-label={link.label}
              >
                {link.label === 'X' ? (
                  <XIcon className="h-4 w-4" />
                ) : (
                  <LinkedInIcon className="h-4 w-4" />
                )}
              </a>
            ))}
          </div>
        ) : 'external' in item && item.external ? (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClassName}
          >
            {item.label}
          </a>
        ) : (
          <Link key={item.id} href={item.href} className={navLinkClassName}>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[10001] flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
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
          <DesktopNav />
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
            className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-text-primary hover:text-accent md:hidden"
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
