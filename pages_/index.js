import React from 'react';
import Markdown from 'react-markdown';
import Head from 'next/head';
import Layout from '../components/layout';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';

import { getSortedPostsData, getAllPostIds } from '../lib/posts';

function Index ({ allPostsData }) {

    const { t, lang } = useTranslation();

    return (
        <>
        <Head>
            <meta name="title" content={t('index:title')} />
            <title> {t('index:title')} </title>
            <link rel="alternate" href={"fill in "} hrefLang="x-default" />
        </Head>

        <Layout >

        <div className = "flex-grid">

            <div className="col-4">
                <img src="/static/me.jpg" alt="Pim met plant" className='picture' />
            </div>
            <div className="col-6">
            <Markdown
              source={t("index:topcontent")} />

            <ul>
            {allPostsData.filter(post => post.postlang == lang)
                         .map(({ id, date, title }) => (
                <>
                <li key={id} >
                <Link href={`blog/${id}`}>
                    <a> {date} - {title} </a>
                </Link>
                </li>
                </>
            ))}
            </ul>

            <Markdown
              source={t("index:botcontent")} />

            </div>
        </div>

        </Layout>
        </>
    );
}

export async function getStaticPaths() {

    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

  const allPostsData = getSortedPostsData()

  return {
      props: { allPostsData },
  }
};

export default Index;

/*

<Markdown source={translate('index')['topmessage']} />

<Markdown source={translate('index')['botmessage']} />
*/
