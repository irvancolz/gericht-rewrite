/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/blog",
        destination: "/blogs",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
