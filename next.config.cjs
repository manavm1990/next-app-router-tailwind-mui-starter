/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
    serverActions: true,
    typedRoutes: true,
  },
};

module.exports = nextConfig;
