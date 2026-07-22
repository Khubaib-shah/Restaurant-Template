import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
    ],
  },
  // @ts-ignore - this is a valid Next.js dev option even if types don't always catch it
  allowedDevOrigins: ['marhababbq.local', 'azfoodcorner.local', 'ghalib.local', 'demo.local'],
};

export default nextConfig;
