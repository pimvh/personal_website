import Main from '../components/Main'
import React from 'react'
import Markdown from 'react-markdown';
import {
    Tooltip,
    Container, Row, Col,
    Card, CardTitle, CardBody, CardText} from 'reactstrap';

export default () => (
        <Main>
            <Card className="aboutme_card">
            <CardBody><CardText>
            <Markdown
              source={`
Dit is mijn persoonlijke website. Op deze website vind je mijn blog _(in aanbouw)_, mijn programmeerprojecten en resources die ik over de tijd heb verzameld.
           `} />
           </CardText></CardBody>
           </Card>

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
