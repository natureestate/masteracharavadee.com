import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/retreat-aerial.jpg"
        alt="Meditation under the Bodhi tree at Bodhidhammayan Retreat"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block w-12 h-0.5 bg-brand-gold-500 mb-6" />
        </div>

        <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed md:leading-relaxed mb-8 drop-shadow-lg">
          &ldquo;Once we purify our mind, we shine with our own light&rdquo;
        </blockquote>

        <p className="text-brand-gold-300 text-sm md:text-base font-medium tracking-widest uppercase drop-shadow-md">
          Master Acharavadee Wongsakon
        </p>

        <div className="mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="#about"
              className="border-white/60 text-white hover:bg-white/10 hover:border-white"
            >
              Discover More
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-brand-gold-400 transition-colors animate-bounce hidden md:block"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 drop-shadow-md" />
      </a>
    </section>
  );
}
