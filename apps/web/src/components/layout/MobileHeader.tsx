"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const mobileMenuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Bodhidhammayan", href: "https://www.bodhidhammayan.org/", external: true },
  { label: "Manasikarn Hall", href: "https://manasikarn.com/", external: true },
  {
    label: "Buy Master's Book",
    href: "https://www.amazon.com/AWAKEN-MADNESS-Acharavadee-Wongsakon-ebook/dp/B0CNXT8BRT",
    external: true,
  },
];

export function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-master.png"
              alt="Master Acharavadee"
              width={140}
              height={46}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "p-2 rounded-md transition-colors",
              scrolled ? "text-brand-dark" : "text-white"
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-14 right-0 w-72 h-[calc(100vh-3.5rem)] bg-white shadow-xl overflow-y-auto">
            <nav className="py-4">
              {mobileMenuItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 text-brand-dark hover:bg-brand-gold-50 hover:text-brand-gold-700 border-b border-brand-gold-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-6 py-3 text-brand-dark hover:bg-brand-gold-50 hover:text-brand-gold-700 border-b border-brand-gold-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
