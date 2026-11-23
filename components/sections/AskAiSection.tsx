/**
 * "Summarise with AI" strip. One-click handoffs to the major assistants, each
 * opened on "Summarize this page: <site URL>" so the assistant reads the page.
 */

const SITE_URL = 'https://quantumx.foundation/';
const q = encodeURIComponent(`Summarize this page: ${SITE_URL}`);

const ASSISTANTS: Array<{ label: string; href: string }> = [
  { label: 'ChatGPT', href: `https://chatgpt.com/?q=${q}` },
  { label: 'Claude', href: `https://claude.ai/new?q=${q}` },
  { label: 'Perplexity', href: `https://www.perplexity.ai/search?q=${q}` },
  { label: 'Google AI', href: `https://www.google.com/search?udm=50&q=${q}` },
];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 4.5 11.6 9a2 2 0 0 0 1.2 1.2l4.5 1.6-4.5 1.6a2 2 0 0 0-1.2 1.2L10 19.1l-1.6-4.5a2 2 0 0 0-1.2-1.2l-4.5-1.6 4.5-1.6A2 2 0 0 0 8.4 9L10 4.5Z" />
      <path d="M18.5 2.5v4M16.5 4.5h4M19 16v3M17.5 17.5h3" strokeLinecap="round" />
    </svg>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" aria-hidden="true" focusable="false">
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function AskAiSection() {
  return (
    <section aria-labelledby="ask-ai-heading" className="bg-background px-6 pb-section md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border border-accent/40 bg-accent/15 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex items-start gap-4">
          <Sparkle className="mt-0.5 h-7 w-7 shrink-0 text-accent" />
          <div>
            <h2
              id="ask-ai-heading"
              className="font-heading text-lg font-bold uppercase leading-snug tracking-tight-heading text-text-primary md:text-xl"
            >
              Summarise QuantumX Foundation with AI
            </h2>
            <p className="mt-1 text-base text-gray-secondary">
              Research, tooling, events and community programs in one answer
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-2.5">
          {ASSISTANTS.map((a) => (
            <li key={a.label}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-gray-secondary/30 bg-background/60 px-4 py-2.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <Arrow className="h-3 w-3 shrink-0 transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
