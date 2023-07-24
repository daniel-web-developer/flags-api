/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            'flagcdn.com',
            'upload.wikimedia.org'
        ]
        // remotePatterns:[
        //     {
        //         protocol: 'https',
        //         hostname: 'flagcdn.com',
        //         port: '',
        //     },
        //     {
        //         protocol: 'https',
        //         hostname: 'upload.wikimedia.org',
        //         port: '',
        //     }
        // ]
    }
}

module.exports = nextConfig
