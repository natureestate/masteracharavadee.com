import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  slug: string;
  publishedAt: string;
  imageUrl: string;
  categories?: Array<{ title: string; slug: { current: string } }>;
  className?: string;
}

export function BlogCard({
  title,
  slug,
  publishedAt,
  imageUrl,
  categories,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-gold-50",
        className
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {categories && categories.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {categories.map((cat) => (
              <span
                key={cat.slug.current}
                className="bg-brand-gold-500/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1.5 text-xs text-brand-dark/50 mb-2">
          <Calendar className="h-3 w-3" />
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
        </div>
        <h3 className="font-serif text-lg font-semibold text-brand-dark leading-snug group-hover:text-brand-gold-600 transition-colors line-clamp-2">
          {title}
        </h3>
      </div>
    </Link>
  );
}
