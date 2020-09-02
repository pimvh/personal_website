import React from 'react';
import { NextPage } from 'next';
import NextLink, { LinkProps } from 'next/link';
// import useSWR from 'swr';
import Head from 'next/head';
import config from '../i18n.config';

const { allLanguages, defaultLanguage, domains } = config;

const I18nContext = React.createContext({
  language: defaultLanguage.prefix,
  translations: {},
  config: defaultLanguage,
});

export const useI18n = (path) => {

  const { language, translations } = React.useContext(I18nContext);

  return {
    language,
    translations: translations[path],
    config: allLanguages[language],
  };
};

const HrefAlternateHeadTags = ({ pathname }) => {
  const currentDomain = process.env.NODE_ENV === 'production' ? domains.production : domains.development;

  return (
    <Head>
      {
        Object.keys(allLanguages).map(
          (language) => (
            <link
              key={allLanguages[language].prefix}
              rel="alternate"
              href={`${currentDomain}/${allLanguages[language].prefix}${pathname}`}
              hrefLang={allLanguages[language].prefix}
            />
          ),
        )
      }
    </Head>
  );
};

/*
  pageRoute is used to add the href alternate head tags link. Optional
*/
export const withI18n = (Page, pageRoute) => {
  const WithI18nProvider = ({ language, translations, ...props },) => (
    <I18nContext.Provider value={{
      language,
      translations,
      config: allLanguages[language],
    }}
    >
      {
        typeof pageRoute === 'undefined' ? null : (
          <HrefAlternateHeadTags pathname={pageRoute} />
        )
      }
      {/* */}
      <Page {...props} />
    </I18nContext.Provider>
  );

  return WithI18nProvider;
};

export function getI18nStaticPaths() {
  return Object.keys(allLanguages).map(
    (language) => ({ params: { language: allLanguages[language].prefix } }),
  );
}

export const getI18nProps = async ({
  language,
  paths = [],
  translationsDir = 'public/static/translations',
}) => {
  // Always load the app's translations
  // This requires that all pages use this function
  const translations = {};
  paths.push('/pages/_app');
  const unqiquePaths = [...Array.from(new Set(paths))];
  await Promise.all(
    unqiquePaths.map(async (path) => {
      const module = await import(`../${translationsDir}${path}/${language}.json`);
      translations[path] = module.default;
    }),
  );

  return ({
    language: language || defaultLanguage.prefix,
    translations,
  });
};

/*
only works in the browser or if you pass it a pathname
*/
export const getLanguageFromURL = (pathname) => {
  let finalPathname;
  if (typeof window !== 'undefined') {
    finalPathname = pathname || window.location.pathname;
  } else if (pathname) {
    finalPathname = pathname;
  } else {
    return undefined;
  }
  const language = finalPathname.split('/')[1];
  const isValidLanguage = (Object.keys(allLanguages)).some(
    (validLanugage) => validLanugage === language,
  );
  if (isValidLanguage) {
    return language;
  } else {
    return undefined;
  }
};

/*
only works in the browser or if you pass it a pathname
*/
export const getI18nAgnosticPathname = () => {
  let finalPathname;
  if (pathname === '') {
    return '';
  } else if (typeof window !== 'undefined') {
    finalPathname = pathname || window.location.pathname;
  } else if (!pathname) {
    return undefined;
  } else {
    finalPathname = pathname;
  }

  const paths = finalPathname.split('/');
  const mightBePrefix = paths[1];

  const allPrefixes = Object.values(allLanguages).map((lang) => lang.prefix);
  allPrefixes.push('[language]');

  const isPrefix = allPrefixes.some((prefix) => prefix === mightBePrefix);

  if (isPrefix) {
    paths.splice(1, 1);
  }

  return paths.join('/');
};

export const changeDocumentLanguage = (language) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    var elem = window.document.querySelector('html');

    /* EDIT */
    //window.document.querySelector('html')!.lang = language;

    if (elem) {
        elem.lang = language;
    }
  }
};

export const setI18nCookie = (language) => {
  document.cookie = 'preferred-language=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  const now = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 1); // 1 year
  const date = now.toUTCString();
  document.cookie = `Set-Cookie: preferred-language=${language}; expires=${date};`;
};

// https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
// https://stackoverflow.com/questions/3393854/get-and-set-a-single-cookie-with-node-js-http-server
// https://stackoverflow.com/questions/51812422/node-js-how-can-i-get-cookie-value-by-cookie-name-from-request
// Consider using https://github.com/jshttp/cookie?
export const getI18nCookieFromUnparsedCookieHeader = (cookieHeader) => {
  const parsedCookie = {};

  cookieHeader && cookieHeader.split(';').forEach((cookie) => {
    const parts = cookie.split('=');
    if (parts.length) {
      parsedCookie[(parts.shift()).trim()] = decodeURI(parts.join('='));
    }
  });

  return parsedCookie['preferred-language'];
};

export const Link = ({ children, href, as, language, ...props }) => {
  const { contextLanguage } = React.useContext(I18nContext);
  const finalLanguage = language || contextLanguage;
  const finalHref = getI18nAgnosticPathname(href) || '';
  return (
    <NextLink
      href={`/[language]${finalHref}`}
      as={`/${finalLanguage}${as || finalHref}`}
      {...props}
    >
      {children}
    </NextLink>
  );
};
