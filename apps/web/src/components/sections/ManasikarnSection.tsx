import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ManasikarnSection() {
  return (
    <section id="manasikarn" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/manasikarn-hall.jpg"
                alt="Manasikarn Hall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-brand-gold-400 rounded-2xl hidden md:block" />
          </div>

          <div>
            <span className="text-brand-gold-500 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Sacred Space
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Manasikarn Hall
            </h2>

            <div className="space-y-4 text-brand-dark/70 leading-relaxed">
              <p>
                Built from Master Acharavadee and her student&apos;s deepest
                feeling of gratitude to Lord Buddha and the immeasurable value of
                his teachings, Manasikarn hall is the place to enshrine a total
                of 23 Buddha&apos;s relics and the Golden Buddha statue of Phra
                Baromlokanaj.
              </p>
              <p>
                At the Manasikarn hall, visitors are able to learn the basics of
                meditation practice in a way accessible to anybody, regardless of
                their knowledge and they will have the opportunity to revive Lord
                Buddha&apos;s life journey in an incredibly rich and insightful
                exhibition.
              </p>
              <p>
                The Manasikarn hall was inaugurated in September 2022, inviting
                all people to visit it and enjoy its magical surroundings.
              </p>
              <p>
                If you want to learn more about Manasikarn hall, please visit
                the website.
              </p>
            </div>

            <div className="mt-8">
              <Button size="lg" asChild>
                <a
                  href="https://manasikarn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  About Manasikarn Hall <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
