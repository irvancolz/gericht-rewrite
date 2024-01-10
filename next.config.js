/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/blog/:name",
        destination: "/blogs/:name",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "/blogs",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/men/**",
      },
    ],
  },
};

module.exports = nextConfig;
