/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["imagedelivery.net","avatars.githubusercontent.com"],
  },
  swcMinify: true
};

module.exports = nextConfig;
