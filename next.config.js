/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: "http://localhost:8813",
  },
  images: {
    domains: ["ui-avatars.com"],
  },
};

module.exports = nextConfig;
