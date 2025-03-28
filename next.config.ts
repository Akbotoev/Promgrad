import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.48.44.6",
        port: "",
        pathname: "/media/product/**",
      },
    ],
  },
};

export default nextConfig;
