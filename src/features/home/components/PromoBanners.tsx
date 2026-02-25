import Link from "next/link";

export function PromoBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Rewards */}
        <div className="relative overflow-hidden rounded-xl bg-[#1e3a5f] p-6 text-white md:p-8">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60" />
          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-sm">
              <p className="text-lg font-medium leading-snug">
                Sajilo Sim Rewards members get 10% Cashback with every order
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-[#38bdf8] px-4 text-sm font-medium text-white transition-colors hover:bg-[#0ea5e9]"
              >
                Learn More →
              </Link>
            </div>
            <div className="relative h-32 w-40 shrink-0 overflow-hidden rounded-lg bg-white/10 sm:h-36 sm:w-44">
              <div className="flex h-full items-center justify-center text-4xl">
                📱
              </div>
            </div>
          </div>
        </div>

        {/* App & Reviews */}
        <div className="relative overflow-hidden rounded-xl bg-[#1e3a5f] p-6 text-white md:p-8">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60" />
          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-sm">
              <div className="flex gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-xl">
                  🍎
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-xl">
                  ▶️
                </span>
              </div>
              <p className="mt-4 text-lg font-medium leading-snug">
                Rated <strong>Excellent</strong> by users Worldwide
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-[#38bdf8] px-4 text-sm font-medium text-white transition-colors hover:bg-[#0ea5e9]"
              >
                See reviews
              </Link>
            </div>
            <div className="relative h-32 w-40 shrink-0 overflow-hidden rounded-lg bg-white/10 sm:h-36 sm:w-44">
              <div className="flex h-full items-center justify-center text-4xl">
                📷
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
