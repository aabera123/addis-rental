import Link from "next/link";
import type { Area } from "@/lib/mockListings";

type AreaCardProps = {
  area: Area;
};

export default function AreaCard({ area }: AreaCardProps) {
  return (
    <Link
      href={`/areas/${area.slug}`}
      className="group rounded-3xl border border-white/10 bg-[#12161b] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-100">
            {area.name}
          </h3>
          <p className="mt-2 text-sm text-zinc-400">{area.description}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
          {area.listingCount} listings
        </span>
      </div>
      <div className="mt-6 h-24 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-slate-500/20" />
    </Link>
  );
}
