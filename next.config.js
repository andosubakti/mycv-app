/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "dci-storage.privydev.id",
        port: "",
        pathname: "/pretest-api/**",
      },
    ],
  },
};

module.exports = nextConfig;
