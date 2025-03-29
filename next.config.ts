import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", 
        hostname: "promgrad.pp.ua", 
        port: "",
        pathname: "/media/product/**",
      },
    ],
  },
};

export default nextConfig;
