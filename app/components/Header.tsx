"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "Topics", to: "/topics" },
  { label: "Write", to: "/write" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkBaseStyles =
    "text-sm font-medium transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]";

  const linkActiveStyles =
    "text-[var(--color-text-primary)] border-b-2 border-[var(--color-accent)] pb-1";

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-background)]/80 backdrop-blur border-b border-black/5">
      <div className="app-container flex items-center justify-between py-4 sm:py-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] font-semibold">
            LY
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-tight">
              Lumen Yard
            </span>
            <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.25em]">
              Stories that linger
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.to}
              className={`${linkBaseStyles} ${
                isActive(link.to)
                  ? linkActiveStyles
                  : "border-b-2 border-transparent pb-1"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition">
            Sign in
          </button>
          <Link
            href="/write"
            className="px-5 py-2 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold shadow-sm hover:shadow-md transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start writing
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-full border border-black/10 text-[var(--color-text-muted)]"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-[var(--color-background)]">
          <nav className="app-container py-6 grid gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.to}
                className={`text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-muted)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="app-container pb-6 flex gap-3">
            <button className="flex-1 px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-[var(--color-text-muted)]">
              Sign in
            </button>
            <Link
              href="/write"
              className="flex-1 px-4 py-2 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold shadow-sm text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start writing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
