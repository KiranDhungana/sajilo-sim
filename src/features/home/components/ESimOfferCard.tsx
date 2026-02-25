import Link from "next/link";
import { Card, CardContent } from "@/components/ui";
import type { ESimOffer } from "../data/offers";

type ESimOfferCardProps = { offer: ESimOffer };

export function ESimOfferCard({ offer }: ESimOfferCardProps) {
  const coverageText = offer.coverageCount
    ? `${offer.coverage} & ${offer.coverageCount} other countries`
    : offer.coverage;

  return (
    <Card className="flex flex-col transition-shadow hover:shadow-md">
      <CardContent className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
              {offer.logo}
            </span>
            <span className="font-semibold text-gray-800">{offer.name}</span>
          </div>
          {offer.badge ? (
            <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
              {offer.badge}
            </span>
          ) : null}
        </div>
        <div className="mt-4 flex gap-4 text-sm text-gray-600">
          <span>{offer.days} days</span>
          <span>{offer.dataGb} GB</span>
        </div>
        <p className="mt-2 text-xl font-semibold text-green-600">{offer.price}</p>
        <p className="mt-1 text-sm text-gray-500">{coverageText}</p>
        <Link
          href={`#offer-${offer.id}`}
          className="mt-4 text-sm font-medium text-[#2563eb] hover:underline"
        >
          View offer &gt;
        </Link>
      </CardContent>
    </Card>
  );
}
