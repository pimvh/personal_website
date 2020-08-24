import Markdown from 'react-markdown';
import Main from '../components/main'

export default () => (

    <Main title='Error'>
    <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <Markdown
          source={`
Fout. De pagina waar je op gezocht heb bestaat niet. Ga [terug naar de homepage](/).
`} />
        </div>
        </div>
    </Main>
);
