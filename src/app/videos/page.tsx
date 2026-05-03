import Footer from "@/components/Footer";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { videoBannerImage, videos } from "@/data/case44";

export default function VideosPage() {
  return (
    <main className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src={videoBannerImage}
          alt="Case 44 video banner"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blues-deep/85 via-blues-mid/75 to-background" />
        <div className="absolute inset-0 bg-noise" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold/70 font-accent text-sm tracking-[0.3em] uppercase mb-4">
            Watch &amp; Listen
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-cream mb-6">
            <span className="text-gradient-gold">Videos</span>
          </h1>
          <p className="font-accent text-lg text-muted max-w-xl mx-auto">
            Live performance videos recovered from the original Case44rocks.com archive.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/20 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div
                key={video.embedUrl}
                className="group relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="relative aspect-video bg-blues-deep overflow-hidden">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                      {video.title}
                    </h3>
                    <a
                      href={video.embedUrl.replace("/embed/", "/watch?v=").split("?rel=")[0]}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${video.title} on YouTube`}
                    >
                      <ExternalLink className="w-4 h-4 text-muted/40 group-hover:text-gold transition-colors flex-shrink-0 mt-1" />
                    </a>
                  </div>
                  <p className="text-muted text-sm mt-2 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="px-2 py-0.5 bg-gold/10 text-gold/80 text-xs rounded border border-gold/20">
                      {video.venue}
                    </span>
                    <span className="text-muted/50 text-xs">{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted/60 text-sm">
              Videos are embedded from the official Case 44 YouTube archive.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
