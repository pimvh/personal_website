import Main from '../components/Main'
import Markdown from 'react-markdown'
import { getSortedPostsData } from '../lib/posts'

export default function Blog ( { allPostsData }) {
    return (<Main title='Blog'>
        <div className = "flex-grid">
            <div className = "col-12 padding-xl">
            <Markdown
              source={`Hieronder is een overzicht te vinden van al mijn posts tot nu toe. Er volgen er meer!
            `} />
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
