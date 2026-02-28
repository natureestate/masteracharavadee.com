"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuItem {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string }[];
}

const mobileMenuItems: MobileMenuItem[] = [
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

export function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedItem(null);
  };

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
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-brand-dark hover:bg-brand-gold-50 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />

        <div
          className={cn(
            "absolute top-14 right-0 w-72 h-[calc(100vh-3.5rem)] bg-white shadow-xl overflow-y-auto transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="py-2">
            {mobileMenuItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full px-6 py-3.5 text-brand-dark hover:bg-brand-gold-50 border-b border-brand-gold-50/50 transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 text-brand-dark/40 transition-transform duration-200",
                          expandedItem === item.label && "rotate-90"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        expandedItem === item.label
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block pl-10 pr-6 py-3 text-sm text-brand-dark/80 hover:bg-brand-gold-50 hover:text-brand-gold-700 border-b border-brand-gold-50/30 transition-colors"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-3.5 text-brand-dark hover:bg-brand-gold-50 border-b border-brand-gold-50/50 transition-colors"
                    onClick={closeMenu}
                  >
                    <span className="font-medium">{item.label}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-brand-dark/30" />
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-6 py-3.5 font-medium text-brand-dark hover:bg-brand-gold-50 hover:text-brand-gold-700 border-b border-brand-gold-50/50 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="px-6 py-4 mt-2 border-t border-brand-gold-100">
            <p className="text-xs text-brand-dark/40 leading-relaxed">
              Contact: +66 85 175 1411
              <br />
              9.00 - 18.00 (Thailand Time)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
