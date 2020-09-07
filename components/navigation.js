import React from 'react';
import Link from 'next-translate/Link';

import useTranslation from 'next-translate/useTranslation';

export const Navigation = () => {

    const { t, lang } = useTranslation();

    return (
            <>
            <header className="main-container header fixed ">
    		{/* <!-- Nav Bar with Logo Area --> */}
        		<div className="flex-grid  navbar">
        			{/* <!-- Mobile Menu --> */ }
        			<input type="checkbox" id="mobileMenu" className="hide"></input>
        			<label id="mobileMenuLabel" className="mobile-menu left-side" htmlFor="mobileMenu">
        				<i className="hamburger"></i>
        				<label className="full-screen" htmlFor="mobileMenu"></label>
        			</label>
        			<div className="col-2 col-10-md logo">
                        <a href="/">
                        <img src="/static/unicorn_icon.jpg" alt="Unicorn Icon by Sonja Cirakovic" className="logo" />
                        </a>
        			</div>

        			<nav className="col-7 col-12-md navbar-right" id="topMenuNav">
        				<div className="navbar-links">
        					<input type="radio" className="hide" name="navbar-menu" id="navbarDropHide" defaultChecked></input>
                                <Link href="/" >
                                    <a> {t("common:navhome")} </a>
                                </Link>
                                <Link href="/blog" >
                                    <a> {t("common:navblog")} </a>
                                </Link>
                                <Link href="/contact" >
                                    <a> {t("common:navcontact")} </a>
                                </Link>
                                <Link href="/aboutme" >
                                    <a> {t("common:navaboutme")} </a>
                                </Link>

                                <Link href="/projects" >
                                    <a> {t("common:navprojects")} </a>
                                </Link>
                        </div>
        			</nav>

                    <div>
                    <LangFlag lang={lang} />
                    </div>
        		</div>
    	    </header>
        <div className="fixed-nav-space" id="top"></div>
        </>
    );
};

const LangFlag = ({lang}) => {

    return (
        <Link href="/" lang={lang === 'en' ? "nl" : "en"} >
            <a>
                <img src={`/static/${lang === 'en' ? 'netherlands' : 'united-kingdom'}-flag-icon-64.png`}
                 alt={lang === 'en' ? "Nederlandse vlag" : "Union Jack"} />
            </a>
        </Link>
    );

}

export default Navigation;
