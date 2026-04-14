import Footer from "@/components/Footer";

const categories = [
  { label: "All", count: null },
  { label: "Live Shots", count: 8 },
  { label: "Band", count: 6 },
  { label: "Venues", count: 5 },
];

const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: i < 8 ? "Live Shots" : i < 11 ? "Band" : "Venues",
  title: i < 8
    ? ["Hawg Pit BBQ", "Moonshine Blues Bar", "Fast Eddie's", "Salvatore's", "Baker & Hale", "National Blues Museum", "Doit's Village Inn", "Grafton Pub"][i]
    : i < 11
    ? ["Robert on Bass", "Steve on Drums", "Mike on Guitar"][i - 8]
    : ["Stage Setup", "Sound Check"][i - 11],
}));

export default function PhotosPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-blues-mid to-background" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        
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

      {/* Gallery */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/20 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
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
                {cat.count && <span className="ml-1 text-xs opacity-60">({cat.count})</span>}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/3] bg-gradient-to-br from-blues-mid via-blues-deep to-blues-mid rounded-xl overflow-hidden border border-border/30 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 cursor-pointer"
              >
                {/* Placeholder pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(201,168,76,0.05) 20px, rgba(201,168,76,0.05) 40px)",
                    }}
                  />
                </div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-5 h-5 text-gold/40 group-hover:text-gold/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blues-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-heading text-sm font-semibold text-cream">{photo.title}</p>
                  <p className="text-xs text-gold/70 mt-1">{photo.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted/60 text-sm">
              More photos coming soon. Follow us on social media for the latest shots.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}