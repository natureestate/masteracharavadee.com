"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  User,
  BookOpen,
  Mountain,
  Landmark,
  ShoppingBag,
  Newspaper,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  children?: { label: string; href: string; icon: React.ReactNode }[];
}

const mobileMenuItems: MobileMenuItem[] = [
  { label: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  { label: "About", href: "/about", icon: <User className="h-5 w-5" /> },
  {
    label: "Teachings",
    href: "/#teachings",
    icon: <BookOpen className="h-5 w-5" />,
    children: [
      {
        label: "Blog",
        href: "/blog",
        icon: <Newspaper className="h-4 w-4" />,
      },
      {
        label: "Books",
        href: "/blog?category=books",
        icon: <BookOpen className="h-4 w-4" />,
      },
    ],
  },
  {
    label: "Bodhidhammayan",
    href: "/#bodhidhammayan",
    icon: <Mountain className="h-5 w-5" />,
  },
  {
    label: "Manasikarn Hall",
    href: "/#manasikarn",
    icon: <Landmark className="h-5 w-5" />,
  },
  {
    label: "Buy Master's Book",
    href: "https://www.amazon.com/AWAKEN-MADNESS-Acharavadee-Wongsakon-ebook/dp/B0CNXT8BRT",
    icon: <ShoppingBag className="h-5 w-5" />,
    external: true,
  },
];

export function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, mounted]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setExpandedItem(null);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
    setExpandedItem(null);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="shrink-0" onClick={closeMenu}>
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
            onClick={toggleMenu}
            className="relative p-2 rounded-md text-brand-dark hover:bg-brand-gold-50 transition-colors z-60"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block transition-all duration-300",
                menuOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
              )}
            >
              <Menu className="h-6 w-6" />
            </span>
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300",
                menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
              )}
            >
              <X className="h-6 w-6" />
            </span>
          </button>
        </div>
      </header>

      {mounted && (
        <div
          className={cn(
            "fixed inset-0 z-50 md:hidden transition-all duration-300",
            menuOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          )}
          aria-hidden={!menuOpen}
        >
          {/* ฉากหลังเบลอ */}
          <div
            className={cn(
              "absolute inset-0 bg-brand-dark/40 backdrop-blur-md transition-opacity duration-300",
              menuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={closeMenu}
          />

          {/* Modal ตรงกลาง */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div
              className={cn(
                "relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-brand-gold-200/50 overflow-hidden transition-all duration-300 ease-out",
                menuOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-4"
              )}
            >
              {/* Header ของ modal */}
              <div className="px-6 pt-6 pb-4 border-b border-brand-gold-100/50">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo-master.png"
                    alt="Master Acharavadee"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              {/* เมนู */}
              <nav className="py-2 max-h-[60vh] overflow-y-auto">
                {mobileMenuItems.map((item, index) => (
                  <div
                    key={item.label}
                    className={cn(
                      "transition-all duration-300 ease-out",
                      menuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    )}
                    style={{
                      transitionDelay: menuOpen
                        ? `${100 + index * 50}ms`
                        : "0ms",
                    }}
                  >
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.label ? null : item.label
                            )
                          }
                          className="flex items-center w-full px-6 py-3.5 gap-3 text-brand-dark hover:bg-brand-gold-50/70 transition-colors"
                        >
                          <span className="text-brand-gold-500">
                            {item.icon}
                          </span>
                          <span className="flex-1 text-left font-medium text-[15px]">
                            {item.label}
                          </span>
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 text-brand-dark/30 transition-transform duration-200",
                              expandedItem === item.label && "rotate-90"
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-200 ease-out",
                            expandedItem === item.label
                              ? "max-h-40 opacity-100"
                              : "max-h-0 opacity-0"
                          )}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center gap-3 pl-14 pr-6 py-3 text-sm text-brand-dark/70 hover:bg-brand-gold-50/70 hover:text-brand-gold-700 transition-colors"
                              onClick={closeMenu}
                            >
                              <span className="text-brand-gold-400">
                                {child.icon}
                              </span>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3.5 gap-3 text-brand-dark hover:bg-brand-gold-50/70 transition-colors"
                        onClick={closeMenu}
                      >
                        <span className="text-brand-gold-500">
                          {item.icon}
                        </span>
                        <span className="flex-1 font-medium text-[15px]">
                          {item.label}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 text-brand-dark/25" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center px-6 py-3.5 gap-3 text-brand-dark hover:bg-brand-gold-50/70 transition-colors"
                        onClick={closeMenu}
                      >
                        <span className="text-brand-gold-500">
                          {item.icon}
                        </span>
                        <span className="font-medium text-[15px]">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-brand-gold-100/50 bg-brand-gold-50/30">
                <p className="text-xs text-brand-dark/40 leading-relaxed text-center">
                  Contact: +66 85 175 1411
                  <br />
                  9.00 - 18.00 (Thailand Time)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
