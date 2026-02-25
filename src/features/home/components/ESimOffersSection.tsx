"use client";

import { useState } from "react";
import { ESimOfferCard } from "./ESimOfferCard";
import { popularOffers } from "../data/offers";

const tabs = [
  { id: "popular", label: "Popular eSIM offers" },
  { id: "latest", label: "Latest eSIM offers" },
] as const;

export function ESimOffersSection() {
  const [activeTab, setActiveTab] = useState<"popular" | "latest">("popular");

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 pb-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-[#2563eb] text-[#2563eb]"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Currency:</span>
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            USD
            <svg
              className="h-4 w-4"
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
          </button>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {popularOffers.map((offer) => (
          <ESimOfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}
