/* Locale switching is based on/copied from work of
- https://github.com/omarryhan/nextjs-i18n-example
- Vinissimus in [next-translate](https://github.com/vinissimus/next-translate)
- Janus Reith in [i18n example](https://codesandbox.io/s/nextjs-i18n-staticprops-new-ouyrb)
- Filip Wojciechowski in [simple-i18n-example](https://github.com/fwojciec/simple-i18n-example)
 */

const allLanguages = {
    en: {
        name: 'English',
        prefix: 'en',
    },
    nl: {
        name: 'Nederlands',
        prefix: 'nl',
    },
};

const defaultLanguage = allLanguages.en;

const domains = {
  development: 'http://localhost:3000',
  production: 'https://www.pimvanhelvoirt.nl',
};

export default {
  allLanguages,
  defaultLanguage,
  domains,
};
