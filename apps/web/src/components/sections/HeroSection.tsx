import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url(/images/retreat-aerial.webp)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-brand-dark/40 via-brand-dark/20 to-brand-dark/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block w-12 h-0.5 bg-brand-gold-500 mb-6" />
        </div>

        <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed md:leading-relaxed mb-8">
          &ldquo;Once we purify our mind, we shine with our own light&rdquo;
        </blockquote>

        <p className="text-brand-gold-400 text-sm md:text-base font-medium tracking-widest uppercase">
          Master Acharavadee Wongsakon
        </p>

        <div className="mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="#about"
              className="border-brand-gold-400 text-brand-gold-400 hover:bg-brand-gold-400/10"
            >
              Discover More
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-brand-gold-400 transition-colors animate-bounce hidden md:block"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
