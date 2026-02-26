import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/section-heading";
import { samplePosts, sampleCategories } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dhamma articles, teachings, and news by Master Acharavadee Wongsakon.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - Master Acharavadee",
    description:
      "Dhamma articles, teachings, and news by Master Acharavadee Wongsakon.",
  },
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string; page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const activeCategory = params.category;
  const currentPage = Number(params.page ?? "1");
  const postsPerPage = 9;

  const filteredPosts = activeCategory
    ? samplePosts.filter((p) =>
        p.categories.some((c) => c.slug.current === activeCategory)
      )
    : samplePosts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-dark">
        <div className="absolute inset-0 bg-linear-to-b from-brand-dark to-brand-dark/95" />
        <div className="relative z-10 max-w-4xl mx-auto section-padding">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-gold-500 shrink-0">
              <Image
                src="/images/dhamma-icon.png"
                alt="Dhamma"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                Dhamma
              </h1>
              <blockquote className="text-white/60 text-sm italic leading-relaxed max-w-xl">
                &ldquo;Dhamma is directly translated as nature or normality. In
                Buddhism, Dhamma has a meaning associated to goodness,
                righteousness, and appropriateness. It is timeless.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Posts */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Category Filter */}
          <div className="mb-10">
            {/* Desktop: inline pills */}
            <div className="hidden md:flex flex-wrap gap-2">
              <Link
                href="/blog"
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                  !activeCategory
                    ? "gold-gradient text-white"
                    : "bg-brand-gold-50 text-brand-dark/70 hover:bg-brand-gold-100"
                )}
              >
                All
              </Link>
              {sampleCategories.map((cat) => (
                <Link
                  key={cat.slug.current}
                  href={`/blog?category=${cat.slug.current}`}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                    activeCategory === cat.slug.current
                      ? "gold-gradient text-white"
                      : "bg-brand-gold-50 text-brand-dark/70 hover:bg-brand-gold-100"
                  )}
                >
                  {cat.title}
                </Link>
              ))}
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="md:hidden -mx-6 px-6">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <Link
                  href="/blog"
                  className={cn(
                    "shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                    !activeCategory
                      ? "gold-gradient text-white"
                      : "bg-brand-gold-50 text-brand-dark/70"
                  )}
                >
                  All
                </Link>
                {sampleCategories.map((cat) => (
                  <Link
                    key={cat.slug.current}
                    href={`/blog?category=${cat.slug.current}`}
                    className={cn(
                      "shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                      activeCategory === cat.slug.current
                        ? "gold-gradient text-white"
                        : "bg-brand-gold-50 text-brand-dark/70"
                    )}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  publishedAt={post.publishedAt}
                  imageUrl={post.imageUrl}
                  categories={post.categories}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-brand-dark/50 text-lg">
                No posts found in this category.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={`/blog?${activeCategory ? `category=${activeCategory}&` : ""}page=${page}`}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                      page === currentPage
                        ? "gold-gradient text-white"
                        : "bg-brand-gold-50 text-brand-dark/70 hover:bg-brand-gold-100"
                    )}
                  >
                    {page}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
