import Link from "next/link";
import { Mail, Phone, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl text-brand-gold-400 mb-4">
              Contact with us
            </h3>
            <Separator className="bg-brand-gold-700 mb-6 w-16" />
            <p className="text-white/80 font-medium mb-4">
              Master Acharavadee Wongsakon
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-gold-500 shrink-0" />
                <a
                  href="mailto:masteracharavadee@Techovipassana.org"
                  className="hover:text-brand-gold-400 transition-colors"
                >
                  masteracharavadee@Techovipassana.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-brand-gold-500 shrink-0" />
                <a
                  href="https://www.facebook.com/profile.php?id=61553446727150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold-400 transition-colors"
                >
                  MasterAcharavadee Wongsakon
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-gold-500 shrink-0" />
                <span>+66 85 175 1411</span>
              </li>
            </ul>
            <p className="text-xs text-white/50 mt-3">
              Contact from 9.00 - 18.00 (Thailand Time) — English Speaking Only
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl text-brand-gold-400 mb-4">
              Quick Links
            </h3>
            <Separator className="bg-brand-gold-700 mb-6 w-16" />
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-brand-gold-400 transition-colors">
                  About Master
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-gold-400 transition-colors">
                  Teachings & Articles
                </Link>
              </li>
              <li>
                <a
                  href="https://www.bodhidhammayan.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold-400 transition-colors"
                >
                  Bodhidhammayan Retreat
                </a>
              </li>
              <li>
                <a
                  href="https://manasikarn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold-400 transition-colors"
                >
                  Manasikarn Hall
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-brand-gold-400 mb-4">
              Bodhidhammayan Retreat
            </h3>
            <Separator className="bg-brand-gold-700 mb-6 w-16" />
            <p className="text-sm text-white/70 leading-relaxed">
              Techo Vipassana Meditation — a fast track method to purifying the
              mind using the body&apos;s fire element. All courses are provided at
              no charge.
            </p>
          </div>
        </div>

        <Separator className="bg-white/10 my-8" />

        <div className="flex items-center justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} All Rights Reserved masteracharavadee.com
          </p>
          <ScrollToTopButton />
        </div>
      </div>

      <div className="h-16 md:hidden" />
    </footer>
  );
}
