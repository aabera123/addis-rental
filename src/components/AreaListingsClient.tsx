"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ListingCard from "@/components/ListingCard";
import type { Area } from "@/lib/mockListings";
import { featuredListings } from "@/lib/mockListings";

const bedOptions = ["Studio", "1", "2", "3", "4+"];

const toggleFilters = [
  { key: "furnished", label: "Furnished" },
  { key: "generator", label: "Generator" },
  { key: "waterTank", label: "Water Tank" },
  { key: "parking", label: "Parking" },
  { key: "utilitiesIncluded", label: "Utilities" },
  { key: "shortTerm", label: "Short term" },
];

const sortOptions = [
  { value: "featured", label: "Featured first" },
  { value: "priceAsc", label: "Price low to high" },
  { value: "priceDesc", label: "Price high to low" },
  { value: "newest", label: "Newest" },
];

type AreaListingsClientProps = {
  area: Area;
};

export default function AreaListingsClient({ area }: AreaListingsClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useMemo(() => {
    const get = (key: string) => searchParams.get(key) ?? "";
    const getBool = (key: string) => searchParams.get(key) === "true";

    return {
      priceMin: get("priceMin"),
      priceMax: get("priceMax"),
      bedrooms: get("bedrooms"),
      furnished: getBool("furnished"),
      generator: getBool("generator"),
      waterTank: getBool("waterTank"),
      parking: getBool("parking"),
      utilitiesIncluded: getBool("utilitiesIncluded"),
      shortTerm: getBool("shortTerm"),
      sort: searchParams.get("sort") ?? "featured",
    };
  }, [searchParams]);

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "" || value === "featured") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  const updateToggle = (key: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    if (checked) {
      params.set(key, "true");
    } else {
      params.delete(key);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  const listings = useMemo(() => {
    const min = filters.priceMin ? Number(filters.priceMin) : undefined;
    const max = filters.priceMax ? Number(filters.priceMax) : undefined;

    const filtered = featuredListings.filter((listing) => {
      if (listing.area !== area.name) {
        return false;
      }

      if (Number.isFinite(min) && listing.priceETB < (min as number)) {
        return false;
      }

      if (Number.isFinite(max) && listing.priceETB > (max as number)) {
        return false;
      }

      if (filters.bedrooms) {
        if (filters.bedrooms === "Studio" && listing.beds !== 0) {
          return false;
        }
        if (filters.bedrooms === "4+" && listing.beds < 4) {
          return false;
        }
        if (
          filters.bedrooms !== "Studio" &&
          filters.bedrooms !== "4+" &&
          listing.beds !== Number(filters.bedrooms)
        ) {
          return false;
        }
      }

      if (filters.furnished && !listing.furnished) {
        return false;
      }
      if (filters.generator && !listing.generator) {
        return false;
      }
      if (filters.waterTank && !listing.waterTank) {
        return false;
      }
      if (filters.parking && !listing.parking) {
        return false;
      }
      if (filters.utilitiesIncluded && !listing.utilitiesIncluded) {
        return false;
      }
      if (filters.shortTerm && !listing.shortTerm) {
        return false;
      }

      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      const newestSort =
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

      if (filters.sort === "priceAsc") {
        return a.priceETB - b.priceETB;
      }

      if (filters.sort === "priceDesc") {
        return b.priceETB - a.priceETB;
      }

      if (filters.sort === "newest") {
        return newestSort;
      }

      if (a.featured === b.featured) {
        return newestSort;
      }

      return a.featured ? -1 : 1;
    });

    return sorted;
  }, [area.name, filters]);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Area listings
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
          {area.name}
        </h1>
        <p className="max-w-2xl text-sm text-zinc-400">{area.description}</p>
      </div>

      <section className="mt-8 rounded-3xl border border-white/10 bg-[#12161b] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_0.8fr_1fr]">
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Min price
            <input
              type="number"
              min={0}
              value={filters.priceMin}
              onChange={(event) => updateParam("priceMin", event.target.value)}
              placeholder="0"
              className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Max price
            <input
              type="number"
              min={0}
              value={filters.priceMax}
              onChange={(event) => updateParam("priceMax", event.target.value)}
              placeholder="Any"
              className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Bedrooms
            <select
              value={filters.bedrooms}
              onChange={(event) => updateParam("bedrooms", event.target.value)}
              className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
            >
              <option value="">Any</option>
              {bedOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Sort
            <select
              value={filters.sort}
              onChange={(event) => updateParam("sort", event.target.value)}
              className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {toggleFilters.map((filter) => (
            <label
              key={filter.key}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0f1318] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300 transition hover:border-white/30"
            >
              <input
                type="checkbox"
                checked={filters[filter.key as keyof typeof filters] as boolean}
                onChange={(event) =>
                  updateToggle(filter.key, event.target.checked)
                }
                className="h-4 w-4 rounded border-white/20 bg-transparent text-zinc-100 accent-zinc-100"
              />
              {filter.label}
            </label>
          ))}
        </div>
      </section>

      <div className="mt-8 text-sm text-zinc-400">
        {listings.length} listings found
      </div>

      <section className="mt-6">
        {listings.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#12161b] p-10 text-center text-zinc-400">
            No listings match your filters yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
