"use client";

import { useEffect, useState } from "react";

export function DeploymentNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("jane_policy_notice_seen")) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("jane_policy_notice_seen", "true");
    } catch {}
  };

  return (
    <>
      {/* Floating pill to re-open */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-md transition-colors hover:border-white/20 hover:text-zinc-200"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span>Demo Notice</span>
      </button>

      {/* Minimalist Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg rounded-xl border border-white/10 bg-zinc-950 p-6 text-zinc-100 shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  SIH 26 - Hosted Web Demo
                </span>
              </div>
              <button
                type="button"
                onClick={handleDismiss}
                className="text-zinc-500 hover:text-zinc-300 text-sm font-mono transition-colors"
                aria-label="Close"
              >
                esc
              </button>
            </div>

            {/* Core Message */}
            <div className="py-4 space-y-2">
              <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                Synthetic Mock Data Active
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Live darkweb scrapes and raw onion intelligence cannot be hosted on Clearnet due to GitHub safety policies. All data here is simulated.
              </p>
            </div>

            {/* Real Data Links */}
            <div className="space-y-1.5 py-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                Real Data & Evidence
              </span>

              <div className="space-y-1">
                <a
                  href="https://youtu.be/bxH6rF4c-xg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-zinc-900/40 px-3 py-2 text-xs text-zinc-300 transition-colors hover:border-white/20 hover:bg-zinc-900 hover:text-white"
                >
                  <span className="font-medium">1. Live Darknet Scraping Demo</span>
                  <span className="text-zinc-500 text-[11px] font-mono">YouTube -&gt;</span>
                </a>

                <a
                  href="https://github.com/Nabil-Zero0/Jane_SIH_26/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-zinc-900/40 px-3 py-2 text-xs text-zinc-300 transition-colors hover:border-white/20 hover:bg-zinc-900 hover:text-white"
                >
                  <span className="font-medium">2. Core Repository (Run Locally)</span>
                  <span className="text-zinc-500 text-[11px] font-mono">GitHub -&gt;</span>
                </a>

                <a
                  href="https://youtu.be/bxH6rF4c-xg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-zinc-900/40 px-3 py-2 text-xs text-zinc-300 transition-colors hover:border-white/20 hover:bg-zinc-900 hover:text-white"
                >
                  <span className="font-medium">3. Tor Scraping Walkthrough</span>
                  <span className="text-zinc-500 text-[11px] font-mono">Video -&gt;</span>
                </a>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-5 pt-3 border-t border-white/[0.06] flex justify-end">
              <button
                type="button"
                onClick={handleDismiss}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-colors"
              >
                Enter Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
