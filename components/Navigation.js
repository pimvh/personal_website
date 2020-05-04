import useWindowDimensions from '../hooks/useWindowDimensions'
import React from 'react'

export default function Navigation (props) {

    const PostLink = ({href, title, highlight}) => (
        <a href className={`${(title == highlight) ? "active" : ""}`} href={`${href}`} > {title} </a>
    );


    const {width, height} = useWindowDimensions();

    function getPosts() {
        return [
            { id: '1', link: '/', title: 'Home'},
            { id: '2', link: '/overmij', title: 'Over mij'},
            { id: '3', link: '/blog', title: 'Blog'},
            { id: '4', link: '/projecten', title: 'Projecten'},
            { id: '5', link: '/resources', title: 'Resources'},
            { id: '6', link: '/contact', title: 'Contact'}
        ];
    };

    return (
        // TODO: http://purecssframework.com/components.php
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
    			<div className="col-2 col-12-md logo">
                    <a href="/">
                    <img src="static/unicorn_icon.jpg" alt="Unicorn Icon by Sonja Cirakovic" className="logo" />
                    </a>
    			</div>
    			<nav className="col-7 col-12-md navbar-right" id="topMenuNav">
    				<div className="navbar-links">
    					<input type="radio" className="hide" name="navbar-menu" id="navbarDropHide" defaultChecked></input>
                        {   getPosts().map(post => (
                            <PostLink key={post.id} href={post.link} title={post.title} highlight={props.title}
                             className=''/>
                        ))}
    				</div>
    			</nav>
    		</div>
    	</header>
        <div className="fixed-nav-space" id="top"></div>
        </div>);

}
