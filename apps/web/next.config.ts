import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "masteracharavadee.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/masters-biography",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/masters-biography/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/category/mobile",
        destination: "/blog?category=teaching",
        permanent: true,
      },
      {
        source: "/category/mobile/",
        destination: "/blog?category=teaching",
        permanent: true,
      },
      {
        source: "/category/motion",
        destination: "/blog?category=motion",
        permanent: true,
      },
      {
        source: "/category/motion/",
        destination: "/blog?category=motion",
        permanent: true,
      },
      {
        source: "/category/news",
        destination: "/blog?category=news",
        permanent: true,
      },
      {
        source: "/category/news/",
        destination: "/blog?category=news",
        permanent: true,
      },
      {
        source: "/category/books",
        destination: "/blog?category=books",
        permanent: true,
      },
      {
        source: "/category/books/",
        destination: "/blog?category=books",
        permanent: true,
      },
      {
        source: "/category/photography",
        destination: "/blog?category=photography",
        permanent: true,
      },
      {
        source: "/category/photography/",
        destination: "/blog?category=photography",
        permanent: true,
      },
      {
        source: "/category/:slug",
        destination: "/blog?category=:slug",
        permanent: true,
      },
      {
        source: "/category/:slug/",
        destination: "/blog?category=:slug",
        permanent: true,
      },
      {
        source: "/blog/page/:page",
        destination: "/blog?page=:page",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
