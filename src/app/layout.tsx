import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Case 44 | Blues & Rock from St. Louis",
  description:
    "Case 44 — a blues/rock band from St. Louis featuring Robert Elmore, Steve Eschbacher, and Michael J. Johnson. Live shows, merch, and the soul of the blues.",
  keywords: ["blues", "rock", "St. Louis", "live music", "band", "Case 44"],
  openGraph: {
    title: "Case 44 | Blues & Rock from St. Louis",
    description: "Blues/rock band from St. Louis. Live shows, merch, and the soul of the blues.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}