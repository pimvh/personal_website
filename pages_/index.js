import Markdown from 'react-markdown';

import Header from '../components/header';
import Layout from '../components/layout';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';

function Index ({ allPostsData }) {

    const { t, lang } = useTranslation();

    return (
        <>
        <Header title={t('index:title')} description={t('index:description')} />

        <Layout>

        <div className = "flex-grid">

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

            <div className="col-5">
                <img src="/static/me.jpg" alt="Pim met plant" className='picture' />
            </div>

        </div>

        </Layout>
        </>
    );
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
