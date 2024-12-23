/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "images.unsplash.com" && "us-east-1-shared-usea1-02.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
