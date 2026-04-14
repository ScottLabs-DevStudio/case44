import Footer from "@/components/Footer";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    title: "Case 44 Live @ Moonshine Blues Bar",
    description: "Full set from our weekly jam session at Moonshine Blues Bar in St. Charles.",
    venue: "Moonshine Blues Bar",
    date: "2025",
  },
  {
    title: "Blues Jam — National Blues Museum",
    description: "Open jam session at the National Blues Museum, St. Louis.",
    venue: "National Blues Museum",
    date: "2025",
  },
  {
    title: "Case 44 @ Hawg Pit BBQ",
    description: "Live performance at Hawg Pit BBQ in Grafton, IL.",
    venue: "Hawg Pit BBQ",
    date: "2025",
  },
  {
    title: "SRV Tribute — Fast Eddie's",
    description: "Stevie Ray Vaughan tribute set at Fast Eddie's Bon-Air in Alton.",
    venue: "Fast Eddie's Bon-Air",
    date: "2025",
  },
  {
    title: "Bike Night @ Baker & Hale",
    description: "Case 44 rocking Bike Night at Baker & Hale in Godfrey.",
    venue: "Baker & Hale",
    date: "2025",
  },
  {
    title: "Studio Session — Raw Takes",
    description: "Behind the scenes in the studio. Raw, unfiltered takes.",
    venue: "Studio",
    date: "2025",
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-blues-mid to-background" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-4">
            Watch &amp; Listen
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-cream mb-6">
            <span className="text-gradient-gold">Videos</span>
          </h1>
          <p className="font-accent text-lg text-muted max-w-xl mx-auto">
            Live performances, jam sessions, and behind-the-scenes moments.
          </p>
        </div>
      </section>

      {/* Video grid */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/20 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                className="group relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                {/* Video placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-blues-mid via-blues-deep to-blues-mid flex items-center justify-center overflow-hidden">
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.05) 40px, rgba(201,168,76,0.05) 42px)"
                    }} />
                  </div>
                  
                  {/* Play button */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/50 flex items-center justify-center group-hover:bg-gold/30 group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-gold group-hover:text-gold-light ml-1" />
                  </div>

                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                      {video.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted/40 group-hover:text-gold transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted text-sm mt-2 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="px-2 py-0.5 bg-gold/10 text-gold/80 text-xs rounded border border-gold/20">
                      {video.venue}
                    </span>
                    <span className="text-muted/50 text-xs">{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted/60 text-sm">
              Videos hosted on YouTube. Subscribe to our channel for the latest content.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}