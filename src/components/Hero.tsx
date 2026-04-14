"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-blues-mid to-background" />
      <div className="absolute inset-0 bg-noise" />
      
      {/* Decorative smoke/light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blues-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[100px]" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Subtitle */}
        <p className="text-gold/80 font-accent text-lg sm:text-xl tracking-[0.4em] uppercase mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          St. Louis Blues &amp; Rock
        </p>

        {/* Main Title */}
        <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl font-black tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <span className="text-gradient-gold">CASE</span>
          <br />
          <span className="text-cream">44</span>
        </h1>

        {/* Tagline */}
        <p className="font-accent text-xl sm:text-2xl text-foreground/70 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Born from jam sessions at the National Blues Museum.
          <br />
          <span className="text-muted">Fueled by passion. Driven by soul.</span>
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <Link
            href="/events"
            className="px-8 py-3.5 bg-gold text-blues-deep font-semibold rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 text-sm tracking-wide"
          >
            SEE US LIVE
          </Link>
          <Link
            href="/shop"
            className="px-8 py-3.5 border border-gold/40 text-gold font-semibold rounded hover:bg-gold/10 transition-all duration-300 text-sm tracking-wide"
          >
            GET MERCH
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gold/40" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}