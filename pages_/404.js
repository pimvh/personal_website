import Markdown from 'react-markdown';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Error404() {

    return (
        <>
        <Head>
            <title> Error! </title>
        </Head>

        <Layout>
            <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              source={`ERROR 404: The page you tried to access, does not exist. Go [back to the homepage](/).`} />
            </div>
            </div>
        </Layout>
        </>
    );
}
