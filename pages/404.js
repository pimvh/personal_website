import Markdown from 'react-markdown';
import Main from '../components/main'

export default () => (

    <Main title='Error'>
    <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <Markdown
          source={`
ERROR 404: De pagina waar je op gezocht, bestaat niet. Ga [terug naar de homepage](/).
`} />
        </div>
        </div>
    </Main>
);
