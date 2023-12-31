/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['tailwindui.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
