import useWindowDimensions from '../hooks/useWindowDimensions'
import {
    Row, Col,
    Nav, NavItem, NavLink
} from 'reactstrap';
import React from 'react'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (<Row className="nav_row"><Col className="nav_col">
        <Nav className="nav-menu">
        {/*<Nav vertical = {fitsPage()} className="nav-menu">*/}
            <a href="/"><img src="static/unicorn_icon.jpg" alt="Unicorn Icon by Sonja Cirakovic" className="nav_icon" /></a>
            {getPosts().map(post => (
                <PostLink key={post.id} post={post} highlight={this.title}/>
            ))}
        </Nav>
        </Col>
        </Row>);
    }
}

/*
helper functions for creating an index
*/
function getPosts() {
    return [
        { id: '/', title: 'Home'},
        { id: '/blog', title: 'Blog'},
        { id: '/projecten', title: 'Projecten'},
        { id: '/resources', title: 'Resources'},
        { id: '/overmij', title: 'Over mij'},
        { id: '/contact', title: 'Contact'}
    ];
}

function fitsPage(){

    const {height, width} = useWindowDimensions();

    if (width < 785){
        return true;
    }
    return false;
}

const PostLink = ({ post, highlight}) => (

    <NavItem>
        <NavLink href={`${post.id}`} className = {`${(post.title == highlight) ? "nav_active" : "nav_item"}`} > {post.title} </NavLink>
    </NavItem>
);
