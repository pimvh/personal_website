import Markdown from 'react-markdown';
import Head from 'next/head';
import Layout from '../components/layout';

import useTranslation from 'next-translate/useTranslation';

export default function Error404() {

    const { t, lang } = useTranslation()

    return (
        <>
        <Head>
            <title> Error! </title>
        </Head>

        <Layout>
            <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              children={t('error:404')} />
            </div>
            </div>
        </Layout>
        </>
    );
}
