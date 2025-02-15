import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        domains: ["res.cloudinary.com"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
