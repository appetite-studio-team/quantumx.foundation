/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment to static hosting (like Netlify)
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better compatibility with static hosting
  trailingSlash: true,
};

module.exports = nextConfig;
