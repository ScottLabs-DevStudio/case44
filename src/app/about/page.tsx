import Footer from "@/components/Footer";
import Image from "next/image";
import { bandLogoImage, members, venues } from "@/data/case44";

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
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden">
            <div className="relative aspect-[16/9] bg-blues-deep">
              <Image
                src={bandLogoImage}
                alt="Case 44 band logo"
                fill
                className="object-contain p-8"
                sizes="(min-width: 768px) 768px, 100vw"
                priority
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="font-heading text-3xl font-bold text-cream mb-6">
                How It Started
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Case 44 is based out of St. Louis and was founded by Robert and Steve; a couple
                  of guys who just want to play the music they love and have fun doing it.
                </p>
                <p>
                  They brought in guitarist and lead vocalist Michael James Johnson to join the
                  fun, and the rest is history. Their set list includes multiple genres from blues
                  to rock and roll.
                </p>
                <p>
                  The band grew from local jam sessions, including the National Blues Museum&apos;s
                  &ldquo;Sitting On The Porch&rdquo; sessions, and continues to play bars, clubs,
                  private events, festivals, bike nights, and outdoor concerts across the St. Louis
                  region.
                </p>
              </div>
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
                <div className="relative h-64 bg-blues-deep">
                  <Image
                    src={member.photo}
                    alt={`${member.name} of Case 44`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
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
