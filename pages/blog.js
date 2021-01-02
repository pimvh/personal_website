import Markdown from 'react-markdown';

import Header from '../components/header';
import Layout from '../components/layout';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';

function Blog ({ allPostsData }) {

    const { t, lang } = useTranslation();

    const PostLinks = allPostsData.filter(post => post.postlang == lang)
                 .map(({id, date, title }) => (
        <li key={id} >
        <Link href={`blog/${id}`}>
            <a> {date} - {title} </a>
        </Link>
        </li>
    ));

    return (
        <>

        <Header title={t('blog:title')} description={t('blog:description')} />

        <Layout>
        <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              source={t("blog:topmessage")} />
              <ul>
                {PostLinks}
              </ul>
            </div>
        </div>
        </Layout>
        </>
    );
}

export async function getStaticProps({ params }) {

    const allPostsData = getSortedPostsData();

    return {
        props: { allPostsData },
    }
};


export default Blog
