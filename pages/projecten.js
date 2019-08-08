import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown';
import {
    Container, Row, Col,
    UncontrolledCollapse,
    Card, Button, CardBody, CardTitle, CardText} from 'reactstrap'

export default () => (
    <Layout title='Projecten'>

    <Container fluid className='main'>
    <Col><Row className='row'>
    <div>
    Onderstaand zijn verschillende projecten die ik tot nu toe gecodeerd heb te vinden.
    </div>
    </Row></Col>

    <Col>
    <Row className='row'>
        <div>
        <Button color="primary" id="toggler_next" style={{ marginBottom: '1rem' }}>
        Een website op basis van Next.js
        </Button>
        <UncontrolledCollapse toggler="#toggler_next">
        <Card>
          <CardBody>
          <Markdown
            source={`
Met behulp van [Next.js][1] heb ik deze website gemaakt. Deze website is geschreven in JavaScript met behulp van [react][2] en [Reactstrap (Bootstrap voor React)][3].
[1]: <https://nextjs.org/> "Next.js"
[2]: <https://reactjs.org/> "React.js"
[3]: <https://reactstrap.github.io/> "Reactstrap"

`} />
          </CardBody>
        </Card>
        </UncontrolledCollapse>
        </div>

    </Row>
    </Col>

    <Col>
    <Row className='row'>
        <div>
        <Button color="primary" id="toggler_telgrm" style={{ marginBottom: '1rem' }}>
         <a href="https://t.me/Rob_Ot_bot">Rob Ot,</a> de Telegram-bot
        </Button>
        <UncontrolledCollapse toggler="#toggler_telgrm">
        <Card>
          <CardBody>
          <Markdown
            source={`
Op Telegram heb ik een bot gemaakt, met behulp van de [Python-telegram-bot wrapper][1]. Op het moment kan deze o.a. het weer opzoeken. De code is [open-source beschikbaar][2]. De bot is bereikbaar op [@Rob_Ot][3].

[1]: <https://python-telegram-bot.org/> "Python Telegram Wrapper"
[2]: <https://github.com/pimvh/telegrambot_simple> "Simple Telegram Bot"
[3]: <https://t.me/Rob_Ot_bot> "@Rob_Ot_bot"

`} />
          </CardBody>
        </Card>
        </UncontrolledCollapse>
        </div>

    </Row>
    </Col>

    </Container>
    </Layout>

 )
