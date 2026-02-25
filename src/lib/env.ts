// Typed env read (client-safe: NEXT_PUBLIC_* only)

function getEnv(key: string): string {
  const value = process.env[key];
  if (value === undefined) return "";
  return value;
}

export const env = {
  nextPublicApiUrl: () => getEnv("NEXT_PUBLIC_API_URL"),
} as const;
