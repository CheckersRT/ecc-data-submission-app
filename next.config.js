const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '4mb',
    },
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecc-data-submission-app.vercel.app",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
};

module.exports = nextConfig;
