'use client';

export function AnnouncementBanner() {
  return (
    <div className="fixed left-0 right-0 top-0 z-[10002] bg-white py-2 px-3 md:px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 text-center text-xs text-black md:gap-2 md:text-sm">
        <span className="hidden sm:inline">
          What breaks first during a post-quantum migration?
        </span>
        <span className="sm:hidden">Post-quantum migration</span>
        <a
          href="https://www.linkedin.com/pulse/what-breaks-first-during-post-quantum-migration-quantumx-foundation-69zdc/"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap font-medium underline"
          data-cursor="link"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
