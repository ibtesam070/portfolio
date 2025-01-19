import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "shadcn.dev",
      },
      {
        protocol: "https",
        hostname: "nestjs.com",
      },
      {
        protocol: "https",
        hostname: "www.docker.com",
      },
      {
        protocol: "https",
        hostname: "ui.shadcn.com",
      },
      {
        protocol: "https",
        hostname: "icons.iconarchive.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
