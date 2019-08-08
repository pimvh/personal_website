import Header from './Header'

export default function Layout(props) {
  return (
    <div className='body'>
      <Header />
      {props.children}

    <style jsx global>{`

    /***************************
    Main container
    ***************************/

    .jumbo {
        background-image: url('/static/photo_header_crop.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 180px;
    }

    .main {
        margin: 10px;
        padding: 10px;
        // border: 1px solid #DDD;
        align-text: left;
    }

    .row {
        align-text: left;
        margin-bottom: 10px;
    }

    .cardtitle {
        font-weight: bold;
    }

    .resource_card {
        margin: 10px;
    }

    /***************************
    Navigation Menu
    ***************************/

    .nav {
        margin-left: 10px;
        font: 'Open Sans';
        font-size: 120%;
    }

    .nav_icon {
        height: 30px;
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
    `}</style>

    </div>
);
}
