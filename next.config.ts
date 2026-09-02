import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 85, 90, 95, 100],
  },
};

export default nextConfig;
