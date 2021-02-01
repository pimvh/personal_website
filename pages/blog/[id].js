import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import Header from '../../components/header';
import Layout from '../../components/layout';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAllPostIds, getPostData } from '../../lib/posts';

function Post({ PostData }) {

    const renderers = {
      code: ({language, value}) => {
        return <SyntaxHighlighter language={language} children={value} />
      }
    }

    const { t, lang } = useTranslation();

    function calcReadingTime(time) {
        return Math.round(time / 250);
    }

    return (
        <>

        <Header title={PostData.title} description={PostData.description}
                imageUrl={PostData.previewimage} imageAlt={PostData.previewimagealt}/>

        <Layout>

        <ReactMarkdown children={`# ${PostData.title}`} />
        <ReactMarkdown children={`\n###### ${t("blog:from")} ${PostData.date} --- ${t("blog:readingtime", {time: calcReadingTime(PostData.wordcount)})}`} />

        <Link href="/blog" >
            {t("blog:back")}
        </Link> <br />

        <ReactMarkdown renderers={renderers} children={PostData.PostContent} />

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
