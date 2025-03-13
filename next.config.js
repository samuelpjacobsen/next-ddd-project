/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-ddd-project',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;