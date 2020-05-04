import Main from '../components/Main'
import Markdown from 'react-markdown'

export default function Overmij () {
    return (
    <Main title='Projecten'>
        <div className = 'project_container'>
        <Markdown
          source={`Ik ben Pim van Helvoirt. Op het moment studeer ik nog Kunstmatige Intelligentie aan de Universiteit van Amsterdam, maar daar ben ik bijna mee klaar.
              `} />
        </div>
    </Main>
);}
