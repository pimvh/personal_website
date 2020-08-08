import Main from '../../../components/main'
import Markdown from 'react-markdown';
import { getAllPostIds, getPostData } from '../../../lib/posts'

export default function Post({ PostData, lang }) {
    return (<Main title='Blog'>
            <Markdown source = {`# ${PostData.title}
from ${PostData.date} `} />

            <Markdown source= {PostData.PostContent}/>

            <a href=`${lang}/blog`> Terug naar alle posts </a>
            </Main>
    )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const PostData = await getPostData(params.id)

  return {
    props: {
      PostData
    }
  }
}
