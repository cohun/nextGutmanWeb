/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  i18n: {
    locales: ['en', 'hu'],
    defaultLocale: 'en',
  },
};
