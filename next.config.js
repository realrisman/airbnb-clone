/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
