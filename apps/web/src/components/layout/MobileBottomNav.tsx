"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, User, BookOpen, Mountain, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const mobileNavItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Teachings", href: "/blog", icon: BookOpen },
  { label: "Retreat", href: "/#bodhidhammayan", icon: Mountain },
  { label: "Manasikarn", href: "/#manasikarn", icon: Landmark },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-brand-gold-100 safe-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {mobileNavItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href.split("#")[0]) &&
                item.href.split("#")[0] !== "/";
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-0.5 px-3 py-1 transition-colors",
                isActive
                  ? "text-brand-gold-600"
                  : "text-brand-dark/60 hover:text-brand-gold-500"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "stroke-[2.5]")} />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <span className="absolute bottom-0 w-8 h-0.5 gold-gradient rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
