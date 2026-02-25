import Link from "next/link";
import { Card, CardContent } from "@/components/ui";
import type { Testimonial } from "../data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      <span className="text-sm font-semibold text-gray-800">{rating}.0</span>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-amber-400" aria-hidden>
          ★
        </span>
      ))}
    </span>
  );
}

type CustomerReviewCardProps = { testimonial: Testimonial };

export function CustomerReviewCard({ testimonial }: CustomerReviewCardProps) {
  const storeIcon =
    testimonial.store === "app-store" ? (
      <span className="text-xl">🍎</span>
    ) : (
      <span className="text-xl">▶️</span>
    );

  return (
    <Card className="flex h-full flex-col">
      <CardContent className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-bold text-gray-800">{testimonial.name}</p>
            {testimonial.translationNote ? (
              <p className="text-xs text-gray-500">
                {testimonial.translationNote}
              </p>
            ) : null}
          </div>
          <StarRating rating={testimonial.rating} />
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
          {testimonial.review}
        </p>
        <div className="mt-4 flex items-center gap-2">
          {storeIcon}
          <span className="text-sm text-gray-600">{testimonial.storeLabel}</span>
          <Link
            href="#reviews"
            className="text-sm font-medium text-[#2563eb] hover:underline"
          >
            See all ratings
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
