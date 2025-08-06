/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '**',
      },
    ],
    // Add this line to allow SVG images from remote hosts
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;