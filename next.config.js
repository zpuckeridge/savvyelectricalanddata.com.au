/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flowbite.s3.amazonaws.com"],
  },
  basePath: "/savvyelectricalanddata.com.au",
};

module.exports = nextConfig;
