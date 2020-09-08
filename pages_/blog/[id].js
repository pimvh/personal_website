import Markdown from 'react-markdown';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';

function Post({ PostData }) {

    const { t, lang } = useTranslation();

    return (
        <>
        <Layout>
        <Head>
            <title> {t("blog:title")} </title>
        </Head>

        <Markdown source = {`# ${PostData.title} from ${PostData.date} `} />

        <Markdown source= {PostData.PostContent}/>

        <Link href="/blog" >
            {t("blog:back")}
        </Link>
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

    const PostData = await getPostData(params?.id)

    return {
      props: {
        PostData
      }
    }
}

export default Post
