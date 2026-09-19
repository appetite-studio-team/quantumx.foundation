'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@/components/menu/Menu';
import { useTheme } from '@/components/theme/ThemeContext';
import { navItems, joinCta, type NavLink } from '@/content/site';
import { SunIcon, MoonIcon } from '@/components/icons';

const navLinkClassName =
  'font-heading text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-accent xl:text-sm xl:tracking-[0.2em]';

const isActive = (pathname: string, href: string) =>
  href.startsWith('/') && (pathname === href || pathname.startsWith(`${href}/`));

function DropdownLink({ link, onSelect }: { link: NavLink; onSelect: () => void }) {
  const content = (
    <>
      <span className="block font-heading text-xs font-medium uppercase tracking-[0.16em] text-text-primary transition-colors group-hover:text-accent">
        {link.label}
        {link.external && <span aria-hidden="true"> ↗</span>}
      </span>
      <span className="mt-1 block text-xs text-gray-secondary">{link.description}</span>
    </>
  );
  const className =
    'group block px-4 py-3 transition-colors hover:bg-[var(--color-muted-bg)] focus-visible:bg-[var(--color-muted-bg)] focus-visible:outline-none';

  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onSelect}>
      {content}
    </a>
  ) : (
    <Link href={link.href} className={className} onClick={onSelect}>
      {content}
    </Link>
  );
}

function DesktopNav() {
  const pathname = usePathname();
  const [openId, setOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => setOpenId(null), [pathname]);

  useEffect(() => {
    if (!openId) return;
    const handlePointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenId(null);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      navRef.current?.querySelector<HTMLButtonElement>(`[data-nav-trigger="${openId}"]`)?.focus();
      setOpenId(null);
    };
    document.addEventListener('pointerdown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [openId]);

  const openNow = (id: string) => {
    clearTimeout(closeTimer.current);
    setOpenId(id);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenId(null), 120);
  };

  return (
    <nav ref={navRef} className="hidden items-center gap-6 lg:flex xl:gap-10" aria-label="Primary">
      {navItems.map((item) => {
        if (!('links' in item)) {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={`${navLinkClassName} ${active ? 'text-accent' : 'text-text-primary'}`}
            >
              {item.label}
            </Link>
          );
        }

        const open = openId === item.id;
        const active = item.links.some((link) => isActive(pathname, link.href));
        const panelId = `nav-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="relative"
            onPointerEnter={(e) => e.pointerType === 'mouse' && openNow(item.id)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && closeSoon()}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) closeSoon();
            }}
          >
            <button
              type="button"
              data-nav-trigger={item.id}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => (open ? setOpenId(null) : openNow(item.id))}
              className={`${navLinkClassName} flex items-center gap-1.5 ${
                active || open ? 'text-accent' : 'text-text-primary'
              }`}
            >
              {item.label}
              <svg
                aria-hidden="true"
                viewBox="0 0 10 6"
                className={`h-1.5 w-2.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              >
                <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  id={panelId}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                >
                  <div className="w-72 border border-[var(--color-muted-border)] bg-background p-2 shadow-2xl">
                    {item.links.map((link) => (
                      <DropdownLink key={link.href} link={link} onSelect={() => setOpenId(null)} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="fixed left-0 right-0 top-10 z-[10001] flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        <Link
          href="/"
          className="shrink-0 text-text-primary hover:opacity-80 transition-opacity"
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
          <a
            href={joinCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-[var(--color-cta-bg)] px-4 py-2 font-heading text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-cta-text)] transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cta-ring-offset)] sm:inline-flex"
          >
            {joinCta.label}
          </a>
          <button
            type="button"
            className="text-text-primary hover:text-accent transition-colors"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
          <button
            type="button"
            className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-text-primary hover:text-accent lg:hidden"
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
