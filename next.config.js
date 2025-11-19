/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://gc-capital-landing.netlify.app' 
      : 'http://localhost:3000'
  },
  // Configuración específica para Netlify
  trailingSlash: false,
  // Configuración para evitar problemas de History API
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
