/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost:3001/api/:path*'
      }
    ];
  },
  // Additional Next.js configuration can be added here
};

module.exports = nextConfig;
