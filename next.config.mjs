// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'user-images.trustpilot.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        pathname: '/atrancasv2/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
