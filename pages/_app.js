import '../styles/styles.scss';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Main from '../components/main.js';
import i18nConfig from '../i18n.config';
import { changeDocumentLanguage, setI18nCookie } from '../lib/i18n';

const { allLanguages, defaultLanguage } = i18nConfig;

const TranslationsNeeded = '/pages/_app';

// This default export is required in a new `pages/_app.js` file.
class MyApp extends App {
    componentDidMount() {
        const { pageProps, } = this.props;

        const { language } = pageProps;
        const languageObject = allLanguages[language];

        if (languageObject) {
          // 1. Change the language again in case it was a client-side
          // transition (_document.js only runs on the server)
          changeDocumentLanguage(languageObject.prefix);

          // 2. Update the "preferred-language" cookie
          setI18nCookie(languageObject.prefix);
        }
  }

    render() {
        const { Component, pageProps } = this.props;

        const { language } = pageProps;

        console.log(pageProps)
        console.log(pageProps.translations)

        const translations = pageProps.translations[TranslationsNeeded];
        const languageObject = allLanguages[language] || defaultLanguage;

        return (
            <>
            <Head>
                <meta name="title" content={translations.title} />
            </Head>
            {/*
                Here you can add a custom manifest for your language e.g.
                <link rel="manifest" href={`/${translations.manifest}.json`} />
                `translations.manfifest` being the path to the particular manifest. e.g. manifest_ar

                You can also add custom keyword tags, description, etc.
            */}
            <Main>
                <Component {...pageProps} />
            </Main>

            </>
        )
    }
}

// MyApp.getInitialProps = async (appContext) => {
//     const appProps = await App.getInitialProps(appContext);
//
//     return { ...appProps }
// };

export default MyApp
