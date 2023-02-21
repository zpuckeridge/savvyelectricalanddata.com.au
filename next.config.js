/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: "/savvyelectricalanddata.com.au",
};

module.exports = nextConfig;
