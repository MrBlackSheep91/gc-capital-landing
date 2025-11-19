/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://gc-capital.netlify.app' 
      : 'http://localhost:3000'
  }
}

module.exports = nextConfig
