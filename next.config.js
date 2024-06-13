/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    // Add remotePatterns instead of domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "investment-server-om2a\\.onrender\\.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "**",
      },
    ],
  },
};
