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
};

module.exports = nextConfig;
