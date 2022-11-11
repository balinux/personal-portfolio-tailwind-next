/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['a.storyblok.com','tailwindui.com','images.unsplash.com'],
  },
}

module.exports = nextConfig
