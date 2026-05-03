"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ShoppingBag, Plus, Minus, X, ArrowRight } from "lucide-react";
import { merchDetails, merchImage } from "@/data/case44";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  tag: string | null;
  sizes: string[];
  category: string;
  image: string;
};

const products: Product[] = [
  {
    id: "logo-tee",
    name: "Front Logo Shirt",
    price: 25,
    description: "Case 44 front-logo shirt. Stocked sizes are usually Medium through XL; other sizes can be special ordered.",
    tag: "Best Seller",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Apparel",
    image: merchImage,
  },
  {
    id: "double-sided-tee",
    name: "Double Sided Shirt",
    price: 25,
    description: "Two-sided Case 44 shirt design. Available at shows or by contacting Michael Johnson for a merch request.",
    tag: "New",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Apparel",
    image: merchImage,
  },
];

type CartItem = {
  product: Product;
  quantity: number;
  size: string;
};

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const addToCart = (product: Product) => {
    const size = selectedSizes[product.id] || (product.sizes.length > 0 ? product.sizes[0] : "One Size");
    const existing = cart.find((c) => c.product.id === product.id && c.size === size);
    if (existing) {
      setCart(cart.map((c) =>
        c.product.id === product.id && c.size === size
          ? { ...c, quantity: c.quantity + 1 }
          : c
      ));
    } else {
      setCart([...cart, { product, quantity: 1, size }]);
    }
    setCartOpen(true);
    setTimeout(() => setCartOpen(false), 2000);
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart(
      cart
        .map((c) =>
          c.product.id === id && c.size === size
            ? { ...c, quantity: c.quantity + delta }
            : c
        )
        .filter((c) => c.quantity > 0)
    );
  };

  const total = cart.reduce((sum, c) => sum + c.product.price * c.quantity, 0);
  const itemCount = cart.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep via-blues-mid to-background" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-4">
            Rep Your Band
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-cream mb-6">
            <span className="text-gradient-gold">Merch</span> Store
          </h1>
          <p className="font-accent text-lg text-muted max-w-xl mx-auto">
            Shirts are available at shows or by request through the band.
          </p>
        </div>
      </section>

      {/* Cart floating button */}
      <button
        onClick={() => setCartOpen(!cartOpen)}
        className="fixed bottom-6 right-6 z-40 bg-gold text-blues-deep rounded-full p-4 shadow-lg shadow-gold/20 hover:bg-gold-light transition-all duration-300 hover:scale-110"
      >
        <ShoppingBag className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          cartOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            cartOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setCartOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-blues-deep border-l border-border/50 shadow-2xl transition-transform duration-300 ${
            cartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-border/30">
            <h2 className="font-heading text-xl font-bold text-cream">
              Your Cart
            </h2>
            <button onClick={() => setCartOpen(false)} className="text-muted hover:text-cream transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: "calc(100vh - 200px)" }}>
            {cart.length === 0 ? (
              <p className="text-muted text-center py-12">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex items-center gap-4 bg-card/60 border border-border/30 rounded-lg p-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blues-mid to-blues-deep rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-5 h-5 text-gold/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-cream text-sm font-semibold truncate">{item.product.name}</h4>
                    <p className="text-muted text-xs">{item.size} · ${item.product.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, -1)}
                      className="w-7 h-7 rounded bg-smoke-light flex items-center justify-center text-muted hover:text-cream transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-cream text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, 1)}
                      className="w-7 h-7 rounded bg-smoke-light flex items-center justify-center text-muted hover:text-cream transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-gold font-semibold text-sm">${item.product.price * item.quantity}</p>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-border/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted">Total</span>
                <span className="text-cream font-heading text-xl font-bold">${total}</span>
              </div>
              <button className="w-full py-3.5 bg-gold text-blues-deep font-semibold rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2">
                Checkout with Stripe
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-muted/50 text-xs text-center mt-3">
                Secure payment via Stripe. Shipping calculated at checkout.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Products grid */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/20 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {["All", "Apparel"].map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                  cat === "All"
                    ? "bg-gold text-blues-deep border-gold"
                    : "border-border/50 text-muted hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1"
              >
                {/* Product image area */}
                <div className="relative h-72 bg-gradient-to-br from-blues-mid via-blues-deep to-blues-mid flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blues-deep via-transparent to-transparent opacity-40" />
                  {product.tag && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-gold text-blues-deep text-xs font-bold rounded-full">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-gold font-heading font-bold text-lg">${product.price}</span>
                  </div>
                  <p className="text-muted text-sm mt-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Size selector */}
                  {product.sizes.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs text-muted/70 uppercase tracking-wider mb-2">Size</p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() =>
                              setSelectedSizes({ ...selectedSizes, [product.id]: size })
                            }
                            className={`w-10 h-10 text-xs font-medium rounded border transition-all duration-200 ${
                              (selectedSizes[product.id] || product.sizes[0]) === size
                                ? "border-gold bg-gold/10 text-gold"
                                : "border-border/50 text-muted hover:border-gold/40"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full py-2.5 bg-gold/10 border border-gold/30 text-gold font-semibold text-sm rounded hover:bg-gold hover:text-blues-deep transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping note */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-card/60 border border-border/30 rounded-xl px-8 py-5">
              {merchDetails.notes.slice(0, 2).map((note) => (
                <div className="text-center max-w-xs" key={note}>
                  <p className="text-cream font-heading font-semibold">{merchDetails.contact}</p>
                  <p className="text-muted text-sm mt-1">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
