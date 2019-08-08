import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown';
import {
    Container, Row, Col } from 'reactstrap';

export default () => (
    <Layout title='About'>

    <Container fluid className='main'>

        <Col>
        <Row className='row'>
        <div>

        <Markdown
          source={`
Ik ben Pim van Helvoirt, een student Beta-gamma met Kunstmatige Intelligentie aan de Universiteit van Amsterdam.
Je vindt [mijn contactpagina hier](/contact)!

       `} />

        </div>
    </Row>
    </Col>

    </Container>
    </Layout>

 )
