import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { DesktopHeader } from "@/components/layout/DesktopHeader";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://masteracharavadee.com"
  ),
  title: {
    default: "Master Acharavadee",
    template: "%s - Master Acharavadee",
  },
  description:
    "Acharavadee Wongsakon is a Thai lay Buddhist teacher teaching Techo Vipassana meditation at Bodhidhammayan retreat centers throughout Thailand.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Master Acharavadee",
    title: "Master Acharavadee",
    description:
      "Acharavadee Wongsakon is a Thai lay Buddhist teacher teaching Techo Vipassana meditation.",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        <DesktopHeader />
        <MobileHeader />
        <main>{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
