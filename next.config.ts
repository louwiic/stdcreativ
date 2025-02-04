/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'victorthemes.com',
        pathname: '/themes/seese/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
