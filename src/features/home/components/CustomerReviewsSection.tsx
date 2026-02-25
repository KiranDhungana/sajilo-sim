"use client";

import { useState } from "react";
import Link from "next/link";
import { CustomerReviewCard } from "./CustomerReviewCard";
import { testimonials } from "../data/testimonials";

const VISIBLE = 3;
const maxIndex = Math.max(0, testimonials.length - VISIBLE);

export function CustomerReviewsSection() {
  const [index, setIndex] = useState(0);
  const visible = testimonials.slice(index, index + VISIBLE);
  const atStart = index <= 0;
  const atEnd = index >= maxIndex;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Hear from our customers
        </h2>
        <Link
          href="#reviews"
          className="text-base font-medium text-[#2563eb] hover:underline"
        >
          See our reviews
        </Link>
      </div>
      <div className="relative mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <CustomerReviewCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={atStart}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white"
            aria-label="Previous reviews"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={atEnd}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white"
            aria-label="Next reviews"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
