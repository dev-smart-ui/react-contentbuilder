const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const nextConfig = {
  reactStrictMode: true,
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'react-contentbuilder.vercel.app',
      'builder.smart-ui.pro',"localhost"
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig;
