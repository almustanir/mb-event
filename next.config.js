/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io','fastly.picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: ''
      },
    ]
  }
}

module.exports = nextConfig
