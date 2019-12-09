import Main from '../components/Main'
import Markdown from 'react-markdown';
import {
    Container, Row, Col,
    Card, CardTitle, CardBody, CardText
} from 'reactstrap';

export default () => (
    <Main title='Over mij'>

        <div>
        <Card className="aboutme_card">
        <CardBody>
        <CardText>
        <Markdown
          source={`
Deze website is van mij, Pim van Helvoirt, een student Beta-gamma met Kunstmatige Intelligentie aan de Universiteit van Amsterdam.

Je vindt [mijn contactpagina hier](/contact)! Stuur me gerust een e-mail!!

`} />
        </CardText>
        </CardBody>
        </Card>


        </div>
    </Main>

 )
