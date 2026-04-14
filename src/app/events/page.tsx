import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";

const upcoming = [
  { date: "Apr 17, 2026", venue: "St. Charles Music House", city: "St. Charles", title: "Case 44 @ St. Charles Music House" },
  { date: "Apr 23, 2026", venue: "Salvatore's Italian Grill", city: "St. Charles", title: "Case 44 @ Salvatore's Italian Grill" },
  { date: "Apr 24, 2026", venue: "Wood River Moose Lodge", city: "Wood River", title: "Case 44 @ Wood River Moose Lodge" },
  { date: "Apr 25, 2026", venue: "Hawg Pit BBQ", city: "Grafton", title: "Case 44 @ Hawg Pit BBQ" },
  { date: "May 3, 2026", venue: "Moonshine Blues Bar", city: "Saint Charles", title: "Weekly Jam Session", special: true },
  { date: "May 10, 2026", venue: "Fast Eddie's Bon-Air", city: "Alton", title: "Case 44 @ Fast Eddie's Bon-Air" },
  { date: "May 17, 2026", venue: "Hawg Pit BBQ", city: "Grafton", title: "Grafton Bike Week", special: true },
  { date: "May 22, 2026", venue: "Alton VFW Post 1308", city: "Alton", title: "Case 44 @ Alton VFW" },
  { date: "May 27, 2026", venue: "Baker & Hale", city: "Godfrey", title: "Bike Night @ Baker & Hale" },
  { date: "Jun 7, 2026", venue: "Moonshine Blues Bar", city: "Saint Charles", title: "Weekly Jam Session", special: true },
  { date: "Jun 13, 2026", venue: "Hawg Pit BBQ", city: "Grafton", title: "Case 44 @ Hawg Pit" },
  { date: "Jun 20, 2026", venue: "Grafton Pub", city: "Grafton", title: "Case 44 Debut @ Grafton Pub", special: true },
  { date: "Jun 21, 2026", venue: "Bobby's Frozen Custard", city: "Maryville", title: "Outdoor Concert Series", special: true },
  { date: "Jun 25, 2026", venue: "Salvatore's Italian Grill", city: "St. Charles", title: "Case 44 @ Salvatore's" },
  { date: "Jul 4, 2026", venue: "Private Event", city: "", title: "Private Event" },
  { date: "Jul 5, 2026", venue: "Moonshine Blues Bar", city: "Saint Charles", title: "Weekly Jam Session", special: true },
  { date: "Jul 11, 2026", venue: "St. Charles Music House", city: "St. Charles", title: "Case 44 @ St. Charles Music House" },
  { date: "Jul 15, 2026", venue: "Baker & Hale", city: "Godfrey", title: "Bike Night @ Baker & Hale" },
  { date: "Aug 2, 2026", venue: "Moonshine Blues Bar", city: "Saint Charles", title: "Weekly Jam Session", special: true },
  { date: "Sep 6, 2026", venue: "Moonshine Blues Bar", city: "Saint Charles", title: "Weekly Jam Session", special: true },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-blues-mid to-background" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-4">
            Catch Us Live
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-cream mb-6">
            Show <span className="text-gradient-gold">Dates</span>
          </h1>
          <p className="font-accent text-lg text-muted max-w-xl mx-auto">
            From smoky blues bars to outdoor festivals — come see Case 44 live.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/30 to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-3">
            {upcoming.map((show, i) => (
              <div
                key={i}
                className={`group relative bg-card/80 backdrop-blur-sm border rounded-lg p-5 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 ${
                  show.special ? "border-gold/20" : "border-border/40"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  {/* Date */}
                  <div className="flex-shrink-0 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold/70" />
                    <span className="text-cream/90 font-medium text-sm min-w-[120px]">{show.date}</span>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-6 bg-border/50" />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                      {show.title}
                      {show.special && (
                        <span className="ml-2 px-2 py-0.5 bg-gold/10 text-gold text-xs font-medium rounded-full border border-gold/20">
                          Featured
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-3 h-3 text-muted/60" />
                      <span className="text-muted text-sm">{show.venue}{show.city ? `, ${show.city}` : ""}</span>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex-shrink-0 hidden sm:flex items-center gap-1.5 text-muted/60 text-sm">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Doors 7pm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted text-sm">
              Dates subject to change. Follow us on social media for the latest updates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}