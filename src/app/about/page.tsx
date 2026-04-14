import Footer from "@/components/Footer";

const members = [
  {
    name: "Robert Elmore",
    role: "Bass & Backing Vocals",
    bio: "Self-taught since the age of twelve, Robert moved to St. Louis in 2016 and started sitting in at local jam sessions, meeting musicians and building connections. He met Steve at the National Blues Museum \"Sitting On The Porch\" jam sessions, and both played with Sisters Magnolia and The Weeds.",
    influences: "Marcus Miller, Leon Wilkeson, John Paul Jones",
    initials: "RE",
  },
  {
    name: "Steve Eschbacher",
    role: "Drums",
    bio: "Born and raised in St. Louis, Steve has been playing drums for 50 years. His early influences covered various genres including pop, classic rock, funk, and blues. From wedding reception bands to original projects, from cover bands to drum instructing — music has always been part of his life.",
    influences: "Pop, Classic Rock, Funk & Blues",
    initials: "SE",
  },
  {
    name: "Michael J. Johnson",
    role: "Guitar & Lead Vocals",
    bio: "A guitarist and lead vocalist with a passion for music since age two that continues to this day. Mike met Steve and Robert through playing jam sessions at The National Blues Museum, and the three formed the core of Case 44.",
    influences: "Stevie Ray Vaughan, Kenny Wayne Shepherd, Jimi Hendrix, George Harrison, Jerry Garcia, Eric Clapton, John Mayer, Carlos Santana",
    initials: "MJ",
  },
];

const venues = [
  "Moonshine Blues Bar, St. Charles",
  "Fast Eddie's Bon-Air, Alton",
  "Hawg Pit BBQ, Grafton",
  "Salvatore's Italian Grill, St. Charles",
  "Baker & Hale, Godfrey",
  "Doit's Village Inn, Granite City",
  "St. Charles Music House",
  "Kenny's Bar & Grill, Barnhart",
  "National Blues Museum, St. Louis",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-blues-mid to-background" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-4">
            The Story
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-cream mb-6">
            About <span className="text-gradient-gold">Case 44</span>
          </h1>
          <p className="font-accent text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Based out of St. Louis, Case 44 is a blues/rock band founded by Robert and Steve — 
            a couple of guys who just want to play the music they love and have fun doing it.
          </p>
        </div>
      </section>

      {/* Band Origin */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-8 md:p-12">
            <h2 className="font-heading text-3xl font-bold text-cream mb-6">
              How It Started
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Case 44 was born from the kind of connection that only happens when musicians 
                find each other through the music itself. Robert Elmore and Steve Eschbacher 
                first crossed paths at the National Blues Museum&apos;s &ldquo;Sitting On The Porch&rdquo; 
                jam sessions in downtown St. Louis.
              </p>
              <p>
                They played together in Sisters Magnolia and The Weeds, building a musical 
                rapport that would eventually become something more. When they brought in 
                guitarist and lead vocalist Michael J. Johnson, the chemistry was undeniable.
              </p>
              <p>
                Their set list spans multiple genres — from raw Chicago blues to classic rock 
                and roll — reflecting the diverse influences each member brings. Whether it&apos;s 
                a smoky blues bar, a backyard BBQ, or a bike night rally, Case 44 brings the 
                same energy and soul to every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-blues-deep" />
        <div className="absolute inset-0 bg-noise" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-3">
              The Players
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-cream">
              Band Members
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.name}
                className="group bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                <div className="relative h-48 bg-gradient-to-b from-blues-mid to-blues-deep flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-gold">
                      {member.initials}
                    </span>
                  </div>
                </div>
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
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-xs text-muted/70 uppercase tracking-wider mb-2">Influences</p>
                    <p className="text-sm text-foreground/80 italic">{member.influences}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-smoke to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-3">
              Where We Play
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream">
              Venues We Rock
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {venues.map((venue) => (
              <div
                key={venue}
                className="flex items-center gap-3 bg-card/40 border border-border/30 rounded-lg px-4 py-3 hover:border-gold/30 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                <span className="text-foreground/80 text-sm">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}