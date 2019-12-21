import Main from '../components/Main'
import Markdown from 'react-markdown';

export default () => (
    <Main title='Over mij'>
    <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <Markdown
          source={`
Deze website is van mij, Pim van Helvoirt, een Bachelorstudent Beta-gamma met Kunstmatige Intelligentie aan de Universiteit van Amsterdam.
`} />
        </div>
        </div>
    </Main>

 )
