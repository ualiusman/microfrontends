/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/:path*',
                destination: `/:path*`,
            },
            {
                source: '/catalog',
                destination: `http://localhost:3001/catalog`,
            },
            {
                source: '/catalog/:path*',
                destination: `http://localhost:3001/catalog/:path*`,
            },
        ]
    },
}

module.exports = nextConfig
