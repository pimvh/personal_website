import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'
import React, { Component, title } from 'react';

import {
    Container,
    Row, Col
} from 'reactstrap';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.showFooter = !props.hideFooter;
        this.state = {
            isShow: true,
        };
    }

    render(){
        return (
        <div className='root'>
            <Header title={this.title || 'Pim van Helvoirt'} />
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
