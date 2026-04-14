import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

const shows = [
  {
    date: "Apr 17, 2026",
    venue: "St. Charles Music House",
    city: "St. Charles",
    title: "Case 44 @ St. Charles Music House",
  },
  {
    date: "Apr 23, 2026",
    venue: "Salvatore's Italian Grill",
    city: "St. Charles",
    title: "Case 44 @ Salvatore's",
  },
  {
    date: "Apr 25, 2026",
    venue: "Hawg Pit BBQ",
    city: "Grafton",
    title: "Case 44 @ Hawg Pit BBQ",
  },
  {
    date: "May 3, 2026",
    venue: "Moonshine Blues Bar",
    city: "Saint Charles",
    title: "Weekly Jam Session",
  },
  {
    date: "May 10, 2026",
    venue: "Fast Eddie's Bon-Air",
    city: "Alton",
    title: "Case 44 @ Fast Eddie's",
  },
  {
    date: "May 17, 2026",
    venue: "Hawg Pit BBQ",
    city: "Grafton",
    title: "Grafton Bike Week",
  },
];

export default function UpcomingShows() {
  return (
    <section className="relative py-24 bg-gradient-blues" id="shows">
      <div className="absolute inset-0 bg-noise" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-3">
            Don&apos;t Miss Out
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">
            Upcoming Shows
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-1.5 h-1.5 bg-gold rotate-45" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </div>

        {/* Shows list */}
        <div className="space-y-4">
          {shows.map((show, i) => (
            <div
              key={i}
              className="group relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:border-gold/40 hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Date badge */}
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-gold/10 rounded-lg p-2 group-hover:bg-gold/20 transition-colors">
                    <p className="text-gold font-heading font-bold text-lg leading-none">
                      {show.date.split(" ")[1]}
                    </p>
                    <p className="text-gold/70 text-xs uppercase tracking-wider mt-1">
                      {show.date.split(" ")[0]}
                    </p>
                  </div>
                </div>

                {/* Show details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                    {show.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-muted text-sm">
                      <MapPin className="w-3.5 h-3.5 text-gold/60" />
                      {show.venue}
                    </span>
                    <span className="hidden sm:inline text-border">·</span>
                    <span className="text-muted/70 text-sm">{show.city}</span>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex-shrink-0 hidden sm:block">
                  <Calendar className="w-5 h-5 text-muted/40 group-hover:text-gold transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 text-gold font-semibold rounded hover:bg-gold/10 transition-all duration-300 text-sm tracking-wide"
          >
            <Calendar className="w-4 h-4" />
            ALL SHOWS
          </Link>
        </div>
      </div>
    </section>
  );
}