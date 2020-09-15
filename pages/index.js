import React from 'react';

import Head from 'next/head';
import Router from 'next/router';

import { GetServerSideProps } from 'next';
import i18nConfig from '../i18n.config';
import { GetI18nProps, getI18nCookieFromUnparsedCookieHeader } from '../lib/i18n';

const { defaultLanguage } = i18nConfig;

function Refer ({ language }) {

    React.useEffect(() => {
        Router.replace(`/${language}`);
    }, []);

    return (
        <Head>
            <meta name="robots" content="noindex, nofollow" />
        </Head>
    );
};

export async function getServerSideProps({ req, res }){
    const preferredLanguage = getI18nCookieFromUnparsedCookieHeader(req.headers.cookie || '');

    const acceptLanguageHeader = req.headers['accept-language'] | undefined || req.headers['Accept-Language'] | undefined;

    const acceptLanguageSub = acceptLanguageHeader ? acceptLanguageHeader.substring(0, 2) : undefined;

    const acceptLanguage = acceptLanguageSub === 'en' ? acceptLanguageSub : 'nl';

    // 1st priority: language in cookie
    // 2nd priority: accept-language header
    // 3rd priority: default language
    const finalLanguage = preferredLanguage || acceptLanguage || defaultLanguage.prefix;

    // https://github.com/vercel/next.js/discussions/14547#discussion-7687
    // https://github.com/vercel/next.js/discussions/14890
    // https://github.com/vercel/next.js/discussions/11281
    if (typeof window === 'undefined') {
        res.statusCode = 302;
        res.setHeader('Location', `/${finalLanguage}`);
        res.end();
    }

    return {
        props: {
          language: finalLanguage,
          translations: {},
        },
    };
};

export default Refer;
