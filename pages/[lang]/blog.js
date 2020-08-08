import Main from '../../components/main'
import Markdown from 'react-markdown'
import WithLocale from '../../components/withLocale'
import useTranslation from '../../hooks/useTranslation'

import { getSortedPostsData } from '../../lib/posts'

export default function Blog ( { allPostsData }) {

    async function getStaticProps() {
      const allPostsData = getSortedPostsData()
      return {
        props: {
          allPostsData
        }
      }
    }

    const { translate, locale } = useTranslation();

    return (<Main title='Blog'>
        <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              source={translate('blog')['topmessage']} />
            <ul>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                <a href={"blog/" + id}> {date} - {title} </a>

                </li>))}
            </ul>
            </div>
            </div>
        </Main>
    );
}
