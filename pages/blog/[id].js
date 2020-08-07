import Main from '../../components/Main'
import Markdown from 'react-markdown';
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ PostData }) {
    return (<Main title='Blog'>
            <Markdown source = {`# ${PostData.title}
from ${PostData.date} `} />

            <Markdown source= {PostData.PostContent}/>

            <a href='/blog'> Terug naar alle posts </a>
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
