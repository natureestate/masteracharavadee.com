import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="text-center section-padding">
        <span className="inline-block w-12 h-0.5 bg-brand-gold-500 mb-6" />
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-brand-gold-500 mb-4">
          404
        </h1>
        <h2 className="font-serif text-2xl md:text-3xl text-brand-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-brand-dark/60 mb-8 max-w-md mx-auto">
          The page you are looking for might have been moved or no longer exists.
          Please check the URL or return to the home page.
        </p>
        <Button asChild>
          <Link href="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
