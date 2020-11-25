import React from 'react';
import HeadCarousel from './carousel';
import Navigation from './navigation';
import Footer from './footer';

import { Router } from 'next/router';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.noFooter = props.noFooter;
    }

    render() {

        return (
            <>

            <div className='root' >
                <Navigation />
                <HeadCarousel />
                <div className= "panel padding-xm">
                    <div className = "panel-body padding-xm">
                        <div className = 'main-container'>

                        {this.props.children}

                        </div>
                    </div>
                </div>
                <div className='panel-footer' >
                    {<Footer />}
                </div>
            </div>
            </>
        );
    }
}
