"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ListingCard from "@/components/ListingCard";
import { featuredListings, searchAreas } from "@/lib/mockListings";

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

export default function SearchResultsClient() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const paramsKey = searchParams.toString();

  useEffect(() => {
    setIsLoading(true);
    const timeout = window.setTimeout(() => setIsLoading(false), 350);
    return () => window.clearTimeout(timeout);
  }, [paramsKey]);

  const filters = useMemo(() => {
    const get = (key: string) => searchParams.get(key) ?? "";
    const getBool = (key: string) => searchParams.get(key) === "true";

    return {
      area: get("area"),
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
      if (filters.area && listing.area !== filters.area) {
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
  }, [filters]);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Search results
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
          Find verified listings fast.
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-zinc-400">
          {listings.length} listings found
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filters.sort}
            onChange={(event) => updateParam("sort", event.target.value)}
            className="h-10 rounded-full border border-white/10 bg-[#12161b] px-4 text-sm text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-zinc-100 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10 md:hidden"
          >
            Filters
          </button>
        </div>
      </div>

      <section className="mt-6 hidden md:block">
        <div className="sticky top-24 z-30 rounded-3xl border border-white/10 bg-[#12161b] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.7fr_0.9fr]">
            <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Area
              <select
                value={filters.area}
                onChange={(event) => updateParam("area", event.target.value)}
                className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
              >
                <option value="">All areas</option>
                {searchAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Min price
              <input
                type="number"
                min={0}
                value={filters.priceMin}
                onChange={(event) =>
                  updateParam("priceMin", event.target.value)
                }
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
                onChange={(event) =>
                  updateParam("priceMax", event.target.value)
                }
                placeholder="Any"
                className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Bedrooms
              <select
                value={filters.bedrooms}
                onChange={(event) =>
                  updateParam("bedrooms", event.target.value)
                }
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
        </div>
      </section>

      <section className="mt-10">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#12161b] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="h-56 animate-pulse bg-white/10 md:h-64" />
                <div className="space-y-3 p-6">
                  <div className="h-4 w-2/3 animate-pulse rounded-full bg-white/10" />
                  <div className="h-6 w-1/2 animate-pulse rounded-full bg-white/10" />
                  <div className="h-4 w-3/4 animate-pulse rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        ) : listings.length === 0 ? (
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

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            className="absolute inset-0 bg-black/70"
            aria-label="Close filters"
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0f1318] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Filters
              </div>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300 transition hover:border-white/30"
              >
                Close
              </button>
            </div>
            <div className="mt-6 grid gap-4">
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Area
                <select
                  value={filters.area}
                  onChange={(event) => updateParam("area", event.target.value)}
                  className="h-12 rounded-2xl border border-white/10 bg-[#0b0d10] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
                >
                  <option value="">All areas</option>
                  {searchAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Min price
                  <input
                    type="number"
                    min={0}
                    value={filters.priceMin}
                    onChange={(event) =>
                      updateParam("priceMin", event.target.value)
                    }
                    placeholder="0"
                    className="h-12 rounded-2xl border border-white/10 bg-[#0b0d10] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Max price
                  <input
                    type="number"
                    min={0}
                    value={filters.priceMax}
                    onChange={(event) =>
                      updateParam("priceMax", event.target.value)
                    }
                    placeholder="Any"
                    className="h-12 rounded-2xl border border-white/10 bg-[#0b0d10] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Bedrooms
                <select
                  value={filters.bedrooms}
                  onChange={(event) =>
                    updateParam("bedrooms", event.target.value)
                  }
                  className="h-12 rounded-2xl border border-white/10 bg-[#0b0d10] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
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
                  className="h-12 rounded-2xl border border-white/10 bg-[#0b0d10] px-4 text-base font-medium text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {toggleFilters.map((filter) => (
                  <label
                    key={filter.key}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b0d10] px-3 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300"
                  >
                    <input
                      type="checkbox"
                      checked={
                        filters[filter.key as keyof typeof filters] as boolean
                      }
                      onChange={(event) =>
                        updateToggle(filter.key, event.target.checked)
                      }
                      className="h-4 w-4 rounded border-white/20 bg-transparent text-zinc-100 accent-zinc-100"
                    />
                    {filter.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
