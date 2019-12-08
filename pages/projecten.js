import Main from '../components/Main'
import Markdown from 'react-markdown';
import {
    Container, Row, Col,
    UncontrolledCollapse,
    Card, CardImg, Button, CardBody, CardTitle, CardText} from 'reactstrap'

export default () => (
    <Main title='Projecten'>

    <Container fluid className='main'>
    <Col><Row className='row'>
    <div>
    <Markdown
      source={`
Hieronder is een lijst van verschillende projecten die ik tot nu toe gecodeerd heb te vinden. Klik op een van de buttons om een project te openen.
`} />

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
          <CardImg src="static/nextjs.png" alt="Next.js" className="ProjImg"/>
          <CardBody>
          <Markdown
            source={`
Met behulp van [Next.js][1], een react.js framework, heb ik deze website gemaakt. Deze website is geschreven in JavaScript met behulp van [React][2] en [Reactstrap (Bootstrap voor React)][3].
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
         Een Telegram-bot in Python genaamd Rob Ot
        </Button>
        <UncontrolledCollapse toggler="#toggler_telgrm">
        <Card>
          <CardImg src="static/pythontelegrambot.png" alt="Python Telegram wrapper" className="ProjImg"/>
          <CardBody>
          <Markdown
            source={`
Op Telegram heb ik een bot gemaakt, met behulp van de [Python-telegram-bot wrapper][1]. Op het moment kan deze ondere andere het weer opzoeken. De bot is bereikbaar met Telegram op [@Rob_Ot][3]. Verder is de code [beschikbaar via Github][2].
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
    </Main>

 )
