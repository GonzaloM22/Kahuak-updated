/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'res.cloudinary.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
