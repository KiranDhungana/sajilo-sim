"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563eb]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </div>
      <span className="text-xl font-semibold text-[#1e3a5f]">Sajilo Sim</span>
    </Link>
  );
}

const navItems = [
  { label: "New eSIM", href: "#" },
  { label: "Become a Partner", href: "#" },
  { label: "Check Usage", href: "#" },
  { label: "eSIM Support", href: "#" },
  { label: "Help Center", href: "#" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              {item.label}
              <svg
                className="h-4 w-4 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          ))}
        </nav>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2563eb] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8]"
        >
          Join now
        </Link>
      </div>
    </header>
  );
}
