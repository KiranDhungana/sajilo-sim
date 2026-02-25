// Fetch calls to external APIs for dashboard (if needed)

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function fetchDashboardData() {
  const res = await fetch(`${API_BASE}/api/dashboard`);
  if (!res.ok) throw new Error("Failed to fetch dashboard data");
  return res.json();
}
