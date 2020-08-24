// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    /* config options here */
    webpack: (config, { isServer }) => {
        if (isServer) {
          require('./lib/generate-sitemap')
        }

        return config
    },
    async rewrites() {
        return [
        ]
    }
})
