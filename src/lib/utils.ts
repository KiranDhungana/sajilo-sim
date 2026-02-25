/** Merge class names (add clsx + tailwind-merge for deduplication if needed) */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

/** Format date for display */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US").format(new Date(date));
}
