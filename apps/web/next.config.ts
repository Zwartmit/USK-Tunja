import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "http",
        hostname: "farm3.static.flickr.com",
      },
      {
        protocol: "https",
        hostname: "urbansketchers.org",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
