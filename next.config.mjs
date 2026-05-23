/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    // SAFETY NET: Add future redirects here ONLY with 301 (permanent).
    // NEVER remove existing redirects. Only add new ones.
    return [
      {
        source: '/categories/shilajit',
        destination: '/products/himalayan-shilajit-resin',
        permanent: false,
      },
      {
        source: '/categories/almonds',
        destination: '/products/mamra-almonds-premium',
        permanent: false,
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
