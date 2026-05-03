import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { merchImage } from "@/data/case44";

const merch = [
  {
    name: 'Case 44 Logo Tee',
    price: "$25",
    description: "Classic logo design on heavyweight cotton. Available M–XL.",
    tag: "Best Seller",
  },
  {
    name: 'Blues Club Tee',
    price: "$25",
    description: "Smoky vintage-inspired design. Available M–XL.",
    tag: "New",
  },
  {
    name: 'Case 44 Sticker Pack',
    price: "$8",
    description: "3 die-cut vinyl stickers. Weatherproof & fade-resistant.",
    tag: null,
  },
];

export default function MerchPreview() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blues-deep/30 to-background" />
      <div className="absolute inset-0 bg-noise" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-3">
            Rep Your Band
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">
            Merch Store
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-1.5 h-1.5 bg-gold rotate-45" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </div>

        {/* Merch grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merch.map((item) => (
            <div
              key={item.name}
              className="group relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1"
            >
              {/* Product image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blues-mid via-blues-deep to-blues-mid flex items-center justify-center overflow-hidden">
                <Image
                  src={merchImage}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blues-deep via-transparent to-transparent opacity-40" />
                {item.tag && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-gold text-blues-deep text-xs font-bold rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-gold font-heading font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-4 w-full py-2.5 bg-gold/10 border border-gold/30 text-gold font-semibold text-sm rounded hover:bg-gold hover:text-blues-deep transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-blues-deep font-semibold rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 text-sm tracking-wide"
          >
            <ShoppingBag className="w-4 h-4" />
            VISIT FULL STORE
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
