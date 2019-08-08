// import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
// import bgimg from './achtergrond.png'
import { Jumbotron, Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

export default function ({children, title='Pim van Helvoirt'}) {
        return (
        <div>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content="Persoonlijke website van mij" />
            <meta name="author" content="Pim van Helvoirt" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            // Latest compiled and minified CSS
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>

            // jQuery library
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

            // Popper JS
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

            // Latest compiled JavaScript
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

            <title>{title}</title>

        </Head>

        <Jumbotron fluid className="jumbo"  >
        {/*
            background-color: blue;
            <img src=" alt="my image" />
            // TODO: Achtergrond plaatje fixen
            {console.log(bgimg)}
            https://stackoverflow.com/questions/34582405/react-wont-load-local-images
            style= {{ backgroundImage: require()}}

            < img src={bgimg} alt="Asdf"/>

        */}

        </Jumbotron>

        <Nav className="nav-menu">

            <img src="static/unicorn_icon.jpg" alt="Unicorn Icon by Sonja Cirakovic" className="nav_icon" />
            {getPosts().map(post => (
                <PostLink key={post.id} post={post} />
            ))}

        </Nav>

        {children}

        </div>
    );
}

function getPosts() {
    return [
        { id: '/', title: 'Home'},
        {id: '/blog', title: 'Blog'},
        { id: '/projecten', title: 'Projecten'},
        { id: '/resources', title: 'Resources'},
        { id: '/overmij', title: 'Over mij'},
        { id: '/contact', title: 'Contact'}
    ];
}

const PostLink = ({ post }) => (

    <NavItem>
        <NavLink href={`${post.id}`} >{post.title}</NavLink>

    </NavItem>
);
