import Head from 'next/head'
import React from 'react';

import Header from './Header'
import HeadCarousel from './Carousel'
import Navigation from './Navigation'
import Footer from './Footer'
import Layout from './Layout'

import {
    Container,
    Row, Col
} from 'reactstrap';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.showFooter = !props.hideFooter;
    }
    render(){
        return (
        <div className='root'>
            <div className = "Header_container">
            <Header title={this.title || 'Pim van Helvoirt'} />
            <HeadCarousel />
            <Navigation title={this.title} />
            </div>
            <Container fluid className = 'MainContainer'>
                <Row className ='ContentContainer'>
                    {this.props.children}
                </Row>
            </Container>
            <Container className = 'FooterContainer' >
                <Row className = 'ContentContainer'>
                        {this.showFooter && <Footer />}
                </Row>
            </Container>
            <Layout />
        </div>
    );
    }
}
