/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "a0.muscache.com",
      "links.papareact.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoibm9vYm1hc3RlcjQzMiIsImEiOiJjbGNrZjlpZTQwZXdoM3BwODA5cGp2cHU4In0.0EkWJ3Ryhj223YtPgQAM3Q",
  },
};

module.exports = nextConfig
