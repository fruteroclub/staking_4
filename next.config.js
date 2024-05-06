/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // assetPrefix: isProd ? 'staking-4-6c3cfa.spheron.app' : '',
};

module.exports = nextConfig;
