import Link from "next/link";
import { popularDestinations } from "../data/destinations";

export function PopularDestinations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
        Popular eSIM destinations
      </h2>
      <div className="mt-6 flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        {popularDestinations.map((dest) => (
          <Link
            key={dest.id}
            href={`#${dest.id}`}
            className="flex shrink-0 flex-col items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl shadow-sm">
              {dest.flag}
            </span>
            <span className="text-center text-sm font-medium text-gray-700">
              {dest.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
