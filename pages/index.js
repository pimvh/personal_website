import Layout from '../components/MyLayout'
import React from 'react'
import Markdown from 'react-markdown';
import {
    Container, Row, Col } from 'reactstrap';

export default () => (
        <Layout>

        <Container fluid className='main'>

            <Col>
            <Row className='row'>
            <Markdown
              source={`
Dit is mijn persoonlijke website. Je vindt hierop links naar mijn social media profielen en mijn blogposts!
Je vindt [mijn contactpagina hier](/contact)!
           `} />
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
