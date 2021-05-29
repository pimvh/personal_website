// next.config.js

// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting

const nextTranslate = require("next-translate");

module.exports = nextTranslate({
    /* config options here */

    future: {
      webpack5: true,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
          require('./lib/generate-sitemap');
        }

        return config;
    },

});
