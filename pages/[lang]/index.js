import React from 'react'
import Markdown from 'react-markdown'
// import { getSortedPostsData } from '../../lib/posts'
import useTranslation from '../../hooks/useTranslation'
import Head from 'next/head'

function Index () {

    const { locale, translate } = useTranslation();

    console.log('In index', locale);

    return (
        <>
        <Head>
            <title> Pim van Helvoirt - Home </title>
        </Head>

        <div className = "flex-grid">
            <div className="col-4">
                <img src="/static/me.jpg" alt="Pim met plant" className='picture' />
            </div>
            <div className="col-6">

            <Markdown source={translate('index')['topmessage']} />

            <Markdown source={translate('index')['botmessage']} />
            </div>
        </div>
        </>
    );
}

// <ul>
// {allPostsData.map(({ id, date, title }) => (
//     <li key={id}>
//     <a href={`${locale}/blog/` + id}> {date} - {title} </a>
//
//     </li>))}
// </ul>

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// };

export default Index
