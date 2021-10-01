const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra({
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: 'pgrade-insecure-requests'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=2592000;includeSubdomains'
                    },
                    {
                        key: 'X-Xss-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'geolocation=(self)'
                    }
                ]
            }
        ];
    }
})
