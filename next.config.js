/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hotdanghomes.web-design-studio.co.uk'],
  },
  swcMinify: true,
  experimental: {
    appDir: true // enable app directory
  }
};
module.exports = nextConfig;
