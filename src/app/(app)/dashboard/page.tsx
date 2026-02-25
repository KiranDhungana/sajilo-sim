import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Dashboard content goes here.
      </p>
      <Link href="/" className="mt-4 inline-block text-sm underline">
        Back to home
      </Link>
    </div>
  );
}
