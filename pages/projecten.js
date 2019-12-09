import Main from '../components/Main'
import Markdown from 'react-markdown';
import * as _ from "lodash";
import {
    Container, Row, Col,
    UncontrolledCollapse,
    Card, CardImg, Button, CardBody, CardTitle, CardText} from 'reactstrap'

export default () => (
    <Main title='Projecten'>

    <Container fluid className = 'project_container'>
    <Row>
    <Col className = 'upper_page_text'>
    <Card className="general_card">
    <CardBody>
    <CardText>
    <Markdown
      source={`Hieronder is een lijst van verschillende projecten die ik tot nu toe gecodeerd heb te vinden. Klik op een van de buttons om een project te openen.
`} />
    </CardText>
    </CardBody>
    </Card>

    </Col>
    </Row>

    {getProjects().map(project => (
        <Project key={project.id} project={project} />
    ))}
    </Container>
    </Main>
);

function getProjects() {
   var arr = [
        {id: '1', button_id: "toggler_next", title: "Een website op basis van Next.js", img_link: "static/nextjs.png", img_alt: "Next.js",
        content: `Met behulp van [Next.js][1], een react.js framework, heb ik deze website gemaakt. Deze website is geschreven in JavaScript met behulp van [React][2] en [Reactstrap (Bootstrap voor React)][3].
[1]: <https://nextjs.org/> "Next.js"
[2]: <https://reactjs.org/> "React.js"
[3]: <https://reactstrap.github.io/> "Reactstrap"`},

        {id: '2', button_id: "toggler_telgrm", title: "Een Telegram-bot in Python genaamd Rob Ot", img_link: "static/pythontelegrambot.png", img_alt: "Python Telegram wrapper",
        content: `Op Telegram heb ik een bot gemaakt, met behulp van de [Python-telegram-bot wrapper][1]. Op het moment kan deze ondere andere het weer opzoeken. De bot is bereikbaar met Telegram op [@Rob_Ot][3]. Verder is de code [beschikbaar via Github][2].
[1]: <https://python-telegram-bot.org/> "Python Telegram Wrapper"
[2]: <https://github.com/pimvh/telegrambot_simple> "Simple Telegram Bot"
[3]: <https://t.me/Rob_Ot_bot> "@Rob_Ot_bot"`}
];

   const sorted = _.sortBy(arr, 'title');

   return sorted;
};

const Project = ({ project }) => (


    <Row>
    <Col>
    <Button color="primary" id={project.button_id} className="project_button" >
    {project.title}
    </Button>
    <UncontrolledCollapse toggler={"#".concat(project.button_id)}>
    <Card className="project_card">
    <CardBody>
    <CardImg src = {project.img_link} alt = {project.img_alt} className="project_img" />
    <CardTitle className="cardtitle"> {project.title}</CardTitle>
    <CardText className="Project_Text">
    <Markdown source={project.content} />
    </CardText>
    </CardBody>
    </Card>
    </UncontrolledCollapse>
    </Col>
    </Row>
);

// TODO: marge fixen.
