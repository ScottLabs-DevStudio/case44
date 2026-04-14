import Hero from "@/components/Hero";
import UpcomingShows from "@/components/UpcomingShows";
import BandHighlight from "@/components/BandHighlight";
import MerchPreview from "@/components/MerchPreview";
import BluesQuote from "@/components/BluesQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BluesQuote />
      <UpcomingShows />
      <BandHighlight />
      <MerchPreview />
      <Footer />
    </main>
  );
}