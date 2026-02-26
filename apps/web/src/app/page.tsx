import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VideoQuoteSection } from "@/components/sections/VideoQuoteSection";
import { LatestPostsSection } from "@/components/sections/LatestPostsSection";
import { TeachingsSection } from "@/components/sections/TeachingsSection";
import { BodhidhammayanSection } from "@/components/sections/BodhidhammayanSection";
import { ManasikarnSection } from "@/components/sections/ManasikarnSection";
import { HomeJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HeroSection />
      <AboutSection />
      <VideoQuoteSection />
      <LatestPostsSection />
      <TeachingsSection />
      <BodhidhammayanSection />
      <ManasikarnSection />
    </>
  );
}
