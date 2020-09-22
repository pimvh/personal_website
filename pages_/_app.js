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
                <meta name="description" content="Persoonlijke website van Pim van Helvoirt" />
                <meta name="author" content="Pim van Helvoirt" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="theme-color" content="#ffffff" />

                {/* Open Graph */}

                <meta property="og:title" content="pimvanhelvoirt.nl" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="welcome to my personal website" />
                <meta property="og:image" content="https://pimvanhelvoirt.nl/static/common/unicorn_icon.jpg" />
                <meta property="og:image:secure_url" content="https://pimvanhelvoirt.nl/static/common/unicorn_icon.jpg" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:alt" content="A lovely unicorn" />

            </Head>

            <Component {...pageProps} />

            </>
        );
    }
}

export default MyApp
