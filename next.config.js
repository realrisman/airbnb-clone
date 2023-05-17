/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/airbnb-clone";
  nextConfig.output = "export";
}

module.exports = nextConfig;
