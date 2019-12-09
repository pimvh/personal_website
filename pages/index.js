import Main from '../components/Main'
import React from 'react'
import Markdown from 'react-markdown';
import {
    Tooltip,
    Container, Row, Col,
    Card, CardTitle, CardBody, CardText} from 'reactstrap';

export default () => (
        <Main title = 'Home'>
        <Row>
        <Col>
            <Card className="general_card">
            <CardBody><CardText>
            <Markdown
              source={`
Dit is mijn persoonlijke website. Op deze website vind je mijn [programmeerprojecten][1], [resources][2] en [mijn blog][3] _(in aanbouw)_, die ik over de tijd heb verzameld.
[1]: </projecten> "Projecten"
[2]: </resources> "Resources"
[3]: </blog> "Blog"
`} />
           </CardText></CardBody>
           </Card>     
         </Col>
         </Row>
        {/*
        <div>
            <p>The standard Lorem Ipsum passage, used since the 1500 s</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
        </div>
        */}

        </Main>
)
