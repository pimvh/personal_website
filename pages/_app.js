import '../styles.scss'
import App from 'next/app'
import Main from '../components/main.js'

import { defaultLocale,  } from '../lib/translations/config';
import { LocaleProvider } from "../context/localeContext";

// This default export is required in a new `pages/_app.js` file.
class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;

        return (
            <LocaleProvider >
            <Main>
                <Component {...pageProps} />
            </Main>
            </LocaleProvider>
        )
    }
}

MyApp.getInitialProps = async (appContext) => {

    // retrieve initial props of the wrapped component
    const appProps = await App.getInitialProps(appContext);

    if (appContext.query) {
        if (typeof appContext.query.lang == 'string' && isLocale(appContext.query.lang)) {
            // the locale is valid
            console.log('setting something', appContext.query.lang)
            return { ...appProps, lang: appContext.query.lang }
        }

        console.log('error, not a string')
    }

    // in case the value of 'lang' is not a valid locale return it as undefined
    return { ...appProps, lang: defaultLocale }
}

export default MyApp
