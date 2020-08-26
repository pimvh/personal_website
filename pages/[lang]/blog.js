import Markdown from 'react-markdown'
import { useRouter } from 'next/router'
import { getSortedPostsData, getAllPostIds } from '../../lib/posts'
import useTranslation from '../../hooks/useTranslation'
import Link from 'next/link'

function Blog ({ allPostsData }) {

    const { locale, translate } = useTranslation();

    return (
        <>
        <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              source={translate('blog')['topmessage']} />
              <ul>

              {allPostsData.map(({locale, id, date, title }) => (

                  <li key={id} >
                  <Link href={`/[lang]/blog/${id}`} as={`/en/blog/${id}`} >
                     <a> {date} - {title} </a>
                  </Link>
                  </li>))}
              </ul>
            </div>
        </div>
        </>
    );
}

export async function getStaticPaths() {

    const lang = 'en';

    const paths = getAllPostIds(lang)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
};


export default Blog
