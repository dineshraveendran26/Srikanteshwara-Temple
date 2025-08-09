/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export in the `out/` directory on build
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
