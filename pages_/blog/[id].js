import Markdown from 'react-markdown';

import Header from '../../components/header';
import Layout from '../../components/layout';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { getAllPostIds, getPostData } from '../../lib/posts';

function Post({ PostData }) {

    const { t, lang } = useTranslation();

    function calcReadingTime(time) {
        return Math.round(time / 250);
    }

    return (
        <>

        <Header title={PostData.title} description={PostData.description}
                imageUrl={PostData.image} imageAlt={PostData.imagealt}/>

        <Layout>

        <Markdown source={`# ${PostData.title}`}/>
        <Markdown source={`\n###### ${t("blog:from")} ${PostData.date} --- ${t("blog:readingtime", {time: calcReadingTime(PostData.wordcount)})}`} />
        <Markdown source={PostData.PostContent} />

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
