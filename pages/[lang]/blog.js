import Markdown from 'react-markdown'
import { useRouter } from 'next/router'
import { getSortedPostsData, getAllPostIds } from '../../lib/posts'
import useTranslation from '../../hooks/useTranslation'
import Link from 'next/link'

function Blog ({ allPostsData }) {

    const { translate, locale } = useTranslation();

    return (
        <>
        <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              source={translate('blog')['topmessage']} />
              <ul>
              {allPostsData.map(({ id, date, title }) => (
                  <li key={id}>
                  <Link href={`/blog/${id}`} >
                     <a> {date} - {title} </a>
                  </Link>
                  </li>))}
              </ul>
            </div>
        </div>
        </>
    );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  console.log(allPostsData)

  return {
    props: {
      allPostsData
    }
  }
}

export const getStaticPaths = async (context) => {

    const paths = getAllPostIds('en')
    return {
        paths,
        fallback: false,
    }
}

export default Blog
