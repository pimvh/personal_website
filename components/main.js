import Header from './header';
import HeadCarousel from './carousel';
import Navigation from './navigation';
import Footer from './footer';

import { Router } from 'next/router';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        // TO DO
        this.showFooter = props.hideFooter;
    }

    render() {

        return (
            <>
            <Header title={this.title || 'Pim van Helvoirt'} />
            <div className='root' >
                <Navigation title={this.title} />
                <HeadCarousel />
                <div className= "panel padding-xm">
                    <div className = "panel-body padding-xm">
                        <div className = 'main-container'>

                        {this.props.children}

                        </div>
                    </div>
                </div>
                <div className='panel-footer' >
                    {this.showFooter && <Footer />}
                </div>
            </div>
            </>
        );
    }
}
