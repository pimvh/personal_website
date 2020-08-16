import Markdown from 'react-markdown';
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ PostData }) {
    return (<>
            <Markdown source = {`# ${PostData.title} from ${PostData.date} `} />

            <Markdown source= {PostData.PostContent}/>

            <a href='/blog'> Terug naar alle posts </a>

            </>
    )
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async({ params }) => {
    const PostData = await getPostData(params.id)

    return {
      props: {
        PostData
      }
    }
}
