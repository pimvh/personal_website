import Head from 'next/head'
import React from 'react'
import {
    Jumbotron, Container,
    Row, Col,
    Nav, NavItem, NavLink,
    Carousel, CarouselItem, CarouselControl, CarouselIndicators,  CarouselCaption
} from 'reactstrap';

export default function ({children, title='Pim van Helvoirt'}) {
        return (
        <div className='root'>
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

        <HeadCarousel className="headCarousel" />

        {/*
        <Jumbotron fluid className="jumbo" ></Jumbotron>
        */}

        <Nav pills className="nav-menu">

            <a href="/index"><img src="static/unicorn_icon.jpg" alt="Unicorn Icon by Sonja Cirakovic" className="nav_icon" /></a>
            {getPosts().map(post => (
                <PostLink key={post.id} post={post} />
            ))}

        </Nav>

        {children}

        </div>
    );
}

/*
helper functions for creating an index
*/
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

const items = [
  {
    src: '/static/garden.png',
    altText: 'Garden',
    caption: ''
  },
  {
    src: '/static/snowymountains.png',
    altText: 'Sneeuwbergen',
    caption: ''
  },
  {
    src: '/static/dunes.png',
    altText: 'Duinen',
    caption: ''
  }
];

class HeadCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
