"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { Mail, MapPin, Music, Send } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "booking",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API route
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-blues-mid to-background" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-cream mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="font-accent text-lg text-muted max-w-xl mx-auto">
            Bookings, questions, or just want to say hey? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/20 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-cream mb-6">
                Let&apos;s Talk
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Whether you&apos;re looking to book Case 44 for a gig, ask about merch, 
                or just want to connect — reach out. We play bars, clubs, private events, 
                bike nights, and festivals across the St. Louis area.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cream">Email</h3>
                    <a
                      href="mailto:case44rocks@gmail.com"
                      className="text-gold/80 hover:text-gold transition-colors"
                    >
                      case44rocks@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cream">Location</h3>
                    <p className="text-muted">St. Louis, Missouri</p>
                    <p className="text-muted/60 text-sm mt-1">
                      Playing venues across the greater STL area
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Music className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cream">Booking</h3>
                    <p className="text-muted">
                      Available for bars, clubs, private events, festivals, and bike nights.
                    </p>
                    <p className="text-muted/60 text-sm mt-1">
                      Contact Michael Johnson for availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-cream mb-3">
                    Message Sent
                  </h3>
                  <p className="text-muted">
                    Thanks for reaching out! We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-cream/80 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-smoke border border-border/50 rounded-lg text-cream placeholder-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cream/80 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-smoke border border-border/50 rounded-lg text-cream placeholder-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cream/80 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-smoke border border-border/50 rounded-lg text-cream focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                    >
                      <option value="booking">Booking Inquiry</option>
                      <option value="merch">Merchandise Question</option>
                      <option value="jam">Jam Session</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cream/80 mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-2.5 bg-smoke border border-border/50 rounded-lg text-cream placeholder-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gold text-blues-deep font-semibold rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}