/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

if (process.env.NODE_ENV === "production") {
  nextConfig.output = "export";
  nextConfig.images = {
    loader: "custom",
    loaderFile: "./image-loader.js",
  };
  nextConfig.assetPrefix = "/airbnb-clone";
}

module.exports = nextConfig;
