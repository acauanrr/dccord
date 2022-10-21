/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    JWT_SECRET:
      "441e4b132dad878cd8865682af4904042a9a3316c1ef62ac7568ec18d4c85e75",
    API_URI_LOCAL: "http://localhost:4001",
    API_URI_CLOUD: "https://dccord-api.vercel.app",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
