import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/lib/mockListings";

type ListingCardProps = {
  listing: Listing;
};

const formatPrice = (value: number) =>
  `ETB ${value.toLocaleString("en-US")}`;

export default function ListingCard({ listing }: ListingCardProps) {
  const bedsLabel =
    listing.beds === 0
      ? "Studio"
      : `${listing.beds} Bed${listing.beds > 1 ? "s" : ""}`;

  return (
    <Link
      href={`/listing/${listing.slug}`}
      className="group rounded-3xl border border-white/10 bg-[#12161b] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
    >
      <div className="relative h-56 overflow-hidden rounded-3xl md:h-64">
        <div className="absolute inset-0 animate-pulse bg-white/10" />
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          className="relative object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-zinc-100 shadow-sm backdrop-blur">
          {listing.highlight}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>{listing.area}</span>
          <span>{bedsLabel}</span>
        </div>
        <div className="text-2xl font-semibold tracking-tight text-zinc-100">
          {formatPrice(listing.priceETB)}
        </div>
        <p className="text-sm text-zinc-400">{listing.title}</p>
      </div>
    </Link>
  );
}
