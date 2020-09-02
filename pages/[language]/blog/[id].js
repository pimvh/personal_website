import Markdown from 'react-markdown';
import { getAllPostIds, getPostData } from '../../../lib/posts'
import useTranslation from '../../../hooks/useTranslation'

export default function Post({ PostData }) {

    const { locale, translate } = useTranslation();

    return (<>
            <Markdown source = {`# ${PostData.title} from ${PostData.date} `} />

            <Markdown source= {PostData.PostContent}/>

            <a href='/blog'> Terug naar alle posts </a>

            </>
    )
}

export async function getStaticPaths() {

    const lang = 'en'

    const paths = getAllPostIds(lang)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {

    console.log(params)
    console.log(params.id)

    const PostData = await getPostData(params.id)

    return {
      props: {
        PostData
      }
    }
}
