"use client";

type AmenitiesGridProps = {
  amenities: string[];
};

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <div
          key={amenity}
          className="rounded-2xl border border-white/10 bg-[#12161b] px-4 py-3 text-sm font-medium text-zinc-200"
        >
          {amenity}
        </div>
      ))}
    </div>
  );
}
