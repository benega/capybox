import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@capybox/game-engine",
    "@capybox/services",
    "@capybox/types"
  ]
};

export default nextConfig;
