import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'
import {
Container, Row, Col,
Card, CardBody, CardTitle, CardText} from 'reactstrap'

export default () => (
    <Layout title='About'>

    <Container fluid className='main'>

        <Col><Row className='row'>
        <Card className="aboutme_card">
        <CardBody>
        <CardText>
        <Markdown
          source={`
Hier komt nog een blog. Wacht rustig af! Ik ben er mee bezig...
`} />
        </CardText>
        </CardBody>
        </Card>

        </Row></Col>

        </Container>
    </Layout>

);
