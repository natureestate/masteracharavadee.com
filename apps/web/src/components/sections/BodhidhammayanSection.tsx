import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function BodhidhammayanSection() {
  return (
    <section id="bodhidhammayan" className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/retreat-aerial.jpg"
          alt="Bodhidhammayan Retreat aerial view"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-brand-dark/90 to-brand-dark/70" />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block w-12 h-0.5 bg-brand-gold-500 mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-brand-gold-300">
              Bodhidhammayan Retreat
            </h2>

            <div className="space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
              <p>
                Bodhidhammayan Retreat Meditation Center is located at Kaeng Khoi,
                Saraburi and established by Master Acharavadee Wongsakon.
              </p>
              <p>
                The first meditation course began on 25th January 2011 and over
                150 meditation courses had been organised without any charge
                during the past 14 years, with over 10,000 Thai and foreign
                meditators both ascetics and lay people.
              </p>
              <p>
                Techo Vipassana technique comes from; Techo, fire, and Vipassana,
                insight meditation. It is a direct approach to the Buddha&apos;s
                words &ldquo;atapi sampajano satima&rdquo;, which means
                &ldquo;keep persevering, and burning impurities&rdquo;.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.bodhidhammayan.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-brand-gold-400 text-brand-gold-400 hover:bg-brand-gold-400/10 gap-2"
                >
                  Visit Bodhidhammayan <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-serif text-xl text-brand-gold-400 mb-4">
                Techo Vipassana Meditation
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                This method uses the 4 foundations of mindfulness and is
                considered a fast track method to purifying the mind using the
                body&apos;s fire element.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Master Acharavadee teaches this method to laypersons and ordained
                Buddhist monks at various Bodhidhammayan retreat centers
                throughout Thailand once they have completed 40 hours of
                Anapanasati meditation.
              </p>
              <p className="text-brand-gold-400/80 text-xs font-medium">
                All meditation courses, accommodations and food are provided at
                no charge, by the School of Life Foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
