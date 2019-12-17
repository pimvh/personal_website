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

    /***************************
    Main container
    ***************************/

    .MainContainer, .FooterContainer {
        padding: 30px 30px;
    }

    .ContentContainer {
        text-align: left;
        margin-left: 10px;
        margin-right: 10px;
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

    .nav_col {
        margin-left: 5px;
    }

    .nav_menu {
        display: grid;
        grid-template-columns: 200px 200px 200px 200px 200px 200px 200px;
        grid-gap: 10px;
    }

    .nav {

    }

    .nav_item, .nav_active {
        font-color: black;
        grid-span: 1;
        border: 1px;
        text-align: center;
        min-width: 120px;
        max-width: 180px;
        padding: 10px 10px;
        border-style: solid;
        border-radius: 10px;
    }

    .nav_link {
        color: black;
        font: 'Open Sans';
        font-size: 120%;
    }

    .nav_active {
        font-weight: bold;
        color: blue;
        text-decoration: underline;
    }

    .nav_link {
    }

    .nav_icon_col {
        margin-right: 30px;
        max-width: 150px;
        min-width: 80px;
        align: center;
    }

    .nav_icon {
        height: 45px;
        width: auto;
        margin-top: 10px;
    }

    /***************************
    Tables, list, links
    ***************************/

    .table {
        margin-top: 25px;
        margin-left: 10px;
        align-content: left;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
        margin: 5px 0;
    }

    // a {
    //     text-decoration: none;
    //     color: blue;
    // }

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
