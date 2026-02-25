import Link from "next/link";

export function JumpToSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
        Jump To
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Link
          href="#topup"
          className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 bg-gray-50/80 p-8 transition-colors hover:bg-gray-100 hover:shadow-md"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
            📱
          </span>
          <span className="text-lg font-semibold text-gray-800">Topup</span>
        </Link>
        <Link
          href="#usage"
          className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 bg-gray-50/80 p-8 transition-colors hover:bg-gray-100 hover:shadow-md"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
            🔄
          </span>
          <span className="text-lg font-semibold text-gray-800">
            Check Usage
          </span>
        </Link>
      </div>
    </section>
  );
}
