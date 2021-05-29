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

    const router = useRouter();

    if (!router.isFallback && !PostData) {

      return <ErrorPage statusCode={404} />
    }

    // const renderers = {
    //   code: ({language, value}) => <SyntaxHighlighter language={language} children={value} />
    // }

    const { t, lang } = useTranslation();

    function calcReadingTime(time) {
        return Math.round(time / 250);
    }

    //const PostData = props.PostData;

    return (
        <>

        <Layout>
        {/* If the page is not yet generated, this will be displayed /* }
        {/* // initially until getStaticProps() finishes running */ }

        {router.isFallback ? (
          <ReactMarkdown children={`# Loading...`} />
        ) : (

        <>
        <Header title={PostData.title} description={PostData.description}
                imageUrl={PostData.previewimage} imageAlt={PostData.previewimagealt}/>

        <ReactMarkdown children={`# ${PostData.title}`} />
        <ReactMarkdown children={`\n###### ${t("blog:from")} ${PostData.date} --- ${t("blog:readingtime", {time: calcReadingTime(PostData.wordcount)})}`} />

        <Link href="/blog" >
            {t("blog:back")}
        </Link> <br />

        <ReactMarkdown children={PostData.PostContent} />
        </>

        )}

        <Link href="/blog" >
            {t("blog:back")}
        </Link>
        </Layout>
        </>
    );
}

export async function getStaticPaths () {

    const paths = getAllPostIds();

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {

    const PostData = await getPostData(context.params?.id, context.locale)

    if (!PostData) {
      return {
        notFound: true,
        }
    }

    // if (!PostData) {
    //  return {
    //    redirect: {
    //      destination: '/',
    //      permanent: false,
    //    },
    //  }
    // }

    return {
      props: {
        PostData
      }
    }
}

export default Post
