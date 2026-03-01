import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/master-portrait.webp"
                alt="Master Acharavadee Wongsakon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-brand-gold-400 rounded-2xl hidden md:block" />
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-block w-12 h-0.5 bg-brand-gold-500 mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Master Acharavadee Wongsakon
            </h2>
            <p className="text-brand-dark/70 leading-relaxed mb-6">
              Acharavadee Wongsakon is a Thai lay Buddhist teacher and former
              entrepreneur who has been teaching meditation and Vipassana,
              advanced meditation in Thailand for more than 14 years to
              laypersons and ordained Buddhist monks at various Bodhidhammayan
              retreat centers throughout Thailand. She is the founder of the
              Knowing Buddha Organization, which campaigns against disrespectful
              uses of Buddha imagery and the general decline of morality in
              society.
            </p>
            <Button asChild>
              <Link href="/about" className="gap-2">
                Read Biography <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
