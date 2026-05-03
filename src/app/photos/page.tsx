import Footer from "@/components/Footer";
import Image from "next/image";
import { galleryImages } from "@/data/case44";

const categoryLabels = ["All", "Live Shots", "Robert", "Steve", "Mike", "Brand", "Merch"];

export default function PhotosPage() {
  const categories = categoryLabels.map((label) => ({
    label,
    count: label === "All" ? galleryImages.length : galleryImages.filter((image) => image.category === label).length,
  }));

  return (
    <main className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-blues-mid to-background" />
        <div className="absolute inset-0 bg-noise" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-4">
            Through the Lens
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-cream mb-6">
            Photo <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="font-accent text-lg text-muted max-w-xl mx-auto">
            Moments captured on stage, behind the scenes, and in the crowd.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/20 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                  cat.label === "All"
                    ? "bg-gold text-blues-deep border-gold"
                    : "border-border/50 text-muted hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat.label}
                <span className="ml-1 text-xs opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((photo, index) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] bg-blues-deep rounded-xl overflow-hidden border border-border/30 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <Image
                  src={photo.src}
                  alt={`${photo.title} - Case 44`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blues-deep via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-heading text-sm font-semibold text-cream">{photo.title}</p>
                  <p className="text-xs text-gold/80 mt-1">{photo.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted/60 text-sm">
              Gallery images imported from the original Case44rocks.com photo, about, merch, and contact pages.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
