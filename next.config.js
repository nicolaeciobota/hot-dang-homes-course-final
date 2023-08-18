/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  swcMinify: true,
  experimental: {
    appDir: true // enable app directory
  }
};
module.exports = nextConfig;
