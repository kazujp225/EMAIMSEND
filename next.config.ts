import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ['form-eigyo-moyame.jp'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://form-eigyo-moyame.jp',
  },
};

export default nextConfig;
