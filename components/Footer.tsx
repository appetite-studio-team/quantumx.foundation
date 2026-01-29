'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { XIcon, LinkedInIcon } from './icons';
import { NewsletterForm } from './NewsletterForm';
import { Toast } from './Toast';

export function Footer() {
  const [showToast, setShowToast] = useState(false);

  // Check for success parameter in URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowToast(true);
      // Clean URL by removing query parameter
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleFormSuccess = useCallback(() => {
    setShowToast(true);
  }, []);

  const handleToastClose = useCallback(() => {
    setShowToast(false);
  }, []);

  return (
    <>
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center text-center mb-12">
            {/* Logo and Tagline */}
            <div className="mb-8">
              <Image
                src="/images/qx-logo with name.png"
                alt="QuantumX"
                width={120}
                height={48}
                className="h-10 md:h-12 w-auto object-contain mb-3 mx-auto invert"
              />
              <p className="text-gray-400 mb-6">
                Building the foundations of the post-quantum era.
              </p>
              <NewsletterForm onSuccess={handleFormSuccess} />
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-800 flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://x.com/_Quantum_X_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/quantumx-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedInIcon />
              </a>
            </div>
            <p className="text-gray-500 text-sm">quantumx.foundation</p>
          </div>
        </div>
      </footer>

      <Toast
        show={showToast}
        message="Thank you for subscribing! We'll keep you updated."
        onClose={handleToastClose}
      />
    </>
  );
}
