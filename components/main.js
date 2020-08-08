import Header from './header'
import HeadCarousel from './carousel'
import Navigation from './navigation'
import Footer from './footer'
import WithLocale from './withLocale'

export default function Main ({title, children, showFooter}) {

    return (
    <div>
    <Header title={title || 'Pim van Helvoirt'} />
    <div className='root' >
        <Navigation title={title} />
        <HeadCarousel />
        <div className= "panel padding-xm">
            <div className = "panel-body padding-xm">
                <div className = 'main-container'>

                {children}

                </div>
            </div>
        </div>
        <div className='panel-footer' >
            {showFooter && <Footer />}
        </div>
    </div>
    </div>
    );
}
