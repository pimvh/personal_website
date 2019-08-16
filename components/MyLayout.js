import Header from './Header'

export default function Layout(props) {
  return (
    <div className='body'>
      <Header />
      {props.children}

    <style jsx global>{`

    .root {
        # position: absolute;
        top: 0;
        left: 0;
        heigth: 100%;
        width: 100%;
    }
    /***************************
    Header
    ***************************/

    # .jumbo {
        # width: 100%;
        # background-image: url('/static/photo_header_crop.jpg');
        # background-repeat: no-repeat;
        # background-size: cover;
        # max-height: 200px;
    # }

    .headCarousel {
        # nothing here yet
        # background-image: cover;
        # background-repeat: repeat;
        margin: 0px 30px 0px 0px;
        border: 3px solid #FFF;

    }
    .nav {
        margin: 10px 10 10px;
        padding: 20px 0px 0px;

    }
    .carousel-item > img {
        width: 100%;
        min-height: 100px;
        height: 350px;
        max-height: 400px;
        align-items:center;
    }

    .carousel-control-prev,.carousel-control-next {
        cursor:pointer;
    }

    /***************************
    Main container
    ***************************/

    }
    .main {
        margin: 10px 10px 20px 10px;
        padding: 10px 10px 10px 10px;
        # border: 1px solid #DDD;
        align-text: left;
    }

    .row {
        align-text: left;
        margin-bottom: 10px;
        max-width: 80%;
    }

    .cardtitle {
        font-weight: bold;
    }

    .resource_card {
        margin-bottom: 20px;
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
