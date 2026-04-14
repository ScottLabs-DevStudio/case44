import Link from "next/link";
import { ArrowRight } from "lucide-react";

const members = [
  {
    name: "Robert Elmore",
    role: "Bass & Backing Vocals",
    image: null,
    bio: "Self-taught since age twelve. Moved to St. Louis in 2016 and started sitting in at local jam sessions. Met Steve at the National Blues Museum. Influences: Marcus Miller, Leon Wilkeson, John Paul Jones.",
    accent: "from-blue-900/40 to-blues-deep",
  },
  {
    name: "Steve Eschbacher",
    role: "Drums",
    image: null,
    bio: "Born & raised in St. Louis, playing drums for 50 years. Covers pop, classic rock, funk & blues. Wedding bands, original bands, drum instructor — music has always been part of his life.",
    accent: "from-amber-900/40 to-blues-deep",
  },
  {
    name: "Michael J. Johnson",
    role: "Guitar & Lead Vocals",
    image: null,
    bio: "Passion for music since age two. Major influences: Stevie Ray Vaughan, Kenny Wayne Shepherd, Jimi Hendrix, Eric Clapton, John Mayer, Carlos Santana. Met Steve and Robert at the National Blues Museum.",
    accent: "from-red-900/40 to-blues-deep",
  },
];

export default function BandHighlight() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke to-background" />
      <div className="absolute inset-0 bg-noise" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-3">
            The Band
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">
            Meet Case 44
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-1.5 h-1.5 bg-gold rotate-45" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
          <p className="mt-6 text-muted max-w-2xl mx-auto leading-relaxed">
            Based out of St. Louis, Case 44 is a blues/rock band founded by Robert and Steve — 
            a couple of guys who just want to play the music they love and have fun doing it.
          </p>
        </div>

        {/* Member cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <div
              key={member.name}
              className="group relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
            >
              {/* Decorative top gradient */}
              <div className={`h-1 bg-gradient-to-r ${member.accent}`} />
              
              {/* Avatar placeholder */}
              <div className="relative h-56 bg-gradient-to-b from-blues-mid to-blues-deep flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="relative z-10 w-24 h-24 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <span className="font-heading text-3xl font-bold text-gold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-cream group-hover:text-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold/70 text-sm font-medium mt-1 tracking-wide uppercase">
                  {member.role}
                </p>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors group"
          >
            <span className="font-medium">Learn more about the band</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}