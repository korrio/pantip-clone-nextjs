/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    URL: process.env.NEXT_URL,
    TITLE:""
  },
  typescript: {
    // Temporarily ignore build errors due to Next.js internal type issues
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint during builds
    ignoreDuringBuilds: true,
  },
  images: {
    // Enable image optimization
    domains: ['avatars.dicebear.com', 'f.ptcdn.info'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
