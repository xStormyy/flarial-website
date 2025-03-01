import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-ext-1.discordapp.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/Cy6b5M86rf',
        permanent: false,
      },
      {
        source: '/donate',
        destination: 'https://ko-fi.com/flarialmc',
        permanent: false,
      },
      {
        source: '/beta',
        destination: 'https://youtu.be/zKrXD-MB90k',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube-nocookie.com",
              "frame-src 'self' https://www.youtube-nocookie.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "media-src 'self' https://www.youtube-nocookie.com",
              "connect-src 'self'"
            ].join('; ')
          }
        ]
      }
    ]
  }
};

export default nextConfig;
