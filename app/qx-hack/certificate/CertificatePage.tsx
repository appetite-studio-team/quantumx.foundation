'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PDFDocument, rgb } from 'pdf-lib';
import { defaultTransition } from '@/lib/motion-variants';

/* ---------- state types ---------- */

type Status = 'idle' | 'loading' | 'success' | 'error';

/* ---------- icons ---------- */

function DownloadIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12M12 16.5V3"
      />
    </svg>
  );
}

function MailIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function CheckIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WHATSAPP_URL = `https://wa.me/917902271729?text=${encodeURIComponent(
  'Hi, I need help downloading my Quantum for Social Good Hackathon certificate.'
)}`;

/* ---------- PDF generation ---------- */

async function generateCertificate(name: string): Promise<Blob> {
  const pdfBytes = await fetch('/hackathon-certificate.pdf').then((r) =>
    r.arrayBuffer(),
  );
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const page = pdfDoc.getPages()[0];
  const { width, height } = page.getSize();

  // Embed a standard font for the participant name
  const font = await pdfDoc.embedFont('Helvetica-Bold');

  // Format name: full uppercase to match certificate style
  const displayName = name.toUpperCase();

  const fontSize = 100;
  const textWidth = font.widthOfTextAtSize(displayName, fontSize);

  // Position the name directly below "THIS CERTIFICATE IS PROUDLY PRESENTED TO"
  // Aligned to match the left edge of "THIS" in the certificate
  const nameX = 200;
  const nameY = height * 0.42;

  page.drawText(displayName, {
    x: nameX,
    y: nameY,
    size: fontSize,
    font,
    color: rgb(1, 1, 1), // White text to match certificate style
  });

  // Draw a subtle underline beneath the name
  page.drawLine({
    start: { x: nameX, y: nameY - 10 },
    end: { x: nameX + Math.max(textWidth, 300), y: nameY - 10 },
    thickness: 1.5,
    color: rgb(1, 1, 1),
    opacity: 0.35,
  });

  const modifiedPdf = await pdfDoc.save();
  return new Blob([modifiedPdf.buffer as ArrayBuffer], { type: 'application/pdf' });
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ---------- main component ---------- */

export function CertificatePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [participantName, setParticipantName] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setError('');

    try {
      // 1. Verify email
      const res = await fetch('/api/qx-hack/certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        setStatus('error');
        return;
      }

      const name = data.name as string;
      setParticipantName(name);

      // 2. Generate personalized certificate
      const blob = await generateCertificate(name);

      // 3. Trigger download
      const safeName = name.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
      downloadBlob(blob, `QxHack_Certificate_${safeName}.pdf`);

      setStatus('success');
    } catch {
      setError('Failed to generate certificate. Please try again.');
      setStatus('error');
    }
  }

  return (
    <main className="relative">
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        {/* Purple background fill */}
        <div className="pointer-events-none absolute inset-0 bg-[#1a0533]" aria-hidden />

        {/* Layered purple/violet radial glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(70% 60% at 50% 30%, rgba(124, 58, 237, 0.40), transparent 70%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(50% 50% at 80% 20%, rgba(168, 85, 247, 0.20), transparent 60%)',
            }}
          />
        </div>

        {/* Faint grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center px-5 pt-20 pb-10 md:px-10 md:pt-28 md:pb-16">
          {/* Poster image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...defaultTransition, delay: 0.06 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-[0_20px_80px_rgba(124,58,237,0.35)] md:max-w-lg"
          >
            <Image
              src="/images/qx-hack/qx-hack-poster.png"
              alt="Quantum for Social Good Hackathon - May 23, Startup Park Bengaluru"
              width={800}
              height={800}
              priority
              className="h-auto w-full"
            />
          </motion.div>

          {/* Certificate download form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="mt-10 w-full max-w-md"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email input */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <MailIcon className="h-5 w-5 text-white/30" />
                </div>
                <input
                  id="certificate-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') {
                      setStatus('idle');
                      setError('');
                    }
                  }}
                  placeholder="Enter your registered email"
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-full border border-white/[0.12] bg-white/[0.05] py-3.5 pl-12 pr-5 font-heading text-sm tracking-wide text-white placeholder-white/35 backdrop-blur-xl transition-all duration-300 focus:border-violet-400/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-violet-500/20 disabled:opacity-50"
                />
              </div>

              {/* Download button */}
              <button
                type="submit"
                disabled={status === 'loading' || !email.trim()}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1a0533] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:shadow-none"
              >
                {status === 'loading' ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Generating...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckIcon className="h-4 w-4" />
                    Downloaded
                  </>
                ) : (
                  <>
                    <DownloadIcon className="h-4 w-4" />
                    Download Certificate
                  </>
                )}
              </button>
            </form>

            {/* Error message */}
            {status === 'error' && error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm text-red-300/90"
              >
                {error}
              </motion.p>
            )}

            {/* Success message */}
            {status === 'success' && participantName && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center"
              >
                <p className="text-sm text-emerald-300/90">
                  Certificate generated for{' '}
                  <span className="font-semibold text-emerald-200">{participantName}</span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setEmail('');
                    setParticipantName('');
                  }}
                  className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/70"
                >
                  Download another
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Description text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...defaultTransition, delay: 0.3 }}
            className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-white/50 md:text-base"
          >
            Enter the email you registered with to download your
            personalized participation certificate.
          </motion.p>
        </div>

        {/* Partnership logos - pinned to bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.7 }}
          className="relative z-10 flex flex-col items-center px-6 pb-10 text-center md:px-10 md:pb-14"
        >
          <p className="font-heading text-[10px] font-medium uppercase tracking-[0.35em] text-white/40 md:text-xs">
            A partnership between
          </p>

          <div className="mt-5 flex items-center gap-6 md:mt-6 md:gap-10">
            <div className="relative h-8 w-auto md:h-10">
              <Image
                src="/images/qx-hack/quantumx-logo.png"
                alt="QuantumX Foundation"
                width={160}
                height={48}
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>

            <span className="text-xl text-white/20 md:text-2xl">×</span>

            <div className="relative h-8 w-auto md:h-10">
              <Image
                src="/images/qx-hack/startup-park.png"
                alt="iQue Startup Park Bengaluru"
                width={200}
                height={48}
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-emerald-300/80"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Need help with certificate?
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.06] bg-[#0d0118]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:justify-between md:py-12 md:text-left">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <Image
              src="/images/qx-hack/quantumx-logo.png"
              alt="QuantumX Foundation"
              width={120}
              height={36}
              className="h-6 w-auto object-contain brightness-0 invert opacity-60"
            />
            <p className="mt-2 text-xs text-white/30">
              Building the foundations of the post-quantum era.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/30">
            <Link href="/" className="transition-colors hover:text-white/60">Home</Link>
            <Link href="/qx-hack" className="transition-colors hover:text-white/60">Hackathon</Link>
            <a href="https://quantumx.school/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/60">QuantumX School</a>
            <a href="https://x.com/_Quantum_X_" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/60">X (Twitter)</a>
            <a href="https://www.linkedin.com/company/quantumx-foundation/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/60">LinkedIn</a>
          </div>

          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} QuantumX Foundation
          </p>
        </div>
      </footer>
    </main>
  );
}
