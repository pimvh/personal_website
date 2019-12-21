import Main from '../components/Main'
import Markdown from 'react-markdown'

export default () => (
    <Main title='Blog'>
    <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <Markdown
          source={`Hier komt nog een blog. Wacht rustig af! Ik ben er mee bezig...
        `} />
        </div>
        </div>
    </Main>

);
