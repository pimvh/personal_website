import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
// import img from '../static/achtergrond.png'
import { Jumbotron, Container, Nav, NavItem, NavLink, Card,
         Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function ({children, title='Pim van Helvoirt'}) {
        return (
        <div>
        <Head>

            <meta charSet="UTF-8" />
            <meta name="description" content="Persoonlijke website van mij" />
            <meta name="author" content="Pim van Helvoirt" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <title>{title}</title>

            // Latest compiled and minified CSS
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>

            // jQuery library
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

            // Popper JS
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

            // Latest compiled JavaScript
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

        </Head>
        <div className="jumbo" >
            <Jumbotron fluid>
            </Jumbotron>
        </div>

        <Nav tabs>

            {getPosts().map(post => (
                <PostLink key={post.id} post={post} />
            ))}

        </Nav>

        {children}

        <style jsx global>{`

        h1, a {
            font-family: 'Arial';
        }

        ul {
            padding: 0;
        }
        li {
            list-style: none;
            margin: 5px 0;
        }
        a {
            text-decoration: none;
            color: blue;
        }

        a:hover {
            opacity: 0.6;
        }

        .jumbo {
            background-color: red
        }
        `}</style>

        </div>

    );
}

function getPosts() {
    return [
        { id: '/', title: 'Home'},
        { id: '/contact', title: 'Contact'},
        { id: '/about', title: 'About'}
    ];
}

const PostLink = ({ post }) => (

    <NavItem>
        <NavLink href={`${post.id}`} >{post.title}</NavLink>

    <style jsx>{`
      li {
          list-style: none;
          margin: 5px 0;
      }

      a {
          text-decoration: none;
          color: blue;
          font-family: 'Arial';
      }

      a:hover {
          opacity: 0.6;
      }
    `}</style>
    </NavItem>
);
