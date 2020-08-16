import Markdown from 'react-markdown';
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ PostData }) {

    const { locale, translate } = useTranslation();

    return (<>
            <Markdown source = {`# ${PostData.title} from ${PostData.date} `} />

            <Markdown source= {PostData.PostContent}/>

            <a href='/blog'> Terug naar alle posts </a>

            </>
    )
}

export const getStaticPaths = async ({ context }) => {

    console.log(context.query.lang)

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
