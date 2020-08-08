import useWindowDimensions from '../hooks/useWindowDimensions'
import ActiveLink from './activelink'
import LocaleSwitcher from './localeSwitcher'
import useTranslation from '../hooks/useTranslation'
import React from 'react'
import { useRouter } from 'next/router'

function Navigation ({ title }) {

    // console.log(lang)

    // var contact = (lang == 'en' | locale == undefined) ? "Contact Info" : "Contact"
    // var aboutme = (lang == 'en' | locale == undefined) ? "About Me" : "Over Mij"
    // var projects = (lang == 'en' | locale == undefined) ? "Projects" : "Projecten"

    return (
            <div>
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
                                <ActiveLink href="" > Home </ActiveLink>
                                <ActiveLink href="blog" >
                                    Blog
                                </ActiveLink>
                                <ActiveLink href="contact" >
                                    Contact
                                </ActiveLink>
                                <ActiveLink href="aboutme" >
                                    About Me
                                </ActiveLink>

                                <ActiveLink href="projects" >
                                    Projecten
                                </ActiveLink>
                        </div>
        			</nav>
                    <div className="col-3 col-1-md flag">
                        <LocaleSwitcher />
                    </div>
        		</div>

    	    </header>
        <div className="fixed-nav-space" id="top"></div>
        </div>);
}

export default Navigation
