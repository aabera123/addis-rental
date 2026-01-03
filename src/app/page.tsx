import AreaCard from "@/components/AreaCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListingCard from "@/components/ListingCard";
import SearchBar from "@/components/SearchBar";
import { featuredListings, popularAreas, searchAreas } from "@/lib/mockListings";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-zinc-100 [background-image:radial-gradient(1200px_600px_at_top,_rgba(255,255,255,0.08),_transparent)]">
      <Header />
      <main className="space-y-20 pb-24">
        <Hero />
        <section
          id="search"
          className="mx-auto w-full max-w-6xl px-6 scroll-mt-24"
        >
          <div className="rounded-3xl border border-white/10 bg-[#12161b] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:p-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Search quickly
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
                Refine listings with fast, clear filters.
              </h2>
            </div>
            <SearchBar areas={searchAreas} />
          </div>
        </section>
        <section className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Featured listings
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
                Fresh, verified homes posted by admin.
              </h2>
              <p className="max-w-md text-base text-zinc-400">
                Only verified listings go live. Every detail is checked before
                it reaches renters.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </section>
        <section
          id="areas"
          className="mx-auto w-full max-w-6xl px-6 scroll-mt-24"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Popular areas
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
              Browse the neighborhoods renters ask for most.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {popularAreas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-[#12161b] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Trust built in
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
                  Built for serious renters who value speed and safety.
                </h2>
              </div>
              <div className="max-w-md text-base text-zinc-400">
                Admin verification keeps listings accurate, updates fast, and
                follow-ups dependable.
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {["Verified photos", "No scams", "Fast response"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#0f1318] px-5 py-6 text-base font-medium text-zinc-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
