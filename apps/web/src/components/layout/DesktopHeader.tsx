"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Home,
  User,
  BookOpen,
  Mountain,
  Landmark,
  ShoppingBag,
  Newspaper,
  ExternalLink,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  mega?: {
    label: string;
    href: string;
    icon: React.ReactNode;
    description: string;
  }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
  { label: "About", href: "/about", icon: <User className="h-4 w-4" /> },
  {
    label: "Teachings",
    href: "/#teachings",
    icon: <BookOpen className="h-4 w-4" />,
    mega: [
      {
        label: "Blog",
        href: "/blog",
        icon: <Newspaper className="h-5 w-5" />,
        description: "Dhamma articles & teachings",
      },
      {
        label: "Books",
        href: "/blog?category=books",
        icon: <BookOpen className="h-5 w-5" />,
        description: "Buddhist literature",
      },
    ],
  },
  {
    label: "Bodhidhammayan",
    href: "https://www.bodhidhammayan.org/",
    icon: <Mountain className="h-4 w-4" />,
    external: true,
  },
  {
    label: "Manasikarn Hall",
    href: "https://manasikarn.com/",
    icon: <Landmark className="h-4 w-4" />,
    external: true,
  },
  {
    label: "Buy Master's Book",
    href: "https://www.amazon.com/AWAKEN-MADNESS-Acharavadee-Wongsakon-ebook/dp/B0CNXT8BRT",
    icon: <ShoppingBag className="h-4 w-4" />,
    external: true,
  },
];

export function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [megaOpen, setMegaOpen] = useState(false);

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

        <nav className="flex items-center gap-0.5">
          {navItems.map((item) => {
            const hasMega = !!item.mega;

            return (
              <div
                key={item.label}
                className="relative group/nav"
                onMouseEnter={() => {
                  setHoveredMenu(item.label);
                  if (hasMega) setMegaOpen(true);
                }}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  if (hasMega) setMegaOpen(false);
                }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 text-brand-dark hover:text-brand-gold-600 hover:bg-brand-gold-50/50"
                  >
                    <span
                      className={cn(
                        "transition-all duration-200 opacity-0 -ml-5 w-0 overflow-hidden",
                        hoveredMenu === item.label &&
                          "opacity-100 ml-0 w-4"
                      )}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                    <ExternalLink className="h-3 w-3 opacity-30" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 text-brand-dark hover:text-brand-gold-600 hover:bg-brand-gold-50/50"
                  >
                    <span
                      className={cn(
                        "transition-all duration-200 opacity-0 -ml-5 w-0 overflow-hidden",
                        hoveredMenu === item.label &&
                          "opacity-100 ml-0 w-4"
                      )}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                    {hasMega && (
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 transition-transform duration-200",
                          megaOpen &&
                            hoveredMenu === item.label &&
                            "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                )}

                {hasMega && (
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
                      megaOpen && hoveredMenu === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1"
                    )}
                  >
                    <div className="w-72 bg-white rounded-xl shadow-xl border border-brand-gold-100/60 p-2 backdrop-blur-sm">
                      {item.mega!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-brand-gold-50 transition-colors group/item"
                          onClick={() => setMegaOpen(false)}
                        >
                          <span className="mt-0.5 text-brand-gold-500 group-hover/item:text-brand-gold-600 transition-colors">
                            {child.icon}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-brand-dark group-hover/item:text-brand-gold-700 transition-colors">
                              {child.label}
                            </p>
                            <p className="text-xs text-brand-dark/50 mt-0.5">
                              {child.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
