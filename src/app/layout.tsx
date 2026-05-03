import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair-display",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant-garamond",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

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
    <html
      lang="en"
      className={`dark ${playfairDisplay.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-background text-foreground min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
