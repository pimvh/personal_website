import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import i18nConfig from '../i18n.json';

const { locales } = i18nConfig;

export const Navigation = () => {

    const { t, lang } = useTranslation();

    const router = useRouter();

    function isActive(href) {

        if (router.pathname === href) {
            return 'active';
        }

        return '';
    }

    return (
            <>
            <header className="main-container header fixed">
    		{/* <!-- Nav Bar with Logo Area --> */}
        		<div className="flex-grid  navbar">
        			{/* <!-- Mobile Menu --> */ }
        			<input type="checkbox" id="mobileMenu" className="hide"></input>
        			<label id="mobileMenuLabel" className="mobile-menu left-side" htmlFor="mobileMenu">
        				<i className="hamburger"></i>
        				<label className="full-screen" htmlFor="mobileMenu"></label>
        			</label>

        			<div className="col-1 col-9-md logo">
                        <a href="/">
                        <Image src="/static/common/unicorn_icon.png" alt="Unicorn Icon by Sonja Cirakovic"
                         width={60} height={40} layout='intrinsic' />
                        </a>
        			</div>

        			<nav className="col-7 col-12-md navbar-right" id="topMenuNav">
        				<div className="navbar-links">
        					<input type="radio" className="hide" name="navbar-menu" id="navbarDropHide" defaultChecked></input>
                                <Link href="/" >
                                    <a className={isActive("/")}> {t("common:navhome")} </a>
                                </Link>
                                <Link href="/blog"  >
                                    <a className={isActive("/blog")}> {t("common:navblog")} </a>
                                </Link>
                                <Link href="/contact">
                                    <a  className={isActive("/contact")}> {t("common:navcontact")} </a>
                                </Link>
                                <Link href="/aboutme"  >
                                    <a className={isActive("/aboutme")}> {t("common:navaboutme")} </a>
                                </Link>

                                <Link href="/projects" >
                                    <a className={isActive("/projects")}> {t("common:navprojects")} </a>
                                </Link>

                                <Link href="/resources">
                                    <a className={isActive("/resources")}> {t("common:navresources")} </a>
                                </Link>
                        </div>



        			</nav>
                    <div id="mobileMenuLabel" className="mobile-menu right-side">
                    <LangFlag lang={lang} />
                    </div>

            </div>
    	    </header>
        <div className="fixed-nav-space" id="top"></div>
        </>
    );
};

const LangFlag = ({lang}) => {

    const { pathname } = useRouter();

    return (

        // href={pathname.replace(`/${lang}`, '') || '/'} locale={lang === 'en' ? "nl" : "en"}
        <Link href={'/'} locale={lang === 'en' ? "nl" : "en"} key={lang} >
            <a>
                <img src={`/static/common/${lang === 'en' ? 'netherlands' : 'united-kingdom'}-flag-icon-64.png`}
                 alt={lang === 'en' ? "Nederlandse vlag" : "Union Jack"} />
            </a>
        </Link>
    );

}

export default Navigation;
