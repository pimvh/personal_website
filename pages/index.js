import Layout from '../components/MyLayout'
import React from 'react'
import Markdown from 'react-markdown';
import {
    Tooltip,
    Container, Row, Col,
    Card, CardTitle, CardBody, CardText} from 'reactstrap';

export default () => (
        <Layout>

        <Container fluid className='main'>

            <Col>
            <Row className='row'>
            <Card className="aboutme_card">
            <CardBody><CardText>
            <Markdown
              source={`
Dit is mijn persoonlijke website. Je vindt hierop links naar mijn social media, mijn blogposts en mijn projecten!
Je vindt [mijn contactpagina hier](/contact)!
           `} />
           </CardText></CardBody>
           </Card>
            </Row>
            </Col>

        </Container>

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

        </Layout>
)
