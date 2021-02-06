import '../styles/styles.scss';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import Router from 'next/router';

import Layout from '../components/layout';

Router.events.on('routeChangeStart', (url) => {
    return (
        <Layout>
            <i class="loading-v2"></i> Loading
        </Layout>
    );
});

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

// This default export is required in a new `pages/_app.js` file.
class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;

        return (

            <>
            <Head>
                <meta name="title" />
                <title> Pim van Helvoirt </title>
                <meta charSet="UTF-8" />
                <meta name="author" content="Pim van Helvoirt" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                {/* Creating Favicons */}
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="theme-color" content="#ffffff" />

                <link rel="alternate" href="https://pimvanhelvoirt.nl/nl/" hrefLang="x-default" />
            </Head>

            <Component {...pageProps} />

            </>
        );
    }
}

export default MyApp
