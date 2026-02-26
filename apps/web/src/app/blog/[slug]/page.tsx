import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPostBySlug, getRelatedPosts, samplePosts } from "@/lib/sample-data";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} - Master Acharavadee`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export function generateStaticParams() {
  return samplePosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);
  const shareUrl = `https://masteracharavadee.com/blog/${slug}`;

  return (
    <>
      {/* Article */}
      <article className="pt-20 md:pt-28">
        {/* Hero Image */}
        <div className="relative w-full aspect-16/9 md:aspect-21/9 max-h-[500px] bg-brand-dark">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover opacity-80"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 via-brand-dark/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto section-padding -mt-16 md:-mt-24 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <Link
                  key={cat.slug.current}
                  href={`/blog?category=${cat.slug.current}`}
                  className="text-xs font-semibold text-brand-gold-600 bg-brand-gold-50 px-3 py-1 rounded-full hover:bg-brand-gold-100 transition-colors"
                >
                  {cat.title}
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl md:text-4xl font-bold text-brand-dark leading-tight mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-brand-dark/50 mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              <span>&middot;</span>
              <span>{post.author.name}</span>
            </div>

            <Separator className="mb-8" />

            {/* Body */}
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-dark prose-p:text-brand-dark/75 prose-p:leading-relaxed">
              {post.body.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Share */}
            <Separator className="my-8" />
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-brand-dark/60 flex items-center gap-1.5">
                <Share2 className="h-4 w-4" /> Share:
              </span>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-gold-600 hover:text-brand-gold-800 font-medium"
              >
                X (Twitter)
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-gold-600 hover:text-brand-gold-800 font-medium"
              >
                Facebook
              </a>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag.slug.current}
                    className="text-xs text-brand-dark/50 bg-brand-cream px-3 py-1 rounded-full"
                  >
                    #{tag.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Back to blog */}
        <div className="max-w-3xl mx-auto section-padding mt-6 mb-4">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="gap-2 text-brand-dark/60">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </Button>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-brand-cream">
          <div className="max-w-7xl mx-auto section-padding">
            <SectionHeading title="Related Articles" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <BlogCard
                  key={rp.slug}
                  title={rp.title}
                  slug={rp.slug}
                  publishedAt={rp.publishedAt}
                  imageUrl={rp.imageUrl}
                  categories={rp.categories}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.imageUrl,
            datePublished: post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Master Acharavadee",
              url: "https://masteracharavadee.com",
            },
          }),
        }}
      />
    </>
  );
}
