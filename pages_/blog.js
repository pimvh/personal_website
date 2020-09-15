import Markdown from 'react-markdown';
import { useRouter } from 'next/router';
import { getSortedPostsData, getAllPostIds } from '../lib/posts';

import Layout from '../components/layout';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';

function Blog ({ allPostsData }) {

    const { t, lang } = useTranslation();

    return (
        <>
        <Layout>
        <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              source={t("blog:topmessage")} />
              <ul>

              {allPostsData.filter(post => post.postlang == lang)
                           .map(({id, date, postlang, title }) => (
                  <li key={id}>
                      <Link href={`blog/${id}`} >
                         <a> {date} - {title} </a>
                      </Link>
                  </li>
              ))}
              </ul>
            </div>
        </div>
        </Layout>
        </>
    );
}

export async function getStaticPaths() {

    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    const allPostsData = getSortedPostsData();

    return {
        props: { allPostsData },
    }
};


export default Blog
