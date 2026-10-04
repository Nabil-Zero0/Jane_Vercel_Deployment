"use client";

import { useEffect, useState } from "react";

export function DeploymentNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open on load
    setIsOpen(true);
  }, []);

  return (
    <>
      {/* Floating trigger button to re-open anytime */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-amber-500/40 bg-background/90 px-3.5 py-1.5 text-xs font-medium text-amber-400 shadow-lg backdrop-blur-md transition-all hover:bg-amber-950/40 hover:border-amber-400"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
        </span>
        <span>Deployment Notice & Links</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl border border-amber-500/30 bg-zinc-950/95 p-6 md:p-8 text-foreground shadow-2xl shadow-amber-500/10 max-h-[92vh] overflow-y-auto">
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  Clearnet Demo Notice
                </span>
                <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400 font-mono">
                  SIH 2026
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 mb-3">
              Notice: Web Preview & Mock Data Information
            </h2>

            {/* Main Explanatory Text */}
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-amber-300">This is just a deployment.</strong> The data shown on this Vercel-deployed site is <strong className="text-zinc-100">synthetic mock data</strong> and we cannot show the real data here because of strict GitHub and web hosting policies.
              </p>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-xs md:text-sm text-zinc-300 space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">??</span>
                  <p>
                    We received a notice that pushing real dark web intelligence, raw onion scrapes, and illicit target dumps to core code repositories is against GitHub policy. Consequently, live onion scrapes <strong className="text-zinc-100">cannot be hosted or exposed on the Clearnet / public web</strong>.
                  </p>
                </div>
                <p className="text-zinc-400 pl-6">
                  All threat actors, addresses, pages, and graph relationships displayed in this interface are generated safely for UI evaluation.
                </p>
              </div>
            </div>

            {/* Real Data Access Options */}
            <div className="mt-5 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                How to verify real data & live scraping:
              </h3>

              <div className="grid gap-2.5">
                {/* 1. Demo Video */}
                <a
                  href="https://youtu.be/bxH6rF4c-xg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-3.5 transition-all hover:border-red-500/50 hover:bg-zinc-900"
                >
                  <div className="rounded-lg bg-red-500/10 p-2 text-red-400 group-hover:bg-red-500/20">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-zinc-100 group-hover:text-red-400">
                        1. Watch Full Live Demo Video
                      </span>
                      <span className="text-xs text-zinc-500">YouTube ?</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Watch the complete demo video where we scrape real data from Tor and the Darknet in real time.
                    </p>
                  </div>
                </a>

                {/* 2. Core GitHub Repo */}
                <a
                  href="https://github.com/Nabil-Zero0/Jane_SIH_26/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-3.5 transition-all hover:border-blue-500/50 hover:bg-zinc-900"
                >
                  <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400 group-hover:bg-blue-500/20">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-zinc-100 group-hover:text-blue-400">
                        2. Clone Core GitHub Repository
                      </span>
                      <span className="text-xs text-zinc-500">GitHub ?</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Clone the main repository, install Python/Tor dependencies, and run the real crawlers locally on your machine.
                    </p>
                  </div>
                </a>

                {/* 3. Scraped tor proof */}
                <a
                  href="https://youtu.be/bxH6rF4c-xg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-3.5 transition-all hover:border-purple-500/50 hover:bg-zinc-900"
                >
                  <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400 group-hover:bg-purple-500/20">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-zinc-100 group-hover:text-purple-400">
                        3. Tor & Darknet Real Scrapes Walkthrough
                      </span>
                      <span className="text-xs text-zinc-500">Video ?</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Step-by-step footage demonstrating active onion harvesting, indicator normalization, and intelligence generation.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Footer Dismiss Button */}
            <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-800">
              <span className="text-xs text-zinc-500 text-center sm:text-left">
                You are currently viewing the <span className="text-zinc-300">Policy & Compliance</span> mandate.
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-amber-500/20"
              >
                I Understand - Explore Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
