/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
  },
  poweredByHeader: false,
}

export default nextConfig
