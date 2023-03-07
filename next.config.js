/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => {
    return [{ source: "/posts", destination: "/", permanent: true }];
  },
};

module.exports = nextConfig;
