import { Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchResultsClient from "@/components/SearchResultsClient";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-zinc-100 [background-image:radial-gradient(1200px_600px_at_top,_rgba(255,255,255,0.08),_transparent)]">
      <Header />
      <Suspense
        fallback={
          <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
            <div className="rounded-3xl border border-white/10 bg-[#12161b] p-10 text-center text-sm text-zinc-400 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              Loading search results...
            </div>
          </div>
        }
      >
        <SearchResultsClient />
      </Suspense>
      <Footer />
    </div>
  );
}
