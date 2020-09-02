import React from 'react'
import Markdown from 'react-markdown'
import Head from 'next/head'

import {
  getI18nStaticPaths,
  withI18n,
  getI18nProps,
  useI18n,
} from '../../lib/i18n';

import i18nConfig from '../../i18n.config';

const TranslationsNeeded = '/pages/[language]/index';

const { domains } = i18nConfig;

function Index () {

    const { translations } = useI18n(TranslationsNeeded);

    return (
        <>
        <Head>
            <meta name="title" content={translations.title} />
            <title> content={translations.title} </title>
            <link rel="alternate" href={process.env.NODE_ENV === 'production' ? domains.production : domains.development} hrefLang="x-default" />
        </Head>

        <div className = "flex-grid">
            <div className="col-4">
                <img src="/static/me.jpg" alt="Pim met plant" className='picture' />
            </div>
            <div className="col-6">
                main text
            </div>
        </div>
        </>
    );
}

export const getStaticPaths = async () => ({
  paths: [
    ...getI18nStaticPaths(),
  ],
  fallback: false,
});

export const getStaticProps = async ({ params }) => ({
  props: {
    ...await getI18nProps({
      language: params?.language,
      paths: [
        TranslationsNeeded,
      ],
    }),
  },
});

export default withI18n(Index, '');

/*
<Markdown source={translate('index')['topmessage']} />

<Markdown source={translate('index')['botmessage']} />
*/
