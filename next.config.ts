import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "promgrad.pp.ua",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
