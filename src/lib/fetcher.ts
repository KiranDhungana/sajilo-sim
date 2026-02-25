// Optional: wrapper around fetch()

type FetcherOptions = RequestInit & {
  params?: Record<string, string>;
};

export async function fetcher<T>(url: string, options?: FetcherOptions): Promise<T> {
  const { params, ...init } = options ?? {};
  const search = params ? `?${new URLSearchParams(params)}` : "";
  const res = await fetch(`${url}${search}`, init);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}
