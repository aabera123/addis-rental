"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import ContactCTA from "@/components/ContactCTA";
import Gallery from "@/components/Gallery";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import SignInModal from "@/components/SignInModal";
import type { Listing } from "@/lib/mockListings";

type ListingDetailProps = {
  listing: Listing;
};

const formatPrice = (value: number) =>
  `ETB ${value.toLocaleString("en-US")}`;

export default function ListingDetail({ listing }: ListingDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bedLabel =
    listing.beds === 0
      ? "Studio"
      : `${listing.beds} Bed${listing.beds > 1 ? "s" : ""}`;

  const facts = [
    { label: "Beds", value: bedLabel },
    { label: "Baths", value: `${listing.baths}` },
    { label: "Size", value: `${listing.sizeSqm} sqm` },
    { label: "Furnished", value: listing.furnished ? "Yes" : "No" },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Gallery title={listing.title} images={listing.gallery} />
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Badge status={listing.availability} />
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white/40 hover:text-white"
            >
              Save
            </button>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
              {listing.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              {listing.area}, Addis Ababa
            </p>
          </div>
          <div className="text-3xl font-semibold text-zinc-100">
            {formatPrice(listing.priceETB)}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/10 bg-[#12161b] px-4 py-3"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-100">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
          <ContactCTA
            phone="+2519xxxxxxx"
            onInterested={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-10">
          <section className="rounded-3xl border border-white/10 bg-[#12161b] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-zinc-100">
              Description
            </h2>
            <p className="mt-4 text-base text-zinc-400">
              {listing.description}
            </p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-[#12161b] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-zinc-100">
              Area info
            </h2>
            <p className="mt-4 text-base text-zinc-400">{listing.areaInfo}</p>
            <p className="mt-4 text-sm text-zinc-500">
              Exact address shared after verification.
            </p>
          </section>
        </div>
        <div className="space-y-10">
          <section className="rounded-3xl border border-white/10 bg-[#12161b] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-zinc-100">
              Amenities
            </h2>
            <div className="mt-6">
              <AmenitiesGrid amenities={listing.amenities} />
            </div>
          </section>
        </div>
      </div>

      <SignInModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
