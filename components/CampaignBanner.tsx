"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "campaign-banner-dismissed";
const CAMPAIGN_ID = "alcatraz-2026"; // Change this to reset dismissals for new campaigns

export default function CampaignBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  // Don't show on the alcatraz page itself
  const isAlcatrazPage = pathname === "/alcatraz";

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed !== CAMPAIGN_ID && !isAlcatrazPage) {
      // Small delay for smoother page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isAlcatrazPage]);

  const handleDismiss = () => {
    setIsClosing(true);
    localStorage.setItem(STORAGE_KEY, CAMPAIGN_ID);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible || isAlcatrazPage) return null;

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 ${
        isClosing ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="bg-gradient-to-r from-white/[0.04] via-white/[0.06] to-white/[0.04] border-b border-white/[0.08] backdrop-blur-sm">
        <div className="section-container py-3 flex items-center justify-between gap-4">
          <Link
            href="/alcatraz"
            className="group flex-1 flex items-center gap-3 text-sm"
          >
            <span className="hidden sm:inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs">
              <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            <span className="text-white/70 group-hover:text-white/90 transition-colors">
              <span className="hidden sm:inline">Help me escape Alcatraz for something that matters.</span>
              <span className="sm:hidden">Help me escape Alcatraz for a cause.</span>
            </span>
            <span className="text-white/50 group-hover:text-white/70 transition-colors flex items-center gap-1">
              Read more
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white/70"
            aria-label="Dismiss banner"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
