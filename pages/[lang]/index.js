import Main from '../../components/main'
import React from 'react'
import Markdown from 'react-markdown'
// import { getSortedPostsData } from '../../lib/posts'
import WithLocale from '../../components/withLocale'
import useTranslation from '../../hooks/useTranslation'

function Index ({ allPostsData }) {

    const { translate, locale } = useTranslation();

    return (<Main title = 'Home'>
            <div className = "flex-grid">
                <div className="col-4">
                    <img src="/static/me.jpg" alt="Pim met plant" className='picture' />
                </div>
                <div className="col-6">

                <Markdown source={translate('index')['topmessage']} />

                {/* <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                    <a href={"blog/" + id}> {date} - {title} </a>

                    </li>))}
                </ul> */}

                <Markdown source={translate('index')['botmessage']} />
                </div>
            </div>
            </Main>
);}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// };

export default WithLocale(Index)
