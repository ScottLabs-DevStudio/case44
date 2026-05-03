import Link from "next/link";
import { Music, Mail, MapPin } from "lucide-react";
import { socialLinks, sponsors } from "@/data/case44";

export default function Footer() {
  return (
    <footer className="bg-blues-deep border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Music className="w-6 h-6 text-gold" />
              <span className="font-heading text-xl font-bold text-gradient-gold">
                CASE 44
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Blues &amp; Rock from St. Louis. Born from jam sessions at the
              National Blues Museum, fueled by passion and soul.
            </p>
            <div className="flex items-center gap-2 text-muted text-sm">
              <MapPin className="w-4 h-4 text-gold" />
              <span>St. Louis, Missouri</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About the Band" },
                { href: "/events", label: "Upcoming Shows" },
                { href: "/photos", label: "Photos" },
                { href: "/videos", label: "Videos" },
                { href: "/shop", label: "Merch Store" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:case44rocks@gmail.com"
                className="flex items-center gap-3 text-muted hover:text-gold text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                case44rocks@gmail.com
              </a>
              <p className="text-muted text-sm leading-relaxed">
                For bookings, merch inquiries, or just to say hey — drop us a
                line. We play bars, clubs, private events, and festivals across
                the St. Louis area.
              </p>
            </div>
          </div>

          {/* Social and sponsors */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">
              Follow
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border/30">
              <p className="text-muted/70 text-xs uppercase tracking-wider mb-2">Sponsored by</p>
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.href}
                  href={sponsor.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:text-gold-light text-sm transition-colors"
                >
                  {sponsor.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-xs">
            &copy; {new Date().getFullYear()} Case 44. All rights reserved.
          </p>
          <p className="text-muted/40 text-xs">
            Blues lives here.
          </p>
        </div>
      </div>
    </footer>
  );
}
