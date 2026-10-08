import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 480, 576, 640, 688, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
