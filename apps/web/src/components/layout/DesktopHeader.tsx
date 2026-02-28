"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Teachings",
    href: "/#teachings",
    children: [{ label: "Blog", href: "/blog" }],
  },
  {
    label: "Bodhidhammayan",
    href: "https://www.bodhidhammayan.org/",
    external: true,
  },
  {
    label: "Manasikarn Hall",
    href: "https://manasikarn.com/",
    external: true,
  },
  {
    label: "Buy Master's Book",
    href: "https://www.amazon.com/AWAKEN-MADNESS-Acharavadee-Wongsakon-ebook/dp/B0CNXT8BRT",
    external: true,
  },
];

export function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string, hasChildren: boolean) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hasChildren) setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300",
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-md shadow-sm"
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
                handleMouseEnter(item.label, !!item.children)
              }
              onMouseLeave={handleMouseLeave}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-md transition-colors text-brand-dark hover:text-brand-gold-600"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 text-brand-dark hover:text-brand-gold-600"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-brand-gold-100 py-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-brand-dark hover:bg-brand-gold-50 hover:text-brand-gold-700 transition-colors"
                      onClick={() => setOpenDropdown(null)}
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
