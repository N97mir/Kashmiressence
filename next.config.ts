import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/categories/shilajit',
        destination: '/products/himalayan-shilajit-resin',
        permanent: true,
      },
      {
        source: '/categories/almonds',
        destination: '/products/mamra-almonds-premium',
        permanent: true,
      },
      {
        source: '/categories/mamra-almonds',
        destination: '/products/mamra-almonds-premium',
        permanent: true,
      },
      {
        source: '/categories/chilli',
        destination: '/categories/spices',
        permanent: true,
      },
      {
        source: '/categories/kahwa',
        destination: '/categories/spices',
        permanent: true,
      },
      {
        source: '/categories/dry-fruits',
        destination: '/categories/gift-boxes',
        permanent: true,
      },
      {
        source: '/categories/saffron-gift',
        destination: '/categories/gift-boxes',
        permanent: true,
      },
      {
        source: '/products/himalayan-shilajit-resin-40g',
        destination: '/products/himalayan-shilajit-resin-50g',
        permanent: true,
      },
      {
        source: '/products/kashmiri-acacia-honey',
        destination: '/products/kashmiri-acacia-honey-500g',
        permanent: true,
      },
      {
        source: '/products/raw-sulai-honey',
        destination: '/products/ramban-sulai-honey',
        permanent: true,
      },
      {
        source: '/products/kashmiri-chilli-powder',
        destination: '/products/kashmiri-chilli-powder-100g',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/sitemap_v2.xml', destination: '/sitemap.xml' },
    ];
  },
};

export default nextConfig;
