import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const teachings = [
  {
    title: "Dhamma Articles",
    description: "Read the latest articles by Master Acharavadee.",
    image: "/images/teachings-articles.jpg",
    href: "/blog",
    cta: "Read",
  },
  {
    title: "Books",
    description: "Top Ideas in Buddhism and famous stories in the Buddha's time.",
    image: "/images/teachings-books.jpg",
    href: "/blog?category=books",
    cta: "More",
  },
  {
    title: "Videos",
    description: "A collection of Dhamma talks given by Master Acharavadee.",
    image: "/images/teachings-videos.jpg",
    href: "https://www.youtube.com/watch?v=C5VMOG6XW48",
    cta: "Watch now",
    external: true,
  },
];

export function TeachingsSection() {
  return (
    <section id="teachings" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeading title="Teachings" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachings.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-gold-50"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <Separator className="mb-4" />
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-dark/60 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <Separator className="mb-4" />
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-600 hover:text-brand-gold-800 transition-colors"
                  >
                    {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-600 hover:text-brand-gold-800 transition-colors"
                  >
                    {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
