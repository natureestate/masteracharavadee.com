import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function VideoQuoteSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-4xl mx-auto section-padding text-center">
        <span className="inline-block w-12 h-0.5 bg-brand-gold-500 mb-8" />
        <blockquote className="font-serif text-lg md:text-2xl text-brand-dark/80 leading-relaxed md:leading-relaxed italic mb-10">
          &ldquo;It was on the runway, under the bright lights and the flash of
          cameras and the shouts of adulation and clapping, this entrepreneur and
          businesswoman Acharavadee Wongsakon, had a moment of clarity, where
          time ran in slow motion and an instance, she knew that she was ready to
          give up everything she had dreamed about, and striven and simply
          dedicated her life to teaching Vipassana meditation, teaching dhamma
          and protecting Buddhism&rdquo;
        </blockquote>
        <Button variant="outline" size="lg" asChild>
          <a
            href="https://www.youtube.com/watch?v=55vd5-S6h0k"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            Subscribe Youtube Channel <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
