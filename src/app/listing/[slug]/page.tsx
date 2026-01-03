import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListingDetail from "@/components/ListingDetail";
import { featuredListings } from "@/lib/mockListings";

type ListingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredListings.map((listing) => ({ slug: listing.slug }));
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = featuredListings.find((item) => item.slug === slug);

  if (!listing) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0b0d10] text-zinc-100 [background-image:radial-gradient(1200px_600px_at_top,_rgba(255,255,255,0.08),_transparent)]">
      <Header />
      <ListingDetail listing={listing} />
      <Footer />
    </div>
  );
}
