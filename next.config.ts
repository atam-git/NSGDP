import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  reactStrictMode: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance optimizations
  compress: true,
  
  // Output standalone for optimal deployment
  output: 'standalone',

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Custom redirects (if needed)
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/login',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: 'user-role',
            value: 'public',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
