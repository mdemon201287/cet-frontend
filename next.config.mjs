/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cet-titz.onrender.com',
            pathname: '/uploads/**',
        }, ],
    },
    // Other Next.js configurations can go here
};

export default nextConfig;