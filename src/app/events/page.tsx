import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";
import { formatShowDate, pastShows, Show, upcomingShows } from "@/data/case44";

function ShowCard({ show, muted = false }: { show: Show; muted?: boolean }) {
  return (
    <div
      className={`group relative bg-card/80 backdrop-blur-sm border rounded-lg p-5 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 ${
        show.featured ? "border-gold/20" : "border-border/40"
      } ${muted ? "opacity-80" : ""}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-shrink-0 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gold/70" />
          <span className="text-cream/90 font-medium text-sm min-w-[120px]">
            {formatShowDate(show.date)}
          </span>
        </div>

        <div className="hidden sm:block w-px h-6 bg-border/50" />

        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold transition-colors">
            {show.title}
            {show.featured && (
              <span className="ml-2 px-2 py-0.5 bg-gold/10 text-gold text-xs font-medium rounded-full border border-gold/20">
                Featured
              </span>
            )}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="w-3 h-3 text-muted/60" />
            <span className="text-muted text-sm">
              {show.venue}
              {show.city ? `, ${show.city}` : ""}
            </span>
          </div>
        </div>

        {show.time && (
          <div className="flex-shrink-0 flex items-center gap-1.5 text-muted/60 text-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>{show.time}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  const upcoming = upcomingShows();
  const past = pastShows();

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
            {upcoming.map((show) => (
              <ShowCard key={`${show.date}-${show.title}-${show.venue}`} show={show} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-heading text-3xl font-bold text-cream mb-6">
              Recent &amp; Past Shows
            </h2>
            <div className="space-y-3">
              {past.map((show) => (
                <ShowCard
                  key={`${show.date}-${show.title}-${show.venue}`}
                  show={show}
                  muted
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted text-sm">
              Dates sourced from the original Case44rocks.com calendar and subject to change.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
