import '../styles/styles.scss';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import Router from 'next/router';

import HeadCarousel from '../components/carousel';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
});

Router.events.on('routeChangeComplete', () => {
    console.log('done!')
});

Router.events.on('routeChangeError', () => {
    console.log('done!')
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

            </Head>

            <Component {...pageProps} />

            </>
        );
    }
}

export default MyApp
