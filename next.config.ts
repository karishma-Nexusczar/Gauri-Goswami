import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local development does not provide Cloudflare's ASSETS image binding.
  // Serve the bundled public images directly instead of routing them through
  // Vinext's optimisation endpoint.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
