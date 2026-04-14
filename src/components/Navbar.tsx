"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Music } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Shows" },
  { href: "/photos", label: "Photos" },
  { href: "/videos", label: "Videos" },
  { href: "/shop", label: "Merch" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || menuOpen
            ? "bg-blues-deep/95 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-blues-deep/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <div className="relative">
                <Music className="w-8 h-8 text-gold group-hover:text-gold-light transition-colors" />
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-wide text-gradient-gold leading-none">
                  CASE 44
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted font-body">
                  Blues &amp; Rock
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-3/4 transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/shop"
                className="ml-3 px-5 py-2 bg-gold text-blues-deep font-semibold text-sm rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile hamburger - using div with onClick for maximum compatibility */}
            <div
              className="md:hidden flex items-center justify-center w-12 h-12 -mr-2 cursor-pointer select-none"
              onClick={toggleMenu}
              role="button"
              tabIndex={0}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMenu(); } }}
            >
              <div className="flex flex-col items-center justify-center gap-1.5 p-2">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Slide-out menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-blues-deep shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 border-b border-border/50">
          <span className="font-heading text-lg font-bold text-gradient-gold">Menu</span>
          <div
            className="flex items-center justify-center w-12 h-12 cursor-pointer select-none"
            onClick={closeMenu}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); closeMenu(); } }}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="block w-6 h-0.5 bg-current rotate-45" />
              <span className="block w-6 h-0.5 bg-current -rotate-45 -mt-0.5" />
            </div>
          </div>
        </div>
        <div className="px-4 py-6 space-y-1 overflow-y-auto" style={{ height: "calc(100% - 5rem)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-4 text-lg text-foreground/80 hover:text-gold hover:bg-smoke-light/30 rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={closeMenu}
            className="block mx-4 mt-4 px-5 py-4 bg-gold text-blues-deep font-semibold text-center text-lg rounded hover:bg-gold-light transition-all"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}