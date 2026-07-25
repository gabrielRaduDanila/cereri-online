/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@react-pdf/renderer'],
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },
  async redirects() {
    return [
      {
        source: '/blog/cum-dai-demisie-in-2026',
        destination: '/blog/cum-iti-dai-demisia-in-2026',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
