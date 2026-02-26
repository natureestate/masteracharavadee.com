import { cn } from "@/lib/utils";
import { Separator } from "./separator";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-brand-dark/60 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <Separator
        className={cn(
          "mt-4 w-16 bg-brand-gold-500 h-0.5",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
