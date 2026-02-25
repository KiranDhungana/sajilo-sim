"use client";

import { Input, Button } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9]">
      {/* Background image placeholder - use next/image with real asset when available */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-2xl px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow sm:text-4xl md:text-5xl">
          Shop for the best eSIM offers
        </h1>
        <div className="mt-8 flex w-full flex-col gap-2 sm:flex-row sm:items-stretch">
          <Input
            type="search"
            placeholder="Search for destination..."
            className="min-h-[52px] flex-1 text-base"
            containerClassName="flex-1 min-h-[52px] rounded-xl"
            rightElement={
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="m-1.5 rounded-lg bg-[#38bdf8] px-5 hover:bg-[#0ea5e9]"
                aria-label="Search"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
