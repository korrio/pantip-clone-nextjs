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
}
