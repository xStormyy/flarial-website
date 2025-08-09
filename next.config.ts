import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  generateEtags: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-ext-1.discordapp.net',
      },
    ],
    unoptimized: true,
  },
  async generateBuildId() {
    return 'flarial-build'
  },
};

export default nextConfig;
