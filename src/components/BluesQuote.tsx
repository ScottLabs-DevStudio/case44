export default function BluesQuote() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blues-deep via-smoke to-blues-deep" />
      <div className="absolute inset-0 bg-noise opacity-50" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <blockquote className="font-accent text-2xl sm:text-3xl md:text-4xl text-cream/90 italic leading-relaxed">
          &ldquo;The blues is a feeling. And when it hits you, it&apos;s the real news.&rdquo;
        </blockquote>
        <p className="mt-6 text-gold/70 font-heading text-sm tracking-[0.2em] uppercase">
          — B.B. King
        </p>
      </div>
    </section>
  );
}