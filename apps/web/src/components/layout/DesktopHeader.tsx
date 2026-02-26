"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Teachings",
    href: "#teachings",
    children: [{ label: "Blog", href: "/blog" }],
  },
  { label: "Bodhidhammayan", href: "#bodhidhammayan" },
  { label: "Manasikarn Hall", href: "#manasikarn" },
  {
    label: "Buy Master's Book",
    href: "https://www.amazon.com/AWAKEN-MADNESS-Acharavadee-Wongsakon-ebook/dp/B0CNXT8BRT",
    external: true,
  },
];

export function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-master.png"
            alt="Master Acharavadee"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children ? setOpenDropdown(item.label) : undefined
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    scrolled
                      ? "text-brand-dark hover:text-brand-gold-600"
                      : "text-white hover:text-brand-gold-300"
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1",
                    scrolled
                      ? "text-brand-dark hover:text-brand-gold-600"
                      : "text-white hover:text-brand-gold-300"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-brand-gold-100 py-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-gold-50 hover:text-brand-gold-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
