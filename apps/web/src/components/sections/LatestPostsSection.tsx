import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const samplePosts = [
  {
    title: "Meditating for a country",
    slug: "meditating-for-a-country",
    publishedAt: "2025-12-21",
    imageUrl: "/images/blog/meditating-for-a-country.jpg",
    categories: [
      { title: "Motion", slug: { current: "motion" } },
      { title: "News", slug: { current: "news" } },
    ],
  },
  {
    title: "International World Intangible Cultural Heritage and Healthy Lifestyle event",
    slug: "international-world-intangible-cultural-heritage-and-healthy-lifestyle-event",
    publishedAt: "2025-07-28",
    imageUrl: "/images/blog/intangible-cultural-heritage.jpg",
    categories: [
      { title: "Motion", slug: { current: "motion" } },
      { title: "News", slug: { current: "news" } },
    ],
  },
  {
    title: "Why Meditation Can Cure Depression?",
    slug: "why-meditation-can-cure-depression",
    publishedAt: "2025-06-08",
    imageUrl: "/images/blog/meditation-cure-depression.jpg",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
  },
  {
    title: "Who is the Buddha?",
    slug: "who-is-the-buddha",
    publishedAt: "2025-06-02",
    imageUrl: "/images/blog/who-is-the-buddha.jpg",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
  },
];

export function LatestPostsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeading title="Latest Articles" />

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {samplePosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* Mobile: Horizontal scroll cards */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {samplePosts.map((post) => (
              <BlogCard
                key={post.slug}
                {...post}
                className="min-w-[280px] snap-start"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link href="/blog" className="gap-2">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
