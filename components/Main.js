import Head from 'next/head'
import React from 'react';

import '../styles.scss'
import Header from './Header'
import HeadCarousel from './Carousel'
import Navigation from './Navigation'
import Footer from './Footer'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.showFooter = !props.hideFooter;
    }
    render(){
        return (
        <div className='root'>
            <Header title={this.title || 'Pim van Helvoirt'} />
            <Navigation title={this.title} />
            <HeadCarousel />
            <div className= "panel padding-xm">
                <div className = "panel-body padding-xm">
                    <div className = 'main-container'>
                    {this.props.children}
                </div>
                </div>
            <div className='panel-footer' >
                {this.showFooter && <Footer />}
            </div>

            </div>
        </div>
    );
    }
}
