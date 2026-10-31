import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Product screenshots carry small UI text, so they're served at quality 85.
  images: { qualities: [75, 85] },
};

export default nextConfig;
