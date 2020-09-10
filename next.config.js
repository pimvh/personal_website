// next.config.js

// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
// const withSourceMaps = require('@zeit/next-source-maps')();
// withSourceMaps(

module.exports = {
    /* config options here */
    webpack: (config, { isServer }) => {
        if (isServer) {
          require('./lib/generate-sitemap')
        }

        return config
    },
}
