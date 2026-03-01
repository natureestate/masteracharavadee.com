"use client";

import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group flex items-center gap-2 text-xs text-white/40 hover:text-brand-gold-400 transition-colors"
      aria-label="Scroll to top"
    >
      <span className="hidden sm:inline">Back to top</span>
      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-brand-gold-400 group-hover:bg-brand-gold-400/10 transition-all">
        <ChevronUp className="h-4 w-4" />
      </span>
    </button>
  );
}
