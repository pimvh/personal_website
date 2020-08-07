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

    render() {
        return (
        <div>
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
        </div>
    );
    }
}
