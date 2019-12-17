import useWindowDimensions from '../hooks/useWindowDimensions'
import {
    Row, Col,
    Nav, NavItem, NavLink
} from 'reactstrap';
import React from 'react'

export default function Navigation (props) {

    const PostLink = ({href, title, highlight}) => (
        <div className = {`${(title == highlight) ? "nav_active" : "nav_item"}`} >
        <a className="nav_link" href={`${href}`} > {title} </a>
        </div>
    );


    const {width, height} = useWindowDimensions();

    function fitsPage(width) {
        if (width > 785) {
            return false;
        } else {
            return true;
        }
    };

    function getPosts() {
        return [
            { id: '1', link: '/', title: 'Home'},
            { id: '2', link: '/blog', title: 'Blog'},
            { id: '3', link: '/projecten', title: 'Projecten'},
            { id: '4', link: '/resources', title: 'Resources'},
            { id: '5', link: '/overmij', title: 'Over mij'},
            { id: '6', link: '/contact', title: 'Contact'}
        ];
    };

    return (
            <div className="nav-menu">
            <div>
            <a href="/">
            <img src="static/unicorn_icon.jpg" alt="Unicorn Icon by Sonja Cirakovic" className="nav_icon" />
            </a></div>
            {   getPosts().map(post => (
                <PostLink key={post.id} href={post.link} title={post.title} highlight={props.title}/>
            ))}
            </div>
        );
}
