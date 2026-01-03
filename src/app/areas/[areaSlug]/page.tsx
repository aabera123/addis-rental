import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AreaListingsClient from "@/components/AreaListingsClient";
import { popularAreas } from "@/lib/mockListings";

type AreaPageProps = {
  params: Promise<{ areaSlug: string }>;
};

export function generateStaticParams() {
  return popularAreas.map((area) => ({ areaSlug: area.slug }));
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { areaSlug } = await params;
  const area = popularAreas.find((item) => item.slug === areaSlug);

  if (!area) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0b0d10] text-zinc-100 [background-image:radial-gradient(1200px_600px_at_top,_rgba(255,255,255,0.08),_transparent)]">
      <Header />
      <AreaListingsClient area={area} />
      <Footer />
    </div>
  );
}
