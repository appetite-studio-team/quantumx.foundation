'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { XIcon, LinkedInIcon, MenuIcon } from './icons';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 py-2 px-3 md:px-4" style={{ backgroundColor: '#bdee63' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 md:gap-2 text-black text-xs md:text-sm">
          <span className="hidden sm:inline">What breaks first during a post-quantum migration?</span>
          <span className="sm:hidden text-center">Post-quantum migration</span>
          <a
            href="https://www.linkedin.com/pulse/what-breaks-first-during-post-quantum-migration-quantumx-foundation-69zdc/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline whitespace-nowrap"
          >
            Read more
          </a>
        </div>
      </div>

      <header className="fixed top-9 left-0 right-0 bg-black z-50 border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/qx-logo with name.png"
            alt="QuantumX"
            width={120}
            height={48}
            className="h-10 md:h-12 w-auto object-contain invert"
            priority
          />
        </Link>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://x.com/_Quantum_X_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <XIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/quantumx-foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-black border-t border-gray-800`}
      >
        <div className="px-6 py-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/_Quantum_X_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <XIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/quantumx-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
