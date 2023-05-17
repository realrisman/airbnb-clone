/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
