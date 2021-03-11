import Markdown from 'react-markdown';

import Header from '../components/header';
import Layout from '../components/layout';


import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';

import { getSortedPostsData } from '../lib/posts';

function Index ({ allPostsData }) {

    const { t, lang } = useTranslation();

    //.filter(post => post.postlang == lang)

    const PostLinks = allPostsData.filter(post => post.postlang == lang)
                 .map(({id, postlang, date, title }) => (
        <tr key={id} >
          <td> {date} </td>
          <td>
          <Link href={`/blog/${id}`}>
              <a> {title} </a>
          </Link>
          </td>
        </tr>

    ));

    return (
        <>
        <Header title={t('index:title')} description={t('index:description')} />

        <Layout>

        <div className = "flex-grid">

        <div className="col-3">
            <Image src="/static/me.jpg" alt="Pim met plant" width='300px' height='400px' className='picture' />
        </div>

          <div className="col-6">
          <Markdown
            source={t("index:topcontent")} />

          <table className="tbl row-hover">
          <tbody>
            {PostLinks}
          </tbody>
          </table>

          <Markdown
            source={t("index:botcontent")} />
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
