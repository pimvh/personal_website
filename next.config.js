// next.config.js

// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
// const withSourceMaps = require('@zeit/next-source-maps')();
// withSourceMaps(

const nextTranslate = require("next-translate");

module.exports = nextTranslate({
    /* config options here */
    webpack: (config, { isServer }) => {
        if (isServer) {
          require('./lib/generate-sitemap');
        }

        return config;
    },

    async rewrites() {
    return [
      {
        source: '/blog/bachelorthesis',
        destination: '/en/blog/bachelorthesis'
      },
      {
        source: '/blog/installing-pihole-upbound',
        destination: '/en/blog/installing-pihole-upbound'
      }
    ];
  }
});
