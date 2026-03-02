import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ManasikarnSection() {
  return (
    <>
      <div id="manasikarn" className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/images/manasikarn-aerial.webp"
          alt="Manasikarn Hall aerial view"
          fill
          className="object-cover object-[center_70%] md:object-[center_68%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center md:items-start md:pt-[30%]">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide drop-shadow-lg"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Manasikarn Hall
          </h2>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="max-w-3xl mx-auto">
            <span className="text-brand-gold-500 text-sm font-semibold tracking-widest uppercase mb-2 block text-center">
              Sacred Space
            </span>

            <div className="space-y-4 text-brand-dark/70 leading-relaxed mt-8">
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

            <div className="mt-8 text-center">
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
      </section>
    </>
  );
}
