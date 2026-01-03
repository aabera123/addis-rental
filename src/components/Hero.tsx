import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent blur-3xl md:h-96 md:w-96" />
      <div className="absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-gradient-to-tr from-slate-500/20 via-white/5 to-transparent blur-3xl md:h-96 md:w-96" />
      <div className="mx-auto w-full max-w-6xl px-6 pb-4 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Addis Ababa rentals
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">
            Find real homes in Addis Ababa.
          </h1>
          <p className="mt-4 text-lg text-zinc-400 md:text-xl">
            Curated rentals. Real photos. Fast WhatsApp follow-up.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#search"
              className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              Search homes
            </Link>
            <Link
              href="#areas"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 shadow-sm transition hover:-translate-y-0.5 hover:border-white/30"
            >
              Browse areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
