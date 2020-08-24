import Header from './header';
import HeadCarousel from './carousel';
import Navigation from './navigation';
import Footer from './footer';

import { Router } from 'next/router';

import { LocaleProvider } from "../context/localeContext";
import getInitialLocale from "../lib/translations/getInitialLocale";

import isLocale from "../lib/translations/isLocale";

export default function Main ({title, children, showFooter}) {

    return (
        <>
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
        </>
    );
}
