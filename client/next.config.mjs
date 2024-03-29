/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    clientUrl: 'https://socila-media-client.vercel.app',
    serverUrl: 'https://social-media-server-ashy.vercel.app/',
  },
  images: {
    remotePatterns: [{ hostname: 'social-media-server-ashy.vercel.app' }],
  },
  reactStrictMode: false,
}

export default nextConfig
