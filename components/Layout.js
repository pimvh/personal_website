import React from 'react';

export default function Layout() {
  return (
    <style jsx global>{`

    .root {
        # position: absolute;
        top: 0;
        left: 0;
        heigth: 100%;
        width: 100%;
        font: 'Open Sans';
    }

    /***************************
    Header
    ***************************/

    .Header_container {
        padding: 0px;
    }

    .carousel_col {
        padding: 0px;
    }

    .carousel-item > img {
        width: 100%;
        min-height: 100px;
        object-fit: cover;
        max-height: 300px;
        align-items: center;
    }

    .carousel-control-prev,.carousel-control-next {
        cursor: pointer;
    }

    /***************************
    Main container
    ***************************/

    .MainContainer, .FooterContainer {
        padding: 30px 30px;
    }

    .ContentContainer {
        text-align: left;
        margin-left: 10px;
    }



    .upper_page_text {
        margin-bottom: 50px;
    }

    .general_card {
        border: 0px;
    }

    .cardtitle {
        font-weight: bold;
    }

    .resource_card, .project_card {
        margin-bottom: 20px;
        margin-left: 10px;
    }

    /* projecten */

    .project_container {
        padding: 0;
    }

    .project_button {
        margin-bottom: 30px;
        margin-left: 20px;
    }

    /***************************
    Footer
    ***************************/
    .FooterCard {
        padding-bottom: 10px;
        border: 0px;
        width: 100%;
        align-content: center;
    }

    /***************************
    Navigation Menu
    ***************************/

    .nav_row {
        margin: 60px 0px 60px 0px;
    }

    .nav_col {
    }

    .nav {
        font: 'Open Sans';
        font-size: 120%;
        padding-left: 30px;

    }

    .nav_item, .nav_active {
        color: black;
        border: 1px;
        max-width: 150px;
        border-style: solid;
        margin-left: 10px;
    }

    .nav_active {
        font-weight: bold;
        color: blue;
        text-decoration: underline;
    }

    .nav_icon {
        height: 40px;
        width: auto;
        margin-top: 10px;
    }

    /***************************
    Tables, list, links
    ***************************/

    .table {
        margin-top: 25px;
        align-content: left;
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

    /***************************
    Images
    ***************************/

    .project_img {
        max-width: 80px;
        max-heidth: auto;
    }
    `}</style>
);
}
